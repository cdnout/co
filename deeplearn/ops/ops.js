"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_ops_1 = require("./array_ops");
var batchnorm_1 = require("./batchnorm");
var binary_ops_1 = require("./binary_ops");
var compare_1 = require("./compare");
var concat_1 = require("./concat");
var conv_1 = require("./conv");
var image_ops_1 = require("./image_ops");
var logical_ops_1 = require("./logical_ops");
var lrn_1 = require("./lrn");
var lstm_1 = require("./lstm");
var matmul_1 = require("./matmul");
var norm_1 = require("./norm");
var pool_1 = require("./pool");
var reduction_ops_1 = require("./reduction_ops");
var reverse_1 = require("./reverse");
var slice_1 = require("./slice");
var softmax_1 = require("./softmax");
var transpose_1 = require("./transpose");
var unary_ops_1 = require("./unary_ops");
exports.batchNormalization = batchnorm_1.BatchNormOps.batchNormalization;
exports.batchNormalization2d = batchnorm_1.BatchNormOps.batchNormalization2d;
exports.batchNormalization3d = batchnorm_1.BatchNormOps.batchNormalization3d;
exports.batchNormalization4d = batchnorm_1.BatchNormOps.batchNormalization4d;
exports.concat = concat_1.ConcatOps.concat;
exports.concat1d = concat_1.ConcatOps.concat1d;
exports.concat2d = concat_1.ConcatOps.concat2d;
exports.concat3d = concat_1.ConcatOps.concat3d;
exports.concat4d = concat_1.ConcatOps.concat4d;
exports.conv1d = conv_1.ConvOps.conv1d;
exports.conv2d = conv_1.ConvOps.conv2d;
exports.conv2dTranspose = conv_1.ConvOps.conv2dTranspose;
exports.depthwiseConv2d = conv_1.ConvOps.depthwiseConv2d;
exports.matMul = matmul_1.MatmulOps.matMul;
exports.matrixTimesVector = matmul_1.MatmulOps.matrixTimesVector;
exports.outerProduct = matmul_1.MatmulOps.outerProduct;
exports.vectorTimesMatrix = matmul_1.MatmulOps.vectorTimesMatrix;
exports.avgPool = pool_1.PoolOps.avgPool;
exports.maxPool = pool_1.PoolOps.maxPool;
exports.minPool = pool_1.PoolOps.minPool;
exports.transpose = transpose_1.TransposeOps.transpose;
exports.reverse = reverse_1.ReverseOps.reverse;
exports.reverse1d = reverse_1.ReverseOps.reverse1d;
exports.reverse2d = reverse_1.ReverseOps.reverse2d;
exports.reverse3d = reverse_1.ReverseOps.reverse3d;
exports.reverse4d = reverse_1.ReverseOps.reverse4d;
exports.slice = slice_1.SliceOps.slice;
exports.slice1d = slice_1.SliceOps.slice1d;
exports.slice2d = slice_1.SliceOps.slice2d;
exports.slice3d = slice_1.SliceOps.slice3d;
exports.slice4d = slice_1.SliceOps.slice4d;
exports.argMax = reduction_ops_1.ReductionOps.argMax;
exports.argMin = reduction_ops_1.ReductionOps.argMin;
exports.logSumExp = reduction_ops_1.ReductionOps.logSumExp;
exports.max = reduction_ops_1.ReductionOps.max;
exports.mean = reduction_ops_1.ReductionOps.mean;
exports.min = reduction_ops_1.ReductionOps.min;
exports.moments = reduction_ops_1.ReductionOps.moments;
exports.sum = reduction_ops_1.ReductionOps.sum;
exports.equal = compare_1.CompareOps.equal;
exports.equalStrict = compare_1.CompareOps.equalStrict;
exports.greater = compare_1.CompareOps.greater;
exports.greaterStrict = compare_1.CompareOps.greaterStrict;
exports.greaterEqual = compare_1.CompareOps.greaterEqual;
exports.greaterEqualStrict = compare_1.CompareOps.greaterEqualStrict;
exports.less = compare_1.CompareOps.less;
exports.lessStrict = compare_1.CompareOps.lessStrict;
exports.lessEqual = compare_1.CompareOps.lessEqual;
exports.lessEqualStrict = compare_1.CompareOps.lessEqualStrict;
exports.notEqual = compare_1.CompareOps.notEqual;
exports.notEqualStrict = compare_1.CompareOps.notEqualStrict;
exports.logicalNot = logical_ops_1.LogicalOps.logicalNot;
exports.logicalAnd = logical_ops_1.LogicalOps.logicalAnd;
exports.logicalOr = logical_ops_1.LogicalOps.logicalOr;
exports.logicalXor = logical_ops_1.LogicalOps.logicalXor;
exports.where = logical_ops_1.LogicalOps.where;
exports.abs = unary_ops_1.UnaryOps.abs;
exports.acos = unary_ops_1.UnaryOps.acos;
exports.asin = unary_ops_1.UnaryOps.asin;
exports.atan = unary_ops_1.UnaryOps.atan;
exports.ceil = unary_ops_1.UnaryOps.ceil;
exports.clipByValue = unary_ops_1.UnaryOps.clipByValue;
exports.cos = unary_ops_1.UnaryOps.cos;
exports.cosh = unary_ops_1.UnaryOps.cosh;
exports.elu = unary_ops_1.UnaryOps.elu;
exports.exp = unary_ops_1.UnaryOps.exp;
exports.floor = unary_ops_1.UnaryOps.floor;
exports.leakyRelu = unary_ops_1.UnaryOps.leakyRelu;
exports.log = unary_ops_1.UnaryOps.log;
exports.neg = unary_ops_1.UnaryOps.neg;
exports.prelu = unary_ops_1.UnaryOps.prelu;
exports.relu = unary_ops_1.UnaryOps.relu;
exports.selu = unary_ops_1.UnaryOps.selu;
exports.sigmoid = unary_ops_1.UnaryOps.sigmoid;
exports.sin = unary_ops_1.UnaryOps.sin;
exports.sinh = unary_ops_1.UnaryOps.sinh;
exports.sqrt = unary_ops_1.UnaryOps.sqrt;
exports.square = unary_ops_1.UnaryOps.square;
exports.step = unary_ops_1.UnaryOps.step;
exports.tan = unary_ops_1.UnaryOps.tan;
exports.tanh = unary_ops_1.UnaryOps.tanh;
exports.add = binary_ops_1.BinaryOps.add;
exports.addStrict = binary_ops_1.BinaryOps.addStrict;
exports.div = binary_ops_1.BinaryOps.div;
exports.divStrict = binary_ops_1.BinaryOps.divStrict;
exports.maximum = binary_ops_1.BinaryOps.maximum;
exports.maximumStrict = binary_ops_1.BinaryOps.maximumStrict;
exports.minimum = binary_ops_1.BinaryOps.minimum;
exports.minimumStrict = binary_ops_1.BinaryOps.minimumStrict;
exports.mul = binary_ops_1.BinaryOps.mul;
exports.mulStrict = binary_ops_1.BinaryOps.mulStrict;
exports.pow = binary_ops_1.BinaryOps.pow;
exports.powStrict = binary_ops_1.BinaryOps.powStrict;
exports.sub = binary_ops_1.BinaryOps.sub;
exports.subStrict = binary_ops_1.BinaryOps.subStrict;
exports.norm = norm_1.NormOps.norm;
exports.cast = array_ops_1.ArrayOps.cast;
exports.clone = array_ops_1.ArrayOps.clone;
exports.fromPixels = array_ops_1.ArrayOps.fromPixels;
exports.ones = array_ops_1.ArrayOps.ones;
exports.onesLike = array_ops_1.ArrayOps.onesLike;
exports.zeros = array_ops_1.ArrayOps.zeros;
exports.zerosLike = array_ops_1.ArrayOps.zerosLike;
exports.rand = array_ops_1.ArrayOps.rand;
exports.randomNormal = array_ops_1.ArrayOps.randomNormal;
exports.truncatedNormal = array_ops_1.ArrayOps.truncatedNormal;
exports.randomUniform = array_ops_1.ArrayOps.randomUniform;
exports.reshape = array_ops_1.ArrayOps.reshape;
exports.squeeze = array_ops_1.ArrayOps.squeeze;
exports.tile = array_ops_1.ArrayOps.tile;
exports.gather = array_ops_1.ArrayOps.gather;
exports.oneHot = array_ops_1.ArrayOps.oneHot;
exports.linspace = array_ops_1.ArrayOps.linspace;
exports.range = array_ops_1.ArrayOps.range;
exports.buffer = array_ops_1.ArrayOps.buffer;
exports.fill = array_ops_1.ArrayOps.fill;
exports.tensor = array_ops_1.ArrayOps.tensor;
exports.scalar = array_ops_1.ArrayOps.scalar;
exports.tensor1d = array_ops_1.ArrayOps.tensor1d;
exports.tensor2d = array_ops_1.ArrayOps.tensor2d;
exports.tensor3d = array_ops_1.ArrayOps.tensor3d;
exports.tensor4d = array_ops_1.ArrayOps.tensor4d;
exports.print = array_ops_1.ArrayOps.print;
exports.expandDims = array_ops_1.ArrayOps.expandDims;
exports.stack = array_ops_1.ArrayOps.stack;
exports.pad = array_ops_1.ArrayOps.pad;
exports.pad1d = array_ops_1.ArrayOps.pad1d;
exports.pad2d = array_ops_1.ArrayOps.pad2d;
exports.pad3d = array_ops_1.ArrayOps.pad3d;
exports.pad4d = array_ops_1.ArrayOps.pad4d;
exports.basicLSTMCell = lstm_1.LSTMOps.basicLSTMCell;
exports.multiRNNCell = lstm_1.LSTMOps.multiRNNCell;
exports.softmax = softmax_1.SoftmaxOps.softmax;
exports.localResponseNormalization = lrn_1.LRNOps.localResponseNormalization;
var tensor_1 = require("../tensor");
var types_1 = require("../types");
[tensor_1.Tensor, types_1.Rank, tensor_1.Tensor3D, tensor_1.Tensor4D];
exports.losses = {
    softmaxCrossEntropy: softmax_1.SoftmaxOps.softmaxCrossEntropy
};
exports.image = {
    resizeBilinear: image_ops_1.ImageOps.resizeBilinear
};
