/*! React InstantSearch 6.8.3 | © Algolia, inc. | https://github.com/algolia/react-instantsearch */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory((global.ReactInstantSearch = global.ReactInstantSearch || {}, global.ReactInstantSearch.Core = {}), global.React));
}(this, function (exports, React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

  var hasElementType = typeof Element !== 'undefined';
  var hasMap = typeof Map === 'function';
  var hasSet = typeof Set === 'function';
  var hasArrayBuffer = typeof ArrayBuffer === 'function';

  // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

  function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.1
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }

      // START: Modifications:
      // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
      //    to co-exist with es5.
      // 2. Replace `for of` with es5 compliant iteration using `for`.
      //    Basically, take:
      //
      //    ```js
      //    for (i of a.entries())
      //      if (!b.has(i[0])) return false;
      //    ```
      //
      //    ... and convert to:
      //
      //    ```js
      //    it = a.entries();
      //    while (!(i = it.next()).done)
      //      if (!b.has(i.value[0])) return false;
      //    ```
      //
      //    **Note**: `i` access switches to `i.value`.
      var it;
      if (hasMap && (a instanceof Map) && (b instanceof Map)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!equal(i.value[1], b.get(i.value[0]))) return false;
        return true;
      }

      if (hasSet && (a instanceof Set) && (b instanceof Set)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        return true;
      }
      // END: Modifications

      if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (a[i] !== b[i]) return false;
        return true;
      }

      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      // END: fast-deep-equal

      // START: react-fast-compare
      // custom handling for DOM elements
      if (hasElementType && a instanceof Element) return false;

      // custom handling for React
      for (i = length; i-- !== 0;) {
        if (keys[i] === '_owner' && a.$$typeof) {
          // React-specific: avoid traversing React elements' _owner.
          //  _owner contains circular references
          // and is not needed when comparing the actual elements (and not their owners)
          // .$$typeof and ._store on just reasonable markers of a react element
          continue;
        }

        // all other properties should be traversed as usual
        if (!equal(a[keys[i]], b[keys[i]])) return false;
      }
      // END: react-fast-compare

      // START: fast-deep-equal
      return true;
    }

    return a !== a && b !== b;
  }
  // end fast-deep-equal

  var reactFastCompare = function isEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if (((error.message || '').match(/stack|recursion/i))) {
        // warn on circular references, don't crash
        // browsers give this different errors name and messages:
        // chrome/safari: "RangeError", "Maximum call stack size exceeded"
        // firefox: "InternalError", too much recursion"
        // edge: "Error", "Out of stack space"
        console.warn('react-fast-compare cannot handle circular refs');
        return false;
      }
      // some other error. we should definitely know about these
      throw error;
    }
  };

  var shallowEqual = function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    } // Test for A's keys different from B.


    var hasOwn = Object.prototype.hasOwnProperty;

    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }

    return true;
  };
  var getDisplayName = function getDisplayName(Component) {
    return Component.displayName || Component.name || 'UnknownComponent';
  };

  var isPlainObject = function isPlainObject(value) {
    return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
  };

  var removeEmptyKey = function removeEmptyKey(obj) {
    Object.keys(obj).forEach(function (key) {
      var value = obj[key];

      if (!isPlainObject(value)) {
        return;
      }

      if (!objectHasKeys(value)) {
        delete obj[key];
      } else {
        removeEmptyKey(value);
      }
    });
    return obj;
  };
  function objectHasKeys(object) {
    return object && Object.keys(object).length > 0;
  } // https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620

  var _createContext = React.createContext({
    onInternalStateUpdate: function onInternalStateUpdate() {
      return undefined;
    },
    createHrefForState: function createHrefForState() {
      return '#';
    },
    onSearchForFacetValues: function onSearchForFacetValues() {
      return undefined;
    },
    onSearchStateChange: function onSearchStateChange() {
      return undefined;
    },
    onSearchParameters: function onSearchParameters() {
      return undefined;
    },
    store: {},
    widgetsManager: {},
    mainTargetedIndex: ''
  }),
      InstantSearchConsumer = _createContext.Consumer,
      InstantSearchProvider = _createContext.Provider;

  var _createContext2 = React.createContext(undefined),
      IndexConsumer = _createContext2.Consumer,
      IndexProvider = _createContext2.Provider;

  /**
   * Connectors are the HOC used to transform React components
   * into InstantSearch widgets.
   * In order to simplify the construction of such connectors
   * `createConnector` takes a description and transform it into
   * a connector.
   * @param {ConnectorDescription} connectorDesc the description of the connector
   * @return {Connector} a function that wraps a component into
   * an instantsearch connected one.
   */

  function createConnectorWithoutContext(connectorDesc) {
    if (!connectorDesc.displayName) {
      throw new Error('`createConnector` requires you to provide a `displayName` property.');
    }

    var isWidget = typeof connectorDesc.getSearchParameters === 'function' || typeof connectorDesc.getMetadata === 'function' || typeof connectorDesc.transitionState === 'function';
    return function (Composed) {
      var Connector =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Connector, _Component);

        function Connector(props) {
          var _this;

          _classCallCheck(this, Connector);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this, props));

          _defineProperty(_assertThisInitialized(_this), "unsubscribe", void 0);

          _defineProperty(_assertThisInitialized(_this), "unregisterWidget", void 0);

          _defineProperty(_assertThisInitialized(_this), "isUnmounting", false);

          _defineProperty(_assertThisInitialized(_this), "state", {
            providedProps: _this.getProvidedProps(_this.props)
          });

          _defineProperty(_assertThisInitialized(_this), "refine", function () {
            var _ref;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this.props.contextValue.onInternalStateUpdate( // refine will always be defined here because the prop is only given conditionally
            (_ref = connectorDesc.refine).call.apply(_ref, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
          });

          _defineProperty(_assertThisInitialized(_this), "createURL", function () {
            var _ref2;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return _this.props.contextValue.createHrefForState( // refine will always be defined here because the prop is only given conditionally
            (_ref2 = connectorDesc.refine).call.apply(_ref2, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
          });

          _defineProperty(_assertThisInitialized(_this), "searchForFacetValues", function () {
            var _ref3;

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this.props.contextValue.onSearchForFacetValues( // searchForFacetValues will always be defined here because the prop is only given conditionally
            (_ref3 = connectorDesc.searchForFacetValues).call.apply(_ref3, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
          });

          if (connectorDesc.getSearchParameters) {
            _this.props.contextValue.onSearchParameters(connectorDesc.getSearchParameters.bind(_assertThisInitialized(_this)), {
              ais: _this.props.contextValue,
              multiIndexContext: _this.props.indexContextValue
            }, _this.props, connectorDesc.getMetadata && connectorDesc.getMetadata.bind(_assertThisInitialized(_this)));
          }

          return _this;
        }

        _createClass(Connector, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            this.unsubscribe = this.props.contextValue.store.subscribe(function () {
              if (!_this2.isUnmounting) {
                _this2.setState({
                  providedProps: _this2.getProvidedProps(_this2.props)
                });
              }
            });

            if (isWidget) {
              this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
            }
          }
        }, {
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            if (typeof connectorDesc.shouldComponentUpdate === 'function') {
              return connectorDesc.shouldComponentUpdate.call(this, this.props, nextProps, this.state, nextState);
            }

            var propsEqual = shallowEqual(this.props, nextProps);

            if (this.state.providedProps === null || nextState.providedProps === null) {
              if (this.state.providedProps === nextState.providedProps) {
                return !propsEqual;
              }

              return true;
            }

            return !propsEqual || !shallowEqual(this.state.providedProps, nextState.providedProps);
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (!reactFastCompare(prevProps, this.props)) {
              this.setState({
                providedProps: this.getProvidedProps(this.props)
              });

              if (isWidget) {
                this.props.contextValue.widgetsManager.update();

                if (typeof connectorDesc.transitionState === 'function') {
                  this.props.contextValue.onSearchStateChange(connectorDesc.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets));
                }
              }
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.isUnmounting = true;

            if (this.unsubscribe) {
              this.unsubscribe();
            }

            if (this.unregisterWidget) {
              this.unregisterWidget();

              if (typeof connectorDesc.cleanUp === 'function') {
                var nextState = connectorDesc.cleanUp.call(this, this.props, this.props.contextValue.store.getState().widgets);
                this.props.contextValue.store.setState(_objectSpread({}, this.props.contextValue.store.getState(), {
                  widgets: nextState
                }));
                this.props.contextValue.onSearchStateChange(removeEmptyKey(nextState));
              }
            }
          }
        }, {
          key: "getProvidedProps",
          value: function getProvidedProps(props) {
            var _this$props$contextVa = this.props.contextValue.store.getState(),
                widgets = _this$props$contextVa.widgets,
                results = _this$props$contextVa.results,
                resultsFacetValues = _this$props$contextVa.resultsFacetValues,
                searching = _this$props$contextVa.searching,
                searchingForFacetValues = _this$props$contextVa.searchingForFacetValues,
                isSearchStalled = _this$props$contextVa.isSearchStalled,
                metadata = _this$props$contextVa.metadata,
                error = _this$props$contextVa.error;

            var searchResults = {
              results: results,
              searching: searching,
              searchingForFacetValues: searchingForFacetValues,
              isSearchStalled: isSearchStalled,
              error: error
            };
            return connectorDesc.getProvidedProps.call(this, props, widgets, searchResults, metadata, // @MAJOR: move this attribute on the `searchResults` it doesn't
            // makes sense to have it into a separate argument. The search
            // flags are on the object why not the results?
            resultsFacetValues);
          }
        }, {
          key: "getSearchParameters",
          value: function getSearchParameters(searchParameters) {
            if (typeof connectorDesc.getSearchParameters === 'function') {
              return connectorDesc.getSearchParameters.call(this, searchParameters, this.props, this.props.contextValue.store.getState().widgets);
            }

            return null;
          }
        }, {
          key: "getMetadata",
          value: function getMetadata(nextWidgetsState) {
            if (typeof connectorDesc.getMetadata === 'function') {
              return connectorDesc.getMetadata.call(this, this.props, nextWidgetsState);
            }

            return {};
          }
        }, {
          key: "transitionState",
          value: function transitionState(prevWidgetsState, nextWidgetsState) {
            if (typeof connectorDesc.transitionState === 'function') {
              return connectorDesc.transitionState.call(this, this.props, prevWidgetsState, nextWidgetsState);
            }

            return nextWidgetsState;
          }
        }, {
          key: "render",
          value: function render() {
            var _this$props = this.props,
                contextValue = _this$props.contextValue,
                props = _objectWithoutProperties(_this$props, ["contextValue"]);

            var providedProps = this.state.providedProps;

            if (providedProps === null) {
              return null;
            }

            var refineProps = typeof connectorDesc.refine === 'function' ? {
              refine: this.refine,
              createURL: this.createURL
            } : {};
            var searchForFacetValuesProps = typeof connectorDesc.searchForFacetValues === 'function' ? {
              searchForItems: this.searchForFacetValues
            } : {};
            return React__default.createElement(Composed, _extends({}, props, providedProps, refineProps, searchForFacetValuesProps));
          }
        }]);

        return Connector;
      }(React.Component);

      _defineProperty(Connector, "displayName", "".concat(connectorDesc.displayName, "(").concat(getDisplayName(Composed), ")"));

      _defineProperty(Connector, "propTypes", connectorDesc.propTypes);

      _defineProperty(Connector, "defaultProps", connectorDesc.defaultProps);

      return Connector;
    };
  }

  var createConnectorWithContext = function createConnectorWithContext(connectorDesc) {
    return function (Composed) {
      var Connector = createConnectorWithoutContext(connectorDesc)(Composed);

      var ConnectorWrapper = function ConnectorWrapper(props) {
        return React__default.createElement(InstantSearchConsumer, null, function (contextValue) {
          return React__default.createElement(IndexConsumer, null, function (indexContextValue) {
            return React__default.createElement(Connector, _extends({
              contextValue: contextValue,
              indexContextValue: indexContextValue
            }, props));
          });
        });
      };

      return ConnectorWrapper;
    };
  };

  exports.createConnector = createConnectorWithContext;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=Core.js.map
