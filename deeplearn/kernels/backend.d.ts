import { Conv2DInfo } from '../ops/conv_util';
import { DataId, Tensor, Tensor1D, Tensor2D, Tensor3D, Tensor4D } from '../tensor';
import { DataType, TypedArray } from '../types';
export interface BackendTimingInfo {
    kernelMs: number;
}
export interface TensorStorage {
    read(dataId: DataId): Promise<TypedArray>;
    readSync(dataId: DataId): TypedArray;
    disposeData(dataId: DataId): void;
    write(dataId: DataId, values: TypedArray): void;
    fromPixels(pixels: ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, numChannels: number): Tensor3D;
    register(dataId: DataId, shape: number[], dtype: DataType): void;
    memory(): {
        unreliable: boolean;
    };
}
export interface BackendTimer {
    time(f: () => void): Promise<BackendTimingInfo>;
}
export interface KernelBackend extends TensorStorage, BackendTimer {
    matMul(a: Tensor2D, b: Tensor2D, transposeA: boolean, transposeB: boolean): Tensor2D;
    slice<T extends Tensor>(x: T, begin: number[], size: number[]): T;
    reverse<T extends Tensor>(a: T, axis: number[]): T;
    concat(a: Tensor2D, b: Tensor2D): Tensor2D;
    neg<T extends Tensor>(a: T): T;
    add(a: Tensor, b: Tensor): Tensor;
    subtract(a: Tensor, b: Tensor): Tensor;
    multiply(a: Tensor, b: Tensor): Tensor;
    divide(a: Tensor, b: Tensor): Tensor;
    sum(x: Tensor, axes: number[]): Tensor;
    argMin(x: Tensor, axes: number[]): Tensor;
    argMax(x: Tensor, axes: number[]): Tensor;
    equal(a: Tensor, b: Tensor): Tensor;
    notEqual(a: Tensor, b: Tensor): Tensor;
    less(a: Tensor, b: Tensor): Tensor;
    lessEqual(a: Tensor, b: Tensor): Tensor;
    greater(a: Tensor, b: Tensor): Tensor;
    greaterEqual(a: Tensor, b: Tensor): Tensor;
    logicalNot<T extends Tensor>(a: T): T;
    logicalAnd(a: Tensor, b: Tensor): Tensor;
    logicalOr(a: Tensor, b: Tensor): Tensor;
    logicalXor(a: Tensor, b: Tensor): Tensor;
    where(condition: Tensor, a: Tensor, b: Tensor, dtype: DataType): Tensor;
    topKValues<T extends Tensor>(x: T, k: number): Tensor1D;
    topKIndices(x: Tensor, k: number): Tensor1D;
    min(x: Tensor, axes: number[]): Tensor;
    minimum(a: Tensor, b: Tensor): Tensor;
    max(x: Tensor, axes: number[]): Tensor;
    maximum(a: Tensor, b: Tensor): Tensor;
    ceil<T extends Tensor>(x: T): T;
    floor<T extends Tensor>(x: T): T;
    pow<T extends Tensor>(a: T, b: Tensor): T;
    exp<T extends Tensor>(x: T): T;
    log<T extends Tensor>(x: T): T;
    sqrt<T extends Tensor>(x: T): T;
    square<T extends Tensor>(x: T): T;
    relu<T extends Tensor>(x: T): T;
    elu<T extends Tensor>(x: T): T;
    eluDer<T extends Tensor>(x: T): T;
    selu<T extends Tensor>(x: T): T;
    leakyRelu<T extends Tensor>(x: T, alpha: number): T;
    prelu<T extends Tensor>(x: T, alpha: T): T;
    preluDer<T extends Tensor>(x: T, alpha: T): T;
    int<T extends Tensor>(x: T): T;
    clip<T extends Tensor>(x: T, min: number, max: number): T;
    abs<T extends Tensor>(x: T): T;
    sigmoid<T extends Tensor>(x: T): T;
    sin<T extends Tensor>(x: T): T;
    cos<T extends Tensor>(x: T): T;
    tan<T extends Tensor>(x: T): T;
    asin<T extends Tensor>(x: T): T;
    acos<T extends Tensor>(x: T): T;
    atan<T extends Tensor>(x: T): T;
    sinh<T extends Tensor>(x: T): T;
    cosh<T extends Tensor>(x: T): T;
    tanh<T extends Tensor>(x: T): T;
    step<T extends Tensor>(x: T, alpha: number): T;
    conv2d(x: Tensor4D, filter: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    conv2dDerInput(dy: Tensor4D, filter: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    conv2dDerFilter(x: Tensor4D, dY: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    depthwiseConv2D(input: Tensor4D, filter: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    maxPool(x: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    maxPoolBackprop(dy: Tensor4D, x: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    minPool(x: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    avgPool(x: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    avgPoolBackprop(dy: Tensor4D, x: Tensor4D, convInfo: Conv2DInfo): Tensor4D;
    tile<T extends Tensor>(x: T, reps: number[]): T;
    pad<T extends Tensor>(x: T, paddings: Array<[number, number]>, constantValue: number): T;
    transpose<T extends Tensor>(x: T, perm: number[]): T;
    gather<T extends Tensor>(x: T, indices: Tensor1D, axis: number): T;
    resizeBilinear(x: Tensor4D, newHeight: number, newWidth: number, alignCorners: boolean): Tensor4D;
    batchNormalization4D(x: Tensor4D, mean: Tensor4D | Tensor1D, variance: Tensor4D | Tensor1D, varianceEpsilon: number, scale: Tensor4D | Tensor1D, offset: Tensor4D | Tensor1D): Tensor4D;
    localResponseNormalization4D(x: Tensor4D, radius: number, bias: number, alpha: number, beta: number, normRegion: 'acrossChannels' | 'withinChannel'): Tensor4D;
    multinomial(probabilities: Tensor2D, numSamples: number, seed: number): Tensor2D;
    oneHot(indices: Tensor1D, depth: number, onValue: number, offValue: number): Tensor2D;
    dispose(): void;
}
