"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "./plugin/EasterEggTriggerCore.js":
/*!****************************************!*\
  !*** ./plugin/EasterEggTriggerCore.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
console.log('EasterEggTriggerCore.js loaded');
const EasterEggTriggerCore = {
  // ---------------------------------------- Defaults //
  input: [],
  mouseEvents: ['click',
  // Works with multiple single clicks pattern
  'dblclick',
  // Only works with single double click pattern set
  'mouseup',
  // Works with multiple mouseup clicks pattern
  'mousedown' // Works with multiple mousedown clicks pattern
  ],

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
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTriggerCore);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "50ff4fe3706f0e375366"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9eea56bdbd859a5bfded.hot-update.js.map