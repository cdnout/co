!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("textile",[],e):"object"==typeof exports?exports.textile=e():t.textile=e()}(this,function(){return r={},a.m=n=[function(t,e){var a={},c=t.exports={pattern:{punct:"[!-/:-@\\[\\\\\\]-`{-~]",space:"\\s"},escape:function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},collapse:function(t){return t.replace(/(?:#.*?(?:\n|$))/g,"").replace(/\s+/g,"")},expandPatterns:function(r){return r.replace(/\[:\s*(\w+)\s*:\]/g,function(t,e){var n=c.pattern[e];if(n)return c.expandPatterns(n);throw new Error("Pattern "+t+" not found in "+r)})},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},compile:function(t,e){c.isRegExp(t)&&(1===arguments.length&&(e=(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")),t=t.source);var n=t+(e||"");if(n in a)return a[n];var r=c.expandPatterns(t);return e&&/x/.test(e)&&(r=c.collapse(r)),e&&/s/.test(e)&&(r=r.replace(/([^\\])\./g,"$1[^\\0]")),e=(e||"").replace(/[^gim]/g,""),a[n]=new RegExp(r,e)}}},function(t,e){t.exports=function(n){var t,e=String(n),r=0,a={index:function(){return r},save:function(){return t=r,a},load:function(){return r=t,n=e.slice(r),a},advance:function(t){return r+="string"==typeof t?t.length:t,n=e.slice(r)},skipWS:function(){var t=/^\s+/.exec(n);return t?(r+=t[0].length,n=e.slice(r),t[0]):""},lookbehind:function(t){return t=null==t?1:t,e.slice(r-t,r)},startsWith:function(t){return n.substring(0,t.length)===t},slice:function(t,e){return null!=e?n.slice(t,e):n.slice(t)},valueOf:function(){return n},toString:function(){return n}};return a}},function(t,e,n){var r=n(0),u=n(1);r.pattern.html_id="[a-zA-Z][a-zA-Z\\d:]*",r.pattern.html_attr="(?:\"[^\"]+\"|'[^']+'|[^>\\s]+)";var a=r.compile(/^\s*([^=\s]+)(?:\s*=\s*("[^"]+"|'[^']+'|[^>\s]+))?/),c=r.compile(/^<!--(.+?)-->/,"s"),s=r.compile(/^<\/([:html_id:])([^>]*)>/),i=r.compile(/^<([:html_id:])((?:\s[^=\s/]+(?:\s*=\s*[:html_attr:])?)+)?\s*(\/?)>/),o=r.compile(/^\s*<([:html_id:](?::[a-zA-Z\d]+)*)((?:\s[^=\s/]+(?:\s*=\s*[:html_attr:])?)+)?\s*(\/?)>/),f={area:1,base:1,br:1,col:1,embed:1,hr:1,img:1,input:1,link:1,meta:1,option:1,param:1,wbr:1};function d(t){return c.exec(t)}function h(t){return i.exec(t)}function g(t){return s.exec(t)}function v(t){for(var e,n={};e=a.exec(t);)n[e[1]]="string"==typeof e[2]?e[2].replace(/^(["'])(.*)\1$/,"$2"):null,t=t.slice(e[0].length);return n}t.exports={singletons:f,tokenize:function(t,e,n){function r(t){return i?t===i:!e||t in e}var a,c,s=[],i=!1,o={},l=0;t=u(String(t));do{if((a=d(t))&&r("!"))s.push({type:"COMMENT",data:a[1],pos:t.index(),src:a[0]}),t.advance(a[0]);else if((a=g(t))&&r(a[1])){var p={type:"CLOSE",tag:a[1],pos:t.index(),src:a[0]};if(t.advance(a[0]),s.push(p),o[p.tag]--,l--,n&&(!l||!o[p.tag]<0||isNaN(o[p.tag])))return s;i=i&&null}else{(a=h(t))&&r(a[1])?(c={type:a[3]||a[1]in f?"SINGLE":"OPEN",tag:a[1],pos:t.index(),src:a[0]},a[2]&&(c.attr=v(a[2])),"script"!==a[1]&&"code"!==a[1]&&"style"!==a[1]||(i=c.tag),"OPEN"===c.type&&(l++,o[c.tag]=(o[c.tag]||0)+1),s.push(c),t.advance(a[0])):((a=/([^<]+|[^\0])/.exec(t))&&s.push({type:"TEXT",data:a[0],pos:t.index(),src:a[0]}),t.advance(a&&a[0].length||1))}}while(t.valueOf());return s},parseHtml:function(t,e){for(var n,r=[],a=[],c=r,s=0;s<t.length;s++)if("COMMENT"===(n=t[s]).type)c.push(["!",n.data]);else if("TEXT"===n.type||"WS"===n.type)c.push(n.data);else if("SINGLE"===n.type)c.push(n.attr?[n.tag,n.attr]:[n.tag]);else if("OPEN"===n.type){var i=n.attr?[n.tag,n.attr]:[n.tag];c.push(i),a.push(i),c=i}else if("CLOSE"===n.type){if(a.length)for(var o=a.length-1;0<=o;o--)if(a[o][0]===n.tag){a.splice(o),c=a[a.length-1]||r;break}if(!a.length&&e)return r.sourceLength=n.pos+n.src.length,r}return r.sourceLength=n?n.pos+n.src.length:0,r},parseHtmlAttr:v,testCloseTag:g,testOpenTagBlock:function(t){return o.exec(t)},testOpenTag:h,testComment:d}},function(t,e,n){var A=n(1),_=n(9),k=n(0),O=n(4).parseAttr,j=n(12).parseGlyph,r=n(2),T=r.parseHtml,w=r.parseHtmlAttr,E=r.tokenize,P=r.singletons,L=r.testComment,W=r.testOpenTag,a=n(5),c=a.ucaps,s=a.txattr,i=a.txcite;k.pattern.txattr=s,k.pattern.txcite=i,k.pattern.ucaps=c;var M={"*":"strong","**":"b","??":"cite",_:"em",__:"i","-":"del","%":"span","+":"ins","~":"sub","^":"sup","@":"code"},C=/^([[{]?)(__?|\*\*?|\?\?|[-+^~@%])/,z=k.compile(/^!(?!\s)([:txattr:](?:\.[^\n\S]|\.(?:[^./]))?)([^!\s]+?) ?(?:\(((?:[^()]|\([^()]+\))+)\))?!(?::([^\s]+?(?=[!-.:-@[\\\]-`{-~](?:$|\s)|\s|$)))?/),H=k.compile(/^\[!(?!\s)([:txattr:](?:\.[^\n\S]|\.(?:[^./]))?)([^!\s]+?) ?(?:\(((?:[^()]|\([^()]+\))+)\))?!(?::([^\s]+?(?=[!-.:-@[\\\]-`{-~](?:$|\s)|\s|$)))?\]/),N=k.compile(/^((?!TM\)|tm\))[[:ucaps:]](?:[[:ucaps:]\d]{1,}(?=\()|[[:ucaps:]\d]{2,}))(?:\((.*?)\))?(?=\W|$)/),Z=k.compile(/^"(?!\s)((?:[^"]|"(?![\s:])[^\n"]+"(?!:))+)"[:txcite:]/),q=/^\["([^\n]+?)":((?:\[[a-z0-9]*\]|[^\]])+)\]/,R=/\s*\(((?:\([^()]*\)|[^()])+)\)$/,D=/^\[(\d+)(!?)\]/;e.parsePhrase=function t(e,n){e=A(e);var r,a=_();do{if(e.save(),e.startsWith("\r\n")&&e.advance(1),e.startsWith("\n"))e.advance(1),e.startsWith(" ")?e.advance(1):n.breaks&&a.add(["br"]),a.add("\n");else if(r=/^==(.*?)==/.exec(e))e.advance(r[0]),a.add(r[1]);else{var c,s,i,o,l=e.lookbehind(1),p=!l||/^[\s<>.,"'?!;:()[\]%{}]$/.test(l);if((r=C.exec(e))&&(p||r[1])){e.advance(r[0]);var u=r[2],f=r[1],d=M[u],h="code"===d;(o=!h&&O(e,d,u))&&(e.advance(o[0]),o=o[1]);var g,v=void 0,x=void 0;if(x="["===f?(v="^(.*?)","(?:])"):"{"===f?(v="^(.*?)","(?:})"):(g=k.escape(u.charAt(0)),v=h?"^(\\S+|\\S+.*?\\S)":"^([^\\s".concat(g,"]+|[^\\s").concat(g,"].*?\\S(").concat(g,"*))"),"(?=$|[\\s.,\"'!?;:()«»„“”‚‘’<>])"),(r=k.compile("".concat(v,"(").concat(k.escape(u),")").concat(x)).exec(e))&&r[1]){e.advance(r[0]),h?a.add([d,r[1]]):a.add([d,o].concat(t(r[1],n)));continue}e.load()}if((r=z.exec(e))||(r=H.exec(e))){e.advance(r[0]);var m=(o=r[1]&&O(r[1],"img"))?o[1]:{src:""},y=["img",m];m.src=r[2],m.alt=r[3]?m.title=r[3]:"",r[4]&&(y=["a",{href:r[4]},y]),a.add(y)}else if(r=L(e))e.advance(r[0]),a.add(["!",r[1]]);else{if(r=W(e)){e.advance(r[0]);var b=r[1],$=r[3]||r[1]in P,S=[b];if(r[2]&&S.push(w(r[2])),$){a.add(S).add(e.skipWS());continue}if(r=k.compile("^(.*?)(</".concat(b,"\\s*>)"),"s").exec(e)){if(e.advance(r[0]),"code"===b)S.push(r[1]);else{if("notextile"===b){a.merge(T(E(r[1])));continue}S=S.concat(t(r[1],n))}a.add(S);continue}e.load()}(r=D.exec(e))&&/\S/.test(l)?(e.advance(r[0]),a.add(["sup",{class:"footnote",id:"fnr"+r[1]},"!"===r[2]?r[1]:["a",{href:"#fn"+r[1]},r[1]]])):(r=N.exec(e))?(e.advance(r[0]),c=["span",{class:"caps"},r[1]],r[2]&&(c=["acronym",{title:r[2]},c]),a.add(c)):p&&(r=Z.exec(e))||(r=q.exec(e))?(e.advance(r[0]),i=(s=r[1].match(R))?r[1].slice(0,r[1].length-s[0].length):r[1],o=(o=O(i,"a"))?(i=i.slice(o[0]),o[1]):{},s&&!i&&(i=s[0],s=""),o.href=r[2],s&&(o.title=s[1]),"$"===i&&(i=o.href.replace(/^(https?:\/\/|ftps?:\/\/|mailto:)/,"")),a.add(["a",o].concat(t(i.replace(/^(\.?\s*)/,""),n)))):((r=/([a-zA-Z0-9,.':]+|[ \f\r\t\v\xA0\u2028\u2029]+|[^\0])/.exec(e))&&a.add(r[0]),e.advance(r&&r[0].length||1))}}}while(e.valueOf());return a.get().map(j)}},function(t,e){var m=/^\(([^()\n]+)\)/,y=/^(\(+)/,b=/^(\)+)/,$=/^(<>|<|>|=)/,S=/^(<|>|=)/,A=/^(~|\^|-)/,_=/^\\(\d+)/,k=/^\/(\d+)/,O=/^\{([^}]*)\}/,j=/^\s*([^:\s]+)\s*:\s*(.+)\s*$/,T=/^\[([^[\]\n]+)\]/,w={"<":"left","=":"center",">":"right","<>":"justify"},E={"~":"bottom","^":"top","-":"middle"};t.exports={copyAttr:function(t,e){if(t){var n={};for(var r in t)!(r in t)||e&&r in e||(n[r]=t[r]);return n}},parseAttr:function(t,e,n){if((t=String(t))&&"notextile"!==e){var r,a={},c={style:a},s=t,i=/^(?:table|t[dh]|t(?:foot|head|body)|b[qc]|div|notextile|pre|h[1-6]|fn\\d+|p|###)$/.test(e),o="img"===e,l="li"===e,p=!i&&!o&&"a"!==e,u=o?S:$;do{if(r=O.exec(s))r[1].split(";").forEach(function(t){var e=t.match(j);e&&(a[e[1]]=e[2])}),s=s.slice(r[0].length);else if(r=T.exec(s)){var f=s.slice(r[0].length);!f&&p||n&&n===f.slice(0,n.length)?r=null:(c.lang=r[1],s=s.slice(r[0].length))}else if(r=m.exec(s)){var d,h=s.slice(r[0].length);!h&&p||n&&(" "===h[0]||n===h.slice(0,n.length))?r=null:((d=r[1].split("#"))[0]&&(c.class=d[0]),d[1]&&(c.id=d[1]),s=h)}else{if(i||l){if(r=y.exec(s)){a["padding-left"]="".concat(r[1].length,"em"),s=s.slice(r[0].length);continue}if(r=b.exec(s)){a["padding-right"]="".concat(r[1].length,"em"),s=s.slice(r[0].length);continue}}if((o||i||l)&&(r=u.exec(s))){var g=w[r[1]];o?c.align=g:a["text-align"]=g,s=s.slice(r[0].length)}else if("td"!==e&&"tr"!==e||!(r=A.exec(s))){if("td"===e){if(r=_.exec(s)){c.colspan=r[1],s=s.slice(r[0].length);continue}if(r=k.exec(s)){c.rowspan=r[1],s=s.slice(r[0].length);continue}}}else a["vertical-align"]=E[r[1]],s=s.slice(r[0].length)}}while(r);var v=[];for(var x in a)v.push("".concat(x,":").concat(a[x]));return v.length?c.style=v.join(";"):delete c.style,s===t?void 0:[t.length-s.length,c]}}}},function(t,e){e.txblocks="(?:b[qc]|div|notextile|pre|h[1-6]|fn\\d+|p|###)",e.ucaps="A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾⱿꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞠꞢꞤꞦꞨꞪ",e.txcite=":((?:[^\\s()]|\\([^\\s()]+\\)|[()])+?)(?=[!-\\.:-@\\[\\\\\\]-`{-~]+(?:$|\\s)|$|\\s)";var n=e.attr_class="\\([^\\)]+\\)",r=e.attr_style="\\{[^\\}]+\\}",a=e.attr_lang="\\[[^\\[\\]]+\\]",c=e.attr_align="(?:<>|<|>|=)",s=e.attr_pad="[\\(\\)]+",i=e.txattr="(?:".concat(n,"|").concat(r,"|").concat(a,"|").concat(c,"|").concat(s,")*");e.txlisthd="[\\t ]*(\\*|\\#(?:_|\\d+)?)".concat(i,"(?: +\\S|\\.\\s*(?=\\S|\\n))"),e.txlisthd2="[\\t ]*[\\#\\*]*(\\*|\\#(?:_|\\d+)?)".concat(i,"(?: +\\S|\\.\\s*(?=\\S|\\n))")},function(t,e){t.exports=function(t,e){if(e)for(var n in e)t[n]=e[n];return t}},function(t,e,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(2).singletons;function l(t,e){return t.replace(/&(?!(#\d{2,}|#x[\da-fA-F]{2,}|[a-zA-Z][a-zA-Z1-4]{1,6});)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,e?"&quot;":'"').replace(/'/g,e?"&#39;":"'")}t.exports={reIndent:function n(t,r){return r?t.map(function(t){if(/^\n\t+/.test(t))if(r<0)t=t.slice(0,r);else for(var e=0;e<r;e++)t+="\t";else if(Array.isArray(t))return n(t,r);return t}):t},toHTML:function t(e){if("string"==typeof(e=e.concat()))return l(e);var n=e.shift(),r={},a="",c=[];for(e.length&&"object"===i(e[0])&&!Array.isArray(e[0])&&(r=e.shift());e.length;)c.push(t(e.shift()));for(var s in r)a+=null==r[s]?" ".concat(s):" ".concat(s,'="').concat(l(String(r[s]),!0),'"');return"!"===n?"\x3c!--".concat(c.join(""),"--\x3e"):n in o||-1<n.indexOf(":")&&!c.length?"<".concat(n).concat(a," />"):"<".concat(n).concat(a,">").concat(c.join(""),"</").concat(n,">")},escape:l}},function(t,e,n){var w=n(9),E=n(1),r=n(0),P=n(11),a=n(2),L=a.parseHtml,W=a.tokenize,M=a.parseHtmlAttr,C=a.singletons,z=a.testComment,H=a.testOpenTagBlock,N=n(3).parsePhrase,c=n(4),Z=c.copyAttr,q=c.parseAttr,s=n(13),R=s.testList,D=s.parseList,i=n(14),F=i.testDefList,I=i.parseDefList,o=n(15),G=o.testTable,B=o.parseTable,l=n(5),p=l.txblocks,u=l.txlisthd,f=l.txattr;r.pattern.txblocks=p,r.pattern.txlisthd=u,r.pattern.txattr=f;var X={p:0,hr:0,ul:1,ol:0,li:0,div:1,pre:0,object:1,script:0,noscript:0,blockquote:1,notextile:1},J=r.compile(/^([:txblocks:])/),K=r.compile(/^(.*?)($|\r?\n(?=[:txlisthd:])|\r?\n(?:\s*\n|$)+)/,"s"),Q=r.compile(/^(.*?)($|\r?\n(?=[:txlisthd:])|\r?\n+(?=[:txblocks:][:txattr:]\.))/,"s"),U=r.compile(/^(.*?)($|\r?\n(?:\s*\n|$)+)/,"s"),V=r.compile(/^(.*?)($|\r?\n+(?=[:txblocks:][:txattr:]\.))/,"s"),Y=/^(---+|\*\*\*+|___+)(\r?\n\s+|$)/,tt=r.compile(/^\[([^\]]+)\]((?:https?:\/\/|\/)\S+)(?:\s*\n|$)/),et=/^fn\d+$/,d=Object.prototype.hasOwnProperty;function nt(t){for(var e=1;e<(arguments.length<=1?0:arguments.length-1);e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];if(null!=n)for(var r in n)d.call(n,r)&&(t[r]=n[r])}return t}function rt(t,n,r,a,c){n=n||"p";var s=[];return t.split(/(?:\r?\n){2,}/).forEach(function(t,e){"p"===n&&/^\s/.test(t)?(t=t.replace(/\r?\n[\t ]/g," ").trim(),s=s.concat(N(t,c))):(a&&e&&s.push(a),s.push(r?[n,r].concat(N(t,c)):[n].concat(N(t,c))))}),s}e.parseFlow=function t(e,n){var r,a=w();for(e=E(e.replace(/^( *\r?\n)+/,""));e.valueOf();)if(e.save(),f=tt.exec(e))r=r||{},e.advance(f[0]),r[f[1]]=f[2];else{if(a.linebreak(),f=J.exec(e)){e.advance(f[0]);var c=f[0];if((p=q(e,c))&&(e.advance(p[0]),p=p[1]),f=/^\.(\.?)(?:\s|(?=:))/.exec(e)){var s,i,o,l,p,u=!!f[1],f=("bc"!==c&&"pre"!==c?u?Q:K:u?V:U).exec(e.advance(f[0]));e.advance(f[0]),"bq"===c?(s=f[1],(f=/^:(\S+)\s+/.exec(s))&&((p=p||{}).cite=f[1],s=s.slice(f[0].length)),i=rt(s,"p",Z(p,{cite:1,id:1}),"\n",n),a.add(["blockquote",p,"\n"].concat(i).concat(["\n"]))):"bc"===c?(o=p?Z(p,{id:1}):null,a.add(["pre",p,o?["code",o,f[1]]:["code",f[1]]])):"notextile"===c?a.merge(L(W(f[1]))):"###"===c||("pre"===c?a.add(["pre",p,f[1]]):et.test(c)?(l=c.replace(/\D+/g,""),(p=p||{}).class=(p.class?p.class+" ":"")+"footnote",p.id="fn"+l,a.add(["p",p,["a",{href:"#fnr"+l},["sup",l]]," "].concat(N(f[1],n)))):a.merge(rt(f[1],c,p,"\n",n)));continue}e.load()}if(f=z(e))e.advance(f[0]+(/(?:\s*\n+)+/.exec(e)||[])[0]),a.add(["!",f[1]]);else{if(f=H(e)){var d=f[1];if(d in X)if(f[3]||d in C){if(e.advance(f[0]),/^\s*(\n|$)/.test(e)){var h=[d];f[2]&&h.push(M(f[2])),a.add(h),e.skipWS();continue}}else if("pre"===d){var g=W(e,{pre:1,code:1},d),v=L(g,!0);if(e.load().advance(v.sourceLength),/^\s*(\n|$)/.test(e)){a.merge(v),e.skipWS();continue}}else if("notextile"===d){for(var x=W(e,null,d),m=1;/^\s+$/.test(x[m].src);)m++;var y=L(x.slice(m,-1),!0),b=x.pop();if(e.load().advance(b.pos+b.src.length),/^\s*(\n|$)/.test(e)){a.merge(y),e.skipWS();continue}}else{e.skipWS();for(var $=W(e,null,d),S=$.pop(),A=1;$[A]&&/^[\n\r]+$/.test($[A].src);)A++;if(S.tag===d){var _=1<$.length?e.slice($[A].pos,S.pos):"";if(e.advance(S.pos+S.src.length),/^\s*(\n|$)/.test(e)){var k,O,j,T=[d];f[2]&&T.push(M(f[2])),"script"===d||"style"===d?T.push(_):(k=_.replace(/^\n+/,"").replace(/\s*$/,""),j=(O=/\n\r?\n/.test(k)||"ol"===d||"ul"===d)?t(k,n):N(k,nt({},n,{breaks:!1})),(O||/^\n/.test(_))&&T.push("\n"),(O||/\s$/.test(_))&&j.push("\n"),T=T.concat(j)),a.add(T),e.skipWS();continue}}}e.load()}(f=Y.exec(e))?(e.advance(f[0]),a.add(["hr"])):(f=R(e))?(e.advance(f[0]),a.add(D(f[0],n))):(f=F(e))?(e.advance(f[0]),a.add(I(f[0],n))):(f=G(e))?(e.advance(f[0]),a.add(B(f[1],n))):(f=K.exec(e),a.merge(rt(f[1],"p",void 0,"\n",n)),e.advance(f[0]))}}return r?P(a.get(),r):a.get()}},function(t,e){t.exports=function(t){var e=Array.isArray(t)?t:[];return{add:function(t){return"string"==typeof t&&"string"==typeof e[e.length-1]?e[e.length-1]+=t:Array.isArray(t)?e.push(t.filter(function(t){return void 0!==t})):t&&e.push(t),this},merge:function(t){for(var e=0,n=t.length;e<n;e++)this.add(t[e]);return this},linebreak:function(){e.length&&this.add("\n")},get:function(){return e}}}},function(t,e,n){var r=n(6),a=n(7).toHTML,c=n(8).parseFlow,s=n(2).parseHtml;function i(t,e){return e=r(r({},i.defaults),e||{}),c(t,e).map(a).join("")}(t.exports=i).defaults={breaks:!0},i.setOptions=i.setoptions=function(t){return r(i.defaults,t),this},i.parse=i.convert=i,i.html_parser=s,i.jsonml=function(t,e){return e=r(r({},i.defaults),e||{}),["html"].concat(c(t,e))},i.serialize=a},function(t,e){function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function t(e,n){if(Array.isArray(e)){var r;"a"!==e[0]||"object"===s(r=e[1])&&"href"in r&&r.href in n&&(r.href=n[r.href]);for(var a=0,c=e.length;a<c;a++)Array.isArray(e[a])&&t(e[a],n)}return e}},function(t,e,n){var r=n(0),a=/(\w)'(\w)/g,c=/([^-]|^)->/,s=r.compile(/([^\s[(])"(?=$|\s|[:punct:])/g),i=r.compile(/([^\s[(])'(?=$|\s|[:punct:])/g),o=/(\b ?|\s|^)(?:\(C\)|\[C\])/gi,l=/([\d.,]+['"]? ?)x( ?)(?=[\d.,]['"]?)/g,p=r.compile(/(\d*[.,]?\d+)"(?=\s|$|[:punct:])/g),u=/([^.]?)\.{3}/g,f=/(^|[\s\w])--([\s\w]|$)/g,d=/ - /g,h=/"/g,g=/'/g,v=/(\b ?|\s|^)(?:\(R\)|\[R\])/gi,x=r.compile(/(\d*[.,]?\d+)'(?=\s|$|[:punct:])/g),m=/(\b ?|\s|^)(?:\((?:TM|tm)\)|\[(?:TM|tm)\])/g;e.parseGlyph=function(t){return"string"!=typeof t?t:t.replace(c,"$1&#8594;").replace(l,"$1&#215;$2").replace(u,"$1&#8230;").replace(f,"$1&#8212;$2").replace(d," &#8211; ").replace(m,"$1&#8482;").replace(v,"$1&#174;").replace(o,"$1&#169;").replace(p,"$1&#8243;").replace(s,"$1&#8221;").replace(h,"&#8220;").replace(x,"$1&#8242;").replace(a,"$1&#8217;$2").replace(i,"$1&#8217;").replace(g,"&#8216;").replace(/[([]1\/4[\])]/,"&#188;").replace(/[([]1\/2[\])]/,"&#189;").replace(/[([]3\/4[\])]/,"&#190;").replace(/[([]o[\])]/,"&#176;").replace(/[([]\+\/-[\])]/,"&#177;")}},function(t,e,n){var m=n(1),r=n(0),y=n(6),b=n(4).parseAttr,$=n(3).parsePhrase,a=n(5),c=a.txlisthd,s=a.txlisthd2;r.pattern.txlisthd=c,r.pattern.txlisthd2=s;var i=r.compile(/^((?:[:txlisthd:][^\0]*?(?:\r?\n|$))+)(\s*\n|$)/,"s"),S=r.compile(/^([#*]+)([^\0]+?)(\n(?=[:txlisthd2:])|$)/,"s");function A(t){for(var e="\n";t--;)e+="\t";return e}t.exports={testList:function(t){return i.exec(t)},parseList:function(t,e){t=m(t.replace(/(^|\r?\n)[\t ]+/,"$1"));for(var n,r,a,c,s=[],i={},o=e._lst||{},l=0;r=S.exec(t);){var p=["li"],u=r[1].length,f="#"===r[1].substr(-1)?"ol":"ul",d=null,h=void 0,g=void 0,v=void 0,x=void 0;if((a=/^(_|\d+)/.exec(r[2]))&&(l=isFinite(a[1])?parseInt(a[1],10):o[u]||i[u]||1,r[2]=r[2].slice(a[1].length)),(v=b(r[2],"li"))&&(r[2]=r[2].slice(v[0]),v=v[1]),/^\.\s*$/.test(r[2]))n=v||{},t.advance(r[0]);else{for(;s.length<u;)h=[f,{},A(s.length+1),d=["li"]],(g=s[s.length-1])&&(g.li.push(A(s.length)),g.li.push(h)),s.push({ul:h,li:d,att:0}),i[s.length]=1;for(;s.length>u;)(x=s.pop()).ul.push(A(s.length)),1!==x.att||x.ul[3][1].substr||y(x.ul[1],x.ul[3].splice(1,1)[0]);g=s[s.length-1],l&&(g.ul[1].start=l,i[u]=l,l=0),n&&(g.att=9,y(g.ul[1],n),n=null),d||(g.ul.push(A(s.length),p),g.li=p),v&&(g.li.push(v),g.att++),Array.prototype.push.apply(g.li,$(r[2].trim(),e)),t.advance(r[0]),i[u]=(i[u]||0)+1}}for(e._lst=i;s.length;)(c=s.pop()).ul.push(A(s.length)),1!==c.att||c.ul[3][1].substr||y(c.ul[1],c.ul[3].splice(1,1)[0]);return c.ul}}},function(t,e,o){var l=o(1),n=/^((?:- (?:[^\n]\n?)+?)+:=(?: *\n[^\0]+?=:(?:\n|$)|(?:[^\0]+?(?:$|\n(?=\n|- )))))+/,p=/^((?:- (?:[^\n]\n?)+?)+):=( *\n[^\0]+?=:\s*(?:\n|$)|(?:[^\0]+?(?:$|\n(?=\n|- ))))/;e.testDefList=function(t){return n.exec(t)},e.parseDefList=function(t,e){t=l(t.trim());for(var n,r,a,c=o(3).parsePhrase,s=o(8).parseFlow,i=["dl","\n"];a=p.exec(t);){for(n=a[1].split(/(?:^|\n)- /).slice(1);n.length;)i.push("\t",["dt"].concat(c(n.shift().trim(),e)),"\n");r=a[2].trim(),i.push("\t",["dd"].concat(/=:$/.test(r)?s(r.slice(0,-2).trim(),e):c(r,e)),"\n"),t.advance(a[0])}return i}},function(t,e,n){var r=n(0),b=n(6),$=n(1),S=n(4).parseAttr,A=n(3).parsePhrase,_=n(7).reIndent,a=n(5).txattr;r.pattern.txattr=a;var c=r.compile(/^((?:table[:txattr:]\.(?:\s(.+?))\s*\n)?(?:(?:[:txattr:]\.[^\n\S]*)?\|.*?\|[^\n\S]*(?:\n|$))+)([^\n\S]*\n+)?/,"s"),k=/^table(_?)([^\n]*?)\.(?:[ \t](.+?))?\s*\n/,O=r.compile(/^(?:\|([~^-][:txattr:])\.\s*\n)?([:txattr:]\.[^\n\S]*)?\|(.*?)\|[^\n\S]*(\n|$)/,"s"),j=/^\|=([^\n+]*)\n/,T=/^\|:([^\n+]*)\|[\r\t ]*\n/,w=/^\|([\^\-~])([^\n+]*)\.[ \t\r]*\n/,E={"^":"thead","~":"tfoot","-":"tbody"};function P(t){var c=["colgroup",{}];return t.split("|").forEach(function(t,e){var n,r=e?{}:c[1],a=t.trim();a&&((n=/^\\(\d+)/.exec(a))&&(r.span=+n[1],a=a.slice(n[0].length)),(n=S(a,"col"))&&(b(r,n[1]),a=a.slice(n[0])),(n=/\b\d+\b/.exec(a))&&(r.width=+n[0])),e&&c.push("\n\t\t",["col",r])}),c.concat(["\n\t"])}t.exports={parseColgroup:P,parseTable:function(t,e){t=$(t.trim());function n(t,e){c=[t,e||{}],u.push(c)}var r,a,c,s,i,o,l,p,u=[],f={},d=0;(p=k.exec(t))&&(t.advance(p[0]),(o=S(p[2],"table"))&&b(f,o[1]),p[3]&&(f.summary=p[3])),(p=j.exec(t))&&(a=["caption"],(o=S(p[1],"caption"))&&(a.push(o[1]),p[1]=p[1].slice(o[0])),/\./.test(p[1])?(a.push(p[1].slice(1).replace(/\|\s*$/,"").trim()),d++,t.advance(p[0])):a=null);do{if(p=T.exec(t))r=P(p[1]),d++;else if(p=w.exec(t)){var h=E[p[1]]||"tbody";n(h,(o=S("".concat(p[2]," "),h))&&o[1]),d++}else if(p=O.exec(t)){c||n("tbody"),s=["tr"],p[2]&&(o=S(p[2],"tr"))&&s.push(o[1]),c.push("\n\t\t",s),i=$(p[3]);do{i.save();var g,v=i.startsWith("_"),x=[v?"th":"td"];v&&i.advance(1),(o=S(i,"td"))&&(i.advance(o[0]),x.push(o[1])),(o||v)&&((g=/^\.\s*/.exec(i))?i.advance(g[0]):(x=["td"],i.load()));var m=/^(==.*?==|[^|])*/.exec(i),x=x.concat(A(m[0],e));s.push("\n\t\t\t",x),l="|"===i.valueOf().charAt(m[0].length),i.advance(m[0].length+1)}while(l);s.push("\n\t\t")}p&&t.advance(p[0])}while(p);var y=["table",f];return d?(a&&y.push("\n\t",a),r&&y.push("\n\t",r),u.forEach(function(t){y.push("\n\t",t.concat(["\n\t"]))})):y=y.concat(_(u[0].slice(2),-1)),y.push("\n"),y},testTable:function(t){return c.exec(t)}}}],a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=10);function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}var n,r});