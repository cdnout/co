var t=function(){},e=100;function n(t,n){var i,s,_;return void 0===n&&(n=e),function(){!0===i?(clearTimeout(s),s=setTimeout(function(){Date.now()-_>=n&&(t.apply(this,arguments),_=Date.now())},n-(Date.now()-_))):(t.apply(this,arguments),_=Date.now(),i=!0)}}var i=function(t,e){for(var n in this.element=t,this.visible=!1,e)Object.hasOwnProperty.call(e,n)&&(this[n]=e[n]);if(void 0!==t.dataset){if(void 0!==t.dataset.huntPersist)try{this.persist=JSON.parse(t.dataset.huntPersist)}catch(t){}if(void 0!==t.dataset.huntOffset)try{this.offset=JSON.parse(t.dataset.huntOffset)}catch(t){}}};i.prototype.offset=0,i.prototype.persist=!1,i.prototype.enter=t,i.prototype.leave=t;var s=function(t,e){if(!(t&&1===t.nodeType||"number"==typeof t.length))throw new TypeError("hunt: observer first argument should be a node or a list of nodes");if("object"!=typeof e)throw new TypeError("hunt: observer second argument should be an object");if(1===t.nodeType)this.__huntedElements__=[new i(t,e)];else{var n=[].slice.call(t);this.__huntedElements__=n.map(function(t){return new i(t,e)})}this.__viewportHeight__=window.innerHeight,this.__connect__(e.throttleInterval)};s.prototype.__connect__=function(t){this.__throttledHuntElements__=n(this.__huntElements__.bind(this),t),this.__throttledUpdateMetrics__=n(this.__updateMetrics__.bind(this),t),window.addEventListener("scroll",this.__throttledHuntElements__),window.addEventListener("resize",this.__throttledUpdateMetrics__),this.__huntElements__()},s.prototype.__huntElements__=function(){for(var e=this.__huntedElements__.length;e;){var n=this.__huntedElements__[--e],i=n.element.getBoundingClientRect(),s=i.top-n.offset<this.__viewportHeight__&&i.top>=-(i.height+n.offset);!1===n.visible&&!0===s&&(n.enter.call(null,n.element),n.visible=!0,n.leave===t&&!0!==n.persist&&(this.__huntedElements__.splice(e,1),0===this.__huntedElements__.length&&this.disconnect())),!0===n.visible&&!1===s&&(n.leave.call(null,n.element),n.visible=!1,!0!==n.persist&&(this.__huntedElements__.splice(e,1),0===this.__huntedElements__.length&&this.disconnect()))}},s.prototype.__updateMetrics__=function(){this.__viewportHeight__=window.innerHeight,this.__huntElements__()},s.prototype.disconnect=function(){window.removeEventListener("scroll",this.__throttledHuntElements__),window.removeEventListener("resize",this.__throttledUpdateMetrics__)},s.prototype.trigger=function(){this.__huntElements__()},module.exports=s;
//# sourceMappingURL=hunt.js.map
