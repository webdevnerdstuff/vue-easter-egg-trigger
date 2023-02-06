"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/plugin/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EasterEggComponent',
  props: {},
  data: () => ({
    defaultOptions: {}
  }),
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
});

/***/ }),

/***/ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EasterEggComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EasterEggComponent.vue */ "./components/EasterEggComponent.vue");
/* harmony import */ var _plugin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin/index */ "./plugin/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


let defaultOptions = {
  callback: null,
  delay: 500,
  destroyBus: false,
  name: 'easter-egg',
  pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
  pattern: false,
  target: 'div',
  type: 'keydown',
  withBus: true
};
const EasterEggTrigger = {
  install(Vue) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (Vue.prototype.$easterEgg || Vue.prototype.$easterEgg) {
      return;
    }

    // Set the Global options //
    defaultOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
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
      created: function () {
        // some logic ...
      }
    });

    // 4. add an instance method
    Vue.prototype.$easterEgg = function (methodOptions) {
      _plugin_index__WEBPACK_IMPORTED_MODULE_1__["default"].init(Vue, defaultOptions, methodOptions);
    };
    Vue.prototype.$easterEggTrigger = function (methodOptions) {
      _plugin_index__WEBPACK_IMPORTED_MODULE_1__["default"].init(Vue, defaultOptions, methodOptions);
    };
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(EasterEggTrigger);
}
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTrigger);

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./App.vue");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style.css */ "./assets/style.css");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./index.js");




vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(_index__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}).$mount('#app');

/***/ }),

/***/ "./plugin/EasterEggTriggerCore.js":
/*!****************************************!*\
  !*** ./plugin/EasterEggTriggerCore.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
console.log("EasterEggTriggerCore.js loaded");
const EasterEggTriggerCore = {};
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTriggerCore);

/***/ }),

/***/ "./plugin/index.js":
/*!*************************!*\
  !*** ./plugin/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EasterEggTriggerCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasterEggTriggerCore */ "./plugin/EasterEggTriggerCore.js");

/* harmony default export */ __webpack_exports__["default"] = (_EasterEggTriggerCore__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/EasterEggComponent.vue":
/*!*******************************************!*\
  !*** ./components/EasterEggComponent.vue ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasterEggComponent.vue?vue&type=template&id=65d6b49d& */ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&");
/* harmony import */ var _EasterEggComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EasterEggComponent.vue?vue&type=script&lang=js& */ "./components/EasterEggComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EasterEggComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__.render,
  _EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ../node_modules/.pnpm/vue-hot-reload-api@2.3.4/node_modules/vue-hot-reload-api/dist/index.js */ "../node_modules/.pnpm/vue-hot-reload-api@2.3.4/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.runtime.common.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('65d6b49d')) {
      api.createRecord('65d6b49d', component.options)
    } else {
      api.reload('65d6b49d', component.options)
    }
    module.hot.accept(/*! ./EasterEggComponent.vue?vue&type=template&id=65d6b49d& */ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasterEggComponent.vue?vue&type=template&id=65d6b49d& */ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&");
(function () {
      api.rerender('65d6b49d', {
        render: _EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/EasterEggComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/EasterEggComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./components/EasterEggComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./EasterEggComponent.vue?vue&type=script&lang=js& */ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&":
/*!**************************************************************************!*\
  !*** ./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_template_id_65d6b49d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./EasterEggComponent.vue?vue&type=template&id=65d6b49d& */ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "827b79878442491637b4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7cb631acf8521a58a9ea.hot-update.js.map