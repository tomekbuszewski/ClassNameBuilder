/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for generating class names from style objects
 */
var ClassNameBuilder = function () {
  function ClassNameBuilder(style, block) {
    var extended = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, ClassNameBuilder);

    this.style = style;
    this.block = block;
    this.extended = extended;
  }

  /**
   * Method for returning data from given object
   * @param {string} element - given element, if any
   * @param {string} modifier - given modifier, if any
   * @returns {string} - fetched data
   */


  _createClass(ClassNameBuilder, [{
    key: 'generateBem',
    value: function generateBem(element, modifier) {
      var bem = '' + this.block + element + modifier;

      return bem in this.style ? this.style[bem] : '';
    }

    /**
     * Method for generating proper string to be looked
     * @param {object|undefined} config - configuration
     * @returns {string} - key to be looked up
     */

  }, {
    key: 'get',
    value: function get() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      var element = typeof config !== 'undefined' && typeof config.e !== 'undefined' ? '__' + config.e : '';
      var modifier = typeof config !== 'undefined' && typeof config.m !== 'undefined' ? '--' + config.m : '';

      if (element !== '' && modifier !== '' && this.extended === true) {
        return this.generateBem(element, '') + ' ' + this.generateBem(element, modifier);
      } else {
        return this.generateBem(element, modifier);
      }
    }
  }]);

  return ClassNameBuilder;
}();

exports.default = ClassNameBuilder;

/***/ })
/******/ ]);