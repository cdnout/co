var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property, } from "lit-element";
import "./lit-draggable";
import { fireEvent } from "./util/fire-event";
let LitDraggableWrapper = class LitDraggableWrapper extends LitElement {
    render() {
        return html `
      <div class="draggable-wrapper">
        <lit-draggable
          .handle=${this.handle}
          @dragging=${this._drag}
          @dragStart=${this._dragStart}
          @dragEnd=${this._dragEnd}
        >
          <slot></slot>
        </lit-draggable>
      </div>
    `;
    }
    _dragStart() {
        const rect = this.getBoundingClientRect();
        const parentRect = this.offsetParent.getBoundingClientRect();
        this._startLeft = rect.left - parentRect.left;
        this._startTop = rect.top - parentRect.top;
        fireEvent(this, "dragStart");
    }
    _drag(ev) {
        ev.stopPropagation();
        if (this._startLeft === undefined || this._startTop === undefined) {
            return;
        }
        const { deltaX, deltaY } = ev.detail;
        this.style.setProperty("--drag-x", `${Math.round(this._startLeft + deltaX)}px`);
        this.style.setProperty("--drag-y", `${Math.round(this._startTop + deltaY)}px`);
        fireEvent(this, "dragging", { deltaX, deltaY });
    }
    _dragEnd() {
        this._startLeft = undefined;
        this._startTop = undefined;
        fireEvent(this, "dragStart");
    }
    static get styles() {
        return css `
      .draggable-wrapper {
        position: absolute;
        transform: translate(var(--drag-x), var(--drag-y));
        touch-action: none;
        user-select: none;
      }
    `;
    }
};
__decorate([
    property({ type: Array })
], LitDraggableWrapper.prototype, "grid", void 0);
__decorate([
    property()
], LitDraggableWrapper.prototype, "handle", void 0);
LitDraggableWrapper = __decorate([
    customElement("lit-draggable-wrapper")
], LitDraggableWrapper);
export { LitDraggableWrapper };
//# sourceMappingURL=lit-draggable-wrapper.js.map