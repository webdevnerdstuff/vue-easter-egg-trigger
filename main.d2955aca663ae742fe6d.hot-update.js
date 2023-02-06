"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "./plugin/EasterEggTriggerCore.js":
/*!****************************************!*\
  !*** ./plugin/EasterEggTriggerCore.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
console.log('EasterEggTriggerCore.js loaded');
const inputs = [];
const mouseEvents = ['click',
// Works with multiple single clicks pattern
'dblclick',
// Only works with single double click pattern set
'mouseup',
// Works with multiple mouseup clicks pattern
'mousedown' // Works with multiple mousedown clicks pattern
];

const targets = {
  nodes: [],
  ids: [],
  classNames: []
};
const timeout = () => {};
const EasterEggTriggerCore = {
  // ---------------------------------------- Defaults //
  mouseEvents: ['click',
  // Works with multiple single clicks pattern
  'dblclick',
  // Only works with single double click pattern set
  'mouseup',
  // Works with multiple mouseup clicks pattern
  'mousedown' // Works with multiple mousedown clicks pattern
  ],

  timeout: null,
  input: [],
  targets: {
    nodes: [],
    ids: [],
    classNames: []
  },
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
/******/ 	__webpack_require__.h = function() { return "fdab749743aad41b8604"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d2955aca663ae742fe6d.hot-update.js.map