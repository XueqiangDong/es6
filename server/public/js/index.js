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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// {
//     let obj = {
//         time: '2017-03-11',
//         name: 'net',
//         _r: 123
//     };
//
//     let monitor = new Proxy(obj, {
//         get(target, key) {
//             return target[key].replace('2017', '2018');
//         },
//         set(target, key, value) {
//             if (key === 'name') {
//                 return target[key] = value;
//             } else {
//                 return target[key];
//             }
//         },
//         has(target, key) {
//             if (key === 'name') {
//                 return target[key];
//             } else {
//                 return false;
//             }
//         },
//         deleteProperty(target, key) {
//             if (key.indexOf('_') > -1) {
//                 delete target[key];
//                 return true;
//             } else {
//                 return target[key];
//             }
//         },
//         ownKeys(target) {
//             return Object.keys(target).filter(item => item != 'time');
//         }
//     });
//
//     // console.log('get', monitor.time);
//     // monitor.time = '2018';
//     // monitor.name = 'hello';
//     // console.log('set', monitor.time, monitor.name);
//     // console.log('has', 'name' in monitor,'time' in monitor);
//     // delete monitor.time;
//     // console.log('delete', monitor);
//     // delete monitor._r;
//     console.log('ownkeys', Object.keys(monitor));
// }
//
// {
//     let obj = {
//         time: '2017-03-11',
//         name: 'net',
//         _r: 123
//     };
//
//     // console.log('reflect get', Reflect.get(obj,'time'));
//     Reflect.set(obj,'name','hello world');
//     console.log(obj);
//     console.log(Reflect.has(obj,'name'));
// }

{
    var validator = function validator(target, _validator) {
        return new Proxy(target, {
            _validator: _validator,
            set: function set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    var va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error(key + ' \u4E0D\u80FD\u8BBE\u7F6E');
                    }
                } else {
                    throw Error(key + ' \u4E0D\u5B58\u5728');
                }
            }
        });
    };

    var personValidators = {
        name: function name(val) {
            return typeof val === 'string';
        },
        age: function age(val) {
            return typeof val === 'number' && val > 18;
        }
    };

    var Person = function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        return validator(this, personValidators);
    };

    var person = new Person('lilei', 30);
    console.log(person);
    person.name = 'hello';
    console.log(person);
}

/***/ })
/******/ ]);