!function(t){t.superscrollorama=function(e){function s(){g.scroll(function(){v=!0}),TweenLite.ticker.addEventListener("tick",n)}function i(t){var e={top:parseFloat(t.css("top")),left:parseFloat(t.css("left"))};return isNaN(e.top)&&(e.top=0),isNaN(e.left)&&(e.left=0),e}function n(){v&&(a(),v=!1)}function o(t){t.el.css("position",t.origPositioning.pos),t.el.css("top",t.origPositioning.top),t.el.css("left",t.origPositioning.left)}function r(t,e){t&&(t.totalProgress?t.totalProgress(e).pause():t.progress(e).pause())}function a(){var e,s,n,a=l.settings.isVertical?g.scrollTop()+h.y:g.scrollLeft()+h.x,p=l.settings.triggerAtCenter?l.settings.isVertical?-g.height()/2:-g.width()/2:0,c=u.length;for(e=0;c>e;e++){var v=u[e],w=v.target,P=v.offset;if("string"==typeof w?(f=t(w).offset()||{},s=l.settings.isVertical?f.top+h.y:f.left+h.x,P+=p):"number"==typeof w?s=w:t.isFunction(w)?s=w.call(this):(f=w.offset(),s=l.settings.isVertical?f.top+h.y:f.left+h.x,P+=p),s+=P,n=s+v.dur,a>s&&n>a&&"TWEENING"!==v.state&&(v.state="TWEENING",v.start=s,v.end=n),s>a&&"BEFORE"!==v.state&&v.reverse)l.settings.playoutAnimations||0===v.dur?v.tween.reverse():r(v.tween,0),v.state="BEFORE";else if(a>n&&"AFTER"!==v.state)l.settings.playoutAnimations||0===v.dur?v.tween.play():r(v.tween,1),v.state="AFTER";else if("TWEENING"===v.state){var E=!1;if(v.tween.repeat&&(E=-1===v.tween.repeat()),E){var m=v.tween.totalProgress();(null===v.playeadLastPosition||m===v.playeadLastPosition)&&(1===m?v.tween.yoyo()?v.tween.reverse():v.tween.totalProgress(0).play():v.tween.play()),v.playeadLastPosition=m}else r(v.tween,(a-v.start)/(v.end-v.start))}}var y=d.length;for(e=0;y>e;e++){var F=d[e],N=F.el;if("PINNED"!==F.state){var T=F.spacer.offset();"UPDATE"===F.state&&o(F),s=l.settings.isVertical?T.top+h.y:T.left+h.x,s+=F.offset,n=s+F.dur;var x=a>n&&"BEFORE"===F.state||s>a&&"AFTER"===F.state,A=a>s&&n>a;(A||x)&&(F.pushFollowers&&"static"===N.css("position")&&N.css("position","relative"),F.origPositioning={pos:N.css("position"),top:F.spacer.css("top"),left:F.spacer.css("left")},F.fixedPositioning={top:l.settings.isVertical?-F.offset:T.top,left:l.settings.isVertical?T.left:-F.offset},N.css("position","fixed"),N.css("will-change","top"),N.css("top",F.fixedPositioning.top),N.css("left",F.fixedPositioning.left),F.pinStart=s,F.pinEnd=n,F.pushFollowers?l.settings.isVertical?F.spacer.height(F.dur+N.outerHeight(!0)):F.spacer.width(F.dur+N.outerWidth(!0)):"absolute"===F.origPositioning.pos?(F.spacer.width(0),F.spacer.height(0)):l.settings.isVertical?F.spacer.height(N.outerHeight(!0)):F.spacer.width(N.outerWidth(!0)),"UPDATE"===F.state?F.anim&&r(F.anim,0):F.onPin&&F.onPin("AFTER"===F.state),F.state="PINNED")}if("PINNED"===F.state)if(a<F.pinStart||a>F.pinEnd){var V=a<F.pinStart;F.state=V?"BEFORE":"AFTER",r(F.anim,V?0:1);var R=V?0:F.dur;l.settings.isVertical?F.spacer.height(F.pushFollowers?R:0):F.spacer.width(F.pushFollowers?R:0);var U=F.fixedPositioning.top-i(F.el).top,D=F.fixedPositioning.left-i(F.el).left;if(o(F),!F.pushFollowers||"absolute"===F.origPositioning.pos){var I;"relative"===F.origPositioning.pos?(I=parseFloat(l.settings.isVertical?F.origPositioning.top:F.origPositioning.left),isNaN(I)&&(I=0)):I=l.settings.isVertical?F.spacer.position().top:F.spacer.position().left;var O=l.settings.isVertical?"top":"left";F.el.css(O,I+R)}0!==U&&F.el.css("top",i(F.el).top-U),0!==D&&F.el.css("left",i(F.el).left-D),F.onUnpin&&F.onUnpin(!V)}else F.anim&&r(F.anim,(a-F.pinStart)/(F.pinEnd-F.pinStart))}}var l={},p={isVertical:!0,triggerAtCenter:!0,playoutAnimations:!0,reverse:!0};l.settings=t.extend({},p,e);var f,c,g=t(window),u=[],d=[],h={x:0,y:0},v=!1;return l.addTween=function(t,e,s,i,n){return e.pause(),u.push({target:t,tween:e,offset:i||0,dur:s||0,reverse:"undefined"!=typeof n?n:l.settings.reverse,state:"BEFORE"}),l},l.pin=function(e,s,i){"string"==typeof e&&(e=t(e));var n={offset:0,pushFollowers:!0};i=t.extend({},n,i),i.anim&&i.anim.pause();var o=t('<div class="superscrollorama-pin-spacer"></div>');return o.css("position","relative"),o.css("top",e.css("top")),o.css("left",e.css("left")),e.before(o),d.push({el:e,state:"BEFORE",dur:s,offset:i.offset,anim:i.anim,pushFollowers:i.pushFollowers,spacer:o,onPin:i.onPin,onUnpin:i.onUnpin}),l},l.updatePin=function(e,s,i){"string"==typeof e&&(e=t(e)),i.anim&&i.anim.pause();var n=d.length;for(c=0;n>c;c++){var o=d[c];e.get(0)===o.el.get(0)&&(s&&(o.dur=s),i.anim&&(o.anim=i.anim),i.offset&&(o.offset=i.offset),"undefined"!=typeof i.pushFollowers&&(o.pushFollowers=i.pushFollowers),i.onPin&&(o.onPin=i.onPin),i.onUnpin&&(o.onUnpin=i.onUnpin),(s||i.anim||i.offset)&&"PINNED"===o.state&&(o.state="UPDATE",a()))}return l},l.removeTween=function(t,e,s){var i=u.length;"undefined"==typeof s&&(s=!0);for(var n=0;i>n;n++){var o=u[n];o.target!==t||e&&o.tween!==e||(u.splice(n,1),s&&r(o.tween,0),i--,n--)}return l},l.removePin=function(e,s){"string"==typeof e&&(e=t(e)),"undefined"==typeof s&&(s=!0);for(var i=d.length,n=0;i>n;n++){var a=d[n];a.el.is(e)&&(d.splice(n,1),s&&(a.spacer.remove(),o(a),a.anim&&r(a.anim,0)),i--,n--)}return l},l.setScrollContainerOffset=function(t,e){return h.x=t,h.y=e,l},l.triggerCheckAnim=function(t){return t?a():v=!0,l},s(),l}}(jQuery);