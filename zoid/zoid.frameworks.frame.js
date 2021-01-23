!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("zoid", [], factory) : "object" == typeof exports ? exports.zoid = factory() : root.zoid = factory();
}("undefined" != typeof self ? self : this, (function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        };
        __webpack_require__.t = function(value, mode) {
            1 & mode && (value = __webpack_require__(value));
            if (8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            });
            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return {}.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 0);
    }([ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "PopupOpenError", (function() {
            return dom_PopupOpenError;
        }));
        __webpack_require__.d(__webpack_exports__, "create", (function() {
            return create;
        }));
        __webpack_require__.d(__webpack_exports__, "destroy", (function() {
            return component_destroy;
        }));
        __webpack_require__.d(__webpack_exports__, "destroyComponents", (function() {
            return destroyComponents;
        }));
        __webpack_require__.d(__webpack_exports__, "destroyAll", (function() {
            return destroyAll;
        }));
        __webpack_require__.d(__webpack_exports__, "PROP_TYPE", (function() {
            return PROP_TYPE;
        }));
        __webpack_require__.d(__webpack_exports__, "PROP_SERIALIZATION", (function() {
            return PROP_SERIALIZATION;
        }));
        __webpack_require__.d(__webpack_exports__, "CONTEXT", (function() {
            return CONTEXT;
        }));
        __webpack_require__.d(__webpack_exports__, "EVENT", (function() {
            return EVENT;
        }));
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        function _extends() {
            return (_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        function utils_isPromise(item) {
            try {
                if (!item) return !1;
                if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
                if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
                var _toString = {}.toString;
                if (_toString) {
                    var name = _toString.call(item);
                    if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                }
                if ("function" == typeof item.then) return !0;
            } catch (err) {
                return !1;
            }
            return !1;
        }
        var dispatchedErrors = [];
        var possiblyUnhandledPromiseHandlers = [];
        var activeCount = 0;
        var flushPromise;
        function flushActive() {
            if (!activeCount && flushPromise) {
                var promise = flushPromise;
                flushPromise = null;
                promise.resolve();
            }
        }
        function startActive() {
            activeCount += 1;
        }
        function endActive() {
            activeCount -= 1;
            flushActive();
        }
        var promise_ZalgoPromise = function() {
            function ZalgoPromise(handler) {
                var _this = this;
                this.resolved = void 0;
                this.rejected = void 0;
                this.errorHandled = void 0;
                this.value = void 0;
                this.error = void 0;
                this.handlers = void 0;
                this.dispatching = void 0;
                this.stack = void 0;
                this.resolved = !1;
                this.rejected = !1;
                this.errorHandled = !1;
                this.handlers = [];
                if (handler) {
                    var _result;
                    var _error;
                    var resolved = !1;
                    var rejected = !1;
                    var isAsync = !1;
                    startActive();
                    try {
                        handler((function(res) {
                            if (isAsync) _this.resolve(res); else {
                                resolved = !0;
                                _result = res;
                            }
                        }), (function(err) {
                            if (isAsync) _this.reject(err); else {
                                rejected = !0;
                                _error = err;
                            }
                        }));
                    } catch (err) {
                        endActive();
                        this.reject(err);
                        return;
                    }
                    endActive();
                    isAsync = !0;
                    resolved ? this.resolve(_result) : rejected && this.reject(_error);
                }
            }
            var _proto = ZalgoPromise.prototype;
            _proto.resolve = function(result) {
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                this.resolved = !0;
                this.value = result;
                this.dispatch();
                return this;
            };
            _proto.reject = function(error) {
                var _this2 = this;
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                if (!error) {
                    var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                    error = new Error("Expected reject to be called with Error, got " + _err);
                }
                this.rejected = !0;
                this.error = error;
                this.errorHandled || setTimeout((function() {
                    _this2.errorHandled || function(err, promise) {
                        if (-1 === dispatchedErrors.indexOf(err)) {
                            dispatchedErrors.push(err);
                            setTimeout((function() {
                                throw err;
                            }), 1);
                            for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                        }
                    }(error, _this2);
                }), 1);
                this.dispatch();
                return this;
            };
            _proto.asyncReject = function(error) {
                this.errorHandled = !0;
                this.reject(error);
                return this;
            };
            _proto.dispatch = function() {
                var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                if (!this.dispatching && (resolved || rejected)) {
                    this.dispatching = !0;
                    startActive();
                    var chain = function(firstPromise, secondPromise) {
                        return firstPromise.then((function(res) {
                            secondPromise.resolve(res);
                        }), (function(err) {
                            secondPromise.reject(err);
                        }));
                    };
                    for (var i = 0; i < handlers.length; i++) {
                        var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                        var _result2 = void 0;
                        if (resolved) try {
                            _result2 = onSuccess ? onSuccess(this.value) : this.value;
                        } catch (err) {
                            promise.reject(err);
                            continue;
                        } else if (rejected) {
                            if (!onError) {
                                promise.reject(this.error);
                                continue;
                            }
                            try {
                                _result2 = onError(this.error);
                            } catch (err) {
                                promise.reject(err);
                                continue;
                            }
                        }
                        if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                            _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error);
                            _result2.errorHandled = !0;
                        } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                    }
                    handlers.length = 0;
                    this.dispatching = !1;
                    endActive();
                }
            };
            _proto.then = function(onSuccess, onError) {
                if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                var promise = new ZalgoPromise;
                this.handlers.push({
                    promise: promise,
                    onSuccess: onSuccess,
                    onError: onError
                });
                this.errorHandled = !0;
                this.dispatch();
                return promise;
            };
            _proto.catch = function(onError) {
                return this.then(void 0, onError);
            };
            _proto.finally = function(onFinally) {
                if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                return this.then((function(result) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        return result;
                    }));
                }), (function(err) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        throw err;
                    }));
                }));
            };
            _proto.timeout = function(time, err) {
                var _this3 = this;
                if (this.resolved || this.rejected) return this;
                var timeout = setTimeout((function() {
                    _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
                }), time);
                return this.then((function(result) {
                    clearTimeout(timeout);
                    return result;
                }));
            };
            _proto.toPromise = function() {
                if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                return Promise.resolve(this);
            };
            ZalgoPromise.resolve = function(value) {
                return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                    return value.then(resolve, reject);
                })) : (new ZalgoPromise).resolve(value);
            };
            ZalgoPromise.reject = function(error) {
                return (new ZalgoPromise).reject(error);
            };
            ZalgoPromise.asyncReject = function(error) {
                return (new ZalgoPromise).asyncReject(error);
            };
            ZalgoPromise.all = function(promises) {
                var promise = new ZalgoPromise;
                var count = promises.length;
                var results = [];
                if (!count) {
                    promise.resolve(results);
                    return promise;
                }
                var chain = function(i, firstPromise, secondPromise) {
                    return firstPromise.then((function(res) {
                        results[i] = res;
                        0 == (count -= 1) && promise.resolve(results);
                    }), (function(err) {
                        secondPromise.reject(err);
                    }));
                };
                for (var i = 0; i < promises.length; i++) {
                    var prom = promises[i];
                    if (prom instanceof ZalgoPromise) {
                        if (prom.resolved) {
                            results[i] = prom.value;
                            count -= 1;
                            continue;
                        }
                    } else if (!utils_isPromise(prom)) {
                        results[i] = prom;
                        count -= 1;
                        continue;
                    }
                    chain(i, ZalgoPromise.resolve(prom), promise);
                }
                0 === count && promise.resolve(results);
                return promise;
            };
            ZalgoPromise.hash = function(promises) {
                var result = {};
                var awaitPromises = [];
                var _loop = function(key) {
                    if (promises.hasOwnProperty(key)) {
                        var value = promises[key];
                        utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                            result[key] = res;
                        }))) : result[key] = value;
                    }
                };
                for (var key in promises) _loop(key);
                return ZalgoPromise.all(awaitPromises).then((function() {
                    return result;
                }));
            };
            ZalgoPromise.map = function(items, method) {
                return ZalgoPromise.all(items.map(method));
            };
            ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                return function(handler) {
                    possiblyUnhandledPromiseHandlers.push(handler);
                    return {
                        cancel: function() {
                            possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                        }
                    };
                }(handler);
            };
            ZalgoPromise.try = function(method, context, args) {
                if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                var result;
                startActive();
                try {
                    result = method.apply(context, args || []);
                } catch (err) {
                    endActive();
                    return ZalgoPromise.reject(err);
                }
                endActive();
                return ZalgoPromise.resolve(result);
            };
            ZalgoPromise.delay = function(_delay) {
                return new ZalgoPromise((function(resolve) {
                    setTimeout(resolve, _delay);
                }));
            };
            ZalgoPromise.isPromise = function(value) {
                return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
            };
            ZalgoPromise.flush = function() {
                return function(Zalgo) {
                    var promise = flushPromise = flushPromise || new Zalgo;
                    flushActive();
                    return promise;
                }(ZalgoPromise);
            };
            return ZalgoPromise;
        }();
        function isRegex(item) {
            return "[object RegExp]" === {}.toString.call(item);
        }
        var WINDOW_TYPE = {
            IFRAME: "iframe",
            POPUP: "popup"
        };
        var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
        function isAboutProtocol(win) {
            void 0 === win && (win = window);
            return "about:" === win.location.protocol;
        }
        function utils_getParent(win) {
            void 0 === win && (win = window);
            if (win) try {
                if (win.parent && win.parent !== win) return win.parent;
            } catch (err) {}
        }
        function getOpener(win) {
            void 0 === win && (win = window);
            if (win && !utils_getParent(win)) try {
                return win.opener;
            } catch (err) {}
        }
        function canReadFromWindow(win) {
            try {
                return !0;
            } catch (err) {}
            return !1;
        }
        function getActualDomain(win) {
            void 0 === win && (win = window);
            var location = win.location;
            if (!location) throw new Error("Can not read window location");
            var protocol = location.protocol;
            if (!protocol) throw new Error("Can not read window protocol");
            if ("file:" === protocol) return "file://";
            if ("about:" === protocol) {
                var parent = utils_getParent(win);
                return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
            }
            var host = location.host;
            if (!host) throw new Error("Can not read window host");
            return protocol + "//" + host;
        }
        function getDomain(win) {
            void 0 === win && (win = window);
            var domain = getActualDomain(win);
            return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
        }
        function isSameDomain(win) {
            if (!function(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }(win)) return !1;
            try {
                if (win === window) return !0;
                if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                if (getDomain(window) === getDomain(win)) return !0;
            } catch (err) {}
            return !1;
        }
        function assertSameDomain(win) {
            if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
            return win;
        }
        function isAncestorParent(parent, child) {
            if (!parent || !child) return !1;
            var childParent = utils_getParent(child);
            return childParent ? childParent === parent : -1 !== function(win) {
                var result = [];
                try {
                    for (;win.parent !== win; ) {
                        result.push(win.parent);
                        win = win.parent;
                    }
                } catch (err) {}
                return result;
            }(child).indexOf(parent);
        }
        function getFrames(win) {
            var result = [];
            var frames;
            try {
                frames = win.frames;
            } catch (err) {
                frames = win;
            }
            var len;
            try {
                len = frames.length;
            } catch (err) {}
            if (0 === len) return result;
            if (len) {
                for (var i = 0; i < len; i++) {
                    var frame = void 0;
                    try {
                        frame = frames[i];
                    } catch (err) {
                        continue;
                    }
                    result.push(frame);
                }
                return result;
            }
            for (var _i = 0; _i < 100; _i++) {
                var _frame = void 0;
                try {
                    _frame = frames[_i];
                } catch (err) {
                    return result;
                }
                if (!_frame) return result;
                result.push(_frame);
            }
            return result;
        }
        function getAllChildFrames(win) {
            var result = [];
            for (var _i3 = 0, _getFrames2 = getFrames(win); _i3 < _getFrames2.length; _i3++) {
                var frame = _getFrames2[_i3];
                result.push(frame);
                for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame); _i5 < _getAllChildFrames2.length; _i5++) result.push(_getAllChildFrames2[_i5]);
            }
            return result;
        }
        function getTop(win) {
            void 0 === win && (win = window);
            try {
                if (win.top) return win.top;
            } catch (err) {}
            if (utils_getParent(win) === win) return win;
            try {
                if (isAncestorParent(window, win) && window.top) return window.top;
            } catch (err) {}
            try {
                if (isAncestorParent(win, window) && window.top) return window.top;
            } catch (err) {}
            for (var _i7 = 0, _getAllChildFrames4 = getAllChildFrames(win); _i7 < _getAllChildFrames4.length; _i7++) {
                var frame = _getAllChildFrames4[_i7];
                try {
                    if (frame.top) return frame.top;
                } catch (err) {}
                if (utils_getParent(frame) === frame) return frame;
            }
        }
        function getAllFramesInWindow(win) {
            var top = getTop(win);
            if (!top) throw new Error("Can not determine top window");
            var result = [].concat(getAllChildFrames(top), [ top ]);
            -1 === result.indexOf(win) && (result = [].concat(result, [ win ], getAllChildFrames(win)));
            return result;
        }
        var iframeWindows = [];
        var iframeFrames = [];
        function isWindowClosed(win, allowMock) {
            void 0 === allowMock && (allowMock = !0);
            try {
                if (win === window) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if (!win) return !0;
            } catch (err) {
                return !0;
            }
            try {
                if (win.closed) return !0;
            } catch (err) {
                return !err || err.message !== IE_WIN_ACCESS_ERROR;
            }
            if (allowMock && isSameDomain(win)) try {
                if (win.mockclosed) return !0;
            } catch (err) {}
            try {
                if (!win.parent || !win.top) return !0;
            } catch (err) {}
            var iframeIndex = function(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }(iframeWindows, win);
            if (-1 !== iframeIndex) {
                var frame = iframeFrames[iframeIndex];
                if (frame && function(frame) {
                    if (!frame.contentWindow) return !0;
                    if (!frame.parentNode) return !0;
                    var doc = frame.ownerDocument;
                    if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                        var parent = frame;
                        for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                        if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                    }
                    return !1;
                }(frame)) return !0;
            }
            return !1;
        }
        function getAncestor(win) {
            void 0 === win && (win = window);
            return getOpener(win = win || window) || utils_getParent(win) || void 0;
        }
        function anyMatch(collection1, collection2) {
            for (var _i17 = 0; _i17 < collection1.length; _i17++) {
                var item1 = collection1[_i17];
                for (var _i19 = 0; _i19 < collection2.length; _i19++) if (item1 === collection2[_i19]) return !0;
            }
            return !1;
        }
        function getDistanceFromTop(win) {
            void 0 === win && (win = window);
            var distance = 0;
            var parent = win;
            for (;parent; ) (parent = utils_getParent(parent)) && (distance += 1);
            return distance;
        }
        function isSameTopWindow(win1, win2) {
            var top1 = getTop(win1) || win1;
            var top2 = getTop(win2) || win2;
            try {
                if (top1 && top2) return top1 === top2;
            } catch (err) {}
            var allFrames1 = getAllFramesInWindow(win1);
            var allFrames2 = getAllFramesInWindow(win2);
            if (anyMatch(allFrames1, allFrames2)) return !0;
            var opener1 = getOpener(top1);
            var opener2 = getOpener(top2);
            return opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2) || opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1), 
            !1;
        }
        function matchDomain(pattern, origin) {
            if ("string" == typeof pattern) {
                if ("string" == typeof origin) return "*" === pattern || origin === pattern;
                if (isRegex(origin)) return !1;
                if (Array.isArray(origin)) return !1;
            }
            return isRegex(pattern) ? isRegex(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !isRegex(origin) && pattern.some((function(subpattern) {
                return matchDomain(subpattern, origin);
            })));
        }
        function getDomainFromUrl(url) {
            return url.match(/^(https?|mock|file):\/\//) ? url.split("/").slice(0, 3).join("/") : getDomain();
        }
        function onCloseWindow(win, callback, delay, maxtime) {
            void 0 === delay && (delay = 1e3);
            void 0 === maxtime && (maxtime = 1 / 0);
            var timeout;
            !function check() {
                if (isWindowClosed(win)) {
                    timeout && clearTimeout(timeout);
                    return callback();
                }
                if (maxtime <= 0) clearTimeout(timeout); else {
                    maxtime -= delay;
                    timeout = setTimeout(check, delay);
                }
            }();
            return {
                cancel: function() {
                    timeout && clearTimeout(timeout);
                }
            };
        }
        function isWindow(obj) {
            try {
                if (obj === window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if ("[object Window]" === {}.toString.call(obj)) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (window.Window && obj instanceof window.Window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.self === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.parent === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.top === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
            } catch (err) {}
            return !1;
        }
        function closeWindow(win) {
            try {
                win.close();
            } catch (err) {}
        }
        function util_safeIndexOf(collection, item) {
            for (var i = 0; i < collection.length; i++) try {
                if (collection[i] === item) return i;
            } catch (err) {}
            return -1;
        }
        var weakmap_CrossDomainSafeWeakMap = function() {
            function CrossDomainSafeWeakMap() {
                this.name = void 0;
                this.weakmap = void 0;
                this.keys = void 0;
                this.values = void 0;
                this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
                if (function() {
                    if ("undefined" == typeof WeakMap) return !1;
                    if (void 0 === Object.freeze) return !1;
                    try {
                        var testWeakMap = new WeakMap;
                        var testKey = {};
                        Object.freeze(testKey);
                        testWeakMap.set(testKey, "__testvalue__");
                        return "__testvalue__" === testWeakMap.get(testKey);
                    } catch (err) {
                        return !1;
                    }
                }()) try {
                    this.weakmap = new WeakMap;
                } catch (err) {}
                this.keys = [];
                this.values = [];
            }
            var _proto = CrossDomainSafeWeakMap.prototype;
            _proto._cleanupClosedWindows = function() {
                var weakmap = this.weakmap;
                var keys = this.keys;
                for (var i = 0; i < keys.length; i++) {
                    var value = keys[i];
                    if (isWindow(value) && isWindowClosed(value)) {
                        if (weakmap) try {
                            weakmap.delete(value);
                        } catch (err) {}
                        keys.splice(i, 1);
                        this.values.splice(i, 1);
                        i -= 1;
                    }
                }
            };
            _proto.isSafeToReadWrite = function(key) {
                return !isWindow(key);
            };
            _proto.set = function(key, value) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.set(key, value);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var name = this.name;
                    var entry = key[name];
                    entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                        value: [ key, value ],
                        writable: !0
                    });
                    return;
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var values = this.values;
                var index = util_safeIndexOf(keys, key);
                if (-1 === index) {
                    keys.push(key);
                    values.push(value);
                } else values[index] = value;
            };
            _proto.get = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return weakmap.get(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return entry && entry[0] === key ? entry[1] : void 0;
                } catch (err) {}
                this._cleanupClosedWindows();
                var index = util_safeIndexOf(this.keys, key);
                if (-1 !== index) return this.values[index];
            };
            _proto.delete = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.delete(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var index = util_safeIndexOf(keys, key);
                if (-1 !== index) {
                    keys.splice(index, 1);
                    this.values.splice(index, 1);
                }
            };
            _proto.has = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return !0;
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return !(!entry || entry[0] !== key);
                } catch (err) {}
                this._cleanupClosedWindows();
                return -1 !== util_safeIndexOf(this.keys, key);
            };
            _proto.getOrSet = function(key, getter) {
                if (this.has(key)) return this.get(key);
                var value = getter();
                this.set(key, value);
                return value;
            };
            return CrossDomainSafeWeakMap;
        }();
        function _getPrototypeOf(o) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
        }
        function _setPrototypeOf(o, p) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                o.__proto__ = p;
                return o;
            })(o, p);
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                return !0;
            } catch (e) {
                return !1;
            }
        }
        function construct_construct(Parent, args, Class) {
            return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
                var a = [ null ];
                a.push.apply(a, args);
                var instance = new (Function.bind.apply(Parent, a));
                Class && _setPrototypeOf(instance, Class.prototype);
                return instance;
            }).apply(null, arguments);
        }
        function wrapNativeSuper_wrapNativeSuper(Class) {
            var _cache = "function" == typeof Map ? new Map : void 0;
            return (wrapNativeSuper_wrapNativeSuper = function(Class) {
                if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
                var fn;
                if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== _cache) {
                    if (_cache.has(Class)) return _cache.get(Class);
                    _cache.set(Class, Wrapper);
                }
                function Wrapper() {
                    return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
                }
                Wrapper.prototype = Object.create(Class.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                return _setPrototypeOf(Wrapper, Class);
            })(Class);
        }
        function getFunctionName(fn) {
            return fn.name || fn.__name__ || fn.displayName || "anonymous";
        }
        function setFunctionName(fn, name) {
            try {
                delete fn.name;
                fn.name = name;
            } catch (err) {}
            fn.__name__ = fn.displayName = name;
            return fn;
        }
        function base64encode(str) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            })));
            if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64");
            throw new Error("Can not find window.btoa or Buffer");
        }
        function uniqueID() {
            var chars = "0123456789abcdef";
            return "xxxxxxxxxx".replace(/./g, (function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        }
        var objectIDs;
        function serializeArgs(args) {
            try {
                return JSON.stringify([].slice.call(args), (function(subkey, val) {
                    return "function" == typeof val ? "memoize[" + function(obj) {
                        objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                        if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                        var uid = objectIDs.get(obj);
                        if (!uid) {
                            uid = typeof obj + ":" + uniqueID();
                            objectIDs.set(obj, uid);
                        }
                        return uid;
                    }(val) + "]" : val;
                }));
            } catch (err) {
                throw new Error("Arguments not serializable -- can not be used to memoize");
            }
        }
        function getEmptyObject() {
            return {};
        }
        var memoizeGlobalIndex = 0;
        var memoizeGlobalIndexValidFrom = 0;
        function memoize(method, options) {
            void 0 === options && (options = {});
            var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
            var simpleCache;
            var thisCache;
            var memoizeIndex = memoizeGlobalIndex;
            memoizeGlobalIndex += 1;
            var memoizedFunction = function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                    simpleCache = null;
                    thisCache = null;
                    memoizeIndex = memoizeGlobalIndex;
                    memoizeGlobalIndex += 1;
                }
                var cache;
                cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
                var cacheKey = serializeArgs(args);
                var cacheResult = cache[cacheKey];
                if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                    delete cache[cacheKey];
                    cacheResult = null;
                }
                if (cacheResult) return cacheResult.value;
                var time = Date.now();
                var value = method.apply(this, arguments);
                cache[cacheKey] = {
                    time: time,
                    value: value
                };
                return value;
            };
            memoizedFunction.reset = function() {
                simpleCache = null;
                thisCache = null;
            };
            return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
        }
        memoize.clear = function() {
            memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
        };
        function memoizePromise(method) {
            var cache = {};
            function memoizedPromiseFunction() {
                var _arguments = arguments, _this = this;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                var key = serializeArgs(args);
                if (cache.hasOwnProperty(key)) return cache[key];
                cache[key] = promise_ZalgoPromise.try((function() {
                    return method.apply(_this, _arguments);
                })).finally((function() {
                    delete cache[key];
                }));
                return cache[key];
            }
            memoizedPromiseFunction.reset = function() {
                cache = {};
            };
            return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
        }
        function inlineMemoize(method, logic, args) {
            void 0 === args && (args = []);
            var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
            var key = serializeArgs(args);
            return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
        }
        function src_util_noop() {}
        function once(method) {
            var called = !1;
            return setFunctionName((function() {
                if (!called) {
                    called = !0;
                    return method.apply(this, arguments);
                }
            }), getFunctionName(method) + "::once");
        }
        function stringifyError(err, level) {
            void 0 === level && (level = 1);
            if (level >= 3) return "stringifyError stack overflow";
            try {
                if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
                if ("string" == typeof err) return err;
                if (err instanceof Error) {
                    var stack = err && err.stack;
                    var message = err && err.message;
                    if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                    if (stack) return stack;
                    if (message) return message;
                }
                return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
            } catch (newErr) {
                return "Error while stringifying error: " + stringifyError(newErr, level + 1);
            }
        }
        function stringify(item) {
            return "string" == typeof item ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : {}.toString.call(item);
        }
        function extend(obj, source) {
            if (!source) return obj;
            if (Object.assign) return Object.assign(obj, source);
            for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
            return obj;
        }
        memoize((function(obj) {
            if (Object.values) return Object.values(obj);
            var result = [];
            for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
            return result;
        }));
        function identity(item) {
            return item;
        }
        function safeInterval(method, time) {
            var timeout;
            !function loop() {
                timeout = setTimeout((function() {
                    method();
                    loop();
                }), time);
            }();
            return {
                cancel: function() {
                    clearTimeout(timeout);
                }
            };
        }
        function defineLazyProp(obj, key, getter) {
            if (Array.isArray(obj)) {
                if ("number" != typeof key) throw new TypeError("Array key must be number");
            } else if ("object" == typeof obj && null !== obj && "string" != typeof key) throw new TypeError("Object key must be string");
            Object.defineProperty(obj, key, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    delete obj[key];
                    var value = getter();
                    obj[key] = value;
                    return value;
                },
                set: function(value) {
                    delete obj[key];
                    obj[key] = value;
                }
            });
        }
        function arrayFrom(item) {
            return [].slice.call(item);
        }
        function isObjectObject(obj) {
            return "object" == typeof (item = obj) && null !== item && "[object Object]" === {}.toString.call(obj);
            var item;
        }
        function isPlainObject(obj) {
            if (!isObjectObject(obj)) return !1;
            var constructor = obj.constructor;
            if ("function" != typeof constructor) return !1;
            var prototype = constructor.prototype;
            return !!isObjectObject(prototype) && !!prototype.hasOwnProperty("isPrototypeOf");
        }
        function replaceObject(item, replacer, fullKey) {
            void 0 === fullKey && (fullKey = "");
            if (Array.isArray(item)) {
                var length = item.length;
                var result = [];
                var _loop2 = function(i) {
                    defineLazyProp(result, i, (function() {
                        var itemKey = fullKey ? fullKey + "." + i : "" + i;
                        var child = replacer(item[i], i, itemKey);
                        (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                        return child;
                    }));
                };
                for (var i = 0; i < length; i++) _loop2(i);
                return result;
            }
            if (isPlainObject(item)) {
                var _result = {};
                var _loop3 = function(key) {
                    if (!item.hasOwnProperty(key)) return "continue";
                    defineLazyProp(_result, key, (function() {
                        var itemKey = fullKey ? fullKey + "." + key : "" + key;
                        var child = replacer(item[key], key, itemKey);
                        (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                        return child;
                    }));
                };
                for (var key in item) _loop3(key);
                return _result;
            }
            throw new Error("Pass an object or array");
        }
        function isDefined(value) {
            return null != value;
        }
        function util_isRegex(item) {
            return "[object RegExp]" === {}.toString.call(item);
        }
        function util_getOrSet(obj, key, getter) {
            if (obj.hasOwnProperty(key)) return obj[key];
            var val = getter();
            obj[key] = val;
            return val;
        }
        function cleanup(obj) {
            var tasks = [];
            var cleaned = !1;
            var cleanErr;
            return {
                set: function(name, item) {
                    if (!cleaned) {
                        obj[name] = item;
                        this.register((function() {
                            delete obj[name];
                        }));
                    }
                    return item;
                },
                register: function(method) {
                    cleaned ? method(cleanErr) : tasks.push(once((function() {
                        return method(cleanErr);
                    })));
                },
                all: function(err) {
                    cleanErr = err;
                    var results = [];
                    cleaned = !0;
                    for (;tasks.length; ) {
                        var task = tasks.shift();
                        results.push(task());
                    }
                    return promise_ZalgoPromise.all(results).then(src_util_noop);
                }
            };
        }
        function assertExists(name, thing) {
            if (null == thing) throw new Error("Expected " + name + " to be present");
            return thing;
        }
        var util_ExtendableError = function(_Error) {
            _inheritsLoose(ExtendableError, _Error);
            function ExtendableError(message) {
                var _this6;
                (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
                    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
                return _this6;
            }
            return ExtendableError;
        }(wrapNativeSuper_wrapNativeSuper(Error));
        function isDocumentReady() {
            return Boolean(document.body) && "complete" === document.readyState;
        }
        function isDocumentInteractive() {
            return Boolean(document.body) && "interactive" === document.readyState;
        }
        function urlEncode(str) {
            return str.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B");
        }
        memoize((function() {
            return new promise_ZalgoPromise((function(resolve) {
                if (isDocumentReady() || isDocumentInteractive()) return resolve();
                var interval = setInterval((function() {
                    if (isDocumentReady() || isDocumentInteractive()) {
                        clearInterval(interval);
                        return resolve();
                    }
                }), 10);
            }));
        }));
        function parseQuery(queryString) {
            return inlineMemoize(parseQuery, (function() {
                var params = {};
                if (!queryString) return params;
                if (-1 === queryString.indexOf("=")) return params;
                for (var _i2 = 0, _queryString$split2 = queryString.split("&"); _i2 < _queryString$split2.length; _i2++) {
                    var pair = _queryString$split2[_i2];
                    (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                }
                return params;
            }), [ queryString ]);
        }
        function extendQuery(originalQuery, props) {
            void 0 === props && (props = {});
            return props && Object.keys(props).length ? function(obj) {
                void 0 === obj && (obj = {});
                return Object.keys(obj).filter((function(key) {
                    return "string" == typeof obj[key];
                })).map((function(key) {
                    return urlEncode(key) + "=" + urlEncode(obj[key]);
                })).join("&");
            }(_extends({}, parseQuery(originalQuery), props)) : originalQuery;
        }
        function appendChild(container, child) {
            container.appendChild(child);
        }
        function isElement(element) {
            return element instanceof window.Element || null !== element && "object" == typeof element && 1 === element.nodeType && "object" == typeof element.style && "object" == typeof element.ownerDocument;
        }
        function getElementSafe(id, doc) {
            void 0 === doc && (doc = document);
            return isElement(id) ? id : "string" == typeof id ? doc.querySelector(id) : void 0;
        }
        function elementReady(id) {
            return new promise_ZalgoPromise((function(resolve, reject) {
                var name = stringify(id);
                var el = getElementSafe(id);
                if (el) return resolve(el);
                if (isDocumentReady()) return reject(new Error("Document is ready and element " + name + " does not exist"));
                var interval = setInterval((function() {
                    if (el = getElementSafe(id)) {
                        clearInterval(interval);
                        return resolve(el);
                    }
                    if (isDocumentReady()) {
                        clearInterval(interval);
                        return reject(new Error("Document is ready and element " + name + " does not exist"));
                    }
                }), 10);
            }));
        }
        var dom_PopupOpenError = function(_ExtendableError) {
            _inheritsLoose(PopupOpenError, _ExtendableError);
            function PopupOpenError() {
                return _ExtendableError.apply(this, arguments) || this;
            }
            return PopupOpenError;
        }(util_ExtendableError);
        var awaitFrameLoadPromises;
        function awaitFrameLoad(frame) {
            if ((awaitFrameLoadPromises = awaitFrameLoadPromises || new weakmap_CrossDomainSafeWeakMap).has(frame)) {
                var _promise = awaitFrameLoadPromises.get(frame);
                if (_promise) return _promise;
            }
            var promise = new promise_ZalgoPromise((function(resolve, reject) {
                frame.addEventListener("load", (function() {
                    !function(frame) {
                        !function() {
                            for (var i = 0; i < iframeWindows.length; i++) {
                                var closed = !1;
                                try {
                                    closed = iframeWindows[i].closed;
                                } catch (err) {}
                                if (closed) {
                                    iframeFrames.splice(i, 1);
                                    iframeWindows.splice(i, 1);
                                }
                            }
                        }();
                        if (frame && frame.contentWindow) try {
                            iframeWindows.push(frame.contentWindow);
                            iframeFrames.push(frame);
                        } catch (err) {}
                    }(frame);
                    resolve(frame);
                }));
                frame.addEventListener("error", (function(err) {
                    frame.contentWindow ? resolve(frame) : reject(err);
                }));
            }));
            awaitFrameLoadPromises.set(frame, promise);
            return promise;
        }
        function awaitFrameWindow(frame) {
            return awaitFrameLoad(frame).then((function(loadedFrame) {
                if (!loadedFrame.contentWindow) throw new Error("Could not find window in iframe");
                return loadedFrame.contentWindow;
            }));
        }
        function dom_iframe(options, container) {
            void 0 === options && (options = {});
            var style = options.style || {};
            var frame = function(tag, options, container) {
                void 0 === tag && (tag = "div");
                void 0 === options && (options = {});
                tag = tag.toLowerCase();
                var element = document.createElement(tag);
                options.style && extend(element.style, options.style);
                options.class && (element.className = options.class.join(" "));
                options.id && element.setAttribute("id", options.id);
                if (options.attributes) for (var _i10 = 0, _Object$keys2 = Object.keys(options.attributes); _i10 < _Object$keys2.length; _i10++) {
                    var key = _Object$keys2[_i10];
                    element.setAttribute(key, options.attributes[key]);
                }
                options.styleSheet && function(el, styleText, doc) {
                    void 0 === doc && (doc = window.document);
                    el.styleSheet ? el.styleSheet.cssText = styleText : el.appendChild(doc.createTextNode(styleText));
                }(element, options.styleSheet);
                if (options.html) {
                    if ("iframe" === tag) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                    element.innerHTML = options.html;
                }
                return element;
            }("iframe", {
                attributes: _extends({
                    allowTransparency: "true"
                }, options.attributes || {}),
                style: _extends({
                    backgroundColor: "transparent",
                    border: "none"
                }, style),
                html: options.html,
                class: options.class
            });
            var isIE = window.navigator.userAgent.match(/MSIE|Edge/i);
            frame.hasAttribute("id") || frame.setAttribute("id", uniqueID());
            awaitFrameLoad(frame);
            container && function(id, doc) {
                void 0 === doc && (doc = document);
                var element = getElementSafe(id, doc);
                if (element) return element;
                throw new Error("Can not find element: " + stringify(id));
            }(container).appendChild(frame);
            (options.url || isIE) && frame.setAttribute("src", options.url || "about:blank");
            return frame;
        }
        function addEventListener(obj, event, handler) {
            obj.addEventListener(event, handler);
            return {
                cancel: function() {
                    obj.removeEventListener(event, handler);
                }
            };
        }
        function showElement(element) {
            element.style.setProperty("display", "");
        }
        function hideElement(element) {
            element.style.setProperty("display", "none", "important");
        }
        function destroyElement(element) {
            element && element.parentNode && element.parentNode.removeChild(element);
        }
        function isElementClosed(el) {
            return !(el && el.parentNode && el.ownerDocument && el.ownerDocument.documentElement && el.ownerDocument.documentElement.contains(el));
        }
        function onResize(el, handler, _temp) {
            var _ref2 = void 0 === _temp ? {} : _temp, _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$interval = _ref2.interval, interval = void 0 === _ref2$interval ? 100 : _ref2$interval, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win;
            var currentWidth = el.offsetWidth;
            var currentHeight = el.offsetHeight;
            var canceled = !1;
            handler({
                width: currentWidth,
                height: currentHeight
            });
            var check = function() {
                if (!canceled && function(el) {
                    return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
                }(el)) {
                    var newWidth = el.offsetWidth;
                    var newHeight = el.offsetHeight;
                    (width && newWidth !== currentWidth || height && newHeight !== currentHeight) && handler({
                        width: newWidth,
                        height: newHeight
                    });
                    currentWidth = newWidth;
                    currentHeight = newHeight;
                }
            };
            var observer;
            var timeout;
            win.addEventListener("resize", check);
            if (void 0 !== win.ResizeObserver) {
                (observer = new win.ResizeObserver(check)).observe(el);
                timeout = safeInterval(check, 10 * interval);
            } else if (void 0 !== win.MutationObserver) {
                (observer = new win.MutationObserver(check)).observe(el, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !1
                });
                timeout = safeInterval(check, 10 * interval);
            } else timeout = safeInterval(check, interval);
            return {
                cancel: function() {
                    canceled = !0;
                    observer.disconnect();
                    window.removeEventListener("resize", check);
                    timeout.cancel();
                }
            };
        }
        function isShadowElement(element) {
            for (;element.parentNode; ) element = element.parentNode;
            return "[object ShadowRoot]" === element.toString();
        }
        var currentScript = "undefined" != typeof document ? document.currentScript : null;
        var getCurrentScript = memoize((function() {
            if (currentScript) return currentScript;
            if (currentScript = function() {
                try {
                    var stack = function() {
                        try {
                            throw new Error("_");
                        } catch (err) {
                            return err.stack || "";
                        }
                    }();
                    var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                    var scriptLocation = stackDetails && stackDetails[1];
                    if (!scriptLocation) return;
                    for (var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++) {
                        var script = _Array$prototype$slic2[_i22];
                        if (script.src && script.src === scriptLocation) return script;
                    }
                } catch (err) {}
            }()) return currentScript;
            throw new Error("Can not determine current script");
        }));
        var currentUID = uniqueID();
        memoize((function() {
            var script;
            try {
                script = getCurrentScript();
            } catch (err) {
                return currentUID;
            }
            var uid = script.getAttribute("data-uid");
            if (uid && "string" == typeof uid) return uid;
            if ((uid = script.getAttribute("data-uid-auto")) && "string" == typeof uid) return uid;
            uid = uniqueID();
            script.setAttribute("data-uid-auto", uid);
            return uid;
        }));
        function toPx(val) {
            return function(val) {
                if ("number" == typeof val) return val;
                var match = val.match(/^([0-9]+)(px|%)$/);
                if (!match) throw new Error("Could not match css value from " + val);
                return parseInt(match[1], 10);
            }(val) + "px";
        }
        function toCSS(val) {
            return "number" == typeof val ? toPx(val) : "string" == typeof (str = val) && /^[0-9]+%$/.test(str) ? val : toPx(val);
            var str;
        }
        function global_getGlobal(win) {
            void 0 === win && (win = window);
            var globalKey = "__post_robot_10_0_42__";
            return win !== window ? win[globalKey] : win[globalKey] = win[globalKey] || {};
        }
        var getObj = function() {
            return {};
        };
        function globalStore(key, defStore) {
            void 0 === key && (key = "store");
            void 0 === defStore && (defStore = getObj);
            return util_getOrSet(global_getGlobal(), key, (function() {
                var store = defStore();
                return {
                    has: function(storeKey) {
                        return store.hasOwnProperty(storeKey);
                    },
                    get: function(storeKey, defVal) {
                        return store.hasOwnProperty(storeKey) ? store[storeKey] : defVal;
                    },
                    set: function(storeKey, val) {
                        store[storeKey] = val;
                        return val;
                    },
                    del: function(storeKey) {
                        delete store[storeKey];
                    },
                    getOrSet: function(storeKey, getter) {
                        return util_getOrSet(store, storeKey, getter);
                    },
                    reset: function() {
                        store = defStore();
                    },
                    keys: function() {
                        return Object.keys(store);
                    }
                };
            }));
        }
        var WildCard = function() {};
        function getWildcard() {
            var global = global_getGlobal();
            global.WINDOW_WILDCARD = global.WINDOW_WILDCARD || new WildCard;
            return global.WINDOW_WILDCARD;
        }
        function windowStore(key, defStore) {
            void 0 === key && (key = "store");
            void 0 === defStore && (defStore = getObj);
            return globalStore("windowStore").getOrSet(key, (function() {
                var winStore = new weakmap_CrossDomainSafeWeakMap;
                var getStore = function(win) {
                    return winStore.getOrSet(win, defStore);
                };
                return {
                    has: function(win) {
                        return getStore(win).hasOwnProperty(key);
                    },
                    get: function(win, defVal) {
                        var store = getStore(win);
                        return store.hasOwnProperty(key) ? store[key] : defVal;
                    },
                    set: function(win, val) {
                        getStore(win)[key] = val;
                        return val;
                    },
                    del: function(win) {
                        delete getStore(win)[key];
                    },
                    getOrSet: function(win, getter) {
                        return util_getOrSet(getStore(win), key, getter);
                    }
                };
            }));
        }
        function getInstanceID() {
            return globalStore("instance").getOrSet("instanceID", uniqueID);
        }
        function resolveHelloPromise(win, _ref) {
            var domain = _ref.domain;
            var helloPromises = windowStore("helloPromises");
            var existingPromise = helloPromises.get(win);
            existingPromise && existingPromise.resolve({
                domain: domain
            });
            var newPromise = promise_ZalgoPromise.resolve({
                domain: domain
            });
            helloPromises.set(win, newPromise);
            return newPromise;
        }
        function sayHello(win, _ref4) {
            return (0, _ref4.send)(win, "postrobot_hello", {
                instanceID: getInstanceID()
            }, {
                domain: "*",
                timeout: -1
            }).then((function(_ref5) {
                var origin = _ref5.origin, instanceID = _ref5.data.instanceID;
                resolveHelloPromise(win, {
                    domain: origin
                });
                return {
                    win: win,
                    domain: origin,
                    instanceID: instanceID
                };
            }));
        }
        function getWindowInstanceID(win, _ref6) {
            var send = _ref6.send;
            return windowStore("windowInstanceIDPromises").getOrSet(win, (function() {
                return sayHello(win, {
                    send: send
                }).then((function(_ref7) {
                    return _ref7.instanceID;
                }));
            }));
        }
        function markWindowKnown(win) {
            windowStore("knownWindows").set(win, !0);
        }
        function isSerializedType(item) {
            return "object" == typeof item && null !== item && "string" == typeof item.__type__;
        }
        function determineType(val) {
            return void 0 === val ? "undefined" : null === val ? "null" : Array.isArray(val) ? "array" : "function" == typeof val ? "function" : "object" == typeof val ? val instanceof Error ? "error" : "function" == typeof val.then ? "promise" : "[object RegExp]" === {}.toString.call(val) ? "regex" : "[object Date]" === {}.toString.call(val) ? "date" : "object" : "string" == typeof val ? "string" : "number" == typeof val ? "number" : "boolean" == typeof val ? "boolean" : void 0;
        }
        function serializeType(type, val) {
            return {
                __type__: type,
                __val__: val
            };
        }
        var _SERIALIZER;
        var SERIALIZER = ((_SERIALIZER = {}).function = function() {}, _SERIALIZER.error = function(_ref) {
            return serializeType("error", {
                message: _ref.message,
                stack: _ref.stack,
                code: _ref.code,
                data: _ref.data
            });
        }, _SERIALIZER.promise = function() {}, _SERIALIZER.regex = function(val) {
            return serializeType("regex", val.source);
        }, _SERIALIZER.date = function(val) {
            return serializeType("date", val.toJSON());
        }, _SERIALIZER.array = function(val) {
            return val;
        }, _SERIALIZER.object = function(val) {
            return val;
        }, _SERIALIZER.string = function(val) {
            return val;
        }, _SERIALIZER.number = function(val) {
            return val;
        }, _SERIALIZER.boolean = function(val) {
            return val;
        }, _SERIALIZER.null = function(val) {
            return val;
        }, _SERIALIZER);
        var defaultSerializers = {};
        var _DESERIALIZER;
        var DESERIALIZER = ((_DESERIALIZER = {}).function = function() {
            throw new Error("Function serialization is not implemented; nothing to deserialize");
        }, _DESERIALIZER.error = function(_ref2) {
            var stack = _ref2.stack, code = _ref2.code, data = _ref2.data;
            var error = new Error(_ref2.message);
            error.code = code;
            data && (error.data = data);
            error.stack = stack + "\n\n" + error.stack;
            return error;
        }, _DESERIALIZER.promise = function() {
            throw new Error("Promise serialization is not implemented; nothing to deserialize");
        }, _DESERIALIZER.regex = function(val) {
            return new RegExp(val);
        }, _DESERIALIZER.date = function(val) {
            return new Date(val);
        }, _DESERIALIZER.array = function(val) {
            return val;
        }, _DESERIALIZER.object = function(val) {
            return val;
        }, _DESERIALIZER.string = function(val) {
            return val;
        }, _DESERIALIZER.number = function(val) {
            return val;
        }, _DESERIALIZER.boolean = function(val) {
            return val;
        }, _DESERIALIZER.null = function(val) {
            return val;
        }, _DESERIALIZER);
        var defaultDeserializers = {};
        new promise_ZalgoPromise((function(resolve) {
            if (window.document && window.document.body) return resolve(window.document.body);
            var interval = setInterval((function() {
                if (window.document && window.document.body) {
                    clearInterval(interval);
                    return resolve(window.document.body);
                }
            }), 10);
        }));
        function cleanupProxyWindows() {
            var idToProxyWindow = globalStore("idToProxyWindow");
            for (var _i2 = 0, _idToProxyWindow$keys2 = idToProxyWindow.keys(); _i2 < _idToProxyWindow$keys2.length; _i2++) {
                var id = _idToProxyWindow$keys2[_i2];
                idToProxyWindow.get(id).shouldClean() && idToProxyWindow.del(id);
            }
        }
        function getSerializedWindow(winPromise, _ref) {
            var send = _ref.send, _ref$id = _ref.id, id = void 0 === _ref$id ? uniqueID() : _ref$id;
            var windowNamePromise = winPromise.then((function(win) {
                if (isSameDomain(win)) return assertSameDomain(win).name;
            }));
            var windowTypePromise = winPromise.then((function(window) {
                if (isWindowClosed(window)) throw new Error("Window is closed, can not determine type");
                return getOpener(window) ? WINDOW_TYPE.POPUP : WINDOW_TYPE.IFRAME;
            }));
            windowNamePromise.catch(src_util_noop);
            windowTypePromise.catch(src_util_noop);
            return {
                id: id,
                getType: function() {
                    return windowTypePromise;
                },
                getInstanceID: memoizePromise((function() {
                    return winPromise.then((function(win) {
                        return getWindowInstanceID(win, {
                            send: send
                        });
                    }));
                })),
                close: function() {
                    return winPromise.then(closeWindow);
                },
                getName: function() {
                    return winPromise.then((function(win) {
                        if (!isWindowClosed(win)) return isSameDomain(win) ? assertSameDomain(win).name : windowNamePromise;
                    }));
                },
                focus: function() {
                    return winPromise.then((function(win) {
                        win.focus();
                    }));
                },
                isClosed: function() {
                    return winPromise.then((function(win) {
                        return isWindowClosed(win);
                    }));
                },
                setLocation: function(href) {
                    return winPromise.then((function(win) {
                        var domain = window.location.protocol + "//" + window.location.host;
                        if (0 === href.indexOf("/")) href = "" + domain + href; else if (!href.match(/^https?:\/\//) && 0 !== href.indexOf(domain)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(href));
                        if (isSameDomain(win)) try {
                            if (win.location && "function" == typeof win.location.replace) {
                                win.location.replace(href);
                                return;
                            }
                        } catch (err) {}
                        win.location = href;
                    }));
                },
                setName: function(name) {
                    return winPromise.then((function(win) {
                        var sameDomain = isSameDomain(win);
                        var frame = function(win) {
                            if (isSameDomain(win)) return assertSameDomain(win).frameElement;
                            for (var _i21 = 0, _document$querySelect2 = document.querySelectorAll("iframe"); _i21 < _document$querySelect2.length; _i21++) {
                                var frame = _document$querySelect2[_i21];
                                if (frame && frame.contentWindow && frame.contentWindow === win) return frame;
                            }
                        }(win);
                        if (!sameDomain) throw new Error("Can not set name for cross-domain window: " + name);
                        assertSameDomain(win).name = name;
                        frame && frame.setAttribute("name", name);
                        windowNamePromise = promise_ZalgoPromise.resolve(name);
                    }));
                }
            };
        }
        var window_ProxyWindow = function() {
            function ProxyWindow(_ref2) {
                var send = _ref2.send, win = _ref2.win, serializedWindow = _ref2.serializedWindow;
                this.id = void 0;
                this.isProxyWindow = !0;
                this.serializedWindow = void 0;
                this.actualWindow = void 0;
                this.actualWindowPromise = void 0;
                this.send = void 0;
                this.name = void 0;
                this.actualWindowPromise = new promise_ZalgoPromise;
                this.serializedWindow = serializedWindow || getSerializedWindow(this.actualWindowPromise, {
                    send: send
                });
                globalStore("idToProxyWindow").set(this.getID(), this);
                win && this.setWindow(win, {
                    send: send
                });
            }
            var _proto = ProxyWindow.prototype;
            _proto.getID = function() {
                return this.serializedWindow.id;
            };
            _proto.getType = function() {
                return this.serializedWindow.getType();
            };
            _proto.isPopup = function() {
                return this.getType().then((function(type) {
                    return type === WINDOW_TYPE.POPUP;
                }));
            };
            _proto.setLocation = function(href) {
                var _this = this;
                return this.serializedWindow.setLocation(href).then((function() {
                    return _this;
                }));
            };
            _proto.getName = function() {
                return this.serializedWindow.getName();
            };
            _proto.setName = function(name) {
                var _this2 = this;
                return this.serializedWindow.setName(name).then((function() {
                    return _this2;
                }));
            };
            _proto.close = function() {
                var _this3 = this;
                return this.serializedWindow.close().then((function() {
                    return _this3;
                }));
            };
            _proto.focus = function() {
                var _this4 = this;
                var isPopupPromise = this.isPopup();
                var getNamePromise = this.getName();
                var reopenPromise = promise_ZalgoPromise.hash({
                    isPopup: isPopupPromise,
                    name: getNamePromise
                }).then((function(_ref3) {
                    var name = _ref3.name;
                    _ref3.isPopup && name && window.open("", name);
                }));
                var focusPromise = this.serializedWindow.focus();
                return promise_ZalgoPromise.all([ reopenPromise, focusPromise ]).then((function() {
                    return _this4;
                }));
            };
            _proto.isClosed = function() {
                return this.serializedWindow.isClosed();
            };
            _proto.getWindow = function() {
                return this.actualWindow;
            };
            _proto.setWindow = function(win, _ref4) {
                var send = _ref4.send;
                this.actualWindow = win;
                this.actualWindowPromise.resolve(this.actualWindow);
                this.serializedWindow = getSerializedWindow(this.actualWindowPromise, {
                    send: send,
                    id: this.getID()
                });
                windowStore("winToProxyWindow").set(win, this);
            };
            _proto.awaitWindow = function() {
                return this.actualWindowPromise;
            };
            _proto.matchWindow = function(win, _ref5) {
                var _this5 = this;
                var send = _ref5.send;
                return promise_ZalgoPromise.try((function() {
                    return _this5.actualWindow ? win === _this5.actualWindow : promise_ZalgoPromise.hash({
                        proxyInstanceID: _this5.getInstanceID(),
                        knownWindowInstanceID: getWindowInstanceID(win, {
                            send: send
                        })
                    }).then((function(_ref6) {
                        var match = _ref6.proxyInstanceID === _ref6.knownWindowInstanceID;
                        match && _this5.setWindow(win, {
                            send: send
                        });
                        return match;
                    }));
                }));
            };
            _proto.unwrap = function() {
                return this.actualWindow || this;
            };
            _proto.getInstanceID = function() {
                return this.serializedWindow.getInstanceID();
            };
            _proto.shouldClean = function() {
                return Boolean(this.actualWindow && isWindowClosed(this.actualWindow));
            };
            _proto.serialize = function() {
                return this.serializedWindow;
            };
            ProxyWindow.unwrap = function(win) {
                return ProxyWindow.isProxyWindow(win) ? win.unwrap() : win;
            };
            ProxyWindow.serialize = function(win, _ref7) {
                var send = _ref7.send;
                cleanupProxyWindows();
                return ProxyWindow.toProxyWindow(win, {
                    send: send
                }).serialize();
            };
            ProxyWindow.deserialize = function(serializedWindow, _ref8) {
                var send = _ref8.send;
                cleanupProxyWindows();
                return globalStore("idToProxyWindow").get(serializedWindow.id) || new ProxyWindow({
                    serializedWindow: serializedWindow,
                    send: send
                });
            };
            ProxyWindow.isProxyWindow = function(obj) {
                return Boolean(obj && !isWindow(obj) && obj.isProxyWindow);
            };
            ProxyWindow.toProxyWindow = function(win, _ref9) {
                var send = _ref9.send;
                cleanupProxyWindows();
                if (ProxyWindow.isProxyWindow(win)) return win;
                var actualWindow = win;
                return windowStore("winToProxyWindow").get(actualWindow) || new ProxyWindow({
                    win: actualWindow,
                    send: send
                });
            };
            return ProxyWindow;
        }();
        function addMethod(id, val, name, source, domain) {
            var methodStore = windowStore("methodStore");
            var proxyWindowMethods = globalStore("proxyWindowMethods");
            if (window_ProxyWindow.isProxyWindow(source)) proxyWindowMethods.set(id, {
                val: val,
                name: name,
                domain: domain,
                source: source
            }); else {
                proxyWindowMethods.del(id);
                methodStore.getOrSet(source, (function() {
                    return {};
                }))[id] = {
                    domain: domain,
                    name: name,
                    val: val,
                    source: source
                };
            }
        }
        function lookupMethod(source, id) {
            var methodStore = windowStore("methodStore");
            var proxyWindowMethods = globalStore("proxyWindowMethods");
            return methodStore.getOrSet(source, (function() {
                return {};
            }))[id] || proxyWindowMethods.get(id);
        }
        function function_serializeFunction(destination, domain, val, key, _ref3) {
            on = (_ref = {
                on: _ref3.on,
                send: _ref3.send
            }).on, send = _ref.send, globalStore("builtinListeners").getOrSet("functionCalls", (function() {
                return on("postrobot_method", {
                    domain: "*"
                }, (function(_ref2) {
                    var source = _ref2.source, origin = _ref2.origin, data = _ref2.data;
                    var id = data.id, name = data.name;
                    var meth = lookupMethod(source, id);
                    if (!meth) throw new Error("Could not find method '" + name + "' with id: " + data.id + " in " + getDomain(window));
                    var methodSource = meth.source, domain = meth.domain, val = meth.val;
                    return promise_ZalgoPromise.try((function() {
                        if (!matchDomain(domain, origin)) throw new Error("Method '" + data.name + "' domain " + JSON.stringify(util_isRegex(meth.domain) ? meth.domain.source : meth.domain) + " does not match origin " + origin + " in " + getDomain(window));
                        if (window_ProxyWindow.isProxyWindow(methodSource)) return methodSource.matchWindow(source, {
                            send: send
                        }).then((function(match) {
                            if (!match) throw new Error("Method call '" + data.name + "' failed - proxy window does not match source in " + getDomain(window));
                        }));
                    })).then((function() {
                        return val.apply({
                            source: source,
                            origin: origin
                        }, data.args);
                    }), (function(err) {
                        return promise_ZalgoPromise.try((function() {
                            if (val.onError) return val.onError(err);
                        })).then((function() {
                            err.stack && (err.stack = "Remote call to " + name + "(" + function(args) {
                                void 0 === args && (args = []);
                                return arrayFrom(args).map((function(arg) {
                                    return "string" == typeof arg ? "'" + arg + "'" : void 0 === arg ? "undefined" : null === arg ? "null" : "boolean" == typeof arg ? arg.toString() : Array.isArray(arg) ? "[ ... ]" : "object" == typeof arg ? "{ ... }" : "function" == typeof arg ? "() => { ... }" : "<" + typeof arg + ">";
                                })).join(", ");
                            }(data.args) + ") failed\n\n" + err.stack);
                            throw err;
                        }));
                    })).then((function(result) {
                        return {
                            result: result,
                            id: id,
                            name: name
                        };
                    }));
                }));
            }));
            var _ref, on, send;
            var id = val.__id__ || uniqueID();
            destination = window_ProxyWindow.unwrap(destination);
            var name = val.__name__ || val.name || key;
            "string" == typeof name && "function" == typeof name.indexOf && 0 === name.indexOf("anonymous::") && (name = name.replace("anonymous::", key + "::"));
            if (window_ProxyWindow.isProxyWindow(destination)) {
                addMethod(id, val, name, destination, domain);
                destination.awaitWindow().then((function(win) {
                    addMethod(id, val, name, win, domain);
                }));
            } else addMethod(id, val, name, destination, domain);
            return serializeType("cross_domain_function", {
                id: id,
                name: name
            });
        }
        function serializeMessage(destination, domain, obj, _ref) {
            var _serialize;
            var on = _ref.on, send = _ref.send;
            return function(obj, serializers) {
                void 0 === serializers && (serializers = defaultSerializers);
                var result = JSON.stringify(obj, (function(key) {
                    var val = this[key];
                    if (isSerializedType(this)) return val;
                    var type = determineType(val);
                    if (!type) return val;
                    var serializer = serializers[type] || SERIALIZER[type];
                    return serializer ? serializer(val, key) : val;
                }));
                return void 0 === result ? "undefined" : result;
            }(obj, ((_serialize = {}).promise = function(val, key) {
                return function(destination, domain, val, key, _ref) {
                    return serializeType("cross_domain_zalgo_promise", {
                        then: function_serializeFunction(destination, domain, (function(resolve, reject) {
                            return val.then(resolve, reject);
                        }), key, {
                            on: _ref.on,
                            send: _ref.send
                        })
                    });
                }(destination, domain, val, key, {
                    on: on,
                    send: send
                });
            }, _serialize.function = function(val, key) {
                return function_serializeFunction(destination, domain, val, key, {
                    on: on,
                    send: send
                });
            }, _serialize.object = function(val) {
                return isWindow(val) || window_ProxyWindow.isProxyWindow(val) ? serializeType("cross_domain_window", window_ProxyWindow.serialize(val, {
                    send: send
                })) : val;
            }, _serialize));
        }
        function deserializeMessage(source, origin, message, _ref2) {
            var _deserialize;
            var send = _ref2.send;
            return function(str, deserializers) {
                void 0 === deserializers && (deserializers = defaultDeserializers);
                if ("undefined" !== str) return JSON.parse(str, (function(key, val) {
                    if (isSerializedType(this)) return val;
                    var type;
                    var value;
                    if (isSerializedType(val)) {
                        type = val.__type__;
                        value = val.__val__;
                    } else {
                        type = determineType(val);
                        value = val;
                    }
                    if (!type) return value;
                    var deserializer = deserializers[type] || DESERIALIZER[type];
                    return deserializer ? deserializer(value, key) : value;
                }));
            }(message, ((_deserialize = {}).cross_domain_zalgo_promise = function(serializedPromise) {
                return function(source, origin, _ref2) {
                    return new promise_ZalgoPromise(_ref2.then);
                }(0, 0, serializedPromise);
            }, _deserialize.cross_domain_function = function(serializedFunction) {
                return function(source, origin, _ref4, _ref5) {
                    var id = _ref4.id, name = _ref4.name;
                    var send = _ref5.send;
                    var getDeserializedFunction = function(opts) {
                        void 0 === opts && (opts = {});
                        function crossDomainFunctionWrapper() {
                            var _arguments = arguments;
                            return window_ProxyWindow.toProxyWindow(source, {
                                send: send
                            }).awaitWindow().then((function(win) {
                                var meth = lookupMethod(win, id);
                                if (meth && meth.val !== crossDomainFunctionWrapper) return meth.val.apply({
                                    source: window,
                                    origin: getDomain()
                                }, _arguments);
                                var _args = [].slice.call(_arguments);
                                return opts.fireAndForget ? send(win, "postrobot_method", {
                                    id: id,
                                    name: name,
                                    args: _args
                                }, {
                                    domain: origin,
                                    fireAndForget: !0
                                }) : send(win, "postrobot_method", {
                                    id: id,
                                    name: name,
                                    args: _args
                                }, {
                                    domain: origin,
                                    fireAndForget: !1
                                }).then((function(res) {
                                    return res.data.result;
                                }));
                            })).catch((function(err) {
                                throw err;
                            }));
                        }
                        crossDomainFunctionWrapper.__name__ = name;
                        crossDomainFunctionWrapper.__origin__ = origin;
                        crossDomainFunctionWrapper.__source__ = source;
                        crossDomainFunctionWrapper.__id__ = id;
                        crossDomainFunctionWrapper.origin = origin;
                        return crossDomainFunctionWrapper;
                    };
                    var crossDomainFunctionWrapper = getDeserializedFunction();
                    crossDomainFunctionWrapper.fireAndForget = getDeserializedFunction({
                        fireAndForget: !0
                    });
                    return crossDomainFunctionWrapper;
                }(source, origin, serializedFunction, {
                    send: send
                });
            }, _deserialize.cross_domain_window = function(serializedWindow) {
                return window_ProxyWindow.deserialize(serializedWindow, {
                    send: send
                });
            }, _deserialize));
        }
        var SEND_MESSAGE_STRATEGIES = {};
        SEND_MESSAGE_STRATEGIES.postrobot_post_message = function(win, serializedMessage, domain) {
            0 === domain.indexOf("file:") && (domain = "*");
            win.postMessage(serializedMessage, domain);
        };
        SEND_MESSAGE_STRATEGIES.postrobot_global = function(win, serializedMessage) {
            if (!function(win) {
                return (win = win || window).navigator.mockUserAgent || win.navigator.userAgent;
            }(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
            if (!isSameDomain(win)) throw new Error("Post message through global disabled between different domain windows");
            if (!1 !== isSameTopWindow(window, win)) throw new Error("Can only use global to communicate between two different windows, not between frames");
            var foreignGlobal = global_getGlobal(win);
            if (!foreignGlobal) throw new Error("Can not find postRobot global on foreign window");
            foreignGlobal.receiveMessage({
                source: window,
                origin: getDomain(),
                data: serializedMessage
            });
        };
        function send_sendMessage(win, domain, message, _ref2) {
            var on = _ref2.on, send = _ref2.send;
            return promise_ZalgoPromise.try((function() {
                var domainBuffer = windowStore().getOrSet(win, (function() {
                    return {};
                }));
                domainBuffer.buffer = domainBuffer.buffer || [];
                domainBuffer.buffer.push(message);
                domainBuffer.flush = domainBuffer.flush || promise_ZalgoPromise.flush().then((function() {
                    if (isWindowClosed(win)) throw new Error("Window is closed");
                    var serializedMessage = serializeMessage(win, domain, ((_ref = {}).__post_robot_10_0_42__ = domainBuffer.buffer || [], 
                    _ref), {
                        on: on,
                        send: send
                    });
                    var _ref;
                    delete domainBuffer.buffer;
                    var strategies = Object.keys(SEND_MESSAGE_STRATEGIES);
                    var errors = [];
                    for (var _i2 = 0; _i2 < strategies.length; _i2++) {
                        var strategyName = strategies[_i2];
                        try {
                            SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
                        } catch (err) {
                            errors.push(err);
                        }
                    }
                    if (errors.length === strategies.length) throw new Error("All post-robot messaging strategies failed:\n\n" + errors.map((function(err, i) {
                        return i + ". " + stringifyError(err);
                    })).join("\n\n"));
                }));
                return domainBuffer.flush.then((function() {
                    delete domainBuffer.flush;
                }));
            })).then(src_util_noop);
        }
        function getResponseListener(hash) {
            return globalStore("responseListeners").get(hash);
        }
        function deleteResponseListener(hash) {
            globalStore("responseListeners").del(hash);
        }
        function isResponseListenerErrored(hash) {
            return globalStore("erroredResponseListeners").has(hash);
        }
        function getRequestListener(_ref) {
            var name = _ref.name, win = _ref.win, domain = _ref.domain;
            var requestListeners = windowStore("requestListeners");
            "*" === win && (win = null);
            "*" === domain && (domain = null);
            if (!name) throw new Error("Name required to get request listener");
            for (var _i4 = 0, _ref3 = [ win, getWildcard() ]; _i4 < _ref3.length; _i4++) {
                var winQualifier = _ref3[_i4];
                if (winQualifier) {
                    var nameListeners = requestListeners.get(winQualifier);
                    if (nameListeners) {
                        var domainListeners = nameListeners[name];
                        if (domainListeners) {
                            if (domain && "string" == typeof domain) {
                                if (domainListeners[domain]) return domainListeners[domain];
                                if (domainListeners.__domain_regex__) for (var _i6 = 0, _domainListeners$__DO2 = domainListeners.__domain_regex__; _i6 < _domainListeners$__DO2.length; _i6++) {
                                    var _domainListeners$__DO3 = _domainListeners$__DO2[_i6], listener = _domainListeners$__DO3.listener;
                                    if (matchDomain(_domainListeners$__DO3.regex, domain)) return listener;
                                }
                            }
                            if (domainListeners["*"]) return domainListeners["*"];
                        }
                    }
                }
            }
        }
        function handleRequest(source, origin, message, _ref) {
            var on = _ref.on, send = _ref.send;
            var options = getRequestListener({
                name: message.name,
                win: source,
                domain: origin
            });
            var logName = "postrobot_method" === message.name && message.data && "string" == typeof message.data.name ? message.data.name + "()" : message.name;
            function sendResponse(ack, data, error) {
                return promise_ZalgoPromise.flush().then((function() {
                    if (!message.fireAndForget && !isWindowClosed(source)) try {
                        return send_sendMessage(source, origin, {
                            id: uniqueID(),
                            origin: getDomain(window),
                            type: "postrobot_message_response",
                            hash: message.hash,
                            name: message.name,
                            ack: ack,
                            data: data,
                            error: error
                        }, {
                            on: on,
                            send: send
                        });
                    } catch (err) {
                        throw new Error("Send response message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                    }
                }));
            }
            return promise_ZalgoPromise.all([ promise_ZalgoPromise.flush().then((function() {
                if (!message.fireAndForget && !isWindowClosed(source)) try {
                    return send_sendMessage(source, origin, {
                        id: uniqueID(),
                        origin: getDomain(window),
                        type: "postrobot_message_ack",
                        hash: message.hash,
                        name: message.name
                    }, {
                        on: on,
                        send: send
                    });
                } catch (err) {
                    throw new Error("Send ack message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                }
            })), promise_ZalgoPromise.try((function() {
                if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                if (!matchDomain(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
                return options.handler({
                    source: source,
                    origin: origin,
                    data: message.data
                });
            })).then((function(data) {
                return sendResponse("success", data);
            }), (function(error) {
                return sendResponse("error", null, error);
            })) ]).then(src_util_noop).catch((function(err) {
                if (options && options.handleError) return options.handleError(err);
                throw err;
            }));
        }
        function handleAck(source, origin, message) {
            if (!isResponseListenerErrored(message.hash)) {
                var options = getResponseListener(message.hash);
                if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                try {
                    if (!matchDomain(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
                    if (source !== options.win) throw new Error("Ack source does not match registered window");
                } catch (err) {
                    options.promise.reject(err);
                }
                options.ack = !0;
            }
        }
        function handleResponse(source, origin, message) {
            if (!isResponseListenerErrored(message.hash)) {
                var options = getResponseListener(message.hash);
                if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                if (!matchDomain(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + (pattern = options.domain, 
                Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : isRegex(pattern) ? "RegExp(" + pattern.toString() : pattern.toString()));
                var pattern;
                if (source !== options.win) throw new Error("Response source does not match registered window");
                deleteResponseListener(message.hash);
                "error" === message.ack ? options.promise.reject(message.error) : "success" === message.ack && options.promise.resolve({
                    source: source,
                    origin: origin,
                    data: message.data
                });
            }
        }
        function receive_receiveMessage(event, _ref2) {
            var on = _ref2.on, send = _ref2.send;
            var receivedMessages = globalStore("receivedMessages");
            try {
                if (!window || window.closed || !event.source) return;
            } catch (err) {
                return;
            }
            var source = event.source, origin = event.origin;
            var messages = function(message, source, origin, _ref) {
                var on = _ref.on, send = _ref.send;
                var parsedMessage;
                try {
                    parsedMessage = deserializeMessage(source, origin, message, {
                        on: on,
                        send: send
                    });
                } catch (err) {
                    return;
                }
                if (parsedMessage && "object" == typeof parsedMessage && null !== parsedMessage) {
                    var parseMessages = parsedMessage.__post_robot_10_0_42__;
                    if (Array.isArray(parseMessages)) return parseMessages;
                }
            }(event.data, source, origin, {
                on: on,
                send: send
            });
            if (messages) {
                markWindowKnown(source);
                for (var _i2 = 0; _i2 < messages.length; _i2++) {
                    var message = messages[_i2];
                    if (receivedMessages.has(message.id)) return;
                    receivedMessages.set(message.id, !0);
                    if (isWindowClosed(source) && !message.fireAndForget) return;
                    0 === message.origin.indexOf("file:") && (origin = "file://");
                    try {
                        "postrobot_message_request" === message.type ? handleRequest(source, origin, message, {
                            on: on,
                            send: send
                        }) : "postrobot_message_response" === message.type ? handleResponse(source, origin, message) : "postrobot_message_ack" === message.type && handleAck(source, origin, message);
                    } catch (err) {
                        setTimeout((function() {
                            throw err;
                        }), 0);
                    }
                }
            }
        }
        function on_on(name, options, handler) {
            if (!name) throw new Error("Expected name");
            if ("function" == typeof (options = options || {})) {
                handler = options;
                options = {};
            }
            if (!handler) throw new Error("Expected handler");
            (options = options || {}).name = name;
            options.handler = handler || options.handler;
            var win = options.window;
            var domain = options.domain;
            var requestListener = function addRequestListener(_ref4, listener) {
                var name = _ref4.name, win = _ref4.win, domain = _ref4.domain;
                var requestListeners = windowStore("requestListeners");
                if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
                if (Array.isArray(win)) {
                    var listenersCollection = [];
                    for (var _i8 = 0, _win2 = win; _i8 < _win2.length; _i8++) listenersCollection.push(addRequestListener({
                        name: name,
                        domain: domain,
                        win: _win2[_i8]
                    }, listener));
                    return {
                        cancel: function() {
                            for (var _i10 = 0; _i10 < listenersCollection.length; _i10++) listenersCollection[_i10].cancel();
                        }
                    };
                }
                if (Array.isArray(domain)) {
                    var _listenersCollection = [];
                    for (var _i12 = 0, _domain2 = domain; _i12 < _domain2.length; _i12++) _listenersCollection.push(addRequestListener({
                        name: name,
                        win: win,
                        domain: _domain2[_i12]
                    }, listener));
                    return {
                        cancel: function() {
                            for (var _i14 = 0; _i14 < _listenersCollection.length; _i14++) _listenersCollection[_i14].cancel();
                        }
                    };
                }
                var existingListener = getRequestListener({
                    name: name,
                    win: win,
                    domain: domain
                });
                win && "*" !== win || (win = getWildcard());
                domain = domain || "*";
                if (existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : win ? new Error("Request listener already exists for " + name + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
                var nameListeners = requestListeners.getOrSet(win, (function() {
                    return {};
                }));
                var domainListeners = util_getOrSet(nameListeners, name, (function() {
                    return {};
                }));
                var strDomain = domain.toString();
                var regexListeners;
                var regexListener;
                util_isRegex(domain) ? (regexListeners = util_getOrSet(domainListeners, "__domain_regex__", (function() {
                    return [];
                }))).push(regexListener = {
                    regex: domain,
                    listener: listener
                }) : domainListeners[strDomain] = listener;
                return {
                    cancel: function() {
                        delete domainListeners[strDomain];
                        if (regexListener) {
                            regexListeners.splice(regexListeners.indexOf(regexListener, 1));
                            regexListeners.length || delete domainListeners.__domain_regex__;
                        }
                        Object.keys(domainListeners).length || delete nameListeners[name];
                        win && !Object.keys(nameListeners).length && requestListeners.del(win);
                    }
                };
            }({
                name: name,
                win: win,
                domain: domain
            }, {
                handler: options.handler,
                handleError: options.errorHandler || function(err) {
                    throw err;
                },
                window: win,
                domain: domain || "*",
                name: name
            });
            return {
                cancel: function() {
                    requestListener.cancel();
                }
            };
        }
        var send_send = function send(win, name, data, options) {
            var domainMatcher = (options = options || {}).domain || "*";
            var responseTimeout = options.timeout || -1;
            var childTimeout = options.timeout || 5e3;
            var fireAndForget = options.fireAndForget || !1;
            return promise_ZalgoPromise.try((function() {
                !function(name, win, domain) {
                    if (!name) throw new Error("Expected name");
                    if (domain && "string" != typeof domain && !Array.isArray(domain) && !util_isRegex(domain)) throw new TypeError("Can not send " + name + ". Expected domain " + JSON.stringify(domain) + " to be a string, array, or regex");
                    if (isWindowClosed(win)) throw new Error("Can not send " + name + ". Target window is closed");
                }(name, win, domainMatcher);
                if (function(parent, child) {
                    var actualParent = getAncestor(child);
                    if (actualParent) return actualParent === parent;
                    if (child === parent) return !1;
                    if (getTop(child) === child) return !1;
                    for (var _i15 = 0, _getFrames8 = getFrames(parent); _i15 < _getFrames8.length; _i15++) if (_getFrames8[_i15] === child) return !0;
                    return !1;
                }(window, win)) return function(win, timeout, name) {
                    void 0 === timeout && (timeout = 5e3);
                    void 0 === name && (name = "Window");
                    var promise = function(win) {
                        return windowStore("helloPromises").getOrSet(win, (function() {
                            return new promise_ZalgoPromise;
                        }));
                    }(win);
                    -1 !== timeout && (promise = promise.timeout(timeout, new Error(name + " did not load after " + timeout + "ms")));
                    return promise;
                }(win, childTimeout);
            })).then((function(_temp) {
                return function(win, targetDomain, actualDomain, _ref) {
                    var send = _ref.send;
                    return promise_ZalgoPromise.try((function() {
                        return "string" == typeof targetDomain ? targetDomain : promise_ZalgoPromise.try((function() {
                            return actualDomain || sayHello(win, {
                                send: send
                            }).then((function(_ref2) {
                                return _ref2.domain;
                            }));
                        })).then((function(normalizedDomain) {
                            if (!matchDomain(targetDomain, targetDomain)) throw new Error("Domain " + stringify(targetDomain) + " does not match " + stringify(targetDomain));
                            return normalizedDomain;
                        }));
                    }));
                }(win, domainMatcher, (void 0 === _temp ? {} : _temp).domain, {
                    send: send
                });
            })).then((function(targetDomain) {
                var domain = targetDomain;
                var logName = "postrobot_method" === name && data && "string" == typeof data.name ? data.name + "()" : name;
                var promise = new promise_ZalgoPromise;
                var hash = name + "_" + uniqueID();
                if (!fireAndForget) {
                    var responseListener = {
                        name: name,
                        win: win,
                        domain: domain,
                        promise: promise
                    };
                    !function(hash, listener) {
                        globalStore("responseListeners").set(hash, listener);
                    }(hash, responseListener);
                    var reqPromises = windowStore("requestPromises").getOrSet(win, (function() {
                        return [];
                    }));
                    reqPromises.push(promise);
                    promise.catch((function() {
                        !function(hash) {
                            globalStore("erroredResponseListeners").set(hash, !0);
                        }(hash);
                        deleteResponseListener(hash);
                    }));
                    var totalAckTimeout = function(win) {
                        return windowStore("knownWindows").get(win, !1);
                    }(win) ? 1e4 : 2e3;
                    var totalResTimeout = responseTimeout;
                    var ackTimeout = totalAckTimeout;
                    var resTimeout = totalResTimeout;
                    var interval = safeInterval((function() {
                        if (isWindowClosed(win)) return promise.reject(new Error("Window closed for " + name + " before " + (responseListener.ack ? "response" : "ack")));
                        if (responseListener.cancelled) return promise.reject(new Error("Response listener was cancelled for " + name));
                        ackTimeout = Math.max(ackTimeout - 500, 0);
                        -1 !== resTimeout && (resTimeout = Math.max(resTimeout - 500, 0));
                        return responseListener.ack || 0 !== ackTimeout ? 0 === resTimeout ? promise.reject(new Error("No response for postMessage " + logName + " in " + getDomain() + " in " + totalResTimeout + "ms")) : void 0 : promise.reject(new Error("No ack for postMessage " + logName + " in " + getDomain() + " in " + totalAckTimeout + "ms"));
                    }), 500);
                    promise.finally((function() {
                        interval.cancel();
                        reqPromises.splice(reqPromises.indexOf(promise, 1));
                    })).catch(src_util_noop);
                }
                return send_sendMessage(win, domain, {
                    id: uniqueID(),
                    origin: getDomain(window),
                    type: "postrobot_message_request",
                    hash: hash,
                    name: name,
                    data: data,
                    fireAndForget: fireAndForget
                }, {
                    on: on_on,
                    send: send
                }).then((function() {
                    return fireAndForget ? promise.resolve() : promise;
                }), (function(err) {
                    throw new Error("Send request message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                }));
            }));
        };
        function setup_serializeMessage(destination, domain, obj) {
            return serializeMessage(destination, domain, obj, {
                on: on_on,
                send: send_send
            });
        }
        function setup_deserializeMessage(source, origin, message) {
            return deserializeMessage(source, origin, message, {
                on: on_on,
                send: send_send
            });
        }
        function setup_toProxyWindow(win) {
            return window_ProxyWindow.toProxyWindow(win, {
                send: send_send
            });
        }
        function lib_global_getGlobal(win) {
            void 0 === win && (win = window);
            if (!isSameDomain(win)) throw new Error("Can not get global for window on different domain");
            win.__zoid_9_0_63__ || (win.__zoid_9_0_63__ = {});
            return win.__zoid_9_0_63__;
        }
        function getProxyObject(obj) {
            return {
                get: function() {
                    var _this = this;
                    return promise_ZalgoPromise.try((function() {
                        if (_this.source && _this.source !== window) throw new Error("Can not call get on proxy object from a remote window");
                        return obj;
                    }));
                }
            };
        }
        var PROP_TYPE = {
            STRING: "string",
            OBJECT: "object",
            FUNCTION: "function",
            BOOLEAN: "boolean",
            NUMBER: "number",
            ARRAY: "array"
        };
        var PROP_SERIALIZATION = {
            JSON: "json",
            DOTIFY: "dotify",
            BASE64: "base64"
        };
        var CONTEXT = WINDOW_TYPE;
        var EVENT = {
            RENDER: "zoid-render",
            RENDERED: "zoid-rendered",
            DISPLAY: "zoid-display",
            ERROR: "zoid-error",
            CLOSE: "zoid-close",
            DESTROY: "zoid-destroy",
            PROPS: "zoid-props",
            RESIZE: "zoid-resize",
            FOCUS: "zoid-focus"
        };
        function normalizeChildProp(propsDef, props, key, value, helpers) {
            if (!propsDef.hasOwnProperty(key)) return value;
            var prop = propsDef[key];
            return "function" == typeof prop.childDecorate ? prop.childDecorate({
                value: value,
                uid: helpers.uid,
                close: helpers.close,
                focus: helpers.focus,
                onError: helpers.onError,
                onProps: helpers.onProps,
                resize: helpers.resize,
                getParent: helpers.getParent,
                getParentDomain: helpers.getParentDomain,
                show: helpers.show,
                hide: helpers.hide
            }) : value;
        }
        function parseChildWindowName(windowName) {
            return inlineMemoize(parseChildWindowName, (function() {
                if (!windowName) throw new Error("No window name");
                var _windowName$split = windowName.split("__"), zoidcomp = _windowName$split[1], name = _windowName$split[2], encodedPayload = _windowName$split[3];
                if ("zoid" !== zoidcomp) throw new Error("Window not rendered by zoid - got " + zoidcomp);
                if (!name) throw new Error("Expected component name");
                if (!encodedPayload) throw new Error("Expected encoded payload");
                try {
                    return JSON.parse(function(str) {
                        if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(str), (function(c) {
                            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                        })).join(""));
                        if ("undefined" != typeof Buffer) return Buffer.from(str, "base64").toString("utf8");
                        throw new Error("Can not find window.atob or Buffer");
                    }(encodedPayload));
                } catch (err) {
                    throw new Error("Can not decode window name payload: " + encodedPayload + ": " + stringifyError(err));
                }
            }), [ windowName ]);
        }
        function getChildPayload() {
            try {
                return parseChildWindowName(window.name);
            } catch (err) {}
        }
        function child_focus() {
            return promise_ZalgoPromise.try((function() {
                window.focus();
            }));
        }
        function child_destroy() {
            return promise_ZalgoPromise.try((function() {
                window.close();
            }));
        }
        function props_getQueryParam(prop, key, value) {
            return promise_ZalgoPromise.try((function() {
                return "function" == typeof prop.queryParam ? prop.queryParam({
                    value: value
                }) : "string" == typeof prop.queryParam ? prop.queryParam : key;
            }));
        }
        function getQueryValue(prop, key, value) {
            return promise_ZalgoPromise.try((function() {
                return "function" == typeof prop.queryValue && isDefined(value) ? prop.queryValue({
                    value: value
                }) : value;
            }));
        }
        function parentComponent(options, overrides, parentWin) {
            void 0 === overrides && (overrides = {});
            void 0 === parentWin && (parentWin = window);
            var propsDef = options.propsDef, containerTemplate = options.containerTemplate, prerenderTemplate = options.prerenderTemplate, tag = options.tag, name = options.name, attributes = options.attributes, dimensions = options.dimensions, autoResize = options.autoResize, url = options.url, domainMatch = options.domain;
            var initPromise = new promise_ZalgoPromise;
            var handledErrors = [];
            var clean = cleanup();
            var state = {};
            var internalState = {
                visible: !0
            };
            var event = overrides.event ? overrides.event : (triggered = {}, handlers = {}, 
            {
                on: function(eventName, handler) {
                    var handlerList = handlers[eventName] = handlers[eventName] || [];
                    handlerList.push(handler);
                    var cancelled = !1;
                    return {
                        cancel: function() {
                            if (!cancelled) {
                                cancelled = !0;
                                handlerList.splice(handlerList.indexOf(handler), 1);
                            }
                        }
                    };
                },
                once: function(eventName, handler) {
                    var listener = this.on(eventName, (function() {
                        listener.cancel();
                        handler();
                    }));
                    return listener;
                },
                trigger: function(eventName) {
                    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
                    var handlerList = handlers[eventName];
                    var promises = [];
                    if (handlerList) {
                        var _loop = function(_i2) {
                            var handler = handlerList[_i2];
                            promises.push(promise_ZalgoPromise.try((function() {
                                return handler.apply(void 0, args);
                            })));
                        };
                        for (var _i2 = 0; _i2 < handlerList.length; _i2++) _loop(_i2);
                    }
                    return promise_ZalgoPromise.all(promises).then(src_util_noop);
                },
                triggerOnce: function(eventName) {
                    if (triggered[eventName]) return promise_ZalgoPromise.resolve();
                    triggered[eventName] = !0;
                    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
                    return this.trigger.apply(this, [ eventName ].concat(args));
                },
                reset: function() {
                    handlers = {};
                }
            });
            var triggered, handlers;
            var props = overrides.props ? overrides.props : {};
            var currentProxyWin;
            var currentProxyContainer;
            var childComponent;
            var onErrorOverride = overrides.onError;
            var getProxyContainerOverride = overrides.getProxyContainer;
            var showOverride = overrides.show;
            var hideOverride = overrides.hide;
            var closeOverride = overrides.close;
            var renderContainerOverride = overrides.renderContainer;
            var getProxyWindowOverride = overrides.getProxyWindow;
            var setProxyWinOverride = overrides.setProxyWin;
            var openFrameOverride = overrides.openFrame;
            var openPrerenderFrameOverride = overrides.openPrerenderFrame;
            var prerenderOverride = overrides.prerender;
            var openOverride = overrides.open;
            var openPrerenderOverride = overrides.openPrerender;
            var watchForUnloadOverride = overrides.watchForUnload;
            var getInternalStateOverride = overrides.getInternalState;
            var setInternalStateOverride = overrides.setInternalState;
            var getPropsForChild = function(domain) {
                var result = {};
                for (var _i2 = 0, _Object$keys2 = Object.keys(props); _i2 < _Object$keys2.length; _i2++) {
                    var key = _Object$keys2[_i2];
                    var prop = propsDef[key];
                    prop && !1 === prop.sendToChild || prop && prop.sameDomain && !matchDomain(domain, getDomain(window)) || (result[key] = props[key]);
                }
                return promise_ZalgoPromise.hash(result);
            };
            var getInternalState = function() {
                return promise_ZalgoPromise.try((function() {
                    return getInternalStateOverride ? getInternalStateOverride() : internalState;
                }));
            };
            var setInternalState = function(newInternalState) {
                return promise_ZalgoPromise.try((function() {
                    return setInternalStateOverride ? setInternalStateOverride(newInternalState) : internalState = _extends({}, internalState, newInternalState);
                }));
            };
            var getProxyWindow = function() {
                return getProxyWindowOverride ? getProxyWindowOverride() : promise_ZalgoPromise.try((function() {
                    var windowProp = props.window;
                    if (windowProp) {
                        var _proxyWin = setup_toProxyWindow(windowProp);
                        clean.register((function() {
                            return windowProp.close();
                        }));
                        return _proxyWin;
                    }
                    return new window_ProxyWindow({
                        send: send_send
                    });
                }));
            };
            var getProxyContainer = function(container) {
                return getProxyContainerOverride ? getProxyContainerOverride(container) : promise_ZalgoPromise.try((function() {
                    return elementReady(container);
                })).then((function(containerElement) {
                    isShadowElement(containerElement) && (containerElement = function(element) {
                        var shadowHost = function(element) {
                            var shadowRoot = function(element) {
                                for (;element.parentNode; ) element = element.parentNode;
                                if (isShadowElement(element)) return element;
                            }(element);
                            if (shadowRoot.host) return shadowRoot.host;
                        }(element);
                        if (!shadowHost) throw new Error("Element is not in shadow dom");
                        if (isShadowElement(shadowHost)) throw new Error("Host element is also in shadow dom");
                        var slotName = "shadow-slot-" + uniqueID();
                        var slot = document.createElement("slot");
                        slot.setAttribute("name", slotName);
                        element.appendChild(slot);
                        var slotProvider = document.createElement("div");
                        slotProvider.setAttribute("slot", slotName);
                        shadowHost.appendChild(slotProvider);
                        return slotProvider;
                    }(containerElement));
                    return getProxyObject(containerElement);
                }));
            };
            var setProxyWin = function(proxyWin) {
                return setProxyWinOverride ? setProxyWinOverride(proxyWin) : promise_ZalgoPromise.try((function() {
                    currentProxyWin = proxyWin;
                }));
            };
            var show = function() {
                return showOverride ? showOverride() : promise_ZalgoPromise.hash({
                    setState: setInternalState({
                        visible: !0
                    }),
                    showElement: currentProxyContainer ? currentProxyContainer.get().then(showElement) : null
                }).then(src_util_noop);
            };
            var hide = function() {
                return hideOverride ? hideOverride() : promise_ZalgoPromise.hash({
                    setState: setInternalState({
                        visible: !1
                    }),
                    showElement: currentProxyContainer ? currentProxyContainer.get().then(hideElement) : null
                }).then(src_util_noop);
            };
            var getUrl = function() {
                return "function" == typeof url ? url({
                    props: props
                }) : url;
            };
            var getAttributes = function() {
                return "function" == typeof attributes ? attributes({
                    props: props
                }) : attributes;
            };
            var getChildDomain = function() {
                return domainMatch && "string" == typeof domainMatch ? domainMatch : getDomainFromUrl(getUrl());
            };
            var getDomainMatcher = function() {
                return domainMatch && util_isRegex(domainMatch) ? domainMatch : getChildDomain();
            };
            var openFrame = function(context, _ref) {
                var windowName = _ref.windowName;
                return openFrameOverride ? openFrameOverride(context, {
                    windowName: windowName
                }) : promise_ZalgoPromise.try((function() {
                    if (context === CONTEXT.IFRAME) return getProxyObject(dom_iframe({
                        attributes: _extends({
                            name: windowName,
                            title: name
                        }, getAttributes().iframe)
                    }));
                }));
            };
            var openPrerenderFrame = function(context) {
                return openPrerenderFrameOverride ? openPrerenderFrameOverride(context) : promise_ZalgoPromise.try((function() {
                    if (context === CONTEXT.IFRAME) return getProxyObject(dom_iframe({
                        attributes: _extends({
                            name: "__zoid_prerender_frame__" + name + "_" + uniqueID() + "__",
                            title: "prerender__" + name
                        }, getAttributes().iframe)
                    }));
                }));
            };
            var openPrerender = function(context, proxyWin, proxyPrerenderFrame) {
                return openPrerenderOverride ? openPrerenderOverride(context, proxyWin, proxyPrerenderFrame) : promise_ZalgoPromise.try((function() {
                    if (context === CONTEXT.IFRAME) {
                        if (!proxyPrerenderFrame) throw new Error("Expected proxy frame to be passed");
                        return proxyPrerenderFrame.get().then((function(prerenderFrame) {
                            clean.register((function() {
                                return destroyElement(prerenderFrame);
                            }));
                            return awaitFrameWindow(prerenderFrame).then((function(prerenderFrameWindow) {
                                return assertSameDomain(prerenderFrameWindow);
                            })).then((function(win) {
                                return setup_toProxyWindow(win);
                            }));
                        }));
                    }
                    throw new Error("No render context available for " + context);
                }));
            };
            var focus = function() {
                return promise_ZalgoPromise.try((function() {
                    if (currentProxyWin) return promise_ZalgoPromise.all([ event.trigger(EVENT.FOCUS), currentProxyWin.focus() ]).then(src_util_noop);
                }));
            };
            var getWindowRef = function(target, domain, uid, context) {
                if (domain === getDomain(window)) {
                    var global = lib_global_getGlobal(window);
                    global.windows = global.windows || {};
                    global.windows[uid] = window;
                    clean.register((function() {
                        delete global.windows[uid];
                    }));
                    return {
                        type: "global",
                        uid: uid
                    };
                }
                return context === CONTEXT.POPUP ? {
                    type: "opener"
                } : {
                    type: "parent",
                    distance: getDistanceFromTop(window)
                };
            };
            var initChild = function(childExports) {
                return promise_ZalgoPromise.try((function() {
                    childComponent = childExports;
                    initPromise.resolve();
                    clean.register((function() {
                        return childExports.close.fireAndForget().catch(src_util_noop);
                    }));
                }));
            };
            var resize = function(_ref2) {
                var width = _ref2.width, height = _ref2.height;
                return promise_ZalgoPromise.try((function() {
                    event.trigger(EVENT.RESIZE, {
                        width: width,
                        height: height
                    });
                }));
            };
            var destroy = function(err) {
                return promise_ZalgoPromise.try((function() {
                    return event.trigger(EVENT.DESTROY);
                })).catch(src_util_noop).then((function() {
                    return clean.all(err);
                })).then((function() {
                    initPromise.asyncReject(err || new Error("Component destroyed"));
                }));
            };
            var close = memoize((function(err) {
                return promise_ZalgoPromise.try((function() {
                    if (closeOverride) {
                        if (isWindowClosed(closeOverride.__source__)) return;
                        return closeOverride();
                    }
                    return promise_ZalgoPromise.try((function() {
                        return event.trigger(EVENT.CLOSE);
                    })).then((function() {
                        return destroy(err || new Error("Component closed"));
                    }));
                }));
            }));
            var open = function(context, _ref3) {
                var proxyWin = _ref3.proxyWin, proxyFrame = _ref3.proxyFrame;
                return openOverride ? openOverride(context, {
                    proxyWin: proxyWin,
                    proxyFrame: proxyFrame,
                    windowName: _ref3.windowName
                }) : promise_ZalgoPromise.try((function() {
                    if (context === CONTEXT.IFRAME) {
                        if (!proxyFrame) throw new Error("Expected proxy frame to be passed");
                        return proxyFrame.get().then((function(frame) {
                            return awaitFrameWindow(frame).then((function(win) {
                                clean.register((function() {
                                    return destroyElement(frame);
                                }));
                                clean.register((function() {
                                    return function(win) {
                                        for (var _i2 = 0, _requestPromises$get2 = windowStore("requestPromises").get(win, []); _i2 < _requestPromises$get2.length; _i2++) _requestPromises$get2[_i2].reject(new Error("Window " + (isWindowClosed(win) ? "closed" : "cleaned up") + " before response")).catch(src_util_noop);
                                    }(win);
                                }));
                                return win;
                            }));
                        }));
                    }
                    throw new Error("No render context available for " + context);
                })).then((function(win) {
                    proxyWin.setWindow(win, {
                        send: send_send
                    });
                    return proxyWin;
                }));
            };
            var watchForUnload = function() {
                return promise_ZalgoPromise.try((function() {
                    var unloadWindowListener = addEventListener(window, "unload", once((function() {
                        destroy(new Error("Window navigated away"));
                    })));
                    var closeParentWindowListener = onCloseWindow(parentWin, destroy, 3e3);
                    clean.register(closeParentWindowListener.cancel);
                    clean.register(unloadWindowListener.cancel);
                    if (watchForUnloadOverride) return watchForUnloadOverride();
                }));
            };
            var checkWindowClose = function(proxyWin) {
                var closed = !1;
                return proxyWin.isClosed().then((function(isClosed) {
                    if (isClosed) {
                        closed = !0;
                        return close(new Error("Detected component window close"));
                    }
                    return promise_ZalgoPromise.delay(200).then((function() {
                        return proxyWin.isClosed();
                    })).then((function(secondIsClosed) {
                        if (secondIsClosed) {
                            closed = !0;
                            return close(new Error("Detected component window close"));
                        }
                    }));
                })).then((function() {
                    return closed;
                }));
            };
            var onError = function(err) {
                return onErrorOverride ? onErrorOverride(err) : promise_ZalgoPromise.try((function() {
                    if (-1 === handledErrors.indexOf(err)) {
                        handledErrors.push(err);
                        initPromise.asyncReject(err);
                        return event.trigger(EVENT.ERROR, err);
                    }
                }));
            };
            initChild.onError = onError;
            var renderTemplate = function(renderer, _ref6) {
                return renderer({
                    container: _ref6.container,
                    context: _ref6.context,
                    uid: _ref6.uid,
                    doc: _ref6.doc,
                    frame: _ref6.frame,
                    prerenderFrame: _ref6.prerenderFrame,
                    focus: focus,
                    close: close,
                    state: state,
                    props: props,
                    tag: tag,
                    dimensions: dimensions,
                    event: event
                });
            };
            var prerender = function(proxyPrerenderWin, _ref7) {
                var context = _ref7.context, uid = _ref7.uid;
                return prerenderOverride ? prerenderOverride(proxyPrerenderWin, {
                    context: context,
                    uid: uid
                }) : promise_ZalgoPromise.try((function() {
                    if (prerenderTemplate) {
                        var prerenderWindow = proxyPrerenderWin.getWindow();
                        if (prerenderWindow && isSameDomain(prerenderWindow) && function(win) {
                            try {
                                if (!win.location.href) return !0;
                                if ("about:blank" === win.location.href) return !0;
                            } catch (err) {}
                            return !1;
                        }(prerenderWindow)) {
                            var doc = (prerenderWindow = assertSameDomain(prerenderWindow)).document;
                            var el = renderTemplate(prerenderTemplate, {
                                context: context,
                                uid: uid,
                                doc: doc
                            });
                            if (el) {
                                if (el.ownerDocument !== doc) throw new Error("Expected prerender template to have been created with document from child window");
                                !function(win, el) {
                                    var tag = el.tagName.toLowerCase();
                                    if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
                                    var documentElement = win.document.documentElement;
                                    for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) documentElement.removeChild(_arrayFrom2[_i6]);
                                    for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) documentElement.appendChild(_arrayFrom4[_i8]);
                                }(prerenderWindow, el);
                                var _autoResize$width = autoResize.width, width = void 0 !== _autoResize$width && _autoResize$width, _autoResize$height = autoResize.height, height = void 0 !== _autoResize$height && _autoResize$height, _autoResize$element = autoResize.element, element = void 0 === _autoResize$element ? "body" : _autoResize$element;
                                if ((element = getElementSafe(element, doc)) && (width || height)) {
                                    var prerenderResizeListener = onResize(element, (function(_ref8) {
                                        resize({
                                            width: width ? _ref8.width : void 0,
                                            height: height ? _ref8.height : void 0
                                        });
                                    }), {
                                        width: width,
                                        height: height,
                                        win: prerenderWindow
                                    });
                                    event.on(EVENT.RENDERED, prerenderResizeListener.cancel);
                                }
                            }
                        }
                    }
                }));
            };
            var renderContainer = function(proxyContainer, _ref9) {
                var proxyFrame = _ref9.proxyFrame, proxyPrerenderFrame = _ref9.proxyPrerenderFrame, context = _ref9.context, uid = _ref9.uid;
                return renderContainerOverride ? renderContainerOverride(proxyContainer, {
                    proxyFrame: proxyFrame,
                    proxyPrerenderFrame: proxyPrerenderFrame,
                    context: context,
                    uid: uid
                }) : promise_ZalgoPromise.hash({
                    container: proxyContainer.get(),
                    frame: proxyFrame ? proxyFrame.get() : null,
                    prerenderFrame: proxyPrerenderFrame ? proxyPrerenderFrame.get() : null,
                    internalState: getInternalState()
                }).then((function(_ref10) {
                    var container = _ref10.container, visible = _ref10.internalState.visible;
                    var innerContainer = renderTemplate(containerTemplate, {
                        context: context,
                        uid: uid,
                        container: container,
                        frame: _ref10.frame,
                        prerenderFrame: _ref10.prerenderFrame,
                        doc: document
                    });
                    if (innerContainer) {
                        visible || hideElement(innerContainer);
                        appendChild(container, innerContainer);
                        var containerWatcher = function(element, handler) {
                            handler = once(handler);
                            var cancelled = !1;
                            var mutationObservers = [];
                            var interval;
                            var sacrificialFrame;
                            var sacrificialFrameWin;
                            var cancel = function() {
                                cancelled = !0;
                                for (var _i18 = 0; _i18 < mutationObservers.length; _i18++) mutationObservers[_i18].disconnect();
                                interval && interval.cancel();
                                sacrificialFrameWin && sacrificialFrameWin.removeEventListener("unload", elementClosed);
                                sacrificialFrame && destroyElement(sacrificialFrame);
                            };
                            var elementClosed = function() {
                                if (!cancelled) {
                                    handler();
                                    cancel();
                                }
                            };
                            if (isElementClosed(element)) {
                                elementClosed();
                                return {
                                    cancel: cancel
                                };
                            }
                            if (window.MutationObserver) {
                                var mutationElement = element.parentElement;
                                for (;mutationElement; ) {
                                    var mutationObserver = new window.MutationObserver((function() {
                                        isElementClosed(element) && elementClosed();
                                    }));
                                    mutationObserver.observe(mutationElement, {
                                        childList: !0
                                    });
                                    mutationObservers.push(mutationObserver);
                                    mutationElement = mutationElement.parentElement;
                                }
                            }
                            (sacrificialFrame = document.createElement("iframe")).setAttribute("name", "__detect_close_" + uniqueID() + "__");
                            sacrificialFrame.style.display = "none";
                            awaitFrameWindow(sacrificialFrame).then((function(frameWin) {
                                (sacrificialFrameWin = assertSameDomain(frameWin)).addEventListener("unload", elementClosed);
                            }));
                            element.appendChild(sacrificialFrame);
                            interval = safeInterval((function() {
                                isElementClosed(element) && elementClosed();
                            }), 1e3);
                            return {
                                cancel: cancel
                            };
                        }(innerContainer, (function() {
                            return close(new Error("Detected container element removed from DOM"));
                        }));
                        clean.register((function() {
                            return containerWatcher.cancel();
                        }));
                        clean.register((function() {
                            return destroyElement(innerContainer);
                        }));
                        return currentProxyContainer = getProxyObject(innerContainer);
                    }
                }));
            };
            var getHelpers = function() {
                return {
                    state: state,
                    event: event,
                    close: close,
                    focus: focus,
                    resize: resize,
                    onError: onError,
                    updateProps: updateProps,
                    show: show,
                    hide: hide
                };
            };
            var setProps = function(newProps, isUpdate) {
                void 0 === isUpdate && (isUpdate = !1);
                var helpers = getHelpers();
                !function(propsDef, props, inputProps, helpers, isUpdate) {
                    void 0 === isUpdate && (isUpdate = !1);
                    extend(props, inputProps = inputProps || {});
                    var propNames = isUpdate ? [] : [].concat(Object.keys(propsDef));
                    for (var _i2 = 0, _Object$keys2 = Object.keys(inputProps); _i2 < _Object$keys2.length; _i2++) {
                        var key = _Object$keys2[_i2];
                        -1 === propNames.indexOf(key) && propNames.push(key);
                    }
                    var aliases = [];
                    var state = helpers.state, close = helpers.close, focus = helpers.focus, event = helpers.event, onError = helpers.onError;
                    for (var _i4 = 0; _i4 < propNames.length; _i4++) {
                        var _key = propNames[_i4];
                        var propDef = propsDef[_key];
                        var value = inputProps[_key];
                        if (propDef) {
                            var alias = propDef.alias;
                            if (alias) {
                                !isDefined(value) && isDefined(inputProps[alias]) && (value = inputProps[alias]);
                                aliases.push(alias);
                            }
                            propDef.value && (value = propDef.value({
                                props: props,
                                state: state,
                                close: close,
                                focus: focus,
                                event: event,
                                onError: onError
                            }));
                            !isDefined(value) && propDef.default && (value = propDef.default({
                                props: props,
                                state: state,
                                close: close,
                                focus: focus,
                                event: event,
                                onError: onError
                            }));
                            if (isDefined(value) && ("array" === propDef.type ? !Array.isArray(value) : typeof value !== propDef.type)) throw new TypeError("Prop is not of type " + propDef.type + ": " + _key);
                            props[_key] = value;
                        }
                    }
                    for (var _i6 = 0; _i6 < aliases.length; _i6++) delete props[aliases[_i6]];
                    for (var _i8 = 0, _Object$keys4 = Object.keys(props); _i8 < _Object$keys4.length; _i8++) {
                        var _key2 = _Object$keys4[_i8];
                        var _propDef = propsDef[_key2];
                        var _value = props[_key2];
                        _propDef && isDefined(_value) && _propDef.decorate && (props[_key2] = _propDef.decorate({
                            value: _value,
                            props: props,
                            state: state,
                            close: close,
                            focus: focus,
                            event: event,
                            onError: onError
                        }));
                    }
                    for (var _i10 = 0, _Object$keys6 = Object.keys(propsDef); _i10 < _Object$keys6.length; _i10++) {
                        var _key3 = _Object$keys6[_i10];
                        if (!1 !== propsDef[_key3].required && !isDefined(props[_key3])) throw new Error('Expected prop "' + _key3 + '" to be defined');
                    }
                }(propsDef, props, newProps, helpers, isUpdate);
            };
            var updateProps = function(newProps) {
                setProps(newProps, !0);
                return initPromise.then((function() {
                    var child = childComponent;
                    var proxyWin = currentProxyWin;
                    if (child && proxyWin) return getPropsForChild(getDomainMatcher()).then((function(childProps) {
                        return child.updateProps(childProps).catch((function(err) {
                            return checkWindowClose(proxyWin).then((function(closed) {
                                if (!closed) throw err;
                            }));
                        }));
                    }));
                }));
            };
            return {
                init: function() {
                    !function() {
                        event.on(EVENT.RENDER, (function() {
                            return props.onRender();
                        }));
                        event.on(EVENT.DISPLAY, (function() {
                            return props.onDisplay();
                        }));
                        event.on(EVENT.RENDERED, (function() {
                            return props.onRendered();
                        }));
                        event.on(EVENT.CLOSE, (function() {
                            return props.onClose();
                        }));
                        event.on(EVENT.DESTROY, (function() {
                            return props.onDestroy();
                        }));
                        event.on(EVENT.RESIZE, (function() {
                            return props.onResize();
                        }));
                        event.on(EVENT.FOCUS, (function() {
                            return props.onFocus();
                        }));
                        event.on(EVENT.PROPS, (function(newProps) {
                            return props.onProps(newProps);
                        }));
                        event.on(EVENT.ERROR, (function(err) {
                            return props && props.onError ? props.onError(err) : initPromise.reject(err).then((function() {
                                setTimeout((function() {
                                    throw err;
                                }), 1);
                            }));
                        }));
                        clean.register(event.reset);
                    }();
                },
                render: function(target, container, context) {
                    return promise_ZalgoPromise.try((function() {
                        var uid = "zoid-" + tag + "-" + uniqueID();
                        var domain = getDomainMatcher();
                        var childDomain = getChildDomain();
                        !function(target, domain, container) {
                            if (target !== window) {
                                if (!isSameTopWindow(window, target)) throw new Error("Can only renderTo an adjacent frame");
                                var origin = getDomain();
                                if (!matchDomain(domain, origin) && !isSameDomain(target)) throw new Error("Can not render remotely to " + domain.toString() + " - can only render to " + origin);
                                if (container && "string" != typeof container) throw new Error("Container passed to renderTo must be a string selector, got " + typeof container + " }");
                            }
                        }(target, domain, container);
                        var delegatePromise = promise_ZalgoPromise.try((function() {
                            if (target !== window) return function(context, target) {
                                var delegateProps = {};
                                for (var _i4 = 0, _Object$keys4 = Object.keys(props); _i4 < _Object$keys4.length; _i4++) {
                                    var propName = _Object$keys4[_i4];
                                    var propDef = propsDef[propName];
                                    propDef && propDef.allowDelegate && (delegateProps[propName] = props[propName]);
                                }
                                var childOverridesPromise = send_send(target, "zoid_delegate_" + name, {
                                    overrides: {
                                        props: delegateProps,
                                        event: event,
                                        close: close,
                                        onError: onError,
                                        getInternalState: getInternalState,
                                        setInternalState: setInternalState
                                    }
                                }).then((function(_ref11) {
                                    var parentComp = _ref11.data.parent;
                                    clean.register((function(err) {
                                        if (!isWindowClosed(target)) return parentComp.destroy(err);
                                    }));
                                    return parentComp.getDelegateOverrides();
                                })).catch((function(err) {
                                    throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + stringifyError(err));
                                }));
                                getProxyContainerOverride = function() {
                                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                                    return childOverridesPromise.then((function(childOverrides) {
                                        return childOverrides.getProxyContainer.apply(childOverrides, args);
                                    }));
                                };
                                renderContainerOverride = function() {
                                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                                    return childOverridesPromise.then((function(childOverrides) {
                                        return childOverrides.renderContainer.apply(childOverrides, args);
                                    }));
                                };
                                showOverride = function() {
                                    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                                    return childOverridesPromise.then((function(childOverrides) {
                                        return childOverrides.show.apply(childOverrides, args);
                                    }));
                                };
                                hideOverride = function() {
                                    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
                                    return childOverridesPromise.then((function(childOverrides) {
                                        return childOverrides.hide.apply(childOverrides, args);
                                    }));
                                };
                                watchForUnloadOverride = function() {
                                    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) args[_key5] = arguments[_key5];
                                    return childOverridesPromise.then((function(childOverrides) {
                                        return childOverrides.watchForUnload.apply(childOverrides, args);
                                    }));
                                };
                                if (context === CONTEXT.IFRAME) {
                                    getProxyWindowOverride = function() {
                                        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) args[_key6] = arguments[_key6];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.getProxyWindow.apply(childOverrides, args);
                                        }));
                                    };
                                    openFrameOverride = function() {
                                        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) args[_key7] = arguments[_key7];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.openFrame.apply(childOverrides, args);
                                        }));
                                    };
                                    openPrerenderFrameOverride = function() {
                                        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) args[_key8] = arguments[_key8];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.openPrerenderFrame.apply(childOverrides, args);
                                        }));
                                    };
                                    prerenderOverride = function() {
                                        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) args[_key9] = arguments[_key9];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.prerender.apply(childOverrides, args);
                                        }));
                                    };
                                    openOverride = function() {
                                        for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) args[_key10] = arguments[_key10];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.open.apply(childOverrides, args);
                                        }));
                                    };
                                    openPrerenderOverride = function() {
                                        for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) args[_key11] = arguments[_key11];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.openPrerender.apply(childOverrides, args);
                                        }));
                                    };
                                }
                                return childOverridesPromise;
                            }(context, target);
                        }));
                        var windowProp = props.window;
                        var watchForUnloadPromise = watchForUnload();
                        var buildUrlPromise = function(propsDef, props) {
                            var params = {};
                            var keys = Object.keys(props);
                            return promise_ZalgoPromise.all(keys.map((function(key) {
                                var prop = propsDef[key];
                                if (prop) return promise_ZalgoPromise.resolve().then((function() {
                                    var value = props[key];
                                    if (value && prop.queryParam) return value;
                                })).then((function(value) {
                                    if (null != value) return promise_ZalgoPromise.all([ props_getQueryParam(prop, key, value), getQueryValue(prop, 0, value) ]).then((function(_ref) {
                                        var queryParam = _ref[0], queryValue = _ref[1];
                                        var result;
                                        if ("boolean" == typeof queryValue) result = queryValue.toString(); else if ("string" == typeof queryValue) result = queryValue.toString(); else if ("object" == typeof queryValue && null !== queryValue) {
                                            if (prop.serialization === PROP_SERIALIZATION.JSON) result = JSON.stringify(queryValue); else if (prop.serialization === PROP_SERIALIZATION.BASE64) result = btoa(JSON.stringify(queryValue)); else if (prop.serialization === PROP_SERIALIZATION.DOTIFY || !prop.serialization) {
                                                result = function dotify(obj, prefix, newobj) {
                                                    void 0 === prefix && (prefix = "");
                                                    void 0 === newobj && (newobj = {});
                                                    prefix = prefix ? prefix + "." : prefix;
                                                    for (var key in obj) obj.hasOwnProperty(key) && null != obj[key] && "function" != typeof obj[key] && (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every((function(val) {
                                                        return "object" != typeof val;
                                                    })) ? newobj["" + prefix + key + "[]"] = obj[key].join(",") : obj[key] && "object" == typeof obj[key] ? newobj = dotify(obj[key], "" + prefix + key, newobj) : newobj["" + prefix + key] = obj[key].toString());
                                                    return newobj;
                                                }(queryValue, key);
                                                for (var _i12 = 0, _Object$keys8 = Object.keys(result); _i12 < _Object$keys8.length; _i12++) {
                                                    var dotkey = _Object$keys8[_i12];
                                                    params[dotkey] = result[dotkey];
                                                }
                                                return;
                                            }
                                        } else "number" == typeof queryValue && (result = queryValue.toString());
                                        params[queryParam] = result;
                                    }));
                                }));
                            }))).then((function() {
                                return params;
                            }));
                        }(propsDef, props).then((function(query) {
                            return function(url, options) {
                                var query = options.query || {};
                                var hash = options.hash || {};
                                var originalUrl;
                                var originalHash;
                                var _url$split = url.split("#");
                                originalHash = _url$split[1];
                                var _originalUrl$split = (originalUrl = _url$split[0]).split("?");
                                originalUrl = _originalUrl$split[0];
                                var queryString = extendQuery(_originalUrl$split[1], query);
                                var hashString = extendQuery(originalHash, hash);
                                queryString && (originalUrl = originalUrl + "?" + queryString);
                                hashString && (originalUrl = originalUrl + "#" + hashString);
                                return originalUrl;
                            }(function(url) {
                                if (!(domain = getDomainFromUrl(url), 0 === domain.indexOf("mock:"))) return url;
                                var domain;
                                throw new Error("Mock urls not supported out of test mode");
                            }(getUrl()), {
                                query: query
                            });
                        }));
                        var onRenderPromise = event.trigger(EVENT.RENDER);
                        var getProxyContainerPromise = getProxyContainer(container);
                        var getProxyWindowPromise = getProxyWindow();
                        var buildWindowNamePromise = getProxyWindowPromise.then((function(proxyWin) {
                            return function(_temp) {
                                var _ref4 = void 0 === _temp ? {} : _temp, proxyWin = _ref4.proxyWin, childDomain = _ref4.childDomain, domain = _ref4.domain, context = (void 0 === _ref4.target && window, 
                                _ref4.context), uid = _ref4.uid;
                                return function(proxyWin, childDomain, domain, uid) {
                                    return getPropsForChild(domain).then((function(childProps) {
                                        var value = setup_serializeMessage(proxyWin, domain, childProps);
                                        var propRef = childDomain === getDomain() ? {
                                            type: "uid",
                                            uid: uid
                                        } : {
                                            type: "raw",
                                            value: value
                                        };
                                        if ("uid" === propRef.type) {
                                            var global = lib_global_getGlobal(window);
                                            global.props = global.props || {};
                                            global.props[uid] = value;
                                            clean.register((function() {
                                                delete global.props[uid];
                                            }));
                                        }
                                        return propRef;
                                    }));
                                }(proxyWin, childDomain, domain, uid).then((function(propsRef) {
                                    return {
                                        uid: uid,
                                        context: context,
                                        tag: tag,
                                        version: "9_0_63",
                                        childDomain: childDomain,
                                        parentDomain: getDomain(window),
                                        parent: getWindowRef(0, childDomain, uid, context),
                                        props: propsRef,
                                        exports: setup_serializeMessage(proxyWin, domain, (win = proxyWin, {
                                            init: initChild,
                                            close: close,
                                            checkClose: function() {
                                                return checkWindowClose(win);
                                            },
                                            resize: resize,
                                            onError: onError,
                                            show: show,
                                            hide: hide
                                        }))
                                    };
                                    var win;
                                }));
                            }({
                                proxyWin: (_ref5 = {
                                    proxyWin: proxyWin,
                                    childDomain: childDomain,
                                    domain: domain,
                                    target: target,
                                    context: context,
                                    uid: uid
                                }).proxyWin,
                                childDomain: _ref5.childDomain,
                                domain: _ref5.domain,
                                target: _ref5.target,
                                context: _ref5.context,
                                uid: _ref5.uid
                            }).then((function(childPayload) {
                                return "__zoid__" + name + "__" + base64encode(JSON.stringify(childPayload)) + "__";
                            }));
                            var _ref5;
                        }));
                        var openFramePromise = buildWindowNamePromise.then((function(windowName) {
                            return openFrame(context, {
                                windowName: windowName
                            });
                        }));
                        var openPrerenderFramePromise = openPrerenderFrame(context);
                        var renderContainerPromise = promise_ZalgoPromise.hash({
                            proxyContainer: getProxyContainerPromise,
                            proxyFrame: openFramePromise,
                            proxyPrerenderFrame: openPrerenderFramePromise
                        }).then((function(_ref12) {
                            return renderContainer(_ref12.proxyContainer, {
                                context: context,
                                uid: uid,
                                proxyFrame: _ref12.proxyFrame,
                                proxyPrerenderFrame: _ref12.proxyPrerenderFrame
                            });
                        })).then((function(proxyContainer) {
                            return proxyContainer;
                        }));
                        var openPromise = promise_ZalgoPromise.hash({
                            windowName: buildWindowNamePromise,
                            proxyFrame: openFramePromise,
                            proxyWin: getProxyWindowPromise
                        }).then((function(_ref13) {
                            var proxyWin = _ref13.proxyWin;
                            return windowProp ? proxyWin : open(context, {
                                windowName: _ref13.windowName,
                                proxyWin: proxyWin,
                                proxyFrame: _ref13.proxyFrame
                            });
                        }));
                        var openPrerenderPromise = promise_ZalgoPromise.hash({
                            proxyWin: openPromise,
                            proxyPrerenderFrame: openPrerenderFramePromise
                        }).then((function(_ref14) {
                            return openPrerender(context, _ref14.proxyWin, _ref14.proxyPrerenderFrame);
                        }));
                        var setStatePromise = openPromise.then((function(proxyWin) {
                            currentProxyWin = proxyWin;
                            return setProxyWin(proxyWin);
                        }));
                        var prerenderPromise = promise_ZalgoPromise.hash({
                            proxyPrerenderWin: openPrerenderPromise,
                            state: setStatePromise
                        }).then((function(_ref15) {
                            return prerender(_ref15.proxyPrerenderWin, {
                                context: context,
                                uid: uid
                            });
                        }));
                        var setWindowNamePromise = promise_ZalgoPromise.hash({
                            proxyWin: openPromise,
                            windowName: buildWindowNamePromise
                        }).then((function(_ref16) {
                            if (windowProp) return _ref16.proxyWin.setName(_ref16.windowName);
                        }));
                        var loadUrlPromise = promise_ZalgoPromise.hash({
                            proxyWin: openPromise,
                            builtUrl: buildUrlPromise,
                            windowName: setWindowNamePromise,
                            prerender: prerenderPromise
                        }).then((function(_ref17) {
                            return _ref17.proxyWin.setLocation(_ref17.builtUrl);
                        }));
                        var watchForClosePromise = openPromise.then((function(proxyWin) {
                            !function watchForClose(proxyWin, context) {
                                var cancelled = !1;
                                clean.register((function() {
                                    cancelled = !0;
                                }));
                                return promise_ZalgoPromise.delay(2e3).then((function() {
                                    return proxyWin.isClosed();
                                })).then((function(isClosed) {
                                    return isClosed ? close(new Error("Detected " + context + " close")) : cancelled ? void 0 : watchForClose(proxyWin, context);
                                }));
                            }(proxyWin, context);
                        }));
                        var onDisplayPromise = promise_ZalgoPromise.hash({
                            container: renderContainerPromise,
                            prerender: prerenderPromise
                        }).then((function() {
                            return event.trigger(EVENT.DISPLAY);
                        }));
                        var openBridgePromise = openPromise.then((function(proxyWin) {}));
                        var runTimeoutPromise = loadUrlPromise.then((function() {
                            return promise_ZalgoPromise.try((function() {
                                var timeout = props.timeout;
                                if (timeout) return initPromise.timeout(timeout, new Error("Loading component timed out after " + timeout + " milliseconds"));
                            }));
                        }));
                        var onRenderedPromise = initPromise.then((function() {
                            return event.trigger(EVENT.RENDERED);
                        }));
                        return promise_ZalgoPromise.hash({
                            initPromise: initPromise,
                            buildUrlPromise: buildUrlPromise,
                            onRenderPromise: onRenderPromise,
                            getProxyContainerPromise: getProxyContainerPromise,
                            openFramePromise: openFramePromise,
                            openPrerenderFramePromise: openPrerenderFramePromise,
                            renderContainerPromise: renderContainerPromise,
                            openPromise: openPromise,
                            openPrerenderPromise: openPrerenderPromise,
                            setStatePromise: setStatePromise,
                            prerenderPromise: prerenderPromise,
                            loadUrlPromise: loadUrlPromise,
                            buildWindowNamePromise: buildWindowNamePromise,
                            setWindowNamePromise: setWindowNamePromise,
                            watchForClosePromise: watchForClosePromise,
                            onDisplayPromise: onDisplayPromise,
                            openBridgePromise: openBridgePromise,
                            runTimeoutPromise: runTimeoutPromise,
                            onRenderedPromise: onRenderedPromise,
                            delegatePromise: delegatePromise,
                            watchForUnloadPromise: watchForUnloadPromise
                        });
                    })).catch((function(err) {
                        return promise_ZalgoPromise.all([ onError(err), destroy(err) ]).then((function() {
                            throw err;
                        }), (function() {
                            throw err;
                        }));
                    })).then(src_util_noop);
                },
                destroy: destroy,
                setProps: setProps,
                getHelpers: getHelpers,
                getDelegateOverrides: function() {
                    return promise_ZalgoPromise.try((function() {
                        return {
                            getProxyContainer: getProxyContainer,
                            show: show,
                            hide: hide,
                            renderContainer: renderContainer,
                            getProxyWindow: getProxyWindow,
                            watchForUnload: watchForUnload,
                            openFrame: openFrame,
                            openPrerenderFrame: openPrerenderFrame,
                            prerender: prerender,
                            open: open,
                            openPrerender: openPrerender,
                            setProxyWin: setProxyWin
                        };
                    }));
                }
            };
        }
        var react = {
            register: function(tag, propsDef, init, _ref) {
                var React = _ref.React, ReactDOM = _ref.ReactDOM;
                return function(_React$Component) {
                    _inheritsLoose(_class, _React$Component);
                    function _class() {
                        return _React$Component.apply(this, arguments) || this;
                    }
                    var _proto = _class.prototype;
                    _proto.render = function() {
                        return React.createElement("div", null);
                    };
                    _proto.componentDidMount = function() {
                        var el = ReactDOM.findDOMNode(this);
                        var parent = init(extend({}, this.props));
                        parent.render(el, CONTEXT.IFRAME);
                        this.setState({
                            parent: parent
                        });
                    };
                    _proto.componentDidUpdate = function() {
                        this.state && this.state.parent && this.state.parent.updateProps(extend({}, this.props)).catch(src_util_noop);
                    };
                    return _class;
                }(React.Component);
            }
        };
        var vue = {
            register: function(tag, propsDef, init, Vue) {
                return Vue.component(tag, {
                    render: function(createElement) {
                        return createElement("div");
                    },
                    inheritAttrs: !1,
                    mounted: function() {
                        var el = this.$el;
                        this.parent = init(_extends({}, this.$attrs));
                        this.parent.render(el, CONTEXT.IFRAME);
                    },
                    watch: {
                        $attrs: {
                            handler: function() {
                                this.parent && this.$attrs && this.parent.updateProps(_extends({}, this.$attrs)).catch(src_util_noop);
                            },
                            deep: !0
                        }
                    }
                });
            }
        };
        var angular = {
            register: function(tag, propsDef, init, ng) {
                return ng.module(tag, []).directive(tag.replace(/-([a-z])/g, (function(g) {
                    return g[1].toUpperCase();
                })), (function() {
                    var scope = {};
                    for (var _i2 = 0, _Object$keys2 = Object.keys(propsDef); _i2 < _Object$keys2.length; _i2++) scope[_Object$keys2[_i2]] = "=";
                    scope.props = "=";
                    return {
                        scope: scope,
                        restrict: "E",
                        controller: [ "$scope", "$element", function($scope, $element) {
                            function safeApply() {
                                if ("$apply" !== $scope.$root.$$phase && "$digest" !== $scope.$root.$$phase) try {
                                    $scope.$apply();
                                } catch (err) {}
                            }
                            var getProps = function() {
                                return replaceObject($scope.props, (function(item) {
                                    return "function" == typeof item ? function() {
                                        var result = item.apply(this, arguments);
                                        safeApply();
                                        return result;
                                    } : item;
                                }));
                            };
                            var instance = init(getProps());
                            instance.render($element[0], CONTEXT.IFRAME);
                            $scope.$watch((function() {
                                instance.updateProps(getProps()).catch(src_util_noop);
                            }));
                        } ]
                    };
                }));
            }
        };
        var angular2 = {
            register: function(tag, propsDef, init, _ref) {
                var NgModule = _ref.NgModule, ElementRef = _ref.ElementRef, NgZone = _ref.NgZone;
                var getProps = function(component) {
                    return replaceObject(_extends({}, component.internalProps, component.props), (function(item) {
                        return "function" == typeof item ? function() {
                            var _arguments = arguments, _this = this;
                            return component.zone.run((function() {
                                return item.apply(_this, _arguments);
                            }));
                        } : item;
                    }));
                };
                var ComponentInstance = (0, _ref.Component)({
                    selector: tag,
                    template: "<div></div>",
                    inputs: [ "props" ]
                }).Class({
                    constructor: [ ElementRef, NgZone, function(elementRef, zone) {
                        this._props = {};
                        this.elementRef = elementRef;
                        this.zone = zone;
                    } ],
                    ngOnInit: function() {
                        var targetElement = this.elementRef.nativeElement;
                        this.parent = init(getProps(this));
                        this.parent.render(targetElement, CONTEXT.IFRAME);
                    },
                    ngDoCheck: function() {
                        if (this.parent && !function(obj1, obj2) {
                            var checked = {};
                            for (var key in obj1) if (obj1.hasOwnProperty(key)) {
                                checked[key] = !0;
                                if (obj1[key] !== obj2[key]) return !1;
                            }
                            for (var _key in obj2) if (!checked[_key]) return !1;
                            return !0;
                        }(this._props, this.props)) {
                            this._props = _extends({}, this.props);
                            this.parent.updateProps(getProps(this));
                        }
                    }
                });
                return NgModule({
                    declarations: [ ComponentInstance ],
                    exports: [ ComponentInstance ]
                }).Class({
                    constructor: function() {}
                });
            }
        };
        function defaultContainerTemplate(_ref) {
            var uid = _ref.uid, frame = _ref.frame, prerenderFrame = _ref.prerenderFrame, doc = _ref.doc, props = _ref.props, event = _ref.event, _ref$dimensions = _ref.dimensions, width = _ref$dimensions.width, height = _ref$dimensions.height;
            if (frame && prerenderFrame) {
                var div = doc.createElement("div");
                div.setAttribute("id", uid);
                var style = doc.createElement("style");
                props.cspNonce && style.setAttribute("nonce", props.cspNonce);
                style.appendChild(doc.createTextNode("\n            #" + uid + " {\n                display: inline-block;\n                position: relative;\n                width: " + width + ";\n                height: " + height + ";\n            }\n\n            #" + uid + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + uid + " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" + uid + " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "));
                div.appendChild(frame);
                div.appendChild(prerenderFrame);
                div.appendChild(style);
                prerenderFrame.classList.add("zoid-visible");
                frame.classList.add("zoid-invisible");
                event.on(EVENT.RENDERED, (function() {
                    prerenderFrame.classList.remove("zoid-visible");
                    prerenderFrame.classList.add("zoid-invisible");
                    frame.classList.remove("zoid-invisible");
                    frame.classList.add("zoid-visible");
                    setTimeout((function() {
                        destroyElement(prerenderFrame);
                    }), 1);
                }));
                event.on(EVENT.RESIZE, (function(_ref2) {
                    var newWidth = _ref2.width, newHeight = _ref2.height;
                    "number" == typeof newWidth && (div.style.width = toCSS(newWidth));
                    "number" == typeof newHeight && (div.style.height = toCSS(newHeight));
                }));
                return div;
            }
        }
        function defaultPrerenderTemplate(_ref) {
            var doc = _ref.doc, props = _ref.props;
            var html = doc.createElement("html");
            var body = doc.createElement("body");
            var style = doc.createElement("style");
            var spinner = doc.createElement("div");
            spinner.classList.add("spinner");
            props.cspNonce && style.setAttribute("nonce", props.cspNonce);
            html.appendChild(body);
            body.appendChild(spinner);
            body.appendChild(style);
            style.appendChild(doc.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "));
            return html;
        }
        var props_defaultNoop = function() {
            return src_util_noop;
        };
        var props_decorateOnce = function(_ref) {
            return once(_ref.value);
        };
        var cleanInstances = cleanup();
        var cleanZoid = cleanup();
        function component_component(opts) {
            var options = function(options) {
                var tag = options.tag, url = options.url, domain = options.domain, bridgeUrl = options.bridgeUrl, _options$props = options.props, propsDef = void 0 === _options$props ? {} : _options$props, _options$dimensions = options.dimensions, dimensions = void 0 === _options$dimensions ? {} : _options$dimensions, _options$autoResize = options.autoResize, autoResize = void 0 === _options$autoResize ? {} : _options$autoResize, _options$allowedParen = options.allowedParentDomains, allowedParentDomains = void 0 === _options$allowedParen ? "*" : _options$allowedParen, _options$attributes = options.attributes, attributes = void 0 === _options$attributes ? {} : _options$attributes, _options$defaultConte = options.defaultContext, defaultContext = void 0 === _options$defaultConte ? CONTEXT.IFRAME : _options$defaultConte, _options$containerTem = options.containerTemplate, containerTemplate = void 0 === _options$containerTem ? defaultContainerTemplate : _options$containerTem, _options$prerenderTem = options.prerenderTemplate, prerenderTemplate = void 0 === _options$prerenderTem ? defaultPrerenderTemplate : _options$prerenderTem, validate = options.validate, _options$eligible = options.eligible, eligible = void 0 === _options$eligible ? function() {
                    return {
                        eligible: !0
                    };
                } : _options$eligible, _options$logger = options.logger, logger = void 0 === _options$logger ? {
                    info: src_util_noop
                } : _options$logger;
                var name = tag.replace(/-/g, "_");
                var _dimensions$width = dimensions.width, width = void 0 === _dimensions$width ? "300px" : _dimensions$width, _dimensions$height = dimensions.height, height = void 0 === _dimensions$height ? "150px" : _dimensions$height;
                propsDef = _extends({}, {
                    window: {
                        type: "object",
                        sendToChild: !1,
                        required: !1,
                        allowDelegate: !0,
                        validate: function(_ref2) {
                            var value = _ref2.value;
                            if (!isWindow(value) && !window_ProxyWindow.isProxyWindow(value)) throw new Error("Expected Window or ProxyWindow");
                            if (isWindow(value)) {
                                if (isWindowClosed(value)) throw new Error("Window is closed");
                                if (!isSameDomain(value)) throw new Error("Window is not same domain");
                            }
                        },
                        decorate: function(_ref3) {
                            return setup_toProxyWindow(_ref3.value);
                        }
                    },
                    timeout: {
                        type: "number",
                        required: !1,
                        sendToChild: !1
                    },
                    close: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref4) {
                            return _ref4.close;
                        }
                    },
                    focus: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref5) {
                            return _ref5.focus;
                        }
                    },
                    resize: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref6) {
                            return _ref6.resize;
                        }
                    },
                    uid: {
                        type: "string",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref7) {
                            return _ref7.uid;
                        }
                    },
                    cspNonce: {
                        type: "string",
                        required: !1
                    },
                    getParent: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref8) {
                            return _ref8.getParent;
                        }
                    },
                    getParentDomain: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref9) {
                            return _ref9.getParentDomain;
                        }
                    },
                    show: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref10) {
                            return _ref10.show;
                        }
                    },
                    hide: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref11) {
                            return _ref11.hide;
                        }
                    },
                    onDisplay: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        allowDelegate: !0,
                        default: props_defaultNoop,
                        decorate: props_decorateOnce
                    },
                    onRendered: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        default: props_defaultNoop,
                        decorate: props_decorateOnce
                    },
                    onRender: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        default: props_defaultNoop,
                        decorate: props_decorateOnce
                    },
                    onClose: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        allowDelegate: !0,
                        default: props_defaultNoop,
                        decorate: props_decorateOnce
                    },
                    onDestroy: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        allowDelegate: !0,
                        default: props_defaultNoop,
                        decorate: props_decorateOnce
                    },
                    onResize: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        allowDelegate: !0,
                        default: props_defaultNoop
                    },
                    onFocus: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        allowDelegate: !0,
                        default: props_defaultNoop
                    },
                    onError: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(_ref12) {
                            return _ref12.onError;
                        }
                    },
                    onProps: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        default: props_defaultNoop,
                        childDecorate: function(_ref13) {
                            return _ref13.onProps;
                        }
                    }
                }, propsDef);
                if (!containerTemplate) throw new Error("Container template required");
                return {
                    name: name,
                    tag: tag,
                    url: url,
                    domain: domain,
                    bridgeUrl: bridgeUrl,
                    propsDef: propsDef,
                    dimensions: {
                        width: width,
                        height: height
                    },
                    autoResize: autoResize,
                    allowedParentDomains: allowedParentDomains,
                    attributes: attributes,
                    defaultContext: defaultContext,
                    containerTemplate: containerTemplate,
                    prerenderTemplate: prerenderTemplate,
                    validate: validate,
                    logger: logger,
                    eligible: eligible
                };
            }(opts);
            var name = options.name, tag = options.tag, defaultContext = options.defaultContext, propsDef = options.propsDef, eligible = options.eligible;
            var global = lib_global_getGlobal();
            var driverCache = {};
            var instances = [];
            var isChild = function() {
                var payload = getChildPayload();
                return Boolean(payload && payload.tag === tag && payload.childDomain === getDomain());
            };
            var registerChild = memoize((function() {
                if (isChild()) {
                    if (window.xprops) {
                        delete global.components[tag];
                        throw new Error("Can not register " + name + " as child - child already registered");
                    }
                    var child = function(options) {
                        var propsDef = options.propsDef, autoResize = options.autoResize, allowedParentDomains = options.allowedParentDomains;
                        var onPropHandlers = [];
                        var childPayload = getChildPayload();
                        var props;
                        if (!childPayload) throw new Error("No child payload found");
                        if ("9_0_63" !== childPayload.version) throw new Error("Parent window has zoid version " + childPayload.version + ", child window has version 9_0_63");
                        var uid = childPayload.uid, parentDomain = childPayload.parentDomain, exports = childPayload.exports, context = childPayload.context, propsRef = childPayload.props;
                        var parentComponentWindow = function(ref) {
                            var type = ref.type;
                            if ("opener" === type) return assertExists("opener", getOpener(window));
                            if ("parent" === type && "number" == typeof ref.distance) return assertExists("parent", function(win, n) {
                                void 0 === n && (n = 1);
                                return function(win, n) {
                                    void 0 === n && (n = 1);
                                    var parent = win;
                                    for (var i = 0; i < n; i++) {
                                        if (!parent) return;
                                        parent = utils_getParent(parent);
                                    }
                                    return parent;
                                }(win, getDistanceFromTop(win) - n);
                            }(window, ref.distance));
                            if ("global" === type && ref.uid && "string" == typeof ref.uid) {
                                var uid = ref.uid;
                                var ancestor = getAncestor(window);
                                if (!ancestor) throw new Error("Can not find ancestor window");
                                for (var _i2 = 0, _getAllFramesInWindow2 = getAllFramesInWindow(ancestor); _i2 < _getAllFramesInWindow2.length; _i2++) {
                                    var frame = _getAllFramesInWindow2[_i2];
                                    if (isSameDomain(frame)) {
                                        var global = lib_global_getGlobal(frame);
                                        if (global && global.windows && global.windows[uid]) return global.windows[uid];
                                    }
                                }
                            }
                            throw new Error("Unable to find " + type + " parent component window");
                        }(childPayload.parent);
                        var parent = setup_deserializeMessage(parentComponentWindow, parentDomain, exports);
                        var show = parent.show, hide = parent.hide, close = parent.close;
                        var getParent = function() {
                            return parentComponentWindow;
                        };
                        var getParentDomain = function() {
                            return parentDomain;
                        };
                        var onProps = function(handler) {
                            onPropHandlers.push(handler);
                        };
                        var onError = function(err) {
                            return promise_ZalgoPromise.try((function() {
                                if (parent && parent.onError) return parent.onError(err);
                                throw err;
                            }));
                        };
                        var resize = function(_ref2) {
                            return parent.resize.fireAndForget({
                                width: _ref2.width,
                                height: _ref2.height
                            });
                        };
                        var setProps = function(newProps, origin, isUpdate) {
                            void 0 === isUpdate && (isUpdate = !1);
                            var normalizedProps = function(parentComponentWindow, propsDef, props, origin, helpers, isUpdate) {
                                void 0 === isUpdate && (isUpdate = !1);
                                var result = {};
                                for (var _i2 = 0, _Object$keys2 = Object.keys(props); _i2 < _Object$keys2.length; _i2++) {
                                    var key = _Object$keys2[_i2];
                                    var prop = propsDef[key];
                                    if (!prop || !prop.sameDomain || origin === getDomain(window) && isSameDomain(parentComponentWindow)) {
                                        var value = normalizeChildProp(propsDef, 0, key, props[key], helpers);
                                        result[key] = value;
                                        prop && prop.alias && !result[prop.alias] && (result[prop.alias] = value);
                                    }
                                }
                                if (!isUpdate) for (var _i4 = 0, _Object$keys4 = Object.keys(propsDef); _i4 < _Object$keys4.length; _i4++) {
                                    var _key = _Object$keys4[_i4];
                                    props.hasOwnProperty(_key) || (result[_key] = normalizeChildProp(propsDef, 0, _key, void 0, helpers));
                                }
                                return result;
                            }(parentComponentWindow, propsDef, newProps, origin, {
                                show: show,
                                hide: hide,
                                close: close,
                                focus: child_focus,
                                onError: onError,
                                resize: resize,
                                onProps: onProps,
                                getParent: getParent,
                                getParentDomain: getParentDomain,
                                uid: uid
                            }, isUpdate);
                            props ? extend(props, normalizedProps) : props = normalizedProps;
                            for (var _i4 = 0; _i4 < onPropHandlers.length; _i4++) (0, onPropHandlers[_i4])(props);
                        };
                        var updateProps = function(newProps) {
                            return promise_ZalgoPromise.try((function() {
                                return setProps(newProps, parentDomain, !0);
                            }));
                        };
                        return {
                            init: function() {
                                return promise_ZalgoPromise.try((function() {
                                    !function(allowedParentDomains, domain) {
                                        if (!matchDomain(allowedParentDomains, domain)) throw new Error("Can not be rendered by domain: " + domain);
                                    }(allowedParentDomains, parentDomain);
                                    markWindowKnown(parentComponentWindow);
                                    !function() {
                                        window.addEventListener("beforeunload", (function() {
                                            parent.checkClose.fireAndForget();
                                        }));
                                        window.addEventListener("unload", (function() {
                                            parent.checkClose.fireAndForget();
                                        }));
                                        onCloseWindow(parentComponentWindow, (function() {
                                            child_destroy();
                                        }));
                                    }();
                                    return parent.init({
                                        updateProps: updateProps,
                                        close: child_destroy
                                    });
                                })).then((function() {
                                    return (_autoResize$width = autoResize.width, width = void 0 !== _autoResize$width && _autoResize$width, 
                                    _autoResize$height = autoResize.height, height = void 0 !== _autoResize$height && _autoResize$height, 
                                    _autoResize$element = autoResize.element, elementReady(void 0 === _autoResize$element ? "body" : _autoResize$element).catch(src_util_noop).then((function(element) {
                                        return {
                                            width: width,
                                            height: height,
                                            element: element
                                        };
                                    }))).then((function(_ref3) {
                                        var width = _ref3.width, height = _ref3.height, element = _ref3.element;
                                        element && (width || height) && context !== CONTEXT.POPUP && onResize(element, (function(_ref4) {
                                            resize({
                                                width: width ? _ref4.width : void 0,
                                                height: height ? _ref4.height : void 0
                                            });
                                        }), {
                                            width: width,
                                            height: height
                                        });
                                    }));
                                    var _autoResize$width, width, _autoResize$height, height, _autoResize$element;
                                })).catch((function(err) {
                                    onError(err);
                                }));
                            },
                            getProps: function() {
                                if (props) return props;
                                setProps(function(parentComponentWindow, domain, _ref) {
                                    var type = _ref.type, uid = _ref.uid;
                                    var props;
                                    if ("raw" === type) props = _ref.value; else if ("uid" === type) {
                                        if (!isSameDomain(parentComponentWindow)) throw new Error("Parent component window is on a different domain - expected " + getDomain() + " - can not retrieve props");
                                        var global = lib_global_getGlobal(parentComponentWindow);
                                        props = assertExists("props", global && global.props[uid]);
                                    }
                                    if (!props) throw new Error("Could not find props");
                                    return setup_deserializeMessage(parentComponentWindow, domain, props);
                                }(parentComponentWindow, parentDomain, propsRef), parentDomain);
                                return props;
                            }
                        };
                    }(options);
                    child.init();
                    return child;
                }
            }));
            var init = function init(props) {
                var instance;
                var _eligible = eligible({
                    props: props = props || {}
                }), eligibility = _eligible.eligible, reason = _eligible.reason;
                var onDestroy = props.onDestroy;
                props.onDestroy = function() {
                    instance && eligibility && instances.splice(instances.indexOf(instance), 1);
                    if (onDestroy) return onDestroy.apply(void 0, arguments);
                };
                var parent = parentComponent(options);
                parent.init();
                eligibility ? parent.setProps(props) : props.onDestroy && props.onDestroy();
                cleanInstances.register((function(err) {
                    parent.destroy(err || new Error("zoid destroyed all components"));
                }));
                var _render = function(target, container, context) {
                    return promise_ZalgoPromise.try((function() {
                        if (!eligibility) {
                            var err = new Error(reason || name + " component is not eligible");
                            return parent.destroy(err).then((function() {
                                throw err;
                            }));
                        }
                        if (!isWindow(target)) throw new Error("Must pass window to renderTo");
                        return function(props, context) {
                            return promise_ZalgoPromise.try((function() {
                                if (props.window) return setup_toProxyWindow(props.window).getType();
                                if (context) {
                                    if (context !== CONTEXT.IFRAME && context !== CONTEXT.POPUP) throw new Error("Unrecognized context: " + context);
                                    return context;
                                }
                                return defaultContext;
                            }));
                        }(props, context);
                    })).then((function(finalContext) {
                        container = function(context, container) {
                            if (container) {
                                if ("string" != typeof container && !isElement(container)) throw new TypeError("Expected string or element selector to be passed");
                                return container;
                            }
                            if (context === CONTEXT.POPUP) return "body";
                            throw new Error("Expected element to be passed to render iframe");
                        }(finalContext, container);
                        return parent.render(target, container, finalContext);
                    })).catch((function(err) {
                        return parent.destroy(err).then((function() {
                            throw err;
                        }));
                    }));
                };
                instance = _extends({}, parent.getHelpers(), {
                    isEligible: function() {
                        return eligibility;
                    },
                    clone: function(_temp) {
                        var _ref3$decorate = (void 0 === _temp ? {} : _temp).decorate;
                        return init((void 0 === _ref3$decorate ? identity : _ref3$decorate)(props));
                    },
                    render: function(container, context) {
                        return _render(window, container, context);
                    },
                    renderTo: function(target, container, context) {
                        return _render(target, container, context);
                    }
                });
                eligibility && instances.push(instance);
                return instance;
            };
            registerChild();
            !function() {
                var allowDelegateListener = on_on("zoid_allow_delegate_" + name, (function() {
                    return !0;
                }));
                var delegateListener = on_on("zoid_delegate_" + name, (function(_ref) {
                    return {
                        parent: parentComponent(options, _ref.data.overrides, _ref.source)
                    };
                }));
                cleanZoid.register(allowDelegateListener.cancel);
                cleanZoid.register(delegateListener.cancel);
            }();
            global.components = global.components || {};
            if (global.components[tag]) throw new Error("Can not register multiple components with the same tag: " + tag);
            global.components[tag] = !0;
            return {
                init: init,
                instances: instances,
                driver: function(driverName, dep) {
                    var drivers = {
                        react: react,
                        angular: angular,
                        vue: vue,
                        angular2: angular2
                    };
                    if (!drivers[driverName]) throw new Error("Could not find driver for framework: " + driverName);
                    driverCache[driverName] || (driverCache[driverName] = drivers[driverName].register(tag, propsDef, init, dep));
                    return driverCache[driverName];
                },
                isChild: isChild,
                canRenderTo: function(win) {
                    return send_send(win, "zoid_allow_delegate_" + name).then((function(_ref2) {
                        return _ref2.data;
                    })).catch((function() {
                        return !1;
                    }));
                },
                registerChild: registerChild
            };
        }
        function create(options) {
            !function() {
                if (!global_getGlobal().initialized) {
                    global_getGlobal().initialized = !0;
                    on = (_ref3 = {
                        on: on_on,
                        send: send_send
                    }).on, send = _ref3.send, (global = global_getGlobal()).receiveMessage = global.receiveMessage || function(message) {
                        return receive_receiveMessage(message, {
                            on: on,
                            send: send
                        });
                    };
                    !function(_ref5) {
                        var on = _ref5.on, send = _ref5.send;
                        globalStore().getOrSet("postMessageListener", (function() {
                            return addEventListener(window, "message", (function(event) {
                                !function(event, _ref4) {
                                    var on = _ref4.on, send = _ref4.send;
                                    promise_ZalgoPromise.try((function() {
                                        var source = event.source || event.sourceElement;
                                        var origin = event.origin || event.originalEvent && event.originalEvent.origin;
                                        var data = event.data;
                                        "null" === origin && (origin = "file://");
                                        if (source) {
                                            if (!origin) throw new Error("Post message did not have origin domain");
                                            receive_receiveMessage({
                                                source: source,
                                                origin: origin,
                                                data: data
                                            }, {
                                                on: on,
                                                send: send
                                            });
                                        }
                                    }));
                                }(event, {
                                    on: on,
                                    send: send
                                });
                            }));
                        }));
                    }({
                        on: on_on,
                        send: send_send
                    });
                    !function(_ref8) {
                        var on = _ref8.on, send = _ref8.send;
                        globalStore("builtinListeners").getOrSet("helloListener", (function() {
                            var listener = on("postrobot_hello", {
                                domain: "*"
                            }, (function(_ref3) {
                                resolveHelloPromise(_ref3.source, {
                                    domain: _ref3.origin
                                });
                                return {
                                    instanceID: getInstanceID()
                                };
                            }));
                            var parent = getAncestor();
                            parent && sayHello(parent, {
                                send: send
                            }).catch((function(err) {}));
                            return listener;
                        }));
                    }({
                        on: on_on,
                        send: send_send
                    });
                }
                var _ref3, on, send, global;
            }();
            var comp = component_component(options);
            var init = function(props) {
                return comp.init(props);
            };
            init.driver = function(name, dep) {
                return comp.driver(name, dep);
            };
            init.isChild = function() {
                return comp.isChild();
            };
            init.canRenderTo = function(win) {
                return comp.canRenderTo(win);
            };
            init.instances = comp.instances;
            var child = comp.registerChild();
            child && (window.xprops = init.xprops = child.getProps());
            return init;
        }
        function destroyComponents(err) {
            var destroyPromise = cleanInstances.all(err);
            cleanInstances = cleanup();
            return destroyPromise;
        }
        var destroyAll = destroyComponents;
        function component_destroy(err) {
            destroyAll();
            delete window.__zoid_9_0_63__;
            !function() {
                !function() {
                    var responseListeners = globalStore("responseListeners");
                    for (var _i2 = 0, _responseListeners$ke2 = responseListeners.keys(); _i2 < _responseListeners$ke2.length; _i2++) {
                        var hash = _responseListeners$ke2[_i2];
                        var listener = responseListeners.get(hash);
                        listener && (listener.cancelled = !0);
                        responseListeners.del(hash);
                    }
                }();
                (listener = globalStore().get("postMessageListener")) && listener.cancel();
                var listener;
                delete window.__post_robot_10_0_42__;
            }();
            return cleanZoid.all(err);
        }
    } ]);
}));