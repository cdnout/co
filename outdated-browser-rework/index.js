!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).outdatedBrowserRework=e()}(function(){return function n(i,a,s){function t(o,e){if(!a[o]){if(!i[o]){var r="function"==typeof require&&require;if(!e&&r)return r(o,!0);if(l)return l(o,!0);throw(r=new Error("Cannot find module '"+o+"'")).code="MODULE_NOT_FOUND",r}r=a[o]={exports:{}},i[o][0].call(r.exports,function(e){return t(i[o][1][e]||e)},r,r.exports,n,i,a,s)}return a[o].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)t(s[e]);return t}({1:[function(e,o,r){var a={Chrome:57,Edge:39,Safari:10,"Mobile Safari":10,Opera:50,Firefox:50,Vivaldi:1,IE:!1},d={12:.1,13:21,14:31,15:39,16:41,17:42,18:44};o.exports=function(t,e){var o,l=e.browserSupport?function(e,o){for(var r in o)e[r]=o[r];return e}(a,e.browserSupport):a,r=e.requiredCssProperty||!1,n=t.browser.name;e.requireChromeOnAndroid&&(o="Android"===t.os.name&&"Chrome"!==t.browser.name);var i,u=(i=!1,n in l?l[n]||(i=!0):e.isUnknownBrowserOK||(i=!0),i);return{isAndroidButNotChrome:o,isBrowserOutOfDate:function(){var e=t.browser.version,o=t.browser.major,r=t.os.name,i=t.os.version;"Edge"===n&&o<=18&&(o=d[o]),"Firefox"===n&&"iOS"===r&&(n="Mobile Safari",o=(e=i).substring(0,i.indexOf(".")));var a,s=!1;return u?s=!0:n in l&&("object"==typeof(a=l[n])?(r=a.major,i=a.minor,(o<r||o==r&&e.replace(/[^\d.]/g,"").split(".")[1]<i)&&(s=!0)):o<a&&(s=!0)),s}(),isBrowserUnsupported:u,isPropertySupported:function(e){if(!e)return!0;var o=document.createElement("div"),r=["khtml","ms","o","moz","webkit"],i=r.length;if(e in o.style)return!0;for(e=e.replace(/^[a-z]/,function(e){return e.toUpperCase()});i--;){if(r[i]+e in o.style)return!0}return!1}(r)}}},{}],2:[function(e,o,r){o.exports=function t(){if(arguments.length<1||"object"!=typeof arguments[0])return!1;if(arguments.length<2)return arguments[0];for(var e=arguments[0],o=1;o<arguments.length;o++){var r,i=arguments[o];for(r in i){var a=e[r],s=i[r];e[r]="object"!=typeof s||null===s?s:t("object"!=typeof a||null===a?{}:a,s)}}return e}},{}],3:[function(e,o,r){var f=e("./evaluateBrowser"),v=e("./languages.json"),y=e("./extend"),S=e("ua-parser-js"),k="#f25648",A="white";o.exports=function(h){var e=function(){var e=new S(navigator.userAgent).getResult(),r=document.getElementById("outdated");h=h||{};var o=window.navigator.language||window.navigator.userLanguage,i=h.backgroundColor||k,a=h.textColor||A,s=h.fullscreen||!1,t=h.language||o.slice(0,2),l="web";"Android"===e.os.name?l="googlePlay":"iOS"===e.os.name&&(l="appStore");var n,u,d,p,w,c=!1,g=!0,m=function(e){var o;o=e,r.style.opacity=o/100,r.style.filter="alpha(opacity="+o+")",1===e&&(r.style.display="table"),100===e&&(g=!0)},e=f(e,h);if(e.isAndroidButNotChrome||e.isBrowserOutOfDate||!e.isPropertySupported){if(c=e.isBrowserUnsupported,g&&"1"!==r.style.opacity){g=!1;for(var b=1;b<=100;b++)setTimeout(function(e){return function(){m(e)}}(b),8*b)}e=document.getElementById("outdated");s&&e.classList.add("fullscreen"),e.innerHTML=(p=v[d=t]||v.en,w=h.messages&&h.messages[d],d=y({},p,w),p={web:"<p>"+d.update.web+(d.url?'<a id="buttonUpdateBrowser" rel="nofollow" href="'+d.url+'">'+d.callToAction+"</a>":"")+"</p>",googlePlay:"<p>"+d.update.googlePlay+'<a id="buttonUpdateBrowser" rel="nofollow" href="https://play.google.com/store/apps/details?id=com.android.chrome">'+d.callToAction+"</a></p>",appStore:"<p>"+d.update[l]+"</p>"}[l],w=d.outOfDate,c&&d.unsupported&&(w=d.unsupported),'<div class="vertical-center"><h6>'+w+"</h6>"+p+'<p class="last"><a href="#" id="buttonCloseUpdateBrowser" title="'+d.close+'">&times;</a></p></div>'),n=document.getElementById("buttonCloseUpdateBrowser"),u=document.getElementById("buttonUpdateBrowser"),r.style.backgroundColor=i,r.style.color=a,r.children[0].children[0].style.color=a,r.children[0].children[1].style.color=a,u&&(u.style.color=a,u.style.borderColor&&(u.style.borderColor=a),u.onmouseover=function(){this.style.color=i,this.style.backgroundColor=a},u.onmouseout=function(){this.style.color=a,this.style.backgroundColor=i}),n.style.color=a,n.onmousedown=function(){return!(r.style.display="none")}}},o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o&&o(),e()}}},{"./evaluateBrowser":1,"./extend":2,"./languages.json":4,"ua-parser-js":5}],4:[function(e,o,r){o.exports={ko:{outOfDate:"최신 브라우저가 아닙니다!",update:{web:"웹사이트를 제대로 보려면 브라우저를 업데이트하세요.",googlePlay:"Google Play에서 Chrome을 설치하세요",appStore:"설정 앱에서 iOS를 업데이트하세요"},url:"https://browser-update.org/update-browser.html",callToAction:"지금 브라우저 업데이트하기",close:"닫기"},ja:{outOfDate:"古いブラウザをお使いのようです。",update:{web:"ウェブサイトを正しく表示できるように、ブラウザをアップデートしてください。",googlePlay:"Google PlayからChromeをインストールしてください",appStore:"設定からiOSをアップデートしてください"},url:"https://browser-update.org/update-browser.html",callToAction:"今すぐブラウザをアップデートする",close:"閉じる"},br:{outOfDate:"O seu navegador est&aacute; desatualizado!",update:{web:"Atualize o seu navegador para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Atualize o seu navegador agora",close:"Fechar"},ca:{outOfDate:"El vostre navegador no està actualitzat!",update:{web:"Actualitzeu el vostre navegador per veure correctament aquest lloc web. ",googlePlay:"Instal·leu Chrome des de Google Play",appStore:"Actualitzeu iOS des de l'aplicació Configuració"},url:"https://browser-update.org/update-browser.html",callToAction:"Actualitzar el meu navegador ara",close:"Tancar"},zh:{outOfDate:"您的浏览器已过时",update:{web:"要正常浏览本网站请升级您的浏览器。",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"现在升级",close:"关闭"},cz:{outOfDate:"Váš prohlížeč je zastaralý!",update:{web:"Pro správné zobrazení těchto stránek aktualizujte svůj prohlížeč. ",googlePlay:"Nainstalujte si Chrome z Google Play",appStore:"Aktualizujte si systém iOS"},url:"https://browser-update.org/update-browser.html",callToAction:"Aktualizovat nyní svůj prohlížeč",close:"Zavřít"},da:{outOfDate:"Din browser er forældet!",update:{web:"Opdatér din browser for at få vist denne hjemmeside korrekt. ",googlePlay:"Installér venligst Chrome fra Google Play",appStore:"Opdatér venligst iOS"},url:"https://browser-update.org/update-browser.html",callToAction:"Opdatér din browser nu",close:"Luk"},de:{outOfDate:"Ihr Browser ist veraltet!",update:{web:"Bitte aktualisieren Sie Ihren Browser, um diese Website korrekt darzustellen. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Den Browser jetzt aktualisieren ",close:"Schließen"},ee:{outOfDate:"Sinu veebilehitseja on vananenud!",update:{web:"Palun uuenda oma veebilehitsejat, et näha lehekülge korrektselt. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Uuenda oma veebilehitsejat kohe",close:"Sulge"},en:{outOfDate:"Your browser is out-of-date!",update:{web:"Update your browser to view this website correctly. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Update my browser now",close:"Close"},es:{outOfDate:"¡Tu navegador está anticuado!",update:{web:"Actualiza tu navegador para ver esta página correctamente. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Actualizar mi navegador ahora",close:"Cerrar"},fa:{rightToLeft:!0,outOfDate:"مرورگر شما منسوخ شده است!",update:{web:"جهت مشاهده صحیح این وبسایت، مرورگرتان را بروز رسانی نمایید. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"همین حالا مرورگرم را بروز کن",close:"Close"},fi:{outOfDate:"Selaimesi on vanhentunut!",update:{web:"Lataa ajantasainen selain n&auml;hd&auml;ksesi t&auml;m&auml;n sivun oikein. ",googlePlay:"Asenna uusin Chrome Google Play -kaupasta",appStore:"Päivitä iOS puhelimesi asetuksista"},url:"https://browser-update.org/update-browser.html",callToAction:"P&auml;ivit&auml; selaimeni nyt ",close:"Sulje"},fr:{outOfDate:"Votre navigateur n'est plus compatible !",update:{web:"Mettez à jour votre navigateur pour afficher correctement ce site Web. ",googlePlay:"Merci d'installer Chrome depuis le Google Play Store",appStore:"Merci de mettre à jour iOS depuis l'application Réglages"},url:"https://browser-update.org/update-browser.html",callToAction:"Mettre à jour maintenant ",close:"Fermer"},hu:{outOfDate:"A böngészője elavult!",update:{web:"Firssítse vagy cserélje le a böngészőjét. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"A böngészőm frissítése ",close:"Close"},id:{outOfDate:"Browser yang Anda gunakan sudah ketinggalan zaman!",update:{web:"Perbaharuilah browser Anda agar bisa menjelajahi website ini dengan nyaman. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Perbaharui browser sekarang ",close:"Close"},it:{outOfDate:"Il tuo browser non &egrave; aggiornato!",update:{web:"Aggiornalo per vedere questo sito correttamente. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Aggiorna ora",close:"Chiudi"},lt:{outOfDate:"Jūsų naršyklės versija yra pasenusi!",update:{web:"Atnaujinkite savo naršyklę, kad galėtumėte peržiūrėti šią svetainę tinkamai. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Atnaujinti naršyklę ",close:"Close"},nl:{outOfDate:"Je gebruikt een oude browser!",update:{web:"Update je browser om deze website correct te bekijken. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Update mijn browser nu ",close:"Sluiten"},pl:{outOfDate:"Twoja przeglądarka jest przestarzała!",update:{web:"Zaktualizuj swoją przeglądarkę, aby poprawnie wyświetlić tę stronę. ",googlePlay:"Proszę zainstalować przeglądarkę Chrome ze sklepu Google Play",appStore:"Proszę zaktualizować iOS z Ustawień"},url:"https://browser-update.org/update-browser.html",callToAction:"Zaktualizuj przeglądarkę już teraz",close:"Zamknij"},pt:{outOfDate:"O seu browser est&aacute; desatualizado!",update:{web:"Atualize o seu browser para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Atualize o seu browser agora",close:"Fechar"},ro:{outOfDate:"Browserul este învechit!",update:{web:"Actualizați browserul pentru a vizualiza corect acest site. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Actualizați browserul acum!",close:"Close"},ru:{outOfDate:"Ваш браузер устарел!",update:{web:"Обновите ваш браузер для правильного отображения этого сайта. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Обновить мой браузер ",close:"Закрыть"},si:{outOfDate:"Vaš brskalnik je zastarel!",update:{web:"Za pravilen prikaz spletne strani posodobite vaš brskalnik. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Posodobi brskalnik ",close:"Zapri"},sv:{outOfDate:"Din webbläsare stödjs ej längre!",update:{web:"Uppdatera din webbläsare för att webbplatsen ska visas korrekt. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Uppdatera min webbläsare nu",close:"Stäng"},ua:{outOfDate:"Ваш браузер застарів!",update:{web:"Оновіть ваш браузер для правильного відображення цього сайта. ",googlePlay:"Please install Chrome from Google Play",appStore:"Please update iOS from the Settings App"},url:"https://browser-update.org/update-browser.html",callToAction:"Оновити мій браузер ",close:"Закрити"}}},{}],5:[function(e,k,A){!function(a,p){"use strict";var w="function",e="undefined",o="model",r="name",i="type",s="vendor",t="version",l="architecture",n="console",u="mobile",d="tablet",c="smarttv",g="wearable",m={extend:function(e,o){var r,i={};for(r in e)o[r]&&o[r].length%2==0?i[r]=o[r].concat(e[r]):i[r]=e[r];return i},has:function(e,o){return"string"==typeof e&&-1!==o.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:p},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},b={rgx:function(e,o){for(var r,i,a,s,t,l=0;l<o.length&&!s;){for(var n=o[l],u=o[l+1],d=r=0;d<n.length&&!s;)if(s=n[d++].exec(e))for(i=0;i<u.length;i++)t=s[++r],"object"==typeof(a=u[i])&&0<a.length?2==a.length?typeof a[1]==w?this[a[0]]=a[1].call(this,t):this[a[0]]=a[1]:3==a.length?typeof a[1]!=w||a[1].exec&&a[1].test?this[a[0]]=t?t.replace(a[1],a[2]):p:this[a[0]]=t?a[1].call(this,t,a[2]):p:4==a.length&&(this[a[0]]=t?a[3].call(this,t.replace(a[1],a[2])):p):this[a]=t||p;l+=2}},str:function(e,o){for(var r in o)if("object"==typeof o[r]&&0<o[r].length){for(var i=0;i<o[r].length;i++)if(m.has(o[r][i],e))return"?"===r?p:r}else if(m.has(o[r],e))return"?"===r?p:r;return e}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},f={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[r,t],[/(opios)[\/\s]+([\w\.]+)/i],[[r,"Opera Mini"],t],[/\s(opr)\/([\w\.]+)/i],[[r,"Opera"],t],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[r,t],[/(konqueror)\/([\w\.]+)/i],[[r,"Konqueror"],t],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[r,"IE"],t],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[r,"Edge"],t],[/(yabrowser)\/([\w\.]+)/i],[[r,"Yandex"],t],[/(Avast)\/([\w\.]+)/i],[[r,"Avast Secure Browser"],t],[/(AVG)\/([\w\.]+)/i],[[r,"AVG Secure Browser"],t],[/(puffin)\/([\w\.]+)/i],[[r,"Puffin"],t],[/(focus)\/([\w\.]+)/i],[[r,"Firefox Focus"],t],[/(opt)\/([\w\.]+)/i],[[r,"Opera Touch"],t],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[r,"UCBrowser"],t],[/(comodo_dragon)\/([\w\.]+)/i],[[r,/_/g," "],t],[/(windowswechat qbcore)\/([\w\.]+)/i],[[r,"WeChat(Win) Desktop"],t],[/(micromessenger)\/([\w\.]+)/i],[[r,"WeChat"],t],[/(brave)\/([\w\.]+)/i],[[r,"Brave"],t],[/(qqbrowserlite)\/([\w\.]+)/i],[r,t],[/(QQ)\/([\d\.]+)/i],[r,t],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[r,t],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[r,t],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[r,t],[/(MetaSr)[\/\s]?([\w\.]+)/i],[r],[/(LBBROWSER)/i],[r],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[t,[r,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[t,[r,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[r,t],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[t,[r,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[r,/(.+)/,"$1 WebView"],t],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[r,/(.+(?:g|us))(.+)/,"$1 $2"],t],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[t,[r,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[r,"Sailfish Browser"],t],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[r,t],[/(dolfin)\/([\w\.]+)/i],[[r,"Dolphin"],t],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[r,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[r,"Chrome"],t],[/(coast)\/([\w\.]+)/i],[[r,"Opera Coast"],t],[/fxios\/([\w\.-]+)/i],[t,[r,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[t,[r,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[t,r],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[r,"GSA"],t],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[r,[t,b.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[r,t],[/(navigator|netscape)\/([\w\.-]+)/i],[[r,"Netscape"],t],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[r,t]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[l,"amd64"]],[/(ia32(?=;))/i],[[l,m.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[l,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[l,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[l,/ower/,"",m.lowerize]],[/(sun4\w)[;\)]/i],[[l,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[l,m.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[o,s,[i,d]],[/applecoremedia\/[\w\.]+ \((ipad)/],[o,[s,"Apple"],[i,d]],[/(apple\s{0,1}tv)/i],[[o,"Apple TV"],[s,"Apple"],[i,c]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[s,o,[i,d]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[o,[s,"Amazon"],[i,d]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[o,b.str,h.device.amazon.model],[s,"Amazon"],[i,u]],[/android.+aft([bms])\sbuild/i],[o,[s,"Amazon"],[i,c]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[o,s,[i,u]],[/\((ip[honed|\s\w*]+);/i],[o,[s,"Apple"],[i,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[s,o,[i,u]],[/\(bb10;\s(\w+)/i],[o,[s,"BlackBerry"],[i,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[o,[s,"Asus"],[i,d]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[s,"Sony"],[o,"Xperia Tablet"],[i,d]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[s,"Sony"],[i,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[s,o,[i,n]],[/android.+;\s(shield)\sbuild/i],[o,[s,"Nvidia"],[i,n]],[/(playstation\s[34portablevi]+)/i],[o,[s,"Sony"],[i,n]],[/(sprint\s(\w+))/i],[[s,b.str,h.device.sprint.vendor],[o,b.str,h.device.sprint.model],[i,u]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[s,[o,/_/g," "],[i,u]],[/(nexus\s9)/i],[o,[s,"HTC"],[i,d]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i],[o,[s,"Huawei"],[i,u]],[/android.+(bah2?-a?[lw]\d{2})/i],[o,[s,"Huawei"],[i,d]],[/(microsoft);\s(lumia[\s\w]+)/i],[s,o,[i,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[o,[s,"Microsoft"],[i,n]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[s,"Microsoft"],[i,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[o,[s,"Motorola"],[i,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[s,"Motorola"],[i,d]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[s,m.trim],[o,m.trim],[i,c]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[s,"Samsung"],[i,c]],[/\(dtv[\);].+(aquos)/i],[o,[s,"Sharp"],[i,c]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[s,"Samsung"],o,[i,d]],[/smart-tv.+(samsung)/i],[s,[i,c],o],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[s,"Samsung"],o,[i,u]],[/sie-(\w*)/i],[o,[s,"Siemens"],[i,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[s,"Nokia"],o,[i,u]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[o,[s,"Acer"],[i,d]],[/android.+([vl]k\-?\d{3})\s+build/i],[o,[s,"LG"],[i,d]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[s,"LG"],o,[i,d]],[/(lg) netcast\.tv/i],[s,o,[i,c]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[o,[s,"LG"],[i,u]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[s,o,[i,d]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[o,[s,"Lenovo"],[i,d]],[/(lenovo)[_\s-]?([\w-]+)/i],[s,o,[i,u]],[/linux;.+((jolla));/i],[s,o,[i,u]],[/((pebble))app\/[\d\.]+\s/i],[s,o,[i,g]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[s,o,[i,u]],[/crkey/i],[[o,"Chromecast"],[s,"Google"],[i,c]],[/android.+;\s(glass)\s\d/i],[o,[s,"Google"],[i,g]],[/android.+;\s(pixel c)[\s)]/i],[o,[s,"Google"],[i,d]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[o,[s,"Google"],[i,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]?[\w\s]+))\s+build/i],[[o,/_/g," "],[s,"Xiaomi"],[i,u]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]?[\w\s]+))\s+build/i],[[o,/_/g," "],[s,"Xiaomi"],[i,d]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[o,[s,"Meizu"],[i,u]],[/(mz)-([\w-]{2,})/i],[[s,"Meizu"],o,[i,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[o,[s,"OnePlus"],[i,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[o,[s,"RCA"],[i,d]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[o,[s,"Dell"],[i,d]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[o,[s,"Verizon"],[i,d]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[s,"Barnes & Noble"],o,[i,d]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[o,[s,"NuVision"],[i,d]],[/android.+;\s(k88)\sbuild/i],[o,[s,"ZTE"],[i,d]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[o,[s,"Swiss"],[i,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[o,[s,"Swiss"],[i,d]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[o,[s,"Zeki"],[i,d]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[s,"Dragon Touch"],o,[i,d]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[o,[s,"Insignia"],[i,d]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[o,[s,"NextBook"],[i,d]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[s,"Voice"],o,[i,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[s,"LvTel"],o,[i,u]],[/android.+;\s(PH-1)\s/i],[o,[s,"Essential"],[i,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[o,[s,"Envizen"],[i,d]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[s,o,[i,d]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[o,[s,"MachSpeed"],[i,d]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[s,o,[i,d]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[o,[s,"Rotor"],[i,d]],[/android.+(KS(.+))\s+build/i],[o,[s,"Amazon"],[i,d]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[s,o,[i,d]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[i,m.lowerize],s,o],[/[\s\/\(](smart-?tv)[;\)]/i],[[i,c]],[/(android[\w\.\s\-]{0,9});.+build/i],[o,[s,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[t,[r,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[t,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[r,t],[/rv\:([\w\.]{1,9}).+(gecko)/i],[t,r]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[r,t],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[r,[t,b.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[r,"Windows"],[t,b.str,h.os.windows.version]],[/\((bb)(10);/i],[[r,"BlackBerry"],t],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[r,t],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[r,"Symbian"],t],[/\((series40);/i],[r],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[r,"Firefox OS"],t],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[r,t],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[r,"Chromium OS"],t],[/(sunos)\s?([\w\.\d]*)/i],[[r,"Solaris"],t],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[r,t],[/(haiku)\s(\w+)/i],[r,t],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[t,/_/g,"."],[r,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[r,"Mac OS"],[t,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[r,t]]},v=function(e,o){if("object"==typeof e&&(o=e,e=p),!(this instanceof v))return new v(e,o).getResult();var r=e||(a&&a.navigator&&a.navigator.userAgent?a.navigator.userAgent:""),i=o?m.extend(f,o):f;return this.getBrowser=function(){var e={name:p,version:p};return b.rgx.call(e,r,i.browser),e.major=m.major(e.version),e},this.getCPU=function(){var e={architecture:p};return b.rgx.call(e,r,i.cpu),e},this.getDevice=function(){var e={vendor:p,model:p,type:p};return b.rgx.call(e,r,i.device),e},this.getEngine=function(){var e={name:p,version:p};return b.rgx.call(e,r,i.engine),e},this.getOS=function(){var e={name:p,version:p};return b.rgx.call(e,r,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this};v.VERSION="0.7.22",v.BROWSER={NAME:r,MAJOR:"major",VERSION:t},v.CPU={ARCHITECTURE:l},v.DEVICE={MODEL:o,VENDOR:s,TYPE:i,CONSOLE:n,MOBILE:u,SMARTTV:c,TABLET:d,WEARABLE:g,EMBEDDED:"embedded"},v.ENGINE={NAME:r,VERSION:t},v.OS={NAME:r,VERSION:t},typeof A!=e?(typeof k!=e&&k.exports&&(A=k.exports=v),A.UAParser=v):a&&(a.UAParser=v);var y,S=a&&(a.jQuery||a.Zepto);S&&!S.ua&&(y=new v,S.ua=y.getResult(),S.ua.get=function(){return y.getUA()},S.ua.set=function(e){y.setUA(e);var o,r=y.getResult();for(o in r)S.ua[o]=r[o]})}("object"==typeof window?window:this)},{}]},{},[3])(3)});
