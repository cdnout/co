!function(e){"undefined"==typeof process&&(e.process={argv:[],cwd:function(){return""},browser:!0,env:{NODE_ENV:"development"},version:"",platform:e.navigator&&e.navigator.userAgent&&/Windows/.test(e.navigator.userAgent)?"win":""})}("object"==typeof self&&self.Object==Object?self:"object"==typeof process&&"[object process]"===Object.prototype.toString.call(process)?global:window),function(a,l,t){function p(e){for(var t=e.split("."),n=l,r=0;r<t.length&&n;r++)n=n[t[r]];return n}var d=l.define,y=l.define&&l.define.modules||l._define&&l._define.modules||{},h=l.define=function(e,t,n){var r;"function"==typeof t&&(n=t,t=[]);for(var o,s=[],i=0;i<t.length;i++)s.push(a[t[i]]?p(a[t[i]]):y[t[i]]||p(t[i]));"require"===(o=t)[0]&&"exports"===o[1]&&"module"===o[2]||!t.length&&n.length?(r={exports:{}},s[0]=function(e){return a[e]?p(a[e]):y[e]},s[1]=r.exports,s[2]=r):s[0]||"exports"!==t[0]?s[0]||"module"!==t[0]||(s[0]={id:e}):(r={exports:{}},s[0]=r.exports,"module"===t[1]&&(s[1]=r)),l.define=d;var u=n?n.apply(null,s):void 0;l.define=h,u=r&&r.exports?r.exports:u,y[e]=u;var c=a[e];c&&!p(c)&&(function(e){if(!e||!e.__esModule)return!1;var t={__esModule:!0,default:!0};for(var n in e)if(!t[n])return!1;return!0}(u)&&(u=u.default),function(e,t){for(var n,r=e.split("."),o=l,s=0;s<r.length-1;s++)o=o[n=r[s]]||(o[n]={});o[n=r[r.length-1]]=t}(c,u))};l.define.orig=d,l.define.modules=y,l.define.amd=!0,h("@loader",[],function(){function e(){}return{get:function(){return{prepareGlobal:e,retrieveGlobal:e}},global:l,__exec:function(e){t(e.source,l)}}})}({},"object"==typeof self&&self.Object==Object?self:"object"==typeof process&&"[object process]"===Object.prototype.toString.call(process)?global:window,function(__$source__,__$global__){eval("(function() { "+__$source__+" \n }).call(__$global__);")}),define("syn/synthetic",function(e,t,n){function o(e,t){var n;for(n in t)e[n]=t[n];return e}function s(e,t,n){var r=n.ownerDocument.createEventObject();return o(r,t)}var i,u,c,r,a=window.syn?window.syn:{},l={msie:!(!window.attachEvent||window.opera)||-1<navigator.userAgent.indexOf("Trident/"),opera:!!window.opera,webkit:-1<navigator.userAgent.indexOf("AppleWebKit/"),safari:-1<navigator.userAgent.indexOf("AppleWebKit/")&&-1===navigator.userAgent.indexOf("Chrome/"),gecko:-1<navigator.userAgent.indexOf("Gecko"),mobilesafari:!!navigator.userAgent.match(/Apple.*Mobile.*Safari/),rhino:navigator.userAgent.match(/Rhino/)&&!0,chrome:!!window.chrome&&!!window.chrome.webstore},p={},d=1,y="_synthetic"+(new Date).getTime(),h=/keypress|keyup|keydown/,f=/load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll/,k=function(e,t,n,r){return new k.init(e,t,n,r)};k.config=a,k.__tryFocus=function(e){try{e.focus()}catch(e){}},i=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},u=function(e,t,n){return e.addEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},c=k.config.schedule||function(e,t){setTimeout(e,t)},o(k,{init:function(e,t,n,r){var o=k.args(n,t,r),s=this;this.queue=[],this.element=o.element,"function"==typeof this[e]?this[e](o.element,o.options,function(e,t){o.callback&&o.callback.apply(s,arguments),s.done.apply(s,arguments)}):(this.result=k.trigger(o.element,e,o.options),o.callback&&o.callback.call(this,o.element,this.result))},jquery:function(e,t){return window.FuncUnit&&window.FuncUnit.jQuery?window.FuncUnit.jQuery:e&&k.helpers.getWindow(e).jQuery||window.jQuery},args:function(){for(var e={},t=0;t<arguments.length;t++)"function"==typeof arguments[t]?e.callback=arguments[t]:arguments[t]&&arguments[t].jquery?e.element=arguments[t][0]:arguments[t]&&arguments[t].nodeName?e.element=arguments[t]:e.options&&"string"==typeof arguments[t]?e.element=document.getElementById(arguments[t]):arguments[t]&&(e.options=arguments[t]);return e},click:function(e,t,n){k("click!",e,t,n)},defaults:{focus:function(){var t,e;k.support.focusChanges||(e=(t=this).nodeName.toLowerCase(),k.data(t,"syntheticvalue",t.value),"input"!==e&&"textarea"!==e||i(t,"blur",function e(){k.data(t,"syntheticvalue")!==t.value&&k.trigger(t,"change",{}),u(t,"blur",e)}))},submit:function(){k.onParents(this,function(e){if("form"===e.nodeName.toLowerCase())return e.submit(),!1})}},changeOnBlur:function(t,n,r){i(t,"blur",function e(){r!==t[n]&&k.trigger(t,"change",{}),u(t,"blur",e)})},closest:function(e,t){for(;e&&e.nodeName.toLowerCase()!==t.toLowerCase();)e=e.parentNode;return e},data:function(e,t,n){if(e[y]||(e[y]=d++),p[e[y]]||(p[e[y]]={}),p[e[y]],!n)return p[e[y]][t];p[e[y]][t]=n},onParents:function(e,t){for(var n;e&&!1!==n;)n=t(e),e=e.parentNode;return e},focusable:/^(a|area|frame|iframe|label|input|select|textarea|button|html|object)$/i,isFocusable:function(e){var t;return e.getAttributeNode&&(t=e.getAttributeNode("tabIndex")),this.focusable.test(e.nodeName)||t&&t.specified&&k.isVisible(e)},isVisible:function(e){return e.offsetWidth&&e.offsetHeight||e.clientWidth&&e.clientHeight},tabIndex:function(e){var t=e.getAttributeNode("tabIndex");return t&&t.specified&&(parseInt(e.getAttribute("tabIndex"))||0)},bind:i,unbind:u,schedule:c,browser:l,helpers:{createEventObject:s,createBasicStandardEvent:function(e,t,n){var r;try{r=n.createEvent("Events")}catch(e){r=n.createEvent("UIEvents")}finally{r.initEvent(e,!0,!0),o(r,t)}return r},inArray:function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},getWindow:function(e){if(e.ownerDocument)return e.ownerDocument.defaultView||e.ownerDocument.parentWindow},extend:o,scrollOffset:function(e,t){var n=e.document.documentElement,r=e.document.body;if(!t)return{left:(n&&n.scrollLeft||r&&r.scrollLeft||0)+(n.clientLeft||0),top:(n&&n.scrollTop||r&&r.scrollTop||0)+(n.clientTop||0)};window.scrollTo(t.left,t.top)},scrollDimensions:function(e){var t=e.document.documentElement,n=e.document.body,r=t.clientWidth,o=t.clientHeight,s="CSS1Compat"===e.document.compatMode;return{height:s&&o||n.clientHeight||o,width:s&&r||n.clientWidth||r}},addOffset:function(e,t){var n,r=k.jquery(t);"object"==typeof e&&void 0===e.clientX&&void 0===e.clientY&&void 0===e.pageX&&void 0===e.pageY&&r&&(n=(t=r(t)).offset(),e.pageX=n.left+t.width()/2,e.pageY=n.top+t.height()/2)}},key:{ctrlKey:null,altKey:null,shiftKey:null,metaKey:null},dispatch:function(e,t,n,r){if(t.dispatchEvent&&e){var o=e.preventDefault,s=r?-1:0;return r&&i(t,n,function e(t){t.preventDefault(),u(this,n,e)}),e.preventDefault=function(){s++,0<++s&&o.apply(this,[])},t.dispatchEvent(e),s<=0}try{window.event=e}catch(e){}return t.sourceIndex<=0||t.fireEvent&&t.fireEvent("on"+n,e)},create:{page:{event:function(e,t,n){var r,o=k.helpers.getWindow(n).document||document;if(o.createEvent)return(r=o.createEvent("Events")).initEvent(e,!0,!0),r;try{r=s(0,t,n)}catch(e){}return r}},focus:{event:function(e,t,n){return k.onParents(n,function(e){if(k.isFocusable(e)){if("html"!==e.nodeName.toLowerCase())k.__tryFocus(e),r=e;else if(r){var t=k.helpers.getWindow(n).document;if(t!==window.document)return!1;r=(t.activeElement?t.activeElement.blur():r.blur(),null)}return!1}}),!0}}},support:{clickChanges:!1,clickSubmits:!1,keypressSubmits:!1,mouseupSubmits:!1,radioClickChanges:!1,focusChanges:!1,linkHrefJS:!1,keyCharacters:!1,backspaceWorks:!1,mouseDownUpClicks:!1,tabKeyTabs:!1,keypressOnAnchorClicks:!1,optionClickBubbles:!1,pointerEvents:!1,touchEvents:!1,ready:0},trigger:function(e,t,n){n=n||{};var r,o,s,i=k.create,u=i[t]&&i[t].setup,c=h.test(t)?"key":f.test(t)?"page":"mouse",a=i[t]||{},l=i[c],p=e;return 2===k.support.ready&&u&&u(t,n,e),s=n._autoPrevent,delete n._autoPrevent,(o=a.event?a.event(t,n,e):(n=l.options?l.options(t,n,e):n,!k.support.changeBubbles&&/option/i.test(e.nodeName)&&(p=e.parentNode),r=l.event(t,n,p),k.dispatch(r,p,t,s)))&&2===k.support.ready&&k.defaults[t]&&k.defaults[t].call(e,n,s),o},eventSupported:function(e){var t=document.createElement("div"),n=(e="on"+e)in t;return n||(t.setAttribute(e,"return;"),n="function"==typeof t[e]),t=null,n}}),o(k.init.prototype,{then:function(n,e,t,r){k.autoDelay&&this.delay();var o=k.args(t,e,r),s=this;return this.queue.unshift(function(e,t){if("function"!=typeof this[n])return this.result=k.trigger(o.element,n,o.options),o.callback&&o.callback.call(this,o.element,this.result),this;this.element=o.element||e,this[n](this.element,o.options,function(e,t){o.callback&&o.callback.apply(s,arguments),s.done.apply(s,arguments)})}),this},delay:function(e,t){"function"==typeof e&&(t=e,e=null),e=e||600;var n=this;return this.queue.unshift(function(){c(function(){t&&t.apply(n,[]),n.done.apply(n,arguments)},e)}),this},done:function(e,t){t&&(this.element=t),this.queue.length&&this.queue.pop().call(this,this.element,e)},_click:function(e,t,n,r){k.helpers.addOffset(t,e),k.support.pointerEvents&&k.trigger(e,"pointerdown",t),k.support.touchEvents&&k.trigger(e,"touchstart",t),k.trigger(e,"mousedown",t),c(function(){k.support.pointerEvents&&k.trigger(e,"pointerup",t),k.support.touchEvents&&k.trigger(e,"touchend",t),k.trigger(e,"mouseup",t),!k.support.mouseDownUpClicks||r?(k.trigger(e,"click",t),n(!0)):(k.create.click.setup("click",t,e),k.defaults.click.call(e),c(function(){n(!0)},1))},1)},_rightClick:function(e,t,n){k.helpers.addOffset(t,e);var r=o(o({},k.mouse.browser.right.mouseup),t);k.support.pointerEvents&&k.trigger(e,"pointerdown",r),k.trigger(e,"mousedown",r),c(function(){k.support.pointerEvents&&k.trigger(e,"pointerup",r),k.trigger(e,"mouseup",r),k.mouse.browser.right.contextmenu&&k.trigger(e,"contextmenu",o(o({},k.mouse.browser.right.contextmenu),t)),n(!0)},1)},_dblclick:function(e,t,n){k.helpers.addOffset(t,e);var r=this;this._click(e,t,function(){c(function(){r._click(e,t,function(){k.trigger(e,"dblclick",t),n(!0)},!0)},2)})}});function g(r){k[r]=function(e,t,n){return k("_"+r,e,t,n)},k.init.prototype[r]=function(e,t,n){return this.then("_"+r,e,t,n)}}for(var m=["click","dblclick","move","drag","key","type","rightClick"],v=0;v<m.length;v++)g(m[v]);n.exports=k}),define("syn/keyboard-event-keys",["require","exports","module","syn/synthetic"],function(e,t,n){e("syn/synthetic").key.keyboardEventKeys={"\b":"Backspace","\t":"Tab","\r":"Enter",shift:"Shift",ctrl:"Control",alt:"Alt",meta:"Meta","pause-break":"Pause",caps:"CapsLock",escape:"Escape","num-lock":"NumLock","scroll-lock":"ScrollLock",print:"Print","page-up":"PageUp","page-down":"PageDown",end:"End",home:"Home",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",insert:"Insert",delete:"Delete",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12"}}),define("syn/mouse",["require","exports","module","syn/synthetic"],function(require,exports,module){var syn=require("syn/synthetic"),h=syn.helpers,getWin=h.getWindow;syn.mouse={},h.extend(syn.defaults,{mousedown:function(e){syn.trigger(this,"focus",{})},click:function(){var element=this,href,type,createChange,radioChanged,nodeName,scope,code,form;try{href=element.href,type=element.type,createChange=syn.data(element,"createChange"),radioChanged=syn.data(element,"radioChanged"),scope=getWin(element),nodeName=element.nodeName.toLowerCase()}catch(e){return}!syn.support.linkHrefJS&&/^\s*javascript:/.test(href)&&(code=href.replace(/^\s*javascript:/,""),"//"!==code&&-1===code.indexOf("void(0)")&&(window.selenium?eval("with(selenium.browserbot.getCurrentWindow()){"+code+"}"):eval("with(scope){"+code+"}"))),syn.support.clickSubmits||"input"!==nodeName&&"button"!==nodeName||"submit"!==type||(form=syn.closest(element,"form"),form&&syn.trigger(form,"submit",{})),"a"===nodeName&&element.href&&!/^\s*javascript:/.test(href)&&(scope.location.href=href),"input"===nodeName&&"checkbox"===type&&(syn.support.clickChanges||syn.trigger(element,"change",{})),"input"===nodeName&&"radio"===type&&radioChanged&&!syn.support.radioClickChanges&&syn.trigger(element,"change",{}),"option"===nodeName&&createChange&&(syn.trigger(element.parentNode,"change",{}),syn.data(element,"createChange",!1))}}),h.extend(syn.create,{mouse:{options:function(e,t,n){var r=document.documentElement,o=document.body,s=[t.pageX||0,t.pageY||0],i=syn.mouse.browser&&syn.mouse.browser.left[e],u=syn.mouse.browser&&syn.mouse.browser.right[e];return h.extend({bubbles:!0,cancelable:!0,view:window,detail:1,screenX:1,screenY:1,clientX:t.clientX||s[0]-(r&&r.scrollLeft||o&&o.scrollLeft||0)-(r.clientLeft||0),clientY:t.clientY||s[1]-(r&&r.scrollTop||o&&o.scrollTop||0)-(r.clientTop||0),ctrlKey:!!syn.key.ctrlKey,altKey:!!syn.key.altKey,shiftKey:!!syn.key.shiftKey,metaKey:!!syn.key.metaKey,button:i&&null!==i.button?i.button:u&&u.button||("contextmenu"===e?2:0),relatedTarget:document.documentElement},t)},event:function(t,n,e){var r,o=getWin(e).document||document;if(o.createEvent){try{n.view=o.defaultView,(r=o.createEvent("MouseEvents")).initMouseEvent(t,n.bubbles,n.cancelable,n.view,n.detail,n.screenX,n.screenY,n.clientX,n.clientY,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.button,n.relatedTarget)}catch(e){r=h.createBasicStandardEvent(t,n,o)}return r.synthetic=!0,r}try{r=h.createEventObject(t,n,e)}catch(e){}return r}},click:{setup:function(e,t,n){var r=n.nodeName.toLowerCase();if(!syn.support.clickChecks&&!syn.support.changeChecks&&"input"===r&&("checkbox"===(e=n.type.toLowerCase())&&(n.checked=!n.checked),"radio"===e&&!n.checked)){try{syn.data(n,"radioChanged",!0)}catch(e){}n.checked=!0}if("a"===r&&n.href&&!/^\s*javascript:/.test(n.href)&&syn.data(n,"href",n.href),/option/i.test(n.nodeName)){for(var o=n.parentNode.firstChild,s=-1;o&&(1!==o.nodeType||(s++,o!==n));)o=o.nextSibling;s!==n.parentNode.selectedIndex&&(n.parentNode.selectedIndex=s,syn.data(n,"createChange",!0))}}},mousedown:{setup:function(e,t,n){var r=n.nodeName.toLowerCase();!syn.browser.safari||"select"!==r&&"option"!==r||(t._autoPrevent=!0)}}})}),define("syn/mouse.support",["require","exports","module","syn/synthetic","syn/mouse"],function(e,t,n){var i=e("syn/synthetic");e("syn/mouse"),function e(){if(!document.body)return i.schedule(e,1);window.__synthTest=function(){i.support.linkHrefJS=!0};var t,n,r,o,s=document.createElement("div");s.innerHTML="<form id='outer'><input name='checkbox' type='checkbox'/><input name='radio' type='radio' /><input type='submit' name='submitter'/><input type='input' name='inputter'/><input name='one'><input name='two'/><a href='javascript:__synthTest()' id='synlink'></a><select><option></option></select></form>",document.documentElement.appendChild(s),t=(r=s.firstChild).childNodes[0],n=r.childNodes[2],o=r.getElementsByTagName("select")[0],i.trigger(r.childNodes[6],"click",{}),t.checked=!1,t.onchange=function(){i.support.clickChanges=!0},i.trigger(t,"click",{}),i.support.clickChecks=t.checked,t.checked=!1,i.trigger(t,"change",{}),i.support.changeChecks=t.checked,r.onsubmit=function(e){return e.preventDefault&&e.preventDefault(),!(i.support.clickSubmits=!0)},i.trigger(n,"click",{}),r.childNodes[1].onchange=function(){i.support.radioClickChanges=!0},i.trigger(r.childNodes[1],"click",{}),i.bind(s,"click",function e(){i.support.optionClickBubbles=!0,i.unbind(s,"click",e)}),i.trigger(o.firstChild,"click",{}),i.support.changeBubbles=i.eventSupported("change"),s.onclick=function(){i.support.mouseDownUpClicks=!0},i.trigger(s,"mousedown",{}),i.trigger(s,"mouseup",{}),document.documentElement.removeChild(s),i.support.pointerEvents=i.eventSupported("pointerdown"),i.support.touchEvents=i.eventSupported("touchstart"),i.support.ready++}()}),define("syn/browsers",["require","exports","module","syn/synthetic","syn/mouse"],function(e,t,n){var r=e("syn/synthetic");e("syn/mouse"),r.key.browsers={webkit:{prevent:{keyup:[],keydown:["char","keypress"],keypress:["char"]},character:{keydown:[0,"key"],keypress:["char","char"],keyup:[0,"key"]},specialChars:{keydown:[0,"char"],keyup:[0,"char"]},navigation:{keydown:[0,"key"],keyup:[0,"key"]},special:{keydown:[0,"key"],keyup:[0,"key"]},tab:{keydown:[0,"char"],keyup:[0,"char"]},"pause-break":{keydown:[0,"key"],keyup:[0,"key"]},caps:{keydown:[0,"key"],keyup:[0,"key"]},escape:{keydown:[0,"key"],keyup:[0,"key"]},"num-lock":{keydown:[0,"key"],keyup:[0,"key"]},"scroll-lock":{keydown:[0,"key"],keyup:[0,"key"]},print:{keyup:[0,"key"]},function:{keydown:[0,"key"],keyup:[0,"key"]},"\r":{keydown:[0,"key"],keypress:["char","key"],keyup:[0,"key"]}},gecko:{prevent:{keyup:[],keydown:["char"],keypress:["char"]},character:{keydown:[0,"key"],keypress:["char",0],keyup:[0,"key"]},specialChars:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},navigation:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},special:{keydown:[0,"key"],keyup:[0,"key"]},"\t":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},"pause-break":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},caps:{keydown:[0,"key"],keyup:[0,"key"]},escape:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},"num-lock":{keydown:[0,"key"],keyup:[0,"key"]},"scroll-lock":{keydown:[0,"key"],keyup:[0,"key"]},print:{keyup:[0,"key"]},function:{keydown:[0,"key"],keyup:[0,"key"]},"\r":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]}},msie:{prevent:{keyup:[],keydown:["char","keypress"],keypress:["char"]},character:{keydown:[null,"key"],keypress:[null,"char"],keyup:[null,"key"]},specialChars:{keydown:[null,"char"],keyup:[null,"char"]},navigation:{keydown:[null,"key"],keyup:[null,"key"]},special:{keydown:[null,"key"],keyup:[null,"key"]},tab:{keydown:[null,"char"],keyup:[null,"char"]},"pause-break":{keydown:[null,"key"],keyup:[null,"key"]},caps:{keydown:[null,"key"],keyup:[null,"key"]},escape:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},"num-lock":{keydown:[null,"key"],keyup:[null,"key"]},"scroll-lock":{keydown:[null,"key"],keyup:[null,"key"]},print:{keyup:[null,"key"]},function:{keydown:[null,"key"],keyup:[null,"key"]},"\r":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]}},opera:{prevent:{keyup:[],keydown:[],keypress:["char"]},character:{keydown:[null,"key"],keypress:[null,"char"],keyup:[null,"key"]},specialChars:{keydown:[null,"char"],keypress:[null,"char"],keyup:[null,"char"]},navigation:{keydown:[null,"key"],keypress:[null,"key"]},special:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},tab:{keydown:[null,"char"],keypress:[null,"char"],keyup:[null,"char"]},"pause-break":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},caps:{keydown:[null,"key"],keyup:[null,"key"]},escape:{keydown:[null,"key"],keypress:[null,"key"]},"num-lock":{keyup:[null,"key"],keydown:[null,"key"],keypress:[null,"key"]},"scroll-lock":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},print:{},function:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},"\r":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]}}},r.mouse.browsers={webkit:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},opera:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},msie:{right:{mousedown:{button:2},mouseup:{button:2},contextmenu:{button:0}},left:{mousedown:{button:1},mouseup:{button:1},click:{button:0}}},chrome:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},gecko:{left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}},right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}}}},r.key.browser=function(){if(r.key.browsers[window.navigator.userAgent])return r.key.browsers[window.navigator.userAgent];for(var e in r.browser)if(r.browser[e]&&r.key.browsers[e])return r.key.browsers[e];return r.key.browsers.gecko}(),r.mouse.browser=function(){if(r.mouse.browsers[window.navigator.userAgent])return r.mouse.browsers[window.navigator.userAgent];for(var e in r.browser)if(r.browser[e]&&r.mouse.browsers[e])return r.mouse.browsers[e];return r.mouse.browsers.gecko}()}),define("syn/typeable",["require","exports","module","syn/synthetic"],function(e,t,n){var r=e("syn/synthetic"),o=[],s=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};r.typeable=function(e){-1===s.call(o,e)&&o.push(e)},r.typeable.test=function(e){for(var t=0,n=o.length;t<n;t++)if(o[t](e))return!0;return!1};var i=r.typeable,u=/input|textarea/i;i(function(e){return u.test(e.nodeName)}),i(function(e){return-1!==s.call(["","true"],e.getAttribute("contenteditable"))})}),define("syn/key",["require","exports","module","syn/synthetic","syn/typeable","syn/browsers"],function(e,t,n){var p=e("syn/synthetic");e("syn/typeable"),e("syn/browsers");function c(e){var t;try{t=void 0!==e.selectionStart&&null!==e.selectionStart}catch(e){t=!1}return t}function d(t){var e,n,r;if(c(t))return document.activeElement&&document.activeElement!==t&&t.selectionStart===t.selectionEnd&&0===t.selectionStart?{start:t.value.length,end:t.value.length}:{start:t.selectionStart,end:t.selectionEnd};try{if("input"===t.nodeName.toLowerCase())return e=h.getWindow(t).document.selection.createRange(),(n=t.createTextRange()).setEndPoint("EndToStart",e),{start:r=n.text.length,end:r+e.text.length};n=(e=h.getWindow(t).document.selection.createRange()).duplicate();var o=e.duplicate(),s=e.duplicate();o.collapse(),s.collapse(!1),o.moveStart("character",-1),s.moveStart("character",-1),n.moveToElementText(t),n.setEndPoint("EndToEnd",e),r=n.text.length-e.text.length;var i=n.text.length;return 0!==r&&""===o.text&&(r+=2),0!==i&&""===s.text&&(i+=2),{start:r,end:i}}catch(e){var u=a.test(t.nodeName)?"value":"textContent";return{start:t[u].length,end:t[u].length}}}function l(e){return a.test(e.nodeName)?e.value:e[r]}function y(e,t){a.test(e.nodeName)?e.value=t:e[r]=t}var h=p.helpers,a=/input|textarea/i,r=null!=document.createElement("span").textContent?"textContent":"innerText";h.extend(p,{keycodes:{"\b":8,"\t":9,"\r":13,shift:16,ctrl:17,alt:18,meta:91,"pause-break":19,caps:20,escape:27,"num-lock":144,"scroll-lock":145,print:44,"page-up":33,"page-down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46," ":32,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,num0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,"*":106,"+":107,subtract:109,decimal:110,divide:111,";":186,"=":187,",":188,dash:189,"-":189,period:190,".":190,"forward-slash":191,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222,"left window key":91,"right window key":92,"select key":93,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},selectText:function(e,t,n){var r;c(e)?n?(e.selectionStart=t,e.selectionEnd=n):(p.__tryFocus(e),e.setSelectionRange(t,t)):e.createTextRange&&((r=e.createTextRange()).moveStart("character",t),n=n||t,r.moveEnd("character",n-e.value.length),r.select())},getText:function(e){if(p.typeable.test(e)){var t=d(e);return e.value.substring(t.start,t.end)}var n=p.helpers.getWindow(e);return n.getSelection?n.getSelection().toString():n.document.getSelection?n.document.getSelection().toString():n.document.selection.createRange().text},getSelection:d}),h.extend(p.key,{data:function(e){if(p.key.browser[e])return p.key.browser[e];for(var t in p.key.kinds)if(-1<h.inArray(e,p.key.kinds[t]))return p.key.browser[t];return p.key.browser.character},isSpecial:function(e){for(var t=p.key.kinds.special,n=0;n<t.length;n++)if(p.keycodes[t[n]]===e)return t[n]},options:function(e,t){var n=p.key.data(e);if(!n[t])return null;var r=n[t][0],o=n[t][1],s={key:e};return s.keyCode="key"===o?p.keycodes[e]:"char"===o?e.charCodeAt(0):o,"char"===r?s.charCode=e.charCodeAt(0):null!==r&&(s.charCode=r),s.keyCode?s.which=s.keyCode:s.which=s.charCode,s},kinds:{special:["shift","ctrl","alt","meta","caps"],specialChars:["\b"],navigation:["page-up","page-down","end","home","left","up","right","down","insert","delete"],function:["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"]},getDefault:function(e){if(p.key.defaults[e])return p.key.defaults[e];for(var t in p.key.kinds)if(-1<h.inArray(e,p.key.kinds[t])&&p.key.defaults[t])return p.key.defaults[t];return p.key.defaults.character},defaults:{character:function(e,t,n,r,o){var s,i,u,c,a;/num\d+/.test(n)&&(n=n.match(/\d+/)[0]),(r||!p.support.keyCharacters&&p.typeable.test(this))&&(i=(s=l(this)).substr(0,o.start),u=s.substr(o.end),y(this,i+(c=n)+u),a="\n"===c&&p.support.textareaCarriage?2:c.length,p.selectText(this,i.length+a))},c:function(e,t,n,r,o){p.key.ctrlKey?p.key.clipboard=p.getText(this):p.key.defaults.character.apply(this,arguments)},v:function(e,t,n,r,o){p.key.ctrlKey?p.key.defaults.character.call(this,e,t,p.key.clipboard,!0,o):p.key.defaults.character.apply(this,arguments)},a:function(e,t,n,r,o){p.key.ctrlKey?p.selectText(this,0,l(this).length):p.key.defaults.character.apply(this,arguments)},home:function(){p.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight)return e.scrollTop=0,!1})},end:function(){p.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight)return e.scrollTop=e.scrollHeight,!1})},"page-down":function(){p.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight){var t=e.clientHeight;return e.scrollTop+=t,!1}})},"page-up":function(){p.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight){var t=e.clientHeight;return e.scrollTop-=t,!1}})},"\b":function(e,t,n,r,o){var s,i,u;!p.support.backspaceWorks&&p.typeable.test(this)&&(i=(s=l(this)).substr(0,o.start),u=s.substr(o.end),o.start===o.end&&0<o.start?(y(this,i.substring(0,i.length-1)+u),p.selectText(this,o.start-1)):(y(this,i+u),p.selectText(this,o.start)))},delete:function(e,t,n,r,o){var s,i,u;!p.support.backspaceWorks&&p.typeable.test(this)&&(i=(s=l(this)).substr(0,o.start),u=s.substr(o.end),o.start===o.end&&o.start<=l(this).length-1?y(this,i+u.substring(1)):y(this,i+u),p.selectText(this,o.start))},"\r":function(e,t,n,r,o){var s,i=this.nodeName.toLowerCase();"input"===i&&p.trigger(this,"change",{}),p.support.keypressSubmits||"input"!==i||(s=p.closest(this,"form"))&&p.trigger(s,"submit",{}),p.support.keyCharacters||"textarea"!==i||p.key.defaults.character.call(this,e,t,"\n",void 0,o),p.support.keypressOnAnchorClicks||"a"!==i||p.trigger(this,"click",{})},"\t":function(e,t){for(var n=function(e){for(var t=h.getWindow(e).document,n=[],r=t.getElementsByTagName("*"),o=r.length,s=0;s<o;s++)p.isFocusable(r[s])&&r[s]!==t.documentElement&&n.push(r[s]);return n}(this),r=null,o=0,s=[];o<n.length;o++)s.push([n[o],o]);s.sort(function(e,t){var n=e[0],r=t[0],o=p.tabIndex(n)||0,s=p.tabIndex(r)||0;return o===s?e[1]-t[1]:0===o?1:0===s?-1:o-s});for(var i,u=s.length,o=0;o<u;o++){this===s[o][0]&&(i=o,r=p.key.shiftKey?0<=--i&&s[i][0]||s[u-1][0]:++i<u&&s[i][0]||s[0][0])}return r?p.__tryFocus(r):r=void 0,r},left:function(e,t,n,r,o){p.typeable.test(this)&&(p.key.shiftKey?p.selectText(this,0===o.start?0:o.start-1,o.end):p.selectText(this,0===o.start?0:o.start-1))},right:function(e,t,n,r,o){p.typeable.test(this)&&(p.key.shiftKey?p.selectText(this,o.start,o.end+1>l(this).length?l(this).length:o.end+1):p.selectText(this,o.end+1>l(this).length?l(this).length:o.end+1))},up:function(){/select/i.test(this.nodeName)&&(this.selectedIndex=this.selectedIndex?this.selectedIndex-1:0)},down:function(){/select/i.test(this.nodeName)&&(p.changeOnBlur(this,"selectedIndex",this.selectedIndex),this.selectedIndex=this.selectedIndex+1)},shift:function(){return null},ctrl:function(){return null},alt:function(){return null},meta:function(){return null}}}),h.extend(p.create,{keydown:{setup:function(e,t,n){-1!==h.inArray(t,p.key.kinds.special)&&(p.key[t+"Key"]=n)}},keypress:{setup:function(e,t,n){p.support.keyCharacters&&!p.support.keysOnNotFocused&&p.__tryFocus(n)}},keyup:{setup:function(e,t,n){-1!==h.inArray(t,p.key.kinds.special)&&(p.key[t+"Key"]=null)}},key:{options:function(e,t,n){return t="object"!=typeof t?{character:t}:t,(t=h.extend({},t)).character&&(h.extend(t,p.key.options(t.character,e)),delete t.character),t=h.extend({ctrlKey:!!p.key.ctrlKey,altKey:!!p.key.altKey,shiftKey:!!p.key.shiftKey,metaKey:!!p.key.metaKey},t)},event:function(t,n,e){var r,o=h.getWindow(e).document||document;if("undefined"!=typeof KeyboardEvent){var s=p.key.keyboardEventKeys;return n.key&&s[n.key]&&(n.key=s[n.key]),(r=new KeyboardEvent(t,n)).synthetic=!0,r}if(o.createEvent){try{(r=o.createEvent("KeyEvents")).initKeyEvent(t,!0,!0,window,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.keyCode,n.charCode)}catch(e){r=h.createBasicStandardEvent(t,n,o)}return r.synthetic=!0,r}try{r=h.createEventObject.apply(this,arguments),h.extend(r,n)}catch(e){}return r}}});var f={enter:"\r",backspace:"\b",tab:"\t",space:" "};h.extend(p.init.prototype,{_key:function(e,t,n){if(/-up$/.test(t)&&-1!==h.inArray(t.replace("-up",""),p.key.kinds.special))return p.trigger(e,"keyup",t.replace("-up","")),n(!0,e);var r,o=h.getWindow(e).document.activeElement,s=p.typeable.test(e)&&d(e),i=f[t]||t,u=p.trigger(e,"keydown",i),c=p.key.getDefault,a=p.key.browser.prevent,l=p.key.options(i,"keypress");return u?l?(o!==h.getWindow(e).document.activeElement&&(e=h.getWindow(e).document.activeElement),(u=p.trigger(e,"keypress",l))&&(r=c(i).call(e,l,h.getWindow(e),i,void 0,s))):r=c(i).call(e,l,h.getWindow(e),i,void 0,s):l&&-1===h.inArray("keypress",a.keydown)&&(o!==h.getWindow(e).document.activeElement&&(e=h.getWindow(e).document.activeElement),p.trigger(e,"keypress",l)),r&&r.nodeName&&(e=r),null!==r?p.schedule(function(){"\r"===i&&"input"===e.nodeName.toLowerCase()||p.support.oninput&&p.trigger(e,"input",p.key.options(i,"input")),p.trigger(e,"keyup",p.key.options(i,"keyup")),n(u,e)},1):n(u,e),e},_type:function(r,e,o){var s=(e+"").match(/(\[[^\]]+\])|([^\[])/g),i=this,u=function(e,t){var n=s.shift();n?(t=t||r,1<n.length&&(n=n.substr(1,n.length-2)),i._key(t,n,u)):o(e,t)};u()}})}),define("syn/key.support",["require","exports","module","syn/synthetic","syn/key"],function(e,t,n){var c=e("syn/synthetic");e("syn/key"),c.config.support?c.helpers.extend(c.support,c.config.support):function e(){if(!document.body)return c.schedule(e,1);var t,n,r,o,s,i=document.createElement("div"),u=document.documentElement;i.innerHTML="<form id='outer'><input name='checkbox' type='checkbox'/><input name='radio' type='radio' /><input type='submit' name='submitter'/><input type='input' name='inputter'/><input name='one'><input name='two'/><a href='#abc'></a><textarea>1\n2</textarea></form>",u.insertBefore(i,u.firstElementChild||u.children[0]),(t=i.firstChild).childNodes[0],t.childNodes[2],n=t.getElementsByTagName("a")[0],r=t.getElementsByTagName("textarea")[0],o=t.childNodes[3],s=t.childNodes[4],t.onsubmit=function(e){return e.preventDefault&&e.preventDefault(),c.support.keypressSubmits=!0,e.returnValue=!1},c.__tryFocus(o),c.trigger(o,"keypress","\r"),c.trigger(o,"keypress","a"),c.support.keyCharacters="a"===o.value,o.value="a",c.trigger(o,"keypress","\b"),c.support.backspaceWorks=""===o.value,o.onchange=function(){c.support.focusChanges=!0},c.__tryFocus(o),c.trigger(o,"keypress","a"),c.__tryFocus(t.childNodes[5]),c.trigger(o,"keypress","b"),c.support.keysOnNotFocused="ab"===o.value,c.bind(n,"click",function(e){return e.preventDefault&&e.preventDefault(),c.support.keypressOnAnchorClicks=!0,e.returnValue=!1}),c.trigger(n,"keypress","\r"),c.support.textareaCarriage=4===r.value.length,c.support.oninput="oninput"in s,u.removeChild(i),c.support.ready++}()}),define("syn/drag",["require","exports","module","syn/synthetic"],function(e,t,n){function k(e,t){var n,r=e.clientX,o=e.clientY;return null==e?null:(g.support.elementFromPage&&(r+=(n=g.helpers.scrollOffset(t)).left,o+=n.top),t.document.elementFromPoint(Math.round(r),Math.round(o)))}var g=e("syn/synthetic"),m={html5drag:!1,focusWindow:null,dragAndDrop:function(e,t,n,r,o){this.currentDataTransferItem=null,this.focusWindow=e,this._mouseOver(t),this._mouseEnter(t),this._mouseMove(t),this._mouseDown(t),this._dragStart(t),this._drag(t),this._dragEnter(t),this._dragOver(t),m.startMove(t,n,r,function(){m._dragLeave(t),m._dragEnd(t),m._mouseOut(t),m._mouseLeave(t),m._drop(n),m._dragEnd(n),m._mouseOver(n),m._mouseEnter(n),m._mouseMove(n),m._mouseOut(n),m._mouseLeave(n),o(),m.cleanup()})},_dragStart:function(e){this.createAndDispatchEvent(e,"dragstart",{bubbles:!1,cancelable:!1})},_drag:function(e){this.createAndDispatchEvent(e,"drag",{bubbles:!0,cancelable:!0})},_dragEnter:function(e){this.createAndDispatchEvent(e,"dragenter",{bubbles:!0,cancelable:!0})},_dragOver:function(e){this.createAndDispatchEvent(e,"dragover",{bubbles:!0,cancelable:!0})},_dragLeave:function(e){this.createAndDispatchEvent(e,"dragleave",{bubbles:!0,cancelable:!1})},_drop:function(e){this.createAndDispatchEvent(e,"drop",{bubbles:!0,cancelable:!0,buttons:1})},_dragEnd:function(e){this.createAndDispatchEvent(e,"dragend",{bubbles:!0,cancelable:!1})},_mouseDown:function(e,t){this.createAndDispatchEvent(e,"mousedown",t)},_mouseMove:function(e,t){this.createAndDispatchEvent(e,"mousemove",t)},_mouseEnter:function(e,t){this.createAndDispatchEvent(e,"mouseenter",t)},_mouseOver:function(e,t){this.createAndDispatchEvent(e,"mouseover",t)},_mouseOut:function(e,t){this.createAndDispatchEvent(e,"mouseout",t)},_mouseLeave:function(e,t){this.createAndDispatchEvent(e,"mouseleave",t)},createAndDispatchEvent:function(e,t,n){var r;e&&(r=k(e,this.focusWindow),g.trigger(r,t,n))},getDataTransferObject:function(){return this.currentDataTransferItem?this.currentDataTransferItem:this.currentDataTransferItem=this.createDataTransferObject()},cleanup:function(){this.currentDataTransferItem=null,this.focusWindow=null},createDataTransferObject:function(){return{dropEffect:"none",effectAllowed:"uninitialized",files:[],items:[],types:[],data:[],setData:function(e,t){var n={};n.dataFlavor=e,n.val=t,this.data.push(n)},getData:function(e){for(var t=0;t<this.data.length;t++){var n=this.data[t];if(n.dataFlavor===e)return n.val}}}},startMove:function(o,s,i,u){function c(){var e=new Date,t=g.helpers.scrollOffset(d),n=(0===f?0:e-a)/i,r={clientX:l*n+o.clientX,clientY:p*n+o.clientY};f++,n<1?(g.helpers.extend(h.style,{left:r.clientX+t.left+2+"px",top:r.clientY+t.top+2+"px"}),y=m.mouseMove(r,y),g.schedule(c,15)):(y=m.mouseMove(s,y),d.document.body.removeChild(h),u())}var a=new Date,l=s.clientX-o.clientX,p=s.clientY-o.clientY,d=this.focusWindow,y=o,h=d.document.createElement("div"),f=0;g.helpers.extend(h.style,{height:"5px",width:"5px",backgroundColor:"red",position:"absolute",zIndex:19999,fontSize:"1px"}),d.document.body.appendChild(h),c()},mouseMove:function(e,t){var n=k(e,this.focusWindow),r=k(t,this.focusWindow),o=g.helpers.extend({},e);return n!==r&&(o.relatedTarget=n,this._dragLeave(t,o),o.relatedTarget=r,this._dragEnter(e,o)),this._dragOver(e,o),e}};function r(e,t,n){var r=g.create.mouse.event(e,t,n);return r.dataTransfer=m.getDataTransferObject(),g.dispatch(r,n,e,!1)}g.create.dragstart={event:r},g.create.dragenter={event:r},g.create.dragover={event:r},g.create.dragleave={event:r},g.create.drag={event:r},g.create.drop={event:r},g.create.dragend={event:r},function e(){var t;document.body?(t=document.createElement("div"),document.body.appendChild(t),g.helpers.extend(t.style,{width:"100px",height:"10000px",backgroundColor:"blue",position:"absolute",top:"10px",left:"0px",zIndex:19999}),document.body.scrollTop=11,document.elementFromPoint&&(document.elementFromPoint(3,1)===t?g.support.elementFromClient=!0:g.support.elementFromPage=!0,document.body.removeChild(t),document.body.scrollTop=0)):g.schedule(e,1)}();function v(e,t,n){var r,o=k(e,t);return n!==o&&o&&n&&((r=g.helpers.extend({},e)).relatedTarget=o,g.support.pointerEvents&&(g.trigger(n,"pointerout",r),g.trigger(n,"pointerleave",r)),g.trigger(n,"mouseout",r),g.trigger(n,"mouseleave",r),r.relatedTarget=n,g.support.pointerEvents&&(g.trigger(o,"pointerover",r),g.trigger(o,"pointerenter",r)),g.trigger(o,"mouseover",r),g.trigger(o,"mouseenter",r)),g.support.pointerEvents&&g.trigger(o||t,"pointermove",e),g.support.touchEvents&&g.trigger(o||t,"touchmove",e),m.html5drag&&g.support.pointerEvents||g.trigger(o||t,"mousemove",e),o}function p(e,t,n){var r=k(t,n);return g.trigger(r||n,e,t),r}function d(o,s,i,u,c){function a(){var e=new Date,t=g.helpers.scrollOffset(o),n=(0===f?0:e-l)/u,r={clientX:p*n+s.clientX,clientY:d*n+s.clientY};f++,n<1?(g.helpers.extend(h.style,{left:r.clientX+t.left+2+"px",top:r.clientY+t.top+2+"px"}),y=v(r,o,y),g.schedule(a,15)):(y=v(i,o,y),o.document.body.removeChild(h),c())}var l=new Date,p=i.clientX-s.clientX,d=i.clientY-s.clientY,y=k(s,o),h=o.document.createElement("div"),f=0;g.helpers.extend(h.style,{height:"5px",width:"5px",backgroundColor:"red",position:"absolute",zIndex:19999,fontSize:"1px"}),o.document.body.appendChild(h),a()}function a(e){var t=g.jquery()(e),n=t.offset();return{pageX:n.left+t.outerWidth()/2,pageY:n.top+t.outerHeight()/2}}function y(e,t,n){var r,o,s,i=/(\d+)[x ](\d+)/,u=/(\d+)X(\d+)/,c=/([+-]\d+)[xX ]([+-]\d+)/;return"string"==typeof e&&c.test(e)&&n&&(r=a(n),o=e.match(c),e={pageX:r.pageX+parseInt(o[1]),pageY:r.pageY+parseInt(o[2])}),"string"==typeof e&&i.test(e)&&(o=e.match(i),e={pageX:parseInt(o[1]),pageY:parseInt(o[2])}),"string"==typeof e&&u.test(e)&&(o=e.match(u),e={clientX:parseInt(o[1]),clientY:parseInt(o[2])}),"string"==typeof e&&(e=g.jquery()(e,t.document)[0]),e.nodeName&&(e=a(e)),null!=e.pageX&&(s=g.helpers.scrollOffset(t),e={clientX:e.pageX-s.left,clientY:e.pageY-s.top}),e}function h(e,t,n){var r,o,s;e.clientY<0&&(s=(o=(r=g.helpers.scrollOffset(n)).top+e.clientY-100)-r.top,0<o||(o=0,s=-r.top),e.clientY=e.clientY-s,t.clientY=t.clientY-s,g.helpers.scrollOffset(n,{top:o,left:r.left}))}g.helpers.extend(g.init.prototype,{_move:function(e,t,n){var r=g.helpers.getWindow(e),o=y(t.from||e,r,e),s=y(t.to||t,r,e);m.html5drag=g.support.pointerEvents,!1!==t.adjust&&h(o,s,r),d(r,o,s,t.duration||500,n)},_drag:function(e,t,n){var r,o,s,i,u,c=g.helpers.getWindow(e),a=y(t.from||e,c,e),l=y(t.to||t,c,e);!1!==t.adjust&&h(a,l,c),m.html5drag=e.draggable,m.html5drag?m.dragAndDrop(c,a,l,t.duration||500,n):(r=c,o=a,s=l,i=t.duration||500,u=n,g.support.pointerEvents&&(p("pointerover",o,r),p("pointerenter",o,r)),p("mouseover",o,r),p("mouseenter",o,r),g.support.pointerEvents&&p("pointermove",o,r),p("mousemove",o,r),g.support.pointerEvents&&p("pointerdown",o,r),g.support.touchEvents&&p("touchstart",o,r),p("mousedown",o,r),d(r,o,s,i,function(){g.support.pointerEvents&&p("pointerup",s,r),g.support.touchEvents&&p("touchend",s,r),p("mouseup",s,r),g.support.pointerEvents&&p("pointerleave",s,r),p("mouseleave",s,r),u()}))}})}),define("syn",["require","exports","module","syn/synthetic","syn/keyboard-event-keys","syn/mouse.support","syn/browsers","syn/key.support","syn/drag"],function(e,t,n){var r=e("syn/synthetic");e("syn/keyboard-event-keys"),e("syn/mouse.support"),e("syn/browsers"),e("syn/key.support"),e("syn/drag"),window.syn=r,n.exports=r}),function(e){e._define=e.define,e.define=e.define.orig}("object"==typeof self&&self.Object==Object?self:"object"==typeof process&&"[object process]"===Object.prototype.toString.call(process)?global:window);