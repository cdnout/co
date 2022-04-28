"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _jsxRuntime = require("../../lib/jsxRuntime");

var React = _interopRequireWildcard(require("react"));

var _usePlatform = require("../../hooks/usePlatform");

var _getClassName = require("../../helpers/getClassName");

var _classNames = require("../../lib/classNames");

var _FixedLayout = _interopRequireDefault(require("../FixedLayout/FixedLayout"));

var _Separator = _interopRequireDefault(require("../Separator/Separator"));

var _platform = require("../../lib/platform");

var _ConfigProviderContext = require("../ConfigProvider/ConfigProviderContext");

var _withAdaptivity = require("../../hoc/withAdaptivity");

var _Text = _interopRequireDefault(require("../Typography/Text/Text"));

var _TooltipContainer = require("../Tooltip/TooltipContainer");

var _ModalRootContext = _interopRequireDefault(require("../ModalRoot/ModalRootContext"));

var _excluded = ["left", "children", "right", "separator", "visor", "transparent", "shadow", "getRef", "getRootRef", "sizeX", "sizeY", "fixed"];

var PanelHeaderIn = function PanelHeaderIn(_ref) {
  var children = _ref.children,
      left = _ref.left,
      right = _ref.right;

  var _React$useContext = React.useContext(_ConfigProviderContext.ConfigProviderContext),
      webviewType = _React$useContext.webviewType;

  var _React$useContext2 = React.useContext(_ModalRootContext.default),
      isInsideModal = _React$useContext2.isInsideModal;

  var platform = (0, _usePlatform.usePlatform)();
  return (0, _jsxRuntime.createScopedElement)(_TooltipContainer.TooltipContainer, {
    fixed: true,
    vkuiClass: "PanelHeader__in"
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeader__left"
  }, left), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeader__content"
  }, platform === _platform.VKCOM ? (0, _jsxRuntime.createScopedElement)(_Text.default, {
    weight: "medium"
  }, children) : (0, _jsxRuntime.createScopedElement)("span", {
    vkuiClass: "PanelHeader__content-in"
  }, children)), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeader__right"
  }, (webviewType === _ConfigProviderContext.WebviewType.INTERNAL || isInsideModal) && right));
};

var PanelHeader = function PanelHeader(props) {
  var left = props.left,
      children = props.children,
      right = props.right,
      separator = props.separator,
      visor = props.visor,
      transparent = props.transparent,
      shadow = props.shadow,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      sizeX = props.sizeX,
      sizeY = props.sizeY,
      fixed = props.fixed,
      restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var platform = (0, _usePlatform.usePlatform)();

  var _React$useContext3 = React.useContext(_ConfigProviderContext.ConfigProviderContext),
      webviewType = _React$useContext3.webviewType;

  var _React$useContext4 = React.useContext(_ModalRootContext.default),
      isInsideModal = _React$useContext4.isInsideModal;

  var needShadow = shadow && sizeX === _withAdaptivity.SizeType.REGULAR;
  var isFixed = fixed !== undefined ? fixed : platform !== _platform.Platform.VKCOM;
  return (0, _jsxRuntime.createScopedElement)("div", (0, _extends2.default)({}, restProps, {
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: (0, _classNames.classNames)((0, _getClassName.getClassName)("PanelHeader", platform), {
      "PanelHeader--trnsp": transparent,
      "PanelHeader--shadow": needShadow,
      "PanelHeader--vis": visor,
      "PanelHeader--sep": separator && visor,
      "PanelHeader--vkapps": webviewType === _ConfigProviderContext.WebviewType.VKAPPS && !isInsideModal,
      "PanelHeader--no-left": !left,
      "PanelHeader--no-right": !right,
      "PanelHeader--fixed": isFixed
    }, "PanelHeader--sizeX-".concat(sizeX)),
    ref: isFixed ? getRootRef : getRef
  }), isFixed ? (0, _jsxRuntime.createScopedElement)(_FixedLayout.default, {
    vkuiClass: "PanelHeader__fixed",
    vertical: "top",
    getRootRef: getRef
  }, (0, _jsxRuntime.createScopedElement)(PanelHeaderIn, props)) : (0, _jsxRuntime.createScopedElement)(PanelHeaderIn, props), separator && visor && platform !== _platform.VKCOM && (0, _jsxRuntime.createScopedElement)(_Separator.default, {
    vkuiClass: "PanelHeader__separator",
    expanded: sizeX === _withAdaptivity.SizeType.REGULAR
  }));
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
}; // eslint-disable-next-line import/no-default-export

var _default = (0, _withAdaptivity.withAdaptivity)(PanelHeader, {
  sizeX: true,
  sizeY: true
});

exports.default = _default;
//# sourceMappingURL=PanelHeader.js.map