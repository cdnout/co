import { LitElement, TemplateResult, CSSResult } from "lit-element";
import "./lit-resizable";
export declare class LitResizableWrapper extends LitElement {
    protected render(): TemplateResult;
    private _resizeStart;
    private _resize;
    private _resizeEnd;
    static get styles(): CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-resizable-wrapper": LitResizableWrapper;
    }
}
//# sourceMappingURL=lit-resizable-wrapper.d.ts.map