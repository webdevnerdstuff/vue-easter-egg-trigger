import { defineComponent as D, inject as O, reactive as l, watchEffect as R, onMounted as S, ref as u } from "vue";
import { includes as m, isEqual as U, uniq as E } from "lodash";
/**
 * @name @wdns/vue-easter-egg-trigger
 * @version 3.0.2
 * @description Presenting the Vue Easter Egg Trigger, a tool that discreetly injects a touch of unexpectedness into Vue.js projects. This unassuming plugin, which operates on both keystrokes (with click events also available), brings hidden surprises to your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vue-easter-egg-trigger
 * @repository https://github.com/webdevnerdstuff/vue-easter-egg-trigger
 * @license MIT License
 */
const y = D({ __name: "VEasterEggTrigger", props: { callback: {}, destroy: { type: Boolean }, delay: { default: 500 }, pattern: { default: () => ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"] }, persist: { type: Boolean, default: !1 }, target: { default: "body" }, type: { default: "keydown" } }, emits: ["triggered"], setup(c, { emit: o }) {
  const N = o, g = c, v = O(L, {}), e = l({ ...g, ...v });
  R(() => {
    Object.assign(e, { ...g, ...v });
  });
  let d = l([]), r = null, s = setTimeout(() => {
  });
  const w = l(["click", "dblclick", "mouseup", "mousedown"]), a = l({ classNames: [], ids: [], nodes: [] });
  function p(t) {
    const i = u("");
    if (s !== null && clearTimeout(s), t.key !== void 0 && (i.value = t.key), m(w, t.type)) {
      const n = t.currentTarget;
      i.value = t.type, a.nodes.push(n.nodeName.toLowerCase()), a.ids.push(n.id), a.classNames.push(n.classList.value);
    }
    d.push(i.value), function(n) {
      if (U(e.pattern, d)) {
        if (m(w, n.type))
          return void function() {
            const f = e.target, V = f.replace("#", ""), q = f.replace(".", ""), T = E(a.nodes), k = E(a.ids), A = E(a.classNames), j = u(T.length === 1 && T[0] === f), B = u(k.length === 1 && k[0] === V), C = u(A.length === 1 && m(A[0], q));
            (j.value || B.value || C.value) && h(), b();
          }();
        h();
      }
      b();
    }(t);
  }
  function b() {
    s = setTimeout(() => {
      clearTimeout(s), d = [];
    }, Number(e.delay));
  }
  function h() {
    var t;
    e.callback && e.callback(e), N("triggered", g), e.persist || (t = p, r && r.removeEventListener(e.type, t, !0));
  }
  return S(() => {
    (function() {
      const t = e.type;
      if (r = document.querySelector(e.target), !r)
        throw new Error(`Element not found: ${e.target}`);
      if (e.target === "body")
        return void r.addEventListener(t, p, !0);
      r.addEventListener(t, p, !0);
    })();
  }), (t, i) => null;
} }), L = Symbol();
function M(c = {}) {
  return (o) => {
    o.provide(L, c), o.component("EasterEggTrigger", y), o.component("VEasterEggTrigger", y);
  };
}
const $ = y;
export {
  $ as EasterEggTrigger,
  y as VEasterEggTrigger,
  M as createVEasterEggTrigger,
  y as default,
  L as globalOptions
};
