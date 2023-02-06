"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/EasterEggComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

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
/******/ 	__webpack_require__.h = function() { return "e590e3e4c55dc0ef367d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a2566f44a63185a0a157.hot-update.js.map