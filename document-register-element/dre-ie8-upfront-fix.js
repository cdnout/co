/*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
!function(e,t,n){if(!("HTMLElement"in e)){var r=0,i=e.clearTimeout,a=e.setTimeout,o=Element.prototype,c=t.getOwnPropertyDescriptor,l=t.defineProperty,u=function(){document.dispatchEvent(new CustomEvent("readystatechange"))},d=function(e,t){i(r),r=a(u,10)},p=function(e){var t=c(o,e),n={configurable:t.configurable,enumerable:t.enumerable,get:function(){return t.get.call(this)},set:function(t){delete o[e],this[e]=t,l(o,e,n),d()}};l(o,e,n)},s=function(e){var t=c(o,e),n=t.value;t.value=function(){var e=n.apply(this,arguments);return d(),e},l(o,e,t)};p("innerHTML"),p("innerText"),p("outerHTML"),p("outerText"),p("textContent"),s("appendChild"),s("applyElement"),s("insertAdjacentElement"),s("insertAdjacentHTML"),s("insertAdjacentText"),s("insertBefore"),s("insertData"),s("replaceAdjacentText"),s("replaceChild"),s("removeChild"),e.HTMLElement=Element}}(window,Object);
