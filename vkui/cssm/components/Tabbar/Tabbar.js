import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "shadow", "itemsLayout"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import "./Tabbar.css";

var Tabbar = function Tabbar(props) {
  var children = props.children,
      shadow = props.shadow,
      itemsLayout = props.itemsLayout,
      restProps = _objectWithoutProperties(props, _excluded);

  var platform = usePlatform();

  var getItemsLayout = function getItemsLayout() {
    switch (itemsLayout) {
      case "horizontal":
      case "vertical":
        return itemsLayout;

      default:
        return React.Children.count(children) > 2 ? "vertical" : "horizontal";
    }
  };

  return createScopedElement("div", _extends({
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: classNames(getClassName("Tabbar", platform), "Tabbar--l-".concat(getItemsLayout()), {
      "Tabbar--shadow": shadow
    })
  }, restProps), createScopedElement("div", {
    vkuiClass: "Tabbar__in"
  }, children));
};

Tabbar.defaultProps = {
  shadow: true
}; // eslint-disable-next-line import/no-default-export

export default Tabbar;
//# sourceMappingURL=Tabbar.js.map