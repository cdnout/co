"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollSaver = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var React = _interopRequireWildcard(require("react"));

var _ScrollContext = require("../AppRoot/ScrollContext");

var _useIsomorphicLayoutEffect = require("../../lib/useIsomorphicLayoutEffect");

var ScrollSaver = function ScrollSaver(_ref) {
  var children = _ref.children,
      initialScroll = _ref.initialScroll,
      saveScroll = _ref.saveScroll;

  var _React$useContext = React.useContext(_ScrollContext.ScrollContext),
      getScroll = _React$useContext.getScroll,
      scrollTo = _React$useContext.scrollTo;

  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
    if (typeof initialScroll === "number") {
      scrollTo(0, initialScroll);
    }

    return function () {
      return saveScroll(getScroll().y);
    };
  }, []);
  return (0, _jsxRuntime.createScopedElement)(React.Fragment, null, children);
};

exports.ScrollSaver = ScrollSaver;
//# sourceMappingURL=ScrollSaver.js.map