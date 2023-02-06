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
  // Defaults //
  mouseEvents: ['click',
  // Works with multiple single clicks pattern
  'dblclick',
  // Only works with single double click pattern set
  'mouseup',
  // Works with multiple mouseup clicks pattern
  'mousedown' // Works with multiple mousedown clicks pattern
  ],

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
/******/ 	__webpack_require__.h = function() { return "696edfa4e2360f7656dd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.18ad30789823ca6f6fad.hot-update.js.map