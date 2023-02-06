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
/*
	* mouseEvents
	? 'click' 		works with multiple single clicks pattern
	? 'dblclick' 	only works with single double click pattern set
	? 'mouseup' 	works with multiple mouseup clicks pattern
	? 'mousedown' works with multiple mousedown clicks pattern
*/
const mouseEvents = ['click', 'dblclick', 'mouseup', 'mousedown'];
let easterEggsTriggerEggs = [];
const EasterEggTriggerVueObj = null;
let $this = null;
const EasterEggTriggerCore = {
  defaultOptions: {
    callback: null,
    destroyBus: false,
    name: 'easter-egg',
    pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    target: 'div',
    triggered: null,
    type: 'keydown',
    withBus: true
  },
  pluginOptions: {},
  input: [],
  methodOptions: {},
  options: {},
  targets: {
    classNames: [],
    ids: [],
    nodes: []
  },
  timeout: () => {},
  /* ---------------------------------------- Init
  ? Initializes the plugin
  */
  init(Vue, globalOptions, methodOptions) {
    EasterEggTriggerVueObj = Vue;

    // Merge user and global //
    this.pluginOptions = _objectSpread({}, this.defaultOptions);
    this.pluginOptions = _objectSpread(_objectSpread(_objectSpread({}, this.pluginOptions), methodOptions), globalOptions);
    $this = this;
    this.layEggs();
  },
  /* ---------------------------------------- Lay Eggs
  ? Adds Eggs to Easter Eggs
  */
  layEggs() {
    easterEggsTriggerEggs.push(this.pluginOptions);
    this.collectEggs();
  },
  /* ---------------------------------------- Collect Eggs
  ? Add eggs to global easterEggsTriggerEggs array
  */
  // Loop through eggs and call add event listener //
  collectEggs() {
    Object.values(easterEggsTriggerEggs).forEach(egg => {
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
  /* ---------------------------------------- Add Listener
  ? Create and add event listener
  */
  addListener() {
    document.body.addEventListener(this.pluginOptions.type, this.capturePattern, false);
  },
  /* ---------------------------------------- Capture Pattern
  ? Capture the Keys or Click Pattern
  */
  capturePattern(e) {
    let key = '';
    if ($this.timeout !== null) {
      clearTimeout($this.timeout);
    }

    // -------------------- Keyboard Events //
    if (e.key !== undefined) {
      key = e.key;
    }

    // -------------------- Mouse Events //
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(mouseEvents, e.type)) {
      const target = e.target;
      key = e.type;
      if (key === 'dblclick') {
        $this.input = [];
      }
      $this.targets.nodes.push(target.nodeName.toLowerCase());
      $this.targets.ids.push(target.id);
      $this.targets.classNames.push(target.classList.value);
    }
    $this.input.push(key);
    $this.checkPattern(e);
    return false;
  },
  /* ---------------------------------------- Check Pattern
  ? Check the Keys or Click Pattern
  */
  checkPattern(e) {
    // No eggs exist, so return false if eventlistener is triggered //
    if (easterEggsTriggerEggs.length === 0) {
      return false;
    }
    Object.values(easterEggsTriggerEggs).forEach(egg => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(egg.pattern, this.input)) {
        // Check Targets if Mouse Events //
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(mouseEvents, e.type)) {
          this.checkMouseTarget(egg);
          return false;
        }
        this.emitEvent(egg);
      }
      return false;
    });
    this.reset();
    return false;
  },
  /* ---------------------------------------- Check Target Element
  ? Checks the mouse event target
  */
  checkMouseTarget(egg) {
    // Get clean egg target //
    const node = egg.target;
    const id = egg.target.replace('#', '');
    const className = egg.target.replace('.', '');

    // Reduce targets to unique values //
    const nodes = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(this.targets.nodes);
    const ids = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(this.targets.ids);
    const classNames = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(this.targets.classNames);

    // Targets array should reduce down to one value, and match the clean egg target //
    const nodeTargetsMatch = nodes.length === 1 && nodes[0] === node;
    const idTargetsMatch = ids.length === 1 && ids[0] === id;
    const classTargetsMatch = classNames.length === 1 && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(classNames[0], className);
    if (nodeTargetsMatch || idTargetsMatch || classTargetsMatch) {
      this.emitEvent(egg);
    }
    this.reset();
  },
  /* ---------------------------------------- Emit Event
  ? Emit Bus Event and/or Callback
  */
  emitEvent(egg) {
    if (Object.keys(easterEggsTriggerEggs).length === 1) {
      document.body.removeEventListener(egg.type, this.capturePattern, false);
    }
    this.rebuild(egg);
    if (egg.callback) {
      egg.callback(egg);
    }
    if (egg.triggered) {
      egg.triggered(egg);
    }
    new EasterEggTriggerVueObj().$bus.$emit(`${egg.name}`);

    // Auto destroy $bus.$on //
    if (egg.destroyBus) {
      new EasterEggTriggerVueObj().$bus.$off(`${egg.name}`);
    }
    return false;
  },
  /* ---------------------------------------- Rebuild
  ? Rebuild the easter egg
  */
  rebuild(usedEgg) {
    const currentEggs = easterEggsTriggerEggs;
    easterEggsTriggerEggs = [];

    // Remove usedEgg from easterEggsTriggerEggs  //
    const idx = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(currentEggs, egg => egg.name === usedEgg.name);
    currentEggs.splice(idx, 1);
    Object.values(currentEggs).forEach(egg => {
      this.layEggs(egg);
    });
    easterEggsTriggerEggs = currentEggs;
  },
  /* ---------------------------------------- Reset
  ? Reset the timeout and input pattern
  */
  reset() {
    // Reset timeout and clear input keys //
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout);

      // Clean inputs and targets //
      this.input = [];
      this.targets = {
        nodes: [],
        ids: [],
        classNames: []
      };
    }, this.pluginOptions.delay);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTriggerCore);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a481ccf27e4962922111"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.350ddede5232b81d6f4d.hot-update.js.map