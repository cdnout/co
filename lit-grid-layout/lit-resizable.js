var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property, svg, } from "lit-element";
import "./lit-draggable";
import { fireEvent } from "./util/fire-event";
let LitResizable = class LitResizable extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    render() {
        return html `
      <slot></slot>

      ${this.disabled
            ? ""
            : html `
            <lit-draggable
              @dragging=${this._resize}
              @dragStart=${this._resizeStart}
              @dragEnd=${this._resizeEnd}
            >
              ${!this.handle
                ? svg `
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon-tabler-arrows-diagonal-2"
                      viewBox="0 0 24 24"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="16 20 20 20 20 16" />
                      <line x1="14" y1="14" x2="20" y2="20" />
                      <polyline points="8 4 4 4 4 8" />
                      <line x1="4" y1="4" x2="10" y2="10" />
                    </svg>
                  `
                : html `${this.handle}`}
            </lit-draggable>
          `}
    `;
    }
    _resizeStart(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.startWidth = this.clientWidth;
        this.startHeight = this.clientHeight;
        fireEvent(this, "resizeStart");
    }
    _resize(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.startWidth === undefined || this.startHeight === undefined) {
            return;
        }
        const { deltaX, deltaY } = ev.detail;
        if (deltaY === 0 && deltaX === 0) {
            return;
        }
        const width = this.startWidth + deltaX;
        const height = this.startHeight + deltaY;
        fireEvent(this, "resize", {
            width,
            height,
            deltaX,
            deltaY,
        });
    }
    _resizeEnd(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.startWidth = undefined;
        this.startHeight = undefined;
        fireEvent(this, "resizeEnd");
    }
    static get styles() {
        return css `
      :host {
        position: relative;
        display: block;
      }

      lit-draggable {
        position: absolute;
        left: var(--resize-handle-position-left, unset);
        top: var(--resize-handle-postion-top, unset);
        bottom: var(--resize-handle-position-bottom, 0);
        right: var(--resize-handle-postion-right, 0);
        width: var(--resize-handle-size, 18px);
        height: var(--resize-handle-size, 18px);
        z-index: var(--resize-handle-z-index, 5);
        opacity: var(--resize-handle-opacity, 1);
        user-select: none;
      }

      .icon-tabler-arrows-diagonal-2 {
        width: 100%;
        height: 100%;
        stroke-width: 1.5;
        stroke: #607d8b;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        cursor: se-resize;
      }
    `;
    }
};
__decorate([
    property({ attribute: false })
], LitResizable.prototype, "handle", void 0);
__decorate([
    property({ type: Boolean })
], LitResizable.prototype, "disabled", void 0);
LitResizable = __decorate([
    customElement("lit-resizable")
], LitResizable);
export { LitResizable };
//# sourceMappingURL=lit-resizable.js.map