import * as React from "react";
// Является ли переданное значение числовым
export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
} // Является ли переданное значение функцией

export function isFunction(value) {
  return typeof value === "function";
}
export function debounce(fn, delay) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return fn.apply(void 0, args);
    }, delay);
  };
}
export function leadingZero(val) {
  var strVal = val.toFixed();

  if (strVal.length === 1) {
    return "0" + strVal;
  }

  return strVal;
}
export function hasReactNode(value) {
  return value !== undefined && value !== false && value !== null && value !== "";
}
export function isPrimitiveReactNode(node) {
  return typeof node === "string" || typeof node === "number";
}
export function setRef(element, ref) {
  if (ref) {
    if (typeof ref === "function") {
      ref(element);
    } else {
      ref.current = element;
    }
  }
}
export function multiRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }

  var current = null;
  return {
    get current() {
      return current;
    },

    set current(element) {
      current = element;
      refs.forEach(function (ref) {
        return ref && setRef(element, ref);
      });
    }

  };
} // eslint-disable-next-line

export var noop = function noop() {};
export function getTitleFromChildren(children) {
  var label = "";
  React.Children.map(children, function (child) {
    if (typeof child === "string") {
      label += child;
    }
  });
  return label;
}
export var generateRandomId = function generateRandomId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "");
};
export var stopPropagation = function stopPropagation(event) {
  return event.stopPropagation();
};
//# sourceMappingURL=utils.js.map