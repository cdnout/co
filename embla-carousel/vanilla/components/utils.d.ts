export declare function map(value: number, iStart: number, iStop: number, oStart: number, oStop: number): number;
export declare function arrayFromCollection(nodeList: HTMLCollection): HTMLElement[];
export declare function debounce(callback: () => void, time: number): () => void;
export declare function roundToDecimals(decimalPoints: number): (n: number) => number;
export declare function groupArray<GenericType>(array: GenericType[], size: number): GenericType[][];
export declare function arrayKeys<GenericType>(array: GenericType): number[];
export declare function removeClass(node: HTMLElement, className: string): void;
export declare function addClass(node: HTMLElement, className: string): void;
