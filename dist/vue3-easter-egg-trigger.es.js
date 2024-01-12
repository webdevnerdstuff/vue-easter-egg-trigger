import { includes as $e, isEqual as lt, uniq as Re, findIndex as ut } from "lodash";
/**
 * @name vue3-easter-egg-trigger
 * @version 1.0.2
 * @description This packages makes it nice and easy to add Easter Egg triggers to your Vue3 site.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vue3-easter-egg-trigger
 * @repository https://github.com/webdevnerdstuff/vue3-easter-egg-trigger
 * @license MIT License
 */
function pt(e, n) {
  const t = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    t[r[o]] = !0;
  return n ? (o) => !!t[o.toLowerCase()] : (o) => !!t[o];
}
const A = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV === "production" || Object.freeze([]);
const $n = () => {
}, dt = /^on[^a-z]/, ft = (e) => dt.test(e), D = Object.assign, ht = (e, n) => {
  const t = e.indexOf(n);
  t > -1 && e.splice(t, 1);
}, vt = Object.prototype.hasOwnProperty, E = (e, n) => vt.call(e, n), y = Array.isArray, ne = (e) => Se(e) === "[object Map]", gt = (e) => Se(e) === "[object Set]", N = (e) => typeof e == "function", C = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", x = (e) => e !== null && typeof e == "object", _t = (e) => x(e) && N(e.then) && N(e.catch), yt = Object.prototype.toString, Se = (e) => yt.call(e), Rn = (e) => Se(e).slice(8, -1), mt = (e) => Se(e) === "[object Object]", Je = (e) => C(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wt = ((e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => n[t] || (n[t] = e(t));
})((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = (e, n) => !Object.is(e, n), Et = (e, n, t) => {
  Object.defineProperty(e, n, { configurable: !0, enumerable: !1, value: t });
};
let an;
const Te = () => an || (an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ke(e) {
  if (y(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
      const r = e[t], o = C(r) ? kt(r) : Ke(r);
      if (o)
        for (const s in o)
          n[s] = o[s];
    }
    return n;
  }
  return C(e) || x(e) ? e : void 0;
}
const Nt = /;(?![^(]*\))/g, bt = /:([^]+)/, Ot = /\/\*[^]*?\*\//g;
function kt(e) {
  const n = {};
  return e.replace(Ot, "").split(Nt).forEach((t) => {
    if (t) {
      const r = t.split(bt);
      r.length > 1 && (n[r[0].trim()] = r[1].trim());
    }
  }), n;
}
function Be(e) {
  let n = "";
  if (C(e))
    n = e;
  else if (y(e))
    for (let t = 0; t < e.length; t++) {
      const r = Be(e[t]);
      r && (n += r + " ");
    }
  else if (x(e))
    for (const t in e)
      e[t] && (n += t + " ");
  return n.trim();
}
function ln(e, ...n) {
  console.warn(`[Vue warn] ${e}`, ...n);
}
let Cn;
const le = (e) => {
  const n = new Set(e);
  return n.w = 0, n.n = 0, n;
}, jn = (e) => (e.w & M) > 0, An = (e) => (e.n & M) > 0, Fe = /* @__PURE__ */ new WeakMap();
let ce = 0, M = 1;
const Me = 30;
let O;
const K = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ie = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Vt {
  constructor(n, t = null, r) {
    this.fn = n, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, function(o, s = Cn) {
      s && s.active && s.effects.push(o);
    }(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let n = O, t = z;
    for (; n; ) {
      if (n === this)
        return;
      n = n.parent;
    }
    try {
      return this.parent = O, O = this, z = !0, M = 1 << ++ce, ce <= Me ? (({ deps: r }) => {
        if (r.length)
          for (let o = 0; o < r.length; o++)
            r[o].w |= M;
      })(this) : un(this), this.fn();
    } finally {
      ce <= Me && ((r) => {
        const { deps: o } = r;
        if (o.length) {
          let s = 0;
          for (let c = 0; c < o.length; c++) {
            const a = o[c];
            jn(a) && !An(a) ? a.delete(r) : o[s++] = a, a.w &= ~M, a.n &= ~M;
          }
          o.length = s;
        }
      })(this), M = 1 << --ce, O = this.parent, z = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    O === this ? this.deferStop = !0 : this.active && (un(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function un(e) {
  const { deps: n } = e;
  if (n.length) {
    for (let t = 0; t < n.length; t++)
      n[t].delete(e);
    n.length = 0;
  }
}
let z = !0;
const Pn = [];
function Tn() {
  Pn.push(z), z = !1;
}
function Fn() {
  const e = Pn.pop();
  z = e === void 0 || e;
}
function S(e, n, t) {
  if (z && O) {
    let r = Fe.get(e);
    r || Fe.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(t);
    o || r.set(t, o = le()), Ue(o, process.env.NODE_ENV !== "production" ? { effect: O, target: e, type: n, key: t } : void 0);
  }
}
function Ue(e, n) {
  let t = !1;
  ce <= Me ? An(e) || (e.n |= M, t = !jn(e)) : t = !e.has(O), t && (e.add(O), O.deps.push(e), process.env.NODE_ENV !== "production" && O.onTrack && O.onTrack(D({ effect: O }, n)));
}
function L(e, n, t, r, o, s) {
  const c = Fe.get(e);
  if (!c)
    return;
  let a = [];
  if (n === "clear")
    a = [...c.values()];
  else if (t === "length" && y(e)) {
    const l = Number(r);
    c.forEach((u, i) => {
      (i === "length" || i >= l) && a.push(u);
    });
  } else
    switch (t !== void 0 && a.push(c.get(t)), n) {
      case "add":
        y(e) ? Je(t) && a.push(c.get("length")) : (a.push(c.get(K)), ne(e) && a.push(c.get(Ie)));
        break;
      case "delete":
        y(e) || (a.push(c.get(K)), ne(e) && a.push(c.get(Ie)));
        break;
      case "set":
        ne(e) && a.push(c.get(K));
    }
  const p = process.env.NODE_ENV !== "production" ? { target: e, type: n, key: t, newValue: r, oldValue: o, oldTarget: s } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? Y(a[0], p) : Y(a[0]));
  else {
    const l = [];
    for (const u of a)
      u && l.push(...u);
    process.env.NODE_ENV !== "production" ? Y(le(l), p) : Y(le(l));
  }
}
function Y(e, n) {
  const t = y(e) ? e : [...e];
  for (const r of t)
    r.computed && pn(r, n);
  for (const r of t)
    r.computed || pn(r, n);
}
function pn(e, n) {
  (e !== O || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(D({ effect: e }, n)), e.scheduler ? e.scheduler() : e.run());
}
const xt = pt("__proto__,__v_isRef,__isVue"), Mn = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)), St = Ge(), Dt = Ge(!0), $t = Ge(!0, !0), dn = Rt();
function Rt() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((n) => {
    e[n] = function(...t) {
      const r = v(this);
      for (let s = 0, c = this.length; s < c; s++)
        S(r, "get", s + "");
      const o = r[n](...t);
      return o === -1 || o === !1 ? r[n](...t.map(v)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((n) => {
    e[n] = function(...t) {
      Tn();
      const r = v(this)[n].apply(this, t);
      return Fn(), r;
    };
  }), e;
}
function Ct(e) {
  const n = v(this);
  return S(n, "has", e), n.hasOwnProperty(e);
}
function Ge(e = !1, n = !1) {
  return function(t, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return n;
    if (r === "__v_raw" && o === (e ? n ? Hn : Ln : n ? Wt : zn).get(t))
      return t;
    const s = y(t);
    if (!e) {
      if (s && E(dn, r))
        return Reflect.get(dn, r, o);
      if (r === "hasOwnProperty")
        return Ct;
    }
    const c = Reflect.get(t, r, o);
    return (qe(r) ? Mn.has(r) : xt(r)) ? c : (e || S(t, "get", r), n ? c : V(c) ? s && Je(r) ? c : c.value : x(c) ? e ? Wn(c) : q(c) : c);
  };
}
function jt(e = !1) {
  return function(n, t, r, o) {
    let s = n[t];
    if (H(s) && V(s) && !V(r))
      return !1;
    if (!e && (Oe(r) || H(r) || (s = v(s), r = v(r)), !y(n) && V(s) && !V(r)))
      return s.value = r, !0;
    const c = y(n) && Je(t) ? Number(t) < n.length : E(n, t), a = Reflect.set(n, t, r, o);
    return n === v(o) && (c ? ae(r, s) && L(n, "set", t, r, s) : L(n, "add", t, r)), a;
  };
}
const At = { get: St, set: jt(), deleteProperty: function(e, n) {
  const t = E(e, n), r = e[n], o = Reflect.deleteProperty(e, n);
  return o && t && L(e, "delete", n, void 0, r), o;
}, has: function(e, n) {
  const t = Reflect.has(e, n);
  return qe(n) && Mn.has(n) || S(e, "has", n), t;
}, ownKeys: function(e) {
  return S(e, "iterate", y(e) ? "length" : K), Reflect.ownKeys(e);
} }, In = { get: Dt, set: (e, n) => (process.env.NODE_ENV !== "production" && ln(`Set operation on key "${String(n)}" failed: target is readonly.`, e), !0), deleteProperty: (e, n) => (process.env.NODE_ENV !== "production" && ln(`Delete operation on key "${String(n)}" failed: target is readonly.`, e), !0) }, Pt = D({}, In, { get: $t }), Qe = (e) => e, De = (e) => Reflect.getPrototypeOf(e);
function fe(e, n, t = !1, r = !1) {
  const o = v(e = e.__v_raw), s = v(n);
  t || (n !== s && S(o, "get", n), S(o, "get", s));
  const { has: c } = De(o), a = r ? Qe : t ? Ze : ue;
  return c.call(o, n) ? a(e.get(n)) : c.call(o, s) ? a(e.get(s)) : void (e !== o && e.get(n));
}
function he(e, n = !1) {
  const t = this.__v_raw, r = v(t), o = v(e);
  return n || (e !== o && S(r, "has", e), S(r, "has", o)), e === o ? t.has(e) : t.has(e) || t.has(o);
}
function ve(e, n = !1) {
  return e = e.__v_raw, !n && S(v(e), "iterate", K), Reflect.get(e, "size", e);
}
function fn(e) {
  e = v(e);
  const n = v(this);
  return De(n).has.call(n, e) || (n.add(e), L(n, "add", e, e)), this;
}
function hn(e, n) {
  n = v(n);
  const t = v(this), { has: r, get: o } = De(t);
  let s = r.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Un(t, r, e) : (e = v(e), s = r.call(t, e));
  const c = o.call(t, e);
  return t.set(e, n), s ? ae(n, c) && L(t, "set", e, n, c) : L(t, "add", e, n), this;
}
function vn(e) {
  const n = v(this), { has: t, get: r } = De(n);
  let o = t.call(n, e);
  o ? process.env.NODE_ENV !== "production" && Un(n, t, e) : (e = v(e), o = t.call(n, e));
  const s = r ? r.call(n, e) : void 0, c = n.delete(e);
  return o && L(n, "delete", e, void 0, s), c;
}
function gn() {
  const e = v(this), n = e.size !== 0, t = process.env.NODE_ENV !== "production" ? ne(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return n && L(e, "clear", void 0, void 0, t), r;
}
function ge(e, n) {
  return function(t, r) {
    const o = this, s = o.__v_raw, c = v(s), a = n ? Qe : e ? Ze : ue;
    return !e && S(c, "iterate", K), s.forEach((p, l) => t.call(r, a(p), a(l), o));
  };
}
function _e(e, n, t) {
  return function(...r) {
    const o = this.__v_raw, s = v(o), c = ne(s), a = e === "entries" || e === Symbol.iterator && c, p = e === "keys" && c, l = o[e](...r), u = t ? Qe : n ? Ze : ue;
    return !n && S(s, "iterate", p ? Ie : K), { next() {
      const { value: i, done: d } = l.next();
      return d ? { value: i, done: d } : { value: a ? [u(i[0]), u(i[1])] : u(i), done: d };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function T(e) {
  return function(...n) {
    if (process.env.NODE_ENV !== "production") {
      const t = n[0] ? `on key "${n[0]}" ` : "";
      console.warn(`${wt(e)} operation ${t}failed: target is readonly.`, v(this));
    }
    return e !== "delete" && this;
  };
}
function Tt() {
  const e = { get(o) {
    return fe(this, o);
  }, get size() {
    return ve(this);
  }, has: he, add: fn, set: hn, delete: vn, clear: gn, forEach: ge(!1, !1) }, n = { get(o) {
    return fe(this, o, !1, !0);
  }, get size() {
    return ve(this);
  }, has: he, add: fn, set: hn, delete: vn, clear: gn, forEach: ge(!1, !0) }, t = { get(o) {
    return fe(this, o, !0);
  }, get size() {
    return ve(this, !0);
  }, has(o) {
    return he.call(this, o, !0);
  }, add: T("add"), set: T("set"), delete: T("delete"), clear: T("clear"), forEach: ge(!0, !1) }, r = { get(o) {
    return fe(this, o, !0, !0);
  }, get size() {
    return ve(this, !0);
  }, has(o) {
    return he.call(this, o, !0);
  }, add: T("add"), set: T("set"), delete: T("delete"), clear: T("clear"), forEach: ge(!0, !0) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = _e(o, !1, !1), t[o] = _e(o, !0, !1), n[o] = _e(o, !1, !0), r[o] = _e(o, !0, !0);
  }), [e, t, n, r];
}
const [Ft, Mt, It, Ut] = Tt();
function Xe(e, n) {
  const t = n ? e ? Ut : It : e ? Mt : Ft;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(E(t, o) && o in r ? t : r, o, s);
}
const zt = { get: Xe(!1, !1) }, Lt = { get: Xe(!0, !1) }, Ht = { get: Xe(!0, !0) };
function Un(e, n, t) {
  const r = v(t);
  if (r !== t && n.call(e, r)) {
    const o = Rn(e);
    console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const zn = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap();
function q(e) {
  return H(e) ? e : Ye(e, !1, At, zt, zn);
}
function Wn(e) {
  return Ye(e, !0, In, Lt, Ln);
}
function ye(e) {
  return Ye(e, !0, Pt, Ht, Hn);
}
function Ye(e, n, t, r, o) {
  if (!x(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && (!n || !e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const c = (a = e).__v_skip || !Object.isExtensible(a) ? 0 : function(l) {
    switch (l) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(Rn(a));
  var a;
  if (c === 0)
    return e;
  const p = new Proxy(e, c === 2 ? r : t);
  return o.set(e, p), p;
}
function B(e) {
  return H(e) ? B(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function H(e) {
  return !(!e || !e.__v_isReadonly);
}
function Oe(e) {
  return !(!e || !e.__v_isShallow);
}
function Ce(e) {
  return B(e) || H(e);
}
function v(e) {
  const n = e && e.__v_raw;
  return n ? v(n) : e;
}
const ue = (e) => x(e) ? q(e) : e, Ze = (e) => x(e) ? Wn(e) : e;
function V(e) {
  return !(!e || e.__v_isRef !== !0);
}
function me(e) {
  return function(n, t) {
    return V(n) ? n : new qt(n, t);
  }(e, !1);
}
class qt {
  constructor(n, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? n : v(n), this._value = t ? n : ue(n);
  }
  get value() {
    var n;
    return n = this, z && O && (n = v(n), process.env.NODE_ENV !== "production" ? Ue(n.dep || (n.dep = le()), { target: n, type: "get", key: "value" }) : Ue(n.dep || (n.dep = le()))), this._value;
  }
  set value(n) {
    const t = this.__v_isShallow || Oe(n) || H(n);
    n = t ? n : v(n), ae(n, this._rawValue) && (this._rawValue = n, this._value = t ? n : ue(n), function(r, o) {
      const s = (r = v(r)).dep;
      s && (process.env.NODE_ENV !== "production" ? Y(s, { target: r, type: "set", key: "value", newValue: o }) : Y(s));
    }(this, n));
  }
}
const Jt = { get: (e, n, t) => {
  return V(r = Reflect.get(e, n, t)) ? r.value : r;
  var r;
}, set: (e, n, t, r) => {
  const o = e[n];
  return V(o) && !V(t) ? (o.value = t, !0) : Reflect.set(e, n, t, r);
} }, J = [];
function k(e, ...n) {
  if (process.env.NODE_ENV === "production")
    return;
  Tn();
  const t = J.length ? J[J.length - 1].component : null, r = t && t.appContext.config.warnHandler, o = function() {
    let s = J[J.length - 1];
    if (!s)
      return [];
    const c = [];
    for (; s; ) {
      const a = c[0];
      a && a.vnode === s ? a.recurseCount++ : c.push({ vnode: s, recurseCount: 0 });
      const p = s.component && s.component.parent;
      s = p && p.vnode;
    }
    return c;
  }();
  if (r)
    G(r, t, 11, [e + n.join(""), t && t.proxy, o.map(({ vnode: s }) => `at <${Sn(t, s.type)}>`).join(`
`), o]);
  else {
    const s = [`[Vue warn]: ${e}`, ...n];
    o.length && s.push(`
`, ...function(c) {
      const a = [];
      return c.forEach((p, l) => {
        a.push(...l === 0 ? [] : [`
`], ...function({ vnode: u, recurseCount: i }) {
          const d = i > 0 ? `... (${i} recursive calls)` : "", f = !!u.component && u.component.parent == null, _ = ` at <${Sn(u.component, u.type, f)}`, m = ">" + d;
          return u.props ? [_, ...Kt(u.props), m] : [_ + m];
        }(p));
      }), a;
    }(o)), console.warn(...s);
  }
  Fn();
}
function Kt(e) {
  const n = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((r) => {
    n.push(...qn(r, e[r]));
  }), t.length > 3 && n.push(" ..."), n;
}
function qn(e, n, t) {
  return C(n) ? (n = JSON.stringify(n), t ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? t ? n : [`${e}=${n}`] : V(n) ? (n = qn(e, v(n.value), !0), t ? n : [`${e}=Ref<`, n, ">"]) : N(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = v(n), t ? n : [`${e}=`, n]);
}
const _n = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core" };
function G(e, n, t, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Jn(s, n, t);
  }
  return o;
}
function ze(e, n, t, r) {
  if (N(e)) {
    const s = G(e, n, t, r);
    return s && _t(s) && s.catch((c) => {
      Jn(c, n, t);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push(ze(e[s], n, t, r));
  return o;
}
function Jn(e, n, t, r = !0) {
  const o = n ? n.vnode : null;
  if (n) {
    let s = n.parent;
    const c = n.proxy, a = process.env.NODE_ENV !== "production" ? _n[t] : t;
    for (; s; ) {
      const l = s.ec;
      if (l) {
        for (let u = 0; u < l.length; u++)
          if (l[u](e, c, a) === !1)
            return;
      }
      s = s.parent;
    }
    const p = n.appContext.config.errorHandler;
    if (p)
      return void G(p, null, 10, [e, c, a]);
  }
  (function(s, c, a, p = !0) {
    if (process.env.NODE_ENV !== "production") {
      const u = _n[c];
      if (a && (l = a, J.push(l)), k("Unhandled error" + (u ? ` during execution of ${u}` : "")), a && J.pop(), p)
        throw s;
      console.error(s);
    } else
      console.error(s);
    var l;
  })(e, t, o, r);
}
let ke = !1, Le = !1;
const R = [];
let I = 0;
const Z = [];
let j = null, F = 0;
const Kn = Promise.resolve();
let en = null;
const Bt = 100;
function Gt(e) {
  const n = en || Kn;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function nn(e) {
  R.length && R.includes(e, ke && e.allowRecurse ? I + 1 : I) || (e.id == null ? R.push(e) : R.splice(function(n) {
    let t = I + 1, r = R.length;
    for (; t < r; ) {
      const o = t + r >>> 1;
      pe(R[o]) < n ? t = o + 1 : r = o;
    }
    return t;
  }(e.id), 0, e), Bn());
}
function Bn() {
  ke || Le || (Le = !0, en = Kn.then(Qn));
}
function Gn(e) {
  y(e) ? Z.push(...e) : j && j.includes(e, e.allowRecurse ? F + 1 : F) || Z.push(e), Bn();
}
const pe = (e) => e.id == null ? 1 / 0 : e.id, Qt = (e, n) => {
  const t = pe(e) - pe(n);
  if (t === 0) {
    if (e.pre && !n.pre)
      return -1;
    if (n.pre && !e.pre)
      return 1;
  }
  return t;
};
function Qn(e) {
  Le = !1, ke = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), R.sort(Qt);
  const n = process.env.NODE_ENV !== "production" ? (t) => yn(e, t) : $n;
  try {
    for (I = 0; I < R.length; I++) {
      const t = R[I];
      if (t && t.active !== !1) {
        if (process.env.NODE_ENV !== "production" && n(t))
          continue;
        G(t, null, 14);
      }
    }
  } finally {
    I = 0, R.length = 0, function(t) {
      if (Z.length) {
        const r = [...new Set(Z)];
        if (Z.length = 0, j)
          return void j.push(...r);
        for (j = r, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), j.sort((o, s) => pe(o) - pe(s)), F = 0; F < j.length; F++)
          process.env.NODE_ENV !== "production" && yn(t, j[F]) || j[F]();
        j = null, F = 0;
      }
    }(e), ke = !1, en = null, (R.length || Z.length) && Qn(e);
  }
}
function yn(e, n) {
  if (e.has(n)) {
    const t = e.get(n);
    if (t > Bt) {
      const r = n.ownerInstance, o = r && nt(r.type);
      return k(`Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    }
    e.set(n, t + 1);
  } else
    e.set(n, 1);
}
const oe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Te().__VUE_HMR_RUNTIME__ = { createRecord: je(function(e, n) {
  return we.has(e) ? !1 : (we.set(e, { initialDef: re(n), instances: /* @__PURE__ */ new Set() }), !0);
}), rerender: je(function(e, n) {
  const t = we.get(e);
  t && (t.initialDef.render = n, [...t.instances].forEach((r) => {
    n && (r.render = n, re(r.type).render = n), r.renderCache = [], r.update();
  }));
}), reload: je(function(e, n) {
  const t = we.get(e);
  if (!t)
    return;
  n = re(n), mn(t.initialDef, n);
  const r = [...t.instances];
  for (const o of r) {
    const s = re(o.type);
    oe.has(s) || (s !== t.initialDef && mn(s, n), oe.add(s)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (oe.add(s), o.ceReload(n.styles), oe.delete(s)) : o.parent ? nn(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Gn(() => {
    for (const o of r)
      oe.delete(re(o.type));
  });
}) });
const we = /* @__PURE__ */ new Map();
function re(e) {
  return tt(e) ? e.__vccOpts : e;
}
function mn(e, n) {
  D(e, n);
  for (const t in e)
    t === "__file" || t in n || delete e[t];
}
function je(e) {
  return (n, t) => {
    try {
      return e(n, t);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let U = null, Xt = null;
const Ee = {};
function Yt(e, n, { immediate: t, deep: r, flush: o, onTrack: s, onTrigger: c } = A) {
  var a;
  process.env.NODE_ENV === "production" || n || (t !== void 0 && k('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && k('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const p = (h) => {
    k("Invalid watch source: ", h, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = Cn === ((a = te) == null ? void 0 : a.scope) ? te : null;
  let u, i, d = !1, f = !1;
  if (V(e) ? (u = () => e.value, d = Oe(e)) : B(e) ? (u = () => e, r = !0) : y(e) ? (f = !0, d = e.some((h) => B(h) || Oe(h)), u = () => e.map((h) => V(h) ? h.value : B(h) ? ee(h) : N(h) ? G(h, l, 2) : void (process.env.NODE_ENV !== "production" && p(h)))) : N(e) ? u = n ? () => G(e, l, 2) : () => {
    if (!l || !l.isUnmounted)
      return i && i(), ze(e, l, 3, [_]);
  } : (u = $n, process.env.NODE_ENV !== "production" && p(e)), n && r) {
    const h = u;
    u = () => ee(h());
  }
  let _ = (h) => {
    i = g.onStop = () => {
      G(h, l, 4);
    };
  }, m = f ? new Array(e.length).fill(Ee) : Ee;
  const w = () => {
    if (g.active)
      if (n) {
        const h = g.run();
        (r || d || (f ? h.some(($, P) => ae($, m[P])) : ae(h, m))) && (i && i(), ze(n, l, 3, [h, m === Ee ? void 0 : f && m[0] === Ee ? [] : m, _]), m = h);
      } else
        g.run();
  };
  let W;
  w.allowRecurse = !!n, o === "sync" ? W = w : o === "post" ? W = () => On(w, l && l.suspense) : (w.pre = !0, l && (w.id = l.uid), W = () => nn(w));
  const g = new Vt(u, W);
  return process.env.NODE_ENV !== "production" && (g.onTrack = s, g.onTrigger = c), n ? t ? w() : m = g.run() : o === "post" ? On(g.run.bind(g), l && l.suspense) : g.run(), () => {
    g.stop(), l && l.scope && ht(l.scope.effects, g);
  };
}
function Zt(e, n, t) {
  const r = this.proxy, o = C(e) ? e.includes(".") ? function(p, l) {
    const u = l.split(".");
    return () => {
      let i = p;
      for (let d = 0; d < u.length && i; d++)
        i = i[u[d]];
      return i;
    };
  }(r, e) : () => r[e] : e.bind(r, r);
  let s;
  N(n) ? s = n : (s = n.handler, t = n);
  const c = te;
  xn(this);
  const a = Yt(o, s.bind(r), t);
  return c ? xn(c) : io(), a;
}
function ee(e, n) {
  if (!x(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set()).has(e))
    return e;
  if (n.add(e), V(e))
    ee(e.value, n);
  else if (y(e))
    for (let t = 0; t < e.length; t++)
      ee(e[t], n);
  else if (gt(e) || ne(e))
    e.forEach((t) => {
      ee(t, n);
    });
  else if (mt(e))
    for (const t in e)
      ee(e[t], n);
  return e;
}
const eo = Symbol.for("v-ndc"), He = (e) => e ? 4 & e.vnode.shapeFlag ? function(n) {
  if (n.exposed)
    return n.exposeProxy || (n.exposeProxy = new Proxy((r = n.exposed, Et(r, "__v_skip", !0), B(t = r) ? t : new Proxy(t, Jt)), { get: (o, s) => s in o ? o[s] : s in ie ? ie[s](n) : void 0, has: (o, s) => s in o || s in ie }));
  var t, r;
}(e) || e.proxy : He(e.parent) : null, ie = D(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => process.env.NODE_ENV !== "production" ? ye(e.props) : e.props, $attrs: (e) => process.env.NODE_ENV !== "production" ? ye(e.attrs) : e.attrs, $slots: (e) => process.env.NODE_ENV !== "production" ? ye(e.slots) : e.slots, $refs: (e) => process.env.NODE_ENV !== "production" ? ye(e.refs) : e.refs, $parent: (e) => He(e.parent), $root: (e) => He(e.root), $emit: (e) => e.emit, $options: (e) => function(n) {
  const t = n.type, { mixins: r, extends: o } = t, { mixins: s, optionsCache: c, config: { optionMergeStrategies: a } } = n.appContext, p = c.get(t);
  let l;
  return p ? l = p : s.length || r || o ? (l = {}, s.length && s.forEach((u) => Ve(l, u, a, !0)), Ve(l, t, a)) : l = t, x(t) && c.set(t, l), l;
}(e), $forceUpdate: (e) => e.f || (e.f = () => nn(e.update)), $nextTick: (e) => e.n || (e.n = Gt.bind(e.proxy)), $watch: (e) => Zt.bind(e) }), Ae = (e, n) => e !== A && !e.__isScriptSetup && E(e, n), no = { get({ _: e }, n) {
  const { ctx: t, setupState: r, data: o, props: s, accessCache: c, type: a, appContext: p } = e;
  if (process.env.NODE_ENV !== "production" && n === "__isVue")
    return !0;
  let l;
  if (n[0] !== "$") {
    const f = c[n];
    if (f !== void 0)
      switch (f) {
        case 1:
          return r[n];
        case 2:
          return o[n];
        case 4:
          return t[n];
        case 3:
          return s[n];
      }
    else {
      if (Ae(r, n))
        return c[n] = 1, r[n];
      if (o !== A && E(o, n))
        return c[n] = 2, o[n];
      if ((l = e.propsOptions[0]) && E(l, n))
        return c[n] = 3, s[n];
      if (t !== A && E(t, n))
        return c[n] = 4, t[n];
      c[n] = 0;
    }
  }
  const u = ie[n];
  let i, d;
  return u ? (n === "$attrs" ? (S(e, "get", n), process.env.NODE_ENV) : process.env.NODE_ENV !== "production" && n === "$slots" && S(e, "get", n), u(e)) : (i = a.__cssModules) && (i = i[n]) ? i : t !== A && E(t, n) ? (c[n] = 4, t[n]) : (d = p.config.globalProperties, E(d, n) ? d[n] : void (process.env.NODE_ENV === "production" || !U || C(n) && n.indexOf("__v") === 0 || (o !== A && ((f) => f === "_" || f === "$")(n[0]) && E(o, n) ? k(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === U && k(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))));
}, set({ _: e }, n, t) {
  const { data: r, setupState: o, ctx: s } = e;
  return Ae(o, n) ? (o[n] = t, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && E(o, n) ? (k(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : r !== A && E(r, n) ? (r[n] = t, !0) : E(e.props, n) ? (process.env.NODE_ENV !== "production" && k(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && k(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && n in e.appContext.config.globalProperties ? Object.defineProperty(s, n, { enumerable: !0, configurable: !0, value: t }) : s[n] = t, !0);
}, has({ _: { data: e, setupState: n, accessCache: t, ctx: r, appContext: o, propsOptions: s } }, c) {
  let a;
  return !!t[c] || e !== A && E(e, c) || Ae(n, c) || (a = s[0]) && E(a, c) || E(r, c) || E(ie, c) || E(o.config.globalProperties, c);
}, defineProperty(e, n, t) {
  return t.get != null ? e._.accessCache[n] = 0 : E(t, "value") && this.set(e, n, t.value, null), Reflect.defineProperty(e, n, t);
} };
function wn(e) {
  return y(e) ? e.reduce((n, t) => (n[t] = null, n), {}) : e;
}
function Ve(e, n, t, r = !1) {
  const { mixins: o, extends: s } = n;
  s && Ve(e, s, t, !0), o && o.forEach((c) => Ve(e, c, t, !0));
  for (const c in n)
    if (r && c === "expose")
      process.env.NODE_ENV !== "production" && k('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const a = to[c] || t && t[c];
      e[c] = a ? a(e[c], n[c]) : n[c];
    }
  return e;
}
process.env.NODE_ENV !== "production" && (no.ownKeys = (e) => (k("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
const to = { data: En, props: bn, emits: bn, methods: se, computed: se, beforeCreate: b, created: b, beforeMount: b, mounted: b, beforeUpdate: b, updated: b, beforeDestroy: b, beforeUnmount: b, destroyed: b, unmounted: b, activated: b, deactivated: b, errorCaptured: b, serverPrefetch: b, components: se, directives: se, watch: function(e, n) {
  if (!e)
    return n;
  if (!n)
    return e;
  const t = D(/* @__PURE__ */ Object.create(null), e);
  for (const r in n)
    t[r] = b(e[r], n[r]);
  return t;
}, provide: En, inject: function(e, n) {
  return se(Nn(e), Nn(n));
} };
function En(e, n) {
  return n ? e ? function() {
    return D(N(e) ? e.call(this, this) : e, N(n) ? n.call(this, this) : n);
  } : n : e;
}
function Nn(e) {
  if (y(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++)
      n[e[t]] = e[t];
    return n;
  }
  return e;
}
function b(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function se(e, n) {
  return e ? D(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function bn(e, n) {
  return e ? y(e) && y(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : D(/* @__PURE__ */ Object.create(null), wn(e), wn(n ?? {})) : n;
}
const On = function(e, n) {
  n && n.pendingBranch ? y(e) ? n.effects.push(...e) : n.effects.push(e) : Gn(e);
}, Xn = Symbol.for("v-fgt"), oo = Symbol.for("v-txt"), ro = Symbol.for("v-cmt");
let Q = null;
const Yn = "__vInternal", Zn = ({ key: e }) => e ?? null, be = ({ ref: e, ref_key: n, ref_for: t }) => (typeof e == "number" && (e = "" + e), e != null ? C(e) || V(e) || N(e) ? { i: U, r: e, k: n, f: !!t } : e : null), so = process.env.NODE_ENV !== "production" ? (...e) => kn(...e) : kn;
function kn(e, n = null, t = null, r = 0, o = null, s = !1) {
  if (e && e !== eo || (process.env.NODE_ENV === "production" || e || k(`Invalid vnode type when creating vnode: ${e}.`), e = ro), (c = e) && c.__v_isVNode === !0) {
    const p = xe(e, n, !0);
    return t && We(p, t), !s && Q && (6 & p.shapeFlag ? Q[Q.indexOf(e)] = p : Q.push(p)), p.patchFlag |= -2, p;
  }
  var c;
  if (tt(e) && (e = e.__vccOpts), n) {
    n = function(u) {
      return u ? Ce(u) || Yn in u ? D({}, u) : u : null;
    }(n);
    let { class: p, style: l } = n;
    p && !C(p) && (n.class = Be(p)), x(l) && (Ce(l) && !y(l) && (l = D({}, l)), n.style = Ke(l));
  }
  const a = C(e) ? 1 : ((p) => p.__isSuspense)(e) ? 128 : ((p) => p.__isTeleport)(e) ? 64 : x(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && 4 & a && Ce(e) && k("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e = v(e)), function(p, l = null, u = null, i = 0, d = null, f = p === Xn ? 0 : 1, _ = !1, m = !1) {
    const w = { __v_isVNode: !0, __v_skip: !0, type: p, props: l, key: l && Zn(l), ref: l && be(l), scopeId: Xt, slotScopeIds: null, children: u, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: f, patchFlag: i, dynamicProps: d, dynamicChildren: null, appContext: null, ctx: U };
    return m ? (We(w, u), 128 & f && p.normalize(w)) : u && (w.shapeFlag |= C(u) ? 8 : 16), process.env.NODE_ENV !== "production" && w.key != w.key && k("VNode created with invalid key (NaN). VNode type:", w.type), !_ && Q && (w.patchFlag > 0 || 6 & f) && w.patchFlag !== 32 && Q.push(w), w;
  }(e, n, t, r, o, a, s, !0);
}
function xe(e, n, t = !1) {
  const { props: r, ref: o, patchFlag: s, children: c } = e, a = n ? function(...p) {
    const l = {};
    for (let u = 0; u < p.length; u++) {
      const i = p[u];
      for (const d in i)
        if (d === "class")
          l.class !== i.class && (l.class = Be([l.class, i.class]));
        else if (d === "style")
          l.style = Ke([l.style, i.style]);
        else if (ft(d)) {
          const f = l[d], _ = i[d];
          !_ || f === _ || y(f) && f.includes(_) || (l[d] = f ? [].concat(f, _) : _);
        } else
          d !== "" && (l[d] = i[d]);
    }
    return l;
  }(r || {}, n) : r;
  return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a && Zn(a), ref: n && n.ref ? t && o ? y(o) ? o.concat(be(n)) : [o, be(n)] : be(n) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: process.env.NODE_ENV !== "production" && s === -1 && y(c) ? c.map(et) : c, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: n && e.type !== Xn ? s === -1 ? 16 : 16 | s : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && xe(e.ssContent), ssFallback: e.ssFallback && xe(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
}
function et(e) {
  const n = xe(e);
  return y(e.children) && (n.children = e.children.map(et)), n;
}
function co(e = " ", n = 0) {
  return so(oo, null, e, n);
}
function We(e, n) {
  let t = 0;
  const { shapeFlag: r } = e;
  if (n == null)
    n = null;
  else if (y(n))
    t = 16;
  else if (typeof n == "object") {
    if (65 & r) {
      const o = n.default;
      return void (o && (o._c && (o._d = !1), We(e, o()), o._c && (o._d = !0)));
    }
    {
      t = 32;
      const o = n._;
      o || Yn in n ? o === 3 && U && (U.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024)) : n._ctx = U;
    }
  } else
    N(n) ? (n = { default: n, _ctx: U }, t = 32) : (n = String(n), 64 & r ? (t = 16, n = [co(n)]) : t = 8);
  e.children = n, e.shapeFlag |= t;
}
let tn, X, te = null, Vn = "__VUE_INSTANCE_SETTERS__";
(X = Te()[Vn]) || (X = Te()[Vn] = []), X.push((e) => te = e), tn = (e) => {
  X.length > 1 ? X.forEach((n) => n(e)) : X[0](e);
};
const xn = (e) => {
  tn(e), e.scope.on();
}, io = () => {
  te && te.scope.off(), tn(null);
}, ao = /(?:^|[-_])(\w)/g, lo = (e) => e.replace(ao, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function nt(e, n = !0) {
  return N(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Sn(e, n, t = !1) {
  let r = nt(n);
  if (!r && n.__file) {
    const o = n.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const c in s)
        if (s[c] === n)
          return c;
    };
    r = o(e.components || e.parent.type.components) || o(e.appContext.components);
  }
  return r ? lo(r) : t ? "App" : "Anonymous";
}
function tt(e) {
  return N(e) && "__vccOpts" in e;
}
function Pe(e) {
  return !(!e || !e.__v_isShallow);
}
process.env.NODE_ENV !== "production" && function() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, n = { style: "color:#0b1bc9" }, t = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = { header: (i) => x(i) ? i.__isVue ? ["div", e, "VueInstance"] : V(i) ? ["div", {}, ["span", e, u(i)], "<", a(i.value), ">"] : B(i) ? ["div", {}, ["span", e, Pe(i) ? "ShallowReactive" : "Reactive"], "<", a(i), ">" + (H(i) ? " (readonly)" : "")] : H(i) ? ["div", {}, ["span", e, Pe(i) ? "ShallowReadonly" : "Readonly"], "<", a(i), ">"] : null : null, hasBody: (i) => i && i.__isVue, body(i) {
    if (i && i.__isVue)
      return ["div", {}, ...s(i.$)];
  } };
  function s(i) {
    const d = [];
    i.type.props && i.props && d.push(c("props", v(i.props))), i.setupState !== A && d.push(c("setup", i.setupState)), i.data !== A && d.push(c("data", v(i.data)));
    const f = p(i, "computed");
    f && d.push(c("computed", f));
    const _ = p(i, "inject");
    return _ && d.push(c("injected", _)), d.push(["div", {}, ["span", { style: r.style + ";opacity:0.66" }, "$ (internal): "], ["object", { object: i }]]), d;
  }
  function c(i, d) {
    return d = D({}, d), Object.keys(d).length ? ["div", { style: "line-height:1.25em;margin-bottom:0.6em" }, ["div", { style: "color:#476582" }, i], ["div", { style: "padding-left:1.25em" }, ...Object.keys(d).map((f) => ["div", {}, ["span", r, f + ": "], a(d[f], !1)])]] : ["span", {}];
  }
  function a(i, d = !0) {
    return typeof i == "number" ? ["span", n, i] : typeof i == "string" ? ["span", t, JSON.stringify(i)] : typeof i == "boolean" ? ["span", r, i] : x(i) ? ["object", { object: d ? v(i) : i }] : ["span", t, String(i)];
  }
  function p(i, d) {
    const f = i.type;
    if (N(f))
      return;
    const _ = {};
    for (const m in i.ctx)
      l(f, m, d) && (_[m] = i.ctx[m]);
    return _;
  }
  function l(i, d, f) {
    const _ = i[f];
    return !!(y(_) && _.includes(d) || x(_) && d in _) || !(!i.extends || !l(i.extends, d, f)) || !(!i.mixins || !i.mixins.some((m) => l(m, d, f))) || void 0;
  }
  function u(i) {
    return Pe(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}();
var Ne, uo;
const Dn = ((e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
})(N(Ne = { name: "EasterEggTrigger", props: { callback: { default: null, type: Function }, delay: { default: 500, type: [String, Number] }, pattern: { default: () => ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"], type: Array }, target: { default: "body", type: String }, type: { default: "keydown", type: String } }, emits: ["triggered"], setup(e, { emit: n }) {
  const r = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"], o = "body", s = "keydown", c = q(["click", "dblclick", "mouseup", "mousedown"]);
  let a = q([]), p = setTimeout(() => {
  }), l = q([]), u = q({ nodes: [], ids: [], classNames: [] });
  const i = (d = e, f = ([g]) => e[g] != null, Object.fromEntries(Object.entries(d).filter(f)));
  var d, f;
  function _() {
    a.push(i), Object.values(a).forEach((g) => {
      const h = q(g);
      h.pattern || (h.pattern = r), h.target || (h.target = o);
    }), function() {
      const g = i.type ?? s;
      document.addEventListener(g, m, !1);
    }();
  }
  function m(g) {
    const h = me("");
    if (p !== null && clearTimeout(p), g.key !== void 0 && (h.value = g.key), $e(c, g.type)) {
      const $ = g.target;
      h.value = g.type, u.nodes.push($.nodeName.toLowerCase()), u.ids.push($.id), u.classNames.push($.classList.value);
    }
    return l.push(h.value), function($) {
      Object.values(a).forEach((P) => {
        if (lt(P == null ? void 0 : P.pattern, l)) {
          if ($e(c, $.type))
            return function(on, de) {
              const ot = de.target, rt = de.target.replace("#", ""), st = de.target.replace(".", ""), rn = Re(u.nodes), sn = Re(u.ids), cn = Re(u.classNames), ct = me(rn.length === 1 && rn[0] === ot), it = me(sn.length === 1 && sn[0] === rt), at = me(cn.length === 1 && $e(cn[0], st));
              (ct.value || it.value || at.value) && W(de), w();
            }(0, P), !1;
          W(P);
        }
        return !1;
      }), w();
    }(g), !1;
  }
  function w() {
    let g = 500;
    e.delay !== void 0 && (g = +e.delay), p = setTimeout(() => {
      clearTimeout(p), l = [], u = { nodes: [], ids: [], classNames: [] };
    }, +g);
  }
  function W(g) {
    if (Object.keys(a).length === 1) {
      const h = i.type ?? s;
      document.removeEventListener(h, m, !1);
    } else
      (function(h) {
        const $ = a;
        a = [];
        const P = ut($, (on) => on.name === h.name);
        $.splice(P, 1), Object.values($).forEach(() => {
          _();
        }), a = $;
      })(g);
    return g.callback && g.callback(g), n("triggered", g), !1;
  }
  return _(), {};
} }) ? (() => D({ name: Ne.name }, uo, { setup: Ne }))() : Ne, [["render", function(e, n, t, r, o, s) {
  return null;
}]]);
Dn.install = (e) => {
  e.component("EasterEggTrigger", Dn);
};
export {
  Dn as default
};
