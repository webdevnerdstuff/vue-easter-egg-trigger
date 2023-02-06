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
  input: [],
  methodOptions: {},
  options: {},
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
    this.options = options;
    this.methodOptions = methodOptions;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTriggerCore);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cd085c034a47b6814aa8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5e114f2de7f8efdb2de1.hot-update.js.map