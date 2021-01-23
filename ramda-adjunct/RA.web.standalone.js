(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RA"] = factory();
	else
		root["RA"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 405);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _curry2; });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a) ? f2 : Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_b) {
          return fn(a, _b);
        });

      default:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b) ? f2 : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_a) {
          return fn(_a, b);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "F", function() { return _F_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _T_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "T", function() { return _T_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(165);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _addIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(166);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addIndex", function() { return _addIndex_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _adjust_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjust", function() { return _adjust_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _all_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _allPass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(167);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return _allPass_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _always_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "always", function() { return _always_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _and_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _any_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(168);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _any_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _anyPass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return _anyPass_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ap_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return _ap_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _aperture_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "aperture", function() { return _aperture_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(171);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _append_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _apply_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _applySpec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(172);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applySpec", function() { return _applySpec_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _applyTo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(173);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyTo", function() { return _applyTo_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _ascend_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(174);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascend", function() { return _ascend_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _assoc_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assoc", function() { return _assoc_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _assocPath_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocPath", function() { return _assocPath_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _binary_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(175);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "binary", function() { return _binary_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _both_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(176);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "both", function() { return _both_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(177);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _call_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _chain_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _clamp_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(178);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _clamp_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(179);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _clone_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _comparator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(180);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "comparator", function() { return _comparator_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _complement_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(181);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return _complement_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _composeK_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeK", function() { return _composeK_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _composeP_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(182);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeP", function() { return _composeP_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _composeWith_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(183);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeWith", function() { return _composeWith_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _concat_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _cond_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(184);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cond", function() { return _cond_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(185);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "construct", function() { return _construct_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _constructN_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(101);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constructN", function() { return _constructN_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _converge_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "converge", function() { return _converge_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _countBy_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(187);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _countBy_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _curry_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curryN", function() { return _curryN_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _dec_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(188);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dec", function() { return _dec_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _defaultTo_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return _defaultTo_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _descend_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(189);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descend", function() { return _descend_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _differenceWith_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceWith", function() { return _differenceWith_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _dissoc_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dissoc", function() { return _dissoc_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _dissocPath_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(190);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dissocPath", function() { return _dissocPath_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _divide_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return _divide_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _drop_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _drop_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _dropLast_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(192);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropLast", function() { return _dropLast_js__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _dropLastWhile_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(193);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropLastWhile", function() { return _dropLastWhile_js__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _dropRepeats_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(194);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropRepeats", function() { return _dropRepeats_js__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _dropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(107);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropRepeatsWith", function() { return _dropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _dropWhile_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(195);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropWhile", function() { return _dropWhile_js__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _either_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(196);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "either", function() { return _either_js__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(110);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _empty_js__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _endsWith_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(197);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return _endsWith_js__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _eqBy_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(198);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eqBy", function() { return _eqBy_js__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _eqProps_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(199);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eqProps", function() { return _eqProps_js__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _equals_js__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _evolve_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(200);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "evolve", function() { return _evolve_js__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(201);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _find_js__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(202);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex_js__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _findLast_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(203);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return _findLast_js__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(204);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _findLastIndex_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(205);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _flatten_js__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _forEach_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(206);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _forEach_js__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _forEachObjIndexed_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(207);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEachObjIndexed", function() { return _forEachObjIndexed_js__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _fromPairs_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(208);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPairs", function() { return _fromPairs_js__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(209);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _groupBy_js__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _groupWith_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(210);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupWith", function() { return _groupWith_js__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _gt_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(211);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return _gt_js__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _gte_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(212);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gte", function() { return _gte_js__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(213);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _has_js__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(214);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return _hasIn_js__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPath", function() { return _hasPath_js__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _head_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _head_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _identical_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(215);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identical", function() { return _identical_js__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _ifElse_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(216);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifElse", function() { return _ifElse_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(217);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inc", function() { return _inc_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(218);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _includes_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _indexBy_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(219);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _indexBy_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(220);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _indexOf_js__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(221);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _init_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _innerJoin_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(222);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "innerJoin", function() { return _innerJoin_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(223);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return _insert_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _insertAll_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(224);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAll", function() { return _insertAll_js__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(225);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _intersection_js__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _intersperse_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(226);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersperse", function() { return _intersperse_js__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _into_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(227);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "into", function() { return _into_js__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(228);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _invert_js__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _invertObj_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(229);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invertObj", function() { return _invertObj_js__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _invoker_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoker", function() { return _invoker_js__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(115);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _is_js__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(230);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty_js__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _isNil_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return _isNil_js__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(231);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _join_js__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _juxt_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(116);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "juxt", function() { return _juxt_js__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys_js__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(232);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keysIn", function() { return _keysIn_js__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(108);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(233);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "length", function() { return _length_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _lens_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lens", function() { return _lens_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _lensIndex_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(234);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lensIndex", function() { return _lensIndex_js__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _lensPath_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(235);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lensPath", function() { return _lensPath_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony import */ var _lensProp_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(236);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lensProp", function() { return _lensProp_js__WEBPACK_IMPORTED_MODULE_112__["default"]; });

/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return _lift_js__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony import */ var _liftN_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liftN", function() { return _liftN_js__WEBPACK_IMPORTED_MODULE_114__["default"]; });

/* harmony import */ var _lt_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(237);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return _lt_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony import */ var _lte_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(238);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lte", function() { return _lte_js__WEBPACK_IMPORTED_MODULE_116__["default"]; });

/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map_js__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony import */ var _mapAccum_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(239);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapAccum", function() { return _mapAccum_js__WEBPACK_IMPORTED_MODULE_118__["default"]; });

/* harmony import */ var _mapAccumRight_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(240);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapAccumRight", function() { return _mapAccumRight_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony import */ var _mapObjIndexed_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(241);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObjIndexed", function() { return _mapObjIndexed_js__WEBPACK_IMPORTED_MODULE_120__["default"]; });

/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(242);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "match", function() { return _match_js__WEBPACK_IMPORTED_MODULE_121__["default"]; });

/* harmony import */ var _mathMod_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(243);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mathMod", function() { return _mathMod_js__WEBPACK_IMPORTED_MODULE_122__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_123__["default"]; });

/* harmony import */ var _maxBy_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(244);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return _maxBy_js__WEBPACK_IMPORTED_MODULE_124__["default"]; });

/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(118);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean_js__WEBPACK_IMPORTED_MODULE_125__["default"]; });

/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(245);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median_js__WEBPACK_IMPORTED_MODULE_126__["default"]; });

/* harmony import */ var _memoizeWith_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(246);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeWith", function() { return _memoizeWith_js__WEBPACK_IMPORTED_MODULE_127__["default"]; });

/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(247);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge_js__WEBPACK_IMPORTED_MODULE_128__["default"]; });

/* harmony import */ var _mergeAll_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(248);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return _mergeAll_js__WEBPACK_IMPORTED_MODULE_129__["default"]; });

/* harmony import */ var _mergeDeepLeft_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(249);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepLeft", function() { return _mergeDeepLeft_js__WEBPACK_IMPORTED_MODULE_130__["default"]; });

/* harmony import */ var _mergeDeepRight_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(250);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepRight", function() { return _mergeDeepRight_js__WEBPACK_IMPORTED_MODULE_131__["default"]; });

/* harmony import */ var _mergeDeepWith_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(251);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return _mergeDeepWith_js__WEBPACK_IMPORTED_MODULE_132__["default"]; });

/* harmony import */ var _mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWithKey", function() { return _mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_133__["default"]; });

/* harmony import */ var _mergeLeft_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(252);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeLeft", function() { return _mergeLeft_js__WEBPACK_IMPORTED_MODULE_134__["default"]; });

/* harmony import */ var _mergeRight_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(253);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRight", function() { return _mergeRight_js__WEBPACK_IMPORTED_MODULE_135__["default"]; });

/* harmony import */ var _mergeWith_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(254);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return _mergeWith_js__WEBPACK_IMPORTED_MODULE_136__["default"]; });

/* harmony import */ var _mergeWithKey_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWithKey", function() { return _mergeWithKey_js__WEBPACK_IMPORTED_MODULE_137__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(255);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_138__["default"]; });

/* harmony import */ var _minBy_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(256);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return _minBy_js__WEBPACK_IMPORTED_MODULE_139__["default"]; });

/* harmony import */ var _modulo_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(257);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return _modulo_js__WEBPACK_IMPORTED_MODULE_140__["default"]; });

/* harmony import */ var _move_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(258);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "move", function() { return _move_js__WEBPACK_IMPORTED_MODULE_141__["default"]; });

/* harmony import */ var _multiply_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return _multiply_js__WEBPACK_IMPORTED_MODULE_142__["default"]; });

/* harmony import */ var _nAry_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nAry", function() { return _nAry_js__WEBPACK_IMPORTED_MODULE_143__["default"]; });

/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(259);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _negate_js__WEBPACK_IMPORTED_MODULE_144__["default"]; });

/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(260);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "none", function() { return _none_js__WEBPACK_IMPORTED_MODULE_145__["default"]; });

/* harmony import */ var _not_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not_js__WEBPACK_IMPORTED_MODULE_146__["default"]; });

/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return _nth_js__WEBPACK_IMPORTED_MODULE_147__["default"]; });

/* harmony import */ var _nthArg_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(261);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nthArg", function() { return _nthArg_js__WEBPACK_IMPORTED_MODULE_148__["default"]; });

/* harmony import */ var _o_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(262);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _o_js__WEBPACK_IMPORTED_MODULE_149__["default"]; });

/* harmony import */ var _objOf_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(114);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objOf", function() { return _objOf_js__WEBPACK_IMPORTED_MODULE_150__["default"]; });

/* harmony import */ var _of_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(263);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _of_js__WEBPACK_IMPORTED_MODULE_151__["default"]; });

/* harmony import */ var _omit_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(264);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _omit_js__WEBPACK_IMPORTED_MODULE_152__["default"]; });

/* harmony import */ var _once_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(265);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _once_js__WEBPACK_IMPORTED_MODULE_153__["default"]; });

/* harmony import */ var _or_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(109);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or_js__WEBPACK_IMPORTED_MODULE_154__["default"]; });

/* harmony import */ var _otherwise_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(266);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "otherwise", function() { return _otherwise_js__WEBPACK_IMPORTED_MODULE_155__["default"]; });

/* harmony import */ var _over_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "over", function() { return _over_js__WEBPACK_IMPORTED_MODULE_156__["default"]; });

/* harmony import */ var _pair_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(267);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return _pair_js__WEBPACK_IMPORTED_MODULE_157__["default"]; });

/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(268);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _partial_js__WEBPACK_IMPORTED_MODULE_158__["default"]; });

/* harmony import */ var _partialRight_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(269);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partialRight", function() { return _partialRight_js__WEBPACK_IMPORTED_MODULE_159__["default"]; });

/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(270);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_160__["default"]; });

/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path_js__WEBPACK_IMPORTED_MODULE_161__["default"]; });

/* harmony import */ var _paths_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paths", function() { return _paths_js__WEBPACK_IMPORTED_MODULE_162__["default"]; });

/* harmony import */ var _pathEq_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(271);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathEq", function() { return _pathEq_js__WEBPACK_IMPORTED_MODULE_163__["default"]; });

/* harmony import */ var _pathOr_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathOr", function() { return _pathOr_js__WEBPACK_IMPORTED_MODULE_164__["default"]; });

/* harmony import */ var _pathSatisfies_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(272);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathSatisfies", function() { return _pathSatisfies_js__WEBPACK_IMPORTED_MODULE_165__["default"]; });

/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(273);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick_js__WEBPACK_IMPORTED_MODULE_166__["default"]; });

/* harmony import */ var _pickAll_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(123);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickAll", function() { return _pickAll_js__WEBPACK_IMPORTED_MODULE_167__["default"]; });

/* harmony import */ var _pickBy_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(274);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickBy", function() { return _pickBy_js__WEBPACK_IMPORTED_MODULE_168__["default"]; });

/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _pipe_js__WEBPACK_IMPORTED_MODULE_169__["default"]; });

/* harmony import */ var _pipeK_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(275);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeK", function() { return _pipeK_js__WEBPACK_IMPORTED_MODULE_170__["default"]; });

/* harmony import */ var _pipeP_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeP", function() { return _pipeP_js__WEBPACK_IMPORTED_MODULE_171__["default"]; });

/* harmony import */ var _pipeWith_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeWith", function() { return _pipeWith_js__WEBPACK_IMPORTED_MODULE_172__["default"]; });

/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _pluck_js__WEBPACK_IMPORTED_MODULE_173__["default"]; });

/* harmony import */ var _prepend_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(124);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _prepend_js__WEBPACK_IMPORTED_MODULE_174__["default"]; });

/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(276);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "product", function() { return _product_js__WEBPACK_IMPORTED_MODULE_175__["default"]; });

/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(277);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "project", function() { return _project_js__WEBPACK_IMPORTED_MODULE_176__["default"]; });

/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _prop_js__WEBPACK_IMPORTED_MODULE_177__["default"]; });

/* harmony import */ var _propEq_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(278);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return _propEq_js__WEBPACK_IMPORTED_MODULE_178__["default"]; });

/* harmony import */ var _propIs_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(279);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propIs", function() { return _propIs_js__WEBPACK_IMPORTED_MODULE_179__["default"]; });

/* harmony import */ var _propOr_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(280);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propOr", function() { return _propOr_js__WEBPACK_IMPORTED_MODULE_180__["default"]; });

/* harmony import */ var _propSatisfies_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(281);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propSatisfies", function() { return _propSatisfies_js__WEBPACK_IMPORTED_MODULE_181__["default"]; });

/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(282);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "props", function() { return _props_js__WEBPACK_IMPORTED_MODULE_182__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(283);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_183__["default"]; });

/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_184__["default"]; });

/* harmony import */ var _reduceBy_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceBy", function() { return _reduceBy_js__WEBPACK_IMPORTED_MODULE_185__["default"]; });

/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_186__["default"]; });

/* harmony import */ var _reduceWhile_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(284);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceWhile", function() { return _reduceWhile_js__WEBPACK_IMPORTED_MODULE_187__["default"]; });

/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(285);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduced", function() { return _reduced_js__WEBPACK_IMPORTED_MODULE_188__["default"]; });

/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _reject_js__WEBPACK_IMPORTED_MODULE_189__["default"]; });

/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _remove_js__WEBPACK_IMPORTED_MODULE_190__["default"]; });

/* harmony import */ var _repeat_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(286);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _repeat_js__WEBPACK_IMPORTED_MODULE_191__["default"]; });

/* harmony import */ var _replace_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(287);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _replace_js__WEBPACK_IMPORTED_MODULE_192__["default"]; });

/* harmony import */ var _reverse_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return _reverse_js__WEBPACK_IMPORTED_MODULE_193__["default"]; });

/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(288);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan_js__WEBPACK_IMPORTED_MODULE_194__["default"]; });

/* harmony import */ var _sequence_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return _sequence_js__WEBPACK_IMPORTED_MODULE_195__["default"]; });

/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(289);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _set_js__WEBPACK_IMPORTED_MODULE_196__["default"]; });

/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return _slice_js__WEBPACK_IMPORTED_MODULE_197__["default"]; });

/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(290);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _sort_js__WEBPACK_IMPORTED_MODULE_198__["default"]; });

/* harmony import */ var _sortBy_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(291);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _sortBy_js__WEBPACK_IMPORTED_MODULE_199__["default"]; });

/* harmony import */ var _sortWith_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(292);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return _sortWith_js__WEBPACK_IMPORTED_MODULE_200__["default"]; });

/* harmony import */ var _split_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(293);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _split_js__WEBPACK_IMPORTED_MODULE_201__["default"]; });

/* harmony import */ var _splitAt_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(294);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitAt", function() { return _splitAt_js__WEBPACK_IMPORTED_MODULE_202__["default"]; });

/* harmony import */ var _splitEvery_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(295);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitEvery", function() { return _splitEvery_js__WEBPACK_IMPORTED_MODULE_203__["default"]; });

/* harmony import */ var _splitWhen_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(296);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitWhen", function() { return _splitWhen_js__WEBPACK_IMPORTED_MODULE_204__["default"]; });

/* harmony import */ var _startsWith_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(297);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _startsWith_js__WEBPACK_IMPORTED_MODULE_205__["default"]; });

/* harmony import */ var _subtract_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(298);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return _subtract_js__WEBPACK_IMPORTED_MODULE_206__["default"]; });

/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum_js__WEBPACK_IMPORTED_MODULE_207__["default"]; });

/* harmony import */ var _symmetricDifference_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(299);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symmetricDifference", function() { return _symmetricDifference_js__WEBPACK_IMPORTED_MODULE_208__["default"]; });

/* harmony import */ var _symmetricDifferenceWith_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(300);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symmetricDifferenceWith", function() { return _symmetricDifferenceWith_js__WEBPACK_IMPORTED_MODULE_209__["default"]; });

/* harmony import */ var _tail_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _tail_js__WEBPACK_IMPORTED_MODULE_210__["default"]; });

/* harmony import */ var _take_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _take_js__WEBPACK_IMPORTED_MODULE_211__["default"]; });

/* harmony import */ var _takeLast_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return _takeLast_js__WEBPACK_IMPORTED_MODULE_212__["default"]; });

/* harmony import */ var _takeLastWhile_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(301);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLastWhile", function() { return _takeLastWhile_js__WEBPACK_IMPORTED_MODULE_213__["default"]; });

/* harmony import */ var _takeWhile_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(302);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return _takeWhile_js__WEBPACK_IMPORTED_MODULE_214__["default"]; });

/* harmony import */ var _tap_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(303);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _tap_js__WEBPACK_IMPORTED_MODULE_215__["default"]; });

/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(304);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _test_js__WEBPACK_IMPORTED_MODULE_216__["default"]; });

/* harmony import */ var _andThen_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(305);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "andThen", function() { return _andThen_js__WEBPACK_IMPORTED_MODULE_217__["default"]; });

/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _times_js__WEBPACK_IMPORTED_MODULE_218__["default"]; });

/* harmony import */ var _toLower_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(306);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toLower", function() { return _toLower_js__WEBPACK_IMPORTED_MODULE_219__["default"]; });

/* harmony import */ var _toPairs_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(307);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPairs", function() { return _toPairs_js__WEBPACK_IMPORTED_MODULE_220__["default"]; });

/* harmony import */ var _toPairsIn_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(308);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPairsIn", function() { return _toPairsIn_js__WEBPACK_IMPORTED_MODULE_221__["default"]; });

/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return _toString_js__WEBPACK_IMPORTED_MODULE_222__["default"]; });

/* harmony import */ var _toUpper_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(309);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toUpper", function() { return _toUpper_js__WEBPACK_IMPORTED_MODULE_223__["default"]; });

/* harmony import */ var _transduce_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(310);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transduce", function() { return _transduce_js__WEBPACK_IMPORTED_MODULE_224__["default"]; });

/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(311);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose_js__WEBPACK_IMPORTED_MODULE_225__["default"]; });

/* harmony import */ var _traverse_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(312);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return _traverse_js__WEBPACK_IMPORTED_MODULE_226__["default"]; });

/* harmony import */ var _trim_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(313);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return _trim_js__WEBPACK_IMPORTED_MODULE_227__["default"]; });

/* harmony import */ var _tryCatch_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(314);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return _tryCatch_js__WEBPACK_IMPORTED_MODULE_228__["default"]; });

/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type", function() { return _type_js__WEBPACK_IMPORTED_MODULE_229__["default"]; });

/* harmony import */ var _unapply_js__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(315);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unapply", function() { return _unapply_js__WEBPACK_IMPORTED_MODULE_230__["default"]; });

/* harmony import */ var _unary_js__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(316);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unary", function() { return _unary_js__WEBPACK_IMPORTED_MODULE_231__["default"]; });

/* harmony import */ var _uncurryN_js__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(317);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncurryN", function() { return _uncurryN_js__WEBPACK_IMPORTED_MODULE_232__["default"]; });

/* harmony import */ var _unfold_js__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(318);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return _unfold_js__WEBPACK_IMPORTED_MODULE_233__["default"]; });

/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(319);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _union_js__WEBPACK_IMPORTED_MODULE_234__["default"]; });

/* harmony import */ var _unionWith_js__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(320);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unionWith", function() { return _unionWith_js__WEBPACK_IMPORTED_MODULE_235__["default"]; });

/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_236__["default"]; });

/* harmony import */ var _uniqBy_js__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(113);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqBy", function() { return _uniqBy_js__WEBPACK_IMPORTED_MODULE_237__["default"]; });

/* harmony import */ var _uniqWith_js__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqWith", function() { return _uniqWith_js__WEBPACK_IMPORTED_MODULE_238__["default"]; });

/* harmony import */ var _unless_js__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(321);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unless", function() { return _unless_js__WEBPACK_IMPORTED_MODULE_239__["default"]; });

/* harmony import */ var _unnest_js__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(322);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return _unnest_js__WEBPACK_IMPORTED_MODULE_240__["default"]; });

/* harmony import */ var _until_js__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(323);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "until", function() { return _until_js__WEBPACK_IMPORTED_MODULE_241__["default"]; });

/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _update_js__WEBPACK_IMPORTED_MODULE_242__["default"]; });

/* harmony import */ var _useWith_js__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(125);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWith", function() { return _useWith_js__WEBPACK_IMPORTED_MODULE_243__["default"]; });

/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _values_js__WEBPACK_IMPORTED_MODULE_244__["default"]; });

/* harmony import */ var _valuesIn_js__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(324);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valuesIn", function() { return _valuesIn_js__WEBPACK_IMPORTED_MODULE_245__["default"]; });

/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_246__ = __webpack_require__(325);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "view", function() { return _view_js__WEBPACK_IMPORTED_MODULE_246__["default"]; });

/* harmony import */ var _when_js__WEBPACK_IMPORTED_MODULE_247__ = __webpack_require__(326);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "when", function() { return _when_js__WEBPACK_IMPORTED_MODULE_247__["default"]; });

/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_248__ = __webpack_require__(130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _where_js__WEBPACK_IMPORTED_MODULE_248__["default"]; });

/* harmony import */ var _whereEq_js__WEBPACK_IMPORTED_MODULE_249__ = __webpack_require__(327);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whereEq", function() { return _whereEq_js__WEBPACK_IMPORTED_MODULE_249__["default"]; });

/* harmony import */ var _without_js__WEBPACK_IMPORTED_MODULE_250__ = __webpack_require__(328);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _without_js__WEBPACK_IMPORTED_MODULE_250__["default"]; });

/* harmony import */ var _xor_js__WEBPACK_IMPORTED_MODULE_251__ = __webpack_require__(329);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return _xor_js__WEBPACK_IMPORTED_MODULE_251__["default"]; });

/* harmony import */ var _xprod_js__WEBPACK_IMPORTED_MODULE_252__ = __webpack_require__(330);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xprod", function() { return _xprod_js__WEBPACK_IMPORTED_MODULE_252__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_253__ = __webpack_require__(331);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_253__["default"]; });

/* harmony import */ var _zipObj_js__WEBPACK_IMPORTED_MODULE_254__ = __webpack_require__(332);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipObj", function() { return _zipObj_js__WEBPACK_IMPORTED_MODULE_254__["default"]; });

/* harmony import */ var _zipWith_js__WEBPACK_IMPORTED_MODULE_255__ = __webpack_require__(333);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return _zipWith_js__WEBPACK_IMPORTED_MODULE_255__["default"]; });

/* harmony import */ var _thunkify_js__WEBPACK_IMPORTED_MODULE_256__ = __webpack_require__(334);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thunkify", function() { return _thunkify_js__WEBPACK_IMPORTED_MODULE_256__["default"]; });



































































































































































































































































/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _curry1; });
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _curry3; });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a) ? f3 : Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b) ? f3 : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(c) ? f3 : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(c) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(c) ? Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_a) {
          return fn(_a, b, c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_b) {
          return fn(a, _b, c);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(c) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _dispatchable; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _isTransformer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */

function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }

    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();

    if (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) {
      var idx = 0;

      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }

        idx += 1;
      }

      if (Object(_isTransformer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }

    return fn.apply(this, arguments);
  };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _internal_curryN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);




/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function curryN(length, fn) {
  if (length === 1) {
    return Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  }

  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(length, Object(_internal_curryN_js__WEBPACK_IMPORTED_MODULE_3__["default"])(length, [], fn));
});

/* harmony default export */ __webpack_exports__["default"] = (curryN);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _has; });
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isPlaceholder; });
function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _reduce; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _xwrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](Object(_bind_js__WEBPACK_IMPORTED_MODULE_2__["default"])(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = Object(_xwrap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  }

  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isGeneratorFunction = _interopRequireDefault(__webpack_require__(146));

var _isAsyncFunction = _interopRequireDefault(__webpack_require__(147));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is `Function`.
 *
 * @func isFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotFunction|isNotFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isFunction(function test() { }); //=> true
 * RA.isFunction(function* test() { }); //=> true
 * RA.isFunction(async function test() { }); //=> true
 * RA.isFunction(() => {}); //=> true
 * RA.isFunction(null); //=> false
 * RA.isFunction('abc'); //=> false
 */
var isFunction = (0, _ramda.anyPass)([(0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Function')), _isGeneratorFunction["default"], _isAsyncFunction["default"]]);
var _default = isFunction;
exports["default"] = _default;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(384);


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */

var equals =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function equals(a, b) {
  return Object(_internal_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b, [], []);
});

/* harmony default export */ __webpack_exports__["default"] = (equals);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _internal_xmap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(375);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);







/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */

var map =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['fantasy-land/map', 'map'], _internal_xmap_js__WEBPACK_IMPORTED_MODULE_4__["default"], function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_5__["default"])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });

    case '[object Object]':
      return Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, Object(_keys_js__WEBPACK_IMPORTED_MODULE_6__["default"])(functor));

    default:
      return Object(_internal_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, functor);
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _internal_isArguments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);


 // cover IE < 9 keys issues

var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && Object(_internal_isArguments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);

  for (prop in obj) {
    if (Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});
/* harmony default export */ __webpack_exports__["default"] = (keys);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */

var slice =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__["default"])('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

/* harmony default export */ __webpack_exports__["default"] = (slice);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arity; });
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _concat; });
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;

  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }

  idx = 0;

  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }

  return result;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */

var reduce =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (reduce);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ __webpack_exports__["default"] = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _reduced; });
function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _paths_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 */

var path =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function path(pathAr, obj) {
  return Object(_paths_js__WEBPACK_IMPORTED_MODULE_1__["default"])([pathAr], obj)[0];
});

/* harmony default export */ __webpack_exports__["default"] = (path);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _includes; });
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);

function _includes(a, list) {
  return Object(_indexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list, a, 0) >= 0;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */

var max =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function max(a, b) {
  return b > a ? b : a;
});

/* harmony default export */ __webpack_exports__["default"] = (max);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */

var nth =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return Object(_internal_isString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list) ? list.charAt(idx) : list[idx];
});

/* harmony default export */ __webpack_exports__["default"] = (nth);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isString; });
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isFunction; });
function _isFunction(x) {
  var type = Object.prototype.toString.call(x);
  return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);



/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */

var pluck =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pluck(p, list) {
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_prop_js__WEBPACK_IMPORTED_MODULE_2__["default"])(p), list);
});

/* harmony default export */ __webpack_exports__["default"] = (pluck);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */

var reverse =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function reverse(list) {
  return Object(_internal_isString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});

/* harmony default export */ __webpack_exports__["default"] = (reverse);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);




/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of any of the target object's methods to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      const sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      const sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 *
 *      const dog = {
 *        speak: async () => 'Woof!'
 *      };
 *      const speak = R.invoker(0, 'speak');
 *      speak(dog).then(console.log) //~> 'Woof!'
 *
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */

var invoker =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function invoker(arity, method) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arity + 1, function () {
    var target = arguments[arity];

    if (target != null && Object(_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }

    throw new TypeError(Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target) + ' does not have a method named "' + method + '"');
  });
});

/* harmony default export */ __webpack_exports__["default"] = (invoker);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _checkForMethod; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */

function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;

    if (length === 0) {
      return fn();
    }

    var obj = arguments[length - 1];
    return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_toString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */

var toString =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function toString(val) {
  return Object(_internal_toString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val, []);
});

/* harmony default export */ __webpack_exports__["default"] = (toString);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
 // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;

  while (idx < length) {
    var source = arguments[idx];

    if (source != null) {
      for (var nextKey in source) {
        if (Object(_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }

    idx += 1;
  }

  return output;
}

/* harmony default export */ __webpack_exports__["default"] = (typeof Object.assign === 'function' ? Object.assign : _objectAssign);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _map; });
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _includesWith; });
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if value is a `Number` primitive or object.
 *
 * @func isNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotNumber|isNotNumber}
 * @example
 *
 * RA.isNumber(5); // => true
 * RA.isNumber(Number.MAX_VALUE); // => true
 * RA.isNumber(-Infinity); // => true
 * RA.isNumber(NaN); // => true
 * RA.isNumber('5'); // => false
 */
var isNumber = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Number')));
var _default = isNumber;
exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.isIntegerPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Number = _interopRequireDefault(__webpack_require__(426));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isIntegerPonyfill = (0, _ramda.curryN)(1, _Number["default"]);
/**
 * Checks whether the passed value is an `integer`.
 *
 * @func isInteger
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotInteger|isNotInteger}
 * @example
 *
 * RA.isInteger(0); //=> true
 * RA.isInteger(1); //=> true
 * RA.isInteger(-100000); //=> true
 *
 * RA.isInteger(0.1);       //=> false
 * RA.isInteger(Math.PI);   //=> false
 *
 * RA.isInteger(NaN);       //=> false
 * RA.isInteger(Infinity);  //=> false
 * RA.isInteger(-Infinity); //=> false
 * RA.isInteger('10');      //=> false
 * RA.isInteger(true);      //=> false
 * RA.isInteger(false);     //=> false
 * RA.isInteger([1]);       //=> false
 */

exports.isIntegerPonyfill = isIntegerPonyfill;
var isInteger = (0, _isFunction["default"])(Number.isInteger) ? (0, _ramda.curryN)(1, (0, _ramda.bind)(Number.isInteger, Number)) : isIntegerPonyfill;
var _default = isInteger;
exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);



/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

var _isArrayLike =
/*#__PURE__*/
Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function isArrayLike(x) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x)) {
    return false;
  }

  if (x.nodeType === 1) {
    return !!x.length;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

/* harmony default export */ __webpack_exports__["default"] = (_isArrayLike);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is `Array`.
 *
 * @func isArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * RA.isArray([]); //=> true
 * RA.isArray(null); //=> false
 * RA.isArray({}); //=> false
 */
var isArray = (0, _ramda.curryN)(1, (0, _isFunction["default"])(Array.isArray) ? Array.isArray : (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Array')));
var _default = isArray;
exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/* eslint-disable max-len */

/**
 * Composable shortcut for `Promise.resolve`.
 *
 * Returns a Promise object that is resolved with the given value.
 * If the value is a thenable (i.e. has a "then" method), the returned promise will
 * "follow" that thenable, adopting its eventual state.
 *
 * @func resolveP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.16.0|v1.16.0}
 * @category Function
 * @sig a -> Promise a
 * @param {*} [value=undefined] Argument to be resolved by this Promise. Can also be a Promise or a thenable to resolve
 * @return {Promise} A Promise that is resolved with the given value, or the promise passed as value, if the value was a promise object
 * @see {@link RA.rejectP|rejectP}
 * @example
 *
 * RA.resolveP(); //=> Promise(undefined)
 * RA.resolveP('a'); //=> Promise('a')
 * RA.resolveP([1, 2, 3]); //=> Promise([1, 2, 3])
 */

/* eslint-enable max-len */
var resolveP = (0, _ramda.bind)(Promise.resolve, Promise);
var _default = resolveP;
exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */

var add =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function add(a, b) {
  return Number(a) + Number(b);
});

/* harmony default export */ __webpack_exports__["default"] = (add);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */

var always =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function always(val) {
  return function () {
    return val;
  };
});

/* harmony default export */ __webpack_exports__["default"] = (always);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */

var assoc =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function assoc(prop, val, obj) {
  var result = {};

  for (var p in obj) {
    result[p] = obj[p];
  }

  result[prop] = val;
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (assoc);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      const takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */

var nAry =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };

    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };

    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };

    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});

/* harmony default export */ __webpack_exports__["default"] = (nAry);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _liftN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      const madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */

var lift =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lift(fn) {
  return Object(_liftN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn.length, fn);
});

/* harmony default export */ __webpack_exports__["default"] = (lift);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */

var tail =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__["default"])('tail',
/*#__PURE__*/
Object(_slice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, Infinity)));

/* harmony default export */ __webpack_exports__["default"] = (tail);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */

var identity =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (identity);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_complement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);



/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var reject =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function reject(pred, filterable) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_internal_complement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pred), filterable);
});

/* harmony default export */ __webpack_exports__["default"] = (reject);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_clone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _internal_curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _internal_xreduceBy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(388);






/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      const groupNames = (acc, {name}) => acc.concat(name)
 *      const toGrade = ({score}) =>
 *        score < 65 ? 'F' :
 *        score < 70 ? 'D' :
 *        score < 80 ? 'C' :
 *        score < 90 ? 'B' : 'A'
 *
 *      var students = [
 *        {name: 'Abby', score: 83},
 *        {name: 'Bart', score: 62},
 *        {name: 'Curt', score: 88},
 *        {name: 'Dora', score: 92},
 *      ]
 *
 *      reduceBy(groupNames, [], toGrade, students)
 *      //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
 */

var reduceBy =
/*#__PURE__*/
Object(_internal_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(4, [],
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_2__["default"])([], _internal_xreduceBy_js__WEBPACK_IMPORTED_MODULE_5__["default"], function reduceBy(valueFn, valueAcc, keyFn, list) {
  return Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_4__["default"])(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, acc) ? acc[key] : Object(_internal_clone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(valueAcc, [], [], false), elt);
    return acc;
  }, {}, list);
}));

/* harmony default export */ __webpack_exports__["default"] = (reduceBy);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */

var flip =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function flip(fn) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (flip);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */

var lens =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return Object(_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});

/* harmony default export */ __webpack_exports__["default"] = (lens);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _mergeWithKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);



/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */

var mergeDeepWithKey =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeDeepWithKey(fn, lObj, rObj) {
  return Object(_mergeWithKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (k, lVal, rVal) {
    if (Object(_internal_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(lVal) && Object(_internal_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});

/* harmony default export */ __webpack_exports__["default"] = (mergeDeepWithKey);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _curryN; });
/* harmony import */ var _arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : Object(_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(left, _curryN(length, combined, fn));
  };
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _identity; });
function _identity(x) {
  return x;
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is `String`.
 *
 * @func isString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotString|isNotString}
 * @example
 *
 * RA.isString('abc'); //=> true
 * RA.isString(1); //=> false
 */
var isString = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('String')));
var _default = isString;
exports["default"] = _default;

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */

var isNil =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function isNil(x) {
  return x == null;
});

/* harmony default export */ __webpack_exports__["default"] = (isNil);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */

var type =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

/* harmony default export */ __webpack_exports__["default"] = (type);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _reverse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


/**
 * Performs right-to-left function composition. The last argument may have
 * any arity; the remaining arguments must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */

function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return _pipe_js__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this, Object(_reverse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments));
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isObject; });
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Composable shortcut for `Promise.all`.
 *
 * The `allP` method returns a single Promise that resolves when all of the promises
 * in the iterable argument have resolved or when the iterable argument contains no promises.
 * It rejects with the reason of the first promise that rejects.
 *
 * @func allP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Function
 * @sig [Promise a] -> Promise [a]
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} An already resolved Promise if the iterable passed is empty. An asynchronously resolved Promise if the iterable passed contains no promises. Note, Google Chrome 58 returns an already resolved promise in this case. A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously (as soon as the stack is empty) when all the promises in the given iterable have resolved, or if any of the promises reject. See the example about "Asynchronicity or synchronicity of allP" below.
 * @see {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}
 * @example
 *
 * RA.allP([1, 2]); //=> Promise([1, 2])
 * RA.allP([1, Promise.resolve(2)]); //=> Promise([1, 2])
 * RA.allP([Promise.resolve(1), Promise.resolve(2)]); //=> Promise([1, 2])
 * RA.allP([1, Promise.reject(2)]); //=> Promise(2)
 */
var allP = (0, _ramda.curryN)(1, (0, _ramda.bind)(Promise.all, Promise));
var _default = allP;
exports["default"] = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var compareLength = (0, _ramda.curry)(function (comparator, value, list) {
  return (0, _ramda.compose)(comparator(value), _ramda.length)(list);
});
var _default = compareLength;
exports["default"] = _default;

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig Idx -> {s: a} -> a | Undefined
 * @param {String|Number} p The property name or array index
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path, R.nth
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.prop(0, [100]); //=> 100
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */

var prop =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function prop(p, obj) {
  return Object(_path_js__WEBPACK_IMPORTED_MODULE_1__["default"])([p], obj);
});

/* harmony default export */ __webpack_exports__["default"] = (prop);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */

var ap =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } : Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (acc, f) {
    return Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(acc, Object(_map_js__WEBPACK_IMPORTED_MODULE_3__["default"])(f, applyX));
  }, [], applyF);
});

/* harmony default export */ __webpack_exports__["default"] = (ap);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curry =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function curry(fn) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn.length, fn);
});

/* harmony default export */ __webpack_exports__["default"] = (curry);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_makeFlat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(133);
/* harmony import */ var _internal_xchain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(379);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);





/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries.
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      const duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */

var chain =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['fantasy-land/chain', 'chain'], _internal_xchain_js__WEBPACK_IMPORTED_MODULE_3__["default"], function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }

  return Object(_internal_makeFlat_js__WEBPACK_IMPORTED_MODULE_2__["default"])(false)(Object(_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])(fn, monad));
}));

/* harmony default export */ __webpack_exports__["default"] = (chain);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _internal_isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);





/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */

var concat =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function concat(a, b) {
  if (Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a)) {
    if (Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b)) {
      return a.concat(b);
    }

    throw new TypeError(Object(_toString_js__WEBPACK_IMPORTED_MODULE_4__["default"])(b) + ' is not an array');
  }

  if (Object(_internal_isString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a)) {
    if (Object(_internal_isString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(b)) {
      return a + b;
    }

    throw new TypeError(Object(_toString_js__WEBPACK_IMPORTED_MODULE_4__["default"])(b) + ' is not a string');
  }

  if (a != null && Object(_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }

  if (a != null && Object(_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a.concat)) {
    return a.concat(b);
  }

  throw new TypeError(Object(_toString_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});

/* harmony default export */ __webpack_exports__["default"] = (concat);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _internal_xfilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(386);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);







/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var filter =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['filter'], _internal_xfilter_js__WEBPACK_IMPORTED_MODULE_5__["default"], function (pred, filterable) {
  return Object(_internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(filterable) ? Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_4__["default"])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }

    return acc;
  }, {}, Object(_keys_js__WEBPACK_IMPORTED_MODULE_6__["default"])(filterable)) : // else
  Object(_internal_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pred, filterable);
}));

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _adjust_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var _always_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);



/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
 *      R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */

var update =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function update(idx, x, list) {
  return Object(_adjust_js__WEBPACK_IMPORTED_MODULE_1__["default"])(idx, Object(_always_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x), list);
});

/* harmony default export */ __webpack_exports__["default"] = (update);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xtake_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(392);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);




/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      const personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      const takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */

var take =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['take'], _internal_xtake_js__WEBPACK_IMPORTED_MODULE_2__["default"], function take(n, xs) {
  return Object(_slice_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0, n < 0 ? Infinity : n, xs);
}));

/* harmony default export */ __webpack_exports__["default"] = (take);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _uniqBy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113);


/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */

var uniq =
/*#__PURE__*/
Object(_uniqBy_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_identity_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (uniq);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */

var mergeWithKey =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, l)) {
      result[k] = Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, r) && !Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (mergeWithKey);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isTransformer; });
function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _clone; });
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);


/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */

function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;

    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }

      idx += 1;
    }

    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;

    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }

    return copiedValue;
  };

  switch (Object(_type_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    case 'Object':
      return copy({});

    case 'Array':
      return copy([]);

    case 'Date':
      return new Date(value.valueOf());

    case 'RegExp':
      return Object(_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

    default:
      return value;
  }
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _filter; });
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }

    idx += 1;
  }

  return result;
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (typeof Object.is === 'function' ? Object.is : _objectIs);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * A function that returns `undefined`.
 *
 * @func stubUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.0.0|v1.0.0}
 * @category Function
 * @sig ... -> undefined
 * @return {undefined}
 * @example
 *
 * RA.stubUndefined(); //=> undefined
 * RA.stubUndefined(1, 2, 3); //=> undefined
 */
var stubUndefined = (0, _ramda.always)(void 0); // eslint-disable-line no-void

var _default = stubUndefined;
exports["default"] = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.isFinitePonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Number = _interopRequireDefault(__webpack_require__(425));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isFinitePonyfill = (0, _ramda.curryN)(1, _Number["default"]);
/**
 * Checks whether the passed value is a finite `Number`.
 *
 * @func isFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotFinite|isNotFinite}
 * @example
 *
 * RA.isFinite(Infinity); //=> false
 * RA.isFinite(NaN); //=> false
 * RA.isFinite(-Infinity); //=> false
 *
 * RA.isFinite(0); // true
 * RA.isFinite(2e64); // true
 *
 * RA.isFinite('0');  // => false
 *                    // would've been true with global isFinite('0')
 * RA.isFinite(null); // => false
 *                    // would've been true with global isFinite(null)
 */

exports.isFinitePonyfill = isFinitePonyfill;

var _isFinite = (0, _isFunction["default"])(Number.isFinite) ? (0, _ramda.curryN)(1, (0, _ramda.bind)(Number.isFinite, Number)) : isFinitePonyfill;

var _default = _isFinite;
exports["default"] = _default;

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_Set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */

var difference =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new _internal_Set_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }

  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }

    idx += 1;
  }

  return out;
});

/* harmony default export */ __webpack_exports__["default"] = (difference);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_includesWith_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      const cmp = (x, y) => x.a === y.a;
 *      const l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      const l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */

var differenceWith =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;

  while (idx < firstLen) {
    if (!Object(_internal_includesWith_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pred, first[idx], second) && !Object(_internal_includesWith_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pred, first[idx], out)) {
      out.push(first[idx]);
    }

    idx += 1;
  }

  return out;
});

/* harmony default export */ __webpack_exports__["default"] = (differenceWith);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNumber; });
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isUndefined = _interopRequireDefault(__webpack_require__(81));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is complement `undefined`.
 *
 * @func isNotUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.0.1|v0.0.1}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isUndefined|isUndefined}
 * @example
 *
 * RA.isNotUndefined(1); //=> true
 * RA.isNotUndefined(undefined); //=> false
 * RA.isNotUndefined(null); //=> true
 */
var isNotUndefined = (0, _ramda.complement)(_isUndefined["default"]);
var _default = isNotUndefined;
exports["default"] = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _stubUndefined = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is `undefined`.
 *
 * @func isUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.0.1|v0.0.1}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotUndefined|isNotUndefined}
 * @example
 *
 * RA.isUndefined(1); //=> false
 * RA.isUndefined(undefined); //=> true
 * RA.isUndefined(null); //=> false
 */
var isUndefined = (0, _ramda.equals)((0, _stubUndefined["default"])());
var _default = isUndefined;
exports["default"] = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns true if the given value is not its type's empty value; `false` otherwise.
 *
 * @func isNotEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Logic
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|R.isEmpty}
 * @example
 *
 * RA.isNotEmpty([1, 2, 3]); //=> true
 * RA.isNotEmpty([]); //=> false
 * RA.isNotEmpty(''); //=> false
 * RA.isNotEmpty(null); //=> true
 * RA.isNotEmpty(undefined): //=> true
 * RA.isNotEmpty({}); //=> false
 * RA.isNotEmpty({length: 0}); //=> true
 */
var isNotEmpty = (0, _ramda.complement)(_ramda.isEmpty);
var _default = isNotEmpty;
exports["default"] = _default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNotNull = _interopRequireDefault(__webpack_require__(144));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _isOfTypeObject = _interopRequireDefault(__webpack_require__(341));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if input value is language type of `Object`.
 *
 * @func isObj
 * @aliases isObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotObj|isNotObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isObj({}); //=> true
 * RA.isObj([]); //=> true
 * RA.isObj(() => {}); //=> true
 * RA.isObj(null); //=> false
 * RA.isObj(undefined); //=> false
 */

/* eslint-enable max-len */
var isObj = (0, _ramda.curryN)(1, (0, _ramda.both)(_isNotNull["default"], (0, _ramda.either)(_isOfTypeObject["default"], _isFunction["default"])));
var _default = isObj;
exports["default"] = _default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Composable shortcut for `Promise.reject`.
 *
 * Returns a Promise object that is rejected with the given reason.
 *
 * @func rejectP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.16.0|v1.16.0}
 * @category Function
 * @sig a -> Promise a
 * @param {*} [reason=undefined] Reason why this Promise rejected
 * @return {Promise} A Promise that is rejected with the given reason
 * @see {@link RA.resolveP|resolveP}
 * @example
 *
 * RA.rejectP(); //=> Promise(undefined)
 * RA.rejectP('a'); //=> Promise('a')
 * RA.rejectP([1, 2, 3]); //=> Promise([1, 2, 3])
 */
var rejectP = (0, _ramda.bind)(Promise.reject, Promise);
var _default = rejectP;
exports["default"] = _default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _compareLength = _interopRequireDefault(__webpack_require__(60));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if the supplied list or string has a length equal to `valueLength`.
 *
 * @func lengthEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthLte|lengthLte}, {@link RA.lengthGte|lengthGte},, {@link http://ramdajs.com/docs/#equals|equals}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthEq(3, [1,2,3]); //=> true
 * RA.lengthEq(3, [1,2,3,4]); //=> false
 */
var lengthEq = (0, _compareLength["default"])(_ramda.equals);
var _default = lengthEq;
exports["default"] = _default;

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> (a -> a) -> [a] -> [a]
 * @param {Number} idx The index.
 * @param {Function} fn The function to apply.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 *      R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 * @symb R.adjust(-1, f, [a, b]) = [a, f(b)]
 * @symb R.adjust(0, f, [a, b]) = [f(a), b]
 */

var adjust =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function adjust(idx, fn, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }

  var start = idx < 0 ? list.length : 0;

  var _idx = start + idx;

  var _list = Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list);

  _list[_idx] = fn(list[_idx]);
  return _list;
});

/* harmony default export */ __webpack_exports__["default"] = (adjust);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(374);



/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      const equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */

var all =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['all'], _internal_xall_js__WEBPACK_IMPORTED_MODULE_2__["default"], function all(fn, list) {
  var idx = 0;

  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }

    idx += 1;
  }

  return true;
}));

/* harmony default export */ __webpack_exports__["default"] = (all);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

var bind =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function bind(fn, thisObj) {
  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (bind);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);



/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Object
 * @typedefn Idx = [String | Int]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */

var paths =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj;
    var idx = 0;
    var p;

    while (idx < paths.length) {
      if (val == null) {
        return;
      }

      p = paths[idx];
      val = Object(_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p) ? Object(_nth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(p, val) : val[p];
      idx += 1;
    }

    return val;
  });
});

/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both, R.xor
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */

var and =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function and(a, b) {
  return a && b;
});

/* harmony default export */ __webpack_exports__["default"] = (and);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      const nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */

var apply =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function apply(fn, args) {
  return fn.apply(this, args);
});

/* harmony default export */ __webpack_exports__["default"] = (apply);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */

var values =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function values(obj) {
  var props = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;

  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }

  return vals;
});

/* harmony default export */ __webpack_exports__["default"] = (values);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _internal_isInteger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _assoc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _isNil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55);






/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */

var assocPath =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }

  var idx = path[0];

  if (path.length > 1) {
    var nextObj = !Object(_isNil_js__WEBPACK_IMPORTED_MODULE_5__["default"])(obj) && Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(idx, obj) ? obj[idx] : Object(_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }

  if (Object(_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_3__["default"])(idx) && Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return Object(_assoc_js__WEBPACK_IMPORTED_MODULE_4__["default"])(idx, val, obj);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (assocPath);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _ap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);





/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      const madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */

var liftN =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function liftN(arity, fn) {
  var lifted = Object(_curryN_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arity, fn);
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arity, function () {
    return Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ap_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});

/* harmony default export */ __webpack_exports__["default"] = (liftN);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */

var not =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function not(a) {
  return !a;
});

/* harmony default export */ __webpack_exports__["default"] = (not);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pipe; });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_pipe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(382);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _tail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);




/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */

function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }

  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments[0].length, Object(_reduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_internal_pipe_js__WEBPACK_IMPORTED_MODULE_1__["default"], arguments[0], Object(_tail_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arguments)));
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return composeK; });
/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @deprecated since v0.26.0
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       const get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       const getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */

function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }

  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return Object(_compose_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_compose_js__WEBPACK_IMPORTED_MODULE_1__["default"].apply(this, Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_chain_js__WEBPACK_IMPORTED_MODULE_0__["default"], init)), last);
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pipeP; });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_pipeP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(383);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _tail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);




/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The first argument may have any arity; the remaining arguments
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @deprecated since v0.26.0
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      const followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */

function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }

  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments[0].length, Object(_reduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_internal_pipeP_js__WEBPACK_IMPORTED_MODULE_1__["default"], arguments[0], Object(_tail_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arguments)));
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _head_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _tail_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);






/**
 * Performs left-to-right function composition using transforming function. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * **Note:** The result of pipeWith is not automatically curried. Transforming function is not used on the
 * first argument.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((* -> *), [((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)]) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeWith, R.pipe
 * @example
 *
 *      const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
 *      const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipeWith(f)([g, h, i])(...args) = f(i, f(h, g(...args)))
 */

var pipeWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function pipeWith(xf, list) {
  if (list.length <= 0) {
    return _identity_js__WEBPACK_IMPORTED_MODULE_5__["default"];
  }

  var headList = Object(_head_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list);
  var tailList = Object(_tail_js__WEBPACK_IMPORTED_MODULE_4__["default"])(list);
  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(headList.length, function () {
    return Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function (result, f) {
      return xf.call(this, f, result);
    }, headList.apply(this, arguments), tailList);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (pipeWith);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);

/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */

var head =
/*#__PURE__*/
Object(_nth_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
/* harmony default export */ __webpack_exports__["default"] = (head);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _nAry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);



/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      const ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      const salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */

var constructN =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }

  if (n === 0) {
    return function () {
      return new Fn();
    };
  }

  return Object(_curry_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_nAry_js__WEBPACK_IMPORTED_MODULE_2__["default"])(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);

      case 2:
        return new Fn($0, $1);

      case 3:
        return new Fn($0, $1, $2);

      case 4:
        return new Fn($0, $1, $2, $3);

      case 5:
        return new Fn($0, $1, $2, $3, $4);

      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);

      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);

      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);

      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);

      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});

/* harmony default export */ __webpack_exports__["default"] = (constructN);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);






/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. The arity of the new function is the same as the arity of
 * the longest branching function. When invoked, this new function is applied
 * to some arguments, and each branching function is applied to those same
 * arguments. The results of each branching function are passed as arguments
 * to the converging function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      const average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */

var converge =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function converge(after, fns) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_reduce_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_max_js__WEBPACK_IMPORTED_MODULE_3__["default"], 0, Object(_pluck_js__WEBPACK_IMPORTED_MODULE_4__["default"])('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, Object(_internal_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});

/* harmony default export */ __webpack_exports__["default"] = (converge);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */

var defaultTo =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});

/* harmony default export */ __webpack_exports__["default"] = (defaultTo);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc, R.omit
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */

var dissoc =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function dissoc(prop, obj) {
  var result = {};

  for (var p in obj) {
    result[p] = obj[p];
  }

  delete result[prop];
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (dissoc);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @see R.without
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */

var remove =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (remove);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xdrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(389);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);




/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */

var drop =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['drop'], _internal_xdrop_js__WEBPACK_IMPORTED_MODULE_2__["default"], function drop(n, xs) {
  return Object(_slice_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Math.max(0, n), Infinity, xs);
}));

/* harmony default export */ __webpack_exports__["default"] = (drop);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xdropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(139);
/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(108);




/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */

var dropRepeatsWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([], _internal_xdropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_2__["default"], function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;

  if (len !== 0) {
    result[0] = list[0];

    while (idx < len) {
      if (!pred(Object(_last_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result), list[idx])) {
        result[result.length] = list[idx];
      }

      idx += 1;
    }
  }

  return result;
}));

/* harmony default export */ __webpack_exports__["default"] = (dropRepeatsWith);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);

/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */

var last =
/*#__PURE__*/
Object(_nth_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1);
/* harmony default export */ __webpack_exports__["default"] = (last);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either, R.xor
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */

var or =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function or(a, b) {
  return a || b;
});

/* harmony default export */ __webpack_exports__["default"] = (or);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
/* harmony import */ var _internal_isString_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);





/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */

var empty =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x) ? [] : Object(_internal_isString_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x) ? '' : Object(_internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(x) ? {} : Object(_internal_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x) ? function () {
    return arguments;
  }() : void 0 // else
  ;
});

/* harmony default export */ __webpack_exports__["default"] = (empty);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _drop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */

var takeLast =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function takeLast(n, xs) {
  return Object(_drop_js__WEBPACK_IMPORTED_MODULE_1__["default"])(n >= 0 ? xs.length - n : 0, xs);
});

/* harmony default export */ __webpack_exports__["default"] = (takeLast);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _isNil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);



/**
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array} path The path to use.
 * @param {Object} obj The object to check the path in.
 * @return {Boolean} Whether the path exists.
 * @see R.has
 * @example
 *
 *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
 *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
 *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
 *      R.hasPath(['a', 'b'], {});                  // => false
 */

var hasPath =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function hasPath(_path, obj) {
  if (_path.length === 0 || Object(_isNil_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    return false;
  }

  var val = obj;
  var idx = 0;

  while (idx < _path.length) {
    if (!Object(_isNil_js__WEBPACK_IMPORTED_MODULE_2__["default"])(val) && Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }

  return true;
});

/* harmony default export */ __webpack_exports__["default"] = (hasPath);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */

var uniqBy =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function uniqBy(fn, list) {
  var set = new _internal_Set_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);

    if (set.add(appliedItem)) {
      result.push(item);
    }

    idx += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (uniqBy);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      const matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */

var objOf =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});

/* harmony default export */ __webpack_exports__["default"] = (objOf);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */

var is =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});

/* harmony default export */ __webpack_exports__["default"] = (is);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _converge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      const getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */

var juxt =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function juxt(fns) {
  return Object(_converge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});

/* harmony default export */ __webpack_exports__["default"] = (juxt);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */

var length =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function length(list) {
  return list != null && Object(_internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list.length) ? list.length : NaN;
});

/* harmony default export */ __webpack_exports__["default"] = (length);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);


/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */

var mean =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mean(list) {
  return Object(_sum_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list) / list.length;
});

/* harmony default export */ __webpack_exports__["default"] = (mean);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */

var sum =
/*#__PURE__*/
Object(_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_add_js__WEBPACK_IMPORTED_MODULE_0__["default"], 0);
/* harmony default export */ __webpack_exports__["default"] = (sum);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      const double = R.multiply(2);
 *      const triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */

var multiply =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function multiply(a, b) {
  return a * b;
});

/* harmony default export */ __webpack_exports__["default"] = (multiply);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
 // `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.

var Identity = function (x) {
  return {
    value: x,
    map: function (f) {
      return Identity(f(x));
    }
  };
};
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */


var over =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});

/* harmony default export */ __webpack_exports__["default"] = (over);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _defaultTo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);



/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */

var pathOr =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pathOr(d, p, obj) {
  return Object(_defaultTo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(d, Object(_path_js__WEBPACK_IMPORTED_MODULE_2__["default"])(p, obj));
});

/* harmony default export */ __webpack_exports__["default"] = (pathOr);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */

var pickAll =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (pickAll);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */

var prepend =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function prepend(el, list) {
  return Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"])([el], list);
});

/* harmony default export */ __webpack_exports__["default"] = (prepend);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */

var useWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function useWith(fn, transformers) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(transformers.length, function () {
    var args = [];
    var idx = 0;

    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }

    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});

/* harmony default export */ __webpack_exports__["default"] = (useWith);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */

var reduceRight =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;

  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }

  return acc;
});

/* harmony default export */ __webpack_exports__["default"] = (reduceRight);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */

var times =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }

  list = new Array(len);

  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }

  return list;
});

/* harmony default export */ __webpack_exports__["default"] = (times);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _ap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _prepend_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(124);
/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(126);





/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */

var sequence =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : Object(_reduceRight_js__WEBPACK_IMPORTED_MODULE_4__["default"])(function (x, acc) {
    return Object(_ap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_prepend_js__WEBPACK_IMPORTED_MODULE_3__["default"], x), acc);
  }, of([]), traversable);
});

/* harmony default export */ __webpack_exports__["default"] = (sequence);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_includesWith_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      const strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */

var uniqWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;

  while (idx < len) {
    item = list[idx];

    if (!Object(_internal_includesWith_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pred, item, result)) {
      result[result.length] = item;
    }

    idx += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (uniqWith);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */

var where =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function where(spec, testObj) {
  for (var prop in spec) {
    if (Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }

  return true;
});

/* harmony default export */ __webpack_exports__["default"] = (where);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _xwrap; });
var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var toString = Object.prototype.toString;

var _isArguments =
/*#__PURE__*/
function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return Object(_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])('callee', x);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_isArguments);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _makeFlat; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);

/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */

function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;

        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }

      idx += 1;
    }

    return result;
  };
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _cloneRegExp; });
function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toString; });
/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _quote_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var _toISOString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(387);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);






function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return Object(_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(y, xs) ? '<Circular>' : _toString(y, xs);
  }; //  mapPairs :: (Object, [String]) -> [String]


  var mapPairs = function (obj, keys) {
    return Object(_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (k) {
      return Object(_quote_js__WEBPACK_IMPORTED_MODULE_2__["default"])(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + Object(_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(recur, x).join(', ') + '))';

    case '[object Array]':
      return '[' + Object(_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(recur, x).concat(mapPairs(x, Object(_reject_js__WEBPACK_IMPORTED_MODULE_5__["default"])(function (k) {
        return /^\d+$/.test(k);
      }, Object(_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x)))).join(', ') + ']';

    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : Object(_quote_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_toISOString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(x))) + ')';

    case '[object Null]':
      return 'null';

    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);

    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : Object(_quote_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x);

    case '[object Undefined]':
      return 'undefined';

    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();

        if (repr !== '[object Object]') {
          return repr;
        }
      }

      return '{' + mapPairs(x, Object(_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x)).join(', ') + '}';
  }
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _indexOf; });
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

function _indexOf(list, a, idx) {
  var inf, item; // Array.prototype.indexOf doesn't exist below IE9

  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;

          while (idx < list.length) {
            item = list[idx];

            if (item === 0 && 1 / item === inf) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];

            if (typeof item === 'number' && item !== item) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } // non-zero numbers can utilise Set


        return list.indexOf(a, idx);
      // all these types can utilise Set

      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }

    }
  } // anything else not covered above, defer to R.equals


  while (idx < list.length) {
    if (Object(_equals_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list[idx], a)) {
      return idx;
    }

    idx += 1;
  }

  return -1;
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _complement; });
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);


var _Set =
/*#__PURE__*/
function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  }; //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //


  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  }; //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //


  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;

  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }

          return false;
        }
      } // these types can all utilise the native Set


      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;

          set._nativeSet.add(item);

          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }

          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }

          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;

        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }

          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }

        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;

          set._nativeSet.add(item);

          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }

          return false;
        }

        if (!Object(_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }

          return false;
        }

        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }

        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }

          return false;
        }

        return true;
      }

    /* falls through */

    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);

      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }

        return false;
      } // scan through all previously applied items


      if (!Object(_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }

        return false;
      }

      return true;
  }
} // A simple Set type that honours R.equals semantics


/* harmony default export */ __webpack_exports__["default"] = (_Set);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XDropRepeatsWith =
/*#__PURE__*/
function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].result;

  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;

    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }

    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return XDropRepeatsWith;
}();

var _xdropRepeatsWith =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xdropRepeatsWith(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xdropRepeatsWith);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertPromise; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);


function _assertPromise(name, p) {
  if (p == null || !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p.then)) {
    throw new TypeError('`' + name + '` expected a Promise, received ' + Object(_toString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, []));
  }
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createPartialApplicator; });
/* harmony import */ var _arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function _createPartialApplicator(concat) {
  return Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (fn, args) {
    return Object(_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _quote; });
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is `null`.
 *
 * @func isNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotNull|isNotNull}
 * @example
 *
 * RA.isNull(1); //=> false
 * RA.isNull(undefined); //=> false
 * RA.isNull(null); //=> true
 */
var isNull = (0, _ramda.equals)(null);
var _default = isNull;
exports["default"] = _default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNull = _interopRequireDefault(__webpack_require__(143));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is complement of `null`.
 *
 * @func isNotNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNull|isNull}
 * @example
 *
 * RA.isNotNull(1); //=> true
 * RA.isNotNull(undefined); //=> true
 * RA.isNotNull(null); //=> false
 */
var isNotNull = (0, _ramda.complement)(_isNull["default"]);
var _default = isNotNull;
exports["default"] = _default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is complement of `null` or `undefined`.
 *
 * @func isNotNil
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#isNil|R.isNil}
 * @example
 *
 * RA.isNotNil(null); //=> false
 * RA.isNotNil(undefined); //=> false
 * RA.isNotNil(0); //=> true
 * RA.isNotNil([]); //=> true
 */
var isNotNil = (0, _ramda.complement)(_ramda.isNil);
var _default = isNotNil;
exports["default"] = _default;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var GeneratorFunction = null;
var legacyCheck = null;

try {
  GeneratorFunction = new Function('return function* () {}')().constructor; // eslint-disable-line no-new-func

  legacyCheck = (0, _ramda.is)(GeneratorFunction);
} catch (e) {
  legacyCheck = _ramda.F;
}
/**
 * Checks if input value is `Generator Function`.
 *
 * @func isGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isNotGeneratorFunction|isNotGeneratorFunction}
 * @example
 *
 * RA.isGeneratorFunction(function* test() { }); //=> true
 * RA.isGeneratorFunction(null); //=> false
 * RA.isGeneratorFunction(function test() { }); //=> false
 * RA.isGeneratorFunction(() => {}); //=> false
 */


var isGeneratorFunction = (0, _ramda.curryN)(1, (0, _ramda.either)((0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('GeneratorFunction')), legacyCheck));
var _default = isGeneratorFunction;
exports["default"] = _default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is `Async Function`.
 *
 * @func isAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isNotAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isAsyncFunction(async function test() { }); //=> true
 * RA.isAsyncFunction(null); //=> false
 * RA.isAsyncFunction(function test() { }); //=> false
 * RA.isAsyncFunction(() => {}); //=> false
 */
var isAsyncFunction = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('AsyncFunction')));
var _default = isAsyncFunction;
exports["default"] = _default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks whether the passed value is iterable.
 *
 * @func isIterable
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.18.0|v2.18.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol}
 * @return {boolean}
 * @example
 *
 * RA.isIterable(['arrays', 'are', 'iterable']); //=> true
 * RA.isIterable('strings are iterable, too'); //=> true
 * RA.isIterable((function* () {})()); //=> true (generator objects are both iterable and iterators)
 *
 * RA.isIterable({}); //=> false
 * RA.isIterable(-0); //=> false
 * RA.isIterable(null); //=> false
 * RA.isIterable(undefined); //=> false
 */
var isIterable = (0, _ramda.curryN)(1, function (val) {
  if (typeof Symbol === 'undefined') {
    return false;
  }

  return (0, _ramda.hasIn)(Symbol.iterator, Object(val)) && (0, _isFunction["default"])(val[Symbol.iterator]);
});
var _default = isIterable;
exports["default"] = _default;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isArray = _interopRequireDefault(__webpack_require__(38));

var _isString = _interopRequireDefault(__webpack_require__(54));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable max-len */

/**
 * Tests whether or not an object is similar to an array.
 *
 * @func isArrayLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.9.0|v1.9.0}
 * @licence https://github.com/ramda/ramda/blob/master/LICENSE.txt
 * @category List
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @returns {boolean} `true` if `val` has a numeric length property and extreme indices defined; `false` otherwise.
 * @see {@link RA.isNotArrayLike|isNotArrayLike}

 * @example
 *
 * RA.isArrayLike([]); //=> true
 * RA.isArrayLike(true); //=> false
 * RA.isArrayLike({}); //=> false
 * RA.isArrayLike({length: 10}); //=> false
 * RA.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

/* eslint-enable max-len */
var isArrayLike = (0, _ramda.curryN)(1, function (val) {
  if ((0, _isArray["default"])(val)) {
    return true;
  }

  if (!val) {
    return false;
  }

  if ((0, _isString["default"])(val)) {
    return false;
  }

  if (_typeof(val) !== 'object') {
    return false;
  }

  if (val.nodeType === 1) {
    return !!val.length;
  }

  if (val.length === 0) {
    return true;
  }

  if (val.length > 0) {
    return (0, _ramda.has)(0, val) && (0, _ramda.has)(val.length - 1, val);
  }

  return false;
});
var _default = isArrayLike;
/**
 The MIT License (MIT)

 Copyright (c) 2013-2016 Scott Sauyet and Michael Hurley

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

exports["default"] = _default;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if input value is complement of `Function`.
 *
 * @func isNotFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotFunction(function test() { }); //=> false
 * RA.isNotFunction(function* test() { }); //=> false
 * RA.isNotFunction(async function test() { }); //=> false
 * RA.isNotFunction(() => {}); //=> false
 * RA.isNotFunction(null); //=> true
 * RA.isNotFunction('abc'); //=> true
 */

/* eslint-enable max-len */
var isNotFunction = (0, _ramda.complement)(_isFunction["default"]);
var _default = isNotFunction;
exports["default"] = _default;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNotNull = _interopRequireDefault(__webpack_require__(144));

var _isOfTypeObject = _interopRequireDefault(__webpack_require__(341));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isObjLike
 * @aliases isObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotObjLike|isNotObjLike}, {@link RA.isObj|isObj}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isObjLike({}); //=> true
 * RA.isObjLike([]); //=> true
 * RA.isObjLike(() => {}); //=> false
 * RA.isObjLike(null); //=> false
 * RA.isObjLike(undefined); //=> false
 */

/* eslint-enable max-len */
var isObjLike = (0, _ramda.curryN)(1, (0, _ramda.both)(_isNotNull["default"], _isOfTypeObject["default"]));
var _default = isObjLike;
exports["default"] = _default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if value is `Date` object.
 *
 * @func isDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotDate|isNotDate}, {@link RA.isValidDate|isValidDate}, {@link RA.isNotValidDate|isNotValidDate}
 * @example
 *
 * RA.isDate(new Date()); //=> true
 * RA.isDate('1997-07-16T19:20+01:00'); //=> false
 */
var isDate = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Date')));
var _default = isDate;
exports["default"] = _default;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNumber = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is a negative `Number` primitive or object. Zero is not considered neither
 * positive or negative.
 *
 * @func isNegative
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.15.0|v1.15.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isPositive|isPositive}
 * @example
 *
 * RA.isNegative(-1); // => true
 * RA.isNegative(Number.MIN_VALUE); // => false
 * RA.isNegative(+Infinity); // => false
 * RA.isNegative(NaN); // => false
 * RA.isNegative('5'); // => false
 */
var isNegative = (0, _ramda.curryN)(1, (0, _ramda.both)(_isNumber["default"], (0, _ramda.gt)(0)));
var _default = isNegative;
exports["default"] = _default;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isInteger = _interopRequireDefault(__webpack_require__(36));

var _isFinite = _interopRequireDefault(__webpack_require__(76));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks whether the passed value is a `float`.
 *
 * @func isFloat
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.14.0|v1.14.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotFloat|isNotFloat}
 * @example
 *
 * RA.isFloat(0); //=> false
 * RA.isFloat(1); //=> false
 * RA.isFloat(-100000); //=> false
 *
 * RA.isFloat(0.1);       //=> true
 * RA.isFloat(Math.PI);   //=> true
 *
 * RA.isFloat(NaN);       //=> false
 * RA.isFloat(Infinity);  //=> false
 * RA.isFloat(-Infinity); //=> false
 * RA.isFloat('10');      //=> false
 * RA.isFloat(true);      //=> false
 * RA.isFloat(false);     //=> false
 * RA.isFloat([1]);       //=> false
 */
var isFloat = (0, _ramda.both)(_isFinite["default"], (0, _ramda.complement)(_isInteger["default"]));
var _default = isFloat;
exports["default"] = _default;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * In JavaScript, a `truthy` value is a value that is considered true
 * when evaluated in a Boolean context. All values are truthy unless
 * they are defined as falsy (i.e., except for `false`, `0`, `""`, `null`, `undefined`, and `NaN`).
 *
 * @func isTruthy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy|truthy}, {@link RA.isFalsy|isFalsy}
 * @example
 *
 * RA.isTruthy({}); // => true
 * RA.isTruthy([]); // => true
 * RA.isTruthy(42); // => true
 * RA.isTruthy(3.14); // => true
 * RA.isTruthy('foo'); // => true
 * RA.isTruthy(new Date()); // => true
 * RA.isTruthy(Infinity); // => true
 */
var isTruthy = (0, _ramda.curryN)(1, Boolean);
var _default = isTruthy;
exports["default"] = _default;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if value is `RegExp` object.
 *
 * @func isRegExp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotRegExp|isNotRegExp}
 * @example
 *
 * RA.isRegExp(new RegExp()); //=> true
 * RA.isRegExp(/(?:)/); //=> true
 * RA.isRegExp(1); //=> false
 */
var isRegExp = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('RegExp')));
var _default = isRegExp;
exports["default"] = _default;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var mapping = Object.freeze({
  equals: 'fantasy-land/equals',
  lte: 'fantasy-land/lte',
  compose: 'fantasy-land/compose',
  id: 'fantasy-land/id',
  concat: 'fantasy-land/concat',
  empty: 'fantasy-land/empty',
  map: 'fantasy-land/map',
  contramap: 'fantasy-land/contramap',
  ap: 'fantasy-land/ap',
  of: 'fantasy-land/of',
  alt: 'fantasy-land/alt',
  zero: 'fantasy-land/zero',
  reduce: 'fantasy-land/reduce',
  traverse: 'fantasy-land/traverse',
  chain: 'fantasy-land/chain',
  chainRec: 'fantasy-land/chainRec',
  extend: 'fantasy-land/extend',
  extract: 'fantasy-land/extract',
  bimap: 'fantasy-land/bimap',
  promap: 'fantasy-land/promap'
});
var _default = mapping;
exports["default"] = _default;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns true if the specified value is equal, in R.equals terms,
 * to at least one element of the given list or false otherwise.
 * Given list can be a string.
 *
 * Like {@link http://ramdajs.com/docs/#contains|R.contains} but with argument order reversed.
 *
 * @func contained
 * @aliases included
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @deprecated since v2.12.0; please use RA.included alias
 * @category List
 * @sig [a] -> a -> Boolean
 * @param {Array|String} list The list to consider
 * @param {*} a The item to compare against
 * @return {boolean} Returns Boolean `true` if an equivalent item is in the list or `false` otherwise
 * @see {@link http://ramdajs.com/docs/#contains|R.contains}
 * @example
 *
 * RA.contained([1, 2, 3], 3); //=> true
 * RA.contained([1, 2, 3], 4); //=> false
 * RA.contained([{ name: 'Fred' }], { name: 'Fred' }); //=> true
 * RA.contained([[42]], [42]); //=> true
 */
var contained = (0, _ramda.flip)(_ramda.contains);
var _default = contained;
exports["default"] = _default;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _compareLength = _interopRequireDefault(__webpack_require__(60));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if the supplied list or string has a length less than or equal to `valueLength`.
 *
 * @func lengthLte
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthGte|lengthGte}, {@link http://ramdajs.com/docs/#lte|lte}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthLte(3, [1,2]); //=> true
 * RA.lengthLte(3, [1,2,3]); //=> true
 * RA.lengthLte(3, [1,2,3,4]); //=> false
 */
var lengthLte = (0, _compareLength["default"])((0, _ramda.flip)(_ramda.lte));
var _default = lengthLte;
exports["default"] = _default;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _isNotFinite = _interopRequireDefault(__webpack_require__(348));

var _isNegative = _interopRequireDefault(__webpack_require__(153));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var repeat = function repeat(value, count) {
  var validCount = Number(count);

  if (validCount !== count) {
    validCount = 0;
  }

  if ((0, _isNegative["default"])(validCount)) {
    throw new RangeError('repeat count must be non-negative');
  }

  if ((0, _isNotFinite["default"])(validCount)) {
    throw new RangeError('repeat count must be less than infinity');
  }

  validCount = Math.floor(validCount);

  if (value.length === 0 || validCount === 0) {
    return '';
  } // Ensuring validCount is a 31-bit integer allows us to heavily optimize the
  // main part. But anyway, most current (August 2014) browsers can't handle
  // strings 1 << 28 chars or longer, so:
  // eslint-disable-next-line no-bitwise


  if (value.length * validCount >= 1 << 28) {
    throw new RangeError('repeat count must not overflow maximum string size');
  }

  var maxCount = value.length * validCount;
  validCount = Math.floor(Math.log(validCount) / Math.log(2));
  var result = value;

  while (validCount) {
    result += value;
    validCount -= 1;
  }

  result += result.substring(0, maxCount - result.length);
  return result;
};

var _default = repeat;
exports["default"] = _default;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Creates a new object with the own properties of the provided object, but the
 * keys renamed according to logic of renaming function.
 *
 * Keep in mind that in the case of keys conflict is behaviour undefined and
 * the result may vary between various JS engines!
 *
 * @func renameKeysWith
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.5.0|v1.5.0}
 * @category Object
 * @sig (a -> b) -> {a: *} -> {b: *}
 * @param {Function} fn Function that renames the keys
 * @param {!Object} obj Provided object
 * @return {!Object} New object with renamed keys
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#rename-keys-of-an-object-by-a-function|Ramda Cookbook}, {@link RA.renameKeys|renameKeys}
 * @example
 *
 * RA.renameKeysWith(R.concat('a'), { A: 1, B: 2, C: 3 }) //=> { aA: 1, aB: 2, aC: 3 }
 */
var renameKeysWith = (0, _ramda.curry)(function (fn, obj) {
  return (0, _ramda.pipe)(_ramda.toPairs, (0, _ramda.map)((0, _ramda.over)((0, _ramda.lensIndex)(0), fn)), _ramda.fromPairs)(obj);
});
var _default = renameKeysWith;
exports["default"] = _default;

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayFromIterator; });
function _arrayFromIterator(iter) {
  var list = [];
  var next;

  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list;
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = function () {
  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (F);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = function () {
  return true;
};

/* harmony default export */ __webpack_exports__["default"] = (T);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @name __
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  '@@functional/placeholder': true
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> ((a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */

var addIndex =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function addIndex(fn) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);

    args[0] = function () {
      var result = origFn.apply(this, Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments, [idx, list]));
      idx += 1;
      return result;
    };

    return fn.apply(this, args);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (addIndex);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);





/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      const isQueen = R.propEq('rank', 'Q');
 *      const isSpade = R.propEq('suit', '♠︎');
 *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */

var allPass =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function allPass(preds) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_reduce_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_max_js__WEBPACK_IMPORTED_MODULE_2__["default"], 0, Object(_pluck_js__WEBPACK_IMPORTED_MODULE_3__["default"])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;

    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }

      idx += 1;
    }

    return true;
  });
});

/* harmony default export */ __webpack_exports__["default"] = (allPass);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xany_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(376);



/**
 * Returns `true` if at least one of the elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      const lessThan0 = R.flip(R.lt)(0);
 *      const lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */

var any =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['any'], _internal_xany_js__WEBPACK_IMPORTED_MODULE_2__["default"], function any(fn, list) {
  var idx = 0;

  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}));

/* harmony default export */ __webpack_exports__["default"] = (any);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);





/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      const isClub = R.propEq('suit', '♣');
 *      const isSpade = R.propEq('suit', '♠');
 *      const isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */

var anyPass =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function anyPass(preds) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_reduce_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_max_js__WEBPACK_IMPORTED_MODULE_2__["default"], 0, Object(_pluck_js__WEBPACK_IMPORTED_MODULE_3__["default"])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;

    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }

      idx += 1;
    }

    return false;
  });
});

/* harmony default export */ __webpack_exports__["default"] = (anyPass);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_aperture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(378);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _internal_xaperture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(377);




/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */

var aperture =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_2__["default"])([], _internal_xaperture_js__WEBPACK_IMPORTED_MODULE_3__["default"], _internal_aperture_js__WEBPACK_IMPORTED_MODULE_0__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (aperture);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */

var append =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function append(el, list) {
  return Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list, [el]);
});

/* harmony default export */ __webpack_exports__["default"] = (append);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);







 // Use custom mapValues function to avoid issues with specs that include a "map" key and R.map
// delegating calls to .map

function mapValues(fn, obj) {
  return Object(_keys_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj).reduce(function (acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}
/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      const getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */


var applySpec =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function applySpec(spec) {
  spec = mapValues(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_reduce_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_max_js__WEBPACK_IMPORTED_MODULE_3__["default"], 0, Object(_pluck_js__WEBPACK_IMPORTED_MODULE_4__["default"])('length', Object(_values_js__WEBPACK_IMPORTED_MODULE_7__["default"])(spec))), function () {
    var args = arguments;
    return mapValues(function (f) {
      return Object(_apply_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f, args);
    }, spec);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (applySpec);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Takes a value and applies a function to it.
 *
 * This function is also known as the `thrush` combinator.
 *
 * @func
 * @memberOf R
 * @since v0.25.0
 * @category Function
 * @sig a -> (a -> b) -> b
 * @param {*} x The value
 * @param {Function} f The function to apply
 * @return {*} The result of applying `f` to `x`
 * @example
 *
 *      const t42 = R.applyTo(42);
 *      t42(R.identity); //=> 42
 *      t42(R.add(1)); //=> 43
 */

var applyTo =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function applyTo(x, f) {
  return f(x);
});

/* harmony default export */ __webpack_exports__["default"] = (applyTo);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      const byAge = R.ascend(R.prop('age'));
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByYoungestFirst = R.sort(byAge, people);
 *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 */

var ascend =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});

/* harmony default export */ __webpack_exports__["default"] = (ascend);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nAry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      const takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      const takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */

var binary =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function binary(fn) {
  return Object(_nAry_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, fn);
});

/* harmony default export */ __webpack_exports__["default"] = (binary);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _and_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90);
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);




/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      const gt10 = R.gt(R.__, 10)
 *      const lt20 = R.lt(R.__, 20)
 *      const f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 *
 *      R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
 *      R.both([false, false, 'a'], [11]); //=> [false, false, 11]
 */

var both =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function both(f, g) {
  return Object(_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : Object(_lift_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_and_js__WEBPACK_IMPORTED_MODULE_2__["default"])(f, g);
});

/* harmony default export */ __webpack_exports__["default"] = (both);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);

/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      const indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      const format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */

var call =
/*#__PURE__*/
Object(_curry_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
/* harmony default export */ __webpack_exports__["default"] = (call);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */

var clamp =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }

  return value < min ? min : value > max ? max : value;
});

/* harmony default export */ __webpack_exports__["default"] = (clamp);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_clone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */

var clone =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : Object(_internal_clone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, [], [], true);
});

/* harmony default export */ __webpack_exports__["default"] = (clone);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      const byAge = R.comparator((a, b) => a.age < b.age);
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByIncreasingAge = R.sort(byAge, people);
 *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 */

var comparator =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});

/* harmony default export */ __webpack_exports__["default"] = (comparator);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _not_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      const isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */

var complement =
/*#__PURE__*/
Object(_lift_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_not_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (complement);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return composeP; });
/* harmony import */ var _pipeP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _reverse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The last arguments may have any arity; the remaining
 * arguments must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @deprecated since v0.26.0
 * @example
 *
 *      const db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      const lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      const lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      const followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */

function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }

  return _pipeP_js__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this, Object(_reverse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments));
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _pipeWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _reverse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);



/**
 * Performs right-to-left function composition using transforming function. The last argument may have
 * any arity; the remaining arguments must be unary.
 *
 * **Note:** The result of compose is not automatically curried. Transforming function is not used on the
 * last argument.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((* -> *), [(y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)]) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.compose, R.pipeWith
 * @example
 *
 *      const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
 *
 *      composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
 *      composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined
 *
 * @symb R.composeWith(f)([g, h, i])(...args) = f(g, f(h, i(...args)))
 */

var composeWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function composeWith(xf, list) {
  return _pipeWith_js__WEBPACK_IMPORTED_MODULE_1__["default"].apply(this, [xf, Object(_reverse_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list)]);
});

/* harmony default export */ __webpack_exports__["default"] = (composeWith);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);





/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @see R.ifElse, R.unless, R.when
 * @example
 *
 *      const fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */

var cond =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function cond(pairs) {
  var arity = Object(_reduce_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_max_js__WEBPACK_IMPORTED_MODULE_3__["default"], 0, Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (pair) {
    return pair[0].length;
  }, pairs));
  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arity, function () {
    var idx = 0;

    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }

      idx += 1;
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (cond);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constructN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      const AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      const animalTypes = ["Lion", "Tiger", "Bear"];
 *      const animalSighting = R.invoker(0, 'sighting');
 *      const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */

var construct =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function construct(Fn) {
  return Object(_constructN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Fn.length, Fn);
});

/* harmony default export */ __webpack_exports__["default"] = (construct);

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Works also with strings.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.includes
 * @deprecated since v0.26.0
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 *      R.contains('ba', 'banana'); //=>true
 */

var contains =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_internal_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (contains);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduceBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);

/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */

var countBy =
/*#__PURE__*/
Object(_reduceBy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (acc, elem) {
  return acc + 1;
}, 0);
/* harmony default export */ __webpack_exports__["default"] = (countBy);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */

var dec =
/*#__PURE__*/
Object(_add_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1);
/* harmony default export */ __webpack_exports__["default"] = (dec);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      const byAge = R.descend(R.prop('age'));
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByOldestFirst = R.sort(byAge, people);
 *        //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
 */

var descend =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});

/* harmony default export */ __webpack_exports__["default"] = (descend);

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _assoc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _dissoc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(104);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(105);
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);







/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */

var dissocPath =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;

    case 1:
      return Object(_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[0]) && Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj) ? Object(_remove_js__WEBPACK_IMPORTED_MODULE_5__["default"])(path[0], 1, obj) : Object(_dissoc_js__WEBPACK_IMPORTED_MODULE_4__["default"])(path[0], obj);

    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);

      if (obj[head] == null) {
        return obj;
      } else if (Object(_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(head) && Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
        return Object(_update_js__WEBPACK_IMPORTED_MODULE_6__["default"])(head, dissocPath(tail, obj[head]), obj);
      } else {
        return Object(_assoc_js__WEBPACK_IMPORTED_MODULE_3__["default"])(head, dissocPath(tail, obj[head]), obj);
      }

  }
});

/* harmony default export */ __webpack_exports__["default"] = (dissocPath);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      const half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      const reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */

var divide =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function divide(a, b) {
  return a / b;
});

/* harmony default export */ __webpack_exports__["default"] = (divide);

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_dropLast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(391);
/* harmony import */ var _internal_xdropLast_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(390);




/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */

var dropLast =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([], _internal_xdropLast_js__WEBPACK_IMPORTED_MODULE_3__["default"], _internal_dropLast_js__WEBPACK_IMPORTED_MODULE_2__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (dropLast);

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_dropLastWhile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(394);
/* harmony import */ var _internal_xdropLastWhile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(393);




/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      const lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */

var dropLastWhile =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([], _internal_xdropLastWhile_js__WEBPACK_IMPORTED_MODULE_3__["default"], _internal_dropLastWhile_js__WEBPACK_IMPORTED_MODULE_2__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (dropLastWhile);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xdropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(139);
/* harmony import */ var _dropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(107);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);





/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */

var dropRepeats =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([],
/*#__PURE__*/
Object(_internal_xdropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_equals_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/*#__PURE__*/
Object(_dropRepeatsWith_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_equals_js__WEBPACK_IMPORTED_MODULE_4__["default"])));

/* harmony default export */ __webpack_exports__["default"] = (dropRepeats);

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xdropWhile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(395);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);




/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      const lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */

var dropWhile =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['dropWhile'], _internal_xdropWhile_js__WEBPACK_IMPORTED_MODULE_2__["default"], function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;

  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }

  return Object(_slice_js__WEBPACK_IMPORTED_MODULE_3__["default"])(idx, Infinity, xs);
}));

/* harmony default export */ __webpack_exports__["default"] = (dropWhile);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _or_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(109);




/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      const gt10 = x => x > 10;
 *      const even = x => x % 2 === 0;
 *      const f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 *
 *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
 *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
 */

var either =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function either(f, g) {
  return Object(_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : Object(_lift_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_or_js__WEBPACK_IMPORTED_MODULE_3__["default"])(f, g);
});

/* harmony default export */ __webpack_exports__["default"] = (either);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _takeLast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);



/**
 * Checks if a list ends with the provided sublist.
 *
 * Similarly, checks if a string ends with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @see R.startsWith
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */

var endsWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (suffix, list) {
  return Object(_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_takeLast_js__WEBPACK_IMPORTED_MODULE_2__["default"])(suffix.length, list), suffix);
});

/* harmony default export */ __webpack_exports__["default"] = (endsWith);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */

var eqBy =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function eqBy(f, x, y) {
  return Object(_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f(x), f(y));
});

/* harmony default export */ __webpack_exports__["default"] = (eqBy);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      const o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      const o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */

var eqProps =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function eqProps(prop, obj1, obj2) {
  return Object(_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj1[prop], obj2[prop]);
});

/* harmony default export */ __webpack_exports__["default"] = (eqProps);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      const transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */

var evolve =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function evolve(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var transformation, key, type;

  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (evolve);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xfind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(396);



/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */

var find =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['find'], _internal_xfind_js__WEBPACK_IMPORTED_MODULE_2__["default"], function find(fn, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }

    idx += 1;
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (find);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xfindIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(397);



/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */

var findIndex =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([], _internal_xfindIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"], function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }

    idx += 1;
  }

  return -1;
}));

/* harmony default export */ __webpack_exports__["default"] = (findIndex);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xfindLast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);



/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */

var findLast =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([], _internal_xfindLast_js__WEBPACK_IMPORTED_MODULE_2__["default"], function findLast(fn, list) {
  var idx = list.length - 1;

  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }

    idx -= 1;
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (findLast);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xfindLastIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(399);



/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */

var findLastIndex =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([], _internal_xfindLastIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"], function findLastIndex(fn, list) {
  var idx = list.length - 1;

  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }

    idx -= 1;
  }

  return -1;
}));

/* harmony default export */ __webpack_exports__["default"] = (findLastIndex);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_makeFlat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(133);


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */

var flatten =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_makeFlat_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true));

/* harmony default export */ __webpack_exports__["default"] = (flatten);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      const printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */

var forEach =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__["default"])('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;

  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }

  return list;
}));

/* harmony default export */ __webpack_exports__["default"] = (forEach);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */

var forEachObjIndexed =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function forEachObjIndexed(fn, obj) {
  var keyList = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  var idx = 0;

  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }

  return obj;
});

/* harmony default export */ __webpack_exports__["default"] = (forEachObjIndexed);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */

var fromPairs =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function fromPairs(pairs) {
  var result = {};
  var idx = 0;

  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (fromPairs);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _reduceBy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);



/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.reduceBy, R.transduce
 * @example
 *
 *      const byGrade = R.groupBy(function(student) {
 *        const score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      const students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */

var groupBy =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__["default"])('groupBy',
/*#__PURE__*/
Object(_reduceBy_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (acc, item) {
  if (acc == null) {
    acc = [];
  }

  acc.push(item);
  return acc;
}, null)));

/* harmony default export */ __webpack_exports__["default"] = (groupBy);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */

var groupWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    var nextidx = idx + 1;

    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }

    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }

  return res;
});

/* harmony default export */ __webpack_exports__["default"] = (groupWith);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */

var gt =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function gt(a, b) {
  return a > b;
});

/* harmony default export */ __webpack_exports__["default"] = (gt);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */

var gte =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function gte(a, b) {
  return a >= b;
});

/* harmony default export */ __webpack_exports__["default"] = (gte);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      const hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      const point = {x: 0, y: 0};
 *      const pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */

var has =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function has(prop, obj) {
  return Object(_hasPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])([prop], obj);
});

/* harmony default export */ __webpack_exports__["default"] = (has);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      const square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */

var hasIn =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function hasIn(prop, obj) {
  return prop in obj;
});

/* harmony default export */ __webpack_exports__["default"] = (hasIn);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_objectIs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * Note this is merely a curried version of ES6 `Object.is`.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      const o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */

var identical =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_internal_objectIs_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (identical);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */

var ifElse =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ifElse(condition, onTrue, onFalse) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (ifElse);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */

var inc =
/*#__PURE__*/
Object(_add_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1);
/* harmony default export */ __webpack_exports__["default"] = (inc);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Works also with strings.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */

var includes =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_internal_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (includes);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduceBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);

/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */

var indexBy =
/*#__PURE__*/
Object(_reduceBy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (acc, elem) {
  return elem;
}, null);
/* harmony default export */ __webpack_exports__["default"] = (indexBy);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_indexOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);



/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */

var indexOf =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(xs) ? xs.indexOf(target) : Object(_internal_indexOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(xs, target, 0);
});

/* harmony default export */ __webpack_exports__["default"] = (indexOf);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */

var init =
/*#__PURE__*/
Object(_slice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, -1);
/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_includesWith_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _internal_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);



/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */

var innerJoin =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function innerJoin(pred, xs, ys) {
  return Object(_internal_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (x) {
    return Object(_internal_includesWith_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pred, x, ys);
  }, xs);
});

/* harmony default export */ __webpack_exports__["default"] = (innerJoin);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */

var insert =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (insert);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */

var insertAll =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});

/* harmony default export */ __webpack_exports__["default"] = (insertAll);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _internal_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);





/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */

var intersection =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function intersection(list1, list2) {
  var lookupList, filteredList;

  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }

  return Object(_uniq_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_internal_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_flip_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_internal_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(lookupList), filteredList));
});

/* harmony default export */ __webpack_exports__["default"] = (intersection);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
 */

var intersperse =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_0__["default"])('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;

  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }

    idx += 1;
  }

  return out;
}));

/* harmony default export */ __webpack_exports__["default"] = (intersperse);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_clone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _internal_isTransformer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _internal_stepCat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(400);





/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.transduce
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      const intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */

var into =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function into(acc, xf, list) {
  return Object(_internal_isTransformer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(acc) ? Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_3__["default"])(xf(acc), acc['@@transducer/init'](), list) : Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_3__["default"])(xf(Object(_internal_stepCat_js__WEBPACK_IMPORTED_MODULE_4__["default"])(acc)), Object(_internal_clone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(acc, [], [], false), list);
});

/* harmony default export */ __webpack_exports__["default"] = (into);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      const raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */

var invert =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function invert(obj) {
  var props = Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }

  return out;
});

/* harmony default export */ __webpack_exports__["default"] = (invert);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      const raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      const raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */

var invertObj =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function invertObj(obj) {
  var props = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }

  return out;
});

/* harmony default export */ __webpack_exports__["default"] = (invertObj);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);



/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */

var isEmpty =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function isEmpty(x) {
  return x != null && Object(_equals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x, Object(_empty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x));
});

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      const spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */

var join =
/*#__PURE__*/
Object(_invoker_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 'join');
/* harmony default export */ __webpack_exports__["default"] = (join);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */

var keysIn =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function keysIn(obj) {
  var prop;
  var ks = [];

  for (prop in obj) {
    ks[ks.length] = prop;
  }

  return ks;
});

/* harmony default export */ __webpack_exports__["default"] = (keysIn);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);



/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */

var lastIndexOf =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !Object(_internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;

    while (idx >= 0) {
      if (Object(_equals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(xs[idx], target)) {
        return idx;
      }

      idx -= 1;
    }

    return -1;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (lastIndexOf);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _lens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);




/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over, R.nth
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */

var lensIndex =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lensIndex(n) {
  return Object(_lens_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_nth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(n), Object(_update_js__WEBPACK_IMPORTED_MODULE_3__["default"])(n));
});

/* harmony default export */ __webpack_exports__["default"] = (lensIndex);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _assocPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var _lens_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);




/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */

var lensPath =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lensPath(p) {
  return Object(_lens_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_path_js__WEBPACK_IMPORTED_MODULE_3__["default"])(p), Object(_assocPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p));
});

/* harmony default export */ __webpack_exports__["default"] = (lensPath);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _assoc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _lens_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);




/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */

var lensProp =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lensProp(k) {
  return Object(_lens_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_prop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(k), Object(_assoc_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k));
});

/* harmony default export */ __webpack_exports__["default"] = (lensProp);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */

var lt =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lt(a, b) {
  return a < b;
});

/* harmony default export */ __webpack_exports__["default"] = (lt);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */

var lte =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lte(a, b) {
  return a <= b;
});

/* harmony default export */ __webpack_exports__["default"] = (lte);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.scan, R.addIndex, R.mapAccumRight
 * @example
 *
 *      const digits = ['1', '2', '3', '4'];
 *      const appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */

var mapAccum =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];

  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }

  return [tuple[0], result];
});

/* harmony default export */ __webpack_exports__["default"] = (mapAccum);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      const digits = ['1', '2', '3', '4'];
 *      const appender = (a, b) => [b + a, b + a];
 *
 *      R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   f(f(f(a, d)[0], c)[0], b)[0],
 *   [
 *     f(a, d)[1],
 *     f(f(a, d)[0], c)[1],
 *     f(f(f(a, d)[0], c)[0], b)[1]
 *   ]
 * ]
 */

var mapAccumRight =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];

  while (idx >= 0) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx -= 1;
  }

  return [tuple[0], result];
});

/* harmony default export */ __webpack_exports__["default"] = (mapAccumRight);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      const xyz = { x: 1, y: 2, z: 3 };
 *      const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */

var mapObjIndexed =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mapObjIndexed(fn, obj) {
  return Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj));
});

/* harmony default export */ __webpack_exports__["default"] = (mapObjIndexed);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */

var match =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function match(rx, str) {
  return str.match(rx) || [];
});

/* harmony default export */ __webpack_exports__["default"] = (match);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);


/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      const clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      const seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */

var mathMod =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mathMod(m, p) {
  if (!Object(_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(m)) {
    return NaN;
  }

  if (!Object(_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p) || p < 1) {
    return NaN;
  }

  return (m % p + p) % p;
});

/* harmony default export */ __webpack_exports__["default"] = (mathMod);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */

var maxBy =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});

/* harmony default export */ __webpack_exports__["default"] = (maxBy);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);


/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */

var median =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function median(list) {
  var len = list.length;

  if (len === 0) {
    return NaN;
  }

  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return Object(_mean_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});

/* harmony default export */ __webpack_exports__["default"] = (median);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */

var memoizeWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function memoizeWith(mFn, fn) {
  var cache = {};
  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fn.length, function () {
    var key = mFn.apply(this, arguments);

    if (!Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }

    return cache[key];
  });
});

/* harmony default export */ __webpack_exports__["default"] = (memoizeWith);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @deprecated since v0.26.0
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.merge({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge(a, b) = {...a, ...b}
 */

var merge =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function merge(l, r) {
  return Object(_internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, l, r);
});

/* harmony default export */ __webpack_exports__["default"] = (merge);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */

var mergeAll =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function mergeAll(list) {
  return _internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__["default"].apply(null, [{}].concat(list));
});

/* harmony default export */ __webpack_exports__["default"] = (mergeAll);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */

var mergeDeepLeft =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeDeepLeft(lObj, rObj) {
  return Object(_mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});

/* harmony default export */ __webpack_exports__["default"] = (mergeDeepLeft);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */

var mergeDeepRight =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeDeepRight(lObj, rObj) {
  return Object(_mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});

/* harmony default export */ __webpack_exports__["default"] = (mergeDeepRight);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */

var mergeDeepWith =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeDeepWith(fn, lObj, rObj) {
  return Object(_mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});

/* harmony default export */ __webpack_exports__["default"] = (mergeDeepWith);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepLeft, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const resetToDefault = R.mergeLeft({x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeLeft(a, b) = {...b, ...a}
 */

var mergeLeft =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function mergeLeft(l, r) {
  return Object(_internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, r, l);
});

/* harmony default export */ __webpack_exports__["default"] = (mergeLeft);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeLeft, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.mergeRight({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeRight(a, b) = {...a, ...b}
 */

var mergeRight =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function mergeRight(l, r) {
  return Object(_internal_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, l, r);
});

/* harmony default export */ __webpack_exports__["default"] = (mergeRight);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _mergeWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */

var mergeWith =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeWith(fn, l, r) {
  return Object(_mergeWithKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});

/* harmony default export */ __webpack_exports__["default"] = (mergeWith);

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */

var min =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function min(a, b) {
  return b < a ? b : a;
});

/* harmony default export */ __webpack_exports__["default"] = (min);

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */

var minBy =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});

/* harmony default export */ __webpack_exports__["default"] = (minBy);

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      const isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */

var modulo =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function modulo(a, b) {
  return a % b;
});

/* harmony default export */ __webpack_exports__["default"] = (modulo);

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Move an item, at index `from`, to index `to`, in a list of elements.
 * A new list will be created containing the new elements order.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} from The source index
 * @param {Number} to The destination index
 * @param {Array} list The list which will serve to realise the move
 * @return {Array} The new list reordered
 * @example
 *
 *      R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
 *      R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
 */

var move =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (from, to, list) {
  var length = list.length;
  var result = list.slice();
  var positiveFrom = from < 0 ? length + from : from;
  var positiveTo = to < 0 ? length + to : to;
  var item = result.splice(positiveFrom, 1);
  return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
});

/* harmony default export */ __webpack_exports__["default"] = (move);

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */

var negate =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function negate(n) {
  return -n;
});

/* harmony default export */ __webpack_exports__["default"] = (negate);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_complement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);



/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *      const isOdd = n => n % 2 === 1;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */

var none =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function none(fn, input) {
  return Object(_all_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_internal_complement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fn), input);
});

/* harmony default export */ __webpack_exports__["default"] = (none);

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);



/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */

var nthArg =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arity, function () {
    return Object(_nth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(n, arguments);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (nthArg);

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument. Also, unlike [`compose`](#compose), `o` is
 * limited to accepting only 2 unary functions. The name o was chosen because
 * of its similarity to the mathematical composition operator ∘.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      const yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */

var o =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function o(f, g, x) {
  return f(g(x));
});

/* harmony default export */ __webpack_exports__["default"] = (o);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);


/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */

var of =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_of_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (of);

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */

var omit =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      const addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */

var once =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function once(fn) {
  var called = false;
  var result;
  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fn.length, function () {
    if (called) {
      return result;
    }

    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});

/* harmony default export */ __webpack_exports__["default"] = (once);

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_assertPromise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);


/**
 * Returns the result of applying the onFailure function to the value inside
 * a failed promise. This is useful for handling rejected promises
 * inside function compositions.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig (e -> b) -> (Promise e a) -> (Promise e b)
 * @sig (e -> (Promise f b)) -> (Promise e a) -> (Promise f b)
 * @param {Function} onFailure The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(null, onFailure)`
 * @see R.then
 * @example
 *
 *      var failedFetch = (id) => Promise.reject('bad ID');
 *      var useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' })
 *
 *      //recoverFromFailure :: String -> Promise ({firstName, lastName})
 *      var recoverFromFailure = R.pipe(
 *        failedFetch,
 *        R.otherwise(useDefault),
 *        R.then(R.pick(['firstName', 'lastName'])),
 *      );
 *      recoverFromFailure(12345).then(console.log)
 */

var otherwise =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function otherwise(f, p) {
  Object(_internal_assertPromise_js__WEBPACK_IMPORTED_MODULE_1__["default"])('otherwise', p);

  return p.then(null, f);
});

/* harmony default export */ __webpack_exports__["default"] = (otherwise);

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */

var pair =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pair(fst, snd) {
  return [fst, snd];
});

/* harmony default export */ __webpack_exports__["default"] = (pair);

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_createPartialApplicator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight, R.curry
 * @example
 *
 *      const multiply2 = (a, b) => a * b;
 *      const double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const sayHello = R.partial(greet, ['Hello']);
 *      const sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */

var partial =
/*#__PURE__*/
Object(_internal_createPartialApplicator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (partial);

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_createPartialApplicator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);



/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */

var partialRight =
/*#__PURE__*/
Object(_internal_createPartialApplicator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_flip_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (partialRight);

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _juxt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(116);
/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);



/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */

var partition =
/*#__PURE__*/
Object(_juxt_js__WEBPACK_IMPORTED_MODULE_1__["default"])([_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"], _reject_js__WEBPACK_IMPORTED_MODULE_2__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (partition);

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);



/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      const user1 = { address: { zipCode: 90210 } };
 *      const user2 = { address: { zipCode: 55555 } };
 *      const user3 = { name: 'Bob' };
 *      const users = [ user1, user2, user3 ];
 *      const isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */

var pathEq =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pathEq(_path, val, obj) {
  return Object(_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_path_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_path, obj), val);
});

/* harmony default export */ __webpack_exports__["default"] = (pathEq);

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 *      R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
 */

var pathSatisfies =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pathSatisfies(pred, propPath, obj) {
  return pred(Object(_path_js__WEBPACK_IMPORTED_MODULE_1__["default"])(propPath, obj));
});

/* harmony default export */ __webpack_exports__["default"] = (pathSatisfies);

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */

var pick =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pick(names, obj) {
  var result = {};
  var idx = 0;

  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }

    idx += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (pick);

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      const isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */

var pickBy =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pickBy(test, obj) {
  var result = {};

  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (pickBy);

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pipeK; });
/* harmony import */ var _composeK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _reverse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @deprecated since v0.26.0
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      const getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */

function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }

  return _composeK_js__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this, Object(_reverse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments));
}

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multiply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);


/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */

var product =
/*#__PURE__*/
Object(_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_multiply_js__WEBPACK_IMPORTED_MODULE_0__["default"], 1);
/* harmony default export */ __webpack_exports__["default"] = (product);

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var _pickAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(123);
/* harmony import */ var _useWith_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(125);




/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      const kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */

var project =
/*#__PURE__*/
Object(_useWith_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_internal_map_js__WEBPACK_IMPORTED_MODULE_0__["default"], [_pickAll_js__WEBPACK_IMPORTED_MODULE_2__["default"], _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]]); // passing `identity` gives correct arity

/* harmony default export */ __webpack_exports__["default"] = (project);

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.whereEq`](#whereEq).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      const kids = [abby, fred, rusty, alois];
 *      const hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */

var propEq =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function propEq(name, val, obj) {
  return Object(_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val, obj[name]);
});

/* harmony default export */ __webpack_exports__["default"] = (propEq);

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */

var propIs =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function propIs(type, name, obj) {
  return Object(_is_js__WEBPACK_IMPORTED_MODULE_1__["default"])(type, obj[name]);
});

/* harmony default export */ __webpack_exports__["default"] = (propIs);

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _pathOr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const favorite = R.prop('favoriteLibrary');
 *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */

var propOr =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function propOr(val, p, obj) {
  return Object(_pathOr_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val, [p], obj);
});

/* harmony default export */ __webpack_exports__["default"] = (propOr);

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */

var propSatisfies =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});

/* harmony default export */ __webpack_exports__["default"] = (propSatisfies);

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */

var props =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function props(ps, obj) {
  return ps.map(function (p) {
    return Object(_path_js__WEBPACK_IMPORTED_MODULE_1__["default"])([p], obj);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (props);

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in the set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */

var range =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function range(from, to) {
  if (!(Object(_internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(from) && Object(_internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }

  var result = [];
  var n = from;

  while (n < to) {
    result.push(n);
    n += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (range);

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curryN_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _internal_reduced_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);



/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      const isOdd = (acc, x) => x % 2 === 1;
 *      const xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      const ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */

var reduceWhile =
/*#__PURE__*/
Object(_internal_curryN_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4, [], function _reduceWhile(pred, fn, a, list) {
  return Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : Object(_internal_reduced_js__WEBPACK_IMPORTED_MODULE_2__["default"])(acc);
  }, a, list);
});

/* harmony default export */ __webpack_exports__["default"] = (reduceWhile);

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is only available to the below functions:
 * - [`reduce`](#reduce)
 * - [`reduceWhile`](#reduceWhile)
 * - [`transduce`](#transduce)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.reduceWhile, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */

var reduced =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (reduced);

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _always_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);



/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      const obj = {};
 *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */

var repeat =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function repeat(value, n) {
  return Object(_times_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_always_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value), n);
});

/* harmony default export */ __webpack_exports__["default"] = (repeat);

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * The first two parameters correspond to the parameters of the
 * `String.prototype.replace()` function, so the second parameter can also be a
 * function.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */

var replace =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});

/* harmony default export */ __webpack_exports__["default"] = (replace);

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce, R.mapAccum
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */

var scan =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];

  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (scan);

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _always_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _over_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(121);



/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */

var set =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function set(lens, v, x) {
  return Object(_over_js__WEBPACK_IMPORTED_MODULE_2__["default"])(lens, Object(_always_js__WEBPACK_IMPORTED_MODULE_1__["default"])(v), x);
});

/* harmony default export */ __webpack_exports__["default"] = (set);

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */

var sort =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});

/* harmony default export */ __webpack_exports__["default"] = (sort);

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      const sortByFirstItem = R.sortBy(R.prop(0));
 *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *
 *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      const people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */

var sortBy =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});

/* harmony default export */ __webpack_exports__["default"] = (sortBy);

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      const alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      const bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      const people = [clara, bob, alice];
 *      const ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */

var sortWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;

    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }

    return result;
  });
});

/* harmony default export */ __webpack_exports__["default"] = (sortWith);

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `sep`.
 * @see R.join
 * @example
 *
 *      const pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */

var split =
/*#__PURE__*/
Object(_invoker_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 'split');
/* harmony default export */ __webpack_exports__["default"] = (split);

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */

var splitAt =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function splitAt(index, array) {
  return [Object(_slice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(0, index, array), Object(_slice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, Object(_length_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array), array)];
});

/* harmony default export */ __webpack_exports__["default"] = (splitAt);

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);


/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */

var splitEvery =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }

  var result = [];
  var idx = 0;

  while (idx < list.length) {
    result.push(Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(idx, idx += n, list));
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (splitEvery);

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */

var splitWhen =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});

/* harmony default export */ __webpack_exports__["default"] = (splitWhen);

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _take_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);



/**
 * Checks if a list starts with the provided sublist.
 *
 * Similarly, checks if a string starts with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */

var startsWith =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prefix, list) {
  return Object(_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_take_js__WEBPACK_IMPORTED_MODULE_2__["default"])(prefix.length, list), prefix);
});

/* harmony default export */ __webpack_exports__["default"] = (startsWith);

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      const minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      const complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */

var subtract =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function subtract(a, b) {
  return Number(a) - Number(b);
});

/* harmony default export */ __webpack_exports__["default"] = (subtract);

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);



/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */

var symmetricDifference =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function symmetricDifference(list1, list2) {
  return Object(_concat_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_difference_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list1, list2), Object(_difference_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list2, list1));
});

/* harmony default export */ __webpack_exports__["default"] = (symmetricDifference);

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _differenceWith_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);



/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      const eqA = R.eqBy(R.prop('a'));
 *      const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */

var symmetricDifferenceWith =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function symmetricDifferenceWith(pred, list1, list2) {
  return Object(_concat_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_differenceWith_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pred, list1, list2), Object(_differenceWith_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pred, list2, list1));
});

/* harmony default export */ __webpack_exports__["default"] = (symmetricDifferenceWith);

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);


/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      const isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */

var takeLastWhile =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;

  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }

  return Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(idx + 1, Infinity, xs);
});

/* harmony default export */ __webpack_exports__["default"] = (takeLastWhile);

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xtakeWhile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(402);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);




/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      const isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */

var takeWhile =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['takeWhile'], _internal_xtakeWhile_js__WEBPACK_IMPORTED_MODULE_2__["default"], function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;

  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }

  return Object(_slice_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0, idx, xs);
}));

/* harmony default export */ __webpack_exports__["default"] = (takeWhile);

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _internal_xtap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);



/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      const sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */

var tap =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
/*#__PURE__*/
Object(_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])([], _internal_xtap_js__WEBPACK_IMPORTED_MODULE_2__["default"], function tap(fn, x) {
  fn(x);
  return x;
}));

/* harmony default export */ __webpack_exports__["default"] = (tap);

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _internal_isRegExp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(404);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);




/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */

var test =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function test(pattern, str) {
  if (!Object(_internal_isRegExp_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(pattern));
  }

  return Object(_internal_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pattern).test(str);
});

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _internal_assertPromise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);


/**
 * Returns the result of applying the onSuccess function to the value inside
 * a successfully resolved promise. This is useful for working with promises
 * inside function compositions.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Function
 * @sig (a -> b) -> (Promise e a) -> (Promise e b)
 * @sig (a -> (Promise e b)) -> (Promise e a) -> (Promise e b)
 * @param {Function} onSuccess The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(onSuccess)`
 * @see R.otherwise
 * @example
 *
 *      var makeQuery = (email) => ({ query: { email }});
 *
 *      //getMemberName :: String -> Promise ({firstName, lastName})
 *      var getMemberName = R.pipe(
 *        makeQuery,
 *        fetchMember,
 *        R.andThen(R.pick(['firstName', 'lastName']))
 *      );
 */

var andThen =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function andThen(f, p) {
  Object(_internal_assertPromise_js__WEBPACK_IMPORTED_MODULE_1__["default"])('andThen', p);

  return p.then(f);
});

/* harmony default export */ __webpack_exports__["default"] = (andThen);

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */

var toLower =
/*#__PURE__*/
Object(_invoker_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'toLowerCase');
/* harmony default export */ __webpack_exports__["default"] = (toLower);

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */

var toPairs =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function toPairs(obj) {
  var pairs = [];

  for (var prop in obj) {
    if (Object(_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }

  return pairs;
});

/* harmony default export */ __webpack_exports__["default"] = (toPairs);

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */

var toPairsIn =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function toPairsIn(obj) {
  var pairs = [];

  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }

  return pairs;
});

/* harmony default export */ __webpack_exports__["default"] = (toPairsIn);

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */

var toUpper =
/*#__PURE__*/
Object(_invoker_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'toUpperCase');
/* harmony default export */ __webpack_exports__["default"] = (toUpper);

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _internal_xwrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      const isOdd = (x) => x % 2 === 1;
 *      const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */

var transduce =
/*#__PURE__*/
Object(_curryN_js__WEBPACK_IMPORTED_MODULE_2__["default"])(4, function transduce(xf, fn, acc, list) {
  return Object(_internal_reduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xf(typeof fn === 'function' ? Object(_internal_xwrap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn) : fn), acc, list);
});
/* harmony default export */ __webpack_exports__["default"] = (transduce);

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */

var transpose =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function transpose(outerlist) {
  var i = 0;
  var result = [];

  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;

    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }

      result[j].push(innerlist[j]);
      j += 1;
    }

    i += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (transpose);

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _sequence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);



/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Maybe.Nothing` if the given divisor is `0`
 *      const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
 */

var traverse =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : Object(_sequence_js__WEBPACK_IMPORTED_MODULE_2__["default"])(of, Object(_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f, traversable));
});

/* harmony default export */ __webpack_exports__["default"] = (traverse);

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */

var trim = !hasProtoTrim ||
/*#__PURE__*/
ws.trim() || !
/*#__PURE__*/
zeroWidth.trim() ?
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
}) :
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function trim(str) {
  return str.trim();
});
/* harmony default export */ __webpack_exports__["default"] = (trim);

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(() => { throw 'foo'}, R.always('catched'))('bar') // => 'catched'
 *      R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
 *      R.tryCatch(() => { throw 'this is not a valid value'}, (err, value)=>({error : err,  value }))('bar') // => {'error': 'this is not a valid value', 'value': 'bar'}
 */

var tryCatch =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function _tryCatch(tryer, catcher) {
  return Object(_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_1__["default"])([e], arguments));
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (tryCatch);

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */

var unapply =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});

/* harmony default export */ __webpack_exports__["default"] = (unapply);

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nAry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      const takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */

var unary =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function unary(fn) {
  return Object(_nAry_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, fn);
});

/* harmony default export */ __webpack_exports__["default"] = (unary);

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      const addFour = a => b => c => d => a + b + c + d;
 *
 *      const uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */

var uncurryN =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function uncurryN(depth, fn) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;

    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }

    return value;
  });
});

/* harmony default export */ __webpack_exports__["default"] = (uncurryN);

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      const f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */

var unfold =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];

  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (unfold);

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);




/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */

var union =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
Object(_compose_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_uniq_js__WEBPACK_IMPORTED_MODULE_3__["default"], _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (union);

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _uniqWith_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);



/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      const l1 = [{a: 1}, {a: 2}];
 *      const l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */

var unionWith =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function unionWith(pred, list1, list2) {
  return Object(_uniqWith_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pred, Object(_internal_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list1, list2));
});

/* harmony default export */ __webpack_exports__["default"] = (unionWith);

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when, R.cond
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */

var unless =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});

/* harmony default export */ __webpack_exports__["default"] = (unless);

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */

var unnest =
/*#__PURE__*/
Object(_chain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_internal_identity_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (unnest);

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */

var until =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function until(pred, fn, init) {
  var val = init;

  while (!pred(val)) {
    val = fn(val);
  }

  return val;
});

/* harmony default export */ __webpack_exports__["default"] = (until);

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */

var valuesIn =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function valuesIn(obj) {
  var prop;
  var vs = [];

  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }

  return vs;
});

/* harmony default export */ __webpack_exports__["default"] = (valuesIn);

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
 // `Const` is a functor that effectively ignores the function given to `map`.

var Const = function (x) {
  return {
    value: x,
    'fantasy-land/map': function () {
      return this;
    }
  };
};
/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */


var view =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});

/* harmony default export */ __webpack_exports__["default"] = (view);

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless, R.cond
 * @example
 *
 *      // truncate :: String -> String
 *      const truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */

var when =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});

/* harmony default export */ __webpack_exports__["default"] = (when);

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);




/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */

var whereEq =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function whereEq(spec, testObj) {
  return Object(_where_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"], spec), testObj);
});

/* harmony default export */ __webpack_exports__["default"] = (whereEq);

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);




/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference, R.remove
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */

var without =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (xs, list) {
  return Object(_reject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_flip_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_internal_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xs), list);
});

/* harmony default export */ __webpack_exports__["default"] = (without);

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Exclusive disjunction logical operation.
 * Returns `true` if one of the arguments is truthy and the other is falsy.
 * Otherwise, it returns `false`.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {Any} a
 * @param {Any} b
 * @return {Boolean} true if one of the arguments is truthy and the other is falsy
 * @see R.or, R.and
 * @example
 *
 *      R.xor(true, true); //=> false
 *      R.xor(true, false); //=> true
 *      R.xor(false, true); //=> true
 *      R.xor(false, false); //=> false
 */

var xor =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function xor(a, b) {
  return Boolean(!a ^ !b);
});

/* harmony default export */ __webpack_exports__["default"] = (xor);

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */

var xprod =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function xprod(a, b) {
  // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];

  while (idx < ilen) {
    j = 0;

    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }

    idx += 1;
  }

  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (xprod);

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */

var zip =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);

  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }

  return rv;
});

/* harmony default export */ __webpack_exports__["default"] = (zip);

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */

var zipObj =
/*#__PURE__*/
Object(_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};

  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }

  return out;
});

/* harmony default export */ __webpack_exports__["default"] = (zipObj);

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      const f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */

var zipWith =
/*#__PURE__*/
Object(_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);

  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }

  return rv;
});

/* harmony default export */ __webpack_exports__["default"] = (zipWith);

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/**
 * Creates a thunk out of a function. A thunk delays a calculation until
 * its result is needed, providing lazy evaluation of arguments.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
 * @param {Function} fn A function to wrap in a thunk
 * @return {Function} Expects arguments for `fn` and returns a new function
 *  that, when called, applies those arguments to `fn`.
 * @see R.partial, R.partialRight
 * @example
 *
 *      R.thunkify(R.identity)(42)(); //=> 42
 *      R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
 */

var thunkify =
/*#__PURE__*/
Object(_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function thunkify(fn) {
  return Object(_curryN_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fn.length, function createThunk() {
    var fnArgs = arguments;
    return function invokeThunk() {
      return fn.apply(this, fnArgs);
    };
  });
});

/* harmony default export */ __webpack_exports__["default"] = (thunkify);

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isArray = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is an empty `Array`.
 *
 * @func isEmptyArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotEmptyArray|isNotEmptyArray}
 * @example
 *
 * RA.isEmptyArray([]); // => true
 * RA.isEmptyArray([42]); // => false
 * RA.isEmptyArray({}); // => false
 * RA.isEmptyArray(null); // => false
 * RA.isEmptyArray(undefined); // => false
 * RA.isEmptyArray(42); // => false
 * RA.isEmptyArray('42'); // => false
 */
var isEmptyArray = (0, _ramda.both)(_isArray["default"], _ramda.isEmpty);
var _default = isEmptyArray;
exports["default"] = _default;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isArray = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is complement of `Array`
 *
 * @func isNotArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isArray|isArray}
 * @example
 *
 * RA.isNotArray([]); //=> false
 * RA.isNotArray(null); //=> true
 * RA.isNotArray({}); //=> true
 */
var isNotArray = (0, _ramda.complement)(_isArray["default"]);
var _default = isNotArray;
exports["default"] = _default;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNotEmpty = _interopRequireDefault(__webpack_require__(82));

var _isArray = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is not an empty `Array`.
 *
 * @func isNonEmptyArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isEmptyArray|isEmptyArray}
 * @example
 *
 * RA.isNonEmptyArray([42]); // => true
 * RA.isNonEmptyArray([]); // => false
 * RA.isNonEmptyArray({}); // => false
 * RA.isNonEmptyArray(null); // => false
 * RA.isNonEmptyArray(undefined); // => false
 * RA.isNonEmptyArray(42); // => false
 * RA.isNonEmptyArray('42'); // => false
 */
var isNonEmptyArray = (0, _ramda.both)(_isArray["default"], _isNotEmpty["default"]);
var _default = isNonEmptyArray;
exports["default"] = _default;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is `Boolean`.
 *
 * @func isBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotBoolean|isNotBoolean}
 * @example
 *
 * RA.isBoolean(false); //=> true
 * RA.isBoolean(true); //=> true
 * RA.isBoolean(null); //=> false
 */
var isBoolean = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Boolean')));
var _default = isBoolean;
exports["default"] = _default;

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns `true` if the given value is its type's empty value, `null` or `undefined`.
 *
 * @func isNilOrEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|R.isEmpty}, {@link http://ramdajs.com/docs/#isNil|R.isNil}
 * @example
 *
 * RA.isNilOrEmpty([1, 2, 3]); //=> false
 * RA.isNilOrEmpty([]); //=> true
 * RA.isNilOrEmpty(''); //=> true
 * RA.isNilOrEmpty(null); //=> true
 * RA.isNilOrEmpty(undefined): //=> true
 * RA.isNilOrEmpty({}); //=> true
 * RA.isNilOrEmpty({length: 0}); //=> false
 */
var isNilOrEmpty = (0, _ramda.curryN)(1, (0, _ramda.either)(_ramda.isNil, _ramda.isEmpty));
var _default = isNilOrEmpty;
exports["default"] = _default;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isObj = _interopRequireDefault(__webpack_require__(83));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if input value is complement of language type of `Object`.
 *
 * @func isNotObj
 * @aliases isNotObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isObj|isObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isNotObj({}); //=> false
 * RA.isNotObj([]); //=> false
 * RA.isNotObj(() => {}); //=> false
 * RA.isNotObj(null); //=> true
 * RA.isNotObj(undefined); //=> true
 */

/* eslint-enable max-len */
var isNotObj = (0, _ramda.complement)(_isObj["default"]);
var _default = isNotObj;
exports["default"] = _default;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isOfTypeObject = function isOfTypeObject(val) {
  return _typeof(val) === 'object';
};

var _default = isOfTypeObject;
exports["default"] = _default;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNull = _interopRequireDefault(__webpack_require__(143));

var _isObjLike = _interopRequireDefault(__webpack_require__(151));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isObject = (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Object'));
var isObjectConstructor = (0, _ramda.pipe)(_ramda.toString, (0, _ramda.equals)((0, _ramda.toString)(Object)));
var hasObjectConstructor = (0, _ramda.pathSatisfies)((0, _ramda.both)(_isFunction["default"], isObjectConstructor), ['constructor']);
/* eslint-disable max-len */

/**
 * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
 *
 * @func isPlainObj
 * @aliases isPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotPlainObj|isNotPlainObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isObj|isObj}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isPlainObj(new Bar()); //=> false
 * RA.isPlainObj({ prop: 'value' }); //=> true
 * RA.isPlainObj(['a', 'b', 'c']); //=> false
 * RA.isPlainObj(Object.create(null); //=> true
 * RA.isPlainObj(new Object()); //=> true
 */

/* eslint-enable max-len */

var isPlainObj = (0, _ramda.curryN)(1, function (val) {
  if (!(0, _isObjLike["default"])(val) || !isObject(val)) {
    return false;
  }

  var proto = Object.getPrototypeOf(val);

  if ((0, _isNull["default"])(proto)) {
    return true;
  }

  return hasObjectConstructor(proto);
});
var _default = isPlainObj;
exports["default"] = _default;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isDate = _interopRequireDefault(__webpack_require__(152));

var _isNotNaN = _interopRequireDefault(__webpack_require__(344));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if value is valid `Date` object.
 *
 * @func isValidDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.8.0|v1.8.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isDate|isDate}, {@link RA.isNotDate|isNotDate}, {@link RA.isNotValidDate|isNotValidDate}
 * @example
 *
 * RA.isValidDate(new Date()); //=> true
 * RA.isValidDate(new Date('a')); //=> false
 */

/* eslint-enable max-len */
var isValidDate = (0, _ramda.curryN)(1, (0, _ramda.both)(_isDate["default"], (0, _ramda.pipe)((0, _ramda.invoker)(0, 'getTime'), _isNotNaN["default"])));
var _default = isValidDate;
exports["default"] = _default;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNaN2 = _interopRequireDefault(__webpack_require__(345));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks whether the passed value is complement of `NaN` and its type is not `Number`.
 *
 * @func isNotNaN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNaN|isNaN}
 * @example
 *
 * RA.isNotNaN(NaN); // => false
 * RA.isNotNaN(Number.NaN); // => false
 * RA.isNotNaN(0 / 0); // => false
 *
 * RA.isNotNaN('NaN'); // => true
 * RA.isNotNaN(undefined); // => true
 * RA.isNotNaN({}); // => true
 * RA.isNotNaN('blabla'); // => true
 *
 * RA.isNotNaN(true); // => true
 * RA.isNotNaN(null); // => true
 * RA.isNotNaN(37); // => true
 * RA.isNotNaN('37'); // => true
 * RA.isNotNaN('37.37'); // => true
 * RA.isNotNaN(''); // => true
 * RA.isNotNaN(' '); // => true
 */
var isNotNaN = (0, _ramda.complement)(_isNaN2["default"]);
var _default = isNotNaN;
exports["default"] = _default;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.isNaNPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Number = _interopRequireDefault(__webpack_require__(416));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isNaNPonyfill = (0, _ramda.curryN)(1, _Number["default"]);
/**
 * Checks whether the passed value is `NaN` and its type is `Number`.
 * It is a more robust version of the original, global isNaN().
 *
 *
 * @func isNaN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotNaN|isNotNaN}
 * @example
 *
 * RA.isNaN(NaN); // => true
 * RA.isNaN(Number.NaN); // => true
 * RA.isNaN(0 / 0); // => true
 *
 * // e.g. these would have been true with global isNaN().
 * RA.isNaN('NaN'); // => false
 * RA.isNaN(undefined); // => false
 * RA.isNaN({}); // => false
 * RA.isNaN('blabla'); // => false
 *
 * RA.isNaN(true); // => false
 * RA.isNaN(null); // => false
 * RA.isNaN(37); // => false
 * RA.isNaN('37'); // => false
 * RA.isNaN('37.37'); // => false
 * RA.isNaN(''); // => false
 * RA.isNaN(' '); // => false
 */

exports.isNaNPonyfill = isNaNPonyfill;

var _isNaN = (0, _isFunction["default"])(Number.isNaN) ? (0, _ramda.curryN)(1, Number.isNaN) : isNaNPonyfill;

var _default = _isNaN;
exports["default"] = _default;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNumber = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is a non-negative `Number` primitive or object. This includes all positive
 * numbers and zero.
 *
 * @func isNonNegative
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isPositive|isPositive}, {@link RA.isNonPositive|isNonPositive}
 * @example
 *
 * RA.isNonNegative(0); // => true
 * RA.isNonNegative(1); // => true
 * RA.isNonNegative(Infinity); // => true
 * RA.isNonNegative(Number.MAX_VALUE); // => true
 *
 * RA.isNonNegative(-Infinity); // => false
 * RA.isNonNegative(Number.MIN_VALUE); // => false
 * RA.isNonNegative(NaN); // => false
 */
var isNonNegative = (0, _ramda.curryN)(1, (0, _ramda.both)(_isNumber["default"], (0, _ramda.flip)(_ramda.gte)(0)));
var _default = isNonNegative;
exports["default"] = _default;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Predicate for determining if a provided value is an instance of a Map.
 *
 * @func isMap
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isSet|isSet}}
 * @example
 *
 * RA.isMap(new Map()); //=> true
 * RA.isMap(new Map([[1, 2], [2, 1]])); //=> true
 * RA.isSet(new Set()); //=> false
 * RA.isSet(new Set([1,2]); //=> false
 * RA.isSet(new Object()); //=> false
 */
var isMap = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Map')));
var _default = isMap;
exports["default"] = _default;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFinite2 = _interopRequireDefault(__webpack_require__(76));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks whether the passed value is complement of finite `Number`.
 *
 *
 * @func isNotFinite
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFinite|isFinite}
 * @example
 *
 * RA.isNotFinite(Infinity); //=> true
 * RA.isNotFinite(NaN); //=> true
 * RA.isNotFinite(-Infinity); //=> true
 *
 * RA.isNotFinite(0); // false
 * RA.isNotFinite(2e64); // false
 *
 * RA.isNotFinite('0');  // => true
 * RA.isNotFinite(null); // => true
 */
var isNotFinite = (0, _ramda.complement)(_isFinite2["default"]);
var _default = isNotFinite;
exports["default"] = _default;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFloat = _interopRequireDefault(__webpack_require__(154));

var _isInteger = _interopRequireDefault(__webpack_require__(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is a valid `Number`. A valid `Number` is a number that is not `NaN`, `Infinity`
 * or `-Infinity`.
 *
 * @func isValidNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotValidNumber|isNotValidNumber}
 * @example
 *
 * RA.isValidNumber(1); //=> true
 * RA.isValidNumber(''); //=> false
 * RA.isValidNumber(NaN); //=> false
 * RA.isValidNumber(Infinity); //=> false
 * RA.isValidNumber(-Infinity); //=> false
 */
var isValidNumber = (0, _ramda.curryN)(1, (0, _ramda.either)(_isInteger["default"], _isFloat["default"]));
var _default = isValidNumber;
exports["default"] = _default;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isInteger = _interopRequireDefault(__webpack_require__(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is odd integer number.
 * An odd number is an integer which is not a multiple DIVISIBLE of two.
 *
 * @func isOdd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isEven|isEven}
 * @example
 *
 * RA.isOdd(1); // => true
 * RA.isOdd(-Infinity); // => false
 * RA.isOdd(4); // => false
 * RA.isOdd(3); // => true
 */
var isOdd = (0, _ramda.curryN)(1, (0, _ramda.both)(_isInteger["default"], (0, _ramda.pipe)((0, _ramda.flip)(_ramda.modulo)(2), (0, _ramda.complement)(_ramda.equals)(0))));
var _default = isOdd;
exports["default"] = _default;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isArray = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is a pair.
 *
 * @func isPair
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#pair|R.pair}, {@link RA.isNotPair|isNotPair}
 * @example
 *
 * RA.isPair([]); // => false
 * RA.isPair([0]); // => false
 * RA.isPair([0, 1]); // => true
 * RA.isPair([0, 1, 2]); // => false
 * RA.isPair({ 0: 0, 1: 1 }); // => false
 * RA.isPair({ foo: 0, bar: 0 }); // => false
 */
var isPair = (0, _ramda.curryN)(1, (0, _ramda.both)(_isArray["default"], (0, _ramda.pipe)(_ramda.length, (0, _ramda.equals)(2))));
var _default = isPair;
exports["default"] = _default;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is the Boolean primitive `true`. Will return false for Boolean objects
 * created using the `Boolean` function as a constructor.
 *
 * @func isTrue
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFalse|isFalse}, {@link RA.isTruthy|isTruthy}, {@link RA.isFalsy|isFalsy}
 * @example
 *
 * RA.isTrue(true); // => true
 * RA.isTrue(Boolean(true)); // => true
 * RA.isTrue(false); // => false
 * RA.isTrue(1); // => false
 * RA.isTrue('true'); // => false
 * RA.isTrue(new Boolean(true)); // => false
 */
var isTrue = (0, _ramda.identical)(true);
var _default = isTrue;
exports["default"] = _default;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isTruthy = _interopRequireDefault(__webpack_require__(155));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * A falsy value is a value that translates to false when evaluated in a Boolean context.
 * Falsy values are `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
 *
 * @func isFalsy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2..0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy|falsy}, {@link RA.isTruthy|isTruthy}
 * @example
 *
 * RA.isFalsy(false); // => true
 * RA.isFalsy(0); // => true
 * RA.isFalsy(''); // => true
 * RA.isFalsy(null); // => true
 * RA.isFalsy(undefined); // => true
 * RA.isFalsy(NaN); // => true
 */
var isFalsy = (0, _ramda.complement)(_isTruthy["default"]);
var _default = isFalsy;
exports["default"] = _default;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Predicate for determining if a provided value is an instance of a Set.
 *
 * @func isSet
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isMap|isMap}}
 * @example
 *
 * RA.isSet(new Map()); //=> false
 * RA.isSet(new Set()); //=> true
 * RA.isSet(new Set([1,2]); //=> true
 * RA.isSet(new Object()); //=> false
 */
var isSet = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Set')));
var _default = isSet;
exports["default"] = _default;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _ap = _interopRequireDefault(__webpack_require__(451));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
 * the fantasy land Apply spec of algebraic structures.
 *
 * Lifting is specific for {@link https://github.com/scalaz/scalaz|scalaz} and {@link http://www.functionaljava.org/|functional java} implementations.
 * Old version of fantasy land spec were not compatible with this approach,
 * but as of fantasy land 1.0.0 Apply spec also adopted this approach.
 *
 * This function acts as interop for ramda <= 0.23.0 and {@link https://monet.github.io/monet.js/|monet.js}.
 *
 * More info {@link https://github.com/fantasyland/fantasy-land/issues/50|here}.
 *
 * @func liftFN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category Function
 * @sig Apply a => Number -> (a... -> a) -> (a... -> a)
 * @param {number} arity The arity of the lifter function
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function
 * @see {@link http://ramdajs.com/docs/#lift|R.lift}, {@link http://ramdajs.com/docs/#ap|R.ap}
 * @example
 *
 * const { Maybe } = require('monet');
 *
 * const add3 = (a, b, c) => a + b + c;
 * const madd3 = RA.liftFN(3, add3);
 *
 * madd3(Maybe.Some(10), Maybe.Some(15), Maybe.Some(17)); //=> Maybe.Some(42)
 * madd3(Maybe.Some(10), Maybe.Nothing(), Maybe.Some(17)); //=> Maybe.Nothing()
 */
var liftFN = (0, _ramda.curry)(function (arity, fn) {
  var lifted = (0, _ramda.curryN)(arity, fn);
  return (0, _ramda.curryN)(arity, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var accumulator = (0, _ramda.map)(lifted, (0, _ramda.head)(args));
    var apps = (0, _ramda.slice)(1, Infinity, args);
    return (0, _ramda.reduce)(_ap["default"], accumulator, apps);
  });
});
var _default = liftFN;
exports["default"] = _default;

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns a curried equivalent of the provided function, with the specified arity.
 * This function is like curryN, except that the provided arguments order is reversed.
 *
 * @func curryRightN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.12.0|v1.12.0}
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {number} length The arity for the returned function
 * @param {Function} fn The function to curry
 * @return {Function}  A new, curried function
 * @see {@link http://ramdajs.com/docs/#curryN|R.curryN}, {@link RA.curryRight|curryRight}
 * @example
 *
 * const concatStrings = (a, b, c) => a + b + c;
 * const concatStringsCurried = RA.curryRightN(3, concatStrings);
 *
 * concatStringCurried('a')('b')('c'); // => 'cba'
 */
var curryRightN = (0, _ramda.curryN)(2, function (arity, fn) {
  return (0, _ramda.curryN)(arity, function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.apply(this, (0, _ramda.reverse)(args));
  });
});
var _default = curryRightN;
exports["default"] = _default;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _compareLength = _interopRequireDefault(__webpack_require__(60));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if the supplied list or string has a length greater than or equal to
 * `valueLength`.
 *
 * @func lengthGte
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthLte|lengthLte}, {@link http://ramdajs.com/docs/#gte|gte}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthGte(3, [1,2,3,4]); //=> true
 * RA.lengthGte(3, [1,2,3]); //=> true
 * RA.lengthGte(3, [1,2]); //=> false
 */
var lengthGte = (0, _compareLength["default"])((0, _ramda.flip)(_ramda.gte));
var _default = lengthGte;
exports["default"] = _default;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns the second argument if predicate function returns `true`,
 * otherwise the third argument is returned.
 *
 * @func defaultWhen
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2.0}
 * @category Logic
 * @sig  (a -> Boolean) -> b -> a -> a | b
 * @param {!function} predicate The predicate function
 * @param {*} defaultVal The default value
 * @param {*} val `val` will be returned instead of `defaultVal` if predicate returns false
 * @return {*} The `val` if predicate returns `false`, otherwise the default value
 * @see {@link http://ramdajs.com/docs/#defaultTo|R.defaultTo}
 * @example
 *
 * RA.defaultWhen(RA.isNull, 1, null); // => 1
 * RA.defaultWhen(RA.isNull, 1, 2); // => 2
 */
var defaultWhen = (0, _ramda.curry)(function (predicate, defaultVal, val) {
  return predicate(val) ? defaultVal : val;
});
var _default = defaultWhen;
exports["default"] = _default;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * {@link http://ramdajs.com/docs/#map|R.map} function that more closely resembles Array.prototype.map.
 * It takes two new parameters to its callback function: the current index, and the entire list.
 *
 * `mapIndexed` implementation is simple : `
 * const mapIndexed = R.addIndex(R.map);
 * `
 * @func mapIndexed
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category List
 * @typedef Idx = Number
 * @sig Functor f => ((a, Idx, f a) => b) => f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`
 * @param {Array} list The list to be iterated over
 * @return {Array} The new list
 * @see {@link http://ramdajs.com/docs/#addIndex|R.addIndex}, {@link http://ramdajs.com/docs/#map|R.map}
 * @example
 *
 * RA.mapIndexed((val, idx, list) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 * //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
var mapIndexed = (0, _ramda.addIndex)(_ramda.map);
var _default = mapIndexed;
exports["default"] = _default;

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Creates a list from arguments.
 *
 * @func list
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.1.0|v1.1.0}
 * @category List
 * @sig  a... -> [a...]
 * @param {...*} items The items of the feature list
 * @return {Array} New list created from items
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#create-a-list-function|Ramda Cookbook}
 * @example
 *
 * RA.list('a', 'b', 'c'); //=> ['a', 'b', 'c']
 */
var list = (0, _ramda.unapply)(_ramda.identity);
var _default = list;
exports["default"] = _default;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _lengthEq = _interopRequireDefault(__webpack_require__(85));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns true if all items in the list are unique. `R.equals` is used to determine equality.
 *
 * @func allUnique
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.notAllUnique|notAllUnique},  {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.allUnique([ 1, 2, 3, 4 ]); //=> true
 * RA.allUnique([ 1, 1, 2, 3 ]); //=> false
 * RA.allUnique([]); //=> true
 *
 */
var allUnique = (0, _ramda.converge)(_lengthEq["default"], [_ramda.length, _ramda.uniq]);
var _default = allUnique;
exports["default"] = _default;

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns the largest integer less than or equal to a given number.
 *
 * Note: floor(null) returns integer 0 and do not give a NaN error.
 *
 * @func floor
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.15.0|v2.15.0}
 * @category Math
 * @sig Number -> Number
 * @param {number} number The number to floor
 * @return {number} A number representing the largest integer less than or equal to the specified number
 * @example
 *
 * RA.floor(45.95); //=> 45
 * RA.floor(45.05); //=> 45
 * RA.floor(4); //=> 4
 * RA.floor(-45.05); //=> -46
 * RA.floor(-45.95); //=> -46
 * RA.floor(null); //=> 0
 */
var floor = (0, _ramda.curryN)(1, (0, _ramda.bind)(Math.floor, Math));
var _default = floor;
exports["default"] = _default;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Acts as multiple path: arrays of paths in, array of values out. Preserves order.
 *
 * @func paths
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category List
 * @sig  [[k]] -> {k: v} - [v]
 * @param {Array} ps The property paths to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#derivative-of-rprops-for-deep-fields|Ramda Cookbook}, {@link http://ramdajs.com/docs/#props|R.props}
 * @example
 *
 * const obj = {
 *   a: { b: { c: 1 } },
 *   x: 2,
 * };
 *
 * RA.paths([['a', 'b', 'c'], ['x']], obj); //=> [1, 2]
 */
var paths = (0, _ramda.curry)(function (ps, obj) {
  return (0, _ramda.ap)([(0, _ramda.path)(_ramda.__, obj)], ps);
});
var _default = paths;
exports["default"] = _default;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Create a new object with the own properties of the second object merged with
 * the own properties of the first object. If a key exists in both objects,
 * the value from the first object will be used. *
 * Putting it simply: it sets properties only if they don't exist.
 *
 * @func mergeRight
 * @deprecated since v2.12.0; available in ramda@0.26.0 as R.mergeLeft
 * @aliases mergeLeft, resetToDefault
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.6.0|v1.6.0}
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} r Destination
 * @param {Object} l Source
 * @return {Object}
 * @see {@link http://ramdajs.com/docs/#merge|R.merge}, {@link https://github.com/ramda/ramda/wiki/Cookbook#set-properties-only-if-they-dont-exist|Ramda Cookbook}
 * @example
 *
 * RA.mergeRight({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 * //=> { 'name': 'fred', 'age': 40 }
 */
var mergeRight = (0, _ramda.flip)(_ramda.merge);
var _default = mergeRight;
exports["default"] = _default;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _mergeRight = _interopRequireDefault(__webpack_require__(364));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Create a new object with the own properties of the object under the `path`
 * merged with the own properties of the provided `source`.
 * If a key exists in both objects, the value from the `source` object will be used.
 *
 * @func mergePath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Object
 * @sig [k] -> {a} -> {k: {a}} -> {k: {a}}
 * @see {@link RA.mergeProp|mergeProp}
 * @param {!Array} path The property path of the destination object
 * @param {!Object} source The source object
 * @param {!Object} obj The object that has destination object under corresponding property path
 * @return {!Object} The new version of object
 * @example
 *
 * RA.mergePath(
 *  ['outer', 'inner'],
 *  { foo: 3, bar: 4 },
 *  { outer: { inner: { foo: 2 } } }
 * ); //=> { outer: { inner: { foo: 3, bar: 4 } }
 */
var mergePath = (0, _ramda.curry)(function (path, source, obj) {
  return (0, _ramda.over)((0, _ramda.lensPath)(path), (0, _mergeRight["default"])(source), obj);
});
var _default = mergePath;
exports["default"] = _default;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Spreads object under property path onto provided object.
 * It's like {@link RA.flattenPath|flattenPath}, but removes object under the property path.
 *
 * @func spreadPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {!Array.<string|number>} path The property path to spread
 * @param {!Object} obj The provided object
 * @return {!Object} The result of the spread
 * @see {@link RA.spreadProp|spreadProp}, {@link RA.flattenPath|flattenPath}
 * @example
 *
 * RA.spreadPath(
 *   ['b1', 'b2'],
 *   { a: 1, b1: { b2: { c: 3, d: 4 } } }
 * ); // => { a: 1, c: 3, d: 4, b1: {} };
 */
var spreadPath = (0, _ramda.curryN)(2, (0, _ramda.converge)(_ramda.merge, [_ramda.dissocPath, (0, _ramda.pathOr)({})]));
var _default = spreadPath;
exports["default"] = _default;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Flattens a property path so that its fields are spread out into the provided object.
 * It's like {@link RA.spreadPath|spreadPath}, but preserves object under the property path.
 *
 * @func flattenPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {!Array.<string|number>} path The property path to flatten
 * @param {!Object} obj The provided object
 * @return {!Object} The flattened object
 * @see {@link RA.flattenProp|flattenProp}, {@link RA.spreadPath|spreadPath}
 * @example
 *
 * RA.flattenPath(
 *   ['b1', 'b2'],
 *   { a: 1, b1: { b2: { c: 3, d: 4 } } }
 * ); // => { a: 1, c: 3, d: 4, b1: { b2: { c: 3, d: 4 } } };
 */
var flattenPath = (0, _ramda.curry)(function (path, obj) {
  return (0, _ramda.merge)(obj, (0, _ramda.pathOr)({}, path, obj));
});
var _default = flattenPath;
exports["default"] = _default;

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns `true` if data structure focused by the given lens equals provided value.
 *
 * @func lensEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig  Lens s a -> b -> s -> Boolean
 * @see {@link RA.lensNotEq|lensNotEq}
 * @param {function} lens Van Laarhoven lens
 * @param {*} value The value to compare the focused data structure with
 * @param {*} data The data structure
 * @return {boolean} `true` if the focused data structure equals value, `false` otherwise
 *
 * @example
 *
 * RA.lensEq(R.lensIndex(0), 1, [0, 1, 2]); // => false
 * RA.lensEq(R.lensIndex(1), 1, [0, 1, 2]); // => true
 * RA.lensEq(R.lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }) // => true
 */
var lensEq = (0, _ramda.curryN)(3, function (lens, val, data) {
  return (0, _ramda.pipe)((0, _ramda.view)(lens), (0, _ramda.equals)(val))(data);
});
var _default = lensEq;
exports["default"] = _default;

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isTrue = _interopRequireDefault(__webpack_require__(352));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if data structure focused by the given lens satisfies the predicate.
 * Note that the predicate is expected to return boolean value and will be evaluated
 * as `false` unless the predicate returns `true`.
 *
 * @func lensSatisfies
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig  Boolean b => (a -> b) -> Lens s a -> s -> b
 * @see {@link RA.lensNotSatisfy|lensNotSatisfy}
 * @param {Function} predicate The predicate function
 * @param {Function} lens Van Laarhoven lens
 * @param {*} data The data structure
 * @return {boolean} `true` if the focused data structure satisfies the predicate, `false` otherwise
 *
 * @example
 *
 * RA.lensSatisfies(RA.isTrue, R.lensIndex(0), [false, true, 1]); // => false
 * RA.lensSatisfies(RA.isTrue, R.lensIndex(1), [false, true, 1]); // => true
 * RA.lensSatisfies(RA.isTrue, R.lensIndex(2), [false, true, 1]); // => false
 * RA.lensSatisfies(R.identity, R.lensProp('x'), { x: 1 }); // => false
 */
var lensSatisfies = (0, _ramda.curryN)(3, function (predicate, lens, data) {
  return (0, _ramda.pipe)((0, _ramda.view)(lens), predicate, _isTrue["default"])(data);
});
var _default = lensSatisfies;
exports["default"] = _default;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _mapping = _interopRequireDefault(__webpack_require__(157));

var _traits = __webpack_require__(517);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// we do this here for jsdocs generate properly
var of = _mapping["default"].of,
    _ap = _mapping["default"].ap,
    _map = _mapping["default"].map,
    _equals = _mapping["default"].equals,
    _concat = _mapping["default"].concat,
    _chain = _mapping["default"].chain,
    _lte = _mapping["default"].lte,
    _empty = _mapping["default"].empty,
    _contramap = _mapping["default"].contramap;
/**
 * The simplest {@link https://github.com/fantasyland/fantasy-land|fantasy-land}
 * compatible monad which attaches no information to values.
 *
 * The Identity type is a very simple type that has no interesting side effects and
 * is effectively just a container of some value. So why does it exist ?
 * The Identity type is often used as the base monad of a monad
 * transformer when no other behaviour is required.
 *
 * @memberOf RA
 * @implements
 * {@link https://github.com/fantasyland/fantasy-land#apply|Apply},
 * {@link https://github.com/fantasyland/fantasy-land#applicative|Applicative},
 * {@link https://github.com/fantasyland/fantasy-land#functor|Functor},
 * {@link https://github.com/fantasyland/fantasy-land#setoid|Setoid},
 * {@link https://github.com/fantasyland/fantasy-land#semigroup|Semigroup},
 * {@link https://github.com/fantasyland/fantasy-land#chain|Chain},
 * {@link https://github.com/fantasyland/fantasy-land#monad|Monad},
 * {@link https://github.com/fantasyland/fantasy-land#ord|Ord},
 * {@link https://github.com/fantasyland/fantasy-land#monoid|Monoid*},
 * {@link https://github.com/fantasyland/fantasy-land#contravariant|Contravariant}
 * @since {@link https://char0n.github.io/ramda-adjunct/1.8.0|v1.8.0}
 */

var Identity = /*#__PURE__*/function () {
  _createClass(Identity, null, [{
    key: of,

    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#applicative|Applicative} specification.
     *
     * @static
     * @sig of :: Applicative f => a -> f a
     * @param {*} value
     * @returns {RA.Identity}
     * @example
     *
     * const a = Identity.of(1); //=> Identity(1)
     */
    value: function value(_value) {
      return new Identity(_value);
    }
  }, {
    key: "of",
    value: function of(value) {
      return new Identity(value);
    }
    /**
     * @static
     */

  }, {
    key: '@@type',
    get: function get() {
      return 'RA/Identity';
    }
    /**
     * Private constructor. Use {@link RA.Identity.of|Identity.of} instead.
     *
     * @param {*} value
     * @return {RA.Identity}
     */

  }]);

  function Identity(value) {
    _classCallCheck(this, Identity);

    this.value = value;
  }
  /**
   * Catamorphism for a value.
   * @returns {*}
   * @example
   *
   * const a = Identity.of(1);
   * a.get(); //=> 1
   */


  _createClass(Identity, [{
    key: "get",
    value: function get() {
      return this.value;
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#apply|Apply} specification.
     *
     * @sig ap :: Apply f => f a ~> f (a -> b) -> f b
     * @param {RA.Identity} applyWithFn
     * @return {RA.Identity}
     * @example
     *
     * const a = Identity.of(1);
     * const b = Identity.of(1).map(a => b => a + b);
     *
     * a.ap(b); //=> Identity(2)
     */

  }, {
    key: _ap,
    value: function value(applyWithFn) {
      return _traits.applyTrait[_ap].call(this, applyWithFn);
    }
  }, {
    key: "ap",
    value: function ap(applyWithFn) {
      return this[_ap](applyWithFn);
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#functor|Functor} specification.
     *
     * @sig map :: Functor f => f a ~> (a -> b) -> f b
     * @param {Function} fn
     * @return {RA.Identity}
     * @example
     *
     * const a = Identity.of(1);
     * a.map(a => a + 1); //=> Identity(2)
     */

  }, {
    key: _map,
    value: function value(fn) {
      return _traits.functorTrait[_map].call(this, fn);
    }
  }, {
    key: "map",
    value: function map(fn) {
      return this[_map](fn);
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#setoid|Setoid} specification.
     *
     * @sig equals :: Setoid a => a ~> a -> Boolean
     * @param {RA.Identity} setoid
     * @return {boolean}
     * @example
     *
     * const a = Identity.of(1);
     * const b = Identity.of(1);
     * const c = Identity.of(2);
     *
     * a.equals(b); //=> true
     * a.equals(c); //=> false
     */

  }, {
    key: _equals,
    value: function value(setoid) {
      return _traits.setoidTrait[_equals].call(this, setoid);
    }
  }, {
    key: "equals",
    value: function equals(setoid) {
      return this[_equals](setoid);
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#semigroup|Semigroup} specification.
     *
     * @sig concat :: Semigroup a => a ~> a -> a
     * @param {RA.Identity} semigroup
     * @return {RA.Identity}
     * @example
     *
     * const a = Identity.of(1);
     * const b = Identity.of(1);
     * a.concat(b); //=> 2
     *
     * const c = Identity.of('c');
     * const d = Identity.of('d');
     * c.concat(d); //=> 'cd'
     *
     * const e = Identity.of(['e']);
     * const f = Identity.of(['f']);
     * e.concat(f); //=> ['e', 'f']
     */

  }, {
    key: _concat,
    value: function value(semigroup) {
      return _traits.semigroupTrait[_concat].call(this, semigroup);
    }
  }, {
    key: "concat",
    value: function concat(semigroup) {
      return this[_concat](semigroup);
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#chain|Chain} specification.
     *
     * @sig chain :: Chain m => m a ~> (a -> m b) -> m b
     * @param {Function} fn Function returning the value of the same {@link https://github.com/fantasyland/fantasy-land#semigroup|Chain}
     * @return {RA.Identity}
     * @example
     *
     * const a = Identity.of(1);
     * const fn = val => Identity.of(val + 1);
     *
     * a.chain(fn).chain(fn); //=> Identity(3)
     */

  }, {
    key: _chain,
    value: function value(fn) {
      return _traits.chainTrait[_chain].call(this, fn);
    }
  }, {
    key: "chain",
    value: function chain(fn) {
      return this[_chain](fn);
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#ord|Ord} specification.
     *
     * @sig lte :: Ord a => a ~> a -> Boolean
     * @param {RA.Identity} ord
     * @return {boolean}
     * @example
     *
     * const a = Identity.of(1);
     * const b = Identity.of(1);
     * const c = Identity.of(2);
     *
     * a.lte(b); //=> true
     * a.lte(c); //=> true
     * c.lte(a); //=> false
     */

  }, {
    key: _lte,
    value: function value(ord) {
      return _traits.ordTrait[_lte].call(this, ord);
    }
  }, {
    key: "lte",
    value: function lte(ord) {
      return this[_lte](ord);
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#monoid|Monoid*} specification.
     * Partial implementation of Monoid specification. `empty` method on instance only, returning
     * identity value of the wrapped type. Using `R.empty` under the hood.
     *
     *
     * @sig empty :: Monoid m => () -> m
     * @return {RA.Identity}
     * @example
     *
     * const a = Identity.of('test');
     * const i = a.empty();
     *
     * a.concat(i); //=> Identity('string');
     * i.concat(a); //=> Identity('string');
     */

  }, {
    key: _empty,
    value: function value() {
      return this.constructor.of((0, _ramda.empty)(this.value));
    }
  }, {
    key: "empty",
    value: function empty() {
      return this[_empty]();
    }
    /**
     * Fantasy land {@link https://github.com/fantasyland/fantasy-land#contravariant|Contravariant} specification.
     *
     * @sig contramap :: Contravariant f => f a ~> (b -> a) -> f b
     * @param {Function} fn
     * @return {RA.Identity}
     * @example
     *
     * const identity = a => a;
     * const add1 = a => a + 1;
     * const divide2 = a => a / 2;
     *
     * Identity.of(divide2).contramap(add1).get()(3); //=> 2
     * Identity.of(identity).contramap(divide2).contramap(add1).get()(3); //=> 2
     * Identity.of(identity).contramap(a => divide2(add1(a))).get()(3); //=> 2
     */

  }, {
    key: _contramap,
    value: function value(fn) {
      var _this = this;

      return this.constructor.of(function (value) {
        return _this.value(fn(value));
      });
    }
  }, {
    key: "contramap",
    value: function contramap(fn) {
      return this[_contramap](fn);
    }
  }]);

  return Identity;
}();

var _default = Identity;
exports["default"] = _default;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isString = _interopRequireDefault(__webpack_require__(54));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Escapes the RegExp special characters.
 *
 * @func escapeRegExp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.21.0|v2.21.0}
 * @category String
 * @sig String -> String
 * @param {string} val the value to escape
 * @return {string}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping|MDN Regular Expressions Escaping}
 * @example
 *
 * RA.escapeRegExp('[ramda-adjunct](https://github.com/char0n/ramda-adjunct)'); //=> '\[ramda\-adjunct\]\(https://github\.com/char0n/ramda\-adjunct\)'
 */
var escapeRegExp = (0, _ramda.when)(_isString["default"], (0, _ramda.replace)(/[.*+?^${}()|[\]\\-]/g, '\\$&'));
var _default = escapeRegExp;
exports["default"] = _default;

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.padStartPonyfill = exports.padStartInvoker = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _String = _interopRequireDefault(__webpack_require__(551));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var padStartInvoker = (0, _ramda.flip)((0, _ramda.invoker)(2, 'padStart'));
exports.padStartInvoker = padStartInvoker;
var padStartPonyfill = (0, _ramda.curry)(_String["default"]);
/**
 * The function pads the current string with a given string
 * (repeated, if needed) so that the resulting string reaches a given length.
 * The padding is applied from the start of the current string.
 *
 * @func padCharsStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig String -> Number -> String -> String
 * @param {string} padString The string to pad the current string with
 * @param {number} targetLength The length of the resulting string once the current string has been padded
 * @param {string} value String value to be padded
 * @return {string} A new string of the specified length with the pad string on the start of current string
 * @see {@link RA.padStart|padStart}, {@link RA.padEnd|padEnd}, {@link RA.padCharsEnd|padCharsEnd}
 * @example
 *
 * RA.padCharsStart('-', 3, 'a'); // => '--a'
 * RA.padCharsStart('foo', 10, 'abc'); // => 'foofoofabc'
 * RA.padCharsStart('123456', 6, 'abc'); // => '123abc'
 */

exports.padStartPonyfill = padStartPonyfill;
var padCharsStart = (0, _isFunction["default"])(String.prototype.padStart) ? padStartInvoker : padStartPonyfill;
var _default = padCharsStart;
exports["default"] = _default;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.padEndInvoker = exports.padEndPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _String = _interopRequireDefault(__webpack_require__(552));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var padEndPonyfill = (0, _ramda.curry)(_String["default"]);
exports.padEndPonyfill = padEndPonyfill;
var padEndInvoker = (0, _ramda.flip)((0, _ramda.invoker)(2, 'padEnd'));
/**
 * The function pads the current string with a given string
 * (repeated, if needed) so that the resulting string reaches a given length.
 * The padding is applied from the end of the current string.
 *
 * @func padCharsEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig String -> Number -> String -> String
 * @param {string} padString The string to pad the current string with
 * @param {number} targetLength The length of the resulting string once
 * the current string has been padded
 * @param {string} value String value to be padded
 * @return {string} A new string of the specified length with the pad string
 * applied at the end of the current string
 * @see {@link RA.padEnd|padEnd}, {@link RA.padCharsStart|padCharsStart}, {@link RA.padStart|padStart}
 * @example
 *
 * RA.padCharsEnd('-', 3, 'a'); // => 'a--'
 * RA.padCharsEnd('foo', 10, 'abc'); // => 'abcfoofoof'
 * RA.padCharsEnd('123456', 6, 'abc'); // => 'abc123'
 */

exports.padEndInvoker = padEndInvoker;
var padCharsEnd = (0, _isFunction["default"])(String.prototype.padEnd) ? padEndInvoker : padEndPonyfill;
var _default = padCharsEnd;
exports["default"] = _default;

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XAll =
/*#__PURE__*/
function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }

  XAll.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;

  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }

    return this.xf['@@transducer/result'](result);
  };

  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = Object(_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.xf['@@transducer/step'](result, false));
    }

    return result;
  };

  return XAll;
}();

var _xall =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xall(f, xf) {
  return new XAll(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xall);

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XMap =
/*#__PURE__*/
function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XMap.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;
  XMap.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].result;

  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xmap(f, xf) {
  return new XMap(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xmap);

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XAny =
/*#__PURE__*/
function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }

  XAny.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;

  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }

    return this.xf['@@transducer/result'](result);
  };

  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = Object(_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.xf['@@transducer/step'](result, true));
    }

    return result;
  };

  return XAny;
}();

var _xany =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xany(f, xf) {
  return new XAny(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xany);

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XAperture =
/*#__PURE__*/
function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }

  XAperture.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;

  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };

  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };

  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;

    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  XAperture.prototype.getCopy = function () {
    return Object(_concat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return XAperture;
}();

var _xaperture =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function _xaperture(n, xf) {
  return new XAperture(n, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xaperture);

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _aperture; });
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);

  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }

  return acc;
}

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _flatCat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(380);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);




var _xchain =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xchain(f, xf) {
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(f, Object(_flatCat_js__WEBPACK_IMPORTED_MODULE_1__["default"])(xf));
});

/* harmony default export */ __webpack_exports__["default"] = (_xchain);

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forceReduced_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(381);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





var preservingReduced = function (xf) {
  return {
    '@@transducer/init': _xfBase_js__WEBPACK_IMPORTED_MODULE_3__["default"].init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? Object(_forceReduced_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': _xfBase_js__WEBPACK_IMPORTED_MODULE_3__["default"].init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) ? Object(_reduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(rxf, result, [input]) : Object(_reduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(rxf, result, input);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_flatCat);

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _forceReduced; });
function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _pipe; });
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _pipeP; });
function _pipeP(f, g) {
  return function () {
    var ctx = this;
    return f.apply(ctx, arguments).then(function (x) {
      return g.call(ctx, x);
    });
  };
}

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _equals; });
/* harmony import */ var _arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _includesWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _functionName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(385);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _objectIs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56);







/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = Object(_arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(aIterator);

  var b = Object(_arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  } // if *a* array contains any element that is not included in *b*


  return !Object(_includesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (b, aItem) {
    return !Object(_includesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"])(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (Object(_objectIs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b)) {
    return true;
  }

  var typeA = Object(_type_js__WEBPACK_IMPORTED_MODULE_6__["default"])(a);

  if (typeA !== Object(_type_js__WEBPACK_IMPORTED_MODULE_6__["default"])(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && Object(_functionName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a.constructor) === 'Promise') {
        return a === b;
      }

      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && Object(_objectIs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a.valueOf(), b.valueOf()))) {
        return false;
      }

      break;

    case 'Date':
      if (!Object(_objectIs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a.valueOf(), b.valueOf())) {
        return false;
      }

      break;

    case 'Error':
      return a.name === b.name && a.message === b.message;

    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }

      break;
  }

  var idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }

    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = Object(_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(a);

  if (keysA.length !== Object(_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;

  while (idx >= 0) {
    var key = keysA[idx];

    if (!(Object(_has_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }

    idx -= 1;
  }

  return true;
}

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _functionName; });
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XFilter =
/*#__PURE__*/
function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFilter.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;
  XFilter.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].result;

  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xfilter);

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

/* harmony default export */ __webpack_exports__["default"] = (_toISOString);

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XReduceBy =
/*#__PURE__*/
function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }

  XReduceBy.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;

  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;

    for (key in this.inputs) {
      if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);

        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }

    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };

  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return XReduceBy;
}();

var _xreduceBy =
/*#__PURE__*/
Object(_curryN_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xreduceBy);

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XDrop =
/*#__PURE__*/
function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }

  XDrop.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;
  XDrop.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].result;

  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }

    return this.xf['@@transducer/step'](result, input);
  };

  return XDrop;
}();

var _xdrop =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xdrop);

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XDropLast =
/*#__PURE__*/
function () {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }

  XDropLast.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;

  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };

  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }

    this.store(input);
    return result;
  };

  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;

    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return XDropLast;
}();

var _xdropLast =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xdropLast(n, xf) {
  return new XDropLast(n, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xdropLast);

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dropLast; });
/* harmony import */ var _take_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);

function dropLast(n, xs) {
  return Object(_take_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n < xs.length ? xs.length - n : 0, xs);
}

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XTake =
/*#__PURE__*/
function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }

  XTake.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;
  XTake.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].result;

  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? Object(_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ret) : ret;
  };

  return XTake;
}();

var _xtake =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xtake(n, xf) {
  return new XTake(n, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xtake);

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XDropLastWhile =
/*#__PURE__*/
function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }

  XDropLastWhile.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;

  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };

  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };

  XDropLastWhile.prototype.flush = function (result, input) {
    result = Object(_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };

  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };

  return XDropLastWhile;
}();

var _xdropLastWhile =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xdropLastWhile(fn, xf) {
  return new XDropLastWhile(fn, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xdropLastWhile);

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dropLastWhile; });
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;

  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }

  return Object(_slice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, idx + 1, xs);
}

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XDropWhile =
/*#__PURE__*/
function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XDropWhile.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].result;

  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }

      this.f = null;
    }

    return this.xf['@@transducer/step'](result, input);
  };

  return XDropWhile;
}();

var _xdropWhile =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xdropWhile(f, xf) {
  return new XDropWhile(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xdropWhile);

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XFind =
/*#__PURE__*/
function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }

  XFind.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;

  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }

    return this.xf['@@transducer/result'](result);
  };

  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = Object(_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.xf['@@transducer/step'](result, input));
    }

    return result;
  };

  return XFind;
}();

var _xfind =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xfind(f, xf) {
  return new XFind(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xfind);

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XFindIndex =
/*#__PURE__*/
function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }

  XFindIndex.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;

  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }

    return this.xf['@@transducer/result'](result);
  };

  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;

    if (this.f(input)) {
      this.found = true;
      result = Object(_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.xf['@@transducer/step'](result, this.idx));
    }

    return result;
  };

  return XFindIndex;
}();

var _xfindIndex =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xfindIndex(f, xf) {
  return new XFindIndex(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xfindIndex);

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XFindLast =
/*#__PURE__*/
function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFindLast.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;

  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };

  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }

    return result;
  };

  return XFindLast;
}();

var _xfindLast =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xfindLast(f, xf) {
  return new XFindLast(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xfindLast);

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XFindLastIndex =
/*#__PURE__*/
function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }

  XFindLastIndex.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;

  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };

  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;

    if (this.f(input)) {
      this.lastIdx = this.idx;
    }

    return result;
  };

  return XFindLastIndex;
}();

var _xfindLastIndex =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xfindLastIndex(f, xf) {
  return new XFindLastIndex(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xfindLastIndex);

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _stepCat; });
/* harmony import */ var _objectAssign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _isTransformer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _objOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(114);





var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return Object(_objectAssign_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) ? Object(_objOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(input[0], input[1]) : input);
  },
  '@@transducer/result': _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
function _stepCat(obj) {
  if (Object(_isTransformer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) {
    return obj;
  }

  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    return _stepCatArray;
  }

  if (typeof obj === 'string') {
    return _stepCatString;
  }

  if (typeof obj === 'object') {
    return _stepCatObject;
  }

  throw new Error('Cannot create transformer for ' + obj);
}

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _of; });
function _of(x) {
  return [x];
}

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var XTakeWhile =
/*#__PURE__*/
function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XTakeWhile.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_2__["default"].result;

  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : Object(_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result);
  };

  return XTakeWhile;
}();

var _xtakeWhile =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xtakeWhile(f, xf) {
  return new XTakeWhile(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xtakeWhile);

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



var XTap =
/*#__PURE__*/
function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XTap.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].init;
  XTap.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_1__["default"].result;

  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap =
/*#__PURE__*/
Object(_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function _xtap(f, xf) {
  return new XTap(f, xf);
});

/* harmony default export */ __webpack_exports__["default"] = (_xtap);

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isRegExp; });
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.noneP = exports.allP = exports.curryRight = exports.curryRightN = exports.weaveLazy = exports.weave = exports.cata = exports.liftF = exports.liftFN = exports.noop = exports.stubArray = exports.stubString = exports.stubObject = exports.stubObj = exports.stubNull = exports.stubUndefined = exports.isNaturalNumber = exports.isError = exports.isIndexed = exports.isSafeInteger = exports.isSymbol = exports.isSparseArray = exports.isNotSet = exports.isSet = exports.isNotRegExp = exports.isRegExp = exports.isFalsy = exports.isTruthy = exports.isFalse = exports.isTrue = exports.isPromise = exports.isThenable = exports.isNotPair = exports.isPair = exports.isEven = exports.isOdd = exports.isNotValidNumber = exports.isValidNumber = exports.isNotFloat = exports.isFloat = exports.isBigInt = exports.isNotInteger = exports.isInteger = exports.isNotFinite = exports.isFinite = exports.isNotNaN = exports.isNaN = exports.isNotMap = exports.isMap = exports.isNonNegative = exports.isNonPositive = exports.isNotNilOrEmpty = exports.isNegativeZero = exports.isPositiveZero = exports.isNegative = exports.isPositive = exports.isNotNumber = exports.isNumber = exports.isInvalidDate = exports.isNotValidDate = exports.isValidDate = exports.isNotDate = exports.isDate = exports.isNotPlainObject = exports.isNotPlainObj = exports.isPlainObject = exports.isPlainObj = exports.isNotObjectLike = exports.isNotObjLike = exports.isObjectLike = exports.isObjLike = exports.isNotObject = exports.isNotObj = exports.isObject = exports.isObj = exports.isNotFunction = exports.isFunction = exports.isNotAsyncFunction = exports.isAsyncFunction = exports.isNotGeneratorFunction = exports.isGeneratorFunction = exports.isNotArrayLike = exports.isArrayLike = exports.isNonEmptyString = exports.isNotString = exports.isEmptyString = exports.isString = exports.isNilOrEmpty = exports.isNotBoolean = exports.isBoolean = exports.isNonEmptyArray = exports.isNotArray = exports.isEmptyArray = exports.isIterable = exports.isArray = exports.isNotNil = exports.isNotNull = exports.isNull = exports.isUndefined = exports.isNotUndefined = void 0;
exports.sign = exports.trunc = exports.floor = exports.divideNum = exports.ceil = exports.round = exports.dropArgs = exports.argsPass = exports.nonePass = exports.notAllPass = exports.nor = exports.neither = exports.nand = exports.notBoth = exports.defaultWhen = exports.isNotEmpty = exports.overlaps = exports.notEqual = exports.inRange = exports.pathNotEq = exports.propNotEq = exports.lensIso = exports.lensTraverse = exports.lensNotSatisfy = exports.lensSatisfies = exports.lensNotEq = exports.lensEq = exports.zipObjWith = exports.unzipObjWith = exports.flattenPath = exports.flattenProp = exports.spreadPath = exports.spreadProp = exports.hasPath = exports.viewOr = exports.pathOrLazy = exports.omitBy = exports.mergePath = exports.mergeProp = exports.mergePaths = exports.mergeProps = exports.resetToDefault = exports.mergeLeft = exports.mergeRight = exports.renameKeyWith = exports.renameKeysWith = exports.renameKeys = exports.paths = exports.invokeArgs = exports.rangeStep = exports.skipTake = exports.sortByProps = exports.notAllUnique = exports.allUnique = exports.toArray = exports.flattenDepth = exports.allEqualTo = exports.allIdenticalTo = exports.allIdentical = exports.repeatStr = exports.allEqual = exports.lengthNotEq = exports.lengthEq = exports.lengthLte = exports.lengthGte = exports.lengthLt = exports.lengthGt = exports.move = exports.included = exports.contained = exports.appendFlipped = exports.compact = exports.omitIndexes = exports.sliceTo = exports.sliceFrom = exports.reduceRightP = exports.reduceP = exports.concatRight = exports.concatAll = exports.ensureArray = exports.list = exports.pickIndexes = exports.reduceIndexed = exports.mapIndexed = exports.fnull = exports.lastP = exports.firstP = exports.anyP = exports.async = exports.dispatch = exports.sequencing = exports.seq = exports.Y = exports.allSettledP = exports.thenCatchP = exports.then = exports.thenP = exports.delayP = exports.rejectP = exports.resolveP = void 0;
exports.Identity = exports.padStart = exports.padEnd = exports.padCharsEnd = exports.padCharsStart = exports.trimCharsStart = exports.trimCharsEnd = exports.trimRight = exports.trimEnd = exports.trimLeft = exports.trimStart = exports.escapeRegExp = exports.replaceAll = exports.toUint32 = exports.toUinteger32 = exports.toInt32 = exports.toInteger32 = exports.subtractNum = void 0;

var _isNotUndefined = _interopRequireDefault(__webpack_require__(80));

exports.isNotUndefined = _isNotUndefined["default"];

var _isUndefined = _interopRequireDefault(__webpack_require__(81));

exports.isUndefined = _isUndefined["default"];

var _isNull = _interopRequireDefault(__webpack_require__(143));

exports.isNull = _isNull["default"];

var _isNotNull = _interopRequireDefault(__webpack_require__(144));

exports.isNotNull = _isNotNull["default"];

var _isNotNil = _interopRequireDefault(__webpack_require__(145));

exports.isNotNil = _isNotNil["default"];

var _isArray = _interopRequireDefault(__webpack_require__(38));

exports.isArray = _isArray["default"];

var _isIterable = _interopRequireDefault(__webpack_require__(148));

exports.isIterable = _isIterable["default"];

var _isEmptyArray = _interopRequireDefault(__webpack_require__(335));

exports.isEmptyArray = _isEmptyArray["default"];

var _isNotArray = _interopRequireDefault(__webpack_require__(336));

exports.isNotArray = _isNotArray["default"];

var _isNonEmptyArray = _interopRequireDefault(__webpack_require__(337));

exports.isNonEmptyArray = _isNonEmptyArray["default"];

var _isBoolean = _interopRequireDefault(__webpack_require__(338));

exports.isBoolean = _isBoolean["default"];

var _isNotBoolean = _interopRequireDefault(__webpack_require__(406));

exports.isNotBoolean = _isNotBoolean["default"];

var _isNilOrEmpty = _interopRequireDefault(__webpack_require__(339));

exports.isNilOrEmpty = _isNilOrEmpty["default"];

var _isString = _interopRequireDefault(__webpack_require__(54));

exports.isString = _isString["default"];

var _isEmptyString = _interopRequireDefault(__webpack_require__(407));

exports.isEmptyString = _isEmptyString["default"];

var _isNotString = _interopRequireDefault(__webpack_require__(408));

exports.isNotString = _isNotString["default"];

var _isNonEmptyString = _interopRequireDefault(__webpack_require__(409));

exports.isNonEmptyString = _isNonEmptyString["default"];

var _isArrayLike = _interopRequireDefault(__webpack_require__(149));

exports.isArrayLike = _isArrayLike["default"];

var _isNotArrayLike = _interopRequireDefault(__webpack_require__(410));

exports.isNotArrayLike = _isNotArrayLike["default"];

var _isGeneratorFunction = _interopRequireDefault(__webpack_require__(146));

exports.isGeneratorFunction = _isGeneratorFunction["default"];

var _isNotGeneratorFunction = _interopRequireDefault(__webpack_require__(411));

exports.isNotGeneratorFunction = _isNotGeneratorFunction["default"];

var _isAsyncFunction = _interopRequireDefault(__webpack_require__(147));

exports.isAsyncFunction = _isAsyncFunction["default"];

var _isNotAsyncFunction = _interopRequireDefault(__webpack_require__(412));

exports.isNotAsyncFunction = _isNotAsyncFunction["default"];

var _isFunction = _interopRequireDefault(__webpack_require__(10));

exports.isFunction = _isFunction["default"];

var _isNotFunction = _interopRequireDefault(__webpack_require__(150));

exports.isNotFunction = _isNotFunction["default"];

var _isObj = _interopRequireDefault(__webpack_require__(83));

exports.isObj = _isObj["default"];
exports.isObject = _isObj["default"];

var _isNotObj = _interopRequireDefault(__webpack_require__(340));

exports.isNotObj = _isNotObj["default"];
exports.isNotObject = _isNotObj["default"];

var _isObjLike = _interopRequireDefault(__webpack_require__(151));

exports.isObjLike = _isObjLike["default"];
exports.isObjectLike = _isObjLike["default"];

var _isNotObjLike = _interopRequireDefault(__webpack_require__(413));

exports.isNotObjLike = _isNotObjLike["default"];
exports.isNotObjectLike = _isNotObjLike["default"];

var _isPlainObj = _interopRequireDefault(__webpack_require__(342));

exports.isPlainObj = _isPlainObj["default"];
exports.isPlainObject = _isPlainObj["default"];

var _isNotPlainObj = _interopRequireDefault(__webpack_require__(414));

exports.isNotPlainObj = _isNotPlainObj["default"];
exports.isNotPlainObject = _isNotPlainObj["default"];

var _isDate = _interopRequireDefault(__webpack_require__(152));

exports.isDate = _isDate["default"];

var _isNotDate = _interopRequireDefault(__webpack_require__(415));

exports.isNotDate = _isNotDate["default"];

var _isValidDate = _interopRequireDefault(__webpack_require__(343));

exports.isValidDate = _isValidDate["default"];

var _isNotValidDate = _interopRequireDefault(__webpack_require__(417));

exports.isNotValidDate = _isNotValidDate["default"];
exports.isInvalidDate = _isNotValidDate["default"];

var _isNumber = _interopRequireDefault(__webpack_require__(35));

exports.isNumber = _isNumber["default"];

var _isNotNumber = _interopRequireDefault(__webpack_require__(418));

exports.isNotNumber = _isNotNumber["default"];

var _isPositive = _interopRequireDefault(__webpack_require__(419));

exports.isPositive = _isPositive["default"];

var _isNegative = _interopRequireDefault(__webpack_require__(153));

exports.isNegative = _isNegative["default"];

var _isPositiveZero = _interopRequireDefault(__webpack_require__(420));

exports.isPositiveZero = _isPositiveZero["default"];

var _isNegativeZero = _interopRequireDefault(__webpack_require__(421));

exports.isNegativeZero = _isNegativeZero["default"];

var _isNotNilOrEmpty = _interopRequireDefault(__webpack_require__(422));

exports.isNotNilOrEmpty = _isNotNilOrEmpty["default"];

var _isNonPositive = _interopRequireDefault(__webpack_require__(423));

exports.isNonPositive = _isNonPositive["default"];

var _isNonNegative = _interopRequireDefault(__webpack_require__(346));

exports.isNonNegative = _isNonNegative["default"];

var _isMap = _interopRequireDefault(__webpack_require__(347));

exports.isMap = _isMap["default"];

var _isNotMap = _interopRequireDefault(__webpack_require__(424));

exports.isNotMap = _isNotMap["default"];

var _isNaN = _interopRequireDefault(__webpack_require__(345));

exports.isNaN = _isNaN["default"];

var _isNotNaN = _interopRequireDefault(__webpack_require__(344));

exports.isNotNaN = _isNotNaN["default"];

var _isFinite = _interopRequireDefault(__webpack_require__(76));

exports.isFinite = _isFinite["default"];

var _isNotFinite = _interopRequireDefault(__webpack_require__(348));

exports.isNotFinite = _isNotFinite["default"];

var _isInteger = _interopRequireDefault(__webpack_require__(36));

exports.isInteger = _isInteger["default"];

var _isNotInteger = _interopRequireDefault(__webpack_require__(427));

exports.isNotInteger = _isNotInteger["default"];

var _isBigInt = _interopRequireDefault(__webpack_require__(428));

exports.isBigInt = _isBigInt["default"];

var _isFloat = _interopRequireDefault(__webpack_require__(154));

exports.isFloat = _isFloat["default"];

var _isNotFloat = _interopRequireDefault(__webpack_require__(429));

exports.isNotFloat = _isNotFloat["default"];

var _isValidNumber = _interopRequireDefault(__webpack_require__(349));

exports.isValidNumber = _isValidNumber["default"];

var _isNotValidNumber = _interopRequireDefault(__webpack_require__(430));

exports.isNotValidNumber = _isNotValidNumber["default"];

var _isOdd = _interopRequireDefault(__webpack_require__(350));

exports.isOdd = _isOdd["default"];

var _isEven = _interopRequireDefault(__webpack_require__(431));

exports.isEven = _isEven["default"];

var _isPair = _interopRequireDefault(__webpack_require__(351));

exports.isPair = _isPair["default"];

var _isNotPair = _interopRequireDefault(__webpack_require__(432));

exports.isNotPair = _isNotPair["default"];

var _isThenable = _interopRequireDefault(__webpack_require__(433));

exports.isThenable = _isThenable["default"];

var _isPromise = _interopRequireDefault(__webpack_require__(434));

exports.isPromise = _isPromise["default"];

var _isTrue = _interopRequireDefault(__webpack_require__(352));

exports.isTrue = _isTrue["default"];

var _isFalse = _interopRequireDefault(__webpack_require__(435));

exports.isFalse = _isFalse["default"];

var _isTruthy = _interopRequireDefault(__webpack_require__(155));

exports.isTruthy = _isTruthy["default"];

var _isFalsy = _interopRequireDefault(__webpack_require__(353));

exports.isFalsy = _isFalsy["default"];

var _isRegExp = _interopRequireDefault(__webpack_require__(156));

exports.isRegExp = _isRegExp["default"];

var _isNotRegExp = _interopRequireDefault(__webpack_require__(436));

exports.isNotRegExp = _isNotRegExp["default"];

var _isSet = _interopRequireDefault(__webpack_require__(354));

exports.isSet = _isSet["default"];

var _isNotSet = _interopRequireDefault(__webpack_require__(437));

exports.isNotSet = _isNotSet["default"];

var _isSparseArray = _interopRequireDefault(__webpack_require__(438));

exports.isSparseArray = _isSparseArray["default"];

var _isSymbol = _interopRequireDefault(__webpack_require__(439));

exports.isSymbol = _isSymbol["default"];

var _isSafeInteger = _interopRequireDefault(__webpack_require__(440));

exports.isSafeInteger = _isSafeInteger["default"];

var _isIndexed = _interopRequireDefault(__webpack_require__(443));

exports.isIndexed = _isIndexed["default"];

var _isError = _interopRequireDefault(__webpack_require__(444));

exports.isError = _isError["default"];

var _isNaturalNumber = _interopRequireDefault(__webpack_require__(445));

exports.isNaturalNumber = _isNaturalNumber["default"];

var _stubUndefined = _interopRequireDefault(__webpack_require__(75));

exports.stubUndefined = _stubUndefined["default"];

var _stubNull = _interopRequireDefault(__webpack_require__(446));

exports.stubNull = _stubNull["default"];

var _stubObj = _interopRequireDefault(__webpack_require__(447));

exports.stubObj = _stubObj["default"];
exports.stubObject = _stubObj["default"];

var _stubString = _interopRequireDefault(__webpack_require__(448));

exports.stubString = _stubString["default"];

var _stubArray = _interopRequireDefault(__webpack_require__(449));

exports.stubArray = _stubArray["default"];

var _noop = _interopRequireDefault(__webpack_require__(450));

exports.noop = _noop["default"];

var _liftFN = _interopRequireDefault(__webpack_require__(355));

exports.liftFN = _liftFN["default"];

var _liftF = _interopRequireDefault(__webpack_require__(452));

exports.liftF = _liftF["default"];

var _cata = _interopRequireDefault(__webpack_require__(453));

exports.cata = _cata["default"];

var _weave = _interopRequireDefault(__webpack_require__(454));

exports.weave = _weave["default"];

var _weaveLazy = _interopRequireDefault(__webpack_require__(455));

exports.weaveLazy = _weaveLazy["default"];

var _curryRightN = _interopRequireDefault(__webpack_require__(356));

exports.curryRightN = _curryRightN["default"];

var _curryRight = _interopRequireDefault(__webpack_require__(456));

exports.curryRight = _curryRight["default"];

var _allP = _interopRequireDefault(__webpack_require__(59));

exports.allP = _allP["default"];

var _noneP = _interopRequireDefault(__webpack_require__(457));

exports.noneP = _noneP["default"];

var _resolveP = _interopRequireDefault(__webpack_require__(39));

exports.resolveP = _resolveP["default"];

var _rejectP = _interopRequireDefault(__webpack_require__(84));

exports.rejectP = _rejectP["default"];

var _delayP = _interopRequireDefault(__webpack_require__(458));

exports.delayP = _delayP["default"];

var _thenP = _interopRequireDefault(__webpack_require__(459));

exports.thenP = _thenP["default"];
exports.then = _thenP["default"];

var _thenCatchP = _interopRequireDefault(__webpack_require__(460));

exports.thenCatchP = _thenCatchP["default"];

var _allSettledP = _interopRequireDefault(__webpack_require__(461));

exports.allSettledP = _allSettledP["default"];

var _Y = _interopRequireDefault(__webpack_require__(463));

exports.Y = _Y["default"];

var _seq = _interopRequireDefault(__webpack_require__(464));

exports.seq = _seq["default"];
exports.sequencing = _seq["default"];

var _dispatch = _interopRequireDefault(__webpack_require__(465));

exports.dispatch = _dispatch["default"];

var _async = _interopRequireDefault(__webpack_require__(466));

exports.async = _async["default"];

var _anyP = _interopRequireDefault(__webpack_require__(467));

exports.anyP = _anyP["default"];
exports.firstP = _anyP["default"];

var _lastP = _interopRequireDefault(__webpack_require__(469));

exports.lastP = _lastP["default"];

var _fnull = _interopRequireDefault(__webpack_require__(470));

exports.fnull = _fnull["default"];

var _mapIndexed = _interopRequireDefault(__webpack_require__(359));

exports.mapIndexed = _mapIndexed["default"];

var _reduceIndexed = _interopRequireDefault(__webpack_require__(471));

exports.reduceIndexed = _reduceIndexed["default"];

var _pickIndexes = _interopRequireDefault(__webpack_require__(472));

exports.pickIndexes = _pickIndexes["default"];

var _list = _interopRequireDefault(__webpack_require__(360));

exports.list = _list["default"];

var _ensureArray = _interopRequireDefault(__webpack_require__(473));

exports.ensureArray = _ensureArray["default"];

var _concatAll = _interopRequireDefault(__webpack_require__(474));

exports.concatAll = _concatAll["default"];

var _concatRight = _interopRequireDefault(__webpack_require__(475));

exports.concatRight = _concatRight["default"];

var _reduceP = _interopRequireDefault(__webpack_require__(476));

exports.reduceP = _reduceP["default"];

var _reduceRightP = _interopRequireDefault(__webpack_require__(477));

exports.reduceRightP = _reduceRightP["default"];

var _sliceFrom = _interopRequireDefault(__webpack_require__(478));

exports.sliceFrom = _sliceFrom["default"];

var _sliceTo = _interopRequireDefault(__webpack_require__(479));

exports.sliceTo = _sliceTo["default"];

var _omitIndexes = _interopRequireDefault(__webpack_require__(480));

exports.omitIndexes = _omitIndexes["default"];

var _compact = _interopRequireDefault(__webpack_require__(481));

exports.compact = _compact["default"];

var _appendFlipped = _interopRequireDefault(__webpack_require__(482));

exports.appendFlipped = _appendFlipped["default"];

var _contained = _interopRequireDefault(__webpack_require__(158));

exports.contained = _contained["default"];
exports.included = _contained["default"];

var _move = _interopRequireDefault(__webpack_require__(483));

exports.move = _move["default"];

var _lengthGt = _interopRequireDefault(__webpack_require__(484));

exports.lengthGt = _lengthGt["default"];

var _lengthLt = _interopRequireDefault(__webpack_require__(485));

exports.lengthLt = _lengthLt["default"];

var _lengthGte = _interopRequireDefault(__webpack_require__(357));

exports.lengthGte = _lengthGte["default"];

var _lengthLte = _interopRequireDefault(__webpack_require__(159));

exports.lengthLte = _lengthLte["default"];

var _lengthEq = _interopRequireDefault(__webpack_require__(85));

exports.lengthEq = _lengthEq["default"];

var _lengthNotEq = _interopRequireDefault(__webpack_require__(486));

exports.lengthNotEq = _lengthNotEq["default"];

var _allEqual = _interopRequireDefault(__webpack_require__(487));

exports.allEqual = _allEqual["default"];

var _repeatStr = _interopRequireDefault(__webpack_require__(488));

exports.repeatStr = _repeatStr["default"];

var _allIdentical = _interopRequireDefault(__webpack_require__(489));

exports.allIdentical = _allIdentical["default"];

var _allIdenticalTo = _interopRequireDefault(__webpack_require__(490));

exports.allIdenticalTo = _allIdenticalTo["default"];

var _allEqualTo = _interopRequireDefault(__webpack_require__(491));

exports.allEqualTo = _allEqualTo["default"];

var _flattenDepth = _interopRequireDefault(__webpack_require__(492));

exports.flattenDepth = _flattenDepth["default"];

var _toArray = _interopRequireDefault(__webpack_require__(494));

exports.toArray = _toArray["default"];

var _allUnique = _interopRequireDefault(__webpack_require__(361));

exports.allUnique = _allUnique["default"];

var _notAllUnique = _interopRequireDefault(__webpack_require__(496));

exports.notAllUnique = _notAllUnique["default"];

var _sortByProps = _interopRequireDefault(__webpack_require__(497));

exports.sortByProps = _sortByProps["default"];

var _skipTake = _interopRequireDefault(__webpack_require__(498));

exports.skipTake = _skipTake["default"];

var _rangeStep = _interopRequireDefault(__webpack_require__(499));

exports.rangeStep = _rangeStep["default"];

var _invokeArgs = _interopRequireDefault(__webpack_require__(500));

exports.invokeArgs = _invokeArgs["default"];

var _paths = _interopRequireDefault(__webpack_require__(363));

exports.paths = _paths["default"];

var _renameKeys = _interopRequireDefault(__webpack_require__(501));

exports.renameKeys = _renameKeys["default"];

var _renameKeysWith = _interopRequireDefault(__webpack_require__(161));

exports.renameKeysWith = _renameKeysWith["default"];

var _renameKeyWith = _interopRequireDefault(__webpack_require__(502));

exports.renameKeyWith = _renameKeyWith["default"];

var _mergeRight = _interopRequireDefault(__webpack_require__(364));

exports.mergeRight = _mergeRight["default"];
exports.mergeLeft = _mergeRight["default"];
exports.resetToDefault = _mergeRight["default"];

var _mergeProps = _interopRequireDefault(__webpack_require__(503));

exports.mergeProps = _mergeProps["default"];

var _mergePaths = _interopRequireDefault(__webpack_require__(504));

exports.mergePaths = _mergePaths["default"];

var _mergeProp = _interopRequireDefault(__webpack_require__(505));

exports.mergeProp = _mergeProp["default"];

var _mergePath = _interopRequireDefault(__webpack_require__(365));

exports.mergePath = _mergePath["default"];

var _omitBy = _interopRequireDefault(__webpack_require__(506));

exports.omitBy = _omitBy["default"];

var _pathOrLazy = _interopRequireDefault(__webpack_require__(507));

exports.pathOrLazy = _pathOrLazy["default"];

var _viewOr = _interopRequireDefault(__webpack_require__(508));

exports.viewOr = _viewOr["default"];

var _hasPath = _interopRequireDefault(__webpack_require__(509));

exports.hasPath = _hasPath["default"];

var _spreadProp = _interopRequireDefault(__webpack_require__(510));

exports.spreadProp = _spreadProp["default"];

var _spreadPath = _interopRequireDefault(__webpack_require__(366));

exports.spreadPath = _spreadPath["default"];

var _flattenProp = _interopRequireDefault(__webpack_require__(511));

exports.flattenProp = _flattenProp["default"];

var _flattenPath = _interopRequireDefault(__webpack_require__(367));

exports.flattenPath = _flattenPath["default"];

var _unzipObjWith = _interopRequireDefault(__webpack_require__(512));

exports.unzipObjWith = _unzipObjWith["default"];

var _zipObjWith = _interopRequireDefault(__webpack_require__(513));

exports.zipObjWith = _zipObjWith["default"];

var _lensEq = _interopRequireDefault(__webpack_require__(368));

exports.lensEq = _lensEq["default"];

var _lensNotEq = _interopRequireDefault(__webpack_require__(514));

exports.lensNotEq = _lensNotEq["default"];

var _lensSatisfies = _interopRequireDefault(__webpack_require__(369));

exports.lensSatisfies = _lensSatisfies["default"];

var _lensNotSatisfy = _interopRequireDefault(__webpack_require__(515));

exports.lensNotSatisfy = _lensNotSatisfy["default"];

var _lensTraverse = _interopRequireDefault(__webpack_require__(516));

exports.lensTraverse = _lensTraverse["default"];

var _lensIso = _interopRequireDefault(__webpack_require__(519));

exports.lensIso = _lensIso["default"];

var _propNotEq = _interopRequireDefault(__webpack_require__(520));

exports.propNotEq = _propNotEq["default"];

var _pathNotEq = _interopRequireDefault(__webpack_require__(521));

exports.pathNotEq = _pathNotEq["default"];

var _inRange = _interopRequireDefault(__webpack_require__(522));

exports.inRange = _inRange["default"];

var _notEqual = _interopRequireDefault(__webpack_require__(523));

exports.notEqual = _notEqual["default"];

var _overlaps = _interopRequireDefault(__webpack_require__(524));

exports.overlaps = _overlaps["default"];

var _isNotEmpty = _interopRequireDefault(__webpack_require__(82));

exports.isNotEmpty = _isNotEmpty["default"];

var _defaultWhen = _interopRequireDefault(__webpack_require__(358));

exports.defaultWhen = _defaultWhen["default"];

var _notBoth = _interopRequireDefault(__webpack_require__(525));

exports.notBoth = _notBoth["default"];

var _nand = _interopRequireDefault(__webpack_require__(526));

exports.nand = _nand["default"];

var _neither = _interopRequireDefault(__webpack_require__(527));

exports.neither = _neither["default"];

var _nor = _interopRequireDefault(__webpack_require__(528));

exports.nor = _nor["default"];

var _notAllPass = _interopRequireDefault(__webpack_require__(529));

exports.notAllPass = _notAllPass["default"];

var _nonePass = _interopRequireDefault(__webpack_require__(530));

exports.nonePass = _nonePass["default"];

var _argsPass = _interopRequireDefault(__webpack_require__(531));

exports.argsPass = _argsPass["default"];

var _dropArgs = _interopRequireDefault(__webpack_require__(532));

exports.dropArgs = _dropArgs["default"];

var _round = _interopRequireDefault(__webpack_require__(533));

exports.round = _round["default"];

var _ceil = _interopRequireDefault(__webpack_require__(534));

exports.ceil = _ceil["default"];

var _divideNum = _interopRequireDefault(__webpack_require__(535));

exports.divideNum = _divideNum["default"];

var _floor = _interopRequireDefault(__webpack_require__(362));

exports.floor = _floor["default"];

var _trunc = _interopRequireDefault(__webpack_require__(536));

exports.trunc = _trunc["default"];

var _sign = _interopRequireDefault(__webpack_require__(538));

exports.sign = _sign["default"];

var _subtractNum = _interopRequireDefault(__webpack_require__(540));

exports.subtractNum = _subtractNum["default"];

var _toInteger = _interopRequireDefault(__webpack_require__(541));

exports.toInteger32 = _toInteger["default"];
exports.toInt32 = _toInteger["default"];

var _toUinteger = _interopRequireDefault(__webpack_require__(542));

exports.toUinteger32 = _toUinteger["default"];
exports.toUint32 = _toUinteger["default"];

var _replaceAll = _interopRequireDefault(__webpack_require__(543));

exports.replaceAll = _replaceAll["default"];

var _escapeRegExp = _interopRequireDefault(__webpack_require__(371));

exports.escapeRegExp = _escapeRegExp["default"];

var _trimStart = _interopRequireDefault(__webpack_require__(545));

exports.trimStart = _trimStart["default"];
exports.trimLeft = _trimStart["default"];

var _trimEnd = _interopRequireDefault(__webpack_require__(547));

exports.trimEnd = _trimEnd["default"];
exports.trimRight = _trimEnd["default"];

var _trimCharsEnd = _interopRequireDefault(__webpack_require__(549));

exports.trimCharsEnd = _trimCharsEnd["default"];

var _trimCharsStart = _interopRequireDefault(__webpack_require__(550));

exports.trimCharsStart = _trimCharsStart["default"];

var _padCharsStart = _interopRequireDefault(__webpack_require__(372));

exports.padCharsStart = _padCharsStart["default"];

var _padCharsEnd = _interopRequireDefault(__webpack_require__(373));

exports.padCharsEnd = _padCharsEnd["default"];

var _padEnd = _interopRequireDefault(__webpack_require__(553));

exports.padEnd = _padEnd["default"];

var _padStart = _interopRequireDefault(__webpack_require__(554));

exports.padStart = _padStart["default"];

var _Identity = _interopRequireDefault(__webpack_require__(370));

exports.Identity = _Identity["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isBoolean = _interopRequireDefault(__webpack_require__(338));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is complement of `Boolean`.
 *
 * @func isNotBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isBoolean|isBoolean}
 * @example
 *
 * RA.isNotBoolean(false); //=> false
 * RA.isNotBoolean(true); //=> false
 * RA.isNotBoolean(null); //=> true
 */
var isNotBoolean = (0, _ramda.complement)(_isBoolean["default"]);
var _default = isNotBoolean;
exports["default"] = _default;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is an empty `String`.
 *
 * @func isEmptyString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotEmptyString|isNotEmptyString}
 * @example
 *
 * RA.isEmptyString(''); // => true
 * RA.isEmptyString('42'); // => false
 * RA.isEmptyString(new String('42')); // => false
 * RA.isEmptyString(new String('')); // => false
 * RA.isEmptyString([42]); // => false
 * RA.isEmptyString({}); // => false
 * RA.isEmptyString(null); // => false
 * RA.isEmptyString(undefined); // => false
 * RA.isEmptyString(42); // => false
 */
var isEmptyString = (0, _ramda.equals)('');
var _default = isEmptyString;
exports["default"] = _default;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isString = _interopRequireDefault(__webpack_require__(54));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is complement of `String`.
 *
 * @func isNotString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isString|isString}
 * @example
 *
 * RA.isNotString('abc'); //=> false
 * RA.isNotString(1); //=> true
 */
var isNotString = (0, _ramda.complement)(_isString["default"]);
var _default = isNotString;
exports["default"] = _default;

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isString = _interopRequireDefault(__webpack_require__(54));

var _isNotObj = _interopRequireDefault(__webpack_require__(340));

var _isNotEmpty = _interopRequireDefault(__webpack_require__(82));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is not an empty `String`.
 *
 * @func isNonEmptyString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isEmptyString|isEmptyString}
 * @example
 *
 * RA.isNonEmptyString('42'); // => true
 * RA.isNonEmptyString(''); // => false
 * RA.isNonEmptyString(new String('42')); // => false
 * RA.isNonEmptyString(new String('')); // => false
 * RA.isNonEmptyString([42]); // => false
 * RA.isNonEmptyString({}); // => false
 * RA.isNonEmptyString(null); // => false
 * RA.isNonEmptyString(undefined); // => false
 * RA.isNonEmptyString(42); // => false
 */
var isNonEmptyString = (0, _ramda.allPass)([_isString["default"], _isNotObj["default"], _isNotEmpty["default"]]);
var _default = isNonEmptyString;
exports["default"] = _default;

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isArrayLike = _interopRequireDefault(__webpack_require__(149));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Tests whether or not an object is similar to an array.
 *
 * @func isNotArrayLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isArrayLike|isArrayLike}
 * @example
 *
 * RA.isNotArrayLike([]); //=> false
 * RA.isNotArrayLike(true); //=> true
 * RA.isNotArrayLike({}); //=> true
 * RA.isNotArrayLike({length: 10}); //=> true
 * RA.isNotArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> false
 */
var isNotArrayLike = (0, _ramda.complement)(_isArrayLike["default"]);
var _default = isNotArrayLike;
exports["default"] = _default;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isGeneratorFunction = _interopRequireDefault(__webpack_require__(146));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if input value is complement of `Generator Function`
 *
 * @func isNotGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotGeneratorFunction(function* test() { }); //=> false
 * RA.isNotGeneratorFunction(null); //=> true
 * RA.isNotGeneratorFunction(function test() { }); //=> true
 * RA.isNotGeneratorFunction(() => {}); //=> true
 */

/* eslint-enable max-len */
var isNotGeneratorFunction = (0, _ramda.complement)(_isGeneratorFunction["default"]);
var _default = isNotGeneratorFunction;
exports["default"] = _default;

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isAsyncFunction = _interopRequireDefault(__webpack_require__(147));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if input value is complement of `Async Function`
 *
 * @func isNotAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotAsyncFunction(async function test() { }); //=> false
 * RA.isNotAsyncFunction(null); //=> true
 * RA.isNotAsyncFunction(function test() { }); //=> true
 * RA.isNotAsyncFunction(() => {}); //=> true
 */

/* eslint-enable max-len */
var isNotAsyncFunction = (0, _ramda.complement)(_isAsyncFunction["default"]);
var _default = isNotAsyncFunction;
exports["default"] = _default;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isObjLike = _interopRequireDefault(__webpack_require__(151));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isNotObjLike
 * @aliases isNotObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isObjLike|isObjLike}, {@link RA.isObj|isObj}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isNotObjLike({}); //=> false
 * RA.isNotObjLike([]); //=> false
 * RA.isNotObjLike(() => {}); //=> true
 * RA.isNotObjLike(null); //=> true
 * RA.isNotObjLike(undefined); //=> true
 */

/* eslint-enable max-len */
var isNotObjLike = (0, _ramda.complement)(_isObjLike["default"]);
var _default = isNotObjLike;
exports["default"] = _default;

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isPlainObj = _interopRequireDefault(__webpack_require__(342));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/**
 * Check to see if an object is a not plain object (created using `{}`, `new Object()` or `Object.create(null)`).
 *
 * @func isNotPlainObj
 * @aliases isNotPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isPlainObj|isPlainObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isObj|isObj}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isNotPlainObj(new Bar()); //=> true
 * RA.isNotPlainObj({ prop: 'value' }); //=> false
 * RA.isNotPlainObj(['a', 'b', 'c']); //=> true
 * RA.isNotPlainObj(Object.create(null); //=> false
 * RA.isNotPlainObj(new Object()); //=> false
 */

/* eslint-enable max-len */
var isNotPlainObj = (0, _ramda.complement)(_isPlainObj["default"]);
var _default = isNotPlainObj;
exports["default"] = _default;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isDate = _interopRequireDefault(__webpack_require__(152));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is complement of `Date` object.
 *
 * @func isNotDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isDate|isDate}
 * @example
 *
 * RA.isNotDate(new Date()); //=> false
 * RA.isNotDate('1997-07-16T19:20+01:00'); //=> true
 */
var isNotDate = (0, _ramda.complement)(_isDate["default"]);
var _default = isNotDate;
exports["default"] = _default;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNumber = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line no-restricted-globals
var isNaNPonyfill = (0, _ramda.both)(_isNumber["default"], isNaN);
var _default = isNaNPonyfill;
exports["default"] = _default;

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isValidDate = _interopRequireDefault(__webpack_require__(343));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is complement of valid `Date` object.
 *
 * @func isNotValidDate
 * @aliases isInvalidDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.8.0|v1.8.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isValidDate|isValidDate}, {@link RA.isDate|isDate}, {@link RA.isNotDate|isNotDate}
 * @example
 *
 * RA.isNotValidDate(new Date()); //=> false
 * RA.isNotValidDate(new Date('a')); //=> true
 */
var isNotValidDate = (0, _ramda.complement)(_isValidDate["default"]);
var _default = isNotValidDate;
exports["default"] = _default;

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNumber = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is a complement of `Number` primitive or object.
 *
 * @func isNotNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNumber|isNumber}
 * @example
 *
 * RA.isNotNumber(5); // => false
 * RA.isNotNumber(Number.MAX_VALUE); // => false
 * RA.isNotNumber(-Infinity); // => false
 * RA.isNotNumber('5'); // => true
 */
var isNotNumber = (0, _ramda.complement)(_isNumber["default"]);
var _default = isNotNumber;
exports["default"] = _default;

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNumber = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is a positive `Number` primitive or object. Zero is not considered positive.
 *
 * @func isPositive
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.15.0|v1.15.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNegative|isNegative}
 * @example
 *
 * RA.isPositive(1); // => true
 * RA.isPositive(Number.MAX_VALUE); // => true
 * RA.isPositive(-Infinity); // => false
 * RA.isPositive(NaN); // => false
 * RA.isPositive('5'); // => false
 */
var isPositive = (0, _ramda.both)(_isNumber["default"], (0, _ramda.lt)(0));
var _default = isPositive;
exports["default"] = _default;

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if value is a positive zero (+0).
 *
 * @func isPositiveZero
 * @memberof RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNegativeZero|isNegativeZero}
 * @example
 *
 * RA.isPositiveZero(+0); //=> true
 * RA.isPositiveZero(0); //=> true
 * RA.isPositiveZero(-0); //=> false
 * RA.isPositiveZero(null); //=> false
 */
var isPositiveZero = (0, _ramda.identical)(+0);
var _default = isPositiveZero;
exports["default"] = _default;

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if value is a negative zero (-0).
 *
 * @func isNegativeZero
 * @memberof RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see @see {@link RA.isPositiveZero|isPositiveZero}
 * @example
 *
 * RA.isNegativeZero(-0); //=> true
 * RA.isNegativeZero(+0); //=> false
 * RA.isNegativeZero(0); //=> false
 * RA.isNegativeZero(null); //=> false
 */
var isNegativeZero = (0, _ramda.identical)(-0);
var _default = isNegativeZero;
exports["default"] = _default;

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNilOrEmpty = _interopRequireDefault(__webpack_require__(339));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if the given value is its type's empty value, `null` or `undefined`.
 *
 * @func isNotNilOrEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.18.0|v2.18.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNilOrEmpty|isNilOrEmpty}
 * @example
 *
 * RA.isNotNilOrEmpty([1, 2, 3]); //=> true
 * RA.isNotNilOrEmpty([]); //=> false
 * RA.isNotNilOrEmpty(''); //=> false
 * RA.isNotNilOrEmpty(null); //=> false
 * RA.isNotNilOrEmpty(undefined): //=> false
 * RA.isNotNilOrEmpty({}); //=> false
 * RA.isNotNilOrEmpty({length: 0}); //=> true
 */
var isNotNilOrEmpty = (0, _ramda.complement)(_isNilOrEmpty["default"]);
var _default = isNotNilOrEmpty;
exports["default"] = _default;

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNumber = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is a non-positive `Number` primitive or object. This includes all negative
 * numbers and zero.
 *
 * @func isNonPositive
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNegative|isNegative}, {@link RA.isNonNegative|isNonNegative}
 * @example
 *
 * RA.isNonPositive(0); // => true
 * RA.isNonPositive(-1); // => true
 * RA.isNonPositive(-Infinity); // => true
 * RA.isNonPositive(Number.MIN_VALUE); // => true
 *
 * RA.isNonPositive(Infinity); // => false
 * RA.isNonPositive(Number.MAX_VALUE); // => false
 * RA.isNonPositive(NaN); // => false
 */
var isNonPositive = (0, _ramda.curryN)(1, (0, _ramda.both)(_isNumber["default"], (0, _ramda.flip)(_ramda.lte)(0)));
var _default = isNonPositive;
exports["default"] = _default;

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isMap = _interopRequireDefault(__webpack_require__(347));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is complement of `Map` object.
 *
 * @func isNotMap
 * @memberOf RA
 * @category Type
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isMap|isMap}
 * @example
 *
 * RA.isNotMap(new Map()); //=> false
 * RA.isNotMap(new Map([[1, 2], [2, 1]])); //=> false
 * RA.isNotMap(new Set()); //=> true
 * RA.isNotMap({}); //=> true
 * RA.isNotMap(12); //=> true
 */
var isNotMap = (0, _ramda.complement)(_isMap["default"]);
var _default = isNotMap;
exports["default"] = _default;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNumber = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line no-restricted-globals
var isFinitePonyfill = (0, _ramda.both)(_isNumber["default"], isFinite);
var _default = isFinitePonyfill;
exports["default"] = _default;

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFinite = _interopRequireDefault(__webpack_require__(76));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isIntegerPonyfill = (0, _ramda.both)(_isFinite["default"], (0, _ramda.converge)(_ramda.equals, [Math.floor, _ramda.identity]));
var _default = isIntegerPonyfill;
exports["default"] = _default;

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isInteger = _interopRequireDefault(__webpack_require__(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks whether the passed value is complement of an `integer`.
 *
 *
 * @func isNotInteger
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.7.0|v0.7.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isInteger|isInteger}
 * @example
 *
 * RA.isNotInteger(0); //=> false
 * RA.isNotInteger(1); //=> false
 * RA.isNotInteger(-100000); //=> false
 *
 * RA.isNotInteger(0.1);       //=> true
 * RA.isNotInteger(Math.PI);   //=> true
 *
 * RA.isNotInteger(NaN);       //=> true
 * RA.isNotInteger(Infinity);  //=> true
 * RA.isNotInteger(-Infinity); //=> true
 * RA.isNotInteger('10');      //=> true
 * RA.isNotInteger(true);      //=> true
 * RA.isNotInteger(false);     //=> true
 * RA.isNotInteger([1]);       //=> true
 */
var isNotInteger = (0, _ramda.complement)(_isInteger["default"]);
var _default = isNotInteger;
exports["default"] = _default;

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if value is a BigInt.
 *
 * @func isBigInt
 * @memberOf RA
 * @category Type
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isBigInt(5); // => false
 * RA.isBigInt(Number.MAX_VALUE); // => false
 * RA.isBigInt(-Infinity); // => false
 * RA.isBigInt(10); // => false
 * RA.isBigInt(10n); // => true
 * RA.isBigInt(BitInt(9007199254740991)); // => true
 */
var isBigInt = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('BigInt')));
var _default = isBigInt;
exports["default"] = _default;

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFloat = _interopRequireDefault(__webpack_require__(154));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks whether the passed value is complement of a `float`.
 *
 * @func isNotFloat
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.14.0|v1.14.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFloat|isFloat}
 * @example
 *
 * RA.isNotFloat(0); //=> true
 * RA.isNotFloat(1); //=> true
 * RA.isNotFloat(-100000); //=> true
 *
 * RA.isNotFloat(0.1);       //=> false
 * RA.isNotFloat(Math.PI);   //=> false
 *
 * RA.isNotFloat(NaN);       //=> true
 * RA.isNotFloat(Infinity);  //=> true
 * RA.isNotFloat(-Infinity); //=> true
 * RA.isNotFloat('10');      //=> true
 * RA.isNotFloat(true);      //=> true
 * RA.isNotFloat(false);     //=> true
 * RA.isNotFloat([1]);       //=> true
 */
var isNotFloat = (0, _ramda.curryN)(1, (0, _ramda.complement)(_isFloat["default"]));
var _default = isNotFloat;
exports["default"] = _default;

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isValidNumber = _interopRequireDefault(__webpack_require__(349));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is not a valid `Number`. A valid `Number` is a number that is not `NaN`,
 * `Infinity` or `-Infinity`.
 *
 * @func isNotValidNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isValidNumber|isValidNumber}
 * @example
 *
 * RA.isNotValidNumber(1); //=> false
 * RA.isNotValidNumber(''); //=> true
 * RA.isNotValidNumber(NaN); //=> true
 * RA.isNotValidNumber(Infinity); //=> true
 * RA.isNotValidNumber(-Infinity); //=> true
 */
var isNotValidNumber = (0, _ramda.complement)(_isValidNumber["default"]);
var _default = isNotValidNumber;
exports["default"] = _default;

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isInteger = _interopRequireDefault(__webpack_require__(36));

var _isOdd = _interopRequireDefault(__webpack_require__(350));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is even integer number.
 * An even number is an integer which is "evenly divisible" by two.
 * Zero is an even number because zero divided by two equals zero,
 * which despite not being a natural number, is an integer.
 * Even numbers are either positive or negative.
 *
 * @func isEven
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isOdd|isOdd}
 * @example
 *
 * RA.isEven(0); // => true
 * RA.isEven(1); // => false
 * RA.isEven(-Infinity); // => false
 * RA.isEven(4); // => true
 * RA.isEven(3); // => false
 */
var isEven = (0, _ramda.curryN)(1, (0, _ramda.both)(_isInteger["default"], (0, _ramda.complement)(_isOdd["default"])));
var _default = isEven;
exports["default"] = _default;

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isPair = _interopRequireDefault(__webpack_require__(351));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is complement of a pair.
 *
 * @func isNotPair
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#pair|R.pair}, {@link RA.isPair|isPair}
 * @example
 *
 * RA.isNotPair([]); // => true
 * RA.isNotPair([0]); // => true
 * RA.isNotPair([0, 1]); // => false
 * RA.isNotPair([0, 1, 2]); // => true
 * RA.isNotPair({0: 0, 1: 1}); // => true
 * RA.isNotPair({foo: 0, bar: 0}); // => true
 */
var isNotPair = (0, _ramda.complement)(_isPair["default"]);
var _default = isNotPair;
exports["default"] = _default;

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is a `thenable`.
 * `thenable` is an object or function that defines a `then` method.
 *
 * @func isThenable
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isPromise|isPromise}
 * @example
 *
 * RA.isThenable(null); // => false
 * RA.isThenable(undefined); // => false
 * RA.isThenable([]); // => false
 * RA.isThenable(Promise.resolve()); // => true
 * RA.isThenable(Promise.reject()); // => true
 * RA.isThenable({ then: () => 1 }); // => true
 */
var isThenable = (0, _ramda.pathSatisfies)(_isFunction["default"], ['then']);
var _default = isThenable;
exports["default"] = _default;

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isObj = _interopRequireDefault(__webpack_require__(83));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is a native `Promise`.
 * The Promise object represents the eventual completion (or failure)
 * of an asynchronous operation, and its resulting value.
 *
 * @func isPromise
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link https://promisesaplus.com/|Promises/A+}, {@link RA.isThenable|isThenable}
 * @example
 *
 * RA.isPromise(null); // => false
 * RA.isPromise(undefined); // => false
 * RA.isPromise([]); // => false
 * RA.isPromise(Promise.resolve()); // => true
 * RA.isPromise(Promise.reject()); // => true
 * RA.isPromise({ then: () => 1 }); // => false
 */
var isPromise = (0, _ramda.curryN)(1, (0, _ramda.both)(_isObj["default"], (0, _ramda.pipe)(_ramda.toString, (0, _ramda.equals)('[object Promise]'))));
var _default = isPromise;
exports["default"] = _default;

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if input value is the Boolean primitive `false`. Will return false for all values created
 * using the `Boolean` function as a constructor.
 *
 * @func isFalse
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isTrue|isTrue}, {@link RA.isTruthy|isTruthy}, {@link RA.isFalsy|isFalsy}
 * @example
 *
 * RA.isFalse(false); // => true
 * RA.isFalse(Boolean(false)); // => true
 * RA.isFalse(true); // => false
 * RA.isFalse(0); // => false
 * RA.isFalse(''); // => false
 * RA.isFalse(null); // => false
 * RA.isFalse(undefined); // => false
 * RA.isFalse(NaN); // => false
 * RA.isFalse([]); // => false
 * RA.isFalse(new Boolean(false)); // => false
 */
var isFalse = (0, _ramda.identical)(false);
var _default = isFalse;
exports["default"] = _default;

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isRegExp = _interopRequireDefault(__webpack_require__(156));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is complement of `RegExp` object.
 *
 * @func isNotRegExp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isRegExp|isRegExp}
 * @example
 *
 * RA.isNotRegExp(1); //=> true
 * RA.isNotRegExp(/(?:)/); //=> false
 * RA.isNotRegExp(new RegExp()); //=> false
 */
var isNotRegExp = (0, _ramda.complement)(_isRegExp["default"]);
var _default = isNotRegExp;
exports["default"] = _default;

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isSet = _interopRequireDefault(__webpack_require__(354));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is complement of `Set` object.
 *
 * @func isNotSet
 * @memberOf RA
 * @category Type
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isSet|isSet}
 * @example
 *
 * RA.isNotSet(new Map()); //=> true
 * RA.isNotSet(new Set()); //=> false
 * RA.isNotSet(new Set([1,2]); //=> false
 * RA.isNotSet(new Object()); //=> true
 */
var isNotSet = (0, _ramda.complement)(_isSet["default"]);
var _default = isNotSet;
exports["default"] = _default;

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isArray = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if input value is a sparse Array.
 * An array with at least one "empty slot" in it is often called a "sparse array."
 * Empty slot doesn't mean that the slot contains `null` or `undefined` values,
 * but rather that the slots don't exist.
 *
 * @func isSparseArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.20.0|v2.20.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} list The list to test
 * @return {boolean}
 * @see {@link https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch3.md#array|Sparse Arrays}, {@link RA.isArray|isArray}
 * @example
 *
 * RA.isSparseArray(new Array(3)); // => true
 * RA.isSparseArray([1,,3]); // => true
 *
 * const list = [1, 2, 3];
 * delete list[1];
 * RA.isSparseArray(list); // => true
 *
 * RA.isSparseArray([1, 2, 3]); // => false
 */
var isSparseArray = (0, _ramda.both)(_isArray["default"], (0, _ramda.converge)((0, _ramda.complement)(_ramda.identical), [(0, _ramda.pipe)(_ramda.values, _ramda.length), _ramda.length]));
var _default = isSparseArray;
exports["default"] = _default;

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if input value is a Symbol.
 *
 * @func isSymbol
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol|MDN Symbol}
 * @example
 *
 * RA.isSymbol(Symbol('1')); //=> true
 * RA.isSymbol(Symbol(1)); //=> true
 * RA.isSymbol('string'); //=> false
 * RA.isSymbol(undefined); //=> false
 * RA.isSymbol(null); //=> false
 */
var isSymbol = (0, _ramda.curryN)(1, function (val) {
  return _typeof(val) === 'symbol' || _typeof(val) === 'object' && (0, _ramda.type)(val) === 'Symbol';
});
var _default = isSymbol;
exports["default"] = _default;

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.isSafeIntegerPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Number = _interopRequireDefault(__webpack_require__(441));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isSafeIntegerPonyfill = (0, _ramda.curryN)(1, _Number["default"]);
/**
 * Checks whether the passed value is a safe `integer`.
 *
 * @func isSafeInteger
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isSafeInteger(3); //=> true
 * RA.isSafeInteger(Math.pow(2, 53)) //=> false
 * RA.isSafeInteger(Math.pow(2, 53) - 1); //=> true
 * RA.isSafeInteger(NaN); //=> false
 * RA.isSafeInteger(Infinity); //=> false
 * RA.isSafeInteger('3') //=> false
 * RA.isSafeInteger(3.1); //=> false
 * RA.isSafeInteger(3.0); //=> true
 * RA.isSafeInteger('string'); //=> false
 * RA.isSafeInteger(null); //=> false
 * RA.isSafeInteger(undefined); //=> false
 * RA.isSafeInteger({}); //=> false
 * RA.isSafeInteger(() => { }); //=> false
 * RA.isSafeInteger(true); //=> false
 */

exports.isSafeIntegerPonyfill = isSafeIntegerPonyfill;
var isSafeInteger = (0, _isFunction["default"])(Number.isSafeInteger) ? (0, _ramda.curryN)(1, (0, _ramda.bind)(Number.isSafeInteger, Number)) : isSafeIntegerPonyfill;
var _default = isSafeInteger;
exports["default"] = _default;

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isInteger = _interopRequireDefault(__webpack_require__(36));

var _Number = _interopRequireDefault(__webpack_require__(442));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isSafeIntegerPonyfill = (0, _ramda.both)(_isInteger["default"], function (value) {
  return Math.abs(value) <= _Number["default"];
});
var _default = isSafeIntegerPonyfill;
exports["default"] = _default;

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var _default = MAX_SAFE_INTEGER;
exports["default"] = _default;

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isArray = _interopRequireDefault(__webpack_require__(38));

var _isString = _interopRequireDefault(__webpack_require__(54));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Determine if input value is an indexed data type.
 *
 * @func isIndexed
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.26.0|v2.26.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isIndexed([1]) //=> true
 * RA.isIndexed('test') //=> true
 */
var isIndexed = (0, _ramda.curryN)(1, (0, _ramda.either)(_isString["default"], _isArray["default"]));
var _default = isIndexed;
exports["default"] = _default;

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError` or `URIError` object.
 *
 * @func isError
 * @category Type
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.30.0|v2.30.0}
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean} Returns `true` if value is an error object, `false` otherwise
 * @example
 *
 * RA.isError(new Error()); //=> true
 * RA.isError(Error); //=> false
 * RA.isError(1); // => false
 */
var isError = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('Error')));
var _default = isError;
exports["default"] = _default;

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isInteger = _interopRequireDefault(__webpack_require__(36));

var _isNegative = _interopRequireDefault(__webpack_require__(153));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if value is a natural number.
 * Natural numbers correspond to all non-negative integers and 0.
 *
 * @func isNaturalNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isNaturalNumber(5); // => true
 * RA.isNaturalNumber(Number.MAX_VALUE); // => true
 * RA.isNaturalNumber(0); // => true
 * RA.isNaturalNumber(-1); // => false
 * RA.isNaturalNumber(0.9); // => false
 */
var isNaturalNumber = (0, _ramda.curryN)(1, (0, _ramda.both)(_isInteger["default"], (0, _ramda.complement)(_isNegative["default"])));
var _default = isNaturalNumber;
exports["default"] = _default;

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * A function that returns `null`.
 *
 * @func stubNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.6.0|v1.6.0}
 * @category Function
 * @sig ... -> null
 * @return {null}
 * @example
 *
 * RA.stubNull(); //=> null
 * RA.stubNull(1, 2, 3); //=> null
 */
var stubNull = (0, _ramda.always)(null);
var _default = stubNull;
exports["default"] = _default;

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

/**
 * This function returns a new empty object.
 *
 * @func stubObj
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Function
 * @sig ... -> Object
 * @aliases stubObject
 * @return {Object} Returns the new empty object.
 * @example
 *
 * RA.stubObj(); //=> {}
 * RA.stubObj(1, 2, 3); //=> {}
 */
var stubObj = function stubObj() {
  return {};
};

var _default = stubObj;
exports["default"] = _default;

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * A function that returns empty string.
 *
 * @func stubString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Function
 * @sig ... -> String
 * @return {string} The empty string
 * @example
 *
 * RA.stubString(); //=> ''
 * RA.stubString(1, 2, 3); //=> ''
 */
var stubString = (0, _ramda.always)('');
var _default = stubString;
exports["default"] = _default;

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

/**
 * A function that returns new empty array on every call.
 *
 * @func stubArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Function
 * @sig ... -> Array
 * @return {Array} New empty array
 * @example
 *
 * RA.stubArray(); //=> []
 * RA.stubArray(1, 2, 3); //=> []
 */
var stubArray = function stubArray() {
  return [];
};

var _default = stubArray;
exports["default"] = _default;

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _stubUndefined = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * A function that performs no operations.
 *
 * @func noop
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.0.0|v1.0.0}
 * @category Function
 * @sig ... -> undefined
 * @return {undefined}
 * @example
 *
 * RA.noop(); //=> undefined
 * RA.noop(1, 2, 3); //=> undefined
 */
var noop = (0, _ramda.always)((0, _stubUndefined["default"])());
var _default = noop;
exports["default"] = _default;

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _mapping = _interopRequireDefault(__webpack_require__(157));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isFunctor = (0, _ramda.either)((0, _ramda.pathSatisfies)(_isFunction["default"], ['map']), (0, _ramda.pathSatisfies)(_isFunction["default"], [_mapping["default"].map]));
var isApply = (0, _ramda.both)(isFunctor, (0, _ramda.either)((0, _ramda.pathSatisfies)(_isFunction["default"], ['ap']), (0, _ramda.pathSatisfies)(_isFunction["default"], [_mapping["default"].ap])));
var ap = (0, _ramda.curryN)(2, function (applyF, applyX) {
  // return original ramda `ap` if not Apply spec
  if (!isApply(applyF) || !isApply(applyX)) {
    return (0, _ramda.ap)(applyF, applyX);
  }

  try {
    // new version of `ap` starting from ramda version > 0.23.0
    return applyF.ap(applyX);
  } catch (e) {
    // old version of `ap` till ramda version <= 0.23.0
    return applyX.ap(applyF);
  }
});
var _default = ap;
exports["default"] = _default;

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _liftFN = _interopRequireDefault(__webpack_require__(355));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
 * the fantasy land Apply spec of algebraic structures.
 *
 * Lifting is specific for {@link https://github.com/scalaz/scalaz|scalaz} and {@link http://functionaljava.org/|function Java} implementations.
 * Old version of fantasy land spec were not compatible with this approach,
 * but as of fantasy land 1.0.0 Apply spec also adopted this approach.
 *
 * This function acts as interop for ramda <= 0.23.0 and {@link https://monet.github.io/monet.js/|monet.js}.
 *
 * More info {@link https://github.com/fantasyland/fantasy-land/issues/50|here}.
 *
 * @func liftF
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category Function
 * @sig Apply a => (a... -> a) -> (a... -> a)
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function
 * @see {@link RA.liftFN|liftFN}
 * @example
 *
 * const { Maybe } = require('monet');
 *
 * const add3 = (a, b, c) => a + b + c;
 * const madd3 = RA.liftF(add3);
 *
 * madd3(Maybe.Some(10), Maybe.Some(15), Maybe.Some(17)); //=> Maybe.Some(42)
 * madd3(Maybe.Some(10), Maybe.Nothing(), Maybe.Some(17)); //=> Maybe.Nothing()
 */
var liftF = (0, _ramda.curryN)(1, function (fn) {
  return (0, _liftFN["default"])(fn.length, fn);
});
var _default = liftF;
exports["default"] = _default;

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The catamorphism is a way of folding a type into a value.
 *
 * **Either**
 *
 * If the either is right then the right function will be executed with
 * the `right` value and the value of the function returned. Otherwise the left function
 * will be called with the `left` value.
 *
 * **Maybe**
 *
 * If the maybe is Some than the right function will be executed with the `some` value and the value of the function
 * returned. Otherwise the left function with be called without an argument.
 *
 * **Result**
 *
 * If the result is Ok than the right function will be executed with the `Ok` value and the value of the function
 * returned. Otherwise the left function will be called with the `Error` value.
 *
 * **Validation**
 *
 * If the validation is Success than the right function will be executed with the `Success` value and the value of the function
 * returned. Otherwise the left function will be called with the `Failure` value.
 *
 * Supported monadic libraries: {@link https://monet.github.io/monet.js/|monet.js}, {@link https://folktale.origamitower.com/|folktale}, {@link https://github.com/ramda/ramda-fantasy|ramda-fantasy}
 *
 * @func cata
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.4.0|v1.4.0}
 * @category Function
 * @sig (a -> b) -> (a -> c) -> Cata a -> b | c
 * @param {Function} leftFn The left function that consumes the left value
 * @param {Function} rightFn The right function that consumes the right value
 * @param {Cata} catamorphicObj Either, Maybe or any other type with catamorphic capabilities (`cata` or `either` method)
 * @return {*}
 * @see {@link https://monet.github.io/monet.js/#cata|cata explained}
 * @example
 *
 * // Either
 * const eitherR = Either.Right(1);
 * const eitherL = Either.Left(2);
 *
 * RA.cata(identity, identity, eitherR); //=> 1
 * RA.cata(identity, identity, eitherL); //=> 2
 *
 * // Maybe
 * const maybeSome = Maybe.Some(1);
 * const maybeNothing = Maybe.Nothing();
 *
 * RA.cata(identity, identity, maybeSome); //=> 1
 * RA.cata(identity, identity, maybeNothing); //=> undefined
 */
var catamorphism = (0, _ramda.curry)(function (leftFn, rightFn, catamorphicObj) {
  // folktale support
  if ((0, _isFunction["default"])(catamorphicObj.matchWith)) {
    return catamorphicObj.matchWith({
      // Result type
      Ok: function Ok(_ref) {
        var value = _ref.value;
        return rightFn(value);
      },
      Error: function Error(_ref2) {
        var value = _ref2.value;
        return leftFn(value);
      },
      // Maybe type
      Just: function Just(_ref3) {
        var value = _ref3.value;
        return rightFn(value);
      },
      Nothing: function Nothing() {
        return leftFn(undefined);
      },
      // Validation type
      Success: function Success(_ref4) {
        var value = _ref4.value;
        return rightFn(value);
      },
      Failure: function Failure(_ref5) {
        var value = _ref5.value;
        return leftFn(value);
      }
    });
  }

  if ((0, _isFunction["default"])(catamorphicObj.cata)) {
    return catamorphicObj.cata(leftFn, rightFn);
  }

  if ((0, _isFunction["default"])(catamorphicObj.getOrElse)) {
    var elseValue = "RA.cata".concat(Math.random());
    var value = catamorphicObj.getOrElse(elseValue);
    return value === elseValue ? leftFn() : rightFn(value);
  }

  return catamorphicObj.either(leftFn, rightFn);
});
var _default = catamorphism;
exports["default"] = _default;

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Weaves a configuration into function returning the runnable monad like `Reader` or `Free`.
 * This allows us to pre-bind the configuration in advance and use the weaved function
 * without need to explicitly pass the configuration on every call.
 *
 * @func weave
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.7.0|v1.7.0}
 * @category Function
 * @sig (*... -> *) -> * -> (*... -> *)
 * @param {Function} fn The function to weave
 * @param {*} config The configuration to weave into fn
 * @return {Function} Auto-curried weaved function
 * @example
 *
 * const { Reader: reader } = require('monet');
 *
 * const log = value => reader(
 *   config => config.log(value)
 * );
 *
 * // no weaving
 * log('test').run(console); //=> prints 'test'
 *
 * // weaving
 * const wlog = RA.weave(log, console);
 * wlog('test'); //=> prints 'test'
 */
var weave = (0, _ramda.curryN)(2, function (fn, config) {
  return (0, _ramda.curryN)(fn.length, function () {
    return fn.apply(void 0, arguments).run(config);
  });
});
var _default = weave;
exports["default"] = _default;

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Weaves a configuration into function returning the runnable monad like `Reader` or `Free`.
 * This allows us to pre-bind the configuration in advance and use the weaved function
 * without need to explicitly pass the configuration on every call.
 *
 * @func weaveLazy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.10.0|v1.10.0}
 * @category Function
 * @sig (*... -> *) -> (* -> *) -> (*... -> *)
 * @param {Function} fn The function to weave
 * @param {Function} configAccessor The function that returns the configuration object
 * @return {Function} Auto-curried weaved function
 * @example
 *
 * const { Reader: reader } = require('monet');
 *
 * const log = value => reader(
 *   config => config.log(value)
 * );
 *
 * const consoleAccessor = R.always(console);
 *
 * // no weaving
 * log('test').run(console); //=> prints 'test'
 *
 * // weaving
 * const wlog = RA.weaveLazy(log, consoleAccessor);
 * wlog('test'); //=> prints 'test'
 */
var weaveLazy = (0, _ramda.curryN)(2, function (fn, configAccessor) {
  return (0, _ramda.curryN)(fn.length, function () {
    return fn.apply(void 0, arguments).run(configAccessor());
  });
});
var _default = weaveLazy;
exports["default"] = _default;

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _curryRightN = _interopRequireDefault(__webpack_require__(356));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a curried equivalent of the provided function.
 * This function is like curry, except that the provided arguments order is reversed.
 *
 * @func curryRight
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.12.0|v1.12.0}
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry
 * @return {Function}  A new, curried function
 * @see {@link http://ramdajs.com/docs/#curry|R.curry}, {@link RA.curryRightN|curryRightN}
 * @example
 *
 * const concatStrings = (a, b, c) => a + b + c;
 * const concatStringsCurried = RA.curryRight(concatStrings);
 *
 * concatStringCurried('a')('b')('c'); // => 'cba'
 */
var curryRight = (0, _ramda.converge)(_curryRightN["default"], [_ramda.length, _ramda.identity]);
var _default = curryRight;
exports["default"] = _default;

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _allP = _interopRequireDefault(__webpack_require__(59));

var _rejectP = _interopRequireDefault(__webpack_require__(84));

var _resolveP = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a Promise that is resolved with an array of reasons when all of the provided Promises reject, or rejected when any Promise is resolved.
 * This pattern is like allP, but fulfillments and rejections are transposed - rejections become the fulfillment values and vice versa.
 *
 * @func noneP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Function
 * @sig [Promise a] -> Promise [a]
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} A Promise that is resolved with a list of rejection reasons if all Promises are rejected, or a Promise that is rejected with the fulfillment value of the first Promise that resolves.
 * @see {@link RA.allP|allP}
 * @example
 *
 * RA.noneP([Promise.reject('hello'), Promise.reject('world')]); //=> Promise(['hello', 'world'])
 * RA.noneP([]); //=> Promise([])
 * RA.noneP([Promise.reject(), Promise.resolve('hello world')]); //=> Promise('hello world')
 * RA.noneP([Promise.reject(), 'hello world']); //=> Promise('hello world')
 */
var noneP = (0, _ramda.curryN)(1, (0, _ramda.pipe)((0, _ramda.map)(_resolveP["default"]), (0, _ramda.map)(function (p) {
  return p.then(_rejectP["default"], _resolveP["default"]);
}), _allP["default"]));
var _default = noneP;
exports["default"] = _default;

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNonNegative = _interopRequireDefault(__webpack_require__(346));

var _isInteger = _interopRequireDefault(__webpack_require__(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a promise which resolves/rejects after the specified milliseconds.
 *
 * @func delayP
 * @memberOf RA
 * @category Function
 * @sig Number -> Promise Undefined
 * @sig {timeout: Number, value: a} -> Promise a
 * @param {number|Object} milliseconds number of milliseconds or options object
 * @return {Promise} A Promise that is resolved/rejected with the given value (if provided) after the specified delay
 * @example
 *
 * RA.delayP(200); //=> Promise(undefined)
 * RA.delayP({ timeout: 1000, value: 'hello world' }); //=> Promise('hello world')
 * RA.delayP.reject(100); //=> Promise(undefined)
 * RA.delayP.reject({ timeout: 100, value: new Error('error') }); //=> Promise(Error('error'))
 */
var makeDelay = (0, _ramda.curry)(function (settleFnPicker, opts) {
  var timeout;
  var value;

  if ((0, _isInteger["default"])(opts) && (0, _isNonNegative["default"])(opts)) {
    timeout = opts;
  } else {
    timeout = (0, _ramda.propOr)(0, 'timeout', opts);
    value = (0, _ramda.propOr)(value, 'value', opts);
  }

  return new Promise(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var settleFn = settleFnPicker(args);
    setTimeout((0, _ramda.partial)(settleFn, [value]), timeout);
  });
});
var delayP = makeDelay((0, _ramda.nth)(0));
delayP.reject = makeDelay((0, _ramda.nth)(1));
var _default = delayP;
exports["default"] = _default;

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Composable shortcut for `Promise.then`.
 * The thenP function returns a Promise. It takes two arguments: a callback function for the success of the Promise
 * and the promise instance itself.
 *
 * @func thenP
 * @memberOf RA
 * @aliases then
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @deprecated since v2.12.0; available in ramda@0.26.0 as R.then
 * @category Function
 * @sig (a -> Promise b | b) -> Promise b
 * @param {Function} onFulfilled A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value
 * @param {Promise} promise Any Promise or Thenable object
 * @return {Promise} A Promise in the pending status

 * @see {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}, {@link RA.allP|allP}
 * @example
 *
 * const promise = Promise.resolve(1);
 * const add1 = v => v + 1;
 *
 * RA.thenP(add1, promise); // => Promise(2)
 */
var thenP = (0, _ramda.invoker)(1, 'then');
var _default = thenP;
exports["default"] = _default;

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.thenCatchP = void 0;

var _ramda = __webpack_require__(1);

/**
 * Composable shortcut for `Promise.then` that allows for success and failure callbacks.
 * The thenCatchP function returns a Promise. It takes three arguments: a callback function for the success of the Promise,
 * a callback function for the failure of the Promise, and the promise instance itself.
 *
 * @func thenCatchP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @category Function
 * @sig (a -> b) -> (c -> d) -> Promise a -> Promise b | d
 * @param {Function} onFulfilled A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value
 * @param {Function} onRejected A Function called if the Promise is rejected. This function has one argument, the error
 * @param {Promise} promise Any Promise or Thenable object
 * @return {Promise}
 * @see {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}, {@link RA.allP|allP}
 * @example
 *
 * const promise = Promise.resolve(1);
 * const add1 = x => x + 1;
 *
 * RA.thenCatchP(add1, console.error, promise); // => Promise(2)
 */
var thenCatchP = (0, _ramda.invoker)(2, 'then');
exports.thenCatchP = thenCatchP;
var _default = thenCatchP;
exports["default"] = _default;

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.allSettledPPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Promise = _interopRequireDefault(__webpack_require__(462));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allSettledPPonyfill = (0, _ramda.curryN)(1, _Promise["default"]);
/**
 * Returns a promise that is fulfilled with an array of promise state snapshots,
 * but only after all the original promises have settled, i.e. become either fulfilled or rejected.
 * We say that a promise is settled if it is not pending, i.e. if it is either fulfilled or rejected.
 *
 * @func allSettledP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.18.0|v2.18.0}
 * @category Function
 * @typedef Settlement = { status: String, value: * }
 * @sig [Promise a] -> Promise [Settlement a]
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} Returns a promise that is fulfilled with an array of promise state snapshots
 * @see {@link RA.allP|allP}
 * @example
 *
 * RA.allSettledP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise([{ status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }, { status: 'rejected', reason: 3 }])
 */

exports.allSettledPPonyfill = allSettledPPonyfill;
var allSettledP = (0, _isFunction["default"])(Promise.allSettled) ? (0, _ramda.curryN)(1, (0, _ramda.bind)(Promise.allSettled, Promise)) : allSettledPPonyfill;
var _default = allSettledP;
exports["default"] = _default;

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _allP = _interopRequireDefault(__webpack_require__(59));

var _resolveP = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var onFulfill = function onFulfill(value) {
  return {
    status: 'fulfilled',
    value: value
  };
};

var onReject = function onReject(reason) {
  return {
    status: 'rejected',
    reason: reason
  };
};

var allSettledPonyfill = function allSettledPonyfill(iterable) {
  var array = (0, _ramda.map)(function (p) {
    return (0, _resolveP["default"])(p).then(onFulfill)["catch"](onReject);
  }, _toConsumableArray(iterable));
  return (0, _allP["default"])(array);
};

var _default = allSettledPonyfill;
exports["default"] = _default;

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Y-combinator
 *
 * The Y combinator is an interesting function which only works with functional languages,
 * showing how recursion can still be done even without any variable or function declarations,
 * only functions and parameters
 *
 * @func Y
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Function
 * @sig (a, ... -> b -> b) -> (a, ... -> b)
 * @param {Function} le Recursive function maker
 * @return {Function}
 * @see {@link http://kestas.kuliukas.com/YCombinatorExplained/|Y combinator explained}
 * @example
 *
 * const makeFact = givenFact => (n) => {
 *   if (n < 2) { return 1 }
 *   return n * givenFact(n - 1);
 * };
 *
 * const factorial = RA.Y(makeFact);
 *
 * factorial(5); //=> 120
 */
var Y = (0, _ramda.curryN)(1, function (le) {
  return function (f) {
    return f(f);
  }(function (g) {
    return le(function (x) {
      return g(g)(x);
    });
  });
});
var _default = Y;
exports["default"] = _default;

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/* eslint-disable max-len */

/**
 * Runs the given list of functions in order with the supplied object, then returns the object.
 * Also known as the normal order sequencing combinator.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func seq
 * @aliases sequencing
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Function
 * @sig [(a -> *), (a -> *), ...] -> a -> a
 * @param {Array} fns The list of functions to call in order with `x` whose return values will be thrown away
 * @param {*} x
 * @return {*} `x`
 * @see {@link http://ramdajs.com/docs/#tap|R.tap}, {@link http://www.cs.rpi.edu/academics/courses/spring11/proglang/handouts/lambda-calculus-chapter.pdf|sequencing combinator explained}
 * @example
 *
 * RA.seq([console.info, console.log])('foo'); //=> prints 'foo' via info then log
 *
 * // usage in composition
 * R.pipe(
 *   R.concat('prefix '),
 *   RA.seq([
 *     console.info, //=> prints 'prefix test'
 *     console.log //=> prints 'prefix test'
 *   ]),
 *   R.toUpper
 * )('test'); //=> 'PREFIX TEST'
 */

/* eslint-enable max-len */
var seq = (0, _ramda.curry)(function (fns, x) {
  return (0, _ramda.tap)(function (tx) {
    return (0, _ramda.map)(function (fn) {
      return fn(tx);
    })(fns);
  })(x);
});
var _default = seq;
exports["default"] = _default;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNotNil = _interopRequireDefault(__webpack_require__(145));

var _isNonEmptyArray = _interopRequireDefault(__webpack_require__(337));

var _stubUndefined = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var byArity = (0, _ramda.comparator)(function (a, b) {
  return a.length > b.length;
});
var getMaxArity = (0, _ramda.pipe)((0, _ramda.sort)(byArity), _ramda.head, (0, _ramda.prop)('length'));
var iteratorFn = (0, _ramda.curry)(function (args, accumulator, fn) {
  var result = fn.apply(void 0, _toConsumableArray(args));
  return (0, _isNotNil["default"])(result) ? (0, _ramda.reduced)(result) : accumulator;
});

var dispatchImpl = function dispatchImpl(functions) {
  var arity = getMaxArity(functions);
  return (0, _ramda.curryN)(arity, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _ramda.reduce)(iteratorFn(args), undefined, functions);
  });
};

var dispatch = (0, _ramda.ifElse)(_isNonEmptyArray["default"], dispatchImpl, _stubUndefined["default"]);
var _default = dispatch;
exports["default"] = _default;

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _resolveP = _interopRequireDefault(__webpack_require__(39));

var _rejectP = _interopRequireDefault(__webpack_require__(84));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Takes a generator function and returns an async function.
 * The async function returned is a curried function whose arity matches that of the generator function.
 *
 * Note: This function is handy for environments that does support generators but doesn't support async/await.
 *
 * @func async
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.16.0|v2.16.0}
 * @category Function
 * @sig Promise c => (a, b, ...) -> a -> b -> ... -> c
 * @param {Function} generatorFn The generator function
 * @return {Function} Curried async function
 * @see {@link https://www.promisejs.org/generators/}
 * @example
 *
 * const asyncFn = RA.async(function* generator(val1, val2) {
 *   const a = yield Promise.resolve(val1);
 *   const b = yield Promise.resolve(val2);
 *
 *   return a + b;
 * });
 *
 * asyncFn(1, 2); //=> Promise(3)
 *
 */
var async = (0, _ramda.curryN)(1, function (generatorFn) {
  function asyncWrapper() {
    var iterator = (0, _ramda.bind)(generatorFn, this).apply(void 0, arguments);

    var handle = function handle(result) {
      var resolved = (0, _resolveP["default"])(result.value);
      return result.done ? resolved : resolved.then(function (value) {
        return handle(iterator.next(value));
      }, function (error) {
        return handle(iterator["throw"](error));
      });
    };

    try {
      return handle(iterator.next());
    } catch (error) {
      return (0, _rejectP["default"])(error);
    }
  }

  if (generatorFn.length > 0) {
    return (0, _ramda.curryN)(generatorFn.length, asyncWrapper);
  }

  return asyncWrapper;
});
var _default = async;
exports["default"] = _default;

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = exports.anyPPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Promise = _interopRequireWildcard(__webpack_require__(468));

exports.AggregatedError = _Promise.AggregatedError;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var anyPPonyfill = (0, _ramda.curryN)(1, _Promise["default"]);
exports.anyPPonyfill = anyPPonyfill;

/**
 * Returns a promise that is fulfilled by the first given promise to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 *
 * @func anyP
 * @memberOf RA
 * @category Function
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig [Promise a] -> Promise a
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} A promise that is fulfilled by the first given promise to be fulfilled, or rejected with an array of rejection reasons if all of the given promises are rejected
 * @see {@link RA.lastP|lastP}
 * @example
 *
 * RA.anyP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise(1)
 */
var anyP = (0, _isFunction["default"])(Promise.any) ? (0, _ramda.curryN)(1, (0, _ramda.bind)(Promise.any, Promise)) : anyPPonyfill;
var _default = anyP;
exports["default"] = _default;

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = exports.AggregatedError = void 0;

var _ramda = __webpack_require__(1);

var _resolveP = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AggregatedError = /*#__PURE__*/function (_Error) {
  _inherits(AggregatedError, _Error);

  var _super = _createSuper(AggregatedError);

  function AggregatedError() {
    var _this;

    var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var message = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, AggregatedError);

    _this = _super.call(this, message);
    _this.errors = errors;
    return _this;
  }

  return AggregatedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.AggregatedError = AggregatedError;

var anyPonyfill = function anyPonyfill(iterable) {
  var exceptions = [];
  return new Promise(function (resolve, reject) {
    var onReject = function onReject(e) {
      exceptions.push(e);

      if (exceptions.length === iterable.length) {
        reject(new AggregatedError(exceptions));
      }
    };

    (0, _ramda.map)(function (p) {
      return (0, _resolveP["default"])(p).then(resolve)["catch"](onReject);
    }, _toConsumableArray(iterable));
  });
};

var _default = anyPonyfill;
exports["default"] = _default;

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _allP = _interopRequireDefault(__webpack_require__(59));

var _lengthEq = _interopRequireDefault(__webpack_require__(85));

var _lengthGte = _interopRequireDefault(__webpack_require__(357));

var _rejectP = _interopRequireDefault(__webpack_require__(84));

var _resolveP = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Returns a promise that is fulfilled by the last given promise to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 *
 * @func lastP
 * @memberOf RA
 * @category Function
 * @since {@link https://char0n.github.io/ramda-adjunct/2.23.0|v2.23.0}
 * @sig [Promise a] -> Promise a
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} A promise that is fulfilled by the last given promise to be fulfilled, or rejected with an array of rejection reasons if all of the given promises are rejected.
 * @see {@link RA.anyP|anyP}
 * @example
 *
 * const delayP = timeout => new Promise(resolve => setTimeout(() => resolve(timeout), timeout));
 * delayP.reject = timeout => new Promise((resolve, reject) => setTimeout(() => reject(timeout), timeout));
 * RA.lastP([
 *   1,
 *   delayP(10),
 *   delayP(100),
 *   delayP.reject(1000),
 * ]); //=> Promise(100)
 */
var lastP = (0, _ramda.curryN)(1, function (iterable) {
  var fulfilled = [];
  var rejected = [];
  var onFulfill = (0, _ramda.bind)(fulfilled.push, fulfilled);
  var onReject = (0, _ramda.bind)(rejected.push, rejected);
  var listOfPromises = (0, _ramda.map)(function (p) {
    return (0, _resolveP["default"])(p).then(onFulfill)["catch"](onReject);
  }, _toConsumableArray(iterable));
  return (0, _allP["default"])(listOfPromises).then(function () {
    if ((0, _lengthEq["default"])(0, fulfilled) && (0, _lengthEq["default"])(0, rejected)) {
      return undefined;
    }

    if ((0, _lengthGte["default"])(1, fulfilled)) {
      return (0, _ramda.last)(fulfilled);
    }

    return (0, _rejectP["default"])(rejected);
  });
});
var _default = lastP;
exports["default"] = _default;

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _defaultWhen = _interopRequireDefault(__webpack_require__(358));

var _mapIndexed = _interopRequireDefault(__webpack_require__(359));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a function which is called with the given arguments. If any of the given arguments are null or undefined,
 * the corresponding default value for that argument is used instead.
 *
 * @func fnull
 * @memberOf RA
 * @category Function
 * @sig (a ... -> b) -> [c] -> a ... | c -> b
 * @param {Function} function to be executed
 * @param {Array} defaults default arguments
 * @return {Function} will apply provided arguments or default ones
 * @example
 *
 * const addDefaults = RA.fnull((a, b) => a + b, [4, 5])
 *
 * addDefaults(1, 2); // => 3
 * addDefaults(null, 2); // => 6
 * addDefaults(2, null); // => 7
 * addDefaults(undefined, undefined); // => 9
 */
var fnull = (0, _ramda.curry)(function (fn, defaults) {
  return (0, _ramda.curryN)(fn.length, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsWithDefaults = (0, _mapIndexed["default"])(function (val, idx) {
      return (0, _defaultWhen["default"])(_ramda.isNil, defaults[idx], val);
    }, args);
    return (0, _ramda.apply)(fn, argsWithDefaults);
  });
});
var _default = fnull;
exports["default"] = _default;

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * {@link http://ramdajs.com/docs/#reduce|R.reduce} function that more closely resembles Array.prototype.reduce.
 * It takes two new parameters to its callback function: the current index, and the entire list.
 *
 * `reduceIndexed` implementation is simple : `
 * const reduceIndexed = R.addIndex(R.reduce);
 * `
 * @func reduceIndexed
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category List
 * @typedef Idx = Number
 * @sig ((a, b, Idx, [b]) => a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives four values,
 * the accumulator, the current element from the array, index and the entire list
 * @param {*} acc The accumulator value
 * @param {Array} list The list to iterate over
 * @return {*} The final, accumulated value
 * @see {@link http://ramdajs.com/docs/#addIndex|R.addIndex}, {@link http://ramdajs.com/docs/#reduce|R.reduce}
 * @example
 *
 * const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];
 *
 * reduceIndexed((acc, val, idx, list) => acc + '-' + val + idx, '', initialList);
 * //=> "-f0-o1-o2-b3-a4-r5"
 */
var reduceIndexed = (0, _ramda.addIndex)(_ramda.reduce);
var _default = reduceIndexed;
exports["default"] = _default;

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

// helpers
var filterIndexed = (0, _ramda.addIndex)(_ramda.filter);
var containsIndex = (0, _ramda.curry)(function (indexes, val, index) {
  return (0, _ramda.contains)(index, indexes);
});
/**
 * Picks values from list by indexes.
 *
 * Note: pickIndexes will skip non existing indexes. If you want to include them
 * use ramda's `props` function.
 *
 * @func pickIndexes
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.1.0|v1.1.0}
 * @category List
 * @sig  [Number] -> [a] -> [a]
 * @param {Array} indexes The indexes to pick
 * @param {Array} list The list to pick values from
 * @return {Array} New array containing only values at `indexes`
 * @see {@link http://ramdajs.com/docs/#pick|R.pick}, {@link RA.omitIndexes|omitIndexes}
 * @example
 *
 * RA.pickIndexes([0, 2], ['a', 'b', 'c']); //=> ['a', 'c']
 */

var pickIndexes = (0, _ramda.curry)(function (indexes, list) {
  return filterIndexed(containsIndex(indexes), list);
});
var _default = pickIndexes;
exports["default"] = _default;

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNotArray = _interopRequireDefault(__webpack_require__(336));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a singleton array containing the value provided.
 * If value is already an array, it is returned as is.
 *
 * @func ensureArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category List
 * @sig a | [a] -> [a]
 * @param {*|Array} val the value ensure as Array
 * @return {Array}
 * @see {@link http://ramdajs.com/docs/#of|R.of}
 * @example
 *
 * RA.ensureArray(42); //=> [42]
 * RA.ensureArray([42]); //=> [42]
 */
var ensureArray = (0, _ramda.when)(_isNotArray["default"], _ramda.of);
var _default = ensureArray;
exports["default"] = _default;

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _stubUndefined = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var leftIdentitySemigroup = {
  concat: _ramda.identity
};
/**
 * Returns the result of concatenating the given lists or strings.
 * Note: RA.concatAll expects all elements to be of the same type. It will throw an error if you concat an Array with a non-Array value.
 * Dispatches to the concat method of the preceding element, if present. Can also concatenate multiple elements of a [fantasy-land compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 * Returns undefined if empty array was passed.
 *
 * @func concatAll
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category List
 * @sig [[a]] -> [a] | Undefined
 * @sig [String] -> String | Undefined
 * @sig Semigroup s => Foldable s f => f -> s | Undefined
 * @param {Array.<Array|string>} list List containing elements that will be concatenated
 * @return {Array|string|undefined} Concatenated elements
 * @see {@link http://ramdajs.com/docs/#concat|R.concat}, {@link RA.concatRight|concatRight}, {@link http://ramdajs.com/docs/#unnest|R.unnest}, {@link http://ramdajs.com/docs/#join|R.join}
 * @example
 *
 * concatAll([[1], [2], [3]]); //=> [1, 2, 3]
 * concatAll(['1', '2', '3']); //=> '123'
 * concatAll([]); //=> undefined;
 */

var concatAll = (0, _ramda.pipe)((0, _ramda.reduce)(_ramda.concat, leftIdentitySemigroup), (0, _ramda.when)((0, _ramda.identical)(leftIdentitySemigroup), _stubUndefined["default"]));
var _default = concatAll;
exports["default"] = _default;

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: R.concat expects both arguments to be of the same type, unlike
 * the native Array.prototype.concat method.
 * It will throw an error if you concat an Array with a non-Array value.
 * Dispatches to the concat method of the second argument, if present.
 *
 * @func concatRight
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.11.0|v1.11.0}
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `secondList`
 * followed by the elements of `firstList`.
 * @see {@link http://ramdajs.com/docs/#concat|R.concat}
 * @example
 *
 * RA.concatRight('ABC', 'DEF'); //=> 'DEFABC'
 * RA.concatRight([4, 5, 6], [1, 2, 3]); //=> [1, 2, 3, 4, 5, 6]
 * RA.concatRight([], []); //=> []
 */
var concatRight = (0, _ramda.flip)(_ramda.concat);
var _default = concatRight;
exports["default"] = _default;

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isUndefined = _interopRequireDefault(__webpack_require__(81));

var _resolveP = _interopRequireDefault(__webpack_require__(39));

var _allP = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable max-len */

/**
 * Given an `Iterable`(arrays are `Iterable`), or a promise of an `Iterable`,
 * which produces promises (or a mix of promises and values),
 * iterate over all the values in the `Iterable` into an array and
 * reduce the array to a value using the given iterator function.
 *
 * If the iterator function returns a promise, then the result of the promise is awaited,
 * before continuing with next iteration. If any promise in the array is rejected or a promise
 * returned by the iterator function is rejected, the result is rejected as well.
 *
 * If `initialValue` is `undefined` (or a promise that resolves to `undefined`) and
 * the `Iterable` contains only 1 item, the callback will not be called and
 * the `Iterable's` single item is returned. If the `Iterable` is empty, the callback
 * will not be called and `initialValue` is returned (which may be undefined).
 *
 * This function is basically equivalent to {@link http://bluebirdjs.com/docs/api/promise.reduce.html|bluebird.reduce}.
 *
 * @func reduceP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|v1.13.0}
 * @category List
 * @typedef MaybePromise = Promise.<*> | *
 * @sig ((Promise a, MaybePromise b) -> Promise a) -> MaybePromise a -> MaybePromise [MaybePromise b] -> Promise a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the current element from the list
 * @param {*|Promise.<*>} acc The accumulator value
 * @param {Array.<*>|Promise.<Array<*|Promise.<*>>>} list The list to iterate over
 * @return {Promise} The final, accumulated value
 * @see {@link http://ramdajs.com/docs/#reduce|R.reduce}, {@link RA.reduceRightP|reduceRightP}, {@link http://bluebirdjs.com/docs/api/promise.reduce.html|bluebird.reduce}
 * @example
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   Promise.resolve(0),
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   [Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   Promise.resolve([Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt'])
 * ); // => Promise(10)
 *
 */

/* esline-enable max-len */
var reduceP = (0, _ramda.curryN)(3, function (fn, acc, list) {
  return (0, _resolveP["default"])(list).then(function (iterable) {
    var listLength = (0, _ramda.length)(iterable);

    if (listLength === 0) {
      return acc;
    }

    var reducer = (0, _ramda.reduce)(function (accP, currentValueP) {
      return accP.then(function (previousValue) {
        return (0, _allP["default"])([previousValue, currentValueP]);
      }).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            previousValue = _ref2[0],
            currentValue = _ref2[1];

        if ((0, _isUndefined["default"])(previousValue) && listLength === 1) {
          return currentValue;
        }

        return fn(previousValue, currentValue);
      });
    });
    return reducer((0, _resolveP["default"])(acc), iterable);
  });
});
var _default = reduceP;
exports["default"] = _default;

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isUndefined = _interopRequireDefault(__webpack_require__(81));

var _resolveP = _interopRequireDefault(__webpack_require__(39));

var _allP = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// in older ramda versions the order of the arguments is flipped
var flipArgs = (0, _ramda.pipe)((0, _ramda.reduceRight)(_ramda.concat, ''), (0, _ramda.equals)('ba'))(['a', 'b']);
/* eslint-disable max-len */

/**
 * Given an `Iterable`(arrays are `Iterable`), or a promise of an `Iterable`,
 * which produces promises (or a mix of promises and values),
 * iterate over all the values in the `Iterable` into an array and
 * reduce the array to a value using the given iterator function.
 *
 * Similar to {@link RA.reduceP|reduceP} except moves through the input list from the right to the left.
 * The iterator function receives two values: (value, acc),
 * while the arguments' order of reduceP's iterator function is (acc, value).
 *
 * @func reduceRightP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|v1.13.0}
 * @category List
 * @typedef MaybePromise = Promise.<*> | *
 * @sig ((MaybePromise b, Promise a) -> Promise a) -> MaybePromise a -> MaybePromise [MaybePromise b] -> Promise a
 * @param {Function} fn The iterator function. Receives two values, the current element from the list and the accumulator
 * @param {*|Promise.<*>} acc The accumulator value
 * @param {Array.<*>|Promise.<Array<*|Promise.<*>>>} list The list to iterate over
 * @return {Promise} The final, accumulated value
 * @see {@link RA.reduceP|reduceP}, {@link http://bluebirdjs.com/docs/api/promise.reduce.html|bluebird.reduce}
 * @example
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   Promise.resolve(0),
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   [Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   Promise.resolve([Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt'])
 * ); // => Promise(10)
 *
 */

/* esline-enable max-len */

var reduceRightP = (0, _ramda.curryN)(3, function (fn, acc, list) {
  return (0, _resolveP["default"])(list).then(function (iterable) {
    var listLength = (0, _ramda.length)(iterable);

    if (listLength === 0) {
      return acc;
    }

    var reducer = (0, _ramda.reduceRight)(function (arg1, arg2) {
      var accP;
      var currentValueP;

      if (flipArgs) {
        accP = arg1;
        currentValueP = arg2;
      } else {
        accP = arg2;
        currentValueP = arg1;
      }

      return accP.then(function (previousValue) {
        return (0, _allP["default"])([previousValue, currentValueP]);
      }).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            previousValue = _ref2[0],
            currentValue = _ref2[1];

        if ((0, _isUndefined["default"])(previousValue) && listLength === 1) {
          return currentValue;
        }

        return fn(currentValue, previousValue);
      });
    });
    return reducer((0, _resolveP["default"])(acc), iterable);
  });
});
var _default = reduceRightP;
exports["default"] = _default;

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns the elements of the given list or string (or object with a slice method)
 * from fromIndex (inclusive).
 * Dispatches to the slice method of the second argument, if present.
 *
 * @func sliceFrom
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.16.0|v1.16.0}
 * @category List
 * @sig  Number -> [a] -> [a]
 * @param {number} fromIndex The start index (inclusive)
 * @param {Array|string} list The list or string to slice
 * @return {Array|string} The sliced list or string
 * @see {@link http://ramdajs.com/docs/#slice|R.slice}, {@link RA.sliceTo|sliceTo}
 * @example
 *
 * RA.sliceFrom(1, [1, 2, 3]); //=> [2, 3]
 */
var sliceFrom = (0, _ramda.slice)(_ramda.__, Infinity);
var _default = sliceFrom;
exports["default"] = _default;

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns the elements of the given list or string (or object with a slice method)
 * to toIndex (exclusive).
 * Dispatches to the slice method of the second argument, if present.
 *
 * @func sliceTo
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.16.0|v1.16.0}
 * @category List
 * @sig  Number -> [a] -> [a]
 * @param {number} toIndex The end index (exclusive)
 * @param {Array|string} list The list or string to slice
 * @return {Array|string} The sliced list or string
 * @see {@link http://ramdajs.com/docs/#slice|R.slice}, {@link RA.sliceFrom|sliceFrom}
 * @example
 *
 * RA.sliceTo(2, [1, 2, 3]); //=> [1, 2]
 */
var sliceTo = (0, _ramda.slice)(0);
var _default = sliceTo;
exports["default"] = _default;

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

// helpers
var rejectIndexed = (0, _ramda.addIndex)(_ramda.reject);
var containsIndex = (0, _ramda.curry)(function (indexes, val, index) {
  return (0, _ramda.contains)(index, indexes);
});
/**
 * Returns a partial copy of an array omitting the indexes specified.
 *
 * @func omitIndexes
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category List
 * @sig [Int] -> [a] -> [a]
 * @see {@link http://ramdajs.com/docs/#omit|R.omit}, {@link RA.pickIndexes|pickIndexes}
 * @param {!Array} indexes The array of indexes to omit from the new array
 * @param {!Array} list The array to copy from
 * @return {!Array} The new array with omitted indexes
 * @example
 *
 * RA.omitIndexes([-1, 1, 3], ['a', 'b', 'c', 'd']); //=> ['a', 'c']
 */

var omitIndexes = (0, _ramda.curry)(function (indexes, list) {
  return rejectIndexed(containsIndex(indexes), list);
});
var _default = omitIndexes;
exports["default"] = _default;

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isFalsy = _interopRequireDefault(__webpack_require__(353));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates an array with all falsy values removed.
 * The values false, null, 0, "", undefined, and NaN are falsy.
 *
 * @func compact
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category List
 * @sig Filterable f => f a -> f a
 * @param {Array} list The array to compact
 * @return {Array} Returns the new array of filtered values
 * @see {@link RA.isFalsy|isFalsy}
 * @example
 *
 * RA.compact([0, 1, false, 2, '', 3]); //=> [1, 2, 3]
 */
var compact = (0, _ramda.reject)(_isFalsy["default"]);
var _default = compact;
exports["default"] = _default;

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns a new list containing the contents of the given list, followed by the given element.
 * Like {@link http://ramdajs.com/docs/#append|R.append} but with argument order reversed.
 *
 * @func appendFlipped
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category List
 * @sig [a] -> a -> [a]
 * @param {Array} list The list of elements to add a new item to
 * @param {*} el The element to add to the end of the new list
 * @return {Array} A new list containing the elements of the old list followed by `el`
 * @see {@link http://ramdajs.com/docs/#append|R.append}
 * @example
 *
 * RA.appendFlipped(['write', 'more'], 'tests'); //=> ['write', 'more', 'tests']
 * RA.appendFlipped([], 'tests'); //=> ['tests']
 * RA.appendFlipped(['write', 'more'], ['tests']); //=> ['write', 'more', ['tests']]
 */
var appendFlipped = (0, _ramda.flip)(_ramda.append);
var _default = appendFlipped;
exports["default"] = _default;

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns a new list with the item at the position `fromIdx` moved to the position `toIdx`. If the
 * `toIdx` is out of the `list` range, the item will be placed at the last position of the `list`.
 * When negative indices are provided, the behavior of the move is unspecified.
 *
 * @func move
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {number} fromIdx The position of item to be moved
 * @param {number} toIdx The position of item after move
 * @param {Array} list The list containing the item to be moved
 * @return {Array}
 * @example
 *
 * const list = ['a', 'b', 'c', 'd', 'e'];
 * RA.move(1, 3, list) //=> ['a', 'c', 'd', 'b', 'e']
 */
var move = (0, _ramda.curry)(function (fromIdx, toIdx, list) {
  return (0, _ramda.compose)((0, _ramda.insert)(toIdx, (0, _ramda.nth)(fromIdx, list)), (0, _ramda.remove)(fromIdx, 1))(list);
});
var _default = move;
exports["default"] = _default;

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _compareLength = _interopRequireDefault(__webpack_require__(60));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if the supplied list or string has a length greater than `valueLength`.
 *
 * @func lengthGt
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthLte|lengthLte}, {@link RA.lengthGte|lengthGte}, {@link http://ramdajs.com/docs/#gt|gt},  {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthGt(3, [1,2,3,4]); //=> true
 * RA.lengthGt(3, [1,2,3]); //=> false
 */
var lengthGt = (0, _compareLength["default"])((0, _ramda.flip)(_ramda.gt));
var _default = lengthGt;
exports["default"] = _default;

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _compareLength = _interopRequireDefault(__webpack_require__(60));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if the supplied list or string has a length less than `valueLength`.
 *
 * @func lengthLt
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthNotEq|lengthNotEq}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthLte|lengthLte}, {@link RA.lengthGte|lengthGte}, {@link http://ramdajs.com/docs/#lt|lt}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthLt(3, [1,2]); //=> true
 * RA.lengthLt(3, [1,2,3]); //=> false
 */
var lengthLt = (0, _compareLength["default"])((0, _ramda.flip)(_ramda.lt));
var _default = lengthLt;
exports["default"] = _default;

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _compareLength = _interopRequireDefault(__webpack_require__(60));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if the supplied list or string has a length not equal to `valueLength`.
 *
 * @func lengthNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {number} valueLength The length of the list or string
 * @param {Array|string} value The list or string
 * @return {boolean}
 * @see {@link RA.lengthEq|lengthEq}, {@link RA.lengthLt|lengthLt}, {@link RA.lengthGt|lengthGt}, {@link RA.lengthLte|lengthLte}, {@link RA.lengthGte|lengthGte}, {@link http://ramdajs.com/docs/#equals|equals}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthNotEq(3, [1,2,3,4]); //=> true
 * RA.lengthNotEq(3, [1,2,3]); //=> false
 */
var lengthNotEq = (0, _compareLength["default"])((0, _ramda.complement)(_ramda.equals));
var _default = lengthNotEq;
exports["default"] = _default;

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _lengthLte = _interopRequireDefault(__webpack_require__(159));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Original idea for this function was conceived by https://github.com/jackmellis
// in https://github.com/char0n/ramda-adjunct/pull/513.

/**
 * Returns true if all items in the list are equivalent using `R.equals` for equality comparisons.
 *
 * @func allEqual
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.9.0|v2.9.0}
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.allEqual([ 1, 2, 3, 4 ]); //=> false
 * RA.allEqual([ 1, 1, 1, 1 ]); //=> true
 * RA.allEqual([]); //=> true
 *
 */
var allEqual = (0, _ramda.curryN)(1, (0, _ramda.pipe)(_ramda.uniq, (0, _lengthLte["default"])(1)));
var _default = allEqual;
exports["default"] = _default;

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.repeatStrInvoker = exports.repeatStrPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _String = _interopRequireDefault(__webpack_require__(160));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var repeatStrPonyfill = (0, _ramda.curry)(_String["default"]);
exports.repeatStrPonyfill = repeatStrPonyfill;
var repeatStrInvoker = (0, _ramda.flip)((0, _ramda.invoker)(1, 'repeat'));
/**
 * Constructs and returns a new string which contains the specified
 * number of copies of the string on which it was called, concatenated together.
 *
 * @func repeatStr
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig String -> Number -> String
 * @param {string} value String value to be repeated
 * @param {number} count An integer between 0 and +∞: [0, +∞), indicating the number of times to repeat the string in the newly-created string that is to be returned
 * @return {string} A new string containing the specified number of copies of the given string
 * @example
 *
 * RA.repeatStr('a', 3); //=> 'aaa'
 */

exports.repeatStrInvoker = repeatStrInvoker;
var repeatStr = (0, _isFunction["default"])(String.prototype.repeat) ? repeatStrInvoker : repeatStrPonyfill;
var _default = repeatStr;
exports["default"] = _default;

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _lengthLte = _interopRequireDefault(__webpack_require__(159));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns true if all items in the list are equivalent using `R.identical` for equality comparisons.
 *
 * @func allIdentical
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link https://ramdajs.com/docs/#identical|identical}
 * @example
 *
 * RA.allIdentical([ 1, 2, 3, 4 ]); //=> false
 * RA.allIdentical([ 1, 1, 1, 1 ]); //=> true
 * RA.allIdentical([]); //=> true
 * RA.allIdentical([ {}, {} ]); //=> false
 * RA.allIdentical([ () => {}, () => {} ]); //=> false
 */
var allIdentical = (0, _ramda.curryN)(1, (0, _ramda.pipe)((0, _ramda.uniqWith)(_ramda.identical), (0, _lengthLte["default"])(1)));
var _default = allIdentical;
exports["default"] = _default;

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns true if all items in the list are equivalent to user provided value using `R.identical` for equality comparisons.
 *
 * @func allIdenticalTo
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig a -> [b] -> Boolean
 * @param {*} val User provided value to check the `list` against
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.allIdentical|allIdentical}, {@link http://ramdajs.com/docs/#identical|R.identical}
 * @example
 *
 * RA.allIdenticalTo(1, [ 1, 2, 3, 4 ]); //=> false
 * RA.allIdenticalTo(1, [ 1, 1, 1, 1 ]); //=> true
 * RA.allIdenticalTo(1, []); //=> true
 * RA.allIdenticalTo({}, [ {}, {} ]); //=> false
 *
 */
var allIdenticalTo = (0, _ramda.curry)(function (val, list) {
  return (0, _ramda.all)((0, _ramda.identical)(val), list);
});
var _default = allIdenticalTo;
exports["default"] = _default;

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns true if all items in the list are equivalent to user provided value using `R.equals` for equality comparisons.
 *
 * @func allEqualTo
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig a -> [b] -> Boolean
 * @param {*} val User provided value to check the `list` against
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.allEqual|allEqual}, {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.allEqualTo(1, [ 1, 2, 3, 4 ]); //=> false
 * RA.allEqualTo(1, [ 1, 1, 1, 1 ]); //=> true
 * RA.allEqualTo({}, [ {}, {} ]); //=> true
 * RA.allEqualTo(1, []); //=> true
 *
 */
var allEqualTo = (0, _ramda.curry)(function (val, list) {
  return (0, _ramda.all)((0, _ramda.equals)(val), list);
});
var _default = allEqualTo;
exports["default"] = _default;

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _makeFlat2 = _interopRequireDefault(__webpack_require__(493));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var flatten1 = (0, _makeFlat2["default"])(false);
/**
 * Flattens the list to the specified depth.
 *
 * @func flattenDepth
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.19.0|v2.19.0}
 * @category List
 * @sig Number -> [a] -> [b]
 * @param {!number} depth The maximum recursion depth
 * @param {!Array} list The array to flatten
 * @return {!Array} Returns the new flattened array
 * @see {@link http://ramdajs.com/docs/#flatten|R.flatten}, {@link http://ramdajs.com/docs/#unnest|R.unnest}
 * @example
 *
 * RA.flattenDepth(
 *   2,
 *   [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]
 * ); //=> [1, 2, 3, 4, 5, 6, [[7], 8], 9, 10];
 */

var flattenDepth = (0, _ramda.curry)(function (depth, list) {
  var currentDept = depth;

  var flatList = _toConsumableArray(list);

  while (currentDept > 0) {
    flatList = flatten1(flatList);
    currentDept -= 1;
  }

  return flatList;
});
var _default = flattenDepth;
exports["default"] = _default;

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _isArrayLike = _interopRequireDefault(__webpack_require__(149));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * `makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @func makeFlat
 * @memberOf RA
 *
 * @category List
 * @param {!bool} = should recursively flatten
 * @param {!Array} = the nested list to be flattened
 * @return {!Array} = the flattened list
 * @sig Bool -> List -> List
 *
 */
var makeFlat = function makeFlat(recursive) {
  return function flatt(list) {
    var value;
    var jlen;
    var j;
    var result = [];
    var idx = 0;

    while (idx < list.length) {
      if ((0, _isArrayLike["default"])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;

        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }

      idx += 1;
    }

    return result;
  };
};

var _default = makeFlat;
exports["default"] = _default;

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.fromPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isIterable = _interopRequireDefault(__webpack_require__(148));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Array = _interopRequireDefault(__webpack_require__(495));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fromPonyfill = (0, _ramda.curryN)(1, _Array["default"]);
exports.fromPonyfill = fromPonyfill;
var fromArray = (0, _isFunction["default"])(Array.from) ? (0, _ramda.curryN)(1, Array.from) : fromPonyfill;
/**
 * Converts value to an array.
 *
 * @func toArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category List
 * @sig * -> [a]
 * @param {*} val The value to convert
 * @return {Array}
 * @example
 *
 * RA.toArray([1, 2]); //=> [1, 2]
 * RA.toArray({'foo': 1, 'bar': 2}); //=> [1, 2]
 * RA.toArray('abc'); //=> ['a', 'b', 'c']
 * RA.toArray(1); //=> []
 * RA.toArray(null); //=> []
 */

var toArray = (0, _ramda.ifElse)(_isIterable["default"], fromArray, _ramda.values);
var _default = toArray;
exports["default"] = _default;

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isIterable = _interopRequireDefault(__webpack_require__(148));

var _isNotUndefined = _interopRequireDefault(__webpack_require__(80));

var _isNotNil = _interopRequireDefault(__webpack_require__(145));

var _isNotFunction = _interopRequireDefault(__webpack_require__(150));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var copyArray = function copyArray(items, mapFn, thisArg) {
  var boundMapFn = (0, _isNotUndefined["default"])(thisArg) ? (0, _ramda.bind)(mapFn, thisArg) : mapFn;
  return (0, _isNotUndefined["default"])(mapFn) ? _toConsumableArray(items).map(boundMapFn) : _toConsumableArray(items);
};

var fromArray = function fromArray(items, mapFn, thisArg) {
  if (items == null) {
    throw new TypeError('Array.from requires an array-like object - not null or undefined');
  }

  if ((0, _isNotNil["default"])(mapFn) && (0, _isNotFunction["default"])(mapFn)) {
    throw new TypeError('Array.from: when provided, the second argument must be a function');
  }

  if ((0, _isIterable["default"])(items)) {
    return copyArray(items, mapFn, thisArg);
  }

  return [];
};

var _default = fromArray;
exports["default"] = _default;

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _allUnique = _interopRequireDefault(__webpack_require__(361));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns true if at least one item of the list is repeated. `R.equals` is used to determine equality.
 *
 * @func notAllUnique
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.allUnique|allUnique}, {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.notAllUnique([ 1, 1, 2, 3 ]); //=> true
 * RA.notAllUnique([ 1, 2, 3, 4 ]); //=> false
 * RA.notAllUnique([]); //=> false
 *
 */
var notAllUnique = (0, _ramda.complement)(_allUnique["default"]);
var _default = notAllUnique;
exports["default"] = _default;

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Sort a list of objects by a list of props (if first prop value is equivalent, sort by second, etc).
 *
 * @func sortByProps
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.26.0|v2.26.0}
 * @category List
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array.<string>} props A list of properties in the list param to sort by
 * @param {Array.<object>} list A list of objects to be sorted
 * @return {Array.<object>} A new list sorted by the properties in the props param
 * @example
 *
 * sortByProps(['num'], [{num: 3}, {num: 2}, {num: 1}])
 * //=> [{num: 1}, {num: 2} {num: 3}]
 * sortByProps(['letter', 'num'], [{num: 3, letter: 'a'}, {num: 2, letter: 'a'} {num: 1, letter: 'z'}])
 * //=> [ {num: 2, letter: 'a'}, {num: 3, letter: 'a'}, {num: 1, letter: 'z'}]
 * sortByProps(['name', 'num'], [{num: 3}, {num: 2}, {num: 1}])
 * //=> [{num: 1}, {num: 2}, {num: 3}]
 */
var sortByProps = (0, _ramda.curry)(function (props, list) {
  var firstTruthy = function firstTruthy(_ref) {
    var _ref2 = _toArray(_ref),
        head = _ref2[0],
        tail = _ref2.slice(1);

    return (0, _ramda.reduce)(_ramda.either, head, tail);
  };

  var makeComparator = function makeComparator(propName) {
    return (0, _ramda.comparator)(function (a, b) {
      return (0, _ramda.lt)((0, _ramda.prop)(propName, a), (0, _ramda.prop)(propName, b));
    });
  };

  return (0, _ramda.sort)(firstTruthy((0, _ramda.map)(makeComparator, props)), list);
});
var _default = sortByProps;
exports["default"] = _default;

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * When given a number n and an array, returns an array containing every nth element.
 *
 * @func skipTake
 * @memberOf RA
 * @category List
 * @since {@link https://char0n.github.io/ramda-adjunct/2.26.0|v2.26.0}
 * @sig Number -> [a] -> [a]
 * @param {number} the nth element to extract
 * @param {Array} value the input array
 * @return {Array} An array containing every nth element
 * @example
 *
 * RA.skipTake(2, [1,2,3,4]) //=> [1, 3]
 * RA.skipTake(3, R.range(0, 20)); //=> [0, 3, 6, 9, 12, 15, 18]
 */
var skipTake = (0, _ramda.curry)(function (n, list) {
  return (0, _ramda.addIndex)(_ramda.filter)((0, _ramda.pipe)((0, _ramda.nthArg)(1), (0, _ramda.modulo)(_ramda.__, n), (0, _ramda.identical)(0)))(list);
});
var _default = skipTake;
exports["default"] = _default;

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _floor = _interopRequireDefault(__webpack_require__(362));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
 *
 * `Note`: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.
 *
 * @func rangeStep
 * @memberOf RA
 * @category List
 * @since {@link https://char0n.github.io/ramda-adjunct/2.30.0|v2.30.0}
 * @sig Number -> Number -> Number -> [Number]
 * @param {number} step The value to increment or decrement by
 * @param {number} from The start of the range
 * @param {number} to The end of the range
 * @return {number[]} Returns the range of numbers
 * @see {@link http://ramdajs.com/docs/#range|R.range}
 * @example
 *
 * RA.rangeStep(1, 0, 4); // => [0, 1 ,2, 3]
 * RA.rangeStep(-1, 0, -4); // => [0, -1, -2, -3]
 * RA.rangeStep(1, 1, 5); // => [1, 2, 3, 4]
 * RA.rangeStep(5, 0, 20); // => [0, 5, 10, 15]
 * RA.rangeStep(-1, 0, -4); // => [0, -1, -2, -3]
 * RA.rangeStep(0, 1, 4); // => [1, 1, 1]
 * RA.rangeStep(1, 0, 0); // => []
 */
var rangeStep = (0, _ramda.curryN)(3, function (step, from, to) {
  var callback = step === 0 ? (0, _ramda.always)(from) : function (n) {
    return from + step * n;
  };
  var rangeEnd = step === 0 ? to - from : (0, _floor["default"])((to - from) / step);
  return (0, _ramda.map)(callback, (0, _ramda.range)(0, rangeEnd));
});
var _default = rangeStep;
exports["default"] = _default;

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNotFunction = _interopRequireDefault(__webpack_require__(150));

var _isEmptyArray = _interopRequireDefault(__webpack_require__(335));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Invokes the method at path of object with given arguments.
 *
 * @func invokeArgs
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @category Object
 * @sig Array -> Array -> Object -> *
 * @param {Array.<string|number>} path The path of the method to invoke
 * @param {Array} args The arguments to invoke the method with
 * @param {Object} obj The object to query
 * @return {*}
 * @example
 *
 * RA.invokeArgs(['abs'], [-1], Math); //=> 1
 * RA.invokeArgs(['path', 'to', 'non-existent', 'method'], [-1], Math); //=> undefined
 */
var invokeArgs = (0, _ramda.curryN)(3, function (mpath, args, obj) {
  var method = (0, _ramda.path)(mpath, obj);
  var context = (0, _ramda.path)((0, _ramda.init)(mpath), obj);
  if ((0, _isNotFunction["default"])(method)) return undefined;
  if ((0, _isEmptyArray["default"])(mpath)) return undefined;
  var boundMethod = (0, _ramda.bind)(method, context);
  return (0, _ramda.apply)(boundMethod, args);
});
var _default = invokeArgs;
exports["default"] = _default;

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _renameKeysWith = _interopRequireDefault(__webpack_require__(161));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var valueOrKey = function valueOrKey(keysMap) {
  return function (key) {
    if ((0, _ramda.has)(key, keysMap)) {
      return keysMap[key];
    }

    return key;
  };
};
/**
 * Creates a new object with the own properties of the provided object, but the
 * keys renamed according to the keysMap object as `{oldKey: newKey}`.
 * When some key is not found in the keysMap, then it's passed as-is.
 *
 * Keep in mind that in the case of keys conflict is behaviour undefined and
 * the result may vary between various JS engines!
 *
 * @func renameKeys
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.5.0|v1.5.0}
 * @category Object
 * @sig {a: b} -> {a: *} -> {b: *}
 * @param {!Object} keysMap
 * @param {!Object} obj
 * @return {!Object} New object with renamed keys
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#rename-keys-of-an-object|Ramda Cookbook}, {@link RA.renameKeysWith|renameKeysWith}
 * @example
 *
 * const input = { firstName: 'Elisia', age: 22, type: 'human' };
 *
 * RA.renameKeys({ firstName: 'name', type: 'kind', foo: 'bar' })(input);
 * //=> { name: 'Elisia', age: 22, kind: 'human' }
 */


var renameKeys = (0, _ramda.curry)(function (keysMap, obj) {
  return (0, _renameKeysWith["default"])(valueOrKey(keysMap), obj);
});
var _default = renameKeys;
exports["default"] = _default;

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _renameKeysWith = _interopRequireDefault(__webpack_require__(161));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a new object with the own properties of the provided object, but the
 * key `key` renamed according to logic of renaming function.
 *
 * Keep in mind that in case the new key name already existed on the object,
 * the behaviour is undefined and the result may vary between various JS engines!
 *
 * @func renameKeyWith
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @category Object
 * @sig (k -> k) -> k -> {k: v} -> {k: v}
 * @param {Function} fn Function that renames the keys
 * @param {!string} key Key to rename
 * @param {!Object} obj Provided object
 * @return {!Object} New object with renamed key
 * @see {@link RA.renameKeysWith|renameKeysWith}
 * @example
 *
 * RA.renameKeyWith(R.concat('a'), 'A', { A: 1 }) //=> { aA: 1 }
 */
var renameKeyWith = (0, _ramda.curry)(function (fn, key, obj) {
  return (0, _renameKeysWith["default"])((0, _ramda.when)((0, _ramda.equals)(key), fn), obj);
});
var _default = renameKeyWith;
exports["default"] = _default;

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Functional equivalent of merging object properties with object spread operator.
 *
 * @func mergeProps
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.17.0|v1.17.0}
 * @category Object
 * @sig [k] -> {k: {a}} -> {a}
 * @see {@link RA.mergePaths|mergePaths}
 * @param {!Array} ps The property names to merge
 * @param {!Object} obj The object to query
 * @return {!Object} The object composed of merged properties of obj
 * @example
 *
 * const obj = {
 *   foo: { fooInner: 1 },
 *   bar: { barInner: 2 }
 * };
 *
 * { ...obj.foo, ...obj.bar }; //=> { fooInner: 1, barInner: 2 }
 * RA.mergeProps(['foo', 'bar'], obj); //=> { fooInner: 1, barInner: 2 }
 */
var mergeProps = (0, _ramda.curryN)(2, (0, _ramda.pipe)(_ramda.props, _ramda.mergeAll));
var _default = mergeProps;
exports["default"] = _default;

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _paths = _interopRequireDefault(__webpack_require__(363));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Merge objects under corresponding paths.
 *
 * @func mergePaths
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.17.0|v1.17.0}
 * @category Object
 * @sig [[k]] -> {k: {a}} -> {a}
 * @see {@link RA.mergeProps|mergeProps}
 * @param {!Array} paths The property paths to merge
 * @param {!Object} obj The object to query
 * @return {!Object} The object composed of merged property paths of obj
 * @example
 *
 * const obj = {
 *   foo: { fooInner: { fooInner2: 1 } },
 *   bar: { barInner: 2 }
 * };
 *
 * { ...obj.foo.fooInner, ...obj.bar }; //=>  { fooInner2: 1, barInner: 2 }
 * RA.mergePaths([['foo', 'fooInner'], ['bar']], obj); //=> { fooInner2: 1, barInner: 2 }
 */
var mergePaths = (0, _ramda.curryN)(2, (0, _ramda.pipe)(_paths["default"], _ramda.mergeAll));
var _default = mergePaths;
exports["default"] = _default;

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _mergePath = _interopRequireDefault(__webpack_require__(365));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Create a new object with the own properties of the object under the `p`
 * merged with the own properties of the provided `source`.
 * If a key exists in both objects, the value from the `source` object will be used.
 *
 * @func mergeProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Object
 * @sig [k] -> {a} -> {k: {a}} -> {k: {a}}
 * @see {@link RA.mergePath|mergePath}
 * @param {!Array} p The property of the destination object
 * @param {!Object} source The source object
 * @param {!Object} obj The object that has destination object under corresponding property
 * @return {!Object} The new version of object
 * @example
 *
 * RA.mergeProp(
 *  'outer',
 *  { foo: 3, bar: 4 },
 *  { outer: { foo: 2 } }
 * ); //=> { outer: { foo: 3, bar: 4 } };
 */
var mergeProp = (0, _ramda.curry)(function (p, subj, obj) {
  return (0, _mergePath["default"])((0, _ramda.of)(p), subj, obj);
});
var _default = mergeProp;
exports["default"] = _default;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/* eslint-disable max-len */

/**
 * Returns a partial copy of an object containing only the keys
 * that don't satisfy the supplied predicate.
 *
 * @func omitBy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {!Function} pred A predicate to determine whether or not a key should be included on the output object
 * @param {!Object} obj The object to copy from
 * @return {!Object} A new object only with properties that don't satisfy `pred`
 *
 * @example
 *
 * const isLowerCase = (val, key) => key.toLowerCase() === key;
 * RA.omitBy(isLowerCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */

/* eslint-enable max-len */
var omitBy = (0, _ramda.useWith)(_ramda.pickBy, [_ramda.complement, _ramda.identity]);
var _default = omitBy;
exports["default"] = _default;

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * If the given, non-null object has a value at the given path, returns the value at that path.
 * Otherwise returns the result of invoking the provided function with the object.
 *
 * @func pathOrLazy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig ({a} -> a) -> [Idx] -> {a} -> a
 * @param {Function} defaultFn The function that will return the default value.
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 * RA.pathOrLazy(() => 'N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 * RA.pathOrLazy(() => 'N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOrLazy = (0, _ramda.curryN)(3, function pathOrLazy(defaultFn, path, obj) {
  return (0, _ramda.when)((0, _ramda.identical)(defaultFn), (0, _ramda.partial)((0, _ramda.unary)(defaultFn), [obj]), (0, _ramda.pathOr)(defaultFn, path, obj));
});
var _default = pathOrLazy;
exports["default"] = _default;

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 * Returns the defaultValue if "view" is null, undefined or NaN; otherwise the "view" is returned.
 *
 * @func viewOr
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Object
 * @typedef Lens s b = Functor f => (b -> f b) -> s -> f s
 * @sig a -> Lens s b -> s -> b | a
 * @see {@link http://ramdajs.com/docs/#view|R.view}
 * @param {*} defaultValue The default value
 * @param {Function} lens Van Laarhoven lens
 * @param {*} data The data structure
 * @returns {*} "view" or defaultValue
 *
 * @example
 *
 * RA.viewOr('N/A', R.lensProp('x'), {}); // => 'N/A'
 * RA.viewOr('N/A', R.lensProp('x'), { x: 1 }); // => 1
 * RA.viewOr('some', R.lensProp('y'), { y: null }); // => 'some'
 * RA.viewOr('some', R.lensProp('y'), { y: false }); // => false
 */
var viewOr = (0, _ramda.curryN)(3, function (defaultValue, lens, data) {
  return (0, _ramda.defaultTo)(defaultValue, (0, _ramda.view)(lens, data));
});
var _default = viewOr;
exports["default"] = _default;

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isObj = _interopRequireDefault(__webpack_require__(83));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns whether or not an object has an own property with the specified name at a given path.
 *
 * @func hasPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.14.0|v1.14.0}
 * @deprecated since v2.12.0; ramda@0.26.0 contains hasPath
 * @category Object
 * @typedef Idx = String | Int
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array.<string|number>} path The path of the nested property
 * @param {Object} obj The object to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#has|R.has}
 * @example
 *
 * RA.hasPath(['a', 'b'], { a: { b: 1 } }); //=> true
 * RA.hasPath(['a', 'b', 'c'], { a: { b: 1 } }); //=> false
 * RA.hasPath(['a', 'b'], { a: { } }); //=> false
 * RA.hasPath([0], [1, 2]); //=> true
 */
var hasPath = (0, _ramda.curryN)(2, function (objPath, obj) {
  var prop = (0, _ramda.head)(objPath); // termination conditions

  if ((0, _ramda.length)(objPath) === 0 || !(0, _isObj["default"])(obj)) {
    return false;
  }

  if ((0, _ramda.length)(objPath) === 1) {
    return (0, _ramda.has)(prop, obj);
  }

  return hasPath((0, _ramda.tail)(objPath), (0, _ramda.path)([prop], obj)); // base case
});
var _default = hasPath;
exports["default"] = _default;

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _spreadPath = _interopRequireDefault(__webpack_require__(366));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Spreads object under property onto provided object.
 * It's like {@link RA.flattenProp|flattenProp}, but removes object under the property.
 *
 * @func spreadProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig Idx -> {k: v} -> {k: v}
 * @param {!string|number} prop The property to spread
 * @param {!Object} obj The provided object
 * @return {!Object} The result of the spread
 * @see {@link RA.spreadPath|spreadPath}, {@link RA.flattenProp|flattenProp}
 * @example
 *
 * RA.spreadProp('b', { a: 1, b: { c: 3, d: 4 } }); // => { a: 1, c: 3, d: 4 };
 */
var spreadProp = (0, _ramda.curry)(function (prop, obj) {
  return (0, _spreadPath["default"])((0, _ramda.of)(prop), obj);
});
var _default = spreadProp;
exports["default"] = _default;

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _flattenPath = _interopRequireDefault(__webpack_require__(367));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Flattens a property so that its fields are spread out into the provided object.
 * It's like {@link RA.spreadProp|spreadProp}, but preserves object under the property path.
 *
 * @func flattenProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|v1.19.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {!string|number} prop The property to flatten
 * @param {!Object} obj The provided object
 * @return {!Object} The flattened object
 * @see {@link RA.flattenPath|flattenPath}, {@link RA.spreadProp|spreadProp}
 * @example
 *
 * RA.flattenProp(
 *   'b',
 *   { a: 1, b: { c: 3, d: 4 } }
 * ); // => { a: 1, c: 3, d: 4, b: { c: 3, d: 4 } };
 */
var flattenProp = (0, _ramda.curry)(function (prop, obj) {
  return (0, _flattenPath["default"])((0, _ramda.of)(prop), obj);
});
var _default = flattenProp;
exports["default"] = _default;

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _lengthEq = _interopRequireDefault(__webpack_require__(85));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a new list out of the supplied object by applying the function to each key/value pairing.
 *
 * @func unzipObjWith
 * @memberOf RA
 * @category Object
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig  (v, k) => [k, v] -> { k: v } -> [[k], [v]]
 * @param {Function} fn The function to transform each value-key pair
 * @param {Object} obj Object to unzip
 * @return {Array} A pair of tw lists: a list of keys and a list of values
 * @see {@link https://ramdajs.com/docs/#zipObj|zipObj}, {@link RA.zipObjWith|zipObjWith}
 * @example
 *
 * RA.unzipObjWith((v, k) => [`new${k.toUpperCase()}`, 2 * v], { a: 1, b: 2, c: 3 });
 * //=> [['newA', 'newB', 'newC'], [2, 4, 6]]
 */
var unzipObjWith = (0, _ramda.curryN)(2, function (fn, obj) {
  return (0, _ramda.pipe)(_ramda.toPairs, (0, _ramda.map)((0, _ramda.pipe)(_ramda.flip, _ramda.apply)(fn)), _ramda.transpose, (0, _ramda.when)((0, _lengthEq["default"])(0), function () {
    return [[], []];
  }))(obj);
});
var _default = unzipObjWith;
exports["default"] = _default;

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Creates a new object out of a list of keys and a list of values by applying the function
 * to each equally-positioned pair in the lists.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 *
 * @func zipObjWith
 * @memberOf RA
 * @category Object
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig (b, a) -> [k, v] -> [a] -> [b] -> { k: v }
 * @param {Function} fn The function to transform each value-key pair
 * @param {Array} keys Array to transform into the properties on the output object
 * @param {Array} values Array to transform into the values on the output object
 * @return {Object}  The object made by pairing up and transforming same-indexed elements of `keys` and `values`.
 * @see {@link https://ramdajs.com/docs/#zipObj|zipObj}, {@link RA.unzipObjWith|unzipObjWith}
 * @example
 *
 * RA.zipObjWith((value, key) => [key, `${key}${value + 1}`]), ['a', 'b', 'c'], [1, 2, 3]);
 *  // => { a: 'a2', b: 'b3', c: 'c4' }
 */
var zipObjWith = (0, _ramda.curryN)(3, function (fn, keys, values) {
  return (0, _ramda.pipe)(_ramda.zip, (0, _ramda.map)((0, _ramda.apply)(fn)), _ramda.fromPairs)(values, keys);
});
var _default = zipObjWith;
exports["default"] = _default;

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _lensEq = _interopRequireDefault(__webpack_require__(368));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if data structure focused by the given lens doesn't equal provided value.
 *
 * @func lensNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> b -> s -> Boolean
 * @see {@link RA.lensEq|lensEq}
 * @param {function} lens Van Laarhoven lens
 * @param {*} value The value to compare the focused data structure with
 * @param {*} data The data structure
 * @return {boolean} `false` if the focused data structure equals value, `true` otherwise
 *
 * @example
 *
 * RA.lensNotEq(R.lensIndex(0), 1, [0, 1, 2]); // => true
 * RA.lensNotEq(R.lensIndex(1), 1, [0, 1, 2]); // => false
 * RA.lensNotEq(R.lensPath(['a', 'b']), 'foo', { a: { b: 'foo' } }) // => false
 */
var lensNotEq = (0, _ramda.complement)(_lensEq["default"]);
var _default = lensNotEq;
exports["default"] = _default;

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _lensSatisfies = _interopRequireDefault(__webpack_require__(369));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns `true` if data structure focused by the given lens doesn't satisfy the predicate.
 * Note that the predicate is expected to return boolean value.
 *
 * @func lensNotSatisfy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig  Boolean b => (a -> b) -> Lens s a -> s -> b
 * @see {@link RA.lensSatisfies|lensSatisfies}
 * @param {Function} predicate The predicate function
 * @param {Function} lens Van Laarhoven lens
 * @param {*} data The data structure
 * @return {boolean} `false` if the focused data structure satisfies the predicate, `true` otherwise
 *
 * @example
 *
 * RA.lensNotSatisfy(RA.isTrue, R.lensIndex(0), [false, true, 1]); // => true
 * RA.lensNotSatisfy(RA.isTrue, R.lensIndex(1), [false, true, 1]); // => false
 * RA.lensNotSatisfy(RA.isTrue, R.lensIndex(2), [false, true, 1]); // => true
 * RA.lensNotSatisfy(R.identity, R.lensProp('x'), { x: 1 }); // => true
 */
var lensNotSatisfy = (0, _ramda.complement)(_lensSatisfies["default"]);
var _default = lensNotSatisfy;
exports["default"] = _default;

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _Identity = _interopRequireDefault(__webpack_require__(370));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a [Traversable](https://github.com/fantasyland/fantasy-land#traversable) lens
 * from an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning function.
 *
 * When executed, it maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](https://ramdajs.com/docs/#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func lensTraverse
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|2.7.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Applicative f => (a -> f a) -> Lens s a
 * @param {!function} of The Applicative-returning function
 * @return {!function} The Traversable lens
 * @see {@link http://ramdajs.com/docs/#lens|R.lens}, {@link http://ramdajs.com/docs/#traverse|R.traverse}
 *
 * @example
 *
 * const maybeLens = RA.lensTraverse(Maybe.of);
 * const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 *
 * R.over(maybeLens, safeDiv(10), [2, 4, 5]); // => Just([5, 2.5, 2])
 * R.over(maybeLens, safeDiv(10), [2, 0, 5]); // => Nothing
 *
 * R.view(maybeLens, [Maybe.Just(2), Maybe.Just(3)]); // => Maybe.Just([2, 3])
 *
 * R.set(maybeLens, Maybe.Just(1), [Maybe.just(2), Maybe.Just(3)]); // => Maybe.Just([1, 1])
 */
var lensTraverse = (0, _ramda.curryN)(1, function (of) {
  return (0, _ramda.curry)(function (toFunctorFn, target) {
    return _Identity["default"].of((0, _ramda.traverse)(of, (0, _ramda.pipe)(toFunctorFn, (0, _ramda.prop)('value')), target));
  });
});
var _default = lensTraverse;
exports["default"] = _default;

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ordTrait = exports.chainTrait = exports.semigroupTrait = exports.setoidTrait = exports.applyTrait = exports.functorTrait = void 0;

var _ramda = __webpack_require__(1);

var _isString = _interopRequireDefault(__webpack_require__(54));

var _isNumber = _interopRequireDefault(__webpack_require__(35));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _util = __webpack_require__(518);

var _mapping = _interopRequireDefault(__webpack_require__(157));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var functorTrait = _defineProperty({}, _mapping["default"].map, function (fn) {
  return this.constructor[_mapping["default"].of](fn(this.value));
});

exports.functorTrait = functorTrait;

var applyTrait = _defineProperty({}, _mapping["default"].ap, function (applyWithFn) {
  var _this = this;

  return applyWithFn.map(function (fn) {
    return fn(_this.value);
  });
});

exports.applyTrait = applyTrait;

var setoidTrait = _defineProperty({}, _mapping["default"].equals, function (setoid) {
  return (0, _util.isSameType)(this, setoid) && (0, _ramda.equals)(this.value, setoid.value);
});

exports.setoidTrait = setoidTrait;

var semigroupTrait = _defineProperty({}, _mapping["default"].concat, function (semigroup) {
  var concatenatedValue = this.value;

  if ((0, _isString["default"])(this.value) || (0, _isNumber["default"])(this.value)) {
    concatenatedValue = this.value + semigroup.value;
  } else if ((0, _ramda.pathSatisfies)(_isFunction["default"], ['value', _mapping["default"].concat], this)) {
    concatenatedValue = this.value[_mapping["default"].concat](semigroup.value);
  } else if ((0, _ramda.pathSatisfies)(_isFunction["default"], ['value', 'concat'], this)) {
    concatenatedValue = this.value.concat(semigroup.value);
  }

  return this.constructor[_mapping["default"].of](concatenatedValue);
});

exports.semigroupTrait = semigroupTrait;

var chainTrait = _defineProperty({}, _mapping["default"].chain, function (fn) {
  var newChain = fn(this.value);
  return (0, _util.isSameType)(this, newChain) ? newChain : this;
});

exports.chainTrait = chainTrait;

var ordTrait = _defineProperty({}, _mapping["default"].lte, function (ord) {
  return (0, _util.isSameType)(this, ord) && (this.value < ord.value || this[_mapping["default"].equals](ord));
});

exports.ordTrait = ordTrait;

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isNotSameType = exports.isSameType = exports.typeEquals = exports.type = void 0;

var _ramda = __webpack_require__(1);

// type :: Monad a => a -> String
var type = (0, _ramda.either)((0, _ramda.path)(['@@type']), (0, _ramda.path)(['constructor', '@@type'])); // typeEquals :: Monad a => String -> a -> Boolean

exports.type = type;
var typeEquals = (0, _ramda.curry)(function (typeIdent, monad) {
  return type(monad) === typeIdent;
}); // isSameType :: (Monad a, Monad b) => a -> b -> Boolean

exports.typeEquals = typeEquals;
var isSameType = (0, _ramda.curryN)(2, (0, _ramda.useWith)(_ramda.equals, [type, type])); // isNotSameType :: (Monad a, Monad b) => a -> b -> Boolean

exports.isSameType = isSameType;
var isNotSameType = (0, _ramda.complement)(isSameType);
exports.isNotSameType = isNotSameType;

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

// This implementation was highly inspired by the implementations
// in ramda-lens library.
//
// https://github.com/ramda/ramda-lens
// isomorphic :: ((a -> b), (b -> a)) -> Isomorphism
//     Isomorphism = x -> y
var isomorphic = function isomorphic(to, from) {
  var isomorphism = function isomorphism(x) {
    return to(x);
  };

  isomorphism.from = from;
  return isomorphism;
}; // isomorphisms :: ((a -> b), (b -> a)) -> (a -> b)


var isomorphisms = function isomorphisms(to, from) {
  return isomorphic((0, _ramda.curry)(function (toFunctorFn, target) {
    return (0, _ramda.map)(from, toFunctorFn(to(target)));
  }), (0, _ramda.curry)(function (toFunctorFn, target) {
    return (0, _ramda.map)(to, toFunctorFn(from(target)));
  }));
}; // from :: Isomorphism -> a -> b


var from = (0, _ramda.curry)(function (isomorphism, x) {
  return isomorphism.from(x);
});
/**
 * Defines an isomorphism that will work like a lens. It takes two functions.
 * The function that converts and the function that recovers.
 *
 * @func lensIso
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.19.0|1.19.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> (a -> s) -> Lens s a
 * @param {!function} to The function that converts
 * @param {!function} from The function that recovers
 * @return {!function} The isomorphic lens
 * @see {@link http://ramdajs.com/docs/#lens|R.lens}
 *
 * @example
 *
 * const lensJSON = RA.lensIso(JSON.parse, JSON.stringify);
 *
 * R.over(lensJSON, assoc('b', 2), '{"a":1}'); //=> '{"a":1,"b":2}'
 * R.over(RA.lensIso.from(lensJSON), R.replace('}', ',"b":2}'), { a: 1 }); // => { a: 1, b: 2 }
 */

var lensIso = (0, _ramda.curry)(isomorphisms);
lensIso.from = from;
var _default = lensIso;
exports["default"] = _default;

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns true if the specified object property is not equal,
 * in R.equals terms, to the given value; false otherwise.
 *
 * @func propNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Relation
 * @sig  String -> a -> Object -> Boolean
 * @param {String} name The property to pick
 * @param {a} val The value to compare to
 * @param {Object} object The object, that presumably contains value under the property
 * @return {boolean} Comparison result
 * @see {@link http://ramdajs.com/docs/#propEq|R.propEq}
 * @example
 *
 * const abby = { name: 'Abby', age: 7, hair: 'blond' };
 * const fred = { name: 'Fred', age: 12, hair: 'brown' };
 * const rusty = { name: 'Rusty', age: 10, hair: 'brown' };
 * const alois = { name: 'Alois', age: 15, disposition: 'surly' };
 * const kids = [abby, fred, rusty, alois];
 * const hasNotBrownHair = RA.propNotEq('hair', 'brown');
 *
 * R.filter(hasNotBrownHair, kids); //=> [abby, alois]
 */
var propNotEq = (0, _ramda.complement)(_ramda.propEq);
var _default = propNotEq;
exports["default"] = _default;

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/* eslint-disable max-len */

/**
 * Determines whether a nested path on an object doesn't have a specific value,
 * in R.equals terms. Most likely used to filter a list.
 *
 * @func pathNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Relation
 * @sig [Idx] => a => {a} => Boolean
 * @sig Idx = String | Int
 * @param {Array} path The path of the nested property to use
 * @param {a} val The value to compare the nested property with
 * @param {Object} object The object to check the nested property in
 * @return {boolean} Returns Boolean `false` if the value equals the nested object property, `true` otherwise
 * @see {@link http://ramdajs.com/docs/#pathEq|R.pathEq}
 * @example
 *
 * const user1 = { address: { zipCode: 90210 } };
 * const user2 = { address: { zipCode: 55555 } };
 * const user3 = { name: 'Bob' };
 * const users = [ user1, user2, user3 ];
 * const isFamous = R.pathNotEq(['address', 'zipCode'], 90210);
 * R.filter(isFamous, users); //=> [ user2, user3 ]
 */

/* eslint-enable max-len */
var pathNotEq = (0, _ramda.complement)(_ramda.pathEq);
var _default = pathNotEq;
exports["default"] = _default;

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var inRangeImp = (0, _ramda.ifElse)(_ramda.gte, function () {
  throw new Error('low must not be greater than high in inRange(low, high, value)');
}, (0, _ramda.useWith)(_ramda.both, [_ramda.lte, _ramda.gt]));
/**
 * Checks if `value` is between `low` and up to but not including `high`.
 *
 * @func inRange
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|v2.7.0}
 * @category Relation
 * @sig Number -> Number -> Number -> Boolean
 * @param {number} low Start of the range
 * @param {number} high The end of the range
 * @param {number} value The value to test
 * @return {boolean}
 * @throws {Error} When `low` is greater than or equal to `high`
 * @example
 *
 * RA.inRange(0, 5, 3); //=> true
 * RA.inRange(0, 5, 0); //=> true
 * RA.inRange(0, 5, 4); //=> true
 * RA.inRange(0, 5, 5); //=> false
 * RA.inRange(0, 5, -1); //=> false
 */

var _default = (0, _ramda.curry)(function (low, high, value) {
  return inRangeImp(low, high)(value);
});

exports["default"] = _default;

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns `true` if its arguments are not equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func notEqual
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.notEqual(1, 1); //=> false
 * RA.notEqual(1, '1'); //=> true
 * RA.notEqual([1, 2, 3], [1, 2, 3]); //=> false
 *
 * const a = {}; a.v = a;
 * const b = {}; b.v = b;
 * RA.notEqual(a, b); //=> false
 */
var notEqual = (0, _ramda.complement)(_ramda.equals);
var _default = notEqual;
exports["default"] = _default;

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isNotEmpty = _interopRequireDefault(__webpack_require__(82));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns true if two lists have at least one element common to both lists.
 *
 * @func overlaps
 * @memberOf RA
 * @category Relation
 * @since {@link https://char0n.github.io/ramda-adjunct/2.30.0|v2.30.0}
 * @sig [a] -> [a] -> Boolean
 * @param {Array} list1 The first list
 * @param {Array} list2 The second list
 * @return {boolean} True if two lists have at least one element common to both lists
 * @example
 *
 * RA.overlaps(['-v', '--verbose'], ['node', 'script.js', '-v']); //=> true
 * RA.overlaps(['-v', '--verbose'], []); //=> false
 * RA.overlaps([1, 2, 3], [3, 4, 5]); //=> true
 * RA.overlaps([1, 2, 3], [4, 5]); //=> false
 */
var overlaps = (0, _ramda.curryN)(2, function (list1, list2) {
  if ((0, _ramda.isEmpty)(list1)) {
    return true;
  }

  return (0, _ramda.pipe)(_ramda.intersection, _isNotEmpty["default"])(list1, list2);
});
var _default = overlaps;
exports["default"] = _default;

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/* eslint-disable max-len */

/**
 * A function which calls the two provided functions and returns the complement of `&&`ing the
 * results.
 * It returns true if the first function is false-y and the complement of the second function
 * otherwise. Note that this is short-circuited, meaning that the second function will not be
 * invoked if the first returns a false-y value. In short it will return true unless both predicates
 * return true.
 *
 * In addition to functions, `RA.notBoth` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func notBoth
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} Returns a function that applies its arguments to `f` and `g` and returns the complement of `&&`ing their outputs together.
 * @see {@link http://ramdajs.com/docs/#both|R.both}
 * @example
 *
 * const gt10 = R.gt(R.__, 10)
 * const even = (x) => x % 2 === 0;
 * const f = RA.notBoth(gt10, even);
 *
 * f(12); //=> false
 * f(8); //=> true
 * f(11); //=> true
 * f(9); //=> true
 */

/* eslint-enable max-len */
var notBoth = (0, _ramda.curry)((0, _ramda.compose)(_ramda.complement, _ramda.both));
var _default = notBoth;
exports["default"] = _default;

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns false if both arguments are truthy; true otherwise.
 *
 * @func nand
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.19.0|v2.19.0}
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean} false if both arguments are truesy
 * @example
 *
 * RA.nand(true, true); //=> false
 * RA.nand(false, true); //=> true
 * RA.nand(true, false); //=> true
 * RA.nand(false, false); //=> true
 * RA.nand(1.0, 1.0); //=> false
 * RA.nand(1.0, 0); //=> true
 * RA.nand(0, 1.0); //=> true
 * RA.nand(0, 0); //=> true
 */
var nand = (0, _ramda.complement)(_ramda.and); // eslint-disable-line ramda/complement-simplification

var _default = nand;
exports["default"] = _default;

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/* eslint-disable max-len */

/**
 * A function which calls the two provided functions and returns the complement of `||`ing the
 * results.
 * It returns false if the first function is truth-y and the complement of the second function
 * otherwise. Note that this is short-circuited, meaning that the second function will not be
 * invoked if the first returns a truth-y value. In short it will return true if neither predicate
 * returns true.
 *
 * In addition to functions, `RA.neither` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func neither
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} Returns a function that applies its arguments to `f` and `g` and returns the complement of `||`ing their outputs together.
 * @see {@link http://ramdajs.com/docs/#either|R.either}, {@link http://ramdajs.com/docs/#or|R.or}
 * @example
 *
 * const gt10 = R.gt(R.__, 10)
 * const even = (x) => x % 2 === 0;
 * const f = RA.neither(gt10, even);
 *
 * f(12); //=> false
 * f(8); //=> false
 * f(11); //=> false
 * f(9); //=> true
 */

/* eslint-enable max-len */
var neither = (0, _ramda.curry)((0, _ramda.compose)(_ramda.complement, _ramda.either));
var _default = neither;
exports["default"] = _default;

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns true if both arguments are falsy; false otherwise.
 *
 * @func nor
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.20.0|v2.20.0}
 * @category Logic
 * @sig a -> b -> a ⊽ b
 * @param {*} a
 * @param {*} b
 * @return {boolean} true if both arguments are falsy
 * @see {@link RA.neither|neither}
 * @example
 *
 * RA.nor(true, true); //=> false
 * RA.nor(false, true); //=> false
 * RA.nor(true, false); //=> false
 * RA.nor(false, false); //=> true
 * RA.nor(1, 1); //=> false
 * RA.nor(1, 0); //=> false
 * RA.nor(0, 1); //=> false
 * RA.nor(0, 0); //=> true
 */
var nor = (0, _ramda.complement)(_ramda.or); // eslint-disable-line ramda/complement-simplification

var _default = nor;
exports["default"] = _default;

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Takes a list of predicates and returns a predicate that returns true for a given list of
 * arguments if one or more of the provided predicates is not satisfied by those arguments. It is
 * the complement of Ramda's allPass.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func notAllPass
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see {@link http://ramdajs.com/docs/#allPass|R.allPass}
 * @example
 *
 * const gt10 = R.gt(R.__, 10)
 * const even = (x) => x % 2 === 0;
 * const f = RA.notAllPass([gt10, even]);
 *
 * f(12); //=> false
 * f(8); //=> true
 * f(11); //=> true
 * f(9); //=> true
 */
var notAllPass = (0, _ramda.curry)((0, _ramda.compose)(_ramda.complement, _ramda.allPass));
var _default = notAllPass;
exports["default"] = _default;

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Takes a list of predicates and returns a predicate that returns true for a given list of
 * arguments if none of the provided predicates are satisfied by those arguments. It is the
 * complement of Ramda's anyPass.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func nonePass
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see {@link http://ramdajs.com/docs/#anyPass|R.anyPass}
 * @example
 *
 * const gt10 = R.gt(R.__, 10)
 * const even = (x) => x % 2 === 0;
 * const f = RA.nonePass([gt10, even]);
 *
 * f(12); //=> false
 * f(8); //=> false
 * f(11); //=> false
 * f(9); //=> true
 */
var nonePass = (0, _ramda.curryN)(1, (0, _ramda.compose)(_ramda.complement, _ramda.anyPass));
var _default = nonePass;
exports["default"] = _default;

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _list = _interopRequireDefault(__webpack_require__(360));

var _isTruthy = _interopRequireDefault(__webpack_require__(155));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Takes a combining predicate and a list of functions and returns a function which will map the
 * arguments it receives to the list of functions and returns the result of passing the values
 * returned from each function to the combining predicate. A combining predicate is a function that
 * combines a list of Boolean values into a single Boolean value, such as `R.any` or `R.all`. It
 * will test each value using `RA.isTruthy`, meaning the functions don't necessarily have to be
 * predicates.
 *
 * The function returned is curried to the number of functions supplied, and if called with more
 * arguments than functions, any remaining arguments are passed in to the combining predicate
 * untouched.
 *
 * @func argsPass
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|v2.7.0}
 * @category Logic
 * @sig ((* -> Boolean) -> [*] -> Boolean) -> [(* -> Boolean), ...] -> (*...) -> Boolean
 * @param {Function} combiningPredicate The predicate used to combine the values returned from the
 * list of functions
 * @param {Array} functions List of functions
 * @return {boolean} Returns the combined result of mapping arguments to functions
 * @example
 *
 * RA.argsPass(R.all, [RA.isArray, RA.isBoolean, RA.isString])([], false, 'abc') //=> true
 * RA.argsPass(R.all, [RA.isArray, RA.isBoolean, RA.isString])([], false, 1) //=> false
 * RA.argsPass(R.any, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, 'abc') //=> true
 * RA.argsPass(R.any, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, false) //=> false
 * RA.argsPass(R.none, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, false) //=> true
 * RA.argsPass(R.none, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, 'abc') //=> false
 */
var argsPass = (0, _ramda.curry)(function (combiningPredicate, predicates) {
  return (0, _ramda.useWith)((0, _ramda.compose)(combiningPredicate(_isTruthy["default"]), _list["default"]), predicates);
});
var _default = argsPass;
exports["default"] = _default;

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Accepts a function with any arity and returns a function with arity of zero.
 * The returned function ignores any arguments supplied to it.
 *
 * @func dropArgs
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.10.0|v2.10.0}
 * @category Logic
 * @sig (...a -> b)-> () -> b
 * @param {Function} fn The function with any arity
 * @return {Function} Returns function with arity of zero
 * @see {@link http://ramdajs.com/docs/#nAry|R.nAry}
 * @example
 *
 * const fn = (a = 1, b = 2) => a + b;
 *
 * RA.dropArgs(fn)('ignore1', 'ignore2'); //=> 3
 */
var dropArgs = (0, _ramda.nAry)(0);
var _default = dropArgs;
exports["default"] = _default;

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @func round
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.15.0|v2.15.0}
 * @category Math
 * @sig Number -> Number
 * @param {number} number The number to round
 * @return {number} The value of the given number rounded to the nearest integer
 * @example
 *
 * RA.round(0.9); //=> 1
 * RA.round(5.95); //=> 6
 * RA.round(5.5); //=> 6
 * RA.round(5.05); //=> 5
 * RA.round(-5.05); //=> -5
 * RA.round(-5.5); //=> -5
 * RA.round(-5.95); //=> -6
 */
var round = (0, _ramda.curryN)(1, (0, _ramda.bind)(Math.round, Math));
var _default = round;
exports["default"] = _default;

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Returns the smallest integer greater than or equal to a given number.
 *
 * Note: ceil(null) returns integer 0 and does not give a NaN error.
 *
 * @func ceil
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.15.0|v2.15.0}
 * @category Math
 * @sig Number -> Number
 * @param {number} number The number to ceil
 * @return {number} The smallest integer greater than or equal to the given number
 * @example
 *
 * RA.ceil(.95); //=> 1
 * RA.ceil(4); //=> 4
 * RA.ceil(7.004); //=> 8
 * RA.ceil(-0.95); //=> -0
 * RA.ceil(-4); //=> -4
 * RA.ceil(-7.004); //=> -7
 * RA.ceil(null); //=> 0
 */
var ceil = (0, _ramda.curryN)(1, (0, _ramda.bind)(Math.ceil, Math));
var _default = ceil;
exports["default"] = _default;

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Divides two numbers, where the second number is divided by the first number.
 *
 * @func divideNum
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Math
 * @sig Number -> Number -> Number
 * @param {number} divisor the number to divide by
 * @param {number} dividend the number to divide
 * @return {number} A number representing the quotient of dividing the dividend by the divisor
 * @example
 *
 * RA.divideNum(2, 1); //=> 0.5
 */
var divideNum = (0, _ramda.flip)(_ramda.divide);
var _default = divideNum;
exports["default"] = _default;

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.truncPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _Math = _interopRequireDefault(__webpack_require__(537));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var truncPonyfill = (0, _ramda.curryN)(1, _Math["default"]);
/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @func trunc
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.15.0|v2.15.0}
 * @category Math
 * @sig Number | String -> Number
 * @param {number|string} number The number to trunc
 * @return {number} The integer part of the given number
 * @example
 *
 * RA.trunc(13.37); //=> 13
 * RA.trunc(42.84); //=> 42
 * RA.trunc(0.123); //=>  0
 * RA.trunc(-0.123); //=> -0
 * RA.trunc('-1.123'); //=> -1
 * RA.trunc(NaN); //=> NaN
 * RA.trunc('foo'); //=> NaN
 */

exports.truncPonyfill = truncPonyfill;
var trunc = (0, _isFunction["default"])(Math.trunc) ? (0, _ramda.curryN)(1, (0, _ramda.bind)(Math.trunc, Math)) : truncPonyfill;
var _default = trunc;
exports["default"] = _default;

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _isFinite = _interopRequireDefault(__webpack_require__(76));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var truncPonyfill = function truncPonyfill(v) {
  var numV = Number(v);

  if (!(0, _isFinite["default"])(numV)) {
    return numV;
  } // eslint-disable-next-line no-nested-ternary


  return numV - numV % 1 || (numV < 0 ? -0 : numV === 0 ? numV : 0);
};

var _default = truncPonyfill;
exports["default"] = _default;

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.signPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _Math = _interopRequireDefault(__webpack_require__(539));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signPonyfill = (0, _ramda.curryN)(1, _Math["default"]);
/**
 * Returns the sign of a number, indicating whether the number is positive, negative or zero.
 *
 * @func sign
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.15.0|v2.15.0}
 * @category Math
 * @sig Number | String -> Number
 * @param {number} number A number
 * @return {number} A number representing the sign of the given argument. If the argument is a positive number, negative number, positive zero or negative zero, the function will return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned
 * @example
 *
 * RA.sign(3); //  1
 * RA.sign(-3); // -1
 * RA.sign('-3'); // -1
 * RA.sign(0); //  0
 * RA.sign(-0); // -0
 * RA.sign(NaN); // NaN
 * RA.sign('foo'); // NaN
 */

exports.signPonyfill = signPonyfill;
var sign = (0, _isFunction["default"])(Math.sign) ? (0, _ramda.curryN)(1, (0, _ramda.bind)(Math.sign, Math)) : signPonyfill;
var _default = sign;
exports["default"] = _default;

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var signPonyfill = function signPonyfill(number) {
  return (number > 0) - (number < 0) || +number;
};

var _default = signPonyfill;
exports["default"] = _default;

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Subtracts its first argument from its second argument.
 *
 * @func subtractNum
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Math
 * @sig Number -> Number -> Number
 * @param {number} subtrahend the number to subtract
 * @param {number} minuend the number to subtract from
 * @return {number} A number representing the difference of subtracting the subtrahend from the minuend
 * @example
 *
 * RA.subtractNum(3, 5); //=> 2
 */
var subtractNum = (0, _ramda.flip)(_ramda.subtract);
var _default = subtractNum;
exports["default"] = _default;

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Converts double-precision 64-bit binary format IEEE 754 to signed 32 bit integer number.
 *
 * @func toInteger32
 * @aliases toInt32
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.28.0|v2.28.0}
 * @category Math
 * @sig Number -> Number
 * @param {number} number A number
 * @return {number} A signed 32-bit integer number
 * @see {@link RA.toUInteger32|toUInteger32}, {@link http://speakingjs.com/es5/ch11.html#integers_via_bitwise_operators}
 * @example
 *
 * RA.toInteger32(2 ** 35); // => 0
 * RA.toInteger32(2 ** 30); // => 1073741824
 */
// eslint-disable-next-line no-bitwise
var toInteger32 = (0, _ramda.curryN)(1, function (val) {
  return val >> 0;
});
var _default = toInteger32;
exports["default"] = _default;

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

/**
 * Converts double-precision 64-bit binary format IEEE 754 to unsigned 32 bit integer number.
 *
 * @func toUinteger32
 * @aliases toUint32
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.28.0|v2.28.0}
 * @category Math
 * @sig Number -> Number
 * @param {number} val Value to be converted.
 * @return {number}
 * @see {@link RA.toInteger32|toInteger32}, {@link http://speakingjs.com/es5/ch11.html#integers_via_bitwise_operators}
 * @example
 *
 * RA.toUinteger32(1.5); //=> 1
 * RA.toInteger32(2 ** 35); // => 0
 * RA.toInteger32(2 ** 31); // => 2147483648
 * RA.toInteger32(2 ** 30); // => 1073741824
 */
// eslint-disable-next-line no-bitwise
var toUinteger32 = (0, _ramda.curryN)(1, function (val) {
  return val >>> 0;
});
var _default = toUinteger32;
exports["default"] = _default;

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.replaceAllInvoker = exports.replaceAllPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _String = _interopRequireDefault(__webpack_require__(544));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var replaceAllPonyfill = (0, _ramda.curryN)(3, _String["default"]);
exports.replaceAllPonyfill = replaceAllPonyfill;
var replaceAllInvoker = (0, _ramda.invoker)(2, 'replaceAll');
/**
 * Replaces all substring matches in a string with a replacement.
 *
 * @func replaceAll
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.17.0|v2.17.0}
 * @category String
 * @sig String -> String -> String -> String
 * @param {string} searchValue The substring or a global RegExp to match
 * @param {string} replaceValue The string to replace the matches with
 * @param {string} str The String to do the search and replacement in
 * @return {string} A new string containing all the `searchValue` replaced with the `replaceValue`
 * @throws {TypeError} When invalid arguments provided
 * @see {@link http://ramdajs.com/docs/#replace|R.replace}, {@link https://github.com/tc39/proposal-string-replaceall|TC39 proposal}
 * @example
 *
 * RA.replaceAll('ac', 'ef', 'ac ab ac ab'); //=> 'ef ab ef ab'
 * RA.replaceAll('', '_', 'xxx'); //=> '_x_x_x_'
 * RA.replaceAll(/x/g, 'v', 'xxx'); //=> 'vvv'
 * RA.replaceAll(/x/, 'v', 'xxx'); //=> TypeError
 */

exports.replaceAllInvoker = replaceAllInvoker;
var replaceAll = (0, _isFunction["default"])(String.prototype.replaceAll) ? replaceAllInvoker : replaceAllPonyfill;
var _default = replaceAll;
exports["default"] = _default;

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _isRegExp = _interopRequireDefault(__webpack_require__(156));

var _escapeRegExp = _interopRequireDefault(__webpack_require__(371));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var checkArguments = function checkArguments(searchValue, replaceValue, str) {
  if (str == null || searchValue == null || replaceValue == null) {
    throw TypeError('Input values must not be `null` or `undefined`');
  }
};

var checkValue = function checkValue(value, valueName) {
  if (typeof value !== 'string') {
    if (!(value instanceof String)) {
      throw TypeError("`".concat(valueName, "` must be a string"));
    }
  }
};

var checkSearchValue = function checkSearchValue(searchValue) {
  if (typeof searchValue !== 'string' && !(searchValue instanceof String) && !(searchValue instanceof RegExp)) {
    throw TypeError('`searchValue` must be a string or an regexp');
  }
};

var replaceAll = function replaceAll(searchValue, replaceValue, str) {
  checkArguments(searchValue, replaceValue, str);
  checkValue(str, 'str');
  checkValue(replaceValue, 'replaceValue');
  checkSearchValue(searchValue);
  var regexp = new RegExp((0, _isRegExp["default"])(searchValue) ? searchValue : (0, _escapeRegExp["default"])(searchValue), 'g');
  return (0, _ramda.replace)(regexp, replaceValue, str);
};

var _default = replaceAll;
exports["default"] = _default;

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.trimStartInvoker = exports.trimStartPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _String = _interopRequireDefault(__webpack_require__(546));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trimStartPonyfill = _String["default"];
exports.trimStartPonyfill = trimStartPonyfill;
var trimStartInvoker = (0, _ramda.invoker)(0, 'trimStart');
/**
 * Removes whitespace from the beginning of a string.
 *
 * @func trimStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig String -> String
 * @param {string} value String value to have the whitespace removed from the beginning
 * @return {string} A new string representing the calling string stripped of whitespace from its beginning (left end).
 * @example
 *
 * RA.trimStart('  abc'); //=> 'abc'
 */

exports.trimStartInvoker = trimStartInvoker;
var trimStart = (0, _isFunction["default"])(String.prototype.trimStart) ? trimStartInvoker : trimStartPonyfill;
var _default = trimStart;
exports["default"] = _default;

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var trimStart = (0, _ramda.replace)(/^[\s\uFEFF\xA0]+/, '');
var _default = trimStart;
exports["default"] = _default;

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.trimEndInvoker = exports.trimEndPonyfill = void 0;

var _ramda = __webpack_require__(1);

var _String = _interopRequireDefault(__webpack_require__(548));

var _isFunction = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trimEndPonyfill = _String["default"];
exports.trimEndPonyfill = trimEndPonyfill;
var trimEndInvoker = (0, _ramda.invoker)(0, 'trimEnd');
/**
 * Removes whitespace from the end of a string.
 *
 * @func trimEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig String -> String
 * @param {string} value String value to have the whitespace removed from the end
 * @return {string} A new string representing the calling string stripped of whitespace from its end (right end).
 * @see {@link RA.trimEnd|trimEnd}
 * @example
 *
 * RA.trimEnd('abc   '); //=> 'abc'
 */

exports.trimEndInvoker = trimEndInvoker;
var trimEnd = (0, _isFunction["default"])(String.prototype.trimEnd) ? trimEndInvoker : trimEndPonyfill;
var _default = trimEnd;
exports["default"] = _default;

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var trimStart = (0, _ramda.replace)(/[\s\uFEFF\xA0]+$/, '');
var _default = trimStart;
exports["default"] = _default;

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _contained = _interopRequireDefault(__webpack_require__(158));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Removes specified characters from the end of a string.
 *
 * @func trimCharsEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.25.0|v2.25.0}
 * @category String
 * @sig String -> String
 * @param {string} chars The characters to trim
 * @param {string} value The string to trim
 * @return {string} Returns the trimmed string.
 * @example
 *
 * RA.trimCharsEnd('_-', '-_-abc-_-'); //=> '-_-abc'
 */
var trimCharsEnd = (0, _ramda.curry)(function (chars, value) {
  return (0, _ramda.pipe)((0, _ramda.split)(''), (0, _ramda.dropLastWhile)((0, _contained["default"])(chars)), (0, _ramda.join)(''))(value);
});
var _default = trimCharsEnd;
exports["default"] = _default;

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ramda = __webpack_require__(1);

var _contained = _interopRequireDefault(__webpack_require__(158));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Removes specified characters from the beginning of a string.
 *
 * @func trimCharsStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.24.0|v2.24.0}
 * @category String
 * @sig String -> String
 * @param {string} chars The characters to trim
 * @param {string} value The string to trim
 * @return {string} Returns the trimmed string.
 * @example
 *
 * RA.trimCharsStart('_-', '-_-abc-_-'); //=> 'abc-_-'
 */
var trimCharsStart = (0, _ramda.curry)(function (chars, value) {
  return (0, _ramda.pipe)((0, _ramda.split)(''), (0, _ramda.dropWhile)((0, _contained["default"])(chars)), (0, _ramda.join)(''))(value);
});
var _default = trimCharsStart;
exports["default"] = _default;

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _isNotUndefined = _interopRequireDefault(__webpack_require__(80));

var _String = _interopRequireDefault(__webpack_require__(160));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var padStartPonyfill = function padStartPonyfill(padString, targetLength, value) {
  // eslint-disable-next-line no-bitwise
  var finalLength = targetLength >> 0; // truncate if number, or convert non-number to 0;

  var finalPadString = String((0, _isNotUndefined["default"])(padString) ? padString : ' '); // return the original string, if targeted length is less than original strings length

  if (value.length >= finalLength) {
    return String(value);
  }

  finalLength -= value.length;

  if (finalLength > finalPadString.length) {
    var lenghtToPad = finalLength / finalPadString.length; // append to original to ensure we are longer than needed

    finalPadString += (0, _isFunction["default"])(String.prototype.repeat) ? finalPadString.repeat(lenghtToPad) : (0, _String["default"])(finalPadString, lenghtToPad);
  }

  return finalPadString.slice(0, finalLength) + String(value);
};

var _default = padStartPonyfill;
exports["default"] = _default;

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _isFunction = _interopRequireDefault(__webpack_require__(10));

var _isNotUndefined = _interopRequireDefault(__webpack_require__(80));

var _String = _interopRequireDefault(__webpack_require__(160));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var padEndPonyfill = function padEndPonyfill(padString, targetLength, value) {
  // eslint-disable-next-line no-bitwise
  var finalLength = targetLength >> 0;
  var finalPadString = String((0, _isNotUndefined["default"])(padString) ? padString : ' ');

  if (value.length > finalLength) {
    return String(value);
  }

  finalLength -= value.length;

  if (finalLength > finalPadString.length) {
    var remainingLength = finalLength / finalPadString.length;
    finalPadString += (0, _isFunction["default"])(String.prototype.repeat) ? finalPadString.repeat(remainingLength) : (0, _String["default"])(finalPadString, remainingLength);
  }

  return String(value) + finalPadString.slice(0, finalLength);
};

var _default = padEndPonyfill;
exports["default"] = _default;

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _padCharsEnd = _interopRequireDefault(__webpack_require__(373));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The function pads the current string with an empty string
 * so that the resulting string reaches a given length.
 * The padding is applied from the end of the current string.
 *
 * @func padEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig Number -> String -> String
 * @param {number} targetLength The length of the resulting string once
 * the current string has been padded
 * @param {string} value String value to be padded
 * @return {string} A new string of the specified length with the pad string
 * applied at the end of the current string
 * @see {@link RA.padCharsEnd|padCharsEnd}, {@link RA.padCharsStart|padCharsStart}, {@link RA.padStart|padStart}
 * @example
 *
 * RA.padEnd(3, 'a'); // => 'a  '
 */
var padEnd = (0, _padCharsEnd["default"])(' ');
var _default = padEnd;
exports["default"] = _default;

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _padCharsStart = _interopRequireDefault(__webpack_require__(372));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Pads string on the left side if it's shorter than length.
 *
 * @func padStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.25.0|v2.25.0}
 * @category String
 * @sig Number -> String -> String
 * @param {number} targetLength The length of the resulting string once
 * the current string has been padded
 * @param {string} value String value to be padded
 * @return {string} A new string of the specified length with the empty string
 * applied to the beginning of the current string
 * @see {@link RA.padCharsEnd|padCharsEnd}, {@link RA.padCharsStart|padCharsStart}, {@link RA.padEnd|padEnd}
 * @example
 *
 * RA.padStart(3, 'a'); // => '  a'
 */
var padStart = (0, _padCharsStart["default"])(' ');
var _default = padStart;
exports["default"] = _default;

/***/ })
/******/ ]);
});