import { Chart } from './index';
import { FunctionPlotDatum } from './types';
declare const utils: {
    isValidNumber: (v: number) => boolean;
    space: (chart: Chart, range: [number, number], n: number) => number[];
    getterSetter: (config: any, option: string) => void;
    sgn: (v: number) => 1 | 0 | -1;
    color: (data: FunctionPlotDatum, index: number) => string;
};
export default utils;
