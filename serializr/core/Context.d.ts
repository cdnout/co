import { ModelSchema } from "../api/types";
export default class Context<T = any> {
    readonly parentContext: Context<any> | undefined;
    readonly modelSchema: ModelSchema<T>;
    readonly json: any;
    private readonly onReadyCb;
    private isRoot;
    private pendingCallbacks;
    private pendingRefsCount;
    target: any;
    private hasError;
    rootContext: Context<any>;
    args: any;
    private pendingRefs;
    private resolvedRefs;
    constructor(parentContext: Context<any> | undefined, modelSchema: ModelSchema<T>, json: any, onReadyCb: (err?: any, value?: T) => void, customArgs?: any[]);
    createCallback(fn: (value: T) => void): (err?: any, value?: T | undefined) => void;
    await(modelSchema: ModelSchema<any>, uuid: string, callback: (err?: any, value?: any) => void): undefined;
    resolve(modelSchema: ModelSchema<any>, uuid: string, value: any): void;
    setTarget(target: T): void;
    cancelAwaits(): void;
}
export declare function getTargetContext(target: any): any;
