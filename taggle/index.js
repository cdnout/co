!function(e,i){"use strict";var s="Taggle";"function"==typeof define&&define.amd?define([],function(){var t=i();return e[s]=t}):"object"==typeof module&&module.exports?module.exports=e[s]=i():e[s]=i()}(this,function(){"use strict";function t(){}var h=8,l=46,r=37,o=39,i={additionalTagClasses:"",allowDuplicates:!1,saveOnBlur:!1,clearOnBlur:!0,duplicateTagClass:"",containerFocusClass:"active",focusInputOnContainerClick:!0,hiddenInputName:"taggles[]",tags:[],delimeter:",",delimiter:"",attachTagId:!1,allowedTags:[],disallowedTags:[],trimTags:!0,maxTags:null,tabIndex:1,placeholder:"Enter tags...",submitKeys:[188,9,13],preserveCase:!1,inputFormatter:t,tagFormatter:t,onBeforeTagAdd:t,onTagAdd:t,onBeforeTagRemove:function(){return!0},onTagRemove:t};function s(t){for(var e=t,i=1,s=arguments.length;i<s;i++){var n=arguments[i];for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a])}return e}function u(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i}function c(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=null}function n(t){return t.replace(/^\s+|\s+$/g,"")}function p(t,e){window.attachEvent&&!window.addEventListener?t.innerText=e:t.textContent=e}function d(t,e,i){return Math.min(Math.max(t,e),i)}function e(t,e){this.settings=s({},i,e),this.measurements={container:{rect:null,style:null,padding:null}},this.container=t,this.tag={values:[],elements:[]},this.list=document.createElement("ul"),this.inputLi=document.createElement("li"),this.input=document.createElement("input"),this.sizer=document.createElement("div"),this.pasting=!1,this.placeholder=null,this.data=null,this.settings.placeholder&&(this.placeholder=document.createElement("span")),"string"==typeof t&&(this.container=document.getElementById(t)),this._id=0,this._backspacePressed=!1,this._inputPosition=0,this._closeEvents=[],this._closeButtons=[],this._setMeasurements(),this._setupTextarea(),this._attachEvents()}return e.prototype._setMeasurements=function(){this.measurements.container.rect=this.container.getBoundingClientRect(),this.measurements.container.style=window.getComputedStyle(this.container);var t=this.measurements.container.style,e=parseInt(t["padding-left"]||t.paddingLeft,10),i=parseInt(t["padding-right"]||t.paddingRight,10),s=parseInt(t["border-left-width"]||t.borderLeftWidth,10),n=parseInt(t["border-right-width"]||t.borderRightWidth,10);this.measurements.container.padding=e+i+s+n},e.prototype._setupTextarea=function(){var t;if(this.list.className="taggle_list",this.input.type="text",this.input.style.paddingLeft=0,this.input.style.paddingRight=0,this.input.className="taggle_input",this.input.tabIndex=this.settings.tabIndex,this.sizer.className="taggle_sizer",this.settings.tags.length)for(var e=0,i=this.settings.tags.length;e<i;e++){var s=this._createTag(this.settings.tags[e],this.tag.values.length);this.list.appendChild(s)}this.placeholder&&(this._hidePlaceholder(),this.placeholder.classList.add("taggle_placeholder"),this.container.appendChild(this.placeholder),p(this.placeholder,this.settings.placeholder),this.settings.tags.length||this._showPlaceholder());var n=this.settings.inputFormatter(this.input);n&&(this.input=n),this.inputLi.appendChild(this.input),this.list.appendChild(this.inputLi),this.container.appendChild(this.list),this.container.appendChild(this.sizer),t=window.getComputedStyle(this.input).fontSize,this.sizer.style.fontSize=t},e.prototype._attachEvents=function(){var t=this;if(this._eventsAttached)return!1;return this._eventsAttached=!0,this.settings.focusInputOnContainerClick&&(this._handleContainerClick=function(){t.input.focus()}.bind(this),u(this.container,"click",this._handleContainerClick)),this._handleFocus=this._setFocusStateForContainer.bind(this),this._handleBlur=this._blurEvent.bind(this),this._handleKeydown=this._keydownEvents.bind(this),this._handleKeyup=this._keyupEvents.bind(this),u(this.input,"focus",this._handleFocus),u(this.input,"blur",this._handleBlur),u(this.input,"keydown",this._handleKeydown),u(this.input,"keyup",this._handleKeyup),!0},e.prototype._detachEvents=function(){if(!this._eventsAttached)return!1;var i=this;return this._eventsAttached=!1,c(this.container,"click",this._handleContainerClick),c(this.input,"focus",this._handleFocus),c(this.input,"blur",this._handleBlur),c(this.input,"keydown",this._handleKeydown),c(this.input,"keyup",this._handleKeyup),this._closeButtons.forEach(function(t,e){c(t,"click",i._closeEvents[e])}),!0},e.prototype._fixInputWidth=function(){this._setMeasurements(),this._setInputWidth()},e.prototype._canAdd=function(t,e){if(!e)return!1;var i=this.settings.maxTags;if(null!==i&&i<=this.getTagValues().length)return!1;if(!1===this.settings.onBeforeTagAdd(t,e))return!1;if(!this.settings.allowDuplicates&&this._hasDupes(e))return!1;var s=this.settings.preserveCase,n=this.settings.allowedTags;if(n.length&&!this._tagIsInArray(e,n,s))return!1;var a=this.settings.disallowedTags;return!a.length||!this._tagIsInArray(e,a,s)},e.prototype._tagIsInArray=function(t,e,i){return i?-1!==e.indexOf(t):-1!==[].slice.apply(e).map(function(t){return t.toLowerCase()}).indexOf(t)},e.prototype._add=function(a,t,r){var o=this,e=t||"",i=this.settings.delimiter||this.settings.delimeter;"string"!=typeof t&&(e=this.input.value,this.settings.trimTags&&(e[0]===i&&(e=e.replace(i,"")),e=n(e))),e.split(i).map(function(t){return o.settings.trimTags&&(t=n(t)),o._formatTag(t)}).forEach(function(t){if(o._canAdd(a,t)){var e=o.tag.values.length,i=d(r||e,0,e),s=o._createTag(t,i),n=o.list.children[i];o.list.insertBefore(s,n),t=o.tag.values[i],o.settings.onTagAdd(a,t),o.input.value="",o._fixInputWidth(),o._setFocusStateForContainer()}})},e.prototype._checkPrevOrNextTag=function(t){t=t||window.event;var e=this.container.querySelectorAll(".taggle"),i=d(this._inputPosition-1,0,e.length-1),s=d(this._inputPosition,0,e.length-1),n=i;t.keyCode===l&&(n=s);var a=e[n],r="taggle_hot",o=-1!==[h,l].indexOf(t.keyCode);""===this.input.value&&o&&!this._backspacePressed?a.classList.contains(r)?(this._backspacePressed=!0,this._remove(a,t),this._fixInputWidth(),this._setFocusStateForContainer()):a.classList.add(r):a.classList.contains(r)&&a.classList.remove(r)},e.prototype._setInputWidth=function(){var t=this.sizer.getBoundingClientRect().width,e=this.measurements.container.rect.width-this.measurements.container.padding,i=parseInt(this.sizer.style.fontSize,10),s=Math.round(d(t+1.5*i,10,e));this.input.style.width=s+"px"},e.prototype._hasDupes=function(t){var e,i=this.tag.values.indexOf(t),s=this.container.querySelector(".taggle_list");if(this.settings.duplicateTagClass)for(var n=0,a=(e=s.querySelectorAll("."+this.settings.duplicateTagClass)).length;n<a;n++)e[n].classList.remove(this.settings.duplicateTagClass);return-1<i&&(this.settings.duplicateTagClass&&s.childNodes[i].classList.add(this.settings.duplicateTagClass),!0)},e.prototype._isConfirmKey=function(t){var e=!1;return-1<this.settings.submitKeys.indexOf(t)&&(e=!0),e},e.prototype._setFocusStateForContainer=function(){this._fixInputWidth(),this.container.classList.contains(this.settings.containerFocusClass)||this.container.classList.add(this.settings.containerFocusClass),this._hidePlaceholder()},e.prototype._blurEvent=function(t){if(this.container.classList.contains(this.settings.containerFocusClass)&&this.container.classList.remove(this.settings.containerFocusClass),this.settings.saveOnBlur){if(t=t||window.event,this._setInputWidth(),""!==this.input.value)return void this._confirmValidTagEvent(t);this.tag.values.length&&this._checkPrevOrNextTag(t)}else this.settings.clearOnBlur&&(this.input.value="",this._setInputWidth());this.tag.values.length||this.input.value||this._showPlaceholder()},e.prototype._keydownEvents=function(t){var e=(t=t||window.event).keyCode;this.pasting=!1,this._setInputWidth(),86===e&&t.metaKey&&(this.pasting=!0),this._isConfirmKey(e)&&""!==this.input.value?this._confirmValidTagEvent(t):this.tag.values.length&&this._checkPrevOrNextTag(t)},e.prototype._keyupEvents=function(t){t=t||window.event,this._backspacePressed=!1,-1===[r,o].indexOf(t.keyCode)?(p(this.sizer,this.input.value),this.input.value||this._setInputWidth(),this.pasting&&""!==this.input.value&&(this._add(t),this.pasting=!1)):this._moveInput(t.keyCode)},e.prototype._moveInput=function(t){var e=this._inputPosition;switch(t){case r:var i=d(this._inputPosition-1,0,this.tag.values.length),s=e!==i;this._inputPosition=i,s&&(this.list.insertBefore(this.inputLi,this.list.childNodes[i]||null),this.input.focus());break;case o:var n=d(this._inputPosition+1,0,this.tag.values.length),a=e!==n;this._inputPosition=n,a&&(this.list.insertBefore(this.inputLi,this.list.childNodes[n+1]||null),this.input.focus())}},e.prototype._confirmValidTagEvent=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,this._add(t,null,this._inputPosition)},e.prototype._createTag=function(t,e){var i=document.createElement("li"),s=document.createElement("button"),n=document.createElement("input"),a=document.createElement("span");t=this._formatTag(t),p(s,"×"),s.className="close",s.setAttribute("type","button");var r=this._remove.bind(this,s);u(s,"click",r),p(a,t),a.className="taggle_text",i.className="taggle "+this.settings.additionalTagClasses,n.type="hidden",n.value=t,n.name=this.settings.hiddenInputName,i.appendChild(a),i.appendChild(s),i.appendChild(n);var o=this.settings.tagFormatter(i);if(void 0!==o&&(i=o),!(i instanceof HTMLElement)||"li"!==i.localName&&"LI"!==i.tagName)throw new Error("tagFormatter must return an li element");return this.settings.attachTagId&&(this._id+=1,t={text:t,id:this._id}),this.tag.values.splice(e,0,t),this.tag.elements.splice(e,0,i),this._closeEvents.splice(e,0,r),this._closeButtons.splice(e,0,s),this._inputPosition=d(this._inputPosition+1,0,this.tag.values.length),i},e.prototype._showPlaceholder=function(){this.placeholder&&(this.placeholder.style.opacity=1,this.placeholder.setAttribute("aria-hidden","false"))},e.prototype._hidePlaceholder=function(){this.placeholder&&(this.placeholder.style.opacity=0,this.placeholder.setAttribute("aria-hidden","true"))},e.prototype._remove=function(i,s){var n,t,a,r=this;function e(t){if(!t){var e=r._closeEvents[a];c(r._closeButtons[a],"click",e),i.parentNode.removeChild(i),r.tag.elements.splice(a,1),r.tag.values.splice(a,1),r._closeEvents.splice(a,1),r._closeButtons.splice(a,1),r.settings.onTagRemove(s,n),a<r._inputPosition&&(r._inputPosition=d(r._inputPosition-1,0,r.tag.values.length)),r._setFocusStateForContainer()}}"li"!==i.tagName.toLowerCase()&&(i=i.parentNode),t="a"===i.tagName.toLowerCase()?i.parentNode:i,a=this.tag.elements.indexOf(t),n=this.tag.values[a],this.settings.onBeforeTagRemove(s,n,e)&&e()},e.prototype._formatTag=function(t){return this.settings.preserveCase?t:t.toLowerCase()},e.prototype._isIndexInRange=function(t){return 0<=t&&t<=this.tag.values.length-1},e.prototype.getTags=function(){return{elements:this.getTagElements(),values:this.getTagValues()}},e.prototype.getTagElements=function(){return[].slice.apply(this.tag.elements)},e.prototype.getTagValues=function(){return[].slice.apply(this.tag.values)},e.prototype.getInput=function(){return this.input},e.prototype.getContainer=function(){return this.container},e.prototype.add=function(t,e){var i;if(i=t,Array.isArray?Array.isArray(i):"[object Array]"===Object.prototype.toString.call(i))for(var s=e,n=0,a=t.length;n<a;n++)"string"==typeof t[n]&&(this._add(null,t[n],s),isNaN(s)||(s+=1));else this._add(null,t,e);return this},e.prototype.edit=function(t,e){if("string"!=typeof t)throw new Error("First edit argument must be of type string");if("number"!=typeof e)throw new Error("Second edit argument must be a number");if(!this._isIndexInRange(e))throw new Error("Edit index should be between 0 and "+this.tag.values.length-1);return"string"==typeof this.tag.values[e]?this.tag.values[e]=t:this.tag.values[e].text=t,p(this.tag.elements[e],t),this},e.prototype.move=function(t,e){if("number"!=typeof t||"number"!=typeof e)throw new Error("Both arguments must be numbers");if(!this._isIndexInRange(t))throw new Error("First index should be between 0 and "+this.tag.values.length-1);if(!this._isIndexInRange(e))throw new Error("Second index should be between 0 and "+this.tag.values.length-1);if(t===e)return this;var i=this.tag.values[t],s=this.tag.elements[t],n=this.tag.elements[e],a=this._closeEvents[t],r=this._closeButtons[t];return this.tag.values.splice(t,1),this.tag.elements.splice(t,1),this._closeEvents.splice(t,1),this._closeButtons.splice(t,1),this.tag.values.splice(e,0,i),this.tag.elements.splice(e,0,s),this._closeEvents.splice(t,0,a),this._closeButtons.splice(t,0,r),this.list.insertBefore(s,n.nextSibling),this},e.prototype.remove=function(t,e){for(var i=this.tag.values.length-1,s=!1;-1<i;){var n=this.tag.values[i];if(this.settings.attachTagId&&(n=n.text),n===t&&(s=!0,this._remove(this.tag.elements[i])),s&&!e)break;i--}return this},e.prototype.removeAll=function(){for(var t=this.tag.values.length-1;0<=t;t--)this._remove(this.tag.elements[t]);return this._showPlaceholder(),this},e.prototype.setOptions=function(t){return this.settings=s({},this.settings,t||{}),this},e.prototype.enable=function(){var t=[].slice.call(this.container.querySelectorAll("button")),e=[].slice.call(this.container.querySelectorAll("input"));return t.concat(e).forEach(function(t){t.removeAttribute("disabled")}),this},e.prototype.disable=function(){var t=[].slice.call(this.container.querySelectorAll("button")),e=[].slice.call(this.container.querySelectorAll("input"));return t.concat(e).forEach(function(t){t.setAttribute("disabled","")}),this},e.prototype.setData=function(t){return this.data=t,this},e.prototype.getData=function(){return this.data},e.prototype.attachEvents=function(){var i=this;return this._attachEvents()&&this._closeButtons.forEach(function(t,e){u(t,"click",i._closeEvents[e])}),this},e.prototype.removeEvents=function(){return this._detachEvents(),this},e});