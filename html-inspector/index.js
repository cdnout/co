!function e(t,n,r){function i(s,o){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t){function n(e){var t,n=e.attributes,r=n.length,i=0,a={};if(0===r)return{};for(;t=n[i++];)a[t.name]=t.value;return a}t.exports=n},{}],2:[function(e,t){function n(e,t){for(var n,r=0,i=["matches","matchesSelector","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];n=i[r++];)if("function"==typeof e[n])return e[n](t);throw new Error("You are using a browser that doesn't not support element.matches() or element.matchesSelector()")}function r(e,t){return null==t?!1:("string"==typeof t||t.nodeType?t=[t]:"length"in t&&(t=i(t)),t.some(function(t){return"string"==typeof t?n(e,t):e===t}))}var i=e("mout/lang/toArray");t.exports=r},{"mout/lang/toArray":13}],3:[function(e,t){function n(e){for(var t=[];e.parentNode&&1==e.parentNode.nodeType;)t.push(e=e.parentNode);return t}t.exports=n},{}],4:[function(e,t){function n(e,t,n){t=r(t,n);var i=[];if(null==e)return i;for(var a,s=-1,o=e.length;++s<o;)a=e[s],t(a,s,e)&&i.push(a);return i}var r=e("../function/makeIterator_");t.exports=n},{"../function/makeIterator_":7}],5:[function(e,t){function n(e,t){return t=t||r,i(e,function(e,n,r){for(var i=r.length;++n<i;)if(t(e,r[n]))return!1;return!0})}function r(e,t){return e===t}var i=e("./filter");t.exports=n},{"./filter":4}],6:[function(e,t){function n(e){return e}t.exports=n},{}],7:[function(e,t){function n(e,t){if(null==e)return r;switch(typeof e){case"function":return"undefined"!=typeof t?function(n,r,i){return e.call(t,n,r,i)}:e;case"object":return function(t){return a(t,e)};case"string":case"number":return i(e)}}var r=e("./identity"),i=e("./prop"),a=e("../object/deepMatches");t.exports=n},{"../object/deepMatches":14,"./identity":6,"./prop":8}],8:[function(e,t){function n(e){return function(t){return t[e]}}t.exports=n},{}],9:[function(e,t){var n=e("./isKind"),r=Array.isArray||function(e){return n(e,"Array")};t.exports=r},{"./isKind":10}],10:[function(e,t){function n(e,t){return r(e)===t}var r=e("./kindOf");t.exports=n},{"./kindOf":12}],11:[function(e,t){function n(e){return r(e,"RegExp")}var r=e("./isKind");t.exports=n},{"./isKind":10}],12:[function(e,t){function n(e){return null===e?"Null":e===r?"Undefined":i.exec(a.call(e))[1]}var r,i=/^\[object (.*)\]$/,a=Object.prototype.toString;t.exports=n},{}],13:[function(e,t){function n(e){var t,n=[],a=r(e);if(null!=e)if(null==e.length||"String"===a||"Function"===a||"RegExp"===a||e===i)n[n.length]=e;else for(t=e.length;t--;)n[t]=e[t];return n}var r=e("./kindOf"),i=this;t.exports=n},{"./kindOf":12}],14:[function(e,t){function n(e,t){for(var n=-1,r=e.length;++n<r;)if(a(e[n],t))return!0;return!1}function r(e,t){for(var r=-1,i=t.length;++r<i;)if(!n(e,t[r]))return!1;return!0}function i(e,t){var n=!0;return s(t,function(t,r){return a(e[r],t)?void 0:n=!1}),n}function a(e,t){return e&&"object"==typeof e?o(e)&&o(t)?r(e,t):i(e,t):e===t}var s=e("./forOwn"),o=e("../lang/isArray");t.exports=a},{"../lang/isArray":9,"./forOwn":16}],15:[function(e,t){function n(){s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=!0;for(var e in{toString:null})a=!1}function r(e,t,r){var l,u=0;null==a&&n();for(l in e)if(i(t,e,l,r)===!1)break;if(a)for(var c=e.constructor,d=!!c&&e===c.prototype;(l=s[u++])&&("constructor"===l&&(d||!o(e,l))||e[l]===Object.prototype[l]||i(t,e,l,r)!==!1););}function i(e,t,n,r){return e.call(r,t[n],n,t)}var a,s,o=e("./hasOwn");t.exports=r},{"./hasOwn":17}],16:[function(e,t){function n(e,t,n){i(e,function(i,a){return r(e,a)?t.call(n,e[a],a,e):void 0})}var r=e("./hasOwn"),i=e("./forIn");t.exports=n},{"./forIn":15,"./hasOwn":17}],17:[function(e,t){function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=n},{}],18:[function(e,t){function n(e){for(var t,n=0,a=arguments.length;++n<a;)t=arguments[n],null!=t&&i(t,r,e);return e}function r(e,t){this[t]=e}var i=e("./forOwn");t.exports=n},{"./forOwn":16}],19:[function(e,t){function n(){this.handlers=[]}n.prototype.add=function(e){this.handlers.push(e)},n.prototype.remove=function(e){this.handlers=this.handlers.filter(function(t){return t!=e})},n.prototype.fire=function(e,t){this.handlers.forEach(function(n){n.apply(e,t)})},t.exports=n},{}],20:[function(e){function t(e,t,n,r){var i=null==n?Object.keys(h.rules):n;r&&(i=i.filter(function(e){return r.indexOf(e)<0})),i.forEach(function(n){h.rules[n]&&h.rules[n].func.call(h,e,t,h.rules[n].config)})}function n(e,t,r,i){if(1==t.nodeType){var a=m(t);d(t,r)||(e.trigger("element",t,[t.nodeName.toLowerCase(),t]),t.id&&e.trigger("id",t,[t.id,t]),u(t.classList).forEach(function(n){e.trigger("class",t,[n,t])}),Object.keys(a).sort().forEach(function(n){e.trigger("attribute",t,[n,a[n],t])})),d(t,i)||u(t.childNodes).forEach(function(t){n(e,t,r,i)})}}function r(e){return e&&("string"==typeof e||1==e.nodeType?e={domRoot:e}:Array.isArray(e)?e={useRules:e}:"function"==typeof e&&(e={onComplete:e})),e=c({},h.defaults,e),e.domRoot="string"==typeof e.domRoot?document.querySelector(e.domRoot):e.domRoot,e}function i(e){return Array.isArray(e)||(e=[e]),e=e.map(function(e){return e&&e.nodeName&&"iframe"==e.nodeName.toLowerCase()&&b(e.src)?"(can't display iframe with cross-origin source: "+e.src+")":e}),1===e.length?e[0]:e}var a=e("./listener"),s=e("./modules"),o=e("./reporter"),l=e("./rules"),u=e("mout/lang/toArray"),c=(e("mout/lang/isRegExp"),e("mout/array/unique"),e("mout/object/mixIn")),d=e("dom-utils/src/matches"),m=e("dom-utils/src/get-attributes"),b=e("./utils/cross-origin"),h={defaults:{domRoot:"html",useRules:null,excludeRules:null,excludeElements:"svg",excludeSubTrees:["svg","iframe"],onComplete:function(e){e.forEach(function(e){console.warn(e.message,i(e.context))})}},rules:new l,modules:new s,inspect:function(e){var i=r(e),s=new a,l=new o;t(s,l,i.useRules,i.excludeRules),s.trigger("beforeInspect",i.domRoot),n(s,i.domRoot,i.excludeElements,i.excludeSubTrees),s.trigger("afterInspect",i.domRoot),i.onComplete(l.getWarnings())}};h.modules.add(e("./modules/css.js")),h.modules.add(e("./modules/validation.js")),h.rules.add(e("./rules/best-practices/inline-event-handlers.js")),h.rules.add(e("./rules/best-practices/script-placement.js")),h.rules.add(e("./rules/best-practices/unnecessary-elements.js")),h.rules.add(e("./rules/best-practices/unused-classes.js")),h.rules.add(e("./rules/convention/bem-conventions.js")),h.rules.add(e("./rules/validation/duplicate-ids.js")),h.rules.add(e("./rules/validation/unique-elements.js")),h.rules.add(e("./rules/validation/validate-attributes.js")),h.rules.add(e("./rules/validation/validate-element-location.js")),h.rules.add(e("./rules/validation/validate-elements.js")),window.HTMLInspector=h},{"./listener":21,"./modules":22,"./modules/css.js":23,"./modules/validation.js":24,"./reporter":25,"./rules":26,"./rules/best-practices/inline-event-handlers.js":27,"./rules/best-practices/script-placement.js":28,"./rules/best-practices/unnecessary-elements.js":29,"./rules/best-practices/unused-classes.js":30,"./rules/convention/bem-conventions.js":31,"./rules/validation/duplicate-ids.js":32,"./rules/validation/unique-elements.js":33,"./rules/validation/validate-attributes.js":34,"./rules/validation/validate-element-location.js":35,"./rules/validation/validate-elements.js":36,"./utils/cross-origin":37,"dom-utils/src/get-attributes":1,"dom-utils/src/matches":2,"mout/array/unique":5,"mout/lang/isRegExp":11,"mout/lang/toArray":13,"mout/object/mixIn":18}],21:[function(e,t){function n(){this._events={}}var r=e("./callbacks");n.prototype.on=function(e,t){this._events[e]||(this._events[e]=new r),this._events[e].add(t)},n.prototype.off=function(e,t){this._events[e]&&this._events[e].remove(t)},n.prototype.trigger=function(e,t,n){this._events[e]&&this._events[e].fire(t,n)},t.exports=n},{"./callbacks":19}],22:[function(e,t){function n(){}var r=e("mout/object/mixIn");n.prototype.add=function(e){this[e.name]=e.module},n.prototype.extend=function(e,t){"function"==typeof t&&(t=t.call(this[e],this[e])),r(this[e],t)},t.exports=n},{"mout/object/mixIn":18}],23:[function(e,t){function n(e){return e.reduce(function(e,t){var i;return t.styleSheet?e.concat(r([t.styleSheet])):t.cssRules?e.concat(n(s(t.cssRules))):t.selectorText?(i=t.selectorText.match(a)||[],e.concat(i.map(function(e){return e.slice(1)}))):e},[])}function r(e){return e.reduce(function(e,t){return t.href&&u(t.href)?e:e.concat(n(s(t.cssRules)))},[])}function i(){return s(document.styleSheets).filter(function(e){return l(e.ownerNode,c.styleSheets)})}var a=/\.[a-z0-9_\-]+/gi,s=e("mout/lang/toArray"),o=e("mout/array/unique"),l=e("dom-utils/src/matches"),u=e("../utils/cross-origin"),c={getClassSelectors:function(){return o(r(i()))},styleSheets:'link[rel="stylesheet"], style'};t.exports={name:"css",module:c}},{"../utils/cross-origin":37,"dom-utils/src/matches":2,"mout/array/unique":5,"mout/lang/toArray":13}],24:[function(e,t){function n(e){return s[e]?s[e].attributes.replace(/\*/g,"").split(/\s*;\s*/):[]}function r(e){return a(e,l)}function i(e){var t,n=[];return t=s[e].children,t=t.indexOf("*")>=0?[]:t.split(/\s*\;\s*/),t.forEach(function(e){o[e]?(n=n.concat(o[e].elements),n=n.concat(o[e].exceptions||[])):n.push(e)}),n.length?n:[/[\s\S]+/]}var a=e("../utils/string-matcher"),s={a:{children:"transparent*",attributes:"globals; href; target; download; rel; hreflang; type"},abbr:{children:"phrasing",attributes:"globals"},address:{children:"flow*",attributes:"globals"},area:{children:"empty",attributes:"globals; alt; coords; shape; href; target; download; rel; hreflang; type"},article:{children:"flow",attributes:"globals"},aside:{children:"flow",attributes:"globals"},audio:{children:"source*; transparent*",attributes:"globals; src; crossorigin; preload; autoplay; mediagroup; loop; muted; controls"},b:{children:"phrasing",attributes:"globals"},base:{children:"empty",attributes:"globals; href; target"},bdi:{children:"phrasing",attributes:"globals"},bdo:{children:"phrasing",attributes:"globals"},blockquote:{children:"flow",attributes:"globals; cite"},body:{children:"flow",attributes:"globals; onafterprint; onbeforeprint; onbeforeunload; onfullscreenchange; onfullscreenerror; onhashchange; onmessage; onoffline; ononline; onpagehide; onpageshow; onpopstate; onresize; onstorage; onunload"},br:{children:"empty",attributes:"globals"},button:{children:"phrasing*",attributes:"globals; autofocus; disabled; form; formaction; formenctype; formmethod; formnovalidate; formtarget; name; type; value"},canvas:{children:"transparent",attributes:"globals; width; height"},caption:{children:"flow*",attributes:"globals"},cite:{children:"phrasing",attributes:"globals"},code:{children:"phrasing",attributes:"globals"},col:{children:"empty",attributes:"globals; span"},colgroup:{children:"col",attributes:"globals; span"},menuitem:{children:"empty",attributes:"globals; type; label; icon; disabled; checked; radiogroup; command"},data:{children:"phrasing",attributes:"globals; value"},datalist:{children:"phrasing; option",attributes:"globals"},dd:{children:"flow",attributes:"globals"},del:{children:"transparent",attributes:"globals; cite; datetime"},details:{children:"summary*; flow",attributes:"globals; open"},dfn:{children:"phrasing*",attributes:"globals"},dialog:{children:"flow",attributes:"globals; open"},div:{children:"flow",attributes:"globals"},dl:{children:"dt*; dd*",attributes:"globals"},dt:{children:"flow*",attributes:"globals"},em:{children:"phrasing",attributes:"globals"},embed:{children:"empty",attributes:"globals; src; type; width; height; any*"},fieldset:{children:"legend*; flow",attributes:"globals; disabled; form; name"},figcaption:{children:"flow",attributes:"globals"},figure:{children:"figcaption*; flow",attributes:"globals"},footer:{children:"flow*",attributes:"globals"},form:{children:"flow*",attributes:"globals; accept-charset; action; autocomplete; enctype; method; name; novalidate; target"},h1:{children:"phrasing",attributes:"globals"},h2:{children:"phrasing",attributes:"globals"},h3:{children:"phrasing",attributes:"globals"},h4:{children:"phrasing",attributes:"globals"},h5:{children:"phrasing",attributes:"globals"},h6:{children:"phrasing",attributes:"globals"},head:{children:"metadata content*",attributes:"globals"},header:{children:"flow*",attributes:"globals"},hr:{children:"empty",attributes:"globals"},html:{children:"head*; body*",attributes:"globals; manifest"},i:{children:"phrasing",attributes:"globals"},iframe:{children:"text*",attributes:"globals; src; srcdoc; name; sandbox; seamless; allowfullscreen; width; height"},img:{children:"empty",attributes:"globals; alt; src; crossorigin; usemap; ismap; width; height"},input:{children:"empty",attributes:"globals; accept; alt; autocomplete; autofocus; checked; dirname; disabled; form; formaction; formenctype; formmethod; formnovalidate; formtarget; height; list; max; maxlength; min; multiple; name; pattern; placeholder; readonly; required; size; src; step; type; value; width"},ins:{children:"transparent",attributes:"globals; cite; datetime"},kbd:{children:"phrasing",attributes:"globals"},keygen:{children:"empty",attributes:"globals; autofocus; challenge; disabled; form; keytype; name"},label:{children:"phrasing*",attributes:"globals; form; for"},legend:{children:"phrasing",attributes:"globals"},li:{children:"flow",attributes:"globals; value*"},link:{children:"empty",attributes:"globals; href; crossorigin; rel; media; hreflang; type; sizes"},main:{children:"flow*",attributes:"globals"},map:{children:"transparent; area*",attributes:"globals; name"},mark:{children:"phrasing",attributes:"globals"},menu:{children:"li*; flow*; menuitem*; hr*; menu*",attributes:"globals; type; label"},meta:{children:"empty",attributes:"globals; name; http-equiv; content; charset"},meter:{children:"phrasing*",attributes:"globals; value; min; max; low; high; optimum"},nav:{children:"flow",attributes:"globals"},noscript:{children:"varies*",attributes:"globals"},object:{children:"param*; transparent",attributes:"globals; data; type; typemustmatch; name; usemap; form; width; height"},ol:{children:"li",attributes:"globals; reversed; start; type"},optgroup:{children:"option",attributes:"globals; disabled; label"},option:{children:"text*",attributes:"globals; disabled; label; selected; value"},output:{children:"phrasing",attributes:"globals; for; form; name"},p:{children:"phrasing",attributes:"globals"},param:{children:"empty",attributes:"globals; name; value"},pre:{children:"phrasing",attributes:"globals"},progress:{children:"phrasing*",attributes:"globals; value; max"},q:{children:"phrasing",attributes:"globals; cite"},rp:{children:"phrasing",attributes:"globals"},rt:{children:"phrasing",attributes:"globals"},ruby:{children:"phrasing; rt; rp*",attributes:"globals"},s:{children:"phrasing",attributes:"globals"},samp:{children:"phrasing",attributes:"globals"},script:{children:"script, data, or script documentation*",attributes:"globals; src; type; charset; async; defer; crossorigin"},section:{children:"flow",attributes:"globals"},select:{children:"option; optgroup",attributes:"globals; autofocus; disabled; form; multiple; name; required; size"},small:{children:"phrasing",attributes:"globals"},source:{children:"empty",attributes:"globals; src; type; media"},span:{children:"phrasing",attributes:"globals"},strong:{children:"phrasing",attributes:"globals"},style:{children:"varies*",attributes:"globals; media; type; scoped"},sub:{children:"phrasing",attributes:"globals"},summary:{children:"phrasing",attributes:"globals"},sup:{children:"phrasing",attributes:"globals"},table:{children:"caption*; colgroup*; thead*; tbody*; tfoot*; tr*",attributes:"globals; border"},tbody:{children:"tr",attributes:"globals"},td:{children:"flow",attributes:"globals; colspan; rowspan; headers"},template:{children:"flow; metadata",attributes:"globals"},textarea:{children:"text",attributes:"globals; autofocus; cols; dirname; disabled; form; maxlength; name; placeholder; readonly; required; rows; wrap"},tfoot:{children:"tr",attributes:"globals"},th:{children:"flow*",attributes:"globals; colspan; rowspan; headers; scope; abbr"},thead:{children:"tr",attributes:"globals"},time:{children:"phrasing",attributes:"globals; datetime"},title:{children:"text*",attributes:"globals"},tr:{children:"th*; td",attributes:"globals"},track:{children:"empty",attributes:"globals; default; kind; label; src; srclang"},u:{children:"phrasing",attributes:"globals"},ul:{children:"li",attributes:"globals"},"var":{children:"phrasing",attributes:"globals"},video:{children:"source*; transparent*",attributes:"globals; src; crossorigin; poster; preload; autoplay; mediagroup; loop; muted; controls; width; height"},wbr:{children:"empty",attributes:"globals"}},o={metadata:{elements:["base","link","meta","noscript","script","style","title"]},flow:{elements:["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","br","button","canvas","cite","code","data","datalist","del","details","dfn","dialog","div","dl","em","embed","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","i","iframe","img","input","ins","kbd","keygen","label","main","map","mark","math","menu","meter","nav","noscript","object","ol","output","p","pre","progress","q","ruby","s","samp","script","section","select","small","span","strong","sub","sup","svg","table","textarea","time","u","ul","var","video","wbr"],exceptions:["area","link","meta","style"],exceptionsSelectors:["map area","link[itemprop]","meta[itemprop]","style[scoped]"]},sectioning:{elements:["article","aside","nav","section"]},heading:{elements:["h1","h2","h3","h4","h5","h6"]},phrasing:{elements:["a","abbr","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","script","select","small","span","strong","sub","sup","svg","textarea","time","u","var","video","wbr"],exceptions:["area","link","meta"],exceptionsSelectors:["map area","link[itemprop]","meta[itemprop]"]},embedded:{elements:["audio","canvas","embed","iframe","img","math","object","svg","video"]},interactive:{elements:["a","button","details","embed","iframe","keygen","label","select","textarea"],exceptions:["audio","img","input","object","video"],exceptionsSelectors:["audio[controls]","img[usemap]","input:not([type=hidden])","object[usemap]","video[controls]"]},"sectioning roots":{elements:["blockquote","body","details","dialog","fieldset","figure","td"]},"form-associated":{elements:["button","fieldset","input","keygen","label","object","output","select","textarea"]},listed:{elements:["button","fieldset","input","keygen","object","output","select","textarea"]},submittable:{elements:["button","input","keygen","object","select","textarea"]},resettable:{elements:["input","keygen","output","select","textarea"]},labelable:{elements:["button","input","keygen","meter","output","progress","select","textarea"]},palpable:{elements:["a","abbr","address","article","aside","b","bdi","bdo","blockquote","button","canvas","cite","code","data","details","dfn","div","em","embed","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","i","iframe","img","ins","kbd","keygen","label","map","mark","math","meter","nav","object","output","p","pre","progress","q","ruby","s","samp","section","select","small","span","strong","sub","sup","svg","table","textarea","time","u","var","video"],exceptions:["audio","dl","input","menu","ol","ul"],exceptionsSelectors:["audio[controls]","dl","input:not([type=hidden])","menu[type=toolbar]","ol","ul"]}},l=["accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","inert","itemid","itemprop","itemref","itemscope","itemtype","lang","spellcheck","style","tabindex","title","translate","role",/aria-[a-z\-]+/,/data-[a-z\-]+/,/on[a-z\-]+/],u=["applet","acronym","bgsound","dir","frame","frameset","noframes","hgroup","isindex","listing","nextid","noembed","plaintext","rb","strike","xmp","basefont","big","blink","center","font","marquee","multicol","nobr","spacer","tt"],c=[{attribute:"charset",elements:"a"},{attribute:"charset",elements:"link"},{attribute:"coords",elements:"a"},{attribute:"shape",elements:"a"},{attribute:"methods",elements:"a"},{attribute:"methods",elements:"link"},{attribute:"name",elements:"a"},{attribute:"name",elements:"embed"},{attribute:"name",elements:"img"},{attribute:"name",elements:"option"},{attribute:"rev",elements:"a"},{attribute:"rev",elements:"link"},{attribute:"urn",elements:"a"},{attribute:"urn",elements:"link"},{attribute:"accept",elements:"form"},{attribute:"nohref",elements:"area"},{attribute:"profile",elements:"head"},{attribute:"version",elements:"html"},{attribute:"ismap",elements:"input"},{attribute:"usemap",elements:"input"},{attribute:"longdesc",elements:"iframe"},{attribute:"longdesc",elements:"img"},{attribute:"lowsrc",elements:"img"},{attribute:"target",elements:"link"},{attribute:"scheme",elements:"meta"},{attribute:"archive",elements:"object"},{attribute:"classid",elements:"object"},{attribute:"code",elements:"object"},{attribute:"codebase",elements:"object"},{attribute:"codetype",elements:"object"},{attribute:"declare",elements:"object"},{attribute:"standby",elements:"object"},{attribute:"type",elements:"param"},{attribute:"valuetype",elements:"param"},{attribute:"language",elements:"script"},{attribute:"event",elements:"script"},{attribute:"for",elements:"script"},{attribute:"datapagesize",elements:"table"},{attribute:"summary",elements:"table"},{attribute:"axis",elements:"td; th"},{attribute:"scope",elements:"td"},{attribute:"datasrc",elements:"a; applet; button; div; frame; iframe; img; input; label; legend; marquee; object; option; select; span; table; textarea"},{attribute:"datafld",elements:"a; applet; button; div; fieldset; frame; iframe; img; input; label; legend; marquee; object; param; select; span; textarea"},{attribute:"dataformatas",elements:"button; div; input; label; legend; marquee; object; option; select; span; table"},{attribute:"alink",elements:"body"},{attribute:"bgcolor",elements:"body"},{attribute:"link",elements:"body"},{attribute:"marginbottom",elements:"body"},{attribute:"marginheight",elements:"body"},{attribute:"marginleft",elements:"body"},{attribute:"marginright",elements:"body"},{attribute:"margintop",elements:"body"},{attribute:"marginwidth",elements:"body"},{attribute:"text",elements:"body"},{attribute:"vlink",elements:"body"},{attribute:"clear",elements:"br"},{attribute:"align",elements:"caption"},{attribute:"align",elements:"col"},{attribute:"char",elements:"col"},{attribute:"charoff",elements:"col"},{attribute:"valign",elements:"col"},{attribute:"width",elements:"col"},{attribute:"align",elements:"div"},{attribute:"compact",elements:"dl"},{attribute:"align",elements:"embed"},{attribute:"hspace",elements:"embed"},{attribute:"vspace",elements:"embed"},{attribute:"align",elements:"hr"},{attribute:"color",elements:"hr"},{attribute:"noshade",elements:"hr"},{attribute:"size",elements:"hr"},{attribute:"width",elements:"hr"},{attribute:"align",elements:"h1; h2; h3; h4; h5; h6"},{attribute:"align",elements:"iframe"},{attribute:"allowtransparency",elements:"iframe"},{attribute:"frameborder",elements:"iframe"},{attribute:"hspace",elements:"iframe"},{attribute:"marginheight",elements:"iframe"},{attribute:"marginwidth",elements:"iframe"},{attribute:"scrolling",elements:"iframe"},{attribute:"vspace",elements:"iframe"},{attribute:"align",elements:"input"},{attribute:"hspace",elements:"input"},{attribute:"vspace",elements:"input"},{attribute:"align",elements:"img"},{attribute:"border",elements:"img"},{attribute:"hspace",elements:"img"},{attribute:"vspace",elements:"img"},{attribute:"align",elements:"legend"},{attribute:"type",elements:"li"},{attribute:"compact",elements:"menu"},{attribute:"align",elements:"object"},{attribute:"border",elements:"object"},{attribute:"hspace",elements:"object"},{attribute:"vspace",elements:"object"},{attribute:"compact",elements:"ol"},{attribute:"align",elements:"p"},{attribute:"width",elements:"pre"},{attribute:"align",elements:"table"},{attribute:"bgcolor",elements:"table"},{attribute:"cellpadding",elements:"table"},{attribute:"cellspacing",elements:"table"},{attribute:"frame",elements:"table"},{attribute:"rules",elements:"table"},{attribute:"width",elements:"table"},{attribute:"align",elements:"tbody; thead; tfoot"},{attribute:"char",elements:"tbody; thead; tfoot"},{attribute:"charoff",elements:"tbody; thead; tfoot"},{attribute:"valign",elements:"tbody; thead; tfoot"},{attribute:"align",elements:"td; th"},{attribute:"bgcolor",elements:"td; th"},{attribute:"char",elements:"td; th"},{attribute:"charoff",elements:"td; th"},{attribute:"height",elements:"td; th"},{attribute:"nowrap",elements:"td; th"},{attribute:"valign",elements:"td; th"},{attribute:"width",elements:"td; th"},{attribute:"align",elements:"tr"},{attribute:"bgcolor",elements:"tr"},{attribute:"char",elements:"tr"},{attribute:"charoff",elements:"tr"},{attribute:"valign",elements:"tr"},{attribute:"compact",elements:"ul"},{attribute:"type",elements:"ul"},{attribute:"background",elements:"body; table; thead; tbody; tfoot; tr; td; th"}],d=[{attributes:["alt"],element:"area"},{attributes:["height","width"],element:"applet"},{attributes:["dir"],element:"bdo"},{attributes:["action"],element:"form"},{attributes:["alt","src"],element:"img"},{attributes:["name"],element:"map"},{attributes:["label"],element:"optgroup"},{attributes:["name"],element:"param"},{attributes:["cols","rows"],element:"textarea"}],m=Object.keys(s).sort(),b={isElementValid:function(e){return m.indexOf(e)>=0},isElementObsolete:function(e){return u.indexOf(e)>=0},isAttributeValidForElement:function(e,t){return r(e)?!0:n(t).indexOf("any")>=0?!0:n(t).indexOf(e)>=0},isAttributeObsoleteForElement:function(e,t){return c.some(function(n){return n.attribute!==e?!1:n.elements.split(/\s*;\s*/).some(function(e){return e===t})})},isAttributeRequiredForElement:function(e,t){return d.some(function(n){return t==n.element&&n.attributes.indexOf(e)>=0})},getRequiredAttributesForElement:function(e){var t=d.filter(function(t){return t.element==e});return t[0]&&t[0].attributes||[]},isChildAllowedInParent:function(e,t){return s[e]&&s[t]?a(e,i(t)):!0}};t.exports={name:"validation",module:b}},{"../utils/string-matcher":38}],25:[function(e,t){function n(){this._errors=[]}n.prototype.warn=function(e,t,n){this._errors.push({rule:e,message:t,context:n})},n.prototype.getWarnings=function(){return this._errors},t.exports=n},{}],26:[function(e,t){function n(){}var r=e("mout/object/mixIn");n.prototype.add=function(e,t,n){"string"==typeof e?("function"==typeof t&&(n=t,t={}),this[e]={name:e,config:t,func:n}):this[e.name]={name:e.name,config:e.config,func:e.func}},n.prototype.extend=function(e,t){"function"==typeof t&&(t=t.call(this[e].config,this[e].config)),r(this[e].config,t)},t.exports=n},{"mout/object/mixIn":18}],27:[function(e,t){var n=e("../../utils/string-matcher");t.exports={name:"inline-event-handlers",config:{whitelist:[]},func:function(e,t,r){e.on("attribute",function(e){0!==e.indexOf("on")||n(e,r.whitelist)||t.warn("inline-event-handlers","An '"+e+"' attribute was found in the HTML. Use external scripts for event binding instead.",this)})}}},{"../../utils/string-matcher":38}],28:[function(e,t){t.exports={name:"script-placement",config:{whitelist:[]},func:function(t,n,r){function i(e){return s?"string"==typeof s?o(e,s):Array.isArray(s)?s.length&&s.some(function(t){return o(e,t)}):!1:!1}var a=[],s=r.whitelist,o=e("dom-utils/src/matches");t.on("element",function(){a.push(this)}),t.on("afterInspect",function(){for(var e;(e=a.pop())&&"script"==e.nodeName.toLowerCase(););a.forEach(function(e){if("script"==e.nodeName.toLowerCase()){if(e.async===!0||e.defer===!0)return;i(e)||n.warn("script-placement","<script> elements should appear right before the closing </body> tag for optimal performance.",e)}})})}}},{"dom-utils/src/matches":2}],29:[function(e,t){t.exports={name:"unnecessary-elements",config:{isUnnecessary:function(e){var t=e.nodeName.toLowerCase(),n="div"==t||"span"==t,r=0===e.attributes.length;return n&&r}},func:function(e,t,n){e.on("element",function(){n.isUnnecessary(this)&&t.warn("unnecessary-elements","Do not use <div> or <span> elements without any attributes.",this)})}}},{}],30:[function(e,t){t.exports={name:"unused-classes",config:{whitelist:[/^js\-/,/^supports\-/,/^language\-/,/^lang\-/]},func:function(t,n,r){var i=this.modules.css.getClassSelectors(),a=e("../../utils/string-matcher");t.on("class",function(e){!a(e,r.whitelist)&&i.indexOf(e)<0&&n.warn("unused-classes","The class '"+e+"' is used in the HTML but not found in any stylesheet.",this)})}}},{"../../utils/string-matcher":38}],31:[function(e,t){function n(){return"string"==typeof i.methodology?r[i.methodology]:i.methodology}var r={suit:{modifier:/^([A-Z][a-zA-Z]*(?:\-[a-zA-Z]+)?)\-\-[a-zA-Z]+$/,element:/^([A-Z][a-zA-Z]*)\-[a-zA-Z]+$/},inuit:{modifier:/^((?:[a-z]+\-)*[a-z]+(?:__(?:[a-z]+\-)*[a-z]+)?)\-\-(?:[a-z]+\-)*[a-z]+$/,element:/^((?:[a-z]+\-)*[a-z]+)__(?:[a-z]+\-)*[a-z]+$/},yandex:{modifier:/^((?:[a-z]+\-)*[a-z]+(?:__(?:[a-z]+\-)*[a-z]+)?)_(?:[a-z]+_)*[a-z]+$/,element:/^((?:[a-z]+\-)*[a-z]+)__(?:[a-z]+\-)*[a-z]+$/}},i={methodology:"suit",getBlockName:function(e){var t,r=n();return r.modifier.test(e)?t=RegExp.$1:r.element.test(e)?t=RegExp.$1:t||!1},isElement:function(e){return n().element.test(e)},isModifier:function(e){return n().modifier.test(e)}};t.exports={name:"bem-conventions",config:i,func:function(t,n,r){var i=e("dom-utils/src/parents"),a=e("dom-utils/src/matches");t.on("class",function(e){if(r.isElement(e)){var t=i(this).some(function(t){return a(t,"."+r.getBlockName(e))});t||n.warn("bem-conventions","The BEM element '"+e+"' must be a descendent of '"+r.getBlockName(e)+"'.",this)}r.isModifier(e)&&(a(this,"."+r.getBlockName(e))||n.warn("bem-conventions","The BEM modifier class '"+e+"' was found without the unmodified class '"+r.getBlockName(e)+"'.",this))})}}},{"dom-utils/src/matches":2,"dom-utils/src/parents":3}],32:[function(e,t){var n=e("../../utils/string-matcher");t.exports={name:"duplicate-ids",config:{whitelist:[]},func:function(e,t,r){var i=[];e.on("id",function(e){n(e,r.whitelist)||i.push({id:e,context:this})}),e.on("afterInspect",function(){for(var e,n,r=[];e=i.shift();)r=i.filter(function(t){return e.id===t.id}),i=i.filter(function(t){return e.id!==t.id}),r.length&&(n=[e.context].concat(r.map(function(e){return e.context})),t.warn("duplicate-ids","The id '"+e.id+"' appears more than once in the document.",n))})}}},{"../../utils/string-matcher":38}],33:[function(e,t){t.exports={name:"unique-elements",config:{elements:["title","main"]},func:function(e,t,n){var r={},i=n.elements;i.forEach(function(e){r[e]=[]}),e.on("element",function(e){i.indexOf(e)>=0&&r[e].push(this)}),e.on("afterInspect",function(){i.forEach(function(e){r[e].length>1&&t.warn("unique-elements","The <"+e+"> element may only appear once in the document.",r[e])})})}}},{}],34:[function(e,t){var n=e("../../utils/string-matcher");t.exports={name:"validate-attributes",config:{whitelist:[/ng\-[a-z\-]+/]},func:function(e,t,r){var i=this.modules.validation;e.on("element",function(e){var a=i.getRequiredAttributesForElement(e);a.forEach(function(i){n(i,r.whitelist)||this.hasAttribute(i)||t.warn("validate-attributes","The '"+i+"' attribute is required for <"+e+"> elements.",this)},this)}),e.on("attribute",function(e){var a=this.nodeName.toLowerCase();i.isElementValid(a)&&(n(e,r.whitelist)||(i.isAttributeObsoleteForElement(e,a)?t.warn("validate-attributes","The '"+e+"' attribute is no longer valid on the <"+a+"> element and should not be used.",this):i.isAttributeValidForElement(e,a)||t.warn("validate-attributes","'"+e+"' is not a valid attribute of the <"+a+"> element.",this)))
})}}},{"../../utils/string-matcher":38}],35:[function(e,t){t.exports={name:"validate-element-location",config:{whitelist:[]},func:function(t,n,r){function i(e){var t=e,r=this.parentNode.nodeName.toLowerCase();o.isChildAllowedInParent(t,r)||(u.push(this),n.warn("validate-element-location","The <"+t+"> element cannot be a child of the <"+r+"> element.",this))}function a(){l(this,"body style:not([scoped])")?n.warn("validate-element-location","<style> elements inside <body> must contain the 'scoped' attribute.",this):l(this,"body style[scoped]:not(:first-child)")&&n.warn("validate-element-location","Scoped <style> elements must be the first child of their parent element.",this)}function s(e){l(this,"body meta:not([itemprop]), body link:not([itemprop])")&&n.warn("validate-element-location","<"+e+"> elements inside <body> must contain the 'itemprop' attribute.",this)}var o=this.modules.validation,l=e("dom-utils/src/matches"),u=(e("dom-utils/src/parents"),[]);t.on("element",function(e){l(this,r.whitelist)||this.parentNode&&1==this.parentNode.nodeType&&(u.indexOf(this)>-1||(i.call(this,e),a.call(this,e),s.call(this,e)))})}}},{"dom-utils/src/matches":2,"dom-utils/src/parents":3}],36:[function(e,t){var n=e("../../utils/string-matcher");t.exports={name:"validate-elements",config:{whitelist:[]},func:function(e,t,r){var i=this.modules.validation;e.on("element",function(e){n(e,r.whitelist)||(i.isElementObsolete(e)?t.warn("validate-elements","The <"+e+"> element is obsolete and should not be used.",this):i.isElementValid(e)||t.warn("validate-elements","The <"+e+"> element is not a valid HTML element.",this))})}}},{"../../utils/string-matcher":38}],37:[function(e,t){var n=document.createElement("a");t.exports=function(e){return n.href=e,!(n.protocol==location.protocol&&n.host==location.host)}},{}],38:[function(e,t){function n(e,t){return r(t)?t.test(e):"string"==typeof t?e==t:t.some(function(t){return r(t)?t.test(e):e===t})}var r=e("mout/lang/isRegExp");t.exports=n},{"mout/lang/isRegExp":11}]},{},[20]);