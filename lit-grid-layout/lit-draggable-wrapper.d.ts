import { CSSResult, LitElement, TemplateResult } from "lit-element";
import "./lit-draggable";
export declare class LitDraggableWrapper extends LitElement {
    grid?: [number, number];
    handle?: string;
    private _startTop?;
    private _startLeft?;
    protected render(): TemplateResult;
    private _dragStart;
    private _drag;
    private _dragEnd;
    static get styles(): CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-draggable-wrapper": LitDraggableWrapper;
    }
}
//# sourceMappingURL=lit-draggable-wrapper.d.ts.map