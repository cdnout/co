/**
 * @license
 * v1.3.11
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2020 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https://github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@pnp/common"),require("@pnp/odata"),require("@pnp/sp"),require("@pnp/logging")):"function"==typeof define&&define.amd?define(["exports","@pnp/common","@pnp/odata","@pnp/sp","@pnp/logging"],e):e((t.pnp=t.pnp||{},t.pnp["sp-clientsvc"]={}),t.pnp.common,t.pnp.odata,t.pnp.sp,t.pnp.logging)}(this,function(t,c,h,l,o){"use strict";var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function e(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function s(){return'<ObjectPath Id="$$ID$$" ObjectPathId="$$PATH_ID$$" />'}function i(t,e){void 0===t&&(t=null),void 0===e&&(e=null);var n=[];return n.push('<Query Id="$$ID$$" ObjectPathId="$$PATH_ID$$">'),null===t||t.length<1?(n.push('<Query SelectAllProperties="true" >'),n.push("<Properties />")):(n.push('<Query SelectAllProperties="false" >'),n.push("<Properties>"),[].push.apply(n,t.map(function(t){return'<Property Name="'+t+'" SelectAll="true" />'})),n.push("</Properties>")),n.push("</Query >"),null!==e&&(e.length<1?(n.push('<ChildItemQuery SelectAllProperties="true" >'),n.push("<Properties />")):(n.push('<ChildItemQuery SelectAllProperties="false" >'),n.push("<Properties>"),[].push.apply(n,e.map(function(t){return'<Property Name="'+t+'" SelectAll="true" />'})),n.push("</Properties>")),n.push("</ChildItemQuery >")),n.push("</Query >"),n.join("")}function a(t,e,n){var r=[];return r.push('<SetProperty Id="$$ID$$" ObjectPathId="$$PATH_ID$$" Name="'+t+'">'),r.push('<Parameter Type="'+e+'">'+n+"</Parameter>"),r.push("</SetProperty>"),r.join("")}function p(t,e){var n=[];if(n.push('<Method Id="$$ID$$" ObjectPathId="$$PATH_ID$$" Name="'+t+'">'),null!==e){var r=e.toArray();r.length<1?n.push("<Parameters />"):(n.push("<Parameters>"),[].push.apply(n,r.map(function(t){return'<Parameter Type="'+t.type+'">'+t.value+"</Parameter>"})),n.push("</Parameters>"))}return n.push("</Method>"),n.join("")}function u(n){return Object.getOwnPropertyNames(n).map(function(t){var e=n[t];return"boolean"==typeof e?a(t,"Boolean",""+e):"number"==typeof e?a(t,"Number",""+e):"string"==typeof e?a(t,"String",""+e):""},[])}function d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new P('<Property Id="$$ID$$" ParentId="$$PARENT_ID$$" Name="'+t+'" />',e)}function f(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return new P('<StaticMethod Id="$$ID$$" Name="'+t+'" TypeId="'+e+'" />',n)}function n(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return new P('<StaticProperty Id="$$ID$$" Name="'+t+'" TypeId="'+e+'" />',n)}var y=(b.build=function(t){void 0===t&&(t=[]);var e=new b;return[].push.apply(e._p,t),e},b.prototype.string=function(t){return this.a("String",t)},b.prototype.number=function(t){return this.a("Number",t.toString())},b.prototype.boolean=function(t){return this.a("Boolean",t.toString())},b.prototype.strArray=function(t){return this.a("Array",t.map(function(t){return'<Object Type="String">'+t+"</Object>"}).join(""))},b.prototype.objectPath=function(t){return this.a("ObjectPath",t.toString())},b.prototype.toArray=function(){return this._p},b.prototype.a=function(t,e){return e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),this._p.push({type:t,value:e}),this},b);function b(t){void 0===t&&(t=[]),this._p=t}function _(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=[];if(o.push('<Method Id="$$ID$$" ParentId="$$PARENT_ID$$" Name="'+t+'">'),null!==e){var i=e.toArray();i.length<1?o.push("<Parameters />"):(o.push("<Parameters>"),[].push.apply(o,i.map(function(t){return"ObjectPath"===t.type?'<Parameter ObjectPathId="$$OP_PARAM_ID_'+t.value+'$$" />':'<Parameter Type="'+t.type+'">'+t.value+"</Parameter>"})),o.push("</Parameters>"))}return o.push("</Method>"),new P(o.join(""),n)}function g(t){var e=[],n=[];return t.forEach(function(t){n.push(t.path),e.push.apply(e,t.actions)}),['<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="PnPjs">',"<Actions>",e.join(""),"</Actions>","<ObjectPaths>",n.join(""),"</ObjectPaths>","</Request>"].join("")}var P=function(t,e,n,r){void 0===e&&(e=[]),void 0===n&&(n=-1),void 0===r&&(r=[]),this.path=t,this.actions=e,this.id=n,this.replaceAfter=r};function v(t,e){return e.replace(/\$\$ID\$\$/g,t)}function I(t,e){return e.replace(/\$\$PATH_ID\$\$/g,t)}function m(t,e){return e.replace(/\$\$PARENT_ID\$\$/g,t)}function $(t,e,n){void 0===n&&(n=function(t){return t});var r=/\$\$OP_PARAM_ID_(\d+)\$\$/gi.exec(e);if(null!==r)for(var o=1;o<r.length;o++){var i=parseInt(r[o],10),s=new RegExp("\\$\\$OP_PARAM_ID_"+i+"\\$\\$","ig");e=e.replace(s,t[n(i)].toString())}return e}var j=(x.prototype.add=function(t){return this.dirty(),this._paths.push(t),this.lastIndex},x.prototype.addChildRelationship=function(t,e){c.objectDefinedNotNull(this._relationships["_"+t])?this._relationships["_"+t].push(e):this._relationships["_"+t]=[e]},x.prototype.getChildRelationship=function(t){return c.objectDefinedNotNull(this._relationships["_"+t])?this._relationships["_"+t]:[]},x.prototype.getChildRelationships=function(){return this._relationships},x.prototype.appendAction=function(t,e){return this.dirty(),t.actions.push(e),this},x.prototype.appendActionToLast=function(t){return this.appendAction(this.last,t)},x.prototype.copy=function(){var t=new x(this.toArray(),c.extend({},this._relationships));return t._contextIndex=this._contextIndex,t._siteIndex=this._siteIndex,t._webIndex=this._webIndex,t},x.prototype.clone=function(){var t=new x(this.toArray().map(function(t){return Object.assign({},t)}),c.extend({},this._relationships));return t._contextIndex=this._contextIndex,t._siteIndex=this._siteIndex,t._webIndex=this._webIndex,t},x.prototype.toArray=function(){return this._paths.slice(0)},Object.defineProperty(x.prototype,"last",{get:function(){return this._paths.length<1?null:this._paths[this.lastIndex]},enumerable:!0,configurable:!0}),Object.defineProperty(x.prototype,"lastIndex",{get:function(){return this._paths.length-1},enumerable:!0,configurable:!0}),Object.defineProperty(x.prototype,"siteIndex",{get:function(){if(this._siteIndex<0){var t=this.contextIndex;this._siteIndex=this.add(d("Site",s())),this.addChildRelationship(t,this._siteIndex)}return this._siteIndex},enumerable:!0,configurable:!0}),Object.defineProperty(x.prototype,"webIndex",{get:function(){if(this._webIndex<0){var t=this.contextIndex;this._webIndex=this.add(d("Web",s())),this.addChildRelationship(t,this._webIndex)}return this._webIndex},enumerable:!0,configurable:!0}),Object.defineProperty(x.prototype,"contextIndex",{get:function(){return this._contextIndex<0&&(this._contextIndex=this.add(n("Current","{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}",s()))),this._contextIndex},enumerable:!0,configurable:!0}),x.prototype.toBody=function(){return c.objectDefinedNotNull(this._xml)||(this._xml=g(this.toIndexedTree())),this._xml},x.prototype.toIndexedTree=function(){var o=this,i=-1,s=-1,a=[];return this.toArray().map(function(t,e,n){var r=++i;return a.push(r),t.path=$(a,v(r.toString(),t.path)),0<=s&&(t.path=m(s.toString(),t.path)),t.actions=t.actions.map(function(t){return v((++i).toString(),I(r.toString(),t))}),o.getChildRelationship(e).forEach(function(t){n[t].path=m(r.toString(),n[t].path)}),s=r,t})},x.prototype.dirty=function(){this._xml=null},x);function x(t,e){void 0===t&&(t=[]),void 0===e&&(e={}),this._paths=t,this._relationships=e,this._contextIndex=-1,this._siteIndex=-1,this._webIndex=-1}var O=(A.prototype.parse=function(t){var e=this;return t.text().then(function(e){if(!t.ok)throw Error(e);try{return JSON.parse(e)}catch(t){throw Error(e)}}).then(function(t){if(0<t.length&&c.hOP(t[0],"ErrorInfo")&&null!==t[0].ErrorInfo)throw Error(c.jsS(t[0].ErrorInfo));return e.findResult(t)})},A.prototype.findResult=function(t){for(var e=0;e<this.op.actions.length;e++){var n,r=this.op.actions[e];if(/^<ObjectPath /i.test(r)&&(!(n=this.getParsedResultById(t,parseInt(c.getAttrValueFromString(r,"Id"),10)))||n&&n.IsNull))return Promise.resolve(null);if(/^<Query /i.test(r))return(n=this.getParsedResultById(t,parseInt(c.getAttrValueFromString(r,"Id"),10)))&&c.hOP(n,"_Child_Items_")?Promise.resolve(n._Child_Items_):Promise.resolve(n);if(e===this.op.actions.length-1&&/^<Method /i.test(r))return Promise.resolve(this.getParsedResultById(t,parseInt(c.getAttrValueFromString(r,"Id"),10)))}},A.prototype.getParsedResultById=function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return t[n+1];return null},A);function A(t){this.op=t}var w,D="_vti_bin/client.svc/ProcessQuery",S=(e(N,w=h.Queryable),N.prototype.select=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return[].push.apply(this._selects,t),this},N.prototype.inBatch=function(t){if(null!==this.batch)throw Error("This query is already part of a batch.");return c.objectDefinedNotNull(t)&&(this._batch=t,this._batchDependency=t.addDependency()),this},N.prototype.toUrlAndQuery=function(){return w.prototype.toUrl.call(this)+"?"+Array.from(this.query).map(function(t){return t[0]+"="+t[1]}).join("&")},N.prototype.getSelects=function(){return c.objectDefinedNotNull(this._selects)?this._selects:[]},N.prototype.getChild=function(t,e,n){var r=this._objectPaths.copy();return r.add(_(e,n,s())),new t(this,r)},N.prototype.getChildProperty=function(t,e){var n=this._objectPaths.copy();return n.add(d(e)),new t(this,n)},N.prototype.send=function(t,e,n){void 0===e&&(e={}),void 0===n&&(n=null);var r=t.clone();return c.objectDefinedNotNull(n)||(n=new O(r.last)),this.hasBatch?e=c.extend(e,{clientsvc_ObjectPaths:r}):c.hOP(e,"body")||(e=c.extend(e,{body:r.toBody()})),w.prototype.postCore.call(this,e,n)},N.prototype.sendGet=function(e){var n=this,t=this._objectPaths.copy().appendActionToLast(i(this.getSelects()));return this.send(t).then(function(t){return c.extend(new e(n),t)})},N.prototype.sendGetCollection=function(e){var t=this._objectPaths.copy().appendActionToLast(i([],this.getSelects()));return this.send(t).then(function(t){return t.map(function(t){return c.extend(e(t),t)})})},N.prototype.invokeMethod=function(t,e){void 0===e&&(e=null);for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this.invokeMethodImpl(t,e,n,i([],null))},N.prototype.invokeMethodAction=function(t,e){void 0===e&&(e=null);for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this.invokeMethodImpl(t,e,n,null,!0)},N.prototype.invokeNonQuery=function(t,e){void 0===e&&(e=null);for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this._useCaching=!1,this.invokeMethodImpl(t,e,n,null,!0)},N.prototype.invokeMethodCollection=function(t,e){void 0===e&&(e=null);for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this.invokeMethodImpl(t,e,n,i([],[]))},N.prototype.invokeUpdate=function(t,e){var n=this,r=this._objectPaths.copy();return u(t).map(function(t){return r.appendActionToLast(t)}),r.appendActionToLast(i([],null)),this.send(r).then(function(t){return c.extend(new e(n),t)})},N.prototype.toRequestContext=function(i,s,a,p){var u=this;return l.toAbsoluteUrl(this.toUrlAndQuery()).then(function(t){c.mergeOptions(s,u._options);var e=new Headers;if(c.mergeHeaders(e,s.headers),c.mergeHeaders(e,{accept:"*/*","content-type":"text/xml"}),s=c.extend(s,{headers:e}),u._useCaching){var n=s.body;c.stringIsNullOrEmpty(n)&&(n=c.hOP(s,"clientsvc_ObjectPaths")?s.clientsvc_ObjectPaths.clone().toBody():"");var r="PnPjs.ProcessQueryClient("+c.getHashCode(n)+")";c.objectDefinedNotNull(u._cachingOptions)?/\/client\.svc\/ProcessQuery\?$/i.test(u._cachingOptions.key)&&(u._cachingOptions.key=r):u._cachingOptions=new h.CachingOptions(r)}var o=u.hasBatch?u._batchDependency:function(){};return{batch:u.batch,batchDependency:o,cachingOptions:u._cachingOptions,clientFactory:function(){return new l.SPHttpClient},isBatched:u.hasBatch,isCached:u._useCaching,options:s,parser:a,pipeline:p,requestAbsoluteUrl:t,requestId:c.getGUID(),verb:i}})},N.prototype.addBatchDependency=function(){return null!==this._batch?this._batch.addDependency():function(){return null}},Object.defineProperty(N.prototype,"hasBatch",{get:function(){return c.objectDefinedNotNull(this._batch)},enumerable:!0,configurable:!0}),Object.defineProperty(N.prototype,"batch",{get:function(){return this.hasBatch?this._batch:null},enumerable:!0,configurable:!0}),N.prototype.invokeMethodImpl=function(t,e,n,r,o){void 0===o&&(o=!1);var i=this._objectPaths.copy();return o?i.appendActionToLast(p(t,e)):i.add(_.apply(void 0,[t,e].concat([s()].concat(n,[r])))),this.send(i)},N);function N(t,e){void 0===t&&(t=""),void 0===e&&(e=null);var n=w.call(this)||this;return n._objectPaths=e,n._selects=[],n._batch=null,n._batchDependency=null,"string"==typeof t?(n._parentUrl=t,n._url=c.combine(t.replace(D,""),D),c.objectDefinedNotNull(n._objectPaths)||(n._objectPaths=new j)):(n._parentUrl=t._parentUrl,n._url=c.combine(t._parentUrl,D),c.objectDefinedNotNull(e)||(n._objectPaths=t._objectPaths.clone()),n.configureFrom(t)),n}var C,R=(e(T,C=h.ODataBatch),T.prototype.executeImpl=function(){if(this.requests.length<1)return o.Logger.write("Resolving empty batch.",1),Promise.resolve();var t=new Q(this.parentUrl,this.batchId);return t.appendRequests(this.requests),t.execute()},T);function T(t,e){var n=C.call(this,e)||this;return n.parentUrl=t,n}var q,Q=(e(B,q=S),B.prototype.appendRequests=function(t){var c=this;t.forEach(function(t){var s=t.options.clientsvc_ObjectPaths,e=s.toArray();if(!(e.length<0)){var a=function(t){return t};/GetTaxonomySession/i.test(e[0].path)&&((e=e.slice(1))[0].path=m("0",e[0].path),a=function(t){return t-1});var p=-1,u=[];e.map(function(t,e,n){var r=++c._builderIndex;u.push(r);var o=$(u,v(r.toString(),t.path),a);0<=p&&(o=m(p.toString(),o));var i=t.actions.map(function(t){return v((++c._builderIndex).toString(),I(r.toString(),t))});return s.getChildRelationship(e+1).map(function(t){return t-1}).forEach(function(t){n[t].path=m(r.toString(),n[t].path)}),p=r,new P(o,i)}).forEach(function(t){return c._objectPaths.add(t)});var n=c._objectPaths.toArray(),r=new O(n[n.length-1]);t.parser instanceof h.CachingParserWrapper?t.parser=new L(r,t.parser):t.parser=r,c._requests.push(t),delete t.options.clientsvc_ObjectPaths}})},B.prototype.execute=function(){var r=this;o.Logger.write("["+this.batchId+"] ("+(new Date).getTime()+") Executing batch with "+this._requests.length+" requests.",1);var t={body:g(this._objectPaths.toArray())};return o.Logger.write("["+this.batchId+"] ("+(new Date).getTime()+") Sending batch request.",1),q.prototype.postCore.call(this,t,new E).then(function(n){return o.Logger.write("["+r.batchId+"] ("+(new Date).getTime()+") Resolving batched requests.",1),r._requests.reduce(function(t,e){return o.Logger.write("["+e.id+"] ("+(new Date).getTime()+") Resolving request in batch "+r.batchId+".",1),t.then(function(t){return e.parser.findResult(n).then(e.resolve).catch(e.reject)})},Promise.resolve())})},B);function B(t,e){var n=q.call(this,t)||this;n.batchId=e,n._requests=[],n._builderIndex=1;var r=f("GetTaxonomySession","{981cbc68-9edc-4f8d-872f-71146fcbb84f}");return r.path=v("0",r.path),r.actions.push(v("1",I("0",s()))),n._objectPaths.add(r),n}var M,E=(e(k,M=O),k.prototype.findResult=function(t){return t},k);function k(){return M.call(this,null)||this}var U,L=(e(H,U=h.CachingParserWrapper),H.prototype.findResult=function(t){var e=this;return this.parser.findResult(t).then(function(t){return e.cacheData(t)})},H);function H(t,e){return U.call(this,t,e.cacheOptions)||this}t.ObjectPathBatch=R,t.ClientSvcQueryable=S,t.ObjectPath=P,t.opSetId=v,t.opSetPathId=I,t.opSetParentId=m,t.opSetPathParamId=$,t.ObjectPathQueue=j,t.objectPath=s,t.identityQuery=function(){return'<ObjectIdentityQuery Id="$$ID$$" ObjectPathId="$$PATH_ID$$" />'},t.opQuery=i,t.setProperty=a,t.methodAction=p,t.objectProperties=u,t.property=d,t.staticMethod=f,t.staticProperty=n,t.objConstructor=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new P('<Constructor Id="$$ID$$" TypeId="'+t+'" />',e)},t.MethodParams=y,t.method=_,t.ProcessQueryParser=O,t.writeObjectPathBody=g,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=sp-clientsvc.es5.umd.min.js.map
