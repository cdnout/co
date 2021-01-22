(function()
{
    var root = typeof(window) !== "undefined" ? window : typeof(global) !== "undefined" ? global : typeof(self) !== "undefined" ? self : {};
    var ice = root.ice || {};
    root.Glacier2 = root.Glacier2 || {};
    ice.Glacier2 = root.Glacier2;
    var Slice = Ice.Slice;

    (function()
    {
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
            Glacier2.SSLInfo = class
            {
                constructor(remoteHost = "", remotePort = 0, localHost = "", localPort = 0, cipher = "", certs = null)
                {
                    this.remoteHost = remoteHost;
                    this.remotePort = remotePort;
                    this.localHost = localHost;
                    this.localPort = localPort;
                    this.cipher = cipher;
                    this.certs = certs;
                }
        
                _write(ostr)
                {
                    ostr.writeString(this.remoteHost);
                    ostr.writeInt(this.remotePort);
                    ostr.writeString(this.localHost);
                    ostr.writeInt(this.localPort);
                    ostr.writeString(this.cipher);
                    Ice.StringSeqHelper.write(ostr, this.certs);
                }
        
                _read(istr)
                {
                    this.remoteHost = istr.readString();
                    this.remotePort = istr.readInt();
                    this.localHost = istr.readString();
                    this.localPort = istr.readInt();
                    this.cipher = istr.readString();
                    this.certs = Ice.StringSeqHelper.read(istr);
                }
        
                static get minWireSize()
                {
                    return  12;
                }
            };
        
            Slice.defineStruct(Glacier2.SSLInfo, true, true);
        
    }());

    (function()
    {
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
        
        
            const iceC_IceMX_SessionMetrics_ids = [
                "::Ice::Object",
                "::IceMX::Metrics",
                "::IceMX::SessionMetrics"
            ];
        
            /**
             * Provides information on Glacier2 sessions.
             *
             **/
            IceMX.SessionMetrics = class extends IceMX.Metrics
            {
                constructor(id, total, current, totalLifetime, failures, forwardedClient = 0, forwardedServer = 0, routingTableSize = 0, queuedClient = 0, queuedServer = 0, overriddenClient = 0, overriddenServer = 0)
                {
                    super(id, total, current, totalLifetime, failures);
                    this.forwardedClient = forwardedClient;
                    this.forwardedServer = forwardedServer;
                    this.routingTableSize = routingTableSize;
                    this.queuedClient = queuedClient;
                    this.queuedServer = queuedServer;
                    this.overriddenClient = overriddenClient;
                    this.overriddenServer = overriddenServer;
                }
        
                _iceWriteMemberImpl(ostr)
                {
                    ostr.writeInt(this.forwardedClient);
                    ostr.writeInt(this.forwardedServer);
                    ostr.writeInt(this.routingTableSize);
                    ostr.writeInt(this.queuedClient);
                    ostr.writeInt(this.queuedServer);
                    ostr.writeInt(this.overriddenClient);
                    ostr.writeInt(this.overriddenServer);
                }
        
                _iceReadMemberImpl(istr)
                {
                    this.forwardedClient = istr.readInt();
                    this.forwardedServer = istr.readInt();
                    this.routingTableSize = istr.readInt();
                    this.queuedClient = istr.readInt();
                    this.queuedServer = istr.readInt();
                    this.overriddenClient = istr.readInt();
                    this.overriddenServer = istr.readInt();
                }
            };
        
            Slice.defineValue(IceMX.SessionMetrics, iceC_IceMX_SessionMetrics_ids[2], false);
        
    }());

    (function()
    {
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
            Glacier2.CannotCreateSessionException = class extends Ice.UserException
            {
                constructor(reason = "", _cause = "")
                {
                    super(_cause);
                    this.reason = reason;
                }
        
                static get _parent()
                {
                    return Ice.UserException;
                }
        
                static get _id()
                {
                    return "::Glacier2::CannotCreateSessionException";
                }
        
                _mostDerivedType()
                {
                    return Glacier2.CannotCreateSessionException;
                }
        
                _writeMemberImpl(ostr)
                {
                    ostr.writeString(this.reason);
                }
        
                _readMemberImpl(istr)
                {
                    this.reason = istr.readString();
                }
            };
        
            Slice.PreservedUserException(Glacier2.CannotCreateSessionException);
        
            const iceC_Glacier2_Session_ids = [
                "::Glacier2::Session",
                "::Ice::Object"
            ];
        
            /**
             * A client-visible session object, which is tied to the lifecycle of a {@link Router}.
             *
             * @see Router
             * @see SessionManager
             *
             **/
            Glacier2.Session = class extends Ice.Object
            {
            };
        
            Glacier2.SessionPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.Session, Glacier2.SessionPrx, iceC_Glacier2_Session_ids, 0,
            {
                "destroy": [, , , , , , , , , ]
            });
        
            const iceC_Glacier2_StringSet_ids = [
                "::Glacier2::StringSet",
                "::Ice::Object"
            ];
        
            /**
             * An object for managing the set of identity constraints for specific
             * parts of object identity on a
             * {@link Session}.
             *
             * @see Session
             * @see SessionControl
             *
             **/
            Glacier2.StringSet = class extends Ice.Object
            {
            };
        
            Glacier2.StringSetPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.StringSet, Glacier2.StringSetPrx, iceC_Glacier2_StringSet_ids, 0,
            {
                "add": [, 2, 2, , , [["Ice.StringSeqHelper"]], , , , ],
                "remove": [, 2, 2, , , [["Ice.StringSeqHelper"]], , , , ],
                "get": [, 2, 2, , ["Ice.StringSeqHelper"], , , , , ]
            });
        
            const iceC_Glacier2_IdentitySet_ids = [
                "::Glacier2::IdentitySet",
                "::Ice::Object"
            ];
        
            /**
             * An object for managing the set of object identity constraints on a
             * {@link Session}.
             *
             * @see Session
             * @see SessionControl
             *
             **/
            Glacier2.IdentitySet = class extends Ice.Object
            {
            };
        
            Glacier2.IdentitySetPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.IdentitySet, Glacier2.IdentitySetPrx, iceC_Glacier2_IdentitySet_ids, 0,
            {
                "add": [, 2, 2, , , [["Ice.IdentitySeqHelper"]], , , , ],
                "remove": [, 2, 2, , , [["Ice.IdentitySeqHelper"]], , , , ],
                "get": [, 2, 2, , ["Ice.IdentitySeqHelper"], , , , , ]
            });
        
            const iceC_Glacier2_SessionControl_ids = [
                "::Glacier2::SessionControl",
                "::Ice::Object"
            ];
        
            /**
             * An administrative session control object, which is tied to the
             * lifecycle of a {@link Session}.
             *
             * @see Session
             *
             **/
            Glacier2.SessionControl = class extends Ice.Object
            {
            };
        
            Glacier2.SessionControlPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.SessionControl, Glacier2.SessionControlPrx, iceC_Glacier2_SessionControl_ids, 0,
            {
                "categories": [, , , , ["Glacier2.StringSetPrx"], , , , , ],
                "adapterIds": [, , , , ["Glacier2.StringSetPrx"], , , , , ],
                "identities": [, , , , ["Glacier2.IdentitySetPrx"], , , , , ],
                "getSessionTimeout": [, 2, 2, , [3], , , , , ],
                "destroy": [, , , , , , , , , ]
            });
        
            const iceC_Glacier2_SessionManager_ids = [
                "::Glacier2::SessionManager",
                "::Ice::Object"
            ];
        
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
            Glacier2.SessionManager = class extends Ice.Object
            {
            };
        
            Glacier2.SessionManagerPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.SessionManager, Glacier2.SessionManagerPrx, iceC_Glacier2_SessionManager_ids, 0,
            {
                "create": [, , , 2, ["Glacier2.SessionPrx"], [[7], ["Glacier2.SessionControlPrx"]], ,
                [
                    Glacier2.CannotCreateSessionException
                ], , ]
            });
        
            const iceC_Glacier2_SSLSessionManager_ids = [
                "::Glacier2::SSLSessionManager",
                "::Ice::Object"
            ];
        
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
            Glacier2.SSLSessionManager = class extends Ice.Object
            {
            };
        
            Glacier2.SSLSessionManagerPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.SSLSessionManager, Glacier2.SSLSessionManagerPrx, iceC_Glacier2_SSLSessionManager_ids, 0,
            {
                "create": [, , , 2, ["Glacier2.SessionPrx"], [[Glacier2.SSLInfo], ["Glacier2.SessionControlPrx"]], ,
                [
                    Glacier2.CannotCreateSessionException
                ], , ]
            });
        
    }());

    (function()
    {
        //
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
        
        
    }());

    (function()
    {
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
            Glacier2.PermissionDeniedException = class extends Ice.UserException
            {
                constructor(reason = "", _cause = "")
                {
                    super(_cause);
                    this.reason = reason;
                }
        
                static get _parent()
                {
                    return Ice.UserException;
                }
        
                static get _id()
                {
                    return "::Glacier2::PermissionDeniedException";
                }
        
                _mostDerivedType()
                {
                    return Glacier2.PermissionDeniedException;
                }
        
                _writeMemberImpl(ostr)
                {
                    ostr.writeString(this.reason);
                }
        
                _readMemberImpl(istr)
                {
                    this.reason = istr.readString();
                }
            };
        
            Slice.PreservedUserException(Glacier2.PermissionDeniedException);
        
            const iceC_Glacier2_PermissionsVerifier_ids = [
                "::Glacier2::PermissionsVerifier",
                "::Ice::Object"
            ];
        
            /**
             * The Glacier2 permissions verifier. This is called through the
             * process of establishing a session.
             *
             * @see Router
             *
             **/
            Glacier2.PermissionsVerifier = class extends Ice.Object
            {
            };
        
            Glacier2.PermissionsVerifierPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.PermissionsVerifier, Glacier2.PermissionsVerifierPrx, iceC_Glacier2_PermissionsVerifier_ids, 0,
            {
                "checkPermissions": [, 2, 1, 2, [1], [[7], [7]], [[7]],
                [
                    Glacier2.PermissionDeniedException
                ], , ]
            });
        
            const iceC_Glacier2_SSLPermissionsVerifier_ids = [
                "::Glacier2::SSLPermissionsVerifier",
                "::Ice::Object"
            ];
        
            /**
             * The SSL Glacier2 permissions verifier. This is called through the
             * process of establishing a session.
             *
             * @see Router
             *
             **/
            Glacier2.SSLPermissionsVerifier = class extends Ice.Object
            {
            };
        
            Glacier2.SSLPermissionsVerifierPrx = class extends Ice.ObjectPrx
            {
            };
        
            Slice.defineOperations(Glacier2.SSLPermissionsVerifier, Glacier2.SSLPermissionsVerifierPrx, iceC_Glacier2_SSLPermissionsVerifier_ids, 0,
            {
                "authorize": [, 2, 1, 2, [1], [[Glacier2.SSLInfo]], [[7]],
                [
                    Glacier2.PermissionDeniedException
                ], , ]
            });
        
    }());

    (function()
    {
        //
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
        
        
    }());

    (function()
    {
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
            Glacier2.SessionNotExistException = class extends Ice.UserException
            {
                constructor(_cause = "")
                {
                    super(_cause);
                }
        
                static get _parent()
                {
                    return Ice.UserException;
                }
        
                static get _id()
                {
                    return "::Glacier2::SessionNotExistException";
                }
        
                _mostDerivedType()
                {
                    return Glacier2.SessionNotExistException;
                }
            };
        
            const iceC_Glacier2_Router_ids = [
                "::Glacier2::Router",
                "::Ice::Object",
                "::Ice::Router"
            ];
        
            /**
             * The Glacier2 specialization of the <code>Ice::Router</code> interface.
             *
             **/
            Glacier2.Router = class extends Ice.Object
            {
                static get _iceImplements()
                {
                    return [
                        Ice.Router
                    ];
                }
            };
        
            Glacier2.RouterPrx = class extends Ice.ObjectPrx
            {
                static get _implements()
                {
                    return [
                        Ice.RouterPrx];
                }
            };
        
            Slice.defineOperations(Glacier2.Router, Glacier2.RouterPrx, iceC_Glacier2_Router_ids, 0,
            {
                "getCategoryForClient": [, 2, 1, , [7], , , , , ],
                "createSession": [, , , 2, ["Glacier2.SessionPrx"], [[7], [7]], ,
                [
                    Glacier2.CannotCreateSessionException,
                    Glacier2.PermissionDeniedException
                ], , ],
                "createSessionFromSecureConnection": [, , , 2, ["Glacier2.SessionPrx"], , ,
                [
                    Glacier2.CannotCreateSessionException,
                    Glacier2.PermissionDeniedException
                ], , ],
                "refreshSession": [, , , , , , ,
                [
                    Glacier2.SessionNotExistException
                ], , ],
                "destroySession": [, , , , , , ,
                [
                    Glacier2.SessionNotExistException
                ], , ],
                "getSessionTimeout": [, 2, 1, , [4], , , , , ],
                "getACMTimeout": [, 2, 1, , [3], , , , , ]
            });
        
    }());

    (function()
    {
        //
        // Copyright (c) ZeroC, Inc. All rights reserved.
        //
        
        
        
    }());

    root.Glacier2 = Glacier2;
    root.ice = ice;
}());

