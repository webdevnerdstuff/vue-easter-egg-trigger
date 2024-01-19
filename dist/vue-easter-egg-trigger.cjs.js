"use strict";/**
 * @name @wdns/vue-easter-egg-trigger
 * @version 3.0.2
 * @description Presenting the Vue Easter Egg Trigger, a tool that discreetly injects a touch of unexpectedness into Vue.js projects. This unassuming plugin, which operates on both keystrokes (with click events also available), brings hidden surprises to your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vue-easter-egg-trigger
 * @repository https://github.com/webdevnerdstuff/vue-easter-egg-trigger
 * @license MIT License
 */Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("vue"),n=require("lodash"),l=r.defineComponent({__name:"VEasterEggTrigger",props:{callback:{},destroy:{type:Boolean},delay:{default:500},pattern:{default:()=>["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]},persist:{type:Boolean,default:!1},target:{default:"body"},type:{default:"keydown"}},emits:["triggered"],setup(d,{emit:i}){const A=i,g=d,y=r.inject(v,{}),e=r.reactive({...g,...y});r.watchEffect(()=>{Object.assign(e,{...g,...y})});let p=r.reactive([]),o=null,u=setTimeout(()=>{});const E=r.reactive(["click","dblclick","mouseup","mousedown"]),a=r.reactive({classNames:[],ids:[],nodes:[]});function f(t){const c=r.ref("");if(u!==null&&clearTimeout(u),t.key!==void 0&&(c.value=t.key),n.includes(E,t.type)){const s=t.currentTarget;c.value=t.type,a.nodes.push(s.nodeName.toLowerCase()),a.ids.push(s.id),a.classNames.push(s.classList.value)}p.push(c.value),function(s){if(n.isEqual(e.pattern,p)){if(n.includes(E,s.type))return void function(){const m=e.target,q=m.replace("#",""),L=m.replace(".",""),T=n.uniq(a.nodes),h=n.uniq(a.ids),k=n.uniq(a.classNames),N=r.ref(T.length===1&&T[0]===m),S=r.ref(h.length===1&&h[0]===q),V=r.ref(k.length===1&&n.includes(k[0],L));(N.value||S.value||V.value)&&b(),w()}();b()}w()}(t)}function w(){u=setTimeout(()=>{clearTimeout(u),p=[]},Number(e.delay))}function b(){var t;e.callback&&e.callback(e),A("triggered",g),e.persist||(t=f,o&&o.removeEventListener(e.type,t,!0))}return r.onMounted(()=>{(function(){const t=e.type;if(o=document.querySelector(e.target),!o)throw new Error(`Element not found: ${e.target}`);if(e.target==="body")return void o.addEventListener(t,f,!0);o.addEventListener(t,f,!0)})()}),(t,c)=>null}}),v=Symbol(),_=l;exports.EasterEggTrigger=_,exports.VEasterEggTrigger=l,exports.createVEasterEggTrigger=function(d={}){return i=>{i.provide(v,d),i.component("EasterEggTrigger",l),i.component("VEasterEggTrigger",l)}},exports.default=l,exports.globalOptions=v;
