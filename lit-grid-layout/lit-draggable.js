var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property, } from "lit-element";
import { fireEvent } from "./util/fire-event";
import { getMouseTouchLocation } from "./util/get-mouse-touch-location";
import { getTouchIdentifier } from "./util/get-touch-identifier";
import { matchesSelectorAndParentsTo } from "./util/match-selector";
let LitDraggable = class LitDraggable extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this._dragging = false;
    }
    firstUpdated() {
        this.addEventListener("mousedown", this._dragStart.bind(this), {
            capture: true,
            passive: false,
        });
        this.addEventListener("touchstart", this._dragStart.bind(this), {
            capture: true,
            passive: false,
        });
        document.addEventListener("mousemove", this._drag.bind(this), {
            capture: true,
            passive: false,
        });
        document.addEventListener("touchmove", this._drag.bind(this), {
            capture: true,
            passive: false,
        });
        document.addEventListener("mouseup", this._dragEnd.bind(this), {
            capture: true,
            passive: false,
        });
        document.addEventListener("touchcancel", this._dragEnd.bind(this), {
            capture: true,
            passive: false,
        });
        document.addEventListener("touchend", this._dragEnd.bind(this), {
            capture: true,
            passive: false,
        });
    }
    render() {
        return html `<slot></slot>`;
    }
    _dragStart(ev) {
        if ((ev.type.startsWith("mouse") && ev.button !== 0) ||
            this.disabled) {
            return;
        }
        if (this.handle &&
            !matchesSelectorAndParentsTo(ev, this.handle, this.offsetParent)) {
            return;
        }
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.type === "touchstart") {
            this._touchIdentifier = getTouchIdentifier(ev);
        }
        const pos = getMouseTouchLocation(ev, this._touchIdentifier);
        if (!pos) {
            return;
        }
        this.startX = pos.x;
        this.startY = pos.y;
        this._dragging = true;
        fireEvent(this, "dragStart", {
            startX: this.startX,
            startY: this.startY,
        });
    }
    _drag(ev) {
        if (!this._dragging || this.disabled) {
            return;
        }
        ev.preventDefault();
        ev.stopPropagation();
        const pos = getMouseTouchLocation(ev, this._touchIdentifier);
        if (!pos) {
            return;
        }
        let deltaX = pos.x - this.startX;
        let deltaY = pos.y - this.startY;
        if (this.grid) {
            deltaX = Math.round(deltaX / this.grid[0]) * this.grid[0];
            deltaY = Math.round(deltaY / this.grid[1]) * this.grid[1];
        }
        if (!deltaX && !deltaY) {
            return;
        }
        fireEvent(this, "dragging", {
            deltaX,
            deltaY,
        });
    }
    _dragEnd(ev) {
        if (!this._dragging || this.disabled) {
            return;
        }
        ev.preventDefault();
        ev.stopPropagation();
        this._touchIdentifier = undefined;
        this._dragging = false;
        fireEvent(this, "dragEnd");
    }
};
__decorate([
    property({ type: Array })
], LitDraggable.prototype, "grid", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LitDraggable.prototype, "disabled", void 0);
__decorate([
    property()
], LitDraggable.prototype, "handle", void 0);
LitDraggable = __decorate([
    customElement("lit-draggable")
], LitDraggable);
export { LitDraggable };
//# sourceMappingURL=lit-draggable.js.map