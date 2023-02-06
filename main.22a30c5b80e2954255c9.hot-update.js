"use strict";
self["webpackHotUpdatevue_easter_egg_trigger"]("main",{

/***/ "../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/HelloWorld.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/HelloWorld.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EasterEgg_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasterEgg.vue */ "./components/EasterEgg.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HelloWorldComponent',
  components: {
    EasterEgg: _EasterEgg_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {},
  data: () => ({
    activeEasterEgg: null,
    callbackTriggeredClass: '',
    clickIdTriggered: false,
    clickClassTriggered: false,
    dblclickTriggered: false,
    konamiTriggeredClass: ''
  }),
  computed: {},
  watch: {},
  mounted() {
    this.$easterEgg({
      name: 'id-target',
      pattern: ['click'],
      type: 'click',
      target: '#id-target'
    });
    this.$easterEgg({
      name: 'class-target',
      pattern: ['click'],
      type: 'click',
      target: '.class-target'
    });
    this.$easterEgg({
      name: 'konami-code'
    });
  },
  methods: {
    closeEasterEgg() {
      this.activeEasterEgg = null;
    },
    triggered(el) {
      console.log({
        el
      });
      if (el === 'clicked-id') {
        this.clickIdTriggered = true;
      }
      if (el === 'clicked-class') {
        this.clickClassTriggered = true;
      }
      if (el === 'dblclick') {
        this.dblclickTriggered = true;
      }
      if (el === 'konami') {
        this.konamiTriggeredClass = 'active';
      }
      this.activeEasterEgg = _EasterEgg_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }
});

/***/ }),

