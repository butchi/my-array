(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyArray = function () {
  function MyArray() {
    var _this = this;

    _classCallCheck(this, MyArray);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {} else if (args.length === 1) {
      if (typeof args[0] === 'number') {
        var len = args[0];
        for (var i = 0; i < len; i++) {
          this[i] = undefined;
        }
      } else {
        this[0] = args[0];
      }
    } else {
      args.forEach(function (elm, i) {
        _this[i] = elm;
      });
    }
  }

  _createClass(MyArray, [{
    key: 'from',
    value: function from() {}
  }, {
    key: 'isArray',
    value: function isArray() {}
  }, {
    key: 'of',
    value: function of() {}
  }, {
    key: 'copyWithin',
    value: function copyWithin() {}
  }, {
    key: 'fill',
    value: function fill() {}
  }, {
    key: 'pop',
    value: function pop() {
      var lastIndex = this.length - 1;
      var ret = this[lastIndex];
      delete this[lastIndex];

      return ret;
    }
  }, {
    key: 'push',
    value: function push(val) {
      var len = this.length;
      this[len] = val;

      return len + 1;
    }
  }, {
    key: 'reverse',
    value: function reverse() {}
  }, {
    key: 'shift',
    value: function shift() {
      var lastIndex = this.length - 1;
      var ret = this[0];

      for (var i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
      }

      delete this[lastIndex];

      return ret;
    }
  }, {
    key: 'sort',
    value: function sort() {}
  }, {
    key: 'splice',
    value: function splice() {}
  }, {
    key: 'unshift',
    value: function unshift(val) {
      var lastIndex = this.length;
      var ret = lastIndex + 1;

      for (var i = lastIndex; i > 0; i--) {
        this[i] = this[i - 1];
      }

      this[0] = val;

      return ret;
    }
  }, {
    key: 'concat',
    value: function concat() {}
  }, {
    key: 'includes',
    value: function includes() {}
  }, {
    key: 'join',
    value: function join() {}
  }, {
    key: 'slice',
    value: function slice() {}
  }, {
    key: 'toSource',
    value: function toSource() {}
  }, {
    key: 'toString',
    value: function toString() {}
  }, {
    key: 'toLocaleString',
    value: function toLocaleString() {}
  }, {
    key: 'indexOf',
    value: function indexOf(val) {
      var ret = -1;

      for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
          ret = i;
        }
      }

      return ret;
    }
  }, {
    key: 'lastIndexOf',
    value: function lastIndexOf() {}
  }, {
    key: 'forEach',
    value: function forEach(callback) {
      var _this2 = this;

      Object.keys(this).forEach(function (index) {
        var item = _this2[index];
        var array = _this2;
        return callback(item, index, array);
      });
    }
  }, {
    key: 'entries',
    value: function entries() {}
  }, {
    key: 'every',
    value: function every() {}
  }, {
    key: 'some',
    value: function some() {}
  }, {
    key: 'filter',
    value: function filter() {}
  }, {
    key: 'find',
    value: function find() {}
  }, {
    key: 'findIndex',
    value: function findIndex() {}
  }, {
    key: 'keys',
    value: function keys() {}
  }, {
    key: 'map',
    value: function map() {}
  }, {
    key: 'reduce',
    value: function reduce() {}
  }, {
    key: 'reduceRight',
    value: function reduceRight() {}
  }, {
    key: 'values',
    value: function values() {}
  }, {
    key: 'length',
    get: function get() {
      var bigArr = Object.keys(this).sort(function (elm1, elm2) {
        return Number(elm1) < Number(elm2);
      });

      var biggest = bigArr[0];

      return Number(biggest) + 1;
    }
  }]);

  return MyArray;
}();

exports.default = MyArray;


global.MyArray = MyArray;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
