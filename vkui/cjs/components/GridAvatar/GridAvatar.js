"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_GRID_LENGTH = exports.GridAvatar = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _classNames = require("../../lib/classNames");

var _warnOnce = require("../../lib/warnOnce");

var _excluded = ["src"];
var MAX_GRID_LENGTH = 4;
exports.MAX_GRID_LENGTH = MAX_GRID_LENGTH;
var warn = (0, _warnOnce.warnOnce)("GridAvatar");

var GridAvatar = function GridAvatar(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? [] : _ref$src,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  if (process.env.NODE_ENV === "development" && src.length > MAX_GRID_LENGTH) {
    warn("\u0414\u043B\u0438\u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 src (".concat(src.length, ") \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 (").concat(MAX_GRID_LENGTH, ")"));
  }

  return (0, _jsxRuntime.createScopedElement)(_Avatar.default, (0, _extends2.default)({}, restProps, {
    vkuiClass: (0, _classNames.classNames)("GridAvatar")
  }), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "GridAvatar__in",
    "aria-hidden": "true"
  }, src.slice(0, MAX_GRID_LENGTH).map(function (src, i) {
    return (0, _jsxRuntime.createScopedElement)("div", {
      key: i,
      vkuiClass: "GridAvatar__item",
      style: {
        backgroundImage: "url(".concat(src, ")")
      }
    });
  })));
};

exports.GridAvatar = GridAvatar;
//# sourceMappingURL=GridAvatar.js.map