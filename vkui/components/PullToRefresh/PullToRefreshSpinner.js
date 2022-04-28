import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { classNames } from "../../lib/classNames";

function calcStrokeDashOffset(value, radius) {
  var progress = value / 100;
  return 2 * Math.PI * radius * (1 - progress);
}

var PullToRefreshSpinner = function PullToRefreshSpinner(_ref) {
  var _ref$on = _ref.on,
      on = _ref$on === void 0 ? true : _ref$on,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 2.5 : _ref$strokeWidth,
      style = _ref.style,
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$ariaLabel = _ref["aria-label"],
      ariaLabel = _ref$ariaLabel === void 0 ? "Пожалуйста, подождите..." : _ref$ariaLabel;
  var radius = 0.5 * size - 0.5 * strokeWidth;
  var dasharray = 2 * Math.PI * radius;
  var circleCenter = 0.5 * size;
  var dashoffset = calcStrokeDashOffset(on ? 80 : progress, radius);
  return createScopedElement("div", {
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: classNames("PullToRefresh__spinner", {
      "PullToRefresh__spinner--on": on
    }),
    style: style,
    "aria-label": on ? ariaLabel : undefined
  }, createScopedElement("svg", {
    role: "presentation",
    vkuiClass: "PullToRefresh__spinner-self",
    style: {
      width: size,
      height: size
    },
    viewBox: "0 0 ".concat(size, " ").concat(size),
    xmlns: "http://www.w3.org/2000/svg"
  }, createScopedElement("g", {
    style: {
      width: size,
      height: size,
      transformOrigin: "".concat(circleCenter, "px ").concat(circleCenter, "px")
    }
  }, createScopedElement("circle", {
    vkuiClass: "PullToRefresh__spinner-path",
    fill: "none",
    strokeDasharray: dasharray,
    strokeDashoffset: dashoffset,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    cx: circleCenter,
    cy: circleCenter,
    r: radius
  }))));
}; // eslint-disable-next-line import/no-default-export


export default /*#__PURE__*/React.memo(PullToRefreshSpinner);
//# sourceMappingURL=PullToRefreshSpinner.js.map