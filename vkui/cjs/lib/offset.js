"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsetRect = getOffsetRect;

function getOffsetRect(elem) {
  var box = elem === null || elem === void 0 ? void 0 : elem.getBoundingClientRect();
  return {
    top: box === null || box === void 0 ? void 0 : box.top,
    left: box === null || box === void 0 ? void 0 : box.left,
    width: elem === null || elem === void 0 ? void 0 : elem.offsetWidth,
    height: elem === null || elem === void 0 ? void 0 : elem.offsetHeight
  };
}
//# sourceMappingURL=offset.js.map