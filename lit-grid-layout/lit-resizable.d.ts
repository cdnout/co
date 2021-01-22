import { CSSResult, LitElement, TemplateResult } from "lit-element";
import "./lit-draggable";
export declare class LitResizable extends LitElement {
    handle?: HTMLElement;
    disabled: boolean;
    private startWidth?;
    private startHeight?;
    protected render(): TemplateResult;
    private _resizeStart;
    private _resize;
    private _resizeEnd;
    static get styles(): CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-resizable": LitResizable;
    }
}
//# sourceMappingURL=lit-resizable.d.ts.map