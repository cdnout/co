var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import deepClone from "deep-clone-simple";
import { css, customElement, html, internalProperty, LitElement, property, } from "lit-element";
import { nothing } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import "./lit-grid-item";
import { areLayoutsDifferent } from "./util/are-layouts-different";
import { condenseLayout } from "./util/condense-layout";
import { debounce } from "./util/debounce";
import { findLayoutBottom } from "./util/find-layout-bottom";
import { fireEvent } from "./util/fire-event";
import { fixLayoutBounds } from "./util/fix-layout-bounds";
import { getMasonryLayout } from "./util/get-masonry-layout";
import { installResizeObserver } from "./util/install-resize-observer";
import { moveItem } from "./util/move-item";
// TODO: Instead of resize handle being a different draggable element. Why not just add a second handle like the Drag and use that
let LitGridLayout = class LitGridLayout extends LitElement {
    constructor() {
        super(...arguments);
        this.sortStyle = "masonry";
        this.margin = [10, 10];
        this.containerPadding = [
            20,
            20,
        ];
        this.rowHeight = 30;
        this.columns = 12;
        this.dragDisabled = false;
        this.resizeDisabled = false;
        this.resizing = false;
        this.dragging = false;
        this._width = 0;
        this._layout = [];
    }
    get _layoutHeight() {
        const btm = findLayoutBottom(this._layout);
        return (btm * this.rowHeight +
            (btm - 1) * this.margin[1] +
            this.containerPadding[1] * 2);
    }
    disconnectedCallback() {
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => this._attachObserver());
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("layout")) {
            this._setupLayout();
        }
        else if (changedProps.has("columns")) {
            this._updateLayout(deepClone(this.layout));
        }
        this.style.height = `${this._layoutHeight}px`;
    }
    render() {
        var _a;
        if (!((_a = this._layout) === null || _a === void 0 ? void 0 : _a.length) || !this.itemRenderer) {
            return html ``;
        }
        return html `
      ${repeat(this._layout, (item) => item.key, (item) => {
            if (!item ||
                !this._layout.some((layoutItem) => layoutItem.key === item.key)) {
                return nothing;
            }
            return html `
            <lit-grid-item
              .width=${item.width}
              .height=${item.height}
              .posY=${item.posY}
              .posX=${item.posX}
              .minWidth=${item.minWidth || 1}
              .minHeight=${item.minHeight || 1}
              .maxWidth=${item.maxHeight}
              .maxHeight=${item.maxHeight}
              .key=${item.key}
              .parentWidth=${this._width}
              .columns=${this.columns}
              .rowHeight=${this.rowHeight}
              .margin=${this.margin}
              .containerPadding=${this.containerPadding}
              .isDraggable=${!this.dragDisabled}
              .isResizable=${!this.resizeDisabled}
              .resizeHandle=${this.resizeHandle}
              .dragHandle=${this.dragHandle}
              @resizeStart=${this._itemResizeStart}
              @resize=${this._itemResize}
              @resizeEnd=${this._itemResizeEnd}
              @dragStart=${this._itemDragStart}
              @dragging=${this._itemDrag}
              @dragEnd=${this._itemDragEnd}
            >
              ${this.itemRenderer(item.key)}
            </lit-grid-item>
          `;
        })}
      ${this._renderPlaceHolder()}
    `;
    }
    _setupLayout() {
        if (!this.layout) {
            throw new Error("Missing layout");
        }
        // Dirty check to avoid endless cycles
        if (areLayoutsDifferent(this.layout, this._layout)) {
            this._updateLayout(this.layout, true);
            fireEvent(this, "layout-changed", { layout: this._layout });
        }
    }
    _updateLayout(layout, fix = false, style = this.sortStyle) {
        if (style === "masonry") {
            this._layout = getMasonryLayout(layout, this.columns);
        }
        else {
            const newLayout = fix ? fixLayoutBounds(layout, this.columns) : layout;
            this._layout = condenseLayout(newLayout);
        }
    }
    _itemResizeStart(ev) {
        this._oldItemIndex = this._layout.findIndex((item) => item.key === ev.currentTarget.key);
        this._placeholder = this._layout[this._oldItemIndex];
        this._oldItemLayout = this._layout[this._oldItemIndex];
    }
    _itemResize(ev) {
        if (!this._oldItemLayout || this._oldItemIndex === undefined) {
            return;
        }
        const { newWidth, newHeight } = ev.detail;
        const newItemLayout = Object.assign(Object.assign({}, this._oldItemLayout), { width: newWidth, height: newHeight });
        this._layout[this._oldItemIndex] = newItemLayout;
        this._placeholder = newItemLayout;
        this._updateLayout(this._layout, false, "default");
    }
    _itemResizeEnd() {
        const newItemLayout = this._layout.find((item) => { var _a; return item.key === ((_a = this._oldItemLayout) === null || _a === void 0 ? void 0 : _a.key); });
        if (!this.layout || this._oldItemLayout === newItemLayout) {
            return;
        }
        fireEvent(this, "item-changed", {
            item: this._placeholder,
            layout: this._layout,
        });
        this._placeholder = undefined;
        this._oldItemLayout = undefined;
        this._oldItemIndex = undefined;
    }
    _itemDragStart(ev) {
        const itemIndex = this._layout.findIndex((item) => item.key === ev.currentTarget.key);
        this._placeholder = this._layout[itemIndex];
        this._oldItemLayout = this._layout.find((item) => item.key === ev.currentTarget.key);
    }
    _itemDrag(ev) {
        if (!this._oldItemLayout) {
            return;
        }
        ev.stopPropagation();
        ev.preventDefault();
        const { newPosX, newPosY } = ev.detail;
        if (this._prevPosX === newPosX && this._prevPosY === newPosY) {
            return;
        }
        this._prevPosX = newPosX;
        this._prevPosY = newPosY;
        const newLayout = moveItem([...this._layout], Object.assign({}, this._oldItemLayout), newPosX, newPosY, this.columns, true);
        this._updateLayout(newLayout, false, "default");
        this._placeholder = this._layout.find((item) => item.key === this._oldItemLayout.key);
    }
    _itemDragEnd() {
        const newItemLayout = this._layout.find((item) => item.key === this._oldItemLayout.key);
        if (!this.layout || this._oldItemLayout === newItemLayout) {
            return;
        }
        fireEvent(this, "item-changed", {
            item: this._placeholder,
            layout: this._layout,
        });
        this._placeholder = undefined;
        this._oldItemLayout = undefined;
        this._oldItemIndex = undefined;
    }
    _renderPlaceHolder() {
        if (!this._placeholder) {
            return html ``;
        }
        return html `
      <lit-grid-item
        .width=${this._placeholder.width}
        .height=${this._placeholder.height}
        .posY=${this._placeholder.posY}
        .posX=${this._placeholder.posX}
        .key=${this._placeholder.key}
        .parentWidth=${this.clientWidth}
        .columns=${this.columns}
        .rowHeight=${this.rowHeight}
        .margin=${this.margin}
        .containerPadding=${this.containerPadding}
        .isDraggable=${false}
        .isResizable=${false}
        placeholder
      >
      </lit-grid-item>
    `;
    }
    async _attachObserver() {
        if (!this._resizeObserver) {
            await installResizeObserver();
            this._resizeObserver = new ResizeObserver(debounce(() => this._measureLayoutWidth(), 250, false));
        }
        this._resizeObserver.observe(this);
    }
    _measureLayoutWidth() {
        if (this.offsetParent) {
            this._width = this.offsetParent.clientWidth;
        }
    }
    static get styles() {
        return css `
      :host {
        display: block;
        position: relative;
      }

      :host([dragging]),
      :host([resizing]),
      :host([dragging]) lit-grid-item,
      :host([resizing]) lit-grid-item {
        user-select: none;
        touch-action: none;
      }
    `;
    }
};
__decorate([
    property({ type: Array })
], LitGridLayout.prototype, "layout", void 0);
__decorate([
    property()
], LitGridLayout.prototype, "sortStyle", void 0);
__decorate([
    property({ type: Array })
], LitGridLayout.prototype, "margin", void 0);
__decorate([
    property({ type: Array })
], LitGridLayout.prototype, "containerPadding", void 0);
__decorate([
    property({ type: Number })
], LitGridLayout.prototype, "rowHeight", void 0);
__decorate([
    property({ type: Number })
], LitGridLayout.prototype, "columns", void 0);
__decorate([
    property({ type: Boolean })
], LitGridLayout.prototype, "dragDisabled", void 0);
__decorate([
    property({ type: Boolean })
], LitGridLayout.prototype, "resizeDisabled", void 0);
__decorate([
    property({ attribute: false })
], LitGridLayout.prototype, "resizeHandle", void 0);
__decorate([
    property({ attribute: false })
], LitGridLayout.prototype, "dragHandle", void 0);
__decorate([
    property({ type: Boolean, attribute: true, reflect: true })
], LitGridLayout.prototype, "resizing", void 0);
__decorate([
    property({ type: Boolean, attribute: true, reflect: true })
], LitGridLayout.prototype, "dragging", void 0);
__decorate([
    property()
], LitGridLayout.prototype, "itemRenderer", void 0);
__decorate([
    internalProperty()
], LitGridLayout.prototype, "_width", void 0);
__decorate([
    internalProperty()
], LitGridLayout.prototype, "_layout", void 0);
__decorate([
    internalProperty()
], LitGridLayout.prototype, "_placeholder", void 0);
LitGridLayout = __decorate([
    customElement("lit-grid-layout")
], LitGridLayout);
export { LitGridLayout };
//# sourceMappingURL=lit-grid-layout.js.map