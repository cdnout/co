var CRC32;!function(r){"undefined"==typeof DO_NOT_EXPORT_CRC?"object"==typeof exports?r(exports):"function"==typeof define&&define.amd?define(function(){var n={};return r(n),n}):r(CRC32={}):r(CRC32={})}(function(r){r.version="1.2.0";var n=function(){for(var r=0,n=new Array(256),e=0;256!=e;++e)r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=e)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1,n[e]=r;return"undefined"!=typeof Int32Array?new Int32Array(n):n}();r.table=n,r.bstr=function(r,e){for(var t=-1^e,o=r.length-1,f=0;f<o;)t=(t=t>>>8^n[255&(t^r.charCodeAt(f++))])>>>8^n[255&(t^r.charCodeAt(f++))];return f===o&&(t=t>>>8^n[255&(t^r.charCodeAt(f))]),-1^t},r.buf=function(r,e){if(r.length>1e4)return function(r,e){for(var t=-1^e,o=r.length-7,f=0;f<o;)t=(t=(t=(t=(t=(t=(t=(t=t>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])];for(;f<o+7;)t=t>>>8^n[255&(t^r[f++])];return-1^t}(r,e);for(var t=-1^e,o=r.length-3,f=0;f<o;)t=(t=(t=(t=t>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])])>>>8^n[255&(t^r[f++])];for(;f<o+3;)t=t>>>8^n[255&(t^r[f++])];return-1^t},r.str=function(r,e){for(var t,o,f=-1^e,u=0,a=r.length;u<a;)(t=r.charCodeAt(u++))<128?f=f>>>8^n[255&(f^t)]:t<2048?f=(f=f>>>8^n[255&(f^(192|t>>6&31))])>>>8^n[255&(f^(128|63&t))]:t>=55296&&t<57344?(t=64+(1023&t),o=1023&r.charCodeAt(u++),f=(f=(f=(f=f>>>8^n[255&(f^(240|t>>8&7))])>>>8^n[255&(f^(128|t>>2&63))])>>>8^n[255&(f^(128|o>>6&15|(3&t)<<4))])>>>8^n[255&(f^(128|63&o))]):f=(f=(f=f>>>8^n[255&(f^(224|t>>12&15))])>>>8^n[255&(f^(128|t>>6&63))])>>>8^n[255&(f^(128|63&t))];return-1^f}});