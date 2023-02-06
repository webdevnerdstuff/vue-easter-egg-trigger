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
      default: null,
      type: Function
    },
    destroyBus: {
      default: false,
      type: Boolean
    },
    name: {
      default: '',
      type: String
    },
    pattern: {
      default: () => ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
      type: Array
    },
    target: {
      default: 'body',
      type: String
    },
    triggered: {
      default: null,
      type: Function
    },
    type: {
      default: 'keydown',
      type: String
    }
  },
  data: () => ({
    defaultOptions: {
      delay: 500
    }
    // callback: null,
    // destroyBus: false,
    // name: 'easter-egg',
    // pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    // target: 'div',
    // triggered: null,
    // type: 'keydown',
    // withBus: true,
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
      const defaultOptions = _plugin_index__WEBPACK_IMPORTED_MODULE_0__["default"].defaultOptions;
      const options = {
        callback: this.callback,
        destroyBus: false,
        name: 'easter-egg',
        pattern: this.pattern,
        target: this.target,
        triggered: this.triggered,
        type: this.type,
        withBus: true
      };
      this.init(options);
    },
    init(options) {
      _plugin_index__WEBPACK_IMPORTED_MODULE_0__["default"].init(this.defaultOptions, options);
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ff9cbbccaa1c664fd3c0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c5b8925ca6f6d8f404b7.hot-update.js.map