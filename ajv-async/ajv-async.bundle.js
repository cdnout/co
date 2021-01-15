(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ajvAsync = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(acorn) {
    switch (parseInt(acorn.version)) {
    case 2:
    case 3:
        acorn.plugins.asyncawait = require('./acorn-v3') ;
        break ;
    case 4:
        acorn.plugins.asyncawait = require('./acorn-v4') ;
        break ;
    case 5:
        acorn.plugins.asyncawait = require('./acorn-v4') ;
        break ;
    default:
        throw new Error("acorn-es7-plugin requires Acorn v2, 3, 4 or 5") ;
    }
    return acorn
}

},{"./acorn-v3":2,"./acorn-v4":3}],2:[function(require,module,exports){
var NotAsync = {} ;
var asyncExit = /^async[\t ]+(return|throw)/ ;
var asyncFunction = /^async[\t ]+function/ ;
var atomOrPropertyOrLabel = /^\s*[():;]/ ;
var removeComments = /([^\n])\/\*(\*(?!\/)|[^\n*])*\*\/([^\n])/g ;
var matchAsyncGet = /\s*(get|set)\s*\(/ ;

function hasLineTerminatorBeforeNext(st, since) {
    return st.lineStart >= since;
}

function test(regex,st,noComment) {
    var src = st.input.slice(st.start) ;
    if (noComment) {
        src = src.replace(removeComments,"$1 $3") ;
  }
    return regex.test(src);
}

/* Create a new parser derived from the specified parser, so that in the
 * event of an error we can back out and try again */
function subParse(parser, pos, extensions,parens) {
    var p = new parser.constructor(parser.options, parser.input, pos);
    if (extensions)
        for (var k in extensions)
            p[k] = extensions[k] ;

    var src = parser ;
    var dest = p ;
    ['inFunction','inAsyncFunction','inAsync','inGenerator','inModule'].forEach(function(k){
        if (k in src)
            dest[k] = src[k] ;
    }) ;
    if (parens)
        p.options.preserveParens = true ;
    p.nextToken();
    return p;
}

//TODO: Implement option noAsyncGetters

function asyncAwaitPlugin (parser,options){
    var es7check = function(){} ;

    parser.extend("initialContext",function(base){
        return function(){
            if (this.options.ecmaVersion < 7) {
                es7check = function(node) {
                    parser.raise(node.start,"async/await keywords only available when ecmaVersion>=7") ;
                } ;
            }
            this.reservedWords = new RegExp(this.reservedWords.toString().replace(/await|async/g,"").replace("|/","/").replace("/|","/").replace("||","|")) ;
            this.reservedWordsStrict = new RegExp(this.reservedWordsStrict.toString().replace(/await|async/g,"").replace("|/","/").replace("/|","/").replace("||","|")) ;
            this.reservedWordsStrictBind = new RegExp(this.reservedWordsStrictBind.toString().replace(/await|async/g,"").replace("|/","/").replace("/|","/").replace("||","|")) ;
            this.inAsyncFunction = options.inAsyncFunction ;
            if (options.awaitAnywhere && options.inAsyncFunction)
                parser.raise(node.start,"The options awaitAnywhere and inAsyncFunction are mutually exclusive") ;

            return base.apply(this,arguments);
        }
    }) ;

    parser.extend("shouldParseExportStatement",function(base){
        return function(){
            if (this.type.label==='name' && this.value==='async' && test(asyncFunction,this)) {
                return true ;
            }
            return base.apply(this,arguments) ;
        }
    }) ;

    parser.extend("parseStatement",function(base){
        return function (declaration, topLevel) {
            var start = this.start;
            var startLoc = this.startLoc;
            if (this.type.label==='name') {
                if (test(asyncFunction,this,true)) {
                    var wasAsync = this.inAsyncFunction ;
                    try {
                        this.inAsyncFunction = true ;
                        this.next() ;
                        var r = this.parseStatement(declaration, topLevel) ;
                        r.async = true ;
                        r.start = start;
                        r.loc && (r.loc.start = startLoc);
                        r.range && (r.range[0] = start);
                        return r ;
                    } finally {
                        this.inAsyncFunction = wasAsync ;
                    }
                } else if ((typeof options==="object" && options.asyncExits) && test(asyncExit,this)) {
                    // NON-STANDARD EXTENSION iff. options.asyncExits is set, the
                    // extensions 'async return <expr>?' and 'async throw <expr>?'
                    // are enabled. In each case they are the standard ESTree nodes
                    // with the flag 'async:true'
                    this.next() ;
                    var r = this.parseStatement(declaration, topLevel) ;
                    r.async = true ;
                    r.start = start;
                    r.loc && (r.loc.start = startLoc);
                    r.range && (r.range[0] = start);
                   return r ;
                }
            }
            return base.apply(this,arguments);
        }
    }) ;

  parser.extend("parseIdent",function(base){
        return function(liberal){
                var id = base.apply(this,arguments);
                if (this.inAsyncFunction && id.name==='await') {
                    if (arguments.length===0) {
                        this.raise(id.start,"'await' is reserved within async functions") ;
                    }
                }
                return id ;
        }
    }) ;

  parser.extend("parseExprAtom",function(base){
        return function(refShorthandDefaultPos){
            var start = this.start ;
            var startLoc = this.startLoc;
            var rhs,r = base.apply(this,arguments);
            if (r.type==='Identifier') {
                if (r.name==='async' && !hasLineTerminatorBeforeNext(this, r.end)) {
                    // Is this really an async function?
                    var isAsync = this.inAsyncFunction ;
                    try {
                        this.inAsyncFunction = true ;
                        var pp = this ;
                        var inBody = false ;

                        var parseHooks = {
                            parseFunctionBody:function(node,isArrowFunction){
                                try {
                                    var wasInBody = inBody ;
                                    inBody = true ;
                                    return pp.parseFunctionBody.apply(this,arguments) ;
                                } finally {
                                    inBody = wasInBody ;
                                }
                            },
                            raise:function(){
                                try {
                                    return pp.raise.apply(this,arguments) ;
                                } catch(ex) {
                                    throw inBody?ex:NotAsync ;
                                }
                            }
                        } ;

                        rhs = subParse(this,this.start,parseHooks,true).parseExpression() ;
                        if (rhs.type==='SequenceExpression')
                            rhs = rhs.expressions[0] ;
                        if (rhs.type === 'CallExpression')
                            rhs = rhs.callee ;
                        if (rhs.type==='FunctionExpression' || rhs.type==='FunctionDeclaration' || rhs.type==='ArrowFunctionExpression') {
                            // Because we don't know if the top level parser supprts preserveParens, we have to re-parse
                            // without it set
                            rhs = subParse(this,this.start,parseHooks).parseExpression() ;
                            if (rhs.type==='SequenceExpression')
                                rhs = rhs.expressions[0] ;
                            if (rhs.type === 'CallExpression')
                                rhs = rhs.callee ;
                            
                            rhs.async = true ;
                            rhs.start = start;
                            rhs.loc && (rhs.loc.start = startLoc);
                            rhs.range && (rhs.range[0] = start);
                            this.pos = rhs.end;
                            this.end = rhs.end ;
                            this.endLoc = rhs.endLoc ;
                            this.next();
                            es7check(rhs) ;
                            return rhs ;
                        }
                    } catch (ex) {
                        if (ex!==NotAsync)
                            throw ex ;
                    }
                    finally {
                        this.inAsyncFunction = isAsync ;
                    }
                }
                else if (r.name==='await') {
                    var n = this.startNodeAt(r.start, r.loc && r.loc.start);
                    if (this.inAsyncFunction) {
                        rhs = this.parseExprSubscripts() ;
                        n.operator = 'await' ;
                        n.argument = rhs ;
                        n = this.finishNodeAt(n,'AwaitExpression', rhs.end, rhs.loc && rhs.loc.end) ;
                        es7check(n) ;
                        return n ;
                    }
                    // NON-STANDARD EXTENSION iff. options.awaitAnywhere is true,
                    // an 'AwaitExpression' is allowed anywhere the token 'await'
                    // could not be an identifier with the name 'await'.

                    // Look-ahead to see if this is really a property or label called async or await
                    if (this.input.slice(r.end).match(atomOrPropertyOrLabel)) {
                        if (!options.awaitAnywhere && this.options.sourceType === 'module')
                            return this.raise(r.start,"'await' is reserved within modules") ;
                        return r ; // This is a valid property name or label
                    }

                    if (typeof options==="object" && options.awaitAnywhere) {
                        start = this.start ;
                        rhs = subParse(this,start-4).parseExprSubscripts() ;
                        if (rhs.end<=start) {
                            rhs = subParse(this,start).parseExprSubscripts() ;
                            n.operator = 'await' ;
                            n.argument = rhs ;
                            n = this.finishNodeAt(n,'AwaitExpression', rhs.end, rhs.loc && rhs.loc.end) ;
                            this.pos = rhs.end;
                            this.end = rhs.end ;
                            this.endLoc = rhs.endLoc ;
                            this.next();
                            es7check(n) ;
                            return n ;
                        }
                    }

                    if (!options.awaitAnywhere && this.options.sourceType === 'module')
                        return this.raise(r.start,"'await' is reserved within modules") ;
                }
            }
            return r ;
        }
    }) ;

    parser.extend('finishNodeAt',function(base){
            return function(node,type,pos,loc) {
                if (node.__asyncValue) {
                    delete node.__asyncValue ;
                    node.value.async = true ;
                }
                return base.apply(this,arguments) ;
            }
    }) ;

    parser.extend('finishNode',function(base){
            return function(node,type) {
                if (node.__asyncValue) {
                    delete node.__asyncValue ;
                    node.value.async = true ;
                }
                return base.apply(this,arguments) ;
            }
    }) ;

    var allowedPropSpecifiers = {
        get:true,
        set:true,
        async:true
    };
    
    parser.extend("parsePropertyName",function(base){
        return function (prop) {
            var prevName = prop.key && prop.key.name ;
            var key = base.apply(this,arguments) ;
            if (key.type === "Identifier" && (key.name === "async") && !hasLineTerminatorBeforeNext(this, key.end)) {
                // Look-ahead to see if this is really a property or label called async or await
                if (!this.input.slice(key.end).match(atomOrPropertyOrLabel)){
                    // Cheese - eliminate the cases 'async get(){}' and async set(){}'
                    if (matchAsyncGet.test(this.input.slice(key.end))) {
                        key = base.apply(this,arguments) ;
                        prop.__asyncValue = true ;
                    } else {
                        es7check(prop) ;
                        if (prop.kind === 'set') 
                            this.raise(key.start,"'set <member>(value)' cannot be be async") ;
                        
                        key = base.apply(this,arguments) ;
                        if (key.type==='Identifier') {
                            if (key.name==='set')
                                this.raise(key.start,"'set <member>(value)' cannot be be async") ;
                        }
                        prop.__asyncValue = true ;
                    }
                }
            }
            return key;
        };
    }) ;

    parser.extend("parseClassMethod",function(base){
        return function (classBody, method, isGenerator) {
            var wasAsync ;
            if (method.__asyncValue) {
                if (method.kind==='constructor')
                    this.raise(method.start,"class constructor() cannot be be async") ;
                wasAsync = this.inAsyncFunction ;
                this.inAsyncFunction = true ;
            }
            var r = base.apply(this,arguments) ;
            this.inAsyncFunction = wasAsync ;
            return r ;
        }
    }) ;

    parser.extend("parseMethod",function(base){
        return function (isGenerator) {
            var wasAsync ;
            if (this.__currentProperty && this.__currentProperty.__asyncValue) {
                wasAsync = this.inAsyncFunction ;
                this.inAsyncFunction = true ;
            }
            var r = base.apply(this,arguments) ;
            this.inAsyncFunction = wasAsync ;
            return r ;
        }
    }) ;

    parser.extend("parsePropertyValue",function(base){
        return function (prop, isPattern, isGenerator, startPos, startLoc, refDestructuringErrors) {
            var prevProp = this.__currentProperty ; 
            this.__currentProperty = prop ;
            var wasAsync ;
            if (prop.__asyncValue) {
                wasAsync = this.inAsyncFunction ;
                this.inAsyncFunction = true ;
            }
            var r = base.apply(this,arguments) ;
            this.inAsyncFunction = wasAsync ;
            this.__currentProperty = prevProp ;
            return r ;
        }
    }) ;
}

module.exports = asyncAwaitPlugin ;

},{}],3:[function(require,module,exports){
var asyncExit = /^async[\t ]+(return|throw)/ ;
var atomOrPropertyOrLabel = /^\s*[):;]/ ;
var removeComments = /([^\n])\/\*(\*(?!\/)|[^\n*])*\*\/([^\n])/g ;

function hasLineTerminatorBeforeNext(st, since) {
    return st.lineStart >= since;
}

function test(regex,st,noComment) {
    var src = st.input.slice(st.start) ;
    if (noComment) {
        src = src.replace(removeComments,"$1 $3") ;
    }
    return regex.test(src);
}

/* Create a new parser derived from the specified parser, so that in the
 * event of an error we can back out and try again */
function subParse(parser, pos, extensions) {
    var p = new parser.constructor(parser.options, parser.input, pos);
    if (extensions)
        for (var k in extensions)
            p[k] = extensions[k] ;

    var src = parser ;
    var dest = p ;
    ['inFunction','inAsync','inGenerator','inModule'].forEach(function(k){
        if (k in src)
            dest[k] = src[k] ;
    }) ;
    p.nextToken();
    return p;
}

function asyncAwaitPlugin (parser,options){
    if (!options || typeof options !== "object")
        options = {} ;

    parser.extend("parse",function(base){
        return function(){
            this.inAsync = options.inAsyncFunction ;
            if (options.awaitAnywhere && options.inAsyncFunction)
                parser.raise(node.start,"The options awaitAnywhere and inAsyncFunction are mutually exclusive") ;

            return base.apply(this,arguments);
        }
    }) ;

    parser.extend("parseStatement",function(base){
        return function (declaration, topLevel) {
            var start = this.start;
            var startLoc = this.startLoc;
            if (this.type.label==='name') {
                if ((options.asyncExits) && test(asyncExit,this)) {
                    // TODO: Ensure this function is itself nested in an async function or Method
                    this.next() ;

                    var r = this.parseStatement(declaration, topLevel) ;
                    r.async = true ;
                    r.start = start;
                    r.loc && (r.loc.start = startLoc);
                    r.range && (r.range[0] = start);
                    return r ;
                }
            }
            return base.apply(this,arguments);
        }
    }) ;

    parser.extend("parseIdent",function(base){
        return function(liberal) {
            if (this.options.sourceType==='module' && this.options.ecmaVersion >= 8 && options.awaitAnywhere)
                return base.call(this,true) ; // Force liberal mode if awaitAnywhere is set
            return base.apply(this,arguments) ;
        }
    }) ;

    parser.extend("parseExprAtom",function(base){
        var NotAsync = {};
        return function(refShorthandDefaultPos){
            var start = this.start ;
            var startLoc = this.startLoc;

            var rhs,r = base.apply(this,arguments);

            if (r.type==='Identifier') {
                if (r.name==='await' && !this.inAsync) {
                    if (options.awaitAnywhere) {
                        var n = this.startNodeAt(r.start, r.loc && r.loc.start);

                        start = this.start ;

                        var parseHooks = {
                            raise:function(){
                                try {
                                    return pp.raise.apply(this,arguments) ;
                                } catch(ex) {
                                    throw /*inBody?ex:*/NotAsync ;
                                }
                            }
                        } ;

                        try {
                            rhs = subParse(this,start-4,parseHooks).parseExprSubscripts() ;
                            if (rhs.end<=start) {
                                rhs = subParse(this,start,parseHooks).parseExprSubscripts() ;
                                n.argument = rhs ;
                                n = this.finishNodeAt(n,'AwaitExpression', rhs.end, rhs.loc && rhs.loc.end) ;
                                this.pos = rhs.end;
                                this.end = rhs.end ;
                                this.endLoc = rhs.endLoc ;
                                this.next();
                                return n ;
                            }
                        } catch (ex) {
                            if (ex===NotAsync)
                                return r ;
                            throw ex ;
                        }
                    }
                }
            }
            return r ;
        }
    }) ;

    var allowedPropValues = {
        undefined:true,
        get:true,
        set:true,
        static:true,
        async:true,
        constructor:true
    };
    parser.extend("parsePropertyName",function(base){
        return function (prop) {
            var prevName = prop.key && prop.key.name ;
            var key = base.apply(this,arguments) ;
            if (this.value==='get') {
                prop.__maybeStaticAsyncGetter = true ;
            }
            var next ;
            if (allowedPropValues[this.value])
                return key ;

            if (key.type === "Identifier" && (key.name === "async" || prevName === "async") && !hasLineTerminatorBeforeNext(this, key.end) 
                // Look-ahead to see if this is really a property or label called async or await
                && !this.input.slice(key.end).match(atomOrPropertyOrLabel)) {
                if (prop.kind === 'set' || key.name === 'set') 
                    this.raise(key.start,"'set <member>(value)' cannot be be async") ;
                else {
                    this.__isAsyncProp = true ;
                    key = base.apply(this,arguments) ;
                    if (key.type==='Identifier') {
                        if (key.name==='set')
                            this.raise(key.start,"'set <member>(value)' cannot be be async") ;
                    }
                }
            } else {
                delete prop.__maybeStaticAsyncGetter ;
            }
            return key;
        };
    }) ;

    parser.extend("parseClassMethod",function(base){
        return function (classBody, method, isGenerator) {
            var r = base.apply(this,arguments) ;
            if (method.__maybeStaticAsyncGetter) {
                delete method.__maybeStaticAsyncGetter ;
                if (method.key.name!=='get')
                    method.kind = "get" ;
            }
            return r ;
        }
    }) ;


    parser.extend("parseFunctionBody",function(base){
        return function (node, isArrowFunction) {
            var wasAsync = this.inAsync ;
            if (this.__isAsyncProp) {
                node.async = true ;
                this.inAsync = true ;
                delete this.__isAsyncProp ;
            }
            var r = base.apply(this,arguments) ;
            this.inAsync = wasAsync ;
            return r ;
        }
    }) ;
}

module.exports = asyncAwaitPlugin ;

},{}],4:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.acorn = global.acorn || {})));
}(this, (function (exports) { 'use strict';

// Reserved word lists for various dialects of the language

var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};

// And the keywords

var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

var keywords = {
  5: ecma5AndLessKeywords,
  6: ecma5AndLessKeywords + " const class extends export import super"
};

// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.

var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ae\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab65\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d4-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d01-\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by bin/generate-identifier-regex.js

// eslint-disable-next-line comma-spacing
var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541];

// eslint-disable-next-line comma-spacing
var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 0x10000;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) { return false }
    pos += set[i + 1];
    if (pos >= code) { return true }
  }
}

// Test whether a given character code starts an identifier.

function isIdentifierStart(code, astral) {
  if (code < 65) { return code === 36 }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes)
}

// Test whether a given character is part of an identifier.

function isIdentifierChar(code, astral) {
  if (code < 48) { return code === 36 }
  if (code < 58) { return true }
  if (code < 65) { return false }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
}

// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// The `startsExpr` property is used to check if the token ends a
// `yield` expression. It is set on all token types that either can
// directly start an expression (like a quotation mark) or can
// continue an expression (like the body of a string).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var TokenType = function TokenType(label, conf) {
  if ( conf === void 0 ) conf = {};

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};

function binop(name, prec) {
  return new TokenType(name, {beforeExpr: true, binop: prec})
}
var beforeExpr = {beforeExpr: true};
var startsExpr = {startsExpr: true};

// Map keyword names to token types.

var keywords$1 = {};

// Succinct definitions of keyword token types
function kw(name, options) {
  if ( options === void 0 ) options = {};

  options.keyword = name;
  return keywords$1[name] = new TokenType(name, options)
}

var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", {beforeExpr: true}),

  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", {isLoop: true, beforeExpr: true}),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", {isLoop: true}),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", {isLoop: true}),
  _with: kw("with"),
  _new: kw("new", {beforeExpr: true, startsExpr: true}),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import"),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", {beforeExpr: true, binop: 7}),
  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
};

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code) {
  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029
}

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;

// Checks if an object has a property.

function has(obj, propName) {
  return hasOwnProperty.call(obj, propName)
}

var isArray = Array.isArray || (function (obj) { return (
  toString.call(obj) === "[object Array]"
); });

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = function Position(line, col) {
  this.line = line;
  this.column = col;
};

Position.prototype.offset = function offset (n) {
  return new Position(this.line, this.column + n)
};

var SourceLocation = function SourceLocation(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) { this.source = p.sourceFile; }
};

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur)
    }
  }
}

// A second optional argument can be given to further configure
// the parser process. These options are recognized:

var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must
  // be either 3, 5, 6 (2015), 7 (2016), or 8 (2017). This influences support
  // for strict mode, the set of reserved words, and support for
  // new syntax features. The default is 7.
  ecmaVersion: 7,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // th position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false,
  plugins: {}
};

// Interpret and default an options object

function getOptions(opts) {
  var options = {};

  for (var opt in defaultOptions)
    { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

  if (options.ecmaVersion >= 2015)
    { options.ecmaVersion -= 2009; }

  if (options.allowReserved == null)
    { options.allowReserved = options.ecmaVersion < 5; }

  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function (token) { return tokens.push(token); };
  }
  if (isArray(options.onComment))
    { options.onComment = pushComment(options, options.onComment); }

  return options
}

function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start: start,
      end: end
    };
    if (options.locations)
      { comment.loc = new SourceLocation(this, startLoc, endLoc); }
    if (options.ranges)
      { comment.range = [start, end]; }
    array.push(comment);
  }
}

// Registered plugins
var plugins = {};

function keywordRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
}

var Parser = function Parser(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = keywordRegexp(keywords[options.ecmaVersion >= 6 ? 6 : 5]);
  var reserved = "";
  if (!options.allowReserved) {
    for (var v = options.ecmaVersion;; v--)
      { if (reserved = reservedWords[v]) { break } }
    if (options.sourceType == "module") { reserved += " await"; }
  }
  this.reservedWords = keywordRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = keywordRegexp(reservedStrict);
  this.reservedWordsStrictBind = keywordRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.
  this.containsEsc = false;

  // Load plugins
  this.loadPlugins(options.plugins);

  // Set up token state

  // The current position of the tokenizer in the input.
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }

  // Properties of the current token:
  // Its type
  this.type = types.eof;
  // For tokens that include more information than their type, the value
  this.value = null;
  // Its start and end offset
  this.start = this.end = this.pos;
  // And, if locations are used, the {line, column} object
  // corresponding to those offsets
  this.startLoc = this.endLoc = this.curPosition();

  // Position information for the previous token
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;

  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.
  this.context = this.initialContext();
  this.exprAllowed = true;

  // Figure out if it's a module code.
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);

  // Used to signify the start of a potential arrow function
  this.potentialArrowAt = -1;

  // Flags to track whether we are in a function, a generator, an async function.
  this.inFunction = this.inGenerator = this.inAsync = false;
  // Positions to delayed-check that yield/await does not exist in default parameters.
  this.yieldPos = this.awaitPos = 0;
  // Labels in scope.
  this.labels = [];

  // If enabled, skip leading hashbang line.
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
    { this.skipLineComment(2); }

  // Scope tracking for duplicate variable names (see scope.js)
  this.scopeStack = [];
  this.enterFunctionScope();
};

// DEPRECATED Kept for backwards compatibility until 3.0 in case a plugin uses them
Parser.prototype.isKeyword = function isKeyword (word) { return this.keywords.test(word) };
Parser.prototype.isReservedWord = function isReservedWord (word) { return this.reservedWords.test(word) };

Parser.prototype.extend = function extend (name, f) {
  this[name] = f(this[name]);
};

Parser.prototype.loadPlugins = function loadPlugins (pluginConfigs) {
    var this$1 = this;

  for (var name in pluginConfigs) {
    var plugin = plugins[name];
    if (!plugin) { throw new Error("Plugin '" + name + "' not found") }
    plugin(this$1, pluginConfigs[name]);
  }
};

Parser.prototype.parse = function parse () {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node)
};

var pp = Parser.prototype;

// ## Parser utilities

var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
pp.strictDirective = function(start) {
  var this$1 = this;

  for (;;) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this$1.input)[0].length;
    var match = literal.exec(this$1.input.slice(start));
    if (!match) { return false }
    if ((match[1] || match[2]) == "use strict") { return true }
    start += match[0].length;
  }
};

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true
  } else {
    return false
  }
};

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function(name) {
  return this.type === types.name && this.value === name
};

// Consumes contextual keyword if possible.

pp.eatContextual = function(name) {
  return this.value === name && this.eat(types.name)
};

// Asserts that following token is given contextual keyword.

pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) { this.unexpected(); }
};

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function() {
  return this.type === types.eof ||
    this.type === types.braceR ||
    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon)
      { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
    return true
  }
};

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
};

pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type == tokType) {
    if (this.options.onTrailingComma)
      { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
    if (!notNext)
      { this.next(); }
    return true
  }
};

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};

// Raise an unexpected token error.

pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};

function DestructuringErrors() {
  this.shorthandAssign =
  this.trailingComma =
  this.parenthesizedAssign =
  this.parenthesizedBind =
    -1;
}

pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) { return }
  if (refDestructuringErrors.trailingComma > -1)
    { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
};

pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  var pos = refDestructuringErrors ? refDestructuringErrors.shorthandAssign : -1;
  if (!andThrow) { return pos >= 0 }
  if (pos > -1) { this.raise(pos, "Shorthand property assignments are valid only in destructuring patterns"); }
};

pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
    { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
  if (this.awaitPos)
    { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
};

pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression")
    { return this.isSimpleAssignTarget(expr.expression) }
  return expr.type === "Identifier" || expr.type === "MemberExpression"
};

var pp$1 = Parser.prototype;

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp$1.parseTopLevel = function(node) {
  var this$1 = this;

  var exports = {};
  if (!node.body) { node.body = []; }
  while (this.type !== types.eof) {
    var stmt = this$1.parseStatement(true, true, exports);
    node.body.push(stmt);
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  if (this.options.ecmaVersion >= 6) {
    node.sourceType = this.options.sourceType;
  }
  return this.finishNode(node, "Program")
};

var loopLabel = {kind: "loop"};
var switchLabel = {kind: "switch"};

pp$1.isLet = function() {
  if (this.type !== types.name || this.options.ecmaVersion < 6 || this.value != "let") { return false }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91 || nextCh == 123) { return true } // '{' and '['
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
    var ident = this.input.slice(next, pos);
    if (!this.isKeyword(ident)) { return true }
  }
  return false
};

// check 'async [no LineTerminator here] function'
// - 'async /*foo*/ function' is OK.
// - 'async /*\n*/ function' is invalid.
pp$1.isAsyncFunction = function() {
  if (this.type !== types.name || this.options.ecmaVersion < 8 || this.value != "async")
    { return false }

  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) &&
    this.input.slice(next, next + 8) === "function" &&
    (next + 8 == this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
};

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp$1.parseStatement = function(declaration, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;

  if (this.isLet()) {
    starttype = types._var;
    kind = "let";
  }

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
  case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
  case types._debugger: return this.parseDebuggerStatement(node)
  case types._do: return this.parseDoStatement(node)
  case types._for: return this.parseForStatement(node)
  case types._function:
    if (!declaration && this.options.ecmaVersion >= 6) { this.unexpected(); }
    return this.parseFunctionStatement(node, false)
  case types._class:
    if (!declaration) { this.unexpected(); }
    return this.parseClass(node, true)
  case types._if: return this.parseIfStatement(node)
  case types._return: return this.parseReturnStatement(node)
  case types._switch: return this.parseSwitchStatement(node)
  case types._throw: return this.parseThrowStatement(node)
  case types._try: return this.parseTryStatement(node)
  case types._const: case types._var:
    kind = kind || this.value;
    if (!declaration && kind != "var") { this.unexpected(); }
    return this.parseVarStatement(node, kind)
  case types._while: return this.parseWhileStatement(node)
  case types._with: return this.parseWithStatement(node)
  case types.braceL: return this.parseBlock()
  case types.semi: return this.parseEmptyStatement(node)
  case types._export:
  case types._import:
    if (!this.options.allowImportExportEverywhere) {
      if (!topLevel)
        { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
      if (!this.inModule)
        { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
    }
    return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
  default:
    if (this.isAsyncFunction() && declaration) {
      this.next();
      return this.parseFunctionStatement(node, true)
    }

    var maybeName = this.value, expr = this.parseExpression();
    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
      { return this.parseLabeledStatement(node, maybeName, expr) }
    else { return this.parseExpressionStatement(node, expr) }
  }
};

pp$1.parseBreakContinueStatement = function(node, keyword) {
  var this$1 = this;

  var isBreak = keyword == "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
  else if (this.type !== types.name) { this.unexpected(); }
  else {
    node.label = this.parseIdent();
    this.semicolon();
  }

  // Verify that there is an actual destination to break or
  // continue to.
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this$1.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
      if (node.label && isBreak) { break }
    }
  }
  if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
};

pp$1.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement")
};

pp$1.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6)
    { this.eat(types.semi); }
  else
    { this.semicolon(); }
  return this.finishNode(node, "DoWhileStatement")
};

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp$1.parseForStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  this.enterLexicalScope();
  this.expect(types.parenL);
  if (this.type === types.semi) { return this.parseFor(node, null) }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1 &&
        !(kind !== "var" && init$1.declarations[0].init))
      { return this.parseForIn(node, init$1) }
    return this.parseFor(node, init$1)
  }
  var refDestructuringErrors = new DestructuringErrors;
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    this.toAssignable(init);
    this.checkLVal(init);
    this.checkPatternErrors(refDestructuringErrors, true);
    return this.parseForIn(node, init)
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  return this.parseFor(node, init)
};

pp$1.parseFunctionStatement = function(node, isAsync) {
  this.next();
  return this.parseFunction(node, true, false, isAsync)
};

pp$1.isFunction = function() {
  return this.type === types._function || this.isAsyncFunction()
};

pp$1.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  // allow function declarations in branches, but only in non-strict mode
  node.consequent = this.parseStatement(!this.strict && this.isFunction());
  node.alternate = this.eat(types._else) ? this.parseStatement(!this.strict && this.isFunction()) : null;
  return this.finishNode(node, "IfStatement")
};

pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
    { this.raise(this.start, "'return' outside of function"); }
  this.next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
  else { node.argument = this.parseExpression(); this.semicolon(); }
  return this.finishNode(node, "ReturnStatement")
};

pp$1.parseSwitchStatement = function(node) {
  var this$1 = this;

  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterLexicalScope();

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  var cur;
  for (var sawDefault = false; this.type != types.braceR;) {
    if (this$1.type === types._case || this$1.type === types._default) {
      var isCase = this$1.type === types._case;
      if (cur) { this$1.finishNode(cur, "SwitchCase"); }
      node.cases.push(cur = this$1.startNode());
      cur.consequent = [];
      this$1.next();
      if (isCase) {
        cur.test = this$1.parseExpression();
      } else {
        if (sawDefault) { this$1.raiseRecoverable(this$1.lastTokStart, "Multiple default clauses"); }
        sawDefault = true;
        cur.test = null;
      }
      this$1.expect(types.colon);
    } else {
      if (!cur) { this$1.unexpected(); }
      cur.consequent.push(this$1.parseStatement(true));
    }
  }
  this.exitLexicalScope();
  if (cur) { this.finishNode(cur, "SwitchCase"); }
  this.next(); // Closing brace
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement")
};

pp$1.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
    { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement")
};

// Reused empty array added for node fields that are always empty.

var empty = [];

pp$1.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    this.expect(types.parenL);
    clause.param = this.parseBindingAtom();
    this.enterLexicalScope();
    this.checkLVal(clause.param, "let");
    this.expect(types.parenR);
    clause.body = this.parseBlock(false);
    this.exitLexicalScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer)
    { this.raise(node.start, "Missing catch or finally clause"); }
  return this.finishNode(node, "TryStatement")
};

pp$1.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration")
};

pp$1.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, "WhileStatement")
};

pp$1.parseWithStatement = function(node) {
  if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement(false);
  return this.finishNode(node, "WithStatement")
};

pp$1.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement")
};

pp$1.parseLabeledStatement = function(node, maybeName, expr) {
  var this$1 = this;

  for (var i$1 = 0, list = this$1.labels; i$1 < list.length; i$1 += 1)
    {
    var label = list[i$1];

    if (label.name === maybeName)
      { this$1.raise(expr.start, "Label '" + maybeName + "' is already declared");
  } }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this$1.labels[i];
    if (label$1.statementStart == node.start) {
      label$1.statementStart = this$1.start;
      label$1.kind = kind;
    } else { break }
  }
  this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
  node.body = this.parseStatement(true);
  if (node.body.type == "ClassDeclaration" ||
      node.body.type == "VariableDeclaration" && node.body.kind != "var" ||
      node.body.type == "FunctionDeclaration" && (this.strict || node.body.generator))
    { this.raiseRecoverable(node.body.start, "Invalid labeled declaration"); }
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement")
};

pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement")
};

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp$1.parseBlock = function(createNewLexicalScope) {
  var this$1 = this;
  if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;

  var node = this.startNode();
  node.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) {
    this.enterLexicalScope();
  }
  while (!this.eat(types.braceR)) {
    var stmt = this$1.parseStatement(true);
    node.body.push(stmt);
  }
  if (createNewLexicalScope) {
    this.exitLexicalScope();
  }
  return this.finishNode(node, "BlockStatement")
};

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp$1.parseFor = function(node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  this.exitLexicalScope();
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, "ForStatement")
};

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp$1.parseForIn = function(node, init) {
  var type = this.type === types._in ? "ForInStatement" : "ForOfStatement";
  this.next();
  node.left = init;
  node.right = this.parseExpression();
  this.expect(types.parenR);
  this.exitLexicalScope();
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, type)
};

// Parse a list of variable declarations.

pp$1.parseVar = function(node, isFor, kind) {
  var this$1 = this;

  node.declarations = [];
  node.kind = kind;
  for (;;) {
    var decl = this$1.startNode();
    this$1.parseVarId(decl, kind);
    if (this$1.eat(types.eq)) {
      decl.init = this$1.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this$1.type === types._in || (this$1.options.ecmaVersion >= 6 && this$1.isContextual("of")))) {
      this$1.unexpected();
    } else if (decl.id.type != "Identifier" && !(isFor && (this$1.type === types._in || this$1.isContextual("of")))) {
      this$1.raise(this$1.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this$1.finishNode(decl, "VariableDeclarator"));
    if (!this$1.eat(types.comma)) { break }
  }
  return node
};

pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom(kind);
  this.checkLVal(decl.id, kind, false);
};

// Parse a function declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseFunction = function(node, isStatement, allowExpressionBody, isAsync) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6 && !isAsync)
    { node.generator = this.eat(types.star); }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  if (isStatement) {
    node.id = isStatement === "nullableID" && this.type != types.name ? null : this.parseIdent();
    if (node.id) {
      this.checkLVal(node.id, "var");
    }
  }

  var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;
  this.inGenerator = node.generator;
  this.inAsync = node.async;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.inFunction = true;
  this.enterFunctionScope();

  if (!isStatement)
    { node.id = this.type == types.name ? this.parseIdent() : null; }

  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody);

  this.inGenerator = oldInGen;
  this.inAsync = oldInAsync;
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.inFunction = oldInFunc;
  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression")
};

