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
    delay: {
      default: 500,
      type: [String, Number]
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
    defaultOptions: {}
  }),
  computed: {},
  watch: {},
  created() {
    console.log('EasterEggComponent created');
  },
  mounted() {
    console.log(this);
    console.log(this.props);
  },
  methods: {
    setEasterEgg() {
      this.$easterEgg({
        name: '================================================== FIRST EGG',
        pattern: ['click'],
        type: 'click',
        target: '#id-target'
      });
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3867454ae2a82b2f50e8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.051dc75a0f9fb8d43c21.hot-update.js.map