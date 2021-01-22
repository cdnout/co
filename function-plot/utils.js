"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linspace_1 = __importDefault(require("linspace"));
const logspace_1 = __importDefault(require("logspace"));
const log10_1 = __importDefault(require("log10"));
const globals_1 = __importDefault(require("./globals"));
const utils = {
    isValidNumber: function (v) {
        return typeof v === 'number' && !isNaN(v);
    },
    space: function (chart, range, n) {
        const lo = range[0];
        const hi = range[1];
        if (chart.options.xAxis.type === 'log') {
            return logspace_1.default(log10_1.default(lo), log10_1.default(hi), n);
        }
        // default is linear
        return linspace_1.default(lo, hi, n);
    },
    getterSetter: function (config, option) {
        const me = this;
        this[option] = function (value) {
            if (!arguments.length) {
                return config[option];
            }
            config[option] = value;
            return me;
        };
    },
    sgn: function (v) {
        if (v < 0) {
            return -1;
        }
        if (v > 0) {
            return 1;
        }
        return 0;
    },
    color: function (data, index) {
        return data.color || globals_1.default.COLORS[index].hex();
    }
};
exports.default = utils;
//# sourceMappingURL=utils.js.map