pp$1.parseFunctionParams = function(node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseClass = function(node, isStatement) {
  var this$1 = this;

  this.next();

  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (this$1.eat(types.semi)) { continue }
    var method = this$1.startNode();
    var isGenerator = this$1.eat(types.star);
    var isAsync = false;
    var isMaybeStatic = this$1.type === types.name && this$1.value === "static";
    this$1.parsePropertyName(method);
    method.static = isMaybeStatic && this$1.type !== types.parenL;
    if (method.static) {
      if (isGenerator) { this$1.unexpected(); }
      isGenerator = this$1.eat(types.star);
      this$1.parsePropertyName(method);
    }
    if (this$1.options.ecmaVersion >= 8 && !isGenerator && !method.computed &&
        method.key.type === "Identifier" && method.key.name === "async" && this$1.type !== types.parenL &&
        !this$1.canInsertSemicolon()) {
      isAsync = true;
      this$1.parsePropertyName(method);
    }
    method.kind = "method";
    var isGetSet = false;
    if (!method.computed) {
      var key = method.key;
      if (!isGenerator && !isAsync && key.type === "Identifier" && this$1.type !== types.parenL && (key.name === "get" || key.name === "set")) {
        isGetSet = true;
        method.kind = key.name;
        key = this$1.parsePropertyName(method);
      }
      if (!method.static && (key.type === "Identifier" && key.name === "constructor" ||
          key.type === "Literal" && key.value === "constructor")) {
        if (hadConstructor) { this$1.raise(key.start, "Duplicate constructor in the same class"); }
        if (isGetSet) { this$1.raise(key.start, "Constructor can't have get/set modifier"); }
        if (isGenerator) { this$1.raise(key.start, "Constructor can't be a generator"); }
        if (isAsync) { this$1.raise(key.start, "Constructor can't be an async method"); }
        method.kind = "constructor";
        hadConstructor = true;
      }
    }
    this$1.parseClassMethod(classBody, method, isGenerator, isAsync);
    if (isGetSet) {
      var paramCount = method.kind === "get" ? 0 : 1;
      if (method.value.params.length !== paramCount) {
        var start = method.value.start;
        if (method.kind === "get")
          { this$1.raiseRecoverable(start, "getter should have no params"); }
        else
          { this$1.raiseRecoverable(start, "setter should have exactly one param"); }
      } else {
        if (method.kind === "set" && method.value.params[0].type === "RestElement")
          { this$1.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
      }
    }
  }
  node.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
};

pp$1.parseClassMethod = function(classBody, method, isGenerator, isAsync) {
  method.value = this.parseMethod(isGenerator, isAsync);
  classBody.body.push(this.finishNode(method, "MethodDefinition"));
};

pp$1.parseClassId = function(node, isStatement) {
  node.id = this.type === types.name ? this.parseIdent() : isStatement === true ? this.unexpected() : null;
};

pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};

// Parses module export declaration.

pp$1.parseExport = function(node, exports) {
  var this$1 = this;

  this.next();
  // export * from '...'
  if (this.eat(types.star)) {
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration")
  }
  if (this.eat(types._default)) { // export default ...
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) { this.next(); }
      node.declaration = this.parseFunction(fNode, "nullableID", false, isAsync);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration")
  }
  // export var|const|let|function|class ...
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(true);
    if (node.declaration.type === "VariableDeclaration")
      { this.checkVariableExport(exports, node.declaration.declarations); }
    else
      { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
    node.specifiers = [];
    node.source = null;
  } else { // export { x, y as z } [from '...']
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
    } else {
      // check for keywords used as local names
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];

        this$1.checkUnreserved(spec.local);
      }

      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration")
};

pp$1.checkExport = function(exports, name, pos) {
  if (!exports) { return }
  if (has(exports, name))
    { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
  exports[name] = true;
};

pp$1.checkPatternExport = function(exports, pat) {
  var this$1 = this;

  var type = pat.type;
  if (type == "Identifier")
    { this.checkExport(exports, pat.name, pat.start); }
  else if (type == "ObjectPattern")
    { for (var i = 0, list = pat.properties; i < list.length; i += 1)
      {
        var prop = list[i];

        this$1.checkPatternExport(exports, prop.value);
      } }
  else if (type == "ArrayPattern")
    { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];

        if (elt) { this$1.checkPatternExport(exports, elt); }
    } }
  else if (type == "AssignmentPattern")
    { this.checkPatternExport(exports, pat.left); }
  else if (type == "ParenthesizedExpression")
    { this.checkPatternExport(exports, pat.expression); }
};

pp$1.checkVariableExport = function(exports, decls) {
  var this$1 = this;

  if (!exports) { return }
  for (var i = 0, list = decls; i < list.length; i += 1)
    {
    var decl = list[i];

    this$1.checkPatternExport(exports, decl.id);
  }
};

pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
};

// Parses a comma-separated list of module exports.

pp$1.parseExportSpecifiers = function(exports) {
  var this$1 = this;

  var nodes = [], first = true;
  // export { x, y as z } [from '...']
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node = this$1.startNode();
    node.local = this$1.parseIdent(true);
    node.exported = this$1.eatContextual("as") ? this$1.parseIdent(true) : node.local;
    this$1.checkExport(exports, node.exported.name, node.exported.start);
    nodes.push(this$1.finishNode(node, "ExportSpecifier"));
  }
  return nodes
};

// Parses import declaration.

pp$1.parseImport = function(node) {
  this.next();
  // import '...'
  if (this.type === types.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration")
};

// Parses a comma-separated list of module imports.

pp$1.parseImportSpecifiers = function() {
  var this$1 = this;

  var nodes = [], first = true;
  if (this.type === types.name) {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLVal(node.local, "let");
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) { return nodes }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLVal(node$1.local, "let");
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node$2 = this$1.startNode();
    node$2.imported = this$1.parseIdent(true);
    if (this$1.eatContextual("as")) {
      node$2.local = this$1.parseIdent();
    } else {
      this$1.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this$1.checkLVal(node$2.local, "let");
    nodes.push(this$1.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes
};

// Set `ExpressionStatement#directive` property for directive prologues.
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "Literal" &&
    typeof statement.expression.value === "string" &&
    // Reject parenthesized strings.
    (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
  )
};

var pp$2 = Parser.prototype;

// Convert existing expression atom to assignable pattern
// if possible.

pp$2.toAssignable = function(node, isBinding) {
  var this$1 = this;

  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
    case "Identifier":
      if (this.inAsync && node.name === "await")
        { this.raise(node.start, "Can not use 'await' as identifier inside an async function"); }
      break

    case "ObjectPattern":
    case "ArrayPattern":
      break

    case "ObjectExpression":
      node.type = "ObjectPattern";
      for (var i = 0, list = node.properties; i < list.length; i += 1) {
        var prop = list[i];

      if (prop.kind !== "init") { this$1.raise(prop.key.start, "Object pattern can't contain getter or setter"); }
        this$1.toAssignable(prop.value, isBinding);
      }
      break

    case "ArrayExpression":
      node.type = "ArrayPattern";
      this.toAssignableList(node.elements, isBinding);
      break

    case "AssignmentExpression":
      if (node.operator === "=") {
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        // falls through to AssignmentPattern
      } else {
        this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        break
      }

    case "AssignmentPattern":
      break

    case "ParenthesizedExpression":
      this.toAssignable(node.expression, isBinding);
      break

    case "MemberExpression":
      if (!isBinding) { break }

    default:
      this.raise(node.start, "Assigning to rvalue");
    }
  }
  return node
};

// Convert list of expression atoms to binding list.

pp$2.toAssignableList = function(exprList, isBinding) {
  var this$1 = this;

  var end = exprList.length;
  if (end) {
    var last = exprList[end - 1];
    if (last && last.type == "RestElement") {
      --end;
    } else if (last && last.type == "SpreadElement") {
      last.type = "RestElement";
      var arg = last.argument;
      this.toAssignable(arg, isBinding);
      --end;
    }

    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
      { this.unexpected(last.argument.start); }
  }
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) { this$1.toAssignable(elt, isBinding); }
  }
  return exprList
};

// Parses spread element.

pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement")
};

pp$2.parseRestBinding = function() {
  var node = this.startNode();
  this.next();

  // RestElement inside of a function parameter must be an identifier
  if (this.options.ecmaVersion === 6 && this.type !== types.name)
    { this.unexpected(); }

  node.argument = this.parseBindingAtom();

  return this.finishNode(node, "RestElement")
};

// Parses lvalue (assignable) atom.

pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
    case types.bracketL:
      var node = this.startNode();
      this.next();
      node.elements = this.parseBindingList(types.bracketR, true, true);
      return this.finishNode(node, "ArrayPattern")

    case types.braceL:
      return this.parseObj(true)
    }
  }
  return this.parseIdent()
};

pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var this$1 = this;

  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) { first = false; }
    else { this$1.expect(types.comma); }
    if (allowEmpty && this$1.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this$1.afterTrailingComma(close)) {
      break
    } else if (this$1.type === types.ellipsis) {
      var rest = this$1.parseRestBinding();
      this$1.parseBindingListItem(rest);
      elts.push(rest);
      if (this$1.type === types.comma) { this$1.raise(this$1.start, "Comma is not permitted after the rest element"); }
      this$1.expect(close);
      break
    } else {
      var elem = this$1.parseMaybeDefault(this$1.start, this$1.startLoc);
      this$1.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts
};

pp$2.parseBindingListItem = function(param) {
  return param
};

// Parses assignment pattern around given atom if possible.

pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern")
};

// Verify that a node is an lval — something that can be assigned
// to.
// bindingType can be either:
// 'var' indicating that the lval creates a 'var' binding
// 'let' indicating that the lval creates a lexical ('let' or 'const') binding
// 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

pp$2.checkLVal = function(expr, bindingType, checkClashes) {
  var this$1 = this;

  switch (expr.type) {
  case "Identifier":
    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
      { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
    if (checkClashes) {
      if (has(checkClashes, expr.name))
        { this.raiseRecoverable(expr.start, "Argument name clash"); }
      checkClashes[expr.name] = true;
    }
    if (bindingType && bindingType !== "none") {
      if (
        bindingType === "var" && !this.canDeclareVarName(expr.name) ||
        bindingType !== "var" && !this.canDeclareLexicalName(expr.name)
      ) {
        this.raiseRecoverable(expr.start, ("Identifier '" + (expr.name) + "' has already been declared"));
      }
      if (bindingType === "var") {
        this.declareVarName(expr.name);
      } else {
        this.declareLexicalName(expr.name);
      }
    }
    break

  case "MemberExpression":
    if (bindingType) { this.raiseRecoverable(expr.start, (bindingType ? "Binding" : "Assigning to") + " member expression"); }
    break

  case "ObjectPattern":
    for (var i = 0, list = expr.properties; i < list.length; i += 1)
      {
    var prop = list[i];

    this$1.checkLVal(prop.value, bindingType, checkClashes);
  }
    break

  case "ArrayPattern":
    for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
      var elem = list$1[i$1];

    if (elem) { this$1.checkLVal(elem, bindingType, checkClashes); }
    }
    break

  case "AssignmentPattern":
    this.checkLVal(expr.left, bindingType, checkClashes);
    break

  case "RestElement":
    this.checkLVal(expr.argument, bindingType, checkClashes);
    break

  case "ParenthesizedExpression":
    this.checkLVal(expr.expression, bindingType, checkClashes);
    break

  default:
    this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
  }
};

// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

var pp$3 = Parser.prototype;

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp$3.checkPropClash = function(prop, propHash) {
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
    { return }
  var key = prop.key;
  var name;
  switch (key.type) {
  case "Identifier": name = key.name; break
  case "Literal": name = String(key.value); break
  default: return
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
      propHash.proto = true;
    }
    return
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition)
      { this.raiseRecoverable(key.start, "Redefinition of property"); }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) { node.expressions.push(this$1.parseMaybeAssign(noIn, refDestructuringErrors)); }
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
};

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.inGenerator && this.isContextual("yield")) { return this.parseYield() }

  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors;
    ownDestructuringErrors = true;
  }

  var startPos = this.start, startLoc = this.startLoc;
  if (this.type == types.parenL || this.type == types.name)
    { this.potentialArrowAt = this.start; }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
  if (this.type.isAssign) {
    this.checkPatternErrors(refDestructuringErrors, true);
    if (!ownDestructuringErrors) { DestructuringErrors.call(refDestructuringErrors); }
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.left = this.type === types.eq ? this.toAssignable(left) : left;
    refDestructuringErrors.shorthandAssign = -1; // reset because shorthand default was used correctly
    this.checkLVal(left);
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression")
  } else {
    if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
  }
  if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
  if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
  return left
};

// Parse a ternary conditional (`?:`) operator.

pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
};

// Start the precedence parser.

pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  return expr.start == startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
};

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical);
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
    }
  }
  return left
};

pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
};

// Parse unary operators, both prefix and postfix.

pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.inAsync && this.isContextual("await")) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) { this.checkLVal(node.argument); }
    else if (this.strict && node.operator === "delete" &&
             node.argument.type === "Identifier")
      { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
    else { sawUnary = true; }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this$1.startNodeAt(startPos, startLoc);
      node$1.operator = this$1.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this$1.checkLVal(expr);
      this$1.next();
      expr = this$1.finishNode(node$1, "UpdateExpression");
    }
  }

  if (!sawUnary && this.eat(types.starstar))
    { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
  else
    { return expr }
};

// Parse call, dot, and `[]`-subscript expressions.

pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  var skipArrowSubscripts = expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")";
  if (this.checkExpressionErrors(refDestructuringErrors) || skipArrowSubscripts) { return expr }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
    if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
  }
  return result
};

pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var this$1 = this;

  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
      this.lastTokEnd == base.end && !this.canInsertSemicolon();
  for (var computed = (void 0);;) {
    if ((computed = this$1.eat(types.bracketL)) || this$1.eat(types.dot)) {
      var node = this$1.startNodeAt(startPos, startLoc);
      node.object = base;
      node.property = computed ? this$1.parseExpression() : this$1.parseIdent(true);
      node.computed = !!computed;
      if (computed) { this$1.expect(types.bracketR); }
      base = this$1.finishNode(node, "MemberExpression");
    } else if (!noCalls && this$1.eat(types.parenL)) {
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this$1.yieldPos, oldAwaitPos = this$1.awaitPos;
      this$1.yieldPos = 0;
      this$1.awaitPos = 0;
      var exprList = this$1.parseExprList(types.parenR, this$1.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !this$1.canInsertSemicolon() && this$1.eat(types.arrow)) {
        this$1.checkPatternErrors(refDestructuringErrors, false);
        this$1.checkYieldAwaitInDefaultParams();
        this$1.yieldPos = oldYieldPos;
        this$1.awaitPos = oldAwaitPos;
        return this$1.parseArrowExpression(this$1.startNodeAt(startPos, startLoc), exprList, true)
      }
      this$1.checkExpressionErrors(refDestructuringErrors, true);
      this$1.yieldPos = oldYieldPos || this$1.yieldPos;
      this$1.awaitPos = oldAwaitPos || this$1.awaitPos;
      var node$1 = this$1.startNodeAt(startPos, startLoc);
      node$1.callee = base;
      node$1.arguments = exprList;
      base = this$1.finishNode(node$1, "CallExpression");
    } else if (this$1.type === types.backQuote) {
      var node$2 = this$1.startNodeAt(startPos, startLoc);
      node$2.tag = base;
      node$2.quasi = this$1.parseTemplate({isTagged: true});
      base = this$1.finishNode(node$2, "TaggedTemplateExpression");
    } else {
      return base
    }
  }
};

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp$3.parseExprAtom = function(refDestructuringErrors) {
  var node, canBeArrow = this.potentialArrowAt == this.start;
  switch (this.type) {
  case types._super:
    if (!this.inFunction)
      { this.raise(this.start, "'super' outside of function or class"); }
    node = this.startNode();
    this.next();
    // The `super` keyword can appear at below:
    // SuperProperty:
    //     super [ Expression ]
    //     super . IdentifierName
    // SuperCall:
    //     super Arguments
    if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
      { this.unexpected(); }
    return this.finishNode(node, "Super")

  case types._this:
    node = this.startNode();
    this.next();
    return this.finishNode(node, "ThisExpression")

  case types.name:
    var startPos = this.start, startLoc = this.startLoc;
    var id = this.parseIdent(this.type !== types.name);
    if (this.options.ecmaVersion >= 8 && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
      { return this.parseFunction(this.startNodeAt(startPos, startLoc), false, false, true) }
    if (canBeArrow && !this.canInsertSemicolon()) {
      if (this.eat(types.arrow))
        { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name) {
        id = this.parseIdent();
        if (this.canInsertSemicolon() || !this.eat(types.arrow))
          { this.unexpected(); }
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
      }
    }
    return id

  case types.regexp:
    var value = this.value;
    node = this.parseLiteral(value.value);
    node.regex = {pattern: value.pattern, flags: value.flags};
    return node

  case types.num: case types.string:
    return this.parseLiteral(this.value)

  case types._null: case types._true: case types._false:
    node = this.startNode();
    node.value = this.type === types._null ? null : this.type === types._true;
    node.raw = this.type.keyword;
    this.next();
    return this.finishNode(node, "Literal")

  case types.parenL:
    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
    if (refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
        { refDestructuringErrors.parenthesizedAssign = start; }
      if (refDestructuringErrors.parenthesizedBind < 0)
        { refDestructuringErrors.parenthesizedBind = start; }
    }
    return expr

  case types.bracketL:
    node = this.startNode();
    this.next();
    node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
    return this.finishNode(node, "ArrayExpression")

  case types.braceL:
    return this.parseObj(false, refDestructuringErrors)

  case types._function:
    node = this.startNode();
    this.next();
    return this.parseFunction(node, false)

  case types._class:
    return this.parseClass(this.startNode(), false)

  case types._new:
    return this.parseNew()

  case types.backQuote:
    return this.parseTemplate()

  default:
    this.unexpected();
  }
};

pp$3.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  this.next();
  return this.finishNode(node, "Literal")
};

pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val
};

pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();

    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart, innerParenStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types.parenR) {
      first ? first = false : this$1.expect(types.comma);
      if (allowTrailingComma && this$1.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break
      } else if (this$1.type === types.ellipsis) {
        spreadStart = this$1.start;
        exprList.push(this$1.parseParenItem(this$1.parseRestBinding()));
        if (this$1.type === types.comma) { this$1.raise(this$1.start, "Comma is not permitted after the rest element"); }
        break
      } else {
        if (this$1.type === types.parenL && !innerParenStart) {
          innerParenStart = this$1.start;
        }
        exprList.push(this$1.parseMaybeAssign(false, refDestructuringErrors, this$1.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);

    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (innerParenStart) { this.unexpected(innerParenStart); }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList)
    }

    if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
    if (spreadStart) { this.unexpected(spreadStart); }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }

  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression")
  } else {
    return val
  }
};

pp$3.parseParenItem = function(item) {
  return item
};

pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
};

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.

var empty$1 = [];

pp$3.parseNew = function() {
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node.meta = meta;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target")
      { this.raiseRecoverable(node.property.start, "The only valid meta property for new is new.target"); }
    if (!this.inFunction)
      { this.raiseRecoverable(node.start, "new.target can only be used in functions"); }
    return this.finishNode(node, "MetaProperty")
  }
  var startPos = this.start, startLoc = this.startLoc;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
  else { node.arguments = empty$1; }
  return this.finishNode(node, "NewExpression")
};

// Parse template expression.

pp$3.parseTemplateElement = function(ref) {
  var isTagged = ref.isTagged;

  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement")
};

pp$3.parseTemplate = function(ref) {
  var this$1 = this;
  if ( ref === void 0 ) ref = {};
  var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({isTagged: isTagged});
  node.quasis = [curElt];
  while (!curElt.tail) {
    this$1.expect(types.dollarBraceL);
    node.expressions.push(this$1.parseExpression());
    this$1.expect(types.braceR);
    node.quasis.push(curElt = this$1.parseTemplateElement({isTagged: isTagged}));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral")
};

pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
    (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword) &&
    !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

// Parse an object literal or binding pattern.

pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var this$1 = this;

  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var prop = this$1.parseProperty(isPattern, refDestructuringErrors);
    this$1.checkPropClash(prop, propHash);
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
};

pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern)
      { isGenerator = this.eat(types.star); }
  }
  this.parsePropertyName(prop);
  if (!isPattern && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors);
  return this.finishNode(prop, "Property")
};

pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors) {
  if ((isGenerator || isAsync) && this.type === types.colon)
    { this.unexpected(); }

  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) { this.unexpected(); }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern &&
             this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
             (prop.key.name === "get" || prop.key.name === "set") &&
             (this.type != types.comma && this.type != types.braceR)) {
    if (isGenerator || isAsync) { this.unexpected(); }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get")
        { this.raiseRecoverable(start, "getter should have no params"); }
      else
        { this.raiseRecoverable(start, "setter should have exactly one param"); }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    this.checkUnreserved(prop.key);
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0)
        { refDestructuringErrors.shorthandAssign = this.start; }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else { this.unexpected(); }
};

pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(true)
};

// Initialize empty function node.

pp$3.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = false;
    node.expression = false;
  }
  if (this.options.ecmaVersion >= 8)
    { node.async = false; }
};

// Parse object or class method.

pp$3.parseMethod = function(isGenerator, isAsync) {
  var node = this.startNode(), oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;

  this.initFunction(node);
  if (this.options.ecmaVersion >= 6)
    { node.generator = isGenerator; }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  this.inGenerator = node.generator;
  this.inAsync = node.async;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.inFunction = true;
  this.enterFunctionScope();

  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false);

  this.inGenerator = oldInGen;
  this.inAsync = oldInAsync;
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.inFunction = oldInFunc;
  return this.finishNode(node, "FunctionExpression")
};

// Parse arrow function expression with given parameters.

pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction;

  this.enterFunctionScope();
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  this.inGenerator = false;
  this.inAsync = node.async;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.inFunction = true;

  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true);

  this.inGenerator = oldInGen;
  this.inAsync = oldInAsync;
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.inFunction = oldInFunc;
  return this.finishNode(node, "ArrowFunctionExpression")
};

// Parse function body and check parameters.

pp$3.parseFunctionBody = function(node, isArrowFunction) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;

  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      // If this is a strict mode function, verify that argument names
      // are not repeated, and it does not try to bind the words `eval`
      // or `arguments`.
      if (useStrict && nonSimple)
        { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
    }
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) { this.strict = true; }

    // Add the params to varDeclaredNames to ensure that an error is thrown
    // if a let/const declaration in the function clashes with one of the params.
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && this.isSimpleParamList(node.params));
    node.body = this.parseBlock(false);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitFunctionScope();

  if (this.strict && node.id) {
    // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
    this.checkLVal(node.id, "none");
  }
  this.strict = oldStrict;
};

pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1)
    {
    var param = list[i];

    if (param.type !== "Identifier") { return false
  } }
  return true
};

// Checks function params for various disallowed patterns such as using "eval"
// or "arguments" and duplicate parameters.

pp$3.checkParams = function(node, allowDuplicates) {
  var this$1 = this;

  var nameHash = {};
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    this$1.checkLVal(param, "var", allowDuplicates ? null : nameHash);
  }
};

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var this$1 = this;

  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this$1.expect(types.comma);
      if (allowTrailingComma && this$1.afterTrailingComma(close)) { break }
    } else { first = false; }

    var elt = (void 0);
    if (allowEmpty && this$1.type === types.comma)
      { elt = null; }
    else if (this$1.type === types.ellipsis) {
      elt = this$1.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this$1.type === types.comma && refDestructuringErrors.trailingComma < 0)
        { refDestructuringErrors.trailingComma = this$1.start; }
    } else {
      elt = this$1.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts
};

pp$3.checkUnreserved = function(ref) {
  var start = ref.start;
  var end = ref.end;
  var name = ref.name;

  if (this.inGenerator && name === "yield")
    { this.raiseRecoverable(start, "Can not use 'yield' as identifier inside a generator"); }
  if (this.inAsync && name === "await")
    { this.raiseRecoverable(start, "Can not use 'await' as identifier inside an async function"); }
  if (this.isKeyword(name))
    { this.raise(start, ("Unexpected keyword '" + name + "'")); }
  if (this.options.ecmaVersion < 6 &&
    this.input.slice(start, end).indexOf("\\") != -1) { return }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name))
    { this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved")); }
};

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp$3.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (liberal && this.options.allowReserved == "never") { liberal = false; }
  if (this.type === types.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;

    // To fix https://github.com/ternjs/acorn/issues/575
    // `class` and `function` keywords push new context into this.context.
    // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
    // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
    if ((node.name === "class" || node.name === "function") &&
        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "Identifier");
  if (!liberal) { this.checkUnreserved(node); }
  return node
};

// Parses yield expression inside generator.

pp$3.parseYield = function() {
  if (!this.yieldPos) { this.yieldPos = this.start; }

  var node = this.startNode();
  this.next();
  if (this.type == types.semi || this.canInsertSemicolon() || (this.type != types.star && !this.type.startsExpr)) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign();
  }
  return this.finishNode(node, "YieldExpression")
};

pp$3.parseAwait = function() {
  if (!this.awaitPos) { this.awaitPos = this.start; }

  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true);
  return this.finishNode(node, "AwaitExpression")
};

var pp$4 = Parser.prototype;

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
  throw err
};

pp$4.raiseRecoverable = pp$4.raise;

pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart)
  }
};

var pp$5 = Parser.prototype;

// Object.assign polyfill
var assign = Object.assign || function(target) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  for (var i = 0, list = sources; i < list.length; i += 1) {
    var source = list[i];

    for (var key in source) {
      if (has(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target
};

// The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

pp$5.enterFunctionScope = function() {
  // var: a hash of var-declared names in the current lexical scope
  // lexical: a hash of lexically-declared names in the current lexical scope
  // childVar: a hash of var-declared names in all child lexical scopes of the current lexical scope (within the current function scope)
  // parentLexical: a hash of lexically-declared names in all parent lexical scopes of the current lexical scope (within the current function scope)
  this.scopeStack.push({var: {}, lexical: {}, childVar: {}, parentLexical: {}});
};

pp$5.exitFunctionScope = function() {
  this.scopeStack.pop();
};

pp$5.enterLexicalScope = function() {
  var parentScope = this.scopeStack[this.scopeStack.length - 1];
  var childScope = {var: {}, lexical: {}, childVar: {}, parentLexical: {}};

  this.scopeStack.push(childScope);
  assign(childScope.parentLexical, parentScope.lexical, parentScope.parentLexical);
};

pp$5.exitLexicalScope = function() {
  var childScope = this.scopeStack.pop();
  var parentScope = this.scopeStack[this.scopeStack.length - 1];

  assign(parentScope.childVar, childScope.var, childScope.childVar);
};

/**
 * A name can be declared with `var` if there are no variables with the same name declared with `let`/`const`
 * in the current lexical scope or any of the parent lexical scopes in this function.
 */
pp$5.canDeclareVarName = function(name) {
  var currentScope = this.scopeStack[this.scopeStack.length - 1];

  return !has(currentScope.lexical, name) && !has(currentScope.parentLexical, name)
};

/**
 * A name can be declared with `let`/`const` if there are no variables with the same name declared with `let`/`const`
 * in the current scope, and there are no variables with the same name declared with `var` in the current scope or in
 * any child lexical scopes in this function.
 */
pp$5.canDeclareLexicalName = function(name) {
  var currentScope = this.scopeStack[this.scopeStack.length - 1];

  return !has(currentScope.lexical, name) && !has(currentScope.var, name) && !has(currentScope.childVar, name)
};

pp$5.declareVarName = function(name) {
  this.scopeStack[this.scopeStack.length - 1].var[name] = true;
};

pp$5.declareLexicalName = function(name) {
  this.scopeStack[this.scopeStack.length - 1].lexical[name] = true;
};

var Node = function Node(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations)
    { this.loc = new SourceLocation(parser, loc); }
  if (parser.options.directSourceFile)
    { this.sourceFile = parser.options.directSourceFile; }
  if (parser.options.ranges)
    { this.range = [pos, 0]; }
};

// Start an AST node, attaching a start offset.

var pp$6 = Parser.prototype;

pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc)
};

pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc)
};

// Finish an AST node, adding `type` and `end` properties.

function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations)
    { node.loc.end = loc; }
  if (this.options.ranges)
    { node.range[1] = pos; }
  return node
}

pp$6.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
};

// Finish node at given position

pp$6.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc)
};

// The algorithm used to determine whether a regexp can appear at a
// given point in the program is loosely based on sweet.js' approach.
// See https://github.com/mozilla/sweet.js/wiki/design

var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};

var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};

var pp$7 = Parser.prototype;

pp$7.initialContext = function() {
  return [types$1.b_stat]
};

pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat)
    { return true }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
    { return !parent.isExpr }

  // The check for `tt.name && exprAllowed` detects whether we are
  // after a `yield` or `of` construct. See the `updateContext` for
  // `tt.name`.
  if (prevType === types._return || prevType == types.name && this.exprAllowed)
    { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType == types.arrow)
    { return true }
  if (prevType == types.braceL)
    { return parent === types$1.b_stat }
  if (prevType == types._var || prevType == types.name)
    { return false }
  return !this.exprAllowed
};

pp$7.inGeneratorContext = function() {
  var this$1 = this;

  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this$1.context[i];
    if (context.token === "function")
      { return context.generator }
  }
  return false
};

pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType == types.dot)
    { this.exprAllowed = false; }
  else if (update = type.updateContext)
    { update.call(this, prevType); }
  else
    { this.exprAllowed = type.beforeExpr; }
};

// Token-specific context update code

types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length == 1) {
    this.exprAllowed = true;
    return
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};

types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};

types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};

types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};

types.incDec.updateContext = function() {
  // tokExprAllowed stays unchanged
};

types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
      !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
    { this.context.push(types$1.f_expr); }
  else
    { this.context.push(types$1.f_stat); }
  this.exprAllowed = false;
};

types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl)
    { this.context.pop(); }
  else
    { this.context.push(types$1.q_tmpl); }
  this.exprAllowed = false;
};

types.star.updateContext = function(prevType) {
  if (prevType == types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr)
      { this.context[index] = types$1.f_expr_gen; }
    else
      { this.context[index] = types$1.f_gen; }
  }
  this.exprAllowed = true;
};

types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6) {
    if (this.value == "of" && !this.exprAllowed ||
        this.value == "yield" && this.inGeneratorContext())
      { allowed = true; }
  }
  this.exprAllowed = allowed;
};

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations)
    { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
  if (p.options.ranges)
    { this.range = [p.start, p.end]; }
};

// ## Tokenizer

var pp$8 = Parser.prototype;

// Are we running under Rhino?
var isRhino = typeof Packages == "object" && Object.prototype.toString.call(Packages) == "[object JavaPackage]";

// Move to the next token

pp$8.next = function() {
  if (this.options.onToken)
    { this.options.onToken(new Token(this)); }

  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};

pp$8.getToken = function() {
  this.next();
  return new Token(this)
};

// If we're in an ES6 environment, make parsers iterable
if (typeof Symbol !== "undefined")
  { pp$8[Symbol.iterator] = function() {
    var this$1 = this;

    return {
      next: function () {
        var token = this$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        }
      }
    }
  }; }

// Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).

pp$8.curContext = function() {
  return this.context[this.context.length - 1]
};

// Read a single token, updating the parser object's token-related
// properties.

pp$8.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

  this.start = this.pos;
  if (this.options.locations) { this.startLoc = this.curPosition(); }
  if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

  if (curContext.override) { return curContext.override(this) }
  else { this.readToken(this.fullCharCodeAtPos()); }
};

pp$8.readToken = function(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
    { return this.readWord() }

  return this.getTokenFromCode(code)
};

pp$8.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 0xd7ff || code >= 0xe000) { return code }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 0x35fdc00
};

pp$8.skipBlockComment = function() {
  var this$1 = this;

  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this$1.curLine;
      this$1.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment)
    { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                           startLoc, this.curPosition()); }
};

pp$8.skipLineComment = function(startSkip) {
  var this$1 = this;

  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this$1.input.charCodeAt(++this$1.pos);
  }
  if (this.options.onComment)
    { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                           startLoc, this.curPosition()); }
};

// Called at the start of the parse and after every token. Skips
// whitespace and comments, and.

pp$8.skipSpace = function() {
  var this$1 = this;

  loop: while (this.pos < this.input.length) {
    var ch = this$1.input.charCodeAt(this$1.pos);
    switch (ch) {
    case 32: case 160: // ' '
      ++this$1.pos;
      break
    case 13:
      if (this$1.input.charCodeAt(this$1.pos + 1) === 10) {
        ++this$1.pos;
      }
    case 10: case 8232: case 8233:
      ++this$1.pos;
      if (this$1.options.locations) {
        ++this$1.curLine;
        this$1.lineStart = this$1.pos;
      }
      break
    case 47: // '/'
      switch (this$1.input.charCodeAt(this$1.pos + 1)) {
      case 42: // '*'
        this$1.skipBlockComment();
        break
      case 47:
        this$1.skipLineComment(2);
        break
      default:
        break loop
      }
      break
    default:
      if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
        ++this$1.pos;
      } else {
        break loop
      }
    }
  }
};

// Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.

pp$8.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) { this.endLoc = this.curPosition(); }
  var prevType = this.type;
  this.type = type;
  this.value = val;

  this.updateContext(prevType);
};

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp$8.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) { return this.readNumber(true) }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
    this.pos += 3;
    return this.finishToken(types.ellipsis)
  } else {
    ++this.pos;
    return this.finishToken(types.dot)
  }
};

pp$8.readToken_slash = function() { // '/'
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.slash, 1)
};

pp$8.readToken_mult_modulo_exp = function(code) { // '%*'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types.star : types.modulo;

  // exponentiation operator ** and **=
  if (this.options.ecmaVersion >= 7 && code == 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }

  if (next === 61) { return this.finishOp(types.assign, size + 1) }
  return this.finishOp(tokentype, size)
};

pp$8.readToken_pipe_amp = function(code) { // '|&'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) { return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2) }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
};

pp$8.readToken_caret = function() { // '^'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.bitwiseXOR, 1)
};

pp$8.readToken_plus_min = function(code) { // '+-'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next == 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) == 62 &&
        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      // A `-->` line comment
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken()
    }
    return this.finishOp(types.incDec, 2)
  }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.plusMin, 1)
};

pp$8.readToken_lt_gt = function(code) { // '<>'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
    return this.finishOp(types.bitShift, size)
  }
  if (next == 33 && code == 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) == 45 &&
      this.input.charCodeAt(this.pos + 3) == 45) {
    // `<!--`, an XML-style comment that should be interpreted as a line comment
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken()
  }
  if (next === 61) { size = 2; }
  return this.finishOp(types.relational, size)
};

pp$8.readToken_eq_excl = function(code) { // '=!'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
    this.pos += 2;
    return this.finishToken(types.arrow)
  }
  return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
};

