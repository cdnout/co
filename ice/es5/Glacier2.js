"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var root = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var ice = root.ice || {};
  root.Glacier2 = root.Glacier2 || {};
  ice.Glacier2 = root.Glacier2;
  var Slice = Ice.Slice;

  (function () {
    //
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.4
    //
    // <auto-generated>
    //
    // Generated from file `SSLInfo.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */

    /**
     * Information taken from an SSL connection used for permissions
     * verification.
     *
     * @see PermissionsVerifier
     *
     **/
    Glacier2.SSLInfo = /*#__PURE__*/function () {
      function _class() {
        var remoteHost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var remotePort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var localHost = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var localPort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var cipher = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
        var certs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

        _classCallCheck(this, _class);

        this.remoteHost = remoteHost;
        this.remotePort = remotePort;
        this.localHost = localHost;
        this.localPort = localPort;
        this.cipher = cipher;
        this.certs = certs;
      }

      _createClass(_class, [{
        key: "_write",
        value: function _write(ostr) {
          ostr.writeString(this.remoteHost);
          ostr.writeInt(this.remotePort);
          ostr.writeString(this.localHost);
          ostr.writeInt(this.localPort);
          ostr.writeString(this.cipher);
          Ice.StringSeqHelper.write(ostr, this.certs);
        }
      }, {
        key: "_read",
        value: function _read(istr) {
          this.remoteHost = istr.readString();
          this.remotePort = istr.readInt();
          this.localHost = istr.readString();
          this.localPort = istr.readInt();
          this.cipher = istr.readString();
          this.certs = Ice.StringSeqHelper.read(istr);
        }
      }], [{
        key: "minWireSize",
        get: function get() {
          return 12;
        }
      }]);

      return _class;
    }();

    Slice.defineStruct(Glacier2.SSLInfo, true, true);
  })();

  (function () {
    //
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.4
    //
    // <auto-generated>
    //
    // Generated from file `Metrics.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */
    var iceC_IceMX_SessionMetrics_ids = ["::Ice::Object", "::IceMX::Metrics", "::IceMX::SessionMetrics"];
    /**
     * Provides information on Glacier2 sessions.
     *
     **/

    IceMX.SessionMetrics = /*#__PURE__*/function (_IceMX$Metrics) {
      _inherits(_class2, _IceMX$Metrics);

      var _super = _createSuper(_class2);

      function _class2(id, total, current, totalLifetime, failures) {
        var _this;

        var forwardedClient = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var forwardedServer = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var routingTableSize = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        var queuedClient = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
        var queuedServer = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
        var overriddenClient = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
        var overriddenServer = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;

        _classCallCheck(this, _class2);

        _this = _super.call(this, id, total, current, totalLifetime, failures);
        _this.forwardedClient = forwardedClient;
        _this.forwardedServer = forwardedServer;
        _this.routingTableSize = routingTableSize;
        _this.queuedClient = queuedClient;
        _this.queuedServer = queuedServer;
        _this.overriddenClient = overriddenClient;
        _this.overriddenServer = overriddenServer;
        return _this;
      }

      _createClass(_class2, [{
        key: "_iceWriteMemberImpl",
        value: function _iceWriteMemberImpl(ostr) {
          ostr.writeInt(this.forwardedClient);
          ostr.writeInt(this.forwardedServer);
          ostr.writeInt(this.routingTableSize);
          ostr.writeInt(this.queuedClient);
          ostr.writeInt(this.queuedServer);
          ostr.writeInt(this.overriddenClient);
          ostr.writeInt(this.overriddenServer);
        }
      }, {
        key: "_iceReadMemberImpl",
        value: function _iceReadMemberImpl(istr) {
          this.forwardedClient = istr.readInt();
          this.forwardedServer = istr.readInt();
          this.routingTableSize = istr.readInt();
          this.queuedClient = istr.readInt();
          this.queuedServer = istr.readInt();
          this.overriddenClient = istr.readInt();
          this.overriddenServer = istr.readInt();
        }
      }]);

      return _class2;
    }(IceMX.Metrics);

    Slice.defineValue(IceMX.SessionMetrics, iceC_IceMX_SessionMetrics_ids[2], false);
  })();

  (function () {
    //
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.4
    //
    // <auto-generated>
    //
    // Generated from file `Session.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */

    /**
     * This exception is raised if an attempt to create a new session failed.
     *
     **/
    Glacier2.CannotCreateSessionException = /*#__PURE__*/function (_Ice$UserException) {
      _inherits(_class3, _Ice$UserException);

      var _super2 = _createSuper(_class3);

      function _class3() {
        var _this2;

        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class3);

        _this2 = _super2.call(this, _cause);
        _this2.reason = reason;
        return _this2;
      }

      _createClass(_class3, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return Glacier2.CannotCreateSessionException;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.reason);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.reason = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::Glacier2::CannotCreateSessionException";
        }
      }]);

      return _class3;
    }(Ice.UserException);

    Slice.PreservedUserException(Glacier2.CannotCreateSessionException);
    var iceC_Glacier2_Session_ids = ["::Glacier2::Session", "::Ice::Object"];
    /**
     * A client-visible session object, which is tied to the lifecycle of a {@link Router}.
     *
     * @see Router
     * @see SessionManager
     *
     **/

    Glacier2.Session = /*#__PURE__*/function (_Ice$Object) {
      _inherits(_class4, _Ice$Object);

      var _super3 = _createSuper(_class4);

      function _class4() {
        _classCallCheck(this, _class4);

        return _super3.apply(this, arguments);
      }

      return _class4;
    }(Ice.Object);

    Glacier2.SessionPrx = /*#__PURE__*/function (_Ice$ObjectPrx) {
      _inherits(_class5, _Ice$ObjectPrx);

      var _super4 = _createSuper(_class5);

      function _class5() {
        _classCallCheck(this, _class5);

        return _super4.apply(this, arguments);
      }

      return _class5;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.Session, Glacier2.SessionPrx, iceC_Glacier2_Session_ids, 0, {
      "destroy": [,,,,,,,,,]
    });
    var iceC_Glacier2_StringSet_ids = ["::Glacier2::StringSet", "::Ice::Object"];
    /**
     * An object for managing the set of identity constraints for specific
     * parts of object identity on a
     * {@link Session}.
     *
     * @see Session
     * @see SessionControl
     *
     **/

    Glacier2.StringSet = /*#__PURE__*/function (_Ice$Object2) {
      _inherits(_class6, _Ice$Object2);

      var _super5 = _createSuper(_class6);

      function _class6() {
        _classCallCheck(this, _class6);

        return _super5.apply(this, arguments);
      }

      return _class6;
    }(Ice.Object);

    Glacier2.StringSetPrx = /*#__PURE__*/function (_Ice$ObjectPrx2) {
      _inherits(_class7, _Ice$ObjectPrx2);

      var _super6 = _createSuper(_class7);

      function _class7() {
        _classCallCheck(this, _class7);

        return _super6.apply(this, arguments);
      }

      return _class7;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.StringSet, Glacier2.StringSetPrx, iceC_Glacier2_StringSet_ids, 0, {
      "add": [, 2, 2,,, [["Ice.StringSeqHelper"]],,,,],
      "remove": [, 2, 2,,, [["Ice.StringSeqHelper"]],,,,],
      "get": [, 2, 2,, ["Ice.StringSeqHelper"],,,,,]
    });
    var iceC_Glacier2_IdentitySet_ids = ["::Glacier2::IdentitySet", "::Ice::Object"];
    /**
     * An object for managing the set of object identity constraints on a
     * {@link Session}.
     *
     * @see Session
     * @see SessionControl
     *
     **/

    Glacier2.IdentitySet = /*#__PURE__*/function (_Ice$Object3) {
      _inherits(_class8, _Ice$Object3);

      var _super7 = _createSuper(_class8);

      function _class8() {
        _classCallCheck(this, _class8);

        return _super7.apply(this, arguments);
      }

      return _class8;
    }(Ice.Object);

    Glacier2.IdentitySetPrx = /*#__PURE__*/function (_Ice$ObjectPrx3) {
      _inherits(_class9, _Ice$ObjectPrx3);

      var _super8 = _createSuper(_class9);

      function _class9() {
        _classCallCheck(this, _class9);

        return _super8.apply(this, arguments);
      }

      return _class9;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.IdentitySet, Glacier2.IdentitySetPrx, iceC_Glacier2_IdentitySet_ids, 0, {
      "add": [, 2, 2,,, [["Ice.IdentitySeqHelper"]],,,,],
      "remove": [, 2, 2,,, [["Ice.IdentitySeqHelper"]],,,,],
      "get": [, 2, 2,, ["Ice.IdentitySeqHelper"],,,,,]
    });
    var iceC_Glacier2_SessionControl_ids = ["::Glacier2::SessionControl", "::Ice::Object"];
    /**
     * An administrative session control object, which is tied to the
     * lifecycle of a {@link Session}.
     *
     * @see Session
     *
     **/

    Glacier2.SessionControl = /*#__PURE__*/function (_Ice$Object4) {
      _inherits(_class10, _Ice$Object4);

      var _super9 = _createSuper(_class10);

      function _class10() {
        _classCallCheck(this, _class10);

        return _super9.apply(this, arguments);
      }

      return _class10;
    }(Ice.Object);

    Glacier2.SessionControlPrx = /*#__PURE__*/function (_Ice$ObjectPrx4) {
      _inherits(_class11, _Ice$ObjectPrx4);

      var _super10 = _createSuper(_class11);

      function _class11() {
        _classCallCheck(this, _class11);

        return _super10.apply(this, arguments);
      }

      return _class11;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.SessionControl, Glacier2.SessionControlPrx, iceC_Glacier2_SessionControl_ids, 0, {
      "categories": [,,,, ["Glacier2.StringSetPrx"],,,,,],
      "adapterIds": [,,,, ["Glacier2.StringSetPrx"],,,,,],
      "identities": [,,,, ["Glacier2.IdentitySetPrx"],,,,,],
      "getSessionTimeout": [, 2, 2,, [3],,,,,],
      "destroy": [,,,,,,,,,]
    });
    var iceC_Glacier2_SessionManager_ids = ["::Glacier2::SessionManager", "::Ice::Object"];
    /**
     * The session manager for username/password authenticated users that
     * is responsible for managing {@link Session} objects. New session objects
     * are created by the {@link Router} object calling on an application-provided
     * session manager. If no session manager is provided by the application,
     * no client-visible sessions are passed to the client.
     *
     * @see Router
     * @see Session
     *
     **/

    Glacier2.SessionManager = /*#__PURE__*/function (_Ice$Object5) {
      _inherits(_class12, _Ice$Object5);

      var _super11 = _createSuper(_class12);

      function _class12() {
        _classCallCheck(this, _class12);

        return _super11.apply(this, arguments);
      }

      return _class12;
    }(Ice.Object);

    Glacier2.SessionManagerPrx = /*#__PURE__*/function (_Ice$ObjectPrx5) {
      _inherits(_class13, _Ice$ObjectPrx5);

      var _super12 = _createSuper(_class13);

      function _class13() {
        _classCallCheck(this, _class13);

        return _super12.apply(this, arguments);
      }

      return _class13;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.SessionManager, Glacier2.SessionManagerPrx, iceC_Glacier2_SessionManager_ids, 0, {
      "create": [,,, 2, ["Glacier2.SessionPrx"], [[7], ["Glacier2.SessionControlPrx"]],, [Glacier2.CannotCreateSessionException],,]
    });
    var iceC_Glacier2_SSLSessionManager_ids = ["::Glacier2::SSLSessionManager", "::Ice::Object"];
    /**
     * The session manager for SSL authenticated users that is
     * responsible for managing {@link Session} objects. New session objects are
     * created by the {@link Router} object calling on an application-provided
     * session manager. If no session manager is provided by the
     * application, no client-visible sessions are passed to the client.
     *
     * @see Router
     * @see Session
     *
     **/

    Glacier2.SSLSessionManager = /*#__PURE__*/function (_Ice$Object6) {
      _inherits(_class14, _Ice$Object6);

      var _super13 = _createSuper(_class14);

      function _class14() {
        _classCallCheck(this, _class14);

        return _super13.apply(this, arguments);
      }

      return _class14;
    }(Ice.Object);

    Glacier2.SSLSessionManagerPrx = /*#__PURE__*/function (_Ice$ObjectPrx6) {
      _inherits(_class15, _Ice$ObjectPrx6);

      var _super14 = _createSuper(_class15);

      function _class15() {
        _classCallCheck(this, _class15);

        return _super14.apply(this, arguments);
      }

      return _class15;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.SSLSessionManager, Glacier2.SSLSessionManagerPrx, iceC_Glacier2_SSLSessionManager_ids, 0, {
      "create": [,,, 2, ["Glacier2.SessionPrx"], [[Glacier2.SSLInfo], ["Glacier2.SessionControlPrx"]],, [Glacier2.CannotCreateSessionException],,]
    });
  })();

  (function () {//
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.4
    //
    // <auto-generated>
    //
    // Generated from file `PermissionsVerifierF.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */
  })();

  (function () {
    //
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.4
    //
    // <auto-generated>
    //
    // Generated from file `PermissionsVerifier.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */

    /**
     * This exception is raised if a client is denied the ability to create
     * a session with the router.
     *
     **/
    Glacier2.PermissionDeniedException = /*#__PURE__*/function (_Ice$UserException2) {
      _inherits(_class16, _Ice$UserException2);

      var _super15 = _createSuper(_class16);

      function _class16() {
        var _this3;

        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class16);

        _this3 = _super15.call(this, _cause);
        _this3.reason = reason;
        return _this3;
      }

      _createClass(_class16, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return Glacier2.PermissionDeniedException;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.reason);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.reason = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::Glacier2::PermissionDeniedException";
        }
      }]);

      return _class16;
    }(Ice.UserException);

    Slice.PreservedUserException(Glacier2.PermissionDeniedException);
    var iceC_Glacier2_PermissionsVerifier_ids = ["::Glacier2::PermissionsVerifier", "::Ice::Object"];
    /**
     * The Glacier2 permissions verifier. This is called through the
     * process of establishing a session.
     *
     * @see Router
     *
     **/

    Glacier2.PermissionsVerifier = /*#__PURE__*/function (_Ice$Object7) {
      _inherits(_class17, _Ice$Object7);

      var _super16 = _createSuper(_class17);

      function _class17() {
        _classCallCheck(this, _class17);

        return _super16.apply(this, arguments);
      }

      return _class17;
    }(Ice.Object);

    Glacier2.PermissionsVerifierPrx = /*#__PURE__*/function (_Ice$ObjectPrx7) {
      _inherits(_class18, _Ice$ObjectPrx7);

      var _super17 = _createSuper(_class18);

      function _class18() {
        _classCallCheck(this, _class18);

        return _super17.apply(this, arguments);
      }

      return _class18;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.PermissionsVerifier, Glacier2.PermissionsVerifierPrx, iceC_Glacier2_PermissionsVerifier_ids, 0, {
      "checkPermissions": [, 2, 1, 2, [1], [[7], [7]], [[7]], [Glacier2.PermissionDeniedException],,]
    });
    var iceC_Glacier2_SSLPermissionsVerifier_ids = ["::Glacier2::SSLPermissionsVerifier", "::Ice::Object"];
    /**
     * The SSL Glacier2 permissions verifier. This is called through the
     * process of establishing a session.
     *
     * @see Router
     *
     **/

    Glacier2.SSLPermissionsVerifier = /*#__PURE__*/function (_Ice$Object8) {
      _inherits(_class19, _Ice$Object8);

      var _super18 = _createSuper(_class19);

      function _class19() {
        _classCallCheck(this, _class19);

        return _super18.apply(this, arguments);
      }

      return _class19;
    }(Ice.Object);

    Glacier2.SSLPermissionsVerifierPrx = /*#__PURE__*/function (_Ice$ObjectPrx8) {
      _inherits(_class20, _Ice$ObjectPrx8);

      var _super19 = _createSuper(_class20);

      function _class20() {
        _classCallCheck(this, _class20);

        return _super19.apply(this, arguments);
      }

      return _class20;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.SSLPermissionsVerifier, Glacier2.SSLPermissionsVerifierPrx, iceC_Glacier2_SSLPermissionsVerifier_ids, 0, {
      "authorize": [, 2, 1, 2, [1], [[Glacier2.SSLInfo]], [[7]], [Glacier2.PermissionDeniedException],,]
    });
  })();

  (function () {//
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.4
    //
    // <auto-generated>
    //
    // Generated from file `RouterF.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */
  })();

  (function () {
    //
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.4
    //
    // <auto-generated>
    //
    // Generated from file `Router.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */

    /**
     * This exception is raised if a client tries to destroy a session
     * with a router, but no session exists for the client.
     *
     * @see Router#destroySession
     *
     **/
    Glacier2.SessionNotExistException = /*#__PURE__*/function (_Ice$UserException3) {
      _inherits(_class21, _Ice$UserException3);

      var _super20 = _createSuper(_class21);

      function _class21() {
        var _cause = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, _class21);

        return _super20.call(this, _cause);
      }

      _createClass(_class21, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return Glacier2.SessionNotExistException;
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::Glacier2::SessionNotExistException";
        }
      }]);

      return _class21;
    }(Ice.UserException);

    var iceC_Glacier2_Router_ids = ["::Glacier2::Router", "::Ice::Object", "::Ice::Router"];
    /**
     * The Glacier2 specialization of the <code>Ice::Router</code> interface.
     *
     **/

    Glacier2.Router = /*#__PURE__*/function (_Ice$Object9) {
      _inherits(_class22, _Ice$Object9);

      var _super21 = _createSuper(_class22);

      function _class22() {
        _classCallCheck(this, _class22);

        return _super21.apply(this, arguments);
      }

      _createClass(_class22, null, [{
        key: "_iceImplements",
        get: function get() {
          return [Ice.Router];
        }
      }]);

      return _class22;
    }(Ice.Object);

    Glacier2.RouterPrx = /*#__PURE__*/function (_Ice$ObjectPrx9) {
      _inherits(_class23, _Ice$ObjectPrx9);

      var _super22 = _createSuper(_class23);

      function _class23() {
        _classCallCheck(this, _class23);

        return _super22.apply(this, arguments);
      }

      _createClass(_class23, null, [{
        key: "_implements",
        get: function get() {
          return [Ice.RouterPrx];
        }
      }]);

      return _class23;
    }(Ice.ObjectPrx);

    Slice.defineOperations(Glacier2.Router, Glacier2.RouterPrx, iceC_Glacier2_Router_ids, 0, {
      "getCategoryForClient": [, 2, 1,, [7],,,,,],
      "createSession": [,,, 2, ["Glacier2.SessionPrx"], [[7], [7]],, [Glacier2.CannotCreateSessionException, Glacier2.PermissionDeniedException],,],
      "createSessionFromSecureConnection": [,,, 2, ["Glacier2.SessionPrx"],,, [Glacier2.CannotCreateSessionException, Glacier2.PermissionDeniedException],,],
      "refreshSession": [,,,,,,, [Glacier2.SessionNotExistException],,],
      "destroySession": [,,,,,,, [Glacier2.SessionNotExistException],,],
      "getSessionTimeout": [, 2, 1,, [4],,,,,],
      "getACMTimeout": [, 2, 1,, [3],,,,,]
    });
  })();

  (function () {//
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
  })();

  root.Glacier2 = Glacier2;
  root.ice = ice;
})();
//# sourceMappingURL=Glacier2.js.map
