"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EasterEggComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EasterEggComponent.vue */ "./components/EasterEggComponent.vue");
/* harmony import */ var _plugin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin/index */ "./plugin/index.js");


console.group('index.js');
console.log({
  EasterEggTriggerCore: _plugin_index__WEBPACK_IMPORTED_MODULE_1__["default"]
});
let globalOptions = {
  delay: 500
};
const EasterEggTrigger = {
  install(Vue) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (Vue.prototype.$easterEgg || Vue.prototype.$easterEgg) {
      return;
    }

    // Set the Global options //
    globalOptions.delay = options.delay || globalOptions.delay;
    Vue.component(_components_EasterEggComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _components_EasterEggComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

    // 1. Add global method or property
    Vue.globalEasterEggMethod = function () {
      // some logic ...
    };

    // 2. Add a global asset
    Vue.directive('easter-egg-trigger-directive', {
      bind(el, binding, vnode, oldVnode) {
        // some logic ...
      }
    });

    // 3. Inject some component options
    Vue.mixin({
      created() {
        // some logic ...
      }
    });

    // 4. add an instance method
    Vue.prototype.$easterEgg = function (methodOptions) {
      console.log('$easterEgg instance method loaded');
      _plugin_index__WEBPACK_IMPORTED_MODULE_1__["default"].init(globalOptions, methodOptions);
    };
    Vue.prototype.$easterEggTrigger = function (methodOptions) {
      _plugin_index__WEBPACK_IMPORTED_MODULE_1__["default"].init(globalOptions, methodOptions);
    };
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(EasterEggTrigger);
}
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTrigger);
console.groupEnd('index.js');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6bf46949c67c2c875246"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a6232ba3134ace30971c.hot-update.js.map