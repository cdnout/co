"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItem = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classNames = require("../../lib/classNames");

var _useExternRef = require("../../hooks/useExternRef");

var _usePlatform = require("../../hooks/usePlatform");

var _getClassName = require("../../helpers/getClassName");

var _utils = require("../../lib/utils");

var _Subhead = require("../Typography/Subhead/Subhead");

var _Caption = require("../Typography/Caption/Caption");

var _useAdaptivity2 = require("../../hooks/useAdaptivity");

var _Removable = require("../Removable/Removable");

var _excluded = ["children", "top", "bottom", "status", "Component", "removable", "onRemove", "removePlaceholder", "getRootRef"];

var FormItem = function FormItem(_ref) {
  var children = _ref.children,
      top = _ref.top,
      bottom = _ref.bottom,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? "default" : _ref$status,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? "div" : _ref$Component,
      removable = _ref.removable,
      _ref$onRemove = _ref.onRemove,
      _onRemove = _ref$onRemove === void 0 ? _utils.noop : _ref$onRemove,
      _ref$removePlaceholde = _ref.removePlaceholder,
      removePlaceholder = _ref$removePlaceholde === void 0 ? "Удалить" : _ref$removePlaceholde,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var platform = (0, _usePlatform.usePlatform)();
  var rootEl = (0, _useExternRef.useExternRef)(getRootRef);

  var _useAdaptivity = (0, _useAdaptivity2.useAdaptivity)(),
      sizeY = _useAdaptivity.sizeY;

  var wrappedChildren = (0, _jsxRuntime.createScopedElement)(React.Fragment, null, (0, _utils.hasReactNode)(top) && (0, _jsxRuntime.createScopedElement)(_Subhead.Subhead, {
    vkuiClass: "FormItem__top"
  }, top), children, (0, _utils.hasReactNode)(bottom) && (0, _jsxRuntime.createScopedElement)(_Caption.Caption, {
    vkuiClass: "FormItem__bottom"
  }, bottom));
  return (0, _jsxRuntime.createScopedElement)(Component, (0, _extends2.default)({}, restProps, {
    ref: rootEl // eslint-disable-next-line vkui/no-object-expression-in-arguments
    ,
    vkuiClass: (0, _classNames.classNames)((0, _getClassName.getClassName)("FormItem", platform), "FormItem--".concat(status), "FormItem--sizeY-".concat(sizeY), {
      "FormItem--withTop": (0, _utils.hasReactNode)(top),
      "FormItem--removable": removable
    })
  }), removable ? (0, _jsxRuntime.createScopedElement)(_Removable.Removable, {
    align: "start",
    onRemove: function onRemove(e) {
      if (rootEl !== null && rootEl !== void 0 && rootEl.current) {
        _onRemove(e, rootEl.current);
      }
    },
    removePlaceholder: removePlaceholder
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "FormItem__removable"
  }, wrappedChildren)) : wrappedChildren);
};

exports.FormItem = FormItem;
//# sourceMappingURL=FormItem.js.map