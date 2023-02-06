"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "./plugin/EasterEggTriggerCore.js":
/*!****************************************!*\
  !*** ./plugin/EasterEggTriggerCore.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
console.log('EasterEggTriggerCore.js loaded');

// ---------------------------------------- Globals //
const mouseEvents = ['click',
// Works with multiple single clicks pattern
'dblclick',
// Only works with single double click pattern set
'mouseup',
// Works with multiple mouseup clicks pattern
'mousedown' // Works with multiple mousedown clicks pattern
];

const EasterEggTriggerCore = {
  // ---------------------------------------- Defaults //
  defaultOptions: {},
  input: [],
  targets: {
    nodes: [],
    ids: [],
    classNames: []
  },
  timeout: () => {},
  // ---------------------------------------- Init //
  init(Vue, options, methodOptions) {
    console.group('EasterEggTriggerCore');
    console.log('------------------------------- Core Init');
    console.log({
      Vue,
      options,
      methodOptions
    });
    console.groupEnd('EasterEggTriggerCore');
    this.defaultOptions = options;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTriggerCore);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "988f112ff48bccaeb80c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bd28e1a92956eab1138e.hot-update.js.map