/*! CAF: index.js
	v12.0.1 (c) 2021 Kyle Simpson
	MIT License: http://getify.mit-license.org
*/
!function UMD(e,n,d,o){"function"==typeof define&&define.amd?(d=Object.values(d),define(e,d,o)):"undefined"!=typeof module&&module.exports?(d=Object.keys(d).map((e=>require(e))),module.exports=o(...d)):(d=Object.values(d).map((e=>n[e])),n[e]=o(...d))}("Index","undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:new Function("return this")(),{"./caf.js":"CAF","./cag.js":"CAG","./shared.js":"CAFShared"},(function DEF(e,n,d){"use strict";return{CAF:e,CAG:n,CAFShared:d}}));