import { CSSResult, LitElement, PropertyValues, TemplateResult } from "lit-element";
import "./lit-draggable";
import "./lit-resizable";
export declare class LitGridItem extends LitElement {
    width: number;
    height: number;
    posX: number;
    posY: number;
    rowHeight: number;
    columns: number;
    parentWidth: number;
    margin: [number, number];
    containerPadding: [number, number];
    minWidth: number;
    minHeight: number;
    maxWidth?: number;
    maxHeight?: number;
    isDraggable: boolean;
    isResizable: boolean;
    private _isDragging;
    private _isResizing;
    private _firstLayoutFinished;
    resizeHandle?: HTMLElement;
    dragHandle?: string;
    key: string;
    private gridItem;
    private _itemTopPX?;
    private _itemLeftPX?;
    private _itemWidthPX?;
    private _itemHeightPX?;
    private _startTop?;
    private _startLeft?;
    private _startPosX?;
    private _startPosY?;
    private _minWidthPX?;
    private _maxWidthPX?;
    private _minHeightPX?;
    private _maxHeightPX?;
    private _fullColumnWidth?;
    private _fullRowHeight?;
    private _columnWidth?;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _resizeStart;
    private _resize;
    private _resizeEnd;
    private _dragStart;
    private _drag;
    private _dragEnd;
    static get styles(): CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-grid-item": LitGridItem;
    }
}
//# sourceMappingURL=lit-grid-item.d.ts.map