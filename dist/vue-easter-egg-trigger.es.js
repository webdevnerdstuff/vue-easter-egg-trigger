import { defineComponent as D, inject as O, reactive as l, watchEffect as R, onMounted as S, ref as u } from "vue";
import { includes as m, isEqual as U, uniq as E } from "lodash";
/**
 * @name @wdns/vue-easter-egg-trigger
 * @version 3.0.0
 * @description This packages makes it nice and easy to add Easter Egg triggers to your Vue site.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vue-easter-egg-trigger
 * @repository https://github.com/webdevnerdstuff/vue-easter-egg-trigger
 * @license MIT License
 */
const v = D({ __name: "VEasterEggTrigger", props: { callback: {}, destroy: { type: Boolean }, delay: { default: 500 }, pattern: { default: () => ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"] }, persist: { type: Boolean, default: !1 }, target: { default: "body" }, type: { default: "keydown" } }, emits: ["triggered"], setup(c, { emit: a }) {
  const N = a, g = c, y = O(L, {}), e = l({ ...g, ...y });
  R(() => {
    Object.assign(e, { ...g, ...y });
  });
  let d = l([]), r = null, s = setTimeout(() => {
  });
  const w = l(["click", "dblclick", "mouseup", "mousedown"]), o = l({ classNames: [], ids: [], nodes: [] });
  function p(t) {
    const i = u("");
    if (s !== null && clearTimeout(s), t.key !== void 0 && (i.value = t.key), m(w, t.type)) {
      const n = t.currentTarget;
      i.value = t.type, o.nodes.push(n.nodeName.toLowerCase()), o.ids.push(n.id), o.classNames.push(n.classList.value);
    }
    d.push(i.value), function(n) {
      if (U(e.pattern, d))
        return m(w, n.type) ? void function() {
          const f = e.target, V = f.replace("#", ""), q = f.replace(".", ""), T = E(o.nodes), k = E(o.ids), A = E(o.classNames), j = u(T.length === 1 && T[0] === f), B = u(k.length === 1 && k[0] === V), C = u(A.length === 1 && m(A[0], q));
          (j.value || B.value || C.value) && h(), b();
        }() : void h();
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
  return (a) => {
    a.provide(L, c), a.component("EasterEggTrigger", v), a.component("VEasterEggTrigger", v);
  };
}
const $ = v;
export {
  $ as EasterEggTrigger,
  v as VEasterEggTrigger,
  M as createVEasterEggTrigger,
  v as default,
  L as globalOptions
};
