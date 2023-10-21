var hf=Object.defineProperty;var df=(i,e,t)=>e in i?hf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ff=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Io=(i,e,t)=>(df(i,typeof e!="symbol"?e+"":e,t),t);var Bx=ff((Eh,wa)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof Eh=="object"&&typeof wa<"u"?wa.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e()})(globalThis,function(){const i=new Map,e={set(x,a,p){i.has(x)||i.set(x,new Map);const E=i.get(x);E.has(a)||E.size===0?E.set(a,p):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(E.keys())[0]}.`)},get:(x,a)=>i.has(x)&&i.get(x).get(a)||null,remove(x,a){if(!i.has(x))return;const p=i.get(x);p.delete(a),p.size===0&&i.delete(x)}},t="transitionend",n=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(a,p)=>`#${CSS.escape(p)}`)),x),r=x=>{x.dispatchEvent(new Event(t))},s=x=>!(!x||typeof x!="object")&&(x.jquery!==void 0&&(x=x[0]),x.nodeType!==void 0),c=x=>s(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(n(x)):null,o=x=>{if(!s(x)||x.getClientRects().length===0)return!1;const a=getComputedStyle(x).getPropertyValue("visibility")==="visible",p=x.closest("details:not([open])");if(!p)return a;if(p!==x){const E=x.closest("summary");if(E&&E.parentNode!==p||E===null)return!1}return a},l=x=>!x||x.nodeType!==Node.ELEMENT_NODE||!!x.classList.contains("disabled")||(x.disabled!==void 0?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false"),u=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const a=x.getRootNode();return a instanceof ShadowRoot?a:null}return x instanceof ShadowRoot?x:x.parentNode?u(x.parentNode):null},h=()=>{},d=x=>{x.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_=[],v=()=>document.documentElement.dir==="rtl",y=x=>{var a;a=()=>{const p=f();if(p){const E=x.NAME,B=p.fn[E];p.fn[E]=x.jQueryInterface,p.fn[E].Constructor=x,p.fn[E].noConflict=()=>(p.fn[E]=B,x.jQueryInterface)}},document.readyState==="loading"?(_.length||document.addEventListener("DOMContentLoaded",()=>{for(const p of _)p()}),_.push(a)):a()},g=(x,a=[],p=x)=>typeof x=="function"?x(...a):p,m=(x,a,p=!0)=>{if(!p)return void g(x);const E=(ee=>{if(!ee)return 0;let{transitionDuration:ae,transitionDelay:ge}=window.getComputedStyle(ee);const Ae=Number.parseFloat(ae),we=Number.parseFloat(ge);return Ae||we?(ae=ae.split(",")[0],ge=ge.split(",")[0],1e3*(Number.parseFloat(ae)+Number.parseFloat(ge))):0})(a)+5;let B=!1;const z=({target:ee})=>{ee===a&&(B=!0,a.removeEventListener(t,z),g(x))};a.addEventListener(t,z),setTimeout(()=>{B||r(a)},E)},D=(x,a,p,E)=>{const B=x.length;let z=x.indexOf(a);return z===-1?!p&&E?x[B-1]:x[0]:(z+=p?1:-1,E&&(z=(z+B)%B),x[Math.max(0,Math.min(z,B-1))])},b=/[^.]*(?=\..*)\.|.*/,C=/\..*/,A=/::\d+$/,L={};let w=1;const F={mouseenter:"mouseover",mouseleave:"mouseout"},M=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(x,a){return a&&`${a}::${w++}`||x.uidEvent||w++}function X(x){const a=T(x);return x.uidEvent=a,L[a]=L[a]||{},L[a]}function te(x,a,p=null){return Object.values(x).find(E=>E.callable===a&&E.delegationSelector===p)}function G(x,a,p){const E=typeof a=="string",B=E?p:a||p;let z=H(x);return M.has(z)||(z=x),[E,B,z]}function j(x,a,p,E,B){if(typeof a!="string"||!x)return;let[z,ee,ae]=G(a,p,E);a in F&&(ee=(qe=>function(ke){if(!ke.relatedTarget||ke.relatedTarget!==ke.delegateTarget&&!ke.delegateTarget.contains(ke.relatedTarget))return qe.call(this,ke)})(ee));const ge=X(x),Ae=ge[ae]||(ge[ae]={}),we=te(Ae,ee,z?p:null);if(we)return void(we.oneOff=we.oneOff&&B);const Se=T(ee,a.replace(b,"")),je=z?function(Oe,qe,ke){return function Ye(ft){const xt=Oe.querySelectorAll(qe);for(let{target:tt}=ft;tt&&tt!==this;tt=tt.parentNode)for(const ct of xt)if(ct===tt)return se(ft,{delegateTarget:tt}),Ye.oneOff&&U.off(Oe,ft.type,qe,ke),ke.apply(tt,[ft])}}(x,p,ee):function(Oe,qe){return function ke(Ye){return se(Ye,{delegateTarget:Oe}),ke.oneOff&&U.off(Oe,Ye.type,qe),qe.apply(Oe,[Ye])}}(x,ee);je.delegationSelector=z?p:null,je.callable=ee,je.oneOff=B,je.uidEvent=Se,Ae[Se]=je,x.addEventListener(ae,je,z)}function $(x,a,p,E,B){const z=te(a[p],E,B);z&&(x.removeEventListener(p,z,!!B),delete a[p][z.uidEvent])}function re(x,a,p,E){const B=a[p]||{};for(const[z,ee]of Object.entries(B))z.includes(E)&&$(x,a,p,ee.callable,ee.delegationSelector)}function H(x){return x=x.replace(C,""),F[x]||x}const U={on(x,a,p,E){j(x,a,p,E,!1)},one(x,a,p,E){j(x,a,p,E,!0)},off(x,a,p,E){if(typeof a!="string"||!x)return;const[B,z,ee]=G(a,p,E),ae=ee!==a,ge=X(x),Ae=ge[ee]||{},we=a.startsWith(".");if(z===void 0){if(we)for(const Se of Object.keys(ge))re(x,ge,Se,a.slice(1));for(const[Se,je]of Object.entries(Ae)){const Oe=Se.replace(A,"");ae&&!a.includes(Oe)||$(x,ge,ee,je.callable,je.delegationSelector)}}else{if(!Object.keys(Ae).length)return;$(x,ge,ee,z,B?p:null)}},trigger(x,a,p){if(typeof a!="string"||!x)return null;const E=f();let B=null,z=!0,ee=!0,ae=!1;a!==H(a)&&E&&(B=E.Event(a,p),E(x).trigger(B),z=!B.isPropagationStopped(),ee=!B.isImmediatePropagationStopped(),ae=B.isDefaultPrevented());const ge=se(new Event(a,{bubbles:z,cancelable:!0}),p);return ae&&ge.preventDefault(),ee&&x.dispatchEvent(ge),ge.defaultPrevented&&B&&B.preventDefault(),ge}};function se(x,a={}){for(const[p,E]of Object.entries(a))try{x[p]=E}catch{Object.defineProperty(x,p,{configurable:!0,get:()=>E})}return x}function ie(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function q(x){return x.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const Q={setDataAttribute(x,a,p){x.setAttribute(`data-bs-${q(a)}`,p)},removeDataAttribute(x,a){x.removeAttribute(`data-bs-${q(a)}`)},getDataAttributes(x){if(!x)return{};const a={},p=Object.keys(x.dataset).filter(E=>E.startsWith("bs")&&!E.startsWith("bsConfig"));for(const E of p){let B=E.replace(/^bs/,"");B=B.charAt(0).toLowerCase()+B.slice(1,B.length),a[B]=ie(x.dataset[E])}return a},getDataAttribute:(x,a)=>ie(x.getAttribute(`data-bs-${q(a)}`))};class ve{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,p){const E=s(p)?Q.getDataAttribute(p,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...s(p)?Q.getDataAttributes(p):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,p=this.constructor.DefaultType){for(const[B,z]of Object.entries(p)){const ee=a[B],ae=s(ee)?"element":(E=ee)==null?`${E}`:Object.prototype.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(z).test(ae))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${B}" provided type "${ae}" but expected type "${z}".`)}var E}}class _e extends ve{constructor(a,p){super(),(a=c(a))&&(this._element=a,this._config=this._getConfig(p),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),U.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,p,E=!0){m(a,p,E)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return e.get(c(a),this.DATA_KEY)}static getOrCreateInstance(a,p={}){return this.getInstance(a)||new this(a,typeof p=="object"?p:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const Te=x=>{let a=x.getAttribute("data-bs-target");if(!a||a==="#"){let p=x.getAttribute("href");if(!p||!p.includes("#")&&!p.startsWith("."))return null;p.includes("#")&&!p.startsWith("#")&&(p=`#${p.split("#")[1]}`),a=p&&p!=="#"?n(p.trim()):null}return a},ce={find:(x,a=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(a,x)),findOne:(x,a=document.documentElement)=>Element.prototype.querySelector.call(a,x),children:(x,a)=>[].concat(...x.children).filter(p=>p.matches(a)),parents(x,a){const p=[];let E=x.parentNode.closest(a);for(;E;)p.push(E),E=E.parentNode.closest(a);return p},prev(x,a){let p=x.previousElementSibling;for(;p;){if(p.matches(a))return[p];p=p.previousElementSibling}return[]},next(x,a){let p=x.nextElementSibling;for(;p;){if(p.matches(a))return[p];p=p.nextElementSibling}return[]},focusableChildren(x){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(p=>`${p}:not([tabindex^="-"])`).join(",");return this.find(a,x).filter(p=>!l(p)&&o(p))},getSelectorFromElement(x){const a=Te(x);return a&&ce.findOne(a)?a:null},getElementFromSelector(x){const a=Te(x);return a?ce.findOne(a):null},getMultipleElementsFromSelector(x){const a=Te(x);return a?ce.find(a):[]}},Ue=(x,a="hide")=>{const p=`click.dismiss${x.EVENT_KEY}`,E=x.NAME;U.on(document,p,`[data-bs-dismiss="${E}"]`,function(B){if(["A","AREA"].includes(this.tagName)&&B.preventDefault(),l(this))return;const z=ce.getElementFromSelector(this)||this.closest(`.${E}`);x.getOrCreateInstance(z)[a]()})},De=".bs.alert",rt=`close${De}`,Ut=`closed${De}`;class He extends _e{static get NAME(){return"alert"}close(){if(U.trigger(this._element,rt).defaultPrevented)return;this._element.classList.remove("show");const a=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),U.trigger(this._element,Ut),this.dispose()}static jQueryInterface(a){return this.each(function(){const p=He.getOrCreateInstance(this);if(typeof a=="string"){if(p[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);p[a](this)}})}}Ue(He,"close"),y(He);const V='[data-bs-toggle="button"]';class yt extends _e{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(a){return this.each(function(){const p=yt.getOrCreateInstance(this);a==="toggle"&&p[a]()})}}U.on(document,"click.bs.button.data-api",V,x=>{x.preventDefault();const a=x.target.closest(V);yt.getOrCreateInstance(a).toggle()}),y(yt);const Le=".bs.swipe",Ge=`touchstart${Le}`,Be=`touchmove${Le}`,mt=`touchend${Le}`,$e=`pointerdown${Le}`,Ve=`pointerup${Le}`,st={endCallback:null,leftCallback:null,rightCallback:null},Rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class bt extends ve{constructor(a,p){super(),this._element=a,a&&bt.isSupported()&&(this._config=this._getConfig(p),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return st}static get DefaultType(){return Rt}static get NAME(){return"swipe"}dispose(){U.off(this._element,Le)}_start(a){this._supportPointerEvents?this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX):this._deltaX=a.touches[0].clientX}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=40)return;const p=a/this._deltaX;this._deltaX=0,p&&g(p>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(U.on(this._element,$e,a=>this._start(a)),U.on(this._element,Ve,a=>this._end(a)),this._element.classList.add("pointer-event")):(U.on(this._element,Ge,a=>this._start(a)),U.on(this._element,Be,a=>this._move(a)),U.on(this._element,mt,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType==="pen"||a.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const P=".bs.carousel",S=".data-api",Y="next",ue="prev",le="left",de="right",Ce=`slide${P}`,fe=`slid${P}`,Z=`keydown${P}`,I=`mouseenter${P}`,oe=`mouseleave${P}`,Ee=`dragstart${P}`,me=`load${P}${S}`,Me=`click${P}${S}`,ze="carousel",Ke="active",N=".active",xe=".carousel-item",J=N+xe,he={ArrowLeft:de,ArrowRight:le},pe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Qe={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class it extends _e{constructor(a,p){super(a,p),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ce.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ze&&this.cycle()}static get Default(){return pe}static get DefaultType(){return Qe}static get NAME(){return"carousel"}next(){this._slide(Y)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(ue)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?U.one(this._element,fe,()=>this.cycle()):this.cycle())}to(a){const p=this._getItems();if(a>p.length-1||a<0)return;if(this._isSliding)return void U.one(this._element,fe,()=>this.to(a));const E=this._getItemIndex(this._getActive());if(E===a)return;const B=a>E?Y:ue;this._slide(B,p[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&U.on(this._element,Z,a=>this._keydown(a)),this._config.pause==="hover"&&(U.on(this._element,I,()=>this.pause()),U.on(this._element,oe,()=>this._maybeEnableCycle())),this._config.touch&&bt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const p of ce.find(".carousel-item img",this._element))U.on(p,Ee,E=>E.preventDefault());const a={leftCallback:()=>this._slide(this._directionToOrder(le)),rightCallback:()=>this._slide(this._directionToOrder(de)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new bt(this._element,a)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const p=he[a.key];p&&(a.preventDefault(),this._slide(this._directionToOrder(p)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const p=ce.findOne(N,this._indicatorsElement);p.classList.remove(Ke),p.removeAttribute("aria-current");const E=ce.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);E&&(E.classList.add(Ke),E.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const p=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=p||this._config.defaultInterval}_slide(a,p=null){if(this._isSliding)return;const E=this._getActive(),B=a===Y,z=p||D(this._getItems(),E,B,this._config.wrap);if(z===E)return;const ee=this._getItemIndex(z),ae=Se=>U.trigger(this._element,Se,{relatedTarget:z,direction:this._orderToDirection(a),from:this._getItemIndex(E),to:ee});if(ae(Ce).defaultPrevented||!E||!z)return;const ge=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(ee),this._activeElement=z;const Ae=B?"carousel-item-start":"carousel-item-end",we=B?"carousel-item-next":"carousel-item-prev";z.classList.add(we),d(z),E.classList.add(Ae),z.classList.add(Ae),this._queueCallback(()=>{z.classList.remove(Ae,we),z.classList.add(Ke),E.classList.remove(Ke,we,Ae),this._isSliding=!1,ae(fe)},E,this._isAnimated()),ge&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ce.findOne(J,this._element)}_getItems(){return ce.find(xe,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return v()?a===le?ue:Y:a===le?Y:ue}_orderToDirection(a){return v()?a===ue?le:de:a===ue?de:le}static jQueryInterface(a){return this.each(function(){const p=it.getOrCreateInstance(this,a);if(typeof a!="number"){if(typeof a=="string"){if(p[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);p[a]()}}else p.to(a)})}}U.on(document,Me,"[data-bs-slide], [data-bs-slide-to]",function(x){const a=ce.getElementFromSelector(this);if(!a||!a.classList.contains(ze))return;x.preventDefault();const p=it.getOrCreateInstance(a),E=this.getAttribute("data-bs-slide-to");return E?(p.to(E),void p._maybeEnableCycle()):Q.getDataAttribute(this,"slide")==="next"?(p.next(),void p._maybeEnableCycle()):(p.prev(),void p._maybeEnableCycle())}),U.on(window,me,()=>{const x=ce.find('[data-bs-ride="carousel"]');for(const a of x)it.getOrCreateInstance(a)}),y(it);const at=".bs.collapse",jt=`show${at}`,gt=`shown${at}`,un=`hide${at}`,kt=`hidden${at}`,ts=`click${at}.data-api`,ki="show",Qn="collapse",zn="collapsing",ns=`:scope .${Qn} .${Qn}`,ei='[data-bs-toggle="collapse"]',is={parent:null,toggle:!0},ao={parent:"(null|element)",toggle:"boolean"};class ti extends _e{constructor(a,p){super(a,p),this._isTransitioning=!1,this._triggerArray=[];const E=ce.find(ei);for(const B of E){const z=ce.getSelectorFromElement(B),ee=ce.find(z).filter(ae=>ae===this._element);z!==null&&ee.length&&this._triggerArray.push(B)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return is}static get DefaultType(){return ao}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(B=>B!==this._element).map(B=>ti.getOrCreateInstance(B,{toggle:!1}))),a.length&&a[0]._isTransitioning||U.trigger(this._element,jt).defaultPrevented)return;for(const B of a)B.hide();const p=this._getDimension();this._element.classList.remove(Qn),this._element.classList.add(zn),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const E=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(zn),this._element.classList.add(Qn,ki),this._element.style[p]="",U.trigger(this._element,gt)},this._element,!0),this._element.style[p]=`${this._element[E]}px`}hide(){if(this._isTransitioning||!this._isShown()||U.trigger(this._element,un).defaultPrevented)return;const a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,d(this._element),this._element.classList.add(zn),this._element.classList.remove(Qn,ki);for(const p of this._triggerArray){const E=ce.getElementFromSelector(p);E&&!this._isShown(E)&&this._addAriaAndCollapsedClass([p],!1)}this._isTransitioning=!0,this._element.style[a]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(zn),this._element.classList.add(Qn),U.trigger(this._element,kt)},this._element,!0)}_isShown(a=this._element){return a.classList.contains(ki)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=c(a.parent),a}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(ei);for(const p of a){const E=ce.getElementFromSelector(p);E&&this._addAriaAndCollapsedClass([p],this._isShown(E))}}_getFirstLevelChildren(a){const p=ce.find(ns,this._config.parent);return ce.find(a,this._config.parent).filter(E=>!p.includes(E))}_addAriaAndCollapsedClass(a,p){if(a.length)for(const E of a)E.classList.toggle("collapsed",!p),E.setAttribute("aria-expanded",p)}static jQueryInterface(a){const p={};return typeof a=="string"&&/show|hide/.test(a)&&(p.toggle=!1),this.each(function(){const E=ti.getOrCreateInstance(this,p);if(typeof a=="string"){if(E[a]===void 0)throw new TypeError(`No method named "${a}"`);E[a]()}})}}U.on(document,ts,ei,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const a of ce.getMultipleElementsFromSelector(this))ti.getOrCreateInstance(a,{toggle:!1}).toggle()}),y(ti);var Gt="top",R="bottom",k="right",K="left",W="auto",ne=[Gt,R,k,K],be="start",Pe="end",Fe="clippingParents",Ie="viewport",We="popper",Ne="reference",Xe=ne.reduce(function(x,a){return x.concat([a+"-"+be,a+"-"+Pe])},[]),vt=[].concat(ne,[W]).reduce(function(x,a){return x.concat([a,a+"-"+be,a+"-"+Pe])},[]),Mt="beforeRead",$t="read",hn="afterRead",Tt="beforeMain",et="main",Gi="afterMain",At="beforeWrite",Dn="write",Cr="afterWrite",ni=[Mt,$t,hn,Tt,et,Gi,At,Dn,Cr];function nn(x){return x?(x.nodeName||"").toLowerCase():null}function lt(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var a=x.ownerDocument;return a&&a.defaultView||window}return x}function Kt(x){return x instanceof lt(x).Element||x instanceof Element}function Xt(x){return x instanceof lt(x).HTMLElement||x instanceof HTMLElement}function Vt(x){return typeof ShadowRoot<"u"&&(x instanceof lt(x).ShadowRoot||x instanceof ShadowRoot)}const _i={name:"applyStyles",enabled:!0,phase:"write",fn:function(x){var a=x.state;Object.keys(a.elements).forEach(function(p){var E=a.styles[p]||{},B=a.attributes[p]||{},z=a.elements[p];Xt(z)&&nn(z)&&(Object.assign(z.style,E),Object.keys(B).forEach(function(ee){var ae=B[ee];ae===!1?z.removeAttribute(ee):z.setAttribute(ee,ae===!0?"":ae)}))})},effect:function(x){var a=x.state,p={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,p.popper),a.styles=p,a.elements.arrow&&Object.assign(a.elements.arrow.style,p.arrow),function(){Object.keys(a.elements).forEach(function(E){var B=a.elements[E],z=a.attributes[E]||{},ee=Object.keys(a.styles.hasOwnProperty(E)?a.styles[E]:p[E]).reduce(function(ae,ge){return ae[ge]="",ae},{});Xt(B)&&nn(B)&&(Object.assign(B.style,ee),Object.keys(z).forEach(function(ae){B.removeAttribute(ae)}))})}},requires:["computeStyles"]};function dn(x){return x.split("-")[0]}var Un=Math.max,rs=Math.min,Vi=Math.round;function co(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function za(){return!/^((?!chrome|android).)*safari/i.test(co())}function Wi(x,a,p){a===void 0&&(a=!1),p===void 0&&(p=!1);var E=x.getBoundingClientRect(),B=1,z=1;a&&Xt(x)&&(B=x.offsetWidth>0&&Vi(E.width)/x.offsetWidth||1,z=x.offsetHeight>0&&Vi(E.height)/x.offsetHeight||1);var ee=(Kt(x)?lt(x):window).visualViewport,ae=!za()&&p,ge=(E.left+(ae&&ee?ee.offsetLeft:0))/B,Ae=(E.top+(ae&&ee?ee.offsetTop:0))/z,we=E.width/B,Se=E.height/z;return{width:we,height:Se,top:Ae,right:ge+we,bottom:Ae+Se,left:ge,x:ge,y:Ae}}function lo(x){var a=Wi(x),p=x.offsetWidth,E=x.offsetHeight;return Math.abs(a.width-p)<=1&&(p=a.width),Math.abs(a.height-E)<=1&&(E=a.height),{x:x.offsetLeft,y:x.offsetTop,width:p,height:E}}function Ha(x,a){var p=a.getRootNode&&a.getRootNode();if(x.contains(a))return!0;if(p&&Vt(p)){var E=a;do{if(E&&x.isSameNode(E))return!0;E=E.parentNode||E.host}while(E)}return!1}function Hn(x){return lt(x).getComputedStyle(x)}function Sh(x){return["table","td","th"].indexOf(nn(x))>=0}function ii(x){return((Kt(x)?x.ownerDocument:x.document)||window.document).documentElement}function ss(x){return nn(x)==="html"?x:x.assignedSlot||x.parentNode||(Vt(x)?x.host:null)||ii(x)}function ka(x){return Xt(x)&&Hn(x).position!=="fixed"?x.offsetParent:null}function Lr(x){for(var a=lt(x),p=ka(x);p&&Sh(p)&&Hn(p).position==="static";)p=ka(p);return p&&(nn(p)==="html"||nn(p)==="body"&&Hn(p).position==="static")?a:p||function(E){var B=/firefox/i.test(co());if(/Trident/i.test(co())&&Xt(E)&&Hn(E).position==="fixed")return null;var z=ss(E);for(Vt(z)&&(z=z.host);Xt(z)&&["html","body"].indexOf(nn(z))<0;){var ee=Hn(z);if(ee.transform!=="none"||ee.perspective!=="none"||ee.contain==="paint"||["transform","perspective"].indexOf(ee.willChange)!==-1||B&&ee.willChange==="filter"||B&&ee.filter&&ee.filter!=="none")return z;z=z.parentNode}return null}(x)||a}function uo(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function Pr(x,a,p){return Un(x,rs(a,p))}function Ga(x){return Object.assign({},{top:0,right:0,bottom:0,left:0},x)}function Va(x,a){return a.reduce(function(p,E){return p[E]=x,p},{})}const Wa={name:"arrow",enabled:!0,phase:"main",fn:function(x){var a,p=x.state,E=x.name,B=x.options,z=p.elements.arrow,ee=p.modifiersData.popperOffsets,ae=dn(p.placement),ge=uo(ae),Ae=[K,k].indexOf(ae)>=0?"height":"width";if(z&&ee){var we=function(pt,ht){return Ga(typeof(pt=typeof pt=="function"?pt(Object.assign({},ht.rects,{placement:ht.placement})):pt)!="number"?pt:Va(pt,ne))}(B.padding,p),Se=lo(z),je=ge==="y"?Gt:K,Oe=ge==="y"?R:k,qe=p.rects.reference[Ae]+p.rects.reference[ge]-ee[ge]-p.rects.popper[Ae],ke=ee[ge]-p.rects.reference[ge],Ye=Lr(z),ft=Ye?ge==="y"?Ye.clientHeight||0:Ye.clientWidth||0:0,xt=qe/2-ke/2,tt=we[je],ct=ft-Se[Ae]-we[Oe],Ze=ft/2-Se[Ae]/2+xt,ot=Pr(tt,Ze,ct),ut=ge;p.modifiersData[E]=((a={})[ut]=ot,a.centerOffset=ot-Ze,a)}},effect:function(x){var a=x.state,p=x.options.element,E=p===void 0?"[data-popper-arrow]":p;E!=null&&(typeof E!="string"||(E=a.elements.popper.querySelector(E)))&&Ha(a.elements.popper,E)&&(a.elements.arrow=E)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Xi(x){return x.split("-")[1]}var bh={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Xa(x){var a,p=x.popper,E=x.popperRect,B=x.placement,z=x.variation,ee=x.offsets,ae=x.position,ge=x.gpuAcceleration,Ae=x.adaptive,we=x.roundOffsets,Se=x.isFixed,je=ee.x,Oe=je===void 0?0:je,qe=ee.y,ke=qe===void 0?0:qe,Ye=typeof we=="function"?we({x:Oe,y:ke}):{x:Oe,y:ke};Oe=Ye.x,ke=Ye.y;var ft=ee.hasOwnProperty("x"),xt=ee.hasOwnProperty("y"),tt=K,ct=Gt,Ze=window;if(Ae){var ot=Lr(p),ut="clientHeight",pt="clientWidth";ot===lt(p)&&Hn(ot=ii(p)).position!=="static"&&ae==="absolute"&&(ut="scrollHeight",pt="scrollWidth"),(B===Gt||(B===K||B===k)&&z===Pe)&&(ct=R,ke-=(Se&&ot===Ze&&Ze.visualViewport?Ze.visualViewport.height:ot[ut])-E.height,ke*=ge?1:-1),B!==K&&(B!==Gt&&B!==R||z!==Pe)||(tt=k,Oe-=(Se&&ot===Ze&&Ze.visualViewport?Ze.visualViewport.width:ot[pt])-E.width,Oe*=ge?1:-1)}var ht,Ct=Object.assign({position:ae},Ae&&bh),on=we===!0?function(En,Zt){var pn=En.x,mn=En.y,wt=Zt.devicePixelRatio||1;return{x:Vi(pn*wt)/wt||0,y:Vi(mn*wt)/wt||0}}({x:Oe,y:ke},lt(p)):{x:Oe,y:ke};return Oe=on.x,ke=on.y,ge?Object.assign({},Ct,((ht={})[ct]=xt?"0":"",ht[tt]=ft?"0":"",ht.transform=(Ze.devicePixelRatio||1)<=1?"translate("+Oe+"px, "+ke+"px)":"translate3d("+Oe+"px, "+ke+"px, 0)",ht)):Object.assign({},Ct,((a={})[ct]=xt?ke+"px":"",a[tt]=ft?Oe+"px":"",a.transform="",a))}const ho={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(x){var a=x.state,p=x.options,E=p.gpuAcceleration,B=E===void 0||E,z=p.adaptive,ee=z===void 0||z,ae=p.roundOffsets,ge=ae===void 0||ae,Ae={placement:dn(a.placement),variation:Xi(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:B,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,Xa(Object.assign({},Ae,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:ee,roundOffsets:ge})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,Xa(Object.assign({},Ae,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ge})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})},data:{}};var os={passive:!0};const fo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(x){var a=x.state,p=x.instance,E=x.options,B=E.scroll,z=B===void 0||B,ee=E.resize,ae=ee===void 0||ee,ge=lt(a.elements.popper),Ae=[].concat(a.scrollParents.reference,a.scrollParents.popper);return z&&Ae.forEach(function(we){we.addEventListener("scroll",p.update,os)}),ae&&ge.addEventListener("resize",p.update,os),function(){z&&Ae.forEach(function(we){we.removeEventListener("scroll",p.update,os)}),ae&&ge.removeEventListener("resize",p.update,os)}},data:{}};var Th={left:"right",right:"left",bottom:"top",top:"bottom"};function as(x){return x.replace(/left|right|bottom|top/g,function(a){return Th[a]})}var Ah={start:"end",end:"start"};function qa(x){return x.replace(/start|end/g,function(a){return Ah[a]})}function po(x){var a=lt(x);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function mo(x){return Wi(ii(x)).left+po(x).scrollLeft}function go(x){var a=Hn(x),p=a.overflow,E=a.overflowX,B=a.overflowY;return/auto|scroll|overlay|hidden/.test(p+B+E)}function Ya(x){return["html","body","#document"].indexOf(nn(x))>=0?x.ownerDocument.body:Xt(x)&&go(x)?x:Ya(ss(x))}function Dr(x,a){var p;a===void 0&&(a=[]);var E=Ya(x),B=E===((p=x.ownerDocument)==null?void 0:p.body),z=lt(E),ee=B?[z].concat(z.visualViewport||[],go(E)?E:[]):E,ae=a.concat(ee);return B?ae:ae.concat(Dr(ss(ee)))}function _o(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function ja(x,a,p){return a===Ie?_o(function(E,B){var z=lt(E),ee=ii(E),ae=z.visualViewport,ge=ee.clientWidth,Ae=ee.clientHeight,we=0,Se=0;if(ae){ge=ae.width,Ae=ae.height;var je=za();(je||!je&&B==="fixed")&&(we=ae.offsetLeft,Se=ae.offsetTop)}return{width:ge,height:Ae,x:we+mo(E),y:Se}}(x,p)):Kt(a)?function(E,B){var z=Wi(E,!1,B==="fixed");return z.top=z.top+E.clientTop,z.left=z.left+E.clientLeft,z.bottom=z.top+E.clientHeight,z.right=z.left+E.clientWidth,z.width=E.clientWidth,z.height=E.clientHeight,z.x=z.left,z.y=z.top,z}(a,p):_o(function(E){var B,z=ii(E),ee=po(E),ae=(B=E.ownerDocument)==null?void 0:B.body,ge=Un(z.scrollWidth,z.clientWidth,ae?ae.scrollWidth:0,ae?ae.clientWidth:0),Ae=Un(z.scrollHeight,z.clientHeight,ae?ae.scrollHeight:0,ae?ae.clientHeight:0),we=-ee.scrollLeft+mo(E),Se=-ee.scrollTop;return Hn(ae||z).direction==="rtl"&&(we+=Un(z.clientWidth,ae?ae.clientWidth:0)-ge),{width:ge,height:Ae,x:we,y:Se}}(ii(x)))}function $a(x){var a,p=x.reference,E=x.element,B=x.placement,z=B?dn(B):null,ee=B?Xi(B):null,ae=p.x+p.width/2-E.width/2,ge=p.y+p.height/2-E.height/2;switch(z){case Gt:a={x:ae,y:p.y-E.height};break;case R:a={x:ae,y:p.y+p.height};break;case k:a={x:p.x+p.width,y:ge};break;case K:a={x:p.x-E.width,y:ge};break;default:a={x:p.x,y:p.y}}var Ae=z?uo(z):null;if(Ae!=null){var we=Ae==="y"?"height":"width";switch(ee){case be:a[Ae]=a[Ae]-(p[we]/2-E[we]/2);break;case Pe:a[Ae]=a[Ae]+(p[we]/2-E[we]/2)}}return a}function qi(x,a){a===void 0&&(a={});var p=a,E=p.placement,B=E===void 0?x.placement:E,z=p.strategy,ee=z===void 0?x.strategy:z,ae=p.boundary,ge=ae===void 0?Fe:ae,Ae=p.rootBoundary,we=Ae===void 0?Ie:Ae,Se=p.elementContext,je=Se===void 0?We:Se,Oe=p.altBoundary,qe=Oe!==void 0&&Oe,ke=p.padding,Ye=ke===void 0?0:ke,ft=Ga(typeof Ye!="number"?Ye:Va(Ye,ne)),xt=je===We?Ne:We,tt=x.rects.popper,ct=x.elements[qe?xt:je],Ze=function(Zt,pn,mn,wt){var In=pn==="clippingParents"?function(_t){var Jt=Dr(ss(_t)),gn=["absolute","fixed"].indexOf(Hn(_t).position)>=0&&Xt(_t)?Lr(_t):_t;return Kt(gn)?Jt.filter(function(si){return Kt(si)&&Ha(si,gn)&&nn(si)!=="body"}):[]}(Zt):[].concat(pn),Nn=[].concat(In,[mn]),$i=Nn[0],Ft=Nn.reduce(function(_t,Jt){var gn=ja(Zt,Jt,wt);return _t.top=Un(gn.top,_t.top),_t.right=rs(gn.right,_t.right),_t.bottom=rs(gn.bottom,_t.bottom),_t.left=Un(gn.left,_t.left),_t},ja(Zt,$i,wt));return Ft.width=Ft.right-Ft.left,Ft.height=Ft.bottom-Ft.top,Ft.x=Ft.left,Ft.y=Ft.top,Ft}(Kt(ct)?ct:ct.contextElement||ii(x.elements.popper),ge,we,ee),ot=Wi(x.elements.reference),ut=$a({reference:ot,element:tt,strategy:"absolute",placement:B}),pt=_o(Object.assign({},tt,ut)),ht=je===We?pt:ot,Ct={top:Ze.top-ht.top+ft.top,bottom:ht.bottom-Ze.bottom+ft.bottom,left:Ze.left-ht.left+ft.left,right:ht.right-Ze.right+ft.right},on=x.modifiersData.offset;if(je===We&&on){var En=on[B];Object.keys(Ct).forEach(function(Zt){var pn=[k,R].indexOf(Zt)>=0?1:-1,mn=[Gt,R].indexOf(Zt)>=0?"y":"x";Ct[Zt]+=En[mn]*pn})}return Ct}function wh(x,a){a===void 0&&(a={});var p=a,E=p.placement,B=p.boundary,z=p.rootBoundary,ee=p.padding,ae=p.flipVariations,ge=p.allowedAutoPlacements,Ae=ge===void 0?vt:ge,we=Xi(E),Se=we?ae?Xe:Xe.filter(function(qe){return Xi(qe)===we}):ne,je=Se.filter(function(qe){return Ae.indexOf(qe)>=0});je.length===0&&(je=Se);var Oe=je.reduce(function(qe,ke){return qe[ke]=qi(x,{placement:ke,boundary:B,rootBoundary:z,padding:ee})[dn(ke)],qe},{});return Object.keys(Oe).sort(function(qe,ke){return Oe[qe]-Oe[ke]})}const Ka={name:"flip",enabled:!0,phase:"main",fn:function(x){var a=x.state,p=x.options,E=x.name;if(!a.modifiersData[E]._skip){for(var B=p.mainAxis,z=B===void 0||B,ee=p.altAxis,ae=ee===void 0||ee,ge=p.fallbackPlacements,Ae=p.padding,we=p.boundary,Se=p.rootBoundary,je=p.altBoundary,Oe=p.flipVariations,qe=Oe===void 0||Oe,ke=p.allowedAutoPlacements,Ye=a.options.placement,ft=dn(Ye),xt=ge||(ft!==Ye&&qe?function(_t){if(dn(_t)===W)return[];var Jt=as(_t);return[qa(_t),Jt,qa(Jt)]}(Ye):[as(Ye)]),tt=[Ye].concat(xt).reduce(function(_t,Jt){return _t.concat(dn(Jt)===W?wh(a,{placement:Jt,boundary:we,rootBoundary:Se,padding:Ae,flipVariations:qe,allowedAutoPlacements:ke}):Jt)},[]),ct=a.rects.reference,Ze=a.rects.popper,ot=new Map,ut=!0,pt=tt[0],ht=0;ht<tt.length;ht++){var Ct=tt[ht],on=dn(Ct),En=Xi(Ct)===be,Zt=[Gt,R].indexOf(on)>=0,pn=Zt?"width":"height",mn=qi(a,{placement:Ct,boundary:we,rootBoundary:Se,altBoundary:je,padding:Ae}),wt=Zt?En?k:K:En?R:Gt;ct[pn]>Ze[pn]&&(wt=as(wt));var In=as(wt),Nn=[];if(z&&Nn.push(mn[on]<=0),ae&&Nn.push(mn[wt]<=0,mn[In]<=0),Nn.every(function(_t){return _t})){pt=Ct,ut=!1;break}ot.set(Ct,Nn)}if(ut)for(var $i=function(_t){var Jt=tt.find(function(gn){var si=ot.get(gn);if(si)return si.slice(0,_t).every(function(gs){return gs})});if(Jt)return pt=Jt,"break"},Ft=qe?3:1;Ft>0&&$i(Ft)!=="break";Ft--);a.placement!==pt&&(a.modifiersData[E]._skip=!0,a.placement=pt,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Za(x,a,p){return p===void 0&&(p={x:0,y:0}),{top:x.top-a.height-p.y,right:x.right-a.width+p.x,bottom:x.bottom-a.height+p.y,left:x.left-a.width-p.x}}function Ja(x){return[Gt,k,R,K].some(function(a){return x[a]>=0})}const Qa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(x){var a=x.state,p=x.name,E=a.rects.reference,B=a.rects.popper,z=a.modifiersData.preventOverflow,ee=qi(a,{elementContext:"reference"}),ae=qi(a,{altBoundary:!0}),ge=Za(ee,E),Ae=Za(ae,B,z),we=Ja(ge),Se=Ja(Ae);a.modifiersData[p]={referenceClippingOffsets:ge,popperEscapeOffsets:Ae,isReferenceHidden:we,hasPopperEscaped:Se},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":we,"data-popper-escaped":Se})}},ec={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(x){var a=x.state,p=x.options,E=x.name,B=p.offset,z=B===void 0?[0,0]:B,ee=vt.reduce(function(we,Se){return we[Se]=function(je,Oe,qe){var ke=dn(je),Ye=[K,Gt].indexOf(ke)>=0?-1:1,ft=typeof qe=="function"?qe(Object.assign({},Oe,{placement:je})):qe,xt=ft[0],tt=ft[1];return xt=xt||0,tt=(tt||0)*Ye,[K,k].indexOf(ke)>=0?{x:tt,y:xt}:{x:xt,y:tt}}(Se,a.rects,z),we},{}),ae=ee[a.placement],ge=ae.x,Ae=ae.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=ge,a.modifiersData.popperOffsets.y+=Ae),a.modifiersData[E]=ee}},vo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(x){var a=x.state,p=x.name;a.modifiersData[p]=$a({reference:a.rects.reference,element:a.rects.popper,strategy:"absolute",placement:a.placement})},data:{}},tc={name:"preventOverflow",enabled:!0,phase:"main",fn:function(x){var a=x.state,p=x.options,E=x.name,B=p.mainAxis,z=B===void 0||B,ee=p.altAxis,ae=ee!==void 0&&ee,ge=p.boundary,Ae=p.rootBoundary,we=p.altBoundary,Se=p.padding,je=p.tether,Oe=je===void 0||je,qe=p.tetherOffset,ke=qe===void 0?0:qe,Ye=qi(a,{boundary:ge,rootBoundary:Ae,padding:Se,altBoundary:we}),ft=dn(a.placement),xt=Xi(a.placement),tt=!xt,ct=uo(ft),Ze=ct==="x"?"y":"x",ot=a.modifiersData.popperOffsets,ut=a.rects.reference,pt=a.rects.popper,ht=typeof ke=="function"?ke(Object.assign({},a.rects,{placement:a.placement})):ke,Ct=typeof ht=="number"?{mainAxis:ht,altAxis:ht}:Object.assign({mainAxis:0,altAxis:0},ht),on=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,En={x:0,y:0};if(ot){if(z){var Zt,pn=ct==="y"?Gt:K,mn=ct==="y"?R:k,wt=ct==="y"?"height":"width",In=ot[ct],Nn=In+Ye[pn],$i=In-Ye[mn],Ft=Oe?-pt[wt]/2:0,_t=xt===be?ut[wt]:pt[wt],Jt=xt===be?-pt[wt]:-ut[wt],gn=a.elements.arrow,si=Oe&&gn?lo(gn):{width:0,height:0},gs=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},kc=gs[pn],Gc=gs[mn],_s=Pr(0,ut[wt],si[wt]),nf=tt?ut[wt]/2-Ft-_s-kc-Ct.mainAxis:_t-_s-kc-Ct.mainAxis,rf=tt?-ut[wt]/2+Ft+_s+Gc+Ct.mainAxis:Jt+_s+Gc+Ct.mainAxis,Po=a.elements.arrow&&Lr(a.elements.arrow),sf=Po?ct==="y"?Po.clientTop||0:Po.clientLeft||0:0,Vc=(Zt=on==null?void 0:on[ct])!=null?Zt:0,of=In+rf-Vc,Wc=Pr(Oe?rs(Nn,In+nf-Vc-sf):Nn,In,Oe?Un($i,of):$i);ot[ct]=Wc,En[ct]=Wc-In}if(ae){var Xc,af=ct==="x"?Gt:K,cf=ct==="x"?R:k,Ti=ot[Ze],vs=Ze==="y"?"height":"width",qc=Ti+Ye[af],Yc=Ti-Ye[cf],Do=[Gt,K].indexOf(ft)!==-1,jc=(Xc=on==null?void 0:on[Ze])!=null?Xc:0,$c=Do?qc:Ti-ut[vs]-pt[vs]-jc+Ct.altAxis,Kc=Do?Ti+ut[vs]+pt[vs]-jc-Ct.altAxis:Yc,Zc=Oe&&Do?function(lf,uf,Uo){var Jc=Pr(lf,uf,Uo);return Jc>Uo?Uo:Jc}($c,Ti,Kc):Pr(Oe?$c:qc,Ti,Oe?Kc:Yc);ot[Ze]=Zc,En[Ze]=Zc-Ti}a.modifiersData[E]=En}},requiresIfExists:["offset"]};function Rh(x,a,p){p===void 0&&(p=!1);var E,B,z=Xt(a),ee=Xt(a)&&function(Se){var je=Se.getBoundingClientRect(),Oe=Vi(je.width)/Se.offsetWidth||1,qe=Vi(je.height)/Se.offsetHeight||1;return Oe!==1||qe!==1}(a),ae=ii(a),ge=Wi(x,ee,p),Ae={scrollLeft:0,scrollTop:0},we={x:0,y:0};return(z||!z&&!p)&&((nn(a)!=="body"||go(ae))&&(Ae=(E=a)!==lt(E)&&Xt(E)?{scrollLeft:(B=E).scrollLeft,scrollTop:B.scrollTop}:po(E)),Xt(a)?((we=Wi(a,!0)).x+=a.clientLeft,we.y+=a.clientTop):ae&&(we.x=mo(ae))),{x:ge.left+Ae.scrollLeft-we.x,y:ge.top+Ae.scrollTop-we.y,width:ge.width,height:ge.height}}function Ch(x){var a=new Map,p=new Set,E=[];function B(z){p.add(z.name),[].concat(z.requires||[],z.requiresIfExists||[]).forEach(function(ee){if(!p.has(ee)){var ae=a.get(ee);ae&&B(ae)}}),E.push(z)}return x.forEach(function(z){a.set(z.name,z)}),x.forEach(function(z){p.has(z.name)||B(z)}),E}var nc={placement:"bottom",modifiers:[],strategy:"absolute"};function ic(){for(var x=arguments.length,a=new Array(x),p=0;p<x;p++)a[p]=arguments[p];return!a.some(function(E){return!(E&&typeof E.getBoundingClientRect=="function")})}function cs(x){x===void 0&&(x={});var a=x,p=a.defaultModifiers,E=p===void 0?[]:p,B=a.defaultOptions,z=B===void 0?nc:B;return function(ee,ae,ge){ge===void 0&&(ge=z);var Ae,we,Se={placement:"bottom",orderedModifiers:[],options:Object.assign({},nc,z),modifiersData:{},elements:{reference:ee,popper:ae},attributes:{},styles:{}},je=[],Oe=!1,qe={state:Se,setOptions:function(Ye){var ft=typeof Ye=="function"?Ye(Se.options):Ye;ke(),Se.options=Object.assign({},z,Se.options,ft),Se.scrollParents={reference:Kt(ee)?Dr(ee):ee.contextElement?Dr(ee.contextElement):[],popper:Dr(ae)};var xt,tt,ct=function(Ze){var ot=Ch(Ze);return ni.reduce(function(ut,pt){return ut.concat(ot.filter(function(ht){return ht.phase===pt}))},[])}((xt=[].concat(E,Se.options.modifiers),tt=xt.reduce(function(Ze,ot){var ut=Ze[ot.name];return Ze[ot.name]=ut?Object.assign({},ut,ot,{options:Object.assign({},ut.options,ot.options),data:Object.assign({},ut.data,ot.data)}):ot,Ze},{}),Object.keys(tt).map(function(Ze){return tt[Ze]})));return Se.orderedModifiers=ct.filter(function(Ze){return Ze.enabled}),Se.orderedModifiers.forEach(function(Ze){var ot=Ze.name,ut=Ze.options,pt=ut===void 0?{}:ut,ht=Ze.effect;if(typeof ht=="function"){var Ct=ht({state:Se,name:ot,instance:qe,options:pt});je.push(Ct||function(){})}}),qe.update()},forceUpdate:function(){if(!Oe){var Ye=Se.elements,ft=Ye.reference,xt=Ye.popper;if(ic(ft,xt)){Se.rects={reference:Rh(ft,Lr(xt),Se.options.strategy==="fixed"),popper:lo(xt)},Se.reset=!1,Se.placement=Se.options.placement,Se.orderedModifiers.forEach(function(ht){return Se.modifiersData[ht.name]=Object.assign({},ht.data)});for(var tt=0;tt<Se.orderedModifiers.length;tt++)if(Se.reset!==!0){var ct=Se.orderedModifiers[tt],Ze=ct.fn,ot=ct.options,ut=ot===void 0?{}:ot,pt=ct.name;typeof Ze=="function"&&(Se=Ze({state:Se,options:ut,name:pt,instance:qe})||Se)}else Se.reset=!1,tt=-1}}},update:(Ae=function(){return new Promise(function(Ye){qe.forceUpdate(),Ye(Se)})},function(){return we||(we=new Promise(function(Ye){Promise.resolve().then(function(){we=void 0,Ye(Ae())})})),we}),destroy:function(){ke(),Oe=!0}};if(!ic(ee,ae))return qe;function ke(){je.forEach(function(Ye){return Ye()}),je=[]}return qe.setOptions(ge).then(function(Ye){!Oe&&ge.onFirstUpdate&&ge.onFirstUpdate(Ye)}),qe}}var Lh=cs(),Ph=cs({defaultModifiers:[fo,vo,ho,_i]}),xo=cs({defaultModifiers:[fo,vo,ho,_i,ec,Ka,tc,Wa,Qa]});const rc=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Gi,afterRead:hn,afterWrite:Cr,applyStyles:_i,arrow:Wa,auto:W,basePlacements:ne,beforeMain:Tt,beforeRead:Mt,beforeWrite:At,bottom:R,clippingParents:Fe,computeStyles:ho,createPopper:xo,createPopperBase:Lh,createPopperLite:Ph,detectOverflow:qi,end:Pe,eventListeners:fo,flip:Ka,hide:Qa,left:K,main:et,modifierPhases:ni,offset:ec,placements:vt,popper:We,popperGenerator:cs,popperOffsets:vo,preventOverflow:tc,read:$t,reference:Ne,right:k,start:be,top:Gt,variationPlacements:Xe,viewport:Ie,write:Dn},Symbol.toStringTag,{value:"Module"})),sc="dropdown",vi=".bs.dropdown",yo=".data-api",Dh="ArrowUp",oc="ArrowDown",Uh=`hide${vi}`,Ih=`hidden${vi}`,Nh=`show${vi}`,Oh=`shown${vi}`,ac=`click${vi}${yo}`,cc=`keydown${vi}${yo}`,Fh=`keyup${vi}${yo}`,Yi="show",xi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Bh=`${xi}.${Yi}`,ls=".dropdown-menu",zh=v()?"top-end":"top-start",Hh=v()?"top-start":"top-end",kh=v()?"bottom-end":"bottom-start",Gh=v()?"bottom-start":"bottom-end",Vh=v()?"left-start":"right-start",Wh=v()?"right-start":"left-start",Xh={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},qh={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Mn extends _e{constructor(a,p){super(a,p),this._popper=null,this._parent=this._element.parentNode,this._menu=ce.next(this._element,ls)[0]||ce.prev(this._element,ls)[0]||ce.findOne(ls,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Xh}static get DefaultType(){return qh}static get NAME(){return sc}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!U.trigger(this._element,Nh,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const p of[].concat(...document.body.children))U.on(p,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Yi),this._element.classList.add(Yi),U.trigger(this._element,Oh,a)}}hide(){if(l(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!U.trigger(this._element,Uh,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))U.off(p,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Yi),this._element.classList.remove(Yi),this._element.setAttribute("aria-expanded","false"),Q.removeDataAttribute(this._menu,"popper"),U.trigger(this._element,Ih,a)}}_getConfig(a){if(typeof(a=super._getConfig(a)).reference=="object"&&!s(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${sc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(rc===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let a=this._element;this._config.reference==="parent"?a=this._parent:s(this._config.reference)?a=c(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const p=this._getPopperConfig();this._popper=xo(a,this._menu,p)}_isShown(){return this._menu.classList.contains(Yi)}_getPlacement(){const a=this._parent;if(a.classList.contains("dropend"))return Vh;if(a.classList.contains("dropstart"))return Wh;if(a.classList.contains("dropup-center"))return"top";if(a.classList.contains("dropdown-center"))return"bottom";const p=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains("dropup")?p?Hh:zh:p?Gh:kh}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(p=>Number.parseInt(p,10)):typeof a=="function"?p=>a(p,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Q.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...g(this._config.popperConfig,[a])}}_selectMenuItem({key:a,target:p}){const E=ce.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(B=>o(B));E.length&&D(E,p,a===oc,!E.includes(p)).focus()}static jQueryInterface(a){return this.each(function(){const p=Mn.getOrCreateInstance(this,a);if(typeof a=="string"){if(p[a]===void 0)throw new TypeError(`No method named "${a}"`);p[a]()}})}static clearMenus(a){if(a.button===2||a.type==="keyup"&&a.key!=="Tab")return;const p=ce.find(Bh);for(const E of p){const B=Mn.getInstance(E);if(!B||B._config.autoClose===!1)continue;const z=a.composedPath(),ee=z.includes(B._menu);if(z.includes(B._element)||B._config.autoClose==="inside"&&!ee||B._config.autoClose==="outside"&&ee||B._menu.contains(a.target)&&(a.type==="keyup"&&a.key==="Tab"||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const ae={relatedTarget:B._element};a.type==="click"&&(ae.clickEvent=a),B._completeHide(ae)}}static dataApiKeydownHandler(a){const p=/input|textarea/i.test(a.target.tagName),E=a.key==="Escape",B=[Dh,oc].includes(a.key);if(!B&&!E||p&&!E)return;a.preventDefault();const z=this.matches(xi)?this:ce.prev(this,xi)[0]||ce.next(this,xi)[0]||ce.findOne(xi,a.delegateTarget.parentNode),ee=Mn.getOrCreateInstance(z);if(B)return a.stopPropagation(),ee.show(),void ee._selectMenuItem(a);ee._isShown()&&(a.stopPropagation(),ee.hide(),z.focus())}}U.on(document,cc,xi,Mn.dataApiKeydownHandler),U.on(document,cc,ls,Mn.dataApiKeydownHandler),U.on(document,ac,Mn.clearMenus),U.on(document,Fh,Mn.clearMenus),U.on(document,ac,xi,function(x){x.preventDefault(),Mn.getOrCreateInstance(this).toggle()}),y(Mn);const lc="backdrop",uc="show",hc=`mousedown.bs.${lc}`,Yh={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},jh={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class dc extends ve{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return Yh}static get DefaultType(){return jh}static get NAME(){return lc}show(a){if(!this._config.isVisible)return void g(a);this._append();const p=this._getElement();this._config.isAnimated&&d(p),p.classList.add(uc),this._emulateAnimation(()=>{g(a)})}hide(a){this._config.isVisible?(this._getElement().classList.remove(uc),this._emulateAnimation(()=>{this.dispose(),g(a)})):g(a)}dispose(){this._isAppended&&(U.off(this._element,hc),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add("fade"),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=c(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),U.on(a,hc,()=>{g(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){m(a,this._getElement(),this._config.isAnimated)}}const us=".bs.focustrap",$h=`focusin${us}`,Kh=`keydown.tab${us}`,fc="backward",Zh={autofocus:!0,trapElement:null},Jh={autofocus:"boolean",trapElement:"element"};class pc extends ve{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Zh}static get DefaultType(){return Jh}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),U.off(document,us),U.on(document,$h,a=>this._handleFocusin(a)),U.on(document,Kh,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,U.off(document,us))}_handleFocusin(a){const{trapElement:p}=this._config;if(a.target===document||a.target===p||p.contains(a.target))return;const E=ce.focusableChildren(p);E.length===0?p.focus():this._lastTabNavDirection===fc?E[E.length-1].focus():E[0].focus()}_handleKeydown(a){a.key==="Tab"&&(this._lastTabNavDirection=a.shiftKey?fc:"forward")}}const mc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",gc=".sticky-top",hs="padding-right",_c="margin-right";class Mo{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,hs,p=>p+a),this._setElementAttributes(mc,hs,p=>p+a),this._setElementAttributes(gc,_c,p=>p-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,hs),this._resetElementAttributes(mc,hs),this._resetElementAttributes(gc,_c)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,p,E){const B=this.getWidth();this._applyManipulationCallback(a,z=>{if(z!==this._element&&window.innerWidth>z.clientWidth+B)return;this._saveInitialAttribute(z,p);const ee=window.getComputedStyle(z).getPropertyValue(p);z.style.setProperty(p,`${E(Number.parseFloat(ee))}px`)})}_saveInitialAttribute(a,p){const E=a.style.getPropertyValue(p);E&&Q.setDataAttribute(a,p,E)}_resetElementAttributes(a,p){this._applyManipulationCallback(a,E=>{const B=Q.getDataAttribute(E,p);B!==null?(Q.removeDataAttribute(E,p),E.style.setProperty(p,B)):E.style.removeProperty(p)})}_applyManipulationCallback(a,p){if(s(a))p(a);else for(const E of ce.find(a,this._element))p(E)}}const fn=".bs.modal",Qh=`hide${fn}`,ed=`hidePrevented${fn}`,vc=`hidden${fn}`,xc=`show${fn}`,td=`shown${fn}`,nd=`resize${fn}`,id=`click.dismiss${fn}`,rd=`mousedown.dismiss${fn}`,sd=`keydown.dismiss${fn}`,od=`click${fn}.data-api`,yc="modal-open",Mc="show",Eo="modal-static",ad={backdrop:!0,focus:!0,keyboard:!0},cd={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class yi extends _e{constructor(a,p){super(a,p),this._dialog=ce.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Mo,this._addEventListeners()}static get Default(){return ad}static get DefaultType(){return cd}static get NAME(){return"modal"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||U.trigger(this._element,xc,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(yc),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){this._isShown&&!this._isTransitioning&&(U.trigger(this._element,Qh).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Mc),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){U.off(window,fn),U.off(this._dialog,fn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new dc({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new pc({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const p=ce.findOne(".modal-body",this._dialog);p&&(p.scrollTop=0),d(this._element),this._element.classList.add(Mc),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,U.trigger(this._element,td,{relatedTarget:a})},this._dialog,this._isAnimated())}_addEventListeners(){U.on(this._element,sd,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),U.on(window,nd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),U.on(this._element,rd,a=>{U.one(this._element,id,p=>{this._element===a.target&&this._element===p.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(yc),this._resetAdjustments(),this._scrollBar.reset(),U.trigger(this._element,vc)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(U.trigger(this._element,ed).defaultPrevented)return;const a=this._element.scrollHeight>document.documentElement.clientHeight,p=this._element.style.overflowY;p==="hidden"||this._element.classList.contains(Eo)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(Eo),this._queueCallback(()=>{this._element.classList.remove(Eo),this._queueCallback(()=>{this._element.style.overflowY=p},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,p=this._scrollBar.getWidth(),E=p>0;if(E&&!a){const B=v()?"paddingLeft":"paddingRight";this._element.style[B]=`${p}px`}if(!E&&a){const B=v()?"paddingRight":"paddingLeft";this._element.style[B]=`${p}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,p){return this.each(function(){const E=yi.getOrCreateInstance(this,a);if(typeof a=="string"){if(E[a]===void 0)throw new TypeError(`No method named "${a}"`);E[a](p)}})}}U.on(document,od,'[data-bs-toggle="modal"]',function(x){const a=ce.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),U.one(a,xc,E=>{E.defaultPrevented||U.one(a,vc,()=>{o(this)&&this.focus()})});const p=ce.findOne(".modal.show");p&&yi.getInstance(p).hide(),yi.getOrCreateInstance(a).toggle(this)}),Ue(yi),y(yi);const kn=".bs.offcanvas",Ec=".data-api",ld=`load${kn}${Ec}`,Sc="show",bc="showing",Tc="hiding",Ac=".offcanvas.show",ud=`show${kn}`,hd=`shown${kn}`,dd=`hide${kn}`,wc=`hidePrevented${kn}`,Rc=`hidden${kn}`,fd=`resize${kn}`,pd=`click${kn}${Ec}`,md=`keydown.dismiss${kn}`,gd={backdrop:!0,keyboard:!0,scroll:!1},_d={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Gn extends _e{constructor(a,p){super(a,p),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gd}static get DefaultType(){return _d}static get NAME(){return"offcanvas"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||U.trigger(this._element,ud,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Mo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(bc),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Sc),this._element.classList.remove(bc),U.trigger(this._element,hd,{relatedTarget:a})},this._element,!0))}hide(){this._isShown&&(U.trigger(this._element,dd).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Tc),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Sc,Tc),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Mo().reset(),U.trigger(this._element,Rc)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=!!this._config.backdrop;return new dc({className:"offcanvas-backdrop",isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?()=>{this._config.backdrop!=="static"?this.hide():U.trigger(this._element,wc)}:null})}_initializeFocusTrap(){return new pc({trapElement:this._element})}_addEventListeners(){U.on(this._element,md,a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():U.trigger(this._element,wc))})}static jQueryInterface(a){return this.each(function(){const p=Gn.getOrCreateInstance(this,a);if(typeof a=="string"){if(p[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);p[a](this)}})}}U.on(document,pd,'[data-bs-toggle="offcanvas"]',function(x){const a=ce.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),l(this))return;U.one(a,Rc,()=>{o(this)&&this.focus()});const p=ce.findOne(Ac);p&&p!==a&&Gn.getInstance(p).hide(),Gn.getOrCreateInstance(a).toggle(this)}),U.on(window,ld,()=>{for(const x of ce.find(Ac))Gn.getOrCreateInstance(x).show()}),U.on(window,fd,()=>{for(const x of ce.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&Gn.getOrCreateInstance(x).hide()}),Ue(Gn),y(Gn);const Cc={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},vd=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),xd=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,yd=(x,a)=>{const p=x.nodeName.toLowerCase();return a.includes(p)?!vd.has(p)||!!xd.test(x.nodeValue):a.filter(E=>E instanceof RegExp).some(E=>E.test(p))},Md={allowList:Cc,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ed={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Sd={entry:"(string|element|function|null)",selector:"(string|element)"};class bd extends ve{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return Md}static get DefaultType(){return Ed}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[B,z]of Object.entries(this._config.content))this._setContent(a,z,B);const p=a.children[0],E=this._resolvePossibleFunction(this._config.extraClass);return E&&p.classList.add(...E.split(" ")),p}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[p,E]of Object.entries(a))super._typeCheckConfig({selector:p,entry:E},Sd)}_setContent(a,p,E){const B=ce.findOne(E,a);B&&((p=this._resolvePossibleFunction(p))?s(p)?this._putElementInTemplate(c(p),B):this._config.html?B.innerHTML=this._maybeSanitize(p):B.textContent=p:B.remove())}_maybeSanitize(a){return this._config.sanitize?function(p,E,B){if(!p.length)return p;if(B&&typeof B=="function")return B(p);const z=new window.DOMParser().parseFromString(p,"text/html"),ee=[].concat(...z.body.querySelectorAll("*"));for(const ae of ee){const ge=ae.nodeName.toLowerCase();if(!Object.keys(E).includes(ge)){ae.remove();continue}const Ae=[].concat(...ae.attributes),we=[].concat(E["*"]||[],E[ge]||[]);for(const Se of Ae)yd(Se,we)||ae.removeAttribute(Se.nodeName)}return z.body.innerHTML}(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return g(a,[this])}_putElementInTemplate(a,p){if(this._config.html)return p.innerHTML="",void p.append(a);p.textContent=a.textContent}}const Td=new Set(["sanitize","allowList","sanitizeFn"]),So="fade",ds="show",Lc=".modal",Pc="hide.bs.modal",Ur="hover",bo="focus",Ad={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},wd={allowList:Cc,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Rd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Mi extends _e{constructor(a,p){if(rc===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(a,p),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return wd}static get DefaultType(){return Rd}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),U.off(this._element.closest(Lc),Pc,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const a=U.trigger(this._element,this.constructor.eventName("show")),p=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!p)return;this._disposePopper();const E=this._getTipElement();this._element.setAttribute("aria-describedby",E.getAttribute("id"));const{container:B}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(B.append(E),U.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(E),E.classList.add(ds),"ontouchstart"in document.documentElement)for(const z of[].concat(...document.body.children))U.on(z,"mouseover",h);this._queueCallback(()=>{U.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!U.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ds),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))U.off(a,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[bo]=!1,this._activeTrigger[Ur]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),U.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const p=this._getTemplateFactory(a).toHtml();if(!p)return null;p.classList.remove(So,ds),p.classList.add(`bs-${this.constructor.NAME}-auto`);const E=(B=>{do B+=Math.floor(1e6*Math.random());while(document.getElementById(B));return B})(this.constructor.NAME).toString();return p.setAttribute("id",E),this._isAnimated()&&p.classList.add(So),p}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new bd({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(So)}_isShown(){return this.tip&&this.tip.classList.contains(ds)}_createPopper(a){const p=g(this._config.placement,[this,a,this._element]),E=Ad[p.toUpperCase()];return xo(this._element,a,this._getPopperConfig(E))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(p=>Number.parseInt(p,10)):typeof a=="function"?p=>a(p,this._element):a}_resolvePossibleFunction(a){return g(a,[this._element])}_getPopperConfig(a){const p={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:E=>{this._getTipElement().setAttribute("data-popper-placement",E.state.placement)}}]};return{...p,...g(this._config.popperConfig,[p])}}_setListeners(){const a=this._config.trigger.split(" ");for(const p of a)if(p==="click")U.on(this._element,this.constructor.eventName("click"),this._config.selector,E=>{this._initializeOnDelegatedTarget(E).toggle()});else if(p!=="manual"){const E=p===Ur?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),B=p===Ur?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");U.on(this._element,E,this._config.selector,z=>{const ee=this._initializeOnDelegatedTarget(z);ee._activeTrigger[z.type==="focusin"?bo:Ur]=!0,ee._enter()}),U.on(this._element,B,this._config.selector,z=>{const ee=this._initializeOnDelegatedTarget(z);ee._activeTrigger[z.type==="focusout"?bo:Ur]=ee._element.contains(z.relatedTarget),ee._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},U.on(this._element.closest(Lc),Pc,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,p){clearTimeout(this._timeout),this._timeout=setTimeout(a,p)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const p=Q.getDataAttributes(this._element);for(const E of Object.keys(p))Td.has(E)&&delete p[E];return a={...p,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:c(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[p,E]of Object.entries(this._config))this.constructor.Default[p]!==E&&(a[p]=E);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const p=Mi.getOrCreateInstance(this,a);if(typeof a=="string"){if(p[a]===void 0)throw new TypeError(`No method named "${a}"`);p[a]()}})}}y(Mi);const Cd={...Mi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ld={...Mi.DefaultType,content:"(null|string|element|function)"};class fs extends Mi{static get Default(){return Cd}static get DefaultType(){return Ld}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const p=fs.getOrCreateInstance(this,a);if(typeof a=="string"){if(p[a]===void 0)throw new TypeError(`No method named "${a}"`);p[a]()}})}}y(fs);const To=".bs.scrollspy",Pd=`activate${To}`,Dc=`click${To}`,Dd=`load${To}.data-api`,ji="active",Ao="[href]",Uc=".nav-link",Ud=`${Uc}, .nav-item > ${Uc}, .list-group-item`,Id={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Nd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ir extends _e{constructor(a,p){super(a,p),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Id}static get DefaultType(){return Nd}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=c(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(p=>Number.parseFloat(p))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(U.off(this._config.target,Dc),U.on(this._config.target,Dc,Ao,a=>{const p=this._observableSections.get(a.target.hash);if(p){a.preventDefault();const E=this._rootElement||window,B=p.offsetTop-this._element.offsetTop;if(E.scrollTo)return void E.scrollTo({top:B,behavior:"smooth"});E.scrollTop=B}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(p=>this._observerCallback(p),a)}_observerCallback(a){const p=ee=>this._targetLinks.get(`#${ee.target.id}`),E=ee=>{this._previousScrollData.visibleEntryTop=ee.target.offsetTop,this._process(p(ee))},B=(this._rootElement||document.documentElement).scrollTop,z=B>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=B;for(const ee of a){if(!ee.isIntersecting){this._activeTarget=null,this._clearActiveClass(p(ee));continue}const ae=ee.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(z&&ae){if(E(ee),!B)return}else z||ae||E(ee)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=ce.find(Ao,this._config.target);for(const p of a){if(!p.hash||l(p))continue;const E=ce.findOne(decodeURI(p.hash),this._element);o(E)&&(this._targetLinks.set(decodeURI(p.hash),p),this._observableSections.set(p.hash,E))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(ji),this._activateParents(a),U.trigger(this._element,Pd,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains("dropdown-item"))ce.findOne(".dropdown-toggle",a.closest(".dropdown")).classList.add(ji);else for(const p of ce.parents(a,".nav, .list-group"))for(const E of ce.prev(p,Ud))E.classList.add(ji)}_clearActiveClass(a){a.classList.remove(ji);const p=ce.find(`${Ao}.${ji}`,a);for(const E of p)E.classList.remove(ji)}static jQueryInterface(a){return this.each(function(){const p=Ir.getOrCreateInstance(this,a);if(typeof a=="string"){if(p[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);p[a]()}})}}U.on(window,Dd,()=>{for(const x of ce.find('[data-bs-spy="scroll"]'))Ir.getOrCreateInstance(x)}),y(Ir);const Ei=".bs.tab",Od=`hide${Ei}`,Fd=`hidden${Ei}`,Bd=`show${Ei}`,zd=`shown${Ei}`,Hd=`click${Ei}`,kd=`keydown${Ei}`,Gd=`load${Ei}`,Vd="ArrowLeft",Ic="ArrowRight",Wd="ArrowUp",Nc="ArrowDown",wo="Home",Oc="End",Si="active",Fc="fade",Ro="show",Bc=".dropdown-toggle",Co=`:not(${Bc})`,zc='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Lo=`.nav-link${Co}, .list-group-item${Co}, [role="tab"]${Co}, ${zc}`,Xd=`.${Si}[data-bs-toggle="tab"], .${Si}[data-bs-toggle="pill"], .${Si}[data-bs-toggle="list"]`;class bi extends _e{constructor(a){super(a),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),U.on(this._element,kd,p=>this._keydown(p)))}static get NAME(){return"tab"}show(){const a=this._element;if(this._elemIsActive(a))return;const p=this._getActiveElem(),E=p?U.trigger(p,Od,{relatedTarget:a}):null;U.trigger(a,Bd,{relatedTarget:p}).defaultPrevented||E&&E.defaultPrevented||(this._deactivate(p,a),this._activate(a,p))}_activate(a,p){a&&(a.classList.add(Si),this._activate(ce.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),U.trigger(a,zd,{relatedTarget:p})):a.classList.add(Ro)},a,a.classList.contains(Fc)))}_deactivate(a,p){a&&(a.classList.remove(Si),a.blur(),this._deactivate(ce.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),U.trigger(a,Fd,{relatedTarget:p})):a.classList.remove(Ro)},a,a.classList.contains(Fc)))}_keydown(a){if(![Vd,Ic,Wd,Nc,wo,Oc].includes(a.key))return;a.stopPropagation(),a.preventDefault();const p=this._getChildren().filter(B=>!l(B));let E;if([wo,Oc].includes(a.key))E=p[a.key===wo?0:p.length-1];else{const B=[Ic,Nc].includes(a.key);E=D(p,a.target,B,!0)}E&&(E.focus({preventScroll:!0}),bi.getOrCreateInstance(E).show())}_getChildren(){return ce.find(Lo,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,p){this._setAttributeIfNotExists(a,"role","tablist");for(const E of p)this._setInitialAttributesOnChild(E)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const p=this._elemIsActive(a),E=this._getOuterElement(a);a.setAttribute("aria-selected",p),E!==a&&this._setAttributeIfNotExists(E,"role","presentation"),p||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const p=ce.getElementFromSelector(a);p&&(this._setAttributeIfNotExists(p,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(p,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,p){const E=this._getOuterElement(a);if(!E.classList.contains("dropdown"))return;const B=(z,ee)=>{const ae=ce.findOne(z,E);ae&&ae.classList.toggle(ee,p)};B(Bc,Si),B(".dropdown-menu",Ro),E.setAttribute("aria-expanded",p)}_setAttributeIfNotExists(a,p,E){a.hasAttribute(p)||a.setAttribute(p,E)}_elemIsActive(a){return a.classList.contains(Si)}_getInnerElement(a){return a.matches(Lo)?a:ce.findOne(Lo,a)}_getOuterElement(a){return a.closest(".nav-item, .list-group-item")||a}static jQueryInterface(a){return this.each(function(){const p=bi.getOrCreateInstance(this);if(typeof a=="string"){if(p[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);p[a]()}})}}U.on(document,Hd,zc,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),l(this)||bi.getOrCreateInstance(this).show()}),U.on(window,Gd,()=>{for(const x of ce.find(Xd))bi.getOrCreateInstance(x)}),y(bi);const ri=".bs.toast",qd=`mouseover${ri}`,Yd=`mouseout${ri}`,jd=`focusin${ri}`,$d=`focusout${ri}`,Kd=`hide${ri}`,Zd=`hidden${ri}`,Jd=`show${ri}`,Qd=`shown${ri}`,Hc="hide",ps="show",ms="showing",ef={animation:"boolean",autohide:"boolean",delay:"number"},tf={animation:!0,autohide:!0,delay:5e3};class Nr extends _e{constructor(a,p){super(a,p),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return tf}static get DefaultType(){return ef}static get NAME(){return"toast"}show(){U.trigger(this._element,Jd).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Hc),d(this._element),this._element.classList.add(ps,ms),this._queueCallback(()=>{this._element.classList.remove(ms),U.trigger(this._element,Qd),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(U.trigger(this._element,Kd).defaultPrevented||(this._element.classList.add(ms),this._queueCallback(()=>{this._element.classList.add(Hc),this._element.classList.remove(ms,ps),U.trigger(this._element,Zd)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ps),super.dispose()}isShown(){return this._element.classList.contains(ps)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,p){switch(a.type){case"mouseover":case"mouseout":this._hasMouseInteraction=p;break;case"focusin":case"focusout":this._hasKeyboardInteraction=p}if(p)return void this._clearTimeout();const E=a.relatedTarget;this._element===E||this._element.contains(E)||this._maybeScheduleHide()}_setListeners(){U.on(this._element,qd,a=>this._onInteraction(a,!0)),U.on(this._element,Yd,a=>this._onInteraction(a,!1)),U.on(this._element,jd,a=>this._onInteraction(a,!0)),U.on(this._element,$d,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const p=Nr.getOrCreateInstance(this,a);if(typeof a=="string"){if(p[a]===void 0)throw new TypeError(`No method named "${a}"`);p[a](this)}})}}return Ue(Nr),y(Nr),{Alert:He,Button:yt,Carousel:it,Collapse:ti,Dropdown:Mn,Modal:yi,Offcanvas:Gn,Popover:fs,ScrollSpy:Ir,Tab:bi,Toast:Nr,Tooltip:Mi}});const yr=[0,1,0],Mr=[0,0,1];function gr(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}function pf(i,e,t,n){return i*n*n+e*n+t}function xs(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function $s(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function No(i,e,t){const[n,r,s]=i,c=(t%360+360)%360,o=c===90?1:c===270?-1:0,l=c===0?1:c===180?-1:0,h=[[1,0,0,0,l,-o,0,o,l],[l,0,o,0,1,0,-o,0,l],[l,-o,0,o,l,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function Qc(i,e,t){const[n,r,s]=t;if(r===1)return i;if(s===1)return e;if(n===-1)return $s(e,i);if(n===1)return $s(i,e);if(s===-1)return e.map(c=>-c);if(r===-1)return i.map(c=>-c);throw new Error("unreachable")}function ys(i){const[e,t,n,r]=i;return[e,-t,n,r]}function el(i,e){const t={R:[0,-90,-1],L:[0,90,1],U:[1,-90,-1],D:[1,90,1],F:[2,-90,-1],B:[2,90,1],M:[0,90,2],E:[1,90,2],S:[2,-90,2],x:[0,-90,0],y:[1,-90,0],z:[2,-90,0]},n=i.match(/^([0-9]+)?(-([0-9]+))?([A-Za-z])(w?)([0-9]+)?(')?$/);if(!n)throw`parse op [${i}] error`;let r=n[4],s=!1;(n[5]==="w"||"rludbfmes".indexOf(r)>=0)&&(r=r.toUpperCase(),s=!0);let c=0,o=1,l=n[1],u=n[3];u?(c=parseInt(l||"1")-1,o=parseInt(u)):s?(c=0,o=parseInt(l||"2")):(c=parseInt(l||"1")-1,o=c+1);const[h,d,f]=t[r],_=n[7]?-1:1,v=n[6]?parseInt(n[6]):1,y=d*_*v;let g=0,m=0;switch(f){case 1:g=c,m=o;break;case-1:m=e-c,g=e-o;break;case 0:g=0,m=e;break;case 2:{const D=s?e-2:1,b=(e-D)%2===1?D+1:D;g=(e-b)/2,m=g+b;break}}return[h,y,g,m]}function Ks(i,e){let t=0,n=0;const r=[];for(;;){if(i[n]===" "||n>=i.length){const s=i.slice(t,n).trim();if(s.length>0&&r.push(el(s,e)),n>=i.length)break;n++,t=n;continue}if(i[n]===","||i[n]===":"){const s=i.slice(t,n).trim();s.length>0&&r.push(el(s,e));const c=Ks(i.slice(n+1),e);return i[n]===","?[...r,...c,...r.reverse().map(ys),...c.reverse().map(ys)]:[...r,...c,...r.reverse().map(ys)]}if(i[n]==="["||i[n]==="("){const s=i[n],c=i[n]==="["?"]":")";let o=1,l=n+1;for(;l<i.length&&(i[l]===s&&o++,i[l]===c&&o--,o!==0);)l++;let u=Ks(i.slice(n+1,l),e);l++,l<i.length&&i[l]=="'"&&(l++,u=u.reverse().map(ys));let h=1;if(l<i.length){let d=l;for(;d<i.length&&i[d]>="0"&&i[d]<="9";)d++;d>l&&(h=parseInt(i.slice(l,d))),l=d}for(let d=0;d<h;d++)r.push(...u);n=l,t=n;continue}n++}return r}function mf(i,e){function t(r,s,c,o){const l=(s/90%4+4)%4-2,u=d=>d===0?"2":d===1?"'":"";if(c===0&&o===i)return"xyz"[r].toLowerCase()+u(-l);const h="MES"[r];if(c*2===i-1&&o===c+1)return h+u(h==="S"?-l:l);if(c===1&&o===i-1)return h.toLowerCase()+u(h==="S"?-l:l);if(c+o>=i){const d="RUF"[r],f=i-o,_=i-c;return(_===1?"":_===f+1?`${f+1}`:`${f+1}-${_}`)+d+u(-l)}else{const d="LDB"[r],f=c,_=o;return(_===1?"":_===f+1?`${f+1}`:`${f+1}-${_}`)+d+u(l)}}const n=[];for(const r of e){const[s,c,o,l]=r;c!==0&&n.push(t(s,c,o,l))}return n.join(" ")}function tl(i,e,t){const n=Ou(i);for(const[r,s,c,o]of e)if(n.position[r]>=c&&n.position[r]<o){const[l,u,h]=n.position;n.F=No(n.F,r,s),n.T=No(n.T,r,s);const d=(t-1)/2,[f,_,v]=No([l-d,u-d,h-d],r,s);n.position=[f+d,_+d,v+d]}return n}var va=(i=>(i[i.Corner=0]="Corner",i[i.Edge=1]="Edge",i[i.Center=2]="Center",i[i.Inner=3]="Inner",i[i.Inside=4]="Inside",i))(va||{});function gf(i,e){const t=e.reduce((n,r)=>n+(r===0||r===i-1?1:0),0);return t===3?0:t===2?1:t===0?4:e.every(n=>n===0||n===i-1||n*2===i-1)?2:3}function nl(i,e){const[t,n,r]=e,s=(c,o,l,u,h,d,f,_)=>{const v=o*2===c-1,y=l*2===c-1,g=c===3?"":"-center";return o===0&&l===0?u+d+_:o===0&&l===c-1?u+d+h:o===c-1&&l===0?u+f+_:o===c-1&&l===c-1?u+f+h:o===0&&y?u+d+g:o===c-1&&y?u+f+g:l===0&&v?u+_+g:l===c-1&&v?u+h+g:v&&y?u+"-center":u+(o*2<c?o+1:o-c)+","+(l*2<c?l+1:l-c)};if(r===i-1)return s(i,t,n,"F","U","L","R","D");if(r===0)return s(i,i-1-t,n,"B","U","R","L","D");if(n===i-1)return s(i,t,i-1-r,"U","B","L","R","F");if(n===0)return s(i,t,r,"D","F","L","R","B");if(t===i-1)return s(i,i-1-r,n,"R","U","F","B","D");if(t===0)return s(i,r,n,"L","U","B","F","D")}function _f(i,e){const t=$s(Mr,i.F),n=$s(yr,i.T),r=i.position.reduce((s,c)=>s+(c===0||c===e-1?1:0),0);if(r===3){const s=i.position.map(o=>o===0?-1:1);return xs(n,s)<0?120:-120}else{if(r===2)return 180;if(xs(Mr,i.F)===-1||xs(yr,i.T)===-1)return 180;{const s=(c,o,l)=>{const u=xs(c,o.map(h=>h===0?1:-1));if(u!==0)return u<0?-90:90};return s(t,i.position)||s(n,i.position)||0}}}function Ou(i){return{F:[...i.F],T:[...i.T],position:[...i.position]}}function il(i){const[e,t,n]=i;return{position:[e,t,n],T:yr,F:Mr}}function vf(i){let e=yr,t=Mr;for(let n=1;;n++){for(const r of i)e=Qc(r.nT,r.nF,e),t=Qc(r.nT,r.nF,t);if(gr(e,yr)&&gr(t,Mr))return n}}function xf(i){const e=(r,s)=>{for(;s;){const c=s;s=r%s,r=c}return r},t=(r,s)=>r*s/e(r,s);let n=1;for(const r of i){const s=vf(r);n=t(n,s*r.length)}return n}function yf(i,e=3,t=!1){let n=[];try{n=Ks(i,e)}catch{i=i.replace(/([rludfbxyzmes])/ig," $1"),n=Ks(i,e)}const r={},s=[],c=[],o=(l,u,h)=>{if(l*e*e+u*e+h in r)return;let f=tl(il([l,u,h]),n,e);if(gr(f.position,[l,u,h]))(!gr(f.T,yr)||!gr(f.F,Mr))&&(s.push({unit:Ou(f),degree:_f(f,e)}),c.push([{p1:f.position,p2:f.position,nT:f.T,nF:f.F}]));else{const _=[{p1:[l,u,h],p2:[...f.position],nT:f.T,nF:f.F}];for(;!gr(f.position,[l,u,h]);){r[pf(...f.position,e)]=!0;const v=f.position;f=tl(il(f.position),n,e),_.push({p1:v,p2:[...f.position],nT:f.T,nF:f.F})}c.push(_)}};if(t)for(let l=0;l<e;l++)for(let u=0;u<e;u++)for(let h=0;h<e;h++)o(l,u,h);else{for(let l=0;l<e;l++)for(let u=0;u<e;u++)o(l,u,0),o(l,u,e-1);for(let l=0;l<e;l++)for(let u=1;u<e-1;u++)o(l,0,u),o(l,e-1,u);for(let l=1;l<e-1;l++)for(let u=1;u<e-1;u++)o(0,l,u),o(e-1,l,u)}return{N:e,alg:i,regulatedAlg:mf(e,n),ops:n,cycles:c.map(l=>l.map(u=>u.p1)).filter(l=>l.length>1),rotates:s,permutations:c,order:xf(c)}}function Mf(i,e,t,n,r,s,c){const o=i.createLinearGradient(e,t,n,r);o.addColorStop(0,"rgba(255, 255, 255, 0)"),o.addColorStop(.2,s),o.addColorStop(1,s),i.strokeStyle=o;var l=n-e,u=r-t,h=Math.atan2(u,l);i.moveTo(e,t),i.lineTo(n,r),i.lineTo(n-c*Math.cos(h-Math.PI/6),r-c*Math.sin(h-Math.PI/6)),i.moveTo(n,r),i.lineTo(n-c*Math.cos(h+Math.PI/6),r-c*Math.sin(h+Math.PI/6))}function Ms(i,e,t,n,r){i.moveTo(e,t),i.lineTo(e-r*Math.cos(n-Math.PI/6),t-r*Math.sin(n-Math.PI/6)),i.moveTo(e,t),i.lineTo(e-r*Math.cos(n+Math.PI/6),t-r*Math.sin(n+Math.PI/6))}function Ef(i,e,t,n,r,s){const c=i.createLinearGradient(e,t-s,e,t+s);c.addColorStop(0,"rgba(255, 255, 255, 0)"),c.addColorStop(.2,r),c.addColorStop(1,r),i.strokeStyle=r;const o=s/2;n===180?(i.beginPath(),i.arc(e,t,s,-Math.PI*.3,Math.PI*.5,!1),Ms(i,e,t+s,-Math.PI*1.1,o),i.stroke(),i.beginPath(),i.arc(e,t,s,Math.PI*.7,Math.PI*1.5,!1),Ms(i,e,t-s,-Math.PI*.1,o),i.stroke()):n>0?(i.arc(e,t,s,-Math.PI/2,Math.PI,!1),Ms(i,e-s,t,-Math.PI*.6,o)):n<0&&(i.arc(e,t,s,-Math.PI/2,0,!0),Ms(i,e+s,t,-Math.PI*.4,o))}class Fu{constructor(){Io(this,"palette",["rgb(0, 0, 255)","rgb(255, 0, 0)","rgb(0, 128, 0)","rgb(255, 0, 255)","rgb(0, 128, 255)","rgb(255, 128, 0)"]);Io(this,"index",0)}nextColor(){const e=this.palette[this.index];return this.index=(this.index+1)%this.palette.length,e}}function Bu(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Sf(i){const e=Math.sqrt(Bu(i,i));return e===0?i:i.map(t=>t/e)}function Zs(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function rl(i,e){return i.map(t=>t*e)}function sl(i,e){return i.map((t,n)=>t+e[n])}function bf(i,e){return i.map((t,n)=>t-e[n])}function Tf(i){return Math.sqrt(Bu(i,i))}function Af(i){const e=~~i.clientWidth,t=~~i.clientHeight,n=2;return i.width!==e*n||i.height!==t*n?(i.width=e*n,i.height=t*n,console.log("canvas resize",e,t),!0):!1}function wf(i){for(;i.firstChild;)i.removeChild(i.lastChild)}function Rf(...i){const e=[];console.log(i);for(let t=0;t+1<i.length;t+=2){const n=i[t].startsWith("*")?i[t].slice(1):i[t],r=!!i[t].startsWith("*"),s=i[t+1],c=document.createElement("span");c.style.color=n,r&&(c.style.fontWeight="700"),c.append(s),e.push(c)}return e}const Cf=`
[atom]
General 3-cycle: U' iF jD iF' U iF jD' iF' // rotate centers if (i, j) is the center location
3-cycle on single face centers: iL iF jD iF' U iF jD' iF' U' iL' // 2 <= i <= n/2, 2 <= j <= (n+1)/2
Swap corner (ETR): (1-hR U L U' 1-hR' U L' U' F)9
Spin Corner: R U R' U' R U R' U' D U R U' R' U R U' R' D'
Swap Edge: iR2 B2 U2 iL U2 iR' U2 iR U2 F2 iR F2 iL' B2 iR2
Flip Edge: R' E' R2 E2 R' U R E2 R2 E R U'
[4x4x4] Swap Edge: 2R' U' 2U 2R U' 2R U 2R 2U' 2R' 2U 2R U 2R U' 2R 1-2U' 2R' U2

[misc]
[3x3x3] Highest order (1260): (R F2 B' U B')
[3x3x3] Super Flip: U R2 F B R B2 R U2 L B2 R U' D' R2 F R' L B2 U2 F2
Cube in Cube: F L F U' R U F2 L2 U' L' B D' B' L2 U

[PLL]
Aa: x R' U R' D2 R U' R' D2 R2 x'
E: x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x

[OLL]
OLL21: R U R' U R U' R' U R U2 R'
OLL21a: R U2 R' U' R U R' U' R U' R'

`,Es=[];function Lf(){var e,t;if(Es.length!==0)return Es;let i=[];for(const n of Cf.split(/\n/g)){const r=n.match(/^\[(.*)\]$/);if(r){i=r[1].split(",").map(c=>c.trim());continue}const s=n.match(/^(\[([^)]+)\])?\s*([^:]+)\s*:\s*(.*)$/);if(s){const c=((e=s[2])==null?void 0:e.split(",").map(u=>u.trim()))||[],o=s[3],l=s[4].split("//");Es.push({name:o,algorithm:l[0].trim(),tags:[...i,...c],desc:(t=l[1])==null?void 0:t.trim()})}}return Es}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="156",Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pf=0,ol=1,Df=2,zu=1,Uf=2,$n=3,gi=0,rn=1,Kn=2,fi=0,vr=1,al=2,cl=3,ll=4,If=5,pr=100,Nf=101,Of=102,ul=103,hl=104,Ff=200,Bf=201,zf=202,Hf=203,Hu=204,ku=205,kf=206,Gf=207,Vf=208,Wf=209,Xf=210,qf=0,Yf=1,jf=2,xa=3,$f=4,Kf=5,Zf=6,Jf=7,Gu=0,Qf=1,ep=2,pi=0,tp=1,np=2,ip=3,rp=4,sp=5,Vu=300,Er=301,Sr=302,ya=303,Ma=304,no=306,Ea=1e3,Ln=1001,Sa=1002,tn=1003,dl=1004,Oo=1005,vn=1006,op=1007,$r=1008,mi=1009,ap=1010,cp=1011,Ca=1012,Wu=1013,hi=1014,di=1015,Kr=1016,Xu=1017,qu=1018,Ui=1020,lp=1021,Pn=1023,up=1024,hp=1025,Ii=1026,br=1027,dp=1028,Yu=1029,fp=1030,ju=1031,$u=1033,Fo=33776,Bo=33777,zo=33778,Ho=33779,fl=35840,pl=35841,ml=35842,gl=35843,pp=36196,_l=37492,vl=37496,xl=37808,yl=37809,Ml=37810,El=37811,Sl=37812,bl=37813,Tl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Ll=37819,Pl=37820,Dl=37821,ko=36492,Ul=36494,Il=36495,mp=36283,Nl=36284,Ol=36285,Fl=36286,Ku=3e3,Ni=3001,gp=3200,_p=3201,vp=0,xp=1,Oi="",St="srgb",Bn="srgb-linear",io="display-p3",Go=7680,yp=519,Mp=512,Ep=513,Sp=514,bp=515,Tp=516,Ap=517,wp=518,Rp=519,Bl=35044,zl="300 es",ba=1035,Zn=2e3,Js=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const Vr=Math.PI/180,Zr=180/Math.PI;function Ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function La(i,e){return(i%e+e)%e}function Cp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Lp(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Pp(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function Dp(i,e=1){return e-Math.abs(La(i,e*2)-e)}function Up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Op(i,e){return i+Math.random()*(e-i)}function Fp(i){return i*(.5-Math.random())}function Bp(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zp(i){return i*Vr}function Hp(i){return i*Zr}function Ta(i){return(i&i-1)===0&&i!==0}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gp(i,e,t,n,r){const s=Math.cos,c=Math.sin,o=s(t/2),l=c(t/2),u=s((e+n)/2),h=c((e+n)/2),d=s((e-n)/2),f=c((e-n)/2),_=s((n-e)/2),v=c((n-e)/2);switch(r){case"XYX":i.set(o*h,l*d,l*f,o*u);break;case"YZY":i.set(l*f,o*h,l*d,o*u);break;case"ZXZ":i.set(l*d,l*f,o*h,o*u);break;case"XZX":i.set(o*h,l*v,l*_,o*u);break;case"YXY":i.set(l*_,o*h,l*v,o*u);break;case"ZYZ":i.set(l*v,l*_,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vp={DEG2RAD:Vr,RAD2DEG:Zr,generateUUID:Ar,clamp:zt,euclideanModulo:La,mapLinear:Cp,inverseLerp:Lp,lerp:Wr,damp:Pp,pingpong:Dp,smoothstep:Up,smootherstep:Ip,randInt:Np,randFloat:Op,randFloatSpread:Fp,seededRandom:Bp,degToRad:zp,radToDeg:Hp,isPowerOfTwo:Ta,ceilPowerOfTwo:kp,floorPowerOfTwo:Qs,setQuaternionFromProperEuler:Gp,normalize:Qt,denormalize:mr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*r+e.x,this.y=s*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,c,o,l,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,o,l,u)}set(e,t,n,r,s,c,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=c,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],o=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],_=n[5],v=n[8],y=r[0],g=r[3],m=r[6],D=r[1],b=r[4],C=r[7],A=r[2],L=r[5],w=r[8];return s[0]=c*y+o*D+l*A,s[3]=c*g+o*b+l*L,s[6]=c*m+o*C+l*w,s[1]=u*y+h*D+d*A,s[4]=u*g+h*b+d*L,s[7]=u*m+h*C+d*w,s[2]=f*y+_*D+v*A,s[5]=f*g+_*b+v*L,s[8]=f*m+_*C+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return t*c*h-t*o*u-n*s*h+n*o*l+r*s*u-r*c*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=h*c-o*u,f=o*l-h*s,_=u*s-c*l,v=t*d+n*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*c)*y,e[3]=f*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=_*y,e[7]=(n*l-u*t)*y,e[8]=(c*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,c,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*c+u*o)+c+e,-r*u,r*l,-r*(-u*c+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new nt;function Zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wp(){const i=eo("canvas");return i.style.display="block",i}const kl={};function Xr(i){i in kl||(kl[i]=!0,console.warn(i))}function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xp=new nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qp=new nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Yp(i){return i.convertSRGBToLinear().applyMatrix3(qp)}function jp(i){return i.applyMatrix3(Xp).convertLinearToSRGB()}const $p={[Bn]:i=>i,[St]:i=>i.convertSRGBToLinear(),[io]:Yp},Kp={[Bn]:i=>i,[St]:i=>i.convertLinearToSRGB(),[io]:jp},Sn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Bn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=$p[e],r=Kp[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Ji;class Ju{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=eo("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=xr(s[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zp=0;class Qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,o=r.length;c<o;c++)r[c].isDataTexture?s.push(Xo(r[c].image)):s.push(Xo(r[c]))}else s=Xo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class sn extends Hi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=Ln,r=Ln,s=vn,c=$r,o=Pn,l=mi,u=sn.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Ar(),this.name="",this.source=new Qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ni?St:Oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Ni:Ku}set encoding(e){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ni?St:Oi}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Vu;sn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],_=l[5],v=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+g)<.1&&Math.abs(u+_+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,C=(_+1)/2,A=(m+1)/2,L=(h+f)/4,w=(d+y)/4,F=(v+g)/4;return b>C&&b>A?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=L/n,s=w/n):C>A?C<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),n=L/r,s=F/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=w/s,r=F/s),this.set(n,r,s,t),this}let D=Math.sqrt((g-v)*(g-v)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(D)<.001&&(D=1),this.x=(g-v)/D,this.y=(d-y)/D,this.z=(f-h)/D,this.w=Math.acos((u+_+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qp extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?St:Oi),this.texture=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Qp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class eh extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class em extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,c,o){let l=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3];const f=s[c+0],_=s[c+1],v=s[c+2],y=s[c+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=y;return}if(d!==y||l!==f||u!==_||h!==v){let g=1-o;const m=l*f+u*_+h*v+d*y,D=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const A=Math.sqrt(b),L=Math.atan2(A,m*D);g=Math.sin(g*L)/A,o=Math.sin(o*L)/A}const C=o*D;if(l=l*g+f*C,u=u*g+_*C,h=h*g+v*C,d=d*g+y*C,g===1-o){const A=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=A,u*=A,h*=A,d*=A}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,c){const o=n[r],l=n[r+1],u=n[r+2],h=n[r+3],d=s[c],f=s[c+1],_=s[c+2],v=s[c+3];return e[t]=o*v+h*d+l*_-u*f,e[t+1]=l*v+h*f+u*d-o*_,e[t+2]=u*v+h*_+o*f-l*d,e[t+3]=h*v-o*d-l*f-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,c=e._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),_=l(r/2),v=l(s/2);switch(c){case"XYZ":this._x=f*h*d+u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d-f*_*v;break;case"YXZ":this._x=f*h*d+u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d+f*_*v;break;case"ZXY":this._x=f*h*d-u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d-f*_*v;break;case"ZYX":this._x=f*h*d-u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d+f*_*v;break;case"YZX":this._x=f*h*d+u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d-f*_*v;break;case"XZY":this._x=f*h*d-u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],c=t[1],o=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-u)*_,this._z=(c-r)*_}else if(n>o&&n>d){const _=2*Math.sqrt(1+n-o-d);this._w=(h-l)/_,this._x=.25*_,this._y=(r+c)/_,this._z=(s+u)/_}else if(o>d){const _=2*Math.sqrt(1+o-n-d);this._w=(s-u)/_,this._x=(r+c)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+d-n-o);this._w=(c-r)/_,this._x=(s+u)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,c=e._w,o=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+c*o+r*u-s*l,this._y=r*h+c*l+s*o-n*u,this._z=s*h+c*u+n*l-r*o,this._w=c*h-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,c=this._w;let o=c*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*c+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=c*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,c=e.y,o=e.z,l=e.w,u=l*t+c*r-o*n,h=l*n+o*t-s*r,d=l*r+s*n-c*t,f=-s*t-c*n-o*r;return this.x=u*l+f*-s+h*-o-d*-c,this.y=h*l+f*-c+d*-s-u*-o,this.z=d*l+f*-o+u*-c-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,c=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*c-n*l,this.z=n*o-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new O,Gl=new Bi;class Jr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox),Qi.applyMatrix4(e.matrixWorld),this.union(Qi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let c=0,o=s.count;c<o;c++)Wn.fromBufferAttribute(s,c).applyMatrix4(e.matrixWorld),this.expandByPoint(Wn)}else r.boundingBox===null&&r.computeBoundingBox(),Qi.copy(r.boundingBox),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Ss.subVectors(this.max,Or),er.subVectors(e.a,Or),tr.subVectors(e.b,Or),nr.subVectors(e.c,Or),oi.subVectors(tr,er),ai.subVectors(nr,tr),Ai.subVectors(er,nr);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!Yo(t,er,tr,nr,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,er,tr,nr,Ss))?!1:(bs.crossVectors(oi,ai),t=[bs.x,bs.y,bs.z],Yo(t,er,tr,nr,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,Qi=new Jr,er=new O,tr=new O,nr=new O,oi=new O,ai=new O,Ai=new O,Or=new O,Ss=new O,bs=new O,wi=new O;function Yo(i,e,t,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){wi.fromArray(i,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),u=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const tm=new Jr,Fr=new O,jo=new O;class ro{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,c=e.length;s<c;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(jo)),this.expandByPoint(Fr.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new O,$o=new O,Ts=new O,ci=new O,Ko=new O,As=new O,Zo=new O;class Pa{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$o.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),ci.copy(this.origin).sub($o);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Ts),o=ci.dot(this.direction),l=-ci.dot(Ts),u=ci.lengthSq(),h=Math.abs(1-c*c);let d,f,_,v;if(h>0)if(d=c*l-o,f=c*o-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const y=1/h;d*=y,f*=y,_=d*(d+c*f+2*o)+f*(c*d+f+2*l)+u}else f=s,d=Math.max(0,-(c*f+o)),_=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(c*f+o)),_=-d*d+f*(f+2*l)+u;else f<=-v?(d=Math.max(0,-(-c*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+u):(d=Math.max(0,-(c*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+u);else f=c>0?-s:s,d=Math.max(0,-(c*f+o)),_=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($o).addScaledVector(Ts,f),_}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const c=Math.sqrt(s-r),o=n-c,l=n+c;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,c,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,c=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,c=(e.min.y-f.y)*h),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){Ko.subVectors(t,e),As.subVectors(n,e),Zo.crossVectors(Ko,As);let c=this.direction.dot(Zo),o;if(c>0){if(r)return null;o=1}else if(c<0)o=-1,c=-c;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(As.crossVectors(ci,As));if(l<0)return null;const u=o*this.direction.dot(Ko.cross(ci));if(u<0||l+u>c)return null;const h=-o*ci.dot(Zo);return h<0?null:this.at(h/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,r,s,c,o,l,u,h,d,f,_,v,y,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,o,l,u,h,d,f,_,v,y,g)}set(e,t,n,r,s,c,o,l,u,h,d,f,_,v,y,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=c,m[9]=o,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=_,m[7]=v,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),c=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,c=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=c*h,_=c*d,v=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=_+v*u,t[5]=f-y*u,t[9]=-o*l,t[2]=y-f*u,t[6]=v+_*u,t[10]=c*l}else if(e.order==="YXZ"){const f=l*h,_=l*d,v=u*h,y=u*d;t[0]=f+y*o,t[4]=v*o-_,t[8]=c*u,t[1]=c*d,t[5]=c*h,t[9]=-o,t[2]=_*o-v,t[6]=y+f*o,t[10]=c*l}else if(e.order==="ZXY"){const f=l*h,_=l*d,v=u*h,y=u*d;t[0]=f-y*o,t[4]=-c*d,t[8]=v+_*o,t[1]=_+v*o,t[5]=c*h,t[9]=y-f*o,t[2]=-c*u,t[6]=o,t[10]=c*l}else if(e.order==="ZYX"){const f=c*h,_=c*d,v=o*h,y=o*d;t[0]=l*h,t[4]=v*u-_,t[8]=f*u+y,t[1]=l*d,t[5]=y*u+f,t[9]=_*u-v,t[2]=-u,t[6]=o*l,t[10]=c*l}else if(e.order==="YZX"){const f=c*l,_=c*u,v=o*l,y=o*u;t[0]=l*h,t[4]=y-f*d,t[8]=v*d+_,t[1]=d,t[5]=c*h,t[9]=-o*h,t[2]=-u*h,t[6]=_*d+v,t[10]=f-y*d}else if(e.order==="XZY"){const f=c*l,_=c*u,v=o*l,y=o*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+y,t[5]=c*h,t[9]=_*d-v,t[2]=v*d-_,t[6]=o*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nm,e,im)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),li.crossVectors(n,an),li.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),li.crossVectors(n,an)),li.normalize(),ws.crossVectors(an,li),r[0]=li.x,r[4]=ws.x,r[8]=an.x,r[1]=li.y,r[5]=ws.y,r[9]=an.y,r[2]=li.z,r[6]=ws.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],o=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],_=n[13],v=n[2],y=n[6],g=n[10],m=n[14],D=n[3],b=n[7],C=n[11],A=n[15],L=r[0],w=r[4],F=r[8],M=r[12],T=r[1],X=r[5],te=r[9],G=r[13],j=r[2],$=r[6],re=r[10],H=r[14],U=r[3],se=r[7],ie=r[11],q=r[15];return s[0]=c*L+o*T+l*j+u*U,s[4]=c*w+o*X+l*$+u*se,s[8]=c*F+o*te+l*re+u*ie,s[12]=c*M+o*G+l*H+u*q,s[1]=h*L+d*T+f*j+_*U,s[5]=h*w+d*X+f*$+_*se,s[9]=h*F+d*te+f*re+_*ie,s[13]=h*M+d*G+f*H+_*q,s[2]=v*L+y*T+g*j+m*U,s[6]=v*w+y*X+g*$+m*se,s[10]=v*F+y*te+g*re+m*ie,s[14]=v*M+y*G+g*H+m*q,s[3]=D*L+b*T+C*j+A*U,s[7]=D*w+b*X+C*$+A*se,s[11]=D*F+b*te+C*re+A*ie,s[15]=D*M+b*G+C*H+A*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],c=e[1],o=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],_=e[14],v=e[3],y=e[7],g=e[11],m=e[15];return v*(+s*l*d-r*u*d-s*o*f+n*u*f+r*o*_-n*l*_)+y*(+t*l*_-t*u*f+s*c*f-r*c*_+r*u*h-s*l*h)+g*(+t*u*d-t*o*_-s*c*d+n*c*_+s*o*h-n*u*h)+m*(-r*o*h-t*l*d+t*o*f+r*c*d-n*c*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],_=e[11],v=e[12],y=e[13],g=e[14],m=e[15],D=d*g*u-y*f*u+y*l*_-o*g*_-d*l*m+o*f*m,b=v*f*u-h*g*u-v*l*_+c*g*_+h*l*m-c*f*m,C=h*y*u-v*d*u+v*o*_-c*y*_-h*o*m+c*d*m,A=v*d*l-h*y*l-v*o*f+c*y*f+h*o*g-c*d*g,L=t*D+n*b+r*C+s*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return e[0]=D*w,e[1]=(y*f*s-d*g*s-y*r*_+n*g*_+d*r*m-n*f*m)*w,e[2]=(o*g*s-y*l*s+y*r*u-n*g*u-o*r*m+n*l*m)*w,e[3]=(d*l*s-o*f*s-d*r*u+n*f*u+o*r*_-n*l*_)*w,e[4]=b*w,e[5]=(h*g*s-v*f*s+v*r*_-t*g*_-h*r*m+t*f*m)*w,e[6]=(v*l*s-c*g*s-v*r*u+t*g*u+c*r*m-t*l*m)*w,e[7]=(c*f*s-h*l*s+h*r*u-t*f*u-c*r*_+t*l*_)*w,e[8]=C*w,e[9]=(v*d*s-h*y*s-v*n*_+t*y*_+h*n*m-t*d*m)*w,e[10]=(c*y*s-v*o*s+v*n*u-t*y*u-c*n*m+t*o*m)*w,e[11]=(h*o*s-c*d*s-h*n*u+t*d*u+c*n*_-t*o*_)*w,e[12]=A*w,e[13]=(h*y*r-v*d*r+v*n*f-t*y*f-h*n*g+t*d*g)*w,e[14]=(v*o*r-c*y*r-v*n*l+t*y*l+c*n*g-t*o*g)*w,e[15]=(c*d*r-h*o*r+h*n*l-t*d*l-c*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,c=e.x,o=e.y,l=e.z,u=s*c,h=s*o;return this.set(u*c+n,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+n,h*l-r*c,0,u*l-r*o,h*l+r*c,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,c){return this.set(1,n,s,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,c=t._y,o=t._z,l=t._w,u=s+s,h=c+c,d=o+o,f=s*u,_=s*h,v=s*d,y=c*h,g=c*d,m=o*d,D=l*u,b=l*h,C=l*d,A=n.x,L=n.y,w=n.z;return r[0]=(1-(y+m))*A,r[1]=(_+C)*A,r[2]=(v-b)*A,r[3]=0,r[4]=(_-C)*L,r[5]=(1-(f+m))*L,r[6]=(g+D)*L,r[7]=0,r[8]=(v+b)*w,r[9]=(g-D)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ir.set(r[0],r[1],r[2]).length();const c=ir.set(r[4],r[5],r[6]).length(),o=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const u=1/s,h=1/c,d=1/o;return bn.elements[0]*=u,bn.elements[1]*=u,bn.elements[2]*=u,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),n.x=s,n.y=c,n.z=o,this}makePerspective(e,t,n,r,s,c,o=Zn){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let _,v;if(o===Zn)_=-(c+s)/(c-s),v=-2*c*s/(c-s);else if(o===Js)_=-c/(c-s),v=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,c,o=Zn){const l=this.elements,u=1/(t-e),h=1/(n-r),d=1/(c-s),f=(t+e)*u,_=(n+r)*h;let v,y;if(o===Zn)v=(c+s)*d,y=-2*d;else if(o===Js)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new O,bn=new Lt,nm=new O(0,0,0),im=new O(1,1,1),li=new O,ws=new O,an=new O,Vl=new Lt,Wl=new Bi;class so{constructor(e=0,t=0,n=0,r=so.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],c=r[4],o=r[8],l=r[1],u=r[5],h=r[9],d=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-c,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-c,u));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}so.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rm=0;const Xl=new O,rr=new Bi,qn=new Lt,Rs=new O,Br=new O,sm=new O,om=new Bi,ql=new O(1,0,0),Yl=new O(0,1,0),jl=new O(0,0,1),am={type:"added"},cm={type:"removed"};class Wt extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new O,t=new so,n=new Bi,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new nt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Br,Rs,this.up):qn.lookAt(Rs,Br,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(qn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(am)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const c=this.children[r].getObjectsByProperty(e,t);c.length>0&&(n=n.concat(c))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=c(e.geometries),l=c(e.materials),u=c(e.textures),h=c(e.images),d=c(e.shapes),f=c(e.skeletons),_=c(e.animations),v=c(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function c(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new O(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new O,Yn=new O,Jo=new O,jn=new O,sr=new O,or=new O,$l=new O,Qo=new O,ea=new O,ta=new O;let Cs=!1;class Cn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Tn.subVectors(e,t),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Tn.subVectors(r,t),Yn.subVectors(n,t),Jo.subVectors(e,t);const c=Tn.dot(Tn),o=Tn.dot(Yn),l=Tn.dot(Jo),u=Yn.dot(Yn),h=Yn.dot(Jo),d=c*u-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,_=(u*l-o*h)*f,v=(c*h-o*l)*f;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,r,s,c,o,l){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(e,t,n,r,s,c,o,l)}static getInterpolation(e,t,n,r,s,c,o,l){return this.getBarycoord(e,t,n,r,jn),l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(c,jn.y),l.addScaledVector(o,jn.z),l}static isFrontFacing(e,t,n,r){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),Cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let c,o;sr.subVectors(r,n),or.subVectors(s,n),Qo.subVectors(e,n);const l=sr.dot(Qo),u=or.dot(Qo);if(l<=0&&u<=0)return t.copy(n);ea.subVectors(e,r);const h=sr.dot(ea),d=or.dot(ea);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return c=l/(l-h),t.copy(n).addScaledVector(sr,c);ta.subVectors(e,s);const _=sr.dot(ta),v=or.dot(ta);if(v>=0&&_<=v)return t.copy(s);const y=_*u-l*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(or,o);const g=h*v-_*d;if(g<=0&&d-h>=0&&_-v>=0)return $l.subVectors(s,r),o=(d-h)/(d-h+(_-v)),t.copy(r).addScaledVector($l,o);const m=1/(g+y+f);return c=y*m,o=f*m,t.copy(n).addScaledVector(sr,c).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lm=0;class Qr extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=vr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=ku,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const o in s){const l=s[o];delete l.metadata,c.push(l)}return c}if(t){const s=r(e.textures),c=r(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Sn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Sn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Sn.workingColorSpace){if(e=La(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=na(c,s,e+1/3),this.g=na(c,s,e),this.b=na(c,s,e-1/3)}return Sn.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=r[1],o=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Sn.fromWorkingColorSpace(Yt.copy(this),e),Math.round(zt(Yt.r*255,0,255))*65536+Math.round(zt(Yt.g*255,0,255))*256+Math.round(zt(Yt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Sn.workingColorSpace){Sn.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,c=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const h=(o+c)/2;if(o===c)l=0,u=0;else{const d=c-o;switch(u=h<=.5?d/(c+o):d/(2-c-o),c){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=Sn.workingColorSpace){return Sn.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=St){Sn.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(An),An.h+=e,An.s+=t,An.l+=n,this.setHSL(An.h,An.s,An.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Ls);const n=Wr(An.h,Ls.h,t),r=Wr(An.s,Ls.s,t),s=Wr(An.l,Ls.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new dt;dt.NAMES=nh;class qr extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new O,Ps=new Re;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this.updateRange={offset:0,count:-1},this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ih extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rh extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let um=0;const _n=new Lt,ia=new Wt,ar=new O,cn=new Jr,zr=new Jr,Bt=new O;class yn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?rh:ih)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const o=t[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(cn.min,zr.min),cn.expandByPoint(Bt),Bt.addVectors(cn.max,zr.max),cn.expandByPoint(Bt)):(cn.expandByPoint(zr.min),cn.expandByPoint(zr.max))}cn.getCenter(n);let r=0;for(let s=0,c=e.count;s<c;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,c=t.length;s<c;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Bt.fromBufferAttribute(o,u),l&&(ar.fromBufferAttribute(e,u),Bt.add(ar)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,c=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let T=0;T<o;T++)u[T]=new O,h[T]=new O;const d=new O,f=new O,_=new O,v=new Re,y=new Re,g=new Re,m=new O,D=new O;function b(T,X,te){d.fromArray(r,T*3),f.fromArray(r,X*3),_.fromArray(r,te*3),v.fromArray(c,T*2),y.fromArray(c,X*2),g.fromArray(c,te*2),f.sub(d),_.sub(d),y.sub(v),g.sub(v);const G=1/(y.x*g.y-g.x*y.y);isFinite(G)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(_,-y.y).multiplyScalar(G),D.copy(_).multiplyScalar(y.x).addScaledVector(f,-g.x).multiplyScalar(G),u[T].add(m),u[X].add(m),u[te].add(m),h[T].add(D),h[X].add(D),h[te].add(D))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let T=0,X=C.length;T<X;++T){const te=C[T],G=te.start,j=te.count;for(let $=G,re=G+j;$<re;$+=3)b(n[$+0],n[$+1],n[$+2])}const A=new O,L=new O,w=new O,F=new O;function M(T){w.fromArray(s,T*3),F.copy(w);const X=u[T];A.copy(X),A.sub(w.multiplyScalar(w.dot(X))).normalize(),L.crossVectors(F,X);const G=L.dot(h[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=G}for(let T=0,X=C.length;T<X;++T){const te=C[T],G=te.start,j=te.count;for(let $=G,re=G+j;$<re;$+=3)M(n[$+0]),M(n[$+1]),M(n[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const r=new O,s=new O,c=new O,o=new O,l=new O,u=new O,h=new O,d=new O;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),c.fromBufferAttribute(t,g),h.subVectors(c,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),o.add(h),l.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),c.fromBufferAttribute(t,f+2),h.subVectors(c,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(l.length*h);let _=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?_=l[y]*o.data.stride+o.offset:_=l[y]*h;for(let m=0;m<h;m++)f[v++]=u[_++]}return new Fn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],_=e(f,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let o=0,l=c.length;o<l;o++){const u=c[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const _=u[d];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new Lt,Ri=new Pa,Ds=new ro,Zl=new O,cr=new O,lr=new O,ur=new O,ra=new O,Us=new O,Is=new Re,Ns=new Re,Os=new Re,Jl=new O,Ql=new O,eu=new O,Fs=new O,Bs=new O;class ln extends Wt{constructor(e=new yn,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],d=s[l];h!==0&&(ra.fromBufferAttribute(d,e),c?Us.addScaledVector(ra,h):Us.addScaledVector(ra.sub(t),h))}t.add(Us)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(Ds.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ds,Zl)===null||Ri.origin.distanceToSquared(Zl)>(e.far-e.near)**2))&&(Kl.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let r;const s=this.geometry,c=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(c))for(let v=0,y=f.length;v<y;v++){const g=f[v],m=c[g.materialIndex],D=Math.max(g.start,_.start),b=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let C=D,A=b;C<A;C+=3){const L=o.getX(C),w=o.getX(C+1),F=o.getX(C+2);r=zs(this,m,e,n,u,h,d,L,w,F),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(o.count,_.start+_.count);for(let g=v,m=y;g<m;g+=3){const D=o.getX(g),b=o.getX(g+1),C=o.getX(g+2);r=zs(this,c,e,n,u,h,d,D,b,C),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(c))for(let v=0,y=f.length;v<y;v++){const g=f[v],m=c[g.materialIndex],D=Math.max(g.start,_.start),b=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let C=D,A=b;C<A;C+=3){const L=C,w=C+1,F=C+2;r=zs(this,m,e,n,u,h,d,L,w,F),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let g=v,m=y;g<m;g+=3){const D=g,b=g+1,C=g+2;r=zs(this,c,e,n,u,h,d,D,b,C),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function hm(i,e,t,n,r,s,c,o){let l;if(e.side===rn?l=n.intersectTriangle(c,s,r,!0,o):l=n.intersectTriangle(r,s,c,e.side===gi,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Bs);return u<t.near||u>t.far?null:{distance:u,point:Bs.clone(),object:i}}function zs(i,e,t,n,r,s,c,o,l,u){i.getVertexPosition(o,cr),i.getVertexPosition(l,lr),i.getVertexPosition(u,ur);const h=hm(i,e,t,n,cr,lr,ur,Fs);if(h){r&&(Is.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,l),Os.fromBufferAttribute(r,u),h.uv=Cn.getInterpolation(Fs,cr,lr,ur,Is,Ns,Os,new Re)),s&&(Is.fromBufferAttribute(s,o),Ns.fromBufferAttribute(s,l),Os.fromBufferAttribute(s,u),h.uv1=Cn.getInterpolation(Fs,cr,lr,ur,Is,Ns,Os,new Re),h.uv2=h.uv1),c&&(Jl.fromBufferAttribute(c,o),Ql.fromBufferAttribute(c,l),eu.fromBufferAttribute(c,u),h.normal=Cn.getInterpolation(Fs,cr,lr,ur,Jl,Ql,eu,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new O,materialIndex:0};Cn.getNormal(cr,lr,ur,d.normal),h.face=d}return h}class wr extends yn{constructor(e=1,t=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const o=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const l=[],u=[],h=[],d=[];let f=0,_=0;v("z","y","x",-1,-1,n,t,e,c,s,0),v("z","y","x",1,-1,n,t,-e,c,s,1),v("x","z","y",1,1,e,n,t,r,c,2),v("x","z","y",1,-1,e,n,-t,r,c,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2));function v(y,g,m,D,b,C,A,L,w,F,M){const T=C/w,X=A/F,te=C/2,G=A/2,j=L/2,$=w+1,re=F+1;let H=0,U=0;const se=new O;for(let ie=0;ie<re;ie++){const q=ie*X-G;for(let Q=0;Q<$;Q++){const ve=Q*T-te;se[y]=ve*D,se[g]=q*b,se[m]=j,u.push(se.x,se.y,se.z),se[y]=0,se[g]=0,se[m]=L>0?1:-1,h.push(se.x,se.y,se.z),d.push(Q/w),d.push(1-ie/F),H+=1}}for(let ie=0;ie<F;ie++)for(let q=0;q<w;q++){const Q=f+q+$*ie,ve=f+q+$*(ie+1),_e=f+(q+1)+$*(ie+1),Te=f+(q+1)+$*ie;l.push(Q,ve,Te),l.push(ve,_e,Te),U+=6}o.addGroup(_,U,M),_+=U,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Tr(i[t]);for(const r in n)e[r]=n[r]}return e}function dm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){return i.getRenderTarget()===null?i.outputColorSpace:Bn}const fm={clone:Tr,merge:en};var pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oh extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends oh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const l=c.fullWidth,u=c.fullHeight;s+=c.offsetX*r/l,t-=c.offsetY*n/u,r*=c.width/l,n*=c.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,dr=1;class gm extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new xn(hr,dr,e,t);r.layers=this.layers,this.add(r);const s=new xn(hr,dr,e,t);s.layers=this.layers,this.add(s);const c=new xn(hr,dr,e,t);c.layers=this.layers,this.add(c);const o=new xn(hr,dr,e,t);o.layers=this.layers,this.add(o);const l=new xn(hr,dr,e,t);l.layers=this.layers,this.add(l);const u=new xn(hr,dr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,c,o,l]=t;for(const u of t)this.remove(u);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,c,o,l,u]=this.children,h=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,c),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ah extends sn{constructor(e,t,n,r,s,c,o,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,r,s,c,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _m extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ni?St:Oi),this.texture=new ah(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wr(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:fi});s.uniforms.tEquirect.value=t;const c=new ln(r,s),o=t.minFilter;return t.minFilter===$r&&(t.minFilter=vn),new gm(1,10,this).update(e,c),t.minFilter=o,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(s)}}const sa=new O,vm=new O,xm=new nt;class ui{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=sa.subVectors(n,t).cross(vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xm.getNormalMatrix(e),r=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new ro,Hs=new O;class Da{constructor(e=new ui,t=new ui,n=new ui,r=new ui,s=new ui,c=new ui){this.planes=[e,t,n,r,s,c]}set(e,t,n,r,s,c){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,r=e.elements,s=r[0],c=r[1],o=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],v=r[9],y=r[10],g=r[11],m=r[12],D=r[13],b=r[14],C=r[15];if(n[0].setComponents(l-s,f-u,g-_,C-m).normalize(),n[1].setComponents(l+s,f+u,g+_,C+m).normalize(),n[2].setComponents(l+c,f+h,g+v,C+D).normalize(),n[3].setComponents(l-c,f-h,g-v,C-D).normalize(),n[4].setComponents(l-o,f-d,g-y,C-b).normalize(),t===Zn)n[5].setComponents(l+o,f+d,g+y,C+b).normalize();else if(t===Js)n[5].setComponents(o,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Hs.x=r.normal.x>0?e.max.x:e.min.x,Hs.y=r.normal.y>0?e.max.y:e.min.y,Hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ch(){let i=null,e=!1,t=null,n=null;function r(s,c){t(s,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ym(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,h){const d=u.array,f=u.usage,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,f),u.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,d){const f=h.array,_=h.updateRange;i.bindBuffer(d,u),_.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function c(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d===void 0?n.set(u,r(u,h)):d.version<u.version&&(s(d.buffer,u,h),d.version=u.version)}return{get:c,remove:o,update:l}}class Ua extends yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,c=t/2,o=Math.floor(n),l=Math.floor(r),u=o+1,h=l+1,d=e/o,f=t/l,_=[],v=[],y=[],g=[];for(let m=0;m<h;m++){const D=m*f-c;for(let b=0;b<u;b++){const C=b*d-s;v.push(C,-D,0),y.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let D=0;D<o;D++){const b=D+u*m,C=D+u*(m+1),A=D+1+u*(m+1),L=D+1+u*m;_.push(b,C,L),_.push(C,A,L)}this.setIndex(_),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Km=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ag=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,A_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Mm,alphahash_pars_fragment:Em,alphamap_fragment:Sm,alphamap_pars_fragment:bm,alphatest_fragment:Tm,alphatest_pars_fragment:Am,aomap_fragment:wm,aomap_pars_fragment:Rm,begin_vertex:Cm,beginnormal_vertex:Lm,bsdfs:Pm,iridescence_fragment:Dm,bumpmap_pars_fragment:Um,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Fm,color_fragment:Bm,color_pars_fragment:zm,color_pars_vertex:Hm,color_vertex:km,common:Gm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Wm,displacementmap_pars_vertex:Xm,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:jm,colorspace_fragment:$m,colorspace_pars_fragment:Km,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Qm,envmap_pars_vertex:eg,envmap_physical_pars_fragment:dg,envmap_vertex:tg,fog_vertex:ng,fog_pars_vertex:ig,fog_fragment:rg,fog_pars_fragment:sg,gradientmap_pars_fragment:og,lightmap_fragment:ag,lightmap_pars_fragment:cg,lights_lambert_fragment:lg,lights_lambert_pars_fragment:ug,lights_pars_begin:hg,lights_toon_fragment:fg,lights_toon_pars_fragment:pg,lights_phong_fragment:mg,lights_phong_pars_fragment:gg,lights_physical_fragment:_g,lights_physical_pars_fragment:vg,lights_fragment_begin:xg,lights_fragment_maps:yg,lights_fragment_end:Mg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:Tg,map_fragment:Ag,map_pars_fragment:wg,map_particle_fragment:Rg,map_particle_pars_fragment:Cg,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Pg,morphcolor_vertex:Dg,morphnormal_vertex:Ug,morphtarget_pars_vertex:Ig,morphtarget_vertex:Ng,normal_fragment_begin:Og,normal_fragment_maps:Fg,normal_pars_fragment:Bg,normal_pars_vertex:zg,normal_vertex:Hg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:jg,project_vertex:$g,dithering_fragment:Kg,dithering_pars_fragment:Zg,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:r_,skinning_pars_vertex:s_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:c_,specularmap_pars_fragment:l_,tonemapping_fragment:u_,tonemapping_pars_fragment:h_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:__,background_vert:v_,background_frag:x_,backgroundCube_vert:y_,backgroundCube_frag:M_,cube_vert:E_,cube_frag:S_,depth_vert:b_,depth_frag:T_,distanceRGBA_vert:A_,distanceRGBA_frag:w_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:L_,linedashed_frag:P_,meshbasic_vert:D_,meshbasic_frag:U_,meshlambert_vert:I_,meshlambert_frag:N_,meshmatcap_vert:O_,meshmatcap_frag:F_,meshnormal_vert:B_,meshnormal_frag:z_,meshphong_vert:H_,meshphong_frag:k_,meshphysical_vert:G_,meshphysical_frag:V_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:j_,shadow_frag:$_,sprite_vert:K_,sprite_frag:Z_},ye={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},On={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};On.physical={uniforms:en([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ks={r:0,b:0,g:0};function J_(i,e,t,n,r,s,c){const o=new dt(0);let l=s===!0?0:1,u,h,d=null,f=0,_=null;function v(g,m){let D=!1,b=m.isScene===!0?m.background:null;b&&b.isTexture&&(b=(m.backgroundBlurriness>0?t:e).get(b)),b===null?y(o,l):b&&b.isColor&&(y(b,1),D=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===no)?(h===void 0&&(h=new ln(new wr(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Tr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=b.colorSpace!==St,(d!==b||f!==b.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,_=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new ln(new Ua(2,2),new zi({name:"BackgroundMaterial",uniforms:Tr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=b.colorSpace!==St,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,_=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,m){g.getRGB(ks,sh(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,m,c)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(o,l)},render:v}}function Q_(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||s!==null,o={},l=g(null);let u=l,h=!1;function d(j,$,re,H,U){let se=!1;if(c){const ie=y(H,re,$);u!==ie&&(u=ie,_(u.object)),se=m(j,H,re,U),se&&D(j,H,re,U)}else{const ie=$.wireframe===!0;(u.geometry!==H.id||u.program!==re.id||u.wireframe!==ie)&&(u.geometry=H.id,u.program=re.id,u.wireframe=ie,se=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,F(j,$,re,H),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function _(j){return n.isWebGL2?i.bindVertexArray(j):s.bindVertexArrayOES(j)}function v(j){return n.isWebGL2?i.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function y(j,$,re){const H=re.wireframe===!0;let U=o[j.id];U===void 0&&(U={},o[j.id]=U);let se=U[$.id];se===void 0&&(se={},U[$.id]=se);let ie=se[H];return ie===void 0&&(ie=g(f()),se[H]=ie),ie}function g(j){const $=[],re=[],H=[];for(let U=0;U<r;U++)$[U]=0,re[U]=0,H[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:re,attributeDivisors:H,object:j,attributes:{},index:null}}function m(j,$,re,H){const U=u.attributes,se=$.attributes;let ie=0;const q=re.getAttributes();for(const Q in q)if(q[Q].location>=0){const _e=U[Q];let Te=se[Q];if(Te===void 0&&(Q==="instanceMatrix"&&j.instanceMatrix&&(Te=j.instanceMatrix),Q==="instanceColor"&&j.instanceColor&&(Te=j.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;ie++}return u.attributesNum!==ie||u.index!==H}function D(j,$,re,H){const U={},se=$.attributes;let ie=0;const q=re.getAttributes();for(const Q in q)if(q[Q].location>=0){let _e=se[Q];_e===void 0&&(Q==="instanceMatrix"&&j.instanceMatrix&&(_e=j.instanceMatrix),Q==="instanceColor"&&j.instanceColor&&(_e=j.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),U[Q]=Te,ie++}u.attributes=U,u.attributesNum=ie,u.index=H}function b(){const j=u.newAttributes;for(let $=0,re=j.length;$<re;$++)j[$]=0}function C(j){A(j,0)}function A(j,$){const re=u.newAttributes,H=u.enabledAttributes,U=u.attributeDivisors;re[j]=1,H[j]===0&&(i.enableVertexAttribArray(j),H[j]=1),U[j]!==$&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,$),U[j]=$)}function L(){const j=u.newAttributes,$=u.enabledAttributes;for(let re=0,H=$.length;re<H;re++)$[re]!==j[re]&&(i.disableVertexAttribArray(re),$[re]=0)}function w(j,$,re,H,U,se,ie){ie===!0?i.vertexAttribIPointer(j,$,re,U,se):i.vertexAttribPointer(j,$,re,H,U,se)}function F(j,$,re,H){if(n.isWebGL2===!1&&(j.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const U=H.attributes,se=re.getAttributes(),ie=$.defaultAttributeValues;for(const q in se){const Q=se[q];if(Q.location>=0){let ve=U[q];if(ve===void 0&&(q==="instanceMatrix"&&j.instanceMatrix&&(ve=j.instanceMatrix),q==="instanceColor"&&j.instanceColor&&(ve=j.instanceColor)),ve!==void 0){const _e=ve.normalized,Te=ve.itemSize,ce=t.get(ve);if(ce===void 0)continue;const Ue=ce.buffer,De=ce.type,rt=ce.bytesPerElement,Ut=n.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||ve.gpuType===Wu);if(ve.isInterleavedBufferAttribute){const He=ve.data,V=He.stride,yt=ve.offset;if(He.isInstancedInterleavedBuffer){for(let Le=0;Le<Q.locationSize;Le++)A(Q.location+Le,He.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Le=0;Le<Q.locationSize;Le++)C(Q.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Le=0;Le<Q.locationSize;Le++)w(Q.location+Le,Te/Q.locationSize,De,_e,V*rt,(yt+Te/Q.locationSize*Le)*rt,Ut)}else{if(ve.isInstancedBufferAttribute){for(let He=0;He<Q.locationSize;He++)A(Q.location+He,ve.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let He=0;He<Q.locationSize;He++)C(Q.location+He);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let He=0;He<Q.locationSize;He++)w(Q.location+He,Te/Q.locationSize,De,_e,Te*rt,Te/Q.locationSize*He*rt,Ut)}}else if(ie!==void 0){const _e=ie[q];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(Q.location,_e);break;case 3:i.vertexAttrib3fv(Q.location,_e);break;case 4:i.vertexAttrib4fv(Q.location,_e);break;default:i.vertexAttrib1fv(Q.location,_e)}}}}L()}function M(){te();for(const j in o){const $=o[j];for(const re in $){const H=$[re];for(const U in H)v(H[U].object),delete H[U];delete $[re]}delete o[j]}}function T(j){if(o[j.id]===void 0)return;const $=o[j.id];for(const re in $){const H=$[re];for(const U in H)v(H[U].object),delete H[U];delete $[re]}delete o[j.id]}function X(j){for(const $ in o){const re=o[$];if(re[j.id]===void 0)continue;const H=re[j.id];for(const U in H)v(H[U].object),delete H[U];delete re[j.id]}}function te(){G(),h=!0,u!==l&&(u=l,_(u.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:G,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:X,initAttributes:b,enableAttribute:C,disableUnusedAttributes:L}}function ev(i,e,t,n){const r=n.isWebGL2;let s;function c(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,_;if(r)f=i,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,u,h,d),t.update(h,s,d)}this.setMode=c,this.render=o,this.renderInstances=l}function tv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=c||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,C=c||e.has("OES_texture_float"),A=b&&C,L=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:D,vertexTextures:b,floatFragmentTextures:C,floatVertexTextures:A,maxSamples:L}}function nv(i){const e=this;let t=null,n=0,r=!1,s=!1;const c=new ui,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||n!==0||r;return r=f,n=d.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,_){const v=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!r||v===null||v.length===0||s&&!g)s?h(null):u();else{const D=s?0:n,b=D*4;let C=m.clippingState||null;l.value=C,C=h(v,f,b,_);for(let A=0;A!==b;++A)C[A]=t[A];m.clippingState=C,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=D}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,_,v){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const m=_+y*4,D=f.matrixWorldInverse;o.getNormalMatrix(D),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,C=_;b!==y;++b,C+=4)c.copy(d[b]).applyMatrix4(D,o),c.normal.toArray(g,C),g[C+3]=c.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function iv(i){let e=new WeakMap;function t(c,o){return o===ya?c.mapping=Er:o===Ma&&(c.mapping=Sr),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const o=c.mapping;if(o===ya||o===Ma)if(e.has(c)){const l=e.get(c).texture;return t(l,c.mapping)}else{const l=c.image;if(l&&l.height>0){const u=new _m(l.height/2);return u.fromEquirectangularTexture(i,c),e.set(c,u),c.addEventListener("dispose",r),t(u.texture,c.mapping)}else return null}}return c}function r(c){const o=c.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class lh extends oh{constructor(e=-1,t=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,c=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,c=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,c,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,tu=[.125,.215,.35,.446,.526,.582],Pi=20,oa=new lh,nu=new dt;let aa=null;const Li=(1+Math.sqrt(5))/2,fr=1/Li,iu=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Li,fr),new O(0,Li,-fr),new O(fr,0,Li),new O(-fr,0,Li),new O(Li,fr,0),new O(-Li,fr,0)];class ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){aa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Kr,format:Pn,colorSpace:Bn,depthBuffer:!1},r=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rv(s)),this._blurMaterial=sv(s,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,r){const o=new xn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nu),h.toneMapping=pi,h.autoClear=!1;const _=new qr({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new ln(new wr,_);let y=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,y=!0):(_.color.copy(nu),y=!0);for(let m=0;m<6;m++){const D=m%3;D===0?(o.up.set(0,l[m],0),o.lookAt(u[m],0,0)):D===1?(o.up.set(0,0,l[m]),o.lookAt(0,u[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,u[m]));const b=this._cubeSize;Gs(r,D*b,m>2?b:0,b,b),h.setRenderTarget(r),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Er||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new ln(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(c,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=iu[(r-1)%iu.length];this._blur(e,r-1,r,s,c)}t.autoClear=n}_blur(e,t,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",s),this._halfBlur(c,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,c,o){const l=this._renderer,u=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ln(this._lodPlanes[r],u),f=u.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Pi-1),y=s/v,g=isFinite(s)?1+Math.floor(h*y):Pi;g>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);const m=[];let D=0;for(let w=0;w<Pi;++w){const F=w/y,M=Math.exp(-F*F/2);m.push(M),w===0?D+=M:w<g&&(D+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/D;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=c==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=v,f.mipInt.value=b-n;const C=this._sizeLods[r],A=3*C*(r>b-_r?r-b+_r:0),L=4*(this._cubeSize-C);Gs(t,A,L,3*C,2*C),l.setRenderTarget(t),l.render(d,oa)}}function rv(i){const e=[],t=[],n=[];let r=i;const s=i-_r+1+tu.length;for(let c=0;c<s;c++){const o=Math.pow(2,r);t.push(o);let l=1/o;c>i-_r?l=tu[c-i+_r-1]:c===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,v=6,y=3,g=2,m=1,D=new Float32Array(y*v*_),b=new Float32Array(g*v*_),C=new Float32Array(m*v*_);for(let L=0;L<_;L++){const w=L%3*2/3-1,F=L>2?0:-1,M=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];D.set(M,y*v*L),b.set(f,g*v*L);const T=[L,L,L,L,L,L];C.set(T,m*v*L)}const A=new yn;A.setAttribute("position",new Fn(D,y)),A.setAttribute("uv",new Fn(b,g)),A.setAttribute("faceIndex",new Fn(C,m)),e.push(A),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function su(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sv(i,e,t){const n=new Float32Array(Pi),r=new O(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ou(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function au(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ov(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===ya||l===Ma,h=l===Er||l===Sr;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new ru(i)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(u&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new ru(i));const f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function av(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cv(i,e,t,n){const r={},s=new WeakMap;function c(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}f.removeEventListener("dispose",c),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",c),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const _=d.morphAttributes;for(const v in _){const y=_[v];for(let g=0,m=y.length;g<m;g++)e.update(y[g],i.ARRAY_BUFFER)}}function u(d){const f=[],_=d.index,v=d.attributes.position;let y=0;if(_!==null){const D=_.array;y=_.version;for(let b=0,C=D.length;b<C;b+=3){const A=D[b+0],L=D[b+1],w=D[b+2];f.push(A,L,L,w,w,A)}}else if(v!==void 0){const D=v.array;y=v.version;for(let b=0,C=D.length/3-1;b<C;b+=3){const A=b+0,L=b+1,w=b+2;f.push(A,L,L,w,w,A)}}else return;const g=new(Zu(f)?rh:ih)(f,1);g.version=y;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function h(d){const f=s.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function lv(i,e,t,n){const r=n.isWebGL2;let s;function c(f){s=f}let o,l;function u(f){o=f.type,l=f.bytesPerElement}function h(f,_){i.drawElements(s,_,o,f*l),t.update(_,s,1)}function d(f,_,v){if(v===0)return;let y,g;if(r)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,_,o,f*l,v),t.update(_,s,v)}this.setMode=c,this.setIndex=u,this.render=h,this.renderInstances=d}function uv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,o){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hv(i,e){return i[0]-e[0]}function dv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fv(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,c=new Ht,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,h,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==y){let $=function(){G.dispose(),s.delete(h),h.removeEventListener("dispose",$)};var _=$;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let M=0;b===!0&&(M=1),C===!0&&(M=2),A===!0&&(M=3);let T=h.attributes.position.count*M,X=1;T>e.maxTextureSize&&(X=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const te=new Float32Array(T*X*4*y),G=new eh(te,T,X,y);G.type=di,G.needsUpdate=!0;const j=M*4;for(let re=0;re<y;re++){const H=L[re],U=w[re],se=F[re],ie=T*X*4*re;for(let q=0;q<H.count;q++){const Q=q*j;b===!0&&(c.fromBufferAttribute(H,q),te[ie+Q+0]=c.x,te[ie+Q+1]=c.y,te[ie+Q+2]=c.z,te[ie+Q+3]=0),C===!0&&(c.fromBufferAttribute(U,q),te[ie+Q+4]=c.x,te[ie+Q+5]=c.y,te[ie+Q+6]=c.z,te[ie+Q+7]=0),A===!0&&(c.fromBufferAttribute(se,q),te[ie+Q+8]=c.x,te[ie+Q+9]=c.y,te[ie+Q+10]=c.z,te[ie+Q+11]=se.itemSize===4?c.w:1)}}g={count:y,texture:G,size:new Re(T,X)},s.set(h,g),h.addEventListener("dispose",$)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];const D=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",D),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const v=f===void 0?0:f.length;let y=n[h.id];if(y===void 0||y.length!==v){y=[];for(let C=0;C<v;C++)y[C]=[C,0];n[h.id]=y}for(let C=0;C<v;C++){const A=y[C];A[0]=C,A[1]=f[C]}y.sort(dv);for(let C=0;C<8;C++)C<v&&y[C][1]?(o[C][0]=y[C][0],o[C][1]=y[C][1]):(o[C][0]=Number.MAX_SAFE_INTEGER,o[C][1]=0);o.sort(hv);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let D=0;for(let C=0;C<8;C++){const A=o[C],L=A[0],w=A[1];L!==Number.MAX_SAFE_INTEGER&&w?(g&&h.getAttribute("morphTarget"+C)!==g[L]&&h.setAttribute("morphTarget"+C,g[L]),m&&h.getAttribute("morphNormal"+C)!==m[L]&&h.setAttribute("morphNormal"+C,m[L]),r[C]=w,D+=w):(g&&h.hasAttribute("morphTarget"+C)===!0&&h.deleteAttribute("morphTarget"+C),m&&h.hasAttribute("morphNormal"+C)===!0&&h.deleteAttribute("morphNormal"+C),r[C]=0)}const b=h.morphTargetsRelative?1:1-D;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function pv(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function c(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:c}}const uh=new sn,hh=new eh,dh=new em,fh=new ah,cu=[],lu=[],uu=new Float32Array(16),hu=new Float32Array(9),du=new Float32Array(4);function Rr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=cu[r];if(s===void 0&&(s=new Float32Array(r),cu[r]=s),e!==0){n.toArray(s,0);for(let c=1,o=0;c!==e;++c)o+=t,i[c].toArray(s,o)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oo(i,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),Ot(t,n)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;hu.set(n),i.uniformMatrix3fv(this.addr,!1,hu),Ot(t,n)}}function Mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),Ot(t,n)}}function Ev(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Lv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||uh,r)}function Pv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||dh,r)}function Dv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fh,r)}function Uv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hh,r)}function Iv(i){switch(i){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return vv;case 35674:return xv;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return Ev;case 35667:case 35671:return Sv;case 35668:case 35672:return bv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return wv;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Nv(i,e){i.uniform1fv(this.addr,e)}function Ov(i,e){const t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Fv(i,e){const t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Bv(i,e){const t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function zv(i,e){const t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){const t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kv(i,e){const t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gv(i,e){i.uniform1iv(this.addr,e)}function Vv(i,e){i.uniform2iv(this.addr,e)}function Wv(i,e){i.uniform3iv(this.addr,e)}function Xv(i,e){i.uniform4iv(this.addr,e)}function qv(i,e){i.uniform1uiv(this.addr,e)}function Yv(i,e){i.uniform2uiv(this.addr,e)}function jv(i,e){i.uniform3uiv(this.addr,e)}function $v(i,e){i.uniform4uiv(this.addr,e)}function Kv(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||uh,s[c])}function Zv(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||dh,s[c])}function Jv(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||fh,s[c])}function Qv(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||hh,s[c])}function e0(i){switch(i){case 5126:return Nv;case 35664:return Ov;case 35665:return Fv;case 35666:return Bv;case 35674:return zv;case 35675:return Hv;case 35676:return kv;case 5124:case 35670:return Gv;case 35667:case 35671:return Vv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Iv(t.type)}}class n0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=e0(t.type)}}class i0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function fu(i,e){i.seq.push(e),i.map[e.id]=e}function r0(i,e,t){const n=i.name,r=n.length;for(ca.lastIndex=0;;){const s=ca.exec(n),c=ca.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&c+2===r){fu(t,u===void 0?new t0(o,i,e):new n0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new i0(o),fu(t,d)),t=d}}}class Ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),c=e.getUniformLocation(t,s.name);r0(s,c,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,c=t.length;s!==c;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function pu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let s0=0;function o0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=r;c<s;c++){const o=c+1;n.push(`${o===e?">":" "} ${o}: ${t[c]}`)}return n.join(`
`)}function a0(i){switch(i){case Bn:return["Linear","( value )"];case St:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function mu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+o0(i.getShaderSource(e),c)}else return r}function c0(i,e){const t=a0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function l0(i,e){let t;switch(e){case tp:t="Linear";break;case np:t="Reinhard";break;case ip:t="OptimizedCineon";break;case rp:t="ACESFilmic";break;case sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function u0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hr).join(`
`)}function h0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),c=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:o}}return t}function Hr(i){return i!==""}function gu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(f0,m0)}const p0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m0(i,e){let t=Je[e];if(t===void 0){const n=p0.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Aa(t)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(g0,_0)}function _0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Sr:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function M0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gu:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case ep:e="ENVMAP_BLENDING_ADD";break}return e}function E0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S0(i,e,t,n){const r=i.getContext(),s=t.defines;let c=t.vertexShader,o=t.fragmentShader;const l=v0(t),u=x0(t),h=y0(t),d=M0(t),f=E0(t),_=t.isWebGL2?"":u0(t),v=h0(s),y=r.createProgram();let g,m,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hr).join(`
`),g.length>0&&(g+=`
`),m=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hr).join(`
`),m.length>0&&(m+=`
`)):(g=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),m=[_,xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Je.tonemapping_pars_fragment:"",t.toneMapping!==pi?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),c=Aa(c),c=gu(c,t),c=_u(c,t),o=Aa(o),o=gu(o,t),o=_u(o,t),c=vu(c),o=vu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=D+g+c,C=D+m+o,A=pu(r,r.VERTEX_SHADER,b),L=pu(r,r.FRAGMENT_SHADER,C);if(r.attachShader(y,A),r.attachShader(y,L),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(L).trim();let te=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,A,L);else{const j=mu(r,A,"vertex"),$=mu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+j+`
`+$)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||X==="")&&(G=!1);G&&(this.diagnostics={runnable:te,programLog:M,vertexShader:{log:T,prefix:g},fragmentShader:{log:X,prefix:m}})}r.deleteShader(A),r.deleteShader(L);let w;this.getUniforms=function(){return w===void 0&&(w=new Ys(r,y)),w};let F;return this.getAttributes=function(){return F===void 0&&(F=d0(r,y)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=L,this}let b0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A0(e),t.set(e,n)),n}}class A0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function w0(i,e,t,n,r,s,c){const o=new th,l=new T0,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function g(M,T,X,te,G){const j=te.fog,$=G.geometry,re=M.isMeshStandardMaterial?te.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||re),U=H&&H.mapping===no?H.image.height:null,se=v[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const ie=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,q=ie!==void 0?ie.length:0;let Q=0;$.morphAttributes.position!==void 0&&(Q=1),$.morphAttributes.normal!==void 0&&(Q=2),$.morphAttributes.color!==void 0&&(Q=3);let ve,_e,Te,ce;if(se){const gt=On[se];ve=gt.vertexShader,_e=gt.fragmentShader}else ve=M.vertexShader,_e=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const Ue=i.getRenderTarget(),De=G.isInstancedMesh===!0,rt=!!M.map,Ut=!!M.matcap,He=!!H,V=!!M.aoMap,yt=!!M.lightMap,Le=!!M.bumpMap,Ge=!!M.normalMap,Be=!!M.displacementMap,mt=!!M.emissiveMap,$e=!!M.metalnessMap,Ve=!!M.roughnessMap,st=M.anisotropy>0,Rt=M.clearcoat>0,bt=M.iridescence>0,P=M.sheen>0,S=M.transmission>0,Y=st&&!!M.anisotropyMap,ue=Rt&&!!M.clearcoatMap,le=Rt&&!!M.clearcoatNormalMap,de=Rt&&!!M.clearcoatRoughnessMap,Ce=bt&&!!M.iridescenceMap,fe=bt&&!!M.iridescenceThicknessMap,Z=P&&!!M.sheenColorMap,I=P&&!!M.sheenRoughnessMap,oe=!!M.specularMap,Ee=!!M.specularColorMap,me=!!M.specularIntensityMap,Me=S&&!!M.transmissionMap,ze=S&&!!M.thicknessMap,Ke=!!M.gradientMap,N=!!M.alphaMap,xe=M.alphaTest>0,J=!!M.alphaHash,he=!!M.extensions,pe=!!$.attributes.uv1,Qe=!!$.attributes.uv2,it=!!$.attributes.uv3;let at=pi;return M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(at=i.toneMapping),{isWebGL2:h,shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ve,fragmentShader:_e,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,instancing:De,instancingColor:De&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Bn,map:rt,matcap:Ut,envMap:He,envMapMode:He&&H.mapping,envMapCubeUVHeight:U,aoMap:V,lightMap:yt,bumpMap:Le,normalMap:Ge,displacementMap:f&&Be,emissiveMap:mt,normalMapObjectSpace:Ge&&M.normalMapType===xp,normalMapTangentSpace:Ge&&M.normalMapType===vp,metalnessMap:$e,roughnessMap:Ve,anisotropy:st,anisotropyMap:Y,clearcoat:Rt,clearcoatMap:ue,clearcoatNormalMap:le,clearcoatRoughnessMap:de,iridescence:bt,iridescenceMap:Ce,iridescenceThicknessMap:fe,sheen:P,sheenColorMap:Z,sheenRoughnessMap:I,specularMap:oe,specularColorMap:Ee,specularIntensityMap:me,transmission:S,transmissionMap:Me,thicknessMap:ze,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===vr,alphaMap:N,alphaTest:xe,alphaHash:J,combine:M.combine,mapUv:rt&&y(M.map.channel),aoMapUv:V&&y(M.aoMap.channel),lightMapUv:yt&&y(M.lightMap.channel),bumpMapUv:Le&&y(M.bumpMap.channel),normalMapUv:Ge&&y(M.normalMap.channel),displacementMapUv:Be&&y(M.displacementMap.channel),emissiveMapUv:mt&&y(M.emissiveMap.channel),metalnessMapUv:$e&&y(M.metalnessMap.channel),roughnessMapUv:Ve&&y(M.roughnessMap.channel),anisotropyMapUv:Y&&y(M.anisotropyMap.channel),clearcoatMapUv:ue&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:I&&y(M.sheenRoughnessMap.channel),specularMapUv:oe&&y(M.specularMap.channel),specularColorMapUv:Ee&&y(M.specularColorMap.channel),specularIntensityMapUv:me&&y(M.specularIntensityMap.channel),transmissionMapUv:Me&&y(M.transmissionMap.channel),thicknessMapUv:ze&&y(M.thicknessMap.channel),alphaMapUv:N&&y(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||st),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:Qe,vertexUv3s:it,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(rt||N),fog:!!j,useFog:M.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,useLegacyLights:i._useLegacyLights,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&M.map.colorSpace===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kn,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)T.push(X),T.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(D(T,M),b(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function D(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function b(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function C(M){const T=v[M.type];let X;if(T){const te=On[T];X=fm.clone(te.uniforms)}else X=M.uniforms;return X}function A(M,T){let X;for(let te=0,G=u.length;te<G;te++){const j=u[te];if(j.cacheKey===T){X=j,++X.usedTimes;break}}return X===void 0&&(X=new S0(i,T,M,s),u.push(X)),X}function L(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:C,acquireProgram:A,releaseProgram:L,releaseShaderCache:w,programs:u,dispose:F}}function R0(){let i=new WeakMap;function e(s){let c=i.get(s);return c===void 0&&(c={},i.set(s,c)),c}function t(s){i.delete(s)}function n(s,c,o){i.get(s)[c]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function C0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function c(d,f,_,v,y,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=_,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=y,m.group=g),e++,m}function o(d,f,_,v,y,g){const m=c(d,f,_,v,y,g);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):t.push(m)}function l(d,f,_,v,y,g){const m=c(d,f,_,v,y,g);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,f){t.length>1&&t.sort(d||C0),n.length>1&&n.sort(f||yu),r.length>1&&r.sort(f||yu)}function h(){for(let d=e,f=i.length;d<f;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function L0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let c;return s===void 0?(c=new Mu,i.set(n,[c])):r>=s.length?(c=new Mu,s.push(c)):c=s[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function P0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new dt};break;case"SpotLight":t={position:new O,direction:new O,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function D0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let U0=0;function I0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function N0(i,e){const t=new P0,n=D0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new O);const s=new O,c=new Lt,o=new Lt;function l(h,d){let f=0,_=0,v=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,g=0,m=0,D=0,b=0,C=0,A=0,L=0,w=0,F=0;h.sort(I0);const M=d===!0?Math.PI:1;for(let X=0,te=h.length;X<te;X++){const G=h[X],j=G.color,$=G.intensity,re=G.distance,H=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=j.r*$*M,_+=j.g*$*M,v+=j.b*$*M;else if(G.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(G.sh.coefficients[U],$);else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity*M),G.castShadow){const se=G.shadow,ie=n.get(G);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=G.shadow.matrix,C++}r.directional[y]=U,y++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(j).multiplyScalar($*M),U.distance=re,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,r.spot[m]=U;const se=G.shadow;if(G.map&&(r.spotLightMap[w]=G.map,w++,se.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[m]=se.matrix,G.castShadow){const ie=n.get(G);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,r.spotShadow[m]=ie,r.spotShadowMap[m]=H,L++}m++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(j).multiplyScalar($),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),r.rectArea[D]=U,D++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity*M),U.distance=G.distance,U.decay=G.decay,G.castShadow){const se=G.shadow,ie=n.get(G);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,ie.shadowCameraNear=se.camera.near,ie.shadowCameraFar=se.camera.far,r.pointShadow[g]=ie,r.pointShadowMap[g]=H,r.pointShadowMatrix[g]=G.shadow.matrix,A++}r.point[g]=U,g++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar($*M),U.groundColor.copy(G.groundColor).multiplyScalar($*M),r.hemi[b]=U,b++}}D>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==y||T.pointLength!==g||T.spotLength!==m||T.rectAreaLength!==D||T.hemiLength!==b||T.numDirectionalShadows!==C||T.numPointShadows!==A||T.numSpotShadows!==L||T.numSpotMaps!==w)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=D,r.point.length=g,r.hemi.length=b,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=L+w-F,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=F,T.directionalLength=y,T.pointLength=g,T.spotLength=m,T.rectAreaLength=D,T.hemiLength=b,T.numDirectionalShadows=C,T.numPointShadows=A,T.numSpotShadows=L,T.numSpotMaps=w,r.version=U0++)}function u(h,d){let f=0,_=0,v=0,y=0,g=0;const m=d.matrixWorldInverse;for(let D=0,b=h.length;D<b;D++){const C=h[D];if(C.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(C.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),v++}else if(C.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(m),o.identity(),c.copy(C.matrixWorld),c.premultiply(m),o.extractRotation(c),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(C.isPointLight){const A=r.point[_];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(m),_++}else if(C.isHemisphereLight){const A=r.hemi[g];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:l,setupView:u,state:r}}function Eu(i,e){const t=new N0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function c(d){n.push(d)}function o(d){r.push(d)}function l(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:c,pushShadow:o}}function O0(i,e){let t=new WeakMap;function n(s,c=0){const o=t.get(s);let l;return o===void 0?(l=new Eu(i,e),t.set(s,[l])):c>=o.length?(l=new Eu(i,e),o.push(l)):l=o[c],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class F0 extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B0 extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k0(i,e,t){let n=new Da;const r=new Re,s=new Re,c=new Ht,o=new F0({depthPacking:_p}),l=new B0,u={},h=t.maxTextureSize,d={[gi]:rn,[rn]:gi,[Kn]:Kn},f=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:z0,fragmentShader:H0}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new yn;v.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ln(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let m=this.type;this.render=function(A,L,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const F=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),X=i.state;X.setBlending(fi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const te=m!==$n&&this.type===$n,G=m===$n&&this.type!==$n;for(let j=0,$=A.length;j<$;j++){const re=A[j],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const U=H.getFrameExtents();if(r.multiply(U),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,H.mapSize.y=s.y)),H.map===null||te===!0||G===!0){const ie=this.type!==$n?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(r.x,r.y,ie),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const se=H.getViewportCount();for(let ie=0;ie<se;ie++){const q=H.getViewport(ie);c.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),X.viewport(c),H.updateMatrices(re,ie),n=H.getFrustum(),C(L,w,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&D(H,w),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(F,M,T)};function D(A,L){const w=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(L,null,w,f,y,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(L,null,w,_,y,null)}function b(A,L,w,F){let M=null;const T=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)M=T;else if(M=w.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const X=M.uuid,te=L.uuid;let G=u[X];G===void 0&&(G={},u[X]=G);let j=G[te];j===void 0&&(j=M.clone(),G[te]=j),M=j}if(M.visible=L.visible,M.wireframe=L.wireframe,F===$n?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=w}return M}function C(A,L,w,F,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===$n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const te=e.update(A),G=A.material;if(Array.isArray(G)){const j=te.groups;for(let $=0,re=j.length;$<re;$++){const H=j[$],U=G[H.materialIndex];if(U&&U.visible){const se=b(A,U,F,M);i.renderBufferDirect(w,null,te,se,A,H)}}}else if(G.visible){const j=b(A,G,F,M);i.renderBufferDirect(w,null,te,j,A,null)}}const X=A.children;for(let te=0,G=X.length;te<G;te++)C(X[te],L,w,F,M)}}function G0(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const xe=new Ht;let J=null;const he=new Ht(0,0,0,0);return{setMask:function(pe){J!==pe&&!N&&(i.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){N=pe},setClear:function(pe,Qe,it,at,jt){jt===!0&&(pe*=at,Qe*=at,it*=at),xe.set(pe,Qe,it,at),he.equals(xe)===!1&&(i.clearColor(pe,Qe,it,at),he.copy(xe))},reset:function(){N=!1,J=null,he.set(-1,0,0,0)}}}function s(){let N=!1,xe=null,J=null,he=null;return{setTest:function(pe){pe?Ue(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(pe){xe!==pe&&!N&&(i.depthMask(pe),xe=pe)},setFunc:function(pe){if(J!==pe){switch(pe){case qf:i.depthFunc(i.NEVER);break;case Yf:i.depthFunc(i.ALWAYS);break;case jf:i.depthFunc(i.LESS);break;case xa:i.depthFunc(i.LEQUAL);break;case $f:i.depthFunc(i.EQUAL);break;case Kf:i.depthFunc(i.GEQUAL);break;case Zf:i.depthFunc(i.GREATER);break;case Jf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pe}},setLocked:function(pe){N=pe},setClear:function(pe){he!==pe&&(i.clearDepth(pe),he=pe)},reset:function(){N=!1,xe=null,J=null,he=null}}}function c(){let N=!1,xe=null,J=null,he=null,pe=null,Qe=null,it=null,at=null,jt=null;return{setTest:function(gt){N||(gt?Ue(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(gt){xe!==gt&&!N&&(i.stencilMask(gt),xe=gt)},setFunc:function(gt,un,kt){(J!==gt||he!==un||pe!==kt)&&(i.stencilFunc(gt,un,kt),J=gt,he=un,pe=kt)},setOp:function(gt,un,kt){(Qe!==gt||it!==un||at!==kt)&&(i.stencilOp(gt,un,kt),Qe=gt,it=un,at=kt)},setLocked:function(gt){N=gt},setClear:function(gt){jt!==gt&&(i.clearStencil(gt),jt=gt)},reset:function(){N=!1,xe=null,J=null,he=null,pe=null,Qe=null,it=null,at=null,jt=null}}}const o=new r,l=new s,u=new c,h=new WeakMap,d=new WeakMap;let f={},_={},v=new WeakMap,y=[],g=null,m=!1,D=null,b=null,C=null,A=null,L=null,w=null,F=null,M=!1,T=null,X=null,te=null,G=null,j=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,H=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),re=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),re=H>=2);let se=null,ie={};const q=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ve=new Ht().fromArray(q),_e=new Ht().fromArray(Q);function Te(N,xe,J,he){const pe=new Uint8Array(4),Qe=i.createTexture();i.bindTexture(N,Qe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<J;it++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(xe,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(xe+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Qe}const ce={};ce[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(i.DEPTH_TEST),l.setFunc(xa),Be(!1),mt(ol),Ue(i.CULL_FACE),Le(fi);function Ue(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function De(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function rt(N,xe){return _[N]!==xe?(i.bindFramebuffer(N,xe),_[N]=xe,n&&(N===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=xe),N===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=xe)),!0):!1}function Ut(N,xe){let J=y,he=!1;if(N)if(J=v.get(xe),J===void 0&&(J=[],v.set(xe,J)),N.isWebGLMultipleRenderTargets){const pe=N.texture;if(J.length!==pe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Qe=0,it=pe.length;Qe<it;Qe++)J[Qe]=i.COLOR_ATTACHMENT0+Qe;J.length=pe.length,he=!0}}else J[0]!==i.COLOR_ATTACHMENT0&&(J[0]=i.COLOR_ATTACHMENT0,he=!0);else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function He(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const V={[pr]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};if(n)V[ul]=i.MIN,V[hl]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(V[ul]=N.MIN_EXT,V[hl]=N.MAX_EXT)}const yt={[Ff]:i.ZERO,[Bf]:i.ONE,[zf]:i.SRC_COLOR,[Hu]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[ku]:i.ONE_MINUS_SRC_ALPHA,[Wf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA};function Le(N,xe,J,he,pe,Qe,it,at){if(N===fi){m===!0&&(De(i.BLEND),m=!1);return}if(m===!1&&(Ue(i.BLEND),m=!0),N!==If){if(N!==D||at!==M){if((b!==pr||L!==pr)&&(i.blendEquation(i.FUNC_ADD),b=pr,L=pr),at)switch(N){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}C=null,A=null,w=null,F=null,D=N,M=at}return}pe=pe||xe,Qe=Qe||J,it=it||he,(xe!==b||pe!==L)&&(i.blendEquationSeparate(V[xe],V[pe]),b=xe,L=pe),(J!==C||he!==A||Qe!==w||it!==F)&&(i.blendFuncSeparate(yt[J],yt[he],yt[Qe],yt[it]),C=J,A=he,w=Qe,F=it),D=N,M=!1}function Ge(N,xe){N.side===Kn?De(i.CULL_FACE):Ue(i.CULL_FACE);let J=N.side===rn;xe&&(J=!J),Be(J),N.blending===vr&&N.transparent===!1?Le(fi):Le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const he=N.stencilWrite;u.setTest(he),he&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){T!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),T=N)}function mt(N){N!==Pf?(Ue(i.CULL_FACE),N!==X&&(N===ol?i.cullFace(i.BACK):N===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),X=N}function $e(N){N!==te&&(re&&i.lineWidth(N),te=N)}function Ve(N,xe,J){N?(Ue(i.POLYGON_OFFSET_FILL),(G!==xe||j!==J)&&(i.polygonOffset(xe,J),G=xe,j=J)):De(i.POLYGON_OFFSET_FILL)}function st(N){N?Ue(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function Rt(N){N===void 0&&(N=i.TEXTURE0+$-1),se!==N&&(i.activeTexture(N),se=N)}function bt(N,xe,J){J===void 0&&(se===null?J=i.TEXTURE0+$-1:J=se);let he=ie[J];he===void 0&&(he={type:void 0,texture:void 0},ie[J]=he),(he.type!==N||he.texture!==xe)&&(se!==J&&(i.activeTexture(J),se=J),i.bindTexture(N,xe||ce[N]),he.type=N,he.texture=xe)}function P(){const N=ie[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(N){ve.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ve.copy(N))}function me(N){_e.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),_e.copy(N))}function Me(N,xe){let J=d.get(xe);J===void 0&&(J=new WeakMap,d.set(xe,J));let he=J.get(N);he===void 0&&(he=i.getUniformBlockIndex(xe,N.name),J.set(N,he))}function ze(N,xe){const he=d.get(xe).get(N);h.get(xe)!==he&&(i.uniformBlockBinding(xe,he,N.__bindingPointIndex),h.set(xe,he))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},se=null,ie={},_={},v=new WeakMap,y=[],g=null,m=!1,D=null,b=null,C=null,A=null,L=null,w=null,F=null,M=!1,T=null,X=null,te=null,G=null,j=null,ve.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ue,disable:De,bindFramebuffer:rt,drawBuffers:Ut,useProgram:He,setBlending:Le,setMaterial:Ge,setFlipSided:Be,setCullFace:mt,setLineWidth:$e,setPolygonOffset:Ve,setScissorTest:st,activeTexture:Rt,bindTexture:bt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:I,texImage3D:oe,updateUBOMapping:Me,uniformBlockBinding:ze,texStorage2D:fe,texStorage3D:Z,texSubImage2D:ue,texSubImage3D:le,compressedTexSubImage2D:de,compressedTexSubImage3D:Ce,scissor:Ee,viewport:me,reset:Ke}}function V0(i,e,t,n,r,s,c){const o=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let y;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,S){return m?new OffscreenCanvas(P,S):eo("canvas")}function b(P,S,Y,ue){let le=1;if((P.width>ue||P.height>ue)&&(le=ue/Math.max(P.width,P.height)),le<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=S?Qs:Math.floor,Ce=de(le*P.width),fe=de(le*P.height);y===void 0&&(y=D(Ce,fe));const Z=Y?D(Ce,fe):y;return Z.width=Ce,Z.height=fe,Z.getContext("2d").drawImage(P,0,0,Ce,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ce+"x"+fe+")."),Z}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function C(P){return Ta(P.width)&&Ta(P.height)}function A(P){return o?!1:P.wrapS!==Ln||P.wrapT!==Ln||P.minFilter!==tn&&P.minFilter!==vn}function L(P,S){return P.generateMipmaps&&S&&P.minFilter!==tn&&P.minFilter!==vn}function w(P){i.generateMipmap(P)}function F(P,S,Y,ue,le=!1){if(o===!1)return S;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=S;return S===i.RED&&(Y===i.FLOAT&&(de=i.R32F),Y===i.HALF_FLOAT&&(de=i.R16F),Y===i.UNSIGNED_BYTE&&(de=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(de=i.R8UI),Y===i.UNSIGNED_SHORT&&(de=i.R16UI),Y===i.UNSIGNED_INT&&(de=i.R32UI),Y===i.BYTE&&(de=i.R8I),Y===i.SHORT&&(de=i.R16I),Y===i.INT&&(de=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(de=i.RG32F),Y===i.HALF_FLOAT&&(de=i.RG16F),Y===i.UNSIGNED_BYTE&&(de=i.RG8)),S===i.RGBA&&(Y===i.FLOAT&&(de=i.RGBA32F),Y===i.HALF_FLOAT&&(de=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(de=ue===St&&le===!1?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)),(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function M(P,S,Y){return L(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){return P===tn||P===dl||P===Oo?i.NEAREST:i.LINEAR}function X(P){const S=P.target;S.removeEventListener("dispose",X),G(S),S.isVideoTexture&&v.delete(S)}function te(P){const S=P.target;S.removeEventListener("dispose",te),$(S)}function G(P){const S=n.get(P);if(S.__webglInit===void 0)return;const Y=P.source,ue=g.get(Y);if(ue){const le=ue[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&j(P),Object.keys(ue).length===0&&g.delete(Y)}n.remove(P)}function j(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const Y=P.source,ue=g.get(Y);delete ue[S.__cacheKey],c.memory.textures--}function $(P){const S=P.texture,Y=n.get(P),ue=n.get(S);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),c.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(Y.__webglFramebuffer[le]))for(let de=0;de<Y.__webglFramebuffer[le].length;de++)i.deleteFramebuffer(Y.__webglFramebuffer[le][de]);else i.deleteFramebuffer(Y.__webglFramebuffer[le]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[le])}else{if(Array.isArray(Y.__webglFramebuffer))for(let le=0;le<Y.__webglFramebuffer.length;le++)i.deleteFramebuffer(Y.__webglFramebuffer[le]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let le=0;le<Y.__webglColorRenderbuffer.length;le++)Y.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[le]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let le=0,de=S.length;le<de;le++){const Ce=n.get(S[le]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),c.memory.textures--),n.remove(S[le])}n.remove(S),n.remove(P)}let re=0;function H(){re=0}function U(){const P=re;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),re+=1,P}function se(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ie(P,S){const Y=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ue=P.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Y,P,S);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function q(P,S){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){rt(Y,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function Q(P,S){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){rt(Y,P,S);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function ve(P,S){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Ut(Y,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const _e={[Ea]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},Te={[tn]:i.NEAREST,[dl]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[op]:i.LINEAR_MIPMAP_NEAREST,[$r]:i.LINEAR_MIPMAP_LINEAR},ce={[Mp]:i.NEVER,[Rp]:i.ALWAYS,[Ep]:i.LESS,[bp]:i.LEQUAL,[Sp]:i.EQUAL,[wp]:i.GEQUAL,[Tp]:i.GREATER,[Ap]:i.NOTEQUAL};function Ue(P,S,Y){if(Y?(i.texParameteri(P,i.TEXTURE_WRAP_S,_e[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,_e[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,_e[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Te[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Te[S.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Ln||S.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,T(S.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==tn&&S.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==Oo&&S.minFilter!==$r||S.type===di&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Kr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(P,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function De(P,S){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",X));const ue=S.source;let le=g.get(ue);le===void 0&&(le={},g.set(ue,le));const de=se(S);if(de!==P.__cacheKey){le[de]===void 0&&(le[de]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),le[de].usedTimes++;const Ce=le[P.__cacheKey];Ce!==void 0&&(le[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&j(S)),P.__cacheKey=de,P.__webglTexture=le[de].texture}return Y}function rt(P,S,Y){let ue=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ue=i.TEXTURE_3D);const le=De(P,S),de=S.source;t.bindTexture(ue,P.__webglTexture,i.TEXTURE0+Y);const Ce=n.get(de);if(de.version!==Ce.__version||le===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=A(S)&&C(S.image)===!1;let Z=b(S.image,fe,!1,h);Z=bt(S,Z);const I=C(Z)||o,oe=s.convert(S.format,S.colorSpace);let Ee=s.convert(S.type),me=F(S.internalFormat,oe,Ee,S.colorSpace,S.isVideoTexture);Ue(ue,S,I);let Me;const ze=S.mipmaps,Ke=o&&S.isVideoTexture!==!0,N=Ce.__version===void 0||le===!0,xe=M(S,Z,I);if(S.isDepthTexture)me=i.DEPTH_COMPONENT,o?S.type===di?me=i.DEPTH_COMPONENT32F:S.type===hi?me=i.DEPTH_COMPONENT24:S.type===Ui?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:S.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ii&&me===i.DEPTH_COMPONENT&&S.type!==Ca&&S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=hi,Ee=s.convert(S.type)),S.format===br&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,S.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ui,Ee=s.convert(S.type))),N&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,me,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,me,Z.width,Z.height,0,oe,Ee,null));else if(S.isDataTexture)if(ze.length>0&&I){Ke&&N&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],Ke?t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,oe,Ee,Me.data):t.texImage2D(i.TEXTURE_2D,J,me,Me.width,Me.height,0,oe,Ee,Me.data);S.generateMipmaps=!1}else Ke?(N&&t.texStorage2D(i.TEXTURE_2D,xe,me,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,oe,Ee,Z.data)):t.texImage2D(i.TEXTURE_2D,0,me,Z.width,Z.height,0,oe,Ee,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,ze[0].width,ze[0].height,Z.depth);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],S.format!==Pn?oe!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,Z.depth,oe,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,me,Me.width,Me.height,Z.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,Z.depth,oe,Ee,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,me,Me.width,Me.height,Z.depth,0,oe,Ee,Me.data)}else{Ke&&N&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],S.format!==Pn?oe!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,oe,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,J,me,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,oe,Ee,Me.data):t.texImage2D(i.TEXTURE_2D,J,me,Me.width,Me.height,0,oe,Ee,Me.data)}else if(S.isDataArrayTexture)Ke?(N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,Ee,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Z.width,Z.height,Z.depth,0,oe,Ee,Z.data);else if(S.isData3DTexture)Ke?(N&&t.texStorage3D(i.TEXTURE_3D,xe,me,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,Ee,Z.data)):t.texImage3D(i.TEXTURE_3D,0,me,Z.width,Z.height,Z.depth,0,oe,Ee,Z.data);else if(S.isFramebufferTexture){if(N)if(Ke)t.texStorage2D(i.TEXTURE_2D,xe,me,Z.width,Z.height);else{let J=Z.width,he=Z.height;for(let pe=0;pe<xe;pe++)t.texImage2D(i.TEXTURE_2D,pe,me,J,he,0,oe,Ee,null),J>>=1,he>>=1}}else if(ze.length>0&&I){Ke&&N&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],Ke?t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe,Ee,Me):t.texImage2D(i.TEXTURE_2D,J,me,oe,Ee,Me);S.generateMipmaps=!1}else Ke?(N&&t.texStorage2D(i.TEXTURE_2D,xe,me,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Ee,Z)):t.texImage2D(i.TEXTURE_2D,0,me,oe,Ee,Z);L(S,I)&&w(ue),Ce.__version=de.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ut(P,S,Y){if(S.image.length!==6)return;const ue=De(P,S),le=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);const de=n.get(le);if(le.version!==de.__version||ue===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let J=0;J<6;J++)!Ce&&!fe?Z[J]=b(S.image[J],!1,!0,u):Z[J]=fe?S.image[J].image:S.image[J],Z[J]=bt(S,Z[J]);const I=Z[0],oe=C(I)||o,Ee=s.convert(S.format,S.colorSpace),me=s.convert(S.type),Me=F(S.internalFormat,Ee,me,S.colorSpace),ze=o&&S.isVideoTexture!==!0,Ke=de.__version===void 0||ue===!0;let N=M(S,I,oe);Ue(i.TEXTURE_CUBE_MAP,S,oe);let xe;if(Ce){ze&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Me,I.width,I.height);for(let J=0;J<6;J++){xe=Z[J].mipmaps;for(let he=0;he<xe.length;he++){const pe=xe[he];S.format!==Pn?Ee!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,pe.width,pe.height,Ee,me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Me,pe.width,pe.height,0,Ee,me,pe.data)}}}else{xe=S.mipmaps,ze&&Ke&&(xe.length>0&&N++,t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Me,Z[0].width,Z[0].height));for(let J=0;J<6;J++)if(fe){ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Z[J].width,Z[J].height,Ee,me,Z[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Me,Z[J].width,Z[J].height,0,Ee,me,Z[J].data);for(let he=0;he<xe.length;he++){const Qe=xe[he].image[J].image;ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Qe.width,Qe.height,Ee,me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Me,Qe.width,Qe.height,0,Ee,me,Qe.data)}}else{ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,me,Z[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Me,Ee,me,Z[J]);for(let he=0;he<xe.length;he++){const pe=xe[he];ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ee,me,pe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Me,Ee,me,pe.image[J])}}}L(S,oe)&&w(i.TEXTURE_CUBE_MAP),de.__version=le.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function He(P,S,Y,ue,le,de){const Ce=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),Z=F(Y.internalFormat,Ce,fe,Y.colorSpace);if(!n.get(S).__hasExternalTextures){const oe=Math.max(1,S.width>>de),Ee=Math.max(1,S.height>>de);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,de,Z,oe,Ee,S.depth,0,Ce,fe,null):t.texImage2D(le,de,Z,oe,Ee,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),st(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,le,n.get(Y).__webglTexture,0,Ve(S)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,le,n.get(Y).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(P,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let ue=i.DEPTH_COMPONENT16;if(Y||st(S)){const le=S.depthTexture;le&&le.isDepthTexture&&(le.type===di?ue=i.DEPTH_COMPONENT32F:le.type===hi&&(ue=i.DEPTH_COMPONENT24));const de=Ve(S);st(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,ue,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ue,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){const ue=Ve(S);Y&&st(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,S.width,S.height):st(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const ue=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let le=0;le<ue.length;le++){const de=ue[le],Ce=s.convert(de.format,de.colorSpace),fe=s.convert(de.type),Z=F(de.internalFormat,Ce,fe,de.colorSpace),I=Ve(S);Y&&st(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,I,Z,S.width,S.height):st(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie(S.depthTexture,0);const ue=n.get(S.depthTexture).__webglTexture,le=Ve(S);if(S.depthTexture.format===Ii)st(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(S.depthTexture.format===br)st(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Le(P){const S=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");yt(S.__webglFramebuffer,P)}else if(Y){S.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ue]),S.__webglDepthbuffer[ue]=i.createRenderbuffer(),V(S.__webglDepthbuffer[ue],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),V(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(P,S,Y){const ue=n.get(P);S!==void 0&&He(ue.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Le(P)}function Be(P){const S=P.texture,Y=n.get(P),ue=n.get(S);P.addEventListener("dispose",te),P.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=S.version,c.memory.textures++);const le=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Ce=C(P)||o;if(le){Y.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[fe]=[];for(let Z=0;Z<S.mipmaps.length;Z++)Y.__webglFramebuffer[fe][Z]=i.createFramebuffer()}else Y.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)Y.__webglFramebuffer[fe]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(de)if(r.drawBuffers){const fe=P.texture;for(let Z=0,I=fe.length;Z<I;Z++){const oe=n.get(fe[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&st(P)===!1){const fe=de?S:[S];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<fe.length;Z++){const I=fe[Z];Y.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Z]);const oe=s.convert(I.format,I.colorSpace),Ee=s.convert(I.type),me=F(I.internalFormat,oe,Ee,I.colorSpace,P.isXRRenderTarget===!0),Me=Ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),V(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,S,Ce);for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)He(Y.__webglFramebuffer[fe][Z],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Z);else He(Y.__webglFramebuffer[fe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);L(S,Ce)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const fe=P.texture;for(let Z=0,I=fe.length;Z<I;Z++){const oe=fe[Z],Ee=n.get(oe);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),Ue(i.TEXTURE_2D,oe,Ce),He(Y.__webglFramebuffer,P,oe,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,0),L(oe,Ce)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?fe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ue.__webglTexture),Ue(fe,S,Ce),o&&S.mipmaps&&S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)He(Y.__webglFramebuffer[Z],P,S,i.COLOR_ATTACHMENT0,fe,Z);else He(Y.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,fe,0);L(S,Ce)&&w(fe),t.unbindTexture()}P.depthBuffer&&Le(P)}function mt(P){const S=C(P)||o,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ue=0,le=Y.length;ue<le;ue++){const de=Y[ue];if(L(de,S)){const Ce=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(de).__webglTexture;t.bindTexture(Ce,fe),w(Ce),t.unbindTexture()}}}function $e(P){if(o&&P.samples>0&&st(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,ue=P.height;let le=i.COLOR_BUFFER_BIT;const de=[],Ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(P),Z=P.isWebGLMultipleRenderTargets===!0;if(Z)for(let I=0;I<S.length;I++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let I=0;I<S.length;I++){de.push(i.COLOR_ATTACHMENT0+I),P.depthBuffer&&de.push(Ce);const oe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(oe===!1&&(P.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[I]),oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ce]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ce])),Z){const Ee=n.get(S[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,Y,ue,0,0,Y,ue,le,i.NEAREST),_&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let I=0;I<S.length;I++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,fe.__webglColorRenderbuffer[I]);const oe=n.get(S[I]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ve(P){return Math.min(d,P.samples)}function st(P){const S=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(P){const S=c.render.frame;v.get(P)!==S&&(v.set(P,S),P.update())}function bt(P,S){const Y=P.colorSpace,ue=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ba||Y!==Bn&&Y!==Oi&&(Y===St||Y===io?o===!1?e.has("EXT_sRGB")===!0&&ue===Pn?(P.format=ba,P.minFilter=vn,P.generateMipmaps=!1):S=Ju.sRGBToLinear(S):(ue!==Pn||le!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}this.allocateTextureUnit=U,this.resetTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=ve,this.rebindTextures=Ge,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=He,this.useMultisampledRTT=st}const W0=0,It=1;function X0(i,e,t){const n=t.isWebGL2;function r(s,c=Oi){let o;const l=c===St||c===io?It:W0;if(s===mi)return i.UNSIGNED_BYTE;if(s===Xu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===qu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===ap)return i.BYTE;if(s===cp)return i.SHORT;if(s===Ca)return i.UNSIGNED_SHORT;if(s===Wu)return i.INT;if(s===hi)return i.UNSIGNED_INT;if(s===di)return i.FLOAT;if(s===Kr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===lp)return i.ALPHA;if(s===Pn)return i.RGBA;if(s===up)return i.LUMINANCE;if(s===hp)return i.LUMINANCE_ALPHA;if(s===Ii)return i.DEPTH_COMPONENT;if(s===br)return i.DEPTH_STENCIL;if(s===ba)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===dp)return i.RED;if(s===Yu)return i.RED_INTEGER;if(s===fp)return i.RG;if(s===ju)return i.RG_INTEGER;if(s===$u)return i.RGBA_INTEGER;if(s===Fo||s===Bo||s===zo||s===Ho)if(l===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fl||s===pl||s===ml||s===gl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===fl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_l||s===vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===_l)return l===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xl||s===yl||s===Ml||s===El||s===Sl||s===bl||s===Tl||s===Al||s===wl||s===Rl||s===Cl||s===Ll||s===Pl||s===Dl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ml)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===El)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Al)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ll)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ko||s===Ul||s===Il)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ko)return l===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ul)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Il)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mp||s===Nl||s===Ol||s===Fl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ko)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Nl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class q0 extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y0={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,c=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){c=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),m=this._getHandJoint(u,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,v=.005;u.inputState.pinching&&f>_+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=_-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class j0 extends sn{constructor(e,t,n,r,s,c,o,l,u,h){if(h=h!==void 0?h:Ii,h!==Ii&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=hi),n===void 0&&h===br&&(n=Ui),super(null,r,s,c,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $0 extends Hi{constructor(e,t){super();const n=this;let r=null,s=1,c=null,o="local-floor",l=1,u=null,h=null,d=null,f=null,_=null,v=null;const y=t.getContextAttributes();let g=null,m=null;const D=[],b=[],C=new xn;C.layers.enable(1),C.viewport=new Ht;const A=new xn;A.layers.enable(2),A.viewport=new Ht;const L=[C,A],w=new q0;w.layers.enable(1),w.layers.enable(2);let F=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=D[q];return Q===void 0&&(Q=new la,D[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=D[q];return Q===void 0&&(Q=new la,D[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=D[q];return Q===void 0&&(Q=new la,D[q]=Q),Q.getHandSpace()};function T(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const ve=D[Q];ve!==void 0&&(ve.update(q.inputSource,q.frame,u||c),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",te);for(let q=0;q<D.length;q++){const Q=b[q];Q!==null&&(b[q]=null,D[q].disconnect(Q))}F=null,M=null,e.setRenderTarget(g),_=null,f=null,d=null,r=null,m=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||c},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",X),r.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:_}),m=new Fi(_.framebufferWidth,_.framebufferHeight,{format:Pn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,ve=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=y.stencil?br:Ii,ve=y.stencil?Ui:hi);const Te={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),m=new Fi(f.textureWidth,f.textureHeight,{format:Pn,type:mi,depthTexture:new j0(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ce=e.properties.get(m);ce.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,c=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(q){for(let Q=0;Q<q.removed.length;Q++){const ve=q.removed[Q],_e=b.indexOf(ve);_e>=0&&(b[_e]=null,D[_e].disconnect(ve))}for(let Q=0;Q<q.added.length;Q++){const ve=q.added[Q];let _e=b.indexOf(ve);if(_e===-1){for(let ce=0;ce<D.length;ce++)if(ce>=b.length){b.push(ve),_e=ce;break}else if(b[ce]===null){b[ce]=ve,_e=ce;break}if(_e===-1)break}const Te=D[_e];Te&&Te.connect(ve)}}const G=new O,j=new O;function $(q,Q,ve){G.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);const _e=G.distanceTo(j),Te=Q.projectionMatrix.elements,ce=ve.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),De=Te[14]/(Te[10]+1),rt=(Te[9]+1)/Te[5],Ut=(Te[9]-1)/Te[5],He=(Te[8]-1)/Te[0],V=(ce[8]+1)/ce[0],yt=Ue*He,Le=Ue*V,Ge=_e/(-He+V),Be=Ge*-He;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(Ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const mt=Ue+Ge,$e=De+Ge,Ve=yt-Be,st=Le+(_e-Be),Rt=rt*De/$e*mt,bt=Ut*De/$e*mt;q.projectionMatrix.makePerspective(Ve,st,Rt,bt,mt,$e),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function re(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;w.near=A.near=C.near=q.near,w.far=A.far=C.far=q.far,(F!==w.near||M!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,M=w.far);const Q=q.parent,ve=w.cameras;re(w,Q);for(let _e=0;_e<ve.length;_e++)re(ve[_e],Q);ve.length===2?$(w,C,A):w.projectionMatrix.copy(C.projectionMatrix),H(q,w,Q)};function H(q,Q,ve){ve===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)};let U=null;function se(q,Q){if(h=Q.getViewerPose(u||c),v=Q,h!==null){const ve=h.views;_!==null&&(e.setRenderTargetFramebuffer(m,_.framebuffer),e.setRenderTarget(m));let _e=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,_e=!0);for(let Te=0;Te<ve.length;Te++){const ce=ve[Te];let Ue=null;if(_!==null)Ue=_.getViewport(ce);else{const rt=d.getViewSubImage(f,ce);Ue=rt.viewport,Te===0&&(e.setRenderTargetTextures(m,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(m))}let De=L[Te];De===void 0&&(De=new xn,De.layers.enable(Te),De.viewport=new Ht,L[Te]=De),De.matrix.fromArray(ce.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ce.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Te===0&&(w.matrix.copy(De.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),_e===!0&&w.cameras.push(De)}}for(let ve=0;ve<D.length;ve++){const _e=b[ve],Te=D[ve];_e!==null&&Te!==void 0&&Te.update(_e,Q,u||c)}U&&U(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const ie=new ch;ie.setAnimationLoop(se),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}function K0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,sh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,D,b,C){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&_(g,m,C)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(c(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,D,b):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const D=e.get(m).envMap;if(D&&(g.envMap.value=D,g.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*b,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,D,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*D,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,D){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){const D=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Z0(i,e,t,n){let r={},s={},c=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(D,b){const C=b.program;n.uniformBlockBinding(D,C)}function u(D,b){let C=r[D.id];C===void 0&&(v(D),C=h(D),r[D.id]=C,D.addEventListener("dispose",g));const A=b.program;n.updateUBOMapping(D,A);const L=e.render.frame;s[D.id]!==L&&(f(D),s[D.id]=L)}function h(D){const b=d();D.__bindingPointIndex=b;const C=i.createBuffer(),A=D.__size,L=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,A,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,C),C}function d(){for(let D=0;D<o;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(D){const b=r[D.id],C=D.uniforms,A=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let L=0,w=C.length;L<w;L++){const F=C[L];if(_(F,L,A)===!0){const M=F.__offset,T=Array.isArray(F.value)?F.value:[F.value];let X=0;for(let te=0;te<T.length;te++){const G=T[te],j=y(G);typeof G=="number"?(F.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,M+X,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=G.elements[0],F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=G.elements[0],F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=G.elements[0]):(G.toArray(F.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,F.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(D,b,C){const A=D.value;if(C[b]===void 0){if(typeof A=="number")C[b]=A;else{const L=Array.isArray(A)?A:[A],w=[];for(let F=0;F<L.length;F++)w.push(L[F].clone());C[b]=w}return!0}else if(typeof A=="number"){if(C[b]!==A)return C[b]=A,!0}else{const L=Array.isArray(C[b])?C[b]:[C[b]],w=Array.isArray(A)?A:[A];for(let F=0;F<L.length;F++){const M=L[F];if(M.equals(w[F])===!1)return M.copy(w[F]),!0}}return!1}function v(D){const b=D.uniforms;let C=0;const A=16;let L=0;for(let w=0,F=b.length;w<F;w++){const M=b[w],T={boundary:0,storage:0},X=Array.isArray(M.value)?M.value:[M.value];for(let te=0,G=X.length;te<G;te++){const j=X[te],$=y(j);T.boundary+=$.boundary,T.storage+=$.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=C,w>0){L=C%A;const te=A-L;L!==0&&te-T.boundary<0&&(C+=A-L,M.__offset=C)}C+=T.storage}return L=C%A,L>0&&(C+=A-L),D.__size=C,D.__cache={},this}function y(D){const b={boundary:0,storage:0};return typeof D=="number"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function g(D){const b=D.target;b.removeEventListener("dispose",g);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const D in r)i.deleteBuffer(r[D]);c=[],r={},s={}}return{bind:l,update:u,dispose:m}}class ph{constructor(e={}){const{canvas:t=Wp(),context:n=null,depth:r=!0,stencil:s=!0,alpha:c=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=c;const _=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const m=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const b=this;let C=!1,A=0,L=0,w=null,F=-1,M=null;const T=new Ht,X=new Ht;let te=null;const G=new dt(0);let j=0,$=t.width,re=t.height,H=1,U=null,se=null;const ie=new Ht(0,0,$,re),q=new Ht(0,0,$,re);let Q=!1;const ve=new Da;let _e=!1,Te=!1,ce=null;const Ue=new Lt,De=new Re,rt=new O,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return w===null?H:1}let V=n;function yt(R,k){for(let K=0;K<R.length;K++){const W=R[K],ne=t.getContext(W,k);if(ne!==null)return ne}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",he,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&k.shift(),V=yt(k,R),V===null)throw yt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Le,Ge,Be,mt,$e,Ve,st,Rt,bt,P,S,Y,ue,le,de,Ce,fe,Z,I,oe,Ee,me,Me,ze;function Ke(){Le=new av(V),Ge=new tv(V,Le,e),Le.init(Ge),me=new X0(V,Le,Ge),Be=new G0(V,Le,Ge),mt=new uv(V),$e=new R0,Ve=new V0(V,Le,Be,$e,Ge,me,mt),st=new iv(b),Rt=new ov(b),bt=new ym(V,Ge),Me=new Q_(V,Le,bt,Ge),P=new cv(V,bt,mt,Me),S=new pv(V,P,bt,mt),I=new fv(V,Ge,Ve),Ce=new nv($e),Y=new w0(b,st,Rt,Le,Ge,Me,Ce),ue=new K0(b,$e),le=new L0,de=new O0(Le,Ge),Z=new J_(b,st,Rt,Be,S,f,l),fe=new k0(b,S,Ge),ze=new Z0(V,mt,Ge,Be),oe=new ev(V,Le,mt,Ge),Ee=new lv(V,Le,mt,Ge),mt.programs=Y.programs,b.capabilities=Ge,b.extensions=Le,b.properties=$e,b.renderLists=le,b.shadowMap=fe,b.state=Be,b.info=mt}Ke();const N=new $0(b,V);this.xr=N,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize($,re,!1))},this.getSize=function(R){return R.set($,re)},this.setSize=function(R,k,K=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,re=k,t.width=Math.floor(R*H),t.height=Math.floor(k*H),K===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set($*H,re*H).floor()},this.setDrawingBufferSize=function(R,k,K){$=R,re=k,H=K,t.width=Math.floor(R*K),t.height=Math.floor(k*K),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,k,K,W){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,k,K,W),Be.viewport(T.copy(ie).multiplyScalar(H).floor())},this.getScissor=function(R){return R.copy(q)},this.setScissor=function(R,k,K,W){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,k,K,W),Be.scissor(X.copy(q).multiplyScalar(H).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){Be.setScissorTest(Q=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(R=!0,k=!0,K=!0){let W=0;if(R){let ne=!1;if(w!==null){const be=w.texture.format;ne=be===$u||be===ju||be===Yu}if(ne){const be=w.texture.type,Pe=be===mi||be===hi||be===Ca||be===Ui||be===Xu||be===qu,Fe=Z.getClearColor(),Ie=Z.getClearAlpha(),We=Fe.r,Ne=Fe.g,Xe=Fe.b;Pe?(_[0]=We,_[1]=Ne,_[2]=Xe,_[3]=Ie,V.clearBufferuiv(V.COLOR,0,_)):(v[0]=We,v[1]=Ne,v[2]=Xe,v[3]=Ie,V.clearBufferiv(V.COLOR,0,v))}else W|=V.COLOR_BUFFER_BIT}k&&(W|=V.DEPTH_BUFFER_BIT),K&&(W|=V.STENCIL_BUFFER_BIT),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",he,!1),le.dispose(),de.dispose(),$e.dispose(),st.dispose(),Rt.dispose(),S.dispose(),Me.dispose(),ze.dispose(),Y.dispose(),N.dispose(),N.removeEventListener("sessionstart",gt),N.removeEventListener("sessionend",un),ce&&(ce.dispose(),ce=null),kt.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=mt.autoReset,k=fe.enabled,K=fe.autoUpdate,W=fe.needsUpdate,ne=fe.type;Ke(),mt.autoReset=R,fe.enabled=k,fe.autoUpdate=K,fe.needsUpdate=W,fe.type=ne}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const k=R.target;k.removeEventListener("dispose",pe),Qe(k)}function Qe(R){it(R),$e.remove(R)}function it(R){const k=$e.get(R).programs;k!==void 0&&(k.forEach(function(K){Y.releaseProgram(K)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,K,W,ne,be){k===null&&(k=Ut);const Pe=ne.isMesh&&ne.matrixWorld.determinant()<0,Fe=ao(R,k,K,W,ne);Be.setMaterial(W,Pe);let Ie=K.index,We=1;if(W.wireframe===!0){if(Ie=P.getWireframeAttribute(K),Ie===void 0)return;We=2}const Ne=K.drawRange,Xe=K.attributes.position;let vt=Ne.start*We,Mt=(Ne.start+Ne.count)*We;be!==null&&(vt=Math.max(vt,be.start*We),Mt=Math.min(Mt,(be.start+be.count)*We)),Ie!==null?(vt=Math.max(vt,0),Mt=Math.min(Mt,Ie.count)):Xe!=null&&(vt=Math.max(vt,0),Mt=Math.min(Mt,Xe.count));const $t=Mt-vt;if($t<0||$t===1/0)return;Me.setup(ne,W,Fe,K,Ie);let hn,Tt=oe;if(Ie!==null&&(hn=bt.get(Ie),Tt=Ee,Tt.setIndex(hn)),ne.isMesh)W.wireframe===!0?(Be.setLineWidth(W.wireframeLinewidth*He()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(ne.isLine){let et=W.linewidth;et===void 0&&(et=1),Be.setLineWidth(et*He()),ne.isLineSegments?Tt.setMode(V.LINES):ne.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else ne.isPoints?Tt.setMode(V.POINTS):ne.isSprite&&Tt.setMode(V.TRIANGLES);if(ne.isInstancedMesh)Tt.renderInstances(vt,$t,ne.count);else if(K.isInstancedBufferGeometry){const et=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Gi=Math.min(K.instanceCount,et);Tt.renderInstances(vt,$t,Gi)}else Tt.render(vt,$t)},this.compile=function(R,k){function K(W,ne,be){W.transparent===!0&&W.side===Kn&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,ei(W,ne,be),W.side=gi,W.needsUpdate=!0,ei(W,ne,be),W.side=Kn):ei(W,ne,be)}g=de.get(R),g.init(),D.push(g),R.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(b._useLegacyLights),R.traverse(function(W){const ne=W.material;if(ne)if(Array.isArray(ne))for(let be=0;be<ne.length;be++){const Pe=ne[be];K(Pe,R,W)}else K(ne,R,W)}),D.pop(),g=null};let at=null;function jt(R){at&&at(R)}function gt(){kt.stop()}function un(){kt.start()}const kt=new ch;kt.setAnimationLoop(jt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(R){at=R,N.setAnimationLoop(R),R===null?kt.stop():kt.start()},N.addEventListener("sessionstart",gt),N.addEventListener("sessionend",un),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(k),k=N.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,k,w),g=de.get(R,D.length),g.init(),D.push(g),Ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ve.setFromProjectionMatrix(Ue),Te=this.localClippingEnabled,_e=Ce.init(this.clippingPlanes,Te),y=le.get(R,m.length),y.init(),m.push(y),ts(R,k,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(U,se),this.info.render.frame++,_e===!0&&Ce.beginShadows();const K=g.state.shadowsArray;if(fe.render(K,R,k),_e===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(y,R),g.setupLights(b._useLegacyLights),k.isArrayCamera){const W=k.cameras;for(let ne=0,be=W.length;ne<be;ne++){const Pe=W[ne];ki(y,R,Pe,Pe.viewport)}}else ki(y,R,k);w!==null&&(Ve.updateMultisampleRenderTarget(w),Ve.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(b,R,k),Me.resetDefaultState(),F=-1,M=null,D.pop(),D.length>0?g=D[D.length-1]:g=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function ts(R,k,K,W){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ve.intersectsSprite(R)){W&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const Pe=S.update(R),Fe=R.material;Fe.visible&&y.push(R,Pe,Fe,K,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ve.intersectsObject(R))){const Pe=S.update(R),Fe=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),rt.copy(Pe.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(Fe)){const Ie=Pe.groups;for(let We=0,Ne=Ie.length;We<Ne;We++){const Xe=Ie[We],vt=Fe[Xe.materialIndex];vt&&vt.visible&&y.push(R,Pe,vt,K,rt.z,Xe)}}else Fe.visible&&y.push(R,Pe,Fe,K,rt.z,null)}}const be=R.children;for(let Pe=0,Fe=be.length;Pe<Fe;Pe++)ts(be[Pe],k,K,W)}function ki(R,k,K,W){const ne=R.opaque,be=R.transmissive,Pe=R.transparent;g.setupLightsView(K),_e===!0&&Ce.setGlobalState(b.clippingPlanes,K),be.length>0&&Qn(ne,be,k,K),W&&Be.viewport(T.copy(W)),ne.length>0&&zn(ne,k,K),be.length>0&&zn(be,k,K),Pe.length>0&&zn(Pe,k,K),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Qn(R,k,K,W){const ne=Ge.isWebGL2;ce===null&&(ce=new Fi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Kr:mi,minFilter:$r,samples:ne?4:0})),b.getDrawingBufferSize(De),ne?ce.setSize(De.x,De.y):ce.setSize(Qs(De.x),Qs(De.y));const be=b.getRenderTarget();b.setRenderTarget(ce),b.getClearColor(G),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear();const Pe=b.toneMapping;b.toneMapping=pi,zn(R,K,W),Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce);let Fe=!1;for(let Ie=0,We=k.length;Ie<We;Ie++){const Ne=k[Ie],Xe=Ne.object,vt=Ne.geometry,Mt=Ne.material,$t=Ne.group;if(Mt.side===Kn&&Xe.layers.test(W.layers)){const hn=Mt.side;Mt.side=rn,Mt.needsUpdate=!0,ns(Xe,K,W,vt,Mt,$t),Mt.side=hn,Mt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce)),b.setRenderTarget(be),b.setClearColor(G,j),b.toneMapping=Pe}function zn(R,k,K){const W=k.isScene===!0?k.overrideMaterial:null;for(let ne=0,be=R.length;ne<be;ne++){const Pe=R[ne],Fe=Pe.object,Ie=Pe.geometry,We=W===null?Pe.material:W,Ne=Pe.group;Fe.layers.test(K.layers)&&ns(Fe,k,K,Ie,We,Ne)}}function ns(R,k,K,W,ne,be){R.onBeforeRender(b,k,K,W,ne,be),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(b,k,K,W,R,be),ne.transparent===!0&&ne.side===Kn&&ne.forceSinglePass===!1?(ne.side=rn,ne.needsUpdate=!0,b.renderBufferDirect(K,k,W,ne,R,be),ne.side=gi,ne.needsUpdate=!0,b.renderBufferDirect(K,k,W,ne,R,be),ne.side=Kn):b.renderBufferDirect(K,k,W,ne,R,be),R.onAfterRender(b,k,K,W,ne,be)}function ei(R,k,K){k.isScene!==!0&&(k=Ut);const W=$e.get(R),ne=g.state.lights,be=g.state.shadowsArray,Pe=ne.state.version,Fe=Y.getParameters(R,ne.state,be,k,K),Ie=Y.getProgramCacheKey(Fe);let We=W.programs;W.environment=R.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(R.isMeshStandardMaterial?Rt:st).get(R.envMap||W.environment),We===void 0&&(R.addEventListener("dispose",pe),We=new Map,W.programs=We);let Ne=We.get(Ie);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===Pe)return is(R,Fe),Ne}else Fe.uniforms=Y.getUniforms(R),R.onBuild(K,Fe,b),R.onBeforeCompile(Fe,b),Ne=Y.acquireProgram(Fe,Ie),We.set(Ie,Ne),W.uniforms=Fe.uniforms;const Xe=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ce.uniform),is(R,Fe),W.needsLights=Gt(R),W.lightsStateVersion=Pe,W.needsLights&&(Xe.ambientLightColor.value=ne.state.ambient,Xe.lightProbe.value=ne.state.probe,Xe.directionalLights.value=ne.state.directional,Xe.directionalLightShadows.value=ne.state.directionalShadow,Xe.spotLights.value=ne.state.spot,Xe.spotLightShadows.value=ne.state.spotShadow,Xe.rectAreaLights.value=ne.state.rectArea,Xe.ltc_1.value=ne.state.rectAreaLTC1,Xe.ltc_2.value=ne.state.rectAreaLTC2,Xe.pointLights.value=ne.state.point,Xe.pointLightShadows.value=ne.state.pointShadow,Xe.hemisphereLights.value=ne.state.hemi,Xe.directionalShadowMap.value=ne.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Xe.spotShadowMap.value=ne.state.spotShadowMap,Xe.spotLightMatrix.value=ne.state.spotLightMatrix,Xe.spotLightMap.value=ne.state.spotLightMap,Xe.pointShadowMap.value=ne.state.pointShadowMap,Xe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const vt=Ne.getUniforms(),Mt=Ys.seqWithValue(vt.seq,Xe);return W.currentProgram=Ne,W.uniformsList=Mt,Ne}function is(R,k){const K=$e.get(R);K.outputColorSpace=k.outputColorSpace,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function ao(R,k,K,W,ne){k.isScene!==!0&&(k=Ut),Ve.resetTextureUnits();const be=k.fog,Pe=W.isMeshStandardMaterial?k.environment:null,Fe=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bn,Ie=(W.isMeshStandardMaterial?Rt:st).get(W.envMap||Pe),We=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!K.morphAttributes.position,vt=!!K.morphAttributes.normal,Mt=!!K.morphAttributes.color;let $t=pi;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&($t=b.toneMapping);const hn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=hn!==void 0?hn.length:0,et=$e.get(W),Gi=g.state.lights;if(_e===!0&&(Te===!0||R!==M)){const Vt=R===M&&W.id===F;Ce.setState(W,R,Vt)}let At=!1;W.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Gi.state.version||et.outputColorSpace!==Fe||ne.isInstancedMesh&&et.instancing===!1||!ne.isInstancedMesh&&et.instancing===!0||ne.isSkinnedMesh&&et.skinning===!1||!ne.isSkinnedMesh&&et.skinning===!0||ne.isInstancedMesh&&et.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&et.instancingColor===!1&&ne.instanceColor!==null||et.envMap!==Ie||W.fog===!0&&et.fog!==be||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ce.numPlanes||et.numIntersection!==Ce.numIntersection)||et.vertexAlphas!==We||et.vertexTangents!==Ne||et.morphTargets!==Xe||et.morphNormals!==vt||et.morphColors!==Mt||et.toneMapping!==$t||Ge.isWebGL2===!0&&et.morphTargetsCount!==Tt)&&(At=!0):(At=!0,et.__version=W.version);let Dn=et.currentProgram;At===!0&&(Dn=ei(W,k,ne));let Cr=!1,ni=!1,nn=!1;const lt=Dn.getUniforms(),Kt=et.uniforms;if(Be.useProgram(Dn.program)&&(Cr=!0,ni=!0,nn=!0),W.id!==F&&(F=W.id,ni=!0),Cr||M!==R){lt.setValue(V,"projectionMatrix",R.projectionMatrix),lt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Vt=lt.map.cameraPosition;Vt!==void 0&&Vt.setValue(V,rt.setFromMatrixPosition(R.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,ni=!0,nn=!0)}if(ne.isSkinnedMesh){lt.setOptional(V,ne,"bindMatrix"),lt.setOptional(V,ne,"bindMatrixInverse");const Vt=ne.skeleton;Vt&&(Ge.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),lt.setValue(V,"boneTexture",Vt.boneTexture,Ve),lt.setValue(V,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xt=K.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0&&Ge.isWebGL2===!0)&&I.update(ne,K,Dn),(ni||et.receiveShadow!==ne.receiveShadow)&&(et.receiveShadow=ne.receiveShadow,lt.setValue(V,"receiveShadow",ne.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Kt.envMap.value=Ie,Kt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ni&&(lt.setValue(V,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&ti(Kt,nn),be&&W.fog===!0&&ue.refreshFogUniforms(Kt,be),ue.refreshMaterialUniforms(Kt,W,H,re,ce),Ys.upload(V,et.uniformsList,Kt,Ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ys.upload(V,et.uniformsList,Kt,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(V,"center",ne.center),lt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),lt.setValue(V,"normalMatrix",ne.normalMatrix),lt.setValue(V,"modelMatrix",ne.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Vt=W.uniformsGroups;for(let _i=0,dn=Vt.length;_i<dn;_i++)if(Ge.isWebGL2){const Un=Vt[_i];ze.update(Un,Dn),ze.bind(Un,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function ti(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Gt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,k,K){$e.get(R.texture).__webglTexture=k,$e.get(R.depthTexture).__webglTexture=K;const W=$e.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=K===void 0,W.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const K=$e.get(R);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,K=0){w=R,A=k,L=K;let W=!0,ne=null,be=!1,Pe=!1;if(R){const Ie=$e.get(R);Ie.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(V.FRAMEBUFFER,null),W=!1):Ie.__webglFramebuffer===void 0?Ve.setupRenderTarget(R):Ie.__hasExternalTextures&&Ve.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Ne=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?ne=Ne[k][K]:ne=Ne[k],be=!0):Ge.isWebGL2&&R.samples>0&&Ve.useMultisampledRTT(R)===!1?ne=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?ne=Ne[K]:ne=Ne,T.copy(R.viewport),X.copy(R.scissor),te=R.scissorTest}else T.copy(ie).multiplyScalar(H).floor(),X.copy(q).multiplyScalar(H).floor(),te=Q;if(Be.bindFramebuffer(V.FRAMEBUFFER,ne)&&Ge.drawBuffers&&W&&Be.drawBuffers(R,ne),Be.viewport(T),Be.scissor(X),Be.setScissorTest(te),be){const Ie=$e.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,K)}else if(Pe){const Ie=$e.get(R.texture),We=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ie.__webglTexture,K||0,We)}F=-1},this.readRenderTargetPixels=function(R,k,K,W,ne,be,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Be.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const Ie=R.texture,We=Ie.format,Ne=Ie.type;if(We!==Pn&&me.convert(We)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ne===Kr&&(Le.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ne!==mi&&me.convert(Ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===di&&(Ge.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-W&&K>=0&&K<=R.height-ne&&V.readPixels(k,K,W,ne,me.convert(We),me.convert(Ne),be)}finally{const Ie=w!==null?$e.get(w).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(R,k,K=0){const W=Math.pow(2,-K),ne=Math.floor(k.image.width*W),be=Math.floor(k.image.height*W);Ve.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,R.x,R.y,ne,be),Be.unbindTexture()},this.copyTextureToTexture=function(R,k,K,W=0){const ne=k.image.width,be=k.image.height,Pe=me.convert(K.format),Fe=me.convert(K.type);Ve.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,W,R.x,R.y,ne,be,Pe,Fe,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,W,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,W,R.x,R.y,Pe,Fe,k.image),W===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(R,k,K,W,ne=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=R.max.x-R.min.x+1,Pe=R.max.y-R.min.y+1,Fe=R.max.z-R.min.z+1,Ie=me.convert(W.format),We=me.convert(W.type);let Ne;if(W.isData3DTexture)Ve.setTexture3D(W,0),Ne=V.TEXTURE_3D;else if(W.isDataArrayTexture)Ve.setTexture2DArray(W,0),Ne=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Xe=V.getParameter(V.UNPACK_ROW_LENGTH),vt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Mt=V.getParameter(V.UNPACK_SKIP_PIXELS),$t=V.getParameter(V.UNPACK_SKIP_ROWS),hn=V.getParameter(V.UNPACK_SKIP_IMAGES),Tt=K.isCompressedTexture?K.mipmaps[0]:K.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?V.texSubImage3D(Ne,ne,k.x,k.y,k.z,be,Pe,Fe,Ie,We,Tt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ne,ne,k.x,k.y,k.z,be,Pe,Fe,Ie,Tt.data)):V.texSubImage3D(Ne,ne,k.x,k.y,k.z,be,Pe,Fe,Ie,We,Tt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Xe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Mt),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,hn),ne===0&&W.generateMipmaps&&V.generateMipmap(Ne),Be.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ve.setTextureCube(R,0):R.isData3DTexture?Ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ve.setTexture2DArray(R,0):Ve.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){A=0,L=0,w=null,Be.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Ni:Ku}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ni?St:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class J0 extends ph{}J0.prototype.isWebGL1Renderer=!0;class Q0 extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mh extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Su=new O,bu=new O,Tu=new Lt,ua=new Pa,Vs=new ro;class ex extends Wt{constructor(e=new yn,t=new mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Su.fromBufferAttribute(t,r-1),bu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Su.distanceTo(bu);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;Tu.copy(r).invert(),ua.copy(e.ray).applyMatrix4(Tu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new O,h=new O,d=new O,f=new O,_=this.isLineSegments?2:1,v=n.index,g=n.attributes.position;if(v!==null){const m=Math.max(0,c.start),D=Math.min(v.count,c.start+c.count);for(let b=m,C=D-1;b<C;b+=_){const A=v.getX(b),L=v.getX(b+1);if(u.fromBufferAttribute(g,A),h.fromBufferAttribute(g,L),ua.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||t.push({distance:F,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,c.start),D=Math.min(g.count,c.start+c.count);for(let b=m,C=D-1;b<C;b+=_){if(u.fromBufferAttribute(g,b),h.fromBufferAttribute(g,b+1),ua.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Au=new O,wu=new O;class tx extends ex{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Au.fromBufferAttribute(t,r),wu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Au.distanceTo(wu);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nx extends sn{constructor(e,t,n,r,s,c,o,l,u){super(e,t,n,r,s,c,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let c;t?c=t:c=e*n[s-1];let o=0,l=s-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=n[r]-c,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===c)return r/(s-1);const h=n[r],f=n[r+1]-h,_=(c-h)/f;return(r+_)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const c=this.getPoint(r),o=this.getPoint(s),l=t||(c.isVector2?new Re:new O);return l.copy(o).sub(c).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,r=[],s=[],c=[],o=new O,l=new Lt;for(let _=0;_<=e;_++){const v=_/e;r[_]=this.getTangentAt(v,new O)}s[0]=new O,c[0]=new O;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),c[0].crossVectors(r[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),c[_]=c[_-1].clone(),o.crossVectors(r[_-1],r[_]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(zt(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(l.makeRotationAxis(o,v))}c[_].crossVectors(r[_],s[_])}if(t===!0){let _=Math.acos(zt(s[0].dot(s[e]),-1,1));_/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(_=-_);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],_*v)),c[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gh extends Jn{constructor(e=0,t=0,n=1,r=1,s=0,c=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=c,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Re,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const c=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(c?s=0:s=r),this.aClockwise===!0&&!c&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,_=u-this.aY;l=f*h-_*d+this.aX,u=f*d+_*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ix extends gh{constructor(e,t,n,r,s,c){super(e,t,n,n,r,s,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Na(){let i=0,e=0,t=0,n=0;function r(s,c,o,l){i=s,e=o,t=-3*s+3*c-2*o-l,n=2*s-2*c+o+l}return{initCatmullRom:function(s,c,o,l,u){r(c,o,u*(o-s),u*(l-c))},initNonuniformCatmullRom:function(s,c,o,l,u,h,d){let f=(c-s)/u-(o-s)/(u+h)+(o-c)/h,_=(o-c)/h-(l-c)/(h+d)+(l-o)/d;f*=h,_*=h,r(c,o,f,_)},calc:function(s){const c=s*s,o=c*s;return i+e*s+t*c+n*o}}}const Ws=new O,ha=new Na,da=new Na,fa=new Na;class _h extends Jn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,s=r.length,c=(s-(this.closed?0:1))*e;let o=Math.floor(c),l=c-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,h;this.closed||o>0?u=r[(o-1)%s]:(Ws.subVectors(r[0],r[1]).add(r[0]),u=Ws);const d=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Ws.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(d),_),y=Math.pow(d.distanceToSquared(f),_),g=Math.pow(f.distanceToSquared(h),_);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),ha.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,v,y,g),da.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,v,y,g),fa.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,v,y,g)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),da.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),fa.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(ha.calc(l),da.calc(l),fa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ru(i,e,t,n,r){const s=(n-e)*.5,c=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+c)*l+(-3*t+3*n-2*s-c)*o+s*i+t}function rx(i,e){const t=1-i;return t*t*e}function sx(i,e){return 2*(1-i)*i*e}function ox(i,e){return i*i*e}function Yr(i,e,t,n){return rx(i,e)+sx(i,t)+ox(i,n)}function ax(i,e){const t=1-i;return t*t*t*e}function cx(i,e){const t=1-i;return 3*t*t*i*e}function lx(i,e){return 3*(1-i)*i*i*e}function ux(i,e){return i*i*i*e}function jr(i,e,t,n,r){return ax(i,e)+cx(i,t)+lx(i,n)+ux(i,r)}class hx extends Jn{constructor(e=new Re,t=new Re,n=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,c=this.v2,o=this.v3;return n.set(jr(e,r.x,s.x,c.x,o.x),jr(e,r.y,s.y,c.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dx extends Jn{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,c=this.v2,o=this.v3;return n.set(jr(e,r.x,s.x,c.x,o.x),jr(e,r.y,s.y,c.y,o.y),jr(e,r.z,s.z,c.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fx extends Jn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class px extends Jn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mx extends Jn{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(Yr(e,r.x,s.x,c.x),Yr(e,r.y,s.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends Jn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(Yr(e,r.x,s.x,c.x),Yr(e,r.y,s.y,c.y),Yr(e,r.z,s.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gx extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,r=this.points,s=(r.length-1)*e,c=Math.floor(s),o=s-c,l=r[c===0?c:c-1],u=r[c],h=r[c>r.length-2?r.length-1:c+1],d=r[c>r.length-3?r.length-1:c+2];return n.set(Ru(o,l.x,u.x,h.x,d.x),Ru(o,l.y,u.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var _x=Object.freeze({__proto__:null,ArcCurve:ix,CatmullRomCurve3:_h,CubicBezierCurve:hx,CubicBezierCurve3:dx,EllipseCurve:gh,LineCurve:fx,LineCurve3:px,QuadraticBezierCurve:mx,QuadraticBezierCurve3:vh,SplineCurve:gx});class Oa extends yn{constructor(e=1,t=1,n=1,r=32,s=1,c=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:c,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],_=[];let v=0;const y=[],g=n/2;let m=0;D(),c===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(_,2));function D(){const C=new O,A=new O;let L=0;const w=(t-e)/n;for(let F=0;F<=s;F++){const M=[],T=F/s,X=T*(t-e)+e;for(let te=0;te<=r;te++){const G=te/r,j=G*l+o,$=Math.sin(j),re=Math.cos(j);A.x=X*$,A.y=-T*n+g,A.z=X*re,d.push(A.x,A.y,A.z),C.set($,w,re).normalize(),f.push(C.x,C.y,C.z),_.push(G,1-T),M.push(v++)}y.push(M)}for(let F=0;F<r;F++)for(let M=0;M<s;M++){const T=y[M][F],X=y[M+1][F],te=y[M+1][F+1],G=y[M][F+1];h.push(T,X,G),h.push(X,te,G),L+=6}u.addGroup(m,L,0),m+=L}function b(C){const A=v,L=new Re,w=new O;let F=0;const M=C===!0?e:t,T=C===!0?1:-1;for(let te=1;te<=r;te++)d.push(0,g*T,0),f.push(0,T,0),_.push(.5,.5),v++;const X=v;for(let te=0;te<=r;te++){const j=te/r*l+o,$=Math.cos(j),re=Math.sin(j);w.x=M*re,w.y=g*T,w.z=M*$,d.push(w.x,w.y,w.z),f.push(0,T,0),L.x=$*.5+.5,L.y=re*.5*T+.5,_.push(L.x,L.y),v++}for(let te=0;te<r;te++){const G=A+te,j=X+te;C===!0?h.push(j,j+1,G):h.push(j+1,j,G),F+=3}u.addGroup(m,F,C===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class to extends Oa{constructor(e=1,t=1,n=32,r=1,s=!1,c=0,o=Math.PI*2){super(0,e,t,n,r,s,c,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:c,thetaLength:o}}static fromJSON(e){return new to(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fa extends yn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const c=[],o=[],l=[],u=[],h=new O,d=new O,f=new O;for(let _=0;_<=n;_++)for(let v=0;v<=r;v++){const y=v/r*s,g=_/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),u.push(v/r),u.push(_/n)}for(let _=1;_<=n;_++)for(let v=1;v<=r;v++){const y=(r+1)*_+v-1,g=(r+1)*(_-1)+v-1,m=(r+1)*(_-1)+v,D=(r+1)*_+v;c.push(y,g,D),c.push(g,m,D)}this.setIndex(c),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ba extends yn{constructor(e=new vh(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const c=e.computeFrenetFrames(t,s);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const o=new O,l=new O,u=new Re;let h=new O;const d=[],f=[],_=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(_,2));function y(){for(let b=0;b<t;b++)g(b);g(s===!1?t:0),D(),m()}function g(b){h=e.getPointAt(b/t,h);const C=c.normals[b],A=c.binormals[b];for(let L=0;L<=r;L++){const w=L/r*Math.PI*2,F=Math.sin(w),M=-Math.cos(w);l.x=M*C.x+F*A.x,l.y=M*C.y+F*A.y,l.z=M*C.z+F*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let C=1;C<=r;C++){const A=(r+1)*(b-1)+(C-1),L=(r+1)*b+(C-1),w=(r+1)*b+C,F=(r+1)*(b-1)+C;v.push(A,L,F),v.push(L,w,F)}}function D(){for(let b=0;b<=t;b++)for(let C=0;C<=r;C++)u.x=b/t,u.y=C/r,_.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ba(new _x[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vx extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const pa=new Lt,Cu=new O,Lu=new O;class xx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yx extends xx{constructor(){super(new lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends vx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new yx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Du{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mx extends tx{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new yn;r.setAttribute("position",new Dt(t,3)),r.setAttribute("color",new Dt(n,3));const s=new mh({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new dt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);const Uu={type:"change"},ma={type:"start"},Iu={type:"end"},Xs=new Pa,Nu=new ui,Ex=Math.cos(70*Vp.DEG2RAD);class Sx extends Hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",S),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Uu),n.update(),s=r.NONE},this.update=function(){const I=new O,oe=new Bi().setFromUnitVectors(e.up,new O(0,1,0)),Ee=oe.clone().invert(),me=new O,Me=new Bi,ze=new O,Ke=2*Math.PI;return function(xe=null){const J=n.object.position;I.copy(J).sub(n.target),I.applyQuaternion(oe),o.setFromVector3(I),n.autoRotate&&s===r.NONE&&X(M(xe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let he=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(he)&&isFinite(pe)&&(he<-Math.PI?he+=Ke:he>Math.PI&&(he-=Ke),pe<-Math.PI?pe+=Ke:pe>Math.PI&&(pe-=Ke),he<=pe?o.theta=Math.max(he,Math.min(pe,o.theta)):o.theta=o.theta>(he+pe)/2?Math.max(he,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&L||n.object.isOrthographicCamera?o.radius=se(o.radius):o.radius=se(o.radius*u),I.setFromSpherical(o),I.applyQuaternion(Ee),J.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Qe=!1;if(n.zoomToCursor&&L){let it=null;if(n.object.isPerspectiveCamera){const at=I.length();it=se(at*u);const jt=at-it;n.object.position.addScaledVector(C,jt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new O(A.x,A.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0;const jt=new O(A.x,A.y,0);jt.unproject(n.object),n.object.position.sub(jt).add(at),n.object.updateMatrixWorld(),it=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(it).add(n.object.position):(Xs.origin.copy(n.object.position),Xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xs.direction))<Ex?e.lookAt(n.target):(Nu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xs.intersectPlane(Nu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0);return u=1,L=!1,Qe||me.distanceToSquared(n.object.position)>c||8*(1-Me.dot(n.object.quaternion))>c||ze.distanceToSquared(n.target)>0?(n.dispatchEvent(Uu),me.copy(n.object.position),Me.copy(n.object.quaternion),ze.copy(n.target),Qe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",le),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",st),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",S),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const c=1e-6,o=new Du,l=new Du;let u=1;const h=new O,d=new Re,f=new Re,_=new Re,v=new Re,y=new Re,g=new Re,m=new Re,D=new Re,b=new Re,C=new O,A=new Re;let L=!1;const w=[],F={};function M(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function X(I){l.theta-=I}function te(I){l.phi-=I}const G=function(){const I=new O;return function(Ee,me){I.setFromMatrixColumn(me,0),I.multiplyScalar(-Ee),h.add(I)}}(),j=function(){const I=new O;return function(Ee,me){n.screenSpacePanning===!0?I.setFromMatrixColumn(me,1):(I.setFromMatrixColumn(me,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(Ee),h.add(I)}}(),$=function(){const I=new O;return function(Ee,me){const Me=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;I.copy(ze).sub(n.target);let Ke=I.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),G(2*Ee*Ke/Me.clientHeight,n.object.matrix),j(2*me*Ke/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(Ee*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),j(me*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function re(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(I){if(!n.zoomToCursor)return;L=!0;const oe=n.domElement.getBoundingClientRect(),Ee=I.clientX-oe.left,me=I.clientY-oe.top,Me=oe.width,ze=oe.height;A.x=Ee/Me*2-1,A.y=-(me/ze)*2+1,C.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function se(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function ie(I){d.set(I.clientX,I.clientY)}function q(I){U(I),m.set(I.clientX,I.clientY)}function Q(I){v.set(I.clientX,I.clientY)}function ve(I){f.set(I.clientX,I.clientY),_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;X(2*Math.PI*_.x/oe.clientHeight),te(2*Math.PI*_.y/oe.clientHeight),d.copy(f),n.update()}function _e(I){D.set(I.clientX,I.clientY),b.subVectors(D,m),b.y>0?re(T()):b.y<0&&H(T()),m.copy(D),n.update()}function Te(I){y.set(I.clientX,I.clientY),g.subVectors(y,v).multiplyScalar(n.panSpeed),$(g.x,g.y),v.copy(y),n.update()}function ce(I){U(I),I.deltaY<0?H(T()):I.deltaY>0&&re(T()),n.update()}function Ue(I){let oe=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(-n.keyPanSpeed,0),oe=!0;break}oe&&(I.preventDefault(),n.update())}function De(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),oe=.5*(w[0].pageY+w[1].pageY);d.set(I,oe)}}function rt(){if(w.length===1)v.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),oe=.5*(w[0].pageY+w[1].pageY);v.set(I,oe)}}function Ut(){const I=w[0].pageX-w[1].pageX,oe=w[0].pageY-w[1].pageY,Ee=Math.sqrt(I*I+oe*oe);m.set(0,Ee)}function He(){n.enableZoom&&Ut(),n.enablePan&&rt()}function V(){n.enableZoom&&Ut(),n.enableRotate&&De()}function yt(I){if(w.length==1)f.set(I.pageX,I.pageY);else{const Ee=Z(I),me=.5*(I.pageX+Ee.x),Me=.5*(I.pageY+Ee.y);f.set(me,Me)}_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;X(2*Math.PI*_.x/oe.clientHeight),te(2*Math.PI*_.y/oe.clientHeight),d.copy(f)}function Le(I){if(w.length===1)y.set(I.pageX,I.pageY);else{const oe=Z(I),Ee=.5*(I.pageX+oe.x),me=.5*(I.pageY+oe.y);y.set(Ee,me)}g.subVectors(y,v).multiplyScalar(n.panSpeed),$(g.x,g.y),v.copy(y)}function Ge(I){const oe=Z(I),Ee=I.pageX-oe.x,me=I.pageY-oe.y,Me=Math.sqrt(Ee*Ee+me*me);D.set(0,Me),b.set(0,Math.pow(D.y/m.y,n.zoomSpeed)),re(b.y),m.copy(D)}function Be(I){n.enableZoom&&Ge(I),n.enablePan&&Le(I)}function mt(I){n.enableZoom&&Ge(I),n.enableRotate&&yt(I)}function $e(I){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",Ve),n.domElement.addEventListener("pointerup",st)),de(I),I.pointerType==="touch"?Y(I):Rt(I))}function Ve(I){n.enabled!==!1&&(I.pointerType==="touch"?ue(I):bt(I))}function st(I){Ce(I),w.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",st)),n.dispatchEvent(Iu),s=r.NONE}function Rt(I){let oe;switch(I.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Ki.DOLLY:if(n.enableZoom===!1)return;q(I),s=r.DOLLY;break;case Ki.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;Q(I),s=r.PAN}else{if(n.enableRotate===!1)return;ie(I),s=r.ROTATE}break;case Ki.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;ie(I),s=r.ROTATE}else{if(n.enablePan===!1)return;Q(I),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ma)}function bt(I){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ve(I);break;case r.DOLLY:if(n.enableZoom===!1)return;_e(I);break;case r.PAN:if(n.enablePan===!1)return;Te(I);break}}function P(I){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(I.preventDefault(),n.dispatchEvent(ma),ce(I),n.dispatchEvent(Iu))}function S(I){n.enabled===!1||n.enablePan===!1||Ue(I)}function Y(I){switch(fe(I),w.length){case 1:switch(n.touches.ONE){case Zi.ROTATE:if(n.enableRotate===!1)return;De(),s=r.TOUCH_ROTATE;break;case Zi.PAN:if(n.enablePan===!1)return;rt(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(),s=r.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ma)}function ue(I){switch(fe(I),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(I),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Le(I),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(I),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(I),n.update();break;default:s=r.NONE}}function le(I){n.enabled!==!1&&I.preventDefault()}function de(I){w.push(I)}function Ce(I){delete F[I.pointerId];for(let oe=0;oe<w.length;oe++)if(w[oe].pointerId==I.pointerId){w.splice(oe,1);return}}function fe(I){let oe=F[I.pointerId];oe===void 0&&(oe=new Re,F[I.pointerId]=oe),oe.set(I.pageX,I.pageY)}function Z(I){const oe=I.pointerId===w[0].pointerId?w[1]:w[0];return F[oe.pointerId]}n.domElement.addEventListener("contextmenu",le),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const qs={R:"hsl(120, 100%, 60%)",L:"hsl(240, 100%, 60%)",U:"hsl(60, 100%, 60%)",D:"hsl(120, 100%, 100%)",F:"hsl(0, 100%, 60%)",B:"hsl(23, 100%, 60%)"};let xh=0;function bx(i){const e=i.N,t=l=>{const[u,h,d]=l;if(u===-1)return"L";if(u===1)return"R";if(h===-1)return"D";if(h===1)return"U";if(d===-1)return"B";if(d===1)return"F";throw new Error("unreachable")},n=(l,u,h)=>{const[d,f,_]=u,v=t(h);switch(v){case"U":return[v,d,_];case"F":return[v,d,l-1-f];case"R":return[v,l-1-_,l-1-f];case"L":return[v,_,l-1-f];case"B":return[v,l-1-d,l-1-f];case"D":return[v,d,l-1-_]}},r=(l,u,h)=>{switch(t(h)){case"U":return l;case"F":return u;case"L":return Zs(u,l);case"R":return Zs(l,u);case"B":return u.map(d=>-d);case"D":return l.map(d=>-d)}},s=(l,u)=>{const h=[];for(let d=0;d<3;d++){const f=[0,0,0];if(u[d]===0)f[d]=-1;else if(u[d]===l-1)f[d]=1;else continue;h.push(f)}return h},c={};for(const l of i.permutations)for(const{p1:u,p2:h,nT:d,nF:f}of l){const _=s(e,u);for(const v of _){let y=r(d,f,v);const g=t(v),[m,D,b]=n(e,h,y);c[`${m}-${D}-${b}`]=g}}const o=[];for(const l in qs){const u=qs[l],h=document.createElement("canvas"),d=h.getContext("2d");d.lineWidth=2,d.strokeStyle="gray",d.fillStyle=u;const[f,_]=[h.width,h.height],v=f/e,y=_/e;for(let g=0;g<e;g++)for(let m=0;m<e;m++){const D=`${l}-${g}-${m}`,b=D in c?qs[c[D]]:qs[l];d.fillStyle=b,d.beginPath(),d.moveTo(g*v,m*y),d.lineTo(g*v+v,m*y),d.lineTo(g*v+v,m*y+y),d.lineTo(g*v,m*y+y),d.closePath(),d.fill(),d.stroke()}o.push(h)}return o}function ga(i,e,t){const n=t*(i-1)/2;let r=e.map(s=>s===0?-n:s===i-1?i+n:s+.5);return r=r.map(s=>s*2/i-1),r}function Tx(){cancelAnimationFrame(xh)}function Ax(i,e,t){const n=new Q0;n.background=new dt("white");const r=35;t.clientWidth/t.clientHeight;const s=.1,c=100,o=new xn(r,1,s,c);o.position.set(5,5,5);const h=bx(e).map(C=>new nx(C)).map(C=>new qr({map:C,color:"white",opacity:.8,transparent:!0})),d=new wr(2,2,2),f=new ln(d,h),_=new Pu("white",3),v=new Pu("white",3);_.position.set(10,10,10),v.position.set(-10,-10,-10);const y=new Mx(5);n.add(y),n.add(f,_,v);const g=new Fu;for(const C of e.permutations){const A=new qr({color:g.nextColor()});if(C.length!==1)for(const L of C){const w=ga(i,L.p1,.01),F=ga(i,L.p2,.01),M=bf(F,w),T=Sf(M),X=Tf(M),te=sl(w,rl(T,X-.04)),j=[sl(w,rl(T,.05)),te];console.log("path over cube",L.p1,L.p2,w,F,j);const $=j.map(q=>new O(...q)),re=new _h($),H=new Ba(re,64,.01,20),U=new ln(H,A);n.add(U);const se=new to(.03,.1,32,1),ie=new ln(se,A);ie.geometry.rotateX(Math.PI/2),ie.lookAt(new O(...M)),ie.position.set(...te),n.add(ie)}}for(const C of e.rotates){const A=new qr({color:g.nextColor()}),L=C.unit.position,w=ga(i,L,.05),F=C.degree===180?Math.PI*2:Math.PI*3/2,M=new kr,T=new Fa(.1,.01,void 0,void 0,F),X=new ln(T,A);if(X.geometry.rotateZ(C.degree<0?Math.PI/2:Math.PI),M.add(X),C.degree!==180){const te=new to(.03,.1),G=new ln(te,A);G.position.set(C.degree<0?.1:-.1,.03,0),M.add(G)}M.lookAt(...w),M.position.set(...w),n.add(M)}const m=new ph;new Sx(o,m.domElement);const D=Math.min(t.clientWidth,t.clientHeight);m.setSize(D,D),m.setPixelRatio(window.devicePixelRatio),t.append(m.domElement);function b(){xh=requestAnimationFrame(b),m.render(n,o)}b()}let wn={n:"3",alg:"(R U R' U)5",renderType:"3D",algParam:"",showCenterChanges:"true"};const Et=wx();let js="";window.onload=function(){let i={};try{i=JSON.parse(window.localStorage.getItem("setting")||"{}")}catch{}wn={...wn,...i},new URLSearchParams(window.location.search).forEach((e,t)=>{t in wn&&(wn[t]=e)}),document.body.appendChild(Et.app),Et.inputAlg.value=wn.alg,Et.inputN.value=(wn.n||3).toString(),Et.inputParam.value=wn.algParam,Et.showCentersBtn.classList.add(wn.showCenterChanges==="true"?"btn-primary":"btn-outline-secondary"),Mh(wn.renderType)};window.onresize=function(){Di()};function wx(){const i=document.createElement("div");i.id="app",i.style.margin="10px";const[e,t]=_a("alg","",Di);e.style.marginBottom="5px";const[n,r]=_a("N","N",Di);n.classList.add("d-inline-flex","align-items-center","w-auto"),n.style.marginRight="5px",r.style.width="100px";const[s,c]=_a("Params","Params",Di);s.classList.add("d-inline-flex","align-items-center","w-auto"),c.style.width="200px",s.style.marginRight="10px",document.createElement("div").classList.add("input-group-prepend"),Cx(e);const l=document.createElement("btn");l.classList.add("btn","btn-outline-secondary"),l.append("🔗"),l.onclick=()=>{const g=Et.inputN.value;window.open(`https://alpha.twizzle.net/explore/?puzzle=${g}x${g}x${g}&alg=${Et.inputAlg.value}`,"_blank")},e.append(l);const u=document.createElement("div");u.classList.add("btn-group");const h=yh("Center Effects","btn",g=>{const m=g.target;m.classList.toggle("btn-primary"),m.classList.toggle("btn-outline-secondary"),Di()});u.append(h);const d=Rx(),f=document.createElement("div");f.classList.add("input-group","d-inline-flex","w-auto"),f.append(u,d);const _=document.createElement("div");_.style.margin="10px 0px",_.style.display="flex",_.style.flexDirection="row",_.style.flexWrap="wrap";const v=document.createElement("div");v.style.border="1px solid lightgrey",v.style.width="600px",v.style.height="600px",v.style.padding="5px",v.onresize=g=>{v.style.height=v.style.width};const y=document.createElement("span");return y.style.border="1px solid lightgrey",y.style.width="600px",_.append(v,y),i.append(e,n,s,f,_),{app:i,inputN:r,inputAlg:t,inputParam:c,showCentersBtn:h,canvasContainer:v,renderSwitcher:d,desc:y}}function _a(i,e,t){const n=document.createElement("div");if(n.classList.add("input-group"),e!==""){const s=document.createElement("span");s.classList.add("input-group-text"),s.appendChild(document.createTextNode(e)),n.appendChild(s)}const r=document.createElement("input");return r.type="text",r.classList.add("form-control"),r.id=i,r.onchange=t,n.appendChild(r),[n,r]}function yh(i,e,t){const n=document.createElement("button"),r=e.split(/\s+/g);return n.classList.add(...r),n.onclick=t,n.textContent=i,n}function Mh(i){js=i;for(const e of Et.renderSwitcher.children)e.classList.remove("btn-primary"),e.classList.add("btn-outline-secondary"),e.textContent===i&&(e.classList.add("btn-primary"),e.classList.remove("btn-outline-secondary"));Di()}function Rx(){const i=document.createElement("div");i.classList.add("btn-group"),i.style.marginLeft="20px",i.style.marginRight="20px";const e="btn btn-outline-secondary";for(const t of["1 face","3 faces","5 faces","6 faces","6 faces 2","3D"])i.append(yh(t,e,n=>{const r=n.target;Mh(r.textContent)}));return i}function Cx(i){const e=document.createElement("button");e.classList.add("btn","btn-outline-secondary","dropdown-toggle"),e.type="button",e.setAttribute("data-bs-toggle","dropdown"),e.setAttribute("aria-expanded","false"),e.textContent="Alg";const t=document.createElement("ul");t.classList.add("dropdown-menu");for(const n of Lf()){const r=document.createElement("li"),s=document.createElement("a");s.classList.add("dropdown-item"),s.append(...Rf("red","["+n.tags.join(",")+"] ","black",n.name+" ","blue",n.algorithm)),s.onclick=function(c){return function(){Et.inputAlg.value=c,Di()}}(n.algorithm),r.append(s),t.append(r)}i.append(e,t)}function Lx(i,e,t){const n=e.split(/\s+/g).filter(s=>s!==""),r=[];for(const s of i)s.match(/[a-z]/i)&&!s.match(/[xyzMESmesLRFBUDlrfbudhw]/)&&r.indexOf(s)<0&&r.push(s);for(let s=n.length;s<r.length;s++)n.push("1");n.length=r.length;for(let s=0;s<r.length;s++)i=i.replaceAll(r[s],n[s]);return i=i.replaceAll("h",`${~~(t/2)}`),[i,n.join(" ")]}function Di(){console.log("onInputChange");const i=parseInt(Et.inputN.value),e=Et.inputAlg.value,[t,n]=Lx(e,Et.inputParam.value,i);console.log(t,n),n!==Et.inputParam.value&&(Et.inputParam.value=n);const r=yf(t,i),s=Et.showCentersBtn.classList.contains("btn-primary");if(!s){const c=(o,l)=>{const u=gf(o,l);return u!==va.Corner&&u!==va.Edge};r.cycles=r.cycles.filter(o=>!c(i,o[0])),r.rotates=r.rotates.filter(o=>!c(i,o.unit.position))}if(Px(r,i),Tx(),js==="3D")Et.canvasContainer.innerHTML="",Ax(i,r,Et.canvasContainer);else{Et.canvasContainer.innerHTML="";const c=Dx();switch(Et.canvasContainer.appendChild(c),Af(c),js){case"1 face":Ux(i,r,c);break;case"3 faces":Ix(i,r,c);break;case"5 faces":Fx(i,r,c);break;case"6 faces":Nx(i,r,c);break;case"6 faces 2":Ox(i,r,c);break}}wn={n:i.toString(),alg:e,renderType:js,algParam:Et.inputParam.value,showCenterChanges:s?"true":"false"},window.localStorage.setItem("setting",JSON.stringify(wn))}function Px(i,e){const t=(s,c)=>{const o=document.createElement("span");return o.style.color=c,o.style.fontWeight="800",o.textContent=s,o};wf(Et.desc);const n=document.createElement("div");n.style.maxHeight="300px",n.style.overflowY="auto",n.append("Resolved Alg: "+i.regulatedAlg,document.createElement("br")),Et.desc.append(n),Et.desc.append("Order: "+i.order,document.createElement("br"));const r=document.createElement("div");if(i.cycles.length>100)r.append("cycles are too big to display: "+i.cycles.length);else for(const s of i.cycles){const c=s.map(o=>nl(e,o)||`${o}`).join(" -> ");r.append(t(`[${s.length}]`,"#0080ff"),document.createTextNode(c+" "))}r.append(document.createElement("br"));for(const s of i.rotates){const c=nl(e,s.unit.position)||`${s.unit.position}`;r.append(t(`[${s.degree}] `,"#FF0080"),c+" ")}Et.desc.append(r)}function Dx(){const i=document.createElement("canvas");return i.style.width="100%",i.style.height="100%",i}function Gr(i,e){const t={U:0,L:0,F:0,R:0,B:0,D:0};for(const[n,r,s]of i)n===0&&t.L++,n===e-1&&t.R++,r===0&&t.D++,r===e-1&&t.U++,s===0&&t.B++,s===e-1&&t.F++;return t}function Rn(i,e,t){return[[i,e],[i+t,e],[i+t,e+t],[i,e+t]]}function Ux(i,e,t){const n=t.getContext("2d"),r=10,s=10,c=Math.floor(Math.min((t.width-r*2)/17,(t.height-s/2)/14))-2,o=c*14,l=c*2;n.translate(r,s);const u=[{name:"U",priority:6,shape:Rn(0,0,o)},{name:"F",priority:5,shape:Rn(o+c,0,l)},{name:"R",priority:4,shape:Rn(o+c,3*c,l)},{name:"L",priority:3,shape:Rn(o+c,6*c,l)},{name:"B",priority:2,shape:Rn(o+c,9*c,l)},{name:"D",priority:1,shape:Rn(o+c,12*c,l)}],h=Gr(e.cycles.flat(),i);u.sort((d,f)=>h[f.name]-h[d.name]),u[0].shape=Rn(0,0,o);for(let d=1;d<6;d++)u[d].shape=Rn(o+c,(d-1)*3*c,l),u[d].priority=7-d;es(i,e,n,u)}function Ix(i,e,t){const n=t.getContext("2d");n.lineCap="round",n.lineJoin="round",n.lineWidth=3;const r=10,s=10;n.translate(r,s);const c=Math.floor(Math.min((t.width-r*2)/2.5,(t.height-s*2)/2))-2,o=c/4,l=(v,y)=>{if(v===0)return[c,c];const g=v%2===y?c*.95:c,m=Math.PI/6+Math.PI/3*(v-1);return[c+g*Math.cos(m),c-g*Math.sin(m)]},u=e.cycles.flat();function h(){const v=(y,g,m)=>{for(const D of u)if(D[0]!==y&&D[1]!==g&&D[2]!==m)return!1;return!0};return v(i-1,i-1,i-1)?["U",[2,1,0,3],"R",[0,1,6,5],"F",[3,0,5,4],"L","D","B"]:v(0,i-1,i-1)?["U",[3,2,1,0],"F",[0,1,6,5],"L",[3,0,5,4],"B","D","R"]:v(0,i-1,0)?["U",[0,3,2,1],"L",[0,1,6,5],"B",[3,0,5,4],"R","D","F"]:v(i-1,i-1,0)?["U",[1,0,3,2],"B",[0,1,6,5],"R",[3,0,5,4],"F","D","L"]:v(i-1,0,i-1)?["D",[4,0,6,5],"R",[2,1,6,0],"F",[3,2,0,4],"U","L","B"]:v(0,0,i-1)?["D",[5,4,0,6],"F",[2,1,6,0],"L",[3,2,0,4],"U","B","R"]:v(0,0,0)?["D",[6,5,4,0],"L",[2,1,6,0],"B",[3,2,0,4],"U","R","F"]:v(i-1,0,0)?["D",[0,6,5,4],"B",[2,1,6,0],"R",[3,2,0,4],"U","F","L"]:["U",[2,1,0,3],"F",[3,0,5,4],"R",[0,1,6,5],"L","D","B"]}const d=h(),f=d[0]==="U"?0:1,_=[{name:d[0],priority:6,shape:d[1].map(v=>l(v,f))},{name:d[2],priority:5,shape:d[3].map(v=>l(v,f))},{name:d[4],priority:4,shape:d[5].map(v=>l(v,f))},{name:d[6],priority:-1,shape:Rn(0,0,o)},{name:d[7],priority:-2,shape:Rn(0,2*c-o,o)},{name:d[8],priority:-3,shape:Rn(2*c+o,c-o/2,o)}];es(i,e,n,_)}function Nx(i,e,t){const n=t.getContext("2d"),r=10,s=10,c=Math.floor(Math.min((t.width-r*2)/4,(t.height-s/2)/3))-2;n.translate(r,s);const o=(u,h)=>[[u,h],[u+c,h],[u+c,h+c],[u,h+c]],l=[{name:"U",priority:6,shape:o(c,0)},{name:"F",priority:5,shape:o(c,c)},{name:"R",priority:4,shape:o(2*c,c)},{name:"L",priority:3,shape:o(0,c)},{name:"D",priority:2,shape:o(c,2*c)},{name:"B",priority:-1,shape:o(3*c,c)}];es(i,e,n,l)}function Ox(i,e,t){const n=t.getContext("2d"),r=10,s=10,c=.5,o=.5,l=Math.floor(Math.min((t.width-r*2)/(3+c),(t.height-s/2)/(2+o)))-2;n.translate(r,s);const u=(d,f)=>[[d,f],[d+l,f],[d+l,f+l],[d,f+l]],h=[{name:"U",priority:4,shape:[[l+c*l,0],[2*l+c*l,0],[2*l,l*o],[l,l*o]]},{name:"R",priority:5,shape:[[2*l,l*o],[2*l+c*l,0],[2*l+c*l,l],[2*l,l+l*o]]},{name:"F",priority:6,shape:u(l,l*o)},{name:"L",priority:3,shape:u(0,l*o)},{name:"D",priority:2,shape:u(l,l+l*o)},{name:"B",priority:-1,shape:u(2*l+c*l,0)}];es(i,e,n,h)}function es(i,e,t,n){const r={},s=(A,L,w,F,M)=>{const T=(H,U,se)=>{const ie=[H];for(let q=1;q<se;q++)ie.push([H[0]+q*(U[0]-H[0])/se,H[1]+q*(U[1]-H[1])/se]);return ie.push(U),ie},X=H=>H.reduce((se,ie,q,Q)=>[se[0]+ie[0],se[1]+ie[1]],[0,0]).map(se=>se/H.length);t.fillStyle=w[A],t.beginPath(),L.forEach((H,U)=>{U===0?t.moveTo(...H):t.lineTo(...H)}),t.closePath(),t.fill();const te=T(L[0],L[3],i),G=T(L[0],L[1],i),j=T(L[1],L[2],i),$=T(L[3],L[2],i);for(let H=0;H<=i;H++)t.beginPath(),t.moveTo(te[H][0],te[H][1]),t.lineTo(j[H][0],j[H][1]),t.moveTo(G[H][0],G[H][1]),t.lineTo($[H][0],$[H][1]),t.stroke();const re=[];for(let H=0;H<G.length;H++)re.push(T(G[H],$[H],i));for(let H=0;H<i;H++)for(let U=0;U<i;U++){const se=M(H,U).join(",")+`-${A}`,ie=X([re[H][U],re[H][U+1],re[H+1][U+1],re[H+1][U]]);r[se]=ie,H===0&&U===0&&t.fillText(A,ie[0],ie[1])}for(let H=0;H<i;H++)for(let U=0;U<i;U++){const se=`${A}-${H}-${U}`;if(se in F){t.fillStyle=w[F[se]];const ie=[re[H][U],re[H][U+1],re[H+1][U+1],re[H+1][U]];t.beginPath(),t.moveTo(...ie[0]),t.lineTo(...ie[1]),t.lineTo(...ie[2]),t.lineTo(...ie[3]),t.closePath(),t.fill(),t.stroke()}}},c=A=>{const[L,w,F]=A;if(L===-1)return"L";if(L===1)return"R";if(w===-1)return"D";if(w===1)return"U";if(F===-1)return"B";if(F===1)return"F";throw new Error("unreachable")},o={};t.lineCap="round",t.lineJoin="round",t.lineWidth=9/i;const l={U:(A,L)=>[A,i-1,L],F:(A,L)=>[A,i-1-L,i-1],R:(A,L)=>[i-1,i-1-L,i-1-A],L:(A,L)=>[0,i-1-L,A],B:(A,L)=>[i-1-A,i-1-L,0],D:(A,L)=>[A,0,i-1-L]},u=(A,L,w)=>{const[F,M,T]=L,X=c(w);switch(X){case"U":return[X,F,T];case"F":return[X,F,A-1-M];case"R":return[X,A-1-T,A-1-M];case"L":return[X,T,A-1-M];case"B":return[X,A-1-F,A-1-M];case"D":return[X,F,A-1-T]}},h=(A,L,w)=>{switch(c(w)){case"U":return A;case"F":return L;case"L":return Zs(L,A);case"R":return Zs(A,L);case"B":return L.map(F=>-F);case"D":return A.map(F=>-F)}},d=(A,L)=>{const w=[];for(let F=0;F<3;F++){const M=[0,0,0];if(L[F]===0)M[F]=-1;else if(L[F]===A-1)M[F]=1;else continue;w.push(M)}return w};for(const A of e.permutations)for(const{p1:L,p2:w,nT:F,nF:M}of A){const T=d(i,L);for(const X of T){let te=h(F,M,X);const G=c(X),[j,$,re]=u(i,w,te);o[`${j}-${$}-${re}`]=G}}const f={U:"hsl(60, 100%, 90%)",F:"hsl(0, 100%, 90%)",R:"hsl(120, 100%, 85%)",B:"hsl(23, 100%, 90%)",L:"hsl(240, 100%, 90%)",D:"hsl(120, 100%, 100%)"};for(const A of n)s(A.name,A.shape,f,o,l[A.name]);const _=new Fu;t.shadowColor="rgba(0, 0, 0, .4)",t.shadowBlur=15,t.lineWidth=5;const v=A=>{const L=_.nextColor();for(let w=0;w<A.length;w++){const F=w===A.length-1?0:w+1,[M,T]=A[w],[X,te]=A[F];t.beginPath(),Mf(t,M,T,X,te,L,20),t.stroke()}},y=(A,L)=>{const w=_.nextColor(),[F,M]=A;t.beginPath(),Ef(t,F,M,L,w,20),t.stroke()},g=()=>({U:0,L:0,F:0,R:0,B:0,D:0}),m=(A,L)=>{const w=[...A].sort((F,M)=>L(M)-L(F));if(w.length===1||w.length>1&&L(w[0])>L(w[1]))return w[0]},D=g(),b=n.map(A=>A.name);let C=[...e.cycles].sort((A,L)=>A.length-L.length);e:for(;C.length>0;){for(let A=0;A<C.length;A++){const L=C[A],w=Gr(L,i),F=b.filter(T=>w[T]===L.length),M=m(F,T=>D[T]);if(M){v(L.map(T=>r[T.join(",")+`-${M}`])),D[M]+=L.length,C.splice(A,1);continue e}}{const A={U:[],F:[],B:[],D:[],L:[],R:[]};for(let M=0;M<C.length;M++){const T=C[M],X=Gr(T,i);b.forEach(te=>{X[te]===T.length&&A[te].push(M)})}const w=[...b].sort((M,T)=>D[T]-D[M]).sort((M,T)=>A[T].length-A[M].length)[0],F=A[w];if(F.length>1){for(let M=F.length-1;M>=0;M--){const T=C[F[M]];v(T.map(X=>r[X.join(",")+`-${w}`])),D[w]+=T.length,C.splice(F[M],1)}continue e}}break}for(const A of C){const L=A.map(w=>[-1,-1]);for(;L.find(w=>w[0]===-1);){const w=A.filter((T,X)=>L[X][0]===-1),F=Gr(w,i),M=n.map(T=>({name:T.name,priority:T.priority,count:T.priority>0?F[T.name]:Math.min(F[T.name],1)})).sort((T,X)=>X.priority-T.priority).sort((T,X)=>X.count-T.count);A.forEach((T,X)=>{if(L[X][0]===-1){const te=T.join(",")+`-${M[0].name}`;te in r&&(L[X]=r[te])}})}v(L)}{const A=e.rotates,L=e.rotates.map(w=>[-1,-1]);for(;L.find(w=>w[0]===-1);){const w=A.filter((T,X)=>L[X][0]===-1),F=Gr(w.map(T=>T.unit.position),i),M=n.map(T=>({name:T.name,priority:T.priority,count:T.priority>0?F[T.name]:Math.min(F[T.name],1)})).sort((T,X)=>X.priority-T.priority).sort((T,X)=>X.count-T.count);A.forEach((T,X)=>{if(L[X][0]===-1){const te=T.unit.position.join(",")+`-${M[0].name}`;te in r&&(L[X]=r[te],y(L[X],T.degree))}})}}}function Fx(i,e,t){const n=t.getContext("2d");n.lineCap="round",n.lineJoin="round",n.lineWidth=3;const r=10,s=10,[c,o,l,u]=[.5,.5,.5,.5],h=100;n.translate(r,s);const d=Math.floor(Math.min((t.width-r*2-h-20)/(1+c+o),(t.height-s*2)/(1+l+u))),f=[0,0],_=[d*(1+c+o),0],v=[d*(1+c+o),d*(1+l+u)],y=[0,d*(1+l+u)],g=[d*c,d*l],m=[d*(1+c),d*l],D=[d*(1+c),d*(1+l)],b=[d*c,d*(1+l)],A=[{name:"U",priority:6,shape:[g,m,D,b]},{name:"F",priority:5,shape:[b,D,v,y]},{name:"R",priority:4,shape:[D,m,_,v]},{name:"L",priority:3,shape:[g,b,y,f]},{name:"B",priority:2,shape:[m,g,f,_]},{name:"D",priority:-1,shape:((L,w,F,M)=>[[L,w],[L+F,w],[L+F,w+M],[L,w+M]])(d*(1+c+o)+20,0,h,h)}];es(i,e,n,A)}});export default Bx();