pp$8.getTokenFromCode = function(code) {
  switch (code) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
  case 46: // '.'
    return this.readToken_dot()

    // Punctuation tokens.
  case 40: ++this.pos; return this.finishToken(types.parenL)
  case 41: ++this.pos; return this.finishToken(types.parenR)
  case 59: ++this.pos; return this.finishToken(types.semi)
  case 44: ++this.pos; return this.finishToken(types.comma)
  case 91: ++this.pos; return this.finishToken(types.bracketL)
  case 93: ++this.pos; return this.finishToken(types.bracketR)
  case 123: ++this.pos; return this.finishToken(types.braceL)
  case 125: ++this.pos; return this.finishToken(types.braceR)
  case 58: ++this.pos; return this.finishToken(types.colon)
  case 63: ++this.pos; return this.finishToken(types.question)

  case 96: // '`'
    if (this.options.ecmaVersion < 6) { break }
    ++this.pos;
    return this.finishToken(types.backQuote)

  case 48: // '0'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
    if (this.options.ecmaVersion >= 6) {
      if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
      if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
    }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
    return this.readNumber(false)

    // Quotes produce strings.
  case 34: case 39: // '"', "'"
    return this.readString(code)

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

  case 47: // '/'
    return this.readToken_slash()

  case 37: case 42: // '%*'
    return this.readToken_mult_modulo_exp(code)

  case 124: case 38: // '|&'
    return this.readToken_pipe_amp(code)

  case 94: // '^'
    return this.readToken_caret()

  case 43: case 45: // '+-'
    return this.readToken_plus_min(code)

  case 60: case 62: // '<>'
    return this.readToken_lt_gt(code)

  case 61: case 33: // '=!'
    return this.readToken_eq_excl(code)

  case 126: // '~'
    return this.finishOp(types.prefix, 1)
  }

  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};

pp$8.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str)
};

// Parse a regular expression. Some context-awareness is necessary,
// since a '/' inside a '[]' set does not end the expression.

function tryCreateRegexp(src, flags, throwErrorAt, parser) {
  try {
    return new RegExp(src, flags)
  } catch (e) {
    if (throwErrorAt !== undefined) {
      if (e instanceof SyntaxError) { parser.raise(throwErrorAt, "Error parsing regular expression: " + e.message); }
      throw e
    }
  }
}

var regexpUnicodeSupport = !!tryCreateRegexp("\uffff", "u");

pp$8.readRegexp = function() {
  var this$1 = this;

  var escaped, inClass, start = this.pos;
  for (;;) {
    if (this$1.pos >= this$1.input.length) { this$1.raise(start, "Unterminated regular expression"); }
    var ch = this$1.input.charAt(this$1.pos);
    if (lineBreak.test(ch)) { this$1.raise(start, "Unterminated regular expression"); }
    if (!escaped) {
      if (ch === "[") { inClass = true; }
      else if (ch === "]" && inClass) { inClass = false; }
      else if (ch === "/" && !inClass) { break }
      escaped = ch === "\\";
    } else { escaped = false; }
    ++this$1.pos;
  }
  var content = this.input.slice(start, this.pos);
  ++this.pos;
  // Need to use `readWord1` because '\uXXXX' sequences are allowed
  // here (don't ask).
  var mods = this.readWord1();
  var tmp = content, tmpFlags = "";
  if (mods) {
    var validFlags = /^[gim]*$/;
    if (this.options.ecmaVersion >= 6) { validFlags = /^[gimuy]*$/; }
    if (!validFlags.test(mods)) { this.raise(start, "Invalid regular expression flag"); }
    if (mods.indexOf("u") >= 0) {
      if (regexpUnicodeSupport) {
        tmpFlags = "u";
      } else {
        // Replace each astral symbol and every Unicode escape sequence that
        // possibly represents an astral symbol or a paired surrogate with a
        // single ASCII symbol to avoid throwing on regular expressions that
        // are only valid in combination with the `/u` flag.
        // Note: replacing with the ASCII symbol `x` might cause false
        // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
        // perfectly valid pattern that is equivalent to `[a-b]`, but it would
        // be replaced by `[x-b]` which throws an error.
        tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}/g, function (_match, code, offset) {
          code = Number("0x" + code);
          if (code > 0x10FFFF) { this$1.raise(start + offset + 3, "Code point out of bounds"); }
          return "x"
        });
        tmp = tmp.replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x");
        tmpFlags = tmpFlags.replace("u", "");
      }
    }
  }
  // Detect invalid regular expressions.
  var value = null;
  // Rhino's regular expression parser is flaky and throws uncatchable exceptions,
  // so don't do detection if we are running under Rhino
  if (!isRhino) {
    tryCreateRegexp(tmp, tmpFlags, start, this);
    // Get a regular expression object for this pattern-flag pair, or `null` in
    // case the current environment doesn't support the flags it uses.
    value = tryCreateRegexp(content, mods);
  }
  return this.finishToken(types.regexp, {pattern: content, flags: mods, value: value})
};

// Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.

pp$8.readInt = function(radix, len) {
  var this$1 = this;

  var start = this.pos, total = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    var code = this$1.input.charCodeAt(this$1.pos), val = (void 0);
    if (code >= 97) { val = code - 97 + 10; } // a
    else if (code >= 65) { val = code - 65 + 10; } // A
    else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
    else { val = Infinity; }
    if (val >= radix) { break }
    ++this$1.pos;
    total = total * radix + val;
  }
  if (this.pos === start || len != null && this.pos - start !== len) { return null }

  return total
};

pp$8.readRadixNumber = function(radix) {
  this.pos += 2; // 0x
  var val = this.readInt(radix);
  if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
  return this.finishToken(types.num, val)
};

// Read an integer, octal integer, or floating-point number.

pp$8.readNumber = function(startsWithDot) {
  var start = this.pos, isFloat = false, octal = this.input.charCodeAt(this.pos) === 48;
  if (!startsWithDot && this.readInt(10) === null) { this.raise(start, "Invalid number"); }
  if (octal && this.pos == start + 1) { octal = false; }
  var next = this.input.charCodeAt(this.pos);
  if (next === 46 && !octal) { // '.'
    ++this.pos;
    this.readInt(10);
    isFloat = true;
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) { // 'eE'
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) { ++this.pos; } // '+-'
    if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
    isFloat = true;
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

  var str = this.input.slice(start, this.pos), val;
  if (isFloat) { val = parseFloat(str); }
  else if (!octal || str.length === 1) { val = parseInt(str, 10); }
  else if (this.strict) { this.raise(start, "Invalid number"); }
  else if (/[89]/.test(str)) { val = parseInt(str, 10); }
  else { val = parseInt(str, 8); }
  return this.finishToken(types.num, val)
};

// Read a string value, interpreting backslash-escapes.

pp$8.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;

  if (ch === 123) { // '{'
    if (this.options.ecmaVersion < 6) { this.unexpected(); }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
  } else {
    code = this.readHexChar(4);
  }
  return code
};

function codePointToString(code) {
  // UTF-16 Decoding
  if (code <= 0xFFFF) { return String.fromCharCode(code) }
  code -= 0x10000;
  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
}

pp$8.readString = function(quote) {
  var this$1 = this;

  var out = "", chunkStart = ++this.pos;
  for (;;) {
    if (this$1.pos >= this$1.input.length) { this$1.raise(this$1.start, "Unterminated string constant"); }
    var ch = this$1.input.charCodeAt(this$1.pos);
    if (ch === quote) { break }
    if (ch === 92) { // '\'
      out += this$1.input.slice(chunkStart, this$1.pos);
      out += this$1.readEscapedChar(false);
      chunkStart = this$1.pos;
    } else {
      if (isNewLine(ch)) { this$1.raise(this$1.start, "Unterminated string constant"); }
      ++this$1.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out)
};

// Reads template string tokens.

var INVALID_TEMPLATE_ESCAPE_ERROR = {};

pp$8.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err
    }
  }

  this.inTemplateElement = false;
};

pp$8.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR
  } else {
    this.raise(position, message);
  }
};

pp$8.readTmplToken = function() {
  var this$1 = this;

  var out = "", chunkStart = this.pos;
  for (;;) {
    if (this$1.pos >= this$1.input.length) { this$1.raise(this$1.start, "Unterminated template"); }
    var ch = this$1.input.charCodeAt(this$1.pos);
    if (ch === 96 || ch === 36 && this$1.input.charCodeAt(this$1.pos + 1) === 123) { // '`', '${'
      if (this$1.pos === this$1.start && (this$1.type === types.template || this$1.type === types.invalidTemplate)) {
        if (ch === 36) {
          this$1.pos += 2;
          return this$1.finishToken(types.dollarBraceL)
        } else {
          ++this$1.pos;
          return this$1.finishToken(types.backQuote)
        }
      }
      out += this$1.input.slice(chunkStart, this$1.pos);
      return this$1.finishToken(types.template, out)
    }
    if (ch === 92) { // '\'
      out += this$1.input.slice(chunkStart, this$1.pos);
      out += this$1.readEscapedChar(true);
      chunkStart = this$1.pos;
    } else if (isNewLine(ch)) {
      out += this$1.input.slice(chunkStart, this$1.pos);
      ++this$1.pos;
      switch (ch) {
      case 13:
        if (this$1.input.charCodeAt(this$1.pos) === 10) { ++this$1.pos; }
      case 10:
        out += "\n";
        break
      default:
        out += String.fromCharCode(ch);
        break
      }
      if (this$1.options.locations) {
        ++this$1.curLine;
        this$1.lineStart = this$1.pos;
      }
      chunkStart = this$1.pos;
    } else {
      ++this$1.pos;
    }
  }
};

// Reads a template token to search for the end, without validating any escape sequences
pp$8.readInvalidTemplateToken = function() {
  var this$1 = this;

  for (; this.pos < this.input.length; this.pos++) {
    switch (this$1.input[this$1.pos]) {
    case "\\":
      ++this$1.pos;
      break

    case "$":
      if (this$1.input[this$1.pos + 1] !== "{") {
        break
      }
    // falls through

    case "`":
      return this$1.finishToken(types.invalidTemplate, this$1.input.slice(this$1.start, this$1.pos))

    // no default
    }
  }
  this.raise(this.start, "Unterminated template");
};

// Used to read escaped characters

pp$8.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
  case 110: return "\n" // 'n' -> '\n'
  case 114: return "\r" // 'r' -> '\r'
  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
  case 117: return codePointToString(this.readCodePoint()) // 'u'
  case 116: return "\t" // 't' -> '\t'
  case 98: return "\b" // 'b' -> '\b'
  case 118: return "\u000b" // 'v' -> '\u000b'
  case 102: return "\f" // 'f' -> '\f'
  case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
  case 10: // ' \n'
    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
    return ""
  default:
    if (ch >= 48 && ch <= 55) {
      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
      var octal = parseInt(octalStr, 8);
      if (octal > 255) {
        octalStr = octalStr.slice(0, -1);
        octal = parseInt(octalStr, 8);
      }
      if (octalStr !== "0" && (this.strict || inTemplate)) {
        this.invalidStringToken(this.pos - 2, "Octal literal in strict mode");
      }
      this.pos += octalStr.length - 1;
      return String.fromCharCode(octal)
    }
    return String.fromCharCode(ch)
  }
};

// Used to read character escape sequences ('\x', '\u', '\U').

pp$8.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
  return n
};

// Read an identifier, and return it as a string. Sets `this.containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.

pp$8.readWord1 = function() {
  var this$1 = this;

  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this$1.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this$1.pos += ch <= 0xffff ? 1 : 2;
    } else if (ch === 92) { // "\"
      this$1.containsEsc = true;
      word += this$1.input.slice(chunkStart, this$1.pos);
      var escStart = this$1.pos;
      if (this$1.input.charCodeAt(++this$1.pos) != 117) // "u"
        { this$1.invalidStringToken(this$1.pos, "Expecting Unicode escape sequence \\uXXXX"); }
      ++this$1.pos;
      var esc = this$1.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
        { this$1.invalidStringToken(escStart, "Invalid Unicode escape"); }
      word += codePointToString(esc);
      chunkStart = this$1.pos;
    } else {
      break
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos)
};

// Read an identifier or keyword token. Will check for reserved
// words when necessary.

pp$8.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword " + word); }
    type = keywords$1[word];
  }
  return this.finishToken(type, word)
};

// Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
// various contributors and released under an MIT license.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/ternjs/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/ternjs/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js

var version = "5.2.1";

// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

function parse(input, options) {
  return new Parser(options, input).parse()
}

// This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.

function parseExpressionAt(input, pos, options) {
  var p = new Parser(options, input, pos);
  p.nextToken();
  return p.parseExpression()
}

// Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenizer` export provides an interface to the tokenizer.

function tokenizer(input, options) {
  return new Parser(options, input)
}

// This is a terrible kludge to support the existing, pre-ES6
// interface where the loose parser module retroactively adds exports
// to this module.
 // eslint-disable-line camelcase
function addLooseExports(parse, Parser$$1, plugins$$1) {
  exports.parse_dammit = parse; // eslint-disable-line camelcase
  exports.LooseParser = Parser$$1;
  exports.pluginsLoose = plugins$$1;
}

