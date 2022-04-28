import _extends from "@babel/runtime/helpers/extends";
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import ModalRootContext from "./ModalRootContext";
export function withModalRootContext(Component) {
  function WithModalRootContext(props) {
    var _React$useContext = React.useContext(ModalRootContext),
        updateModalHeight = _React$useContext.updateModalHeight;

    return createScopedElement(Component, _extends({}, props, {
      updateModalHeight: updateModalHeight
    }));
  }

  return WithModalRootContext;
}
//# sourceMappingURL=withModalRootContext.js.map