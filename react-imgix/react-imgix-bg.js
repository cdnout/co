"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__BackgroundImpl = exports.Background = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMeasure = _interopRequireWildcard(require("react-measure"));

var _constructUrl = _interopRequireDefault(require("./constructUrl"));

var _extractQueryParams3 = _interopRequireDefault(require("./extractQueryParams"));

var _targetWidths = _interopRequireDefault(require("./targetWidths"));

var _findClosest = _interopRequireDefault(require("./findClosest"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PACKAGE_VERSION = "9.0.3";

var noop = function noop() {};

var findNearestWidth = function findNearestWidth(actualWidth) {
  return (0, _findClosest.default)(actualWidth, _targetWidths.default);
};

var toFixed = function toFixed(dp, value) {
  return +value.toFixed(dp);
};

var BackgroundImpl = function BackgroundImpl(props) {
  var measureRef = props.measureRef,
      measure = props.measure,
      contentRect = props.contentRect,
      _props$imgixParams = props.imgixParams,
      imgixParams = _props$imgixParams === void 0 ? {} : _props$imgixParams,
      onLoad = props.onLoad,
      disableLibraryParam = props.disableLibraryParam,
      src = props.src,
      children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className;
  var forcedWidth = imgixParams.w,
      forcedHeight = imgixParams.h;
  var hasDOMDimensions = contentRect.bounds.width != null && contentRect.bounds.height != null;
  var htmlAttributes = props.htmlAttributes || {};
  var dpr = toFixed(2, imgixParams.dpr || global.devicePixelRatio || 1);
  var ref = htmlAttributes.ref;

  var onRef = function onRef(el) {
    measureRef(el);

    if (typeof ref === "function") {
      ref(el);
    }
  };

  var _ref = function () {
    var bothWidthAndHeightPassed = forcedWidth != null && forcedHeight != null;

    if (bothWidthAndHeightPassed) {
      return {
        width: forcedWidth,
        height: forcedHeight
      };
    }

    if (!hasDOMDimensions) {
      return {
        width: undefined,
        height: undefined
      };
    }

    var ar = contentRect.bounds.width / contentRect.bounds.height;
    var neitherWidthNorHeightPassed = forcedWidth == null && forcedHeight == null;

    if (neitherWidthNorHeightPassed) {
      var _width = findNearestWidth(contentRect.bounds.width);

      var _height = Math.ceil(_width / ar);

      return {
        width: _width,
        height: _height
      };
    }

    if (forcedWidth != null) {
      var _height2 = Math.ceil(forcedWidth / ar);

      return {
        width: forcedWidth,
        height: _height2
      };
    } else if (forcedHeight != null) {
      var _width2 = Math.ceil(forcedHeight * ar);

      return {
        width: _width2,
        height: forcedHeight
      };
    }
  }(),
      width = _ref.width,
      height = _ref.height;

  var isReady = width != null && height != null;

  var commonProps = _objectSpread({}, htmlAttributes);

  if (!isReady) {
    return /*#__PURE__*/_react.default.createElement("div", _extends({}, commonProps, {
      className: "react-imgix-bg-loading ".concat(className),
      ref: onRef
    }), children);
  }

  var renderedSrc = function () {
    var _extractQueryParams = (0, _extractQueryParams3.default)(src),
        _extractQueryParams2 = _slicedToArray(_extractQueryParams, 2),
        rawSrc = _extractQueryParams2[0],
        params = _extractQueryParams2[1];

    var srcOptions = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, params), {}, {
      fit: "crop"
    }, imgixParams), disableLibraryParam ? {} : {
      ixlib: "react-".concat(PACKAGE_VERSION)
    }), {}, {
      width: width,
      height: height,
      dpr: dpr
    });

    return (0, _constructUrl.default)(rawSrc, srcOptions);
  }();

  var style = _objectSpread(_objectSpread({}, htmlAttributes.style), {}, {
    backgroundImage: "url(".concat(renderedSrc, ")"),
    backgroundSize: (htmlAttributes.style || {}).backgroundSize !== undefined ? htmlAttributes.style.backgroundSize : "cover"
  });

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, commonProps, {
    className: className,
    ref: onRef,
    style: style
  }), children);
};

exports.__BackgroundImpl = BackgroundImpl;
var Background = (0, _reactMeasure.withContentRect)("bounds")(BackgroundImpl);
exports.Background = Background;
//# sourceMappingURL=react-imgix-bg.js.map