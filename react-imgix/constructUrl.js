"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildURLPublic = buildURLPublic;
exports.default = void 0;

var _extractQueryParams3 = _interopRequireDefault(require("./extractQueryParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright © 2015 by Coursera
Licensed under the Apache License 2.0, seen https://github.com/coursera/react-imgix/blob/master/LICENSE

Minor syntax modifications have been made
*/
var Base64 = require("js-base64").Base64;

var PACKAGE_VERSION = "9.0.3";
// @see https://www.imgix.com/docs/reference
var PARAM_EXPANSION = Object.freeze({
  // Adjustment
  brightness: "bri",
  contrast: "con",
  exposure: "exp",
  gamma: "gam",
  highlights: "high",
  hue: "hue",
  invert: "invert",
  saturation: "sat",
  shaddows: "shad",
  sharpness: "sharp",
  "unsharp-mask": "usm",
  "unsharp-radius": "usmrad",
  vibrance: "vib",
  // Automatic
  "auto-features": "auto",
  // Background
  "background-color": "bg",
  // Blend
  blend: "blend",
  "blend-mode": "bm",
  "blend-align": "ba",
  "blend-alpha": "balph",
  "blend-padding": "bp",
  "blend-width": "bw",
  "blend-height": "bh",
  "blend-fit": "bf",
  "blend-crop": "bc",
  "blend-size": "bs",
  "blend-x": "bx",
  "blend-y": "by",
  // Border & Padding
  border: "border",
  padding: "pad",
  // Face Detection
  "face-index": "faceindex",
  "face-padding": "facepad",
  faces: "faces",
  // Format
  "chroma-subsampling": "chromasub",
  "color-quantization": "colorquant",
  download: "dl",
  DPI: "dpi",
  format: "fm",
  "lossless-compression": "lossless",
  quality: "q",
  // Mask
  "mask-image": "mask",
  // Mask
  "noise-blur": "nr",
  "noise-sharpen": "nrs",
  // Palette n/a
  // PDF n/a
  // Pixel Density n/a
  // Rotation
  "flip-direction": "flip",
  orientation: "or",
  "rotation-angle": "rot",
  // Size
  "crop-mode": "crop",
  "fit-mode": "fit",
  "image-height": "h",
  "image-width": "w",
  // Stylize
  blurring: "blur",
  halftone: "htn",
  monotone: "mono",
  pixelate: "px",
  "sepia-tone": "sepia",
  // Trim TODO
  // Watermark TODO
  // Extra
  height: "h",
  width: "w"
});
var DEFAULT_OPTIONS = Object.freeze({
  auto: "format" // http://www.imgix.com/docs/reference/automatic#param-auto

});
/**
 * Construct a URL for an image with an Imgix proxy, expanding image options
 * per the [API reference docs](https://www.imgix.com/docs/reference).
 * @param  {String} src         src of raw image
 * @param  {Object} longOptions map of image API options, in long or short form per expansion rules
 * @return {String}             URL of image src transformed by Imgix
 */

function constructUrl(src, longOptions) {
  if (!src) {
    return "";
  }

  var keys = Object.keys(longOptions);
  var keysLength = keys.length;
  var url = src + "?";

  for (var i = 0; i < keysLength; i++) {
    var key = keys[i];
    var val = longOptions[key];

    if (PARAM_EXPANSION[key]) {
      key = PARAM_EXPANSION[key];
    } else {
      key = encodeURIComponent(key);
    }

    if (key.substr(-2) === "64") {
      val = Base64.encodeURI(val);
    }

    url += key + "=" + encodeURIComponent(val) + "&";
  }

  return url.slice(0, -1);
}

function buildURLPublic(src) {
  var imgixParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var disableLibraryParam = options.disableLibraryParam;

  var _extractQueryParams = (0, _extractQueryParams3.default)(src),
      _extractQueryParams2 = _slicedToArray(_extractQueryParams, 2),
      rawSrc = _extractQueryParams2[0],
      params = _extractQueryParams2[1];

  return constructUrl(rawSrc, _extends({}, params, imgixParams, disableLibraryParam ? {} : {
    ixlib: "react-".concat(PACKAGE_VERSION)
  }));
}

var _default = constructUrl;
exports.default = _default;
//# sourceMappingURL=constructUrl.js.map