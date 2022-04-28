import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["getRootRef", "icon", "header", "subheader", "children", "actions", "actionsLayout", "viewWidth", "hasMouse", "viewHeight", "onClose", "dismissLabel"];
import { createScopedElement } from "../../lib/jsxRuntime";
import { hasReactNode } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import Headline from "../Typography/Headline/Headline";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { ViewHeight, ViewWidth, withAdaptivity } from "../../hoc/withAdaptivity";
import { PanelHeaderButton } from "../PanelHeaderButton/PanelHeaderButton";
import { ANDROID, IOS } from "../../lib/platform";
import ModalDismissButton from "../ModalDismissButton/ModalDismissButton";
import { Icon24Dismiss } from "@vkontakte/icons";
import { useKeyboard } from "../../hooks/useKeyboard";
import "./ModalCardBase.css";
export var ModalCardBase = withAdaptivity(function (_ref) {
  var getRootRef = _ref.getRootRef,
      icon = _ref.icon,
      header = _ref.header,
      subheader = _ref.subheader,
      children = _ref.children,
      actions = _ref.actions,
      actionsLayout = _ref.actionsLayout,
      viewWidth = _ref.viewWidth,
      hasMouse = _ref.hasMouse,
      viewHeight = _ref.viewHeight,
      onClose = _ref.onClose,
      _ref$dismissLabel = _ref.dismissLabel,
      dismissLabel = _ref$dismissLabel === void 0 ? "Скрыть" : _ref$dismissLabel,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var platform = usePlatform();
  var isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  var isSoftwareKeyboardOpened = useKeyboard().isOpened;
  var canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;
  var canShowCloseBtnIos = platform === IOS && !canShowCloseBtn;
  return createScopedElement("div", _extends({}, restProps, {
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: classNames(getClassName("ModalCardBase", platform), {
      "ModalCardBase--desktop": isDesktop
    }),
    ref: getRootRef
  }), createScopedElement("div", {
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: classNames("ModalCardBase__container", {
      "ModalCardBase__container--softwareKeyboardOpened": isSoftwareKeyboardOpened
    })
  }, hasReactNode(icon) && createScopedElement("div", {
    vkuiClass: "ModalCardBase__icon"
  }, icon), hasReactNode(header) && createScopedElement(Title, {
    level: "2",
    weight: platform === ANDROID ? "2" : "1",
    vkuiClass: "ModalCardBase__header"
  }, header), hasReactNode(subheader) && createScopedElement(Headline, {
    weight: "regular",
    vkuiClass: "ModalCardBase__subheader"
  }, subheader), children, hasReactNode(actions) && createScopedElement("div", {
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: classNames("ModalCardBase__actions", {
      "ModalCardBase__actions--v": actionsLayout === "vertical"
    })
  }, actions), canShowCloseBtn && createScopedElement(ModalDismissButton, {
    onClick: onClose
  }), canShowCloseBtnIos && createScopedElement(PanelHeaderButton, {
    "aria-label": dismissLabel,
    vkuiClass: "ModalCardBase__dismiss",
    onClick: onClose
  }, createScopedElement(Icon24Dismiss, null))));
}, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true
});
//# sourceMappingURL=ModalCardBase.js.map