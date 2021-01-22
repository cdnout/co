import { LitElement, TemplateResult } from "lit-element";
export declare class LitDraggable extends LitElement {
    grid?: [number, number];
    disabled: boolean;
    handle?: string;
    private startX?;
    private startY?;
    private _dragging;
    private _touchIdentifier?;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _dragStart;
    private _drag;
    private _dragEnd;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-draggable": LitDraggable;
    }
}
//# sourceMappingURL=lit-draggable.d.ts.map