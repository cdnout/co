var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, css, } from "lit-element";
import { fireEvent } from "./util/fire-event";
import "./lit-resizable";
let LitResizableWrapper = class LitResizableWrapper extends LitElement {
    render() {
        return html `
      <lit-resizable
        @resize=${this._resize}
        @resizeStart=${this._resizeStart}
        @resizeEnd=${this._resizeEnd}
      >
        <slot></slot>
      </lit-resizable>
    `;
    }
    _resizeStart(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        fireEvent(this, "resizeStart");
    }
    _resize(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        const { width, height } = ev.detail;
        this.style.setProperty("--item-width", `${width}px`);
        this.style.setProperty("--item-height", `${height}px`);
        fireEvent(this, "resize", { width, height });
    }
    _resizeEnd(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        fireEvent(this, "resizeStart");
    }
    static get styles() {
        return css `
      :host {
        position: absolute;
        width: var(--item-width);
        height: var(--item-height);
      }

      lit-resizable {
        width: 100%;
        height: 100%;
      }
    `;
    }
};
LitResizableWrapper = __decorate([
    customElement("lit-resizable-wrapper")
], LitResizableWrapper);
export { LitResizableWrapper };
//# sourceMappingURL=lit-resizable-wrapper.js.map