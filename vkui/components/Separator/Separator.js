import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["wide", "expanded"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";

var Separator = function Separator(_ref) {
  var wide = _ref.wide,
      expanded = _ref.expanded,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var platform = usePlatform();
  return createScopedElement("div", _extends({}, restProps, {
    "aria-hidden": "true" // eslint-disable-next-line vkui/no-object-expression-in-arguments
    ,
    vkuiClass: classNames(getClassName("Separator", platform), {
      "Separator--wide": wide
    })
  }), createScopedElement("div", {
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: classNames("Separator__in", {
      "Separator__in--expanded": expanded
    })
  }));
}; // eslint-disable-next-line import/no-default-export


export default /*#__PURE__*/React.memo(Separator);
//# sourceMappingURL=Separator.js.map