import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { hasMouse as _hasMouse, hasHover as _hasHover } from "@vkontakte/vkjs";
import { AdaptivityContext, SizeType, ViewHeight, ViewWidth } from "./AdaptivityContext";
import { useDOM } from "../../lib/dom";
import { useBridgeAdaptivity } from "../../hooks/useBridgeAdaptivity";
export var DESKTOP_SIZE = 1280;
export var TABLET_SIZE = 1024;
export var SMALL_TABLET_SIZE = 768;
export var MOBILE_SIZE = 320;
export var MOBILE_LANDSCAPE_HEIGHT = 414;
export var MEDIUM_HEIGHT = 720;

var AdaptivityProvider = function AdaptivityProvider(props) {
  var adaptivityRef = React.useRef(null);

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updateAdaptivity = _React$useState2[1];

  var bridge = useBridgeAdaptivity();

  var _useDOM = useDOM(),
      window = _useDOM.window;

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(props, bridge, window);
  }

  React.useEffect(function () {
    function onResize() {
      if (adaptivityRef.current === null) {
        return;
      }

      var calculated = calculateAdaptivity(props, bridge, window);
      var _adaptivityRef$curren = adaptivityRef.current,
          viewWidth = _adaptivityRef$curren.viewWidth,
          viewHeight = _adaptivityRef$curren.viewHeight,
          sizeX = _adaptivityRef$curren.sizeX,
          sizeY = _adaptivityRef$curren.sizeY,
          hasMouse = _adaptivityRef$curren.hasMouse,
          deviceHasHover = _adaptivityRef$curren.deviceHasHover;

      if (viewWidth !== calculated.viewWidth || viewHeight !== calculated.viewHeight || sizeX !== calculated.sizeX || sizeY !== calculated.sizeY || hasMouse !== calculated.hasMouse || deviceHasHover !== calculated.deviceHasHover) {
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    onResize();
    window.addEventListener("resize", onResize, false);
    return function () {
      window.removeEventListener("resize", onResize, false);
    };
  }, [props.viewWidth, props.viewHeight, props.sizeX, props.sizeY, props.hasMouse, props.deviceHasHover, window, props, bridge]);
  return createScopedElement(AdaptivityContext.Provider, {
    value: adaptivityRef.current
  }, props.children);
};

function calculateAdaptivity(props, bridge, window) {
  var windowWidth = 0;
  var windowHeight = 0;

  if (bridge.type === "adaptive") {
    windowWidth = bridge.viewportWidth;
    windowHeight = bridge.viewportHeight;
  } else if (window) {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  }

  var viewWidth = ViewWidth.SMALL_MOBILE;
  var viewHeight = ViewHeight.SMALL;
  var sizeY = SizeType.REGULAR;
  var sizeX = SizeType.REGULAR;
  var hasMouse = _hasMouse;
  var deviceHasHover = _hasHover;

  if (windowWidth >= DESKTOP_SIZE) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (windowWidth >= TABLET_SIZE) {
    viewWidth = ViewWidth.TABLET;
  } else if (windowWidth >= SMALL_TABLET_SIZE) {
    viewWidth = ViewWidth.SMALL_TABLET;
  } else if (windowWidth >= MOBILE_SIZE) {
    viewWidth = ViewWidth.MOBILE;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
  }

  if (windowHeight >= MEDIUM_HEIGHT) {
    viewHeight = ViewHeight.MEDIUM;
  } else if (windowHeight > MOBILE_LANDSCAPE_HEIGHT) {
    viewHeight = ViewHeight.SMALL;
  } else {
    viewHeight = ViewHeight.EXTRA_SMALL;
  }

  if (!bridge.type) {
    var _props$hasMouse, _props$deviceHasHover;

    props.viewWidth && (viewWidth = props.viewWidth);
    props.viewHeight && (viewHeight = props.viewHeight);
    hasMouse = (_props$hasMouse = props.hasMouse) !== null && _props$hasMouse !== void 0 ? _props$hasMouse : hasMouse;
    deviceHasHover = (_props$deviceHasHover = props.deviceHasHover) !== null && _props$deviceHasHover !== void 0 ? _props$deviceHasHover : deviceHasHover;
  }

  if (viewWidth <= ViewWidth.MOBILE) {
    sizeX = SizeType.COMPACT;
  }

  if (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse || viewHeight <= ViewHeight.EXTRA_SMALL) {
    sizeY = SizeType.COMPACT;
  }

  if (!bridge.type) {
    props.sizeX && (sizeX = props.sizeX);
    props.sizeY && (sizeY = props.sizeY);
  }

  if (bridge.type === "force_mobile" || bridge.type === "force_mobile_compact") {
    viewWidth = ViewWidth.MOBILE;
    sizeX = SizeType.COMPACT;

    if (bridge.type === "force_mobile_compact") {
      sizeY = SizeType.COMPACT;
    } else {
      sizeY = SizeType.REGULAR;
    }
  }

  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    sizeX: sizeX,
    sizeY: sizeY,
    hasMouse: hasMouse,
    deviceHasHover: deviceHasHover
  };
}

export { AdaptivityProvider };
//# sourceMappingURL=AdaptivityProvider.js.map