exports.version = version;
exports.parse = parse;
exports.parseExpressionAt = parseExpressionAt;
exports.tokenizer = tokenizer;
exports.addLooseExports = addLooseExports;
exports.Parser = Parser;
exports.plugins = plugins;
exports.defaultOptions = defaultOptions;
exports.Position = Position;
exports.SourceLocation = SourceLocation;
exports.getLineInfo = getLineInfo;
exports.Node = Node;
exports.TokenType = TokenType;
exports.tokTypes = types;
exports.keywordTypes = keywords$1;
exports.TokContext = TokContext;
exports.tokContexts = types$1;
exports.isIdentifierChar = isIdentifierChar;
exports.isIdentifierStart = isIdentifierStart;
exports.Token = Token;
exports.isNewLine = isNewLine;
exports.lineBreak = lineBreak;
exports.lineBreakG = lineBreakG;
exports.nonASCIIwhitespace = nonASCIIwhitespace;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],5:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.acorn = global.acorn || {}, global.acorn.walk = global.acorn.walk || {})));
}(this, (function (exports) { 'use strict';

// AST walker module for Mozilla Parser API compatible trees

// A simple walk is one where you simply specify callbacks to be
// called on specific nodes. The last two arguments are optional. A
// simple use would be
//
//     walk.simple(myTree, {
//         Expression: function(node) { ... }
//     });
//
// to do something with all expressions. All Parser API node types
// can be used to identify node types, as well as Expression,
// Statement, and ScopeBody, which denote categories of nodes.
//
// The base argument can be used to pass a custom (recursive)
// walker, and state can be used to give this walked an initial
// state.

function simple(node, visitors, base, state, override) {
  if (!base) { base = exports.base
  ; }(function c(node, st, override) {
    var type = override || node.type, found = visitors[type];
    base[type](node, st, c);
    if (found) { found(node, st); }
  })(node, state, override);
}

// An ancestor walk keeps an array of ancestor nodes (including the
// current node) and passes them to the callback as third parameter
// (and also as state parameter when no other state is present).
function ancestor(node, visitors, base, state) {
  if (!base) { base = exports.base; }
  var ancestors = [];(function c(node, st, override) {
    var type = override || node.type, found = visitors[type];
    var isNew = node != ancestors[ancestors.length - 1];
    if (isNew) { ancestors.push(node); }
    base[type](node, st, c);
    if (found) { found(node, st || ancestors, ancestors); }
    if (isNew) { ancestors.pop(); }
  })(node, state);
}

// A recursive walk is one where your functions override the default
// walkers. They can modify and replace the state parameter that's
// threaded through the walk, and can opt how and whether to walk
// their child nodes (by calling their third argument on these
// nodes).
function recursive(node, state, funcs, base, override) {
  var visitor = funcs ? exports.make(funcs, base) : base;(function c(node, st, override) {
    visitor[override || node.type](node, st, c);
  })(node, state, override);
}

function makeTest(test) {
  if (typeof test == "string")
    { return function (type) { return type == test; } }
  else if (!test)
    { return function () { return true; } }
  else
    { return test }
}

var Found = function Found(node, state) { this.node = node; this.state = state; };

// A full walk triggers the callback on each node
function full(node, callback, base, state, override) {
  if (!base) { base = exports.base
  ; }(function c(node, st, override) {
    var type = override || node.type;
    base[type](node, st, c);
    if (!override) { callback(node, st, type); }
  })(node, state, override);
}

// An fullAncestor walk is like an ancestor walk, but triggers
// the callback on each node
function fullAncestor(node, callback, base, state) {
  if (!base) { base = exports.base; }
  var ancestors = [];(function c(node, st, override) {
    var type = override || node.type;
    var isNew = node != ancestors[ancestors.length - 1];
    if (isNew) { ancestors.push(node); }
    base[type](node, st, c);
    if (!override) { callback(node, st || ancestors, ancestors, type); }
    if (isNew) { ancestors.pop(); }
  })(node, state);
}

// Find a node with a given start, end, and type (all are optional,
// null can be used as wildcard). Returns a {node, state} object, or
// undefined when it doesn't find a matching node.
function findNodeAt(node, start, end, test, base, state) {
  test = makeTest(test);
  if (!base) { base = exports.base; }
  try {
    (function c(node, st, override) {
      var type = override || node.type;
      if ((start == null || node.start <= start) &&
          (end == null || node.end >= end))
        { base[type](node, st, c); }
      if ((start == null || node.start == start) &&
          (end == null || node.end == end) &&
          test(type, node))
        { throw new Found(node, st) }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) { return e }
    throw e
  }
}

// Find the innermost node of a given type that contains the given
// position. Interface similar to findNodeAt.
function findNodeAround(node, pos, test, base, state) {
  test = makeTest(test);
  if (!base) { base = exports.base; }
  try {
    (function c(node, st, override) {
      var type = override || node.type;
      if (node.start > pos || node.end < pos) { return }
      base[type](node, st, c);
      if (test(type, node)) { throw new Found(node, st) }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) { return e }
    throw e
  }
}

// Find the outermost matching node after a given position.
function findNodeAfter(node, pos, test, base, state) {
  test = makeTest(test);
  if (!base) { base = exports.base; }
  try {
    (function c(node, st, override) {
      if (node.end < pos) { return }
      var type = override || node.type;
      if (node.start >= pos && test(type, node)) { throw new Found(node, st) }
      base[type](node, st, c);
    })(node, state);
  } catch (e) {
    if (e instanceof Found) { return e }
    throw e
  }
}

// Find the outermost matching node before a given position.
function findNodeBefore(node, pos, test, base, state) {
  test = makeTest(test);
  if (!base) { base = exports.base; }
  var max;(function c(node, st, override) {
    if (node.start > pos) { return }
    var type = override || node.type;
    if (node.end <= pos && (!max || max.node.end < node.end) && test(type, node))
      { max = new Found(node, st); }
    base[type](node, st, c);
  })(node, state);
  return max
}

// Fallback to an Object.create polyfill for older environments.
var create = Object.create || function(proto) {
  function Ctor() {}
  Ctor.prototype = proto;
  return new Ctor
};

// Used to create a custom walker. Will fill in all missing node
// type properties with the defaults.
function make(funcs, base) {
  if (!base) { base = exports.base; }
  var visitor = create(base);
  for (var type in funcs) { visitor[type] = funcs[type]; }
  return visitor
}

function skipThrough(node, st, c) { c(node, st); }
function ignore(_node, _st, _c) {}

// Node walkers.

var base = {};

base.Program = base.BlockStatement = function (node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1)
    {
    var stmt = list[i];

    c(stmt, st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression =
  function (node, st, c) { return c(node.expression, st, "Expression"); };
base.IfStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Statement");
  if (node.alternate) { c(node.alternate, st, "Statement"); }
};
base.LabeledStatement = function (node, st, c) { return c(node.body, st, "Statement"); };
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function (node, st, c) {
  c(node.object, st, "Expression");
  c(node.body, st, "Statement");
};
base.SwitchStatement = function (node, st, c) {
  c(node.discriminant, st, "Expression");
  for (var i = 0, list = node.cases; i < list.length; i += 1) {
    var cs = list[i];

    if (cs.test) { c(cs.test, st, "Expression"); }
    for (var i$1 = 0, list$1 = cs.consequent; i$1 < list$1.length; i$1 += 1)
      {
      var cons = list$1[i$1];

      c(cons, st, "Statement");
    }
  }
};
base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function (node, st, c) {
  if (node.argument) { c(node.argument, st, "Expression"); }
};
base.ThrowStatement = base.SpreadElement =
  function (node, st, c) { return c(node.argument, st, "Expression"); };
base.TryStatement = function (node, st, c) {
  c(node.block, st, "Statement");
  if (node.handler) { c(node.handler, st); }
  if (node.finalizer) { c(node.finalizer, st, "Statement"); }
};
base.CatchClause = function (node, st, c) {
  c(node.param, st, "Pattern");
  c(node.body, st, "ScopeBody");
};
base.WhileStatement = base.DoWhileStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForStatement = function (node, st, c) {
  if (node.init) { c(node.init, st, "ForInit"); }
  if (node.test) { c(node.test, st, "Expression"); }
  if (node.update) { c(node.update, st, "Expression"); }
  c(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function (node, st, c) {
  c(node.left, st, "ForInit");
  c(node.right, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInit = function (node, st, c) {
  if (node.type == "VariableDeclaration") { c(node, st); }
  else { c(node, st, "Expression"); }
};
base.DebuggerStatement = ignore;

base.FunctionDeclaration = function (node, st, c) { return c(node, st, "Function"); };
base.VariableDeclaration = function (node, st, c) {
  for (var i = 0, list = node.declarations; i < list.length; i += 1)
    {
    var decl = list[i];

    c(decl, st);
  }
};
base.VariableDeclarator = function (node, st, c) {
  c(node.id, st, "Pattern");
  if (node.init) { c(node.init, st, "Expression"); }
};

base.Function = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    c(param, st, "Pattern");
  }
  c(node.body, st, node.expression ? "ScopeExpression" : "ScopeBody");
};
// FIXME drop these node types in next major version
// (They are awkward, and in ES6 every block can be a scope.)
base.ScopeBody = function (node, st, c) { return c(node, st, "Statement"); };
base.ScopeExpression = function (node, st, c) { return c(node, st, "Expression"); };

base.Pattern = function (node, st, c) {
  if (node.type == "Identifier")
    { c(node, st, "VariablePattern"); }
  else if (node.type == "MemberExpression")
    { c(node, st, "MemberPattern"); }
  else
    { c(node, st); }
};
base.VariablePattern = ignore;
base.MemberPattern = skipThrough;
base.RestElement = function (node, st, c) { return c(node.argument, st, "Pattern"); };
base.ArrayPattern = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Pattern"); }
  }
};
base.ObjectPattern = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1)
    {
    var prop = list[i];

    c(prop.value, st, "Pattern");
  }
};

base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Expression"); }
  }
};
base.ObjectExpression = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1)
    {
    var prop = list[i];

    c(prop, st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = base.TemplateLiteral = function (node, st, c) {
  for (var i = 0, list = node.expressions; i < list.length; i += 1)
    {
    var expr = list[i];

    c(expr, st, "Expression");
  }
};
base.UnaryExpression = base.UpdateExpression = function (node, st, c) {
  c(node.argument, st, "Expression");
};
base.BinaryExpression = base.LogicalExpression = function (node, st, c) {
  c(node.left, st, "Expression");
  c(node.right, st, "Expression");
};
base.AssignmentExpression = base.AssignmentPattern = function (node, st, c) {
  c(node.left, st, "Pattern");
  c(node.right, st, "Expression");
};
base.ConditionalExpression = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Expression");
  c(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function (node, st, c) {
  c(node.callee, st, "Expression");
  if (node.arguments)
    { for (var i = 0, list = node.arguments; i < list.length; i += 1)
      {
        var arg = list[i];

        c(arg, st, "Expression");
      } }
};
base.MemberExpression = function (node, st, c) {
  c(node.object, st, "Expression");
  if (node.computed) { c(node.property, st, "Expression"); }
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function (node, st, c) {
  if (node.declaration)
    { c(node.declaration, st, node.type == "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression"); }
  if (node.source) { c(node.source, st, "Expression"); }
};
base.ExportAllDeclaration = function (node, st, c) {
  c(node.source, st, "Expression");
};
base.ImportDeclaration = function (node, st, c) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1)
    {
    var spec = list[i];

    c(spec, st);
  }
  c(node.source, st, "Expression");
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.Literal = ignore;

base.TaggedTemplateExpression = function (node, st, c) {
  c(node.tag, st, "Expression");
  c(node.quasi, st);
};
base.ClassDeclaration = base.ClassExpression = function (node, st, c) { return c(node, st, "Class"); };
base.Class = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  if (node.superClass) { c(node.superClass, st, "Expression"); }
  for (var i = 0, list = node.body.body; i < list.length; i += 1)
    {
    var item = list[i];

    c(item, st);
  }
};
base.MethodDefinition = base.Property = function (node, st, c) {
  if (node.computed) { c(node.key, st, "Expression"); }
  c(node.value, st, "Expression");
};

exports.simple = simple;
exports.ancestor = ancestor;
exports.recursive = recursive;
exports.full = full;
exports.fullAncestor = fullAncestor;
exports.findNodeAt = findNodeAt;
exports.findNodeAround = findNodeAround;
exports.findNodeAfter = findNodeAfter;
exports.findNodeBefore = findNodeBefore;
exports.make = make;
exports.base = base;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],6:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],7:[function(require,module,exports){

},{}],8:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('Invalid typed array length')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return fromObject(value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if (isArrayBufferView(obj) || 'length' in obj) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (isArrayBufferView(string) || isArrayBuffer(string)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val, encoding)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
// but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
function isArrayBuffer (obj) {
  return obj instanceof ArrayBuffer ||
    (obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' &&
      typeof obj.byteLength === 'number')
}

// Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
function isArrayBufferView (obj) {
  return (typeof ArrayBuffer.isView === 'function') && ArrayBuffer.isView(obj)
}

function numberIsNaN (obj) {
  return obj !== obj // eslint-disable-line no-self-compare
}

},{"base64-js":6,"ieee754":9}],9:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],10:[function(require,module,exports){
(function (Buffer){
var parser = require('./lib/parser') ;
var treeSurgeon = require('./lib/arboriculture') ;
var outputCode = require('./lib/output') ;

/* Utils */
function copyObj(a){
    var o = {} ;
    a.forEach(function(b){
        if (b && typeof b==='object')
            for (var k in b)
                o[k] = b[k]  ;
    }) ;
    return o ;
}

function btoa(str) {
    var buffer ;
    if (str instanceof Buffer) {
        buffer = str;
    } else {
        buffer = new Buffer(str.toString(), 'binary');
    }

    return buffer.toString('base64');
}

function noLogger(){}

/* NodentCompiler prototypes, that refer to 'this' */
function compile(code,origFilename,__sourceMapping,opts) {
    if (typeof __sourceMapping==="object" && opts===undefined)
        opts = __sourceMapping ;

    opts = opts || {} ;

    // Fill in any default codeGen options
    for (var k in NodentCompiler.initialCodeGenOpts) {
        if (!(k in opts))
            opts[k] = NodentCompiler.initialCodeGenOpts[k] ;
    }

    var pr = this.parse(code,origFilename,null,opts);
    this.asynchronize(pr,null,opts,this.log || noLogger) ;
    this.prettyPrint(pr,opts) ;
    return pr ;
}

function prettyPrint(pr,opts) {
    var map ;
    var filepath = pr.filename ? pr.filename.split("/") :["anonymous"] ;
    var filename = filepath.pop() ;

    var out = outputCode(pr.ast,(opts && opts.sourcemap)?{map:{
        startLine: opts.mapStartLine || 0,
        file: filename+"(original)",
        sourceMapRoot: filepath.join("/"),
        sourceContent: pr.origCode
    }}:null, pr.origCode) ;

    if (opts && opts.sourcemap){
        try {
            var mapUrl = "" ;
            var jsmap = out.map.toJSON();
            if (jsmap) {
                // require an expression to defeat browserify
                var SourceMapConsumer = require('source-map').SourceMapConsumer;
                pr.sourcemap = jsmap ;
                this.smCache[pr.filename] = {map:jsmap,smc:new SourceMapConsumer(jsmap)} ;
                mapUrl = "\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,"
                    +btoa(JSON.stringify(jsmap))+"\n" ;
            }
            pr.code = out.code+mapUrl ;
        } catch (ex) {
            pr.code = out ;
        }
    } else {
        pr.code = out ;
    }
    return pr ;
}

function NodentCompiler(members) {
    this.covers = {} ;
    this._ident = NodentCompiler.prototype.version+"_"+Math.random() ;
    this.setOptions(members || {}) ;
}

NodentCompiler.prototype.smCache = {} ;

NodentCompiler.prototype.setOptions = function(members){
    this.log = members.log===false?noLogger:members.log||this.log;
    this.options = copyObj([this.options,members]) ;
    delete this.options.log ;
    return this ;
};

function parseCode(code,origFilename,__sourceMapping,opts) {
    if (typeof __sourceMapping==="object" && opts===undefined)
        opts = __sourceMapping ;

    var r = { origCode:code.toString(), filename:origFilename } ;
    try {
        r.ast = parser.parse(r.origCode, opts && opts.parser) ;
        if (opts.babelTree) {
            parser.treeWalker(r.ast,function(node,descend,path){
                if (node.type==='Literal')
                    path[0].replace(treeSurgeon.babelLiteralNode(node.value)) ;
                else if (node.type==='Property') {
                    // Class/ObjectProperty in babel6
                    if (path[0].parent.type==='ClassBody'){
                        // There's no easy mapping here as it appears to be borderline in the specification?
                        // It's definitely a kind of ClassProperty tho....
                        node.type = 'ClassProperty' ;
                    } else {
                        node.type = 'ObjectProperty' ;
                    }
                }
                descend() ;
            }) ;
        }
        return r ;
    } catch (ex) {
        if (ex instanceof SyntaxError) {
            var l = r.origCode.substr(ex.pos-ex.loc.column) ;
            l = l.split("\n")[0] ;
            ex.message += " "+origFilename+" (nodent)\n"+l+"\n"+l.replace(/[\S ]/g,"-").substring(0,ex.loc.column)+"^" ;
            ex.stack = "" ;
        }
        throw ex ;
    }
}

NodentCompiler.prototype.version =  require("./package.json").version ;
NodentCompiler.prototype.isThenable = function(x) { return x && x instanceof Object && typeof x.then==="function"} ;
NodentCompiler.prototype.compile =  compile ;
// Exported ; but not to be used lightly!
NodentCompiler.prototype.parse = parseCode ;
NodentCompiler.prototype.asynchronize =  treeSurgeon.asynchronize ;
NodentCompiler.prototype.printNode =  treeSurgeon.printNode ;
NodentCompiler.prototype.prettyPrint =  prettyPrint ;
NodentCompiler.prototype.getDefaultCompileOptions = undefined ;

Object.defineProperty(NodentCompiler.prototype,"Promise",{
    get:function (){
        initOpts.log("Warning: nodent.Promise is deprecated. Use nodent.Thenable instead");
        return Thenable;
    },
    enumerable:false,
    configurable:false
}) ;

NodentCompiler.initialCodeGenOpts = {
    noRuntime:false,
    lazyThenables:false,
    es6target:false,
    noUseDirective:false,
    wrapAwait:null,
    mapStartLine:0,
    sourcemap:true,
    engine:false,
    parser:{sourceType:'script'},
    $return:"$return",
    $error:"$error",
    $arguments:"$args",
    $asyncspawn:"$asyncspawn",
    $asyncbind:"$asyncbind",
    generatedSymbolPrefix:"$",
    $makeThenable:'$makeThenable'
};

module.exports = NodentCompiler ;
}).call(this,require("buffer").Buffer)
},{"./lib/arboriculture":11,"./lib/output":12,"./lib/parser":13,"./package.json":14,"buffer":8,"source-map":40}],11:[function(require,module,exports){
'use strict';

/* We manipulate (abstract syntax) trees */
var parser = require('./parser');
var outputCode = require('./output');
/** Helpers **/
/*global.printNode = */function printNode(n) {
    if (!n) return '' ;
    if (Array.isArray(n))
        return n.map(printNode).join("|\n");
    try {
        return outputCode(n) ; //+"\t//@"+Object.keys(n).filter(function(k){ return k[0]==='$'}).map(function(k){ return k+":"+n[k] });
    } catch (ex) {
        return ex.message + ": " + (n && n.type);
    }
}

function cloneNode(n) {
    if (Array.isArray(n))
        return n.map(function (n) {
        return cloneNode(n);
    });
    var o = {};
    Object.keys(n).forEach(function (k) {
        o[k] = n[k];
    });
    return o;
}

/* Bit of a hack: without having to search for references to this
 * node, force it to be some replacement node */
var locationInfo = { start:true, end: true, loc: true, range: true } ;
function coerce(node, replace) {
    if (node===replace) return ;
    node.__proto__ = Object.getPrototypeOf(replace);
    Object.keys(node).forEach(function (k) {
        if (!(k in locationInfo))
            delete node[k];
    });
    Object.keys(replace).forEach(function (k) {
        if (!(k in node))
            node[k] = replace[k];
    });
}

function Nothing(){}

var examinations = {
        getScope: function(){ return  this.node.type === 'FunctionDeclaration' || this.node.type === 'FunctionExpression' || this.node.type === 'Function' || this.node.type === 'ObjectMethod' || this.node.type === 'ClassMethod' || (this.node.type === 'ArrowFunctionExpression' && this.node.body.type === 'BlockStatement') ? this.node.body.body : this.node.type === 'Program' ? this.node.body : null},
        isScope: function(){ return  this.node.type === 'FunctionDeclaration' || this.node.type === 'FunctionExpression' || this.node.type === 'Function' || this.node.type === 'Program' || this.node.type === 'ObjectMethod' || this.node.type === 'ClassMethod' || (this.node.type === 'ArrowFunctionExpression' && this.node.body.type === 'BlockStatement')},
        isFunction: function(){ return  this.node.type === 'FunctionDeclaration' || this.node.type === 'FunctionExpression' || this.node.type === 'Function' || this.node.type === 'ObjectMethod' || this.node.type === 'ClassMethod' || this.node.type === 'ArrowFunctionExpression'},
        isClass: function(){ return  this.node.type === 'ClassDeclaration' || this.node.type === 'ClassExpression'},
        isBlockStatement: function(){ return this.node.type==='ClassBody' ||  this.node.type === 'Program' || this.node.type === 'BlockStatement' ? this.node.body : this.node.type === 'SwitchCase' ? this.node.consequent : false},
        isExpressionStatement: function(){ return  this.node.type === 'ExpressionStatement'},
        isLiteral: function(){ return  this.node.type === 'Literal' || this.node.type === 'BooleanLiteral' || this.node.type === 'RegExpLiteral' || this.node.type === 'NumericLiteral' || this.node.type === 'StringLiteral' || this.node.type === 'NullLiteral'},
        isDirective: function(){ return  this.node.type === 'ExpressionStatement' && (this.node.expression.type === 'StringLiteral' || this.node.expression.type === 'Literal' && typeof this.node.expression.value === 'string')},
        isUnaryExpression: function(){ return  this.node.type === 'UnaryExpression'},
        isAwait: function(){ return  this.node.type === 'AwaitExpression' && !this.node.$hidden},
        isAsync: function(){ return  this.node.async },
        isStatement: function(){ return  this.node.type.match(/[a-zA-Z]+Declaration/) !== null || this.node.type.match(/[a-zA-Z]+Statement/) !== null},
        isExpression: function(){ return  this.node.type.match(/[a-zA-Z]+Expression/) !== null},
        isLoop: function(){ return  this.node.type === 'ForStatement' || this.node.type === 'WhileStatement' || this.node.type === 'DoWhileStatement'}, //   Other loops?
        isJump: function(){ return  this.node.type === 'ReturnStatement' || this.node.type === 'ThrowStatement' || this.node.type === 'BreakStatement' || this.node.type === 'ContinueStatement'},
        isES6: function(){
          switch (this.node.type) {
            case 'ExportNamedDeclaration':
            case 'ExportSpecifier':
            case 'ExportDefaultDeclaration':
            case 'ExportAllDeclaration':
            case 'ImportDeclaration':
            case 'ImportSpecifier':
            case 'ImportDefaultSpecifier':
            case 'ImportNamespaceSpecifier':
            case 'ArrowFunctionExpression':
            case 'ForOfStatement':
            case 'YieldExpression':
            case 'Super':
            case 'RestElement':
            case 'RestProperty':
            case 'SpreadElement':
            case 'TemplateLiteral':
            case 'ClassDeclaration':
            case 'ClassExpression':
              return true ;

            case 'VariableDeclaration':
              return this.node.kind && this.node.kind !== 'var' ;

            case 'FunctionDeclaration':
            case 'FunctionExpression':
              return !!this.node.generator;
        }
      }
};

var NodeExaminer = {} ;
Object.keys(examinations).forEach(function(k){
    Object.defineProperty(NodeExaminer,k,{
        get:examinations[k]
    }) ;
}) ;

function examine(node) {
    if (!node)
        return {};
    NodeExaminer.node = node ;
    return NodeExaminer ;
}

/*
 * descendOn = true                     Enter scopes within scopes
 * descendOn = false/undefined/null     Do not enter scopes within scopes
 * descendOn = function                 Descend when function(node) is true
 */
function contains(ast, fn, descendOn) {
    if (!ast)
        return null;
    if (fn && typeof fn === 'object') {
        var keys = Object.keys(fn);
        return contains(ast, function (node) {
            return keys.every(function (k) {
                return node[k] == fn[k];
            });
        });
    }
    var n, found = {};
    if (Array.isArray(ast)) {
        for (var i = 0;i < ast.length; i++)
            if (n = contains(ast[i], fn))
                return n;
        return null;
    }

    var subScopes = descendOn ;
    if (typeof descendOn !== "function") {
        if (descendOn) {
            subScopes = function(n) { return true } ;
        } else {
            subScopes = function(n) { return !examine(n).isScope } ;
        }
    }

    try {
        parser.treeWalker(ast, function (node, descend, path) {
            if (fn(node)) {
                found.path = path;
                throw found;
            }
            if (node === ast || subScopes(node))
                descend();
        });
    } catch (ex) {
        if (ex === found)
            return found.path;
        throw ex;
    }
    return null;
}

function containsAwait(ast) {
    return contains(ast, function(n){
        return n.type==='AwaitExpression' && !n.$hidden
    });
}

function containsAwaitInBlock(ast) {
    return contains(ast, function(n){
        return n.type==='AwaitExpression'  && !n.$hidden
    }, function (n) {
        var x = examine(n) ;
        return !x.isBlockStatement && !x.isScope
    });
}

function containsThis(ast) {
    return contains(ast, {
        type: 'ThisExpression'
    });
}

function babelLiteralNode(value) {
    if (value === null)
        return {
        type: 'NullLiteral',
        value: null,
        raw: 'null'
    };
    if (value === true || value === false)
        return {
        type: 'BooleanLiteral',
        value: value,
        raw: JSON.stringify(value)
    };
    if (value instanceof RegExp) {
        var str = value.toString();
        var parts = str.split('/');
        return {
            type: 'RegExpLiteral',
            value: value,
            raw: str,
            pattern: parts[1],
            flags: parts[2]
        };
    }
    if (typeof value === 'number')
        return {
        type: 'NumericLiteral',
        value: value,
        raw: JSON.stringify(value)
    };
    return {
        type: 'StringLiteral',
        value: value,
        raw: JSON.stringify(value)
    };
}

function ident(name, loc) {
    return {
        type: 'Identifier',
        name: name,
        loc: loc
    };
}

function idents(s) {
    var r = {};
    for (var k in s)
        r[k] = typeof s[k] === "string" ? ident(s[k]) : s[k];
    return r;
}

function asynchronize(pr, __sourceMapping, opts, logger) {
    var continuations = {};
    var generatedSymbol = 1;
    var genIdent = {};
    Object.keys(opts).filter(function (k) {
        return k[0] === '$';
    }).forEach(function (k) {
        genIdent[k.slice(1)] = ident(opts[k]);
    });

    /* Generate a prototypical call of the form:
     *      (left).$asyncbind(this,...args)
     */
    function bindAsync(left,arg) {
        if (opts.es6target && !left.id && !arg && left.type.indexOf("Function")===0) {
            left.type = 'ArrowFunctionExpression' ;
            return left ;
        }

        if (opts.noRuntime) {
            if (arg) {
                if (examine(arg).isLiteral) {
                    throw new Error("Nodent: 'noRuntime' option only compatible with -promise and -engine modes") ;
                }
                // Add a global synchronous exception handler to (left)
                left.body.body = parser.part("try {$:0} catch($2) {return $1($2)}",[cloneNode(left.body),arg,ident('$boundEx')]).body ;
            } else if (opts.es6target && !left.id && left.type.indexOf("Function")===0) {
                left.type = 'ArrowFunctionExpression' ;
                return left ;
            }
            if (opts.es6target && !left.id) {
                left.type = 'ArrowFunctionExpression' ;
                return left;
            }
            return parser.part("$0.bind(this)",[left]).expr;
        }

        var params = [{ "type": "ThisExpression" }] ;
        if (arg) {
          return parser.part("$0.$1(this,$2)",[left,genIdent.asyncbind,arg]).expr;
        }
        return parser.part("$0.$1(this)",[left,genIdent.asyncbind]).expr;
    }

    function makeBoundFn(name, body, argnames, binding) {
        return parser.part("var $0 = $1",[ident(name),bindAsync({
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "params": argnames || [],
                    "body": Array.isArray(body)?{type:'BlockStatement',body:body}:body
                }, binding)]).body[0] ;
    }

    function where(node) {
        return pr.filename + (node && node.loc && node.loc.start ? "(" + node.loc.start.line + ":" + node.loc.start.column + ")\t" : "\t");
    }

    function literal(value) {
        if (opts.babelTree) {
            return babelLiteralNode(value);
        } else {
            return {
                type: 'Literal',
                value: value,
                raw: JSON.stringify(value)
            };
        }
    }

    function getMemberFunction(node) {
        if (!node)
            return null ;
        if (opts.babelTree && (node.type === 'ClassMethod' || node.type === 'ObjectMethod')) {
            return node;
        } else if ((!opts.babelTree && node.type === 'MethodDefinition' || node.type === 'Property' && (node.method || node.kind == 'get' || node.kind == 'set')) && examine(node.value).isFunction) {
            return node.value;
        }
        return null;
    }

    var assign$Args = parser.part("var $0 = arguments",[genIdent.arguments]).body[0] ;

    /* Replace 'arguments' identifiers in a function. Return true if a
     * replacement has been made and so the symbol opts.$arguments needs
     * initializing.
     */
    function replaceArguments(ast,nested) {
        if (!examine(ast).isFunction)
            throw new Error("Can only replace 'arguments' in functions") ;

        if (!('$usesArguments' in ast)) {
            parser.treeWalker(ast, function (node, descend, path) {
                if (node.type === 'Identifier' && node.name === 'arguments') {
                    // Fix up shorthand properties
                    if (path[0].parent.shorthand) {
                      path[0].parent.shorthand = false ;
                      path[0].parent.key = ident('arguments') ;
                      ast.$usesArguments = true ;
                    }
    
                    // Replace identifiers that are not keys
                    if (path[0].field !== 'key') {
                      node.name = opts.$arguments;
                      ast.$usesArguments = true ;
                    }
                } else if (node === ast || !examine(node).isFunction) {
                  descend();
                } else if (node.type==='ArrowFunctionExpression') {
                    replaceArguments(node) ;
                    ast.$usesArguments = ast.$usesArguments || node.$usesArguments ;
                }
            });
            ast.$usesArguments = ast.$usesArguments || false ;
        }
        return ast.$usesArguments && ast.type !== 'ArrowFunctionExpression';
    }

    function generateSymbol(node) {
        if (typeof node != 'string')
            node = node.type.replace(/Statement|Expression/g,"");
        return opts.generatedSymbolPrefix + node + "_" + generatedSymbol++;
    }

    function setExit(n, sym) {
        if (n) {
            n.$exit = idents({
                $error: sym.$error,
                $return: sym.$return
            });
        }
        return n;
    }

    function getExitNode(path) {
        for (var n = 0;n < path.length; n++) {
            if (path[n].self.$exit) {
                return path[n].self;
            }
            if (path[n].parent && path[n].parent.$exit) {
                return path[n].parent;
            }
        }
        return null;
    }

    function getExit(path, parents) {
        var n = getExitNode(path);
        if (n)
            return n.$exit;
        if (parents) {
            for (var i = 0;i < parents.length; i++)
                if (parents[i])
                return idents(parents[i]);
        }
        return null;
    }

    // actually do the transforms
    if (opts.engine) {
        // Only Transform extensions:
        // - await outside of async
        // - async return <optional-expression>
        // - async throw <expression>
        // - get async id(){} / async get id(){}
        // - super references (in case they are used by async exits - in general they aren't)
        // Everything else is passed through unmolested to be run by a JS engine such as V8 v5.4
        pr.ast = fixSuperReferences(pr.ast,true);
        pr.ast = asyncSpawn(pr.ast, opts.engine);
        pr.ast = exposeCompilerOpts(pr.ast);
        cleanCode(pr.ast)
    } else if (opts.generators) {
        // Transform to generators
        pr.ast = fixSuperReferences(pr.ast);
        pr.ast = asyncSpawn(pr.ast);
        pr.ast = exposeCompilerOpts(pr.ast);
        cleanCode(pr.ast)
    } else {
        // Transform to callbacks, optionally with Promises
        pr.ast = fixSuperReferences(pr.ast);
        asyncTransforms(pr.ast);
    }
    if (opts.babelTree) {
        parser.treeWalker(pr.ast, function (node, descend, path) {
            descend();
            if (node.type === 'Literal') {
                coerce(node, literal(node.value));
            }
        });
    }
    return pr;

    function asyncTransforms(ast, awaitFlag) {
        var useLazyLoops = !(opts.promises || opts.generators || opts.engine) && opts.lazyThenables ;
        // Because we create functions (and scopes), we need all declarations before use
        blockifyArrows(ast);
        hoistDeclarations(ast);
        // All TryCatch blocks need a name so we can (if necessary) find out what the enclosing catch routine is called
        labelTryCatch(ast);
        // Convert async functions and their contained returns & throws
        asyncDefine(ast);
        asyncDefineMethod(ast);
        // Loops are asynchronized in an odd way - the loop is turned into a function that is
        // invoked through tail recursion OR callback. They are like the inner functions of
        // async functions to allow for completion and throwing
        (useLazyLoops?asyncLoops_1:Nothing)(ast);
        // Handle the various JS control flow keywords by splitting into continuations that could
        // be invoked asynchronously
        mapLogicalOp(ast);
        mapCondOp(ast);
        walkDown(ast, [mapTryCatch,(useLazyLoops?Nothing:mapLoops),mapIfStmt,mapSwitch,mapBlock]);
        // Map awaits by creating continuations and passing them into the async resolver
        asyncAwait(ast, awaitFlag);
        exposeCompilerOpts(ast);
        // Remove guff generated by transpiling
        cleanCode(ast);
    }

    /* Create a 'continuation' - a block of statements that have been hoisted
     * into a named function so they can be invoked conditionally or asynchronously */
    function makeContinuation(name, body) {
        var ctn = {
            $continuation: true,
            type: name?'FunctionDeclaration':'FunctionExpression',
                id: name?typeof name==="string"?ident(name):name:undefined,
                    params: [],
                    body: {
                        type: 'BlockStatement',
                        body: cloneNode(body)
                    }
        };
        if (name) {
            continuations[name] = {
                def: ctn
            };
        }
        return ctn;
    }

    /* Generate an expression AST the immediate invokes the specified async function, e.g.
     *      (await ((async function(){ ...body... })()))
     */
    function internalIIAFE(body) {
        return {
            type: 'AwaitExpression',
            argument: asyncDefine({
                "type": "FunctionExpression",
                "generator": false,
                "expression": false,
                "async": true,
                "params": [],
                "body": {
                    "type": "BlockStatement",
                    "body": body
                }
            }).body.body[0].argument
        }
    }

    /* Used to invoke a 'continuation' - a function that represents
     * a block of statements lifted out so they can be labelled (as
     * a function definition) to be invoked via multiple execution
     * paths - either conditional or asynchronous. Since 'this' existed
     * in the original scope of the statements, the continuation function
     * must also have the correct 'this'.*/
    function thisCall(name, args) {
        if (typeof name === 'string')
            name = ident(name);
        var n = parser.part("$0.call($1)",[name,[{"type": "ThisExpression"}].concat(args || [])]).expr ;
        name.$thisCall = n;
        n.$thisCallName = name.name;
        return n;
    }
    function returnThisCall(name,args) {
        return {
            type:'ReturnStatement',
            argument: thisCall(name,args)
        }
    }

    function deferredFinally(node, expr) {
        return {
            "type": "CallExpression",
            "callee": ident(node.$seh + "Finally"),
            "arguments": expr ? [expr] : []
        };
    }

    /**
     * returnMapper is an Uglify2 transformer that is used to change statements such as:
     *     return some-expression ;
     * into
     *     return $return(some-expression) ;
     * for the current scope only -i.e. returns nested in inner functions are NOT modified.
     *
     * This allows us to capture a normal "return" statement and actually implement it
     * by calling the locally-scoped function $return()
     */
    function mapReturns(n, path) {
        if (Array.isArray(n)) {
            return n.map(function (m) {
                return mapReturns(m, path);
            });
        }
        var lambdaNesting = 0;
        var tryNesting = 0 ;
        return parser.treeWalker(n, function (node, descend, path) {
            if (node.type === 'ReturnStatement' && !node.$mapped) {
                if (lambdaNesting > 0) {
                    if (!examine(node).isAsync) {
                        return descend(node);
                    }
                    delete node.async;
                }
                /* NB: There is a special case where we do a REAL return to allow for chained async-calls and synchronous returns
                 *
                 * The selected syntax for this is:
                 *   return void (expr) ;
                 * which is mapped to:
                 *   return (expr) ;
                 *
                 * Note that the parenthesis are necessary in the case of anything except a single symbol as "void" binds to
                 * values before operator. In the case where we REALLY want to return undefined to the callback, a simple
                 * "return" or "return undefined" works.
                 *
                 * There is an argument for only allowing this exception in es7 mode, as Promises and generators might (one day)
                 * get their own cancellation method.
                 * */
                node.$mapped = true;
                if (examine(node.argument).isUnaryExpression && node.argument.operator === "void") {
                    node.argument = node.argument.argument;
                } else {
                    node.argument = {
                        "type": "CallExpression",
                        callee: getExit(path, [opts]).$return,
                        "arguments": node.argument ? [node.argument] : []
                    };
                }
                return;
            } else if (node.type === 'ThrowStatement') {
                var isAsync = examine(node).isAsync ;
                if (lambdaNesting > 0) {
                    if (!isAsync) {
                        return descend(node);
                    }
                    delete node.async;
                }
                if (!isAsync && tryNesting) {
                    descend() ;
                } else {
                  node.type = 'ReturnStatement';
                  node.$mapped = true;
                  node.argument = {
                      type: 'CallExpression',
                      callee: getExit(path, [opts]).$error,
                      arguments: [node.argument]
                  };
                }
                return;
            } else if (node.type === 'TryStatement') {
              tryNesting++;
              descend(node);
              tryNesting--;
              return;
            } else if (examine(node).isFunction) {
                lambdaNesting++;
                descend(node);
                lambdaNesting--;
                return;
            } else {
                descend(node);
                return;
            }
        }, path);
    }

    /*
    To implement conditional execution, a?b:c is mapped to

      await (async function(){ if (a) return b ; return c })

      Note that 'await (async function(){})()' can be optimized to a Thenable since no args are passed
   */
    function mapCondOp(ast, state) {
        if (Array.isArray(ast))
            return ast.map(function (n) {
            return mapCondOp(n, state);
        });
        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (node.type === 'ConditionalExpression' && (containsAwait(node.alternate) || containsAwait(node.consequent))) {
                var z = ident(generateSymbol("condOp"));
                var xform = internalIIAFE(parser.part("if ($0) return $1 ; return $2",[node.test,node.consequent,node.alternate]).body);
                coerce(node, xform);
            }
        }, state);
        return ast;
    }

    /*
      To implement conditional execution, logical operators with an awaited RHS are mapped thus:

        Translate a || b into await (async function Or(){ var z ; if (!(z=a)) z=b ; return z })
        Translate a && b into await (async function And(){ var z ; if (z=a) z=b ; return z })

        Note that 'await (async function(){})()' can be optimized to a Thenable since no args are passed
     */
    function mapLogicalOp(ast, state) {
        if (Array.isArray(ast))
            return ast.map(function (n) {
            return mapLogicalOp(n, state);
        });
        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (node.type === 'LogicalExpression' && containsAwait(node.right)) {
                var codeFrag;
                var z = ident(generateSymbol("logical" + (node.operator === '&&' ? "And" : "Or")));

                if (node.operator === '||') {
                    codeFrag = "var $0; if (!($0 = $1)) {$0 = $2} return $0" ;
                } else if (node.operator === '&&') {
                    codeFrag = "var $0; if ($0 = $1) {$0 = $2} return $0" ;
                } else
                    throw new Error(where(node) + "Illegal logical operator: "+node.operator);

                coerce(node, internalIIAFE(parser.part(codeFrag,[z,node.left, node.right]).body));
            }
        }, state);
        return ast;
    }

    function mapBlock(block, path, down) {
        if (block.type !== "SwitchCase" && examine(block).isBlockStatement) {
            var idx = 0 ;
            while (idx < block.body.length) {
                var node = block.body[idx] ;
                if (node.type !== "SwitchCase" && examine(node).isBlockStatement) {
                    var blockScoped = containsBlockScopedDeclarations(node.body) ;
                    if (!blockScoped) {
                        block.body.splice.apply(block.body,[idx,1].concat(node.body));
                    } else {
                        if (containsAwaitInBlock(node)) {
                            var symName = generateSymbol(node);
                            var deferredCode = block.body.splice(idx + 1, block.body.length - (idx + 1));
                            if (deferredCode.length) {
                                var ctn = makeContinuation(symName, deferredCode);
                                delete continuations[symName] ;
                                node.body.push(returnThisCall(symName));
                                block.body.push(ctn) ;
                                idx++ ;
                            } else idx++ ;
                        } else idx++ ;
                    }
                } else idx++ ;
            }
        }
    }

    /*
     * Translate:
  if (x) { y; } more... ;
     * into
  if (x) { y; return $more(); } function $more() { more... } $more() ;
     *
     * ...in case 'y' uses await, in which case we need to invoke $more() at the end of the
     * callback to continue execution after the case.
     */
    function mapIfStmt(ifStmt, path, down) {
        if (ifStmt.type === 'IfStatement' && containsAwait([ifStmt.consequent,ifStmt.alternate])) {
            var symName = generateSymbol(ifStmt);
            var ref = path[0];
            var synthBlock = {
                type: 'BlockStatement',
                body: [ifStmt]
            };
            if ('index' in ref) {
                var idx = ref.index;
                var deferredCode = ref.parent[ref.field].splice(idx + 1, ref.parent[ref.field].length - (idx + 1));
                ref.replace(synthBlock);
                if (deferredCode.length) {
                    var call = returnThisCall(symName);
                    synthBlock.body.push(down(makeContinuation(symName, deferredCode)));
                    [ifStmt.consequent,ifStmt.alternate].forEach(function (cond) {
                        if (!cond)
                            return;
                        var blockEnd;
                        if (!examine(cond).isBlockStatement)
                            blockEnd = cond;
                         else
                            blockEnd = cond.body[cond.body.length - 1];
                        if (!(blockEnd && blockEnd.type === 'ReturnStatement')) {
                            if (!(cond.type === 'BlockStatement')) {
                                coerce(cond, {
                                    type: 'BlockStatement',
                                    body: [cloneNode(cond)]
                                });
                            }
                            cond.$deferred = true;
                            cond.body.push(cloneNode(call));
                        }
                        down(cond);
                    });
                    // If both blocks are transformed, the trailing call to $post_if()
                    // can be omitted as it'll be unreachable via a synchronous path
                    if (!(ifStmt.consequent && ifStmt.alternate && ifStmt.consequent.$deferred && ifStmt.alternate.$deferred))
                        synthBlock.body.push(cloneNode(call));
                }
            } else {
                ref.parent[ref.field] = synthBlock;
            }
        }
    }

    function mapSwitch(switchStmt, path, down) {
        if (!switchStmt.$switched && switchStmt.type === 'SwitchStatement' && containsAwait(switchStmt.cases)) {
            switchStmt.$switched = true;
            var symName, deferred, deferredCode, ref = path[0];
            if ('index' in ref) {
                var j = ref.index + 1;
                deferredCode = ref.parent[ref.field].splice(j, ref.parent[ref.field].length - j);
                if (deferredCode.length && deferredCode[deferredCode.length - 1].type === 'BreakStatement')
                    ref.parent[ref.field].push(deferredCode.pop());
                symName = generateSymbol(switchStmt);
                deferred = returnThisCall(symName);
                ref.parent[ref.field].unshift(makeContinuation(symName, deferredCode));
                ref.parent[ref.field].push(cloneNode(deferred));
            }
            // Now transform each case so that 'break' looks like return <deferred>
            switchStmt.cases.forEach(function (caseStmt, idx) {
                if (!(caseStmt.type === 'SwitchCase')) {
                    throw new Error("switch contains non-case/default statement: " + caseStmt.type);
                }
                if (containsAwait(caseStmt.consequent)) {
                    var end = caseStmt.consequent[caseStmt.consequent.length - 1];
                    if (end.type === 'BreakStatement') {
                        caseStmt.consequent[caseStmt.consequent.length - 1] = cloneNode(deferred) ;
                    } else if (end.type === 'ReturnStatement' || end.type === 'ThrowStatement') {} else {
                        // Do nothing - block ends in return or throw
                        logger(where(caseStmt) + "switch-case fall-through not supported - added break. See https://github.com/MatAtBread/nodent#differences-from-the-es7-specification");
                        caseStmt.consequent.push(cloneNode(deferred));
                    }
                }
            });
            return true;
        }
    }

    function isExitStatement(n) {
        return n.type==='ReturnStatement' || n.type==='ThrowStatement'
    }
    /* Give unique names to TryCatch blocks */
    function labelTryCatch(ast,engineMode) {
        parser.treeWalker(ast, function (node, descend, path) {
            if (node.type === 'TryStatement' && !node.$seh) {
                if (!examine(path[0].parent).isBlockStatement) {
                  path[0].parent[path[0].field] = {
                    type:'BlockStatement',
                    body:[node]
                  } ;
                }
                // Every try-catch needs a name, so asyncDefine/asyncAwait knows who's handling errors
                node.$seh = generateSymbol("Try") + "_";
                node.$containedAwait = !!containsAwait(node);
                node.$finallyExit = node.finalizer && inAsync(path) && !!contains(node.finalizer.body,isExitStatement) ;

                if (node.$containedAwait || node.$finallyExit) {
                    node.$needsMapping = engineMode? !node.$finallyExit : true ;
                    var parent = getExit(path, [opts]);
                    if (node.finalizer && !node.handler) {
                        // We have a finally, but no 'catch'. Create the default catch clause 'catch(_ex) { throw _ex }'
                        var exSym = ident(generateSymbol("exception"));
                        node.handler = {
                            "type": "CatchClause",
                            "param": exSym,
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "ThrowStatement",
                                    "argument": exSym
                                }]
                            }
                        };
                    }
                    if (!node.handler && !node.finalizer) {
                        var ex = new SyntaxError(where(node.value) + "try requires catch and/or finally clause", pr.filename, node.start);
                        ex.pos = node.start;
                        ex.loc = node.loc.start;
                        throw ex;
                    }
                    if (node.finalizer) {
                        setExit(node.block, {
                            $error: node.$seh + "Catch",
                            $return: deferredFinally(node, parent.$return)
                        });
                        setExit(node.handler, {
                            $error: deferredFinally(node, parent.$error),
                            $return: deferredFinally(node, parent.$return)
                        });
                    } else {
                        setExit(node.block, {
                            $error: node.$seh + "Catch",
                            $return: parent.$return
                        });
                    }
                }
            }
            descend();
        });
        return ast;
    }

    function afterDirectives(body,nodes) {
        for (var i=0; i<body.length; i++) {
            if (examine(body[i]).isDirective)
                continue ;
            body.splice.apply(body,[i,0].concat(nodes)) ;
            return ;
        }
        body.splice.apply(body,[body.length,0].concat(nodes)) ;
    }

    function inAsync(path) {
        for (var i=0; i<path.length; i++)
            if (examine(path[i].self).isFunction)
                return path[i].self.async || path[i].self.$wasAsync ;
        return false ;
    }

    function mapTryCatch(node, path, down) {
        if (node.$needsMapping) {
            var continuation, ctnName, catchBody;
            var ref = path[0];
            if ('index' in ref) {
                var i = ref.index + 1;
                var afterTry = ref.parent[ref.field].splice(i, ref.parent[ref.field].length - i);
                if (afterTry.length) {
                    ctnName = node.$seh + "Post";
                    var afterContinuation = down(makeBoundFn(ctnName, afterTry, [], getExit(path, [opts]).$error));
                    ref.parent[ref.field].splice(ref.index,0,afterContinuation);
                    continuation = parser.part("return $0()",
                        [node.finalizer ? deferredFinally(node, ident(ctnName)) : ident(ctnName)]).body[0] ;
                } else if (node.finalizer) {
                    continuation = returnThisCall(deferredFinally(node));
                }
            } else {
                throw new Error(pr.filename + " - malformed try/catch blocks");
            }
            node.$mapped = true;
            if (continuation) {
                node.block.body.push(cloneNode(continuation));
                node.handler.body.body.push(cloneNode(continuation));
            }
            var binding = getExit(path, [opts]);
            if (node.handler) {
                var symCatch = ident(node.$seh + "Catch");
                catchBody = cloneNode(node.handler.body);
                var catcher = makeBoundFn(symCatch.name, catchBody, [cloneNode(node.handler.param)], node.finalizer ? deferredFinally(node, binding.$error) : binding.$error);
                node.handler.body.body = [{
                    type: 'CallExpression',
                    callee: symCatch,
                    arguments: [cloneNode(node.handler.param)]
                }];
                ref.parent[ref.field].splice(ref.index,0,catcher) ;
            }
            if (node.finalizer) {
                down(node.finalizer) ;
                var finalParams = {
                    exit:ident(node.$seh + "Exit"),
                    value:ident(node.$seh + "Value"),
                    body:cloneNode(node.finalizer.body),
                } ;

                var chainFinalize = parser.part(
                    "(function ($value) {                                      "+
                    "       $:body;                                           "+
                    "       return $exit && ($exit.call(this, $value));        "+
                    "   })",finalParams).expr ;

                var finalizer = {
                    type: 'VariableDeclaration',
                    kind: 'var',
                    declarations: [{
                        type: "VariableDeclarator",
                        id: ident(node.$seh + "Finally"),
                        init: bindAsync({
                            type:'FunctionExpression',
                            params:[finalParams.exit],
                            id:null,
                            body:{
                                type:'BlockStatement',
                                body:[{
                                    type: 'ReturnStatement',
                                    argument: bindAsync(chainFinalize,binding.$error)
                                }]
                            }
                        })
                    }]
                } ;

                afterDirectives(ref.parent[ref.field],[finalizer]);
                var callFinally = parser.part("return $0()",
                    [node.finalizer ? deferredFinally(node, ident(ctnName)) : ident(ctnName)]).body[0] ;
                catchBody.body[catchBody.length - 1] = callFinally;
                node.block.body[node.block.body.length - 1] = callFinally;
                delete node.finalizer;
            }
        }
    }

    function walkDown(ast, mappers, state) {
        var walked = [];

        function closedWalk(ast,state) {
            return parser.treeWalker(ast, function (node, descend, path) {
                function walkDownSubtree(node) {
                    return closedWalk(node, path);
                }

                if (walked.indexOf(node) < 0) {
                    walked.push(node) ;
                    mappers.forEach(function (m) {
                        m(node, path, walkDownSubtree);
                    });
                }
                descend();
                return;
            }, state);
        }

        closedWalk(ast,state)
        return ast ;
    }

    function asyncAwait(ast, inAsync, parentCatcher) {
        parser.treeWalker(ast, function (node, descend, path) {
            if (node.type == 'IfStatement') {
                if (node.consequent.type != 'BlockStatement' && containsAwait(node.consequent))
                    node.consequent = {
                    type: 'BlockStatement',
                    body: [node.consequent]
                };
                if (node.alternate && node.alternate.type != 'BlockStatement' && containsAwait(node.alternate))
                    node.alternate = {
                    type: 'BlockStatement',
                    body: [node.alternate]
                };
            }
            descend();
            if (examine(node).isAwait) {
                var loc = node.loc;
                /* Warn if this await expression is not inside an async function, as the return
                 * will depend on the Thenable implementation, and references to $return might
                 * not resolve to anything */
                inAsync = inAsync || path.some(function (ancestor) {
                    return ancestor.self && ancestor.self.$wasAsync;
                });
                if (!inAsync || inAsync === "warn") {
                    var errMsg = where(node) + "'await' used inside non-async function. ";
                    if (opts.promises)
                        errMsg += "'return' value Promise runtime-specific";
                     else
                        errMsg += "'return' value from await is synchronous";
                    logger(errMsg + ". See https://github.com/MatAtBread/nodent#differences-from-the-es7-specification");
                }
                var parent = path[0].parent;
                if (parent.type === 'LogicalExpression' && parent.right === node) {
                    logger(where(node.argument) + "'" + printNode(parent) + "' on right of " + parent.operator + " will always evaluate '" + printNode(node.argument) + "'");
                }
                if (parent.type === 'ConditionalExpression' && parent.test !== node) {
                    logger(where(node.argument) + "'" + printNode(parent) + "' will always evaluate '" + printNode(node.argument) + "'");
                }
                var result = ident(generateSymbol("await"));
                var expr = cloneNode(node.argument);
                coerce(node, result);
                // Find the statement containing this await expression (and it's parent)
                var stmt, body;
                for (var n = 1;n < path.length; n++) {
                    if (body = examine(path[n].self).isBlockStatement) {
                        stmt = path[n - 1];
                        break;
                    }
                }
                if (!stmt)
                    throw new Error(where(node) + "Illegal await not contained in a statement");
                var containingExits = getExit(path, [parentCatcher,opts]);
                var i = stmt.index;
                var callback, callBack = body.splice(i, body.length - i).slice(1);
                var returner;
                // If stmt is of the form 'return fn(result.name)', just replace it a
                // reference to 'fn'.
                if (stmt.self.type === 'ReturnStatement' && stmt.self.argument.type === 'CallExpression' && stmt.self.argument.arguments.length === 1 && stmt.self.argument.arguments[0].name === result.name) {
                    returner = (callback = stmt.self.argument.callee);
                // If stmt is only a reference to the result, suppress the result
                // reference as it does nothing
                } else if (!(stmt.self.type === 'Identifier' || stmt.self.name === result.name || stmt.self.type === 'ExpressionStatement' && stmt.self.expression.type === 'Identifier' && stmt.self.expression.name === result.name)) {
                    callBack.unshift(stmt.self);
                    callback = {
                        type: 'FunctionExpression',
                        params: [cloneNode(result)],
                        body: asyncAwait({
                            type: 'BlockStatement',
                            body: cloneNode(callBack)
                        }, inAsync, containingExits)
                    };
                } else {
                    if (callBack.length)
                        callback = {
                        type: 'FunctionExpression',
                        params: [cloneNode(result)],
                        body: asyncAwait({
                            type: 'BlockStatement',
                            body: cloneNode(callBack)
                        }, inAsync, containingExits)
                    };
                     else {
                        callback = {
                            type: 'FunctionExpression',
                            params: [],
                            body: {
                                type: 'BlockStatement',
                                body: []
                            }
                        };
                    }
                }
                // Wrap the callback statement(s) in a Block and transform them
                if (!returner) {
                    if (callback) {
                        returner = bindAsync(callback,containingExits.$error) ;
                    } else {
                        returner = {
                            type: 'FunctionExpression',
                            params: [],
                            body: {
                                type: 'BlockStatement',
                                body: []
                            }
                        };
                    }
                }
                if (opts.wrapAwait) {
                    expr = {
                        type: 'CallExpression',
                        arguments: [expr],
                        callee: (opts.promises || opts.generators)?{
                            type: 'MemberExpression',
                            object: ident('Promise'),
                            property: ident('resolve')
                        }:{
                            // ES7 makeThenable
                            type: 'MemberExpression',
                            object: ident('Object'),
                            property: ident('$makeThenable')
                        }
                    };
                }
                var exitCall = {
                    type: 'CallExpression',
                    callee: {
                        type: 'MemberExpression',
                        object: expr,
                        property: ident('then', loc),
                        computed: false
                    },
                    arguments: [returner,containingExits.$error]
                };
                body.push({
                    loc: loc,
                    type: 'ReturnStatement',
                    argument: exitCall
                });
            }
            return true;
        });
        return ast;
    }

    // Transform a for..in into it's iterative equivalent
    function transformForIn(node, path) {
        var label = node.$label ;
        delete node.$label ;

        var idx = ident(generateSymbol("idx"))
        var inArray = ident(generateSymbol("in"));
        var declVars = parser.part("var $0,$1 = [];for ($0 in $2) $1.push($0)",[idx,inArray,node.right]).body ;
        var loop = parser.part("for ($0; $1.length;){ $2 = $1.shift(); $:3 ; }",[
            node.left,
            inArray,
            node.left.type === 'VariableDeclaration' ? node.left.declarations[0].id : node.left,
            node.body]).body[0] ;
        loop.$label = label ;
        for (var b=0; b<path.length; b++) {
            if (examine(path[b].parent).isBlockStatement) {
                path[b].parent[path[b].field].splice(path[b].index,0,declVars[0],declVars[1]) ;
                break ;
            }
        }
        coerce(node,loop) ;
    }

    // Transform a for..of into it's iterative equivalent
    function iterizeForOf(node, path) {
        if (node.body.type !== 'BlockStatement') {
            node.body = {
                type: 'BlockStatement',
                body: [node.body]
            };
        }
        var index, iterator, initIterator = parser.part("[$0[Symbol.iterator]()]",[node.right]).expr;

        if (node.left.type === 'VariableDeclaration') {
            if (node.left.kind==='const')
                node.left.kind = 'let' ;

            index = node.left.declarations[0].id ;
            var decls = getDeclNames(node.left.declarations[0].id) ;
            iterator = ident(generateSymbol("iterator_" + decls.join('_')));

            node.left.declarations = decls.map(function(name){
                return {
                    type: "VariableDeclarator",
                    id: ident(name)
                } ;
            }) ;
            node.left.declarations.push({
                type: "VariableDeclarator",
                id: iterator,
                init: initIterator
            });
            node.init = node.left;
        } else {
            index = node.left;
            iterator = ident(generateSymbol("iterator_" + index.name));
            var declaration = {
                type: 'VariableDeclaration',
                kind: 'var',
                declarations: [{
                    type: "VariableDeclarator",
                    id: iterator,
                    init: initIterator
                }]
            };
            node.init = declaration;
        }
        node.type = 'ForStatement';
        node.test = parser.part("!($0[1] = $0[0].next()).done && (($1 = $0[1].value) || true)",[iterator,index]).expr ;
        delete node.left;
        delete node.right;
    }

    /* Map loops */
    /* As of v3.0.0 loops are asynchronized via a trampoline to prevent stack overflow in big loops with no actionable awaits. */
    function mapLoops(node, path, down) {
        var depth = node.$depth ;
        if (node.type === 'ForInStatement' && containsAwait(node)) {
          transformForIn(node, path) ;
        } else if (node.type === 'ForOfStatement' && containsAwait(node)) {
          iterizeForOf(node, path);
        }

        // Are we inside a loop that has already been asynchronized and is labelled?
        var inAsyncLoop = path.some(function(p){
            return ('$label' in p.self && p.self.type==='ForStatement' && p.self.$mapped) ;
        }) ;

        // Check if the loop contains an await, or a labelled exit if we're inside an async loop
        function mappableLoop(n){
            return (n.type==='AwaitExpression' && !n.$hidden)
                || (inAsyncLoop && (n.type==='BreakStatement'|| n.type==='ContinueStatement') && n.label)
        };

        if (!node.$mapped && examine(node).isLoop && contains(node,mappableLoop)) {
          path[0].self.$mapped = true ;
          var p ;
          var mapped = [] ;
          var init = node.init;
          var test = node.test || literal(true);
          var step = node.update;
          var body = node.body;

          if (step) {
            step = {
              type:'ExpressionStatement',
              expression: step
            } ;
          }

          if (init) {
            if (!examine(init).isStatement) {
              init = {
                type: 'ExpressionStatement',
                expression: init
              };
            }
            mapped.push(init) ;
          }

          var ref, label ;
          if (node.$label) {
            label = node.$label.name ;
            ref = path[1] ;
          } else {
            label = generatedSymbol++ ;
            ref = path[0] ;
          }

          label = opts.generatedSymbolPrefix + "Loop_" + label;
          var idTrampoline = ident(label + "_trampoline") ;
          var idIter = ident(label) ;
          var idStep = step ? ident(label + "_step") : idIter ;
          var idContinuation  = ident(label + "_exit") ;
          var idBounce = ident("q") ;
          var idCatchParam = ident("$exception") ;
          var continuation, deferredCode ;

          if ('index' in ref) {
            var idx = ref.index;
            deferredCode = ref.parent[ref.field].splice(idx + 1, ref.parent[ref.field].length - (idx + 1));
          } else {
            deferredCode = [] ;
          }

          continuation = makeContinuation(idContinuation, deferredCode) ;
          var returnIter = {
            "type": "ReturnStatement",
            "argument": idIter
          } ;

          var returnStep = {
              "type": "ReturnStatement",
              "argument": idStep
          } ;

          var returnBreak = {
              type: 'ReturnStatement',
              argument: {
                  "type": "ArrayExpression",
                  "elements":[literal(1)]
              }
          };

          parser.treeWalker(body, function mapExits(n, descend, subpath) {
              if (examine(n).isFunction || examine(n).isLoop) {
                  return true;
              } else if (n.type === 'BreakStatement' || n.type === 'ContinueStatement') {
                  if (n.label) {
                      var labelStack = subpath.filter(function(p){
                          return '$label' in p.self
                      }).map(function(p,idx){
                          return p.self.$label && p.self.$label.name
                      }) ;

                      // Work out how many loops to exit by examining subpath.
                      var loops = [] ;
                      for (var l=0; l<labelStack.length; l++) {
                          if (labelStack[l] === n.label.name) {
                              if (n.type === 'BreakStatement')
                                  loops.push(literal(1)) ;
                              subpath[0].replace({
                                  type: 'ReturnStatement',
                                  argument: {
                                      "type": "ArrayExpression",
                                      "elements":loops.reverse()
                                  }
                              }) ;
                              break ;
                          }
                          loops.push(literal(0)) ;
                      }
                  } else {
                      if (n.type === 'BreakStatement')
                          subpath[0].replace(returnBreak) ;
                      else // continue;
                          subpath[0].replace(returnStep) ;
                  }
              } else {
                descend();
              }
          },path) ;

          if (body.type === 'BlockStatement')
            body = body.body.slice(0) ;
          else
            body = [body] ;

          if (node.type==='DoWhileStatement') {
            body = body.concat({
              "type": "IfStatement",
              "test": {
                type:'UnaryExpression',
                argument:test,
                prefix:true,
                operator:'!'
              },
              "consequent": returnBreak,
              alternate:returnStep
            }) ;
          } else {
            body = [{
              "type": "IfStatement",
              "test": test,
              "consequent": {
                "type": "BlockStatement",
                "body": body.concat(returnStep)
              },
              alternate:returnBreak
            }] ;
          }

          if (opts.noRuntime) {
              mapped.push({
                  "type": "VariableDeclaration",
                  "declarations": [{
                    "type": "VariableDeclarator",
                    "id": idTrampoline
                  }],
                  "kind": "var"
                }) ;
          }
          var invokeIterate ;
          var exit = getExit(path, [opts]).$error ;
          if (opts.noRuntime) {
            invokeIterate = parser.part(
                opts.es6target?
                    "($idTrampoline = ((q) => { "+
                    "    $$setMapped: while (q) { "+
                    "         if (q.then)  "+
                    (depth===1?
                    "             return void q.then($idTrampoline, $exit); ":
                    "             return q.then($idTrampoline, $exit); ")+
                    "         try { "+
                    "             if (q.pop)  "+
                    "                 if (q.length)  "+
                    "                 return q.pop() ? $idContinuation.call(this) : q; "+
                    "              else  "+
                    "                 q = $idStep; "+
                    "              else  "+
                    "                 q = q.call(this) "+
                    "          } catch (_exception) { "+
                    "             return $exit(_exception); "+
                    "          } "+
                    "     } "+
                    "}))($idIter)":
                    "($idTrampoline = (function (q) { "+
                    "    $$setMapped: while (q) { "+
                    "         if (q.then)  "+
                    (depth===1?
                    "             return void q.then($idTrampoline, $exit); ":
                    "             return q.then($idTrampoline, $exit); ")+
                    "         try { "+
                    "             if (q.pop)  "+
                    "                 if (q.length)  "+
                    "                 return q.pop() ? $idContinuation.call(this) : q; "+
                    "              else  "+
                    "                 q = $idStep; "+
                    "              else  "+
                    "                 q = q.call(this) "+
                    "          } catch (_exception) { "+
                    "             return $exit(_exception); "+
                    "          } "+
                    "     } "+
                    "}).bind(this))($idIter)",
                {
                     setMapped:function(n){ n.$mapped = true ; return n },
                     idTrampoline:idTrampoline,
                     exit:exit,
                     idIter:idIter,
                     idContinuation:idContinuation,
                     idStep:idStep
                }).expr ;
          } else {
            invokeIterate = parser.part("(Function.$0.trampoline(this,$1,$2,$3,$5)($4))",[
                genIdent.asyncbind,
                idContinuation,idStep,exit,
                idIter,
                literal(depth===1)
            ]).expr;
          }

          mapped.push({type:'ReturnStatement',argument:invokeIterate}) ;
          mapped.push({
              $label:node.$label,
              "type": "FunctionDeclaration",
              "id": idIter,
              "params": [],
              "body": {
                  "type": "BlockStatement",
                  "body": body
              }
          }) ;

          if (step) {
              mapped.push({
                  "type": "FunctionDeclaration",
                  id: idStep,
                  "params": [],
                  "body": {
                      "type": "BlockStatement",
                      "body": [ step,returnIter ]
                  }
              }) ;
          }

          if (init && init.type==='VariableDeclaration' && (init.kind==='let' || init.kind==='const')) {
              if (init.kind==='const')
                  init.kind = 'let' ;

              path[0].replace([{
                  type:'BlockStatement',
                  body:mapped.map(down)
              },down(continuation)]) ;
          } else {
              mapped.push(continuation) ;
              path[0].replace(mapped.map(down)) ;
          }
        }
    }

    /* Previous, recursive implementation for backwards compatibility */
    function asyncLoops_1(ast,state) {
        parser.treeWalker(ast, function (node, descend, path) {
            function mapContinue(label) {
                return {
                    type: 'ReturnStatement',
                    argument: {
                        type: 'UnaryExpression',
                        operator: 'void',
                        prefix: true,
                        argument: thisCall(label || symContinue)
                    }
                };
            };
            function mapExits(n, descend) {
                if (n.type === 'BreakStatement') {
                    coerce(n, cloneNode(mapBreak(n.label && opts.generatedSymbolPrefix + "Loop_" + n.label.name + "_exit")));
                } else if (n.type === 'ContinueStatement') {
                    coerce(n, cloneNode(mapContinue(n.label && opts.generatedSymbolPrefix + "Loop_" + n.label.name + "_next")));
                } else if (examine(n).isFunction) {
                    return true;
                }
                descend();
            }

            if (node.type === 'ForInStatement' && containsAwait(node)) {
                transformForIn(node, path) ;
            } else if (node.type === 'ForOfStatement' && containsAwait(node)) {
                iterizeForOf(node, path);
            }
            descend();
            var p;
            if (examine(node).isLoop && containsAwait(node)) {
                var init = node.init;
                var condition = node.test || literal(true);
                var step = node.update;
                var body = node.body;
                var loopUsesThis = containsThis(body) ;
                if (init) {
                    if (!examine(init).isStatement) {
                        init = {
                            type: 'ExpressionStatement',
                            expression: init
                        };
                    }
                }
                step = step && {
                    type: 'ExpressionStatement',
                    expression: step
                } ;
                body = examine(body).isBlockStatement ? cloneNode(body).body : [cloneNode(body)];
                var label = node.$label && node.$label.name ;
                label = "Loop_" + (label || generatedSymbol++);
                var symExit = opts.generatedSymbolPrefix + (label + "_exit");
                var symContinue = opts.generatedSymbolPrefix + (label + "_next");
                var loop = ident(opts.generatedSymbolPrefix + (label));
                // How to exit the loop
                var mapBreak = function (label) {
                    return {
                        type: 'ReturnStatement',
                        argument: {
                            type: 'UnaryExpression',
                            operator: 'void',
                            prefix: true,
                            argument: {
                                type: 'CallExpression',
                                callee: ident(label || symExit),
                                arguments: []
                            }
                        }
                    };
                };

                // How to continue the loop
                var defContinue = makeContinuation(symContinue, [{
                    type: 'ReturnStatement',
                    argument: {
                        type: 'CallExpression',
                        callee: loopUsesThis? bindAsync(loop):loop,
                        arguments: [ident(symExit),genIdent.error]
                    }
                }]);
                if (step)
                    defContinue.body.body.unshift(step);
                for (var i = 0;i < body.length; i++) {
                    parser.treeWalker(body[i], mapExits);
                }
                body.push(cloneNode(mapContinue()));
                var subCall = {
                    type: 'FunctionExpression',
                    id: loop,
                    params: [ident(symExit),genIdent.error],
                    body: {
                        type: 'BlockStatement',
                        body: [defContinue]
                    }
                };
                if (node.type === 'DoWhileStatement') {
                    defContinue.body.body = [{
                        type: 'IfStatement',
                        test: cloneNode(condition),
                        consequent: {
                            type: 'BlockStatement',
                            body: cloneNode(defContinue.body.body)
                        },
                        alternate: {
                            type: 'ReturnStatement',
                            argument: {
                                type: 'CallExpression',
                                callee: ident(symExit),
                                arguments: []
                            }
                        }
                    }];
                    subCall.body.body = [defContinue].concat(body);
                } else {
                    var nextTest = {
                        type: 'IfStatement',
                        test: cloneNode(condition),
                        consequent: {
                            type: 'BlockStatement',
                            body: body
                        },
                        alternate: cloneNode(mapBreak())
                    };
                    subCall.body.body.push(nextTest);
                }
                var replace = {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'AwaitExpression',
                        argument: bindAsync(subCall, literal(0))
                    }
                };

                if (init && init.type==='VariableDeclaration' && (init.kind==='let' || init.kind==='const')) {
                    if (init.kind==='const')
                        init.kind = 'let' ;
                    replace = {
                        type:'BlockStatement',
                        body:[cloneNode(init),replace]
                    };
                    init = null ;
                }

                for (p = 0; p < path.length; p++) {
                    var ref = path[p];
                    if ('index' in ref) {
                        if (init) {
                            ref.parent[ref.field].splice(ref.index, 1, cloneNode(init), replace);
                        } else {
                            ref.parent[ref.field][ref.index] = replace;
                        }
                        return true;
                    }
                }
            }
            return true;
        },state);
        return ast;
    }

    function containsAsyncExit(fn) {
        if (!examine(fn).isFunction) {
            throw new Error("Cannot examine non-Function node types for async exits") ;
        }

        return contains(fn.body,function(node){
            return ((node.type === 'Identifier' && (node.name === opts.$return || node.name === opts.$error))
                || (isExitStatement(node) && examine(node).isAsync)) ;
        },function(node){
            return !(examine(node).isFunction && (node.$wasAsync || examine(node).isAsync)) ;
        }) ;
    }

    // TODO: Hoist directives (as in asyncDefine)
    function asyncDefineMethod(ast) {
        return parser.treeWalker(ast, function (node, descend, path) {
            var transform = getMemberFunction(node);
            descend();
            if (!transform || !examine(transform).isAsync)
                return;
            if (node.kind == 'set') {
                var ex = new SyntaxError(where(transform) + "method 'async set' cannot be invoked", pr.filename, node.start);
                ex.pos = node.start;
                ex.loc = node.loc.start;
                throw ex;
            }

            transform.async = false;
            var usesArgs = replaceArguments(transform);
            if (!containsAsyncExit(transform) && (transform.body.body.length === 0 || transform.body.body[transform.body.body.length - 1].type !== 'ReturnStatement')) {
                transform.body.body.push({
                    type: 'ReturnStatement'
                });
            }
            var funcback = bindAsync(setExit({
                    type: 'FunctionExpression',
                    params: [genIdent.return,genIdent.error],
                    body: asyncDefineMethod(mapReturns(transform.body, path)),
                    $wasAsync: true
                }, opts),(opts.promises || opts.generators || opts.engine) ? null : literal(opts.lazyThenables?0:true) ) ;

            if (opts.promises) {
                transform.body = {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ReturnStatement',
                        argument: {
                            type: 'NewExpression',
                            callee: ident('Promise'),
                            arguments: [funcback]
                        }
                    }]
                };
            } else {
                transform.body = {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ReturnStatement',
                        argument: funcback
                    }]
                };
            }
            if (usesArgs) {
                afterDirectives(transform.body.body,[assign$Args]);
            }
        });
    }

    function asyncDefine(ast) {
        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (examine(node).isAsync && examine(node).isFunction) {
                var member ;
                if ((member = getMemberFunction(path[0].parent))
                    && examine(member).isAsync && path[0].parent.kind === 'get')  {
                    warnAsyncGetter(path[0].parent.key) ;
                }
                delete node.async;

                var usesArgs = replaceArguments(node);
                var fnBody = setExit({
                    type: 'FunctionExpression',
                    params: [genIdent.return,genIdent.error],
                    $wasAsync: true
                }, opts) ;
                var thisPath = [{self:fnBody}].concat(path) ;
                
                if (examine(node.body).isBlockStatement) {
                    if (!containsAsyncExit(node) && (node.body.body.length === 0 || node.body.body[node.body.body.length - 1].type !== 'ReturnStatement')) {
                        node.body.body.push({
                            type: 'ReturnStatement'
                        });
                    }
                    fnBody.body = {
                        type: 'BlockStatement',
                        body: node.body.body.map(function (sub) {
                            return mapReturns(sub, thisPath);
                        })
                    };
                } else {
                    fnBody.body = {
                        type: 'BlockStatement',
                        body: [mapReturns({
                            type: 'ReturnStatement',
                            argument: node.body
                        }, thisPath)]
                    };
                    node.expression = false;
                }

                fnBody = bindAsync(fnBody,(opts.promises || opts.generators || opts.engine) ? null : literal(opts.lazyThenables?0:true)) ;

                if (opts.promises) {
                    fnBody = {
                        type: 'NewExpression',
                        callee: ident('Promise'),
                        arguments: [fnBody]
                    };
                }
                fnBody = {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ReturnStatement',
                        loc: node.loc,
                        argument: fnBody
                    }]
                };
                if (usesArgs)
                    afterDirectives(fnBody.body,[assign$Args]);
                node.body = fnBody;
                return;
            }
        });
        return ast;
    }

    /*
     * Rewrite
      async function <name>?<argumentlist><body>
    to
      function <name>?<argumentlist>{ return function*() {<body>}.$asyncspawn(); }
     */
    // Like mapReturns, but ONLY for return/throw async
    function mapAsyncReturns(ast) {
        if (Array.isArray(ast)) {
            return ast.map(mapAsyncReturns);
        }
        var lambdaNesting = 0;
        return parser.treeWalker(ast, function (node, descend, path) {
            if ((node.type === 'ThrowStatement' || node.type === 'ReturnStatement') && !node.$mapped) {
                if (lambdaNesting > 0) {
                    if (examine(node).isAsync) {
                        delete node.async;
                        node.argument = {
                            "type": "CallExpression",
                            "callee": node.type === 'ThrowStatement' ? genIdent.error : genIdent.return,
                            "arguments": node.argument ? [node.argument] : []
                        };
                        node.type = 'ReturnStatement';
                        return;
                    }
                }
            } else if (examine(node).isFunction) {
                lambdaNesting++;
                descend(node);
                lambdaNesting--;
                return;
            }
            descend(node);
        });
    }

    function spawnBody(body, deferExit) {
        if (opts.noRuntime)
            throw new Error("Nodent: 'noRuntime' option only compatible with -promise and -engine modes") ;

        return parser.part("{ return (function*($return,$error){ $:body }).$asyncspawn(Promise,this) }",{
            'return':genIdent.return,
            error:genIdent.error,
            asyncspawn:genIdent.asyncspawn,
              body: mapAsyncReturns(body).concat(deferExit ? [{
                  type: 'ReturnStatement',
                  argument: genIdent.return
              }] : [])
        }).body[0] ;
    }

    function warnAsyncGetter(id) {
        if (!id.$asyncgetwarninig) {
            id.$asyncgetwarninig = true;
            logger(where(id) + "'async get "+printNode(id)+"(){...}' is non-standard. See https://github.com/MatAtBread/nodent#differences-from-the-es7-specification");
        }
    }

    function asyncSpawn(ast,engine) {
        function mapAwaits(ast,hide) {
            parser.treeWalker(ast, function (node, descend, path) {
                if (node !== ast && examine(node).isFunction)
                    return;
                if (examine(node).isAwait) {
                    if (hide) {
                        node.$hidden = true;
                        descend();
                    } else {
                        delete node.operator;
                        node.delegate = false;
                        node.type = 'YieldExpression';
                        descend();
                    }
                } else
                    descend();
            });
        }

        function promiseTransform(ast) {
            var promises = opts.promises;
            opts.promises = true;
            asyncTransforms(ast, true);
            opts.promises = promises;
        }

        function expandArrows(fn) {
            if (fn.body.type !== 'BlockStatement') {
                fn.body = {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ReturnStatement',
                        argument: fn.body
                    }]
                };
            }
            return fn;
        }

        function warnAsyncExit(exit, fn) {
            if (!fn.$asyncexitwarninig) {
                fn.$asyncexitwarninig = true;
                logger(where(exit) + "'async " + ({
                    ReturnStatement: 'return',
                    ThrowStatement: 'throw'
                })[exit.type] + "' not possible in "+(engine?'engine':'generator')+" mode. Using Promises for function at " + where(fn));
            }
        }

        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            var fn, exit, usesArgs;
            if (examine(node).isAsync && examine(node).isFunction) {
                var member ;
                if ((member = getMemberFunction(path[0].parent))
                    && examine(member).isAsync && path[0].parent.kind === 'get')  {
                    warnAsyncGetter(path[0].parent.key) ;
                }
                if (exit = containsAsyncExit(node)) {
                    // Do the Promise transform
                    warnAsyncExit(exit, node.body);
                    promiseTransform(node);
                } else if (!engine) {
                    fn = node;
                    delete fn.async;
                    usesArgs = replaceArguments(fn);
                    mapAwaits(fn,false);
                    fn = expandArrows(fn);
                    fn.body = spawnBody(fn.body.body, exit);
                    if (usesArgs)
                        afterDirectives(fn.body.body,[assign$Args]);
                    if (fn.id && path[0].parent.type === 'ExpressionStatement') {
                        fn.type = 'FunctionDeclaration';
                        path[1].replace(fn);
                    } else {
                        path[0].replace(fn);
                    }
                } else if (path[0].parent.kind !== 'get')
                    mapAwaits(node,true) ;
            } else if ((fn = getMemberFunction(node)) && examine(fn).isAsync) {
                if (exit = containsAsyncExit(fn)) {
                    // Do the Promise transform
                    warnAsyncExit(exit, fn);
                    promiseTransform(node);
                } else if (!engine || node.kind==='get') {
                    if (engine) {
                        promiseTransform(node) ;
                    } else {
                        node.async = false;
                        usesArgs = replaceArguments(fn);
                        mapAwaits(fn,false);
                        coerce(fn, expandArrows(fn));
                        fn.body = spawnBody(fn.body.body, exit);
                    }
                    if (usesArgs)
                        afterDirectives(fn.body.body,[assign$Args]);
                }
            }
        });

        // Map (and warn) about any out-of-scope awaits that are being
        // mapped using Promises.
        var st = cloneNode(opts);
        opts.engine = false;
        opts.generators = false;
        blockifyArrows(ast);
        hoistDeclarations(ast);
        labelTryCatch(ast,st.engine);
        mapLogicalOp(ast);
        mapCondOp(ast);
        walkDown(ast, [mapTryCatch,mapLoops,mapIfStmt,mapSwitch,mapBlock]);
        asyncAwait(ast, "warn");
        opts.engine = st.engine;
        opts.generators = st.generators;
        return ast;
    }

    /* Find all nodes within this scope matching the specified function */
    function scopedNodes(ast, matching, flat) {
        var matches = [];
        parser.treeWalker(ast, function (node, descend, path) {
            if (node === ast)
                return descend();
            if (matching(node, path)) {
                matches.push([].concat(path));
                return;
            }
            if (flat || examine(node).isScope) {
                return;
            }
            descend();
        });
        return matches;
    }

    function extractVars(vars,kind) {
        var varDecls = [];
        var duplicates = {} ;
        vars = vars.filter(function(v){ return v[0].parent.type !== 'ExportNamedDeclaration'}) ;
        if (vars.length) {
            var definitions = {};
            vars.forEach(function (path) {
                function addName(name) {
                    if (name in definitions) {
                        duplicates[name] = self.declarations[i] ;
                    } else {
                        definitions[name] = self.declarations[i] ;
                    }
                }

                var ref = path[0];
                var self = ref.self;
                var kind = self.kind ;
                var values = [];
                for (var i = 0;i < self.declarations.length; i++) {
                    var decl = self.declarations[i] ;
                    getDeclNames(decl.id).forEach(addName) ;
                    if (decl.init) {
                        var value = {
                            type: 'AssignmentExpression',
                            left: cloneNode(decl.id),
                            operator: '=',
                            right: cloneNode(decl.init)
                        };
                        values.push(value);
                    }
                }
                if (values.length == 0)
                    ref.remove();
                else {
                   var repl = (values.length > 1)?{type:'SequenceExpression',expressions:values} : values[0] ;
                   if (ref.parent.type.slice(0,3)!=='For')
                       repl = {type:'ExpressionStatement',expression:repl} ;
                   ref.replace(repl);
                }
            });

            var defs = Object.keys(definitions) ;
            if (defs.length) {
                defs = defs.map(function (name) {
                    return {
                        type: 'VariableDeclarator',
                        id: ident(name),
                        loc: definitions[name].loc,
                        start: definitions[name].start,
                        end: definitions[name].end
                    };
                });
                if (!varDecls[0] || varDecls[0].type !== 'VariableDeclaration') {
                    varDecls.unshift({
                        type: 'VariableDeclaration',
                        kind: kind,
                        declarations: defs
                    });
                } else {
                    varDecls[0].declarations = varDecls[0].declarations.concat(defs);
                }
            }
        }
        return { decls: varDecls, duplicates: duplicates } ;
    }

    function getDeclNames(id) {
        if (!id) return [] ;
        if (Array.isArray(id)) {
            return id.reduce(function(z,j){ return z.concat(getDeclNames(j.id))},[]) ;
        }
        switch (id.type) {
        case 'Identifier':
            return [id.name]  ;
        case 'AssignmentPattern':
            return getDeclNames(id.left);
        case 'ArrayPattern':
            return id.elements.reduce(function(z,e){ return z.concat(getDeclNames(e)) },[]) ;
        case 'ObjectPattern':
            return id.properties.reduce(function(z,e){ return z.concat(getDeclNames(e)) },[]) ;
        case 'ObjectProperty':
        case 'Property':
            return getDeclNames(id.value) ;
        case 'RestElement':
        case 'RestProperty':
            return getDeclNames(id.argument) ;
        }
    }

    function checkConstsNotAssigned(ast) {
        /* Ensure no consts are on the LHS of an AssignmentExpression */
        var names = {} ;

        function fail(node){
            logger(where(node) + "Possible assignment to 'const " + printNode(node)+"'");
        }

        function checkAssignable(target) {
            switch (target.type) {
            case 'Identifier':
                // Find the declaration of any names on the left
                if (names[target.name] === 'const') fail(target) ;
                break ;
            case 'ArrayPattern':
                target.elements.forEach(function(e){
                    if (names[e.name] === 'const') fail(e) ;
                }) ;
                break ;
            case 'ObjectPattern':
                target.properties.forEach(function(p){
                    if (names[p.key.name] === 'const') fail(p) ;
                }) ;
                break ;
            }
        }

        parser.treeWalker(ast, function (node, descend, path) {
            var body = examine(node).isBlockStatement ;
            if (body) {
                names = Object.create(names) ;

                for (var h=0; h<body.length; h++) {
                    if (body[h].type === 'VariableDeclaration') {
                        for (var i=0; i<body[h].declarations.length; i++) {
                            getDeclNames(body[h].declarations[i].id).forEach(function(name){
                                names[name] = body[h].kind ;
                            }) ;
                        }
                    }
                }
            }
            descend() ;

            if (node.type === 'AssignmentExpression')
                checkAssignable(node.left) ;
            else if (node.type === 'UpdateExpression')
                checkAssignable(node.argument) ;
            if (body)
                names = Object.getPrototypeOf(names) ;
        });
    }

    /* Move directives, vars and named functions to the top of their scope iff. the scope contains an 'await' */
    function hoistDeclarations(ast) {
      var sequences = {
        TemplateLiteral:function(x) { return x.expressions },
        NewExpression:function(x) { return x.arguments },
        CallExpression:function(x) { return x.arguments },
        SequenceExpression:function(x) { return x.expressions },
        ArrayExpression:function(x) { return x.elements },
        ObjectExpression:function(oe){ return oe.properties.map(function(p){ return p.value })}
      };
        /* Identify SequenceExpressions, Parameter lists and VariableDeclarators that contain assigments and split them up
        to ensure the correct evaluation order */

        function containsAssign(ast){
          return contains(ast, function(n){
              return n.type==='AssignmentExpression'
          });
        }

        parser.treeWalker(ast, function (node, descend, path) {
          var i ;
          descend() ;
          // Ensure assigments are evaluated before any await expressions, eg:
          // f(a=1, b = await a) --> a=1; f(a,b=await a)
          
          function moveAssignments(dest){
              if (assignments.length) {
                  dest.argument = {
                      type:'SequenceExpression',
                      expressions:assignments.map(function(a){
                          var b = cloneNode(a)
                          coerce(a,a.left);
                          return b ;
                      }).concat(dest.argument)
                  } ;
                  assignments = [] ;
                }
          }
          
          
          if (node.type in sequences && !node.$hoisted) {
            var expr = sequences[node.type](node) ;
            var assignments = [] ;
            var path ;
            for (i=0; i<expr.length;i++) {
              if (examine(expr[i]).isScope)
                  continue ;
              
              if (path = containsAwait(expr[i]))
                  moveAssignments(path[0].self) ;

              if (!containsAwait(expr.slice(i+1)))
                break ;

              if (path = containsAssign(expr[i]))
                assignments.push(path[0].self) ;
            }
          } else if (node.type === 'VariableDeclaration') {
            // If any of the VariableDeclarators contain an initial value and are followed by a VariableDeclarator
            // containing an await, split them up into multiple statements
            for (i=node.declarations.length-1; i>0; i--) {
              if (node.declarations[i] && node.declarations[i].init && containsAwait(node.declarations[i].init)) {
                var insert = {
                  type:'VariableDeclaration',
                  kind: node.kind,
                  declarations: node.declarations.splice(i)
                } ;
                var ref = path[0] ;
                if ('index' in ref) {
                  ref.parent[ref.field].splice(ref.index+1,0,insert) ;
                } else throw new Error("VariableDeclaration not in a block") ;
              }
            }
          }
        }) ;

        /* Hoist declarations */
        function isFreeVariable(kinds) {
            return function(n, path) {
                if (n.type === 'VariableDeclaration' && (n.kind = n.kind || 'var') && kinds.indexOf(n.kind)>=0) {
                    var p = path[0] ;
                    // Don't hoist the LHS of for (var/let/const _ of/in ... ; ;){}
                    if (p.field == "left" && (p.parent.type === 'ForInStatement' || p.parent.type === 'ForOfStatement'))
                        return false;

                    // Don't hoist the LHS of for (let/const _ = ... ; ;){}
                    if (p.field == "init" && p.parent.type === 'ForStatement' && (n.kind==="const" || n.kind==="let"))
                        return false;

                    return true;
                }
            }
        }

        function isHoistableFunction(n, path) {
            // YES: We're a named function, but not a continuation
            if (n.type==='FunctionDeclaration'  && n.id) {
                return examine(n).isAsync || !n.$continuation;
            }
            // No, we're not a hoistable function
            return false;
        }

        checkConstsNotAssigned(ast) ;

        var inStrictBody = false ;
        parser.treeWalker(ast, function (node, descend, path) {
            var prevScope = inStrictBody ;
            inStrictBody = inStrictBody || isStrict(node) ;

            if (examine(node).isBlockStatement) {
                if (containsAwait(node)) {
                    // For this scope/block, find all the hoistable functions, vars and directives
                    var isScope = !path[0].parent || examine(path[0].parent).isScope ;

                    /* 'const' is highly problematic. In early version of Chrome (Node 0.10, 4.x, 5.x) non-standard behaviour:
                     *
                     * Node             scope           multiple-decls
                     * v0.1x            function        SyntaxError
                     * v0.1x strict     SyntaxError     SyntaxError
                     * 4/5.x            function        SyntaxError
                     * 4/5.x strict     block           ok (SyntaxError on duplicate in block)
                     * 6.x  (as 4/5.x strict)
                     *
                     * To make these non-standard behaviours work, we treat a single declaration of a const identifier as requiring function scope (which works everywhere),
                     * declare as a 'var' and initialize inline.
                     * We treat multiple declarations as block-scoped, and let the engine work it out. To make consts blocked-scope, we use 'const' where possible (i.e. before
                     * any await expressions), or declare as 'let' after an await. This breaks in non-strict mode in Node 4/5, as 'let' requires strict mode.
                     *
                     * In summary, what this means is:
                     * - const's with a single declaration in the current scope (NOT block) should be hoisted to function level, and defined as 'var'
                     * - const's with duplicate declarations in the current scope (NOT block) should be hoisted to block level, and defined as 'let'
                     */

                    var directives, consts, vars, lets, functions ;
                    if (isScope) {
                        consts = scopedNodes(node, isFreeVariable(['const']),false);
                        var names = {}, duplicates = {} ;

                        // Work out which const identifiers are duplicates
                        // Ones that are only declared once can simply be treated as vars, whereas
                        // identifiers that are declared multiple times have block-scope and are
                        // only valid in node 6 or in strict mode on node 4/5
                        consts.forEach(function(d){
                            d[0].self.declarations.forEach(function(e){
                                getDeclNames(e.id).forEach(function(n){
                                    if (names[n] || duplicates[n]) {
                                        delete names[n] ;
                                        duplicates[n] = e ;
                                    } else {
                                        names[n] = e ;
                                    }
                                }) ;
                            }) ;
                        }) ;

                        // Change all the declarations into assignments, since consts are always initialized
                        consts.forEach(function(d){
                            for (var depth=0; depth<d.length; depth++)
                                if (examine(d[depth].parent).isBlockStatement)
                                    break ;

                            var ref = d[depth] ;
                            ref.append({
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'SequenceExpression',
                                    expressions: d[0].self.declarations.map(function (d) {
                                        var a = {
                                            type: 'AssignmentExpression',
                                            operator: '=',
                                            left: d.id,
                                            right: d.init
                                        };
                                        d.init = null ;
                                        return a ;
                                    })
                                }
                            });
                            var ids = getDeclNames(d[0].self.declarations) ;
                            var decls = ids.filter(function(name){ return name in duplicates }) ;
                            if (decls.length) {
                                d[0].append({
                                    type:'VariableDeclaration',
                                    kind:'let',
                                    declarations: decls.map(function(name){
                                        return {
                                            type:'VariableDeclarator',
                                            id:ident(name)
                                        }
                                    })
                                }) ;
                            }

                            d[0].self.kind = 'var' ;
                            decls = ids.filter(function(name){ return name in names }) ;
                            if (decls.length) {
                                d[0].self.declarations = decls.map(function(name){
                                    return {
                                        type:'VariableDeclarator',
                                        id:ident(name)
                                    }
                                });
                            } else {
                              ref.remove() ;
                            }
                        }) ;
                        vars = scopedNodes(node, isFreeVariable(['var']),false);
                        lets = [] ;
                    } else {
                        lets = scopedNodes(node, isFreeVariable(['const']),true);
                    }
                    lets = lets.concat(scopedNodes(node, isFreeVariable(['let']),true));
                    directives = scopedNodes(node, function (n) { return examine(n).isDirective },true);
                    functions = scopedNodes(node, isHoistableFunction, inStrictBody);

                    vars = vars?extractVars(vars,'var'):{duplicates:{},decls:[]} ;
                    lets = lets?extractVars(lets,'let'):{duplicates:{},decls:[]} ;

                    Object.keys(vars.duplicates).forEach(function(id){
                        logger(where(vars.duplicates[id]) + "Duplicate declaration '" + printNode(vars.duplicates[id]) + "'");
                    }) ;
                    Object.keys(lets.duplicates).forEach(function(id){
                        logger(where(lets.duplicates[id]) + "Duplicate declaration '" + printNode(lets.duplicates[id]) + "'");
                    }) ;

                    functions = functions.map(function (path) {
                        var ref = path[0], symName;
                        // What is the name of this function (could be async, so check the expression if necessary),
                        // and should we remove and hoist, or reference and hoist?
                        if (examine(ref.self).isAsync) {
                            symName = ref.self.id.name;
                            // If we're actually a top-level async FunctionExpression, redeclare as a FunctionDeclaration
                            if (examine(ref.parent).isBlockStatement) {
                                ref.self.type = 'FunctionDeclaration';
                                ref.remove();
                                return ref.self;
                            }
                            // We're an async FunctionExpression
                            return ref.replace(ident(symName));
                        }
                        // We're just a vanilla FunctionDeclaration or FunctionExpression
                        symName = ref.self.id.name;
                        var movedFn = ref.self.type === 'FunctionDeclaration' ? ref.remove() : ref.replace(ident(symName));
                        return movedFn;
                    });

                    directives = directives.map(function (path) {
                        var ref = path[0];
                        return ref.remove();
                    });
                    if (directives.length || vars.decls.length || lets.decls.length || functions.length) {
                        node.body = directives.concat(vars.decls).concat(lets.decls).concat(functions).concat(node.body);
                    }
                }
                inStrictBody = prevScope ;
            }

            // Labeled blocks need to be treated as loops that exit on the first iteration if they contain awaits and labelled breaks
            if (node.type==='LabeledStatement' && node.body.type==='BlockStatement' && containsAwait(node.body) && contains(node.body,function(m){
		        	    return m.type === 'BreakStatement' && m.label
	        	})) {
          	    node.body.body.push({ type: 'BreakStatement' }) ;
                node.body = {
                    type: 'DoWhileStatement',
                    test: literal(0),
                    body: node.body
                };
            }
            
            descend();

            // It makes life easier if labeled loops have the label to hand, so we simply reference them here with a hidden $label
            // and keep a record of how nested the for loop is (since it's transformed top to bottom and counting during
            // transformation is therefore not possible
            if (node.type==='ForOfStatement' || node.type==='ForInStatement' || examine(node).isLoop) {
                var depth = 0 ;
                for (var n=0; n<path.length;n++)
                    if (path[n].self.type==='ForOfStatement' || path[n].self.type==='ForInStatement' || examine(path[n].self).isLoop)
                        depth += 1 ;
                    else if (examine(path[n].self).isFunction)
                        break ;

                node.$depth = depth ;
                if (path[0].parent.type==='LabeledStatement') {
                    node.$label = path[0].parent.label ;
                } else {
                    node.$label = null ;
                }
            }
            return true;
        });
        return ast;
    }

    function mapSupers(classNode, engine) {
        function superID() {
            return classNode.$superID = classNode.$superID || ident("$super$" + generatedSymbol++);
        }

        return function (method) {
            method = getMemberFunction(method);
            if (method && examine(method).isAsync && (!engine || method.kind === 'get' || contains(method,function(n){
              return (examine(n).isFunction && contains(n,function(n){
                return n.type==='Super'
              }) && contains(n,function(n){
                return n.async && (n.type==='ReturnStatement' || n.type==='ThrowStatement') ;
              }))
            },true))) {
                parser.treeWalker(method.body, function (node, descend, path) {
                    var r;
                    if (!examine(node).isClass) {
                        descend();
                        if (node.type === 'Super') {
                            if (path[0].parent.type === 'MemberExpression') {
                                if (path[1].parent.type === 'CallExpression' && path[1].field === 'callee') {
                                    // super[m](...)  maps to:  this.$superid(m).call(this,...)
                                    r = parser.part("this.$super($field).call(this,$args)",{
                                        'super':superID(),
                                        field:path[0].parent.computed ? path[0].parent.property:literal(path[0].parent.property.name),
                                        args:path[1].parent.arguments
                                    }).expr ;
                                    path[2].replace(r);
                                } else {
                                    // super[f],    maps to:  this.$superid(f)
                                    r = parser.part("this.$super($field)",{
                                        'super':superID(),
                                        field:path[0].parent.computed ?path[0].parent.property : literal(path[0].parent.property.name)
                                    }).expr ;
                                    path[1].replace(r);
                                }
                            } else {
                                logger(where(node) + "'super' in async methods must be deferenced. 'async constructor()'/'await super()' not valid.");
                            }
                        }
                    }
                });
            }
        };
    }

    function fixSuperReferences(ast,engine) {
        return parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (node.type === 'ClassDeclaration' || node.type === 'ClassExpression') {
                node.body.body.forEach(mapSupers(node,engine));
                if (node.$superID) {
                    var method = parser.part("(function($field) { return super[$field] })",{ field:ident("$field") }).expr ;
                    if (opts.babelTree) {
                        method.type = 'ClassMethod';
                        method.key = node.$superID;
                        method.kind = 'method';
                        node.body.body.push(method);
                    } else {
                        node.body.body.push({
                            type: 'MethodDefinition',
                            key: node.$superID,
                            kind: 'method',
                            value: method
                        });
                    }
                }
            }
        });
    }

    function blockifyArrows(ast) {
        parser.treeWalker(ast, function (node, descend, path) {
            var awaiting = containsAwait(node);
            if (awaiting)  {
                if (node.type === 'ArrowFunctionExpression' && node.body.type !== 'BlockStatement') {
                    node.body = {
                        type: "BlockStatement",
                        body: [{
                            type: "ReturnStatement",
                            argument: node.body
                        }]
                    };
                }
            }
            descend();
            return true;
        });
        return ast;
    }

    function exposeCompilerOpts(ast) {
        // Expose compiler
        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (node.type === 'Identifier' && node.name === '__nodent') {
                coerce(node, literal(opts));
            }
        });
        return ast;
    }

    /* Called with a Program or FunctionDeclaration.body */
    function isStrict(node) {
        if (node.type === 'Program' && node.sourceType === 'module')
            return true ;

        var nodes ;
        if (node.type === 'Program')
            nodes = node.body ;
        else if (examine(node).isFunction)
            nodes = node.body.body ;
        else return false ;

        if (nodes) for (var i=0; i<nodes.length; i++)
            if (examine(nodes[i]).isDirective && nodes[i].expression.value.match(/^\s*use\s+strict\s*$/))
                return true ;
        return false ;
    }

    function containsBlockScopedDeclarations(nodes) {
        for (var i = 0;i < nodes.length; i++) {
            var node = nodes[i];
            if (node.type === 'ClassDeclaration' ||
                (node.type === 'VariableDeclaration' && (node.kind === 'let' || node.kind === 'const')) ||
                (node.type === 'FunctionDeclaration' && node.id && node.id.name && !node.$continuation)) {
                return true;
            }
        }
        return false;
    }

    /* Remove un-necessary nested blocks and crunch down empty function implementations */
    function cleanCode(ast) {
        // Coalese BlockStatements
        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (node.type==='ArrowFunctionExpression'
                && node.body.type === 'BlockStatement'
                && node.body.body.length===1
                && node.body.body[0].type==='ReturnStatement') {
                node.body = node.body.body[0].argument
            } else {
                var block, child;
                // If this node is a block with vanilla BlockStatements (no controlling entity), merge them
                if (block = examine(node).isBlockStatement) {
                    // Remove any empty statements from within the block
                    // For ES6, this needs more care, as blocks containing 'let/const/class' have a scope of their own
                    for (var i = 0;i < block.length; i++) {
                        if ((child = examine(block[i]).isBlockStatement) && !containsBlockScopedDeclarations(child)) {
                            if (!containsBlockScopedDeclarations(block[i]))
                                [].splice.apply(block, [i,1].concat(child));
                        }
                    }
                }
            }
        });
        // Truncate BlockStatements with a Jump (break;continue;return;throw) inside
        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (examine(node).isJump) {
                var ref = path[0];
                if ('index' in ref) {
                    var i = ref.index + 1;
                    var ctn = ref.parent[ref.field];
                    while (i < ctn.length) {
                        // Remove any statements EXCEPT for function/var definitions
                        if (ctn[i].type === 'VariableDeclaration' || examine(ctn[i]).isFunction && ctn[i].id)
                            i += 1;
                         else
                            ctn.splice(i, 1);
                    }
                }
            }
        });
        /* Inline continuations that are only referenced once */
        // Find any continuations that have a single reference
        parser.treeWalker(ast, function (node, descend, path) {
            descend();
            if (node.$thisCall && continuations[node.name]) {
                if (continuations[node.name].ref) {
                    delete continuations[node.name]; //   Multiple ref
                } else {
                    continuations[node.name].ref = node.$thisCall;
                }
            }
        });
        var calls = Object.keys(continuations).map(function (c) {
            return continuations[c].ref;
        });
        if (calls.length) {
            // Replace all the calls to the continuation with the body from the continuation followed by 'return;'
            parser.treeWalker(ast, function (node, descend, path) {
                descend();
                if (calls.indexOf(node) >= 0) {
                    if (path[1].self.type === 'ReturnStatement') {
                        var sym = node.$thisCallName;
                        var repl = cloneNode(continuations[sym].def.body.body);
                        continuations[sym].$inlined = true;
                        if (!examine(path[1].self).isJump)
                            repl.push({
                            type: 'ReturnStatement'
                        });
                        path[1].replace(repl);
                    }
                }
            });
            var defs = Object.keys(continuations).map(function (c) {
                return continuations[c].$inlined && continuations[c].def;
            });
            // Remove all the (now inline) declarations of the continuations
            parser.treeWalker(ast, function (node, descend, path) {
                descend();
                if (defs.indexOf(node) >= 0) {
                    path[0].remove();
                }
            });
        }

        // Hoist generated FunctionDeclarations within ES5 Strict functions (actually put them at the
        // end of the scope-block, don't hoist them, it's just an expensive operation)
        var looksLikeES6 = (ast.type==='Program' && ast.sourceType==='module') || contains(ast,function(n){
            return examine(n).isES6 ;
        },true) ;

        if (!looksLikeES6) {
            var useStrict = isStrict(ast) ;
            (function(ast){
                parser.treeWalker(ast, function (node, descend, path) {
                    if (node.type==='Program' || node.type==='FunctionDeclaration' || node.type==='FunctionExpression') {
                        var wasStrict = useStrict ;
                        useStrict = useStrict || isStrict(node) ;
                        if (useStrict) {
                            descend();

                            var functionScope = node.type === 'Program' ? node : node.body ;
                            var functions = scopedNodes(functionScope,function(n,path){
                                if (n.type==='FunctionDeclaration') {
                                    return path[0].parent !== functionScope ;
                                }
                            }) ;

                            functions = functions.map(function (path) {
                                return path[0].remove() ;
                            });
                            [].push.apply(functionScope.body,functions) ;
                        } else {
                            descend();
                        }
                        useStrict = wasStrict ;
                    } else {
                        descend();
                    }
                }) ;
            })(ast);
        }

        /*
        function replaceSymbols(ast,from,to) {
            parser.treeWalker(ast,function(node,descend,path){
                descend() ;
                if (node.type=='Identifier' && node.name==from) {
                    node.name = to ;
                }
            }) ;
            return ast ;
        }

        // Find declarations of functions of the form:
        //     function [sym]() { return _call_.call(this) }
        // or
        //     function [sym]() { return _call_() }
        // and replace with:
        //    _call_
        // If the [sym] exists and is referenced elsewhere, replace those too. This
        // needs to be done recursively from the bottom of the tree upwards.
        // NB: If _call_ is in the parameter list for the function, this is NOT a correct optimization


        // The symbol folding above might generate lines like:
        //    $return.$asyncbind(this,$error)
        // these can be simplified to:
        //    $return
        */

        // Remove all the 'hiiden' node info generated during transformation
        parser.treeWalker(ast,function(node,descend,path){
            descend() ;
            Object.keys(node).filter(function(k){ return k[0]==='$'}).forEach(function(k){
                delete node[k] ;
            }) ;
        }) ;
        return ast;
    }
}

