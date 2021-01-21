/*
 * Datalist polyfill - https://github.com/mfranzke/datalist-polyfill
 * @license Copyright(c) 2017 by Maximilian Franzke
 * Supported by Christian, Johannes, @mitchhentges, @mertenhanisch, @ailintom, @Kravimir, @mischah, @hryamzik, @ottoville, @IceCreamYou, @wlekin, @eddr, @beebee1987, @mricherzhagen, @acespace90, @damien-git, @nexces, @Sora2455, @jscho13, @alexirion and @vinyfc93 - many thanks for that !
 */
!function(){"use strict";var e=window.document,t=window.navigator.userAgent,i="list"in e.createElement("input")&&Boolean(e.createElement("datalist")&&window.HTMLDataListElement),n=Boolean(t.match(/MSIE\s1[01]./)||t.match(/rv:11./)),a=Boolean(-1!==t.indexOf("Edge/"));if(i&&!n&&!a)return!1;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector);var o=!1,r=["text","email","number","search","tel","url"];window.addEventListener("touchstart",(function e(){o=!0,window.removeEventListener("touchstart",e)}));var l,s=window.MutationObserver||window.WebKitMutationObserver;void 0!==s&&(l=new s((function(t){var i=!1;if(t.forEach((function(e){e.target instanceof HTMLElement&&"datalist"===e.target.tagName.toLowerCase()&&e.addedNodes.length>1&&(i=e.target)})),i){var n=e.querySelector('input[list="'+i.id+'"]');""!==f(n)&&A(b(i,n).length,i.getElementsByClassName("polyfilling")[0])}})));var u=function(e){var t=e.target,i=t.list,r=38===e.keyCode||40===e.keyCode;if("input"===t.tagName.toLowerCase()&&null!==i)if(n||a)""===f(t)||r||13===e.keyCode||27===e.keyCode||!n&&"text"!==t.type||(d(t,i),t.focus());else{var l=!1,s=i.getElementsByClassName("polyfilling")[0]||h(t,i);if(27!==e.keyCode&&13!==e.keyCode&&(""!==f(t)||r)&&void 0!==s){b(i,t).length>0&&(l=!0);var u=s.options.length-1;o?s.selectedIndex=0:r&&"number"!==t.getAttribute("type")&&(s.selectedIndex=38===e.keyCode?u:0,s.focus())}A(l,s)}},d=function(e,t){var i=f(e);Array.prototype.slice.call(t.options,0).forEach((function(e){var t=e.getAttribute("data-originalvalue"),n=t||e.value;t||e.setAttribute("data-originalvalue",n),e.label||e.text||(e.label=n),e.value=c(e,i)?i+"###[P0LYFlLLed]###"+n.toLowerCase():n}))},p=function(e){var t=e.target,i=t.list;if(t.matches("input[list]")&&t.matches(".polyfilled")&&i){var n=i.querySelector('option[value="'+f(t).replace(/\\([\s\S])|(")/g,"\\$1$2")+'"]');n&&n.getAttribute("data-originalvalue")&&g(t,n.getAttribute("data-originalvalue"))}},c=function(e,t){var i=e.value.toLowerCase(),n=t.toLowerCase(),a=e.getAttribute("label"),o=e.text.toLowerCase();return Boolean(!1===e.disabled&&(""!==i&&-1!==i.indexOf(n)||a&&-1!==a.toLowerCase().indexOf(n)||""!==o&&-1!==o.indexOf(n)))},v=function(e){if(e.target.matches("input[list]")){var t=e.target,i=t.list;if("input"===t.tagName.toLowerCase()&&null!==i){if(t.matches(".polyfilled")||y(t,e.type),a&&"focusin"===e.type){var o=t.list.options[0];o.value=o.value}if(!n&&!a){var r=i.getElementsByClassName("polyfilling")[0]||h(t,i),l=r&&r.querySelector("option:not(:disabled)")&&("focusin"===e.type&&""!==f(t)||e.relatedTarget&&e.relatedTarget===r);A(l,r)}}}},y=function(e,t){e.setAttribute("autocomplete","off"),e.setAttribute("role","textbox"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-owns",e.getAttribute("list")),"focusin"===t?(e.addEventListener("keyup",u),e.addEventListener("focusout",v,!0),(n||a&&"text"===e.type)&&e.addEventListener("input",p)):"blur"===t&&(e.removeEventListener("keyup",u),e.removeEventListener("focusout",v,!0),(n||a&&"text"===e.type)&&e.removeEventListener("input",p)),e.className+=" polyfilled"},f=function(e){return"email"===e.getAttribute("type")&&null!==e.getAttribute("multiple")?e.value.slice(Math.max(0,e.value.lastIndexOf(",")+1)):e.value},g=function(e,t){var i;e.value="email"===e.getAttribute("type")&&null!==e.getAttribute("multiple")&&(i=e.value.lastIndexOf(","))>-1?e.value.slice(0,i)+","+t:t};if(e.addEventListener("focusin",v,!0),!n&&!a){var m,b=function(t,i){void 0!==l&&l.disconnect();var n=t.getElementsByClassName("polyfilling")[0]||h(i,t),a=f(i),r=e.createDocumentFragment(),s=e.createDocumentFragment();Array.prototype.slice.call(t.querySelectorAll("option:not(:disabled)")).sort((function(e,t){var n=e.value,a=t.value;return"url"===i.getAttribute("type")&&(n=n.replace(/(^\w+:|^)\/\//,""),a=a.replace(/(^\w+:|^)\/\//,"")),n.localeCompare(a)})).forEach((function(e){var t=e.value,i=e.getAttribute("label"),n=e.text;if(c(e,a)){var o=n.slice(0,t.length+" / ".length);n&&!i&&n!==t&&o!==t+" / "?e.textContent=t+" / "+n:e.text||(e.textContent=i||t),r.appendChild(e)}else s.appendChild(e)})),n.appendChild(r);var u=n.options.length;return n.size=u>10?10:u,n.multiple=!o&&u<2,(t.getElementsByClassName("ie9_fix")[0]||t).appendChild(s),void 0!==l&&l.observe(t,{childList:!0}),n.options},h=function(t,i){if(!(t.getAttribute("type")&&-1===r.indexOf(t.getAttribute("type"))||null===i)){var n=t.getClientRects(),a=window.getComputedStyle(t),l=e.createElement("select");if(l.setAttribute("class","polyfilling"),l.style.position="absolute",A(!1,l),l.setAttribute("tabindex","-1"),l.setAttribute("aria-live","polite"),l.setAttribute("role","listbox"),o||l.setAttribute("aria-multiselectable","false"),"block"===a.getPropertyValue("display"))l.style.marginTop="-"+a.getPropertyValue("margin-bottom");else{var s="rtl"===a.getPropertyValue("direction")?"right":"left";l.style.setProperty("margin-"+s,"-"+(n[0].width+parseFloat(a.getPropertyValue("margin-"+s)))+"px"),l.style.marginTop=parseInt(n[0].height+(t.offsetTop-i.offsetTop),10)+"px"}if(l.style.borderRadius=a.getPropertyValue("border-radius"),l.style.minWidth=n[0].width+"px",o){var u=e.createElement("option");u.textContent=i.title,u.disabled=!0,u.setAttribute("class","message"),l.appendChild(u)}return i.appendChild(l),o?l.addEventListener("change",w):l.addEventListener("click",w),l.addEventListener("blur",w),l.addEventListener("keydown",w),l.addEventListener("keypress",E),l}},E=function(t){var i=t.target,n=i.parentNode,a=e.querySelector('input[list="'+n.id+'"]');"select"===i.tagName.toLowerCase()&&null!==a&&(!t.key||"Backspace"!==t.key&&1!==t.key.length||(a.focus(),"Backspace"===t.key?(a.value=a.value.slice(0,-1),C(a)):a.value+=t.key,b(n,a)))},w=function(t){var i=t.currentTarget,n=i.parentNode,a=e.querySelector('input[list="'+n.id+'"]');if("select"===i.tagName.toLowerCase()&&null!==a){var o=t.type,r="keydown"===o&&13!==t.keyCode&&27!==t.keyCode;("change"===o||"click"===o||"keydown"===o&&(13===t.keyCode||"Tab"===t.key))&&i.value.length>0&&i.value!==n.title?(g(a,i.value),C(a),"Tab"!==t.key&&a.focus(),13===t.keyCode&&t.preventDefault(),r=!1):"keydown"===o&&27===t.keyCode&&a.focus(),A(r,i)}},C=function(t){var i;"function"==typeof Event?i=new Event("input",{bubbles:!0}):(i=e.createEvent("Event")).initEvent("input",!0,!1),t.dispatchEvent(i)},A=function(t,i){t?i.removeAttribute("hidden"):i.setAttributeNode(e.createAttribute("hidden")),i.setAttribute("aria-hidden",(!t).toString())};(m=window.HTMLInputElement)&&m.prototype&&void 0===m.prototype.list&&Object.defineProperty(m.prototype,"list",{get:function(){var t=e.getElementById(this.getAttribute("list"));return"object"==typeof this&&this instanceof m&&t&&t.matches("datalist")?t:null}}),function(e){e&&e.prototype&&void 0===e.prototype.options&&Object.defineProperty(e.prototype,"options",{get:function(){return"object"==typeof this&&this instanceof e?this.getElementsByTagName("option"):null}})}(window.HTMLElement)}}();
