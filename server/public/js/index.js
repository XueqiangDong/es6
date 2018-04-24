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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Administrator on 2017/4/26.
 */
{
    // 2进制0b,8进制0o
    console.log('B', 503);
    console.log('o', 503);
}
{
    //是否有尽
    console.log('is', Number.isFinite(15));
    console.log('NaN', Number.isFinite(NaN));
    console.log('1/0', Number.isFinite('true' / 0));
    console.log('NaN', Number.isNaN(NaN));
    console.log('NaN', Number.isNaN(0));
}
{
    console.log('25', Number.isInteger(25));
    console.log('25.0', Number.isInteger(25.0));
    console.log('25.1', Number.isInteger(25.1));
    console.log('25', Number.isInteger('25'));
}
{
    // 判断数的上下限2^53次方
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    console.log('10', Number.isSafeInteger(10));
    console.log('a', Number.isSafeInteger('a'));
    console.log('10.1', Number.isSafeInteger(10.1));
}
{
    console.log(4.1, Math.trunc(4.1));
    console.log(4.9, Math.trunc(4.9));
}

{
    console.log('-5', Math.sign(-5));
    console.log('0', Math.sign(0));
    console.log('5.1', Math.sign(5.1));
    console.log('5.1', Math.sign('5.1'));
    console.log('foo', Math.sign('foo'));
}

{
    console.log('-1', Math.cbrt(-1));
    console.log('8', Math.cbrt(8));
}

/***/ })
/******/ ]);