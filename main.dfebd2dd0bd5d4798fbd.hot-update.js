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
    // callback: {
    // 	default: null,
    // 	type: Function,
    // },
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
    },
    options: {}
  }),
  computed: {},
  watch: {},
  created() {
    console.log('EasterEggComponent created');
  },
  mounted() {
    console.log(this);
    // debugger;
    this.buildOptions();
  },
  methods: {
    buildOptions() {
      console.log(this);
      this.options = {
        callback: this.callback,
        destroyBus: this.destroyBus,
        name: this.name,
        pattern: this.pattern,
        target: this.target,
        triggered: this.triggered,
        type: this.type,
        withBus: this.withBus
      };
      this.init();
    },
    callback() {
      this.$emit('callback', this.options);
      console.log('---- callback');
    },
    init() {
      _plugin_index__WEBPACK_IMPORTED_MODULE_0__["default"].init(this.defaultOptions, this.options);
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cafd94ed252bc3c1f1bf"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.dfebd2dd0bd5d4798fbd.hot-update.js.map