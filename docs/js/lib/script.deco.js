!function b(u,t,c){function h(bb,ub){if(!t[bb]){if(!u[bb]){var tb="function"==typeof require&&require;if(!ub&&tb)return tb(bb,!0);if(i)return i(bb,!0);var cb=new Error("Cannot find module '"+bb+"'");throw cb.code="MODULE_NOT_FOUND",cb}var hb=t[bb]={exports:{}};u[bb][0].call(hb.exports,function(b){var t=u[bb][1][b];return h(t?t:b)},hb,hb.exports,b,u,t,c)}return t[bb].exports}for(var i="function"==typeof require&&require,bb=0;bb<c.length;bb++)h(c[bb]);return h}({1:[function(b,u,t){(function(b){"use strict";function u(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}function c(b,u){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!u||"object"!=typeof u&&"function"!=typeof u?b:u}function h(b,u){if("function"!=typeof u&&null!==u)throw new TypeError("Super expression must either be null or a function, not "+typeof u);b.prototype=Object.create(u&&u.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(b,u):b.__proto__=u)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(b){function t(){u(this,t);for(var b=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),h=arguments.length,i=Array(h),bb=0;h>bb;bb++)i[bb]=arguments[bb];if(0===i.length);else if(1===i.length)if("number"==typeof i[0])for(var ub=i[0],tb=0;ub>tb;tb++)b[tb]=void 0;else b[0]=i[0];else i.forEach(function(u,t){b[t]=u});return b}return h(t,b),t}(Array);t["default"]=i,b.MyArray=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);