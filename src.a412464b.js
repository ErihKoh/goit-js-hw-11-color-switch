parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eYlT":[function(require,module,exports) {

},{}],"HHAu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];exports.default=e;
},{}],"yEcq":[function(require,module,exports) {
"use strict";function e(e,t){return Math.floor(Math.random()*(t-e+1)+e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"cRgn":[function(require,module,exports) {
"use strict";var t=n(require("./colors")),e=n(require("./random_integer"));function n(t){return t&&t.__esModule?t:{default:t}}var o={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')};o.startBtn.addEventListener("click",c),o.stopBtn.addEventListener("click",l);var r=null,a=!1;function c(){a||(a=!0,r=setInterval(u,1e3),console.log("click start"))}function l(){a&&(a=!1,clearInterval(r),console.log("click stop"))}function u(){var n=(0,e.default)(0,t.default.length);document.body.style.backgroundColor=t.default[n]}
},{"./colors":"HHAu","./random_integer":"yEcq"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/custom.scss"),require("./data/color_switch");
},{"./sass/custom.scss":"eYlT","./data/color_switch":"cRgn"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.a412464b.js.map