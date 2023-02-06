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

let easterEggsTriggerEggs = [];
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
    console.group('%c%s', 'color: red', 'EasterEggTriggerCore ------------------------------- Core Init');
    console.log({
      globalOptions,
      methodOptions
    });

    // Merge user and global //
    this.pluginOptions = _objectSpread(_objectSpread(_objectSpread({}, this.pluginOptions), globalOptions), methodOptions);
    $this = this;
    console.log('%c%s', 'color: red', 'this.pluginOptions', this.pluginOptions);
    this.layEggs();
  },
  /*
  	---------------------------------------- Lay Eggs
  	? Adds Eggs to Easter Eggs
  */
  layEggs() {
    easterEggsTriggerEggs.push(this.pluginOptions);
    console.log('%c%s', 'color: orange', '------------------------------- layEggs', {
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
    console.log('%c%s', 'color: yellow', '------------------------------- collectEggs', easterEggsTriggerEggs.length);
    Object.values(easterEggsTriggerEggs).forEach(egg => {
      console.log('%c%s', 'color: yellow', egg.name, {
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
    console.log('%c%s', 'color: green', '------------------------------- addListener', this.pluginOptions.type);
    document.addEventListener(this.pluginOptions.type, this.capturePattern, false);
  },
  /*
  	---------------------------------------- Capture Pattern
  	? Capture the Keys or Click Pattern
  */
  capturePattern(e) {
    console.log('%c%s', 'color: blue', '------------------------------- capturePattern', {
      e
    });
    console.log({
      $this
    });
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
    return false;
  },
  /*
  	---------------------------------------- Check Pattern
  	? Check the Keys or Click Pattern
  */
  checkPattern(e) {
    console.log('%c%s', 'color: #f0f', '------------------------------- checkPattern', this);
    console.log('%c%s', 'color: #f0f', 'easterEggsTriggerEggs, e', {
      easterEggsTriggerEggs,
      e
    });
    console.log('\n');
    Object.values(easterEggsTriggerEggs).forEach(egg => {
      console.log('%c%s', 'color: #f0f', 'egg, this.input', {
        egg
      }, this.input);

      // Check Keyboard Events //
      console.log('%c%s', 'color: #f0f', 'egg.pattern', egg.pattern);
      console.log('%c%s', 'color: #f0f', 'this.input', this.input);
      console.log('%c%s', 'color: #f0f', 'isEqual(egg.pattern, this.input)', (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(egg.pattern, this.input));
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(egg.pattern, this.input)) {
        // Check Targets if Mouse Events //
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)($this.mouseEvents, e.type)) {
          $this.hatched('hatched mouse event');
          // this.checkMouseTarget(e, egg);
          return false;
        }
        this.emitEvent(egg);
      }
      return false;
    });
    this.reset();
    return false;
  },
  /*
  	---------------------------------------- Check Target Element
  	? Checks the mouse event target
  */
  // checkMouseTarget(e, egg) {
  // 	console.log('checkTarget', { egg });
  // 	// // Get clean egg target //
  // 	// const node = egg.target;
  // 	// const id = egg.target.replace('#', '');
  // 	// const className = egg.target.replace('.', '');

  // 	// console.log({ className });

  // 	// // Reduce targets to unique values //
  // 	// const nodes = uniq(this.targets.nodes);
  // 	// const ids = uniq(this.targets.ids);
  // 	// const classNames = uniq(this.targets.classNames);

  // 	// console.log({ nodes, ids, classNames });

  // 	// // Targets array should reduce down to one value, and match the clean egg target //
  // 	// const nodeTargetsMatch = nodes.length === 1 && nodes[0] === node;
  // 	// const idTargetsMatch = ids.length === 1 && ids[0] === id;
  // 	// const classTargetsMatch = classNames.length === 1 && includes(classNames[0], className);

  // 	// console.log({ nodeTargetsMatch, idTargetsMatch, classTargetsMatch });

  // 	// if (nodeTargetsMatch || idTargetsMatch || classTargetsMatch) {
  // 	// 	this.emitEvent(egg);
  // 	// }

  // 	// // this.reset();
  // 	// $this.hatched('checkTarget');
  // },

  /*
  	---------------------------------------- Emit Event
  	? Emit Bus Event and/or Callback
  */
  // Emit Bus Event and/or Callback //
  emitEvent(egg) {
    console.log('%c%s', 'background-color: black; color: #0f0; padding: 5px;', '------------------------------- emitEvent', {
      egg
    });
    console.log('%c%s', 'background-color: black; color: #0f0; padding: 5px;', 'Object.keys(easterEggsTriggerEggs).length', Object.keys(easterEggsTriggerEggs).length);
    if (Object.keys(easterEggsTriggerEggs).length === 1) {
      document.removeEventListener(this.pluginOptions.type, this.capturePattern, false);
    } else {
      this.rebuild(egg);
    }
    if (egg.callback) {
      egg.callback(egg);
    }
    this.hatched(egg);
    return false;
  },
  /*
  	---------------------------------------- Rebuild
  	? Rebuild the easter egg
  */
  rebuild(usedEgg) {
    console.log('%c%s', 'background-color: black; color: red; padding: 5px;', '------------------------------- rebuild', {
      usedEgg
    });
    const currentEggs = easterEggsTriggerEggs;
    console.log('%c%s', 'background-color: black; color: red; padding: 5px;', 'currentEggs', {
      currentEggs
    });
    easterEggsTriggerEggs = [];

    // Remove usedEgg from easterEggsTriggerEggs  //
    const idx = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(currentEggs, egg => egg.name === usedEgg.name);
    console.log('%c%s', 'background-color: black; color: red; padding: 5px;', 'idx', {
      idx
    });
    currentEggs.splice(idx, 1);
    console.log('%c%s', 'background-color: black; color: red; padding: 5px;', 'currentEggs', {
      currentEggs
    });
    Object.values(currentEggs).forEach(egg => {
      this.layEggs(egg);
    });
    easterEggsTriggerEggs = currentEggs;
    console.log('%c%s', 'background-color: black; color: red; padding: 5px;', 'easterEggsTriggerEggs', {
      easterEggsTriggerEggs
    });
  },
  /*
  	---------------------------------------- Reset
  	? Reset the timeout and input pattern
  */
  // Reset //
  reset() {
    console.log('%c%s', 'background-color: black; color: orange; padding: 5px;', '------------------------------- reset');
    // Reset timeout and clear input keys //
    this.timeout = setTimeout(() => {
      console.log('%c%s', 'background-color: black; color: orange; padding: 5px;', 'reset timeout complete');
      clearTimeout(this.timeout);

      // Clean inputs and targets //
      this.input = [];
      this.targets = {
        nodes: [],
        ids: [],
        classNames: []
      };
    }, this.pluginOptions.delay);
  },
  /*
   ---------------------------------------- Hatch
  ? Easter Egg Hatched
  */
  hatched(egg) {
    console.log('%c%s', 'color: #0f0; background: #000; padding: 5px; font-size: 20px;', `HATCHED ${egg.name} 🥚`);
    console.groupEnd('EasterEggTriggerCore');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EasterEggTriggerCore);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "08fcdefc988921920fa9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9d81acba601e212eaee1.hot-update.js.map