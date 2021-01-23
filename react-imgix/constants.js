"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DPR_QUALITY_VALUES = exports.DPR_QUALITY = void 0;

function _objectValues(obj) {
  var values = [];
  var keys = Object.keys(obj);

  for (var k = 0; k < keys.length; k++) values.push(obj[keys[k]]);

  return values;
}

var DPR_QUALITY = {
  q_dpr1: 75,
  q_dpr2: 50,
  q_dpr3: 35,
  q_dpr4: 23,
  q_dpr5: 20
};
exports.DPR_QUALITY = DPR_QUALITY;

var DPR_QUALITY_VALUES = _objectValues(DPR_QUALITY);

exports.DPR_QUALITY_VALUES = DPR_QUALITY_VALUES;
//# sourceMappingURL=constants.js.map