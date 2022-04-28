import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["bannerData", "onClose"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { Icon24Dismiss } from "@vkontakte/icons";
import { Button } from "../Button/Button";
import SimpleCell from "../SimpleCell/SimpleCell";
import Avatar from "../Avatar/Avatar";
import { Caption } from "../Typography/Caption/Caption";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { warnOnce } from "../../lib/warnOnce";
var warn = warnOnce("PromoBanner");

var PromoBanner = function PromoBanner(props) {
  var platform = usePlatform();

  var _props$bannerData = props.bannerData,
      bannerData = _props$bannerData === void 0 ? {} : _props$bannerData,
      onClose = props.onClose,
      restProps = _objectWithoutProperties(props, _excluded);

  var ageRestrictions = bannerData.ageRestrictions != null ? parseInt(bannerData.ageRestrictions) : bannerData.ageRestriction;

  if (bannerData.ageRestriction && process.env.NODE_ENV === "development") {
    warn("Свойство bannerData.ageRestriction устарело и будет удалено в 5.0.0. Используйте bannerData.ageRestrictions");
  }

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentPixel = _React$useState2[0],
      setCurrentPixel = _React$useState2[1];

  var statsPixels = React.useMemo(function () {
    return bannerData.statistics ? bannerData.statistics.reduce(function (acc, item) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, item.type, item.url));
    }, {}) : {};
  }, [bannerData.statistics]);
  var onClick = React.useCallback(function () {
    return setCurrentPixel(statsPixels.click || "");
  }, [statsPixels.click]);
  React.useEffect(function () {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);
  return createScopedElement("div", _extends({
    vkuiClass: getClassName("PromoBanner", platform)
  }, restProps), createScopedElement("div", {
    vkuiClass: "PromoBanner__head"
  }, createScopedElement(Caption, {
    vkuiClass: "PromoBanner__label"
  }, bannerData.advertisingLabel || "Advertisement"), ageRestrictions != null && createScopedElement(Caption, {
    vkuiClass: "PromoBanner__age"
  }, ageRestrictions, "+"), !props.isCloseButtonHidden && createScopedElement("div", {
    vkuiClass: "PromoBanner__close",
    onClick: props.onClose
  }, createScopedElement(Icon24Dismiss, null))), createScopedElement(SimpleCell, {
    href: bannerData.trackingLink,
    onClick: onClick,
    rel: "nofollow noopener noreferrer",
    target: "_blank",
    before: createScopedElement(Avatar, {
      mode: "image",
      size: 48,
      src: bannerData.iconLink,
      alt: bannerData.title
    }),
    after: createScopedElement(Button, {
      mode: "outline"
    }, bannerData.ctaText),
    description: bannerData.domain
  }, bannerData.title), currentPixel.length > 0 && createScopedElement("div", {
    vkuiClass: "PromoBanner__pixels"
  }, createScopedElement("img", {
    src: currentPixel,
    alt: ""
  })));
}; // eslint-disable-next-line import/no-default-export


export default PromoBanner;
//# sourceMappingURL=PromoBanner.js.map