module.exports = {
    printNode:printNode,
    babelLiteralNode: babelLiteralNode,
    asynchronize: function (pr, __sourceMapping, opts, logger) {
        try {
            return asynchronize(pr, __sourceMapping, opts, logger);
        } catch (ex) {
            if (ex instanceof SyntaxError) {
                var l = pr.origCode.substr(ex.pos - ex.loc.column);
                l = l.split("\n")[0];
                ex.message += " (nodent)\n" + l + "\n" + l.replace(/[\S ]/g, "-").substring(0, ex.loc.column) + "^";
                ex.stack = "";
            }
            throw ex;
        }
    }
};

},{"./output":12,"./parser":13}],12:[function(require,module,exports){
'use strict';

// This module is derived from Astring by David Bonnet (see below), but heavily
// modified to support source-maps & es7 as specified in
// https://github.com/estree/estree/blob/master/experimental/async-functions.md
// --------------------
// Astring is a tiny and fast JavaScript code generator from an ESTree-compliant AST.
//
// Astring was written by David Bonnet and released under an MIT license.
//
// The Git repository for Astring is available at:
// https://github.com/davidbonnet/astring.git
//
// Please use the GitHub bug tracker to report issues:
// https://github.com/davidbonnet/astring/issues

var SourceMapGenerator = require('source-map').SourceMapGenerator;
var ForInStatement, RestElement, BinaryExpression, ArrayExpression, BlockStatement;

var repeat ;
if ("".repeat) {
    repeat = function(str,count){
        return count && str ? str.repeat(count):"" ;
    } ;
} else {
    var cache = {} ;
    repeat = function(str,count) {
        if (!count || !str) return "" ;
        var k = ""+str+count ;
        if (!cache[k]) {
            var out = [];
            while (count--) {
                out.push(str);
            }
            cache[k] = out.join('');
        }
        return cache[k] ;
    }
}

var OPERATORS_PRECEDENCE = {
    'ExpressionStatement': -1, //  Use to parenthesize FunctionExpressions as statements
    'Identifier': 21,
    'Literal': 21,
    'BooleanLiteral':21,
    'RegExpLiteral':21,
    'NumericLiteral':21,
    'StringLiteral':21,
    'NullLiteral':21,
    'ThisExpression': 21,
    'SuperExpression': 21,
    'ObjectExpression': 21,
    'ClassExpression': 21,
    //      '(_)':20,   // Parens
    'MemberExpression': 19,
    //      'new()':19,
    'CallExpression': 18,
    'NewExpression': 18,
    'ArrayExpression': 17.5,
    'FunctionExpression': 17.5,
    'FunctionDeclaration': 17.5,
    'ArrowFunctionExpression': 17.5,
    'UpdateExpression++': 17, //  Postfix is 17, prefix is 16
    'UpdateExpression--': 17, //  Postfix is 17, prefix is 16
    'UpdateExpression++prefix': 16, //  Postfix is 17, prefix is 16
    'UpdateExpression--prefix': 16, //  Postfix is 17, prefix is 16
    'UnaryExpression':16, // ! ~ + - typeof void delete
    'AwaitExpression': 16,
    'BinaryExpression**': 15,
    'BinaryExpression*': 15,
    'BinaryExpression/': 15,
    'BinaryExpression%': 15,
    'BinaryExpression+': 14,
    'BinaryExpression-': 14,
    'BinaryExpression<<': 13,
    'BinaryExpression>>': 13,
    'BinaryExpression>>>': 13,
    'BinaryExpression<': 12,
    'BinaryExpression<=': 12,
    'BinaryExpression>': 12,
    'BinaryExpression>=': 12,
    'BinaryExpressionin': 12,
    'BinaryExpressioninstanceof': 12,
    'BinaryExpression==': 11,
    'BinaryExpression===': 11,
    'BinaryExpression!=': 11,
    'BinaryExpression!==': 11,
    'BinaryExpression&': 10,
    'BinaryExpression^': 9,
    'BinaryExpression|': 8,
    'LogicalExpression&&': 7,
    'LogicalExpression||': 6,
    'ConditionalExpression': 5,
    'AssignmentPattern': 4,
    'AssignmentExpression': 4,
    'yield': 3,
    'YieldExpression': 3,
    'SpreadElement': 2,
    'comma-separated-list':1.5,
    'SequenceExpression': 1
};

var CommaList = {type:'comma-separated-list'} ;

function precedence(node) {
    if (node.type==='NewExpression' && node.arguments && node.arguments.length)
        return 19 ;
    var p = OPERATORS_PRECEDENCE[node.type] || OPERATORS_PRECEDENCE[node.type+node.operator]  || OPERATORS_PRECEDENCE[node.type+node.operator+(node.prefix?"prefix":"")];
    if (p !== undefined)
        return p;
    //console.log("Precedence?",node.type,node.operator) ;
    return 20;
}

function out(node,state,type) {
    var f = this[type || node.type] ;
    if (f) {
/*
        try {
            var attr = Object.keys(node).filter(k=>k[0]==='$').map(k=>k+(node[k]?"+":"-")) ;
            if (attr.length) 
                state.write(node,"/*"+attr.join(", ")+"\u002A/ ") ;
        } catch (ex) {} ;
*/        
        f.call(this, node, state);
    } else {
        // Unknown node type - just spew its source
        state.write(node,"/*"+node.type+"?*/ "+state.sourceAt(node.start,node.end)) ;
    }
}
function expr(state, parent, node, assoc) {
    if (assoc===2 ||
            precedence(node) < precedence(parent) ||
            (precedence(node) == precedence(parent) && (assoc || parent.right === node))) {
        state.write(null, '(');
        this.out(node, state,node.type);
        state.write(null, ')');
    } else {
        this.out(node, state,node.type);
    }
}
function formatParameters(params, state) {
    var param;
    state.write(null, '(');
    if (params != null && params.length > 0) {
        this.out(params[0], state,params[0].type);
        for (var i = 1, length = params.length; i < length; i++) {
            param = params[i];
            state.write(param, ', ');
            this.out(param, state,param.type);
        }
    }
    state.write(null, ') ');
}
function argumentList(node, state) {
    state.write(node, '(');
    var args = node['arguments'];
    if (args.length > 0) {
        var length = args.length;
        for (var i = 0; i < length; i++) {
            if (i!=0)
                state.write(null, ', ');
            this.expr(state,CommaList,args[i]) ;
        }
    }
    state.write(null, ')');
};

var traveler = {
    out: out,
    expr: expr,
    argumentList: argumentList,
    formatParameters: formatParameters,
    Program: function (node, state) {
        var statements, statement;
        var indent = repeat(state.indent, state.indentLevel);
        var lineEnd = state.lineEnd;
        statements = node.body;
        for (var i = 0, length = statements.length; i < length; i++) {
            statement = statements[i];
            state.write(null, indent);
            this.out(statement, state,statement.type);
            state.write(null, lineEnd);
        }
    },
    BlockStatement: BlockStatement = function (node, state) {
        var statements, statement;
        var indent = repeat(state.indent, state.indentLevel++);
        var lineEnd = state.lineEnd;
        var statementIndent = indent + state.indent;
        state.write(node, '{');
        statements = node.body;
        if (statements != null && statements.length > 0) {
            state.write(null, lineEnd);
            for (var i = 0, length = statements.length; i < length; i++) {
                statement = statements[i];
                state.write(null, statementIndent);
                this.out(statement, state,statement.type);
                state.write(null, lineEnd);
            }
            state.write(null, indent);
        }
        state.write(node.loc ? {
            loc: {
                start: {
                    line: node.loc.end.line,
                    column: 0
                }
            }
        } : null, '}');
        state.indentLevel--;
    },
    ClassBody: BlockStatement,
    EmptyStatement: function (node, state) {
        state.write(node, ';');
    },
    ParenthesizedExpression: function (node, state) {
        this.expr(state, node, node.expression, 2);
    },
    ExpressionStatement: function (node, state) {
        if (node.expression.type === 'FunctionExpression' || node.expression.type === 'ObjectExpression') {
            state.write(null, '(');
            this.expr(state, node, node.expression);
            state.write(null, ')');
        } else {
            this.expr(state, node, node.expression);
        }
        state.write(null, ';');
    },
    IfStatement: function (node, state) {
        state.write(node, 'if (');
        this.out(node.test, state,node.test.type);
        state.write(null, ') ');
        if (node.consequent.type !== 'BlockStatement')
            state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
        this.out(node.consequent, state,node.consequent.type);
        if (node.alternate != null) {
            if (node.consequent.type !== 'BlockStatement')
                state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel));
            state.write(null, ' else ');
            if (node.alternate.type !== 'BlockStatement' && node.alternate.type !== 'IfStatement')
                state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
            this.out(node.alternate, state,node.alternate.type);
        }
    },
    LabeledStatement: function (node, state) {
        this.out(node.label, state,node.label.type);
        state.write(null, ':');
        this.out(node.body, state,node.body.type);
    },
    BreakStatement: function (node, state) {
        state.write(node, 'break');
        if (node.label) {
            state.write(null, ' ');
            this.out(node.label, state,node.label.type);
        }
        state.write(null, ';');
    },
    ContinueStatement: function (node, state) {
        state.write(node, 'continue');
        if (node.label) {
            state.write(null, ' ');
            this.out(node.label, state,node.label.type);
        }
        state.write(null, ';');
    },
    WithStatement: function (node, state) {
        state.write(node, 'with (');
        this.out(node.object, state,node.object.type);
        state.write(null, ') ');
        this.out(node.body, state,node.body.type);
    },
    SwitchStatement: function (node, state) {
        var occurence, consequent, statement;
        var indent = repeat(state.indent, state.indentLevel++);
        var lineEnd = state.lineEnd;
        state.indentLevel++;
        var caseIndent = indent + state.indent;
        var statementIndent = caseIndent + state.indent;
        state.write(node, 'switch (');
        this.out(node.discriminant, state,node.discriminant.type);
        state.write(null, ') {', lineEnd);
        var occurences = node.cases;
        for (var i = 0; i < occurences.length; i++) {
            occurence = occurences[i];
            if (occurence.test) {
                state.write(occurence, caseIndent, 'case ');
                this.out(occurence.test, state,occurence.test.type);
                state.write(null, ':', lineEnd);
            } else {
                state.write(occurence, caseIndent, 'default:', lineEnd);
            }
            consequent = occurence.consequent;
            for (var j = 0; j < consequent.length; j++) {
                statement = consequent[j];
                state.write(null, statementIndent);
                this.out(statement, state,statement.type);
                state.write(null, lineEnd);
            }
        }
        state.indentLevel -= 2;
        state.write(null, indent, '}');
    },
    ReturnStatement: function (node, state) {
        if (node.async)
            state.write(node, ' async ');
        state.write(node, 'return');
        if (node.argument) {
            state.write(null, ' ');
            this.out(node.argument, state,node.argument.type);
        }
        state.write(null, ';');
    },
    ThrowStatement: function (node, state) {
        if (node.async)
            state.write(node, ' async ');
        state.write(node, 'throw ');
        this.out(node.argument, state,node.argument.type);
        state.write(null, ';');
    },
    TryStatement: function (node, state) {
        var handler;
        state.write(node, 'try ');
        this.out(node.block, state,node.block.type);
        if (node.handler) {
            this.out(node.handler, state, node.handler.type)
        }
        if (node.finalizer) {
            state.write(node.finalizer, ' finally ');
            this.out(node.finalizer, state,node.finalizer.type);
        }
    },
    CatchClause: function (node, state) {
        state.write(node, ' catch (');
        this.out(node.param, state, node.param.type);
        state.write(null, ') ');
        this.out(node.body, state, node.body.type);
    },
    WhileStatement: function (node, state) {
        state.write(node, 'while (');
        this.out(node.test, state,node.test.type);
        state.write(null, ') ');
        if (node.body.type !== 'BlockStatement')
            state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
        this.out(node.body, state,node.body.type);
    },
    DoWhileStatement: function (node, state) {
        state.write(node, 'do ');
        if (node.body.type !== 'BlockStatement')
            state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
        this.out(node.body, state,node.body.type);
        state.write(null, ' while (');
        this.out(node.test, state,node.test.type);
        state.write(null, ');');
    },
    ForStatement: function (node, state) {
        state.write(node, 'for (');
        if (node.init != null) {
            var init = node.init, type = init.type;
            state.inForInit++ ;
            this.out(init, state,type);
            state.inForInit-- ;
            if (type !== 'VariableDeclaration')
              state.write(null, '; ');
        } else {
          state.write(null, '; ');
        }
        if (node.test)
            this.out(node.test, state,node.test.type);
        state.write(null, '; ');
        if (node.update)
            this.out(node.update, state,node.update.type);
        state.write(null, ') ');
        if (node.body.type !== 'BlockStatement')
            state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
        this.out(node.body, state,node.body.type);
    },
    ForInStatement: ForInStatement = function (node, state) {
        state.write(node, 'for (');
        var left = node.left, type = left.type;
        state.inForInit++ ;
        this.out(left, state,type);
        if (type[0] === 'V' && type.length === 19) {
            state.back();
        }
        state.inForInit-- ;
        state.write(null, node.type[3] === 'I' ? ' in ' : ' of ');
        this.out(node.right, state,node.right.type);
        state.write(null, ') ');
        if (node.body.type !== 'BlockStatement')
            state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
        this.out(node.body, state,node.body.type);
    },
    ForOfStatement: ForInStatement,
    DebuggerStatement: function (node, state) {
        state.write(node, 'debugger;');
    },
    Function: function (node, state) {
        if (node.async)
            state.write(node, 'async ');
        state.write(node, node.generator ? 'function* ' : 'function ');
        if (node.id)
            state.write(node.id, node.id.name);
        this.formatParameters(node.params, state);
        this.out(node.body, state,node.body.type);
    },
    FunctionDeclaration: function (node, state) {
        this.Function(node, state);
        state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel));
    },
    FunctionExpression: function (node, state) {
        this.Function(node, state);
    },
    VariableDeclaration: function (node, state) {
        var declarations = node.declarations;
        state.write(node, node.kind, ' ');
        var length = declarations.length;
        if (length > 0) {
            this.out(declarations[0], state,'VariableDeclarator');
            for (var i = 1; i < length; i++) {
                state.write(null, ', ');
                this.out(declarations[i], state,'VariableDeclarator');
            }
        }
        state.write(null, ';');
    },
    VariableDeclarator: function (node, state) {
        this.out(node.id, state,node.id.type);
        if (node.init != null) {
            state.write(null, ' = ');
            this.expr(state,CommaList,node.init) ;
        }
    },
    ClassDeclaration: function (node, state) {
        state.write(node, 'class ');
        if (node.id) {
            state.write(node.id, node.id.name + ' ');
        }
        if (node.superClass) {
            state.write(null, 'extends ');
            this.out(node.superClass, state,node.superClass.type);
            state.write(null, ' ');
        }
        this.out(node.body, state,'BlockStatement');
    },
    ImportSpecifier: function (node, state) {
        if (node.local.name == node.imported.name) {
            this.out(node.local, state,node.local.type);
        } else {
            this.out(node.imported, state,node.imported.type);
            state.write(null, ' as ');
            this.out(node.local, state,node.local.type);
        }
    },
    ImportDefaultSpecifier: function (node, state) {
        this.out(node.local, state,node.local.type);
    },
    ImportNamespaceSpecifier: function (node, state) {
        state.write(null, '* as ');
        this.out(node.local, state,node.local.type);
    },
    ImportDeclaration: function (node, state) {
        var i, specifier, name;
        state.write(node, 'import ');
        var specifiers = node.specifiers;
        var length = specifiers.length;
        var block = true;
        if (length > 0) {
            for (var i = 0; i < length; i++) {
                if (specifiers[i].type === 'ImportSpecifier' && block) {
                    block = false;
                    state.write(null, '{');
                }
                this.out(specifiers[i], state,specifiers[i].type);
                if (i < length - 1)
                    state.write(null, ', ');
            }
            if (specifiers[length - 1].type === 'ImportSpecifier')
                state.write(null, '}');
            state.write(null, ' from ');
        }
        state.write(node.source, node.source.raw);
        state.write(null, ';');
    },
    ExportDefaultDeclaration: function (node, state) {
        state.write(node, 'export default ');
        this.out(node.declaration, state,node.declaration.type);
    },
    ExportSpecifier: function (node, state) {
        if (node.local.name == node.exported.name) {
            this.out(node.local, state,node.local.type);
        } else {
            this.out(node.local, state,node.local.type);
            state.write(null, ' as ');
            this.out(node.exported, state,node.exported.type);
        }
    },
    ExportNamedDeclaration: function (node, state) {
        var specifier, name;
        state.write(node, 'export ');
        if (node.declaration) {
            this.out(node.declaration, state,node.declaration.type);
        } else {
            var specifiers = node.specifiers;
            state.write(node, '{');
            if (specifiers && specifiers.length > 0) {
                for (var i = 0; i < specifiers.length; i++) {
                    this.out(specifiers[i], state,specifiers[i].type);
                    if (i < specifiers.length - 1)
                        state.write(null, ', ');
                }
            }
            state.write(null, '}');
            if (node.source) {
                state.write(node.source, ' from ', node.source.raw);
            }
            state.write(null, ';');
        }
    },
    ExportAllDeclaration: function (node, state) {
        state.write(node, 'export * from ');
        state.write(node.source, node.source.raw, ';');
    },
    MethodDefinition: function (node, state) {
        if (node.value.async)
            state.write(node, 'async ');
        if (node.static)
            state.write(node, 'static ');
        switch (node.kind) {
            case 'get':
            case 'set':
                state.write(node, node.kind, ' ');
                break;
            default:
                break;
        }
        if (node.value.generator)
          state.write(null, '*');
        if (node.computed) {
            state.write(null, '[');
            this.out(node.key, state,node.key.type);
            state.write(null, ']');
        } else {
            this.out(node.key, state,node.key.type);
        }
        this.formatParameters(node.value.params, state);
        this.out(node.value.body, state,node.value.body.type);
    },
    ClassMethod: function (node,state){
        if (node.async)
            state.write(node, 'async ');
        if (node.static)
            state.write(node, 'static ');
        switch (node.kind) {
            case 'get':
            case 'set':
                state.write(node, node.kind, ' ');
                break;
            default:
                break;
        }
        if (node.generator)
          state.write(null, '*');
        if (node.computed) {
            state.write(null, '[');
            this.out(node.key, state,node.key.type);
            state.write(null, ']');
        } else {
            this.out(node.key, state,node.key.type);
        }
        this.formatParameters(node.params, state);
        this.out(node.body, state, node.body.type);
    },
    ClassExpression: function (node, state) {
        this.out(node, state,'ClassDeclaration');
    },
    ArrowFunctionExpression: function (node, state) {
        if (node.async)
            state.write(node, 'async ');
        if (node.params.length===1 && node.params[0].type==='Identifier') {
            this.out(node.params[0], state, node.params[0].type) ;
            state.write(node, ' => ');
        } else {
            this.formatParameters(node.params, state);
            state.write(node, '=> ');
        }
        if (node.body.type === 'ObjectExpression' || node.body.type === 'SequenceExpression') {
            state.write(null, '(');
            this.out(node.body, state,node.body.type);
            state.write(null, ')');
        } else {
            this.out(node.body, state,node.body.type);
        }
    },
    ThisExpression: function (node, state) {
        state.write(node, 'this');
    },
    Super: function (node, state) {
        state.write(node, 'super');
    },
    RestElement: RestElement = function (node, state) {
        state.write(node, '...');
        this.out(node.argument, state,node.argument.type);
    },
    SpreadElement: RestElement,
    YieldExpression: function (node, state) {
        state.write(node, node.delegate ? 'yield*' : 'yield');
        if (node.argument) {
            state.write(null, ' ');
            this.expr(state, node, node.argument);
        }
    },
    AwaitExpression: function (node, state) {
        state.write(node, 'await ');
        this.expr(state, node, node.argument);
    },
    TemplateLiteral: function (node, state) {
        var expression;
        var quasis = node.quasis, expressions = node.expressions;
        state.write(node, '`');
        for (var i = 0, length = expressions.length; i < length; i++) {
            expression = expressions[i];
            state.write(quasis[i].value, quasis[i].value.raw);
            state.write(null, '${');
            this.out(expression, state,expression.type);
            state.write(null, '}');
        }
        state.write(quasis[quasis.length - 1].value, quasis[quasis.length - 1].value.raw);
        state.write(node, '`');
    },
    TaggedTemplateExpression: function (node, state) {
        this.out(node.tag, state,node.tag.type);
        this.out(node.quasi, state,node.quasi.type);
    },
    ArrayExpression: ArrayExpression = function (node, state) {
        state.write(node, '[');
        if (node.elements.length > 0) {
            var elements = node.elements, length = elements.length;
            for (var i = 0; ; ) {
                var element = elements[i];
                element && this.expr(state,CommaList,element) ;

                i += 1 ;
                if (i < length || element===null)
                    state.write(null, ',');
                if (i >= length)
                    break;
                if (state.lineLength() > state.wrapColumn)
                    state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
            }
        }
        state.write(null, ']');
    },
    ArrayPattern: ArrayExpression,
    ObjectExpression: function (node, state) {
        var property;
        var indent = repeat(state.indent, state.indentLevel++);
        var lineEnd = state.lineEnd;
        var propertyIndent = indent + state.indent;
        state.write(node, '{');
        if (node.properties.length > 0) {
            state.write(null, lineEnd);
            var properties = node.properties, length = properties.length;
            for (var i = 0; ; ) {
                property = properties[i];
                state.write(null, propertyIndent);
                this.out(property, state,'Property');
                if (++i < length)
                    state.write(node, ',', lineEnd);
                 else
                    break;
                if (state.lineLength() > state.wrapColumn)
                    state.write(null, state.lineEnd, repeat(state.indent, state.indentLevel + 1));
            }
            state.write(null, lineEnd, indent, '}');
        } else {
            state.write(null, '}');
        }
        state.indentLevel--;
    },
    Property: function (node, state) {
        if (node.method || (node.kind === 'get' || node.kind === 'set')) {
            this.MethodDefinition(node, state);
        } else {
            if (!node.shorthand) {
                if (node.computed) {
                    state.write(null, '[');
                    this.out(node.key, state,node.key.type);
                    state.write(null, ']');
                } else {
                    this.out(node.key, state,node.key.type);
                }
                state.write(null, ': ');
            }
            this.expr(state,CommaList,node.value);
        }
    },
    ObjectPattern: function (node, state) {
        state.write(node, '{');
        if (node.properties.length > 0) {
            var properties = node.properties, length = properties.length;
            for (var i = 0; ; ) {
                this.out(properties[i], state,'Property');
                if (++i < length)
                    state.write(null, ', ');
                 else
                    break;
            }
        }
        state.write(null, '}');
    },
    SequenceExpression: function (node, state) {
        var expression;
        var expressions = node.expressions;
        if (expressions.length > 0) {
            var length = expressions.length;
            for (var i = 0; i<length; i++) {
                expression = expressions[i];
                if (i)
                    state.write(null, ', ') ;
                this.expr(state,CommaList,expression) ;
            }
        }
    },
    UnaryExpression: function (node, state) {
        if (node.prefix) {
            state.write(node, node.operator);
            if (node.operator.length > 1)
                state.write(node, ' ');
            this.expr(state, node, node.argument, true);
        } else {
            this.expr(state, node, node.argument);
            state.write(node, node.operator);
        }
    },
    UpdateExpression: function (node, state) {
        if (node.prefix) {
            state.write(node, node.operator);
            this.out(node.argument, state,node.argument.type);
        } else {
            this.out(node.argument, state,node.argument.type);
            state.write(node, node.operator);
        }
    },
    BinaryExpression: BinaryExpression = function (node, state) {
        var operator = node.operator;
        if (operator==='in' && state.inForInit)
          state.write(null, '(');
        this.expr(state, node, node.left);
        state.write(node, ' ', operator, ' ');
        this.expr(state, node, node.right, node.right.type==='ArrowFunctionExpression'?2:0);
        if (operator==='in' && state.inForInit)
          state.write(null, ')');
    },
    LogicalExpression: BinaryExpression,
    AssignmentExpression: function (node, state) {
      if (node.left.type==='ObjectPattern')
        state.write(null,'(');
      this.BinaryExpression(node,state);
      if (node.left.type==='ObjectPattern')
        state.write(null,')');
    },
    AssignmentPattern: function (node, state) {
        this.expr(state, node, node.left);
        state.write(node, ' = ');
        this.expr(state, node, node.right);
    },
    ConditionalExpression: function (node, state) {
        this.expr(state, node, node.test, true);
        state.write(node, ' ? ');
        this.expr(state, node, node.consequent);
        state.write(null, ' : ');
        this.expr(state, node, node.alternate);
    },
    NewExpression: function (node, state) {
        state.write(node, 'new ');
        this.expr(state, node, node.callee, (node.callee.type === 'CallExpression' || node.callee.type==='ObjectExpression')?2:0);
        this.argumentList(node,state) ;
    },
    CallExpression: function (node, state) {
        this.expr(state, node, node.callee, node.callee.type==='ObjectExpression'?2:0);
        this.argumentList(node,state) ;
    },
    MemberExpression: function (node, state) {
        var requireParens = (node.object.type === 'ObjectExpression' || (node.object.type.match(/Literal$/) && node.object.raw && node.object.raw.match(/^[0-9]/))) ;
        var noParens = !requireParens &&
            ((node.object.type === 'ArrayExpression' || node.object.type === 'CallExpression' || node.object.type === 'NewExpression')
            || precedence(node) <= precedence(node.object));
        if (noParens) {
            this.out(node.object, state,node.object.type);
        } else {
            state.write(null, '(');
            this.out(node.object, state,node.object.type);
            state.write(null, ')');
        }
        if (node.computed) {
            state.write(node, '[');
            this.out(node.property, state,node.property.type);
            state.write(null, ']');
        } else {
            state.write(node, '.');
            this.out(node.property, state,node.property.type);
        }
    },
    Identifier: function (node, state) {
        state.write(node, node.name);
    },
    Literal: function (node, state) {
        state.write(node, node.raw);
    },
    NullLiteral:function (node, state) {
        state.write(node, 'null');
    },
    BooleanLiteral:function (node, state) {
        state.write(node, JSON.stringify(node.value));
    },
    StringLiteral:function (node, state) {
        state.write(node, JSON.stringify(node.value));
    },
    RegExpLiteral:function (node, state) {
        state.write(node, node.extra.raw || ('/'+node.pattern+'/'+node.flags));
    },
    NumericLiteral:function (node, state) {
        state.write(node, JSON.stringify(node.value));
    },
};
module.exports = function (node, options, originalSource) {
    options = options || {};
    var buffer = "", lines = [];
    var map = options.map && new SourceMapGenerator(options.map);
    if (map && options.map.sourceContent) {
        map.setSourceContent(options.map.file, options.map.sourceContent);
    }
    var backBy = "";
    var leadingComments = [];
    var trailingComments = [];
    function write(node) {
        backBy = arguments[arguments.length - 1] ;
        for (var i = 1; i < arguments.length; i++) {
            if (map && node && node.loc && node.loc.start) {
                var startOfLine = false;
                map.addMapping({
                    source: options.map.file,
                    original: {
                        line: node.loc.start.line,
                        column: startOfLine ? 0 : node.loc.start.column
                    },
                    generated: {
                        line: options.map.startLine + lines.length + 1,
                        column: startOfLine ? 0 : buffer.length
                    }
                });
            }
            if (arguments[i] === st.lineEnd) {
                if (trailingComments.length) {
                    trailingComments.forEach(function (c) {
                        if (c.type === 'Line')
                            buffer += " // " + c.value;
                         else {
                            (" /*" + c.value + "*/").split("\n").forEach(function (v) {
                                buffer += v;
                                lines.push(buffer);
                                buffer = "";
                            });
                            buffer = lines.pop();
                        }
                    });
                    trailingComments = [];
                }
                lines.push(buffer);
                buffer = "";
                if (leadingComments.length) {
                    var preceeding = lines.pop();
                    leadingComments.forEach(function (c) {
                        var indent = repeat(st.indent, c.indent);
                        if (c.type === "Line")
                            lines.push(indent + "//" + c.value);
                         else
                            (indent + "/*" + c.value + "*/").split("\n").forEach(function (l) {
                            lines.push(l);
                        });
                    });
                    lines.push(preceeding);
                    leadingComments = [];
                }
            } else {
                buffer += arguments[i];
                if (node && node.$comments) {
                    node.$comments.forEach(function (c) {
                        var trailing = node.loc.start.column < c.loc.start.column;
                        c.indent = st.indentLevel;
                        if (trailing) {
                            trailingComments.push(c);
                        } else {
                            leadingComments.push(c);
                        }
                    });
                    node.$comments = null;
                }
            }
        }
    }
    function lineLength() {
        return buffer.length;
    }
    function sourceAt(start, end) {
        return originalSource?originalSource.substring(start,end):"/* Omitted Non-standard node */" ;
    }
    function back() {
        buffer = buffer.substring(0, buffer.length - backBy.length);
    }
    var st = {
        inForInit: 0,
        lineLength: lineLength,
        sourceAt:sourceAt,
        write: write,
        back: back,
        indent: "    ",
        lineEnd: "\n",
        indentLevel: 0,
        wrapColumn: 80
    };
    traveler.out(node, st);
    trailingComments = node.$comments || [];
    st.write(node, st.lineEnd);
    var result = lines.join(st.lineEnd);
    if (options && options.map) {
        return {
            code: result,
            map: map
        };
    }
    return result;
};

},{"source-map":40}],13:[function(require,module,exports){
'use strict';

var acorn = require("acorn");
var acornWalk = require("acorn/dist/walk");

var walkers = {
    AwaitExpression: function (node, st, c) {
        c(node.argument, st, "Expression");
    },
    SwitchStatement: function (node, st, c) {
        c(node.discriminant, st, "Expression");
        for (var i = 0; i < node.cases.length; ++i) {
            c(node.cases[i],st) ;
        }
    },
    SwitchCase: function (node, st, c) {
        if (node.test) c(node.test, st, "Expression");
        for (var i = 0; i < node.consequent.length; ++i) {
            c(node.consequent[i], st, "Statement");
        }
    },
    TryStatement: function (node, st, c) {
        c(node.block, st, "Statement");
        if (node.handler) c(node.handler, st, "Statement");
        if (node.finalizer) c(node.finalizer, st, "Statement");
    },
    CatchClause: function (node, st, c) {
        c(node.param, st, "Pattern");
        c(node.body, st, "ScopeBody");
    },
    Class: function (node, st, c) {
        if (node.id) c(node.id, st, "Pattern");
        if (node.superClass) c(node.superClass, st, "Expression");
        c(node.body, st);
    },
    ClassBody: function(node, st, c){
        for (var i = 0; i < node.body.length; i++) {
            c(node.body[i], st);
        }
    },
    ObjectPattern: function (node, st, c) {
        for (var i = 0, list = node.properties; i < list.length; i += 1)
          c(list[i], st, "Property");
    },
    /* Babel extensions */
    ClassProperty: function(node,st,c){
        if (node.key) c(node.key, st, "Expression");
        if (node.value) c(node.value, st, "Expression");
    },
    ClassMethod: function(node,st,c){
        if (node.key) c(node.key, st, "Expression");
        c(node, st, "Function");
    },
    ObjectProperty: function(node,st,c){
        if (node.key) c(node.key, st, "Expression");
        if (node.value) c(node.value, st, "Expression");
    },
    ObjectMethod: function(node,st,c){
        if (node.key) c(node.key, st, "Expression");
        c(node, st, "Function");
    }
} ;

var acornBase = acornWalk.make(walkers) ;

function loc(old,repl){
    ['start','end','loc','range'].forEach(function(k){
        if (k in old && !(k in repl))
            repl[k] = old[k] ;
    }) ;
}

var referencePrototypes = {
    replace: function(newNode) {
        if (Array.isArray(newNode) && newNode.length===1) newNode = newNode[0] ;
        if ('index' in this) {
            loc(this.parent[this.field][this.index], newNode);
            if (Array.isArray(newNode)) {
                [].splice.apply(this.parent[this.field],[this.index,1].concat(newNode)) ;
            } else {
                this.parent[this.field][this.index] = newNode ;
            }
        } else {
            loc(this.parent[this.field], newNode);
            if (Array.isArray(newNode)) {
                this.parent[this.field] = {type:'BlockStatement',body:newNode} ;
            } else {
                this.parent[this.field] = newNode ;
            }
        }
        return this.self ;
    },
    append: function(newNode) {
        if (Array.isArray(newNode) && newNode.length===1) newNode = newNode[0] ;
        if ('index' in this) {
            if (Array.isArray(newNode)) {
                [].splice.apply(this.parent[this.field],[this.index+1,0].concat(newNode)) ;
            } else {
                this.parent[this.field].splice(this.index+1,0,newNode) ;
            }
        } else {
            throw new Error("Cannot append Element node to non-array") ;
        }
        return this.self ;
    },
    index: function(){
        return this.parent[this.field].indexOf(this.self) ;
    },
    removeElement: function() {
        return this.parent[this.field].splice(this.index,1)[0] ;
    },
    removeNode: function() {
        var r = this.parent[this.field] ;
        delete this.parent[this.field] ;
        return r ;
    }
};

function treeWalker(n,walker,state){
    if (!state) {
        state = [{self:n}] ;
        state.replace = function(pos,newNode) {
            state[pos].replace(newNode) ;
        }
    }

    function goDown(ref) {
        ref.replace = referencePrototypes.replace ;
        ref.append = referencePrototypes.append ;
        if (ref.index) {
            Object.defineProperties(ref, {index:{enumerable:true,get:referencePrototypes.index}}) ;
            ref.remove = referencePrototypes.removeElement ;
        } else {
            ref.remove = referencePrototypes.removeNode ;
        }
        state.unshift(ref) ;
        treeWalker(ref.self,walker,state) ;
        state.shift() ;
    }

    function descend() {
        if (!(n.type in acornBase)) {
            // We don't know what type of node this is - it's not in the ESTree spec,
            // (maybe a 'react' extension?), so just ignore it
        } else {
            acornBase[n.type](n,state,function down(sub,_,derivedFrom){
                if (sub===n)
                    return acornBase[derivedFrom || n.type](n,state,down) ;

                var keys = Object.keys(n) ;
                for (var i=0; i<keys.length; i++){
                    var v = n[keys[i]] ;
                    if (Array.isArray(v)) {
                        if (v.indexOf(sub)>=0) {
                            goDown({
                                self:sub,
                                parent:n,
                                field:keys[i],
                                index:true
                            }) ;
                        }
                    } else if (v instanceof Object && sub===v) {
                        goDown({
                            self:sub,
                            parent:n,
                            field:keys[i]
                        }) ;
                    }
                }
            }) ;
        }
    } ;
    walker(n,descend,state) ;
    return n ;
}

var alreadyInstalledPlugin = false ;

function acornParse(code,config) {
    var comments = [] ;
    var options = {
        ecmaVersion:8,
        allowHashBang:true,
        allowReturnOutsideFunction:true,
        allowImportExportEverywhere:true,
        locations:true,
        onComment:comments
    } ;

    if (!(config && config.noNodentExtensions) || parseInt(acorn.version) < 4) {
        if (!alreadyInstalledPlugin) {
            if (parseInt(acorn.version) < 4)
                console.warn("Nodent: Warning - noNodentExtensions option requires acorn >=v4.x. Extensions installed.") ;
            require('acorn-es7-plugin')(acorn) ;
            alreadyInstalledPlugin = true ;
        }
        options.plugins = options.plugins || {} ;
        options.plugins.asyncawait = {asyncExits:true, awaitAnywhere:true} ;
    }
    
    if (config)
        for (var k in config)
            if (k !== 'noNodentExtensions')
                options[k] = config[k] ;

    var ast = acorn.parse(code,options) ;

    // attach comments to the most tightly containing node
    treeWalker(ast,function(node,descend,path){
        descend() ;
        while (comments.length && node.loc &&
            (node.loc.start.line >= comments[0].loc.start.line && node.loc.end.line>=comments[0].loc.end.line)) {
            node.$comments = node.$comments||[] ;
            node.$comments.push(comments.shift()) ;
        }
    }) ;
    return ast ;
}

var parseCache = {} ;
function partialParse(code,args) {
  if (!parseCache[code]) {
    parseCache[code] = acornParse(code,{
      noNodentExtensions:true, // The partial parser only ever parses ES5
      locations:false,
      ranges:false,
      onComment:null
    }) ;
  }

  var result = substitute(parseCache[code]) ;
  return {body:result.body, expr:result.body[0].type==='ExpressionStatement' ? result.body[0].expression : null} ;

  /* parse and substitute:
   * 
   *    $1      Substitute the specified expression. If $1 occupies a slot which is an array of expressions (e.g arguments, params)
   *            and the passed argument is an array, subtitute the whole set
   *    {$:1}   Substitute a single statement 
   * 
   */
  function substitute(src,dest) {
    if (Array.isArray(dest) && !Array.isArray(src))
        throw new Error("Can't substitute an array for a node") ;
    
    dest = dest || {} ;
    Object.keys(src).forEach(function(k){
      if (!(src[k] instanceof Object))
          return dest[k] = src[k] ;

      function moreNodes(v){ if (typeof v==="function") v = v() ; dest = dest.concat(v) ; return dest };
      function copyNode(v){ if (typeof v==="function") v = v() ; dest[k] = v ; return dest };

      // The src is an array, so create/grow the destination
      // It could an an array of expressions $1,$2,$3 or statements $:1;$:2;$:3;
      if (Array.isArray(src[k]))
          return dest[k] = substitute(src[k],[]) ;

      var p ;
      if (Array.isArray(dest)) 
          p = moreNodes ;
      else
          p = copyNode ;
          
      // Substitute a single identifier $.. with an expression (TODO: test provided arg is an expression node)
      if (src[k].type==='Identifier' && src[k].name[0]==='$') 
          return p(args[src[k].name.slice(1)]) ;

      // Substitute a single labeled statement $:.. with a statement (TODO: test provided arg is a statement node)
      if (src[k].type === 'LabeledStatement' && src[k].label.name==='$') { 
          var spec = src[k].body.expression ;
          return p(args[spec.name || spec.value]) ;
      }

      // Magic label to set call a function to modify a statement node  $$method: <statement>
      // The newNode = args.method(oldNode)
      if (src[k].type === 'LabeledStatement' && src[k].label.name.slice(0,2)==='$$') { 
          return p(args[src[k].label.name.slice(2)](substitute(src[k]).body)) ;
      }
      
      return p(substitute(src[k])) ;
    }) ;
    return dest ;
  }
}

module.exports = {
    part:partialParse,
    parse: acornParse,
    treeWalker:treeWalker
} ;

},{"acorn":4,"acorn-es7-plugin":1,"acorn/dist/walk":5}],14:[function(require,module,exports){
module.exports={
  "_from": "nodent-compiler@>=3.1.5",
  "_id": "nodent-compiler@3.1.5",
  "_inBundle": false,
  "_integrity": "sha512-Istg796un2lALiy/eFNnLbAEMovQqrtpVqXVY8PKs6ycsyBbK480D55misJBQ1QxvstcJ7Hk9xbSVkV8lIi+tg==",
  "_location": "/nodent-compiler",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "nodent-compiler@>=3.1.5",
    "name": "nodent-compiler",
    "escapedName": "nodent-compiler",
    "rawSpec": ">=3.1.5",
    "saveSpec": null,
    "fetchSpec": ">=3.1.5"
  },
  "_requiredBy": [
    "/nodent"
  ],
  "_resolved": "https://registry.npmjs.org/nodent-compiler/-/nodent-compiler-3.1.5.tgz",
  "_shasum": "8c09289eacf7256bda89c2b88941681d5cccf80c",
  "_spec": "nodent-compiler@>=3.1.5",
  "_where": "/Users/evgenypoberezkin/Documents/JSON/ajv-async/node_modules/nodent",
  "author": {
    "name": "Mat At Bread",
    "email": "nodent@mailed.me.uk"
  },
  "bugs": {
    "url": "https://github.com/MatAtBread/nodent/issues"
  },
  "bundleDependencies": false,
  "dependencies": {
    "acorn": ">=2.5.2",
    "acorn-es7-plugin": ">=1.1.6",
    "source-map": "^0.5.6"
  },
  "deprecated": false,
  "description": "NoDent - Asynchronous Javascript language extensions",
  "engines": "node >= 0.10.0",
  "homepage": "https://github.com/MatAtBread/nodent-compiler#readme",
  "keywords": [
    "Javascript",
    "ES7",
    "async",
    "await",
    "language",
    "extensions",
    "Node",
    "callback",
    "generator",
    "Promise",
    "asynchronous"
  ],
  "license": "BSD-2-Clause",
  "main": "compiler.js",
  "name": "nodent-compiler",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MatAtBread/nodent-compiler.git"
  },
  "scripts": {
    "test": "node tests/basic.js # Please install 'nodent' and test the compiler fully from there."
  },
  "version": "3.1.5"
}

},{}],15:[function(require,module,exports){
"use strict";
/*
 * $asyncbind has multiple uses, depending on the parameter list. It is in Function.prototype, so 'this' is always a function
 *
 * 1) If called with a single argument (this), it is used when defining an async function to ensure when
 *      it is invoked, the correct 'this' is present, just like "bind". For legacy reasons, 'this' is given
 *      a memeber 'then' which refers to itself.
 * 2) If called with a second parameter ("catcher") and catcher!==true it is being used to invoke an async
 *      function where the second parameter is the error callback (for sync exceptions and to be passed to
 *      nested async calls)
 * 3) If called with the second parameter===true, it is the same use as (1), but the function is wrapped
 *      in an 'Promise' as well bound to 'this'.
 *      It is the same as calling 'new Promise(this)', where 'this' is the function being bound/wrapped
 * 4) If called with the second parameter===0, it is the same use as (1), but the function is wrapped
 *      in a 'LazyThenable', which executes lazily and can resolve synchronously.
 *      It is the same as calling 'new LazyThenable(this)' (if such a type were exposed), where 'this' is
 *      the function being bound/wrapped
 */

function processIncludes(includes,input) {
    var src = input.toString() ;
    var t = "return "+src ;
    var args = src.match(/.*\(([^)]*)\)/)[1] ;
    var re = /['"]!!!([^'"]*)['"]/g ;
    var m = [] ;
    while (1) {
        var mx = re.exec(t) ;
        if (mx)
            m.push(mx) ;
        else break ;
    }
    m.reverse().forEach(function(e){
        t = t.slice(0,e.index)+includes[e[1]]+t.substr(e.index+e[0].length) ;
    }) ;
    t = t.replace(/\/\*[^*]*\*\//g,' ').replace(/\s+/g,' ') ;
    return new Function(args,t)() ;
}

var $asyncbind = processIncludes({
    zousan:require('./zousan').toString(),
    thenable:require('./thenableFactory').toString()
},
function $asyncbind(self,catcher) {
    "use strict";
    if (!Function.prototype.$asyncbind) {
        Object.defineProperty(Function.prototype,"$asyncbind",{value:$asyncbind,enumerable:false,configurable:true,writable:true}) ;
    }

    if (!$asyncbind.trampoline) {
      $asyncbind.trampoline = function trampoline(t,x,s,e,u){
        return function b(q) {
                while (q) {
                    if (q.then) {
                        q = q.then(b, e) ;
                        return u?undefined:q;
                    }
                    try {
                        if (q.pop) {
                            if (q.length)
                              return q.pop() ? x.call(t) : q;
                            q = s;
                         } else
                            q = q.call(t)
                    } catch (r) {
                        return e(r);
                    }
                }
            }
        };
    }
    if (!$asyncbind.LazyThenable) {
        $asyncbind.LazyThenable = '!!!thenable'();
        $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = '!!!zousan')();
    }

    var resolver = this;
    switch (catcher) {
    case true:
        return new ($asyncbind.Thenable)(boundThen);
    case 0:
        return new ($asyncbind.LazyThenable)(boundThen);
    case undefined:
        /* For runtime compatibility with Nodent v2.x, provide a thenable */
        boundThen.then = boundThen ;
        return boundThen ;
    default:
        return function(){
            try {
                return resolver.apply(self,arguments);
            } catch(ex) {
                return catcher(ex);
            }
        }
    }
    function boundThen() {
        return resolver.apply(self,arguments);
    }
}) ;

function $asyncspawn(promiseProvider,self) {
    if (!Function.prototype.$asyncspawn) {
        Object.defineProperty(Function.prototype,"$asyncspawn",{value:$asyncspawn,enumerable:false,configurable:true,writable:true}) ;
    }
    if (!(this instanceof Function)) return ;

    var genF = this ;
    return new promiseProvider(function enough(resolve, reject) {
        var gen = genF.call(self, resolve, reject);
        function step(fn,arg) {
            var next;
            try {
                next = fn.call(gen,arg);
                if(next.done) {
                    if (next.value !== resolve) {
                        if (next.value && next.value===next.value.then)
                            return next.value(resolve,reject) ;
                        resolve && resolve(next.value);
                        resolve = null ;
                    }
                    return;
                }

                if (next.value.then) {
                    next.value.then(function(v) {
                        step(gen.next,v);
                    }, function(e) {
                        step(gen.throw,e);
                    });
                } else {
                    step(gen.next,next.value);
                }
            } catch(e) {
                reject && reject(e);
                reject = null ;
                return;
            }
        }
        step(gen.next);
    });
}

// Initialize async bindings
$asyncbind() ;
$asyncspawn() ;

// Export async bindings
module.exports = {
    $asyncbind:$asyncbind,
    $asyncspawn:$asyncspawn
};

},{"./thenableFactory":16,"./zousan":17}],16:[function(require,module,exports){
module.exports = function() {
    function isThenable(obj) {
        return obj && (obj instanceof Object) && typeof obj.then==="function";
    }

    function resolution(p,r,how) {
        try {
            /* 2.2.7.1 */
            var x = how ? how(r):r ;

            if (p===x) /* 2.3.1 */
                return p.reject(new TypeError("Promise resolution loop")) ;

            if (isThenable(x)) {
                /* 2.3.3 */
                x.then(function(y){
                    resolution(p,y);
                },function(e){
                    p.reject(e)
                }) ;
            } else {
                p.resolve(x) ;
            }
        } catch (ex) {
            /* 2.2.7.2 */
            p.reject(ex) ;
        }
    }

    function Chained() {};
    Chained.prototype = {
        resolve:_unchained,
        reject:_unchained,
        then:thenChain
    };
    function _unchained(v){}
    function thenChain(res,rej){
        this.resolve = res;
        this.reject = rej;
    }
    
    function then(res,rej){
        var chain = new Chained() ;
        try {
            this._resolver(function(value) {
                return isThenable(value) ? value.then(res,rej) : resolution(chain,value,res);
            },function(ex) {
                resolution(chain,ex,rej) ;
            }) ;
        } catch (ex) {
            resolution(chain,ex,rej);
        }
        return chain ;
    }

    function Thenable(resolver) {
        this._resolver = resolver ;
        this.then = then ;
    };

    Thenable.resolve = function(v){
        return Thenable.isThenable(v) ? v : {then:function(resolve){return resolve(v)}};
    };

    Thenable.isThenable = isThenable ;

    return Thenable ;
} ;

},{}],17:[function(require,module,exports){
(function (process){
/* This code is based on:
zousan - A Lightning Fast, Yet Very Small Promise A+ Compliant Implementation
https://github.com/bluejava/zousan
Author: Glenn Crownover <glenn@bluejava.com> (http://www.bluejava.com)
Version 2.3.3
License: MIT */
"use strict";
module.exports = function(tick){
    tick = tick || (typeof process==="object" && process.nextTick) || (typeof setImmediate==="function" && setImmediate) || function(f){setTimeout(f,0)};
    var soon = (function () {
        var fq = [], fqStart = 0, bufferSize = 1024;
        function callQueue() {
            while (fq.length - fqStart) {
                try { fq[fqStart]() } catch(ex) { /* console.error(ex) */ }
                fq[fqStart++] = undefined;
                if (fqStart === bufferSize) {
                    fq.splice(0, bufferSize);
                    fqStart = 0;
                }
            }
        }

        return function (fn) {
            fq.push(fn);
            if (fq.length - fqStart === 1)
                tick(callQueue);
        };
    })();

    function Zousan(func) {
        if (func) {
            var me = this;
            func(function (arg) {
                me.resolve(arg);
            }, function (arg) {
                me.reject(arg);
            });
        }
    }

    Zousan.prototype = {
        resolve: function (value) {
            if (this.state !== undefined)
                return;
            if (value === this)
                return this.reject(new TypeError("Attempt to resolve promise with self"));
            var me = this;
            if (value && (typeof value === "function" || typeof value === "object")) {
                try {
                    var first = 0;
                    var then = value.then;
                    if (typeof then === "function") {
                        then.call(value, function (ra) {
                            if (!first++) {
                                me.resolve(ra);
                            }
                        }, function (rr) {
                            if (!first++) {
                                me.reject(rr);
                            }
                        });
                        return;
                    }
                } catch (e) {
                    if (!first)
                        this.reject(e);
                    return;
                }
            }
            this.state = STATE_FULFILLED;
            this.v = value;
            if (me.c)
                soon(function () {
                    for (var n = 0, l = me.c.length;n < l; n++)
                        STATE_FULFILLED(me.c[n], value);
                });
        },
        reject: function (reason) {
            if (this.state !== undefined)
                return;
            this.state = STATE_REJECTED;
            this.v = reason;
            var clients = this.c;
            if (clients)
                soon(function () {
                    for (var n = 0, l = clients.length;n < l; n++)
                        STATE_REJECTED(clients[n], reason);
                });
        },
        then: function (onF, onR) {
            var p = new Zousan();
            var client = {
                y: onF,
                n: onR,
                p: p
            };
            if (this.state === undefined) {
                if (this.c)
                    this.c.push(client);
                else
                    this.c = [client];
            } else {
                var s = this.state, a = this.v;
                soon(function () {
                    s(client, a);
                });
            }
            return p;
        }
    };

    function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
            try {
                var yret = c.y.call(undefined, arg);
                c.p.resolve(yret);
            } catch (err) {
                c.p.reject(err);
            }
        } else
            c.p.resolve(arg);
    }

    function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
            try {
                var yret = c.n.call(undefined, reason);
                c.p.resolve(yret);
            } catch (err) {
                c.p.reject(err);
            }
        } else
            c.p.reject(reason);
    }

    Zousan.resolve = function (val) {
        if (val && (val instanceof Zousan))
            return val ;
        var z = new Zousan();
        z.resolve(val);
        return z;
    };
    Zousan.reject = function (err) {
        if (err && (err instanceof Zousan))
            return err ;
        var z = new Zousan();
        z.reject(err);
        return z;
    };

    Zousan.version = "2.3.3-nodent" ;
    return Zousan ;
};

}).call(this,require('_process'))
},{"_process":22}],18:[function(require,module,exports){
module.exports = function(nodent,html,url,options){
	var f = [[],[]] ;
	var re = [/(.*)(<script[^>]*>)(.*)/i,/(.*)(<\/script>)(.*)/i] ;
	var m = 0 ;
	var initScript = true ;
	html = html.split("\n") ;

	for (var l=0; l<html.length; ) {
		var fragment = re[m].exec(html[l]) ;
		if (fragment) {
			if (m==0 && fragment[2].match("src="))
				fragment = null ;
		} 
		if (!fragment) {
			f[m].push(html[l++]) ;
		} else {
			if (m==1) {
				f[m].push(fragment[1]) ;
				pr = nodent.compile(f[1].join("\n"),url,3,options.compiler).code;
				if (initScript && options.runtime) {
					initScript = false ;
					if (options.runtime)
						f[0].push("Function.prototype.$asyncbind = "+nodent.$asyncbind.toString()+";\n") ;
				}
				f[0].push(pr) ;
				f[1] = [] ;
				m = 0 ;
				f[m].push(fragment[2]) ;
			} else {
				f[m].push(fragment[1]) ;
				f[m].push(fragment[2]) ;
				m = 1 ;
			}
			html[l] = fragment[3] ;
		}
	}
	return f[0].join("\n") ;
}

},{}],19:[function(require,module,exports){
(function (process,global,__dirname){


'use strict';
/**
 * NoDent - Asynchronous JavaScript Language extensions for Node
 *
 * AST transforms and node loader extension
 */
var stdJSLoader ;
var fs = require('fs') ;
var NodentCompiler = require('nodent-compiler') ;

// Config options used to control the run-time behaviour of the compiler
var config = {
	log:function(msg){ console.warn("Nodent: "+msg) },		// Where to print errors and warnings
	augmentObject:false,									// Only one has to say 'yes'
	extension:'.njs',										// The 'default' extension
	dontMapStackTraces:false,								// Only one has to say 'no'
	asyncStackTrace:false,
	babelTree:false,
	dontInstallRequireHook:false
} ;

// Code generation options, which are determined by the "use nodent"; directive. Specifically,
// the (optional) portion as in "use nodent<-option-set>"; is used to select a compilation
// behaviour on a file-by-file basis. There are preset option sets called "es7", "promise(s)"
// and "generators" (which cannot be over-written). Others can be specified via the
// 'setCompileOptions(name,options)' call, or via the 'nodent:{directive:{'name':{...}}}' entry in the
// current project's package.json. In the latter's case, the name 'default' is also reserved and
// is used for a bare 'use nodent' driective with no project-specific extension.
// Finally, the 'use nodent' directive can be followed by a JSON encoded set of options, for example:
//		'use nodent-es7 {"wrapAwait":true}';
//		'use nodent {"wrapAwait":true,"promise":true}';
//		'use nodent-generators {"parser":{"sourceType":"module"}}';
//
// The order of application of these options is:
//		initialCodeGenOpts (hard-coded)
//		named by the 'use nodent-OPTION', as read from the package.json
//		named by the 'use nodent-OPTION', as set by the setCompileOptions (or setDefaultCompileOptions)
//		set within the directive as a JSON-encoded extension

function copyObj(a){
	var o = {} ;
	a.forEach(function(b){
		if (b && typeof b==='object')
			for (var k in b)
				o[k] = b[k]  ;
	}) ;
	return o ;
};

var defaultCodeGenOpts = Object.create(NodentCompiler.initialCodeGenOpts, {es7:{value:true,writable:true,enumerable:true}}) ;
var optionSets = {
	default:defaultCodeGenOpts,
	es7:Object.create(defaultCodeGenOpts),
	promise:Object.create(defaultCodeGenOpts,{
		promises:{value:true,writable:true,enumerable:true}
	}),
	generator:Object.create(defaultCodeGenOpts,{
		generators:{value:true,writable:true,enumerable:true},
		es7:{value:false,writable:true,enumerable:true}
	}),
    engine:Object.create(defaultCodeGenOpts,{
        engine:{value:true,writable:true,enumerable:true},
        promises:{value:true,writable:true,enumerable:true}
    }),
    host:Object.create(defaultCodeGenOpts,{
        promises:{value:"host",writable:true,enumerable:true},
        es6target:{value:"host",writable:true,enumerable:true},
        engine:{value:"host",writable:true,enumerable:true}
    })
};
optionSets.promises = optionSets.promise ;
optionSets.generators = optionSets.generator ;

function globalErrorHandler(err) {
	throw err ;
}

/* Extract compiler options from code (either a string or AST) */
var useDirective = /^\s*['"]use\s+nodent-?([a-zA-Z0-9]*)?(\s*.*)?['"]\s*;/
var runtimes = require('nodent-runtime') ;
var $asyncbind = runtimes.$asyncbind ;
var $asyncspawn = runtimes.$asyncspawn ;
var Thenable = $asyncbind.Thenable ;

function isDirective(node){
    return node.type === 'ExpressionStatement' &&
        (node.expression.type === 'StringLiteral' ||
            (node.expression.type === 'Literal' && typeof node.expression.value === 'string')) ;
}

var hostOptions = {
    promises:"Promise",
    es6target:"()=>0",
    engine:"(async ()=>0)",
    noRuntime:"Promise"
} ;

function parseCompilerOptions(code,log,filename) {
    if (!log) log = console.warn.bind(console) ;
	var regex, set, parseOpts = {} ;
	if (typeof code=="string") {
		if (regex = code.match(useDirective)) {
			set = regex[1] || 'default' ;
		}
	} else { // code is an AST
		for (var i=0; i<code.body.length; i++) {
			if (isDirective(code.body[i].type)) {
			    var test = "'"+code.body[i].value+"'" ;
				if (regex = test.match(useDirective)) {
					set = regex[1] || 'default' ;
					break ;
				}
			} else {
			    break ; // Directives should preceed all other statements
			}
		}
	}
	if (!regex) {
	    if (!defaultCodeGenOpts.noUseDirective)
	        return null ;
	    set = "default" ;
	    regex = [null,null,"{}"] ;
	}
	if (set) {
	    try {
	        if (!filename)
	            filename = require('path').resolve('.') ;
	        else  if (!require('fs').lstatSync(filename).isDirectory())
	            filename = require('path').dirname(filename) ;

	        var packagePath = require('resolve').sync('package.json',{
	            moduleDirectory:[''],
	            extensions:[''],
	            basedir:filename
	        }) ;
	        var packageOptions = JSON.parse(fs.readFileSync(packagePath)).nodent.directive[set] ;
	    } catch(ex) {
	        // Meh
	    }
	}
	try {
		parseOpts = copyObj([optionSets[set],packageOptions,regex[2] && JSON.parse(regex[2])]);
	} catch(ex) {
		log("Invalid literal compiler option: "+((regex && regex[0]) || "<no options found>"));
	}

	Object.keys(hostOptions).forEach(function(k){
	    if (parseOpts[k] === 'host') {
	        parseOpts[k] = (function(){ try { eval(hostOptions[k]) ; return true } catch (ex) { return false } })()
	    } 
	}) ;

	if (parseOpts.promises || parseOpts.es7 || parseOpts.generators || parseOpts.engine) {
		if ((((parseOpts.promises || parseOpts.es7) && parseOpts.generators))) {
			log("No valid 'use nodent' directive, assumed -es7 mode") ;
			parseOpts = optionSets.es7 ;
		}

		if (parseOpts.generators || parseOpts.engine)
		    parseOpts.promises = true ;
		if (parseOpts.promises)
		    parseOpts.es7 = true ;
		return parseOpts ;
	}
	return null ; // No valid nodent options
}

function stripBOM(content) {
	// Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	// because the buffer-to-string conversion in `fs.readFileSync()`
	// translates it to FEFF, the UTF-16 BOM.
	if (content.charCodeAt(0) === 0xFEFF) {
		content = content.slice(1);
	}
	if (content.substring(0,2) === "#!") {
		content = "//"+content ;
	}
	return content;
}

function compileNodentedFile(nodent,log) {
    log = log || nodent.log ;
	return function(mod, filename, parseOpts) {
		var content = stripBOM(fs.readFileSync(filename, 'utf8'));
		var pr = nodent.parse(content,filename,parseOpts);
		parseOpts = parseOpts || parseCompilerOptions(pr.ast,log, filename) ;
		nodent.asynchronize(pr,undefined,parseOpts,log) ;
		nodent.prettyPrint(pr,parseOpts) ;
		mod._compile(pr.code, pr.filename);
	}
};

// Things that DON'T depend on initOpts (or config, and therefore nodent)
function asyncify(promiseProvider) {
	promiseProvider = promiseProvider || Thenable ;
	return function(obj,filter,suffix) {
		if (Array.isArray(filter)) {
			var names = filter ;
			filter = function(k,o) {
				return names.indexOf(k)>=0 ;
			}
		} else {
			filter = filter || function(k,o) {
				return (!k.match(/Sync$/) || !(k.replace(/Sync$/,"") in o)) ;
			};
		}

		if (!suffix)
			suffix = "" ;

		var o = Object.create(obj) ;
		for (var j in o) (function(){
			var k = j ;
			try {
				if (typeof obj[k]==='function' && (!o[k+suffix] || !o[k+suffix].isAsync) && filter(k,o)) {
					o[k+suffix] = function() {
						var a = Array.prototype.slice.call(arguments) ;
						var resolver = function($return,$error) {
							var cb = function(err,ok){
								if (err)
									return $error(err) ;
								switch (arguments.length) {
								case 0: return $return() ;
								case 2: return $return(ok) ;
								default: return $return(Array.prototype.slice.call(arguments,1)) ;
								}
							} ;
							// If more args were supplied than declared, push the CB
							if (a.length > obj[k].length) {
								a.push(cb) ;
							} else {
								// Assume the CB is the final arg
								a[obj[k].length-1] = cb ;
							}
							var ret = obj[k].apply(obj,a) ;
						} ;
						return new promiseProvider(resolver) ;
					}
					o[k+suffix].isAsync = true ;
				}
			} catch (ex) {
				// Log the fact that we couldn't augment this member??
			}
		})() ;
		o["super"] = obj ;
		return o ;
	}
};

function generateRequestHandler(path, matchRegex, options) {
	var cache = {} ;
	var compiler = this ;

	if (!matchRegex)
		matchRegex = /\.njs$/ ;
	if (!options)
		options = {compiler:{}} ;
	else if (!options.compiler)
		options.compiler = {} ;
	var compilerOptions = copyObj([NodentCompiler.initialCodeGenOpts,options.compiler]) ;

	return function (req, res, next) {
		if (cache[req.url]) {
			res.setHeader("Content-Type", cache[req.url].contentType);
			options.setHeaders && options.setHeaders(res) ;
			res.write(cache[req.url].output) ;
			res.end();
			return ;
		}

		if (!req.url.match(matchRegex) && !(options.htmlScriptRegex && req.url.match(options.htmlScriptRegex))) {
			return next && next() ;
		}

		function sendException(ex) {
			res.statusCode = 500 ;
			res.write(ex.toString()) ;
			res.end() ;
		}

		var filename = path+req.url ;
		if (options.extensions && !fs.existsSync(filename)) {
			for (var i=0; i<options.extensions.length; i++) {
				if (fs.existsSync(filename+"."+options.extensions[i])) {
					filename = filename+"."+options.extensions[i] ;
					break ;
				}
			}
		}
		fs.readFile(filename,function(err,content){
			if (err) {
				return sendException(err) ;
			} else {
				try {
					var pr,contentType ;
					if (options.htmlScriptRegex && req.url.match(options.htmlScriptRegex)) {
						pr = require('./htmlScriptParser')(compiler,content.toString(),req.url,options) ;
						contentType = "text/html" ;
					} else {
						if (options.runtime) {
							pr = "Function.prototype."+compilerOptions.$asyncbind+" = "+$asyncbind.toString()+";" ;
							if (compilerOptions.generators)
								pr += "Function.prototype."+compilerOptions.$asyncspawn+" = "+$asyncspawn.toString()+";" ;
							if (compilerOptions.wrapAwait && !compilerOptions.promises)
								pr += "Object."+compilerOptions.$makeThenable+" = "+Thenable.resolve.toString()+";" ;
							compilerOptions.mapStartLine = pr.split("\n").length ;
							pr += "\n";
						} else {
							pr = "" ;
						}
						pr += compiler.compile(content.toString(),req.url,null,compilerOptions).code;
						contentType = "application/javascript" ;
					}
					res.setHeader("Content-Type", contentType);
					if (options.enableCache)
						cache[req.url] = {output:pr,contentType:contentType} ;
					options.setHeaders && options.setHeaders(res) ;
					res.write(pr) ;
					res.end();
				} catch (ex) {
					return sendException(ex) ;
				}
			}
		}) ;
	};
};

function requireCover(cover,opts) {
    opts = opts || {} ;
    var key = cover+'|'+Object.keys(opts).sort().reduce(function(a,k){ return a+k+JSON.stringify(opts[k])},"") ;
    if (!this.covers[key]) {
        if (cover.indexOf("/")>=0)
            this.covers[key] = require(cover) ;
        else
            this.covers[key] = require(__dirname+"/covers/"+cover);
    }
    return this.covers[key](this,opts) ;
}

NodentCompiler.prototype.Thenable = Thenable ;
NodentCompiler.prototype.EagerThenable = $asyncbind.EagerThenableFactory ;
NodentCompiler.prototype.asyncify =  asyncify ;
NodentCompiler.prototype.require =  requireCover ;
NodentCompiler.prototype.generateRequestHandler = generateRequestHandler ;
// Exported so they can be transported to a client
NodentCompiler.prototype.$asyncspawn =  $asyncspawn ;
NodentCompiler.prototype.$asyncbind =  $asyncbind ;
NodentCompiler.prototype.parseCompilerOptions =  parseCompilerOptions ;

$asyncbind.call($asyncbind) ;

function prepareMappedStackTrace(error, stack) {
	function mappedTrace(frame) {
		var source = frame.getFileName();
		if (source && NodentCompiler.prototype.smCache[source]) {
			var position = NodentCompiler.prototype.smCache[source].smc.originalPositionFor({
				line: frame.getLineNumber(),
				column: frame.getColumnNumber()
			});
			if (position && position.line) {
				var desc = frame.toString() ;
				return '\n    at '
					+ desc.substring(0,desc.length-1)
					+ " => \u2026"+position.source+":"+position.line+":"+position.column
					+ (frame.getFunctionName()?")":"");
			}
		}
		return '\n    at '+frame;
	}
	return error + stack.map(mappedTrace).join('');
}

// Set the 'global' references to the (backward-compatible) versions
// required by the current version of Nodent
function setGlobalEnvironment(initOpts) {
	var codeGenOpts = defaultCodeGenOpts ;
	/*
	Object.$makeThenable
	Object.prototype.isThenable
	Object.prototype.asyncify
	Function.prototype.noDentify // Moved to a cover as of v3.0.0
	Function.prototype.$asyncspawn
	Function.prototype.$asyncbind
	Error.prepareStackTrace
	global[defaultCodeGenOpts.$error]
	*/

	var augmentFunction = {} ;
	augmentFunction[defaultCodeGenOpts.$asyncbind] = {
		value:$asyncbind,
		writable:true,
		enumerable:false,
		configurable:true
	};
	augmentFunction[defaultCodeGenOpts.$asyncspawn] = {
		value:$asyncspawn,
		writable:true,
		enumerable:false,
		configurable:true
	};
	try {
	    Object.defineProperties(Function.prototype,augmentFunction) ;
	} catch (ex) {
	    initOpts.log("Function prototypes already assigned: ",ex.messsage) ;
	}

	/**
	 * We need a global to handle funcbacks for which no error handler has ever been defined.
	 */
	if (!(defaultCodeGenOpts[defaultCodeGenOpts.$error] in global)) {
		global[defaultCodeGenOpts[defaultCodeGenOpts.$error]] = globalErrorHandler ;
	}

	// "Global" options:
	// If anyone wants to augment Object, do it. The augmentation does not depend on the config options
	if (initOpts.augmentObject) {
		Object.defineProperties(Object.prototype,{
			"asyncify":{
				value:function(promiseProvider,filter,suffix){
					return asyncify(promiseProvider)(this,filter,suffix)
				},
				writable:true,
				configurable:true
			},
			"isThenable":{
				value:function(){ return Thenable.isThenable(this) },
				writable:true,
				configurable:true
			}
		}) ;
	}

	Object[defaultCodeGenOpts.$makeThenable] = Thenable.resolve ;
}

/* Construct a 'nodent' object - combining logic and options */
var compiler ;
function initialize(initOpts){
	// Validate the options
/* initOpts:{
 * 		log:function(msg),
 * 		augmentObject:boolean,
 * 		extension:string?
 * 		dontMapStackTraces:boolean
 */
	if (!initOpts)
		initOpts = {} ;
	else {
		// Throw an error for any options we don't know about
		for (var k in initOpts) {
			if (k==="use")
				continue ; // deprecated
			if (!config.hasOwnProperty(k))
				throw new Error("NoDent: unknown option: "+k+"="+JSON.stringify(initOpts[k])) ;
		}
	}


	if (compiler) {
		compiler.setOptions(initOpts);
	} else {
		// Fill in any missing options with their default values
		Object.keys(config).forEach(function(k){
			if (!(k in initOpts))
				initOpts[k] = config[k] ;
		}) ;
		compiler = new NodentCompiler(initOpts) ;
	}

	// If anyone wants to mapStackTraces, do it. The augmentation does not depend on the config options
	if (!initOpts.dontMapStackTraces) {
		// This function is part of the V8 stack trace API, for more info see:
		// http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
		Error.prepareStackTrace = prepareMappedStackTrace ;
	}

	setGlobalEnvironment(initOpts) ;

	/* If we've not done it before, create a compiler for '.js' scripts */
	// Create a new compiler

	var nodentLoaders = [];
	function compareSemVer(a,b) {
		a = a.split('.') ;
		b = b.split('.') ;
		for (var i=0;i<3;i++) {
			if (a[i]<b[i]) return -1 ;
			if (a[i]>b[i]) return 1 ;
		}
		return 0 ;
	}

    function versionAwareNodentJSLoader(mod,filename) {
        if (filename.match(/nodent\/nodent\.js$/)) {
            var downLevel = {path:filename.replace(/\/node_modules\/nodent\/nodent\.js$/,"")} ;
            if (downLevel.path) {
                downLevel.version = JSON.parse(fs.readFileSync(filename.replace(/nodent\.js$/,"package.json"))).version ;
                // Load the specified nodent
                stdJSLoader(mod,filename) ;

                // If the version of nodent we've just loaded is lower than the
                // current (version-aware) version, hook the initialzer
                // so we can replace the JS loader after it's been run.
                if (compareSemVer(downLevel.version,NodentCompiler.prototype.version)<0) {
                    downLevel.originalNodentLoader = mod.exports ;
                    mod.exports = function(){
                        var previousJSLoader = require.extensions['.js'] ;
                        var defaultNodentInstance = downLevel.originalNodentLoader.apply(this,arguments) ;
                        downLevel.jsCompiler = require.extensions['.js'] ;
                        require.extensions['.js'] = previousJSLoader ;
                        setGlobalEnvironment(initOpts) ;
                        return defaultNodentInstance ;
                    } ;
                    Object.keys(downLevel.originalNodentLoader).forEach(function(k){
                        mod.exports[k] = downLevel.originalNodentLoader[k] ;
                    }) ;
                    nodentLoaders.push(downLevel) ;
                    nodentLoaders = nodentLoaders.sort(function(a,b){
                        return b.path.length - a.path.length ;
                    }) ;
                }
            }
        } else if (filename.match(/node_modules\/nodent\/.*\.js$/)) {
            // Things inside nodent always use the standard loader
            return stdJSLoader(mod,filename) ;
        } else {
            // The the appropriate loader for this file
            for (var n=0; n<nodentLoaders.length; n++) {
                if (filename.slice(0,nodentLoaders[n].path.length)==nodentLoaders[n].path) {
                    //console.log("Using nodent@",nodentLoaders[n].version,"to load",filename) ;
                    if (!nodentLoaders[n].jsCompiler) {
                        // The client app loaded, but never initialised nodent (so it can only
                        // be using library/runtime functions, not the require-hook compiler)
                        return stdJSLoader(mod,filename) ;
                    } else {
                        if (nodentLoaders[n].jsCompiler === versionAwareNodentJSLoader)
                            break ;
                        return nodentLoaders[n].jsCompiler.apply(this,arguments) ;
                    }
                }
            }

            var content = stripBOM(fs.readFileSync(filename, 'utf8'));
            var parseOpts = parseCompilerOptions(content,initOpts.log,filename) ;
            if (parseOpts) {
                return stdCompiler(mod,filename,parseOpts) ;
            }
            return stdJSLoader(mod,filename) ;
        }
    }

    function registerExtension(extension) {
        if (Array.isArray(extension))
            return extension.forEach(registerExtension) ;

        if (require.extensions[extension]) {
            var changedKeys = Object.keys(initOpts).filter(function(k){ return compiler[k] != initOpts[k]}) ;
            if (changedKeys.length) {
                initOpts.log("File extension "+extension+" already configured for async/await compilation.") ;
            }
        }
    	require.extensions[extension] = compileNodentedFile(compiler,initOpts.log) ;
    }

    if (!initOpts.dontInstallRequireHook) {
		if (!stdJSLoader) {
			stdJSLoader = require.extensions['.js'] ;
			var stdCompiler = compileNodentedFile(compiler,initOpts.log) ;
			require.extensions['.js'] = versionAwareNodentJSLoader ;
		}

		/* If the initOpts specified a file extension, use this compiler for it */
		if (initOpts.extension) {
			registerExtension(initOpts.extension) ;
		}
	}

	// Finally, load any required covers
	if (initOpts.use) {
		if (Array.isArray(initOpts.use)) {
			initOpts.log("Warning: nodent({use:[...]}) is deprecated. Use nodent.require(module,options)\n"+(new Error().stack).split("\n")[2]);
			if (initOpts.use.length) {
				initOpts.use.forEach(function(x){
					compiler[x] = compiler.require(x) ;
				}) ;
			}
		} else {
			initOpts.log("Warning: nodent({use:{...}}) is deprecated. Use nodent.require(module,options)\n"+(new Error().stack).split("\n")[2]);
			Object.keys(initOpts.use).forEach(function(x){
				compiler[x] = compiler.require(x,initOpts.use[x])
			}) ;
		}
	}
	return compiler ;
} ;

/* Export these so that we have the opportunity to set the options for the default .js parser */
initialize.setDefaultCompileOptions = function(compiler,env) {
	if (compiler) {
		Object.keys(compiler).forEach(function(k){
			if (!(k in defaultCodeGenOpts))
				throw new Error("NoDent: unknown compiler option: "+k) ;
			defaultCodeGenOpts[k] = compiler[k] ;
		}) ;
	}

	env && Object.keys(env).forEach(function(k){
		if (!(k in env))
			throw new Error("NoDent: unknown configuration option: "+k) ;
		config[k] = env[k] ;
	}) ;
	return initialize ;
};

initialize.setCompileOptions = function(set,compiler) {
	optionSet[set] = optionSet[set] || copyObj([defaultCodeGenOpts]);
	compiler && Object.keys(compiler).forEach(function(k){
		if (!(k in defaultCodeGenOpts))
			throw new Error("NoDent: unknown compiler option: "+k) ;
		optionSet[set][k] = compiler[k] ;
	}) ;
	return initialize ;
};

initialize.asyncify = asyncify ;
initialize.Thenable = $asyncbind.Thenable ;
initialize.EagerThenable = $asyncbind.EagerThenableFactory ;

module.exports = initialize ;

function runFromCLI(){
    function readStream(stream) {
        return new Thenable(function ($return, $error) {
            var buffer = [] ;
            stream.on('data',function(data){
                buffer.push(data)
            }) ;
            stream.on('end',function(){
                var code = buffer.map(function(b){ return b.toString()}).join("") ;
                return $return(code);
            }) ;
            stream.on('error',$error) ;
        }.$asyncbind(this));
    }

    function getCLIOpts(start) {
        var o = [] ;
        for (var i=start || 2; i<process.argv.length; i++) {
            if (process.argv[i].slice(0,2)==='--') {
                var opt = process.argv[i].slice(2).split('=') ;
                o[opt[0]] = opt[1] || true ;
            }
            else
                o.push(process.argv[i]) ;
        }
        return o ;
    }

    function processInput(content,name){
        try {
            var pr ;
            var parseOpts ;

            // Input options
            if (cli.fromast) {
                content = JSON.parse(content) ;
                pr = { origCode:"", filename:filename, ast: content } ;
                parseOpts = parseCompilerOptions(content,nodent.log) ;
                if (!parseOpts) {
                    var directive = cli.use ? '"use nodent-'+cli.use+'";' : '"use nodent";' ;
                    parseOpts = parseCompilerOptions(directive,nodent.log) ;
                    console.warn("/* "+filename+": No 'use nodent*' directive, assumed "+directive+" */") ;
                }
            } else {
                parseOpts = parseCompilerOptions(cli.use?'"use nodent-'+cli.use+'";':content,nodent.log) ;
                if (!parseOpts) {
                    parseOpts = parseCompilerOptions('"use nodent";',nodent.log) ;
                    if (!cli.dest)
                        console.warn("/* "+filename+": 'use nodent*' directive missing/ignored, assumed 'use nodent;' */") ;
                }
                pr = nodent.parse(content,filename,parseOpts);
            }

            // Processing options
            if (!cli.parseast && !cli.pretty)
                nodent.asynchronize(pr,undefined,parseOpts,nodent.log) ;

            // Output options
            nodent.prettyPrint(pr,parseOpts) ;
            if (cli.out || cli.pretty || cli.dest) {
                if (cli.dest && !name)
                    throw new Error("Can't write unknown file to "+cli.dest) ;

                var output = "" ;
                if (cli.runtime) {
                    output += ("Function.prototype.$asyncbind = "+Function.prototype.$asyncbind.toString()+";\n") ;
                    output += ("global.$error = global.$error || "+global.$error.toString()+";\n") ;
                }
                output += pr.code ;
                if (name && cli.dest) {
                    fs.writeFileSync(cli.dest+name,output) ;
                    console.log("Compiled",cli.dest+name) ;
                } else {
                    console.log(output);
                }
            }
            if (cli.minast || cli.parseast) {
                console.log(JSON.stringify(pr.ast,function(key,value){
                    return key[0]==="$" || key.match(/^(start|end|loc)$/)?undefined:value
                },2,null)) ;
            }
            if (cli.ast) {
                console.log(JSON.stringify(pr.ast,function(key,value){ return key[0]==="$"?undefined:value},0)) ;
            }
            if (cli.exec) {
                (new Function(pr.code))() ;
            }
        } catch (ex) {
            console.error(ex) ;
        }
    }

	var path = require('path') ;
	var initOpts = (process.env.NODENT_OPTS && JSON.parse(process.env.NODENT_OPTS)) || {};
	var filename, cli = getCLIOpts() ;
	initialize.setDefaultCompileOptions({
		sourcemap:cli.sourcemap,
        wrapAwait:cli.wrapAwait,
        lazyThenables:cli.lazyThenables,
        noRuntime:cli.noruntime,
        es6target:cli.es6target,
        parser:cli.noextensions?{noNodentExtensions:true}:undefined
	});

	var nodent = initialize({
		augmentObject:true
	}) ;

	if (!cli.fromast && !cli.parseast && !cli.pretty && !cli.out && !cli.dest && !cli.ast && !cli.minast && !cli.exec) {
		// No input/output options - just require the
		// specified module now we've initialized nodent
		try {
			var mod = path.resolve(cli[0]) ;
			return require(mod);
		} catch (ex) {
			ex && (ex.message = cli[0]+": "+ex.message) ;
			throw ex ;
		}
	}

	if (cli.length==0 || cli[0]==='-') {
		filename = "(stdin)" ;
		return readStream(process.stdin).then(processInput,globalErrorHandler) ;
	} else {
	    for (var i=0; i<cli.length; i++) {
    		filename = path.resolve(cli[i]) ;
    		processInput(stripBOM(fs.readFileSync(filename, 'utf8')),cli[i]) ;
	    }
	    return ;
	}
}

if (require.main===module && process.argv.length>=3)
    runFromCLI() ;

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},"/node_modules/nodent")
},{"./htmlScriptParser":18,"_process":22,"fs":7,"nodent-compiler":10,"nodent-runtime":15,"path":20,"resolve":23}],20:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":22}],21:[function(require,module,exports){
(function (process){
'use strict';

var isWindows = process.platform === 'win32';

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

win32.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};



// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


posix.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


if (isWindows)
  module.exports = win32.parse;
else /* posix */
  module.exports = posix.parse;

module.exports.posix = posix.parse;
module.exports.win32 = win32.parse;

}).call(this,require('_process'))
},{"_process":22}],22:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],23:[function(require,module,exports){
var core = require('./lib/core');
var async = require('./lib/async');
async.core = core;
async.isCore = function isCore(x) { return core[x]; };
async.sync = require('./lib/sync');

exports = async;
module.exports = async;

},{"./lib/async":24,"./lib/core":27,"./lib/sync":29}],24:[function(require,module,exports){
(function (process){
var core = require('./core');
var fs = require('fs');
var path = require('path');
var caller = require('./caller.js');
var nodeModulesPaths = require('./node-modules-paths.js');

module.exports = function resolve(x, options, callback) {
    var cb = callback;
    var opts = options || {};
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    if (typeof x !== 'string') {
        var err = new TypeError('Path must be a string.');
        return process.nextTick(function () {
            cb(err);
        });
    }

    var isFile = opts.isFile || function (file, cb) {
        fs.stat(file, function (err, stat) {
            if (!err) {
                return cb(null, stat.isFile() || stat.isFIFO());
            }
            if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
            return cb(err);
        });
    };
    var readFile = opts.readFile || fs.readFile;

    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..' || x.slice(-1) === '/') res += '/';
        if (/\/$/.test(x) && res === y) {
            loadAsDirectory(res, opts.package, onfile);
        } else loadAsFile(res, opts.package, onfile);
    } else loadNodeModules(x, y, function (err, n, pkg) {
        if (err) cb(err);
        else if (n) cb(null, n, pkg);
        else if (core[x]) return cb(null, x);
        else {
            var moduleError = new Error("Cannot find module '" + x + "' from '" + y + "'");
            moduleError.code = 'MODULE_NOT_FOUND';
            cb(moduleError);
        }
    });

    function onfile(err, m, pkg) {
        if (err) cb(err);
        else if (m) cb(null, m, pkg);
        else loadAsDirectory(res, function (err, d, pkg) {
            if (err) cb(err);
            else if (d) cb(null, d, pkg);
            else {
                var moduleError = new Error("Cannot find module '" + x + "' from '" + y + "'");
                moduleError.code = 'MODULE_NOT_FOUND';
                cb(moduleError);
            }
        });
    }

    function loadAsFile(x, thePackage, callback) {
        var loadAsFilePackage = thePackage;
        var cb = callback;
        if (typeof loadAsFilePackage === 'function') {
            cb = loadAsFilePackage;
            loadAsFilePackage = undefined;
        }

        var exts = [''].concat(extensions);
        load(exts, x, loadAsFilePackage);

        function load(exts, x, loadPackage) {
            if (exts.length === 0) return cb(null, undefined, loadPackage);
            var file = x + exts[0];

            var pkg = loadPackage;
            if (pkg) onpkg(null, pkg);
            else loadpkg(path.dirname(file), onpkg);

            function onpkg(err, pkg_, dir) {
                pkg = pkg_;
                if (err) return cb(err);
                if (dir && pkg && opts.pathFilter) {
                    var rfile = path.relative(dir, file);
                    var rel = rfile.slice(0, rfile.length - exts[0].length);
                    var r = opts.pathFilter(pkg, x, rel);
                    if (r) return load(
                        [''].concat(extensions.slice()),
                        path.resolve(dir, r),
                        pkg
                    );
                }
                isFile(file, onex);
            }
            function onex(err, ex) {
                if (err) return cb(err);
                if (ex) return cb(null, file, pkg);
                load(exts.slice(1), x, pkg);
            }
        }
    }

    function loadpkg(dir, cb) {
        if (dir === '' || dir === '/') return cb(null);
        if (process.platform === 'win32' && (/^\w:[/\\]*$/).test(dir)) {
            return cb(null);
        }
        if (/[/\\]node_modules[/\\]*$/.test(dir)) return cb(null);

        var pkgfile = path.join(dir, 'package.json');
        isFile(pkgfile, function (err, ex) {
            // on err, ex is false
            if (!ex) return loadpkg(path.dirname(dir), cb);

            readFile(pkgfile, function (err, body) {
                if (err) cb(err);
                try { var pkg = JSON.parse(body); } catch (jsonErr) {}

                if (pkg && opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }
                cb(null, pkg, dir);
            });
        });
    }

    function loadAsDirectory(x, loadAsDirectoryPackage, callback) {
        var cb = callback;
        var fpkg = loadAsDirectoryPackage;
        if (typeof fpkg === 'function') {
            cb = fpkg;
            fpkg = opts.package;
        }

        var pkgfile = path.join(x, 'package.json');
        isFile(pkgfile, function (err, ex) {
            if (err) return cb(err);
            if (!ex) return loadAsFile(path.join(x, 'index'), fpkg, cb);

            readFile(pkgfile, function (err, body) {
                if (err) return cb(err);
                try {
                    var pkg = JSON.parse(body);
                } catch (jsonErr) {}

                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }

                if (pkg.main) {
                    if (pkg.main === '.' || pkg.main === './') {
                        pkg.main = 'index';
                    }
                    loadAsFile(path.resolve(x, pkg.main), pkg, function (err, m, pkg) {
                        if (err) return cb(err);
                        if (m) return cb(null, m, pkg);
                        if (!pkg) return loadAsFile(path.join(x, 'index'), pkg, cb);

                        var dir = path.resolve(x, pkg.main);
                        loadAsDirectory(dir, pkg, function (err, n, pkg) {
                            if (err) return cb(err);
                            if (n) return cb(null, n, pkg);
                            loadAsFile(path.join(x, 'index'), pkg, cb);
                        });
                    });
                    return;
                }

                loadAsFile(path.join(x, '/index'), pkg, cb);
            });
        });
    }

    function processDirs(cb, dirs) {
        if (dirs.length === 0) return cb(null, undefined);
        var dir = dirs[0];

        var file = path.join(dir, x);
        loadAsFile(file, undefined, onfile);

        function onfile(err, m, pkg) {
            if (err) return cb(err);
            if (m) return cb(null, m, pkg);
            loadAsDirectory(path.join(dir, x), undefined, ondir);
        }

        function ondir(err, n, pkg) {
            if (err) return cb(err);
            if (n) return cb(null, n, pkg);
            processDirs(cb, dirs.slice(1));
        }
    }
    function loadNodeModules(x, start, cb) {
        processDirs(cb, nodeModulesPaths(start, opts));
    }
};

}).call(this,require('_process'))
},{"./caller.js":25,"./core":27,"./node-modules-paths.js":28,"_process":22,"fs":7,"path":20}],25:[function(require,module,exports){
module.exports = function () {
    // see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    var origPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) { return stack; };
    var stack = (new Error()).stack;
    Error.prepareStackTrace = origPrepareStackTrace;
    return stack[2].getFileName();
};

},{}],26:[function(require,module,exports){
module.exports={
    "assert": true,
    "buffer_ieee754": "< 0.9.7",
    "buffer": true,
    "child_process": true,
    "cluster": true,
    "console": true,
    "constants": true,
    "crypto": true,
    "_debugger": "< 8",
    "dgram": true,
    "dns": true,
    "domain": true,
    "events": true,
    "freelist": "< 6",
    "fs": true,
    "http": true,
    "http2": ">= 8.8",
    "https": true,
    "_http_server": ">= 0.11",
    "_linklist": "< 8",
    "module": true,
    "net": true,
    "os": true,
    "path": true,
    "perf_hooks": ">= 8.5",
    "process": ">= 1",
    "punycode": true,
    "querystring": true,
    "readline": true,
    "repl": true,
    "stream": true,
    "string_decoder": true,
    "sys": true,
    "timers": true,
    "tls": true,
    "tty": true,
    "url": true,
    "util": true,
    "v8": ">= 1",
    "vm": true,
    "zlib": true
}

},{}],27:[function(require,module,exports){
(function (process){
var current = (process.versions && process.versions.node && process.versions.node.split('.')) || [];

function versionIncluded(specifier) {
    if (specifier === true) { return true; }
    var parts = specifier.split(' ');
    var op = parts[0];
    var versionParts = parts[1].split('.');

    for (var i = 0; i < 3; ++i) {
        var cur = Number(current[i] || 0);
        var ver = Number(versionParts[i] || 0);
        if (cur === ver) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        }
        if (op === '<') {
            return cur < ver;
        } else if (op === '>=') {
            return cur >= ver;
        } else {
            return false;
        }
    }
    return false;
}

var data = require('./core.json');

var core = {};
for (var mod in data) { // eslint-disable-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = versionIncluded(data[mod]);
    }
}
module.exports = core;

}).call(this,require('_process'))
},{"./core.json":26,"_process":22}],28:[function(require,module,exports){
var path = require('path');
var fs = require('fs');
var parse = path.parse || require('path-parse');

module.exports = function nodeModulesPaths(start, opts) {
    var modules = opts && opts.moduleDirectory
        ? [].concat(opts.moduleDirectory)
        : ['node_modules'];

    // ensure that `start` is an absolute path at this point,
    // resolving against the process' current working directory
    var absoluteStart = path.resolve(start);

    if (opts && opts.preserveSymlinks === false) {
        try {
            absoluteStart = fs.realpathSync(absoluteStart);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }
    }

    var prefix = '/';
    if (/^([A-Za-z]:)/.test(absoluteStart)) {
        prefix = '';
    } else if (/^\\\\/.test(absoluteStart)) {
        prefix = '\\\\';
    }

    var paths = [absoluteStart];
    var parsed = parse(absoluteStart);
    while (parsed.dir !== paths[paths.length - 1]) {
        paths.push(parsed.dir);
        parsed = parse(parsed.dir);
    }

    var dirs = paths.reduce(function (dirs, aPath) {
        return dirs.concat(modules.map(function (moduleDir) {
            return path.join(prefix, aPath, moduleDir);
        }));
    }, []);

    return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
};

},{"fs":7,"path":20,"path-parse":21}],29:[function(require,module,exports){
var core = require('./core');
var fs = require('fs');
var path = require('path');
var caller = require('./caller.js');
var nodeModulesPaths = require('./node-modules-paths.js');

module.exports = function (x, options) {
    if (typeof x !== 'string') {
        throw new TypeError('Path must be a string.');
    }
    var opts = options || {};
    var isFile = opts.isFile || function (file) {
        try {
            var stat = fs.statSync(file);
        } catch (e) {
            if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return false;
            throw e;
        }
        return stat.isFile() || stat.isFIFO();
    };
    var readFileSync = opts.readFileSync || fs.readFileSync;

    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..' || x.slice(-1) === '/') res += '/';
        var m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) return m;
    } else {
        var n = loadNodeModulesSync(x, y);
        if (n) return n;
    }

    if (core[x]) return x;

    var err = new Error("Cannot find module '" + x + "' from '" + y + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;

    function loadAsFileSync(x) {
        if (isFile(x)) {
            return x;
        }

        for (var i = 0; i < extensions.length; i++) {
            var file = x + extensions[i];
            if (isFile(file)) {
                return file;
            }
        }
    }

    function loadAsDirectorySync(x) {
        var pkgfile = path.join(x, '/package.json');
        if (isFile(pkgfile)) {
            try {
                var body = readFileSync(pkgfile, 'UTF8');
                var pkg = JSON.parse(body);

                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, x);
                }

                if (pkg.main) {
                    if (pkg.main === '.' || pkg.main === './') {
                        pkg.main = 'index';
                    }
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                    var n = loadAsDirectorySync(path.resolve(x, pkg.main));
                    if (n) return n;
                }
            } catch (e) {}
        }

        return loadAsFileSync(path.join(x, '/index'));
    }

    function loadNodeModulesSync(x, start) {
        var dirs = nodeModulesPaths(start, opts);
        for (var i = 0; i < dirs.length; i++) {
            var dir = dirs[i];
            var m = loadAsFileSync(path.join(dir, '/', x));
            if (m) return m;
            var n = loadAsDirectorySync(path.join(dir, '/', x));
            if (n) return n;
        }
    }
};

},{"./caller.js":25,"./core":27,"./node-modules-paths.js":28,"fs":7,"path":20}],30:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

},{"./util":39}],31:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = require('./base64');

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

},{"./base64":32}],32:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

},{}],33:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};

},{}],34:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;

},{"./util":39}],35:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],36:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');
var binarySearch = require('./binary-search');
var ArraySet = require('./array-set').ArraySet;
var base64VLQ = require('./base64-vlq');
var quickSort = require('./quick-sort').quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap)
    : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      if (source != null && sourceRoot != null) {
        source = util.join(sourceRoot, source);
      }
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    if (this.sourceRoot != null) {
      needle.source = util.relative(this.sourceRoot, needle.source);
    }
    if (!this._sources.has(needle.source)) {
      return [];
    }
    needle.source = this._sources.indexOf(needle.source);

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          if (this.sourceRoot != null) {
            source = util.join(this.sourceRoot, source);
          }
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    if (this.sourceRoot != null) {
      aSource = util.relative(this.sourceRoot, aSource);
    }

    if (this._sources.has(aSource)) {
      return this.sourcesContent[this._sources.indexOf(aSource)];
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + aSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    if (this.sourceRoot != null) {
      source = util.relative(this.sourceRoot, source);
    }
    if (!this._sources.has(source)) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    source = this._sources.indexOf(source);

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        if (section.consumer.sourceRoot !== null) {
          source = util.join(section.consumer.sourceRoot, source);
        }
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"./array-set":30,"./base64-vlq":31,"./binary-search":33,"./quick-sort":35,"./util":39}],37:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = require('./base64-vlq');
var util = require('./util');
var ArraySet = require('./array-set').ArraySet;
var MappingList = require('./mapping-list').MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;

},{"./array-set":30,"./base64-vlq":31,"./mapping-list":34,"./util":39}],38:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = require('./source-map-generator').SourceMapGenerator;
var util = require('./util');

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex];
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex];
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;

},{"./source-map-generator":37,"./util":39}],39:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

},{}],40:[function(require,module,exports){
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = require('./lib/source-map-generator').SourceMapGenerator;
exports.SourceMapConsumer = require('./lib/source-map-consumer').SourceMapConsumer;
exports.SourceNode = require('./lib/source-node').SourceNode;

},{"./lib/source-map-consumer":36,"./lib/source-map-generator":37,"./lib/source-node":38}],"ajv-async":[function(require,module,exports){
'use strict';

var nodent = require('nodent')({ log: false, dontInstallRequireHook: true });


module.exports = function (ajv) {
  var opts = ajv._opts;
  var t = opts.transpile;
  if (typeof t != 'boolean' && t !== undefined)
    throw new TypeError('transpile option must be boolean or undefined');
  if (t) {
    opts.processCode = nodentTranspile;
  } else if (!checkAsync()) {
    if (t === false) throw new Error('async functions not supported');
    opts.processCode = nodentTranspile;
  }
  return ajv;
};


function checkAsync() {
  /* jshint evil: true */
  try {
    (new Function('(async function(){})()'))();
    /* istanbul ignore next */
    return true;
  } catch(e) {}
}


function nodentTranspile(code) {
  return nodent.compile(code, '', { promises: true, sourcemap: false }).code;
}

},{"nodent":19}]},{},[])("ajv-async")
});