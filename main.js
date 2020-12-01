parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"e4jU":[function(require,module,exports) {
var define;
var e;!function(){var t={};function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.domain,o=void 0===n?"":n,r=t.type,i=void 0===r?"localStorage":r;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.store="localStorage"==i?localStorage:sessionStorage,this.DOMAIN=o?"".concat(o,"_"):"",this.EXPIRE="_expiration_date"}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"set",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e)return console.error("Localit: provide a key to store a value");"object"==n(t)&&(t=JSON.stringify(t)),this.store.setItem(this.getFullKey(e),t),o&&this.setExpiration(e,o)}},{key:"setExpiration",value:function(e,t){if(!["h","d","m","s"].some(function(e){return t.includes(e)}))return console.warn("Localit: provide a valid expiration time format (e.g. '20h', '160s', '15d'). Your expiration date hasn't been saved.");var n=new Date,o=null;t.includes("s")&&(o=parseInt(t.replace("s","")),n.setSeconds(n.getSeconds()+o)),t.includes("m")&&(o=parseInt(t.replace("m","")),n.setMinutes(n.getMinutes()+o)),t.includes("h")&&(o=parseInt(t.replace("h","")),n.setHours(n.getHours()+o)),t.includes("d")&&(o=parseInt(t.replace("d","")),n.setDate(n.getDate()+o)),this.store.setItem("".concat(this.getFullKey(e)).concat(this.EXPIRE),JSON.stringify(n))}},{key:"get",value:function(e){if(this.hasExpirationDate(e)&&this.hasExpired(e))return this.remove(e),null;try{return JSON.parse(this.store.getItem(this.getFullKey(e)))}catch(t){return this.store.getItem(this.getFullKey(e))}}},{key:"remove",value:function(e){this.store.removeItem(this.getFullKey(e)),this.store.removeItem("".concat(this.getFullKey(e)).concat(this.EXPIRE))}},{key:"setDomain",value:function(e){this.DOMAIN="".concat(e,"_")}},{key:"clearDomain",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.DOMAIN,t=0,n=Object.keys(localStorage);t<n.length;t++){var o=n[t];o.includes(e)&&this.store.removeItem(o)}}},{key:"hasExpirationDate",value:function(e){return null!==this.store.getItem("".concat(this.getFullKey(e)).concat(this.EXPIRE))}},{key:"hasExpired",value:function(e){var t=JSON.parse(this.store.getItem("".concat(this.getFullKey(e)).concat(this.EXPIRE)));return new Date>new Date(t)}},{key:"getFullKey",value:function(e){return"".concat(this.DOMAIN).concat(e)}},{key:"bust",value:function(){this.store.clear()}}]),e}();t.Localit=r,"object"==typeof exports&&"undefined"!=typeof module?module.exports=t:"function"==typeof e&&e.amd&&e(function(){return t})}();
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CacheAutoUpdate=exports.CacheRemember=void 0;var e=require("localit");function r(e,r,t,n,a,u,o){try{var c=e[u](o),i=c.value}catch(s){return void t(s)}c.done?r(i):Promise.resolve(i).then(n,a)}function t(e){return function(){var t=this,n=arguments;return new Promise(function(a,u){var o=e.apply(t,n);function c(e){r(o,a,u,c,i,"next",e)}function i(e){r(o,a,u,c,i,"throw",e)}c(void 0)})}}var n=function(){var r=t(regeneratorRuntime.mark(function r(t,n,a){var u,o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if((u=new e.Localit).setDomain("cache-remember"),!(o=u.get(t))){r.next=5;break}return r.abrupt("return",o);case 5:if("function"!=typeof a){r.next=11;break}return r.next=8,a();case 8:o=r.sent,r.next=14;break;case 11:return r.next=13,a;case 13:o=r.sent;case 14:return u.set(t,o,"".concat(n,"s")),r.abrupt("return",o);case 16:case"end":return r.stop()}},r)}));return function(e,t,n){return r.apply(this,arguments)}}();exports.CacheRemember=n;var a=function(r,n){var a,u=new e.Localit;u.setDomain("cache-autoupdate");var o=u.get(r);return a="function"==typeof n?new Promise(function(){var e=t(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:a=e.sent,u.set(r,a),t(a);case 5:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()):new Promise(function(){var e=t(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:a=e.sent,u.set(r,a),t(a);case 5:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()),null!=o?o:a};exports.CacheAutoUpdate=a;
},{"localit":"e4jU"}]},{},["Focm"], null)
//# sourceMappingURL=/main.js.map