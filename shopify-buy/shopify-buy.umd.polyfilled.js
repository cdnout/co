/**
* The MIT License (MIT)
* 
* Copyright (c) 2016 Shopify Inc.
* 
* Permission is hereby granted, free of charge, to any person obtaining a
* copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
* OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
* CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
* TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
* SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* 
* Version: 0.7.1 Commit: 66ba4e4
**/
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('shopify-buy', ['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.ShopifyBuy = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  (function () {
    'use strict';

    if (self.fetch) {
      return;
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }
      return name.toLowerCase();
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value;
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function (value, name) {
          this.append(name, value);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };

    Headers.prototype['delete'] = function (name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
      var values = this.map[normalizeName(name)];
      return values ? values[0] : null;
    };

    Headers.prototype.getAll = function (name) {
      return this.map[normalizeName(name)] || [];
    };

    Headers.prototype.has = function (name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)];
    };

    Headers.prototype.forEach = function (callback, thisArg) {
      Object.getOwnPropertyNames(this.map).forEach(function (name) {
        this.map[name].forEach(function (value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new Promise(function (resolve, reject) {
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function () {
          reject(reader.error);
        };
      });
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader);
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader);
    }

    var support = {
      blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };

    function Body() {
      this.bodyUsed = false;

      this._initBody = function (body) {
        this._bodyInit = body;
        if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (!body) {
          this._bodyText = '';
        } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
          // Only support ArrayBuffers for POST method.
          // Receiving ArrayBuffers happens via Blobs, instead.
        } else {
          throw new Error('unsupported BodyInit type');
        }
      };

      if (support.blob) {
        this.blob = function () {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };

        this.arrayBuffer = function () {
          return this.blob().then(readBlobAsArrayBuffer);
        };

        this.text = function () {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
      } else {
        this.text = function () {
          var rejected = consumed(this);
          return rejected ? rejected : Promise.resolve(this._bodyText);
        };
      }

      if (support.formData) {
        this.formData = function () {
          return this.text().then(decode);
        };
      }

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;
      if (Request.prototype.isPrototypeOf(input)) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!body) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = input;
      }

      this.credentials = options.credentials || this.credentials || 'omit';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }
      this._initBody(body);
    }

    Request.prototype.clone = function () {
      return new Request(this);
    };

    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function (bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }

    function headers(xhr) {
      var head = new Headers();
      var pairs = xhr.getAllResponseHeaders().trim().split('\n');
      pairs.forEach(function (header) {
        var split = header.trim().split(':');
        var key = split.shift().trim();
        var value = split.join(':').trim();
        head.append(key, value);
      });
      return head;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this._initBody(bodyInit);
      this.type = 'default';
      this.status = options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText;
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      this.url = options.url || '';
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };

    Response.error = function () {
      var response = new Response(null, { status: 0, statusText: '' });
      response.type = 'error';
      return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }

      return new Response(null, { status: status, headers: { location: url } });
    };

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function (input, init) {
      return new Promise(function (resolve, reject) {
        var request;
        if (Request.prototype.isPrototypeOf(input) && !init) {
          request = input;
        } else {
          request = new Request(input, init);
        }

        var xhr = new XMLHttpRequest();

        function responseURL() {
          if ('responseURL' in xhr) {
            return xhr.responseURL;
          }

          // Avoid security warnings on getResponseHeader when not allowed by CORS
          if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL');
          }

          return;
        }

        xhr.onload = function () {
          var status = xhr.status === 1223 ? 204 : xhr.status;
          if (status < 100 || status > 599) {
            reject(new TypeError('Network request failed'));
            return;
          }
          var options = {
            status: status,
            statusText: xhr.statusText,
            headers: headers(xhr),
            url: responseURL()
          };
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };

        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.open(request.method, request.url, true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        }

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    };
    self.fetch.polyfill = true;
  })();

  var toString$1 = {}.toString;

  var _cof = function _cof(it) {
    return toString$1.call(it).slice(8, -1);
  };

  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var global$1 = _global;
  var SHARED = '__core-js_shared__';
  var store = global$1[SHARED] || (global$1[SHARED] = {});
  var _shared = function _shared(key) {
    return store[key] || (store[key] = {});
  };

  var id = 0;
  var px = Math.random();
  var _uid = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks'),
        uid = _uid,
        _Symbol = _global.Symbol,
        USE_SYMBOL = typeof _Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = _cof;
  var TAG = _wks('toStringTag');
  var ARG = cof(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {/* empty */}
  };

  var _classof = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var _isObject = function _isObject(it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
  };

  var isObject = _isObject;
  var _anObject = function _anObject(it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

  var isObject$1 = _isObject;
  var document$1 = _global.document;
  var is = isObject$1(document$1) && isObject$1(document$1.createElement);
  var _domCreate = function _domCreate(it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject$2 = _isObject;
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function _toPrimitive(it, S) {
    if (!isObject$2(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var anObject = _anObject;
  var IE8_DOM_DEFINE = _ie8DomDefine;
  var toPrimitive = _toPrimitive;
  var dP$1 = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP$1(O, P, Attributes);
    } catch (e) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
    f: f
  };

  var _propertyDesc = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var dP = _objectDp;
  var createDesc = _propertyDesc;
  var _hide = _descriptors ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function _has(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.4.0' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });

  var _redefine = createCommonjsModule(function (module) {
    var global = _global,
        hide = _hide,
        has = _has,
        SRC = _uid('src'),
        TO_STRING = 'toString',
        $toString = Function[TO_STRING],
        TPL = ('' + $toString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === global) {
        O[key] = val;
      } else {
        if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else {
          if (O[key]) O[key] = val;else hide(O, key, val);
        }
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  });

  // 19.1.3.6 Object.prototype.toString()
  var classof = _classof;
  var test = {};
  test[_wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + classof(this) + ']';
    }, true);
  }

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function _defined(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var toInteger = _toInteger;
  var defined = _defined;
  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _library = false;

  var _aFunction = function _aFunction(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding
  var aFunction = _aFunction;
  var _ctx = function _ctx(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () /* ...args */{
      return fn.apply(that, arguments);
    };
  };

  var global$2 = _global;
  var core = _core;
  var hide$1 = _hide;
  var redefine$1 = _redefine;
  var ctx = _ctx;
  var PROTOTYPE = 'prototype';

  var $export$1 = function $export$1(type, name, source) {
    var IS_FORCED = type & $export$1.F,
        IS_GLOBAL = type & $export$1.G,
        IS_STATIC = type & $export$1.S,
        IS_PROTO = type & $export$1.P,
        IS_BIND = type & $export$1.B,
        target = IS_GLOBAL ? global$2 : IS_STATIC ? global$2[name] || (global$2[name] = {}) : (global$2[name] || {})[PROTOTYPE],
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
        key,
        own,
        out,
        exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, global$2) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if (target) redefine$1(target, key, out, type & $export$1.U);
      // export
      if (exports[key] != out) hide$1(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  global$2.core = core;
  // type bitmap
  $export$1.F = 1; // forced
  $export$1.G = 2; // global
  $export$1.S = 4; // static
  $export$1.P = 8; // proto
  $export$1.B = 16; // bind
  $export$1.W = 32; // wrap
  $export$1.U = 64; // safe
  $export$1.R = 128; // real proto method for `library` 
  var _export = $export$1;

  var _iterators = {};

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof$1 = _cof;
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof$1(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = _iobject;
  var defined$1 = _defined;
  var _toIobject = function _toIobject(it) {
    return IObject(defined$1(it));
  };

  // 7.1.15 ToLength
  var toInteger$1 = _toInteger;
  var min = Math.min;
  var _toLength = function _toLength(it) {
    return it > 0 ? min(toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var toInteger$2 = _toInteger;
  var max = Math.max;
  var min$1 = Math.min;
  var _toIndex = function _toIndex(index, length) {
    index = toInteger$2(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject$1 = _toIobject;
  var toLength = _toLength;
  var toIndex = _toIndex;
  var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject$1($this),
          length = toLength(O.length),
          index = toIndex(fromIndex, length),
          value;
      // Array#includes uses SameValueZero equality algorithm
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        if (value != value) return true;
        // Array#toIndex ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
      }return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');
  var uid = _uid;
  var _sharedKey = function _sharedKey(key) {
    return shared[key] || (shared[key] = uid(key));
  };

  var has$1 = _has;
  var toIObject = _toIobject;
  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function _objectKeysInternal(object, names) {
    var O = toIObject(object),
        i = 0,
        result = [],
        key;
    for (key in O) {
      if (key != IE_PROTO$1) has$1(O, key) && result.push(key);
    } // Don't enum bug & hidden keys
    while (names.length > i) {
      if (has$1(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    }return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = _objectKeysInternal;
  var enumBugKeys$1 = _enumBugKeys;

  var _objectKeys = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys$1);
  };

  var dP$2 = _objectDp;
  var anObject$2 = _anObject;
  var getKeys = _objectKeys;

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$2(O);
    var keys = getKeys(Properties),
        length = keys.length,
        i = 0,
        P;
    while (length > i) {
      dP$2.f(O, P = keys[i++], Properties[P]);
    }return O;
  };

  var _html = _global.document && document.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject$1 = _anObject;
  var dPs = _objectDps;
  var enumBugKeys = _enumBugKeys;
  var IE_PROTO = _sharedKey('IE_PROTO');
  var Empty = function Empty() {/* empty */};
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe'),
        i = enumBugKeys.length,
        lt = '<',
        gt = '>',
        iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;
    while (i--) {
      delete _createDict[PROTOTYPE$1][enumBugKeys[i]];
    }return _createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = anObject$1(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = _createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };

  var def = _objectDp.f;
  var has$2 = _has;
  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !has$2(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var create$1 = _objectCreate;
  var descriptor = _propertyDesc;
  var setToStringTag$1 = _setToStringTag;
  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = create$1(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag$1(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)
  var defined$2 = _defined;
  var _toObject = function _toObject(it) {
    return Object(defined$2(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has$3 = _has;
  var toObject = _toObject;
  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has$3(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }return O instanceof Object ? ObjectProto : null;
  };

  var LIBRARY = _library;
  var $export = _export;
  var redefine = _redefine;
  var hide = _hide;
  var has = _has;
  var Iterators = _iterators;
  var $iterCreate = _iterCreate;
  var setToStringTag = _setToStringTag;
  var getPrototypeOf = _objectGpo;
  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys());
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function returnThis() {
    return this;
  };

  var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function getMethod(kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
        $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
        methods,
        key,
        IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
  var _addToUnscopables = function _addToUnscopables(key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  var _iterStep = function _iterStep(done, value) {
    return { value: value, done: !!done };
  };

  var addToUnscopables = _addToUnscopables;
  var step = _iterStep;
  var Iterators$2 = _iterators;
  var toIObject$2 = _toIobject;

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = toIObject$2(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators$2.Arguments = Iterators$2.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var $iterators = es6_array_iterator;
  var redefine$2 = _redefine;
  var global$3 = _global;
  var hide$2 = _hide;
  var Iterators$1 = _iterators;
  var wks = _wks;
  var ITERATOR$1 = wks('iterator');
  var TO_STRING_TAG = wks('toStringTag');
  var ArrayValues = Iterators$1.Array;

  for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
    var NAME = collections[i],
        Collection = global$3[NAME],
        proto = Collection && Collection.prototype,
        key;
    if (proto) {
      if (!proto[ITERATOR$1]) hide$2(proto, ITERATOR$1, ArrayValues);
      if (!proto[TO_STRING_TAG]) hide$2(proto, TO_STRING_TAG, NAME);
      Iterators$1[NAME] = ArrayValues;
      for (key in $iterators) {
        if (!proto[key]) redefine$2(proto, key, $iterators[key], true);
      }
    }
  }

  var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }return it;
  };

  // call something on iterator step with safe closing on error
  var anObject$3 = _anObject;
  var _iterCall = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject$3(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator
  var Iterators$3 = _iterators;
  var ITERATOR$2 = _wks('iterator');
  var ArrayProto$1 = Array.prototype;

  var _isArrayIter = function _isArrayIter(it) {
    return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
  };

  var classof$2 = _classof;
  var ITERATOR$3 = _wks('iterator');
  var Iterators$4 = _iterators;
  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$3] || it['@@iterator'] || Iterators$4[classof$2(it)];
  };

  var _forOf = createCommonjsModule(function (module) {
    var ctx = _ctx,
        call = _iterCall,
        isArrayIter = _isArrayIter,
        anObject = _anObject,
        toLength = _toLength,
        getIterFn = core_getIteratorMethod,
        BREAK = {},
        RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : getIterFn(iterable),
          f = ctx(fn, that, entries ? 2 : 1),
          index = 0,
          length,
          step,
          iterator,
          result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
      // fast case for arrays with default iterator
      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject$4 = _anObject;
  var aFunction$2 = _aFunction;
  var SPECIES = _wks('species');
  var _speciesConstructor = function _speciesConstructor(O, D) {
    var C = anObject$4(O).constructor,
        S;
    return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function _invoke(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }return fn.apply(that, args);
  };

  var ctx$2 = _ctx;
  var invoke = _invoke;
  var html = _html;
  var cel = _domCreate;
  var global$5 = _global;
  var process$2 = global$5.process;
  var setTask = global$5.setImmediate;
  var clearTask = global$5.clearImmediate;
  var MessageChannel = global$5.MessageChannel;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer;
  var channel;
  var port;
  var run = function run() {
    var id = +this;
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function listener(event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [],
          i = 1;
      while (arguments.length > i) {
        args.push(arguments[i++]);
      }queue[++counter] = function () {
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (_cof(process$2) == 'process') {
      defer = function defer(id) {
        process$2.nextTick(ctx$2(run, id, 1));
      };
      // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = ctx$2(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts) {
      defer = function defer(id) {
        global$5.postMessage(id + '', '*');
      };
      global$5.addEventListener('message', listener, false);
      // IE8-
    } else if (ONREADYSTATECHANGE in cel('script')) {
      defer = function defer(id) {
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run.call(id);
        };
      };
      // Rest old browsers
    } else {
      defer = function defer(id) {
        setTimeout(ctx$2(run, id, 1), 0);
      };
    }
  }
  var _task = {
    set: setTask,
    clear: clearTask
  };

  var global$6 = _global;
  var macrotask = _task.set;
  var Observer = global$6.MutationObserver || global$6.WebKitMutationObserver;
  var process$3 = global$6.process;
  var Promise$1 = global$6.Promise;
  var isNode$1 = _cof(process$3) == 'process';

  var _microtask = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode$1 && (parent = process$3.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }last = undefined;
      if (parent) parent.enter();
    };

    // Node.js
    if (isNode$1) {
      notify = function notify() {
        process$3.nextTick(flush);
      };
      // browsers with MutationObserver
    } else if (Observer) {
      var toggle = true,
          node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function notify() {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (Promise$1 && Promise$1.resolve) {
      var promise = Promise$1.resolve();
      notify = function notify() {
        promise.then(flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global$6, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }last = task;
    };
  };

  var redefine$3 = _redefine;
  var _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
      redefine$3(target, key, src[key], safe);
    }return target;
  };

  var global$7 = _global;
  var dP$3 = _objectDp;
  var DESCRIPTORS = _descriptors;
  var SPECIES$1 = _wks('species');

  var _setSpecies = function _setSpecies(KEY) {
    var C = global$7[KEY];
    if (DESCRIPTORS && C && !C[SPECIES$1]) dP$3.f(C, SPECIES$1, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  };

  var ITERATOR$4 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$4]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {/* empty */}

  var _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR$4]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR$4] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {/* empty */}
    return safe;
  };

  var LIBRARY$1 = _library;
  var global$4 = _global;
  var ctx$1 = _ctx;
  var classof$1 = _classof;
  var $export$2 = _export;
  var isObject$3 = _isObject;
  var aFunction$1 = _aFunction;
  var anInstance = _anInstance;
  var forOf = _forOf;
  var speciesConstructor = _speciesConstructor;
  var task = _task.set;
  var microtask = _microtask();
  var PROMISE = 'Promise';
  var TypeError$1 = global$4.TypeError;
  var process$1 = global$4.process;
  var $Promise = global$4[PROMISE];
  var process$1 = global$4.process;
  var isNode = classof$1(process$1) == 'process';
  var empty = function empty() {/* empty */};
  var Internal;
  var GenericPromiseCapability;
  var Wrapper;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1),
          FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
    } catch (e) {/* empty */}
  }();

  // helpers
  var sameConstructor = function sameConstructor(a, b) {
    // with library wrapper special case
    return a === b || a === $Promise && b === Wrapper;
  };
  var isThenable = function isThenable(it) {
    var then;
    return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var newPromiseCapability = function newPromiseCapability(C) {
    return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
  };
  var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError$1('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$1(resolve);
    this.reject = aFunction$1(reject);
  };
  var perform = function perform(exec) {
    try {
      exec();
    } catch (e) {
      return { error: e };
    }
  };
  var notify = function notify(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v,
          ok = promise._s == 1,
          i = 0;
      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail,
            resolve = reaction.resolve,
            reject = reaction.reject,
            domain = reaction.domain,
            result,
            then;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value);
              if (domain) domain.exit();
            }
            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          reject(e);
        }
      };
      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function onUnhandled(promise) {
    task.call(global$4, function () {
      var value = promise._v,
          abrupt,
          handler,
          console;
      if (isUnhandled(promise)) {
        abrupt = perform(function () {
          if (isNode) {
            process$1.emit('unhandledRejection', value, promise);
          } else if (handler = global$4.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = global$4.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      }promise._a = undefined;
      if (abrupt) throw abrupt.error;
    });
  };
  var isUnhandled = function isUnhandled(promise) {
    if (promise._h == 1) return false;
    var chain = promise._a || promise._c,
        i = 0,
        reaction;
    while (chain.length > i) {
      reaction = chain[i++];
      if (reaction.fail || !isUnhandled(reaction.promise)) return false;
    }return true;
  };
  var onHandleUnhandled = function onHandleUnhandled(promise) {
    task.call(global$4, function () {
      var handler;
      if (isNode) {
        process$1.emit('rejectionHandled', promise);
      } else if (handler = global$4.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function $reject(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function $resolve(value) {
    var promise = this,
        then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction$1(executor);
      Internal.call(this);
      try {
        executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions
      this._a = undefined; // <- checked in isUnhandled reactions
      this._s = 0; // <- state
      this._d = false; // <- done
      this._v = undefined; // <- value
      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false; // <- notify
    };
    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process$1.domain : undefined;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    PromiseCapability = function PromiseCapability() {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = ctx$1($resolve, promise, 1);
      this.reject = ctx$1($reject, promise, 1);
    };
  }

  $export$2($export$2.G + $export$2.W + $export$2.F * !USE_NATIVE, { Promise: $Promise });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE];

  // statics
  $export$2($export$2.S + $export$2.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this),
          $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export$2($export$2.S + $export$2.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      // instanceof instead of internal slot check because we should fix it without replacement native Promise core
      if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
      var capability = newPromiseCapability(this),
          $$resolve = capability.resolve;
      $$resolve(x);
      return capability.promise;
    }
  });
  $export$2($export$2.S + $export$2.F * !(USE_NATIVE && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this,
          capability = newPromiseCapability(C),
          resolve = capability.resolve,
          reject = capability.reject;
      var abrupt = perform(function () {
        var values = [],
            index = 0,
            remaining = 1;
        forOf(iterable, false, function (promise) {
          var $index = index++,
              alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (abrupt) reject(abrupt.error);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this,
          capability = newPromiseCapability(C),
          reject = capability.reject;
      var abrupt = perform(function () {
        forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (abrupt) reject(abrupt.error);
      return capability.promise;
    }
  });

  var promise = _core.Promise;

  var base64 = createCommonjsModule(function (module, exports) {
    (function () {

      var object = typeof exports != 'undefined' ? exports : this; // #8: web workers
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

      function InvalidCharacterError(message) {
        this.message = message;
      }
      InvalidCharacterError.prototype = new Error();
      InvalidCharacterError.prototype.name = 'InvalidCharacterError';

      // encoder
      // [https://gist.github.com/999166] by [https://github.com/nignag]
      object.btoa || (object.btoa = function (input) {
        var str = String(input);
        for (
        // initialize result and counter
        var block, charCode, idx = 0, map = chars, output = '';
        // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
        str.charAt(idx | 0) || (map = '=', idx % 1);
        // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
        output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
          charCode = str.charCodeAt(idx += 3 / 4);
          if (charCode > 0xFF) {
            throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
          }
          block = block << 8 | charCode;
        }
        return output;
      });

      // decoder
      // [https://gist.github.com/1020396] by [https://github.com/atk]
      object.atob || (object.atob = function (input) {
        var str = String(input).replace(/=+$/, '');
        if (str.length % 4 == 1) {
          throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs, buffer, idx = 0, output = '';
        // get next character
        buffer = str.charAt(idx++);
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
          // try to find character in table (0-63, not found => -1)
          buffer = chars.indexOf(buffer);
        }
        return output;
      });
    })();
  });

  /* global global */

  var globalNamespace = void 0;

  if (typeof global === 'undefined') {
    globalNamespace = window;
  } else {
    globalNamespace = global;
  }

  function set(key, value) {
    if (!globalNamespace[key]) {
      globalNamespace[key] = value;
    }
  }

  function get(key) {
    return globalNamespace[key];
  }

  var globalVars = { set: set, get: get };

  // drop in polyfills from base64
  globalVars.set('btoa', base64.btoa);
  globalVars.set('atob', base64.atob);

  // drop in polyfills from Promise
  globalVars.set('Promise', promise);

  /* eslint no-undefined: 0 */

  var assign = void 0;

  if (typeof Object.assign === 'function') {
    assign = Object.assign;
  } else {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);

      var propertyObjects = [].slice.call(arguments, 1);

      if (propertyObjects.length > 0) {
        propertyObjects.forEach(function (source) {
          if (source !== undefined && source !== null) {
            var nextKey = void 0;

            for (nextKey in source) {
              if (source.hasOwnProperty(nextKey)) {
                output[nextKey] = source[nextKey];
              }
            }
          }
        });
      }

      return output;
    };
  }

  var assign$1 = assign;

  var includes = void 0;

  if (!Array.prototype.includes) {
    includes = function includes(array, searchElement) {
      var ObjectifiedArray = Object(array);
      var length = parseInt(ObjectifiedArray.length, 10) || 0;

      if (length === 0) {
        return false;
      }

      var startIndex = parseInt(arguments[2], 10) || 0;
      var index = void 0;

      if (startIndex >= 0) {
        index = startIndex;
      } else {
        index = length + startIndex;

        if (index < 0) {
          index = 0;
        }
      }

      while (index < length) {
        var currentElement = ObjectifiedArray[index];

        /* eslint no-self-compare:0 */
        if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
          // NaN !== NaN
          return true;
        }
        index++;
      }

      return false;
    };
  } else {
    includes = function includes(array) {
      var args = [].slice.call(arguments, 1);

      return Array.prototype.includes.apply(array, args);
    };
  }

  var includes$1 = includes;

  function wrap(func, superFunc) {
    function superWrapper() {
      var originalSuper = this['super'];

      this['super'] = function () {
        return superFunc.apply(this, arguments);
      };

      var ret = func.apply(this, arguments);

      this['super'] = originalSuper;

      return ret;
    }

    superWrapper.wrappedFunction = func;

    return superWrapper;
  }

  function defineProperties$1(names, proto, destination) {
    var parentProto = Object.getPrototypeOf(destination);

    names.forEach(function (name) {
      var descriptor = Object.getOwnPropertyDescriptor(proto, name);
      var parentDescriptor = parentProto.hasOwnProperty(name) && Object.getOwnPropertyDescriptor(parentProto, name);

      if (typeof parentDescriptor.value === 'function' && typeof descriptor.value === 'function') {
        var wrappedFunction = wrap(descriptor.value, parentDescriptor.value);

        Object.defineProperty(destination, name, { value: wrappedFunction });
      } else {
        Object.defineProperty(destination, name, descriptor);
      }
    });
  }

  function createClass(props) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;

    var Constructor = wrap(props.constructor, parent);
    var instancePropertyNames = Object.getOwnPropertyNames(props).filter(function (key) {
      return !includes$1(['constructor', 'static'], key);
    });

    assign$1(Constructor, parent);

    Constructor.prototype = Object.create(parent.prototype);
    defineProperties$1(instancePropertyNames, props, Constructor.prototype);
    Constructor.prototype.constructor = Constructor;

    var staticProps = props['static'];

    if (staticProps) {
      var staticPropertyNames = Object.getOwnPropertyNames(staticProps);

      defineProperties$1(staticPropertyNames, staticProps, Constructor);
    }

    return Constructor;
  }

  var CoreObject = createClass({
    constructor: function constructor() {},


    'static': {
      extend: function extend(subClassProps) {
        return createClass(subClassProps, this);
      }
    }
  });

  function wrapConsole(logCommand) {
    var logMethod = function logMethod() {
      var log = void 0;

      /* eslint-disable no-console */
      if (console[logCommand]) {
        log = Function.prototype.bind.call(console[logCommand], console);
      } else {
        log = Function.prototype.bind.call(console.log, console);
      }
      log.apply(undefined, arguments);
      /* eslint-enable no-console */
    };

    return function () {
      var args = [].concat(Array.prototype.slice.call(arguments));

      args.unshift('[JS-BUY-SDK]: ');
      logMethod.apply(undefined, _toConsumableArray(args));
    };
  }

  var Logger = CoreObject.extend({
    constructor: function constructor() {},

    debug: wrapConsole('debug'),
    info: wrapConsole('info'),
    warn: wrapConsole('warn'),
    error: wrapConsole('error')
  });

  var logger = new Logger();

  var Config = CoreObject.extend({
    constructor: function constructor(attrs) {
      var _this = this;

      Object.keys(this.deprecatedProperties).forEach(function (key) {
        if (attrs.hasOwnProperty(key)) {
          var transformName = _this.deprecatedProperties[key];
          var transform = _this[transformName];

          transform(attrs[key], attrs);
        }
      });
      this.requiredProperties.forEach(function (key) {
        if (!attrs.hasOwnProperty(key)) {
          throw new Error('new Config() requires the option \'' + key + '\'');
        } else {
          _this[key] = attrs[key];
        }
      });
      this.optionalProperties.forEach(function (key) {
        if (attrs.hasOwnProperty(key)) {
          _this[key] = attrs[key];
        }
      });
    },


    /**
     * An object with keys for deprecated properties and values as functions that
     * will transform the value into a usable value. A depracation transform should
     * have the value signature function(deprecated_value, config_to_be_transformed)
     * @attribute deprecatedProperties
     * @default { apiKey: this.transformApiKey, myShopifyDomain: this.transformMyShopifyDomain }
     * @type Object
     * @private
     */
    deprecatedProperties: {
      apiKey: 'transformApiKey',
      myShopifyDomain: 'transformMyShopifyDomain'
    },

    transformMyShopifyDomain: function transformMyShopifyDomain(subdomain, attrs) {
      logger.warn('Config - ', 'myShopifyDomain is deprecated, please use domain and provide the full shop domain.');
      attrs.domain = subdomain + '.myshopify.com';
    },
    transformApiKey: function transformApiKey(apiKey, attrs) {
      logger.warn('Config - ', 'apiKey is deprecated, please use accessToken instead.');
      attrs.accessToken = apiKey;
    },


    /**
     * Properties that must be set on initializations
     * @attribute requiredProperties
     * @default ['accessToken', 'appId', 'myShopifyDomain']
     * @type Array
     * @private
     */
    requiredProperties: ['accessToken', 'appId', 'domain'],

    /**
     * Properties that may be set on initializations
     * @attribute optionalProperties
     * @default ['ajaxHeaders']
     * @type Array
     * @private
     */
    optionalProperties: ['ajaxHeaders'],

    /**
     * The accessToken for authenticating against shopify. This is your api client's
     * storefront access token. Not the shared secret. Set during initialization.
     * @attribute accessToken
     * @default ''
     * @type String
     * @private
     */
    accessToken: '',

    /**
     * The apiKey for authenticating against shopify. This is your api client's
     * public api token. Not the shared secret. Set during initialization.
     * @attribute apiKey
     * @default ''
     * @type String
     * @private
     * @deprecated Use `config.accessToken` instead.
     */
    apiKey: '',

    /**
     * @attribute appId
     * @default ''
     * @type String
     * @private
     */
    appId: '',

    /**
     * The domain that all the api requests will go to
     * @attribute domain
     * @default ''
     * @type String
     * @private
     */
    domain: '',

    /**
     * The subdomain of myshopify.io that all the api requests will go to
     * @attribute myShopifyDomain
     * @default ''
     * @type String
     * @private
     * @deprecated Use `config.domain` instead.
     */
    myShopifyDomain: '',

    /**
     * @attribute ajaxHeaders
     * @default {}
     * @type Object
     * @private
     */
    ajaxHeaders: {}
  });

  var version$1 = 'v0.7.1-66ba4e4'; // eslint-disable-line

  var BaseModel = CoreObject.extend({
    constructor: function constructor() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var metaAttrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.attrs = attrs;

      assign$1(this, metaAttrs);
    },

    attrs: null,
    serializer: null,
    adapter: null,
    shopClient: null
  });

  /**
    * Class for product option
    * @class ProductOptionModel
    * @constructor
  */
  var ProductOptionModel = BaseModel.extend(Object.defineProperties({
    constructor: function constructor() {
      this['super'].apply(this, arguments);

      this.selected = this.values[0];
    }
  }, {
    name: {
      get: function get() {
        return this.attrs.name;
      },
      configurable: true,
      enumerable: true
    },
    values: {
      get: function get() {
        return this.attrs.values;
      },
      configurable: true,
      enumerable: true
    },
    selected: {
      get: function get() {
        return this._selected;
      },
      set: function set(value) {
        if (includes$1(this.values, value)) {
          this._selected = value;
        } else {
          throw new Error('Invalid option selection for ' + this.name + '.');
        }

        return value;
      },
      configurable: true,
      enumerable: true
    }
  }));

  var variants = [{ name: 'pico', dimension: '16x16' }, { name: 'icon', dimension: '32x32' }, { name: 'thumb', dimension: '50x50' }, { name: 'small', dimension: '100x100' }, { name: 'compact', dimension: '160x160' }, { name: 'medium', dimension: '240x240' }, { name: 'large', dimension: '480x480' }, { name: 'grande', dimension: '600x600' }, { name: '1024x1024', dimension: '1024x1024' }, { name: '2048x2048', dimension: '2048x2048' }];

  /**
  * Class for image model
  * @class ImageModel
  */
  var ImageModel = CoreObject.extend(Object.defineProperties({
    constructor: function constructor(attrs) {
      var _this2 = this;

      Object.keys(attrs).forEach(function (key) {
        _this2[key] = attrs[key];
      });
    }
  }, {
    variants: {
      get: function get() {
        var src = this.src;
        var extensionIndex = src.lastIndexOf('.');
        var pathAndBasename = src.slice(0, extensionIndex);
        var extension = src.slice(extensionIndex);

        variants.forEach(function (variant) {
          variant.src = pathAndBasename + '_' + variant.name + extension;
        });

        return variants;
      },
      configurable: true,
      enumerable: true
    }
  }));

  /**
    * Model for product variant
    * @class ProductVariantModel
    * @constructor
  */
  var ProductVariantModel = BaseModel.extend(Object.defineProperties({
    constructor: function constructor() {
      this['super'].apply(this, arguments);
    },
    checkoutUrl: function checkoutUrl() {
      var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var config = this.config;
      var baseUrl = 'https://' + config.domain + '/cart';

      var variantPath = this.id + ':' + parseInt(quantity, 10);

      var query = 'access_token=' + config.accessToken + '&_fd=0';

      return baseUrl + '/' + variantPath + '?' + query;
    }
  }, {
    id: {
      get: function get() {
        return this.attrs.variant.id;
      },
      configurable: true,
      enumerable: true
    },
    productId: {
      get: function get() {
        return this.attrs.product.id;
      },
      configurable: true,
      enumerable: true
    },
    title: {
      get: function get() {
        return this.attrs.variant.title;
      },
      configurable: true,
      enumerable: true
    },
    productTitle: {
      get: function get() {
        return this.attrs.product.title;
      },
      configurable: true,
      enumerable: true
    },
    compareAtPrice: {
      get: function get() {
        return this.attrs.variant.compare_at_price;
      },
      configurable: true,
      enumerable: true
    },
    price: {
      get: function get() {
        return this.attrs.variant.price;
      },
      configurable: true,
      enumerable: true
    },
    formattedPrice: {
      get: function get() {
        return this.attrs.variant.formatted_price;
      },
      configurable: true,
      enumerable: true
    },
    grams: {
      get: function get() {
        return this.attrs.variant.grams;
      },
      configurable: true,
      enumerable: true
    },
    optionValues: {
      get: function get() {
        return this.attrs.variant.option_values;
      },
      configurable: true,
      enumerable: true
    },
    available: {
      get: function get() {
        return this.attrs.variant.available;
      },
      configurable: true,
      enumerable: true
    },
    image: {
      get: function get() {
        var id = this.id;
        var images = this.attrs.product.images;

        var primaryImage = images[0];
        var variantImage = images.filter(function (image) {
          return image.variant_ids.indexOf(id) !== -1;
        })[0];

        var image = variantImage || primaryImage;

        if (!image) {
          return null;
        }

        return new ImageModel(image);
      },
      configurable: true,
      enumerable: true
    },
    imageVariants: {
      get: function get() {
        if (!this.image) {
          return [];
        }

        return this.image.variants;
      },
      configurable: true,
      enumerable: true
    }
  }));

  var uniq = function uniq(array) {
    return array.reduce(function (uniqueArray, item) {
      if (uniqueArray.indexOf(item) < 0) {
        uniqueArray.push(item);
      }

      return uniqueArray;
    }, []);
  };

  var NO_IMAGE_URI = 'https://widgets.shopifyapps.com/assets/no-image.svg';

  /**
     * Class for products returned by fetch('product')
     * @class ProductModel
     * @constructor
   */
  var ProductModel = BaseModel.extend(Object.defineProperties({
    constructor: function constructor() {
      this['super'].apply(this, arguments);
    }
  }, {
    id: {
      get: function get() {
        return this.attrs.product_id;
      },
      configurable: true,
      enumerable: true
    },
    title: {
      get: function get() {
        return this.attrs.title;
      },
      configurable: true,
      enumerable: true
    },
    description: {
      get: function get() {
        return this.attrs.body_html;
      },
      configurable: true,
      enumerable: true
    },
    images: {
      get: function get() {
        return this.attrs.images.map(function (image) {
          return new ImageModel(image);
        });
      },
      configurable: true,
      enumerable: true
    },
    memoized: {
      get: function get() {
        this._memoized = this._memoized || {};

        return this._memoized;
      },
      configurable: true,
      enumerable: true
    },
    options: {
      get: function get() {
        if (this.memoized.options) {
          return this.memoized.options;
        }

        var baseOptions = this.attrs.options;
        var variants$$1 = this.variants;

        this.memoized.options = baseOptions.map(function (option) {
          var name = option.name;

          var dupedValues = variants$$1.reduce(function (valueList, variant) {
            var optionValueForOption = variant.optionValues.filter(function (optionValue) {
              return optionValue.name === option.name;
            })[0];

            valueList.push(optionValueForOption.value);

            return valueList;
          }, []);

          var values = uniq(dupedValues);

          return new ProductOptionModel({ name: name, values: values });
        });

        return this.memoized.options;
      },
      configurable: true,
      enumerable: true
    },
    variants: {
      get: function get() {
        var _this3 = this;

        return this.attrs.variants.map(function (variant) {
          return new ProductVariantModel({ variant: variant, product: _this3 }, { config: _this3.config });
        });
      },
      configurable: true,
      enumerable: true
    },
    selections: {
      get: function get() {
        return this.options.map(function (option) {
          return option.selected;
        });
      },
      configurable: true,
      enumerable: true
    },
    selectedVariant: {
      get: function get() {
        var variantTitle = this.selections.join(' / ');

        return this.variants.filter(function (variant) {
          return variant.title === variantTitle;
        })[0] || null;
      },
      configurable: true,
      enumerable: true
    },
    selectedVariantImage: {
      get: function get() {
        if (!this.selectedVariant) {
          return null;
        }

        return this.selectedVariant.image;
      },
      configurable: true,
      enumerable: true
    }
  }));

  var ListingsSerializer = CoreObject.extend({
    constructor: function constructor(config) {
      this.config = config;
    },
    rootKeyForType: function rootKeyForType(type) {
      return type.slice(0, -1) + '_listing';
    },


    models: {
      collections: BaseModel,
      products: ProductModel
    },

    modelForType: function modelForType(type) {
      return this.models[type];
    },
    deserializeSingle: function deserializeSingle(type) {
      var singlePayload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var metaAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var modelAttrs = singlePayload[this.rootKeyForType(type)];
      var model = this.modelFromAttrs(type, modelAttrs, metaAttrs);

      return model;
    },
    deserializeMultiple: function deserializeMultiple(type) {
      var _this4 = this;

      var collectionPayload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var metaAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var models = collectionPayload[this.rootKeyForType(type) + 's'];

      return models.map(function (attrs) {
        var model = _this4.modelFromAttrs(type, attrs, metaAttrs);

        return model;
      });
    },
    modelFromAttrs: function modelFromAttrs(type, attrs, metaAttrs) {
      var Model = this.modelForType(type);

      metaAttrs.config = this.config;

      return new Model(attrs, metaAttrs);
    }
  });

  function authToUrl(url, opts) {
    var authorization = void 0;

    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        if (key.toLowerCase() === 'authorization') {
          authorization = opts.headers[key];
        }
      });
    }

    if (authorization) {
      var hashedKey = authorization.split(' ').slice(-1)[0];

      try {
        var plainKey = atob(hashedKey);

        var newUrl = void 0;

        if (url.indexOf('?') > -1) {
          newUrl = url + '&_x_http_authorization=' + plainKey;
        } else {
          newUrl = url + '?_x_http_authorization=' + plainKey;
        }

        return newUrl;
      } catch (e) {
        // atob choked on non-encoded data. Therefore, not a form of auth we
        // support.
        //
        // NOOP
        //
      }
    }

    /* eslint newline-before-return: 0 */
    return url;
  }

  function ie9Ajax(method, url, opts) {
    return new Promise(function (resolve, reject) {
      var xdr = new XDomainRequest();

      xdr.onload = function () {
        try {
          var json = JSON.parse(xdr.responseText);

          resolve({ json: json, originalResponse: xdr, isJSON: true });
        } catch (e) {
          resolve({ text: xdr.responseText, originalResponse: xdr, isText: true });
        }
      };

      function handleError() {
        reject(new Error('There was an error with the XDR'));
      }

      xdr.onerror = handleError;
      xdr.ontimeout = handleError;

      xdr.open(method, authToUrl(url, opts));
      xdr.send(opts.data);
    });
  }

  function isNodeLikeEnvironment() {
    var windowAbsent = typeof window === 'undefined';
    var requirePresent = typeof require === 'function';

    return windowAbsent && requirePresent;
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    var error = new Error(response.statusText);

    error.status = response.status;
    error.response = response;
    throw error;
  }

  function parseResponse(response) {
    return response.json().then(function (json) {
      return { json: json, originalResponse: response, isJSON: true };
    })['catch'](function () {
      var responseClone = response.clone();

      return responseClone.text().then(function (text) {
        return { text: text, originalResponse: responseClone, isText: true };
      });
    });
  }

  function ajax(method, url) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // we need to check that we're not running in Node
    // before we should check if this is ie9
    if (!isNodeLikeEnvironment()) {
      var xhr = new XMLHttpRequest();

      if (!('withCredentials' in xhr)) {
        return ie9Ajax.apply(undefined, arguments);
      }
    }

    opts.method = method;
    opts.mode = 'cors';

    return fetch(url, opts).then(checkStatus).then(parseResponse);
  }

  var ListingsAdapter = CoreObject.extend(Object.defineProperties({
    ajax: ajax,

    constructor: function constructor(config) {
      this.config = config;
    },
    pathForType: function pathForType(type) {
      return '/' + type.slice(0, -1) + '_listings';
    },
    buildUrl: function buildUrl(singleOrMultiple, type, idOrQuery) {
      switch (singleOrMultiple) {
        case 'multiple':
          return this.buildMultipleUrl(type, idOrQuery);
        case 'single':
          return this.buildSingleUrl(type, idOrQuery);
        default:
          return '';
      }
    },
    buildMultipleUrl: function buildMultipleUrl(type) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = '' + this.baseUrl + this.pathForType(type);
      var paramNames = Object.keys(query);

      if (paramNames.length > 0) {
        var queryString = paramNames.map(function (key) {
          var value = void 0;

          if (Array.isArray(query[key])) {
            value = query[key].join(',');
          } else {
            value = query[key];
          }

          return key + '=' + encodeURIComponent(value);
        }).join('&');

        return url + '?' + queryString;
      }

      return url;
    },
    buildSingleUrl: function buildSingleUrl(type, id) {
      return '' + this.baseUrl + this.pathForType(type) + '/' + id;
    },
    fetchMultiple: function fetchMultiple() /* type, [query] */{
      var url = this.buildUrl.apply(this, ['multiple'].concat(Array.prototype.slice.call(arguments)));

      return this.ajax('GET', url, { headers: this.headers }).then(function (response) {
        return response.json;
      });
    },
    fetchSingle: function fetchSingle() /* type, id */{
      var url = this.buildUrl.apply(this, ['single'].concat(Array.prototype.slice.call(arguments)));

      return this.ajax('GET', url, { headers: this.headers }).then(function (response) {
        return response.json;
      });
    }
  }, {
    base64AccessToken: {
      get: function get() {
        return btoa(this.config.accessToken);
      },
      configurable: true,
      enumerable: true
    },
    baseUrl: {
      get: function get() {
        var _config = this.config,
            domain = _config.domain,
            appId = _config.appId;


        return 'https://' + domain + '/api/apps/' + appId;
      },
      configurable: true,
      enumerable: true
    },
    headers: {
      get: function get() {
        return assign$1({}, {
          Authorization: 'Basic ' + this.base64AccessToken,
          'Content-Type': 'application/json',
          'X-SDK-Variant': 'javascript',
          'X-SDK-Version': version$1

        }, this.config.ajaxHeaders);
      },
      configurable: true,
      enumerable: true
    }
  }));

  var GUID_KEY = 'shopify-buy-uuid';

  /**
   * A cart stores an Array of `CartLineItemModel`'s in it's `lineItems` property.
   * @class CartLineItemModel
   * @constructor
   */
  var CartLineItemModel = BaseModel.extend(Object.defineProperties({
    constructor: function constructor() {
      this['super'].apply(this, arguments);
    }
  }, {
    id: {
      get: function get() {
        return this.attrs[GUID_KEY];
      },
      configurable: true,
      enumerable: true
    },
    variant_id: {
      get: function get() {
        return this.attrs.variant_id;
      },
      configurable: true,
      enumerable: true
    },
    product_id: {
      get: function get() {
        return this.attrs.product_id;
      },
      configurable: true,
      enumerable: true
    },
    image: {
      get: function get() {
        if (!this.attrs.image) {
          return null;
        }

        return new ImageModel(this.attrs.image);
      },
      configurable: true,
      enumerable: true
    },
    imageVariants: {
      get: function get() {
        if (!this.image) {
          return [];
        }

        return this.image.variants;
      },
      configurable: true,
      enumerable: true
    },
    title: {
      get: function get() {
        return this.attrs.title;
      },
      configurable: true,
      enumerable: true
    },
    quantity: {
      get: function get() {
        return this.attrs.quantity;
      },
      set: function set(value) {
        var parsedValue = parseInt(value, 10);

        if (parsedValue < 0) {
          throw new Error('Quantities must be positive');
        } else if (parsedValue !== parseFloat(value)) {
          /* incidentally, this covers all NaN values, because NaN !== Nan */
          throw new Error('Quantities must be whole numbers');
        }

        this.attrs.quantity = parsedValue;

        return this.attrs.quantity;
      },
      configurable: true,
      enumerable: true
    },
    properties: {
      get: function get() {
        return this.attrs.properties || {};
      },
      set: function set(value) {
        this.attrs.properties = value || {};

        return value;
      },
      configurable: true,
      enumerable: true
    },
    variant_title: {
      get: function get() {
        return this.attrs.variant_title;
      },
      configurable: true,
      enumerable: true
    },
    price: {
      get: function get() {
        return this.attrs.price;
      },
      configurable: true,
      enumerable: true
    },
    compare_at_price: {
      get: function get() {
        return this.attrs.compare_at_price;
      },
      configurable: true,
      enumerable: true
    },
    line_price: {
      get: function get() {
        return (this.quantity * parseFloat(this.price)).toFixed(2);
      },
      configurable: true,
      enumerable: true
    },
    grams: {
      get: function get() {
        return this.attrs.grams;
      },
      configurable: true,
      enumerable: true
    }
  }));

  /* eslint no-undefined: 0 complexity: 0 */
  var GUID_PREFIX = 'shopify-buy.' + Date.now();

  var GUID_DESC = {
    writable: true,
    configurable: true,
    enumerable: true,
    value: null
  };

  var uuidSeed = 0;

  function uuid() {
    return ++uuidSeed;
  }

  var numberCache = {};
  var stringCache = {};

  function setGuidFor(obj) {
    if (obj && obj[GUID_KEY]) {
      return obj[GUID_KEY];
    }

    if (obj === undefined) {
      return '(undefined)';
    }

    if (obj === null) {
      return '(null)';
    }

    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    var id = void 0;

    switch (type) {
      case 'number':
        id = numberCache[obj];

        if (!id) {
          id = numberCache[obj] = 'nu' + obj;
        }

        break;

      case 'string':
        id = stringCache[obj];

        if (!id) {
          id = stringCache[obj] = 'st' + uuid();
        }

        break;

      case 'boolean':
        if (obj) {
          id = '(true)';
        } else {
          id = '(false)';
        }

        break;

      default:
        if (obj === Object) {
          id = '(Object)';
          break;
        }

        if (obj === Array) {
          id = '(Array)';
          break;
        }

        id = GUID_PREFIX + '.' + uuid();

        if (obj[GUID_KEY] === null) {
          obj[GUID_KEY] = id;
        } else {
          GUID_DESC.value = id;
          Object.defineProperty(obj, GUID_KEY, GUID_DESC);
        }
    }

    return id;
  }

  function objectsEqual(one, two) {
    if (one === two) {
      return true;
    }

    return Object.keys(one).every(function (key) {
      if (one[key] instanceof Date) {
        return one[key].toString() === two[key].toString();
      } else if (_typeof(one[key]) === 'object') {
        return objectsEqual(one[key], two[key]);
      }

      return one[key] === two[key];
    });
  }

  /**
  * Class for cart model
  * @class CartModel
  */
  var CartModel = BaseModel.extend(Object.defineProperties({
    constructor: function constructor() {
      this['super'].apply(this, arguments);
    },
    addVariants: function addVariants() {
      logger.warn('CartModel - ', 'addVariants is deprecated, please use createLineItemsFromVariants instead');

      return this.createLineItemsFromVariants.apply(this, arguments);
    },
    createLineItemsFromVariants: function createLineItemsFromVariants() {
      var newLineItems = [].concat(Array.prototype.slice.call(arguments)).map(function (item) {
        var lineItem = {
          image: item.variant.image,
          image_variants: item.variant.imageVariants,
          variant_id: item.variant.id,
          product_id: item.variant.productId,
          title: item.variant.productTitle,
          quantity: parseInt(item.quantity, 10),
          properties: item.properties || {},
          variant_title: item.variant.title,
          price: item.variant.price,
          compare_at_price: item.variant.compareAtPrice,
          grams: item.variant.grams
        };

        setGuidFor(lineItem);

        return lineItem;
      });
      var existingLineItems = this.attrs.line_items;

      existingLineItems.push.apply(existingLineItems, _toConsumableArray(newLineItems));

      var dedupedLineItems = existingLineItems.reduce(function (itemAcc, item) {
        var matchingItem = itemAcc.filter(function (existingItem) {
          return existingItem.variant_id === item.variant_id && objectsEqual(existingItem.properties, item.properties);
        })[0];

        if (matchingItem) {
          matchingItem.quantity = matchingItem.quantity + item.quantity;
        } else {
          itemAcc.push(item);
        }

        return itemAcc;
      }, []);

      // Users may pass negative numbers and remove items. This ensures there's no
      // item with a quantity of zero or less.
      this.attrs.line_items = dedupedLineItems.reduce(function (itemAcc, item) {
        if (item.quantity >= 1) {
          itemAcc.push(item);
        }

        return itemAcc;
      }, []);

      return this.updateModel();
    },
    updateLineItem: function updateLineItem(id, quantity) {
      if (quantity < 1) {
        return this.removeLineItem(id);
      }

      var lineItem = this.lineItems.filter(function (item) {
        return item.id === id;
      })[0];

      if (lineItem) {
        lineItem.quantity = quantity;

        return this.updateModel();
      }

      return new Promise(function (resolve, reject) {
        reject(new Error('line item with id: ' + id + ' not found in cart#' + this.id));
      });
    },
    removeLineItem: function removeLineItem(id) {
      var oldLength = this.lineItems.length;
      var newLineItems = this.lineItems.filter(function (item) {
        return item.id !== id;
      });
      var newLength = newLineItems.length;

      if (newLength < oldLength) {
        this.attrs.line_items = newLineItems.map(function (item) {
          return item.attrs;
        });

        return this.updateModel();
      }

      return new Promise(function (resolve, reject) {
        reject(new Error('line item with id: ' + id + ' not found in cart#' + this.id));
      });
    },
    clearLineItems: function clearLineItems() {
      this.attrs.line_items = [];

      return this.updateModel();
    },
    updateModel: function updateModel() {
      var _this5 = this;

      return this.shopClient.update('carts', this).then(function (updateCart) {
        assign$1(_this5.attrs, updateCart.attrs);

        return _this5;
      });
    }
  }, {
    id: {
      get: function get() {
        return this.attrs[GUID_KEY];
      },
      configurable: true,
      enumerable: true
    },
    lineItems: {
      get: function get() {
        return (this.attrs.line_items || []).map(function (item) {
          return new CartLineItemModel(item);
        });
      },
      configurable: true,
      enumerable: true
    },
    lineItemCount: {
      get: function get() {
        return this.lineItems.reduce(function (total, item) {
          return total + item.quantity;
        }, 0);
      },
      configurable: true,
      enumerable: true
    },
    subtotal: {
      get: function get() {
        var subtotal = this.lineItems.reduce(function (runningTotal, lineItem) {
          return runningTotal + parseFloat(lineItem.line_price);
        }, 0);

        return subtotal.toFixed(2);
      },
      configurable: true,
      enumerable: true
    },
    checkoutUrl: {
      get: function get() {
        var config = this.config;
        var baseUrl = 'https://' + config.domain + '/cart';
        var ga = globalVars.get('ga');

        var variantPath = this.lineItems.map(function (item) {
          return item.variant_id + ':' + item.quantity;
        });

        var query = 'access_token=' + config.accessToken + '&_fd=0';

        if (typeof ga === 'function') {
          var linkerParam = void 0;

          ga(function (tracker) {
            linkerParam = tracker.get('linkerParam');
          });

          if (linkerParam) {
            query += '&' + linkerParam;
          }
        }

        return baseUrl + '/' + variantPath + '?' + query;
      },
      configurable: true,
      enumerable: true
    }
  }));

  var CartSerializer = CoreObject.extend({
    constructor: function constructor(config) {
      this.config = config;
    },
    rootKeyForType: function rootKeyForType(type) {
      return type.slice(0, -1);
    },
    modelForType: function modelForType() /* type */{
      return CartModel;
    },
    deserializeSingle: function deserializeSingle(type) {
      var singlePayload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var metaAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var modelAttrs = singlePayload[this.rootKeyForType(type)];
      var model = this.modelFromAttrs(type, modelAttrs, metaAttrs);

      return model;
    },
    modelFromAttrs: function modelFromAttrs(type, attrs, metaAttrs) {
      var Model = this.modelForType(type);

      metaAttrs.config = this.config;

      return new Model(attrs, metaAttrs);
    },
    serialize: function serialize(type, model) {
      var root = this.rootKeyForType(type);
      var payload = {};
      var attrs = assign$1({}, model.attrs);

      payload[root] = attrs;

      delete attrs.attributes;

      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];

        if (value === null || typeof value === 'string' && value.length === 0) {
          delete attrs[key];
        }
      });

      return payload;
    }
  });

  var ReferenceModel = BaseModel.extend(Object.defineProperties({
    constructor: function constructor(attrs) {
      if (Object.keys(attrs).indexOf('referenceId') < 0) {
        throw new Error('Missing key referenceId of reference. References to null are not allowed');
      }

      this['super'].apply(this, arguments);
    }
  }, {
    id: {
      get: function get() {
        return this.attrs[GUID_KEY];
      },
      configurable: true,
      enumerable: true
    },
    referenceId: {
      get: function get() {
        return this.attrs.referenceId;
      },
      set: function set(value) {
        this.attrs.referenceId = value;

        return value;
      },
      configurable: true,
      enumerable: true
    }
  }));

  var ReferenceSerializer = CoreObject.extend({
    constructor: function constructor(config) {
      this.config = config;
    },
    modelForType: function modelForType() /* type */{
      return ReferenceModel;
    },
    deserializeSingle: function deserializeSingle(type) {
      var singlePayload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var metaAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var Model = this.modelForType(type);

      return new Model(singlePayload, metaAttrs);
    },
    serialize: function serialize(type, model) {
      var attrs = assign$1({}, model.attrs);

      return attrs;
    }
  });

  var Store = CoreObject.extend({
    constructor: function constructor() {
      this.localStorageAvailable = this.storageAvailable('localStorage');
      this.cache = {};
    },
    setItem: function setItem(key, value) {
      if (this.localStorageAvailable) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        this.cache[key] = value;
      }

      return value;
    },
    getItem: function getItem(key) {
      if (this.localStorageAvailable) {
        var stringValue = localStorage.getItem(key);

        try {
          return JSON.parse(stringValue);
        } catch (e) {
          return null;
        }
      } else {
        return this.cache[key] || null;
      }
    },
    storageAvailable: function storageAvailable(type) {
      try {
        var storage = globalVars.get(type);
        var x = '__storage_test__';

        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
      } catch (e) {
        return false;
      }
    }
  });

  var LocalStorageAdapter = CoreObject.extend({
    constructor: function constructor() {
      this.store = new Store();
    },
    idKeyForType: function idKeyForType() /* type */{
      return GUID_KEY;
    },
    fetchSingle: function fetchSingle(type, id) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        var value = _this6.store.getItem(_this6.storageKey(type, id));

        if (value === null) {
          reject(new Error(type + '#' + id + ' not found'));

          return;
        }

        resolve(value);
      });
    },
    create: function create(type, payload) {
      var _this7 = this;

      return new Promise(function (resolve) {
        var id = _this7.identify(payload);

        _this7.store.setItem(_this7.storageKey(type, id), payload);
        resolve(payload);
      });
    },
    update: function update(type, id, payload) {
      var _this8 = this;

      return new Promise(function (resolve) {
        _this8.store.setItem(_this8.storageKey(type, id), payload);
        resolve(payload);
      });
    },
    storageKey: function storageKey(type, id) {
      return type + '.' + id;
    },
    identify: function identify(payload) {
      var keys = Object.keys(payload);

      if (keys.length === 1 && _typeof(payload[keys[0]]) === 'object') {
        return setGuidFor(payload[keys[0]]);
      }

      return setGuidFor(payload);
    }
  });

  /**
   * @module shopify-buy
   * @submodule shop-client
   */

  function fetchFactory(fetchType, type) {
    var func = void 0;

    switch (fetchType) {
      case 'all':
        func = function func() {
          return this.fetchAll(type);
        };
        break;
      case 'one':
        func = function func() {
          return this.fetch.apply(this, [type].concat(Array.prototype.slice.call(arguments)));
        };
        break;
      case 'query':
        func = function func() {
          return this.fetchQuery.apply(this, [type].concat(Array.prototype.slice.call(arguments)));
        };
        break;
    }

    return func;
  }

  var ShopClient = CoreObject.extend(Object.defineProperties({
    constructor: function constructor(config) {
      this.config = config;

      this.serializers = {
        products: ListingsSerializer,
        collections: ListingsSerializer,
        carts: CartSerializer,
        references: ReferenceSerializer
      };

      this.adapters = {
        products: ListingsAdapter,
        collections: ListingsAdapter,
        carts: LocalStorageAdapter,
        references: LocalStorageAdapter
      };
    },


    config: null,

    fetchAll: function fetchAll(type) {
      var _this9 = this;

      var adapter = new this.adapters[type](this.config);

      return adapter.fetchMultiple(type).then(function (payload) {
        return _this9.deserialize(type, payload, adapter, null, { multiple: true });
      });
    },
    fetch: function fetch(type, id) {
      var _this10 = this;

      var adapter = new this.adapters[type](this.config);

      return adapter.fetchSingle(type, id).then(function (payload) {
        return _this10.deserialize(type, payload, adapter, null, { single: true });
      });
    },
    fetchQuery: function fetchQuery(type, query) {
      var _this11 = this;

      var adapter = new this.adapters[type](this.config);

      return adapter.fetchMultiple(type, query).then(function (payload) {
        return _this11.deserialize(type, payload, adapter, null, { multiple: true });
      });
    },
    create: function create(type) {
      var _this12 = this;

      var modelAttrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var adapter = new this.adapters[type](this.config);
      var serializer = new this.serializers[type](this.config);
      var Model = serializer.modelForType(type);
      var model = new Model(modelAttrs, { shopClient: this });
      var attrs = serializer.serialize(type, model);

      return adapter.create(type, attrs).then(function (payload) {
        return _this12.deserialize(type, payload, adapter, serializer, { single: true });
      });
    },
    update: function update(type, updatedModel) {
      var _this13 = this;

      var adapter = updatedModel.adapter;
      var serializer = updatedModel.serializer;
      var serializedModel = serializer.serialize(type, updatedModel);
      var id = updatedModel.attrs[adapter.idKeyForType(type)];

      return adapter.update(type, id, serializedModel).then(function (payload) {
        return _this13.deserialize(type, payload, adapter, serializer, { single: true });
      });
    },
    deserialize: function deserialize(type, payload, adapter, existingSerializer) {
      var opts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var serializer = existingSerializer || new this.serializers[type](this.config);
      var meta = { shopClient: this, adapter: adapter, serializer: serializer, type: type };
      var serializedPayload = void 0;

      if (opts.multiple) {
        serializedPayload = serializer.deserializeMultiple(type, payload, meta);
      } else {
        serializedPayload = serializer.deserializeSingle(type, payload, meta);
      }

      return serializedPayload;
    },
    createCart: function createCart() {
      var userAttrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var baseAttrs = {
        line_items: []
      };
      var attrs = {};

      assign$1(attrs, baseAttrs);
      assign$1(attrs, userAttrs);

      return this.create('carts', attrs);
    },
    updateCart: function updateCart(updatedCart) {
      return this.update('carts', updatedCart);
    },


    /**
     * Retrieve a previously created cart by its key.
     *
     * ```javascript
     * client.fetchCart('shopify-buy.1459804699118.2').then(cart => {
     *   console.log(cart); // The retrieved cart
     * });
     *
     * @method fetchCart
     * @public
     * @param {String} id The cart's unique identifier
     * @return {Promise|CartModel} The cart model.
     *
     */
    fetchCart: fetchFactory('one', 'carts'),

    /**
     * This function will return an `Array` of products from your store
     * ```
     * client.fetchAllProducts()
     * .then(function(products) {
     *   // all products in store
     * });
     * ```
     *
     * @method fetchAllProducts
     * @public
     * @return {Promise|Array} The product models.
     */
    fetchAllProducts: fetchFactory('all', 'products'),

    /**
     * This function will return an `Array` of collections from your store
     * ```
     * client.fetchAllCollections()
     * .then(function(collections) {
     *
     * });
     * ```
     *
     * @method fetchAllCollections
     * @public
     * @return {Promise|Array} The collection models.
     */
    fetchAllCollections: fetchFactory('all', 'collections'),

    /**
     * Fetch one product by its ID.
     *
     * ```javascript
     * client.fetchProduct('8569911558').then(product => {
     *   console.log(product); // The product with an ID of '8569911558'
     * });
     * ```
     *
     * @method fetchProduct
     * @public
     * @param {String|Number} id a unique identifier
     * @return {Promise|BaseModel} The product model with the specified ID.
     */
    fetchProduct: fetchFactory('one', 'products'),

    /**
     * Fetch one collection by its ID.
     *
     * ```javascript
     * client.fetchCollection('336903494').then(collection => {
     *   console.log(collection); // The collection with an ID of '336903494'
     * });
     * ```
     *
     * @method fetchCollection
     * @public
     * @param {String|Number} id a unique identifier
     * @return {Promise|BaseModel} The collection model with the specified ID.
     */
    fetchCollection: fetchFactory('one', 'collections'),

    /**
     * Fetches a list of products matching a specified query.
     *
     * ```javascript
     * client.fetchQueryProducts({ collection_id: '336903494', tag: ['hats'] }).then(products => {
     *   console.log(products); // An array of products in collection '336903494' having the tag 'hats'
     * });
     * ```
     * @method fetchQueryProducts
     * @public
     * @param {Object} query A query sent to the api server containing one or more of:
     *   @param {String|Number} [query.collection_id] The ID of a collection to retrieve products from
     *   @param {Array} [query.tag] A list of tags to filter the products by. Accepts up to 10 tags.
     *   @param {Array} [query.product_ids] A list of product IDs to retrieve
     *   @param {String|Number} [query.page=1] The page offset number of the current lookup (based on the `limit`)
     *   @param {String|Number} [query.limit=50] The number of products to retrieve per page
     *   @param {String} [query.handle] The handle of the product to look up
     *   @param {String} [query.updated_at_min] Products updated since the supplied timestamp (format: 2008-12-31 03:00)
     *   @param {String} [query.sort_by] Will modify how products are ordered. Possible values are:
     *                                   `"updated_at"`, `"best-selling"`, `"title-ascending"`, `"title-descending"`,
     *                                   `"price-descending"`, `"price-ascending"`, `"created-descending"`, `"created-ascending"`,
     *                                   or `"collection-default"`. Using `"collection-default"` means that products will be ordered
     *                                   the using the custom ordering defined in your Shopify Admin. Default value `"collection-default"`.
     * @return {Promise|Array} The product models.
     */
    fetchQueryProducts: fetchFactory('query', 'products'),

    /**
     * Fetches a list of collections matching a specified query.
     *
     * ```javascript
     * client.fetchQueryCollections({page: 2, limit: 20}).then(collections => {
     *   console.log(collections); // An array of collection resources
     * });
     * ```
     *
     * @method fetchQueryCollections
     * @public
     * @param {Object} query a query sent to the api server.
     *   @param {String|Number} [query.page=1] the page offset number of the current lookup (based on the `limit`)
     *   @param {String|Number} [query.limit=50] the number of collections to retrieve per page
     * @return {Promise|Array} The collection models.
     */
    fetchQueryCollections: fetchFactory('query', 'collections'),

    fetchRecentCart: function fetchRecentCart() {
      var _this14 = this;

      return this.fetch('references', this.config.domain + '.recent-cart').then(function (reference) {
        var cartId = reference.referenceId;

        return _this14.fetchCart(cartId);
      })['catch'](function () {
        return _this14.createCart().then(function (cart) {
          var refAttrs = {
            referenceId: cart.id
          };

          refAttrs[GUID_KEY] = _this14.config.domain + '.recent-cart';

          _this14.create('references', refAttrs);

          return cart;
        });
      });
    }
  }, {
    serializers: {
      get: function get() {
        return assign$1({}, this.shadowedSerializers);
      },
      set: function set(values) {
        this.shadowedSerializers = assign$1({}, values);
      },
      configurable: true,
      enumerable: true
    },
    adapters: {
      get: function get() {
        return assign$1({}, this.shadowedAdapters);
      },
      set: function set(values) {
        this.shadowedAdapters = assign$1({}, values);
      },
      configurable: true,
      enumerable: true
    }
  }));

  /* globals require */

  if (isNodeLikeEnvironment()) {
    /* this indirection is needed because babel throws errors when
     * transpiling require('node-fetch') using `amd` plugin with babel6
     */
    var localRequire = require;
    var _fetch = localRequire('node-fetch');

    globalVars.set('fetch', _fetch);
    globalVars.set('Response', _fetch.Response);
  }

  /* global Buffer */

  if (isNodeLikeEnvironment()) {
    globalVars.set('btoa', function (string) {
      return new Buffer(string).toString('base64');
    });
  }

  /**
   * @module shopify-buy
   * @submodule shopify
   */

  /**
   * `ShopifyBuy` only defines one function {{#crossLink "ShopifyBuy/buildClient"}}{{/crossLink}} which can
   * be used to build a {{#crossLink "ShopClient"}}{{/crossLink}} to query your store using the
   * provided
   * {{#crossLink "ShopifyBuy/buildClient/configAttrs:accessToken"}}`accessToken`{{/crossLink}},
   * {{#crossLink "ShopifyBuy/buildClient/configAttrs:appId"}}`appId`{{/crossLink}},
   * and {{#crossLink "ShopifyBuy/buildClient/configAttrs:domain"}}`domain`{{/crossLink}}.
   * @class ShopifyBuy
   * @static
   */
  var Shopify = {
    ShopClient: ShopClient,
    Config: Config,
    version: version$1,
    NO_IMAGE_URI: NO_IMAGE_URI,

    buildClient: function buildClient() {
      var configAttrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var config = new this.Config(configAttrs);

      return new this.ShopClient(config);
    }
  };

  module.exports = Shopify;
});
