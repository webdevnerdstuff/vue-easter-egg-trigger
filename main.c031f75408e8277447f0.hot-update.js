"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin/index */ "./plugin/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EasterEggComponent',
  props: {
    callback: {
      default: () => {},
      type: Function
    },
    destroyBus: {
      default: false,
      type: Boolean
    },
    name: {
      default: 'easter-egg-component',
      type: String
    },
    pattern: {
      default: () => ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
      type: Array
    },
    target: {
      default: 'div',
      type: String
    },
    triggered: {
      default: null,
      type: Function
    },
    type: {
      default: 'keydown',
      type: String
    },
    withBus: {
      default: true,
      type: Boolean
    }
  },
  data: () => ({
    defaultOptions: {
      delay: 500
    }
  }),
  computed: {},
  watch: {},
  created() {
    console.log('EasterEggComponent created');
  },
  mounted() {
    this.buildOptions();
  },
  methods: {
    buildOptions() {
      console.log(this.$attrs);
      const options = {
        callback: this.callback,
        destroyBus: this.destroyBus,
        name: this.name,
        pattern: this.pattern,
        target: this.target,
        triggered: this.triggered,
        type: this.type,
        withBus: this.withBus
      };
      this.init(options);
    },
    init(options) {
      console.log({
        options
      });
      _plugin_index__WEBPACK_IMPORTED_MODULE_0__["default"].init(this.defaultOptions, options);
    }
  }
});

/***/ }),

/***/ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./components/EasterEggComponent.vue":
/*!*******************************************!*\
  !*** ./components/EasterEggComponent.vue ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs& */ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs&");
/* harmony import */ var _EasterEggComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EasterEggComponent.vue?vue&type=script&lang=js& */ "./components/EasterEggComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EasterEggComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__.render,
  _EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    module.hot.accept(/*! ./EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs& */ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs& */ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs&");
(function () {
      api.rerender('65d6b49d', {
        render: _EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/EasterEggComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs&":
/*!******************************************************************************************!*\
  !*** ./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_1_y2a6iokolmfwbwiy3gvvnhgcle_node_modules_vue_loader_lib_index_js_vue_loader_options_EasterEggComponent_vue_vue_type_template_id_65d6b49d_v_bind_24attrs___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs& */ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=template&id=65d6b49d&v-bind=%24attrs&");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c0a64883488f404a5b16"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c031f75408e8277447f0.hot-update.js.map