/***/ "../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/vue-loader@15.10.1_y2a6iokolmfwbwiy3gvvnhgcle/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nh1[data-v-763db97b] {\n\tmargin-bottom: 10px;\n}\nh5[data-v-763db97b] {\n\tmargin: 0 0 20px 0;\n}\n.buttons[data-v-763db97b] {\n\talign-items: center;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n.btn[data-v-763db97b] {\n\tdisplay: block;\n\tmargin-bottom: 30px;\n}\n.callback-container[data-v-763db97b] {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 30px;\n\tposition: relative;\n}\n.callback-container .btn[data-v-763db97b] {\n\tmargin-bottom: 0;\n}\n.callback-triggered[data-v-763db97b] {\n\tbottom: -25px;\n\tfont-size: 0.8rem;\n\topacity: 0;\n\tposition: absolute;\n\ttransition: opacity 0.5s ease;\n}\n.callback-triggered.active[data-v-763db97b] {\n\topacity: 1;\n}\n.konami-container[data-v-763db97b] {\n\tcolor: #fff;\n}\n.konami-triggered[data-v-763db97b] {\n\topacity: 0;\n\ttransition: opacity 0.5s ease;\n}\n.konami-triggered.active[data-v-763db97b] {\n\topacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./../components/HelloWorld.vue"],"names":[],"mappings":";AA+IA;CACA,mBAAA;AACA;AAEA;CACA,kBAAA;AACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,sBAAA;AACA;AAEA;CACA,cAAA;CACA,mBAAA;AACA;AAEA;CACA,aAAA;CACA,uBAAA;CACA,mBAAA;CACA,kBAAA;AACA;AAEA;CACA,gBAAA;AACA;AAEA;CACA,aAAA;CACA,iBAAA;CACA,UAAA;CACA,kBAAA;CACA,6BAAA;AACA;AAEA;CACA,UAAA;AACA;AAEA;CACA,WAAA;AACA;AAEA;CACA,UAAA;CACA,6BAAA;AACA;AAEA;CACA,UAAA;AACA","sourcesContent":["<template>\n\t<div>\n\t\t<div>&nbsp;</div>\n\t\t<div>\n\t\t\t<header>\n\t\t\t\t<div>\n\t\t\t\t\t<svg\n\t\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\t\t\t\txmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t\t\t\t\t\taria-hidden=\"true\"\n\t\t\t\t\t\trole=\"img\"\n\t\t\t\t\t\tclass=\"iconify iconify--logos logo vue\"\n\t\t\t\t\t\twidth=\"37.07\"\n\t\t\t\t\t\theight=\"36\"\n\t\t\t\t\t\tpreserveAspectRatio=\"xMidYMid meet\"\n\t\t\t\t\t\tviewBox=\"0 0 256 198\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill=\"#41B883\"\n\t\t\t\t\t\t\td=\"M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z\"\n\t\t\t\t\t\t></path>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill=\"#41B883\"\n\t\t\t\t\t\t\td=\"m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z\"\n\t\t\t\t\t\t></path>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill=\"#35495E\"\n\t\t\t\t\t\t\td=\"M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z\"\n\t\t\t\t\t\t></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<h1>Vue 2 Easter Egg Trigger</h1>\n\t\t\t\t<a href=\"https://github.com/webdevnerdstuff/vue-easter-egg-trigger\">\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc=\"https://img.shields.io/github/package-json/v/webdevnerdstuff/vue-easter-egg-trigger\"\n\t\t\t\t\t/>\n\t\t\t\t</a>\n\t\t\t\t<h5>\n\t\t\t\t\tby <a href=\"https://github.com/webdevnerdstuff\">WebDevNerdStuff</a>\n\t\t\t\t</h5>\n\t\t\t</header>\n\n\t\t\t<div class=\"buttons\">\n\t\t\t\t<button id=\"id-target\" class=\"btn\" :disabled=\"clickIdTriggered\">\n\t\t\t\t\tClick Target Element by ID\n\t\t\t\t</button>\n\n\t\t\t\t<div class=\"callback-container\">\n\t\t\t\t\t<button class=\"btn class-target\" :disabled=\"clickClassTriggered\">\n\t\t\t\t\t\tClick Target Element by Class w/callback\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class=\"callback-triggered\" :class=\"callbackTriggeredClass\">\n\t\t\t\t\t\tCallback Triggered\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button class=\"btn double-click-target\" :disabled=\"dblclickTriggered\">\n\t\t\t\t\tDouble Click Target Element by Class\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class=\"konami-container\">\n\t\t\t\tKonami Code ↑ ↑ ↓ ↓ ← → ← → b a\n\t\t\t\t<div class=\"konami-triggered\" :class=\"konamiTriggeredClass\">\n\t\t\t\t\tKonami Code Triggered\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<footer>&copy; 2022 WebDevNerdStuff</footer>\n\n\t\t<EasterEggComponent :pattern=\"['ArrowLeft', 'ArrowLeft']\" />\n\n\t\t<component :is=\"activeEasterEgg\" @close-easter-egg=\"closeEasterEgg\" />\n\t</div>\n</template>\n\n<script>\nimport EasterEgg from './EasterEgg.vue';\n\nexport default {\n\tname: 'HelloWorldComponent',\n\tcomponents: {\n\t\tEasterEgg,\n\t},\n\tprops: {},\n\tdata: () => ({\n\t\tactiveEasterEgg: null,\n\t\tcallbackTriggeredClass: '',\n\t\tclickIdTriggered: false,\n\t\tclickClassTriggered: false,\n\t\tdblclickTriggered: false,\n\t\tkonamiTriggeredClass: '',\n\t}),\n\tcomputed: {},\n\twatch: {},\n\tmounted() {\n\t\tthis.$easterEgg({\n\t\t\tname: 'id-target',\n\t\t\tpattern: ['click'],\n\t\t\ttype: 'click',\n\t\t\ttarget: '#id-target',\n\t\t});\n\t\tthis.$easterEgg({\n\t\t\tname: 'class-target',\n\t\t\tpattern: ['click'],\n\t\t\ttype: 'click',\n\t\t\ttarget: '.class-target',\n\t\t});\n\t\tthis.$easterEgg({\n\t\t\tname: 'konami-code',\n\t\t});\n\t},\n\tmethods: {\n\t\tcloseEasterEgg() {\n\t\t\tthis.activeEasterEgg = null;\n\t\t},\n\t\ttriggered(el) {\n\t\t\tconsole.log({ el });\n\t\t\tif (el === 'clicked-id') {\n\t\t\t\tthis.clickIdTriggered = true;\n\t\t\t}\n\n\t\t\tif (el === 'clicked-class') {\n\t\t\t\tthis.clickClassTriggered = true;\n\t\t\t}\n\n\t\t\tif (el === 'dblclick') {\n\t\t\t\tthis.dblclickTriggered = true;\n\t\t\t}\n\n\t\t\tif (el === 'konami') {\n\t\t\t\tthis.konamiTriggeredClass = 'active';\n\t\t\t}\n\n\t\t\tthis.activeEasterEgg = EasterEgg;\n\t\t},\n\t},\n};\n</script>\n\n<style scoped>\nh1 {\n\tmargin-bottom: 10px;\n}\n\nh5 {\n\tmargin: 0 0 20px 0;\n}\n\n.buttons {\n\talign-items: center;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.btn {\n\tdisplay: block;\n\tmargin-bottom: 30px;\n}\n\n.callback-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 30px;\n\tposition: relative;\n}\n\n.callback-container .btn {\n\tmargin-bottom: 0;\n}\n\n.callback-triggered {\n\tbottom: -25px;\n\tfont-size: 0.8rem;\n\topacity: 0;\n\tposition: absolute;\n\ttransition: opacity 0.5s ease;\n}\n\n.callback-triggered.active {\n\topacity: 1;\n}\n\n.konami-container {\n\tcolor: #fff;\n}\n\n.konami-triggered {\n\topacity: 0;\n\ttransition: opacity 0.5s ease;\n}\n\n.konami-triggered.active {\n\topacity: 1;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "96718762e862cd5ecd7d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.22a30c5b80e2954255c9.hot-update.js.map