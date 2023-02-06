"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "./plugin/EasterEggTriggerCore.js":
/*!****************************************!*\
  !*** ./plugin/EasterEggTriggerCore.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// ---------------------------------------- Globals //
const mouseEvents = ['click',
// Works with multiple single clicks pattern
'dblclick',
// Only works with single double click pattern set
'mouseup',
// Works with multiple mouseup clicks pattern
'mousedown' // Works with multiple mousedown clicks pattern
];

const easterEggsTriggerEggs = [];
let $this = null;
const EasterEggTriggerCore = {
  // ---------------------------------------- Defaults //
  pluginOptions: {
    callback: null,
    delay: 500,
    destroyBus: false,
    name: 'easter-egg',
    pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    target: 'div',
    triggered: null,
    type: 'keydown',
    withBus: true
  },
  input: [],
  methodOptions: {},
  options: {},
  targets: {
    nodes: [],
    ids: [],
    classNames: []
  },
  timeout: () => {},
  /*
  	---------------------------------------- Init
  	? Initializes the plugin
  */
  init(globalOptions, methodOptions) {
    console.group('EasterEggTriggerCore', '------------------------------- Core Init');
    console.log({
      globalOptions,
      methodOptions
    });

    // Merge user and global //
    this.pluginOptions = _objectSpread(_objectSpread(_objectSpread({}, this.pluginOptions), globalOptions), methodOptions);
    $this = this;
    console.log(this.pluginOptions);
    this.layEggs();
  },
  /*
  	---------------------------------------- Lay Eggs
  	? Adds Eggs to Easter Eggs
  */
  layEggs() {
    easterEggsTriggerEggs.push(this.pluginOptions);
    console.log('layEggs', {
      easterEggsTriggerEggs
    });
    this.collectEggs();
  },
  /*
  	---------------------------------------- Collect Eggs
  	? Add eggs to global easterEggsTriggerEggs array
  */
  // Loop through eggs and call add event listener //
  collectEggs() {
    console.log(easterEggsTriggerEggs.length);
    Object.values(easterEggsTriggerEggs).forEach(egg => {
      console.log({
        egg
      });
      const newEgg = egg;
      if (!newEgg.pattern) {
        newEgg.pattern = this.pluginOptions.pattern;
      }
      if (!newEgg.target) {
        newEgg.target = this.pluginOptions.target;
      }
    });
    this.addListener();
  },
  /*
  	---------------------------------------- Add Listener
  	? Create and add event listener
  */
  addListener() {
    console.log('addListener', this.pluginOptions.type);
    document.addEventListener(this.pluginOptions.type, this.capturePattern, false);
  },
  /*
  	---------------------------------------- Capture Pattern
  	? Capture the Keys or Click Pattern
  */
  capturePattern(e) {
    console.log('capturePattern', {
      e
    });
    console.log($this);
    let key = '';
    // console.log({ e });

    if ($this.timeout !== null) {
      clearTimeout($this.timeout);
    }

    // -------------------- Keyboard Events //
    if (e.key !== undefined) {
      key = e.key;
    }

    // // -------------------- Mouse Events //
    // if (_.includes(EasterEggTrigger.mouseEvents, e.type)) {
    // 	console.log('includes');
    // 	const target = e.target;
    // 	key = e.type;

    // 	EasterEggTrigger.targets.nodes.push(target.nodeName.toLowerCase());
    // 	EasterEggTrigger.targets.ids.push(target.id);
    // 	EasterEggTrigger.targets.classNames.push(target.classList.value);
    // }

    // console.log({ key });

    $this.input.push(key);
    $this.checkPattern(e);
    console.log({
      key
    });
    $this.hatched();
    return false;
  },
  /*
  	---------------------------------------- Check Pattern
  	? Check the Keys or Click Pattern
  */
  checkPattern(e) {
    console.log('checkPattern', this);
    console.log({
      easterEggsTriggerEggs,
      e
    });
    Object.values(easterEggsTriggerEggs).forEach(egg => {
      console.log({
        egg
      }, this.input);

      // Check Keyboard Events //
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(egg.pattern, this.input)) {
        // Check Targets if Mouse Events //
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)($this.mouseEvents, e.type)) {
          this.checkTarget(e, egg);
          return false;
        }

        // this.emitEvent(egg);
      }

      return false;
    });

    // this.reset();
    return false;
  },
  /*
   ---------------------------------------- Hatch
  ? Easter Egg Hatched
  */
  hatched() {
    console.log('HATCHED');
    console.groupEnd('EasterEggTriggerCore');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTriggerCore);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4a71b88e958ea11a42b8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e7c377f50a98e585cfbb.hot-update.js.map