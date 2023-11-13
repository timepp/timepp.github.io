var Ef=Object.defineProperty;var bf=(i,e,t)=>e in i?Ef(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Tf=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Vo=(i,e,t)=>(bf(i,typeof e!="symbol"?e+"":e,t),t);var Qx=Tf((Ih,Na)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof Ih=="object"&&typeof Na<"u"?Na.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e()})(globalThis,function(){const i=new Map,e={set(x,c,p){i.has(x)||i.set(x,new Map);const S=i.get(x);S.has(c)||S.size===0?S.set(c,p):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(S.keys())[0]}.`)},get:(x,c)=>i.has(x)&&i.get(x).get(c)||null,remove(x,c){if(!i.has(x))return;const p=i.get(x);p.delete(c),p.size===0&&i.delete(x)}},t="transitionend",n=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(c,p)=>`#${CSS.escape(p)}`)),x),r=x=>{x.dispatchEvent(new Event(t))},s=x=>!(!x||typeof x!="object")&&(x.jquery!==void 0&&(x=x[0]),x.nodeType!==void 0),a=x=>s(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(n(x)):null,o=x=>{if(!s(x)||x.getClientRects().length===0)return!1;const c=getComputedStyle(x).getPropertyValue("visibility")==="visible",p=x.closest("details:not([open])");if(!p)return c;if(p!==x){const S=x.closest("summary");if(S&&S.parentNode!==p||S===null)return!1}return c},l=x=>!x||x.nodeType!==Node.ELEMENT_NODE||!!x.classList.contains("disabled")||(x.disabled!==void 0?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false"),u=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const c=x.getRootNode();return c instanceof ShadowRoot?c:null}return x instanceof ShadowRoot?x:x.parentNode?u(x.parentNode):null},h=()=>{},d=x=>{x.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_=[],v=()=>document.documentElement.dir==="rtl",y=x=>{var c;c=()=>{const p=f();if(p){const S=x.NAME,B=p.fn[S];p.fn[S]=x.jQueryInterface,p.fn[S].Constructor=x,p.fn[S].noConflict=()=>(p.fn[S]=B,x.jQueryInterface)}},document.readyState==="loading"?(_.length||document.addEventListener("DOMContentLoaded",()=>{for(const p of _)p()}),_.push(c)):c()},g=(x,c=[],p=x)=>typeof x=="function"?x(...c):p,m=(x,c,p=!0)=>{if(!p)return void g(x);const S=(te=>{if(!te)return 0;let{transitionDuration:ae,transitionDelay:ge}=window.getComputedStyle(te);const Ae=Number.parseFloat(ae),we=Number.parseFloat(ge);return Ae||we?(ae=ae.split(",")[0],ge=ge.split(",")[0],1e3*(Number.parseFloat(ae)+Number.parseFloat(ge))):0})(c)+5;let B=!1;const z=({target:te})=>{te===c&&(B=!0,c.removeEventListener(t,z),g(x))};c.addEventListener(t,z),setTimeout(()=>{B||r(c)},S)},D=(x,c,p,S)=>{const B=x.length;let z=x.indexOf(c);return z===-1?!p&&S?x[B-1]:x[0]:(z+=p?1:-1,S&&(z=(z+B)%B),x[Math.max(0,Math.min(z,B-1))])},T=/[^.]*(?=\..*)\.|.*/,C=/\..*/,E=/::\d+$/,L={};let w=1;const N={mouseenter:"mouseover",mouseleave:"mouseout"},M=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(x,c){return c&&`${c}::${w++}`||x.uidEvent||w++}function V(x){const c=A(x);return x.uidEvent=c,L[c]=L[c]||{},L[c]}function Q(x,c,p=null){return Object.values(x).find(S=>S.callable===c&&S.delegationSelector===p)}function H(x,c,p){const S=typeof c=="string",B=S?p:c||p;let z=k(x);return M.has(z)||(z=x),[S,B,z]}function Y(x,c,p,S,B){if(typeof c!="string"||!x)return;let[z,te,ae]=H(c,p,S);c in N&&(te=(qe=>function(ke){if(!ke.relatedTarget||ke.relatedTarget!==ke.delegateTarget&&!ke.delegateTarget.contains(ke.relatedTarget))return qe.call(this,ke)})(te));const ge=V(x),Ae=ge[ae]||(ge[ae]={}),we=Q(Ae,te,z?p:null);if(we)return void(we.oneOff=we.oneOff&&B);const Ee=A(te,c.replace(T,"")),Ye=z?function(Oe,qe,ke){return function je(ft){const xt=Oe.querySelectorAll(qe);for(let{target:tt}=ft;tt&&tt!==this;tt=tt.parentNode)for(const ct of xt)if(ct===tt)return se(ft,{delegateTarget:tt}),je.oneOff&&U.off(Oe,ft.type,qe,ke),ke.apply(tt,[ft])}}(x,p,te):function(Oe,qe){return function ke(je){return se(je,{delegateTarget:Oe}),ke.oneOff&&U.off(Oe,je.type,qe),qe.apply(Oe,[je])}}(x,te);Ye.delegationSelector=z?p:null,Ye.callable=te,Ye.oneOff=B,Ye.uidEvent=Ee,Ae[Ee]=Ye,x.addEventListener(ae,Ye,z)}function $(x,c,p,S,B){const z=Q(c[p],S,B);z&&(x.removeEventListener(p,z,!!B),delete c[p][z.uidEvent])}function re(x,c,p,S){const B=c[p]||{};for(const[z,te]of Object.entries(B))z.includes(S)&&$(x,c,p,te.callable,te.delegationSelector)}function k(x){return x=x.replace(C,""),N[x]||x}const U={on(x,c,p,S){Y(x,c,p,S,!1)},one(x,c,p,S){Y(x,c,p,S,!0)},off(x,c,p,S){if(typeof c!="string"||!x)return;const[B,z,te]=H(c,p,S),ae=te!==c,ge=V(x),Ae=ge[te]||{},we=c.startsWith(".");if(z===void 0){if(we)for(const Ee of Object.keys(ge))re(x,ge,Ee,c.slice(1));for(const[Ee,Ye]of Object.entries(Ae)){const Oe=Ee.replace(E,"");ae&&!c.includes(Oe)||$(x,ge,te,Ye.callable,Ye.delegationSelector)}}else{if(!Object.keys(Ae).length)return;$(x,ge,te,z,B?p:null)}},trigger(x,c,p){if(typeof c!="string"||!x)return null;const S=f();let B=null,z=!0,te=!0,ae=!1;c!==k(c)&&S&&(B=S.Event(c,p),S(x).trigger(B),z=!B.isPropagationStopped(),te=!B.isImmediatePropagationStopped(),ae=B.isDefaultPrevented());const ge=se(new Event(c,{bubbles:z,cancelable:!0}),p);return ae&&ge.preventDefault(),te&&x.dispatchEvent(ge),ge.defaultPrevented&&B&&B.preventDefault(),ge}};function se(x,c={}){for(const[p,S]of Object.entries(c))try{x[p]=S}catch{Object.defineProperty(x,p,{configurable:!0,get:()=>S})}return x}function ie(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function q(x){return x.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const ee={setDataAttribute(x,c,p){x.setAttribute(`data-bs-${q(c)}`,p)},removeDataAttribute(x,c){x.removeAttribute(`data-bs-${q(c)}`)},getDataAttributes(x){if(!x)return{};const c={},p=Object.keys(x.dataset).filter(S=>S.startsWith("bs")&&!S.startsWith("bsConfig"));for(const S of p){let B=S.replace(/^bs/,"");B=B.charAt(0).toLowerCase()+B.slice(1,B.length),c[B]=ie(x.dataset[S])}return c},getDataAttribute:(x,c)=>ie(x.getAttribute(`data-bs-${q(c)}`))};class ve{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,p){const S=s(p)?ee.getDataAttribute(p,"config"):{};return{...this.constructor.Default,...typeof S=="object"?S:{},...s(p)?ee.getDataAttributes(p):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,p=this.constructor.DefaultType){for(const[B,z]of Object.entries(p)){const te=c[B],ae=s(te)?"element":(S=te)==null?`${S}`:Object.prototype.toString.call(S).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(z).test(ae))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${B}" provided type "${ae}" but expected type "${z}".`)}var S}}class _e extends ve{constructor(c,p){super(),(c=a(c))&&(this._element=c,this._config=this._getConfig(p),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),U.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,p,S=!0){m(c,p,S)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(a(c),this.DATA_KEY)}static getOrCreateInstance(c,p={}){return this.getInstance(c)||new this(c,typeof p=="object"?p:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const Te=x=>{let c=x.getAttribute("data-bs-target");if(!c||c==="#"){let p=x.getAttribute("href");if(!p||!p.includes("#")&&!p.startsWith("."))return null;p.includes("#")&&!p.startsWith("#")&&(p=`#${p.split("#")[1]}`),c=p&&p!=="#"?n(p.trim()):null}return c},ce={find:(x,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,x)),findOne:(x,c=document.documentElement)=>Element.prototype.querySelector.call(c,x),children:(x,c)=>[].concat(...x.children).filter(p=>p.matches(c)),parents(x,c){const p=[];let S=x.parentNode.closest(c);for(;S;)p.push(S),S=S.parentNode.closest(c);return p},prev(x,c){let p=x.previousElementSibling;for(;p;){if(p.matches(c))return[p];p=p.previousElementSibling}return[]},next(x,c){let p=x.nextElementSibling;for(;p;){if(p.matches(c))return[p];p=p.nextElementSibling}return[]},focusableChildren(x){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(p=>`${p}:not([tabindex^="-"])`).join(",");return this.find(c,x).filter(p=>!l(p)&&o(p))},getSelectorFromElement(x){const c=Te(x);return c&&ce.findOne(c)?c:null},getElementFromSelector(x){const c=Te(x);return c?ce.findOne(c):null},getMultipleElementsFromSelector(x){const c=Te(x);return c?ce.find(c):[]}},Ue=(x,c="hide")=>{const p=`click.dismiss${x.EVENT_KEY}`,S=x.NAME;U.on(document,p,`[data-bs-dismiss="${S}"]`,function(B){if(["A","AREA"].includes(this.tagName)&&B.preventDefault(),l(this))return;const z=ce.getElementFromSelector(this)||this.closest(`.${S}`);x.getOrCreateInstance(z)[c]()})},De=".bs.alert",rt=`close${De}`,Ut=`closed${De}`;class He extends _e{static get NAME(){return"alert"}close(){if(U.trigger(this._element,rt).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),U.trigger(this._element,Ut),this.dispose()}static jQueryInterface(c){return this.each(function(){const p=He.getOrCreateInstance(this);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c](this)}})}}Ue(He,"close"),y(He);const W='[data-bs-toggle="button"]';class yt extends _e{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const p=yt.getOrCreateInstance(this);c==="toggle"&&p[c]()})}}U.on(document,"click.bs.button.data-api",W,x=>{x.preventDefault();const c=x.target.closest(W);yt.getOrCreateInstance(c).toggle()}),y(yt);const Le=".bs.swipe",Ge=`touchstart${Le}`,Be=`touchmove${Le}`,mt=`touchend${Le}`,$e=`pointerdown${Le}`,Ve=`pointerup${Le}`,st={endCallback:null,leftCallback:null,rightCallback:null},Rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class bt extends ve{constructor(c,p){super(),this._element=c,c&&bt.isSupported()&&(this._config=this._getConfig(p),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return st}static get DefaultType(){return Rt}static get NAME(){return"swipe"}dispose(){U.off(this._element,Le)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const p=c/this._deltaX;this._deltaX=0,p&&g(p>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(U.on(this._element,$e,c=>this._start(c)),U.on(this._element,Ve,c=>this._end(c)),this._element.classList.add("pointer-event")):(U.on(this._element,Ge,c=>this._start(c)),U.on(this._element,Be,c=>this._move(c)),U.on(this._element,mt,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const P=".bs.carousel",b=".data-api",j="next",ue="prev",le="left",de="right",Ce=`slide${P}`,fe=`slid${P}`,Z=`keydown${P}`,I=`mouseenter${P}`,oe=`mouseleave${P}`,Se=`dragstart${P}`,me=`load${P}${b}`,Me=`click${P}${b}`,ze="carousel",Ke="active",O=".active",xe=".carousel-item",J=O+xe,he={ArrowLeft:de,ArrowRight:le},pe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Qe={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class it extends _e{constructor(c,p){super(c,p),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ce.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ze&&this.cycle()}static get Default(){return pe}static get DefaultType(){return Qe}static get NAME(){return"carousel"}next(){this._slide(j)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(ue)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?U.one(this._element,fe,()=>this.cycle()):this.cycle())}to(c){const p=this._getItems();if(c>p.length-1||c<0)return;if(this._isSliding)return void U.one(this._element,fe,()=>this.to(c));const S=this._getItemIndex(this._getActive());if(S===c)return;const B=c>S?j:ue;this._slide(B,p[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&U.on(this._element,Z,c=>this._keydown(c)),this._config.pause==="hover"&&(U.on(this._element,I,()=>this.pause()),U.on(this._element,oe,()=>this._maybeEnableCycle())),this._config.touch&&bt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const p of ce.find(".carousel-item img",this._element))U.on(p,Se,S=>S.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(le)),rightCallback:()=>this._slide(this._directionToOrder(de)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new bt(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const p=he[c.key];p&&(c.preventDefault(),this._slide(this._directionToOrder(p)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const p=ce.findOne(O,this._indicatorsElement);p.classList.remove(Ke),p.removeAttribute("aria-current");const S=ce.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);S&&(S.classList.add(Ke),S.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const p=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=p||this._config.defaultInterval}_slide(c,p=null){if(this._isSliding)return;const S=this._getActive(),B=c===j,z=p||D(this._getItems(),S,B,this._config.wrap);if(z===S)return;const te=this._getItemIndex(z),ae=Ee=>U.trigger(this._element,Ee,{relatedTarget:z,direction:this._orderToDirection(c),from:this._getItemIndex(S),to:te});if(ae(Ce).defaultPrevented||!S||!z)return;const ge=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(te),this._activeElement=z;const Ae=B?"carousel-item-start":"carousel-item-end",we=B?"carousel-item-next":"carousel-item-prev";z.classList.add(we),d(z),S.classList.add(Ae),z.classList.add(Ae),this._queueCallback(()=>{z.classList.remove(Ae,we),z.classList.add(Ke),S.classList.remove(Ke,we,Ae),this._isSliding=!1,ae(fe)},S,this._isAnimated()),ge&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ce.findOne(J,this._element)}_getItems(){return ce.find(xe,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return v()?c===le?ue:j:c===le?j:ue}_orderToDirection(c){return v()?c===ue?le:de:c===ue?de:le}static jQueryInterface(c){return this.each(function(){const p=it.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}}else p.to(c)})}}U.on(document,Me,"[data-bs-slide], [data-bs-slide-to]",function(x){const c=ce.getElementFromSelector(this);if(!c||!c.classList.contains(ze))return;x.preventDefault();const p=it.getOrCreateInstance(c),S=this.getAttribute("data-bs-slide-to");return S?(p.to(S),void p._maybeEnableCycle()):ee.getDataAttribute(this,"slide")==="next"?(p.next(),void p._maybeEnableCycle()):(p.prev(),void p._maybeEnableCycle())}),U.on(window,me,()=>{const x=ce.find('[data-bs-ride="carousel"]');for(const c of x)it.getOrCreateInstance(c)}),y(it);const at=".bs.collapse",$t=`show${at}`,gt=`shown${at}`,hn=`hide${at}`,kt=`hidden${at}`,ls=`click${at}.data-api`,Vi="show",ti="collapse",Hn="collapsing",us=`:scope .${ti} .${ti}`,ni='[data-bs-toggle="collapse"]',hs={parent:null,toggle:!0},_o={parent:"(null|element)",toggle:"boolean"};class ii extends _e{constructor(c,p){super(c,p),this._isTransitioning=!1,this._triggerArray=[];const S=ce.find(ni);for(const B of S){const z=ce.getSelectorFromElement(B),te=ce.find(z).filter(ae=>ae===this._element);z!==null&&te.length&&this._triggerArray.push(B)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return hs}static get DefaultType(){return _o}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(B=>B!==this._element).map(B=>ii.getOrCreateInstance(B,{toggle:!1}))),c.length&&c[0]._isTransitioning||U.trigger(this._element,$t).defaultPrevented)return;for(const B of c)B.hide();const p=this._getDimension();this._element.classList.remove(ti),this._element.classList.add(Hn),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const S=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Hn),this._element.classList.add(ti,Vi),this._element.style[p]="",U.trigger(this._element,gt)},this._element,!0),this._element.style[p]=`${this._element[S]}px`}hide(){if(this._isTransitioning||!this._isShown()||U.trigger(this._element,hn).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,d(this._element),this._element.classList.add(Hn),this._element.classList.remove(ti,Vi);for(const p of this._triggerArray){const S=ce.getElementFromSelector(p);S&&!this._isShown(S)&&this._addAriaAndCollapsedClass([p],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Hn),this._element.classList.add(ti),U.trigger(this._element,kt)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(Vi)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=a(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(ni);for(const p of c){const S=ce.getElementFromSelector(p);S&&this._addAriaAndCollapsedClass([p],this._isShown(S))}}_getFirstLevelChildren(c){const p=ce.find(us,this._config.parent);return ce.find(c,this._config.parent).filter(S=>!p.includes(S))}_addAriaAndCollapsedClass(c,p){if(c.length)for(const S of c)S.classList.toggle("collapsed",!p),S.setAttribute("aria-expanded",p)}static jQueryInterface(c){const p={};return typeof c=="string"&&/show|hide/.test(c)&&(p.toggle=!1),this.each(function(){const S=ii.getOrCreateInstance(this,p);if(typeof c=="string"){if(S[c]===void 0)throw new TypeError(`No method named "${c}"`);S[c]()}})}}U.on(document,ls,ni,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const c of ce.getMultipleElementsFromSelector(this))ii.getOrCreateInstance(c,{toggle:!1}).toggle()}),y(ii);var Gt="top",R="bottom",G="right",K="left",X="auto",ne=[Gt,R,G,K],be="start",Pe="end",Fe="clippingParents",Ie="viewport",We="popper",Ne="reference",Xe=ne.reduce(function(x,c){return x.concat([c+"-"+be,c+"-"+Pe])},[]),vt=[].concat(ne,[X]).reduce(function(x,c){return x.concat([c,c+"-"+be,c+"-"+Pe])},[]),Mt="beforeRead",Kt="read",dn="afterRead",Tt="beforeMain",et="main",Wi="afterMain",At="beforeWrite",Un="write",Ir="afterWrite",ri=[Mt,Kt,dn,Tt,et,Wi,At,Un,Ir];function rn(x){return x?(x.nodeName||"").toLowerCase():null}function lt(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var c=x.ownerDocument;return c&&c.defaultView||window}return x}function Zt(x){return x instanceof lt(x).Element||x instanceof Element}function qt(x){return x instanceof lt(x).HTMLElement||x instanceof HTMLElement}function Vt(x){return typeof ShadowRoot<"u"&&(x instanceof lt(x).ShadowRoot||x instanceof ShadowRoot)}const yi={name:"applyStyles",enabled:!0,phase:"write",fn:function(x){var c=x.state;Object.keys(c.elements).forEach(function(p){var S=c.styles[p]||{},B=c.attributes[p]||{},z=c.elements[p];qt(z)&&rn(z)&&(Object.assign(z.style,S),Object.keys(B).forEach(function(te){var ae=B[te];ae===!1?z.removeAttribute(te):z.setAttribute(te,ae===!0?"":ae)}))})},effect:function(x){var c=x.state,p={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,p.popper),c.styles=p,c.elements.arrow&&Object.assign(c.elements.arrow.style,p.arrow),function(){Object.keys(c.elements).forEach(function(S){var B=c.elements[S],z=c.attributes[S]||{},te=Object.keys(c.styles.hasOwnProperty(S)?c.styles[S]:p[S]).reduce(function(ae,ge){return ae[ge]="",ae},{});qt(B)&&rn(B)&&(Object.assign(B.style,te),Object.keys(z).forEach(function(ae){B.removeAttribute(ae)}))})}},requires:["computeStyles"]};function fn(x){return x.split("-")[0]}var In=Math.max,ds=Math.min,Xi=Math.round;function vo(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function qa(){return!/^((?!chrome|android).)*safari/i.test(vo())}function qi(x,c,p){c===void 0&&(c=!1),p===void 0&&(p=!1);var S=x.getBoundingClientRect(),B=1,z=1;c&&qt(x)&&(B=x.offsetWidth>0&&Xi(S.width)/x.offsetWidth||1,z=x.offsetHeight>0&&Xi(S.height)/x.offsetHeight||1);var te=(Zt(x)?lt(x):window).visualViewport,ae=!qa()&&p,ge=(S.left+(ae&&te?te.offsetLeft:0))/B,Ae=(S.top+(ae&&te?te.offsetTop:0))/z,we=S.width/B,Ee=S.height/z;return{width:we,height:Ee,top:Ae,right:ge+we,bottom:Ae+Ee,left:ge,x:ge,y:Ae}}function xo(x){var c=qi(x),p=x.offsetWidth,S=x.offsetHeight;return Math.abs(c.width-p)<=1&&(p=c.width),Math.abs(c.height-S)<=1&&(S=c.height),{x:x.offsetLeft,y:x.offsetTop,width:p,height:S}}function ja(x,c){var p=c.getRootNode&&c.getRootNode();if(x.contains(c))return!0;if(p&&Vt(p)){var S=c;do{if(S&&x.isSameNode(S))return!0;S=S.parentNode||S.host}while(S)}return!1}function kn(x){return lt(x).getComputedStyle(x)}function Nh(x){return["table","td","th"].indexOf(rn(x))>=0}function si(x){return((Zt(x)?x.ownerDocument:x.document)||window.document).documentElement}function fs(x){return rn(x)==="html"?x:x.assignedSlot||x.parentNode||(Vt(x)?x.host:null)||si(x)}function Ya(x){return qt(x)&&kn(x).position!=="fixed"?x.offsetParent:null}function Nr(x){for(var c=lt(x),p=Ya(x);p&&Nh(p)&&kn(p).position==="static";)p=Ya(p);return p&&(rn(p)==="html"||rn(p)==="body"&&kn(p).position==="static")?c:p||function(S){var B=/firefox/i.test(vo());if(/Trident/i.test(vo())&&qt(S)&&kn(S).position==="fixed")return null;var z=fs(S);for(Vt(z)&&(z=z.host);qt(z)&&["html","body"].indexOf(rn(z))<0;){var te=kn(z);if(te.transform!=="none"||te.perspective!=="none"||te.contain==="paint"||["transform","perspective"].indexOf(te.willChange)!==-1||B&&te.willChange==="filter"||B&&te.filter&&te.filter!=="none")return z;z=z.parentNode}return null}(x)||c}function yo(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function Or(x,c,p){return In(x,ds(c,p))}function $a(x){return Object.assign({},{top:0,right:0,bottom:0,left:0},x)}function Ka(x,c){return c.reduce(function(p,S){return p[S]=x,p},{})}const Za={name:"arrow",enabled:!0,phase:"main",fn:function(x){var c,p=x.state,S=x.name,B=x.options,z=p.elements.arrow,te=p.modifiersData.popperOffsets,ae=fn(p.placement),ge=yo(ae),Ae=[K,G].indexOf(ae)>=0?"height":"width";if(z&&te){var we=function(pt,ht){return $a(typeof(pt=typeof pt=="function"?pt(Object.assign({},ht.rects,{placement:ht.placement})):pt)!="number"?pt:Ka(pt,ne))}(B.padding,p),Ee=xo(z),Ye=ge==="y"?Gt:K,Oe=ge==="y"?R:G,qe=p.rects.reference[Ae]+p.rects.reference[ge]-te[ge]-p.rects.popper[Ae],ke=te[ge]-p.rects.reference[ge],je=Nr(z),ft=je?ge==="y"?je.clientHeight||0:je.clientWidth||0:0,xt=qe/2-ke/2,tt=we[Ye],ct=ft-Ee[Ae]-we[Oe],Ze=ft/2-Ee[Ae]/2+xt,ot=Or(tt,Ze,ct),ut=ge;p.modifiersData[S]=((c={})[ut]=ot,c.centerOffset=ot-Ze,c)}},effect:function(x){var c=x.state,p=x.options.element,S=p===void 0?"[data-popper-arrow]":p;S!=null&&(typeof S!="string"||(S=c.elements.popper.querySelector(S)))&&ja(c.elements.popper,S)&&(c.elements.arrow=S)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ji(x){return x.split("-")[1]}var Oh={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ja(x){var c,p=x.popper,S=x.popperRect,B=x.placement,z=x.variation,te=x.offsets,ae=x.position,ge=x.gpuAcceleration,Ae=x.adaptive,we=x.roundOffsets,Ee=x.isFixed,Ye=te.x,Oe=Ye===void 0?0:Ye,qe=te.y,ke=qe===void 0?0:qe,je=typeof we=="function"?we({x:Oe,y:ke}):{x:Oe,y:ke};Oe=je.x,ke=je.y;var ft=te.hasOwnProperty("x"),xt=te.hasOwnProperty("y"),tt=K,ct=Gt,Ze=window;if(Ae){var ot=Nr(p),ut="clientHeight",pt="clientWidth";ot===lt(p)&&kn(ot=si(p)).position!=="static"&&ae==="absolute"&&(ut="scrollHeight",pt="scrollWidth"),(B===Gt||(B===K||B===G)&&z===Pe)&&(ct=R,ke-=(Ee&&ot===Ze&&Ze.visualViewport?Ze.visualViewport.height:ot[ut])-S.height,ke*=ge?1:-1),B!==K&&(B!==Gt&&B!==R||z!==Pe)||(tt=G,Oe-=(Ee&&ot===Ze&&Ze.visualViewport?Ze.visualViewport.width:ot[pt])-S.width,Oe*=ge?1:-1)}var ht,Ct=Object.assign({position:ae},Ae&&Oh),an=we===!0?function(bn,Jt){var mn=bn.x,gn=bn.y,wt=Jt.devicePixelRatio||1;return{x:Xi(mn*wt)/wt||0,y:Xi(gn*wt)/wt||0}}({x:Oe,y:ke},lt(p)):{x:Oe,y:ke};return Oe=an.x,ke=an.y,ge?Object.assign({},Ct,((ht={})[ct]=xt?"0":"",ht[tt]=ft?"0":"",ht.transform=(Ze.devicePixelRatio||1)<=1?"translate("+Oe+"px, "+ke+"px)":"translate3d("+Oe+"px, "+ke+"px, 0)",ht)):Object.assign({},Ct,((c={})[ct]=xt?ke+"px":"",c[tt]=ft?Oe+"px":"",c.transform="",c))}const Mo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(x){var c=x.state,p=x.options,S=p.gpuAcceleration,B=S===void 0||S,z=p.adaptive,te=z===void 0||z,ae=p.roundOffsets,ge=ae===void 0||ae,Ae={placement:fn(c.placement),variation:ji(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:B,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,Ja(Object.assign({},Ae,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:te,roundOffsets:ge})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,Ja(Object.assign({},Ae,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ge})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var ps={passive:!0};const So={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(x){var c=x.state,p=x.instance,S=x.options,B=S.scroll,z=B===void 0||B,te=S.resize,ae=te===void 0||te,ge=lt(c.elements.popper),Ae=[].concat(c.scrollParents.reference,c.scrollParents.popper);return z&&Ae.forEach(function(we){we.addEventListener("scroll",p.update,ps)}),ae&&ge.addEventListener("resize",p.update,ps),function(){z&&Ae.forEach(function(we){we.removeEventListener("scroll",p.update,ps)}),ae&&ge.removeEventListener("resize",p.update,ps)}},data:{}};var Fh={left:"right",right:"left",bottom:"top",top:"bottom"};function ms(x){return x.replace(/left|right|bottom|top/g,function(c){return Fh[c]})}var Bh={start:"end",end:"start"};function Qa(x){return x.replace(/start|end/g,function(c){return Bh[c]})}function Eo(x){var c=lt(x);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function bo(x){return qi(si(x)).left+Eo(x).scrollLeft}function To(x){var c=kn(x),p=c.overflow,S=c.overflowX,B=c.overflowY;return/auto|scroll|overlay|hidden/.test(p+B+S)}function ec(x){return["html","body","#document"].indexOf(rn(x))>=0?x.ownerDocument.body:qt(x)&&To(x)?x:ec(fs(x))}function Fr(x,c){var p;c===void 0&&(c=[]);var S=ec(x),B=S===((p=x.ownerDocument)==null?void 0:p.body),z=lt(S),te=B?[z].concat(z.visualViewport||[],To(S)?S:[]):S,ae=c.concat(te);return B?ae:ae.concat(Fr(fs(te)))}function Ao(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function tc(x,c,p){return c===Ie?Ao(function(S,B){var z=lt(S),te=si(S),ae=z.visualViewport,ge=te.clientWidth,Ae=te.clientHeight,we=0,Ee=0;if(ae){ge=ae.width,Ae=ae.height;var Ye=qa();(Ye||!Ye&&B==="fixed")&&(we=ae.offsetLeft,Ee=ae.offsetTop)}return{width:ge,height:Ae,x:we+bo(S),y:Ee}}(x,p)):Zt(c)?function(S,B){var z=qi(S,!1,B==="fixed");return z.top=z.top+S.clientTop,z.left=z.left+S.clientLeft,z.bottom=z.top+S.clientHeight,z.right=z.left+S.clientWidth,z.width=S.clientWidth,z.height=S.clientHeight,z.x=z.left,z.y=z.top,z}(c,p):Ao(function(S){var B,z=si(S),te=Eo(S),ae=(B=S.ownerDocument)==null?void 0:B.body,ge=In(z.scrollWidth,z.clientWidth,ae?ae.scrollWidth:0,ae?ae.clientWidth:0),Ae=In(z.scrollHeight,z.clientHeight,ae?ae.scrollHeight:0,ae?ae.clientHeight:0),we=-te.scrollLeft+bo(S),Ee=-te.scrollTop;return kn(ae||z).direction==="rtl"&&(we+=In(z.clientWidth,ae?ae.clientWidth:0)-ge),{width:ge,height:Ae,x:we,y:Ee}}(si(x)))}function nc(x){var c,p=x.reference,S=x.element,B=x.placement,z=B?fn(B):null,te=B?ji(B):null,ae=p.x+p.width/2-S.width/2,ge=p.y+p.height/2-S.height/2;switch(z){case Gt:c={x:ae,y:p.y-S.height};break;case R:c={x:ae,y:p.y+p.height};break;case G:c={x:p.x+p.width,y:ge};break;case K:c={x:p.x-S.width,y:ge};break;default:c={x:p.x,y:p.y}}var Ae=z?yo(z):null;if(Ae!=null){var we=Ae==="y"?"height":"width";switch(te){case be:c[Ae]=c[Ae]-(p[we]/2-S[we]/2);break;case Pe:c[Ae]=c[Ae]+(p[we]/2-S[we]/2)}}return c}function Yi(x,c){c===void 0&&(c={});var p=c,S=p.placement,B=S===void 0?x.placement:S,z=p.strategy,te=z===void 0?x.strategy:z,ae=p.boundary,ge=ae===void 0?Fe:ae,Ae=p.rootBoundary,we=Ae===void 0?Ie:Ae,Ee=p.elementContext,Ye=Ee===void 0?We:Ee,Oe=p.altBoundary,qe=Oe!==void 0&&Oe,ke=p.padding,je=ke===void 0?0:ke,ft=$a(typeof je!="number"?je:Ka(je,ne)),xt=Ye===We?Ne:We,tt=x.rects.popper,ct=x.elements[qe?xt:Ye],Ze=function(Jt,mn,gn,wt){var Nn=mn==="clippingParents"?function(_t){var Qt=Fr(fs(_t)),_n=["absolute","fixed"].indexOf(kn(_t).position)>=0&&qt(_t)?Nr(_t):_t;return Zt(_n)?Qt.filter(function(ai){return Zt(ai)&&ja(ai,_n)&&rn(ai)!=="body"}):[]}(Jt):[].concat(mn),On=[].concat(Nn,[gn]),Zi=On[0],Ft=On.reduce(function(_t,Qt){var _n=tc(Jt,Qt,wt);return _t.top=In(_n.top,_t.top),_t.right=ds(_n.right,_t.right),_t.bottom=ds(_n.bottom,_t.bottom),_t.left=In(_n.left,_t.left),_t},tc(Jt,Zi,wt));return Ft.width=Ft.right-Ft.left,Ft.height=Ft.bottom-Ft.top,Ft.x=Ft.left,Ft.y=Ft.top,Ft}(Zt(ct)?ct:ct.contextElement||si(x.elements.popper),ge,we,te),ot=qi(x.elements.reference),ut=nc({reference:ot,element:tt,strategy:"absolute",placement:B}),pt=Ao(Object.assign({},tt,ut)),ht=Ye===We?pt:ot,Ct={top:Ze.top-ht.top+ft.top,bottom:ht.bottom-Ze.bottom+ft.bottom,left:Ze.left-ht.left+ft.left,right:ht.right-Ze.right+ft.right},an=x.modifiersData.offset;if(Ye===We&&an){var bn=an[B];Object.keys(Ct).forEach(function(Jt){var mn=[G,R].indexOf(Jt)>=0?1:-1,gn=[Gt,R].indexOf(Jt)>=0?"y":"x";Ct[Jt]+=bn[gn]*mn})}return Ct}function zh(x,c){c===void 0&&(c={});var p=c,S=p.placement,B=p.boundary,z=p.rootBoundary,te=p.padding,ae=p.flipVariations,ge=p.allowedAutoPlacements,Ae=ge===void 0?vt:ge,we=ji(S),Ee=we?ae?Xe:Xe.filter(function(qe){return ji(qe)===we}):ne,Ye=Ee.filter(function(qe){return Ae.indexOf(qe)>=0});Ye.length===0&&(Ye=Ee);var Oe=Ye.reduce(function(qe,ke){return qe[ke]=Yi(x,{placement:ke,boundary:B,rootBoundary:z,padding:te})[fn(ke)],qe},{});return Object.keys(Oe).sort(function(qe,ke){return Oe[qe]-Oe[ke]})}const ic={name:"flip",enabled:!0,phase:"main",fn:function(x){var c=x.state,p=x.options,S=x.name;if(!c.modifiersData[S]._skip){for(var B=p.mainAxis,z=B===void 0||B,te=p.altAxis,ae=te===void 0||te,ge=p.fallbackPlacements,Ae=p.padding,we=p.boundary,Ee=p.rootBoundary,Ye=p.altBoundary,Oe=p.flipVariations,qe=Oe===void 0||Oe,ke=p.allowedAutoPlacements,je=c.options.placement,ft=fn(je),xt=ge||(ft!==je&&qe?function(_t){if(fn(_t)===X)return[];var Qt=ms(_t);return[Qa(_t),Qt,Qa(Qt)]}(je):[ms(je)]),tt=[je].concat(xt).reduce(function(_t,Qt){return _t.concat(fn(Qt)===X?zh(c,{placement:Qt,boundary:we,rootBoundary:Ee,padding:Ae,flipVariations:qe,allowedAutoPlacements:ke}):Qt)},[]),ct=c.rects.reference,Ze=c.rects.popper,ot=new Map,ut=!0,pt=tt[0],ht=0;ht<tt.length;ht++){var Ct=tt[ht],an=fn(Ct),bn=ji(Ct)===be,Jt=[Gt,R].indexOf(an)>=0,mn=Jt?"width":"height",gn=Yi(c,{placement:Ct,boundary:we,rootBoundary:Ee,altBoundary:Ye,padding:Ae}),wt=Jt?bn?G:K:bn?R:Gt;ct[mn]>Ze[mn]&&(wt=ms(wt));var Nn=ms(wt),On=[];if(z&&On.push(gn[an]<=0),ae&&On.push(gn[wt]<=0,gn[Nn]<=0),On.every(function(_t){return _t})){pt=Ct,ut=!1;break}ot.set(Ct,On)}if(ut)for(var Zi=function(_t){var Qt=tt.find(function(_n){var ai=ot.get(_n);if(ai)return ai.slice(0,_t).every(function(bs){return bs})});if(Qt)return pt=Qt,"break"},Ft=qe?3:1;Ft>0&&Zi(Ft)!=="break";Ft--);c.placement!==pt&&(c.modifiersData[S]._skip=!0,c.placement=pt,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function rc(x,c,p){return p===void 0&&(p={x:0,y:0}),{top:x.top-c.height-p.y,right:x.right-c.width+p.x,bottom:x.bottom-c.height+p.y,left:x.left-c.width-p.x}}function sc(x){return[Gt,G,R,K].some(function(c){return x[c]>=0})}const oc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(x){var c=x.state,p=x.name,S=c.rects.reference,B=c.rects.popper,z=c.modifiersData.preventOverflow,te=Yi(c,{elementContext:"reference"}),ae=Yi(c,{altBoundary:!0}),ge=rc(te,S),Ae=rc(ae,B,z),we=sc(ge),Ee=sc(Ae);c.modifiersData[p]={referenceClippingOffsets:ge,popperEscapeOffsets:Ae,isReferenceHidden:we,hasPopperEscaped:Ee},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":we,"data-popper-escaped":Ee})}},ac={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(x){var c=x.state,p=x.options,S=x.name,B=p.offset,z=B===void 0?[0,0]:B,te=vt.reduce(function(we,Ee){return we[Ee]=function(Ye,Oe,qe){var ke=fn(Ye),je=[K,Gt].indexOf(ke)>=0?-1:1,ft=typeof qe=="function"?qe(Object.assign({},Oe,{placement:Ye})):qe,xt=ft[0],tt=ft[1];return xt=xt||0,tt=(tt||0)*je,[K,G].indexOf(ke)>=0?{x:tt,y:xt}:{x:xt,y:tt}}(Ee,c.rects,z),we},{}),ae=te[c.placement],ge=ae.x,Ae=ae.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=ge,c.modifiersData.popperOffsets.y+=Ae),c.modifiersData[S]=te}},wo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(x){var c=x.state,p=x.name;c.modifiersData[p]=nc({reference:c.rects.reference,element:c.rects.popper,strategy:"absolute",placement:c.placement})},data:{}},cc={name:"preventOverflow",enabled:!0,phase:"main",fn:function(x){var c=x.state,p=x.options,S=x.name,B=p.mainAxis,z=B===void 0||B,te=p.altAxis,ae=te!==void 0&&te,ge=p.boundary,Ae=p.rootBoundary,we=p.altBoundary,Ee=p.padding,Ye=p.tether,Oe=Ye===void 0||Ye,qe=p.tetherOffset,ke=qe===void 0?0:qe,je=Yi(c,{boundary:ge,rootBoundary:Ae,padding:Ee,altBoundary:we}),ft=fn(c.placement),xt=ji(c.placement),tt=!xt,ct=yo(ft),Ze=ct==="x"?"y":"x",ot=c.modifiersData.popperOffsets,ut=c.rects.reference,pt=c.rects.popper,ht=typeof ke=="function"?ke(Object.assign({},c.rects,{placement:c.placement})):ke,Ct=typeof ht=="number"?{mainAxis:ht,altAxis:ht}:Object.assign({mainAxis:0,altAxis:0},ht),an=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,bn={x:0,y:0};if(ot){if(z){var Jt,mn=ct==="y"?Gt:K,gn=ct==="y"?R:G,wt=ct==="y"?"height":"width",Nn=ot[ct],On=Nn+je[mn],Zi=Nn-je[gn],Ft=Oe?-pt[wt]/2:0,_t=xt===be?ut[wt]:pt[wt],Qt=xt===be?-pt[wt]:-ut[wt],_n=c.elements.arrow,ai=Oe&&_n?xo(_n):{width:0,height:0},bs=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Yc=bs[mn],$c=bs[gn],Ts=Or(0,ut[wt],ai[wt]),mf=tt?ut[wt]/2-Ft-Ts-Yc-Ct.mainAxis:_t-Ts-Yc-Ct.mainAxis,gf=tt?-ut[wt]/2+Ft+Ts+$c+Ct.mainAxis:Qt+Ts+$c+Ct.mainAxis,Ho=c.elements.arrow&&Nr(c.elements.arrow),_f=Ho?ct==="y"?Ho.clientTop||0:Ho.clientLeft||0:0,Kc=(Jt=an==null?void 0:an[ct])!=null?Jt:0,vf=Nn+gf-Kc,Zc=Or(Oe?ds(On,Nn+mf-Kc-_f):On,Nn,Oe?In(Zi,vf):Zi);ot[ct]=Zc,bn[ct]=Zc-Nn}if(ae){var Jc,xf=ct==="x"?Gt:K,yf=ct==="x"?R:G,Ri=ot[Ze],As=Ze==="y"?"height":"width",Qc=Ri+je[xf],el=Ri-je[yf],ko=[Gt,K].indexOf(ft)!==-1,tl=(Jc=an==null?void 0:an[Ze])!=null?Jc:0,nl=ko?Qc:Ri-ut[As]-pt[As]-tl+Ct.altAxis,il=ko?Ri+ut[As]+pt[As]-tl-Ct.altAxis:el,rl=Oe&&ko?function(Mf,Sf,Go){var sl=Or(Mf,Sf,Go);return sl>Go?Go:sl}(nl,Ri,il):Or(Oe?nl:Qc,Ri,Oe?il:el);ot[Ze]=rl,bn[Ze]=rl-Ri}c.modifiersData[S]=bn}},requiresIfExists:["offset"]};function Hh(x,c,p){p===void 0&&(p=!1);var S,B,z=qt(c),te=qt(c)&&function(Ee){var Ye=Ee.getBoundingClientRect(),Oe=Xi(Ye.width)/Ee.offsetWidth||1,qe=Xi(Ye.height)/Ee.offsetHeight||1;return Oe!==1||qe!==1}(c),ae=si(c),ge=qi(x,te,p),Ae={scrollLeft:0,scrollTop:0},we={x:0,y:0};return(z||!z&&!p)&&((rn(c)!=="body"||To(ae))&&(Ae=(S=c)!==lt(S)&&qt(S)?{scrollLeft:(B=S).scrollLeft,scrollTop:B.scrollTop}:Eo(S)),qt(c)?((we=qi(c,!0)).x+=c.clientLeft,we.y+=c.clientTop):ae&&(we.x=bo(ae))),{x:ge.left+Ae.scrollLeft-we.x,y:ge.top+Ae.scrollTop-we.y,width:ge.width,height:ge.height}}function kh(x){var c=new Map,p=new Set,S=[];function B(z){p.add(z.name),[].concat(z.requires||[],z.requiresIfExists||[]).forEach(function(te){if(!p.has(te)){var ae=c.get(te);ae&&B(ae)}}),S.push(z)}return x.forEach(function(z){c.set(z.name,z)}),x.forEach(function(z){p.has(z.name)||B(z)}),S}var lc={placement:"bottom",modifiers:[],strategy:"absolute"};function uc(){for(var x=arguments.length,c=new Array(x),p=0;p<x;p++)c[p]=arguments[p];return!c.some(function(S){return!(S&&typeof S.getBoundingClientRect=="function")})}function gs(x){x===void 0&&(x={});var c=x,p=c.defaultModifiers,S=p===void 0?[]:p,B=c.defaultOptions,z=B===void 0?lc:B;return function(te,ae,ge){ge===void 0&&(ge=z);var Ae,we,Ee={placement:"bottom",orderedModifiers:[],options:Object.assign({},lc,z),modifiersData:{},elements:{reference:te,popper:ae},attributes:{},styles:{}},Ye=[],Oe=!1,qe={state:Ee,setOptions:function(je){var ft=typeof je=="function"?je(Ee.options):je;ke(),Ee.options=Object.assign({},z,Ee.options,ft),Ee.scrollParents={reference:Zt(te)?Fr(te):te.contextElement?Fr(te.contextElement):[],popper:Fr(ae)};var xt,tt,ct=function(Ze){var ot=kh(Ze);return ri.reduce(function(ut,pt){return ut.concat(ot.filter(function(ht){return ht.phase===pt}))},[])}((xt=[].concat(S,Ee.options.modifiers),tt=xt.reduce(function(Ze,ot){var ut=Ze[ot.name];return Ze[ot.name]=ut?Object.assign({},ut,ot,{options:Object.assign({},ut.options,ot.options),data:Object.assign({},ut.data,ot.data)}):ot,Ze},{}),Object.keys(tt).map(function(Ze){return tt[Ze]})));return Ee.orderedModifiers=ct.filter(function(Ze){return Ze.enabled}),Ee.orderedModifiers.forEach(function(Ze){var ot=Ze.name,ut=Ze.options,pt=ut===void 0?{}:ut,ht=Ze.effect;if(typeof ht=="function"){var Ct=ht({state:Ee,name:ot,instance:qe,options:pt});Ye.push(Ct||function(){})}}),qe.update()},forceUpdate:function(){if(!Oe){var je=Ee.elements,ft=je.reference,xt=je.popper;if(uc(ft,xt)){Ee.rects={reference:Hh(ft,Nr(xt),Ee.options.strategy==="fixed"),popper:xo(xt)},Ee.reset=!1,Ee.placement=Ee.options.placement,Ee.orderedModifiers.forEach(function(ht){return Ee.modifiersData[ht.name]=Object.assign({},ht.data)});for(var tt=0;tt<Ee.orderedModifiers.length;tt++)if(Ee.reset!==!0){var ct=Ee.orderedModifiers[tt],Ze=ct.fn,ot=ct.options,ut=ot===void 0?{}:ot,pt=ct.name;typeof Ze=="function"&&(Ee=Ze({state:Ee,options:ut,name:pt,instance:qe})||Ee)}else Ee.reset=!1,tt=-1}}},update:(Ae=function(){return new Promise(function(je){qe.forceUpdate(),je(Ee)})},function(){return we||(we=new Promise(function(je){Promise.resolve().then(function(){we=void 0,je(Ae())})})),we}),destroy:function(){ke(),Oe=!0}};if(!uc(te,ae))return qe;function ke(){Ye.forEach(function(je){return je()}),Ye=[]}return qe.setOptions(ge).then(function(je){!Oe&&ge.onFirstUpdate&&ge.onFirstUpdate(je)}),qe}}var Gh=gs(),Vh=gs({defaultModifiers:[So,wo,Mo,yi]}),Ro=gs({defaultModifiers:[So,wo,Mo,yi,ac,ic,cc,Za,oc]});const hc=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Wi,afterRead:dn,afterWrite:Ir,applyStyles:yi,arrow:Za,auto:X,basePlacements:ne,beforeMain:Tt,beforeRead:Mt,beforeWrite:At,bottom:R,clippingParents:Fe,computeStyles:Mo,createPopper:Ro,createPopperBase:Gh,createPopperLite:Vh,detectOverflow:Yi,end:Pe,eventListeners:So,flip:ic,hide:oc,left:K,main:et,modifierPhases:ri,offset:ac,placements:vt,popper:We,popperGenerator:gs,popperOffsets:wo,preventOverflow:cc,read:Kt,reference:Ne,right:G,start:be,top:Gt,variationPlacements:Xe,viewport:Ie,write:Un},Symbol.toStringTag,{value:"Module"})),dc="dropdown",Mi=".bs.dropdown",Co=".data-api",Wh="ArrowUp",fc="ArrowDown",Xh=`hide${Mi}`,qh=`hidden${Mi}`,jh=`show${Mi}`,Yh=`shown${Mi}`,pc=`click${Mi}${Co}`,mc=`keydown${Mi}${Co}`,$h=`keyup${Mi}${Co}`,$i="show",Si='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Kh=`${Si}.${$i}`,_s=".dropdown-menu",Zh=v()?"top-end":"top-start",Jh=v()?"top-start":"top-end",Qh=v()?"bottom-end":"bottom-start",ed=v()?"bottom-start":"bottom-end",td=v()?"left-start":"right-start",nd=v()?"right-start":"left-start",id={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},rd={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class En extends _e{constructor(c,p){super(c,p),this._popper=null,this._parent=this._element.parentNode,this._menu=ce.next(this._element,_s)[0]||ce.prev(this._element,_s)[0]||ce.findOne(_s,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return id}static get DefaultType(){return rd}static get NAME(){return dc}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!U.trigger(this._element,jh,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const p of[].concat(...document.body.children))U.on(p,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),U.trigger(this._element,Yh,c)}}hide(){if(l(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!U.trigger(this._element,Xh,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))U.off(p,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),ee.removeDataAttribute(this._menu,"popper"),U.trigger(this._element,qh,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!s(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${dc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(hc===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:s(this._config.reference)?c=a(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const p=this._getPopperConfig();this._popper=Ro(c,this._menu,p)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return td;if(c.classList.contains("dropstart"))return nd;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const p=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?p?Jh:Zh:p?ed:Qh}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(p=>Number.parseInt(p,10)):typeof c=="function"?p=>c(p,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ee.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...g(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:p}){const S=ce.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(B=>o(B));S.length&&D(S,p,c===fc,!S.includes(p)).focus()}static jQueryInterface(c){return this.each(function(){const p=En.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const p=ce.find(Kh);for(const S of p){const B=En.getInstance(S);if(!B||B._config.autoClose===!1)continue;const z=c.composedPath(),te=z.includes(B._menu);if(z.includes(B._element)||B._config.autoClose==="inside"&&!te||B._config.autoClose==="outside"&&te||B._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const ae={relatedTarget:B._element};c.type==="click"&&(ae.clickEvent=c),B._completeHide(ae)}}static dataApiKeydownHandler(c){const p=/input|textarea/i.test(c.target.tagName),S=c.key==="Escape",B=[Wh,fc].includes(c.key);if(!B&&!S||p&&!S)return;c.preventDefault();const z=this.matches(Si)?this:ce.prev(this,Si)[0]||ce.next(this,Si)[0]||ce.findOne(Si,c.delegateTarget.parentNode),te=En.getOrCreateInstance(z);if(B)return c.stopPropagation(),te.show(),void te._selectMenuItem(c);te._isShown()&&(c.stopPropagation(),te.hide(),z.focus())}}U.on(document,mc,Si,En.dataApiKeydownHandler),U.on(document,mc,_s,En.dataApiKeydownHandler),U.on(document,pc,En.clearMenus),U.on(document,$h,En.clearMenus),U.on(document,pc,Si,function(x){x.preventDefault(),En.getOrCreateInstance(this).toggle()}),y(En);const gc="backdrop",_c="show",vc=`mousedown.bs.${gc}`,sd={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},od={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class xc extends ve{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return sd}static get DefaultType(){return od}static get NAME(){return gc}show(c){if(!this._config.isVisible)return void g(c);this._append();const p=this._getElement();this._config.isAnimated&&d(p),p.classList.add(_c),this._emulateAnimation(()=>{g(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(_c),this._emulateAnimation(()=>{this.dispose(),g(c)})):g(c)}dispose(){this._isAppended&&(U.off(this._element,vc),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=a(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),U.on(c,vc,()=>{g(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){m(c,this._getElement(),this._config.isAnimated)}}const vs=".bs.focustrap",ad=`focusin${vs}`,cd=`keydown.tab${vs}`,yc="backward",ld={autofocus:!0,trapElement:null},ud={autofocus:"boolean",trapElement:"element"};class Mc extends ve{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ld}static get DefaultType(){return ud}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),U.off(document,vs),U.on(document,ad,c=>this._handleFocusin(c)),U.on(document,cd,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,U.off(document,vs))}_handleFocusin(c){const{trapElement:p}=this._config;if(c.target===document||c.target===p||p.contains(c.target))return;const S=ce.focusableChildren(p);S.length===0?p.focus():this._lastTabNavDirection===yc?S[S.length-1].focus():S[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?yc:"forward")}}const Sc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ec=".sticky-top",xs="padding-right",bc="margin-right";class Lo{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,xs,p=>p+c),this._setElementAttributes(Sc,xs,p=>p+c),this._setElementAttributes(Ec,bc,p=>p-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,xs),this._resetElementAttributes(Sc,xs),this._resetElementAttributes(Ec,bc)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,p,S){const B=this.getWidth();this._applyManipulationCallback(c,z=>{if(z!==this._element&&window.innerWidth>z.clientWidth+B)return;this._saveInitialAttribute(z,p);const te=window.getComputedStyle(z).getPropertyValue(p);z.style.setProperty(p,`${S(Number.parseFloat(te))}px`)})}_saveInitialAttribute(c,p){const S=c.style.getPropertyValue(p);S&&ee.setDataAttribute(c,p,S)}_resetElementAttributes(c,p){this._applyManipulationCallback(c,S=>{const B=ee.getDataAttribute(S,p);B!==null?(ee.removeDataAttribute(S,p),S.style.setProperty(p,B)):S.style.removeProperty(p)})}_applyManipulationCallback(c,p){if(s(c))p(c);else for(const S of ce.find(c,this._element))p(S)}}const pn=".bs.modal",hd=`hide${pn}`,dd=`hidePrevented${pn}`,Tc=`hidden${pn}`,Ac=`show${pn}`,fd=`shown${pn}`,pd=`resize${pn}`,md=`click.dismiss${pn}`,gd=`mousedown.dismiss${pn}`,_d=`keydown.dismiss${pn}`,vd=`click${pn}.data-api`,wc="modal-open",Rc="show",Po="modal-static",xd={backdrop:!0,focus:!0,keyboard:!0},yd={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ei extends _e{constructor(c,p){super(c,p),this._dialog=ce.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Lo,this._addEventListeners()}static get Default(){return xd}static get DefaultType(){return yd}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||U.trigger(this._element,Ac,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wc),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(U.trigger(this._element,hd).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Rc),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){U.off(window,pn),U.off(this._dialog,pn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xc({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Mc({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const p=ce.findOne(".modal-body",this._dialog);p&&(p.scrollTop=0),d(this._element),this._element.classList.add(Rc),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,U.trigger(this._element,fd,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){U.on(this._element,_d,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),U.on(window,pd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),U.on(this._element,gd,c=>{U.one(this._element,md,p=>{this._element===c.target&&this._element===p.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(wc),this._resetAdjustments(),this._scrollBar.reset(),U.trigger(this._element,Tc)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(U.trigger(this._element,dd).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,p=this._element.style.overflowY;p==="hidden"||this._element.classList.contains(Po)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(Po),this._queueCallback(()=>{this._element.classList.remove(Po),this._queueCallback(()=>{this._element.style.overflowY=p},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,p=this._scrollBar.getWidth(),S=p>0;if(S&&!c){const B=v()?"paddingLeft":"paddingRight";this._element.style[B]=`${p}px`}if(!S&&c){const B=v()?"paddingRight":"paddingLeft";this._element.style[B]=`${p}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,p){return this.each(function(){const S=Ei.getOrCreateInstance(this,c);if(typeof c=="string"){if(S[c]===void 0)throw new TypeError(`No method named "${c}"`);S[c](p)}})}}U.on(document,vd,'[data-bs-toggle="modal"]',function(x){const c=ce.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),U.one(c,Ac,S=>{S.defaultPrevented||U.one(c,Tc,()=>{o(this)&&this.focus()})});const p=ce.findOne(".modal.show");p&&Ei.getInstance(p).hide(),Ei.getOrCreateInstance(c).toggle(this)}),Ue(Ei),y(Ei);const Gn=".bs.offcanvas",Cc=".data-api",Md=`load${Gn}${Cc}`,Lc="show",Pc="showing",Dc="hiding",Uc=".offcanvas.show",Sd=`show${Gn}`,Ed=`shown${Gn}`,bd=`hide${Gn}`,Ic=`hidePrevented${Gn}`,Nc=`hidden${Gn}`,Td=`resize${Gn}`,Ad=`click${Gn}${Cc}`,wd=`keydown.dismiss${Gn}`,Rd={backdrop:!0,keyboard:!0,scroll:!1},Cd={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Vn extends _e{constructor(c,p){super(c,p),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Rd}static get DefaultType(){return Cd}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||U.trigger(this._element,Sd,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Lo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Pc),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Lc),this._element.classList.remove(Pc),U.trigger(this._element,Ed,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(U.trigger(this._element,bd).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Dc),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Lc,Dc),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Lo().reset(),U.trigger(this._element,Nc)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new xc({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():U.trigger(this._element,Ic)}:null})}_initializeFocusTrap(){return new Mc({trapElement:this._element})}_addEventListeners(){U.on(this._element,wd,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():U.trigger(this._element,Ic))})}static jQueryInterface(c){return this.each(function(){const p=Vn.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c](this)}})}}U.on(document,Ad,'[data-bs-toggle="offcanvas"]',function(x){const c=ce.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),l(this))return;U.one(c,Nc,()=>{o(this)&&this.focus()});const p=ce.findOne(Uc);p&&p!==c&&Vn.getInstance(p).hide(),Vn.getOrCreateInstance(c).toggle(this)}),U.on(window,Md,()=>{for(const x of ce.find(Uc))Vn.getOrCreateInstance(x).show()}),U.on(window,Td,()=>{for(const x of ce.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&Vn.getOrCreateInstance(x).hide()}),Ue(Vn),y(Vn);const Oc={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ld=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Pd=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Dd=(x,c)=>{const p=x.nodeName.toLowerCase();return c.includes(p)?!Ld.has(p)||!!Pd.test(x.nodeValue):c.filter(S=>S instanceof RegExp).some(S=>S.test(p))},Ud={allowList:Oc,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Id={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Nd={entry:"(string|element|function|null)",selector:"(string|element)"};class Od extends ve{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return Ud}static get DefaultType(){return Id}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[B,z]of Object.entries(this._config.content))this._setContent(c,z,B);const p=c.children[0],S=this._resolvePossibleFunction(this._config.extraClass);return S&&p.classList.add(...S.split(" ")),p}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[p,S]of Object.entries(c))super._typeCheckConfig({selector:p,entry:S},Nd)}_setContent(c,p,S){const B=ce.findOne(S,c);B&&((p=this._resolvePossibleFunction(p))?s(p)?this._putElementInTemplate(a(p),B):this._config.html?B.innerHTML=this._maybeSanitize(p):B.textContent=p:B.remove())}_maybeSanitize(c){return this._config.sanitize?function(p,S,B){if(!p.length)return p;if(B&&typeof B=="function")return B(p);const z=new window.DOMParser().parseFromString(p,"text/html"),te=[].concat(...z.body.querySelectorAll("*"));for(const ae of te){const ge=ae.nodeName.toLowerCase();if(!Object.keys(S).includes(ge)){ae.remove();continue}const Ae=[].concat(...ae.attributes),we=[].concat(S["*"]||[],S[ge]||[]);for(const Ee of Ae)Dd(Ee,we)||ae.removeAttribute(Ee.nodeName)}return z.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return g(c,[this])}_putElementInTemplate(c,p){if(this._config.html)return p.innerHTML="",void p.append(c);p.textContent=c.textContent}}const Fd=new Set(["sanitize","allowList","sanitizeFn"]),Do="fade",ys="show",Fc=".modal",Bc="hide.bs.modal",Br="hover",Uo="focus",Bd={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},zd={allowList:Oc,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Hd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class bi extends _e{constructor(c,p){if(hc===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,p),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return zd}static get DefaultType(){return Hd}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),U.off(this._element.closest(Fc),Bc,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=U.trigger(this._element,this.constructor.eventName("show")),p=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!p)return;this._disposePopper();const S=this._getTipElement();this._element.setAttribute("aria-describedby",S.getAttribute("id"));const{container:B}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(B.append(S),U.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(S),S.classList.add(ys),"ontouchstart"in document.documentElement)for(const z of[].concat(...document.body.children))U.on(z,"mouseover",h);this._queueCallback(()=>{U.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!U.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ys),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))U.off(c,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[Uo]=!1,this._activeTrigger[Br]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),U.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const p=this._getTemplateFactory(c).toHtml();if(!p)return null;p.classList.remove(Do,ys),p.classList.add(`bs-${this.constructor.NAME}-auto`);const S=(B=>{do B+=Math.floor(1e6*Math.random());while(document.getElementById(B));return B})(this.constructor.NAME).toString();return p.setAttribute("id",S),this._isAnimated()&&p.classList.add(Do),p}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new Od({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Do)}_isShown(){return this.tip&&this.tip.classList.contains(ys)}_createPopper(c){const p=g(this._config.placement,[this,c,this._element]),S=Bd[p.toUpperCase()];return Ro(this._element,c,this._getPopperConfig(S))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(p=>Number.parseInt(p,10)):typeof c=="function"?p=>c(p,this._element):c}_resolvePossibleFunction(c){return g(c,[this._element])}_getPopperConfig(c){const p={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:S=>{this._getTipElement().setAttribute("data-popper-placement",S.state.placement)}}]};return{...p,...g(this._config.popperConfig,[p])}}_setListeners(){const c=this._config.trigger.split(" ");for(const p of c)if(p==="click")U.on(this._element,this.constructor.eventName("click"),this._config.selector,S=>{this._initializeOnDelegatedTarget(S).toggle()});else if(p!=="manual"){const S=p===Br?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),B=p===Br?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");U.on(this._element,S,this._config.selector,z=>{const te=this._initializeOnDelegatedTarget(z);te._activeTrigger[z.type==="focusin"?Uo:Br]=!0,te._enter()}),U.on(this._element,B,this._config.selector,z=>{const te=this._initializeOnDelegatedTarget(z);te._activeTrigger[z.type==="focusout"?Uo:Br]=te._element.contains(z.relatedTarget),te._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},U.on(this._element.closest(Fc),Bc,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,p){clearTimeout(this._timeout),this._timeout=setTimeout(c,p)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const p=ee.getDataAttributes(this._element);for(const S of Object.keys(p))Fd.has(S)&&delete p[S];return c={...p,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:a(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[p,S]of Object.entries(this._config))this.constructor.Default[p]!==S&&(c[p]=S);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const p=bi.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c]()}})}}y(bi);const kd={...bi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Gd={...bi.DefaultType,content:"(null|string|element|function)"};class Ms extends bi{static get Default(){return kd}static get DefaultType(){return Gd}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const p=Ms.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c]()}})}}y(Ms);const Io=".bs.scrollspy",Vd=`activate${Io}`,zc=`click${Io}`,Wd=`load${Io}.data-api`,Ki="active",No="[href]",Hc=".nav-link",Xd=`${Hc}, .nav-item > ${Hc}, .list-group-item`,qd={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},jd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class zr extends _e{constructor(c,p){super(c,p),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return qd}static get DefaultType(){return jd}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=a(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(p=>Number.parseFloat(p))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(U.off(this._config.target,zc),U.on(this._config.target,zc,No,c=>{const p=this._observableSections.get(c.target.hash);if(p){c.preventDefault();const S=this._rootElement||window,B=p.offsetTop-this._element.offsetTop;if(S.scrollTo)return void S.scrollTo({top:B,behavior:"smooth"});S.scrollTop=B}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(p=>this._observerCallback(p),c)}_observerCallback(c){const p=te=>this._targetLinks.get(`#${te.target.id}`),S=te=>{this._previousScrollData.visibleEntryTop=te.target.offsetTop,this._process(p(te))},B=(this._rootElement||document.documentElement).scrollTop,z=B>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=B;for(const te of c){if(!te.isIntersecting){this._activeTarget=null,this._clearActiveClass(p(te));continue}const ae=te.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(z&&ae){if(S(te),!B)return}else z||ae||S(te)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=ce.find(No,this._config.target);for(const p of c){if(!p.hash||l(p))continue;const S=ce.findOne(decodeURI(p.hash),this._element);o(S)&&(this._targetLinks.set(decodeURI(p.hash),p),this._observableSections.set(p.hash,S))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(Ki),this._activateParents(c),U.trigger(this._element,Vd,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))ce.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(Ki);else for(const p of ce.parents(c,".nav, .list-group"))for(const S of ce.prev(p,Xd))S.classList.add(Ki)}_clearActiveClass(c){c.classList.remove(Ki);const p=ce.find(`${No}.${Ki}`,c);for(const S of p)S.classList.remove(Ki)}static jQueryInterface(c){return this.each(function(){const p=zr.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}})}}U.on(window,Wd,()=>{for(const x of ce.find('[data-bs-spy="scroll"]'))zr.getOrCreateInstance(x)}),y(zr);const Ti=".bs.tab",Yd=`hide${Ti}`,$d=`hidden${Ti}`,Kd=`show${Ti}`,Zd=`shown${Ti}`,Jd=`click${Ti}`,Qd=`keydown${Ti}`,ef=`load${Ti}`,tf="ArrowLeft",kc="ArrowRight",nf="ArrowUp",Gc="ArrowDown",Oo="Home",Vc="End",Ai="active",Wc="fade",Fo="show",Xc=".dropdown-toggle",Bo=`:not(${Xc})`,qc='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zo=`.nav-link${Bo}, .list-group-item${Bo}, [role="tab"]${Bo}, ${qc}`,rf=`.${Ai}[data-bs-toggle="tab"], .${Ai}[data-bs-toggle="pill"], .${Ai}[data-bs-toggle="list"]`;class wi extends _e{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),U.on(this._element,Qd,p=>this._keydown(p)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const p=this._getActiveElem(),S=p?U.trigger(p,Yd,{relatedTarget:c}):null;U.trigger(c,Kd,{relatedTarget:p}).defaultPrevented||S&&S.defaultPrevented||(this._deactivate(p,c),this._activate(c,p))}_activate(c,p){c&&(c.classList.add(Ai),this._activate(ce.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),U.trigger(c,Zd,{relatedTarget:p})):c.classList.add(Fo)},c,c.classList.contains(Wc)))}_deactivate(c,p){c&&(c.classList.remove(Ai),c.blur(),this._deactivate(ce.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),U.trigger(c,$d,{relatedTarget:p})):c.classList.remove(Fo)},c,c.classList.contains(Wc)))}_keydown(c){if(![tf,kc,nf,Gc,Oo,Vc].includes(c.key))return;c.stopPropagation(),c.preventDefault();const p=this._getChildren().filter(B=>!l(B));let S;if([Oo,Vc].includes(c.key))S=p[c.key===Oo?0:p.length-1];else{const B=[kc,Gc].includes(c.key);S=D(p,c.target,B,!0)}S&&(S.focus({preventScroll:!0}),wi.getOrCreateInstance(S).show())}_getChildren(){return ce.find(zo,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,p){this._setAttributeIfNotExists(c,"role","tablist");for(const S of p)this._setInitialAttributesOnChild(S)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const p=this._elemIsActive(c),S=this._getOuterElement(c);c.setAttribute("aria-selected",p),S!==c&&this._setAttributeIfNotExists(S,"role","presentation"),p||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const p=ce.getElementFromSelector(c);p&&(this._setAttributeIfNotExists(p,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(p,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,p){const S=this._getOuterElement(c);if(!S.classList.contains("dropdown"))return;const B=(z,te)=>{const ae=ce.findOne(z,S);ae&&ae.classList.toggle(te,p)};B(Xc,Ai),B(".dropdown-menu",Fo),S.setAttribute("aria-expanded",p)}_setAttributeIfNotExists(c,p,S){c.hasAttribute(p)||c.setAttribute(p,S)}_elemIsActive(c){return c.classList.contains(Ai)}_getInnerElement(c){return c.matches(zo)?c:ce.findOne(zo,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const p=wi.getOrCreateInstance(this);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}})}}U.on(document,Jd,qc,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),l(this)||wi.getOrCreateInstance(this).show()}),U.on(window,ef,()=>{for(const x of ce.find(rf))wi.getOrCreateInstance(x)}),y(wi);const oi=".bs.toast",sf=`mouseover${oi}`,of=`mouseout${oi}`,af=`focusin${oi}`,cf=`focusout${oi}`,lf=`hide${oi}`,uf=`hidden${oi}`,hf=`show${oi}`,df=`shown${oi}`,jc="hide",Ss="show",Es="showing",ff={animation:"boolean",autohide:"boolean",delay:"number"},pf={animation:!0,autohide:!0,delay:5e3};class Hr extends _e{constructor(c,p){super(c,p),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return pf}static get DefaultType(){return ff}static get NAME(){return"toast"}show(){U.trigger(this._element,hf).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(jc),d(this._element),this._element.classList.add(Ss,Es),this._queueCallback(()=>{this._element.classList.remove(Es),U.trigger(this._element,df),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(U.trigger(this._element,lf).defaultPrevented||(this._element.classList.add(Es),this._queueCallback(()=>{this._element.classList.add(jc),this._element.classList.remove(Es,Ss),U.trigger(this._element,uf)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ss),super.dispose()}isShown(){return this._element.classList.contains(Ss)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,p){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=p;break;case"focusin":case"focusout":this._hasKeyboardInteraction=p}if(p)return void this._clearTimeout();const S=c.relatedTarget;this._element===S||this._element.contains(S)||this._maybeScheduleHide()}_setListeners(){U.on(this._element,sf,c=>this._onInteraction(c,!0)),U.on(this._element,of,c=>this._onInteraction(c,!1)),U.on(this._element,af,c=>this._onInteraction(c,!0)),U.on(this._element,cf,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const p=Hr.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c](this)}})}}return Ue(Hr),y(Hr),{Alert:He,Button:yt,Carousel:it,Collapse:ii,Dropdown:En,Modal:Ei,Offcanvas:Vn,Popover:Ms,ScrollSpy:zr,Tab:wi,Toast:Hr,Tooltip:bi}});const Tr=[0,1,0],Ar=[0,0,1];function xr(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}function Af(i,e,t,n){return i*n*n+e*n+t}function ws(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function ro(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function Wo(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,l=a===0?1:a===180?-1:0,h=[[1,0,0,0,l,-o,0,o,l],[l,0,o,0,1,0,-o,0,l],[l,-o,0,o,l,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function ol(i,e,t){const[n,r,s]=t;if(r===1)return i;if(s===1)return e;if(n===-1)return ro(e,i);if(n===1)return ro(i,e);if(s===-1)return e.map(a=>-a);if(r===-1)return i.map(a=>-a);throw new Error("unreachable")}function Rs(i){const[e,t,n,r]=i;return[e,-t,n,r]}function al(i,e){const t={R:[0,-90,-1],L:[0,90,1],U:[1,-90,-1],D:[1,90,1],F:[2,-90,-1],B:[2,90,1],M:[0,90,2],E:[1,90,2],S:[2,-90,2],x:[0,-90,0],y:[1,-90,0],z:[2,-90,0]},n=i.match(/^([0-9]+)?(-([0-9]+))?([A-Za-z])(w?)([0-9]+)?(')?$/);if(!n)throw`parse op [${i}] error`;let r=n[4],s=!1;(n[5]==="w"||"rludbfmes".indexOf(r)>=0)&&(r=r.toUpperCase(),s=!0);let a=0,o=1,l=n[1],u=n[3];u?(a=parseInt(l||"1")-1,o=parseInt(u)):s?(a=0,o=parseInt(l||"2")):(a=parseInt(l||"1")-1,o=a+1);const[h,d,f]=t[r],_=n[7]?-1:1,v=n[6]?parseInt(n[6]):1,y=d*_*v;let g=0,m=0;switch(f){case 1:g=a,m=o;break;case-1:m=e-a,g=e-o;break;case 0:g=0,m=e;break;case 2:{const D=s?e-2:1,T=(e-D)%2===1?D+1:D;g=(e-T)/2,m=g+T;break}}return[h,y,g,m]}function so(i,e){let t=0,n=0;const r=[];for(;;){if(i[n]===" "||n>=i.length){const s=i.slice(t,n).trim();if(s.length>0&&r.push(al(s,e)),n>=i.length)break;n++,t=n;continue}if(i[n]===","||i[n]===":"){const s=i.slice(t,n).trim();s.length>0&&r.push(al(s,e));const a=so(i.slice(n+1),e);return i[n]===","?[...r,...a,...r.reverse().map(Rs),...a.reverse().map(Rs)]:[...r,...a,...r.reverse().map(Rs)]}if(i[n]==="["||i[n]==="("){const s=i[n],a=i[n]==="["?"]":")";let o=1,l=n+1;for(;l<i.length&&(i[l]===s&&o++,i[l]===a&&o--,o!==0);)l++;let u=so(i.slice(n+1,l),e);l++,l<i.length&&i[l]=="'"&&(l++,u=u.reverse().map(Rs));let h=1;if(l<i.length){let d=l;for(;d<i.length&&i[d]>="0"&&i[d]<="9";)d++;d>l&&(h=parseInt(i.slice(l,d))),l=d}for(let d=0;d<h;d++)r.push(...u);n=l,t=n;continue}n++}return r}function gr(i,e){return e.map(t=>t.opType==="commutator"?`(${gr(i,t.child1)}, ${gr(i,t.child2)})`:t.opType==="conjugate"?`(${gr(i,t.child1)}: ${gr(i,t.child2)})`:t.opType==="repeat"?`(${gr(i,t.child1)})${t.data}`:Yu(i,...t.op)).join(" ")}function ns(i){let e=0;for(const t of i)t.opType!=="simple"?(e+=ns(t.child1),e+=ns(t.child2)):e++;return e}function Xu(i,e){return i[0]===e[0]&&(i[1]+e[1])%360===0&&i[2]===e[2]&&i[3]===e[3]}function Cs(i,e,t,n,r){for(let s=0;s<r;s++)if(!Xu(i[e+s],t[n+r-1-s]))return!1;return!0}function qu(i,e){for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function ju(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(!qu(i[t],e[t]))return!1;return!0}function cl(i){const e=[...i];return i[1]!==180&&(e[1]=-i[1]),e}function wf(i,e){if(i.length%2===0){if(Cs(i,0,i,i.length/2,e)&&Cs(i,e,i,i.length/2+e,i.length/2-e))return[!0]}else if(i.length>=7){const t=(i.length+1)/2;if(Cs(i,0,i,t-1,e-1)&&Cs(i,e-1,i,t-1+e,t-e))return[!0,i[t-1+e-1]]}return[!1]}function Rf(i,e){if(i.length%e!==0||e===1||e>i.length/2)return!1;const t=i.length/e;for(let n=0;n<e;n++){const r=i[n];for(let s=1;s<t;s++){const a=i[s*e+n];if(!qu(r,a))return!1}}return!0}function Cf(i){let e=0;for(;e<(i.length-1)/2&&Xu(i[e],i[i.length-1-e]);e++);return e}function Zn(i,e,t){if(e>i.maxDepth&&(i.maxDepth=e),t.length<=3||e>i.depthLimit)return t.map(o=>({opType:"simple",child1:[],child2:[],op:o,data:0}));const n=[];for(let o=2;o<=t.length/2;o++)Rf(t,o)&&n.push([{opType:"repeat",child1:Zn(i,e+1,t.slice(0,o)),child2:[],op:[0,0,0,0],data:t.length/o}]);for(let o=1;o<t.length/2;o++){const[l,u,h]=wf(t,o);if(l){let d=t;u&&(d=[cl(u),...d]),h&&(d=[...d,cl(h)]);const f=[];u&&f.push({opType:"simple",child1:[],child2:[],op:u,data:0}),f.push({opType:"commutator",child1:Zn(i,e+1,d.slice(0,o)),child2:Zn(i,e+1,d.slice(o,d.length/2)),op:[0,0,0,0],data:0}),h&&f.push({opType:"simple",child1:[],child2:[],op:h,data:0}),n.push(f)}}let r=Cf(t);r>1&&e===1&&n.push([{opType:"conjugate",child1:Zn(i,e+1,t.slice(0,r)),child2:Zn(i,e+1,t.slice(r,t.length-r)),op:[0,0,0,0],data:0}]);for(let o=1;o<t.length;o++)n.push([...Zn(i,e+1,t.slice(0,t.length-o)),...Zn(i,e+1,t.slice(t.length-o))]);e===1&&console.log("cocandidates",n);let s=-1,a=[];for(const o of n){const l=[];let u=0,h=0;for(h=0;h<o.length;h++)if(o[h].opType!=="simple"){if(u<h){const f=o.slice(u,h).map(v=>v.op),_=oo(i.n,f);l.push(..._.map(v=>({opType:"simple",child1:[],child2:[],op:v,data:0})))}u=h+1,l.push(o[h])}if(u<h){const f=o.slice(u,h).map(_=>_.op);oo(i.n,f),l.push(...f.map(_=>({opType:"simple",child1:[],child2:[],op:_,data:0})))}const d=ns(l);(s===-1||d<s)&&(s=d,a=l)}return a}function Lf(i,e,t){let n={depthLimit:e,maxDepth:0,n:i},r=Zn(n,1,t);const s=oo(i,t);if(!ju(t,s)){const a=ns(r),o={depthLimit:e,maxDepth:0,n:i},l=Zn(o,1,s);ns(l)<a&&(r=l,n=o)}return{alg:gr(i,r),complete:n.maxDepth<=e}}function oo(i,e){const t=n=>{const r=[],s=n[0][0];let a=-1,o=0;for(let l=0;l<i;l++){let u=0;for(const h of n){const[d,f,_,v]=h;l>=_&&l<v&&(u+=f)}u!==o&&(a>=0&&o!==0&&r.push([s,o,a,l]),a=l,o=u)}return a>=0&&o!==0&&r.push([s,o,a,i]),r};for(;;){const n=[];for(let r=0;r<e.length;){const s=e[r][0];let a=r+1;for(;a<e.length&&e[a][0]===s;a++);a===r+1?n.push(e[r]):n.push(...t(e.slice(r,a))),r=a}if(ju(e,n))return n;e=n}}function Yu(i,e,t,n,r){const s=(t/90%4+4)%4-2,a=l=>l===0?"2":l===1?"'":"";if(n===0&&r===i)return"xyz"[e].toLowerCase()+a(-s);const o="MES"[e];if(n*2===i-1&&r===n+1)return o+a(o==="S"?-s:s);if(n===1&&r===i-1)return o.toLowerCase()+a(o==="S"?-s:s);if(n+r>=i){const l="RUF"[e],u=i-r,h=i-n;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+l+a(-s)}else{const l="LDB"[e],u=n,h=r;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+l+a(s)}}function ll(i,e){const t=[];for(const n of e){const[r,s,a,o]=n;s!==0&&t.push(Yu(i,r,s,a,o))}return t.join(" ")}function ul(i,e,t){const n=$u(i);for(const[r,s,a,o]of e)if(n.position[r]>=a&&n.position[r]<o){const[l,u,h]=n.position;n.F=Wo(n.F,r,s),n.T=Wo(n.T,r,s);const d=(t-1)/2,[f,_,v]=Wo([l-d,u-d,h-d],r,s);n.position=[f+d,_+d,v+d]}return n}function hl(i,e){const[t,n,r]=e,s=(a,o,l,u,h,d,f,_)=>{const v=o*2===a-1,y=l*2===a-1,g=a===3?"":"-center";return o===0&&l===0?u+d+_:o===0&&l===a-1?u+d+h:o===a-1&&l===0?u+f+_:o===a-1&&l===a-1?u+f+h:o===0&&y?u+d+g:o===a-1&&y?u+f+g:l===0&&v?u+_+g:l===a-1&&v?u+h+g:v&&y?u+"-center":u+(o*2<a?o+1:o-a)+","+(l*2<a?l+1:l-a)};if(r===i-1)return s(i,t,n,"F","U","L","R","D");if(r===0)return s(i,i-1-t,n,"B","U","R","L","D");if(n===i-1)return s(i,t,i-1-r,"U","B","L","R","F");if(n===0)return s(i,t,r,"D","F","L","R","B");if(t===i-1)return s(i,i-1-r,n,"R","U","F","B","D");if(t===0)return s(i,r,n,"L","U","B","F","D")}function Pf(i,e){const t=ro(Ar,i.F),n=ro(Tr,i.T),r=i.position.reduce((s,a)=>s+(a===0||a===e-1?1:0),0);if(r===3){const s=i.position.map(o=>o===0?-1:1);return ws(n,s)<0?120:-120}else{if(r===2)return 180;if(ws(Ar,i.F)===-1||ws(Tr,i.T)===-1)return 180;{const s=(a,o,l)=>{const u=ws(a,o.map(h=>h===0?1:-1));if(u!==0)return u<0?-90:90};return s(t,i.position)||s(n,i.position)||0}}}function $u(i){return{F:[...i.F],T:[...i.T],position:[...i.position]}}function dl(i){const[e,t,n]=i;return{position:[e,t,n],T:Tr,F:Ar}}function Df(i){let e=Tr,t=Ar;for(let n=1;;n++){for(const r of i)e=ol(r.nT,r.nF,e),t=ol(r.nT,r.nF,t);if(xr(e,Tr)&&xr(t,Ar))return n}}function Uf(i){const e=(r,s)=>{for(;s;){const a=s;s=r%s,r=a}return r},t=(r,s)=>r*s/e(r,s);let n=1;for(const r of i){const s=Df(r);n=t(n,s*r.length)}return n}function If(i,e=3,t=!1){let n=[];try{n=so(i,e)}catch{i=i.replace(/([rludfbxyzmes])/ig," $1"),n=so(i,e)}const r={},s=[],a=[],o=(l,u,h)=>{if(l*e*e+u*e+h in r)return;let f=ul(dl([l,u,h]),n,e);if(xr(f.position,[l,u,h]))(!xr(f.T,Tr)||!xr(f.F,Ar))&&(s.push({unit:$u(f),degree:Pf(f,e)}),a.push([{p1:f.position,p2:f.position,nT:f.T,nF:f.F}]));else{const _=[{p1:[l,u,h],p2:[...f.position],nT:f.T,nF:f.F}];for(;!xr(f.position,[l,u,h]);){r[Af(...f.position,e)]=!0;const v=f.position;f=ul(dl(f.position),n,e),_.push({p1:v,p2:[...f.position],nT:f.T,nF:f.F})}a.push(_)}};if(t)for(let l=0;l<e;l++)for(let u=0;u<e;u++)for(let h=0;h<e;h++)o(l,u,h);else{for(let l=0;l<e;l++)for(let u=0;u<e;u++)o(l,u,0),o(l,u,e-1);for(let l=0;l<e;l++)for(let u=1;u<e-1;u++)o(l,0,u),o(l,e-1,u);for(let l=1;l<e-1;l++)for(let u=1;u<e-1;u++)o(0,l,u),o(e-1,l,u)}return{N:e,alg:i,regulatedAlg:ll(e,n),simplifiedAlg:ll(e,oo(e,n)),ops:n,cycles:a.map(l=>l.map(u=>u.p1)).filter(l=>l.length>1),rotates:s,permutations:a,order:Uf(a)}}function Nf(i,e,t,n,r,s,a){const o=i.createLinearGradient(e,t,n,r);o.addColorStop(0,"rgba(255, 255, 255, 0)"),o.addColorStop(.2,s),o.addColorStop(1,s),i.strokeStyle=o;var l=n-e,u=r-t,h=Math.atan2(u,l);i.moveTo(e,t),i.lineTo(n,r),i.lineTo(n-a*Math.cos(h-Math.PI/6),r-a*Math.sin(h-Math.PI/6)),i.moveTo(n,r),i.lineTo(n-a*Math.cos(h+Math.PI/6),r-a*Math.sin(h+Math.PI/6))}function Ls(i,e,t,n,r){i.moveTo(e,t),i.lineTo(e-r*Math.cos(n-Math.PI/6),t-r*Math.sin(n-Math.PI/6)),i.moveTo(e,t),i.lineTo(e-r*Math.cos(n+Math.PI/6),t-r*Math.sin(n+Math.PI/6))}function Of(i,e,t,n,r,s){const a=i.createLinearGradient(e,t-s,e,t+s);a.addColorStop(0,"rgba(255, 255, 255, 0)"),a.addColorStop(.2,r),a.addColorStop(1,r),i.strokeStyle=r;const o=s/2;n===180?(i.beginPath(),i.arc(e,t,s,-Math.PI*.3,Math.PI*.5,!1),Ls(i,e,t+s,-Math.PI*1.1,o),i.stroke(),i.beginPath(),i.arc(e,t,s,Math.PI*.7,Math.PI*1.5,!1),Ls(i,e,t-s,-Math.PI*.1,o),i.stroke()):n>0?(i.arc(e,t,s,-Math.PI/2,Math.PI,!1),Ls(i,e-s,t,-Math.PI*.6,o)):n<0&&(i.arc(e,t,s,-Math.PI/2,0,!0),Ls(i,e+s,t,-Math.PI*.4,o))}class Ku{constructor(){Vo(this,"palette",["rgb(0, 0, 255)","rgb(255, 0, 0)","rgb(0, 128, 0)","rgb(255, 0, 255)","rgb(0, 128, 255)","rgb(255, 128, 0)"]);Vo(this,"index",0)}nextColor(){const e=this.palette[this.index];return this.index=(this.index+1)%this.palette.length,e}}function Zu(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Ff(i){const e=Math.sqrt(Zu(i,i));return e===0?i:i.map(t=>t/e)}function ao(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function fl(i,e){return i.map(t=>t*e)}function pl(i,e){return i.map((t,n)=>t+e[n])}function Bf(i,e){return i.map((t,n)=>t-e[n])}function zf(i){return Math.sqrt(Zu(i,i))}function Hf(i){const e=~~i.clientWidth,t=~~i.clientHeight,n=2;return i.width!==e*n||i.height!==t*n?(i.width=e*n,i.height=t*n,console.log("canvas resize",e,t),!0):!1}function kf(i){for(;i.firstChild;)i.removeChild(i.lastChild)}function Gf(...i){const e=[];for(let t=0;t+1<i.length;t+=2){const n=i[t].startsWith("*")?i[t].slice(1):i[t],r=!!i[t].startsWith("*"),s=i[t+1],a=document.createElement("span");a.style.color=n,r&&(a.style.fontWeight="700"),a.append(s),e.push(a)}return e}function Yr(i,e){const t=document.createElement(i);return e&&t.classList.add(...e.split(" ")),t}function un(i){return Yr("div",i)}const Vf=`
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
PLL-Aa: x R' U R' D2 R U' R' D2 R2 x'
PLL-Ab: x R2 D2 R U R' D2 R U' R x'
PLL-E: x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x

[OLL]
OLL21: R U R' U R U' R' U R U2 R'
OLL21a: R U2 R' U' R U R' U' R U' R'

`,Ps=[];function Wf(){var e,t;if(Ps.length!==0)return Ps;let i=[];for(const n of Vf.split(/\n/g)){const r=n.match(/^\[(.*)\]$/);if(r){i=r[1].split(",").map(a=>a.trim());continue}const s=n.match(/^(\[([^)]+)\])?\s*([^:]+)\s*:\s*(.*)$/);if(s){const a=((e=s[2])==null?void 0:e.split(",").map(u=>u.trim()))||[],o=s[3],l=s[4].split("//");Ps.push({name:o,algorithm:l[0].trim(),tags:[...i,...a],desc:(t=l[1])==null?void 0:t.trim()})}}return Ps}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oa="156",Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xf=0,ml=1,qf=2,Ju=1,jf=2,Kn=3,xi=0,sn=1,Jn=2,gi=0,Sr=1,gl=2,_l=3,vl=4,Yf=5,_r=100,$f=101,Kf=102,xl=103,yl=104,Zf=200,Jf=201,Qf=202,ep=203,Qu=204,eh=205,tp=206,np=207,ip=208,rp=209,sp=210,op=0,ap=1,cp=2,wa=3,lp=4,up=5,hp=6,dp=7,th=0,fp=1,pp=2,_i=0,mp=1,gp=2,_p=3,vp=4,xp=5,nh=300,wr=301,Rr=302,Ra=303,Ca=304,ho=306,La=1e3,Pn=1001,Pa=1002,nn=1003,Ml=1004,Xo=1005,yn=1006,yp=1007,is=1008,vi=1009,Mp=1010,Sp=1011,Fa=1012,ih=1013,pi=1014,mi=1015,rs=1016,rh=1017,sh=1018,Ni=1020,Ep=1021,Dn=1023,bp=1024,Tp=1025,Oi=1026,Cr=1027,Ap=1028,oh=1029,wp=1030,ah=1031,ch=1033,qo=33776,jo=33777,Yo=33778,$o=33779,Sl=35840,El=35841,bl=35842,Tl=35843,Rp=36196,Al=37492,wl=37496,Rl=37808,Cl=37809,Ll=37810,Pl=37811,Dl=37812,Ul=37813,Il=37814,Nl=37815,Ol=37816,Fl=37817,Bl=37818,zl=37819,Hl=37820,kl=37821,Ko=36492,Gl=36494,Vl=36495,Cp=36283,Wl=36284,Xl=36285,ql=36286,lh=3e3,Fi=3001,Lp=3200,Pp=3201,Dp=0,Up=1,Bi="",Et="srgb",zn="srgb-linear",fo="display-p3",Zo=7680,Ip=519,Np=512,Op=513,Fp=514,Bp=515,zp=516,Hp=517,kp=518,Gp=519,jl=35044,Yl="300 es",Da=1035,Qn=2e3,co=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const $r=Math.PI/180,ss=180/Math.PI;function Pr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function Ba(i,e){return(i%e+e)%e}function Vp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Wp(i,e,t){return i!==e?(t-i)/(e-i):0}function Kr(i,e,t){return(1-t)*i+t*e}function Xp(i,e,t,n){return Kr(i,e,1-Math.exp(-t*n))}function qp(i,e=1){return e-Math.abs(Ba(i,e*2)-e)}function jp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $p(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kp(i,e){return i+Math.random()*(e-i)}function Zp(i){return i*(.5-Math.random())}function Jp(i){i!==void 0&&($l=i);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qp(i){return i*$r}function em(i){return i*ss}function Ua(i){return(i&i-1)===0&&i!==0}function tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nm(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),_=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*d,l*f,o*u);break;case"YZY":i.set(l*f,o*h,l*d,o*u);break;case"ZXZ":i.set(l*d,l*f,o*h,o*u);break;case"XZX":i.set(o*h,l*v,l*_,o*u);break;case"YXY":i.set(l*_,o*h,l*v,o*u);break;case"ZYZ":i.set(l*v,l*_,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const im={DEG2RAD:$r,RAD2DEG:ss,generateUUID:Pr,clamp:zt,euclideanModulo:Ba,mapLinear:Vp,inverseLerp:Wp,lerp:Kr,damp:Xp,pingpong:qp,smoothstep:jp,smootherstep:Yp,randInt:$p,randFloat:Kp,randFloatSpread:Zp,seededRandom:Jp,degToRad:Qp,radToDeg:em,isPowerOfTwo:Ua,ceilPowerOfTwo:tm,floorPowerOfTwo:lo,setQuaternionFromProperEuler:nm,normalize:en,denormalize:vr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,a,o,l,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u)}set(e,t,n,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],_=n[5],v=n[8],y=r[0],g=r[3],m=r[6],D=r[1],T=r[4],C=r[7],E=r[2],L=r[5],w=r[8];return s[0]=a*y+o*D+l*E,s[3]=a*g+o*T+l*L,s[6]=a*m+o*C+l*w,s[1]=u*y+h*D+d*E,s[4]=u*g+h*T+d*L,s[7]=u*m+h*C+d*w,s[2]=f*y+_*D+v*E,s[5]=f*g+_*T+v*L,s[8]=f*m+_*C+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=h*a-o*u,f=o*l-h*s,_=u*s-a*l,v=t*d+n*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=_*y,e[7]=(n*l-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new nt;function uh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rm(){const i=uo("canvas");return i.style.display="block",i}const Kl={};function Zr(i){i in Kl||(Kl[i]=!0,console.warn(i))}function Er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const sm=new nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),om=new nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function am(i){return i.convertSRGBToLinear().applyMatrix3(om)}function cm(i){return i.applyMatrix3(sm).convertLinearToSRGB()}const lm={[zn]:i=>i,[Et]:i=>i.convertSRGBToLinear(),[fo]:am},um={[zn]:i=>i,[Et]:i=>i.convertLinearToSRGB(),[fo]:cm},Tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return zn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=lm[e],r=um[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let er;class hh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=uo("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Er(t[n]/255)*255):t[n]=Er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Pr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ea(r[a].image)):s.push(ea(r[a]))}else s=ea(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;class on extends Gi{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Pn,r=Pn,s=yn,a=is,o=Dn,l=vi,u=on.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Pr(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fi?Et:Bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Fi:lh}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fi?Et:Bi}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=nh;on.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],_=l[5],v=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+g)<.1&&Math.abs(u+_+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,C=(_+1)/2,E=(m+1)/2,L=(h+f)/4,w=(d+y)/4,N=(v+g)/4;return T>C&&T>E?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=L/n,s=w/n):C>E?C<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),n=L/r,s=N/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=w/s,r=N/s),this.set(n,r,s,t),this}let D=Math.sqrt((g-v)*(g-v)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(D)<.001&&(D=1),this.x=(g-v)/D,this.y=(d-y)/D,this.z=(f-h)/D,this.w=Math.acos((u+_+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fm extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?Et:Bi),this.texture=new on(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends fm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fh extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pm extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],_=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=y;return}if(d!==y||l!==f||u!==_||h!==v){let g=1-o;const m=l*f+u*_+h*v+d*y,D=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const E=Math.sqrt(T),L=Math.atan2(E,m*D);g=Math.sin(g*L)/E,o=Math.sin(o*L)/E}const C=o*D;if(l=l*g+f*C,u=u*g+_*C,h=h*g+v*C,d=d*g+y*C,g===1-o){const E=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=E,u*=E,h*=E,d*=E}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],h=n[r+3],d=s[a],f=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+h*d+l*_-u*f,e[t+1]=l*v+h*f+u*d-o*_,e[t+2]=u*v+h*_+o*f-l*d,e[t+3]=h*v-o*d-l*f-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*d+u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d-f*_*v;break;case"YXZ":this._x=f*h*d+u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d+f*_*v;break;case"ZXY":this._x=f*h*d-u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d-f*_*v;break;case"ZYX":this._x=f*h*d-u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d+f*_*v;break;case"YZX":this._x=f*h*d+u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d-f*_*v;break;case"XZY":this._x=f*h*d-u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-u)*_,this._z=(a-r)*_}else if(n>o&&n>d){const _=2*Math.sqrt(1+n-o-d);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+u)/_}else if(o>d){const _=2*Math.sqrt(1+o-n-d);this._w=(s-u)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+d-n-o);this._w=(a-r)/_,this._x=(s+u)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-n*u,this._z=s*h+a*u+n*l-r*o,this._w=a*h-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*r-o*n,h=l*n+o*t-s*r,d=l*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=u*l+f*-s+h*-o-d*-a,this.y=h*l+f*-a+d*-s-u*-o,this.z=d*l+f*-o+u*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new F,Zl=new Hi;class os{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox),tr.applyMatrix4(e.matrixWorld),this.union(tr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Xn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Xn)}else r.boundingBox===null&&r.computeBoundingBox(),tr.copy(r.boundingBox),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Ds.subVectors(this.max,kr),nr.subVectors(e.a,kr),ir.subVectors(e.b,kr),rr.subVectors(e.c,kr),ci.subVectors(ir,nr),li.subVectors(rr,ir),Ci.subVectors(nr,rr);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ci.z,Ci.y,ci.z,0,-ci.x,li.z,0,-li.x,Ci.z,0,-Ci.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ci.y,Ci.x,0];return!na(t,nr,ir,rr,Ds)||(t=[1,0,0,0,1,0,0,0,1],!na(t,nr,ir,rr,Ds))?!1:(Us.crossVectors(ci,li),t=[Us.x,Us.y,Us.z],na(t,nr,ir,rr,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new F,new F,new F,new F,new F,new F,new F,new F],Xn=new F,tr=new os,nr=new F,ir=new F,rr=new F,ci=new F,li=new F,Ci=new F,kr=new F,Ds=new F,Us=new F,Li=new F;function na(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Li.fromArray(i,s);const o=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=e.dot(Li),u=t.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const mm=new os,Gr=new F,ia=new F;class po{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(ia)),this.expandByPoint(Gr.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new F,ra=new F,Is=new F,ui=new F,sa=new F,Ns=new F,oa=new F;class za{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ra.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ra);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Is),o=ui.dot(this.direction),l=-ui.dot(Is),u=ui.lengthSq(),h=Math.abs(1-a*a);let d,f,_,v;if(h>0)if(d=a*l-o,f=a*o-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const y=1/h;d*=y,f*=y,_=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+u;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ra).addScaledVector(Is,f),_}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){sa.subVectors(t,e),Ns.subVectors(n,e),oa.crossVectors(sa,Ns);let a=this.direction.dot(oa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(Ns.crossVectors(ui,Ns));if(l<0)return null;const u=o*this.direction.dot(sa.cross(ui));if(u<0||l+u>a)return null;const h=-o*ui.dot(oa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,r,s,a,o,l,u,h,d,f,_,v,y,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u,h,d,f,_,v,y,g)}set(e,t,n,r,s,a,o,l,u,h,d,f,_,v,y,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=_,m[7]=v,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,_=a*d,v=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=_+v*u,t[5]=f-y*u,t[9]=-o*l,t[2]=y-f*u,t[6]=v+_*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,_=l*d,v=u*h,y=u*d;t[0]=f+y*o,t[4]=v*o-_,t[8]=a*u,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=_*o-v,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,_=l*d,v=u*h,y=u*d;t[0]=f-y*o,t[4]=-a*d,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,_=a*d,v=o*h,y=o*d;t[0]=l*h,t[4]=v*u-_,t[8]=f*u+y,t[1]=l*d,t[5]=y*u+f,t[9]=_*u-v,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,_=a*u,v=o*l,y=o*u;t[0]=l*h,t[4]=y-f*d,t[8]=v*d+_,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=_*d+v,t[10]=f-y*d}else if(e.order==="XZY"){const f=a*l,_=a*u,v=o*l,y=o*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+y,t[5]=a*h,t[9]=_*d-v,t[2]=v*d-_,t[6]=o*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,_m)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(n,cn),hi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(n,cn)),hi.normalize(),Os.crossVectors(cn,hi),r[0]=hi.x,r[4]=Os.x,r[8]=cn.x,r[1]=hi.y,r[5]=Os.y,r[9]=cn.y,r[2]=hi.z,r[6]=Os.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],_=n[13],v=n[2],y=n[6],g=n[10],m=n[14],D=n[3],T=n[7],C=n[11],E=n[15],L=r[0],w=r[4],N=r[8],M=r[12],A=r[1],V=r[5],Q=r[9],H=r[13],Y=r[2],$=r[6],re=r[10],k=r[14],U=r[3],se=r[7],ie=r[11],q=r[15];return s[0]=a*L+o*A+l*Y+u*U,s[4]=a*w+o*V+l*$+u*se,s[8]=a*N+o*Q+l*re+u*ie,s[12]=a*M+o*H+l*k+u*q,s[1]=h*L+d*A+f*Y+_*U,s[5]=h*w+d*V+f*$+_*se,s[9]=h*N+d*Q+f*re+_*ie,s[13]=h*M+d*H+f*k+_*q,s[2]=v*L+y*A+g*Y+m*U,s[6]=v*w+y*V+g*$+m*se,s[10]=v*N+y*Q+g*re+m*ie,s[14]=v*M+y*H+g*k+m*q,s[3]=D*L+T*A+C*Y+E*U,s[7]=D*w+T*V+C*$+E*se,s[11]=D*N+T*Q+C*re+E*ie,s[15]=D*M+T*H+C*k+E*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],_=e[14],v=e[3],y=e[7],g=e[11],m=e[15];return v*(+s*l*d-r*u*d-s*o*f+n*u*f+r*o*_-n*l*_)+y*(+t*l*_-t*u*f+s*a*f-r*a*_+r*u*h-s*l*h)+g*(+t*u*d-t*o*_-s*a*d+n*a*_+s*o*h-n*u*h)+m*(-r*o*h-t*l*d+t*o*f+r*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],_=e[11],v=e[12],y=e[13],g=e[14],m=e[15],D=d*g*u-y*f*u+y*l*_-o*g*_-d*l*m+o*f*m,T=v*f*u-h*g*u-v*l*_+a*g*_+h*l*m-a*f*m,C=h*y*u-v*d*u+v*o*_-a*y*_-h*o*m+a*d*m,E=v*d*l-h*y*l-v*o*f+a*y*f+h*o*g-a*d*g,L=t*D+n*T+r*C+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return e[0]=D*w,e[1]=(y*f*s-d*g*s-y*r*_+n*g*_+d*r*m-n*f*m)*w,e[2]=(o*g*s-y*l*s+y*r*u-n*g*u-o*r*m+n*l*m)*w,e[3]=(d*l*s-o*f*s-d*r*u+n*f*u+o*r*_-n*l*_)*w,e[4]=T*w,e[5]=(h*g*s-v*f*s+v*r*_-t*g*_-h*r*m+t*f*m)*w,e[6]=(v*l*s-a*g*s-v*r*u+t*g*u+a*r*m-t*l*m)*w,e[7]=(a*f*s-h*l*s+h*r*u-t*f*u-a*r*_+t*l*_)*w,e[8]=C*w,e[9]=(v*d*s-h*y*s-v*n*_+t*y*_+h*n*m-t*d*m)*w,e[10]=(a*y*s-v*o*s+v*n*u-t*y*u-a*n*m+t*o*m)*w,e[11]=(h*o*s-a*d*s-h*n*u+t*d*u+a*n*_-t*o*_)*w,e[12]=E*w,e[13]=(h*y*r-v*d*r+v*n*f-t*y*f-h*n*g+t*d*g)*w,e[14]=(v*o*r-a*y*r-v*n*l+t*y*l+a*n*g-t*o*g)*w,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+n,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,h=a+a,d=o+o,f=s*u,_=s*h,v=s*d,y=a*h,g=a*d,m=o*d,D=l*u,T=l*h,C=l*d,E=n.x,L=n.y,w=n.z;return r[0]=(1-(y+m))*E,r[1]=(_+C)*E,r[2]=(v-T)*E,r[3]=0,r[4]=(_-C)*L,r[5]=(1-(f+m))*L,r[6]=(g+D)*L,r[7]=0,r[8]=(v+T)*w,r[9]=(g-D)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const a=sr.set(r[4],r[5],r[6]).length(),o=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,h=1/a,d=1/o;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Qn){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let _,v;if(o===Qn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===co)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Qn){const l=this.elements,u=1/(t-e),h=1/(n-r),d=1/(a-s),f=(t+e)*u,_=(n+r)*h;let v,y;if(o===Qn)v=(a+s)*d,y=-2*d;else if(o===co)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new F,An=new Lt,gm=new F(0,0,0),_m=new F(1,1,1),hi=new F,Os=new F,cn=new F,Jl=new Lt,Ql=new Hi;class mo{constructor(e=0,t=0,n=0,r=mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],d=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mo.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const eu=new F,or=new Hi,jn=new Lt,Fs=new F,Vr=new F,xm=new F,ym=new Hi,tu=new F(1,0,0),nu=new F(0,1,0),iu=new F(0,0,1),Mm={type:"added"},Sm={type:"removed"};class Xt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new F,t=new mo,n=new Hi,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new nt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Vr,Fs,this.up):jn.lookAt(Fs,Vr,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(jn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new F(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new F,Yn=new F,aa=new F,$n=new F,ar=new F,cr=new F,ru=new F,ca=new F,la=new F,ua=new F;let Bs=!1;class Ln{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wn.subVectors(r,t),Yn.subVectors(n,t),aa.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Yn),l=wn.dot(aa),u=Yn.dot(Yn),h=Yn.dot(aa),d=a*u-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,_=(u*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,n,r,s,a,o,l){return Bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bs=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,$n),l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Yn.subVectors(e,t),wn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),wn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bs=!0),Ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ar.subVectors(r,n),cr.subVectors(s,n),ca.subVectors(e,n);const l=ar.dot(ca),u=cr.dot(ca);if(l<=0&&u<=0)return t.copy(n);la.subVectors(e,r);const h=ar.dot(la),d=cr.dot(la);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ar,a);ua.subVectors(e,s);const _=ar.dot(ua),v=cr.dot(ua);if(v>=0&&_<=v)return t.copy(s);const y=_*u-l*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(cr,o);const g=h*v-_*d;if(g<=0&&d-h>=0&&_-v>=0)return ru.subVectors(s,r),o=(d-h)/(d-h+(_-v)),t.copy(r).addScaledVector(ru,o);const m=1/(g+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(ar,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Em=0;class as extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=Sr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=eh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Tn.workingColorSpace){if(e=Ba(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ha(a,s,e+1/3),this.g=ha(a,s,e),this.b=ha(a,s,e-1/3)}return Tn.toWorkingColorSpace(this,r),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Tn.fromWorkingColorSpace(Yt.copy(this),e),Math.round(zt(Yt.r*255,0,255))*65536+Math.round(zt(Yt.g*255,0,255))*256+Math.round(zt(Yt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tn.workingColorSpace){Tn.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=Tn.workingColorSpace){return Tn.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Et){Tn.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=n,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(zs);const n=Kr(Rn.h,zs.h,t),r=Kr(Rn.s,zs.s,t),s=Kr(Rn.l,zs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new dt;dt.NAMES=mh;class Jr extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new F,Hs=new Re;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jl,this.updateRange={offset:0,count:-1},this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class gh extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _h extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bm=0;const vn=new Lt,da=new Xt,lr=new F,ln=new os,Wr=new os,Bt=new F;class Sn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?_h:gh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(ln.min,Wr.min),ln.expandByPoint(Bt),Bt.addVectors(ln.max,Wr.max),ln.expandByPoint(Bt)):(ln.expandByPoint(Wr.min),ln.expandByPoint(Wr.max))}ln.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Bt.fromBufferAttribute(o,u),l&&(lr.fromBufferAttribute(e,u),Bt.add(lr)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let A=0;A<o;A++)u[A]=new F,h[A]=new F;const d=new F,f=new F,_=new F,v=new Re,y=new Re,g=new Re,m=new F,D=new F;function T(A,V,Q){d.fromArray(r,A*3),f.fromArray(r,V*3),_.fromArray(r,Q*3),v.fromArray(a,A*2),y.fromArray(a,V*2),g.fromArray(a,Q*2),f.sub(d),_.sub(d),y.sub(v),g.sub(v);const H=1/(y.x*g.y-g.x*y.y);isFinite(H)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(_,-y.y).multiplyScalar(H),D.copy(_).multiplyScalar(y.x).addScaledVector(f,-g.x).multiplyScalar(H),u[A].add(m),u[V].add(m),u[Q].add(m),h[A].add(D),h[V].add(D),h[Q].add(D))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let A=0,V=C.length;A<V;++A){const Q=C[A],H=Q.start,Y=Q.count;for(let $=H,re=H+Y;$<re;$+=3)T(n[$+0],n[$+1],n[$+2])}const E=new F,L=new F,w=new F,N=new F;function M(A){w.fromArray(s,A*3),N.copy(w);const V=u[A];E.copy(V),E.sub(w.multiplyScalar(w.dot(V))).normalize(),L.crossVectors(N,V);const H=L.dot(h[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=H}for(let A=0,V=C.length;A<V;++A){const Q=C[A],H=Q.start,Y=Q.count;for(let $=H,re=H+Y;$<re;$+=3)M(n[$+0]),M(n[$+1]),M(n[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,u=new F,h=new F,d=new F;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),o.add(h),l.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(l.length*h);let _=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?_=l[y]*o.data.stride+o.offset:_=l[y]*h;for(let m=0;m<h;m++)f[v++]=u[_++]}return new Bn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Sn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],_=e(f,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const _=u[d];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new Lt,Pi=new za,ks=new po,ou=new F,ur=new F,hr=new F,dr=new F,fa=new F,Gs=new F,Vs=new Re,Ws=new Re,Xs=new Re,au=new F,cu=new F,lu=new F,qs=new F,js=new F;class Wt extends Xt{constructor(e=new Sn,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Gs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],d=s[l];h!==0&&(fa.fromBufferAttribute(d,e),a?Gs.addScaledVector(fa,h):Gs.addScaledVector(fa.sub(t),h))}t.add(Gs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(ks.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ks,ou)===null||Pi.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(su.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(su),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],m=a[g.materialIndex],D=Math.max(g.start,_.start),T=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let C=D,E=T;C<E;C+=3){const L=o.getX(C),w=o.getX(C+1),N=o.getX(C+2);r=Ys(this,m,e,n,u,h,d,L,w,N),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(o.count,_.start+_.count);for(let g=v,m=y;g<m;g+=3){const D=o.getX(g),T=o.getX(g+1),C=o.getX(g+2);r=Ys(this,a,e,n,u,h,d,D,T,C),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],m=a[g.materialIndex],D=Math.max(g.start,_.start),T=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let C=D,E=T;C<E;C+=3){const L=C,w=C+1,N=C+2;r=Ys(this,m,e,n,u,h,d,L,w,N),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let g=v,m=y;g<m;g+=3){const D=g,T=g+1,C=g+2;r=Ys(this,a,e,n,u,h,d,D,T,C),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Tm(i,e,t,n,r,s,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===xi,o),l===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(js);return u<t.near||u>t.far?null:{distance:u,point:js.clone(),object:i}}function Ys(i,e,t,n,r,s,a,o,l,u){i.getVertexPosition(o,ur),i.getVertexPosition(l,hr),i.getVertexPosition(u,dr);const h=Tm(i,e,t,n,ur,hr,dr,qs);if(h){r&&(Vs.fromBufferAttribute(r,o),Ws.fromBufferAttribute(r,l),Xs.fromBufferAttribute(r,u),h.uv=Ln.getInterpolation(qs,ur,hr,dr,Vs,Ws,Xs,new Re)),s&&(Vs.fromBufferAttribute(s,o),Ws.fromBufferAttribute(s,l),Xs.fromBufferAttribute(s,u),h.uv1=Ln.getInterpolation(qs,ur,hr,dr,Vs,Ws,Xs,new Re),h.uv2=h.uv1),a&&(au.fromBufferAttribute(a,o),cu.fromBufferAttribute(a,l),lu.fromBufferAttribute(a,u),h.normal=Ln.getInterpolation(qs,ur,hr,dr,au,cu,lu,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new F,materialIndex:0};Ln.getNormal(ur,hr,dr,d.normal),h.face=d}return h}class Dr extends Sn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],d=[];let f=0,_=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2));function v(y,g,m,D,T,C,E,L,w,N,M){const A=C/w,V=E/N,Q=C/2,H=E/2,Y=L/2,$=w+1,re=N+1;let k=0,U=0;const se=new F;for(let ie=0;ie<re;ie++){const q=ie*V-H;for(let ee=0;ee<$;ee++){const ve=ee*A-Q;se[y]=ve*D,se[g]=q*T,se[m]=Y,u.push(se.x,se.y,se.z),se[y]=0,se[g]=0,se[m]=L>0?1:-1,h.push(se.x,se.y,se.z),d.push(ee/w),d.push(1-ie/N),k+=1}}for(let ie=0;ie<N;ie++)for(let q=0;q<w;q++){const ee=f+q+$*ie,ve=f+q+$*(ie+1),_e=f+(q+1)+$*(ie+1),Te=f+(q+1)+$*ie;l.push(ee,ve,Te),l.push(ve,_e,Te),U+=6}o.addGroup(_,U,M),_+=U,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Lr(i[t]);for(const r in n)e[r]=n[r]}return e}function Am(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vh(i){return i.getRenderTarget()===null?i.outputColorSpace:zn}const wm={clone:Lr,merge:tn};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xh extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mn extends xh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,pr=1;class Lm extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Mn(fr,pr,e,t);r.layers=this.layers,this.add(r);const s=new Mn(fr,pr,e,t);s.layers=this.layers,this.add(s);const a=new Mn(fr,pr,e,t);a.layers=this.layers,this.add(a);const o=new Mn(fr,pr,e,t);o.layers=this.layers,this.add(o);const l=new Mn(fr,pr,e,t);l.layers=this.layers,this.add(l);const u=new Mn(fr,pr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,u]=this.children,h=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class yh extends on{constructor(e,t,n,r,s,a,o,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pm extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fi?Et:Bi),this.texture=new yh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dr(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:gi});s.uniforms.tEquirect.value=t;const a=new Wt(r,s),o=t.minFilter;return t.minFilter===is&&(t.minFilter=yn),new Lm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const pa=new F,Dm=new F,Um=new nt;class fi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pa.subVectors(n,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Um.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new po,$s=new F;class Ha{constructor(e=new fi,t=new fi,n=new fi,r=new fi,s=new fi,a=new fi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],v=r[9],y=r[10],g=r[11],m=r[12],D=r[13],T=r[14],C=r[15];if(n[0].setComponents(l-s,f-u,g-_,C-m).normalize(),n[1].setComponents(l+s,f+u,g+_,C+m).normalize(),n[2].setComponents(l+a,f+h,g+v,C+D).normalize(),n[3].setComponents(l-a,f-h,g-v,C-D).normalize(),n[4].setComponents(l-o,f-d,g-y,C-T).normalize(),t===Qn)n[5].setComponents(l+o,f+d,g+y,C+T).normalize();else if(t===co)n[5].setComponents(o,d,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($s.x=r.normal.x>0?e.max.x:e.min.x,$s.y=r.normal.y>0?e.max.y:e.min.y,$s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Im(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,h){const d=u.array,f=u.usage,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,f),u.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,d){const f=h.array,_=h.updateRange;i.bindBuffer(d,u),_.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d===void 0?n.set(u,r(u,h)):d.version<u.version&&(s(d.buffer,u,h),d.version=u.version)}return{get:a,remove:o,update:l}}class ka extends Sn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),u=o+1,h=l+1,d=e/o,f=t/l,_=[],v=[],y=[],g=[];for(let m=0;m<h;m++){const D=m*f-a;for(let T=0;T<u;T++){const C=T*d-s;v.push(C,-D,0),y.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let D=0;D<o;D++){const T=D+u*m,C=D+u*(m+1),E=D+1+u*(m+1),L=D+1+u*m;_.push(T,C,L),_.push(C,E,L)}this.setIndex(_),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,jm=`#ifdef USE_BUMPMAP
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Dg=`struct PhysicalMaterial {
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
}`,Ug=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t_=`#ifdef USE_NORMALMAP
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
#endif`,n_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,i_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,__=`float getShadowMask() {
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
}`,v_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M_=`#ifdef USE_SKINNING
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
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U_=`uniform sampler2D t2D;
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
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
}`,z_=`#if DEPTH_PACKING == 3200
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
}`,H_=`#define DISTANCE
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
}`,k_=`#define DISTANCE
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`uniform float scale;
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,j_=`uniform vec3 diffuse;
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
}`,Y_=`#define LAMBERT
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
}`,$_=`#define LAMBERT
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
}`,K_=`#define MATCAP
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
}`,Z_=`#define MATCAP
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
}`,J_=`#define NORMAL
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
}`,Q_=`#define NORMAL
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
}`,ev=`#define PHONG
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
}`,tv=`#define PHONG
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
}`,nv=`#define STANDARD
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
}`,iv=`#define STANDARD
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
}`,rv=`#define TOON
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
}`,sv=`#define TOON
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
}`,ov=`uniform float size;
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
}`,av=`uniform vec3 diffuse;
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
}`,cv=`#include <common>
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
}`,lv=`uniform vec3 color;
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
}`,uv=`uniform float rotation;
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
}`,hv=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Nm,alphahash_pars_fragment:Om,alphamap_fragment:Fm,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:Hm,aomap_fragment:km,aomap_pars_fragment:Gm,begin_vertex:Vm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:jm,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Zm,color_fragment:Jm,color_pars_fragment:Qm,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:rg,displacementmap_pars_vertex:sg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:cg,colorspace_fragment:lg,colorspace_pars_fragment:ug,envmap_fragment:hg,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Ag,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:_g,fog_fragment:vg,fog_pars_fragment:xg,gradientmap_pars_fragment:yg,lightmap_fragment:Mg,lightmap_pars_fragment:Sg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:bg,lights_pars_begin:Tg,lights_toon_fragment:wg,lights_toon_pars_fragment:Rg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Dg,lights_fragment_begin:Ug,lights_fragment_maps:Ig,lights_fragment_end:Ng,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:zg,map_fragment:Hg,map_pars_fragment:kg,map_particle_fragment:Gg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphcolor_vertex:qg,morphnormal_vertex:jg,morphtarget_pars_vertex:Yg,morphtarget_vertex:$g,normal_fragment_begin:Kg,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Qg,normal_vertex:e_,normalmap_pars_fragment:t_,clearcoat_normal_fragment_begin:n_,clearcoat_normal_fragment_maps:i_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:s_,opaque_fragment:o_,packing:a_,premultiplied_alpha_fragment:c_,project_vertex:l_,dithering_fragment:u_,dithering_pars_fragment:h_,roughnessmap_fragment:d_,roughnessmap_pars_fragment:f_,shadowmap_pars_fragment:p_,shadowmap_pars_vertex:m_,shadowmap_vertex:g_,shadowmask_pars_fragment:__,skinbase_vertex:v_,skinning_pars_vertex:x_,skinning_vertex:y_,skinnormal_vertex:M_,specularmap_fragment:S_,specularmap_pars_fragment:E_,tonemapping_fragment:b_,tonemapping_pars_fragment:T_,transmission_fragment:A_,transmission_pars_fragment:w_,uv_pars_fragment:R_,uv_pars_vertex:C_,uv_vertex:L_,worldpos_vertex:P_,background_vert:D_,background_frag:U_,backgroundCube_vert:I_,backgroundCube_frag:N_,cube_vert:O_,cube_frag:F_,depth_vert:B_,depth_frag:z_,distanceRGBA_vert:H_,distanceRGBA_frag:k_,equirect_vert:G_,equirect_frag:V_,linedashed_vert:W_,linedashed_frag:X_,meshbasic_vert:q_,meshbasic_frag:j_,meshlambert_vert:Y_,meshlambert_frag:$_,meshmatcap_vert:K_,meshmatcap_frag:Z_,meshnormal_vert:J_,meshnormal_frag:Q_,meshphong_vert:ev,meshphong_frag:tv,meshphysical_vert:nv,meshphysical_frag:iv,meshtoon_vert:rv,meshtoon_frag:sv,points_vert:ov,points_frag:av,shadow_vert:cv,shadow_frag:lv,sprite_vert:uv,sprite_frag:hv},ye={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Fn={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Fn.physical={uniforms:tn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ks={r:0,b:0,g:0};function dv(i,e,t,n,r,s,a){const o=new dt(0);let l=s===!0?0:1,u,h,d=null,f=0,_=null;function v(g,m){let D=!1,T=m.isScene===!0?m.background:null;T&&T.isTexture&&(T=(m.backgroundBlurriness>0?t:e).get(T)),T===null?y(o,l):T&&T.isColor&&(y(T,1),D=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),T&&(T.isCubeTexture||T.mapping===ho)?(h===void 0&&(h=new Wt(new Dr(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Lr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=T.colorSpace!==Et,(d!==T||f!==T.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,_=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Wt(new ka(2,2),new ki({name:"BackgroundMaterial",uniforms:Lr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=T.colorSpace!==Et,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,_=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,m){g.getRGB(Ks,vh(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(o,l)},render:v}}function fv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null);let u=l,h=!1;function d(Y,$,re,k,U){let se=!1;if(a){const ie=y(k,re,$);u!==ie&&(u=ie,_(u.object)),se=m(Y,k,re,U),se&&D(Y,k,re,U)}else{const ie=$.wireframe===!0;(u.geometry!==k.id||u.program!==re.id||u.wireframe!==ie)&&(u.geometry=k.id,u.program=re.id,u.wireframe=ie,se=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,N(Y,$,re,k),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function _(Y){return n.isWebGL2?i.bindVertexArray(Y):s.bindVertexArrayOES(Y)}function v(Y){return n.isWebGL2?i.deleteVertexArray(Y):s.deleteVertexArrayOES(Y)}function y(Y,$,re){const k=re.wireframe===!0;let U=o[Y.id];U===void 0&&(U={},o[Y.id]=U);let se=U[$.id];se===void 0&&(se={},U[$.id]=se);let ie=se[k];return ie===void 0&&(ie=g(f()),se[k]=ie),ie}function g(Y){const $=[],re=[],k=[];for(let U=0;U<r;U++)$[U]=0,re[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:re,attributeDivisors:k,object:Y,attributes:{},index:null}}function m(Y,$,re,k){const U=u.attributes,se=$.attributes;let ie=0;const q=re.getAttributes();for(const ee in q)if(q[ee].location>=0){const _e=U[ee];let Te=se[ee];if(Te===void 0&&(ee==="instanceMatrix"&&Y.instanceMatrix&&(Te=Y.instanceMatrix),ee==="instanceColor"&&Y.instanceColor&&(Te=Y.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;ie++}return u.attributesNum!==ie||u.index!==k}function D(Y,$,re,k){const U={},se=$.attributes;let ie=0;const q=re.getAttributes();for(const ee in q)if(q[ee].location>=0){let _e=se[ee];_e===void 0&&(ee==="instanceMatrix"&&Y.instanceMatrix&&(_e=Y.instanceMatrix),ee==="instanceColor"&&Y.instanceColor&&(_e=Y.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),U[ee]=Te,ie++}u.attributes=U,u.attributesNum=ie,u.index=k}function T(){const Y=u.newAttributes;for(let $=0,re=Y.length;$<re;$++)Y[$]=0}function C(Y){E(Y,0)}function E(Y,$){const re=u.newAttributes,k=u.enabledAttributes,U=u.attributeDivisors;re[Y]=1,k[Y]===0&&(i.enableVertexAttribArray(Y),k[Y]=1),U[Y]!==$&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,$),U[Y]=$)}function L(){const Y=u.newAttributes,$=u.enabledAttributes;for(let re=0,k=$.length;re<k;re++)$[re]!==Y[re]&&(i.disableVertexAttribArray(re),$[re]=0)}function w(Y,$,re,k,U,se,ie){ie===!0?i.vertexAttribIPointer(Y,$,re,U,se):i.vertexAttribPointer(Y,$,re,k,U,se)}function N(Y,$,re,k){if(n.isWebGL2===!1&&(Y.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const U=k.attributes,se=re.getAttributes(),ie=$.defaultAttributeValues;for(const q in se){const ee=se[q];if(ee.location>=0){let ve=U[q];if(ve===void 0&&(q==="instanceMatrix"&&Y.instanceMatrix&&(ve=Y.instanceMatrix),q==="instanceColor"&&Y.instanceColor&&(ve=Y.instanceColor)),ve!==void 0){const _e=ve.normalized,Te=ve.itemSize,ce=t.get(ve);if(ce===void 0)continue;const Ue=ce.buffer,De=ce.type,rt=ce.bytesPerElement,Ut=n.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||ve.gpuType===ih);if(ve.isInterleavedBufferAttribute){const He=ve.data,W=He.stride,yt=ve.offset;if(He.isInstancedInterleavedBuffer){for(let Le=0;Le<ee.locationSize;Le++)E(ee.location+Le,He.meshPerAttribute);Y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Le=0;Le<ee.locationSize;Le++)C(ee.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Le=0;Le<ee.locationSize;Le++)w(ee.location+Le,Te/ee.locationSize,De,_e,W*rt,(yt+Te/ee.locationSize*Le)*rt,Ut)}else{if(ve.isInstancedBufferAttribute){for(let He=0;He<ee.locationSize;He++)E(ee.location+He,ve.meshPerAttribute);Y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let He=0;He<ee.locationSize;He++)C(ee.location+He);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let He=0;He<ee.locationSize;He++)w(ee.location+He,Te/ee.locationSize,De,_e,Te*rt,Te/ee.locationSize*He*rt,Ut)}}else if(ie!==void 0){const _e=ie[q];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ee.location,_e);break;case 3:i.vertexAttrib3fv(ee.location,_e);break;case 4:i.vertexAttrib4fv(ee.location,_e);break;default:i.vertexAttrib1fv(ee.location,_e)}}}}L()}function M(){Q();for(const Y in o){const $=o[Y];for(const re in $){const k=$[re];for(const U in k)v(k[U].object),delete k[U];delete $[re]}delete o[Y]}}function A(Y){if(o[Y.id]===void 0)return;const $=o[Y.id];for(const re in $){const k=$[re];for(const U in k)v(k[U].object),delete k[U];delete $[re]}delete o[Y.id]}function V(Y){for(const $ in o){const re=o[$];if(re[Y.id]===void 0)continue;const k=re[Y.id];for(const U in k)v(k[U].object),delete k[U];delete re[Y.id]}}function Q(){H(),h=!0,u!==l&&(u=l,_(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:V,initAttributes:T,enableAttribute:C,disableUnusedAttributes:L}}function pv(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,_;if(r)f=i,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,u,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function mv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=f>0,C=a||e.has("OES_texture_float"),E=T&&C,L=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:D,vertexTextures:T,floatFragmentTextures:C,floatVertexTextures:E,maxSamples:L}}function gv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new fi,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||n!==0||r;return r=f,n=d.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,_){const v=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!r||v===null||v.length===0||s&&!g)s?h(null):u();else{const D=s?0:n,T=D*4;let C=m.clippingState||null;l.value=C,C=h(v,f,T,_);for(let E=0;E!==T;++E)C[E]=t[E];m.clippingState=C,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=D}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,_,v){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const m=_+y*4,D=f.matrixWorldInverse;o.getNormalMatrix(D),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,C=_;T!==y;++T,C+=4)a.copy(d[T]).applyMatrix4(D,o),a.normal.toArray(g,C),g[C+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function _v(i){let e=new WeakMap;function t(a,o){return o===Ra?a.mapping=wr:o===Ca&&(a.mapping=Rr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ra||o===Ca)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Pm(l.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Sh extends xh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,uu=[.125,.215,.35,.446,.526,.582],Ii=20,ma=new Sh,hu=new dt;let ga=null;const Ui=(1+Math.sqrt(5))/2,mr=1/Ui,du=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ui,mr),new F(0,Ui,-mr),new F(mr,0,Ui),new F(-mr,0,Ui),new F(Ui,mr,0),new F(-Ui,mr,0)];class fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ga=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:rs,format:Dn,colorSpace:zn,depthBuffer:!1},r=pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(s)),this._blurMaterial=xv(s,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,r){const o=new Mn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(hu),h.toneMapping=_i,h.autoClear=!1;const _=new Jr({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new Wt(new Dr,_);let y=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,y=!0):(_.color.copy(hu),y=!0);for(let m=0;m<6;m++){const D=m%3;D===0?(o.up.set(0,l[m],0),o.lookAt(u[m],0,0)):D===1?(o.up.set(0,0,l[m]),o.lookAt(0,u[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,u[m]));const T=this._cubeSize;Zs(r,D*T,m>2?T:0,T,T),h.setRenderTarget(r),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wr||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=du[(r-1)%du.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Wt(this._lodPlanes[r],u),f=u.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ii-1),y=s/v,g=isFinite(s)?1+Math.floor(h*y):Ii;g>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ii}`);const m=[];let D=0;for(let w=0;w<Ii;++w){const N=w/y,M=Math.exp(-N*N/2);m.push(M),w===0?D+=M:w<g&&(D+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/D;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-n;const C=this._sizeLods[r],E=3*C*(r>T-yr?r-T+yr:0),L=4*(this._cubeSize-C);Zs(t,E,L,3*C,2*C),l.setRenderTarget(t),l.render(d,ma)}}function vv(i){const e=[],t=[],n=[];let r=i;const s=i-yr+1+uu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-yr?l=uu[a-i+yr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,v=6,y=3,g=2,m=1,D=new Float32Array(y*v*_),T=new Float32Array(g*v*_),C=new Float32Array(m*v*_);for(let L=0;L<_;L++){const w=L%3*2/3-1,N=L>2?0:-1,M=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];D.set(M,y*v*L),T.set(f,g*v*L);const A=[L,L,L,L,L,L];C.set(A,m*v*L)}const E=new Sn;E.setAttribute("position",new Bn(D,y)),E.setAttribute("uv",new Bn(T,g)),E.setAttribute("faceIndex",new Bn(C,m)),e.push(E),r>yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pu(i,e,t){const n=new zi(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function xv(i,e,t){const n=new Float32Array(Ii),r=new F(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function mu(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function gu(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}function yv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ra||l===Ca,h=l===wr||l===Rr;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new fu(i)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(u&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new fu(i));const f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Sv(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const _=d.morphAttributes;for(const v in _){const y=_[v];for(let g=0,m=y.length;g<m;g++)e.update(y[g],i.ARRAY_BUFFER)}}function u(d){const f=[],_=d.index,v=d.attributes.position;let y=0;if(_!==null){const D=_.array;y=_.version;for(let T=0,C=D.length;T<C;T+=3){const E=D[T+0],L=D[T+1],w=D[T+2];f.push(E,L,L,w,w,E)}}else if(v!==void 0){const D=v.array;y=v.version;for(let T=0,C=D.length/3-1;T<C;T+=3){const E=T+0,L=T+1,w=T+2;f.push(E,L,L,w,w,E)}}else return;const g=new(uh(f)?_h:gh)(f,1);g.version=y;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function h(d){const f=s.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ev(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function u(f){o=f.type,l=f.bytesPerElement}function h(f,_){i.drawElements(s,_,o,f*l),t.update(_,s,1)}function d(f,_,v){if(v===0)return;let y,g;if(r)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,_,o,f*l,v),t.update(_,s,v)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=d}function bv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Tv(i,e){return i[0]-e[0]}function Av(i,e){return Math.abs(e[1])-Math.abs(i[1])}function wv(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Ht,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,h,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==y){let $=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",$)};var _=$;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let M=0;T===!0&&(M=1),C===!0&&(M=2),E===!0&&(M=3);let A=h.attributes.position.count*M,V=1;A>e.maxTextureSize&&(V=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Q=new Float32Array(A*V*4*y),H=new fh(Q,A,V,y);H.type=mi,H.needsUpdate=!0;const Y=M*4;for(let re=0;re<y;re++){const k=L[re],U=w[re],se=N[re],ie=A*V*4*re;for(let q=0;q<k.count;q++){const ee=q*Y;T===!0&&(a.fromBufferAttribute(k,q),Q[ie+ee+0]=a.x,Q[ie+ee+1]=a.y,Q[ie+ee+2]=a.z,Q[ie+ee+3]=0),C===!0&&(a.fromBufferAttribute(U,q),Q[ie+ee+4]=a.x,Q[ie+ee+5]=a.y,Q[ie+ee+6]=a.z,Q[ie+ee+7]=0),E===!0&&(a.fromBufferAttribute(se,q),Q[ie+ee+8]=a.x,Q[ie+ee+9]=a.y,Q[ie+ee+10]=a.z,Q[ie+ee+11]=se.itemSize===4?a.w:1)}}g={count:y,texture:H,size:new Re(A,V)},s.set(h,g),h.addEventListener("dispose",$)}let m=0;for(let T=0;T<f.length;T++)m+=f[T];const D=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",D),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const v=f===void 0?0:f.length;let y=n[h.id];if(y===void 0||y.length!==v){y=[];for(let C=0;C<v;C++)y[C]=[C,0];n[h.id]=y}for(let C=0;C<v;C++){const E=y[C];E[0]=C,E[1]=f[C]}y.sort(Av);for(let C=0;C<8;C++)C<v&&y[C][1]?(o[C][0]=y[C][0],o[C][1]=y[C][1]):(o[C][0]=Number.MAX_SAFE_INTEGER,o[C][1]=0);o.sort(Tv);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let D=0;for(let C=0;C<8;C++){const E=o[C],L=E[0],w=E[1];L!==Number.MAX_SAFE_INTEGER&&w?(g&&h.getAttribute("morphTarget"+C)!==g[L]&&h.setAttribute("morphTarget"+C,g[L]),m&&h.getAttribute("morphNormal"+C)!==m[L]&&h.setAttribute("morphNormal"+C,m[L]),r[C]=w,D+=w):(g&&h.hasAttribute("morphTarget"+C)===!0&&h.deleteAttribute("morphTarget"+C),m&&h.hasAttribute("morphNormal"+C)===!0&&h.deleteAttribute("morphNormal"+C),r[C]=0)}const T=h.morphTargetsRelative?1:1-D;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Rv(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Eh=new on,bh=new fh,Th=new pm,Ah=new yh,_u=[],vu=[],xu=new Float32Array(16),yu=new Float32Array(9),Mu=new Float32Array(4);function Ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=_u[r];if(s===void 0&&(s=new Float32Array(r),_u[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function go(i,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Mu.set(n),i.uniformMatrix2fv(this.addr,!1,Mu),Ot(t,n)}}function Iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;yu.set(n),i.uniformMatrix3fv(this.addr,!1,yu),Ot(t,n)}}function Nv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;xu.set(n),i.uniformMatrix4fv(this.addr,!1,xu),Ot(t,n)}}function Ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Wv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Eh,r)}function Xv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Th,r)}function qv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ah,r)}function jv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bh,r)}function Yv(i){switch(i){case 5126:return Cv;case 35664:return Lv;case 35665:return Pv;case 35666:return Dv;case 35674:return Uv;case 35675:return Iv;case 35676:return Nv;case 5124:case 35670:return Ov;case 35667:case 35671:return Fv;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return kv;case 36295:return Gv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return jv}}function $v(i,e){i.uniform1fv(this.addr,e)}function Kv(i,e){const t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Zv(i,e){const t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Jv(i,e){const t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Qv(i,e){const t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e0(i,e){const t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t0(i,e){const t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n0(i,e){i.uniform1iv(this.addr,e)}function i0(i,e){i.uniform2iv(this.addr,e)}function r0(i,e){i.uniform3iv(this.addr,e)}function s0(i,e){i.uniform4iv(this.addr,e)}function o0(i,e){i.uniform1uiv(this.addr,e)}function a0(i,e){i.uniform2uiv(this.addr,e)}function c0(i,e){i.uniform3uiv(this.addr,e)}function l0(i,e){i.uniform4uiv(this.addr,e)}function u0(i,e,t){const n=this.cache,r=e.length,s=go(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Eh,s[a])}function h0(i,e,t){const n=this.cache,r=e.length,s=go(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Th,s[a])}function d0(i,e,t){const n=this.cache,r=e.length,s=go(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ah,s[a])}function f0(i,e,t){const n=this.cache,r=e.length,s=go(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bh,s[a])}function p0(i){switch(i){case 5126:return $v;case 35664:return Kv;case 35665:return Zv;case 35666:return Jv;case 35674:return Qv;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return o0;case 36294:return a0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}class m0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Yv(t.type)}}class g0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=p0(t.type)}}class _0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Su(i,e){i.seq.push(e),i.map[e.id]=e}function v0(i,e,t){const n=i.name,r=n.length;for(_a.lastIndex=0;;){const s=_a.exec(n),a=_a.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Su(t,u===void 0?new m0(o,i,e):new g0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new _0(o),Su(t,d)),t=d}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);v0(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Eu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let x0=0;function y0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function M0(i){switch(i){case zn:return["Linear","( value )"];case Et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function bu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+y0(i.getShaderSource(e),a)}else return r}function S0(i,e){const t=M0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function E0(i,e){let t;switch(e){case mp:t="Linear";break;case gp:t="Reinhard";break;case _p:t="OptimizedCineon";break;case vp:t="ACESFilmic";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function b0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function T0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xr(i){return i!==""}function Tu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(w0,C0)}const R0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function C0(i,e){let t=Je[e];if(t===void 0){const n=R0.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(L0,P0)}function P0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ru(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function U0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wr:case Rr:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function N0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case fp:e="ENVMAP_BLENDING_MIX";break;case pp:e="ENVMAP_BLENDING_ADD";break}return e}function O0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function F0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=D0(t),u=U0(t),h=I0(t),d=N0(t),f=O0(t),_=t.isWebGL2?"":b0(t),v=T0(s),y=r.createProgram();let g,m,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xr).join(`
`),g.length>0&&(g+=`
`),m=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),m=[_,Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Je.tonemapping_pars_fragment:"",t.toneMapping!==_i?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Ia(a),a=Tu(a,t),a=Au(a,t),o=Ia(o),o=Tu(o,t),o=Au(o,t),a=wu(a),o=wu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=D+g+a,C=D+m+o,E=Eu(r,r.VERTEX_SHADER,T),L=Eu(r,r.FRAGMENT_SHADER,C);if(r.attachShader(y,E),r.attachShader(y,L),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),A=r.getShaderInfoLog(E).trim(),V=r.getShaderInfoLog(L).trim();let Q=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,E,L);else{const Y=bu(r,E,"vertex"),$=bu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+Y+`
`+$)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||V==="")&&(H=!1);H&&(this.diagnostics={runnable:Q,programLog:M,vertexShader:{log:A,prefix:g},fragmentShader:{log:V,prefix:m}})}r.deleteShader(E),r.deleteShader(L);let w;this.getUniforms=function(){return w===void 0&&(w=new no(r,y)),w};let N;return this.getAttributes=function(){return N===void 0&&(N=A0(r,y)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=L,this}let B0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new H0(e),t.set(e,n)),n}}class H0{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}}function k0(i,e,t,n,r,s,a){const o=new ph,l=new z0,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function g(M,A,V,Q,H){const Y=Q.fog,$=H.geometry,re=M.isMeshStandardMaterial?Q.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||re),U=k&&k.mapping===ho?k.image.height:null,se=v[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const ie=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,q=ie!==void 0?ie.length:0;let ee=0;$.morphAttributes.position!==void 0&&(ee=1),$.morphAttributes.normal!==void 0&&(ee=2),$.morphAttributes.color!==void 0&&(ee=3);let ve,_e,Te,ce;if(se){const gt=Fn[se];ve=gt.vertexShader,_e=gt.fragmentShader}else ve=M.vertexShader,_e=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const Ue=i.getRenderTarget(),De=H.isInstancedMesh===!0,rt=!!M.map,Ut=!!M.matcap,He=!!k,W=!!M.aoMap,yt=!!M.lightMap,Le=!!M.bumpMap,Ge=!!M.normalMap,Be=!!M.displacementMap,mt=!!M.emissiveMap,$e=!!M.metalnessMap,Ve=!!M.roughnessMap,st=M.anisotropy>0,Rt=M.clearcoat>0,bt=M.iridescence>0,P=M.sheen>0,b=M.transmission>0,j=st&&!!M.anisotropyMap,ue=Rt&&!!M.clearcoatMap,le=Rt&&!!M.clearcoatNormalMap,de=Rt&&!!M.clearcoatRoughnessMap,Ce=bt&&!!M.iridescenceMap,fe=bt&&!!M.iridescenceThicknessMap,Z=P&&!!M.sheenColorMap,I=P&&!!M.sheenRoughnessMap,oe=!!M.specularMap,Se=!!M.specularColorMap,me=!!M.specularIntensityMap,Me=b&&!!M.transmissionMap,ze=b&&!!M.thicknessMap,Ke=!!M.gradientMap,O=!!M.alphaMap,xe=M.alphaTest>0,J=!!M.alphaHash,he=!!M.extensions,pe=!!$.attributes.uv1,Qe=!!$.attributes.uv2,it=!!$.attributes.uv3;let at=_i;return M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(at=i.toneMapping),{isWebGL2:h,shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ve,fragmentShader:_e,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,instancing:De,instancingColor:De&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:zn,map:rt,matcap:Ut,envMap:He,envMapMode:He&&k.mapping,envMapCubeUVHeight:U,aoMap:W,lightMap:yt,bumpMap:Le,normalMap:Ge,displacementMap:f&&Be,emissiveMap:mt,normalMapObjectSpace:Ge&&M.normalMapType===Up,normalMapTangentSpace:Ge&&M.normalMapType===Dp,metalnessMap:$e,roughnessMap:Ve,anisotropy:st,anisotropyMap:j,clearcoat:Rt,clearcoatMap:ue,clearcoatNormalMap:le,clearcoatRoughnessMap:de,iridescence:bt,iridescenceMap:Ce,iridescenceThicknessMap:fe,sheen:P,sheenColorMap:Z,sheenRoughnessMap:I,specularMap:oe,specularColorMap:Se,specularIntensityMap:me,transmission:b,transmissionMap:Me,thicknessMap:ze,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Sr,alphaMap:O,alphaTest:xe,alphaHash:J,combine:M.combine,mapUv:rt&&y(M.map.channel),aoMapUv:W&&y(M.aoMap.channel),lightMapUv:yt&&y(M.lightMap.channel),bumpMapUv:Le&&y(M.bumpMap.channel),normalMapUv:Ge&&y(M.normalMap.channel),displacementMapUv:Be&&y(M.displacementMap.channel),emissiveMapUv:mt&&y(M.emissiveMap.channel),metalnessMapUv:$e&&y(M.metalnessMap.channel),roughnessMapUv:Ve&&y(M.roughnessMap.channel),anisotropyMapUv:j&&y(M.anisotropyMap.channel),clearcoatMapUv:ue&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:I&&y(M.sheenRoughnessMap.channel),specularMapUv:oe&&y(M.specularMap.channel),specularColorMapUv:Se&&y(M.specularColorMap.channel),specularIntensityMapUv:me&&y(M.specularIntensityMap.channel),transmissionMapUv:Me&&y(M.transmissionMap.channel),thicknessMapUv:ze&&y(M.thicknessMap.channel),alphaMapUv:O&&y(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||st),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:Qe,vertexUv3s:it,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(rt||O),fog:!!Y,useFog:M.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,useLegacyLights:i._useLegacyLights,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&M.map.colorSpace===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jn,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)A.push(V),A.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(D(A,M),T(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function D(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function T(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function C(M){const A=v[M.type];let V;if(A){const Q=Fn[A];V=wm.clone(Q.uniforms)}else V=M.uniforms;return V}function E(M,A){let V;for(let Q=0,H=u.length;Q<H;Q++){const Y=u[Q];if(Y.cacheKey===A){V=Y,++V.usedTimes;break}}return V===void 0&&(V=new F0(i,A,M,s),u.push(V)),V}function L(M){if(--M.usedTimes===0){const A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:C,acquireProgram:E,releaseProgram:L,releaseShaderCache:w,programs:u,dispose:N}}function G0(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function V0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,_,v,y,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=_,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=y,m.group=g),e++,m}function o(d,f,_,v,y,g){const m=a(d,f,_,v,y,g);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):t.push(m)}function l(d,f,_,v,y,g){const m=a(d,f,_,v,y,g);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,f){t.length>1&&t.sort(d||V0),n.length>1&&n.sort(f||Cu),r.length>1&&r.sort(f||Cu)}function h(){for(let d=e,f=i.length;d<f;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function W0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Lu,i.set(n,[a])):r>=s.length?(a=new Lu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function X0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new dt};break;case"SpotLight":t={position:new F,direction:new F,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function q0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j0=0;function Y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $0(i,e){const t=new X0,n=q0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new F);const s=new F,a=new Lt,o=new Lt;function l(h,d){let f=0,_=0,v=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let y=0,g=0,m=0,D=0,T=0,C=0,E=0,L=0,w=0,N=0;h.sort(Y0);const M=d===!0?Math.PI:1;for(let V=0,Q=h.length;V<Q;V++){const H=h[V],Y=H.color,$=H.intensity,re=H.distance,k=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=Y.r*$*M,_+=Y.g*$*M,v+=Y.b*$*M;else if(H.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(H.sh.coefficients[U],$);else if(H.isDirectionalLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity*M),H.castShadow){const se=H.shadow,ie=n.get(H);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=k,r.directionalShadowMatrix[y]=H.shadow.matrix,C++}r.directional[y]=U,y++}else if(H.isSpotLight){const U=t.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(Y).multiplyScalar($*M),U.distance=re,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,r.spot[m]=U;const se=H.shadow;if(H.map&&(r.spotLightMap[w]=H.map,w++,se.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[m]=se.matrix,H.castShadow){const ie=n.get(H);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,r.spotShadow[m]=ie,r.spotShadowMap[m]=k,L++}m++}else if(H.isRectAreaLight){const U=t.get(H);U.color.copy(Y).multiplyScalar($),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),r.rectArea[D]=U,D++}else if(H.isPointLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity*M),U.distance=H.distance,U.decay=H.decay,H.castShadow){const se=H.shadow,ie=n.get(H);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,ie.shadowCameraNear=se.camera.near,ie.shadowCameraFar=se.camera.far,r.pointShadow[g]=ie,r.pointShadowMap[g]=k,r.pointShadowMatrix[g]=H.shadow.matrix,E++}r.point[g]=U,g++}else if(H.isHemisphereLight){const U=t.get(H);U.skyColor.copy(H.color).multiplyScalar($*M),U.groundColor.copy(H.groundColor).multiplyScalar($*M),r.hemi[T]=U,T++}}D>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==y||A.pointLength!==g||A.spotLength!==m||A.rectAreaLength!==D||A.hemiLength!==T||A.numDirectionalShadows!==C||A.numPointShadows!==E||A.numSpotShadows!==L||A.numSpotMaps!==w)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=D,r.point.length=g,r.hemi.length=T,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=L+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,A.directionalLength=y,A.pointLength=g,A.spotLength=m,A.rectAreaLength=D,A.hemiLength=T,A.numDirectionalShadows=C,A.numPointShadows=E,A.numSpotShadows=L,A.numSpotMaps=w,r.version=j0++)}function u(h,d){let f=0,_=0,v=0,y=0,g=0;const m=d.matrixWorldInverse;for(let D=0,T=h.length;D<T;D++){const C=h[D];if(C.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(C.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),v++}else if(C.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(C.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(C.isPointLight){const E=r.point[_];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),_++}else if(C.isHemisphereLight){const E=r.hemi[g];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:l,setupView:u,state:r}}function Pu(i,e){const t=new $0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(d){n.push(d)}function o(d){r.push(d)}function l(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function K0(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Pu(i,e),t.set(s,[l])):a>=o.length?(l=new Pu(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Z0 extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J0 extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function tx(i,e,t){let n=new Ha;const r=new Re,s=new Re,a=new Ht,o=new Z0({depthPacking:Pp}),l=new J0,u={},h=t.maxTextureSize,d={[xi]:sn,[sn]:xi,[Jn]:Jn},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Q0,fragmentShader:ex}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new Sn;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let m=this.type;this.render=function(E,L,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const N=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),V=i.state;V.setBlending(gi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=m!==Kn&&this.type===Kn,H=m===Kn&&this.type!==Kn;for(let Y=0,$=E.length;Y<$;Y++){const re=E[Y],k=re.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const U=k.getFrameExtents();if(r.multiply(U),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,k.mapSize.y=s.y)),k.map===null||Q===!0||H===!0){const ie=this.type!==Kn?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new zi(r.x,r.y,ie),k.map.texture.name=re.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const se=k.getViewportCount();for(let ie=0;ie<se;ie++){const q=k.getViewport(ie);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),V.viewport(a),k.updateMatrices(re,ie),n=k.getFrustum(),C(L,w,k.camera,re,this.type)}k.isPointLightShadow!==!0&&this.type===Kn&&D(k,w),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(N,M,A)};function D(E,L){const w=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,_.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(L,null,w,f,y,null),_.uniforms.shadow_pass.value=E.mapPass.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(L,null,w,_,y,null)}function T(E,L,w,N){let M=null;const A=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=w.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const V=M.uuid,Q=L.uuid;let H=u[V];H===void 0&&(H={},u[V]=H);let Y=H[Q];Y===void 0&&(Y=M.clone(),H[Q]=Y),M=Y}if(M.visible=L.visible,M.wireframe=L.wireframe,N===Kn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=w}return M}function C(E,L,w,N,M){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),H=E.material;if(Array.isArray(H)){const Y=Q.groups;for(let $=0,re=Y.length;$<re;$++){const k=Y[$],U=H[k.materialIndex];if(U&&U.visible){const se=T(E,U,N,M);i.renderBufferDirect(w,null,Q,se,E,k)}}}else if(H.visible){const Y=T(E,H,N,M);i.renderBufferDirect(w,null,Q,Y,E,null)}}const V=E.children;for(let Q=0,H=V.length;Q<H;Q++)C(V[Q],L,w,N,M)}}function nx(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const xe=new Ht;let J=null;const he=new Ht(0,0,0,0);return{setMask:function(pe){J!==pe&&!O&&(i.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){O=pe},setClear:function(pe,Qe,it,at,$t){$t===!0&&(pe*=at,Qe*=at,it*=at),xe.set(pe,Qe,it,at),he.equals(xe)===!1&&(i.clearColor(pe,Qe,it,at),he.copy(xe))},reset:function(){O=!1,J=null,he.set(-1,0,0,0)}}}function s(){let O=!1,xe=null,J=null,he=null;return{setTest:function(pe){pe?Ue(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(pe){xe!==pe&&!O&&(i.depthMask(pe),xe=pe)},setFunc:function(pe){if(J!==pe){switch(pe){case op:i.depthFunc(i.NEVER);break;case ap:i.depthFunc(i.ALWAYS);break;case cp:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case lp:i.depthFunc(i.EQUAL);break;case up:i.depthFunc(i.GEQUAL);break;case hp:i.depthFunc(i.GREATER);break;case dp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pe}},setLocked:function(pe){O=pe},setClear:function(pe){he!==pe&&(i.clearDepth(pe),he=pe)},reset:function(){O=!1,xe=null,J=null,he=null}}}function a(){let O=!1,xe=null,J=null,he=null,pe=null,Qe=null,it=null,at=null,$t=null;return{setTest:function(gt){O||(gt?Ue(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(gt){xe!==gt&&!O&&(i.stencilMask(gt),xe=gt)},setFunc:function(gt,hn,kt){(J!==gt||he!==hn||pe!==kt)&&(i.stencilFunc(gt,hn,kt),J=gt,he=hn,pe=kt)},setOp:function(gt,hn,kt){(Qe!==gt||it!==hn||at!==kt)&&(i.stencilOp(gt,hn,kt),Qe=gt,it=hn,at=kt)},setLocked:function(gt){O=gt},setClear:function(gt){$t!==gt&&(i.clearStencil(gt),$t=gt)},reset:function(){O=!1,xe=null,J=null,he=null,pe=null,Qe=null,it=null,at=null,$t=null}}}const o=new r,l=new s,u=new a,h=new WeakMap,d=new WeakMap;let f={},_={},v=new WeakMap,y=[],g=null,m=!1,D=null,T=null,C=null,E=null,L=null,w=null,N=null,M=!1,A=null,V=null,Q=null,H=null,Y=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,k=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(U)[1]),re=k>=1):U.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),re=k>=2);let se=null,ie={};const q=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ve=new Ht().fromArray(q),_e=new Ht().fromArray(ee);function Te(O,xe,J,he){const pe=new Uint8Array(4),Qe=i.createTexture();i.bindTexture(O,Qe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<J;it++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(xe,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(xe+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Qe}const ce={};ce[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(i.DEPTH_TEST),l.setFunc(wa),Be(!1),mt(ml),Ue(i.CULL_FACE),Le(gi);function Ue(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function De(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function rt(O,xe){return _[O]!==xe?(i.bindFramebuffer(O,xe),_[O]=xe,n&&(O===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=xe),O===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=xe)),!0):!1}function Ut(O,xe){let J=y,he=!1;if(O)if(J=v.get(xe),J===void 0&&(J=[],v.set(xe,J)),O.isWebGLMultipleRenderTargets){const pe=O.texture;if(J.length!==pe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Qe=0,it=pe.length;Qe<it;Qe++)J[Qe]=i.COLOR_ATTACHMENT0+Qe;J.length=pe.length,he=!0}}else J[0]!==i.COLOR_ATTACHMENT0&&(J[0]=i.COLOR_ATTACHMENT0,he=!0);else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function He(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const W={[_r]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Kf]:i.FUNC_REVERSE_SUBTRACT};if(n)W[xl]=i.MIN,W[yl]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(W[xl]=O.MIN_EXT,W[yl]=O.MAX_EXT)}const yt={[Zf]:i.ZERO,[Jf]:i.ONE,[Qf]:i.SRC_COLOR,[Qu]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[ip]:i.DST_COLOR,[tp]:i.DST_ALPHA,[ep]:i.ONE_MINUS_SRC_COLOR,[eh]:i.ONE_MINUS_SRC_ALPHA,[rp]:i.ONE_MINUS_DST_COLOR,[np]:i.ONE_MINUS_DST_ALPHA};function Le(O,xe,J,he,pe,Qe,it,at){if(O===gi){m===!0&&(De(i.BLEND),m=!1);return}if(m===!1&&(Ue(i.BLEND),m=!0),O!==Yf){if(O!==D||at!==M){if((T!==_r||L!==_r)&&(i.blendEquation(i.FUNC_ADD),T=_r,L=_r),at)switch(O){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}C=null,E=null,w=null,N=null,D=O,M=at}return}pe=pe||xe,Qe=Qe||J,it=it||he,(xe!==T||pe!==L)&&(i.blendEquationSeparate(W[xe],W[pe]),T=xe,L=pe),(J!==C||he!==E||Qe!==w||it!==N)&&(i.blendFuncSeparate(yt[J],yt[he],yt[Qe],yt[it]),C=J,E=he,w=Qe,N=it),D=O,M=!1}function Ge(O,xe){O.side===Jn?De(i.CULL_FACE):Ue(i.CULL_FACE);let J=O.side===sn;xe&&(J=!J),Be(J),O.blending===Sr&&O.transparent===!1?Le(gi):Le(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const he=O.stencilWrite;u.setTest(he),he&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(O){A!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),A=O)}function mt(O){O!==Xf?(Ue(i.CULL_FACE),O!==V&&(O===ml?i.cullFace(i.BACK):O===qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),V=O}function $e(O){O!==Q&&(re&&i.lineWidth(O),Q=O)}function Ve(O,xe,J){O?(Ue(i.POLYGON_OFFSET_FILL),(H!==xe||Y!==J)&&(i.polygonOffset(xe,J),H=xe,Y=J)):De(i.POLYGON_OFFSET_FILL)}function st(O){O?Ue(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function Rt(O){O===void 0&&(O=i.TEXTURE0+$-1),se!==O&&(i.activeTexture(O),se=O)}function bt(O,xe,J){J===void 0&&(se===null?J=i.TEXTURE0+$-1:J=se);let he=ie[J];he===void 0&&(he={type:void 0,texture:void 0},ie[J]=he),(he.type!==O||he.texture!==xe)&&(se!==J&&(i.activeTexture(J),se=J),i.bindTexture(O,xe||ce[O]),he.type=O,he.texture=xe)}function P(){const O=ie[se];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){ve.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ve.copy(O))}function me(O){_e.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),_e.copy(O))}function Me(O,xe){let J=d.get(xe);J===void 0&&(J=new WeakMap,d.set(xe,J));let he=J.get(O);he===void 0&&(he=i.getUniformBlockIndex(xe,O.name),J.set(O,he))}function ze(O,xe){const he=d.get(xe).get(O);h.get(xe)!==he&&(i.uniformBlockBinding(xe,he,O.__bindingPointIndex),h.set(xe,he))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},se=null,ie={},_={},v=new WeakMap,y=[],g=null,m=!1,D=null,T=null,C=null,E=null,L=null,w=null,N=null,M=!1,A=null,V=null,Q=null,H=null,Y=null,ve.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ue,disable:De,bindFramebuffer:rt,drawBuffers:Ut,useProgram:He,setBlending:Le,setMaterial:Ge,setFlipSided:Be,setCullFace:mt,setLineWidth:$e,setPolygonOffset:Ve,setScissorTest:st,activeTexture:Rt,bindTexture:bt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:I,texImage3D:oe,updateUBOMapping:Me,uniformBlockBinding:ze,texStorage2D:fe,texStorage3D:Z,texSubImage2D:ue,texSubImage3D:le,compressedTexSubImage2D:de,compressedTexSubImage3D:Ce,scissor:Se,viewport:me,reset:Ke}}function ix(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let y;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,b){return m?new OffscreenCanvas(P,b):uo("canvas")}function T(P,b,j,ue){let le=1;if((P.width>ue||P.height>ue)&&(le=ue/Math.max(P.width,P.height)),le<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=b?lo:Math.floor,Ce=de(le*P.width),fe=de(le*P.height);y===void 0&&(y=D(Ce,fe));const Z=j?D(Ce,fe):y;return Z.width=Ce,Z.height=fe,Z.getContext("2d").drawImage(P,0,0,Ce,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ce+"x"+fe+")."),Z}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function C(P){return Ua(P.width)&&Ua(P.height)}function E(P){return o?!1:P.wrapS!==Pn||P.wrapT!==Pn||P.minFilter!==nn&&P.minFilter!==yn}function L(P,b){return P.generateMipmaps&&b&&P.minFilter!==nn&&P.minFilter!==yn}function w(P){i.generateMipmap(P)}function N(P,b,j,ue,le=!1){if(o===!1)return b;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=b;return b===i.RED&&(j===i.FLOAT&&(de=i.R32F),j===i.HALF_FLOAT&&(de=i.R16F),j===i.UNSIGNED_BYTE&&(de=i.R8)),b===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(de=i.R8UI),j===i.UNSIGNED_SHORT&&(de=i.R16UI),j===i.UNSIGNED_INT&&(de=i.R32UI),j===i.BYTE&&(de=i.R8I),j===i.SHORT&&(de=i.R16I),j===i.INT&&(de=i.R32I)),b===i.RG&&(j===i.FLOAT&&(de=i.RG32F),j===i.HALF_FLOAT&&(de=i.RG16F),j===i.UNSIGNED_BYTE&&(de=i.RG8)),b===i.RGBA&&(j===i.FLOAT&&(de=i.RGBA32F),j===i.HALF_FLOAT&&(de=i.RGBA16F),j===i.UNSIGNED_BYTE&&(de=ue===Et&&le===!1?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)),(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function M(P,b,j){return L(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){return P===nn||P===Ml||P===Xo?i.NEAREST:i.LINEAR}function V(P){const b=P.target;b.removeEventListener("dispose",V),H(b),b.isVideoTexture&&v.delete(b)}function Q(P){const b=P.target;b.removeEventListener("dispose",Q),$(b)}function H(P){const b=n.get(P);if(b.__webglInit===void 0)return;const j=P.source,ue=g.get(j);if(ue){const le=ue[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&Y(P),Object.keys(ue).length===0&&g.delete(j)}n.remove(P)}function Y(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const j=P.source,ue=g.get(j);delete ue[b.__cacheKey],a.memory.textures--}function $(P){const b=P.texture,j=n.get(P),ue=n.get(b);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(j.__webglFramebuffer[le]))for(let de=0;de<j.__webglFramebuffer[le].length;de++)i.deleteFramebuffer(j.__webglFramebuffer[le][de]);else i.deleteFramebuffer(j.__webglFramebuffer[le]);j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[le])}else{if(Array.isArray(j.__webglFramebuffer))for(let le=0;le<j.__webglFramebuffer.length;le++)i.deleteFramebuffer(j.__webglFramebuffer[le]);else i.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let le=0;le<j.__webglColorRenderbuffer.length;le++)j.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[le]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let le=0,de=b.length;le<de;le++){const Ce=n.get(b[le]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(b[le])}n.remove(b),n.remove(P)}let re=0;function k(){re=0}function U(){const P=re;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),re+=1,P}function se(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ie(P,b){const j=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ue=P.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(j,P,b);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+b)}function q(P,b){const j=n.get(P);if(P.version>0&&j.__version!==P.version){rt(j,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+b)}function ee(P,b){const j=n.get(P);if(P.version>0&&j.__version!==P.version){rt(j,P,b);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+b)}function ve(P,b){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Ut(j,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+b)}const _e={[La]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},Te={[nn]:i.NEAREST,[Ml]:i.NEAREST_MIPMAP_NEAREST,[Xo]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[yp]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},ce={[Np]:i.NEVER,[Gp]:i.ALWAYS,[Op]:i.LESS,[Bp]:i.LEQUAL,[Fp]:i.EQUAL,[kp]:i.GEQUAL,[zp]:i.GREATER,[Hp]:i.NOTEQUAL};function Ue(P,b,j){if(j?(i.texParameteri(P,i.TEXTURE_WRAP_S,_e[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,_e[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,_e[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Te[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Te[b.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Pn||b.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,A(b.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==nn&&b.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===nn||b.minFilter!==Xo&&b.minFilter!==is||b.type===mi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===rs&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(P,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function De(P,b){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",V));const ue=b.source;let le=g.get(ue);le===void 0&&(le={},g.set(ue,le));const de=se(b);if(de!==P.__cacheKey){le[de]===void 0&&(le[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),le[de].usedTimes++;const Ce=le[P.__cacheKey];Ce!==void 0&&(le[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&Y(b)),P.__cacheKey=de,P.__webglTexture=le[de].texture}return j}function rt(P,b,j){let ue=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=i.TEXTURE_3D);const le=De(P,b),de=b.source;t.bindTexture(ue,P.__webglTexture,i.TEXTURE0+j);const Ce=n.get(de);if(de.version!==Ce.__version||le===!0){t.activeTexture(i.TEXTURE0+j),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=E(b)&&C(b.image)===!1;let Z=T(b.image,fe,!1,h);Z=bt(b,Z);const I=C(Z)||o,oe=s.convert(b.format,b.colorSpace);let Se=s.convert(b.type),me=N(b.internalFormat,oe,Se,b.colorSpace,b.isVideoTexture);Ue(ue,b,I);let Me;const ze=b.mipmaps,Ke=o&&b.isVideoTexture!==!0,O=Ce.__version===void 0||le===!0,xe=M(b,Z,I);if(b.isDepthTexture)me=i.DEPTH_COMPONENT,o?b.type===mi?me=i.DEPTH_COMPONENT32F:b.type===pi?me=i.DEPTH_COMPONENT24:b.type===Ni?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:b.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Oi&&me===i.DEPTH_COMPONENT&&b.type!==Fa&&b.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=pi,Se=s.convert(b.type)),b.format===Cr&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ni,Se=s.convert(b.type))),O&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,me,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,me,Z.width,Z.height,0,oe,Se,null));else if(b.isDataTexture)if(ze.length>0&&I){Ke&&O&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],Ke?t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,oe,Se,Me.data):t.texImage2D(i.TEXTURE_2D,J,me,Me.width,Me.height,0,oe,Se,Me.data);b.generateMipmaps=!1}else Ke?(O&&t.texStorage2D(i.TEXTURE_2D,xe,me,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,oe,Se,Z.data)):t.texImage2D(i.TEXTURE_2D,0,me,Z.width,Z.height,0,oe,Se,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,ze[0].width,ze[0].height,Z.depth);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],b.format!==Dn?oe!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,Z.depth,oe,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,me,Me.width,Me.height,Z.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,Z.depth,oe,Se,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,me,Me.width,Me.height,Z.depth,0,oe,Se,Me.data)}else{Ke&&O&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],b.format!==Dn?oe!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,oe,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,J,me,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,oe,Se,Me.data):t.texImage2D(i.TEXTURE_2D,J,me,Me.width,Me.height,0,oe,Se,Me.data)}else if(b.isDataArrayTexture)Ke?(O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,Se,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Z.width,Z.height,Z.depth,0,oe,Se,Z.data);else if(b.isData3DTexture)Ke?(O&&t.texStorage3D(i.TEXTURE_3D,xe,me,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,Se,Z.data)):t.texImage3D(i.TEXTURE_3D,0,me,Z.width,Z.height,Z.depth,0,oe,Se,Z.data);else if(b.isFramebufferTexture){if(O)if(Ke)t.texStorage2D(i.TEXTURE_2D,xe,me,Z.width,Z.height);else{let J=Z.width,he=Z.height;for(let pe=0;pe<xe;pe++)t.texImage2D(i.TEXTURE_2D,pe,me,J,he,0,oe,Se,null),J>>=1,he>>=1}}else if(ze.length>0&&I){Ke&&O&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Me=ze[J],Ke?t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe,Se,Me):t.texImage2D(i.TEXTURE_2D,J,me,oe,Se,Me);b.generateMipmaps=!1}else Ke?(O&&t.texStorage2D(i.TEXTURE_2D,xe,me,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Se,Z)):t.texImage2D(i.TEXTURE_2D,0,me,oe,Se,Z);L(b,I)&&w(ue),Ce.__version=de.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ut(P,b,j){if(b.image.length!==6)return;const ue=De(P,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+j);const de=n.get(le);if(le.version!==de.__version||ue===!0){t.activeTexture(i.TEXTURE0+j),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,Z=[];for(let J=0;J<6;J++)!Ce&&!fe?Z[J]=T(b.image[J],!1,!0,u):Z[J]=fe?b.image[J].image:b.image[J],Z[J]=bt(b,Z[J]);const I=Z[0],oe=C(I)||o,Se=s.convert(b.format,b.colorSpace),me=s.convert(b.type),Me=N(b.internalFormat,Se,me,b.colorSpace),ze=o&&b.isVideoTexture!==!0,Ke=de.__version===void 0||ue===!0;let O=M(b,I,oe);Ue(i.TEXTURE_CUBE_MAP,b,oe);let xe;if(Ce){ze&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,O,Me,I.width,I.height);for(let J=0;J<6;J++){xe=Z[J].mipmaps;for(let he=0;he<xe.length;he++){const pe=xe[he];b.format!==Dn?Se!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,pe.width,pe.height,Se,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,pe.width,pe.height,Se,me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Me,pe.width,pe.height,0,Se,me,pe.data)}}}else{xe=b.mipmaps,ze&&Ke&&(xe.length>0&&O++,t.texStorage2D(i.TEXTURE_CUBE_MAP,O,Me,Z[0].width,Z[0].height));for(let J=0;J<6;J++)if(fe){ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Z[J].width,Z[J].height,Se,me,Z[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Me,Z[J].width,Z[J].height,0,Se,me,Z[J].data);for(let he=0;he<xe.length;he++){const Qe=xe[he].image[J].image;ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Qe.width,Qe.height,Se,me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Me,Qe.width,Qe.height,0,Se,me,Qe.data)}}else{ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se,me,Z[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Me,Se,me,Z[J]);for(let he=0;he<xe.length;he++){const pe=xe[he];ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Se,me,pe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Me,Se,me,pe.image[J])}}}L(b,oe)&&w(i.TEXTURE_CUBE_MAP),de.__version=le.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function He(P,b,j,ue,le,de){const Ce=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),Z=N(j.internalFormat,Ce,fe,j.colorSpace);if(!n.get(b).__hasExternalTextures){const oe=Math.max(1,b.width>>de),Se=Math.max(1,b.height>>de);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,de,Z,oe,Se,b.depth,0,Ce,fe,null):t.texImage2D(le,de,Z,oe,Se,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),st(b)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,le,n.get(j).__webglTexture,0,Ve(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,le,n.get(j).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(P,b,j){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let ue=i.DEPTH_COMPONENT16;if(j||st(b)){const le=b.depthTexture;le&&le.isDepthTexture&&(le.type===mi?ue=i.DEPTH_COMPONENT32F:le.type===pi&&(ue=i.DEPTH_COMPONENT24));const de=Ve(b);st(b)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,ue,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ue,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const ue=Ve(b);j&&st(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,b.width,b.height):st(b)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const ue=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let le=0;le<ue.length;le++){const de=ue[le],Ce=s.convert(de.format,de.colorSpace),fe=s.convert(de.type),Z=N(de.internalFormat,Ce,fe,de.colorSpace),I=Ve(b);j&&st(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,I,Z,b.width,b.height):st(b)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie(b.depthTexture,0);const ue=n.get(b.depthTexture).__webglTexture,le=Ve(b);if(b.depthTexture.format===Oi)st(b)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(b.depthTexture.format===Cr)st(b)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Le(P){const b=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");yt(b.__webglFramebuffer,P)}else if(j){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]=i.createRenderbuffer(),W(b.__webglDepthbuffer[ue],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),W(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(P,b,j){const ue=n.get(P);b!==void 0&&He(ue.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Le(P)}function Be(P){const b=P.texture,j=n.get(P),ue=n.get(b);P.addEventListener("dispose",Q),P.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=b.version,a.memory.textures++);const le=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Ce=C(P)||o;if(le){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let Z=0;Z<b.mipmaps.length;Z++)j.__webglFramebuffer[fe][Z]=i.createFramebuffer()}else j.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)j.__webglFramebuffer[fe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(de)if(r.drawBuffers){const fe=P.texture;for(let Z=0,I=fe.length;Z<I;Z++){const oe=n.get(fe[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&st(P)===!1){const fe=de?b:[b];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Z=0;Z<fe.length;Z++){const I=fe[Z];j.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Z]);const oe=s.convert(I.format,I.colorSpace),Se=s.convert(I.type),me=N(I.internalFormat,oe,Se,I.colorSpace,P.isXRRenderTarget===!0),Me=Ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,j.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),W(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,b,Ce);for(let fe=0;fe<6;fe++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)He(j.__webglFramebuffer[fe][Z],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Z);else He(j.__webglFramebuffer[fe],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);L(b,Ce)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const fe=P.texture;for(let Z=0,I=fe.length;Z<I;Z++){const oe=fe[Z],Se=n.get(oe);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),Ue(i.TEXTURE_2D,oe,Ce),He(j.__webglFramebuffer,P,oe,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,0),L(oe,Ce)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?fe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ue.__webglTexture),Ue(fe,b,Ce),o&&b.mipmaps&&b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)He(j.__webglFramebuffer[Z],P,b,i.COLOR_ATTACHMENT0,fe,Z);else He(j.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,fe,0);L(b,Ce)&&w(fe),t.unbindTexture()}P.depthBuffer&&Le(P)}function mt(P){const b=C(P)||o,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ue=0,le=j.length;ue<le;ue++){const de=j[ue];if(L(de,b)){const Ce=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(de).__webglTexture;t.bindTexture(Ce,fe),w(Ce),t.unbindTexture()}}}function $e(P){if(o&&P.samples>0&&st(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,ue=P.height;let le=i.COLOR_BUFFER_BIT;const de=[],Ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(P),Z=P.isWebGLMultipleRenderTargets===!0;if(Z)for(let I=0;I<b.length;I++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let I=0;I<b.length;I++){de.push(i.COLOR_ATTACHMENT0+I),P.depthBuffer&&de.push(Ce);const oe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(oe===!1&&(P.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[I]),oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ce]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ce])),Z){const Se=n.get(b[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,j,ue,0,0,j,ue,le,i.NEAREST),_&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let I=0;I<b.length;I++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,fe.__webglColorRenderbuffer[I]);const oe=n.get(b[I]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ve(P){return Math.min(d,P.samples)}function st(P){const b=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(P){const b=a.render.frame;v.get(P)!==b&&(v.set(P,b),P.update())}function bt(P,b){const j=P.colorSpace,ue=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Da||j!==zn&&j!==Bi&&(j===Et||j===fo?o===!1?e.has("EXT_sRGB")===!0&&ue===Dn?(P.format=Da,P.minFilter=yn,P.generateMipmaps=!1):b=hh.sRGBToLinear(b):(ue!==Dn||le!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=ve,this.rebindTextures=Ge,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=He,this.useMultisampledRTT=st}const rx=0,It=1;function sx(i,e,t){const n=t.isWebGL2;function r(s,a=Bi){let o;const l=a===Et||a===fo?It:rx;if(s===vi)return i.UNSIGNED_BYTE;if(s===rh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===sh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Mp)return i.BYTE;if(s===Sp)return i.SHORT;if(s===Fa)return i.UNSIGNED_SHORT;if(s===ih)return i.INT;if(s===pi)return i.UNSIGNED_INT;if(s===mi)return i.FLOAT;if(s===rs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ep)return i.ALPHA;if(s===Dn)return i.RGBA;if(s===bp)return i.LUMINANCE;if(s===Tp)return i.LUMINANCE_ALPHA;if(s===Oi)return i.DEPTH_COMPONENT;if(s===Cr)return i.DEPTH_STENCIL;if(s===Da)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ap)return i.RED;if(s===oh)return i.RED_INTEGER;if(s===wp)return i.RG;if(s===ah)return i.RG_INTEGER;if(s===ch)return i.RGBA_INTEGER;if(s===qo||s===jo||s===Yo||s===$o)if(l===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sl||s===El||s===bl||s===Tl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Sl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===El)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Tl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Al||s===wl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Al)return l===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===wl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rl||s===Cl||s===Ll||s===Pl||s===Dl||s===Ul||s===Il||s===Nl||s===Ol||s===Fl||s===Bl||s===zl||s===Hl||s===kl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Rl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ll)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ul)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Il)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ol)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ko||s===Gl||s===Vl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ko)return l===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cp||s===Wl||s===Xl||s===ql)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ql)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ni?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ox extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qr extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ax={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),m=this._getHandJoint(u,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,v=.005;u.inputState.pinching&&f>_+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=_-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cx extends on{constructor(e,t,n,r,s,a,o,l,u,h){if(h=h!==void 0?h:Oi,h!==Oi&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=pi),n===void 0&&h===Cr&&(n=Ni),super(null,r,s,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lx extends Gi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,d=null,f=null,_=null,v=null;const y=t.getContextAttributes();let g=null,m=null;const D=[],T=[],C=new Mn;C.layers.enable(1),C.viewport=new Ht;const E=new Mn;E.layers.enable(2),E.viewport=new Ht;const L=[C,E],w=new ox;w.layers.enable(1),w.layers.enable(2);let N=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=D[q];return ee===void 0&&(ee=new va,D[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=D[q];return ee===void 0&&(ee=new va,D[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=D[q];return ee===void 0&&(ee=new va,D[q]=ee),ee.getHandSpace()};function A(q){const ee=T.indexOf(q.inputSource);if(ee===-1)return;const ve=D[ee];ve!==void 0&&(ve.update(q.inputSource,q.frame,u||a),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Q);for(let q=0;q<D.length;q++){const ee=T[q];ee!==null&&(T[q]=null,D[q].disconnect(ee))}N=null,M=null,e.setRenderTarget(g),_=null,f=null,d=null,r=null,m=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:_}),m=new zi(_.framebufferWidth,_.framebufferHeight,{format:Dn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,ve=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?Cr:Oi,ve=y.stencil?Ni:pi);const Te={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),m=new zi(f.textureWidth,f.textureHeight,{format:Dn,type:vi,depthTexture:new cx(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ce=e.properties.get(m);ce.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(q){for(let ee=0;ee<q.removed.length;ee++){const ve=q.removed[ee],_e=T.indexOf(ve);_e>=0&&(T[_e]=null,D[_e].disconnect(ve))}for(let ee=0;ee<q.added.length;ee++){const ve=q.added[ee];let _e=T.indexOf(ve);if(_e===-1){for(let ce=0;ce<D.length;ce++)if(ce>=T.length){T.push(ve),_e=ce;break}else if(T[ce]===null){T[ce]=ve,_e=ce;break}if(_e===-1)break}const Te=D[_e];Te&&Te.connect(ve)}}const H=new F,Y=new F;function $(q,ee,ve){H.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const _e=H.distanceTo(Y),Te=ee.projectionMatrix.elements,ce=ve.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),De=Te[14]/(Te[10]+1),rt=(Te[9]+1)/Te[5],Ut=(Te[9]-1)/Te[5],He=(Te[8]-1)/Te[0],W=(ce[8]+1)/ce[0],yt=Ue*He,Le=Ue*W,Ge=_e/(-He+W),Be=Ge*-He;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(Ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const mt=Ue+Ge,$e=De+Ge,Ve=yt-Be,st=Le+(_e-Be),Rt=rt*De/$e*mt,bt=Ut*De/$e*mt;q.projectionMatrix.makePerspective(Ve,st,Rt,bt,mt,$e),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function re(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;w.near=E.near=C.near=q.near,w.far=E.far=C.far=q.far,(N!==w.near||M!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,M=w.far);const ee=q.parent,ve=w.cameras;re(w,ee);for(let _e=0;_e<ve.length;_e++)re(ve[_e],ee);ve.length===2?$(w,C,E):w.projectionMatrix.copy(C.projectionMatrix),k(q,w,ee)};function k(q,ee,ve){ve===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)};let U=null;function se(q,ee){if(h=ee.getViewerPose(u||a),v=ee,h!==null){const ve=h.views;_!==null&&(e.setRenderTargetFramebuffer(m,_.framebuffer),e.setRenderTarget(m));let _e=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,_e=!0);for(let Te=0;Te<ve.length;Te++){const ce=ve[Te];let Ue=null;if(_!==null)Ue=_.getViewport(ce);else{const rt=d.getViewSubImage(f,ce);Ue=rt.viewport,Te===0&&(e.setRenderTargetTextures(m,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(m))}let De=L[Te];De===void 0&&(De=new Mn,De.layers.enable(Te),De.viewport=new Ht,L[Te]=De),De.matrix.fromArray(ce.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ce.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Te===0&&(w.matrix.copy(De.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),_e===!0&&w.cameras.push(De)}}for(let ve=0;ve<D.length;ve++){const _e=T[ve],Te=D[ve];_e!==null&&Te!==void 0&&Te.update(_e,ee,u||a)}U&&U(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const ie=new Mh;ie.setAnimationLoop(se),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}function ux(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,vh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,D,T,C){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&_(g,m,C)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,D,T):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const D=e.get(m).envMap;if(D&&(g.envMap.value=D,g.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const T=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*T,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,D,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*D,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,D){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){const D=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(D,T){const C=T.program;n.uniformBlockBinding(D,C)}function u(D,T){let C=r[D.id];C===void 0&&(v(D),C=h(D),r[D.id]=C,D.addEventListener("dispose",g));const E=T.program;n.updateUBOMapping(D,E);const L=e.render.frame;s[D.id]!==L&&(f(D),s[D.id]=L)}function h(D){const T=d();D.__bindingPointIndex=T;const C=i.createBuffer(),E=D.__size,L=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,E,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,C),C}function d(){for(let D=0;D<o;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(D){const T=r[D.id],C=D.uniforms,E=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let L=0,w=C.length;L<w;L++){const N=C[L];if(_(N,L,E)===!0){const M=N.__offset,A=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let Q=0;Q<A.length;Q++){const H=A[Q],Y=y(H);typeof H=="number"?(N.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,M+V,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=H.elements[0],N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=H.elements[0],N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=H.elements[0]):(H.toArray(N.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,N.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(D,T,C){const E=D.value;if(C[T]===void 0){if(typeof E=="number")C[T]=E;else{const L=Array.isArray(E)?E:[E],w=[];for(let N=0;N<L.length;N++)w.push(L[N].clone());C[T]=w}return!0}else if(typeof E=="number"){if(C[T]!==E)return C[T]=E,!0}else{const L=Array.isArray(C[T])?C[T]:[C[T]],w=Array.isArray(E)?E:[E];for(let N=0;N<L.length;N++){const M=L[N];if(M.equals(w[N])===!1)return M.copy(w[N]),!0}}return!1}function v(D){const T=D.uniforms;let C=0;const E=16;let L=0;for(let w=0,N=T.length;w<N;w++){const M=T[w],A={boundary:0,storage:0},V=Array.isArray(M.value)?M.value:[M.value];for(let Q=0,H=V.length;Q<H;Q++){const Y=V[Q],$=y(Y);A.boundary+=$.boundary,A.storage+=$.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=C,w>0){L=C%E;const Q=E-L;L!==0&&Q-A.boundary<0&&(C+=E-L,M.__offset=C)}C+=A.storage}return L=C%E,L>0&&(C+=E-L),D.__size=C,D.__cache={},this}function y(D){const T={boundary:0,storage:0};return typeof D=="number"?(T.boundary=4,T.storage=4):D.isVector2?(T.boundary=8,T.storage=8):D.isVector3||D.isColor?(T.boundary=16,T.storage=12):D.isVector4?(T.boundary=16,T.storage=16):D.isMatrix3?(T.boundary=48,T.storage=48):D.isMatrix4?(T.boundary=64,T.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),T}function g(D){const T=D.target;T.removeEventListener("dispose",g);const C=a.indexOf(T.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const D in r)i.deleteBuffer(r[D]);a=[],r={},s={}}return{bind:l,update:u,dispose:m}}class wh{constructor(e={}){const{canvas:t=rm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const _=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const m=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const T=this;let C=!1,E=0,L=0,w=null,N=-1,M=null;const A=new Ht,V=new Ht;let Q=null;const H=new dt(0);let Y=0,$=t.width,re=t.height,k=1,U=null,se=null;const ie=new Ht(0,0,$,re),q=new Ht(0,0,$,re);let ee=!1;const ve=new Ha;let _e=!1,Te=!1,ce=null;const Ue=new Lt,De=new Re,rt=new F,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return w===null?k:1}let W=n;function yt(R,G){for(let K=0;K<R.length;K++){const X=R[K],ne=t.getContext(X,G);if(ne!==null)return ne}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oa}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",he,!1),W===null){const G=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&G.shift(),W=yt(G,R),W===null)throw yt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Le,Ge,Be,mt,$e,Ve,st,Rt,bt,P,b,j,ue,le,de,Ce,fe,Z,I,oe,Se,me,Me,ze;function Ke(){Le=new Mv(W),Ge=new mv(W,Le,e),Le.init(Ge),me=new sx(W,Le,Ge),Be=new nx(W,Le,Ge),mt=new bv(W),$e=new G0,Ve=new ix(W,Le,Be,$e,Ge,me,mt),st=new _v(T),Rt=new yv(T),bt=new Im(W,Ge),Me=new fv(W,Le,bt,Ge),P=new Sv(W,bt,mt,Me),b=new Rv(W,P,bt,mt),I=new wv(W,Ge,Ve),Ce=new gv($e),j=new k0(T,st,Rt,Le,Ge,Me,Ce),ue=new ux(T,$e),le=new W0,de=new K0(Le,Ge),Z=new dv(T,st,Rt,Be,b,f,l),fe=new tx(T,b,Ge),ze=new hx(W,mt,Ge,Be),oe=new pv(W,Le,mt,Ge),Se=new Ev(W,Le,mt,Ge),mt.programs=j.programs,T.capabilities=Ge,T.extensions=Le,T.properties=$e,T.renderLists=le,T.shadowMap=fe,T.state=Be,T.info=mt}Ke();const O=new lx(T,W);this.xr=O,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize($,re,!1))},this.getSize=function(R){return R.set($,re)},this.setSize=function(R,G,K=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,re=G,t.width=Math.floor(R*k),t.height=Math.floor(G*k),K===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set($*k,re*k).floor()},this.setDrawingBufferSize=function(R,G,K){$=R,re=G,k=K,t.width=Math.floor(R*K),t.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,G,K,X){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,G,K,X),Be.viewport(A.copy(ie).multiplyScalar(k).floor())},this.getScissor=function(R){return R.copy(q)},this.setScissor=function(R,G,K,X){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,G,K,X),Be.scissor(V.copy(q).multiplyScalar(k).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){Be.setScissorTest(ee=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(R=!0,G=!0,K=!0){let X=0;if(R){let ne=!1;if(w!==null){const be=w.texture.format;ne=be===ch||be===ah||be===oh}if(ne){const be=w.texture.type,Pe=be===vi||be===pi||be===Fa||be===Ni||be===rh||be===sh,Fe=Z.getClearColor(),Ie=Z.getClearAlpha(),We=Fe.r,Ne=Fe.g,Xe=Fe.b;Pe?(_[0]=We,_[1]=Ne,_[2]=Xe,_[3]=Ie,W.clearBufferuiv(W.COLOR,0,_)):(v[0]=We,v[1]=Ne,v[2]=Xe,v[3]=Ie,W.clearBufferiv(W.COLOR,0,v))}else X|=W.COLOR_BUFFER_BIT}G&&(X|=W.DEPTH_BUFFER_BIT),K&&(X|=W.STENCIL_BUFFER_BIT),W.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",he,!1),le.dispose(),de.dispose(),$e.dispose(),st.dispose(),Rt.dispose(),b.dispose(),Me.dispose(),ze.dispose(),j.dispose(),O.dispose(),O.removeEventListener("sessionstart",gt),O.removeEventListener("sessionend",hn),ce&&(ce.dispose(),ce=null),kt.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=mt.autoReset,G=fe.enabled,K=fe.autoUpdate,X=fe.needsUpdate,ne=fe.type;Ke(),mt.autoReset=R,fe.enabled=G,fe.autoUpdate=K,fe.needsUpdate=X,fe.type=ne}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const G=R.target;G.removeEventListener("dispose",pe),Qe(G)}function Qe(R){it(R),$e.remove(R)}function it(R){const G=$e.get(R).programs;G!==void 0&&(G.forEach(function(K){j.releaseProgram(K)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,X,ne,be){G===null&&(G=Ut);const Pe=ne.isMesh&&ne.matrixWorld.determinant()<0,Fe=_o(R,G,K,X,ne);Be.setMaterial(X,Pe);let Ie=K.index,We=1;if(X.wireframe===!0){if(Ie=P.getWireframeAttribute(K),Ie===void 0)return;We=2}const Ne=K.drawRange,Xe=K.attributes.position;let vt=Ne.start*We,Mt=(Ne.start+Ne.count)*We;be!==null&&(vt=Math.max(vt,be.start*We),Mt=Math.min(Mt,(be.start+be.count)*We)),Ie!==null?(vt=Math.max(vt,0),Mt=Math.min(Mt,Ie.count)):Xe!=null&&(vt=Math.max(vt,0),Mt=Math.min(Mt,Xe.count));const Kt=Mt-vt;if(Kt<0||Kt===1/0)return;Me.setup(ne,X,Fe,K,Ie);let dn,Tt=oe;if(Ie!==null&&(dn=bt.get(Ie),Tt=Se,Tt.setIndex(dn)),ne.isMesh)X.wireframe===!0?(Be.setLineWidth(X.wireframeLinewidth*He()),Tt.setMode(W.LINES)):Tt.setMode(W.TRIANGLES);else if(ne.isLine){let et=X.linewidth;et===void 0&&(et=1),Be.setLineWidth(et*He()),ne.isLineSegments?Tt.setMode(W.LINES):ne.isLineLoop?Tt.setMode(W.LINE_LOOP):Tt.setMode(W.LINE_STRIP)}else ne.isPoints?Tt.setMode(W.POINTS):ne.isSprite&&Tt.setMode(W.TRIANGLES);if(ne.isInstancedMesh)Tt.renderInstances(vt,Kt,ne.count);else if(K.isInstancedBufferGeometry){const et=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Wi=Math.min(K.instanceCount,et);Tt.renderInstances(vt,Kt,Wi)}else Tt.render(vt,Kt)},this.compile=function(R,G){function K(X,ne,be){X.transparent===!0&&X.side===Jn&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,ni(X,ne,be),X.side=xi,X.needsUpdate=!0,ni(X,ne,be),X.side=Jn):ni(X,ne,be)}g=de.get(R),g.init(),D.push(g),R.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(T._useLegacyLights),R.traverse(function(X){const ne=X.material;if(ne)if(Array.isArray(ne))for(let be=0;be<ne.length;be++){const Pe=ne[be];K(Pe,R,X)}else K(ne,R,X)}),D.pop(),g=null};let at=null;function $t(R){at&&at(R)}function gt(){kt.stop()}function hn(){kt.start()}const kt=new Mh;kt.setAnimationLoop($t),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(R){at=R,O.setAnimationLoop(R),R===null?kt.stop():kt.start()},O.addEventListener("sessionstart",gt),O.addEventListener("sessionend",hn),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(G),G=O.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,G,w),g=de.get(R,D.length),g.init(),D.push(g),Ue.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ve.setFromProjectionMatrix(Ue),Te=this.localClippingEnabled,_e=Ce.init(this.clippingPlanes,Te),y=le.get(R,m.length),y.init(),m.push(y),ls(R,G,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(U,se),this.info.render.frame++,_e===!0&&Ce.beginShadows();const K=g.state.shadowsArray;if(fe.render(K,R,G),_e===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(y,R),g.setupLights(T._useLegacyLights),G.isArrayCamera){const X=G.cameras;for(let ne=0,be=X.length;ne<be;ne++){const Pe=X[ne];Vi(y,R,Pe,Pe.viewport)}}else Vi(y,R,G);w!==null&&(Ve.updateMultisampleRenderTarget(w),Ve.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(T,R,G),Me.resetDefaultState(),N=-1,M=null,D.pop(),D.length>0?g=D[D.length-1]:g=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function ls(R,G,K,X){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ve.intersectsSprite(R)){X&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const Pe=b.update(R),Fe=R.material;Fe.visible&&y.push(R,Pe,Fe,K,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ve.intersectsObject(R))){const Pe=b.update(R),Fe=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),rt.copy(Pe.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(Fe)){const Ie=Pe.groups;for(let We=0,Ne=Ie.length;We<Ne;We++){const Xe=Ie[We],vt=Fe[Xe.materialIndex];vt&&vt.visible&&y.push(R,Pe,vt,K,rt.z,Xe)}}else Fe.visible&&y.push(R,Pe,Fe,K,rt.z,null)}}const be=R.children;for(let Pe=0,Fe=be.length;Pe<Fe;Pe++)ls(be[Pe],G,K,X)}function Vi(R,G,K,X){const ne=R.opaque,be=R.transmissive,Pe=R.transparent;g.setupLightsView(K),_e===!0&&Ce.setGlobalState(T.clippingPlanes,K),be.length>0&&ti(ne,be,G,K),X&&Be.viewport(A.copy(X)),ne.length>0&&Hn(ne,G,K),be.length>0&&Hn(be,G,K),Pe.length>0&&Hn(Pe,G,K),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ti(R,G,K,X){const ne=Ge.isWebGL2;ce===null&&(ce=new zi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?rs:vi,minFilter:is,samples:ne?4:0})),T.getDrawingBufferSize(De),ne?ce.setSize(De.x,De.y):ce.setSize(lo(De.x),lo(De.y));const be=T.getRenderTarget();T.setRenderTarget(ce),T.getClearColor(H),Y=T.getClearAlpha(),Y<1&&T.setClearColor(16777215,.5),T.clear();const Pe=T.toneMapping;T.toneMapping=_i,Hn(R,K,X),Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce);let Fe=!1;for(let Ie=0,We=G.length;Ie<We;Ie++){const Ne=G[Ie],Xe=Ne.object,vt=Ne.geometry,Mt=Ne.material,Kt=Ne.group;if(Mt.side===Jn&&Xe.layers.test(X.layers)){const dn=Mt.side;Mt.side=sn,Mt.needsUpdate=!0,us(Xe,K,X,vt,Mt,Kt),Mt.side=dn,Mt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce)),T.setRenderTarget(be),T.setClearColor(H,Y),T.toneMapping=Pe}function Hn(R,G,K){const X=G.isScene===!0?G.overrideMaterial:null;for(let ne=0,be=R.length;ne<be;ne++){const Pe=R[ne],Fe=Pe.object,Ie=Pe.geometry,We=X===null?Pe.material:X,Ne=Pe.group;Fe.layers.test(K.layers)&&us(Fe,G,K,Ie,We,Ne)}}function us(R,G,K,X,ne,be){R.onBeforeRender(T,G,K,X,ne,be),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(T,G,K,X,R,be),ne.transparent===!0&&ne.side===Jn&&ne.forceSinglePass===!1?(ne.side=sn,ne.needsUpdate=!0,T.renderBufferDirect(K,G,X,ne,R,be),ne.side=xi,ne.needsUpdate=!0,T.renderBufferDirect(K,G,X,ne,R,be),ne.side=Jn):T.renderBufferDirect(K,G,X,ne,R,be),R.onAfterRender(T,G,K,X,ne,be)}function ni(R,G,K){G.isScene!==!0&&(G=Ut);const X=$e.get(R),ne=g.state.lights,be=g.state.shadowsArray,Pe=ne.state.version,Fe=j.getParameters(R,ne.state,be,G,K),Ie=j.getProgramCacheKey(Fe);let We=X.programs;X.environment=R.isMeshStandardMaterial?G.environment:null,X.fog=G.fog,X.envMap=(R.isMeshStandardMaterial?Rt:st).get(R.envMap||X.environment),We===void 0&&(R.addEventListener("dispose",pe),We=new Map,X.programs=We);let Ne=We.get(Ie);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===Pe)return hs(R,Fe),Ne}else Fe.uniforms=j.getUniforms(R),R.onBuild(K,Fe,T),R.onBeforeCompile(Fe,T),Ne=j.acquireProgram(Fe,Ie),We.set(Ie,Ne),X.uniforms=Fe.uniforms;const Xe=X.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ce.uniform),hs(R,Fe),X.needsLights=Gt(R),X.lightsStateVersion=Pe,X.needsLights&&(Xe.ambientLightColor.value=ne.state.ambient,Xe.lightProbe.value=ne.state.probe,Xe.directionalLights.value=ne.state.directional,Xe.directionalLightShadows.value=ne.state.directionalShadow,Xe.spotLights.value=ne.state.spot,Xe.spotLightShadows.value=ne.state.spotShadow,Xe.rectAreaLights.value=ne.state.rectArea,Xe.ltc_1.value=ne.state.rectAreaLTC1,Xe.ltc_2.value=ne.state.rectAreaLTC2,Xe.pointLights.value=ne.state.point,Xe.pointLightShadows.value=ne.state.pointShadow,Xe.hemisphereLights.value=ne.state.hemi,Xe.directionalShadowMap.value=ne.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Xe.spotShadowMap.value=ne.state.spotShadowMap,Xe.spotLightMatrix.value=ne.state.spotLightMatrix,Xe.spotLightMap.value=ne.state.spotLightMap,Xe.pointShadowMap.value=ne.state.pointShadowMap,Xe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const vt=Ne.getUniforms(),Mt=no.seqWithValue(vt.seq,Xe);return X.currentProgram=Ne,X.uniformsList=Mt,Ne}function hs(R,G){const K=$e.get(R);K.outputColorSpace=G.outputColorSpace,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function _o(R,G,K,X,ne){G.isScene!==!0&&(G=Ut),Ve.resetTextureUnits();const be=G.fog,Pe=X.isMeshStandardMaterial?G.environment:null,Fe=w===null?T.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zn,Ie=(X.isMeshStandardMaterial?Rt:st).get(X.envMap||Pe),We=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xe=!!K.morphAttributes.position,vt=!!K.morphAttributes.normal,Mt=!!K.morphAttributes.color;let Kt=_i;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Kt=T.toneMapping);const dn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=dn!==void 0?dn.length:0,et=$e.get(X),Wi=g.state.lights;if(_e===!0&&(Te===!0||R!==M)){const Vt=R===M&&X.id===N;Ce.setState(X,R,Vt)}let At=!1;X.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Wi.state.version||et.outputColorSpace!==Fe||ne.isInstancedMesh&&et.instancing===!1||!ne.isInstancedMesh&&et.instancing===!0||ne.isSkinnedMesh&&et.skinning===!1||!ne.isSkinnedMesh&&et.skinning===!0||ne.isInstancedMesh&&et.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&et.instancingColor===!1&&ne.instanceColor!==null||et.envMap!==Ie||X.fog===!0&&et.fog!==be||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ce.numPlanes||et.numIntersection!==Ce.numIntersection)||et.vertexAlphas!==We||et.vertexTangents!==Ne||et.morphTargets!==Xe||et.morphNormals!==vt||et.morphColors!==Mt||et.toneMapping!==Kt||Ge.isWebGL2===!0&&et.morphTargetsCount!==Tt)&&(At=!0):(At=!0,et.__version=X.version);let Un=et.currentProgram;At===!0&&(Un=ni(X,G,ne));let Ir=!1,ri=!1,rn=!1;const lt=Un.getUniforms(),Zt=et.uniforms;if(Be.useProgram(Un.program)&&(Ir=!0,ri=!0,rn=!0),X.id!==N&&(N=X.id,ri=!0),Ir||M!==R){lt.setValue(W,"projectionMatrix",R.projectionMatrix),lt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Vt=lt.map.cameraPosition;Vt!==void 0&&Vt.setValue(W,rt.setFromMatrixPosition(R.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,ri=!0,rn=!0)}if(ne.isSkinnedMesh){lt.setOptional(W,ne,"bindMatrix"),lt.setOptional(W,ne,"bindMatrixInverse");const Vt=ne.skeleton;Vt&&(Ge.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),lt.setValue(W,"boneTexture",Vt.boneTexture,Ve),lt.setValue(W,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qt=K.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0&&Ge.isWebGL2===!0)&&I.update(ne,K,Un),(ri||et.receiveShadow!==ne.receiveShadow)&&(et.receiveShadow=ne.receiveShadow,lt.setValue(W,"receiveShadow",ne.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Zt.envMap.value=Ie,Zt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ri&&(lt.setValue(W,"toneMappingExposure",T.toneMappingExposure),et.needsLights&&ii(Zt,rn),be&&X.fog===!0&&ue.refreshFogUniforms(Zt,be),ue.refreshMaterialUniforms(Zt,X,k,re,ce),no.upload(W,et.uniformsList,Zt,Ve)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(no.upload(W,et.uniformsList,Zt,Ve),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(W,"center",ne.center),lt.setValue(W,"modelViewMatrix",ne.modelViewMatrix),lt.setValue(W,"normalMatrix",ne.normalMatrix),lt.setValue(W,"modelMatrix",ne.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Vt=X.uniformsGroups;for(let yi=0,fn=Vt.length;yi<fn;yi++)if(Ge.isWebGL2){const In=Vt[yi];ze.update(In,Un),ze.bind(In,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function ii(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Gt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,G,K){$e.get(R.texture).__webglTexture=G,$e.get(R.depthTexture).__webglTexture=K;const X=$e.get(R);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=K===void 0,X.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const K=$e.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){w=R,E=G,L=K;let X=!0,ne=null,be=!1,Pe=!1;if(R){const Ie=$e.get(R);Ie.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(W.FRAMEBUFFER,null),X=!1):Ie.__webglFramebuffer===void 0?Ve.setupRenderTarget(R):Ie.__hasExternalTextures&&Ve.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Ne=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[G])?ne=Ne[G][K]:ne=Ne[G],be=!0):Ge.isWebGL2&&R.samples>0&&Ve.useMultisampledRTT(R)===!1?ne=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?ne=Ne[K]:ne=Ne,A.copy(R.viewport),V.copy(R.scissor),Q=R.scissorTest}else A.copy(ie).multiplyScalar(k).floor(),V.copy(q).multiplyScalar(k).floor(),Q=ee;if(Be.bindFramebuffer(W.FRAMEBUFFER,ne)&&Ge.drawBuffers&&X&&Be.drawBuffers(R,ne),Be.viewport(A),Be.scissor(V),Be.setScissorTest(Q),be){const Ie=$e.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,K)}else if(Pe){const Ie=$e.get(R.texture),We=G||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ie.__webglTexture,K||0,We)}N=-1},this.readRenderTargetPixels=function(R,G,K,X,ne,be,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Be.bindFramebuffer(W.FRAMEBUFFER,Fe);try{const Ie=R.texture,We=Ie.format,Ne=Ie.type;if(We!==Dn&&me.convert(We)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ne===rs&&(Le.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ne!==vi&&me.convert(Ne)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===mi&&(Ge.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-X&&K>=0&&K<=R.height-ne&&W.readPixels(G,K,X,ne,me.convert(We),me.convert(Ne),be)}finally{const Ie=w!==null?$e.get(w).__webglFramebuffer:null;Be.bindFramebuffer(W.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(R,G,K=0){const X=Math.pow(2,-K),ne=Math.floor(G.image.width*X),be=Math.floor(G.image.height*X);Ve.setTexture2D(G,0),W.copyTexSubImage2D(W.TEXTURE_2D,K,0,0,R.x,R.y,ne,be),Be.unbindTexture()},this.copyTextureToTexture=function(R,G,K,X=0){const ne=G.image.width,be=G.image.height,Pe=me.convert(K.format),Fe=me.convert(K.type);Ve.setTexture2D(K,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,R.x,R.y,ne,be,Pe,Fe,G.image.data):G.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Pe,G.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,X,R.x,R.y,Pe,Fe,G.image),X===0&&K.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K,X,ne=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=R.max.x-R.min.x+1,Pe=R.max.y-R.min.y+1,Fe=R.max.z-R.min.z+1,Ie=me.convert(X.format),We=me.convert(X.type);let Ne;if(X.isData3DTexture)Ve.setTexture3D(X,0),Ne=W.TEXTURE_3D;else if(X.isDataArrayTexture)Ve.setTexture2DArray(X,0),Ne=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const Xe=W.getParameter(W.UNPACK_ROW_LENGTH),vt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Mt=W.getParameter(W.UNPACK_SKIP_PIXELS),Kt=W.getParameter(W.UNPACK_SKIP_ROWS),dn=W.getParameter(W.UNPACK_SKIP_IMAGES),Tt=K.isCompressedTexture?K.mipmaps[0]:K.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Tt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?W.texSubImage3D(Ne,ne,G.x,G.y,G.z,be,Pe,Fe,Ie,We,Tt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ne,ne,G.x,G.y,G.z,be,Pe,Fe,Ie,Tt.data)):W.texSubImage3D(Ne,ne,G.x,G.y,G.z,be,Pe,Fe,Ie,We,Tt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Xe),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Mt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Kt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,dn),ne===0&&X.generateMipmaps&&W.generateMipmap(Ne),Be.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ve.setTextureCube(R,0):R.isData3DTexture?Ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ve.setTexture2DArray(R,0):Ve.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){E=0,L=0,w=null,Be.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Fi:lh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fi?Et:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dx extends wh{}dx.prototype.isWebGL1Renderer=!0;class fx extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Rh extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Du=new F,Uu=new F,Iu=new Lt,xa=new za,Js=new po;class px extends Xt{constructor(e=new Sn,t=new Rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Du.fromBufferAttribute(t,r-1),Uu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Du.distanceTo(Uu);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;Iu.copy(r).invert(),xa.copy(e.ray).applyMatrix4(Iu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new F,h=new F,d=new F,f=new F,_=this.isLineSegments?2:1,v=n.index,g=n.attributes.position;if(v!==null){const m=Math.max(0,a.start),D=Math.min(v.count,a.start+a.count);for(let T=m,C=D-1;T<C;T+=_){const E=v.getX(T),L=v.getX(T+1);if(u.fromBufferAttribute(g,E),h.fromBufferAttribute(g,L),xa.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),D=Math.min(g.count,a.start+a.count);for(let T=m,C=D-1;T<C;T+=_){if(u.fromBufferAttribute(g,T),h.fromBufferAttribute(g,T+1),xa.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Nu=new F,Ou=new F;class mx extends px{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Nu.fromBufferAttribute(t,r),Ou.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Nu.distanceTo(Ou);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gx extends on{constructor(e,t,n,r,s,a,o,l,u){super(e,t,n,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],f=n[r+1]-h,_=(a-h)/f;return(r+_)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Re:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,r=[],s=[],a=[],o=new F,l=new Lt;for(let _=0;_<=e;_++){const v=_/e;r[_]=this.getTangentAt(v,new F)}s[0]=new F,a[0]=new F;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(r[_-1],r[_]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(zt(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(l.makeRotationAxis(o,v))}a[_].crossVectors(r[_],s[_])}if(t===!0){let _=Math.acos(zt(s[0].dot(s[e]),-1,1));_/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(_=-_);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],_*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ch extends ei{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Re,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,_=u-this.aY;l=f*h-_*d+this.aX,u=f*d+_*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _x extends Ch{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,u){r(a,o,u*(o-s),u*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,u,h,d){let f=(a-s)/u-(o-s)/(u+h)+(o-a)/h,_=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,_*=h,r(a,o,f,_)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Qs=new F,ya=new Va,Ma=new Va,Sa=new Va;class Lh extends ei{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new F){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,h;this.closed||o>0?u=r[(o-1)%s]:(Qs.subVectors(r[0],r[1]).add(r[0]),u=Qs);const d=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Qs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(d),_),y=Math.pow(d.distanceToSquared(f),_),g=Math.pow(f.distanceToSquared(h),_);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),ya.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,v,y,g),Ma.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,v,y,g),Sa.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,v,y,g)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),Ma.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),Sa.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(ya.calc(l),Ma.calc(l),Sa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fu(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function vx(i,e){const t=1-i;return t*t*e}function xx(i,e){return 2*(1-i)*i*e}function yx(i,e){return i*i*e}function Qr(i,e,t,n){return vx(i,e)+xx(i,t)+yx(i,n)}function Mx(i,e){const t=1-i;return t*t*t*e}function Sx(i,e){const t=1-i;return 3*t*t*i*e}function Ex(i,e){return 3*(1-i)*i*i*e}function bx(i,e){return i*i*i*e}function es(i,e,t,n,r){return Mx(i,e)+Sx(i,t)+Ex(i,n)+bx(i,r)}class Tx extends ei{constructor(e=new Re,t=new Re,n=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(es(e,r.x,s.x,a.x,o.x),es(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ax extends ei{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(es(e,r.x,s.x,a.x,o.x),es(e,r.y,s.y,a.y,o.y),es(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wx extends ei{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rx extends ei{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cx extends ei{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Qr(e,r.x,s.x,a.x),Qr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends ei{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Qr(e,r.x,s.x,a.x),Qr(e,r.y,s.y,a.y),Qr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lx extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],u=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Fu(o,l.x,u.x,h.x,d.x),Fu(o,l.y,u.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var Px=Object.freeze({__proto__:null,ArcCurve:_x,CatmullRomCurve3:Lh,CubicBezierCurve:Tx,CubicBezierCurve3:Ax,EllipseCurve:Ch,LineCurve:wx,LineCurve3:Rx,QuadraticBezierCurve:Cx,QuadraticBezierCurve3:Ph,SplineCurve:Lx});class Wa extends Sn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],_=[];let v=0;const y=[],g=n/2;let m=0;D(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(_,2));function D(){const C=new F,E=new F;let L=0;const w=(t-e)/n;for(let N=0;N<=s;N++){const M=[],A=N/s,V=A*(t-e)+e;for(let Q=0;Q<=r;Q++){const H=Q/r,Y=H*l+o,$=Math.sin(Y),re=Math.cos(Y);E.x=V*$,E.y=-A*n+g,E.z=V*re,d.push(E.x,E.y,E.z),C.set($,w,re).normalize(),f.push(C.x,C.y,C.z),_.push(H,1-A),M.push(v++)}y.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const A=y[M][N],V=y[M+1][N],Q=y[M+1][N+1],H=y[M][N+1];h.push(A,V,H),h.push(V,Q,H),L+=6}u.addGroup(m,L,0),m+=L}function T(C){const E=v,L=new Re,w=new F;let N=0;const M=C===!0?e:t,A=C===!0?1:-1;for(let Q=1;Q<=r;Q++)d.push(0,g*A,0),f.push(0,A,0),_.push(.5,.5),v++;const V=v;for(let Q=0;Q<=r;Q++){const Y=Q/r*l+o,$=Math.cos(Y),re=Math.sin(Y);w.x=M*re,w.y=g*A,w.z=M*$,d.push(w.x,w.y,w.z),f.push(0,A,0),L.x=$*.5+.5,L.y=re*.5*A+.5,_.push(L.x,L.y),v++}for(let Q=0;Q<r;Q++){const H=E+Q,Y=V+Q;C===!0?h.push(Y,Y+1,H):h.push(Y+1,Y,H),N+=3}u.addGroup(m,N,C===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mr extends Wa{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ts extends Sn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],u=[],h=new F,d=new F,f=new F;for(let _=0;_<=n;_++)for(let v=0;v<=r;v++){const y=v/r*s,g=_/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),u.push(v/r),u.push(_/n)}for(let _=1;_<=n;_++)for(let v=1;v<=r;v++){const y=(r+1)*_+v-1,g=(r+1)*(_-1)+v-1,m=(r+1)*(_-1)+v,D=(r+1)*_+v;a.push(y,g,D),a.push(g,m,D)}this.setIndex(a),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xa extends Sn{constructor(e=new Ph(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,l=new F,u=new Re;let h=new F;const d=[],f=[],_=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(_,2));function y(){for(let T=0;T<t;T++)g(T);g(s===!1?t:0),D(),m()}function g(T){h=e.getPointAt(T/t,h);const C=a.normals[T],E=a.binormals[T];for(let L=0;L<=r;L++){const w=L/r*Math.PI*2,N=Math.sin(w),M=-Math.cos(w);l.x=M*C.x+N*E.x,l.y=M*C.y+N*E.y,l.z=M*C.z+N*E.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=t;T++)for(let C=1;C<=r;C++){const E=(r+1)*(T-1)+(C-1),L=(r+1)*T+(C-1),w=(r+1)*T+C,N=(r+1)*(T-1)+C;v.push(E,L,N),v.push(L,w,N)}}function D(){for(let T=0;T<=t;T++)for(let C=0;C<=r;C++)u.x=T/t,u.y=C/r,_.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xa(new Px[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dx extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ea=new Lt,Bu=new F,zu=new F;class Ux{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ix extends Ux{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hu extends Dx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Ix}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ku{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nx extends mx{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Sn;r.setAttribute("position",new Dt(t,3)),r.setAttribute("color",new Dt(n,3));const s=new Rh({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new dt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);const Gu={type:"change"},ba={type:"start"},Vu={type:"end"},eo=new za,Wu=new fi,Ox=Math.cos(70*im.DEG2RAD);class Fx extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",b),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gu),n.update(),s=r.NONE},this.update=function(){const I=new F,oe=new Hi().setFromUnitVectors(e.up,new F(0,1,0)),Se=oe.clone().invert(),me=new F,Me=new Hi,ze=new F,Ke=2*Math.PI;return function(xe=null){const J=n.object.position;I.copy(J).sub(n.target),I.applyQuaternion(oe),o.setFromVector3(I),n.autoRotate&&s===r.NONE&&V(M(xe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let he=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(he)&&isFinite(pe)&&(he<-Math.PI?he+=Ke:he>Math.PI&&(he-=Ke),pe<-Math.PI?pe+=Ke:pe>Math.PI&&(pe-=Ke),he<=pe?o.theta=Math.max(he,Math.min(pe,o.theta)):o.theta=o.theta>(he+pe)/2?Math.max(he,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&L||n.object.isOrthographicCamera?o.radius=se(o.radius):o.radius=se(o.radius*u),I.setFromSpherical(o),I.applyQuaternion(Se),J.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Qe=!1;if(n.zoomToCursor&&L){let it=null;if(n.object.isPerspectiveCamera){const at=I.length();it=se(at*u);const $t=at-it;n.object.position.addScaledVector(C,$t),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new F(E.x,E.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0;const $t=new F(E.x,E.y,0);$t.unproject(n.object),n.object.position.sub($t).add(at),n.object.updateMatrixWorld(),it=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(it).add(n.object.position):(eo.origin.copy(n.object.position),eo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(eo.direction))<Ox?e.lookAt(n.target):(Wu.setFromNormalAndCoplanarPoint(n.object.up,n.target),eo.intersectPlane(Wu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0);return u=1,L=!1,Qe||me.distanceToSquared(n.object.position)>a||8*(1-Me.dot(n.object.quaternion))>a||ze.distanceToSquared(n.target)>0?(n.dispatchEvent(Gu),me.copy(n.object.position),Me.copy(n.object.quaternion),ze.copy(n.target),Qe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",le),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",st),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",b),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new ku,l=new ku;let u=1;const h=new F,d=new Re,f=new Re,_=new Re,v=new Re,y=new Re,g=new Re,m=new Re,D=new Re,T=new Re,C=new F,E=new Re;let L=!1;const w=[],N={};function M(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function V(I){l.theta-=I}function Q(I){l.phi-=I}const H=function(){const I=new F;return function(Se,me){I.setFromMatrixColumn(me,0),I.multiplyScalar(-Se),h.add(I)}}(),Y=function(){const I=new F;return function(Se,me){n.screenSpacePanning===!0?I.setFromMatrixColumn(me,1):(I.setFromMatrixColumn(me,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(Se),h.add(I)}}(),$=function(){const I=new F;return function(Se,me){const Me=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;I.copy(ze).sub(n.target);let Ke=I.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),H(2*Se*Ke/Me.clientHeight,n.object.matrix),Y(2*me*Ke/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(Se*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),Y(me*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function re(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(I){if(!n.zoomToCursor)return;L=!0;const oe=n.domElement.getBoundingClientRect(),Se=I.clientX-oe.left,me=I.clientY-oe.top,Me=oe.width,ze=oe.height;E.x=Se/Me*2-1,E.y=-(me/ze)*2+1,C.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function se(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function ie(I){d.set(I.clientX,I.clientY)}function q(I){U(I),m.set(I.clientX,I.clientY)}function ee(I){v.set(I.clientX,I.clientY)}function ve(I){f.set(I.clientX,I.clientY),_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;V(2*Math.PI*_.x/oe.clientHeight),Q(2*Math.PI*_.y/oe.clientHeight),d.copy(f),n.update()}function _e(I){D.set(I.clientX,I.clientY),T.subVectors(D,m),T.y>0?re(A()):T.y<0&&k(A()),m.copy(D),n.update()}function Te(I){y.set(I.clientX,I.clientY),g.subVectors(y,v).multiplyScalar(n.panSpeed),$(g.x,g.y),v.copy(y),n.update()}function ce(I){U(I),I.deltaY<0?k(A()):I.deltaY>0&&re(A()),n.update()}function Ue(I){let oe=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(-n.keyPanSpeed,0),oe=!0;break}oe&&(I.preventDefault(),n.update())}function De(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),oe=.5*(w[0].pageY+w[1].pageY);d.set(I,oe)}}function rt(){if(w.length===1)v.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),oe=.5*(w[0].pageY+w[1].pageY);v.set(I,oe)}}function Ut(){const I=w[0].pageX-w[1].pageX,oe=w[0].pageY-w[1].pageY,Se=Math.sqrt(I*I+oe*oe);m.set(0,Se)}function He(){n.enableZoom&&Ut(),n.enablePan&&rt()}function W(){n.enableZoom&&Ut(),n.enableRotate&&De()}function yt(I){if(w.length==1)f.set(I.pageX,I.pageY);else{const Se=Z(I),me=.5*(I.pageX+Se.x),Me=.5*(I.pageY+Se.y);f.set(me,Me)}_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;V(2*Math.PI*_.x/oe.clientHeight),Q(2*Math.PI*_.y/oe.clientHeight),d.copy(f)}function Le(I){if(w.length===1)y.set(I.pageX,I.pageY);else{const oe=Z(I),Se=.5*(I.pageX+oe.x),me=.5*(I.pageY+oe.y);y.set(Se,me)}g.subVectors(y,v).multiplyScalar(n.panSpeed),$(g.x,g.y),v.copy(y)}function Ge(I){const oe=Z(I),Se=I.pageX-oe.x,me=I.pageY-oe.y,Me=Math.sqrt(Se*Se+me*me);D.set(0,Me),T.set(0,Math.pow(D.y/m.y,n.zoomSpeed)),re(T.y),m.copy(D)}function Be(I){n.enableZoom&&Ge(I),n.enablePan&&Le(I)}function mt(I){n.enableZoom&&Ge(I),n.enableRotate&&yt(I)}function $e(I){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",Ve),n.domElement.addEventListener("pointerup",st)),de(I),I.pointerType==="touch"?j(I):Rt(I))}function Ve(I){n.enabled!==!1&&(I.pointerType==="touch"?ue(I):bt(I))}function st(I){Ce(I),w.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",st)),n.dispatchEvent(Vu),s=r.NONE}function Rt(I){let oe;switch(I.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Ji.DOLLY:if(n.enableZoom===!1)return;q(I),s=r.DOLLY;break;case Ji.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;ee(I),s=r.PAN}else{if(n.enableRotate===!1)return;ie(I),s=r.ROTATE}break;case Ji.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;ie(I),s=r.ROTATE}else{if(n.enablePan===!1)return;ee(I),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ba)}function bt(I){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ve(I);break;case r.DOLLY:if(n.enableZoom===!1)return;_e(I);break;case r.PAN:if(n.enablePan===!1)return;Te(I);break}}function P(I){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(I.preventDefault(),n.dispatchEvent(ba),ce(I),n.dispatchEvent(Vu))}function b(I){n.enabled===!1||n.enablePan===!1||Ue(I)}function j(I){switch(fe(I),w.length){case 1:switch(n.touches.ONE){case Qi.ROTATE:if(n.enableRotate===!1)return;De(),s=r.TOUCH_ROTATE;break;case Qi.PAN:if(n.enablePan===!1)return;rt(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(),s=r.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ba)}function ue(I){switch(fe(I),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(I),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Le(I),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(I),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(I),n.update();break;default:s=r.NONE}}function le(I){n.enabled!==!1&&I.preventDefault()}function de(I){w.push(I)}function Ce(I){delete N[I.pointerId];for(let oe=0;oe<w.length;oe++)if(w[oe].pointerId==I.pointerId){w.splice(oe,1);return}}function fe(I){let oe=N[I.pointerId];oe===void 0&&(oe=new Re,N[I.pointerId]=oe),oe.set(I.pageX,I.pageY)}function Z(I){const oe=I.pointerId===w[0].pointerId?w[1]:w[0];return N[oe.pointerId]}n.domElement.addEventListener("contextmenu",le),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const to={R:"hsl(120, 100%, 60%)",L:"hsl(240, 100%, 60%)",U:"hsl(60, 100%, 60%)",D:"hsl(120, 100%, 100%)",F:"hsl(0, 100%, 60%)",B:"hsl(23, 100%, 60%)"};let Dh=0;function Bx(i){const e=i.N,t=l=>{const[u,h,d]=l;if(u===-1)return"L";if(u===1)return"R";if(h===-1)return"D";if(h===1)return"U";if(d===-1)return"B";if(d===1)return"F";throw new Error("unreachable")},n=(l,u,h)=>{const[d,f,_]=u,v=t(h);switch(v){case"U":return[v,d,_];case"F":return[v,d,l-1-f];case"R":return[v,l-1-_,l-1-f];case"L":return[v,_,l-1-f];case"B":return[v,l-1-d,l-1-f];case"D":return[v,d,l-1-_]}},r=(l,u,h)=>{switch(t(h)){case"U":return l;case"F":return u;case"L":return ao(u,l);case"R":return ao(l,u);case"B":return u.map(d=>-d);case"D":return l.map(d=>-d)}},s=(l,u)=>{const h=[];for(let d=0;d<3;d++){const f=[0,0,0];if(u[d]===0)f[d]=-1;else if(u[d]===l-1)f[d]=1;else continue;h.push(f)}return h},a={};for(const l of i.permutations)for(const{p1:u,p2:h,nT:d,nF:f}of l){const _=s(e,u);for(const v of _){let y=r(d,f,v);const g=t(v),[m,D,T]=n(e,h,y);a[`${m}-${D}-${T}`]=g}}const o=[];for(const l in to){const u=to[l],h=document.createElement("canvas"),d=h.getContext("2d");d.lineWidth=2,d.strokeStyle="gray",d.fillStyle=u;const[f,_]=[h.width,h.height],v=f/e,y=_/e;for(let g=0;g<e;g++)for(let m=0;m<e;m++){const D=`${l}-${g}-${m}`,T=D in a?to[a[D]]:to[l];d.fillStyle=T,d.beginPath(),d.moveTo(g*v,m*y),d.lineTo(g*v+v,m*y),d.lineTo(g*v+v,m*y+y),d.lineTo(g*v,m*y+y),d.closePath(),d.fill(),d.stroke()}o.push(h)}return o}function Ta(i,e,t){const n=t*(i-1)/2;let r=e.map(s=>s===0?-n:s===i-1?i+n:s+.5);return r=r.map(s=>s*2/i-1),r}function zx(){cancelAnimationFrame(Dh)}function Hx(i,e,t){const n=new fx;n.background=new dt("white");const r=30;t.clientWidth/t.clientHeight;const s=.01,a=100,o=new Mn(r,1,s,a);o.position.set(4,4,4);const h=Bx(e).map(C=>new gx(C)).map(C=>new Jr({map:C,color:"white",opacity:.8,transparent:!0})),d=new Dr(2,2,2),f=new Wt(d,h),_=new Hu("white",3),v=new Hu("white",3);_.position.set(10,10,10),v.position.set(-10,-10,-10);const y=new Nx(5);n.add(y),n.add(f,_,v);const g=new Ku;for(const C of e.permutations){const E=new Jr({color:g.nextColor()});if(C.length!==1)for(const L of C){const w=Ta(i,L.p1,.01),N=Ta(i,L.p2,.01),M=Bf(N,w),A=Ff(M),V=zf(M),Q=pl(w,fl(A,V-.04)),$=[pl(w,fl(A,.05)),Q].map(q=>new F(...q)),re=new Lh($),k=new Xa(re,64,.01,20),U=new Wt(k,E);n.add(U);const se=new Mr(.03,.05,32,1),ie=new Wt(se,E);ie.geometry.rotateX(Math.PI/2),ie.lookAt(new F(...M)),ie.position.set(...Q),n.add(ie)}}for(const C of e.rotates){const E=new Jr({color:g.nextColor()}),L=C.unit.position,w=Ta(i,L,.05),N=new qr;if(C.degree===180){const M=Math.PI*.7;{const A=new ts(.1,.01,void 0,void 0,M),V=new Wt(A,E);V.geometry.rotateZ(Math.PI/2),N.add(V);const Q=new Mr(.03,.05),H=new Wt(Q,E);H.geometry.rotateZ(-Math.PI/2),H.position.set(.02,.1,0),N.add(H)}{const A=new ts(.1,.01,void 0,void 0,M),V=new Wt(A,E);V.geometry.rotateZ(-Math.PI/2),N.add(V);const Q=new Mr(.03,.05),H=new Wt(Q,E);H.geometry.rotateZ(Math.PI/2),H.position.set(-.02,-.1,0),N.add(H)}}else{const M=Math.PI*3/2,A=new ts(.1,.01,void 0,void 0,M),V=new Wt(A,E);V.geometry.rotateZ(C.degree<0?Math.PI/2:Math.PI),N.add(V);const Q=new Mr(.03,.05),H=new Wt(Q,E);H.position.set(C.degree<0?.1:-.1,.02,0),N.add(H)}N.lookAt(...w),N.position.set(...w),n.add(N)}const m=new wh;new Fx(o,m.domElement);const D=Math.min(t.clientWidth,t.clientHeight);m.setSize(D,D),m.setPixelRatio(window.devicePixelRatio),t.append(m.domElement);function T(){Dh=requestAnimationFrame(T),m.render(n,o)}T()}let xn={n:"3",alg:"(R U R' U)5",renderType:"3D",algParam:""};const St=kx();let di,io="";window.onload=function(){let i={};try{i=JSON.parse(window.localStorage.getItem("setting")||"{}")}catch{}xn={...xn,...i},new URLSearchParams(window.location.search).forEach((e,t)=>{t in xn&&(xn[t]=e)}),document.body.appendChild(St.app),St.inputAlg.value=xn.alg,St.inputN.value=(xn.n||3).toString(),St.inputParam.value=xn.algParam,Uh(xn.renderType)};window.onresize=function(){St.canvasContainer.style.height=`${Math.min(St.canvasContainer.clientWidth,600)}px`,br()};function kx(){const i=document.createElement("div");i.id="app",i.classList.add("container-fluid","my-2");const[e,t]=Aa("alg","",br);document.createElement("div").classList.add("input-group-prepend"),Wx(e);const[r,s]=Aa("N","N",br),[a,o]=Aa("Params","Params",br),l=un("row justify-content-between mb-2"),u=un("col-md-7"),h=un("col-md-3"),d=un("col-md-2");u.append(e),h.append(a),d.append(r),l.append(u,h,d);const f=un("row mb-2");f.classList.add("row");const _=un("col-12 mb-1"),v=un("col"),y=Yr("button","btn btn-outline-secondary me-2");y.textContent="Share link",y.onclick=()=>{const w=Object.keys(xn).map(M=>`${M}=${xn[M]}`).join("&"),N=window.location.href.split("?")[0];window.open(N+"?"+w,"_blank")};const g=document.createElement("btn");g.classList.add("btn","btn-outline-secondary"),g.append("alpha.twizzle.net"),g.onclick=()=>{const w=St.inputN.value;window.open(`https://alpha.twizzle.net/explore/?puzzle=${w}x${w}x${w}&alg=${St.inputAlg.value}`,"_blank")};const m=Vx();_.append(m),_.append(y,g),f.append(_,v);const D=un("row"),T=un("col-md-8"),C=un("col-md-4"),E=un("border rounded-1");E.style.height="600px";const L=un("border rounded-1 p-2");return T.append(E),C.append(L),D.append(T,C),i.append(l,f,D),{app:i,inputN:s,inputAlg:t,inputParam:o,canvasContainer:E,renderSwitcher:m,desc:L}}function Aa(i,e,t){const n=document.createElement("div");if(n.classList.add("input-group"),e!==""){const s=document.createElement("span");s.classList.add("input-group-text"),s.appendChild(document.createTextNode(e)),n.appendChild(s)}const r=document.createElement("input");return r.type="text",r.classList.add("form-control"),r.id=i,r.onchange=t,n.appendChild(r),[n,r]}function Gx(i,e,t){const n=document.createElement("button"),r=e.split(/\s+/g);return n.classList.add(...r),n.onclick=t,n.textContent=i,n.style.whiteSpace="nowrap",n}function Uh(i){io=i;for(const e of St.renderSwitcher.children)e.classList.remove("btn-primary"),e.classList.add("btn-outline-secondary"),e.textContent===i&&(e.classList.add("btn-primary"),e.classList.remove("btn-outline-secondary"));br()}function Vx(){const i=un("mb-2 me-3");i.style.display="inline-block";const e="btn btn-outline-secondary rounded-0";for(const t of["1 face","3 faces","5 faces","6 faces","6 faces 2","3D"])i.append(Gx(t,e,n=>{const r=n.target;Uh(r.textContent)}));return i}function Wx(i){const e=document.createElement("button");e.classList.add("btn","btn-outline-secondary","dropdown-toggle","input-group-prepend"),e.type="button",e.setAttribute("data-bs-toggle","dropdown"),e.setAttribute("aria-expanded","false"),e.textContent="Alg";const t=document.createElement("ul");t.classList.add("dropdown-menu");for(const n of Wf()){const r=document.createElement("li"),s=document.createElement("a");s.classList.add("dropdown-item"),s.append(...Gf("red","["+n.tags.join(",")+"] ","black",n.name+" ","blue",n.algorithm)),s.onclick=function(a){return function(){St.inputAlg.value=a,br()}}(n.algorithm),r.append(s),t.append(r)}i.prepend(e,t)}function Xx(i,e,t){const n=e.split(/\s+/g).filter(s=>s!==""),r=[];for(const s of i)s.match(/[a-z]/i)&&!s.match(/[xyzMESmesLRFBUDlrfbudhw]/)&&r.indexOf(s)<0&&r.push(s);for(let s=n.length;s<r.length;s++)n.push("1");n.length=r.length;for(let s=0;s<r.length;s++)i=i.replaceAll(r[s],n[s]);return i=i.replaceAll("h",`${~~(t/2)}`),[i,n.join(" ")]}function br(){console.log("onInputChange");const i=parseInt(St.inputN.value),e=St.inputAlg.value,[t,n]=Xx(e,St.inputParam.value,i);if(console.log(t,n),n!==St.inputParam.value&&(St.inputParam.value=n),di=If(t,i),qx(di,i),zx(),io==="3D")St.canvasContainer.innerHTML="",Hx(i,di,St.canvasContainer);else{St.canvasContainer.innerHTML="";const r=jx();switch(St.canvasContainer.appendChild(r),Hf(r),io){case"1 face":Yx(i,di,r);break;case"3 faces":$x(i,di,r);break;case"5 faces":Jx(i,di,r);break;case"6 faces":Kx(i,di,r);break;case"6 faces 2":Zx(i,di,r);break}}xn={n:i.toString(),alg:e,renderType:io,algParam:St.inputParam.value},window.localStorage.setItem("setting",JSON.stringify(xn))}function qx(i,e){const t=(o,l)=>{const u=document.createElement("span");return u.style.color=l,u.style.fontWeight="800",u.textContent=o,u};kf(St.desc);const n=document.createElement("div");n.style.maxHeight="300px",n.style.overflowY="auto",n.append("Regulated Alg: "+i.regulatedAlg,document.createElement("br")),n.append("Simplified Alg: "+i.simplifiedAlg,document.createElement("br")),Yr("span","");const r=Yr("span","bg-light me-2 pe-2"),s=Yr("span");r.style.cursor="pointer",r.textContent="Refactored Alg:",r.onclick=()=>{const o=parseInt(r.getAttribute("depth")||"1"),l=Date.now(),u=Lf(e,o,i.ops),h=Date.now();s.textContent=u.alg,r.setAttribute("depth",`${o+1}`),r.textContent=`Refactored Alg(depth ${o}):`,h-l>5e3&&(r.classList.add("bg-danger"),r.classList.remove("bg-light")),u.complete&&(r.textContent="Refactored Alg:",r.onclick=()=>{})},n.append(r,s,document.createElement("br")),St.desc.append(n),St.desc.append("Order: "+i.order,document.createElement("br"));const a=document.createElement("div");if(i.cycles.length>100)a.append("cycles are too big to display: "+i.cycles.length);else for(const o of i.cycles){const l=o.map(u=>hl(e,u)||`${u}`).join(" -> ");a.append(t(`[${o.length}]`,"#0080ff"),document.createTextNode(l+" "))}a.append(document.createElement("br"));for(const o of i.rotates){const l=hl(e,o.unit.position)||`${o.unit.position}`;a.append(t(`[${o.degree}] `,"#FF0080"),l+" ")}St.desc.append(a)}function jx(){const i=document.createElement("canvas");return i.style.width="100%",i.style.height="100%",i}function jr(i,e){const t={U:0,L:0,F:0,R:0,B:0,D:0};for(const[n,r,s]of i)n===0&&t.L++,n===e-1&&t.R++,r===0&&t.D++,r===e-1&&t.U++,s===0&&t.B++,s===e-1&&t.F++;return t}function Cn(i,e,t){return[[i,e],[i+t,e],[i+t,e+t],[i,e+t]]}function Yx(i,e,t){const n=t.getContext("2d"),r=10,s=10,a=Math.floor(Math.min((t.width-r*2)/17,(t.height-s/2)/14))-2,o=a*14,l=a*2;n.translate(r,s);const u=[{name:"U",priority:6,shape:Cn(0,0,o)},{name:"F",priority:5,shape:Cn(o+a,0,l)},{name:"R",priority:4,shape:Cn(o+a,3*a,l)},{name:"L",priority:3,shape:Cn(o+a,6*a,l)},{name:"B",priority:2,shape:Cn(o+a,9*a,l)},{name:"D",priority:1,shape:Cn(o+a,12*a,l)}],h=jr(e.cycles.flat(),i);u.sort((d,f)=>h[f.name]-h[d.name]),u[0].shape=Cn(0,0,o);for(let d=1;d<6;d++)u[d].shape=Cn(o+a,(d-1)*3*a,l),u[d].priority=7-d;cs(i,e,n,u)}function $x(i,e,t){const n=t.getContext("2d");n.lineCap="round",n.lineJoin="round",n.lineWidth=3;const r=10,s=10;n.translate(r,s);const a=Math.floor(Math.min((t.width-r*2)/2.5,(t.height-s*2)/2))-2,o=a/4,l=(v,y)=>{if(v===0)return[a,a];const g=v%2===y?a*.95:a,m=Math.PI/6+Math.PI/3*(v-1);return[a+g*Math.cos(m),a-g*Math.sin(m)]},u=e.cycles.flat();function h(){const v=(y,g,m)=>{for(const D of u)if(D[0]!==y&&D[1]!==g&&D[2]!==m)return!1;return!0};return v(i-1,i-1,i-1)?["U",[2,1,0,3],"R",[0,1,6,5],"F",[3,0,5,4],"L","D","B"]:v(0,i-1,i-1)?["U",[3,2,1,0],"F",[0,1,6,5],"L",[3,0,5,4],"B","D","R"]:v(0,i-1,0)?["U",[0,3,2,1],"L",[0,1,6,5],"B",[3,0,5,4],"R","D","F"]:v(i-1,i-1,0)?["U",[1,0,3,2],"B",[0,1,6,5],"R",[3,0,5,4],"F","D","L"]:v(i-1,0,i-1)?["D",[4,0,6,5],"R",[2,1,6,0],"F",[3,2,0,4],"U","L","B"]:v(0,0,i-1)?["D",[5,4,0,6],"F",[2,1,6,0],"L",[3,2,0,4],"U","B","R"]:v(0,0,0)?["D",[6,5,4,0],"L",[2,1,6,0],"B",[3,2,0,4],"U","R","F"]:v(i-1,0,0)?["D",[0,6,5,4],"B",[2,1,6,0],"R",[3,2,0,4],"U","F","L"]:["U",[2,1,0,3],"F",[3,0,5,4],"R",[0,1,6,5],"L","D","B"]}const d=h(),f=d[0]==="U"?0:1,_=[{name:d[0],priority:6,shape:d[1].map(v=>l(v,f))},{name:d[2],priority:5,shape:d[3].map(v=>l(v,f))},{name:d[4],priority:4,shape:d[5].map(v=>l(v,f))},{name:d[6],priority:-1,shape:Cn(0,0,o)},{name:d[7],priority:-2,shape:Cn(0,2*a-o,o)},{name:d[8],priority:-3,shape:Cn(2*a+o,a-o/2,o)}];cs(i,e,n,_)}function Kx(i,e,t){const n=t.getContext("2d"),r=10,s=10,a=Math.floor(Math.min((t.width-r*2)/4,(t.height-s/2)/3))-2;n.translate(r,s);const o=(u,h)=>[[u,h],[u+a,h],[u+a,h+a],[u,h+a]],l=[{name:"U",priority:6,shape:o(a,0)},{name:"F",priority:5,shape:o(a,a)},{name:"R",priority:4,shape:o(2*a,a)},{name:"L",priority:3,shape:o(0,a)},{name:"D",priority:2,shape:o(a,2*a)},{name:"B",priority:-1,shape:o(3*a,a)}];cs(i,e,n,l)}function Zx(i,e,t){const n=t.getContext("2d"),r=10,s=10,a=.5,o=.5,l=Math.floor(Math.min((t.width-r*2)/(3+a),(t.height-s/2)/(2+o)))-2;n.translate(r,s);const u=(d,f)=>[[d,f],[d+l,f],[d+l,f+l],[d,f+l]],h=[{name:"U",priority:4,shape:[[l+a*l,0],[2*l+a*l,0],[2*l,l*o],[l,l*o]]},{name:"R",priority:5,shape:[[2*l,l*o],[2*l+a*l,0],[2*l+a*l,l],[2*l,l+l*o]]},{name:"F",priority:6,shape:u(l,l*o)},{name:"L",priority:3,shape:u(0,l*o)},{name:"D",priority:2,shape:u(l,l+l*o)},{name:"B",priority:-1,shape:u(2*l+a*l,0)}];cs(i,e,n,h)}function cs(i,e,t,n){const r={},s=(E,L,w,N,M)=>{const A=(k,U,se)=>{const ie=[k];for(let q=1;q<se;q++)ie.push([k[0]+q*(U[0]-k[0])/se,k[1]+q*(U[1]-k[1])/se]);return ie.push(U),ie},V=k=>k.reduce((se,ie,q,ee)=>[se[0]+ie[0],se[1]+ie[1]],[0,0]).map(se=>se/k.length);t.fillStyle=w[E],t.beginPath(),L.forEach((k,U)=>{U===0?t.moveTo(...k):t.lineTo(...k)}),t.closePath(),t.fill();const Q=A(L[0],L[3],i),H=A(L[0],L[1],i),Y=A(L[1],L[2],i),$=A(L[3],L[2],i);for(let k=0;k<=i;k++)t.beginPath(),t.moveTo(Q[k][0],Q[k][1]),t.lineTo(Y[k][0],Y[k][1]),t.moveTo(H[k][0],H[k][1]),t.lineTo($[k][0],$[k][1]),t.stroke();const re=[];for(let k=0;k<H.length;k++)re.push(A(H[k],$[k],i));for(let k=0;k<i;k++)for(let U=0;U<i;U++){const se=M(k,U).join(",")+`-${E}`,ie=V([re[k][U],re[k][U+1],re[k+1][U+1],re[k+1][U]]);r[se]=ie,k===0&&U===0&&t.fillText(E,ie[0],ie[1])}for(let k=0;k<i;k++)for(let U=0;U<i;U++){const se=`${E}-${k}-${U}`;if(se in N){t.fillStyle=w[N[se]];const ie=[re[k][U],re[k][U+1],re[k+1][U+1],re[k+1][U]];t.beginPath(),t.moveTo(...ie[0]),t.lineTo(...ie[1]),t.lineTo(...ie[2]),t.lineTo(...ie[3]),t.closePath(),t.fill(),t.stroke()}}},a=E=>{const[L,w,N]=E;if(L===-1)return"L";if(L===1)return"R";if(w===-1)return"D";if(w===1)return"U";if(N===-1)return"B";if(N===1)return"F";throw new Error("unreachable")},o={};t.lineCap="round",t.lineJoin="round",t.lineWidth=9/i;const l={U:(E,L)=>[E,i-1,L],F:(E,L)=>[E,i-1-L,i-1],R:(E,L)=>[i-1,i-1-L,i-1-E],L:(E,L)=>[0,i-1-L,E],B:(E,L)=>[i-1-E,i-1-L,0],D:(E,L)=>[E,0,i-1-L]},u=(E,L,w)=>{const[N,M,A]=L,V=a(w);switch(V){case"U":return[V,N,A];case"F":return[V,N,E-1-M];case"R":return[V,E-1-A,E-1-M];case"L":return[V,A,E-1-M];case"B":return[V,E-1-N,E-1-M];case"D":return[V,N,E-1-A]}},h=(E,L,w)=>{switch(a(w)){case"U":return E;case"F":return L;case"L":return ao(L,E);case"R":return ao(E,L);case"B":return L.map(N=>-N);case"D":return E.map(N=>-N)}},d=(E,L)=>{const w=[];for(let N=0;N<3;N++){const M=[0,0,0];if(L[N]===0)M[N]=-1;else if(L[N]===E-1)M[N]=1;else continue;w.push(M)}return w};for(const E of e.permutations)for(const{p1:L,p2:w,nT:N,nF:M}of E){const A=d(i,L);for(const V of A){let Q=h(N,M,V);const H=a(V),[Y,$,re]=u(i,w,Q);o[`${Y}-${$}-${re}`]=H}}const f={U:"hsl(60, 100%, 90%)",F:"hsl(0, 100%, 90%)",R:"hsl(120, 100%, 85%)",B:"hsl(23, 100%, 90%)",L:"hsl(240, 100%, 90%)",D:"hsl(120, 100%, 100%)"};for(const E of n)s(E.name,E.shape,f,o,l[E.name]);const _=new Ku;t.shadowColor="rgba(0, 0, 0, .4)",t.shadowBlur=15,t.lineWidth=5;const v=E=>{const L=_.nextColor();for(let w=0;w<E.length;w++){const N=w===E.length-1?0:w+1,[M,A]=E[w],[V,Q]=E[N];t.beginPath(),Nf(t,M,A,V,Q,L,20),t.stroke()}},y=(E,L)=>{const w=_.nextColor(),[N,M]=E;t.beginPath(),Of(t,N,M,L,w,20),t.stroke()},g=()=>({U:0,L:0,F:0,R:0,B:0,D:0}),m=(E,L)=>{const w=[...E].sort((N,M)=>L(M)-L(N));if(w.length===1||w.length>1&&L(w[0])>L(w[1]))return w[0]},D=g(),T=n.map(E=>E.name);let C=[...e.cycles].sort((E,L)=>E.length-L.length);e:for(;C.length>0;){for(let E=0;E<C.length;E++){const L=C[E],w=jr(L,i),N=T.filter(A=>w[A]===L.length),M=m(N,A=>D[A]);if(M){v(L.map(A=>r[A.join(",")+`-${M}`])),D[M]+=L.length,C.splice(E,1);continue e}}{const E={U:[],F:[],B:[],D:[],L:[],R:[]};for(let M=0;M<C.length;M++){const A=C[M],V=jr(A,i);T.forEach(Q=>{V[Q]===A.length&&E[Q].push(M)})}const w=[...T].sort((M,A)=>D[A]-D[M]).sort((M,A)=>E[A].length-E[M].length)[0],N=E[w];if(N.length>1){for(let M=N.length-1;M>=0;M--){const A=C[N[M]];v(A.map(V=>r[V.join(",")+`-${w}`])),D[w]+=A.length,C.splice(N[M],1)}continue e}}break}for(const E of C){const L=E.map(w=>[-1,-1]);for(;L.find(w=>w[0]===-1);){const w=E.filter((A,V)=>L[V][0]===-1),N=jr(w,i),M=n.map(A=>({name:A.name,priority:A.priority,count:A.priority>0?N[A.name]:Math.min(N[A.name],1)})).sort((A,V)=>V.priority-A.priority).sort((A,V)=>V.count-A.count);E.forEach((A,V)=>{if(L[V][0]===-1){const Q=A.join(",")+`-${M[0].name}`;Q in r&&(L[V]=r[Q])}})}v(L)}{const E=e.rotates,L=e.rotates.map(w=>[-1,-1]);for(;L.find(w=>w[0]===-1);){const w=E.filter((A,V)=>L[V][0]===-1),N=jr(w.map(A=>A.unit.position),i),M=n.map(A=>({name:A.name,priority:A.priority,count:A.priority>0?N[A.name]:Math.min(N[A.name],1)})).sort((A,V)=>V.priority-A.priority).sort((A,V)=>V.count-A.count);E.forEach((A,V)=>{if(L[V][0]===-1){const Q=A.unit.position.join(",")+`-${M[0].name}`;Q in r&&(L[V]=r[Q],y(L[V],A.degree))}})}}}function Jx(i,e,t){const n=t.getContext("2d");n.lineCap="round",n.lineJoin="round",n.lineWidth=3;const r=10,s=10,[a,o,l,u]=[.5,.5,.5,.5],h=100;n.translate(r,s);const d=Math.floor(Math.min((t.width-r*2-h-20)/(1+a+o),(t.height-s*2)/(1+l+u))),f=[0,0],_=[d*(1+a+o),0],v=[d*(1+a+o),d*(1+l+u)],y=[0,d*(1+l+u)],g=[d*a,d*l],m=[d*(1+a),d*l],D=[d*(1+a),d*(1+l)],T=[d*a,d*(1+l)],E=[{name:"U",priority:6,shape:[g,m,D,T]},{name:"F",priority:5,shape:[T,D,v,y]},{name:"R",priority:4,shape:[D,m,_,v]},{name:"L",priority:3,shape:[g,T,y,f]},{name:"B",priority:2,shape:[m,g,f,_]},{name:"D",priority:-1,shape:((L,w,N,M)=>[[L,w],[L+N,w],[L+N,w+M],[L,w+M]])(d*(1+a+o)+20,0,h,h)}];cs(i,e,n,E)}});export default Qx();
