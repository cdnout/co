"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function targetWidths() {
  var resolutions = [];
  var prev = 100;
  var INCREMENT_PERCENTAGE = 8;
  var MAX_SIZE = 8192;

  var ensureEven = function ensureEven(n) {
    return 2 * Math.round(n / 2);
  };

  while (prev <= MAX_SIZE) {
    resolutions.push(ensureEven(prev));
    prev *= 1 + INCREMENT_PERCENTAGE / 100 * 2;
  }

  resolutions.push(MAX_SIZE);
  return resolutions;
}

var _default = targetWidths();

exports.default = _default;
//# sourceMappingURL=targetWidths.js.map