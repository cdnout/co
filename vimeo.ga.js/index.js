/*!
 * vimeo.ga.js | v0.5.1
 * Based on modifications by LukasBeaton (https://github.com/LukasBeaton/vimeo.ga.js)
 * Copyright (c) 2015 Sander Heilbron (http://www.sanderheilbron.nl)
 * MIT licensed
 */

var vimeoGAJS={iframes:[],gaTracker:void 0,eventMarker:{},init:function(){vimeoGAJS.iframes=$("iframe"),$.each(vimeoGAJS.iframes,function(e,o){var t=$(o).attr("id");vimeoGAJS.eventMarker[t]={progress25:!1,progress50:!1,progress75:!1,videoPlayed:!1,videoPaused:!1,videoResumed:!1,videoSeeking:!1,videoCompleted:!1,timePercentComplete:0}}),"function"==typeof ga&&(vimeoGAJS.gaTracker="ua"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(vimeoGAJS.gaTracker="ga"),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(vimeoGAJS.gaTracker="gtm"),window.addEventListener?window.addEventListener("message",vimeoGAJS.onMessageReceived,!1):window.attachEvent("onmessage",vimeoGAJS.onMessageReceived,!1)},onMessageReceived:function(e){if("http://player.vimeo.com"===e.origin.replace("https:","http:")&&"undefined"!=typeof vimeoGAJS.gaTracker){var o=JSON.parse(e.data),t=$("#"+o.player_id),a=t.attr("id");switch(o.event){case"ready":vimeoGAJS.onReady();break;case"playProgress":vimeoGAJS.onPlayProgress(o.data,t);break;case"seek":t.data("seek")&&!vimeoGAJS.eventMarker[a].videoSeeking&&(vimeoGAJS.sendEvent(t,"Skipped video forward or backward"),vimeoGAJS.eventMarker[a].videoSeeking=!0);break;case"play":vimeoGAJS.eventMarker[a].videoPlayed?!vimeoGAJS.eventMarker[a].videoResumed&&vimeoGAJS.eventMarker[a].videoPaused&&(vimeoGAJS.sendEvent(t,"Resumed video"),vimeoGAJS.eventMarker[a].videoResumed=!0):(vimeoGAJS.sendEvent(t,"Started video"),vimeoGAJS.eventMarker[a].videoPlayed=!0);break;case"pause":vimeoGAJS.onPause(t);break;case"finish":vimeoGAJS.eventMarker[a].videoCompleted||(vimeoGAJS.sendEvent(t,"Completed video"),vimeoGAJS.eventMarker[a].videoCompleted=!0)}}},getUrl:function(e){var o=document.URL.split(":")[0];return null===e.match(/^http/)?o+":"+e:e},post:function(e,o,t){var a={method:e};o&&(a.value=o);var i=$(t).attr("src").split("?")[0];t.contentWindow.postMessage(JSON.stringify(a),vimeoGAJS.getUrl(i))},onReady:function(){$.each(vimeoGAJS.iframes,function(e,o){vimeoGAJS.post("addEventListener","play",o),vimeoGAJS.post("addEventListener","seek",o),vimeoGAJS.post("addEventListener","pause",o),vimeoGAJS.post("addEventListener","finish",o),vimeoGAJS.post("addEventListener","playProgress",o)})},onPause:function(e){var o=e.attr("id");vimeoGAJS.eventMarker[o].timePercentComplete<99&&!vimeoGAJS.eventMarker[o].videoPaused&&(vimeoGAJS.sendEvent(e,"Paused video"),vimeoGAJS.eventMarker[o].videoPaused=!0)},onPlayProgress:function(e,o){var t,a=o.attr("id");vimeoGAJS.eventMarker[a].timePercentComplete=Math.round(100*e.percent),o.data("progress")&&(vimeoGAJS.eventMarker[a].timePercentComplete>24&&!vimeoGAJS.eventMarker[a].progress25&&(t="Played video: 25%",vimeoGAJS.eventMarker[a].progress25=!0),vimeoGAJS.eventMarker[a].timePercentComplete>49&&!vimeoGAJS.eventMarker[a].progress50&&(t="Played video: 50%",vimeoGAJS.eventMarker[a].progress50=!0),vimeoGAJS.eventMarker[a].timePercentComplete>74&&!vimeoGAJS.eventMarker[a].progress75&&(t="Played video: 75%",vimeoGAJS.eventMarker[a].progress75=!0),t&&vimeoGAJS.sendEvent(o,t))},sendEvent:function(e,o){var t=e.attr("src").split("?")[0],a=e.data("bounce");switch(vimeoGAJS.gaTracker){case"gtm":dataLayer.push({event:"Vimeo",eventCategory:"Vimeo",eventAction:o,eventLabel:vimeoGAJS.getUrl(t),eventValue:void 0,eventNonInteraction:a?!1:!0});break;case"ua":ga("send","event","Vimeo",o,vimeoGAJS.getUrl(t),void 0,{nonInteraction:a?0:1});break;case"ga":_gaq.push(["_trackEvent","Vimeo",o,vimeoGAJS.getUrl(t),void 0,a?!1:!0])}}};$(function(){vimeoGAJS.init()});
