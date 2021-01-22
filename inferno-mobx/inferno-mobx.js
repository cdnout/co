(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mobx'), require('inferno'), require('hoist-non-inferno-statics')) :
  typeof define === 'function' && define.amd ? define(['exports', 'mobx', 'inferno', 'hoist-non-inferno-statics'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.Inferno = global.Inferno || {}, global.Inferno.Mobx = global.Inferno.Mobx || {}), global.mobx, global.Inferno, global.hoistNonReactStatics));
}(this, (function (exports, mobx, inferno, hoistNonReactStatics) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var hoistNonReactStatics__default = /*#__PURE__*/_interopDefaultLegacy(hoistNonReactStatics);

  var EventEmitter = function EventEmitter() {
      this.listeners = [];
  };
  EventEmitter.prototype.on = function on (cb) {
          var this$1 = this;

      this.listeners.push(cb);
      return function () {
          var index = this$1.listeners.indexOf(cb);
          if (index !== -1) {
              this$1.listeners.splice(index, 1);
          }
      };
  };
  EventEmitter.prototype.emit = function emit (data) {
      var listeners = this.listeners;
      for (var i = 0, len = listeners.length; i < len; ++i) {
          listeners[i](data);
      }
  };

  function warning(message) {
      // tslint:disable-next-line:no-console
      console.error(message);
  }

  function isStateless(component) {
      return !(component.prototype && component.prototype.render);
  }

  /**
   * dev tool support
   */
  var isDevtoolsEnabled = false;
  var isUsingStaticRendering = false;
  var warnedAboutObserverInjectDeprecation = false;
  var renderReporter = new EventEmitter();
  function reportRendering(component) {
      var node = component.$LI.dom;
      renderReporter.emit({
          component: component,
          event: 'render',
          node: node,
          renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
          totalTime: Date.now() - component.__$mobRenderStart
      });
  }
  function trackComponents() {
      if (!isDevtoolsEnabled) {
          isDevtoolsEnabled = true;
          warning('Do not turn trackComponents on in production, its expensive. For tracking dom nodes you need inferno-compat.');
      }
      else {
          isDevtoolsEnabled = false;
          renderReporter.listeners.length = 0;
      }
  }
  function useStaticRendering(useStatic) {
      isUsingStaticRendering = useStatic;
  }
  /**
   * Errors reporter
   */
  var errorsReporter = new EventEmitter();
  /**
   * Utilities
   */
  function patch(target, funcName, runMixinFirst) {
      var base = target[funcName];
      var mixinFunc = reactiveMixin[funcName];
      var f = !base
          ? mixinFunc
          : runMixinFirst === true
              ? function () {
                  mixinFunc.apply(this, arguments);
                  base.apply(this, arguments);
              }
              : function () {
                  base.apply(this, arguments);
                  mixinFunc.apply(this, arguments);
              };
      // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
      // ...but that breaks react-hot-loader, see #231...
      target[funcName] = f;
  }
  function isObjectShallowModified(prev, next) {
      if (null == prev || null == next || typeof prev !== 'object' || typeof next !== 'object') {
          return prev !== next;
      }
      var keys = Object.keys(prev);
      if (keys.length !== Object.keys(next).length) {
          return true;
      }
      var key;
      for (var i = keys.length - 1; i >= 0; i--) {
          key = keys[i];
          if (next[key] !== prev[key]) {
              return true;
          }
      }
      return false;
  }
  /**
   * ReactiveMixin
   */
  var reactiveMixin = {
      componentWillMount: function componentWillMount() {
          var this$1 = this;

          if (isUsingStaticRendering === true) {
              return;
          }
          // Generate friendly name for debugging
          var initialName = this.displayName || this.name || (this.constructor && (this.constructor.displayName || this.constructor.name)) || '<component>';
          /**
           * If props are shallowly modified, react will render anyway,
           * so atom.reportChanged() should not result in yet another re-render
           */
          var skipRender = false;
          /**
           * forceUpdate will re-assign this.props. We don't want that to cause a loop,
           * so detect these changes
           */
          function makePropertyObservableReference(propName) {
              var valueHolder = this[propName];
              var atom = mobx.createAtom('reactive ' + propName);
              Object.defineProperty(this, propName, {
                  configurable: true,
                  enumerable: true,
                  get: function get() {
                      atom.reportObserved();
                      return valueHolder;
                  },
                  set: function set(v) {
                      if (isObjectShallowModified(valueHolder, v)) {
                          valueHolder = v;
                          skipRender = true;
                          atom.reportChanged();
                          skipRender = false;
                      }
                      else {
                          valueHolder = v;
                      }
                  }
              });
          }
          // make this.props an observable reference, see #124
          makePropertyObservableReference.call(this, 'props');
          // make state an observable reference
          makePropertyObservableReference.call(this, 'state');
          // wire up reactive render
          var me = this;
          var render = this.render.bind(this);
          var baseRender = function () { return render(me.props, me.state, me.context); };
          var reaction = null;
          var isRenderingPending = false;
          var initialRender = function () {
              reaction = new mobx.Reaction((initialName + ".render()"), function () {
                  if (!isRenderingPending) {
                      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
                      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
                      // See #85 / Pull #44
                      isRenderingPending = true;
                      if (typeof this$1.componentWillReact === 'function') {
                          this$1.componentWillReact(); // TODO: wrap in action?
                      }
                      if (!skipRender) {
                          this$1.forceUpdate();
                      }
                  }
              });
              reaction.reactComponent = this$1;
              reactiveRender.$mobx = reaction;
              this$1.render = reactiveRender;
              return reactiveRender();
          };
          var reactiveRender = function () {
              isRenderingPending = false;
              var exception;
              var rendering = null;
              reaction.track(function () {
                  if (isDevtoolsEnabled) {
                      this$1.__$mobRenderStart = Date.now();
                  }
                  try {
                      rendering = mobx._allowStateChanges(false, baseRender);
                  }
                  catch (e) {
                      exception = e;
                  }
                  if (isDevtoolsEnabled) {
                      this$1.__$mobRenderEnd = Date.now();
                  }
              });
              if (exception) {
                  errorsReporter.emit(exception);
                  throw exception;
              }
              return rendering;
          };
          this.render = initialRender;
      },
      componentWillUnmount: function componentWillUnmount() {
          if (isUsingStaticRendering === true) {
              return;
          }
          if (this.render.$mobx) {
              this.render.$mobx.dispose();
          }
          if (isDevtoolsEnabled) {
              var node = this.$LI.dom;
              renderReporter.emit({
                  component: this,
                  event: 'destroy',
                  node: node
              });
          }
      },
      componentDidMount: function componentDidMount() {
          if (isDevtoolsEnabled) {
              reportRendering(this);
          }
      },
      componentDidUpdate: function componentDidUpdate() {
          if (isDevtoolsEnabled) {
              reportRendering(this);
          }
      },
      shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
          if (isUsingStaticRendering) {
              warning('[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.');
          }
          // update on any state changes (as is the default)
          if (this.state !== nextState) {
              return true;
          }
          // update if props are shallowly not equal, inspired by PureRenderMixin
          // we could return just 'false' here, and avoid the `skipRender` checks etc
          // however, it is nicer if lifecycle events are triggered like usually,
          // so we return true here if props are shallowly modified.
          return isObjectShallowModified(this.props, nextProps);
      }
  };
  function observer(arg1, arg2) {
      var _a;
      if (typeof arg1 === 'string') {
          throw new Error('Store names should be provided as array');
      }
      if (Array.isArray(arg1)) {
          // component needs stores
          if (!warnedAboutObserverInjectDeprecation) {
              warnedAboutObserverInjectDeprecation = true;
              warning('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
          }
          if (!arg2) {
              // invoked as decorator
              return function (componentClass) { return observer(arg1, componentClass); };
          }
          else {
              return inject.apply(null, arg1)(observer(arg2));
          }
      }
      var component = arg1;
      if (component.isMobxInjector === true) {
          warning("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
      }
      // Stateless function component:
      // If it is function but doesn't seem to be a react class constructor,
      // wrap it to a react class automatically
      if (typeof component === 'function' && (!component.prototype || !component.prototype.render)) {
          return observer((_a = /*@__PURE__*/(function (Component) {
              function _a () {
                  Component.apply(this, arguments);
              }

              if ( Component ) _a.__proto__ = Component;
              _a.prototype = Object.create( Component && Component.prototype );
              _a.prototype.constructor = _a;

              _a.prototype.render = function render (props, _state, context) {
                      return component(props, context);
                  };

              return _a;
          }(inferno.Component)),
              _a.displayName = component.displayName || component.name,
              _a.defaultProps = component.defaultProps,
              _a));
      }
      if (!component) {
          throw new Error("Please pass a valid component to 'observer'");
      }
      var target = component.prototype || component;
      mixinLifecycleEvents(target);
      component.isMobXReactObserver = true;
      return component;
  }
  function mixinLifecycleEvents(target) {
      patch(target, 'componentWillMount', true);
      patch(target, 'componentDidMount', false);
      patch(target, 'componentWillUnmount', false);
      patch(target, 'componentDidUpdate', false);
      if (!target.shouldComponentUpdate) {
          target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
      }
  }
  // TODO: support injection somehow as well?
  var Observer = observer(function (ref) {
      var children = ref.children;

      return children();
  });
  Observer.displayName = 'Observer';
  var proxiedInjectorProps = {
      isMobxInjector: {
          configurable: true,
          enumerable: true,
          value: true,
          writable: true
      }
  };
  /**
   * Store Injection
   */
  function createStoreInjector(grabStoresFn, component, injectNames) {
      var displayName = 'inject-' + (component.displayName || component.name || (component.constructor && component.constructor.name) || 'Unknown');
      if (injectNames) {
          displayName += '-with-' + injectNames;
      }
      var Injector = /*@__PURE__*/(function (Component) {
          function Injector(props, context) {
              Component.call(this, props, context);
              this.storeRef = this.storeRef.bind(this);
          }

          if ( Component ) Injector.__proto__ = Component;
          Injector.prototype = Object.create( Component && Component.prototype );
          Injector.prototype.constructor = Injector;
          Injector.prototype.storeRef = function storeRef (instance) {
              this.wrappedInstance = instance;
          };
          Injector.prototype.render = function render (props, _state, context) {
              // Optimization: it might be more efficient to apply the mapper function *outside* the render method
              // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
              // See this test: 'using a custom injector is not too reactive' in inject.js
              var newProps = {};
              var key;
              for (key in props) {
                  newProps[key] = props[key];
              }
              var additionalProps = grabStoresFn(context.mobxStores || {}, newProps, context) || {};
              for (key in additionalProps) {
                  newProps[key] = additionalProps[key];
              }
              return inferno.createComponentVNode(2 /* ComponentUnknown */, component, newProps, null, isStateless(component) ? null : this.storeRef);
          };

          return Injector;
      }(inferno.Component));
      Injector.displayName = displayName;
      Injector.isMobxInjector = false;
      // Static fields from component should be visible on the generated Injector
      hoistNonReactStatics__default['default'](Injector, component);
      Injector.wrappedComponent = component;
      Object.defineProperties(Injector, proxiedInjectorProps);
      return Injector;
  }
  function grabStoresByName(storeNames) {
      return function (baseStores, nextProps) {
          for (var i = 0, len = storeNames.length; i < len; ++i) {
              var storeName = storeNames[i];
              if (!(storeName in nextProps)) {
                  // Development warning
                  {
                      if (!(storeName in baseStores)) {
                          throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
                      }
                  }
                  nextProps[storeName] = baseStores[storeName];
              }
          }
          return nextProps;
      };
  }
  function inject( /* fn(stores, nextProps) or ...storeNames */) {
      var arguments$1 = arguments;

      var grabStoresFn;
      if (typeof arguments[0] === 'function') {
          grabStoresFn = arguments[0];
          return function (componentClass) {
              var injected = createStoreInjector(grabStoresFn, componentClass);
              injected.isMobxInjector = false; // supress warning
              // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
              // see #111
              injected = observer(injected);
              injected.isMobxInjector = true; // restore warning
              return injected;
          };
      }
      else {
          var storeNames = [];
          for (var i = 0; i < arguments.length; ++i) {
              storeNames.push(arguments$1[i]);
          }
          grabStoresFn = grabStoresByName(storeNames);
          return function (componentClass) {
              return createStoreInjector(grabStoresFn, componentClass, storeNames.join('-'));
          };
      }
  }

  var specialKeys = {
      children: true,
      key: true,
      ref: true
  };
  var Provider = /*@__PURE__*/(function (Component) {
      function Provider () {
          Component.apply(this, arguments);
      }

      if ( Component ) Provider.__proto__ = Component;
      Provider.prototype = Object.create( Component && Component.prototype );
      Provider.prototype.constructor = Provider;

      Provider.prototype.render = function render (props) {
          return props.children;
      };
      Provider.prototype.getChildContext = function getChildContext () {
          var stores = {};
          // inherit stores
          var props = this.props;
          var baseStores = this.context.mobxStores;
          if (baseStores) {
              for (var key in baseStores) {
                  stores[key] = baseStores[key];
              }
          }
          // add own stores
          for (var key$1 in props) {
              if (specialKeys[key$1] === void 0 && key$1 !== 'suppressChangedStoreWarning') {
                  stores[key$1] = props[key$1];
              }
          }
          return {
              mobxStores: stores
          };
      };

      return Provider;
  }(inferno.Component));
  // Development warning
  {
      Provider.prototype.componentWillReceiveProps = function (nextProps) {
          // Maybe this warning is too aggressive?
          if (Object.keys(nextProps).length !== Object.keys(this.props).length) {
              warning('MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children');
          }
          if (!nextProps.suppressChangedStoreWarning) {
              for (var key in nextProps) {
                  if (specialKeys[key] === void 0 && this.props[key] !== nextProps[key]) {
                      warning("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
                  }
              }
          }
      };
  }

  // THIS IS PORT OF AWESOME MOBX-REACT to INFERNO
  // LAST POINT OF PORT
  // https://github.com/mobxjs/mobx-react/commit/a1e05d93efd4d9ac819e865e96af138bc6d2ad75
  var onError = function (fn) { return errorsReporter.on(fn); };

  exports.EventEmitter = EventEmitter;
  exports.Observer = Observer;
  exports.Provider = Provider;
  exports.errorsReporter = errorsReporter;
  exports.inject = inject;
  exports.observer = observer;
  exports.onError = onError;
  exports.renderReporter = renderReporter;
  exports.trackComponents = trackComponents;
  exports.useStaticRendering = useStaticRendering;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
