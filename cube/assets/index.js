var Yd=Object.defineProperty;var jd=(i,e,t)=>e in i?Yd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var $d=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var En=(i,e,t)=>(jd(i,typeof e!="symbol"?e+"":e,t),t);var jy=$d((sf,Ja)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof sf=="object"&&typeof Ja<"u"?Ja.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e()})(globalThis,function(){const i=new Map,e={set(y,c,g){i.has(y)||i.set(y,new Map);const E=i.get(y);E.has(c)||E.size===0?E.set(c,g):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(E.keys())[0]}.`)},get:(y,c)=>i.has(y)&&i.get(y).get(c)||null,remove(y,c){if(!i.has(y))return;const g=i.get(y);g.delete(c),g.size===0&&i.delete(y)}},t="transitionend",n=y=>(y&&window.CSS&&window.CSS.escape&&(y=y.replace(/#([^\s"#']+)/g,(c,g)=>`#${CSS.escape(g)}`)),y),r=y=>{y.dispatchEvent(new Event(t))},s=y=>!(!y||typeof y!="object")&&(y.jquery!==void 0&&(y=y[0]),y.nodeType!==void 0),a=y=>s(y)?y.jquery?y[0]:y:typeof y=="string"&&y.length>0?document.querySelector(n(y)):null,o=y=>{if(!s(y)||y.getClientRects().length===0)return!1;const c=getComputedStyle(y).getPropertyValue("visibility")==="visible",g=y.closest("details:not([open])");if(!g)return c;if(g!==y){const E=y.closest("summary");if(E&&E.parentNode!==g||E===null)return!1}return c},l=y=>!y||y.nodeType!==Node.ELEMENT_NODE||!!y.classList.contains("disabled")||(y.disabled!==void 0?y.disabled:y.hasAttribute("disabled")&&y.getAttribute("disabled")!=="false"),u=y=>{if(!document.documentElement.attachShadow)return null;if(typeof y.getRootNode=="function"){const c=y.getRootNode();return c instanceof ShadowRoot?c:null}return y instanceof ShadowRoot?y:y.parentNode?u(y.parentNode):null},h=()=>{},f=y=>{y.offsetHeight},d=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_=[],v=()=>document.documentElement.dir==="rtl",x=y=>{var c;c=()=>{const g=d();if(g){const E=y.NAME,F=g.fn[E];g.fn[E]=y.jQueryInterface,g.fn[E].Constructor=y,g.fn[E].noConflict=()=>(g.fn[E]=F,y.jQueryInterface)}},document.readyState==="loading"?(_.length||document.addEventListener("DOMContentLoaded",()=>{for(const g of _)g()}),_.push(c)):c()},p=(y,c=[],g=y)=>typeof y=="function"?y(...c):g,m=(y,c,g=!0)=>{if(!g)return void p(y);const E=(Q=>{if(!Q)return 0;let{transitionDuration:re,transitionDelay:ge}=window.getComputedStyle(Q);const Ae=Number.parseFloat(re),we=Number.parseFloat(ge);return Ae||we?(re=re.split(",")[0],ge=ge.split(",")[0],1e3*(Number.parseFloat(re)+Number.parseFloat(ge))):0})(c)+5;let F=!1;const B=({target:Q})=>{Q===c&&(F=!0,c.removeEventListener(t,B),p(y))};c.addEventListener(t,B),setTimeout(()=>{F||r(c)},E)},C=(y,c,g,E)=>{const F=y.length;let B=y.indexOf(c);return B===-1?!g&&E?y[F-1]:y[0]:(B+=g?1:-1,E&&(B=(B+F)%F),y[Math.max(0,Math.min(B,F-1))])},S=/[^.]*(?=\..*)\.|.*/,w=/\..*/,A=/::\d+$/,U={};let L=1;const H={mouseenter:"mouseover",mouseleave:"mouseout"},M=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function b(y,c){return c&&`${c}::${L++}`||y.uidEvent||L++}function q(y){const c=b(y);return y.uidEvent=c,U[c]=U[c]||{},U[c]}function te(y,c,g=null){return Object.values(y).find(E=>E.callable===c&&E.delegationSelector===g)}function z(y,c,g){const E=typeof c=="string",F=E?g:c||g;let B=ne(y);return M.has(B)||(B=y),[E,F,B]}function G(y,c,g,E,F){if(typeof c!="string"||!y)return;let[B,Q,re]=z(c,g,E);c in H&&(Q=(qe=>function(He){if(!He.relatedTarget||He.relatedTarget!==He.delegateTarget&&!He.delegateTarget.contains(He.relatedTarget))return qe.call(this,He)})(Q));const ge=q(y),Ae=ge[re]||(ge[re]={}),we=te(Ae,Q,B?g:null);if(we)return void(we.oneOff=we.oneOff&&F);const Ee=b(Q,c.replace(S,"")),je=B?function(Ne,qe,He){return function Ye(dt){const yt=Ne.querySelectorAll(qe);for(let{target:tt}=dt;tt&&tt!==this;tt=tt.parentNode)for(const ct of yt)if(ct===tt)return le(dt,{delegateTarget:tt}),Ye.oneOff&&I.off(Ne,dt.type,qe,He),He.apply(tt,[dt])}}(y,g,Q):function(Ne,qe){return function He(Ye){return le(Ye,{delegateTarget:Ne}),He.oneOff&&I.off(Ne,Ye.type,qe),qe.apply(Ne,[Ye])}}(y,Q);je.delegationSelector=B?g:null,je.callable=Q,je.oneOff=F,je.uidEvent=Ee,Ae[Ee]=je,y.addEventListener(re,je,B)}function Y(y,c,g,E,F){const B=te(c[g],E,F);B&&(y.removeEventListener(g,B,!!F),delete c[g][B.uidEvent])}function se(y,c,g,E){const F=c[g]||{};for(const[B,Q]of Object.entries(F))B.includes(E)&&Y(y,c,g,Q.callable,Q.delegationSelector)}function ne(y){return y=y.replace(w,""),H[y]||y}const I={on(y,c,g,E){G(y,c,g,E,!1)},one(y,c,g,E){G(y,c,g,E,!0)},off(y,c,g,E){if(typeof c!="string"||!y)return;const[F,B,Q]=z(c,g,E),re=Q!==c,ge=q(y),Ae=ge[Q]||{},we=c.startsWith(".");if(B===void 0){if(we)for(const Ee of Object.keys(ge))se(y,ge,Ee,c.slice(1));for(const[Ee,je]of Object.entries(Ae)){const Ne=Ee.replace(A,"");re&&!c.includes(Ne)||Y(y,ge,Q,je.callable,je.delegationSelector)}}else{if(!Object.keys(Ae).length)return;Y(y,ge,Q,B,F?g:null)}},trigger(y,c,g){if(typeof c!="string"||!y)return null;const E=d();let F=null,B=!0,Q=!0,re=!1;c!==ne(c)&&E&&(F=E.Event(c,g),E(y).trigger(F),B=!F.isPropagationStopped(),Q=!F.isImmediatePropagationStopped(),re=F.isDefaultPrevented());const ge=le(new Event(c,{bubbles:B,cancelable:!0}),g);return re&&ge.preventDefault(),Q&&y.dispatchEvent(ge),ge.defaultPrevented&&F&&F.preventDefault(),ge}};function le(y,c={}){for(const[g,E]of Object.entries(c))try{y[g]=E}catch{Object.defineProperty(y,g,{configurable:!0,get:()=>E})}return y}function oe(y){if(y==="true")return!0;if(y==="false")return!1;if(y===Number(y).toString())return Number(y);if(y===""||y==="null")return null;if(typeof y!="string")return y;try{return JSON.parse(decodeURIComponent(y))}catch{return y}}function $(y){return y.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const J={setDataAttribute(y,c,g){y.setAttribute(`data-bs-${$(c)}`,g)},removeDataAttribute(y,c){y.removeAttribute(`data-bs-${$(c)}`)},getDataAttributes(y){if(!y)return{};const c={},g=Object.keys(y.dataset).filter(E=>E.startsWith("bs")&&!E.startsWith("bsConfig"));for(const E of g){let F=E.replace(/^bs/,"");F=F.charAt(0).toLowerCase()+F.slice(1,F.length),c[F]=oe(y.dataset[E])}return c},getDataAttribute:(y,c)=>oe(y.getAttribute(`data-bs-${$(c)}`))};class ve{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,g){const E=s(g)?J.getDataAttribute(g,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...s(g)?J.getDataAttributes(g):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,g=this.constructor.DefaultType){for(const[F,B]of Object.entries(g)){const Q=c[F],re=s(Q)?"element":(E=Q)==null?`${E}`:Object.prototype.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(B).test(re))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${F}" provided type "${re}" but expected type "${B}".`)}var E}}class _e extends ve{constructor(c,g){super(),(c=a(c))&&(this._element=c,this._config=this._getConfig(g),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),I.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,g,E=!0){m(c,g,E)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(a(c),this.DATA_KEY)}static getOrCreateInstance(c,g={}){return this.getInstance(c)||new this(c,typeof g=="object"?g:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const Te=y=>{let c=y.getAttribute("data-bs-target");if(!c||c==="#"){let g=y.getAttribute("href");if(!g||!g.includes("#")&&!g.startsWith("."))return null;g.includes("#")&&!g.startsWith("#")&&(g=`#${g.split("#")[1]}`),c=g&&g!=="#"?n(g.trim()):null}return c},ae={find:(y,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,y)),findOne:(y,c=document.documentElement)=>Element.prototype.querySelector.call(c,y),children:(y,c)=>[].concat(...y.children).filter(g=>g.matches(c)),parents(y,c){const g=[];let E=y.parentNode.closest(c);for(;E;)g.push(E),E=E.parentNode.closest(c);return g},prev(y,c){let g=y.previousElementSibling;for(;g;){if(g.matches(c))return[g];g=g.previousElementSibling}return[]},next(y,c){let g=y.nextElementSibling;for(;g;){if(g.matches(c))return[g];g=g.nextElementSibling}return[]},focusableChildren(y){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(g=>`${g}:not([tabindex^="-"])`).join(",");return this.find(c,y).filter(g=>!l(g)&&o(g))},getSelectorFromElement(y){const c=Te(y);return c&&ae.findOne(c)?c:null},getElementFromSelector(y){const c=Te(y);return c?ae.findOne(c):null},getMultipleElementsFromSelector(y){const c=Te(y);return c?ae.find(c):[]}},De=(y,c="hide")=>{const g=`click.dismiss${y.EVENT_KEY}`,E=y.NAME;I.on(document,g,`[data-bs-dismiss="${E}"]`,function(F){if(["A","AREA"].includes(this.tagName)&&F.preventDefault(),l(this))return;const B=ae.getElementFromSelector(this)||this.closest(`.${E}`);y.getOrCreateInstance(B)[c]()})},Ue=".bs.alert",rt=`close${Ue}`,Ut=`closed${Ue}`;class ke extends _e{static get NAME(){return"alert"}close(){if(I.trigger(this._element,rt).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),I.trigger(this._element,Ut),this.dispose()}static jQueryInterface(c){return this.each(function(){const g=ke.getOrCreateInstance(this);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c](this)}})}}De(ke,"close"),x(ke);const V='[data-bs-toggle="button"]';class Mt extends _e{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const g=Mt.getOrCreateInstance(this);c==="toggle"&&g[c]()})}}I.on(document,"click.bs.button.data-api",V,y=>{y.preventDefault();const c=y.target.closest(V);Mt.getOrCreateInstance(c).toggle()}),x(Mt);const Le=".bs.swipe",Ge=`touchstart${Le}`,Be=`touchmove${Le}`,mt=`touchend${Le}`,$e=`pointerdown${Le}`,Ve=`pointerup${Le}`,st={endCallback:null,leftCallback:null,rightCallback:null},Rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class bt extends ve{constructor(c,g){super(),this._element=c,c&&bt.isSupported()&&(this._config=this._getConfig(g),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return st}static get DefaultType(){return Rt}static get NAME(){return"swipe"}dispose(){I.off(this._element,Le)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const g=c/this._deltaX;this._deltaX=0,g&&p(g>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(I.on(this._element,$e,c=>this._start(c)),I.on(this._element,Ve,c=>this._end(c)),this._element.classList.add("pointer-event")):(I.on(this._element,Ge,c=>this._start(c)),I.on(this._element,Be,c=>this._move(c)),I.on(this._element,mt,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const P=".bs.carousel",T=".data-api",X="next",ue="prev",ce="left",fe="right",Ce=`slide${P}`,de=`slid${P}`,K=`keydown${P}`,D=`mouseenter${P}`,ie=`mouseleave${P}`,Se=`dragstart${P}`,me=`load${P}${T}`,Me=`click${P}${T}`,ze="carousel",Ke="active",O=".active",xe=".carousel-item",Z=O+xe,he={ArrowLeft:fe,ArrowRight:ce},pe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Qe={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class it extends _e{constructor(c,g){super(c,g),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ae.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ze&&this.cycle()}static get Default(){return pe}static get DefaultType(){return Qe}static get NAME(){return"carousel"}next(){this._slide(X)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(ue)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?I.one(this._element,de,()=>this.cycle()):this.cycle())}to(c){const g=this._getItems();if(c>g.length-1||c<0)return;if(this._isSliding)return void I.one(this._element,de,()=>this.to(c));const E=this._getItemIndex(this._getActive());if(E===c)return;const F=c>E?X:ue;this._slide(F,g[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&I.on(this._element,K,c=>this._keydown(c)),this._config.pause==="hover"&&(I.on(this._element,D,()=>this.pause()),I.on(this._element,ie,()=>this._maybeEnableCycle())),this._config.touch&&bt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const g of ae.find(".carousel-item img",this._element))I.on(g,Se,E=>E.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(ce)),rightCallback:()=>this._slide(this._directionToOrder(fe)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new bt(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const g=he[c.key];g&&(c.preventDefault(),this._slide(this._directionToOrder(g)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const g=ae.findOne(O,this._indicatorsElement);g.classList.remove(Ke),g.removeAttribute("aria-current");const E=ae.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);E&&(E.classList.add(Ke),E.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const g=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=g||this._config.defaultInterval}_slide(c,g=null){if(this._isSliding)return;const E=this._getActive(),F=c===X,B=g||C(this._getItems(),E,F,this._config.wrap);if(B===E)return;const Q=this._getItemIndex(B),re=Ee=>I.trigger(this._element,Ee,{relatedTarget:B,direction:this._orderToDirection(c),from:this._getItemIndex(E),to:Q});if(re(Ce).defaultPrevented||!E||!B)return;const ge=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Q),this._activeElement=B;const Ae=F?"carousel-item-start":"carousel-item-end",we=F?"carousel-item-next":"carousel-item-prev";B.classList.add(we),f(B),E.classList.add(Ae),B.classList.add(Ae),this._queueCallback(()=>{B.classList.remove(Ae,we),B.classList.add(Ke),E.classList.remove(Ke,we,Ae),this._isSliding=!1,re(de)},E,this._isAnimated()),ge&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ae.findOne(Z,this._element)}_getItems(){return ae.find(xe,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return v()?c===ce?ue:X:c===ce?X:ue}_orderToDirection(c){return v()?c===ue?ce:fe:c===ue?fe:ce}static jQueryInterface(c){return this.each(function(){const g=it.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}}else g.to(c)})}}I.on(document,Me,"[data-bs-slide], [data-bs-slide-to]",function(y){const c=ae.getElementFromSelector(this);if(!c||!c.classList.contains(ze))return;y.preventDefault();const g=it.getOrCreateInstance(c),E=this.getAttribute("data-bs-slide-to");return E?(g.to(E),void g._maybeEnableCycle()):J.getDataAttribute(this,"slide")==="next"?(g.next(),void g._maybeEnableCycle()):(g.prev(),void g._maybeEnableCycle())}),I.on(window,me,()=>{const y=ae.find('[data-bs-ride="carousel"]');for(const c of y)it.getOrCreateInstance(c)}),x(it);const at=".bs.collapse",Zt=`show${at}`,gt=`shown${at}`,gn=`hide${at}`,Gt=`hidden${at}`,xs=`click${at}.data-api`,Ki="show",ai="collapse",Yn="collapsing",ys=`:scope .${ai} .${ai}`,ci='[data-bs-toggle="collapse"]',Ms={parent:null,toggle:!0},wo={parent:"(null|element)",toggle:"boolean"};class li extends _e{constructor(c,g){super(c,g),this._isTransitioning=!1,this._triggerArray=[];const E=ae.find(ci);for(const F of E){const B=ae.getSelectorFromElement(F),Q=ae.find(B).filter(re=>re===this._element);B!==null&&Q.length&&this._triggerArray.push(F)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ms}static get DefaultType(){return wo}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(F=>F!==this._element).map(F=>li.getOrCreateInstance(F,{toggle:!1}))),c.length&&c[0]._isTransitioning||I.trigger(this._element,Zt).defaultPrevented)return;for(const F of c)F.hide();const g=this._getDimension();this._element.classList.remove(ai),this._element.classList.add(Yn),this._element.style[g]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const E=`scroll${g[0].toUpperCase()+g.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yn),this._element.classList.add(ai,Ki),this._element.style[g]="",I.trigger(this._element,gt)},this._element,!0),this._element.style[g]=`${this._element[E]}px`}hide(){if(this._isTransitioning||!this._isShown()||I.trigger(this._element,gn).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,f(this._element),this._element.classList.add(Yn),this._element.classList.remove(ai,Ki);for(const g of this._triggerArray){const E=ae.getElementFromSelector(g);E&&!this._isShown(E)&&this._addAriaAndCollapsedClass([g],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yn),this._element.classList.add(ai),I.trigger(this._element,Gt)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(Ki)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=a(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(ci);for(const g of c){const E=ae.getElementFromSelector(g);E&&this._addAriaAndCollapsedClass([g],this._isShown(E))}}_getFirstLevelChildren(c){const g=ae.find(ys,this._config.parent);return ae.find(c,this._config.parent).filter(E=>!g.includes(E))}_addAriaAndCollapsedClass(c,g){if(c.length)for(const E of c)E.classList.toggle("collapsed",!g),E.setAttribute("aria-expanded",g)}static jQueryInterface(c){const g={};return typeof c=="string"&&/show|hide/.test(c)&&(g.toggle=!1),this.each(function(){const E=li.getOrCreateInstance(this,g);if(typeof c=="string"){if(E[c]===void 0)throw new TypeError(`No method named "${c}"`);E[c]()}})}}I.on(document,xs,ci,function(y){(y.target.tagName==="A"||y.delegateTarget&&y.delegateTarget.tagName==="A")&&y.preventDefault();for(const c of ae.getMultipleElementsFromSelector(this))li.getOrCreateInstance(c,{toggle:!1}).toggle()}),x(li);var Vt="top",R="bottom",k="right",j="left",W="auto",ee=[Vt,R,k,j],be="start",Pe="end",Fe="clippingParents",Ie="viewport",We="popper",Oe="reference",Xe=ee.reduce(function(y,c){return y.concat([c+"-"+be,c+"-"+Pe])},[]),xt=[].concat(ee,[W]).reduce(function(y,c){return y.concat([c,c+"-"+be,c+"-"+Pe])},[]),St="beforeRead",Jt="read",_n="afterRead",Tt="beforeMain",et="main",Zi="afterMain",At="beforeWrite",zn="write",Gr="afterWrite",ui=[St,Jt,_n,Tt,et,Zi,At,zn,Gr];function on(y){return y?(y.nodeName||"").toLowerCase():null}function lt(y){if(y==null)return window;if(y.toString()!=="[object Window]"){var c=y.ownerDocument;return c&&c.defaultView||window}return y}function Qt(y){return y instanceof lt(y).Element||y instanceof Element}function Xt(y){return y instanceof lt(y).HTMLElement||y instanceof HTMLElement}function Wt(y){return typeof ShadowRoot<"u"&&(y instanceof lt(y).ShadowRoot||y instanceof ShadowRoot)}const Ai={name:"applyStyles",enabled:!0,phase:"write",fn:function(y){var c=y.state;Object.keys(c.elements).forEach(function(g){var E=c.styles[g]||{},F=c.attributes[g]||{},B=c.elements[g];Xt(B)&&on(B)&&(Object.assign(B.style,E),Object.keys(F).forEach(function(Q){var re=F[Q];re===!1?B.removeAttribute(Q):B.setAttribute(Q,re===!0?"":re)}))})},effect:function(y){var c=y.state,g={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,g.popper),c.styles=g,c.elements.arrow&&Object.assign(c.elements.arrow.style,g.arrow),function(){Object.keys(c.elements).forEach(function(E){var F=c.elements[E],B=c.attributes[E]||{},Q=Object.keys(c.styles.hasOwnProperty(E)?c.styles[E]:g[E]).reduce(function(re,ge){return re[ge]="",re},{});Xt(F)&&on(F)&&(Object.assign(F.style,Q),Object.keys(B).forEach(function(re){F.removeAttribute(re)}))})}},requires:["computeStyles"]};function vn(y){return y.split("-")[0]}var kn=Math.max,Ss=Math.min,Ji=Math.round;function Ro(){var y=navigator.userAgentData;return y!=null&&y.brands&&Array.isArray(y.brands)?y.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function fc(){return!/^((?!chrome|android).)*safari/i.test(Ro())}function Qi(y,c,g){c===void 0&&(c=!1),g===void 0&&(g=!1);var E=y.getBoundingClientRect(),F=1,B=1;c&&Xt(y)&&(F=y.offsetWidth>0&&Ji(E.width)/y.offsetWidth||1,B=y.offsetHeight>0&&Ji(E.height)/y.offsetHeight||1);var Q=(Qt(y)?lt(y):window).visualViewport,re=!fc()&&g,ge=(E.left+(re&&Q?Q.offsetLeft:0))/F,Ae=(E.top+(re&&Q?Q.offsetTop:0))/B,we=E.width/F,Ee=E.height/B;return{width:we,height:Ee,top:Ae,right:ge+we,bottom:Ae+Ee,left:ge,x:ge,y:Ae}}function Co(y){var c=Qi(y),g=y.offsetWidth,E=y.offsetHeight;return Math.abs(c.width-g)<=1&&(g=c.width),Math.abs(c.height-E)<=1&&(E=c.height),{x:y.offsetLeft,y:y.offsetTop,width:g,height:E}}function dc(y,c){var g=c.getRootNode&&c.getRootNode();if(y.contains(c))return!0;if(g&&Wt(g)){var E=c;do{if(E&&y.isSameNode(E))return!0;E=E.parentNode||E.host}while(E)}return!1}function jn(y){return lt(y).getComputedStyle(y)}function of(y){return["table","td","th"].indexOf(on(y))>=0}function hi(y){return((Qt(y)?y.ownerDocument:y.document)||window.document).documentElement}function Es(y){return on(y)==="html"?y:y.assignedSlot||y.parentNode||(Wt(y)?y.host:null)||hi(y)}function pc(y){return Xt(y)&&jn(y).position!=="fixed"?y.offsetParent:null}function Vr(y){for(var c=lt(y),g=pc(y);g&&of(g)&&jn(g).position==="static";)g=pc(g);return g&&(on(g)==="html"||on(g)==="body"&&jn(g).position==="static")?c:g||function(E){var F=/firefox/i.test(Ro());if(/Trident/i.test(Ro())&&Xt(E)&&jn(E).position==="fixed")return null;var B=Es(E);for(Wt(B)&&(B=B.host);Xt(B)&&["html","body"].indexOf(on(B))<0;){var Q=jn(B);if(Q.transform!=="none"||Q.perspective!=="none"||Q.contain==="paint"||["transform","perspective"].indexOf(Q.willChange)!==-1||F&&Q.willChange==="filter"||F&&Q.filter&&Q.filter!=="none")return B;B=B.parentNode}return null}(y)||c}function Lo(y){return["top","bottom"].indexOf(y)>=0?"x":"y"}function Wr(y,c,g){return kn(y,Ss(c,g))}function mc(y){return Object.assign({},{top:0,right:0,bottom:0,left:0},y)}function gc(y,c){return c.reduce(function(g,E){return g[E]=y,g},{})}const _c={name:"arrow",enabled:!0,phase:"main",fn:function(y){var c,g=y.state,E=y.name,F=y.options,B=g.elements.arrow,Q=g.modifiersData.popperOffsets,re=vn(g.placement),ge=Lo(re),Ae=[j,k].indexOf(re)>=0?"height":"width";if(B&&Q){var we=function(pt,ht){return mc(typeof(pt=typeof pt=="function"?pt(Object.assign({},ht.rects,{placement:ht.placement})):pt)!="number"?pt:gc(pt,ee))}(F.padding,g),Ee=Co(B),je=ge==="y"?Vt:j,Ne=ge==="y"?R:k,qe=g.rects.reference[Ae]+g.rects.reference[ge]-Q[ge]-g.rects.popper[Ae],He=Q[ge]-g.rects.reference[ge],Ye=Vr(B),dt=Ye?ge==="y"?Ye.clientHeight||0:Ye.clientWidth||0:0,yt=qe/2-He/2,tt=we[je],ct=dt-Ee[Ae]-we[Ne],Ze=dt/2-Ee[Ae]/2+yt,ot=Wr(tt,Ze,ct),ut=ge;g.modifiersData[E]=((c={})[ut]=ot,c.centerOffset=ot-Ze,c)}},effect:function(y){var c=y.state,g=y.options.element,E=g===void 0?"[data-popper-arrow]":g;E!=null&&(typeof E!="string"||(E=c.elements.popper.querySelector(E)))&&dc(c.elements.popper,E)&&(c.elements.arrow=E)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function er(y){return y.split("-")[1]}var af={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vc(y){var c,g=y.popper,E=y.popperRect,F=y.placement,B=y.variation,Q=y.offsets,re=y.position,ge=y.gpuAcceleration,Ae=y.adaptive,we=y.roundOffsets,Ee=y.isFixed,je=Q.x,Ne=je===void 0?0:je,qe=Q.y,He=qe===void 0?0:qe,Ye=typeof we=="function"?we({x:Ne,y:He}):{x:Ne,y:He};Ne=Ye.x,He=Ye.y;var dt=Q.hasOwnProperty("x"),yt=Q.hasOwnProperty("y"),tt=j,ct=Vt,Ze=window;if(Ae){var ot=Vr(g),ut="clientHeight",pt="clientWidth";ot===lt(g)&&jn(ot=hi(g)).position!=="static"&&re==="absolute"&&(ut="scrollHeight",pt="scrollWidth"),(F===Vt||(F===j||F===k)&&B===Pe)&&(ct=R,He-=(Ee&&ot===Ze&&Ze.visualViewport?Ze.visualViewport.height:ot[ut])-E.height,He*=ge?1:-1),F!==j&&(F!==Vt&&F!==R||B!==Pe)||(tt=k,Ne-=(Ee&&ot===Ze&&Ze.visualViewport?Ze.visualViewport.width:ot[pt])-E.width,Ne*=ge?1:-1)}var ht,Ct=Object.assign({position:re},Ae&&af),fn=we===!0?function(Cn,en){var yn=Cn.x,Mn=Cn.y,wt=en.devicePixelRatio||1;return{x:Ji(yn*wt)/wt||0,y:Ji(Mn*wt)/wt||0}}({x:Ne,y:He},lt(g)):{x:Ne,y:He};return Ne=fn.x,He=fn.y,ge?Object.assign({},Ct,((ht={})[ct]=yt?"0":"",ht[tt]=dt?"0":"",ht.transform=(Ze.devicePixelRatio||1)<=1?"translate("+Ne+"px, "+He+"px)":"translate3d("+Ne+"px, "+He+"px, 0)",ht)):Object.assign({},Ct,((c={})[ct]=yt?He+"px":"",c[tt]=dt?Ne+"px":"",c.transform="",c))}const Po={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(y){var c=y.state,g=y.options,E=g.gpuAcceleration,F=E===void 0||E,B=g.adaptive,Q=B===void 0||B,re=g.roundOffsets,ge=re===void 0||re,Ae={placement:vn(c.placement),variation:er(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:F,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,vc(Object.assign({},Ae,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:Q,roundOffsets:ge})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,vc(Object.assign({},Ae,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ge})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var bs={passive:!0};const Uo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(y){var c=y.state,g=y.instance,E=y.options,F=E.scroll,B=F===void 0||F,Q=E.resize,re=Q===void 0||Q,ge=lt(c.elements.popper),Ae=[].concat(c.scrollParents.reference,c.scrollParents.popper);return B&&Ae.forEach(function(we){we.addEventListener("scroll",g.update,bs)}),re&&ge.addEventListener("resize",g.update,bs),function(){B&&Ae.forEach(function(we){we.removeEventListener("scroll",g.update,bs)}),re&&ge.removeEventListener("resize",g.update,bs)}},data:{}};var cf={left:"right",right:"left",bottom:"top",top:"bottom"};function Ts(y){return y.replace(/left|right|bottom|top/g,function(c){return cf[c]})}var lf={start:"end",end:"start"};function xc(y){return y.replace(/start|end/g,function(c){return lf[c]})}function Do(y){var c=lt(y);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function Io(y){return Qi(hi(y)).left+Do(y).scrollLeft}function Oo(y){var c=jn(y),g=c.overflow,E=c.overflowX,F=c.overflowY;return/auto|scroll|overlay|hidden/.test(g+F+E)}function yc(y){return["html","body","#document"].indexOf(on(y))>=0?y.ownerDocument.body:Xt(y)&&Oo(y)?y:yc(Es(y))}function Xr(y,c){var g;c===void 0&&(c=[]);var E=yc(y),F=E===((g=y.ownerDocument)==null?void 0:g.body),B=lt(E),Q=F?[B].concat(B.visualViewport||[],Oo(E)?E:[]):E,re=c.concat(Q);return F?re:re.concat(Xr(Es(Q)))}function No(y){return Object.assign({},y,{left:y.x,top:y.y,right:y.x+y.width,bottom:y.y+y.height})}function Mc(y,c,g){return c===Ie?No(function(E,F){var B=lt(E),Q=hi(E),re=B.visualViewport,ge=Q.clientWidth,Ae=Q.clientHeight,we=0,Ee=0;if(re){ge=re.width,Ae=re.height;var je=fc();(je||!je&&F==="fixed")&&(we=re.offsetLeft,Ee=re.offsetTop)}return{width:ge,height:Ae,x:we+Io(E),y:Ee}}(y,g)):Qt(c)?function(E,F){var B=Qi(E,!1,F==="fixed");return B.top=B.top+E.clientTop,B.left=B.left+E.clientLeft,B.bottom=B.top+E.clientHeight,B.right=B.left+E.clientWidth,B.width=E.clientWidth,B.height=E.clientHeight,B.x=B.left,B.y=B.top,B}(c,g):No(function(E){var F,B=hi(E),Q=Do(E),re=(F=E.ownerDocument)==null?void 0:F.body,ge=kn(B.scrollWidth,B.clientWidth,re?re.scrollWidth:0,re?re.clientWidth:0),Ae=kn(B.scrollHeight,B.clientHeight,re?re.scrollHeight:0,re?re.clientHeight:0),we=-Q.scrollLeft+Io(E),Ee=-Q.scrollTop;return jn(re||B).direction==="rtl"&&(we+=kn(B.clientWidth,re?re.clientWidth:0)-ge),{width:ge,height:Ae,x:we,y:Ee}}(hi(y)))}function Sc(y){var c,g=y.reference,E=y.element,F=y.placement,B=F?vn(F):null,Q=F?er(F):null,re=g.x+g.width/2-E.width/2,ge=g.y+g.height/2-E.height/2;switch(B){case Vt:c={x:re,y:g.y-E.height};break;case R:c={x:re,y:g.y+g.height};break;case k:c={x:g.x+g.width,y:ge};break;case j:c={x:g.x-E.width,y:ge};break;default:c={x:g.x,y:g.y}}var Ae=B?Lo(B):null;if(Ae!=null){var we=Ae==="y"?"height":"width";switch(Q){case be:c[Ae]=c[Ae]-(g[we]/2-E[we]/2);break;case Pe:c[Ae]=c[Ae]+(g[we]/2-E[we]/2)}}return c}function tr(y,c){c===void 0&&(c={});var g=c,E=g.placement,F=E===void 0?y.placement:E,B=g.strategy,Q=B===void 0?y.strategy:B,re=g.boundary,ge=re===void 0?Fe:re,Ae=g.rootBoundary,we=Ae===void 0?Ie:Ae,Ee=g.elementContext,je=Ee===void 0?We:Ee,Ne=g.altBoundary,qe=Ne!==void 0&&Ne,He=g.padding,Ye=He===void 0?0:He,dt=mc(typeof Ye!="number"?Ye:gc(Ye,ee)),yt=je===We?Oe:We,tt=y.rects.popper,ct=y.elements[qe?yt:je],Ze=function(en,yn,Mn,wt){var Hn=yn==="clippingParents"?function(_t){var tn=Xr(Es(_t)),Sn=["absolute","fixed"].indexOf(jn(_t).position)>=0&&Xt(_t)?Vr(_t):_t;return Qt(Sn)?tn.filter(function(di){return Qt(di)&&dc(di,Sn)&&on(di)!=="body"}):[]}(en):[].concat(yn),Gn=[].concat(Hn,[Mn]),rr=Gn[0],Ft=Gn.reduce(function(_t,tn){var Sn=Mc(en,tn,wt);return _t.top=kn(Sn.top,_t.top),_t.right=Ss(Sn.right,_t.right),_t.bottom=Ss(Sn.bottom,_t.bottom),_t.left=kn(Sn.left,_t.left),_t},Mc(en,rr,wt));return Ft.width=Ft.right-Ft.left,Ft.height=Ft.bottom-Ft.top,Ft.x=Ft.left,Ft.y=Ft.top,Ft}(Qt(ct)?ct:ct.contextElement||hi(y.elements.popper),ge,we,Q),ot=Qi(y.elements.reference),ut=Sc({reference:ot,element:tt,strategy:"absolute",placement:F}),pt=No(Object.assign({},tt,ut)),ht=je===We?pt:ot,Ct={top:Ze.top-ht.top+dt.top,bottom:ht.bottom-Ze.bottom+dt.bottom,left:Ze.left-ht.left+dt.left,right:ht.right-Ze.right+dt.right},fn=y.modifiersData.offset;if(je===We&&fn){var Cn=fn[F];Object.keys(Ct).forEach(function(en){var yn=[k,R].indexOf(en)>=0?1:-1,Mn=[Vt,R].indexOf(en)>=0?"y":"x";Ct[en]+=Cn[Mn]*yn})}return Ct}function uf(y,c){c===void 0&&(c={});var g=c,E=g.placement,F=g.boundary,B=g.rootBoundary,Q=g.padding,re=g.flipVariations,ge=g.allowedAutoPlacements,Ae=ge===void 0?xt:ge,we=er(E),Ee=we?re?Xe:Xe.filter(function(qe){return er(qe)===we}):ee,je=Ee.filter(function(qe){return Ae.indexOf(qe)>=0});je.length===0&&(je=Ee);var Ne=je.reduce(function(qe,He){return qe[He]=tr(y,{placement:He,boundary:F,rootBoundary:B,padding:Q})[vn(He)],qe},{});return Object.keys(Ne).sort(function(qe,He){return Ne[qe]-Ne[He]})}const Ec={name:"flip",enabled:!0,phase:"main",fn:function(y){var c=y.state,g=y.options,E=y.name;if(!c.modifiersData[E]._skip){for(var F=g.mainAxis,B=F===void 0||F,Q=g.altAxis,re=Q===void 0||Q,ge=g.fallbackPlacements,Ae=g.padding,we=g.boundary,Ee=g.rootBoundary,je=g.altBoundary,Ne=g.flipVariations,qe=Ne===void 0||Ne,He=g.allowedAutoPlacements,Ye=c.options.placement,dt=vn(Ye),yt=ge||(dt!==Ye&&qe?function(_t){if(vn(_t)===W)return[];var tn=Ts(_t);return[xc(_t),tn,xc(tn)]}(Ye):[Ts(Ye)]),tt=[Ye].concat(yt).reduce(function(_t,tn){return _t.concat(vn(tn)===W?uf(c,{placement:tn,boundary:we,rootBoundary:Ee,padding:Ae,flipVariations:qe,allowedAutoPlacements:He}):tn)},[]),ct=c.rects.reference,Ze=c.rects.popper,ot=new Map,ut=!0,pt=tt[0],ht=0;ht<tt.length;ht++){var Ct=tt[ht],fn=vn(Ct),Cn=er(Ct)===be,en=[Vt,R].indexOf(fn)>=0,yn=en?"width":"height",Mn=tr(c,{placement:Ct,boundary:we,rootBoundary:Ee,altBoundary:je,padding:Ae}),wt=en?Cn?k:j:Cn?R:Vt;ct[yn]>Ze[yn]&&(wt=Ts(wt));var Hn=Ts(wt),Gn=[];if(B&&Gn.push(Mn[fn]<=0),re&&Gn.push(Mn[wt]<=0,Mn[Hn]<=0),Gn.every(function(_t){return _t})){pt=Ct,ut=!1;break}ot.set(Ct,Gn)}if(ut)for(var rr=function(_t){var tn=tt.find(function(Sn){var di=ot.get(Sn);if(di)return di.slice(0,_t).every(function(Is){return Is})});if(tn)return pt=tn,"break"},Ft=qe?3:1;Ft>0&&rr(Ft)!=="break";Ft--);c.placement!==pt&&(c.modifiersData[E]._skip=!0,c.placement=pt,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function bc(y,c,g){return g===void 0&&(g={x:0,y:0}),{top:y.top-c.height-g.y,right:y.right-c.width+g.x,bottom:y.bottom-c.height+g.y,left:y.left-c.width-g.x}}function Tc(y){return[Vt,k,R,j].some(function(c){return y[c]>=0})}const Ac={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(y){var c=y.state,g=y.name,E=c.rects.reference,F=c.rects.popper,B=c.modifiersData.preventOverflow,Q=tr(c,{elementContext:"reference"}),re=tr(c,{altBoundary:!0}),ge=bc(Q,E),Ae=bc(re,F,B),we=Tc(ge),Ee=Tc(Ae);c.modifiersData[g]={referenceClippingOffsets:ge,popperEscapeOffsets:Ae,isReferenceHidden:we,hasPopperEscaped:Ee},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":we,"data-popper-escaped":Ee})}},wc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(y){var c=y.state,g=y.options,E=y.name,F=g.offset,B=F===void 0?[0,0]:F,Q=xt.reduce(function(we,Ee){return we[Ee]=function(je,Ne,qe){var He=vn(je),Ye=[j,Vt].indexOf(He)>=0?-1:1,dt=typeof qe=="function"?qe(Object.assign({},Ne,{placement:je})):qe,yt=dt[0],tt=dt[1];return yt=yt||0,tt=(tt||0)*Ye,[j,k].indexOf(He)>=0?{x:tt,y:yt}:{x:yt,y:tt}}(Ee,c.rects,B),we},{}),re=Q[c.placement],ge=re.x,Ae=re.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=ge,c.modifiersData.popperOffsets.y+=Ae),c.modifiersData[E]=Q}},Fo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(y){var c=y.state,g=y.name;c.modifiersData[g]=Sc({reference:c.rects.reference,element:c.rects.popper,strategy:"absolute",placement:c.placement})},data:{}},Rc={name:"preventOverflow",enabled:!0,phase:"main",fn:function(y){var c=y.state,g=y.options,E=y.name,F=g.mainAxis,B=F===void 0||F,Q=g.altAxis,re=Q!==void 0&&Q,ge=g.boundary,Ae=g.rootBoundary,we=g.altBoundary,Ee=g.padding,je=g.tether,Ne=je===void 0||je,qe=g.tetherOffset,He=qe===void 0?0:qe,Ye=tr(c,{boundary:ge,rootBoundary:Ae,padding:Ee,altBoundary:we}),dt=vn(c.placement),yt=er(c.placement),tt=!yt,ct=Lo(dt),Ze=ct==="x"?"y":"x",ot=c.modifiersData.popperOffsets,ut=c.rects.reference,pt=c.rects.popper,ht=typeof He=="function"?He(Object.assign({},c.rects,{placement:c.placement})):He,Ct=typeof ht=="number"?{mainAxis:ht,altAxis:ht}:Object.assign({mainAxis:0,altAxis:0},ht),fn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,Cn={x:0,y:0};if(ot){if(B){var en,yn=ct==="y"?Vt:j,Mn=ct==="y"?R:k,wt=ct==="y"?"height":"width",Hn=ot[ct],Gn=Hn+Ye[yn],rr=Hn-Ye[Mn],Ft=Ne?-pt[wt]/2:0,_t=yt===be?ut[wt]:pt[wt],tn=yt===be?-pt[wt]:-ut[wt],Sn=c.elements.arrow,di=Ne&&Sn?Co(Sn):{width:0,height:0},Is=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},pl=Is[yn],ml=Is[Mn],Os=Wr(0,ut[wt],di[wt]),zd=tt?ut[wt]/2-Ft-Os-pl-Ct.mainAxis:_t-Os-pl-Ct.mainAxis,kd=tt?-ut[wt]/2+Ft+Os+ml+Ct.mainAxis:tn+Os+ml+Ct.mainAxis,Ko=c.elements.arrow&&Vr(c.elements.arrow),Hd=Ko?ct==="y"?Ko.clientTop||0:Ko.clientLeft||0:0,gl=(en=fn==null?void 0:fn[ct])!=null?en:0,Gd=Hn+kd-gl,_l=Wr(Ne?Ss(Gn,Hn+zd-gl-Hd):Gn,Hn,Ne?kn(rr,Gd):rr);ot[ct]=_l,Cn[ct]=_l-Hn}if(re){var vl,Vd=ct==="x"?Vt:j,Wd=ct==="x"?R:k,Ii=ot[Ze],Ns=Ze==="y"?"height":"width",xl=Ii+Ye[Vd],yl=Ii-Ye[Wd],Zo=[Vt,j].indexOf(dt)!==-1,Ml=(vl=fn==null?void 0:fn[Ze])!=null?vl:0,Sl=Zo?xl:Ii-ut[Ns]-pt[Ns]-Ml+Ct.altAxis,El=Zo?Ii+ut[Ns]+pt[Ns]-Ml-Ct.altAxis:yl,bl=Ne&&Zo?function(Xd,qd,Jo){var Tl=Wr(Xd,qd,Jo);return Tl>Jo?Jo:Tl}(Sl,Ii,El):Wr(Ne?Sl:xl,Ii,Ne?El:yl);ot[Ze]=bl,Cn[Ze]=bl-Ii}c.modifiersData[E]=Cn}},requiresIfExists:["offset"]};function hf(y,c,g){g===void 0&&(g=!1);var E,F,B=Xt(c),Q=Xt(c)&&function(Ee){var je=Ee.getBoundingClientRect(),Ne=Ji(je.width)/Ee.offsetWidth||1,qe=Ji(je.height)/Ee.offsetHeight||1;return Ne!==1||qe!==1}(c),re=hi(c),ge=Qi(y,Q,g),Ae={scrollLeft:0,scrollTop:0},we={x:0,y:0};return(B||!B&&!g)&&((on(c)!=="body"||Oo(re))&&(Ae=(E=c)!==lt(E)&&Xt(E)?{scrollLeft:(F=E).scrollLeft,scrollTop:F.scrollTop}:Do(E)),Xt(c)?((we=Qi(c,!0)).x+=c.clientLeft,we.y+=c.clientTop):re&&(we.x=Io(re))),{x:ge.left+Ae.scrollLeft-we.x,y:ge.top+Ae.scrollTop-we.y,width:ge.width,height:ge.height}}function ff(y){var c=new Map,g=new Set,E=[];function F(B){g.add(B.name),[].concat(B.requires||[],B.requiresIfExists||[]).forEach(function(Q){if(!g.has(Q)){var re=c.get(Q);re&&F(re)}}),E.push(B)}return y.forEach(function(B){c.set(B.name,B)}),y.forEach(function(B){g.has(B.name)||F(B)}),E}var Cc={placement:"bottom",modifiers:[],strategy:"absolute"};function Lc(){for(var y=arguments.length,c=new Array(y),g=0;g<y;g++)c[g]=arguments[g];return!c.some(function(E){return!(E&&typeof E.getBoundingClientRect=="function")})}function As(y){y===void 0&&(y={});var c=y,g=c.defaultModifiers,E=g===void 0?[]:g,F=c.defaultOptions,B=F===void 0?Cc:F;return function(Q,re,ge){ge===void 0&&(ge=B);var Ae,we,Ee={placement:"bottom",orderedModifiers:[],options:Object.assign({},Cc,B),modifiersData:{},elements:{reference:Q,popper:re},attributes:{},styles:{}},je=[],Ne=!1,qe={state:Ee,setOptions:function(Ye){var dt=typeof Ye=="function"?Ye(Ee.options):Ye;He(),Ee.options=Object.assign({},B,Ee.options,dt),Ee.scrollParents={reference:Qt(Q)?Xr(Q):Q.contextElement?Xr(Q.contextElement):[],popper:Xr(re)};var yt,tt,ct=function(Ze){var ot=ff(Ze);return ui.reduce(function(ut,pt){return ut.concat(ot.filter(function(ht){return ht.phase===pt}))},[])}((yt=[].concat(E,Ee.options.modifiers),tt=yt.reduce(function(Ze,ot){var ut=Ze[ot.name];return Ze[ot.name]=ut?Object.assign({},ut,ot,{options:Object.assign({},ut.options,ot.options),data:Object.assign({},ut.data,ot.data)}):ot,Ze},{}),Object.keys(tt).map(function(Ze){return tt[Ze]})));return Ee.orderedModifiers=ct.filter(function(Ze){return Ze.enabled}),Ee.orderedModifiers.forEach(function(Ze){var ot=Ze.name,ut=Ze.options,pt=ut===void 0?{}:ut,ht=Ze.effect;if(typeof ht=="function"){var Ct=ht({state:Ee,name:ot,instance:qe,options:pt});je.push(Ct||function(){})}}),qe.update()},forceUpdate:function(){if(!Ne){var Ye=Ee.elements,dt=Ye.reference,yt=Ye.popper;if(Lc(dt,yt)){Ee.rects={reference:hf(dt,Vr(yt),Ee.options.strategy==="fixed"),popper:Co(yt)},Ee.reset=!1,Ee.placement=Ee.options.placement,Ee.orderedModifiers.forEach(function(ht){return Ee.modifiersData[ht.name]=Object.assign({},ht.data)});for(var tt=0;tt<Ee.orderedModifiers.length;tt++)if(Ee.reset!==!0){var ct=Ee.orderedModifiers[tt],Ze=ct.fn,ot=ct.options,ut=ot===void 0?{}:ot,pt=ct.name;typeof Ze=="function"&&(Ee=Ze({state:Ee,options:ut,name:pt,instance:qe})||Ee)}else Ee.reset=!1,tt=-1}}},update:(Ae=function(){return new Promise(function(Ye){qe.forceUpdate(),Ye(Ee)})},function(){return we||(we=new Promise(function(Ye){Promise.resolve().then(function(){we=void 0,Ye(Ae())})})),we}),destroy:function(){He(),Ne=!0}};if(!Lc(Q,re))return qe;function He(){je.forEach(function(Ye){return Ye()}),je=[]}return qe.setOptions(ge).then(function(Ye){!Ne&&ge.onFirstUpdate&&ge.onFirstUpdate(Ye)}),qe}}var df=As(),pf=As({defaultModifiers:[Uo,Fo,Po,Ai]}),Bo=As({defaultModifiers:[Uo,Fo,Po,Ai,wc,Ec,Rc,_c,Ac]});const Pc=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Zi,afterRead:_n,afterWrite:Gr,applyStyles:Ai,arrow:_c,auto:W,basePlacements:ee,beforeMain:Tt,beforeRead:St,beforeWrite:At,bottom:R,clippingParents:Fe,computeStyles:Po,createPopper:Bo,createPopperBase:df,createPopperLite:pf,detectOverflow:tr,end:Pe,eventListeners:Uo,flip:Ec,hide:Ac,left:j,main:et,modifierPhases:ui,offset:wc,placements:xt,popper:We,popperGenerator:As,popperOffsets:Fo,preventOverflow:Rc,read:Jt,reference:Oe,right:k,start:be,top:Vt,variationPlacements:Xe,viewport:Ie,write:zn},Symbol.toStringTag,{value:"Module"})),Uc="dropdown",wi=".bs.dropdown",zo=".data-api",mf="ArrowUp",Dc="ArrowDown",gf=`hide${wi}`,_f=`hidden${wi}`,vf=`show${wi}`,xf=`shown${wi}`,Ic=`click${wi}${zo}`,Oc=`keydown${wi}${zo}`,yf=`keyup${wi}${zo}`,nr="show",Ri='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Mf=`${Ri}.${nr}`,ws=".dropdown-menu",Sf=v()?"top-end":"top-start",Ef=v()?"top-start":"top-end",bf=v()?"bottom-end":"bottom-start",Tf=v()?"bottom-start":"bottom-end",Af=v()?"left-start":"right-start",wf=v()?"right-start":"left-start",Rf={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Cf={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Rn extends _e{constructor(c,g){super(c,g),this._popper=null,this._parent=this._element.parentNode,this._menu=ae.next(this._element,ws)[0]||ae.prev(this._element,ws)[0]||ae.findOne(ws,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Rf}static get DefaultType(){return Cf}static get NAME(){return Uc}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!I.trigger(this._element,vf,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const g of[].concat(...document.body.children))I.on(g,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(nr),this._element.classList.add(nr),I.trigger(this._element,xf,c)}}hide(){if(l(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!I.trigger(this._element,gf,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const g of[].concat(...document.body.children))I.off(g,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(nr),this._element.classList.remove(nr),this._element.setAttribute("aria-expanded","false"),J.removeDataAttribute(this._menu,"popper"),I.trigger(this._element,_f,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!s(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${Uc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(Pc===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:s(this._config.reference)?c=a(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const g=this._getPopperConfig();this._popper=Bo(c,this._menu,g)}_isShown(){return this._menu.classList.contains(nr)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return Af;if(c.classList.contains("dropstart"))return wf;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const g=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?g?Ef:Sf:g?Tf:bf}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(g=>Number.parseInt(g,10)):typeof c=="function"?g=>c(g,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(J.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...p(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:g}){const E=ae.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(F=>o(F));E.length&&C(E,g,c===Dc,!E.includes(g)).focus()}static jQueryInterface(c){return this.each(function(){const g=Rn.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const g=ae.find(Mf);for(const E of g){const F=Rn.getInstance(E);if(!F||F._config.autoClose===!1)continue;const B=c.composedPath(),Q=B.includes(F._menu);if(B.includes(F._element)||F._config.autoClose==="inside"&&!Q||F._config.autoClose==="outside"&&Q||F._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const re={relatedTarget:F._element};c.type==="click"&&(re.clickEvent=c),F._completeHide(re)}}static dataApiKeydownHandler(c){const g=/input|textarea/i.test(c.target.tagName),E=c.key==="Escape",F=[mf,Dc].includes(c.key);if(!F&&!E||g&&!E)return;c.preventDefault();const B=this.matches(Ri)?this:ae.prev(this,Ri)[0]||ae.next(this,Ri)[0]||ae.findOne(Ri,c.delegateTarget.parentNode),Q=Rn.getOrCreateInstance(B);if(F)return c.stopPropagation(),Q.show(),void Q._selectMenuItem(c);Q._isShown()&&(c.stopPropagation(),Q.hide(),B.focus())}}I.on(document,Oc,Ri,Rn.dataApiKeydownHandler),I.on(document,Oc,ws,Rn.dataApiKeydownHandler),I.on(document,Ic,Rn.clearMenus),I.on(document,yf,Rn.clearMenus),I.on(document,Ic,Ri,function(y){y.preventDefault(),Rn.getOrCreateInstance(this).toggle()}),x(Rn);const Nc="backdrop",Fc="show",Bc=`mousedown.bs.${Nc}`,Lf={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Pf={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class zc extends ve{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return Lf}static get DefaultType(){return Pf}static get NAME(){return Nc}show(c){if(!this._config.isVisible)return void p(c);this._append();const g=this._getElement();this._config.isAnimated&&f(g),g.classList.add(Fc),this._emulateAnimation(()=>{p(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(Fc),this._emulateAnimation(()=>{this.dispose(),p(c)})):p(c)}dispose(){this._isAppended&&(I.off(this._element,Bc),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=a(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),I.on(c,Bc,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){m(c,this._getElement(),this._config.isAnimated)}}const Rs=".bs.focustrap",Uf=`focusin${Rs}`,Df=`keydown.tab${Rs}`,kc="backward",If={autofocus:!0,trapElement:null},Of={autofocus:"boolean",trapElement:"element"};class Hc extends ve{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return If}static get DefaultType(){return Of}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),I.off(document,Rs),I.on(document,Uf,c=>this._handleFocusin(c)),I.on(document,Df,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,I.off(document,Rs))}_handleFocusin(c){const{trapElement:g}=this._config;if(c.target===document||c.target===g||g.contains(c.target))return;const E=ae.focusableChildren(g);E.length===0?g.focus():this._lastTabNavDirection===kc?E[E.length-1].focus():E[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?kc:"forward")}}const Gc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Vc=".sticky-top",Cs="padding-right",Wc="margin-right";class ko{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Cs,g=>g+c),this._setElementAttributes(Gc,Cs,g=>g+c),this._setElementAttributes(Vc,Wc,g=>g-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Cs),this._resetElementAttributes(Gc,Cs),this._resetElementAttributes(Vc,Wc)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,g,E){const F=this.getWidth();this._applyManipulationCallback(c,B=>{if(B!==this._element&&window.innerWidth>B.clientWidth+F)return;this._saveInitialAttribute(B,g);const Q=window.getComputedStyle(B).getPropertyValue(g);B.style.setProperty(g,`${E(Number.parseFloat(Q))}px`)})}_saveInitialAttribute(c,g){const E=c.style.getPropertyValue(g);E&&J.setDataAttribute(c,g,E)}_resetElementAttributes(c,g){this._applyManipulationCallback(c,E=>{const F=J.getDataAttribute(E,g);F!==null?(J.removeDataAttribute(E,g),E.style.setProperty(g,F)):E.style.removeProperty(g)})}_applyManipulationCallback(c,g){if(s(c))g(c);else for(const E of ae.find(c,this._element))g(E)}}const xn=".bs.modal",Nf=`hide${xn}`,Ff=`hidePrevented${xn}`,Xc=`hidden${xn}`,qc=`show${xn}`,Bf=`shown${xn}`,zf=`resize${xn}`,kf=`click.dismiss${xn}`,Hf=`mousedown.dismiss${xn}`,Gf=`keydown.dismiss${xn}`,Vf=`click${xn}.data-api`,Yc="modal-open",jc="show",Ho="modal-static",Wf={backdrop:!0,focus:!0,keyboard:!0},Xf={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ci extends _e{constructor(c,g){super(c,g),this._dialog=ae.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ko,this._addEventListeners()}static get Default(){return Wf}static get DefaultType(){return Xf}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||I.trigger(this._element,qc,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Yc),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(I.trigger(this._element,Nf).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(jc),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){I.off(window,xn),I.off(this._dialog,xn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new zc({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Hc({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const g=ae.findOne(".modal-body",this._dialog);g&&(g.scrollTop=0),f(this._element),this._element.classList.add(jc),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,I.trigger(this._element,Bf,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){I.on(this._element,Gf,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),I.on(window,zf,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),I.on(this._element,Hf,c=>{I.one(this._element,kf,g=>{this._element===c.target&&this._element===g.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Yc),this._resetAdjustments(),this._scrollBar.reset(),I.trigger(this._element,Xc)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(I.trigger(this._element,Ff).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,g=this._element.style.overflowY;g==="hidden"||this._element.classList.contains(Ho)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(Ho),this._queueCallback(()=>{this._element.classList.remove(Ho),this._queueCallback(()=>{this._element.style.overflowY=g},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,g=this._scrollBar.getWidth(),E=g>0;if(E&&!c){const F=v()?"paddingLeft":"paddingRight";this._element.style[F]=`${g}px`}if(!E&&c){const F=v()?"paddingRight":"paddingLeft";this._element.style[F]=`${g}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,g){return this.each(function(){const E=Ci.getOrCreateInstance(this,c);if(typeof c=="string"){if(E[c]===void 0)throw new TypeError(`No method named "${c}"`);E[c](g)}})}}I.on(document,Vf,'[data-bs-toggle="modal"]',function(y){const c=ae.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&y.preventDefault(),I.one(c,qc,E=>{E.defaultPrevented||I.one(c,Xc,()=>{o(this)&&this.focus()})});const g=ae.findOne(".modal.show");g&&Ci.getInstance(g).hide(),Ci.getOrCreateInstance(c).toggle(this)}),De(Ci),x(Ci);const $n=".bs.offcanvas",$c=".data-api",qf=`load${$n}${$c}`,Kc="show",Zc="showing",Jc="hiding",Qc=".offcanvas.show",Yf=`show${$n}`,jf=`shown${$n}`,$f=`hide${$n}`,el=`hidePrevented${$n}`,tl=`hidden${$n}`,Kf=`resize${$n}`,Zf=`click${$n}${$c}`,Jf=`keydown.dismiss${$n}`,Qf={backdrop:!0,keyboard:!0,scroll:!1},ed={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Kn extends _e{constructor(c,g){super(c,g),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Qf}static get DefaultType(){return ed}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||I.trigger(this._element,Yf,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ko().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Zc),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Kc),this._element.classList.remove(Zc),I.trigger(this._element,jf,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(I.trigger(this._element,$f).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Jc),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Kc,Jc),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ko().reset(),I.trigger(this._element,tl)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new zc({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():I.trigger(this._element,el)}:null})}_initializeFocusTrap(){return new Hc({trapElement:this._element})}_addEventListeners(){I.on(this._element,Jf,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():I.trigger(this._element,el))})}static jQueryInterface(c){return this.each(function(){const g=Kn.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c](this)}})}}I.on(document,Zf,'[data-bs-toggle="offcanvas"]',function(y){const c=ae.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&y.preventDefault(),l(this))return;I.one(c,tl,()=>{o(this)&&this.focus()});const g=ae.findOne(Qc);g&&g!==c&&Kn.getInstance(g).hide(),Kn.getOrCreateInstance(c).toggle(this)}),I.on(window,qf,()=>{for(const y of ae.find(Qc))Kn.getOrCreateInstance(y).show()}),I.on(window,Kf,()=>{for(const y of ae.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(y).position!=="fixed"&&Kn.getOrCreateInstance(y).hide()}),De(Kn),x(Kn);const nl={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},td=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),nd=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,id=(y,c)=>{const g=y.nodeName.toLowerCase();return c.includes(g)?!td.has(g)||!!nd.test(y.nodeValue):c.filter(E=>E instanceof RegExp).some(E=>E.test(g))},rd={allowList:nl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},sd={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},od={entry:"(string|element|function|null)",selector:"(string|element)"};class ad extends ve{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return rd}static get DefaultType(){return sd}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[F,B]of Object.entries(this._config.content))this._setContent(c,B,F);const g=c.children[0],E=this._resolvePossibleFunction(this._config.extraClass);return E&&g.classList.add(...E.split(" ")),g}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[g,E]of Object.entries(c))super._typeCheckConfig({selector:g,entry:E},od)}_setContent(c,g,E){const F=ae.findOne(E,c);F&&((g=this._resolvePossibleFunction(g))?s(g)?this._putElementInTemplate(a(g),F):this._config.html?F.innerHTML=this._maybeSanitize(g):F.textContent=g:F.remove())}_maybeSanitize(c){return this._config.sanitize?function(g,E,F){if(!g.length)return g;if(F&&typeof F=="function")return F(g);const B=new window.DOMParser().parseFromString(g,"text/html"),Q=[].concat(...B.body.querySelectorAll("*"));for(const re of Q){const ge=re.nodeName.toLowerCase();if(!Object.keys(E).includes(ge)){re.remove();continue}const Ae=[].concat(...re.attributes),we=[].concat(E["*"]||[],E[ge]||[]);for(const Ee of Ae)id(Ee,we)||re.removeAttribute(Ee.nodeName)}return B.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return p(c,[this])}_putElementInTemplate(c,g){if(this._config.html)return g.innerHTML="",void g.append(c);g.textContent=c.textContent}}const cd=new Set(["sanitize","allowList","sanitizeFn"]),Go="fade",Ls="show",il=".modal",rl="hide.bs.modal",qr="hover",Vo="focus",ld={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},ud={allowList:nl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},hd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Li extends _e{constructor(c,g){if(Pc===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,g),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ud}static get DefaultType(){return hd}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),I.off(this._element.closest(il),rl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=I.trigger(this._element,this.constructor.eventName("show")),g=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!g)return;this._disposePopper();const E=this._getTipElement();this._element.setAttribute("aria-describedby",E.getAttribute("id"));const{container:F}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(F.append(E),I.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(E),E.classList.add(Ls),"ontouchstart"in document.documentElement)for(const B of[].concat(...document.body.children))I.on(B,"mouseover",h);this._queueCallback(()=>{I.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!I.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Ls),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))I.off(c,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[Vo]=!1,this._activeTrigger[qr]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),I.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const g=this._getTemplateFactory(c).toHtml();if(!g)return null;g.classList.remove(Go,Ls),g.classList.add(`bs-${this.constructor.NAME}-auto`);const E=(F=>{do F+=Math.floor(1e6*Math.random());while(document.getElementById(F));return F})(this.constructor.NAME).toString();return g.setAttribute("id",E),this._isAnimated()&&g.classList.add(Go),g}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new ad({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Go)}_isShown(){return this.tip&&this.tip.classList.contains(Ls)}_createPopper(c){const g=p(this._config.placement,[this,c,this._element]),E=ld[g.toUpperCase()];return Bo(this._element,c,this._getPopperConfig(E))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(g=>Number.parseInt(g,10)):typeof c=="function"?g=>c(g,this._element):c}_resolvePossibleFunction(c){return p(c,[this._element])}_getPopperConfig(c){const g={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:E=>{this._getTipElement().setAttribute("data-popper-placement",E.state.placement)}}]};return{...g,...p(this._config.popperConfig,[g])}}_setListeners(){const c=this._config.trigger.split(" ");for(const g of c)if(g==="click")I.on(this._element,this.constructor.eventName("click"),this._config.selector,E=>{this._initializeOnDelegatedTarget(E).toggle()});else if(g!=="manual"){const E=g===qr?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),F=g===qr?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");I.on(this._element,E,this._config.selector,B=>{const Q=this._initializeOnDelegatedTarget(B);Q._activeTrigger[B.type==="focusin"?Vo:qr]=!0,Q._enter()}),I.on(this._element,F,this._config.selector,B=>{const Q=this._initializeOnDelegatedTarget(B);Q._activeTrigger[B.type==="focusout"?Vo:qr]=Q._element.contains(B.relatedTarget),Q._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},I.on(this._element.closest(il),rl,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,g){clearTimeout(this._timeout),this._timeout=setTimeout(c,g)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const g=J.getDataAttributes(this._element);for(const E of Object.keys(g))cd.has(E)&&delete g[E];return c={...g,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:a(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[g,E]of Object.entries(this._config))this.constructor.Default[g]!==E&&(c[g]=E);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const g=Li.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}}x(Li);const fd={...Li.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},dd={...Li.DefaultType,content:"(null|string|element|function)"};class Ps extends Li{static get Default(){return fd}static get DefaultType(){return dd}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const g=Ps.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}}x(Ps);const Wo=".bs.scrollspy",pd=`activate${Wo}`,sl=`click${Wo}`,md=`load${Wo}.data-api`,ir="active",Xo="[href]",ol=".nav-link",gd=`${ol}, .nav-item > ${ol}, .list-group-item`,_d={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},vd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Yr extends _e{constructor(c,g){super(c,g),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return _d}static get DefaultType(){return vd}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=a(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(g=>Number.parseFloat(g))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(I.off(this._config.target,sl),I.on(this._config.target,sl,Xo,c=>{const g=this._observableSections.get(c.target.hash);if(g){c.preventDefault();const E=this._rootElement||window,F=g.offsetTop-this._element.offsetTop;if(E.scrollTo)return void E.scrollTo({top:F,behavior:"smooth"});E.scrollTop=F}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(g=>this._observerCallback(g),c)}_observerCallback(c){const g=Q=>this._targetLinks.get(`#${Q.target.id}`),E=Q=>{this._previousScrollData.visibleEntryTop=Q.target.offsetTop,this._process(g(Q))},F=(this._rootElement||document.documentElement).scrollTop,B=F>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=F;for(const Q of c){if(!Q.isIntersecting){this._activeTarget=null,this._clearActiveClass(g(Q));continue}const re=Q.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(B&&re){if(E(Q),!F)return}else B||re||E(Q)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=ae.find(Xo,this._config.target);for(const g of c){if(!g.hash||l(g))continue;const E=ae.findOne(decodeURI(g.hash),this._element);o(E)&&(this._targetLinks.set(decodeURI(g.hash),g),this._observableSections.set(g.hash,E))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(ir),this._activateParents(c),I.trigger(this._element,pd,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))ae.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(ir);else for(const g of ae.parents(c,".nav, .list-group"))for(const E of ae.prev(g,gd))E.classList.add(ir)}_clearActiveClass(c){c.classList.remove(ir);const g=ae.find(`${Xo}.${ir}`,c);for(const E of g)E.classList.remove(ir)}static jQueryInterface(c){return this.each(function(){const g=Yr.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}})}}I.on(window,md,()=>{for(const y of ae.find('[data-bs-spy="scroll"]'))Yr.getOrCreateInstance(y)}),x(Yr);const Pi=".bs.tab",xd=`hide${Pi}`,yd=`hidden${Pi}`,Md=`show${Pi}`,Sd=`shown${Pi}`,Ed=`click${Pi}`,bd=`keydown${Pi}`,Td=`load${Pi}`,Ad="ArrowLeft",al="ArrowRight",wd="ArrowUp",cl="ArrowDown",qo="Home",ll="End",Ui="active",ul="fade",Yo="show",hl=".dropdown-toggle",jo=`:not(${hl})`,fl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',$o=`.nav-link${jo}, .list-group-item${jo}, [role="tab"]${jo}, ${fl}`,Rd=`.${Ui}[data-bs-toggle="tab"], .${Ui}[data-bs-toggle="pill"], .${Ui}[data-bs-toggle="list"]`;class Di extends _e{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),I.on(this._element,bd,g=>this._keydown(g)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const g=this._getActiveElem(),E=g?I.trigger(g,xd,{relatedTarget:c}):null;I.trigger(c,Md,{relatedTarget:g}).defaultPrevented||E&&E.defaultPrevented||(this._deactivate(g,c),this._activate(c,g))}_activate(c,g){c&&(c.classList.add(Ui),this._activate(ae.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),I.trigger(c,Sd,{relatedTarget:g})):c.classList.add(Yo)},c,c.classList.contains(ul)))}_deactivate(c,g){c&&(c.classList.remove(Ui),c.blur(),this._deactivate(ae.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),I.trigger(c,yd,{relatedTarget:g})):c.classList.remove(Yo)},c,c.classList.contains(ul)))}_keydown(c){if(![Ad,al,wd,cl,qo,ll].includes(c.key))return;c.stopPropagation(),c.preventDefault();const g=this._getChildren().filter(F=>!l(F));let E;if([qo,ll].includes(c.key))E=g[c.key===qo?0:g.length-1];else{const F=[al,cl].includes(c.key);E=C(g,c.target,F,!0)}E&&(E.focus({preventScroll:!0}),Di.getOrCreateInstance(E).show())}_getChildren(){return ae.find($o,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,g){this._setAttributeIfNotExists(c,"role","tablist");for(const E of g)this._setInitialAttributesOnChild(E)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const g=this._elemIsActive(c),E=this._getOuterElement(c);c.setAttribute("aria-selected",g),E!==c&&this._setAttributeIfNotExists(E,"role","presentation"),g||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const g=ae.getElementFromSelector(c);g&&(this._setAttributeIfNotExists(g,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(g,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,g){const E=this._getOuterElement(c);if(!E.classList.contains("dropdown"))return;const F=(B,Q)=>{const re=ae.findOne(B,E);re&&re.classList.toggle(Q,g)};F(hl,Ui),F(".dropdown-menu",Yo),E.setAttribute("aria-expanded",g)}_setAttributeIfNotExists(c,g,E){c.hasAttribute(g)||c.setAttribute(g,E)}_elemIsActive(c){return c.classList.contains(Ui)}_getInnerElement(c){return c.matches($o)?c:ae.findOne($o,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const g=Di.getOrCreateInstance(this);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}})}}I.on(document,Ed,fl,function(y){["A","AREA"].includes(this.tagName)&&y.preventDefault(),l(this)||Di.getOrCreateInstance(this).show()}),I.on(window,Td,()=>{for(const y of ae.find(Rd))Di.getOrCreateInstance(y)}),x(Di);const fi=".bs.toast",Cd=`mouseover${fi}`,Ld=`mouseout${fi}`,Pd=`focusin${fi}`,Ud=`focusout${fi}`,Dd=`hide${fi}`,Id=`hidden${fi}`,Od=`show${fi}`,Nd=`shown${fi}`,dl="hide",Us="show",Ds="showing",Fd={animation:"boolean",autohide:"boolean",delay:"number"},Bd={animation:!0,autohide:!0,delay:5e3};class jr extends _e{constructor(c,g){super(c,g),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Bd}static get DefaultType(){return Fd}static get NAME(){return"toast"}show(){I.trigger(this._element,Od).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(dl),f(this._element),this._element.classList.add(Us,Ds),this._queueCallback(()=>{this._element.classList.remove(Ds),I.trigger(this._element,Nd),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(I.trigger(this._element,Dd).defaultPrevented||(this._element.classList.add(Ds),this._queueCallback(()=>{this._element.classList.add(dl),this._element.classList.remove(Ds,Us),I.trigger(this._element,Id)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Us),super.dispose()}isShown(){return this._element.classList.contains(Us)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,g){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=g;break;case"focusin":case"focusout":this._hasKeyboardInteraction=g}if(g)return void this._clearTimeout();const E=c.relatedTarget;this._element===E||this._element.contains(E)||this._maybeScheduleHide()}_setListeners(){I.on(this._element,Cd,c=>this._onInteraction(c,!0)),I.on(this._element,Ld,c=>this._onInteraction(c,!1)),I.on(this._element,Pd,c=>this._onInteraction(c,!0)),I.on(this._element,Ud,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const g=jr.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c](this)}})}}return De(jr),x(jr),{Alert:ke,Button:Mt,Carousel:it,Collapse:li,Dropdown:Rn,Modal:Ci,Offcanvas:Kn,Popover:Ps,ScrollSpy:Yr,Tab:Di,Toast:jr,Tooltip:Li}});const ls=[0,1,0],us=[0,0,1];function Ar(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}function Kd(i,e,t,n){return i*n*n+e*n+t}function Na(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function hs(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function Fa(i){return Math.round(i*1e6)/1e6}function Zd(i){return i*Math.PI/180}function Jd(i){return i*180/Math.PI}function Ba(i){const e=Math.sqrt(i.reduce((t,n)=>t+n*n,0));return i.map(t=>t/e)}function Qd(i){const[e,t,n,r,s,a,o,l,u]=i,h=(e+s+u-1)/2,[f,d]=function(){const _=Fa(h);if(_===0)return[90,1];if(_===1)return[0,0];if(_===-1)return[180,0];const v=Math.acos(_);return[Jd(v),Math.sin(v)]}();if(d!==0){const _=l-a,v=n-o,x=r-t;return[Ba([_,v,x]),f]}else{const _=[[e+1,t,n],[t,s+1,a],[n,a,u+1]].find(v=>v.some(x=>x!==0))||[0,0,0];return[Ba(_),f]}}function Al(i){const[e,t,n,r]=[...Ba(i[0]),i[1]%360],[s,a]=function(){if(r===0)return[1,0];if(r===180)return[-1,0];if(r===90)return[0,1];const l=Zd(r);return[Math.cos(l),Math.sin(l)]}(),o=1-s;return[e*e*o+s,e*t*o-n*a,e*n*o+t*a,t*e*o+n*a,t*t*o+s,t*n*o-e*a,n*e*o-t*a,n*t*o+e*a,n*n*o+s]}function wl(i,e,t){let n=Na(i,e);if(n>0)return[1,0,0,0,1,0,0,0,1];if(n<0){if(Na(i,t)!==0)throw new Error("ref axis must be orthogonal to v1");return Al([t,180])}return Al([hs(i,e),90])}function ep(i,e){const[t,n,r,s,a,o,l,u,h]=i,[f,d,_,v,x,p,m,C,S]=e;return[t*f+n*v+r*m,t*d+n*x+r*C,t*_+n*p+r*S,s*f+a*v+o*m,s*d+a*x+o*C,s*_+a*p+o*S,l*f+u*v+h*m,l*d+u*x+h*C,l*_+u*p+h*S]}function tp(i,e){const[t,n,r,s,a,o,l,u,h]=i,[f,d,_]=e;return[t*f+n*d+r*_,s*f+a*d+o*_,l*f+u*d+h*_]}function np(i,e,t,n){const r=wl(i,t,e),s=tp(r,e),a=wl(s,n,Na(s,i)===0?i:e),o=ep(a,r);return Qd(o)}function ip(i,e,t,n){const r=np(ls,us,i,e);r[1]=-r[1];const[s,a,o]=t.map(p=>p===0?-1:p===n-1?1:0),[l,u,h]=r[0],f=[s*l,a*u,o*h];f.filter(p=>p<0).length>f.filter(p=>p>0).length&&(r[0]=r[0].map(p=>p===0?0:-p),r[1]=-r[1]);const[d,_,v]=r[0],x=d!==0?1/Math.abs(d):_!==0?1/Math.abs(_):v!==0?1/Math.abs(v):1;return r[0]=r[0].map(p=>Fa(p*x)),r[1]=Fa(r[1]),r[1]===-180&&(r[1]=180),r}function Qo(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,l=a===0?1:a===180?-1:0,h=[[1,0,0,0,l,-o,0,o,l],[l,0,o,0,1,0,-o,0,l],[l,-o,0,o,l,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function Rl(i,e,t){const[n,r,s]=t;if(r===1)return i;if(s===1)return e;if(n===-1)return hs(e,i);if(n===1)return hs(i,e);if(s===-1)return e.map(a=>-a);if(r===-1)return i.map(a=>-a);throw new Error("unreachable")}function Fs(i){const[e,t,n,r]=i;return[e,-t,n,r]}function Cl(i,e){const t={R:[0,-90,-1],L:[0,90,1],U:[1,-90,-1],D:[1,90,1],F:[2,-90,-1],B:[2,90,1],M:[0,90,2],E:[1,90,2],S:[2,-90,2],x:[0,-90,0],y:[1,-90,0],z:[2,-90,0]},n=i.match(/^([0-9]+)?(-([0-9]+))?([A-Za-z])(w?)([0-9]+)?(')?$/);if(!n)throw`parse op [${i}] error`;let r=n[4],s=!1;(n[5]==="w"||"rludbfmes".indexOf(r)>=0)&&(r=r.toUpperCase(),s=!0);let a=0,o=1,l=n[1],u=n[3];u?(a=parseInt(l||"1")-1,o=parseInt(u)):s?(a=0,o=parseInt(l||"2")):(a=parseInt(l||"1")-1,o=a+1);const[h,f,d]=t[r],_=n[7]?-1:1,v=n[6]?parseInt(n[6]):1,x=f*_*v;let p=0,m=0;switch(d){case 1:p=a,m=o;break;case-1:m=e-a,p=e-o;break;case 0:p=0,m=e;break;case 2:{const C=s?e-2:1,S=(e-C)%2===1?C+1:C;p=(e-S)/2,m=p+S;break}}return[h,x,p,m]}function fo(i,e){let t=0,n=0;const r=[];for(;;){if(i[n]===" "||n>=i.length){const s=i.slice(t,n).trim();if(s.length>0&&r.push(Cl(s,e)),n>=i.length)break;n++,t=n;continue}if(i[n]===","||i[n]===":"){const s=i.slice(t,n).trim();s.length>0&&r.push(Cl(s,e));const a=fo(i.slice(n+1),e);return i[n]===","?[...r,...a,...r.reverse().map(Fs),...a.reverse().map(Fs)]:[...r,...a,...r.reverse().map(Fs)]}if(i[n]==="["||i[n]==="("){const s=i[n],a=i[n]==="["?"]":")";let o=1,l=n+1;for(;l<i.length&&(i[l]===s&&o++,i[l]===a&&o--,o!==0);)l++;let u=fo(i.slice(n+1,l),e);l++,l<i.length&&i[l]=="'"&&(l++,u=u.reverse().map(Fs));let h=1;if(l<i.length){let f=l;for(;f<i.length&&i[f]>="0"&&i[f]<="9";)f++;f>l&&(h=parseInt(i.slice(l,f))),l=f}for(let f=0;f<h;f++)r.push(...u);n=l,t=n;continue}n++}return r}function Er(i,e){return e.map(t=>t.opType==="commutator"?`(${Er(i,t.child1)}, ${Er(i,t.child2)})`:t.opType==="conjugate"?`(${Er(i,t.child1)}: ${Er(i,t.child2)})`:t.opType==="repeat"?`(${Er(i,t.child1)})${t.data}`:fh(i,...t.op)).join(" ")}function fs(i){let e=0;for(const t of i)t.opType!=="simple"?(e+=fs(t.child1),e+=fs(t.child2)):e++;return e}function lh(i,e){return i[0]===e[0]&&(i[1]+e[1])%360===0&&i[2]===e[2]&&i[3]===e[3]}function Bs(i,e,t,n,r){for(let s=0;s<r;s++)if(!lh(i[e+s],t[n+r-1-s]))return!1;return!0}function uh(i,e){for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function hh(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(!uh(i[t],e[t]))return!1;return!0}function Ll(i){const e=[...i];return i[1]!==180&&(e[1]=-i[1]),e}function rp(i,e){if(i.length%2===0){if(Bs(i,0,i,i.length/2,e)&&Bs(i,e,i,i.length/2+e,i.length/2-e))return[!0]}else if(i.length>=7){const t=(i.length+1)/2;if(Bs(i,0,i,t-1,e-1)&&Bs(i,e-1,i,t-1+e,t-e))return[!0,i[t-1+e-1]]}return[!1]}function sp(i,e){if(i.length%e!==0||e===1||e>i.length/2)return!1;const t=i.length/e;for(let n=0;n<e;n++){const r=i[n];for(let s=1;s<t;s++){const a=i[s*e+n];if(!uh(r,a))return!1}}return!0}function op(i){let e=0;for(;e<(i.length-1)/2&&lh(i[e],i[i.length-1-e]);e++);return e}function ri(i,e,t){if(e>i.maxDepth&&(i.maxDepth=e),t.length<=3||e>i.depthLimit)return t.map(o=>({opType:"simple",child1:[],child2:[],op:o,data:0}));const n=[];for(let o=2;o<=t.length/2;o++)sp(t,o)&&n.push([{opType:"repeat",child1:ri(i,e+1,t.slice(0,o)),child2:[],op:[0,0,0,0],data:t.length/o}]);for(let o=1;o<t.length/2;o++){const[l,u,h]=rp(t,o);if(l){let f=t;u&&(f=[Ll(u),...f]),h&&(f=[...f,Ll(h)]);const d=[];u&&d.push({opType:"simple",child1:[],child2:[],op:u,data:0}),d.push({opType:"commutator",child1:ri(i,e+1,f.slice(0,o)),child2:ri(i,e+1,f.slice(o,f.length/2)),op:[0,0,0,0],data:0}),h&&d.push({opType:"simple",child1:[],child2:[],op:h,data:0}),n.push(d)}}let r=op(t);r>1&&e===1&&n.push([{opType:"conjugate",child1:ri(i,e+1,t.slice(0,r)),child2:ri(i,e+1,t.slice(r,t.length-r)),op:[0,0,0,0],data:0}]);for(let o=1;o<t.length;o++)n.push([...ri(i,e+1,t.slice(0,t.length-o)),...ri(i,e+1,t.slice(t.length-o))]);e===1&&console.log("co-candidates",n);let s=-1,a=[];for(const o of n){const l=[];let u=0,h=0;for(h=0;h<o.length;h++)if(o[h].opType!=="simple"){if(u<h){const d=o.slice(u,h).map(v=>v.op),_=po(i.n,d);l.push(..._.map(v=>({opType:"simple",child1:[],child2:[],op:v,data:0})))}u=h+1,l.push(o[h])}if(u<h){const d=o.slice(u,h).map(_=>_.op);po(i.n,d),l.push(...d.map(_=>({opType:"simple",child1:[],child2:[],op:_,data:0})))}const f=fs(l);(s===-1||f<s)&&(s=f,a=l)}return a}function ap(i,e,t){let n={depthLimit:e,maxDepth:0,n:i},r=ri(n,1,t);const s=po(i,t);if(!hh(t,s)){const a=fs(r),o={depthLimit:e,maxDepth:0,n:i},l=ri(o,1,s);fs(l)<a&&(r=l,n=o)}return{alg:Er(i,r),complete:n.maxDepth<=e}}function po(i,e){const t=n=>{const r=[],s=n[0][0];let a=-1,o=0;for(let l=0;l<i;l++){let u=0;for(const h of n){const[f,d,_,v]=h;l>=_&&l<v&&(u+=d)}u!==o&&(a>=0&&o!==0&&r.push([s,o,a,l]),a=l,o=u)}return a>=0&&o!==0&&r.push([s,o,a,i]),r};for(;;){const n=[];for(let r=0;r<e.length;){const s=e[r][0];let a=r+1;for(;a<e.length&&e[a][0]===s;a++);a===r+1?n.push(e[r]):n.push(...t(e.slice(r,a))),r=a}if(hh(e,n))return n;e=n}}function fh(i,e,t,n,r){const s=(t/90%4+4)%4-2,a=l=>l===0?"2":l===1?"'":"";if(n===0&&r===i)return"xyz"[e].toLowerCase()+a(-s);const o="MES"[e];if(n*2===i-1&&r===n+1)return o+a(o==="S"?-s:s);if(n===1&&r===i-1)return o.toLowerCase()+a(o==="S"?-s:s);if(n+r>=i){const l="RUF"[e],u=i-r,h=i-n;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+l+a(-s)}else{const l="LDB"[e],u=n,h=r;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+l+a(s)}}function Pl(i,e){const t=[];for(const n of e){const[r,s,a,o]=n;s!==0&&t.push(fh(i,r,s,a,o))}return t.join(" ")}function cp(i,e,t){let{position:n,T:r,F:s}=i;for(const[a,o,l,u]of e)if(n[a]>=l&&n[a]<u){const[h,f,d]=n;s=Qo(s,a,o),r=Qo(r,a,o);const _=(t-1)/2,[v,x,p]=Qo([h-_,f-_,d-_],a,o);n=[v+_,x+_,p+_]}return{position:n,T:r,F:s}}function za(i,e){const t=Dr(e,i);if(t.length===3){const[n,r,s]=t.map(l=>l.face),a=["U","F","R","L","B","D"],o=(l,u,h)=>l+a.filter(f=>f===u||f===h).join("");return[o(n,r,s),o(r,s,n),o(s,n,r)]}else if(t.length===2){const[n,r]=t,s=(a,o)=>{const l=n.a===0||n.a===i-1?n.b:n.a;return a.face+o.face+(l*2===i-1?"":l+1)};return[s(n,r),s(r,n)]}else{const n=t[0],r=`${n.a+1}`,s=`${n.b+1}`,a=r.length+s.length===2?"":"-";return[n.face+r+a+s]}}function lp(i){let e=ls,t=us;for(let n=1;;n++){for(const r of i)e=Rl(r.nT,r.nF,e),t=Rl(r.nT,r.nF,t);if(Ar(e,ls)&&Ar(t,us))return n}}function up(i){const e=(r,s)=>{for(;s;){const a=s;s=r%s,r=a}return r},t=(r,s)=>r*s/e(r,s);let n=1;for(const r of i){const s=lp(r);n=t(n,s*r.length)}return n}function hp(i,e=3,t=!1){let n=[];try{n=fo(i,e)}catch{i=i.replace(/([rludfbxyzmes])/ig," $1"),n=fo(i,e)}const r={},s=[],a=(o,l,u)=>{if(o*e*e+l*e+u in r)return;let f={position:[o,l,u],T:ls,F:us};const d=[];for(;;){let _=cp(f,n,e);if(r[Kd(..._.position,e)]=!0,!Ar(_.position,f.position)||!Ar(_.T,f.T)||!Ar(_.F,f.F)){const v=ip(_.T,_.F,f.position,e);d.push({p1:f.position,p2:_.position,nT:_.T,nF:_.F,rotation:v})}if(Ar(_.position,[o,l,u]))break;f={position:_.position,T:ls,F:us}}d.length>0&&s.push(d)};if(t)for(let o=0;o<e;o++)for(let l=0;l<e;l++)for(let u=0;u<e;u++)a(o,l,u);else{for(let o=0;o<e;o++)for(let l=0;l<e;l++)a(o,l,0),a(o,l,e-1);for(let o=0;o<e;o++)for(let l=1;l<e-1;l++)a(o,0,l),a(o,e-1,l);for(let o=1;o<e-1;o++)for(let l=1;l<e-1;l++)a(0,o,l),a(e-1,o,l)}return{N:e,alg:i,regulatedAlg:Pl(e,n),simplifiedAlg:Pl(e,po(e,n)),ops:n,cycles:s.map(o=>o.map(l=>l.p1)).filter(o=>o.length>1),rotates:s.filter(o=>o.length===1).map(o=>({unit:{position:o[0].p1,T:o[0].nT,F:o[0].nF},degree:o[0].rotation[1]})),permutations:s,order:up(s),getAllFacesColors:function(){return dp(this)}}}function Dr(i,e){const[t,n,r]=i,s=[];return n===e-1&&s.push({face:"U",a:t,b:r}),r===e-1&&s.push({face:"F",a:t,b:e-1-n}),t===e-1&&s.push({face:"R",a:e-1-r,b:e-1-n}),t===0&&s.push({face:"L",a:r,b:e-1-n}),n===0&&s.push({face:"D",a:t,b:e-1-r}),r===0&&s.push({face:"B",a:e-1-t,b:e-1-n}),s}function Qa(i,e){const t=(o,l,u=["U","F","R","L","B","D"])=>{if(o.length===0)return u;const h={U:0,D:0,F:0,B:0,L:0,R:0};for(const d of o)for(const _ of Dr(d,l))h[_.face]++;const f=[...u].sort((d,_)=>h[_]-h[d])[0];return[f,...t(o.filter(d=>Dr(d,l).every(_=>_.face!==f)),l,u.filter(d=>d!==f))]},n=(o,l)=>{for(const u of l)for(const h of o)if(h.face===u)return h;throw new Error("unreachable")},r=(o,l,u)=>{const h=n(Dr(o,l),u),f=za(l,o).find(d=>d[0]===h.face);return{point:o,facePoint:h,name:f}},s=t(i.map(o=>o.map(l=>l.p1)).flat(),e),a=[];for(const o of i){const l=t(o.map(u=>u.p1),e,[...s]);a.push(o.map(u=>({...u,p1:r(u.p1,e,l),p2:r(u.p2,e,l)})))}return a}function dh(i){return{U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]}[i]}function fp(i){const[e,t,n]=i;if(e===-1)return"L";if(e===1)return"R";if(t===-1)return"D";if(t===1)return"U";if(n===-1)return"B";if(n===1)return"F";throw new Error("unreachable")}function dp(i){const e={U:[],F:[],R:[],L:[],D:[],B:[]},t=(n,r,s)=>{let a=[0,0,0];switch(s){case"U":a=n;break;case"F":a=r;break;case"L":a=hs(r,n);break;case"R":a=hs(n,r);break;case"B":a=r.map(l=>-l);break;case"D":a=n.map(l=>-l);break}return fp(a)};for(const n of i.permutations)for(const r of n){const s=Dr(r.p1,i.N),a=Dr(r.p2,i.N);for(const o of s){const l=t(r.nT,r.nF,o.face);if(l!==o.face){const u=a.find(h=>h.face===l);e[u.face].push({a:u.a,b:u.b,color:o.face})}}}return e}function pp(i,e,t,n,r,s,a){const o=i.createLinearGradient(e,t,n,r);o.addColorStop(0,"rgba(255, 255, 255, 0)"),o.addColorStop(.1,s),o.addColorStop(1,s),i.strokeStyle=o;var l=n-e,u=r-t,h=Math.atan2(u,l);i.moveTo(e,t),i.lineTo(n,r),i.lineTo(n-a*Math.cos(h-Math.PI/6),r-a*Math.sin(h-Math.PI/6)),i.moveTo(n,r),i.lineTo(n-a*Math.cos(h+Math.PI/6),r-a*Math.sin(h+Math.PI/6))}function zs(i,e,t,n,r){i.moveTo(e,t),i.lineTo(e-r*Math.cos(n-Math.PI/6),t-r*Math.sin(n-Math.PI/6)),i.moveTo(e,t),i.lineTo(e-r*Math.cos(n+Math.PI/6),t-r*Math.sin(n+Math.PI/6))}function mp(i,e,t,n,r,s){const a=i.createLinearGradient(e,t-s,e,t+s);a.addColorStop(0,"rgba(255, 255, 255, 0)"),a.addColorStop(.2,r),a.addColorStop(1,r),i.strokeStyle=r;const o=s/2;n===180?(i.beginPath(),i.arc(e,t,s,-Math.PI*.3,Math.PI*.5,!1),zs(i,e,t+s,-Math.PI*1.1,o),i.stroke(),i.beginPath(),i.arc(e,t,s,Math.PI*.7,Math.PI*1.5,!1),zs(i,e,t-s,-Math.PI*.1,o),i.stroke()):n>0?(i.arc(e,t,s,-Math.PI/2,Math.PI,!1),zs(i,e-s,t,-Math.PI*.6,o)):n<0&&(i.arc(e,t,s,-Math.PI/2,0,!0),zs(i,e+s,t,-Math.PI*.4,o))}class ph{constructor(){En(this,"palette",["rgb(0, 0, 255)","rgb(255, 0, 0)","rgb(0, 128, 0)","rgb(255, 0, 255)","rgb(0, 128, 255)","rgb(255, 128, 0)","rgb(255, 128, 128)","rgb(255, 64, 192)","rgb(128, 128, 192)","rgb(240, 192, 57)","#3f6fbc","#ae7dbe","#d23d9e","#589cd1"]);En(this,"index",0)}nextColor(){const e=this.palette[this.index];return this.index=(this.index+1)%this.palette.length,e}}function gp(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function _p(i){const e=Math.sqrt(gp(i,i));return e===0?i:i.map(t=>t/e)}function vp(i,e){return i.map(t=>t*e)}function xp(i,e){return i.map((t,n)=>t+e[n])}function mh(i,e){return i.map((t,n)=>t-e[n])}function yp(i){const e=~~i.clientWidth,t=~~i.clientHeight,n=2;return i.width!==e*n||i.height!==t*n?(i.width=e*n,i.height=t*n,!0):!1}function gh(i){for(;i.firstChild;)i.removeChild(i.lastChild)}function Ul(...i){const e=[];for(let t=0;t+1<i.length;t+=2){const n=i[t].startsWith("*")?i[t].slice(1):i[t],r=!!i[t].startsWith("*"),s=i[t+1],a=document.createElement("span");a.style.color=n,r&&(a.style.fontWeight="700"),a.append(s),e.push(a)}return e}function wn(i,e,t){const n=document.createElement(i);return e&&n.classList.add(...e.split(" ")),t&&(n.style.cssText=t),n}function an(i,e){return wn("div",i,e)}function Oi(i,e,t="",n="btn btn-outline-secondary"){const r=wn("button",n);return r.textContent=i,t&&(r.title=t),r.onclick=e,r}function Mp(i,e,t){return`hsl(${(r=>{let s=9;for(let a=0;a<r.length;)s=Math.imul(s^r.charCodeAt(a++),387420489);return s^s>>>9})(i)%360}, ${e}%, ${t}%)`}function Sp(i,e,t){const n=i.parentElement,r=an(e,t),s=i.style.display;return n.insertBefore(r,i),i.style.display="none",[r,()=>{r.remove(),i.style.display=s}]}function Ep(i,e){const t=i.indexOf(e);return i[(t+1)%i.length]}const bp=`
[atom]
cycle: U' iF jD iF' U iF jD' iF' // General 3 cycle: rotate centers if (i, j) is the center location
3-cycle on single face centers: iL iF jD iF' U iF jD' iF' U' iL' // 2 <= i <= n/2, 2 <= j <= (n+1)/2
Swap corner (ETR): (1-hR U L U' 1-hR' U L' U' F)9
Spin Corner: R U R' U' R U R' U' D U R U' R' U R U' R' D'
Swap Edge: iR2 B2 U2 iL U2 iR' U2 iR U2 F2 iR F2 iL' B2 iR2
Flip Edge: R' E' R2 E2 R' U R E2 R2 E R U'
[4x4x4] Swap Edge: 2R' U' 2U 2R U' 2R U 2R 2U' 2R' 2U 2R U 2R U' 2R 1-2U' 2R' U2
center180: (R U R' U)5

[misc]
[3x3x3] Highest order (1260): (R F2 B' U B')
[3x3x3] Super Flip: U R2 F B R B2 R U2 L B2 R U' D' R2 F R' L B2 U2 F2
Cube in Cube: F L F U' R U F2 L2 U' L' B D' B' L2 U
Pretty1: R U B F D

[PLL]
PLL.Aa: x R' U R' D2 R U' R' D2 R2 x'
PLL.Ab: x R2 D2 R U R' D2 R U' R x'
PLL.E: x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x
PLL.Ra: R U R' F' R U2 R' U2 R' F R U R U2 R' U'
PLL.Rb: U' R' U2 R U2 R' F R U R' U' R' F' R2
PLL.Ja: x R2 F R F' R U2 r' U r U2 x'
PLL.Jb: R U R' F' R U R' U' R' F R2 U' R' U'
PLL.T: R U R' U' R' F R2 U' R' U' R U R' F'
PLL.Ua: R U' R U R U R U' R' U' R2
PLL.Ub: R2 U R U R' U' R' U' R' U R'
PLL.H: M2 U M2 U2 M2 U M2
PLL.Z: M2 U M2 U M' U2 M2 U2 M' U2
PLL.F: R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R
PLL.Y: F R U' R' U' R U R' F' R U R' U' R' F R F'
PLL.V: R' U R U' x' U R U2 R' U' R U' R' U2 R U R' U' x
PLL.V1: R' U R' d' R' F' R2 U' R' U R' F R F
PLL.Na: R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'
PLL.Nb: R' U R U' R' F' U' F R U R' F R' F' R U' R
PLL.Ga: R2 u R' U R' U' R u' R2 y' R' U R y
PLL.Gb: R' U' R U D' R2 U R' U R U' R U' R2 D
PLL.Gc: R2 u' R U' R U R' u R2 y R U' R' y'
PLL.Gd: R U R' U' D R2 U' R U' R' U R' U R2 D'

[OLL]
OLL1: R U2 R2 F R F' U2 R' F R F'
OLL2: F R U R' U' F' f R U R' U' f'
OLL3: f R U R' U' f' U' F R U R' U' F' U
OLL4: f R U R' U' f' U F R U R' U' F' U'
OLL5: r' U2 R U R' U r
OLL6: r U2 R' U' R U' r'
OLL7: r U R' U R U2 r'
OLL8: r' U' R U' R' U2 r
OLL9: R U R' U' R' F R2 U R' U' F'
OLL10: R U R' U R' F R F' R U2 R'
OLL11: M R U R' U R U2 R' U M' U'
OLL12: M' R' U' R U' R' U2 R U' M U
OLL13: r U' r' U' r U r' F' U F
OLL14: R' F R U R' F' R F U' F'
OLL15: r' U' r R' U' R U r' U r
OLL16: r U r' R U R' U' r U' r'
OLL17: R U R' U R' F R F' U2 R' F R F'
OLL18: r U R' U R U2 r2 U' R U' R' U2 r
OLL19: M U R U R' U' M' R' F R F'
OLL20: M U R U R' U' M2 U R U' R' M
OLL21: R U R' U R U' R' U R U2 R'
OLL21a: R U2 R' U' R U R' U' R U' R'
OLL22: R U2 R2 U' R2 U' R2 U2 R U2
OLL23: R2 D R' U2 R D' R' U2 R'
OLL24: r U R' U' r' F R F'
OLL25: F' r U R' U' r' F R
OLL26: R U2 R' U' R U' R'
OLL27: R U R' U R U2 R'
OLL28: r U R' U' M U R U' R'
OLL29: M U R U R' U' R' F R F' M'
OLL30: F U R U2 R' U' R U2 R' U' F'
OLL31: R' U' F U R U' R' F' R
OLL32: S R U R' U' R' F R f'
OLL33: R U R' U' R' F R F'
OLL34: R U R2 U' R' F R U R U' F'
OLL35: R U2 R2 F R F' R U2 R'
OLL36: L' U' L U' L' U L U L F' L' F
OLL37: F R U' R' U' R U R' F'
OLL38: R U R' U R U' R' U' R' F R F'
OLL39: R U R' F' U' F U R U2 R'
OLL39a: L F' L' U' L U F U' L'
OLL40: R' F R U R' U' F' U R
OLL41: R U R' U R U2 R' F R U R' U' F'
OLL42: R' U' R U' R' U2 R F R U R' U' F'
OLL43: f' L' U' L U f
OLL44: f R U R' U' f'
OLL45: F R U R' U' F'
OLL46: R' U' R' F R F' U R
OLL47: F' L' U' L U L' U' L U F
OLL48: F R U R' U' R U R' U' F'
OLL49: r U' r2 U r2 U r2 U' r
OLL50: r' U r2 U' r2 U' r2 U r'
OLL51: f R U R' U' R U R' U' f'
OLL52: R U R' U R d' R U' R' F'
OLL53: r' U' R U' R' U R U' R' U2 r
OLL54: r U R' U R U' R' U R U2 r'
OLL55: R U2 R2 U' R U' R' U2 F R F'
OLL56: r U r' U R U' R' U R U' R' r U' r'
OLL57: R U R' U' M' U R U' r'

`,ks=[];function ka(){var e,t;if(ks.length!==0)return ks;let i=[];for(const n of bp.split(/\n/g)){const r=n.match(/^\[(.*)\]$/);if(r){i=r[1].split(",").map(a=>a.trim());continue}const s=n.match(/^(\[([^)]+)\])?\s*([^:]+)\s*:\s*(.*)$/);if(s){const a=((e=s[2])==null?void 0:e.split(",").map(u=>u.trim()))||[],o=s[3],l=s[4].split("//");ks.push({name:o,algorithm:l[0].trim(),tags:[...i,...a],desc:(t=l[1])==null?void 0:t.trim()})}}return ks}function _h(i){const e=[];for(const t of i)t.match(/[a-z]/i)&&!t.match(/[xyzMESmesLRFBUDlrfbudhw]/)&&e.indexOf(t)<0&&e.push(t);return e}function Tp(i,e){const t=_h(i);for(let n=0;n<t.length&&n<e.length;n++)i=i.replaceAll(t[n],e[n]);return i}function Dl(i,e,t){if(i.startsWith(e)){const n=i.indexOf(t,e.length);if(n>=0)return i.slice(e.length,n)}}function Ap(i,e,t){for(let s="";s!==i;){s=i;const a=i.indexOf("$");if(a<0)break;let o,l=Dl(i.slice(a+1),"{","}");if(l)o=a+1+l.length+2;else{const u=i.slice(a+1).match(/^[A-Za-z0-9_.]+/);u&&(l=u[0],o=a+1+l.length)}if(l&&o){const u=ka().find(h=>h.name.toLowerCase()===l.toLowerCase());if(!u)throw new Error(`alg name '${l}' not found`);if(u){let h=u.algorithm,f=Dl(i.slice(o),"(",")");f&&(o+=f.length+2,h=Tp(h,f.split(",").map(d=>d.trim()))),i=i.slice(0,a)+"("+h+")"+i.slice(o)}}}const n=[...e],r=_h(i);for(let s=n.length;s<r.length;s++)n.push("1");n.length=r.length;for(let s=0;s<r.length;s++)i=i.replaceAll(r[s],n[s]);return i=i.replaceAll("h",`${~~(t/2)}`),{resolvedAlgorithm:i,actualParamValues:n}}function ln(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,l=a===0?1:a===180?-1:0,h=[[1,0,0,0,l,-o,0,o,l],[l,0,o,0,1,0,-o,0,l],[l,-o,0,o,l,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function vh(i,e,t,n){return[i+n-e,e-t+i]}function xh(i,e,t,n){return[i-n+e,e+t-i]}function mo(i,e,t){return[i[0]+e,i[1]+t]}function mn(i,e,t,n){const r=e[1]-i[1],s=i[0]-e[0],a=i[0]*r+i[1]*s,o=n[1]-t[1],l=t[0]-n[0],u=t[0]*o+t[1]*l,h=r*l-s*o;return h==0?i:[(a*l-u*s)/h,(r*u-o*a)/h]}function wp(i,e,t,n){const[r,s,a]=[e[0]- -i/2,e[1]-i/2,e[2]-i/2],[o,l,u]=[e,t,n].map(d=>[d[0]-r,d[1]-s,d[2]-a]),h=Rp(i,o,l,u),f=[];for(let d=0;d<h.length;d++){const[_,v,x]=h[d],[p,m,C]=l,[S,w,A]=u;_===p&&v===m&&x===C||_===S&&v===w&&x===A||f.push(h[d])}return f.map(d=>[d[0]+r,d[1]+s,d[2]+a])}function Rp(i,e,t,n){const r=i/2;let s=[0,0];if(t[0]===r&&(s=[1,-90]),t[0]===-r&&(s=[1,90]),t[1]===r&&(s=[0,90]),t[1]===-r&&(s=[0,-90]),t[2]===r&&(s=[2,0]),t[2]===-r&&(s=[0,180]),t=ln(t,s[0],s[1]),n=ln(n,s[0],s[1]),n[2]===-r)return Lp(i,e,t,n).map(u=>ln(u,s[0],-s[1]));if(n[2]===r)return[];let a=[2,0];return n[0]===r&&(a=[2,90]),n[0]===-r&&(a=[2,-90]),n[1]===-r&&(a=[2,180]),t=ln(t,a[0],a[1]),n=ln(n,a[0],a[1]),Cp(i,e,t,n).map(l=>ln(l,a[0],-a[1])).map(l=>ln(l,s[0],-s[1]))}function Cp(i,e,t,n){const[r,s]=[e[0],e[1]],[a,o]=[e[0]+i,e[1]],[l,u]=[t[0],t[1]],[h,f]=[n[0],e[1]+e[2]-n[2]];if(f===u)return[];const d=(r+a)/2,_=s+i/2,v=mo(xh(d,_,h,f),-i,0),x=mo(vh(d,_,h,f),i,0),p=(A,U,L,H)=>(L-A)*(L-A)+(H-U)*(H-U),m=p(l,u,h,f),C=p(l,u,...v),S=p(l,u,...x),w=Math.min(m,C,S);if(w===m)return[[mn([r,s],[a,o],[l,u],[h,f])[0],s,e[2]]];if(w===C){const A=mn([r,s],[r,s+1],[l,u],v),U=mn([r,s],[a,o],[l,u],v);return[[r,A[1],e[2]],[r,s,e[2]-(r-U[0])]]}else if(w===S){const A=mn([a,o],[a,o+1],[l,u],x),U=mn([r,s],[a,o],[l,u],x);return[[a,A[1],e[2]],[a,o,e[2]-(U[0]-a)]]}return[]}function Hs(i,e,t,n){const[r,s,a]=e,[o,l,u]=[r+i,s,a],[h,f]=[t[0],t[1]],[d,_]=[n[0],e[1]+i+s-n[1]],v=[h,f],x=[d,_],p=[r,s],m=[o,l],C=(r+o)/2,S=s+i+i/2,w=mo(xh(C,S,d,_),-i,0),A=mo(vh(C,S,d,_),i,0),U=(L,H,M,b)=>(M-L)*(M-L)+(b-H)*(b-H);return[{distance:U(...v,...w),pathFunc:()=>{const L=mn(v,w,p,m),H=mn(v,w,p,[r,s+1]),M=mn(v,w,[r,s+i],[o,l+i]);return[[L[0],s,a],[r,s,a-(H[1]-s)],[r,s-(r-M[0]),a-i]]}},{distance:U(...v,...x),pathFunc:()=>{const L=mn(v,x,p,m),H=mn(v,x,[r,s+i],[o,l+i]);return[[L[0],s,a],[H[0],s,a-i]]}},{distance:U(...v,...A),pathFunc:()=>{const L=mn(v,A,p,m),H=mn(v,A,m,[o,l+1]),M=mn(v,A,[r,s+i],[o,l+i]);return[[L[0],l,u],[o,l,u-(H[1]-l)],[o,l-(M[0]-o),u-i]]}}]}function Lp(i,e,t,n){const r=[...Hs(i,e,t,n),...Hs(i,e,ln(t,2,90),ln(n,2,90)),...Hs(i,e,ln(t,2,180),ln(n,2,180)),...Hs(i,e,ln(t,2,270),ln(n,2,270))],s=Math.min(...r.map(l=>l.distance)),a=r.findIndex(l=>l.distance===s);return r[a].pathFunc().map(l=>ln(l,2,-90*~~(a/3)))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="156",sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pp=0,Il=1,Up=2,Dp=0,yh=1,Ip=2,ii=3,Ti=0,un=1,si=2,Mi=0,Ir=1,Ol=2,Nl=3,Fl=4,Op=5,br=100,Np=101,Fp=102,Bl=103,zl=104,Bp=200,zp=201,kp=202,Hp=203,Mh=204,Sh=205,Gp=206,Vp=207,Wp=208,Xp=209,qp=210,Yp=0,jp=1,$p=2,Ha=3,Kp=4,Zp=5,Jp=6,Qp=7,Eh=0,em=1,tm=2,Si=0,nm=1,im=2,rm=3,sm=4,om=5,bh=300,Nr=301,Fr=302,Ga=303,Va=304,Mo=306,Wa=1e3,Nn=1001,Xa=1002,sn=1003,kl=1004,ea=1005,Tn=1006,am=1007,ds=1008,Ei=1009,cm=1010,lm=1011,tc=1012,Th=1013,xi=1014,yi=1015,ps=1016,Ah=1017,wh=1018,Gi=1020,um=1021,Fn=1023,hm=1024,fm=1025,Vi=1026,Br=1027,dm=1028,Rh=1029,pm=1030,Ch=1031,Lh=1033,ta=33776,na=33777,ia=33778,ra=33779,Hl=35840,Gl=35841,Vl=35842,Wl=35843,mm=36196,Xl=37492,ql=37496,Yl=37808,jl=37809,$l=37810,Kl=37811,Zl=37812,Jl=37813,Ql=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,su=37820,ou=37821,sa=36492,au=36494,cu=36495,gm=36283,lu=36284,uu=36285,hu=36286,Ph=3e3,Wi=3001,_m=3200,vm=3201,xm=0,ym=1,Xi="",Et="srgb",Xn="srgb-linear",So="display-p3",oa=7680,Mm=519,Sm=512,Em=513,bm=514,Tm=515,Am=516,wm=517,Rm=518,Cm=519,fu=35044,du="300 es",qa=1035,oi=2e3,go=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pu=1234567;const ts=Math.PI/180,ms=180/Math.PI;function kr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function nc(i,e){return(i%e+e)%e}function Lm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Pm(i,e,t){return i!==e?(t-i)/(e-i):0}function ns(i,e,t){return(1-t)*i+t*e}function Um(i,e,t,n){return ns(i,e,1-Math.exp(-t*n))}function Dm(i,e=1){return e-Math.abs(nc(i,e*2)-e)}function Im(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Om(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fm(i,e){return i+Math.random()*(e-i)}function Bm(i){return i*(.5-Math.random())}function zm(i){i!==void 0&&(pu=i);let e=pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function km(i){return i*ts}function Hm(i){return i*ms}function Ya(i){return(i&i-1)===0&&i!==0}function Gm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _o(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vm(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),_=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*f,l*d,o*u);break;case"YZY":i.set(l*d,o*h,l*f,o*u);break;case"ZXZ":i.set(l*f,l*d,o*h,o*u);break;case"XZX":i.set(o*h,l*v,l*_,o*u);break;case"YXY":i.set(l*_,o*h,l*v,o*u);break;case"ZYZ":i.set(l*v,l*_,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wm={DEG2RAD:ts,RAD2DEG:ms,generateUUID:kr,clamp:kt,euclideanModulo:nc,mapLinear:Lm,inverseLerp:Pm,lerp:ns,damp:Um,pingpong:Dm,smoothstep:Im,smootherstep:Om,randInt:Nm,randFloat:Fm,randFloatSpread:Bm,seededRandom:zm,degToRad:km,radToDeg:Hm,isPowerOfTwo:Ya,ceilPowerOfTwo:Gm,floorPowerOfTwo:_o,setQuaternionFromProperEuler:Vm,normalize:nn,denormalize:Tr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,a,o,l,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u)}set(e,t,n,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],f=n[7],d=n[2],_=n[5],v=n[8],x=r[0],p=r[3],m=r[6],C=r[1],S=r[4],w=r[7],A=r[2],U=r[5],L=r[8];return s[0]=a*x+o*C+l*A,s[3]=a*p+o*S+l*U,s[6]=a*m+o*w+l*L,s[1]=u*x+h*C+f*A,s[4]=u*p+h*S+f*U,s[7]=u*m+h*w+f*L,s[2]=d*x+_*C+v*A,s[5]=d*p+_*S+v*U,s[8]=d*m+_*w+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*l-h*s,_=u*s-a*l,v=t*f+n*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*u-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=_*x,e[7]=(n*l-u*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new nt;function Uh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xm(){const i=vo("canvas");return i.style.display="block",i}const mu={};function is(i){i in mu||(mu[i]=!0,console.warn(i))}function Or(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const qm=new nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ym=new nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jm(i){return i.convertSRGBToLinear().applyMatrix3(Ym)}function $m(i){return i.applyMatrix3(qm).convertLinearToSRGB()}const Km={[Xn]:i=>i,[Et]:i=>i.convertSRGBToLinear(),[So]:jm},Zm={[Xn]:i=>i,[Et]:i=>i.convertLinearToSRGB(),[So]:$m},Ln={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Xn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Km[e],r=Zm[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ar;class Dh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=vo("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Or(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Or(t[n]/255)*255):t[n]=Or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jm=0;class Ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(la(r[a].image)):s.push(la(r[a]))}else s=la(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qm=0;class hn extends $i{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Nn,r=Nn,s=Tn,a=ds,o=Fn,l=Ei,u=hn.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=kr(),this.name="",this.source=new Ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wi?Et:Xi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wa:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wa:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Wi:Ph}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?Et:Xi}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=bh;hn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],_=l[5],v=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+p)<.1&&Math.abs(u+_+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,w=(_+1)/2,A=(m+1)/2,U=(h+d)/4,L=(f+x)/4,H=(v+p)/4;return S>w&&S>A?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=U/n,s=L/n):w>A?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=U/r,s=H/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=L/s,r=H/s),this.set(n,r,s,t),this}let C=Math.sqrt((p-v)*(p-v)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(p-v)/C,this.y=(f-x)/C,this.z=(d-h)/C,this.w=Math.acos((u+_+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eg extends $i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?Et:Xi),this.texture=new hn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ih(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends eg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oh extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tg extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],_=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=_,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==d||u!==_||h!==v){let p=1-o;const m=l*d+u*_+h*v+f*x,C=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const A=Math.sqrt(S),U=Math.atan2(A,m*C);p=Math.sin(p*U)/A,o=Math.sin(o*U)/A}const w=o*C;if(l=l*p+d*w,u=u*p+_*w,h=h*p+v*w,f=f*p+x*w,p===1-o){const A=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=A,u*=A,h*=A,f*=A}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],h=n[r+3],f=s[a],d=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+h*f+l*_-u*d,e[t+1]=l*v+h*d+u*f-o*_,e[t+2]=u*v+h*_+o*d-l*f,e[t+3]=h*v-o*f-l*d-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),d=l(n/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*f+u*_*v,this._y=u*_*f-d*h*v,this._z=u*h*v+d*_*f,this._w=u*h*f-d*_*v;break;case"YXZ":this._x=d*h*f+u*_*v,this._y=u*_*f-d*h*v,this._z=u*h*v-d*_*f,this._w=u*h*f+d*_*v;break;case"ZXY":this._x=d*h*f-u*_*v,this._y=u*_*f+d*h*v,this._z=u*h*v+d*_*f,this._w=u*h*f-d*_*v;break;case"ZYX":this._x=d*h*f-u*_*v,this._y=u*_*f+d*h*v,this._z=u*h*v-d*_*f,this._w=u*h*f+d*_*v;break;case"YZX":this._x=d*h*f+u*_*v,this._y=u*_*f+d*h*v,this._z=u*h*v-d*_*f,this._w=u*h*f-d*_*v;break;case"XZY":this._x=d*h*f-u*_*v,this._y=u*_*f-d*h*v,this._z=u*h*v+d*_*f,this._w=u*h*f+d*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-u)*_,this._z=(a-r)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+u)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(s-u)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(a-r)/_,this._x=(s+u)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-n*u,this._z=s*h+a*u+n*l-r*o,this._w=a*h-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*r-o*n,h=l*n+o*t-s*r,f=l*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=u*l+d*-s+h*-o-f*-a,this.y=h*l+d*-a+f*-s-u*-o,this.z=f*l+d*-o+u*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new N,gu=new Yi;class _s{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox),cr.applyMatrix4(e.matrixWorld),this.union(cr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Jn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else r.boundingBox===null&&r.computeBoundingBox(),cr.copy(r.boundingBox),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Gs.subVectors(this.max,$r),lr.subVectors(e.a,$r),ur.subVectors(e.b,$r),hr.subVectors(e.c,$r),pi.subVectors(ur,lr),mi.subVectors(hr,ur),Ni.subVectors(lr,hr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!ha(t,lr,ur,hr,Gs)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,lr,ur,hr,Gs))?!1:(Vs.crossVectors(pi,mi),t=[Vs.x,Vs.y,Vs.z],ha(t,lr,ur,hr,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Jn=new N,cr=new _s,lr=new N,ur=new N,hr=new N,pi=new N,mi=new N,Ni=new N,$r=new N,Gs=new N,Vs=new N,Fi=new N;function ha(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fi.fromArray(i,s);const o=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),u=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const ng=new _s,Kr=new N,fa=new N;class ic{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(fa)),this.expandByPoint(Kr.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new N,da=new N,Ws=new N,gi=new N,pa=new N,Xs=new N,ma=new N;class Nh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){da.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=gi.dot(this.direction),l=-gi.dot(Ws),u=gi.lengthSq(),h=Math.abs(1-a*a);let f,d,_,v;if(h>0)if(f=a*l-o,d=a*o-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const x=1/h;f*=x,d*=x,_=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(Ws,d),_}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),r=Qn.dot(Qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,r,s){pa.subVectors(t,e),Xs.subVectors(n,e),ma.crossVectors(pa,Xs);let a=this.direction.dot(ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const l=o*this.direction.dot(Xs.crossVectors(gi,Xs));if(l<0)return null;const u=o*this.direction.dot(pa.cross(gi));if(u<0||l+u>a)return null;const h=-o*gi.dot(ma);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,s,a,o,l,u,h,f,d,_,v,x,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u,h,f,d,_,v,x,p)}set(e,t,n,r,s,a,o,l,u,h,f,d,_,v,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=h,m[10]=f,m[14]=d,m[3]=_,m[7]=v,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,_=a*f,v=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=_+v*u,t[5]=d-x*u,t[9]=-o*l,t[2]=x-d*u,t[6]=v+_*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,_=l*f,v=u*h,x=u*f;t[0]=d+x*o,t[4]=v*o-_,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=_*o-v,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,_=l*f,v=u*h,x=u*f;t[0]=d-x*o,t[4]=-a*f,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,_=a*f,v=o*h,x=o*f;t[0]=l*h,t[4]=v*u-_,t[8]=d*u+x,t[1]=l*f,t[5]=x*u+d,t[9]=_*u-v,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,_=a*u,v=o*l,x=o*u;t[0]=l*h,t[4]=x-d*f,t[8]=v*f+_,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=_*f+v,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,_=a*u,v=o*l,x=o*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=d*f+x,t[5]=a*h,t[9]=_*f-v,t[2]=v*f-_,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,rg)}lookAt(e,t,n){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),_i.crossVectors(n,dn),_i.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),_i.crossVectors(n,dn)),_i.normalize(),qs.crossVectors(dn,_i),r[0]=_i.x,r[4]=qs.x,r[8]=dn.x,r[1]=_i.y,r[5]=qs.y,r[9]=dn.y,r[2]=_i.z,r[6]=qs.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],f=n[5],d=n[9],_=n[13],v=n[2],x=n[6],p=n[10],m=n[14],C=n[3],S=n[7],w=n[11],A=n[15],U=r[0],L=r[4],H=r[8],M=r[12],b=r[1],q=r[5],te=r[9],z=r[13],G=r[2],Y=r[6],se=r[10],ne=r[14],I=r[3],le=r[7],oe=r[11],$=r[15];return s[0]=a*U+o*b+l*G+u*I,s[4]=a*L+o*q+l*Y+u*le,s[8]=a*H+o*te+l*se+u*oe,s[12]=a*M+o*z+l*ne+u*$,s[1]=h*U+f*b+d*G+_*I,s[5]=h*L+f*q+d*Y+_*le,s[9]=h*H+f*te+d*se+_*oe,s[13]=h*M+f*z+d*ne+_*$,s[2]=v*U+x*b+p*G+m*I,s[6]=v*L+x*q+p*Y+m*le,s[10]=v*H+x*te+p*se+m*oe,s[14]=v*M+x*z+p*ne+m*$,s[3]=C*U+S*b+w*G+A*I,s[7]=C*L+S*q+w*Y+A*le,s[11]=C*H+S*te+w*se+A*oe,s[15]=C*M+S*z+w*ne+A*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],_=e[14],v=e[3],x=e[7],p=e[11],m=e[15];return v*(+s*l*f-r*u*f-s*o*d+n*u*d+r*o*_-n*l*_)+x*(+t*l*_-t*u*d+s*a*d-r*a*_+r*u*h-s*l*h)+p*(+t*u*f-t*o*_-s*a*f+n*a*_+s*o*h-n*u*h)+m*(-r*o*h-t*l*f+t*o*d+r*a*f-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],_=e[11],v=e[12],x=e[13],p=e[14],m=e[15],C=f*p*u-x*d*u+x*l*_-o*p*_-f*l*m+o*d*m,S=v*d*u-h*p*u-v*l*_+a*p*_+h*l*m-a*d*m,w=h*x*u-v*f*u+v*o*_-a*x*_-h*o*m+a*f*m,A=v*f*l-h*x*l-v*o*d+a*x*d+h*o*p-a*f*p,U=t*C+n*S+r*w+s*A;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return e[0]=C*L,e[1]=(x*d*s-f*p*s-x*r*_+n*p*_+f*r*m-n*d*m)*L,e[2]=(o*p*s-x*l*s+x*r*u-n*p*u-o*r*m+n*l*m)*L,e[3]=(f*l*s-o*d*s-f*r*u+n*d*u+o*r*_-n*l*_)*L,e[4]=S*L,e[5]=(h*p*s-v*d*s+v*r*_-t*p*_-h*r*m+t*d*m)*L,e[6]=(v*l*s-a*p*s-v*r*u+t*p*u+a*r*m-t*l*m)*L,e[7]=(a*d*s-h*l*s+h*r*u-t*d*u-a*r*_+t*l*_)*L,e[8]=w*L,e[9]=(v*f*s-h*x*s-v*n*_+t*x*_+h*n*m-t*f*m)*L,e[10]=(a*x*s-v*o*s+v*n*u-t*x*u-a*n*m+t*o*m)*L,e[11]=(h*o*s-a*f*s-h*n*u+t*f*u+a*n*_-t*o*_)*L,e[12]=A*L,e[13]=(h*x*r-v*f*r+v*n*d-t*x*d-h*n*p+t*f*p)*L,e[14]=(v*o*r-a*x*r-v*n*l+t*x*l+a*n*p-t*o*p)*L,e[15]=(a*f*r-h*o*r+h*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+n,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,h=a+a,f=o+o,d=s*u,_=s*h,v=s*f,x=a*h,p=a*f,m=o*f,C=l*u,S=l*h,w=l*f,A=n.x,U=n.y,L=n.z;return r[0]=(1-(x+m))*A,r[1]=(_+w)*A,r[2]=(v-S)*A,r[3]=0,r[4]=(_-w)*U,r[5]=(1-(d+m))*U,r[6]=(p+C)*U,r[7]=0,r[8]=(v+S)*L,r[9]=(p-C)*L,r[10]=(1-(d+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=fr.set(r[0],r[1],r[2]).length();const a=fr.set(r[4],r[5],r[6]).length(),o=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,h=1/a,f=1/o;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=oi){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,v;if(o===oi)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===go)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=oi){const l=this.elements,u=1/(t-e),h=1/(n-r),f=1/(a-s),d=(t+e)*u,_=(n+r)*h;let v,x;if(o===oi)v=(a+s)*f,x=-2*f;else if(o===go)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new N,Pn=new Pt,ig=new N(0,0,0),rg=new N(1,1,1),_i=new N,qs=new N,dn=new N,_u=new Pt,vu=new Yi;class Eo{constructor(e=0,t=0,n=0,r=Eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eo.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sg=0;const xu=new N,dr=new Yi,ei=new Pt,Ys=new N,Zr=new N,og=new N,ag=new Yi,yu=new N(1,0,0),Mu=new N(0,1,0),Su=new N(0,0,1),cg={type:"added"},lg={type:"removed"};class Kt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new N,t=new Eo,n=new Yi,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new nt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(Mu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return xu.copy(e).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(Mu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Zr,Ys,this.up):ei.lookAt(Ys,Zr,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(ei),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new N(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new N,ti=new N,ga=new N,ni=new N,pr=new N,mr=new N,Eu=new N,_a=new N,va=new N,xa=new N;let js=!1;class On{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Un.subVectors(r,t),ti.subVectors(n,t),ga.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(ti),l=Un.dot(ga),u=ti.dot(ti),h=ti.dot(ga),f=a*u-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,_=(u*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,n,r,s,a,o,l){return js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),js=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ni),l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),ti.subVectors(e,t),Un.cross(ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Un.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),js=!0),On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;pr.subVectors(r,n),mr.subVectors(s,n),_a.subVectors(e,n);const l=pr.dot(_a),u=mr.dot(_a);if(l<=0&&u<=0)return t.copy(n);va.subVectors(e,r);const h=pr.dot(va),f=mr.dot(va);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(pr,a);xa.subVectors(e,s);const _=pr.dot(xa),v=mr.dot(xa);if(v>=0&&_<=v)return t.copy(s);const x=_*u-l*v;if(x<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(mr,o);const p=h*v-_*f;if(p<=0&&f-h>=0&&_-v>=0)return Eu.subVectors(s,r),o=(f-h)/(f-h+(_-v)),t.copy(r).addScaledVector(Eu,o);const m=1/(p+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ug=0;class bo extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Ir,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Sh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ln.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ln.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ln.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ln.workingColorSpace){if(e=nc(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ya(a,s,e+1/3),this.g=ya(a,s,e),this.b=ya(a,s,e-1/3)}return Ln.toWorkingColorSpace(this,r),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ln.fromWorkingColorSpace(Yt.copy(this),e),Math.round(kt(Yt.r*255,0,255))*65536+Math.round(kt(Yt.g*255,0,255))*256+Math.round(kt(Yt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ln.workingColorSpace){Ln.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=Ln.workingColorSpace){return Ln.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Et){Ln.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),Dn.h+=e,Dn.s+=t,Dn.l+=n,this.setHSL(Dn.h,Dn.s,Dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL($s);const n=ns(Dn.h,$s.h,t),r=ns(Dn.s,$s.s,t),s=ns(Dn.l,$s.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new vt;vt.NAMES=Bh;class rs extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new N,Ks=new Re;class Wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fu,this.updateRange={offset:0,count:-1},this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class zh extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kh extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hg=0;const bn=new Pt,Ma=new Kt,gr=new N,pn=new _s,Jr=new _s,Bt=new N;class Bn extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uh(e)?kh:zh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(pn.min,Jr.min),pn.expandByPoint(Bt),Bt.addVectors(pn.max,Jr.max),pn.expandByPoint(Bt)):(pn.expandByPoint(Jr.min),pn.expandByPoint(Jr.max))}pn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Bt.fromBufferAttribute(o,u),l&&(gr.fromBufferAttribute(e,u),Bt.add(gr)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let b=0;b<o;b++)u[b]=new N,h[b]=new N;const f=new N,d=new N,_=new N,v=new Re,x=new Re,p=new Re,m=new N,C=new N;function S(b,q,te){f.fromArray(r,b*3),d.fromArray(r,q*3),_.fromArray(r,te*3),v.fromArray(a,b*2),x.fromArray(a,q*2),p.fromArray(a,te*2),d.sub(f),_.sub(f),x.sub(v),p.sub(v);const z=1/(x.x*p.y-p.x*x.y);isFinite(z)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(_,-x.y).multiplyScalar(z),C.copy(_).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(z),u[b].add(m),u[q].add(m),u[te].add(m),h[b].add(C),h[q].add(C),h[te].add(C))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,q=w.length;b<q;++b){const te=w[b],z=te.start,G=te.count;for(let Y=z,se=z+G;Y<se;Y+=3)S(n[Y+0],n[Y+1],n[Y+2])}const A=new N,U=new N,L=new N,H=new N;function M(b){L.fromArray(s,b*3),H.copy(L);const q=u[b];A.copy(q),A.sub(L.multiplyScalar(L.dot(q))).normalize(),U.crossVectors(H,q);const z=U.dot(h[b])<0?-1:1;l[b*4]=A.x,l[b*4+1]=A.y,l[b*4+2]=A.z,l[b*4+3]=z}for(let b=0,q=w.length;b<q;++b){const te=w[b],z=te.start,G=te.count;for(let Y=z,se=z+G;Y<se;Y+=3)M(n[Y+0]),M(n[Y+1]),M(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,u=new N,h=new N,f=new N;if(e)for(let d=0,_=e.count;d<_;d+=3){const v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,p),o.add(h),l.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(l.length*h);let _=0,v=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?_=l[x]*o.data.stride+o.offset:_=l[x]*h;for(let m=0;m<h;m++)d[v++]=u[_++]}return new Wn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const d=u[h],_=e(d,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const _=u[f];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,_=f.length;d<_;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new Pt,Bi=new Nh,Zs=new ic,Tu=new N,_r=new N,vr=new N,xr=new N,Sa=new N,Js=new N,Qs=new Re,eo=new Re,to=new Re,Au=new N,wu=new N,Ru=new N,no=new N,io=new N;class zt extends Kt{constructor(e=new Bn,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Js.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],f=s[l];h!==0&&(Sa.fromBufferAttribute(f,e),a?Js.addScaledVector(Sa,h):Js.addScaledVector(Sa.sub(t),h))}t.add(Js)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(Zs.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Zs,Tu)===null||Bi.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(bu.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(bu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=a[p.materialIndex],C=Math.max(p.start,_.start),S=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let w=C,A=S;w<A;w+=3){const U=o.getX(w),L=o.getX(w+1),H=o.getX(w+2);r=ro(this,m,e,n,u,h,f,U,L,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let p=v,m=x;p<m;p+=3){const C=o.getX(p),S=o.getX(p+1),w=o.getX(p+2);r=ro(this,a,e,n,u,h,f,C,S,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=a[p.materialIndex],C=Math.max(p.start,_.start),S=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let w=C,A=S;w<A;w+=3){const U=w,L=w+1,H=w+2;r=ro(this,m,e,n,u,h,f,U,L,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let p=v,m=x;p<m;p+=3){const C=p,S=p+1,w=p+2;r=ro(this,a,e,n,u,h,f,C,S,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function fg(i,e,t,n,r,s,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Ti,o),l===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(io);return u<t.near||u>t.far?null:{distance:u,point:io.clone(),object:i}}function ro(i,e,t,n,r,s,a,o,l,u){i.getVertexPosition(o,_r),i.getVertexPosition(l,vr),i.getVertexPosition(u,xr);const h=fg(i,e,t,n,_r,vr,xr,no);if(h){r&&(Qs.fromBufferAttribute(r,o),eo.fromBufferAttribute(r,l),to.fromBufferAttribute(r,u),h.uv=On.getInterpolation(no,_r,vr,xr,Qs,eo,to,new Re)),s&&(Qs.fromBufferAttribute(s,o),eo.fromBufferAttribute(s,l),to.fromBufferAttribute(s,u),h.uv1=On.getInterpolation(no,_r,vr,xr,Qs,eo,to,new Re),h.uv2=h.uv1),a&&(Au.fromBufferAttribute(a,o),wu.fromBufferAttribute(a,l),Ru.fromBufferAttribute(a,u),h.normal=On.getInterpolation(no,_r,vr,xr,Au,wu,Ru,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new N,materialIndex:0};On.getNormal(_r,vr,xr,f.normal),h.face=f}return h}class vs extends Bn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],f=[];let d=0,_=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function v(x,p,m,C,S,w,A,U,L,H,M){const b=w/L,q=A/H,te=w/2,z=A/2,G=U/2,Y=L+1,se=H+1;let ne=0,I=0;const le=new N;for(let oe=0;oe<se;oe++){const $=oe*q-z;for(let J=0;J<Y;J++){const ve=J*b-te;le[x]=ve*C,le[p]=$*S,le[m]=G,u.push(le.x,le.y,le.z),le[x]=0,le[p]=0,le[m]=U>0?1:-1,h.push(le.x,le.y,le.z),f.push(J/L),f.push(1-oe/H),ne+=1}}for(let oe=0;oe<H;oe++)for(let $=0;$<L;$++){const J=d+$+Y*oe,ve=d+$+Y*(oe+1),_e=d+($+1)+Y*(oe+1),Te=d+($+1)+Y*oe;l.push(J,ve,Te),l.push(ve,_e,Te),I+=6}o.addGroup(_,I,M),_+=I,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=zr(i[t]);for(const r in n)e[r]=n[r]}return e}function dg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hh(i){return i.getRenderTarget()===null?i.outputColorSpace:Xn}const pg={clone:zr,merge:rn};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gh extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends Gh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=-90,Mr=1;class _g extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new An(yr,Mr,e,t);r.layers=this.layers,this.add(r);const s=new An(yr,Mr,e,t);s.layers=this.layers,this.add(s);const a=new An(yr,Mr,e,t);a.layers=this.layers,this.add(a);const o=new An(yr,Mr,e,t);o.layers=this.layers,this.add(o);const l=new An(yr,Mr,e,t);l.layers=this.layers,this.add(l);const u=new An(yr,Mr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,u]=this.children,h=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Vh extends hn{constructor(e,t,n,r,s,a,o,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,n,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vg extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wi?Et:Xi),this.texture=new Vh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vs(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Mi});s.uniforms.tEquirect.value=t;const a=new zt(r,s),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=Tn),new _g(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ea=new N,xg=new N,yg=new nt;class vi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ea.subVectors(n,t).cross(xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yg.getNormalMatrix(e),r=this.coplanarPoint(Ea).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new ic,so=new N;class rc{constructor(e=new vi,t=new vi,n=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],v=r[9],x=r[10],p=r[11],m=r[12],C=r[13],S=r[14],w=r[15];if(n[0].setComponents(l-s,d-u,p-_,w-m).normalize(),n[1].setComponents(l+s,d+u,p+_,w+m).normalize(),n[2].setComponents(l+a,d+h,p+v,w+C).normalize(),n[3].setComponents(l-a,d-h,p-v,w-C).normalize(),n[4].setComponents(l-o,d-f,p-x,w-S).normalize(),t===oi)n[5].setComponents(l+o,d+f,p+x,w+S).normalize();else if(t===go)n[5].setComponents(o,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mg(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,h){const f=u.array,d=u.usage,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,d),u.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,f){const d=h.array,_=h.updateRange;i.bindBuffer(f,u),_.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,_.offset*d.BYTES_PER_ELEMENT,d,_.offset,_.count):i.bufferSubData(f,_.offset*d.BYTES_PER_ELEMENT,d.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,r(u,h)):f.version<u.version&&(s(f.buffer,u,h),f.version=u.version)}return{get:a,remove:o,update:l}}class To extends Bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),u=o+1,h=l+1,f=e/o,d=t/l,_=[],v=[],x=[],p=[];for(let m=0;m<h;m++){const C=m*d-a;for(let S=0;S<u;S++){const w=S*f-s;v.push(w,-C,0),x.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let C=0;C<o;C++){const S=C+u*m,w=C+u*(m+1),A=C+1+u*(m+1),U=C+1+u*m;_.push(S,w,U),_.push(w,A,U)}this.setIndex(_),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xg=`vec3 transformedNormal = objectNormal;
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
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
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
}`,c_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f_=`uniform bool receiveShadow;
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
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v_=`PhysicalMaterial material;
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
#endif`,x_=`struct PhysicalMaterial {
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
}`,y_=`
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,E_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L_=`#if defined( USE_POINTS_UV )
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
#endif`,P_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
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
#endif`,O_=`#ifdef USE_MORPHTARGETS
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
#endif`,N_=`#ifdef USE_MORPHTARGETS
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
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,B_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
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
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,W_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
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
}`,F0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,z0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,H0=`#define PHONG
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
}`,G0=`#define PHONG
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
}`,V0=`#define STANDARD
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
}`,W0=`#define STANDARD
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
}`,X0=`#define TOON
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
}`,q0=`#define TOON
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
}`,Y0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,Z0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Sg,alphahash_pars_fragment:Eg,alphamap_fragment:bg,alphamap_pars_fragment:Tg,alphatest_fragment:Ag,alphatest_pars_fragment:wg,aomap_fragment:Rg,aomap_pars_fragment:Cg,begin_vertex:Lg,beginnormal_vertex:Pg,bsdfs:Ug,iridescence_fragment:Dg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Bg,color_fragment:zg,color_pars_fragment:kg,color_pars_vertex:Hg,color_vertex:Gg,common:Vg,cube_uv_reflection_fragment:Wg,defaultnormal_vertex:Xg,displacementmap_pars_vertex:qg,displacementmap_vertex:Yg,emissivemap_fragment:jg,emissivemap_pars_fragment:$g,colorspace_fragment:Kg,colorspace_pars_fragment:Zg,envmap_fragment:Jg,envmap_common_pars_fragment:Qg,envmap_pars_fragment:e_,envmap_pars_vertex:t_,envmap_physical_pars_fragment:d_,envmap_vertex:n_,fog_vertex:i_,fog_pars_vertex:r_,fog_fragment:s_,fog_pars_fragment:o_,gradientmap_pars_fragment:a_,lightmap_fragment:c_,lightmap_pars_fragment:l_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:h_,lights_pars_begin:f_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:__,lights_physical_fragment:v_,lights_physical_pars_fragment:x_,lights_fragment_begin:y_,lights_fragment_maps:M_,lights_fragment_end:S_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:T_,logdepthbuf_vertex:A_,map_fragment:w_,map_pars_fragment:R_,map_particle_fragment:C_,map_particle_pars_fragment:L_,metalnessmap_fragment:P_,metalnessmap_pars_fragment:U_,morphcolor_vertex:D_,morphnormal_vertex:I_,morphtarget_pars_vertex:O_,morphtarget_vertex:N_,normal_fragment_begin:F_,normal_fragment_maps:B_,normal_pars_fragment:z_,normal_pars_vertex:k_,normal_vertex:H_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:W_,clearcoat_pars_fragment:X_,iridescence_pars_fragment:q_,opaque_fragment:Y_,packing:j_,premultiplied_alpha_fragment:$_,project_vertex:K_,dithering_fragment:Z_,dithering_pars_fragment:J_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:r0,skinbase_vertex:s0,skinning_pars_vertex:o0,skinning_vertex:a0,skinnormal_vertex:c0,specularmap_fragment:l0,specularmap_pars_fragment:u0,tonemapping_fragment:h0,tonemapping_pars_fragment:f0,transmission_fragment:d0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:_0,worldpos_vertex:v0,background_vert:x0,background_frag:y0,backgroundCube_vert:M0,backgroundCube_frag:S0,cube_vert:E0,cube_frag:b0,depth_vert:T0,depth_frag:A0,distanceRGBA_vert:w0,distanceRGBA_frag:R0,equirect_vert:C0,equirect_frag:L0,linedashed_vert:P0,linedashed_frag:U0,meshbasic_vert:D0,meshbasic_frag:I0,meshlambert_vert:O0,meshlambert_frag:N0,meshmatcap_vert:F0,meshmatcap_frag:B0,meshnormal_vert:z0,meshnormal_frag:k0,meshphong_vert:H0,meshphong_frag:G0,meshphysical_vert:V0,meshphysical_frag:W0,meshtoon_vert:X0,meshtoon_frag:q0,points_vert:Y0,points_frag:j0,shadow_vert:$0,shadow_frag:K0,sprite_vert:Z0,sprite_frag:J0},ye={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Vn={basic:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:rn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:rn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:rn([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:rn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:rn([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:rn([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:rn([ye.common,ye.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:rn([ye.lights,ye.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Vn.physical={uniforms:rn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const oo={r:0,b:0,g:0};function Q0(i,e,t,n,r,s,a){const o=new vt(0);let l=s===!0?0:1,u,h,f=null,d=0,_=null;function v(p,m){let C=!1,S=m.isScene===!0?m.background:null;S&&S.isTexture&&(S=(m.backgroundBlurriness>0?t:e).get(S)),S===null?x(o,l):S&&S.isColor&&(x(S,1),C=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||C)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Mo)?(h===void 0&&(h=new zt(new vs(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:zr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=S.colorSpace!==Et,(f!==S||d!==S.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new zt(new To(2,2),new ji({name:"BackgroundMaterial",uniforms:zr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=S.colorSpace!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,m){p.getRGB(oo,Hh(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:v}}function ev(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let u=l,h=!1;function f(G,Y,se,ne,I){let le=!1;if(a){const oe=x(ne,se,Y);u!==oe&&(u=oe,_(u.object)),le=m(G,ne,se,I),le&&C(G,ne,se,I)}else{const oe=Y.wireframe===!0;(u.geometry!==ne.id||u.program!==se.id||u.wireframe!==oe)&&(u.geometry=ne.id,u.program=se.id,u.wireframe=oe,le=!0)}I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(le||h)&&(h=!1,H(G,Y,se,ne),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function _(G){return n.isWebGL2?i.bindVertexArray(G):s.bindVertexArrayOES(G)}function v(G){return n.isWebGL2?i.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function x(G,Y,se){const ne=se.wireframe===!0;let I=o[G.id];I===void 0&&(I={},o[G.id]=I);let le=I[Y.id];le===void 0&&(le={},I[Y.id]=le);let oe=le[ne];return oe===void 0&&(oe=p(d()),le[ne]=oe),oe}function p(G){const Y=[],se=[],ne=[];for(let I=0;I<r;I++)Y[I]=0,se[I]=0,ne[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:se,attributeDivisors:ne,object:G,attributes:{},index:null}}function m(G,Y,se,ne){const I=u.attributes,le=Y.attributes;let oe=0;const $=se.getAttributes();for(const J in $)if($[J].location>=0){const _e=I[J];let Te=le[J];if(Te===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(Te=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(Te=G.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;oe++}return u.attributesNum!==oe||u.index!==ne}function C(G,Y,se,ne){const I={},le=Y.attributes;let oe=0;const $=se.getAttributes();for(const J in $)if($[J].location>=0){let _e=le[J];_e===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(_e=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(_e=G.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),I[J]=Te,oe++}u.attributes=I,u.attributesNum=oe,u.index=ne}function S(){const G=u.newAttributes;for(let Y=0,se=G.length;Y<se;Y++)G[Y]=0}function w(G){A(G,0)}function A(G,Y){const se=u.newAttributes,ne=u.enabledAttributes,I=u.attributeDivisors;se[G]=1,ne[G]===0&&(i.enableVertexAttribArray(G),ne[G]=1),I[G]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,Y),I[G]=Y)}function U(){const G=u.newAttributes,Y=u.enabledAttributes;for(let se=0,ne=Y.length;se<ne;se++)Y[se]!==G[se]&&(i.disableVertexAttribArray(se),Y[se]=0)}function L(G,Y,se,ne,I,le,oe){oe===!0?i.vertexAttribIPointer(G,Y,se,I,le):i.vertexAttribPointer(G,Y,se,ne,I,le)}function H(G,Y,se,ne){if(n.isWebGL2===!1&&(G.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const I=ne.attributes,le=se.getAttributes(),oe=Y.defaultAttributeValues;for(const $ in le){const J=le[$];if(J.location>=0){let ve=I[$];if(ve===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(ve=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(ve=G.instanceColor)),ve!==void 0){const _e=ve.normalized,Te=ve.itemSize,ae=t.get(ve);if(ae===void 0)continue;const De=ae.buffer,Ue=ae.type,rt=ae.bytesPerElement,Ut=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||ve.gpuType===Th);if(ve.isInterleavedBufferAttribute){const ke=ve.data,V=ke.stride,Mt=ve.offset;if(ke.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)A(J.location+Le,ke.meshPerAttribute);G.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Le=0;Le<J.locationSize;Le++)w(J.location+Le);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Le=0;Le<J.locationSize;Le++)L(J.location+Le,Te/J.locationSize,Ue,_e,V*rt,(Mt+Te/J.locationSize*Le)*rt,Ut)}else{if(ve.isInstancedBufferAttribute){for(let ke=0;ke<J.locationSize;ke++)A(J.location+ke,ve.meshPerAttribute);G.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ke=0;ke<J.locationSize;ke++)w(J.location+ke);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ke=0;ke<J.locationSize;ke++)L(J.location+ke,Te/J.locationSize,Ue,_e,Te*rt,Te/J.locationSize*ke*rt,Ut)}}else if(oe!==void 0){const _e=oe[$];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(J.location,_e);break;case 3:i.vertexAttrib3fv(J.location,_e);break;case 4:i.vertexAttrib4fv(J.location,_e);break;default:i.vertexAttrib1fv(J.location,_e)}}}}U()}function M(){te();for(const G in o){const Y=o[G];for(const se in Y){const ne=Y[se];for(const I in ne)v(ne[I].object),delete ne[I];delete Y[se]}delete o[G]}}function b(G){if(o[G.id]===void 0)return;const Y=o[G.id];for(const se in Y){const ne=Y[se];for(const I in ne)v(ne[I].object),delete ne[I];delete Y[se]}delete o[G.id]}function q(G){for(const Y in o){const se=o[Y];if(se[G.id]===void 0)continue;const ne=se[G.id];for(const I in ne)v(ne[I].object),delete ne[I];delete se[G.id]}}function te(){z(),h=!0,u!==l&&(u=l,_(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:te,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:q,initAttributes:S,enableAttribute:w,disableUnusedAttributes:U}}function tv(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,_;if(r)d=i,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,h,f),t.update(h,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function nv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,w=a||e.has("OES_texture_float"),A=S&&w,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:C,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:U}}function iv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new vi,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,_){const v=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?h(null):u();else{const C=s?0:n,S=C*4;let w=m.clippingState||null;l.value=w,w=h(v,d,S,_);for(let A=0;A!==S;++A)w[A]=t[A];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,_,v){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const m=_+x*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,w=_;S!==x;++S,w+=4)a.copy(f[S]).applyMatrix4(C,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function rv(i){let e=new WeakMap;function t(a,o){return o===Ga?a.mapping=Nr:o===Va&&(a.mapping=Fr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ga||o===Va)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new vg(l.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Xh extends Gh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wr=4,Cu=[.125,.215,.35,.446,.526,.582],Hi=20,ba=new Xh,Lu=new vt;let Ta=null;const ki=(1+Math.sqrt(5))/2,Sr=1/ki,Pu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ki,Sr),new N(0,ki,-Sr),new N(Sr,0,ki),new N(-Sr,0,ki),new N(ki,Sr,0),new N(-ki,Sr,0)];class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ta=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta),e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ps,format:Fn,colorSpace:Xn,depthBuffer:!1},r=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sv(s)),this._blurMaterial=ov(s,e,t)}return r}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,r){const o=new An(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Lu),h.toneMapping=Si,h.autoClear=!1;const _=new rs({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new zt(new vs,_);let x=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,x=!0):(_.color.copy(Lu),x=!0);for(let m=0;m<6;m++){const C=m%3;C===0?(o.up.set(0,l[m],0),o.lookAt(u[m],0,0)):C===1?(o.up.set(0,0,l[m]),o.lookAt(0,u[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,u[m]));const S=this._cubeSize;ao(r,C*S,m>2?S:0,S,S),h.setRenderTarget(r),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Nr||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new zt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pu[(r-1)%Pu.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new zt(this._lodPlanes[r],u),d=u.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Hi-1),x=s/v,p=isFinite(s)?1+Math.floor(h*x):Hi;p>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const m=[];let C=0;for(let L=0;L<Hi;++L){const H=L/x,M=Math.exp(-H*H/2);m.push(M),L===0?C+=M:L<p&&(C+=2*M)}for(let L=0;L<m.length;L++)m[L]=m[L]/C;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-n;const w=this._sizeLods[r],A=3*w*(r>S-wr?r-S+wr:0),U=4*(this._cubeSize-w);ao(t,A,U,3*w,2*w),l.setRenderTarget(t),l.render(f,ba)}}function sv(i){const e=[],t=[],n=[];let r=i;const s=i-wr+1+Cu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-wr?l=Cu[a-i+wr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],_=6,v=6,x=3,p=2,m=1,C=new Float32Array(x*v*_),S=new Float32Array(p*v*_),w=new Float32Array(m*v*_);for(let U=0;U<_;U++){const L=U%3*2/3-1,H=U>2?0:-1,M=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];C.set(M,x*v*U),S.set(d,p*v*U);const b=[U,U,U,U,U,U];w.set(b,m*v*U)}const A=new Bn;A.setAttribute("position",new Wn(C,x)),A.setAttribute("uv",new Wn(S,p)),A.setAttribute("faceIndex",new Wn(w,m)),e.push(A),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ov(i,e,t){const n=new Float32Array(Hi),r=new N(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Iu(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ou(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function av(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ga||l===Va,h=l===Nr||l===Fr;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Uu(i)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new Uu(i));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lv(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const x=_[v];for(let p=0,m=x.length;p<m;p++)e.update(x[p],i.ARRAY_BUFFER)}}function u(f){const d=[],_=f.index,v=f.attributes.position;let x=0;if(_!==null){const C=_.array;x=_.version;for(let S=0,w=C.length;S<w;S+=3){const A=C[S+0],U=C[S+1],L=C[S+2];d.push(A,U,U,L,L,A)}}else if(v!==void 0){const C=v.array;x=v.version;for(let S=0,w=C.length/3-1;S<w;S+=3){const A=S+0,U=S+1,L=S+2;d.push(A,U,U,L,L,A)}}else return;const p=new(Uh(d)?kh:zh)(d,1);p.version=x;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function h(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function uv(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function h(d,_){i.drawElements(s,_,o,d*l),t.update(_,s,1)}function f(d,_,v){if(v===0)return;let x,p;if(r)x=i,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](s,_,o,d*l,v),t.update(_,s,v)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f}function hv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function fv(i,e){return i[0]-e[0]}function dv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function pv(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Ht,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,h,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let p=s.get(h);if(p===void 0||p.count!==x){let Y=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",Y)};var _=Y;p!==void 0&&p.texture.dispose();const S=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let M=0;S===!0&&(M=1),w===!0&&(M=2),A===!0&&(M=3);let b=h.attributes.position.count*M,q=1;b>e.maxTextureSize&&(q=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const te=new Float32Array(b*q*4*x),z=new Oh(te,b,q,x);z.type=yi,z.needsUpdate=!0;const G=M*4;for(let se=0;se<x;se++){const ne=U[se],I=L[se],le=H[se],oe=b*q*4*se;for(let $=0;$<ne.count;$++){const J=$*G;S===!0&&(a.fromBufferAttribute(ne,$),te[oe+J+0]=a.x,te[oe+J+1]=a.y,te[oe+J+2]=a.z,te[oe+J+3]=0),w===!0&&(a.fromBufferAttribute(I,$),te[oe+J+4]=a.x,te[oe+J+5]=a.y,te[oe+J+6]=a.z,te[oe+J+7]=0),A===!0&&(a.fromBufferAttribute(le,$),te[oe+J+8]=a.x,te[oe+J+9]=a.y,te[oe+J+10]=a.z,te[oe+J+11]=le.itemSize===4?a.w:1)}}p={count:x,texture:z,size:new Re(b,q)},s.set(h,p),h.addEventListener("dispose",Y)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];const C=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let x=n[h.id];if(x===void 0||x.length!==v){x=[];for(let w=0;w<v;w++)x[w]=[w,0];n[h.id]=x}for(let w=0;w<v;w++){const A=x[w];A[0]=w,A[1]=d[w]}x.sort(dv);for(let w=0;w<8;w++)w<v&&x[w][1]?(o[w][0]=x[w][0],o[w][1]=x[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(fv);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let C=0;for(let w=0;w<8;w++){const A=o[w],U=A[0],L=A[1];U!==Number.MAX_SAFE_INTEGER&&L?(p&&h.getAttribute("morphTarget"+w)!==p[U]&&h.setAttribute("morphTarget"+w,p[U]),m&&h.getAttribute("morphNormal"+w)!==m[U]&&h.setAttribute("morphNormal"+w,m[U]),r[w]=L,C+=L):(p&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),m&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),r[w]=0)}const S=h.morphTargetsRelative?1:1-C;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function mv(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const qh=new hn,Yh=new Oh,jh=new tg,$h=new Vh,Nu=[],Fu=[],Bu=new Float32Array(16),zu=new Float32Array(9),ku=new Float32Array(4);function Hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Nu[r];if(s===void 0&&(s=new Float32Array(r),Nu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ao(i,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;ku.set(n),i.uniformMatrix2fv(this.addr,!1,ku),Nt(t,n)}}function Mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;zu.set(n),i.uniformMatrix3fv(this.addr,!1,zu),Nt(t,n)}}function Sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;Bu.set(n),i.uniformMatrix4fv(this.addr,!1,Bu),Nt(t,n)}}function Ev(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Pv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||qh,r)}function Uv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jh,r)}function Dv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$h,r)}function Iv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Yh,r)}function Ov(i){switch(i){case 5126:return gv;case 35664:return _v;case 35665:return vv;case 35666:return xv;case 35674:return yv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return Ev;case 35667:case 35671:return bv;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return wv;case 36294:return Rv;case 36295:return Cv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Nv(i,e){i.uniform1fv(this.addr,e)}function Fv(i,e){const t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bv(i,e){const t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function zv(i,e){const t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function kv(i,e){const t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){const t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gv(i,e){const t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vv(i,e){i.uniform1iv(this.addr,e)}function Wv(i,e){i.uniform2iv(this.addr,e)}function Xv(i,e){i.uniform3iv(this.addr,e)}function qv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function jv(i,e){i.uniform2uiv(this.addr,e)}function $v(i,e){i.uniform3uiv(this.addr,e)}function Kv(i,e){i.uniform4uiv(this.addr,e)}function Zv(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||qh,s[a])}function Jv(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jh,s[a])}function Qv(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$h,s[a])}function ex(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Yh,s[a])}function tx(i){switch(i){case 5126:return Nv;case 35664:return Fv;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return jv;case 36295:return $v;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ex}}class nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ov(t.type)}}class ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=tx(t.type)}}class rx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Hu(i,e){i.seq.push(e),i.map[e.id]=e}function sx(i,e,t){const n=i.name,r=n.length;for(Aa.lastIndex=0;;){const s=Aa.exec(n),a=Aa.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Hu(t,u===void 0?new nx(o,i,e):new ix(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new rx(o),Hu(t,f)),t=f}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);sx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Gu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let ox=0;function ax(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cx(i){switch(i){case Xn:return["Linear","( value )"];case Et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ax(i.getShaderSource(e),a)}else return r}function lx(i,e){const t=cx(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ux(i,e){let t;switch(e){case nm:t="Linear";break;case im:t="Reinhard";break;case rm:t="OptimizedCineon";break;case sm:t="ACESFilmic";break;case om:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function fx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qr(i){return i!==""}function Wu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const px=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(px,gx)}const mx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gx(i,e){let t=Je[e];if(t===void 0){const n=mx.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ja(t)}const _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(i){return i.replace(_x,vx)}function vx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Nr:case Fr:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Sx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eh:e="ENVMAP_BLENDING_MULTIPLY";break;case em:e="ENVMAP_BLENDING_MIX";break;case tm:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bx(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xx(t),u=yx(t),h=Mx(t),f=Sx(t),d=Ex(t),_=t.isWebGL2?"":hx(t),v=fx(s),x=r.createProgram();let p,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qr).join(`
`),p.length>0&&(p+=`
`),m=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(p=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[_,Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Je.tonemapping_pars_fragment:"",t.toneMapping!==Si?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,lx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),a=ja(a),a=Wu(a,t),a=Xu(a,t),o=ja(o),o=Wu(o,t),o=Xu(o,t),a=qu(a),o=qu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=C+p+a,w=C+m+o,A=Gu(r,r.VERTEX_SHADER,S),U=Gu(r,r.FRAGMENT_SHADER,w);if(r.attachShader(x,A),r.attachShader(x,U),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),b=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(U).trim();let te=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,A,U);else{const G=Vu(r,A,"vertex"),Y=Vu(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+G+`
`+Y)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||q==="")&&(z=!1);z&&(this.diagnostics={runnable:te,programLog:M,vertexShader:{log:b,prefix:p},fragmentShader:{log:q,prefix:m}})}r.deleteShader(A),r.deleteShader(U);let L;this.getUniforms=function(){return L===void 0&&(L=new ho(r,x)),L};let H;return this.getAttributes=function(){return H===void 0&&(H=dx(r,x)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=U,this}let Tx=0;class Ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wx(e),t.set(e,n)),n}}class wx{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function Rx(i,e,t,n,r,s,a){const o=new Fh,l=new Ax,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,b,q,te,z){const G=te.fog,Y=z.geometry,se=M.isMeshStandardMaterial?te.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||se),I=ne&&ne.mapping===Mo?ne.image.height:null,le=v[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$=oe!==void 0?oe.length:0;let J=0;Y.morphAttributes.position!==void 0&&(J=1),Y.morphAttributes.normal!==void 0&&(J=2),Y.morphAttributes.color!==void 0&&(J=3);let ve,_e,Te,ae;if(le){const gt=Vn[le];ve=gt.vertexShader,_e=gt.fragmentShader}else ve=M.vertexShader,_e=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),ae=l.getFragmentShaderID(M);const De=i.getRenderTarget(),Ue=z.isInstancedMesh===!0,rt=!!M.map,Ut=!!M.matcap,ke=!!ne,V=!!M.aoMap,Mt=!!M.lightMap,Le=!!M.bumpMap,Ge=!!M.normalMap,Be=!!M.displacementMap,mt=!!M.emissiveMap,$e=!!M.metalnessMap,Ve=!!M.roughnessMap,st=M.anisotropy>0,Rt=M.clearcoat>0,bt=M.iridescence>0,P=M.sheen>0,T=M.transmission>0,X=st&&!!M.anisotropyMap,ue=Rt&&!!M.clearcoatMap,ce=Rt&&!!M.clearcoatNormalMap,fe=Rt&&!!M.clearcoatRoughnessMap,Ce=bt&&!!M.iridescenceMap,de=bt&&!!M.iridescenceThicknessMap,K=P&&!!M.sheenColorMap,D=P&&!!M.sheenRoughnessMap,ie=!!M.specularMap,Se=!!M.specularColorMap,me=!!M.specularIntensityMap,Me=T&&!!M.transmissionMap,ze=T&&!!M.thicknessMap,Ke=!!M.gradientMap,O=!!M.alphaMap,xe=M.alphaTest>0,Z=!!M.alphaHash,he=!!M.extensions,pe=!!Y.attributes.uv1,Qe=!!Y.attributes.uv2,it=!!Y.attributes.uv3;let at=Si;return M.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(at=i.toneMapping),{isWebGL2:h,shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:ve,fragmentShader:_e,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Xn,map:rt,matcap:Ut,envMap:ke,envMapMode:ke&&ne.mapping,envMapCubeUVHeight:I,aoMap:V,lightMap:Mt,bumpMap:Le,normalMap:Ge,displacementMap:d&&Be,emissiveMap:mt,normalMapObjectSpace:Ge&&M.normalMapType===ym,normalMapTangentSpace:Ge&&M.normalMapType===xm,metalnessMap:$e,roughnessMap:Ve,anisotropy:st,anisotropyMap:X,clearcoat:Rt,clearcoatMap:ue,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,iridescence:bt,iridescenceMap:Ce,iridescenceThicknessMap:de,sheen:P,sheenColorMap:K,sheenRoughnessMap:D,specularMap:ie,specularColorMap:Se,specularIntensityMap:me,transmission:T,transmissionMap:Me,thicknessMap:ze,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Ir,alphaMap:O,alphaTest:xe,alphaHash:Z,combine:M.combine,mapUv:rt&&x(M.map.channel),aoMapUv:V&&x(M.aoMap.channel),lightMapUv:Mt&&x(M.lightMap.channel),bumpMapUv:Le&&x(M.bumpMap.channel),normalMapUv:Ge&&x(M.normalMap.channel),displacementMapUv:Be&&x(M.displacementMap.channel),emissiveMapUv:mt&&x(M.emissiveMap.channel),metalnessMapUv:$e&&x(M.metalnessMap.channel),roughnessMapUv:Ve&&x(M.roughnessMap.channel),anisotropyMapUv:X&&x(M.anisotropyMap.channel),clearcoatMapUv:ue&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:K&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:D&&x(M.sheenRoughnessMap.channel),specularMapUv:ie&&x(M.specularMap.channel),specularColorMapUv:Se&&x(M.specularColorMap.channel),specularIntensityMapUv:me&&x(M.specularIntensityMap.channel),transmissionMapUv:Me&&x(M.transmissionMap.channel),thicknessMapUv:ze&&x(M.thicknessMap.channel),alphaMapUv:O&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ge||st),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:Qe,vertexUv3s:it,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(rt||O),fog:!!G,useFog:M.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,useLegacyLights:i._useLegacyLights,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&M.map.colorSpace===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===si,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)b.push(q),b.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(C(b,M),S(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function C(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function S(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function w(M){const b=v[M.type];let q;if(b){const te=Vn[b];q=pg.clone(te.uniforms)}else q=M.uniforms;return q}function A(M,b){let q;for(let te=0,z=u.length;te<z;te++){const G=u[te];if(G.cacheKey===b){q=G,++q.usedTimes;break}}return q===void 0&&(q=new bx(i,b,M,s),u.push(q)),q}function U(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function L(M){l.remove(M)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:A,releaseProgram:U,releaseShaderCache:L,programs:u,dispose:H}}function Cx(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Lx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ju(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $u(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,_,v,x,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:_,groupOrder:v,renderOrder:f.renderOrder,z:x,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=_,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=x,m.group=p),e++,m}function o(f,d,_,v,x,p){const m=a(f,d,_,v,x,p);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):t.push(m)}function l(f,d,_,v,x,p){const m=a(f,d,_,v,x,p);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||Lx),n.length>1&&n.sort(d||ju),r.length>1&&r.sort(d||ju)}function h(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function Px(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new $u,i.set(n,[a])):r>=s.length?(a=new $u,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ux(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new vt};break;case"SpotLight":t={position:new N,direction:new N,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Dx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ix=0;function Ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nx(i,e){const t=new Ux,n=Dx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new N);const s=new N,a=new Pt,o=new Pt;function l(h,f){let d=0,_=0,v=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let x=0,p=0,m=0,C=0,S=0,w=0,A=0,U=0,L=0,H=0;h.sort(Ox);const M=f===!0?Math.PI:1;for(let q=0,te=h.length;q<te;q++){const z=h[q],G=z.color,Y=z.intensity,se=z.distance,ne=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=G.r*Y*M,_+=G.g*Y*M,v+=G.b*Y*M;else if(z.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(z.sh.coefficients[I],Y);else if(z.isDirectionalLight){const I=t.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity*M),z.castShadow){const le=z.shadow,oe=n.get(z);oe.shadowBias=le.bias,oe.shadowNormalBias=le.normalBias,oe.shadowRadius=le.radius,oe.shadowMapSize=le.mapSize,r.directionalShadow[x]=oe,r.directionalShadowMap[x]=ne,r.directionalShadowMatrix[x]=z.shadow.matrix,w++}r.directional[x]=I,x++}else if(z.isSpotLight){const I=t.get(z);I.position.setFromMatrixPosition(z.matrixWorld),I.color.copy(G).multiplyScalar(Y*M),I.distance=se,I.coneCos=Math.cos(z.angle),I.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),I.decay=z.decay,r.spot[m]=I;const le=z.shadow;if(z.map&&(r.spotLightMap[L]=z.map,L++,le.updateMatrices(z),z.castShadow&&H++),r.spotLightMatrix[m]=le.matrix,z.castShadow){const oe=n.get(z);oe.shadowBias=le.bias,oe.shadowNormalBias=le.normalBias,oe.shadowRadius=le.radius,oe.shadowMapSize=le.mapSize,r.spotShadow[m]=oe,r.spotShadowMap[m]=ne,U++}m++}else if(z.isRectAreaLight){const I=t.get(z);I.color.copy(G).multiplyScalar(Y),I.halfWidth.set(z.width*.5,0,0),I.halfHeight.set(0,z.height*.5,0),r.rectArea[C]=I,C++}else if(z.isPointLight){const I=t.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity*M),I.distance=z.distance,I.decay=z.decay,z.castShadow){const le=z.shadow,oe=n.get(z);oe.shadowBias=le.bias,oe.shadowNormalBias=le.normalBias,oe.shadowRadius=le.radius,oe.shadowMapSize=le.mapSize,oe.shadowCameraNear=le.camera.near,oe.shadowCameraFar=le.camera.far,r.pointShadow[p]=oe,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=z.shadow.matrix,A++}r.point[p]=I,p++}else if(z.isHemisphereLight){const I=t.get(z);I.skyColor.copy(z.color).multiplyScalar(Y*M),I.groundColor.copy(z.groundColor).multiplyScalar(Y*M),r.hemi[S]=I,S++}}C>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=_,r.ambient[2]=v;const b=r.hash;(b.directionalLength!==x||b.pointLength!==p||b.spotLength!==m||b.rectAreaLength!==C||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==A||b.numSpotShadows!==U||b.numSpotMaps!==L)&&(r.directional.length=x,r.spot.length=m,r.rectArea.length=C,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=U+L-H,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=H,b.directionalLength=x,b.pointLength=p,b.spotLength=m,b.rectAreaLength=C,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=A,b.numSpotShadows=U,b.numSpotMaps=L,r.version=Ix++)}function u(h,f){let d=0,_=0,v=0,x=0,p=0;const m=f.matrixWorldInverse;for(let C=0,S=h.length;C<S;C++){const w=h[C];if(w.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(w.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),v++}else if(w.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const A=r.point[_];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),_++}else if(w.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function Ku(i,e){const t=new Nx(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Fx(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Ku(i,e),t.set(s,[l])):a>=o.length?(l=new Ku(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Bx extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zx extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`;function Gx(i,e,t){let n=new rc;const r=new Re,s=new Re,a=new Ht,o=new Bx({depthPacking:vm}),l=new zx,u={},h=t.maxTextureSize,f={[Ti]:un,[un]:Ti,[si]:si},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new Bn;v.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let m=this.type;this.render=function(A,U,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const H=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Mi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const te=m!==ii&&this.type===ii,z=m===ii&&this.type!==ii;for(let G=0,Y=A.length;G<Y;G++){const se=A[G],ne=se.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const I=ne.getFrameExtents();if(r.multiply(I),s.copy(ne.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,ne.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,ne.mapSize.y=s.y)),ne.map===null||te===!0||z===!0){const oe=this.type!==ii?{minFilter:sn,magFilter:sn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new qi(r.x,r.y,oe),ne.map.texture.name=se.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const le=ne.getViewportCount();for(let oe=0;oe<le;oe++){const $=ne.getViewport(oe);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),q.viewport(a),ne.updateMatrices(se,oe),n=ne.getFrustum(),w(U,L,ne.camera,se,this.type)}ne.isPointLightShadow!==!0&&this.type===ii&&C(ne,L),ne.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(H,M,b)};function C(A,U){const L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(U,null,L,d,x,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(U,null,L,_,x,null)}function S(A,U,L,H){let M=null;const b=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)M=b;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const q=M.uuid,te=U.uuid;let z=u[q];z===void 0&&(z={},u[q]=z);let G=z[te];G===void 0&&(G=M.clone(),z[te]=G),M=G}if(M.visible=U.visible,M.wireframe=U.wireframe,H===ii?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:f[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=L}return M}function w(A,U,L,H,M){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ii)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const te=e.update(A),z=A.material;if(Array.isArray(z)){const G=te.groups;for(let Y=0,se=G.length;Y<se;Y++){const ne=G[Y],I=z[ne.materialIndex];if(I&&I.visible){const le=S(A,I,H,M);i.renderBufferDirect(L,null,te,le,A,ne)}}}else if(z.visible){const G=S(A,z,H,M);i.renderBufferDirect(L,null,te,G,A,null)}}const q=A.children;for(let te=0,z=q.length;te<z;te++)w(q[te],U,L,H,M)}}function Vx(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const xe=new Ht;let Z=null;const he=new Ht(0,0,0,0);return{setMask:function(pe){Z!==pe&&!O&&(i.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){O=pe},setClear:function(pe,Qe,it,at,Zt){Zt===!0&&(pe*=at,Qe*=at,it*=at),xe.set(pe,Qe,it,at),he.equals(xe)===!1&&(i.clearColor(pe,Qe,it,at),he.copy(xe))},reset:function(){O=!1,Z=null,he.set(-1,0,0,0)}}}function s(){let O=!1,xe=null,Z=null,he=null;return{setTest:function(pe){pe?De(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(pe){xe!==pe&&!O&&(i.depthMask(pe),xe=pe)},setFunc:function(pe){if(Z!==pe){switch(pe){case Yp:i.depthFunc(i.NEVER);break;case jp:i.depthFunc(i.ALWAYS);break;case $p:i.depthFunc(i.LESS);break;case Ha:i.depthFunc(i.LEQUAL);break;case Kp:i.depthFunc(i.EQUAL);break;case Zp:i.depthFunc(i.GEQUAL);break;case Jp:i.depthFunc(i.GREATER);break;case Qp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=pe}},setLocked:function(pe){O=pe},setClear:function(pe){he!==pe&&(i.clearDepth(pe),he=pe)},reset:function(){O=!1,xe=null,Z=null,he=null}}}function a(){let O=!1,xe=null,Z=null,he=null,pe=null,Qe=null,it=null,at=null,Zt=null;return{setTest:function(gt){O||(gt?De(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(gt){xe!==gt&&!O&&(i.stencilMask(gt),xe=gt)},setFunc:function(gt,gn,Gt){(Z!==gt||he!==gn||pe!==Gt)&&(i.stencilFunc(gt,gn,Gt),Z=gt,he=gn,pe=Gt)},setOp:function(gt,gn,Gt){(Qe!==gt||it!==gn||at!==Gt)&&(i.stencilOp(gt,gn,Gt),Qe=gt,it=gn,at=Gt)},setLocked:function(gt){O=gt},setClear:function(gt){Zt!==gt&&(i.clearStencil(gt),Zt=gt)},reset:function(){O=!1,xe=null,Z=null,he=null,pe=null,Qe=null,it=null,at=null,Zt=null}}}const o=new r,l=new s,u=new a,h=new WeakMap,f=new WeakMap;let d={},_={},v=new WeakMap,x=[],p=null,m=!1,C=null,S=null,w=null,A=null,U=null,L=null,H=null,M=!1,b=null,q=null,te=null,z=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ne=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(I)[1]),se=ne>=1):I.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),se=ne>=2);let le=null,oe={};const $=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),ve=new Ht().fromArray($),_e=new Ht().fromArray(J);function Te(O,xe,Z,he){const pe=new Uint8Array(4),Qe=i.createTexture();i.bindTexture(O,Qe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<Z;it++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(xe,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(xe+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Qe}const ae={};ae[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(i.DEPTH_TEST),l.setFunc(Ha),Be(!1),mt(Il),De(i.CULL_FACE),Le(Mi);function De(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Ue(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function rt(O,xe){return _[O]!==xe?(i.bindFramebuffer(O,xe),_[O]=xe,n&&(O===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=xe),O===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=xe)),!0):!1}function Ut(O,xe){let Z=x,he=!1;if(O)if(Z=v.get(xe),Z===void 0&&(Z=[],v.set(xe,Z)),O.isWebGLMultipleRenderTargets){const pe=O.texture;if(Z.length!==pe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Qe=0,it=pe.length;Qe<it;Qe++)Z[Qe]=i.COLOR_ATTACHMENT0+Qe;Z.length=pe.length,he=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,he=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function ke(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const V={[br]:i.FUNC_ADD,[Np]:i.FUNC_SUBTRACT,[Fp]:i.FUNC_REVERSE_SUBTRACT};if(n)V[Bl]=i.MIN,V[zl]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(V[Bl]=O.MIN_EXT,V[zl]=O.MAX_EXT)}const Mt={[Bp]:i.ZERO,[zp]:i.ONE,[kp]:i.SRC_COLOR,[Mh]:i.SRC_ALPHA,[qp]:i.SRC_ALPHA_SATURATE,[Wp]:i.DST_COLOR,[Gp]:i.DST_ALPHA,[Hp]:i.ONE_MINUS_SRC_COLOR,[Sh]:i.ONE_MINUS_SRC_ALPHA,[Xp]:i.ONE_MINUS_DST_COLOR,[Vp]:i.ONE_MINUS_DST_ALPHA};function Le(O,xe,Z,he,pe,Qe,it,at){if(O===Mi){m===!0&&(Ue(i.BLEND),m=!1);return}if(m===!1&&(De(i.BLEND),m=!0),O!==Op){if(O!==C||at!==M){if((S!==br||U!==br)&&(i.blendEquation(i.FUNC_ADD),S=br,U=br),at)switch(O){case Ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,A=null,L=null,H=null,C=O,M=at}return}pe=pe||xe,Qe=Qe||Z,it=it||he,(xe!==S||pe!==U)&&(i.blendEquationSeparate(V[xe],V[pe]),S=xe,U=pe),(Z!==w||he!==A||Qe!==L||it!==H)&&(i.blendFuncSeparate(Mt[Z],Mt[he],Mt[Qe],Mt[it]),w=Z,A=he,L=Qe,H=it),C=O,M=!1}function Ge(O,xe){O.side===si?Ue(i.CULL_FACE):De(i.CULL_FACE);let Z=O.side===un;xe&&(Z=!Z),Be(Z),O.blending===Ir&&O.transparent===!1?Le(Mi):Le(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const he=O.stencilWrite;u.setTest(he),he&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function mt(O){O!==Pp?(De(i.CULL_FACE),O!==q&&(O===Il?i.cullFace(i.BACK):O===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),q=O}function $e(O){O!==te&&(se&&i.lineWidth(O),te=O)}function Ve(O,xe,Z){O?(De(i.POLYGON_OFFSET_FILL),(z!==xe||G!==Z)&&(i.polygonOffset(xe,Z),z=xe,G=Z)):Ue(i.POLYGON_OFFSET_FILL)}function st(O){O?De(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function Rt(O){O===void 0&&(O=i.TEXTURE0+Y-1),le!==O&&(i.activeTexture(O),le=O)}function bt(O,xe,Z){Z===void 0&&(le===null?Z=i.TEXTURE0+Y-1:Z=le);let he=oe[Z];he===void 0&&(he={type:void 0,texture:void 0},oe[Z]=he),(he.type!==O||he.texture!==xe)&&(le!==Z&&(i.activeTexture(Z),le=Z),i.bindTexture(O,xe||ae[O]),he.type=O,he.texture=xe)}function P(){const O=oe[le];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){ve.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ve.copy(O))}function me(O){_e.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),_e.copy(O))}function Me(O,xe){let Z=f.get(xe);Z===void 0&&(Z=new WeakMap,f.set(xe,Z));let he=Z.get(O);he===void 0&&(he=i.getUniformBlockIndex(xe,O.name),Z.set(O,he))}function ze(O,xe){const he=f.get(xe).get(O);h.get(xe)!==he&&(i.uniformBlockBinding(xe,he,O.__bindingPointIndex),h.set(xe,he))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},le=null,oe={},_={},v=new WeakMap,x=[],p=null,m=!1,C=null,S=null,w=null,A=null,U=null,L=null,H=null,M=!1,b=null,q=null,te=null,z=null,G=null,ve.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:De,disable:Ue,bindFramebuffer:rt,drawBuffers:Ut,useProgram:ke,setBlending:Le,setMaterial:Ge,setFlipSided:Be,setCullFace:mt,setLineWidth:$e,setPolygonOffset:Ve,setScissorTest:st,activeTexture:Rt,bindTexture:bt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:D,texImage3D:ie,updateUBOMapping:Me,uniformBlockBinding:ze,texStorage2D:de,texStorage3D:K,texSubImage2D:ue,texSubImage3D:ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ce,scissor:Se,viewport:me,reset:Ke}}function Wx(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,T){return m?new OffscreenCanvas(P,T):vo("canvas")}function S(P,T,X,ue){let ce=1;if((P.width>ue||P.height>ue)&&(ce=ue/Math.max(P.width,P.height)),ce<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const fe=T?_o:Math.floor,Ce=fe(ce*P.width),de=fe(ce*P.height);x===void 0&&(x=C(Ce,de));const K=X?C(Ce,de):x;return K.width=Ce,K.height=de,K.getContext("2d").drawImage(P,0,0,Ce,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ce+"x"+de+")."),K}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function w(P){return Ya(P.width)&&Ya(P.height)}function A(P){return o?!1:P.wrapS!==Nn||P.wrapT!==Nn||P.minFilter!==sn&&P.minFilter!==Tn}function U(P,T){return P.generateMipmaps&&T&&P.minFilter!==sn&&P.minFilter!==Tn}function L(P){i.generateMipmap(P)}function H(P,T,X,ue,ce=!1){if(o===!1)return T;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=T;return T===i.RED&&(X===i.FLOAT&&(fe=i.R32F),X===i.HALF_FLOAT&&(fe=i.R16F),X===i.UNSIGNED_BYTE&&(fe=i.R8)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(fe=i.R8UI),X===i.UNSIGNED_SHORT&&(fe=i.R16UI),X===i.UNSIGNED_INT&&(fe=i.R32UI),X===i.BYTE&&(fe=i.R8I),X===i.SHORT&&(fe=i.R16I),X===i.INT&&(fe=i.R32I)),T===i.RG&&(X===i.FLOAT&&(fe=i.RG32F),X===i.HALF_FLOAT&&(fe=i.RG16F),X===i.UNSIGNED_BYTE&&(fe=i.RG8)),T===i.RGBA&&(X===i.FLOAT&&(fe=i.RGBA32F),X===i.HALF_FLOAT&&(fe=i.RGBA16F),X===i.UNSIGNED_BYTE&&(fe=ue===Et&&ce===!1?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)),(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(P,T,X){return U(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Tn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function b(P){return P===sn||P===kl||P===ea?i.NEAREST:i.LINEAR}function q(P){const T=P.target;T.removeEventListener("dispose",q),z(T),T.isVideoTexture&&v.delete(T)}function te(P){const T=P.target;T.removeEventListener("dispose",te),Y(T)}function z(P){const T=n.get(P);if(T.__webglInit===void 0)return;const X=P.source,ue=p.get(X);if(ue){const ce=ue[T.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&G(P),Object.keys(ue).length===0&&p.delete(X)}n.remove(P)}function G(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const X=P.source,ue=p.get(X);delete ue[T.__cacheKey],a.memory.textures--}function Y(P){const T=P.texture,X=n.get(P),ue=n.get(T);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(X.__webglFramebuffer[ce]))for(let fe=0;fe<X.__webglFramebuffer[ce].length;fe++)i.deleteFramebuffer(X.__webglFramebuffer[ce][fe]);else i.deleteFramebuffer(X.__webglFramebuffer[ce]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[ce])}else{if(Array.isArray(X.__webglFramebuffer))for(let ce=0;ce<X.__webglFramebuffer.length;ce++)i.deleteFramebuffer(X.__webglFramebuffer[ce]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ce=0;ce<X.__webglColorRenderbuffer.length;ce++)X.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[ce]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ce=0,fe=T.length;ce<fe;ce++){const Ce=n.get(T[ce]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(T[ce])}n.remove(T),n.remove(P)}let se=0;function ne(){se=0}function I(){const P=se;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),se+=1,P}function le(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function oe(P,T){const X=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ue=P.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(X,P,T);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function $(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){rt(X,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function J(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){rt(X,P,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function ve(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Ut(X,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}const _e={[Wa]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},Te={[sn]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[ea]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[am]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},ae={[Sm]:i.NEVER,[Cm]:i.ALWAYS,[Em]:i.LESS,[Tm]:i.LEQUAL,[bm]:i.EQUAL,[Rm]:i.GEQUAL,[Am]:i.GREATER,[wm]:i.NOTEQUAL};function De(P,T,X){if(X?(i.texParameteri(P,i.TEXTURE_WRAP_S,_e[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,_e[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,_e[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Te[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Te[T.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==Nn||T.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,b(T.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==sn&&T.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===sn||T.minFilter!==ea&&T.minFilter!==ds||T.type===yi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(P,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Ue(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",q));const ue=T.source;let ce=p.get(ue);ce===void 0&&(ce={},p.set(ue,ce));const fe=le(T);if(fe!==P.__cacheKey){ce[fe]===void 0&&(ce[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ce[fe].usedTimes++;const Ce=ce[P.__cacheKey];Ce!==void 0&&(ce[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&G(T)),P.__cacheKey=fe,P.__webglTexture=ce[fe].texture}return X}function rt(P,T,X){let ue=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=i.TEXTURE_3D);const ce=Ue(P,T),fe=T.source;t.bindTexture(ue,P.__webglTexture,i.TEXTURE0+X);const Ce=n.get(fe);if(fe.version!==Ce.__version||ce===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const de=A(T)&&w(T.image)===!1;let K=S(T.image,de,!1,h);K=bt(T,K);const D=w(K)||o,ie=s.convert(T.format,T.colorSpace);let Se=s.convert(T.type),me=H(T.internalFormat,ie,Se,T.colorSpace,T.isVideoTexture);De(ue,T,D);let Me;const ze=T.mipmaps,Ke=o&&T.isVideoTexture!==!0,O=Ce.__version===void 0||ce===!0,xe=M(T,K,D);if(T.isDepthTexture)me=i.DEPTH_COMPONENT,o?T.type===yi?me=i.DEPTH_COMPONENT32F:T.type===xi?me=i.DEPTH_COMPONENT24:T.type===Gi?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:T.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vi&&me===i.DEPTH_COMPONENT&&T.type!==tc&&T.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=xi,Se=s.convert(T.type)),T.format===Br&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,T.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Gi,Se=s.convert(T.type))),O&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,me,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,me,K.width,K.height,0,ie,Se,null));else if(T.isDataTexture)if(ze.length>0&&D){Ke&&O&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let Z=0,he=ze.length;Z<he;Z++)Me=ze[Z],Ke?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Me.width,Me.height,ie,Se,Me.data):t.texImage2D(i.TEXTURE_2D,Z,me,Me.width,Me.height,0,ie,Se,Me.data);T.generateMipmaps=!1}else Ke?(O&&t.texStorage2D(i.TEXTURE_2D,xe,me,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,ie,Se,K.data)):t.texImage2D(i.TEXTURE_2D,0,me,K.width,K.height,0,ie,Se,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,ze[0].width,ze[0].height,K.depth);for(let Z=0,he=ze.length;Z<he;Z++)Me=ze[Z],T.format!==Fn?ie!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,K.depth,ie,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,me,Me.width,Me.height,K.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,K.depth,ie,Se,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,me,Me.width,Me.height,K.depth,0,ie,Se,Me.data)}else{Ke&&O&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let Z=0,he=ze.length;Z<he;Z++)Me=ze[Z],T.format!==Fn?ie!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Me.width,Me.height,ie,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,me,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Me.width,Me.height,ie,Se,Me.data):t.texImage2D(i.TEXTURE_2D,Z,me,Me.width,Me.height,0,ie,Se,Me.data)}else if(T.isDataArrayTexture)Ke?(O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ie,Se,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,K.width,K.height,K.depth,0,ie,Se,K.data);else if(T.isData3DTexture)Ke?(O&&t.texStorage3D(i.TEXTURE_3D,xe,me,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ie,Se,K.data)):t.texImage3D(i.TEXTURE_3D,0,me,K.width,K.height,K.depth,0,ie,Se,K.data);else if(T.isFramebufferTexture){if(O)if(Ke)t.texStorage2D(i.TEXTURE_2D,xe,me,K.width,K.height);else{let Z=K.width,he=K.height;for(let pe=0;pe<xe;pe++)t.texImage2D(i.TEXTURE_2D,pe,me,Z,he,0,ie,Se,null),Z>>=1,he>>=1}}else if(ze.length>0&&D){Ke&&O&&t.texStorage2D(i.TEXTURE_2D,xe,me,ze[0].width,ze[0].height);for(let Z=0,he=ze.length;Z<he;Z++)Me=ze[Z],Ke?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ie,Se,Me):t.texImage2D(i.TEXTURE_2D,Z,me,ie,Se,Me);T.generateMipmaps=!1}else Ke?(O&&t.texStorage2D(i.TEXTURE_2D,xe,me,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Se,K)):t.texImage2D(i.TEXTURE_2D,0,me,ie,Se,K);U(T,D)&&L(ue),Ce.__version=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ut(P,T,X){if(T.image.length!==6)return;const ue=Ue(P,T),ce=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const fe=n.get(ce);if(ce.version!==fe.__version||ue===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ce=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,K=[];for(let Z=0;Z<6;Z++)!Ce&&!de?K[Z]=S(T.image[Z],!1,!0,u):K[Z]=de?T.image[Z].image:T.image[Z],K[Z]=bt(T,K[Z]);const D=K[0],ie=w(D)||o,Se=s.convert(T.format,T.colorSpace),me=s.convert(T.type),Me=H(T.internalFormat,Se,me,T.colorSpace),ze=o&&T.isVideoTexture!==!0,Ke=fe.__version===void 0||ue===!0;let O=M(T,D,ie);De(i.TEXTURE_CUBE_MAP,T,ie);let xe;if(Ce){ze&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,O,Me,D.width,D.height);for(let Z=0;Z<6;Z++){xe=K[Z].mipmaps;for(let he=0;he<xe.length;he++){const pe=xe[he];T.format!==Fn?Se!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,pe.width,pe.height,Se,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,pe.width,pe.height,Se,me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Me,pe.width,pe.height,0,Se,me,pe.data)}}}else{xe=T.mipmaps,ze&&Ke&&(xe.length>0&&O++,t.texStorage2D(i.TEXTURE_CUBE_MAP,O,Me,K[0].width,K[0].height));for(let Z=0;Z<6;Z++)if(de){ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,K[Z].width,K[Z].height,Se,me,K[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Me,K[Z].width,K[Z].height,0,Se,me,K[Z].data);for(let he=0;he<xe.length;he++){const Qe=xe[he].image[Z].image;ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Qe.width,Qe.height,Se,me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Me,Qe.width,Qe.height,0,Se,me,Qe.data)}}else{ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se,me,K[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Me,Se,me,K[Z]);for(let he=0;he<xe.length;he++){const pe=xe[he];ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Se,me,pe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Me,Se,me,pe.image[Z])}}}U(T,ie)&&L(i.TEXTURE_CUBE_MAP),fe.__version=ce.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ke(P,T,X,ue,ce,fe){const Ce=s.convert(X.format,X.colorSpace),de=s.convert(X.type),K=H(X.internalFormat,Ce,de,X.colorSpace);if(!n.get(T).__hasExternalTextures){const ie=Math.max(1,T.width>>fe),Se=Math.max(1,T.height>>fe);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,fe,K,ie,Se,T.depth,0,Ce,de,null):t.texImage2D(ce,fe,K,ie,Se,0,Ce,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),st(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ce,n.get(X).__webglTexture,0,Ve(T)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ce,n.get(X).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(P,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let ue=i.DEPTH_COMPONENT16;if(X||st(T)){const ce=T.depthTexture;ce&&ce.isDepthTexture&&(ce.type===yi?ue=i.DEPTH_COMPONENT32F:ce.type===xi&&(ue=i.DEPTH_COMPONENT24));const fe=Ve(T);st(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ue,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ue,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const ue=Ve(T);X&&st(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,T.width,T.height):st(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const ue=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ce=0;ce<ue.length;ce++){const fe=ue[ce],Ce=s.convert(fe.format,fe.colorSpace),de=s.convert(fe.type),K=H(fe.internalFormat,Ce,de,fe.colorSpace),D=Ve(T);X&&st(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,D,K,T.width,T.height):st(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D,K,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,K,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const ue=n.get(T.depthTexture).__webglTexture,ce=Ve(T);if(T.depthTexture.format===Vi)st(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Br)st(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Le(P){const T=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Mt(T.__webglFramebuffer,P)}else if(X){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]=i.createRenderbuffer(),V(T.__webglDepthbuffer[ue],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),V(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(P,T,X){const ue=n.get(P);T!==void 0&&ke(ue.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Le(P)}function Be(P){const T=P.texture,X=n.get(P),ue=n.get(T);P.addEventListener("dispose",te),P.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=T.version,a.memory.textures++);const ce=P.isWebGLCubeRenderTarget===!0,fe=P.isWebGLMultipleRenderTargets===!0,Ce=w(P)||o;if(ce){X.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[de]=[];for(let K=0;K<T.mipmaps.length;K++)X.__webglFramebuffer[de][K]=i.createFramebuffer()}else X.__webglFramebuffer[de]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)X.__webglFramebuffer[de]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(fe)if(r.drawBuffers){const de=P.texture;for(let K=0,D=de.length;K<D;K++){const ie=n.get(de[K]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&st(P)===!1){const de=fe?T:[T];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let K=0;K<de.length;K++){const D=de[K];X.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[K]);const ie=s.convert(D.format,D.colorSpace),Se=s.convert(D.type),me=H(D.internalFormat,ie,Se,D.colorSpace,P.isXRRenderTarget===!0),Me=Ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,X.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),V(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),De(i.TEXTURE_CUBE_MAP,T,Ce);for(let de=0;de<6;de++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)ke(X.__webglFramebuffer[de][K],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,K);else ke(X.__webglFramebuffer[de],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);U(T,Ce)&&L(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const de=P.texture;for(let K=0,D=de.length;K<D;K++){const ie=de[K],Se=n.get(ie);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),De(i.TEXTURE_2D,ie,Ce),ke(X.__webglFramebuffer,P,ie,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),U(ie,Ce)&&L(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?de=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ue.__webglTexture),De(de,T,Ce),o&&T.mipmaps&&T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)ke(X.__webglFramebuffer[K],P,T,i.COLOR_ATTACHMENT0,de,K);else ke(X.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,de,0);U(T,Ce)&&L(de),t.unbindTexture()}P.depthBuffer&&Le(P)}function mt(P){const T=w(P)||o,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ue=0,ce=X.length;ue<ce;ue++){const fe=X[ue];if(U(fe,T)){const Ce=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(fe).__webglTexture;t.bindTexture(Ce,de),L(Ce),t.unbindTexture()}}}function $e(P){if(o&&P.samples>0&&st(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,ue=P.height;let ce=i.COLOR_BUFFER_BIT;const fe=[],Ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(P),K=P.isWebGLMultipleRenderTargets===!0;if(K)for(let D=0;D<T.length;D++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let D=0;D<T.length;D++){fe.push(i.COLOR_ATTACHMENT0+D),P.depthBuffer&&fe.push(Ce);const ie=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ie===!1&&(P.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),K&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[D]),ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ce]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ce])),K){const Se=n.get(T[D]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,X,ue,0,0,X,ue,ce,i.NEAREST),_&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let D=0;D<T.length;D++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,de.__webglColorRenderbuffer[D]);const ie=n.get(T[D]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ve(P){return Math.min(f,P.samples)}function st(P){const T=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(P){const T=a.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function bt(P,T){const X=P.colorSpace,ue=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===qa||X!==Xn&&X!==Xi&&(X===Et||X===So?o===!1?e.has("EXT_sRGB")===!0&&ue===Fn?(P.format=qa,P.minFilter=Tn,P.generateMipmaps=!1):T=Dh.sRGBToLinear(T):(ue!==Fn||ce!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=I,this.resetTextureUnits=ne,this.setTexture2D=oe,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=ve,this.rebindTextures=Ge,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=st}const Xx=0,Dt=1;function qx(i,e,t){const n=t.isWebGL2;function r(s,a=Xi){let o;const l=a===Et||a===So?Dt:Xx;if(s===Ei)return i.UNSIGNED_BYTE;if(s===Ah)return i.UNSIGNED_SHORT_4_4_4_4;if(s===wh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===cm)return i.BYTE;if(s===lm)return i.SHORT;if(s===tc)return i.UNSIGNED_SHORT;if(s===Th)return i.INT;if(s===xi)return i.UNSIGNED_INT;if(s===yi)return i.FLOAT;if(s===ps)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===um)return i.ALPHA;if(s===Fn)return i.RGBA;if(s===hm)return i.LUMINANCE;if(s===fm)return i.LUMINANCE_ALPHA;if(s===Vi)return i.DEPTH_COMPONENT;if(s===Br)return i.DEPTH_STENCIL;if(s===qa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===dm)return i.RED;if(s===Rh)return i.RED_INTEGER;if(s===pm)return i.RG;if(s===Ch)return i.RG_INTEGER;if(s===Lh)return i.RGBA_INTEGER;if(s===ta||s===na||s===ia||s===ra)if(l===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hl||s===Gl||s===Vl||s===Wl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xl||s===ql)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xl)return l===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ql)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yl||s===jl||s===$l||s===Kl||s===Zl||s===Jl||s===Ql||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Yl)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jl)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$l)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kl)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zl)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jl)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ql)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eu)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tu)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nu)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===iu)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ru)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===su)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ou)return l===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sa||s===au||s===cu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===sa)return l===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===au)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gm||s===lu||s===uu||s===hu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===sa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Yx extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jx={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(u,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),_=.02,v=.005;u.inputState.pinching&&d>_+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=_-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $x extends hn{constructor(e,t,n,r,s,a,o,l,u,h){if(h=h!==void 0?h:Vi,h!==Vi&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=xi),n===void 0&&h===Br&&(n=Gi),super(null,r,s,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kx extends $i{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,f=null,d=null,_=null,v=null;const x=t.getContextAttributes();let p=null,m=null;const C=[],S=[],w=new An;w.layers.enable(1),w.viewport=new Ht;const A=new An;A.layers.enable(2),A.viewport=new Ht;const U=[w,A],L=new Yx;L.layers.enable(1),L.layers.enable(2);let H=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=C[$];return J===void 0&&(J=new wa,C[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=C[$];return J===void 0&&(J=new wa,C[$]=J),J.getGripSpace()},this.getHand=function($){let J=C[$];return J===void 0&&(J=new wa,C[$]=J),J.getHandSpace()};function b($){const J=S.indexOf($.inputSource);if(J===-1)return;const ve=C[J];ve!==void 0&&(ve.update($.inputSource,$.frame,u||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",te);for(let $=0;$<C.length;$++){const J=S[$];J!==null&&(S[$]=null,C[$].disconnect(J))}H=null,M=null,e.setRenderTarget(p),_=null,d=null,f=null,r=null,m=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",q),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:_}),m=new qi(_.framebufferWidth,_.framebufferHeight,{format:Fn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,ve=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=x.stencil?Br:Vi,ve=x.stencil?Gi:xi);const Te={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),m=new qi(d.textureWidth,d.textureHeight,{format:Fn,type:Ei,depthTexture:new $x(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ae=e.properties.get(m);ae.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te($){for(let J=0;J<$.removed.length;J++){const ve=$.removed[J],_e=S.indexOf(ve);_e>=0&&(S[_e]=null,C[_e].disconnect(ve))}for(let J=0;J<$.added.length;J++){const ve=$.added[J];let _e=S.indexOf(ve);if(_e===-1){for(let ae=0;ae<C.length;ae++)if(ae>=S.length){S.push(ve),_e=ae;break}else if(S[ae]===null){S[ae]=ve,_e=ae;break}if(_e===-1)break}const Te=C[_e];Te&&Te.connect(ve)}}const z=new N,G=new N;function Y($,J,ve){z.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ve.matrixWorld);const _e=z.distanceTo(G),Te=J.projectionMatrix.elements,ae=ve.projectionMatrix.elements,De=Te[14]/(Te[10]-1),Ue=Te[14]/(Te[10]+1),rt=(Te[9]+1)/Te[5],Ut=(Te[9]-1)/Te[5],ke=(Te[8]-1)/Te[0],V=(ae[8]+1)/ae[0],Mt=De*ke,Le=De*V,Ge=_e/(-ke+V),Be=Ge*-ke;J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(Ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const mt=De+Ge,$e=Ue+Ge,Ve=Mt-Be,st=Le+(_e-Be),Rt=rt*Ue/$e*mt,bt=Ut*Ue/$e*mt;$.projectionMatrix.makePerspective(Ve,st,Rt,bt,mt,$e),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function se($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;L.near=A.near=w.near=$.near,L.far=A.far=w.far=$.far,(H!==L.near||M!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,M=L.far);const J=$.parent,ve=L.cameras;se(L,J);for(let _e=0;_e<ve.length;_e++)se(ve[_e],J);ve.length===2?Y(L,w,A):L.projectionMatrix.copy(w.projectionMatrix),ne($,L,J)};function ne($,J,ve){ve===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ms*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)};let I=null;function le($,J){if(h=J.getViewerPose(u||a),v=J,h!==null){const ve=h.views;_!==null&&(e.setRenderTargetFramebuffer(m,_.framebuffer),e.setRenderTarget(m));let _e=!1;ve.length!==L.cameras.length&&(L.cameras.length=0,_e=!0);for(let Te=0;Te<ve.length;Te++){const ae=ve[Te];let De=null;if(_!==null)De=_.getViewport(ae);else{const rt=f.getViewSubImage(d,ae);De=rt.viewport,Te===0&&(e.setRenderTargetTextures(m,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(m))}let Ue=U[Te];Ue===void 0&&(Ue=new An,Ue.layers.enable(Te),Ue.viewport=new Ht,U[Te]=Ue),Ue.matrix.fromArray(ae.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(ae.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(De.x,De.y,De.width,De.height),Te===0&&(L.matrix.copy(Ue.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),_e===!0&&L.cameras.push(Ue)}}for(let ve=0;ve<C.length;ve++){const _e=S[ve],Te=C[ve];_e!==null&&Te!==void 0&&Te.update(_e,J,u||a)}I&&I($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const oe=new Wh;oe.setAnimationLoop(le),this.setAnimationLoop=function($){I=$},this.dispose=function(){}}}function Zx(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,C,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&_(p,m,w)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,C,S):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const C=e.get(m).envMap;if(C&&(p.envMap.value=C,p.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*S,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,C,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*C,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function _(p,m,C){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const C=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,S){const w=S.program;n.uniformBlockBinding(C,w)}function u(C,S){let w=r[C.id];w===void 0&&(v(C),w=h(C),r[C.id]=w,C.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(C,A);const U=e.render.frame;s[C.id]!==U&&(d(C),s[C.id]=U)}function h(C){const S=f();C.__bindingPointIndex=S;const w=i.createBuffer(),A=C.__size,U=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const S=r[C.id],w=C.uniforms,A=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let U=0,L=w.length;U<L;U++){const H=w[U];if(_(H,U,A)===!0){const M=H.__offset,b=Array.isArray(H.value)?H.value:[H.value];let q=0;for(let te=0;te<b.length;te++){const z=b[te],G=x(z);typeof z=="number"?(H.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,M+q,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=z.elements[0],H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=z.elements[0],H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=z.elements[0]):(z.toArray(H.__data,q),q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,H.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(C,S,w){const A=C.value;if(w[S]===void 0){if(typeof A=="number")w[S]=A;else{const U=Array.isArray(A)?A:[A],L=[];for(let H=0;H<U.length;H++)L.push(U[H].clone());w[S]=L}return!0}else if(typeof A=="number"){if(w[S]!==A)return w[S]=A,!0}else{const U=Array.isArray(w[S])?w[S]:[w[S]],L=Array.isArray(A)?A:[A];for(let H=0;H<U.length;H++){const M=U[H];if(M.equals(L[H])===!1)return M.copy(L[H]),!0}}return!1}function v(C){const S=C.uniforms;let w=0;const A=16;let U=0;for(let L=0,H=S.length;L<H;L++){const M=S[L],b={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let te=0,z=q.length;te<z;te++){const G=q[te],Y=x(G);b.boundary+=Y.boundary,b.storage+=Y.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=w,L>0){U=w%A;const te=A-U;U!==0&&te-b.boundary<0&&(w+=A-U,M.__offset=w)}w+=b.storage}return U=w%A,U>0&&(w+=A-U),C.__size=w,C.__cache={},this}function x(C){const S={boundary:0,storage:0};return typeof C=="number"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function p(C){const S=C.target;S.removeEventListener("dispose",p);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:l,update:u,dispose:m}}class Kh{constructor(e={}){const{canvas:t=Xm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const _=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const m=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;const S=this;let w=!1,A=0,U=0,L=null,H=-1,M=null;const b=new Ht,q=new Ht;let te=null;const z=new vt(0);let G=0,Y=t.width,se=t.height,ne=1,I=null,le=null;const oe=new Ht(0,0,Y,se),$=new Ht(0,0,Y,se);let J=!1;const ve=new rc;let _e=!1,Te=!1,ae=null;const De=new Pt,Ue=new Re,rt=new N,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return L===null?ne:1}let V=n;function Mt(R,k){for(let j=0;j<R.length;j++){const W=R[j],ee=t.getContext(W,k);if(ee!==null)return ee}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",he,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&k.shift(),V=Mt(k,R),V===null)throw Mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Le,Ge,Be,mt,$e,Ve,st,Rt,bt,P,T,X,ue,ce,fe,Ce,de,K,D,ie,Se,me,Me,ze;function Ke(){Le=new cv(V),Ge=new nv(V,Le,e),Le.init(Ge),me=new qx(V,Le,Ge),Be=new Vx(V,Le,Ge),mt=new hv(V),$e=new Cx,Ve=new Wx(V,Le,Be,$e,Ge,me,mt),st=new rv(S),Rt=new av(S),bt=new Mg(V,Ge),Me=new ev(V,Le,bt,Ge),P=new lv(V,bt,mt,Me),T=new mv(V,P,bt,mt),D=new pv(V,Ge,Ve),Ce=new iv($e),X=new Rx(S,st,Rt,Le,Ge,Me,Ce),ue=new Zx(S,$e),ce=new Px,fe=new Fx(Le,Ge),K=new Q0(S,st,Rt,Be,T,d,l),de=new Gx(S,T,Ge),ze=new Jx(V,mt,Ge,Be),ie=new tv(V,Le,mt,Ge),Se=new uv(V,Le,mt,Ge),mt.programs=X.programs,S.capabilities=Ge,S.extensions=Le,S.properties=$e,S.renderLists=ce,S.shadowMap=de,S.state=Be,S.info=mt}Ke();const O=new Kx(S,V);this.xr=O,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(Y,se,!1))},this.getSize=function(R){return R.set(Y,se)},this.setSize=function(R,k,j=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,se=k,t.width=Math.floor(R*ne),t.height=Math.floor(k*ne),j===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(Y*ne,se*ne).floor()},this.setDrawingBufferSize=function(R,k,j){Y=R,se=k,ne=j,t.width=Math.floor(R*j),t.height=Math.floor(k*j),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,k,j,W){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,k,j,W),Be.viewport(b.copy(oe).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,k,j,W){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,k,j,W),Be.scissor(q.copy($).multiplyScalar(ne).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){Be.setScissorTest(J=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(R=!0,k=!0,j=!0){let W=0;if(R){let ee=!1;if(L!==null){const be=L.texture.format;ee=be===Lh||be===Ch||be===Rh}if(ee){const be=L.texture.type,Pe=be===Ei||be===xi||be===tc||be===Gi||be===Ah||be===wh,Fe=K.getClearColor(),Ie=K.getClearAlpha(),We=Fe.r,Oe=Fe.g,Xe=Fe.b;Pe?(_[0]=We,_[1]=Oe,_[2]=Xe,_[3]=Ie,V.clearBufferuiv(V.COLOR,0,_)):(v[0]=We,v[1]=Oe,v[2]=Xe,v[3]=Ie,V.clearBufferiv(V.COLOR,0,v))}else W|=V.COLOR_BUFFER_BIT}k&&(W|=V.DEPTH_BUFFER_BIT),j&&(W|=V.STENCIL_BUFFER_BIT),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),fe.dispose(),$e.dispose(),st.dispose(),Rt.dispose(),T.dispose(),Me.dispose(),ze.dispose(),X.dispose(),O.dispose(),O.removeEventListener("sessionstart",gt),O.removeEventListener("sessionend",gn),ae&&(ae.dispose(),ae=null),Gt.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=mt.autoReset,k=de.enabled,j=de.autoUpdate,W=de.needsUpdate,ee=de.type;Ke(),mt.autoReset=R,de.enabled=k,de.autoUpdate=j,de.needsUpdate=W,de.type=ee}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const k=R.target;k.removeEventListener("dispose",pe),Qe(k)}function Qe(R){it(R),$e.remove(R)}function it(R){const k=$e.get(R).programs;k!==void 0&&(k.forEach(function(j){X.releaseProgram(j)}),R.isShaderMaterial&&X.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,j,W,ee,be){k===null&&(k=Ut);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=wo(R,k,j,W,ee);Be.setMaterial(W,Pe);let Ie=j.index,We=1;if(W.wireframe===!0){if(Ie=P.getWireframeAttribute(j),Ie===void 0)return;We=2}const Oe=j.drawRange,Xe=j.attributes.position;let xt=Oe.start*We,St=(Oe.start+Oe.count)*We;be!==null&&(xt=Math.max(xt,be.start*We),St=Math.min(St,(be.start+be.count)*We)),Ie!==null?(xt=Math.max(xt,0),St=Math.min(St,Ie.count)):Xe!=null&&(xt=Math.max(xt,0),St=Math.min(St,Xe.count));const Jt=St-xt;if(Jt<0||Jt===1/0)return;Me.setup(ee,W,Fe,j,Ie);let _n,Tt=ie;if(Ie!==null&&(_n=bt.get(Ie),Tt=Se,Tt.setIndex(_n)),ee.isMesh)W.wireframe===!0?(Be.setLineWidth(W.wireframeLinewidth*ke()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(ee.isLine){let et=W.linewidth;et===void 0&&(et=1),Be.setLineWidth(et*ke()),ee.isLineSegments?Tt.setMode(V.LINES):ee.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else ee.isPoints?Tt.setMode(V.POINTS):ee.isSprite&&Tt.setMode(V.TRIANGLES);if(ee.isInstancedMesh)Tt.renderInstances(xt,Jt,ee.count);else if(j.isInstancedBufferGeometry){const et=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zi=Math.min(j.instanceCount,et);Tt.renderInstances(xt,Jt,Zi)}else Tt.render(xt,Jt)},this.compile=function(R,k){function j(W,ee,be){W.transparent===!0&&W.side===si&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,ci(W,ee,be),W.side=Ti,W.needsUpdate=!0,ci(W,ee,be),W.side=si):ci(W,ee,be)}p=fe.get(R),p.init(),C.push(p),R.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(S._useLegacyLights),R.traverse(function(W){const ee=W.material;if(ee)if(Array.isArray(ee))for(let be=0;be<ee.length;be++){const Pe=ee[be];j(Pe,R,W)}else j(ee,R,W)}),C.pop(),p=null};let at=null;function Zt(R){at&&at(R)}function gt(){Gt.stop()}function gn(){Gt.start()}const Gt=new Wh;Gt.setAnimationLoop(Zt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(R){at=R,O.setAnimationLoop(R),R===null?Gt.stop():Gt.start()},O.addEventListener("sessionstart",gt),O.addEventListener("sessionend",gn),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(k),k=O.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,k,L),p=fe.get(R,C.length),p.init(),C.push(p),De.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ve.setFromProjectionMatrix(De),Te=this.localClippingEnabled,_e=Ce.init(this.clippingPlanes,Te),x=ce.get(R,m.length),x.init(),m.push(x),xs(R,k,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(I,le),this.info.render.frame++,_e===!0&&Ce.beginShadows();const j=p.state.shadowsArray;if(de.render(j,R,k),_e===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(x,R),p.setupLights(S._useLegacyLights),k.isArrayCamera){const W=k.cameras;for(let ee=0,be=W.length;ee<be;ee++){const Pe=W[ee];Ki(x,R,Pe,Pe.viewport)}}else Ki(x,R,k);L!==null&&(Ve.updateMultisampleRenderTarget(L),Ve.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(S,R,k),Me.resetDefaultState(),H=-1,M=null,C.pop(),C.length>0?p=C[C.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function xs(R,k,j,W){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ve.intersectsSprite(R)){W&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);const Pe=T.update(R),Fe=R.material;Fe.visible&&x.push(R,Pe,Fe,j,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ve.intersectsObject(R))){const Pe=T.update(R),Fe=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),rt.copy(Pe.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(Fe)){const Ie=Pe.groups;for(let We=0,Oe=Ie.length;We<Oe;We++){const Xe=Ie[We],xt=Fe[Xe.materialIndex];xt&&xt.visible&&x.push(R,Pe,xt,j,rt.z,Xe)}}else Fe.visible&&x.push(R,Pe,Fe,j,rt.z,null)}}const be=R.children;for(let Pe=0,Fe=be.length;Pe<Fe;Pe++)xs(be[Pe],k,j,W)}function Ki(R,k,j,W){const ee=R.opaque,be=R.transmissive,Pe=R.transparent;p.setupLightsView(j),_e===!0&&Ce.setGlobalState(S.clippingPlanes,j),be.length>0&&ai(ee,be,k,j),W&&Be.viewport(b.copy(W)),ee.length>0&&Yn(ee,k,j),be.length>0&&Yn(be,k,j),Pe.length>0&&Yn(Pe,k,j),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ai(R,k,j,W){const ee=Ge.isWebGL2;ae===null&&(ae=new qi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?ps:Ei,minFilter:ds,samples:ee?4:0})),S.getDrawingBufferSize(Ue),ee?ae.setSize(Ue.x,Ue.y):ae.setSize(_o(Ue.x),_o(Ue.y));const be=S.getRenderTarget();S.setRenderTarget(ae),S.getClearColor(z),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear();const Pe=S.toneMapping;S.toneMapping=Si,Yn(R,j,W),Ve.updateMultisampleRenderTarget(ae),Ve.updateRenderTargetMipmap(ae);let Fe=!1;for(let Ie=0,We=k.length;Ie<We;Ie++){const Oe=k[Ie],Xe=Oe.object,xt=Oe.geometry,St=Oe.material,Jt=Oe.group;if(St.side===si&&Xe.layers.test(W.layers)){const _n=St.side;St.side=un,St.needsUpdate=!0,ys(Xe,j,W,xt,St,Jt),St.side=_n,St.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ve.updateMultisampleRenderTarget(ae),Ve.updateRenderTargetMipmap(ae)),S.setRenderTarget(be),S.setClearColor(z,G),S.toneMapping=Pe}function Yn(R,k,j){const W=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,be=R.length;ee<be;ee++){const Pe=R[ee],Fe=Pe.object,Ie=Pe.geometry,We=W===null?Pe.material:W,Oe=Pe.group;Fe.layers.test(j.layers)&&ys(Fe,k,j,Ie,We,Oe)}}function ys(R,k,j,W,ee,be){R.onBeforeRender(S,k,j,W,ee,be),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(S,k,j,W,R,be),ee.transparent===!0&&ee.side===si&&ee.forceSinglePass===!1?(ee.side=un,ee.needsUpdate=!0,S.renderBufferDirect(j,k,W,ee,R,be),ee.side=Ti,ee.needsUpdate=!0,S.renderBufferDirect(j,k,W,ee,R,be),ee.side=si):S.renderBufferDirect(j,k,W,ee,R,be),R.onAfterRender(S,k,j,W,ee,be)}function ci(R,k,j){k.isScene!==!0&&(k=Ut);const W=$e.get(R),ee=p.state.lights,be=p.state.shadowsArray,Pe=ee.state.version,Fe=X.getParameters(R,ee.state,be,k,j),Ie=X.getProgramCacheKey(Fe);let We=W.programs;W.environment=R.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(R.isMeshStandardMaterial?Rt:st).get(R.envMap||W.environment),We===void 0&&(R.addEventListener("dispose",pe),We=new Map,W.programs=We);let Oe=We.get(Ie);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===Pe)return Ms(R,Fe),Oe}else Fe.uniforms=X.getUniforms(R),R.onBuild(j,Fe,S),R.onBeforeCompile(Fe,S),Oe=X.acquireProgram(Fe,Ie),We.set(Ie,Oe),W.uniforms=Fe.uniforms;const Xe=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ce.uniform),Ms(R,Fe),W.needsLights=Vt(R),W.lightsStateVersion=Pe,W.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMap.value=ee.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotShadowMap.value=ee.state.spotShadowMap,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMap.value=ee.state.pointShadowMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const xt=Oe.getUniforms(),St=ho.seqWithValue(xt.seq,Xe);return W.currentProgram=Oe,W.uniformsList=St,Oe}function Ms(R,k){const j=$e.get(R);j.outputColorSpace=k.outputColorSpace,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function wo(R,k,j,W,ee){k.isScene!==!0&&(k=Ut),Ve.resetTextureUnits();const be=k.fog,Pe=W.isMeshStandardMaterial?k.environment:null,Fe=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xn,Ie=(W.isMeshStandardMaterial?Rt:st).get(W.envMap||Pe),We=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!j.morphAttributes.position,xt=!!j.morphAttributes.normal,St=!!j.morphAttributes.color;let Jt=Si;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Jt=S.toneMapping);const _n=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=_n!==void 0?_n.length:0,et=$e.get(W),Zi=p.state.lights;if(_e===!0&&(Te===!0||R!==M)){const Wt=R===M&&W.id===H;Ce.setState(W,R,Wt)}let At=!1;W.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Zi.state.version||et.outputColorSpace!==Fe||ee.isInstancedMesh&&et.instancing===!1||!ee.isInstancedMesh&&et.instancing===!0||ee.isSkinnedMesh&&et.skinning===!1||!ee.isSkinnedMesh&&et.skinning===!0||ee.isInstancedMesh&&et.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&et.instancingColor===!1&&ee.instanceColor!==null||et.envMap!==Ie||W.fog===!0&&et.fog!==be||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ce.numPlanes||et.numIntersection!==Ce.numIntersection)||et.vertexAlphas!==We||et.vertexTangents!==Oe||et.morphTargets!==Xe||et.morphNormals!==xt||et.morphColors!==St||et.toneMapping!==Jt||Ge.isWebGL2===!0&&et.morphTargetsCount!==Tt)&&(At=!0):(At=!0,et.__version=W.version);let zn=et.currentProgram;At===!0&&(zn=ci(W,k,ee));let Gr=!1,ui=!1,on=!1;const lt=zn.getUniforms(),Qt=et.uniforms;if(Be.useProgram(zn.program)&&(Gr=!0,ui=!0,on=!0),W.id!==H&&(H=W.id,ui=!0),Gr||M!==R){lt.setValue(V,"projectionMatrix",R.projectionMatrix),lt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Wt=lt.map.cameraPosition;Wt!==void 0&&Wt.setValue(V,rt.setFromMatrixPosition(R.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,ui=!0,on=!0)}if(ee.isSkinnedMesh){lt.setOptional(V,ee,"bindMatrix"),lt.setOptional(V,ee,"bindMatrixInverse");const Wt=ee.skeleton;Wt&&(Ge.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),lt.setValue(V,"boneTexture",Wt.boneTexture,Ve),lt.setValue(V,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xt=j.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0&&Ge.isWebGL2===!0)&&D.update(ee,j,zn),(ui||et.receiveShadow!==ee.receiveShadow)&&(et.receiveShadow=ee.receiveShadow,lt.setValue(V,"receiveShadow",ee.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=Ie,Qt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ui&&(lt.setValue(V,"toneMappingExposure",S.toneMappingExposure),et.needsLights&&li(Qt,on),be&&W.fog===!0&&ue.refreshFogUniforms(Qt,be),ue.refreshMaterialUniforms(Qt,W,ne,se,ae),ho.upload(V,et.uniformsList,Qt,Ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ho.upload(V,et.uniformsList,Qt,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(V,"center",ee.center),lt.setValue(V,"modelViewMatrix",ee.modelViewMatrix),lt.setValue(V,"normalMatrix",ee.normalMatrix),lt.setValue(V,"modelMatrix",ee.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Wt=W.uniformsGroups;for(let Ai=0,vn=Wt.length;Ai<vn;Ai++)if(Ge.isWebGL2){const kn=Wt[Ai];ze.update(kn,zn),ze.bind(kn,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function li(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Vt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,k,j){$e.get(R.texture).__webglTexture=k,$e.get(R.depthTexture).__webglTexture=j;const W=$e.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const j=$e.get(R);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,j=0){L=R,A=k,U=j;let W=!0,ee=null,be=!1,Pe=!1;if(R){const Ie=$e.get(R);Ie.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(V.FRAMEBUFFER,null),W=!1):Ie.__webglFramebuffer===void 0?Ve.setupRenderTarget(R):Ie.__hasExternalTextures&&Ve.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Oe=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?ee=Oe[k][j]:ee=Oe[k],be=!0):Ge.isWebGL2&&R.samples>0&&Ve.useMultisampledRTT(R)===!1?ee=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Oe)?ee=Oe[j]:ee=Oe,b.copy(R.viewport),q.copy(R.scissor),te=R.scissorTest}else b.copy(oe).multiplyScalar(ne).floor(),q.copy($).multiplyScalar(ne).floor(),te=J;if(Be.bindFramebuffer(V.FRAMEBUFFER,ee)&&Ge.drawBuffers&&W&&Be.drawBuffers(R,ee),Be.viewport(b),Be.scissor(q),Be.setScissorTest(te),be){const Ie=$e.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,j)}else if(Pe){const Ie=$e.get(R.texture),We=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ie.__webglTexture,j||0,We)}H=-1},this.readRenderTargetPixels=function(R,k,j,W,ee,be,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Be.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const Ie=R.texture,We=Ie.format,Oe=Ie.type;if(We!==Fn&&me.convert(We)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Oe===ps&&(Le.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Oe!==Ei&&me.convert(Oe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===yi&&(Ge.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-W&&j>=0&&j<=R.height-ee&&V.readPixels(k,j,W,ee,me.convert(We),me.convert(Oe),be)}finally{const Ie=L!==null?$e.get(L).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(R,k,j=0){const W=Math.pow(2,-j),ee=Math.floor(k.image.width*W),be=Math.floor(k.image.height*W);Ve.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,R.x,R.y,ee,be),Be.unbindTexture()},this.copyTextureToTexture=function(R,k,j,W=0){const ee=k.image.width,be=k.image.height,Pe=me.convert(j.format),Fe=me.convert(j.type);Ve.setTexture2D(j,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,W,R.x,R.y,ee,be,Pe,Fe,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,W,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,W,R.x,R.y,Pe,Fe,k.image),W===0&&j.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(R,k,j,W,ee=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=R.max.x-R.min.x+1,Pe=R.max.y-R.min.y+1,Fe=R.max.z-R.min.z+1,Ie=me.convert(W.format),We=me.convert(W.type);let Oe;if(W.isData3DTexture)Ve.setTexture3D(W,0),Oe=V.TEXTURE_3D;else if(W.isDataArrayTexture)Ve.setTexture2DArray(W,0),Oe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Xe=V.getParameter(V.UNPACK_ROW_LENGTH),xt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),St=V.getParameter(V.UNPACK_SKIP_PIXELS),Jt=V.getParameter(V.UNPACK_SKIP_ROWS),_n=V.getParameter(V.UNPACK_SKIP_IMAGES),Tt=j.isCompressedTexture?j.mipmaps[0]:j.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?V.texSubImage3D(Oe,ee,k.x,k.y,k.z,be,Pe,Fe,Ie,We,Tt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Oe,ee,k.x,k.y,k.z,be,Pe,Fe,Ie,Tt.data)):V.texSubImage3D(Oe,ee,k.x,k.y,k.z,be,Pe,Fe,Ie,We,Tt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Xe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,St),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_n),ee===0&&W.generateMipmaps&&V.generateMipmap(Oe),Be.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ve.setTextureCube(R,0):R.isData3DTexture?Ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ve.setTexture2DArray(R,0):Ve.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){A=0,U=0,L=null,Be.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Wi:Ph}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?Et:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Qx extends Kh{}Qx.prototype.isWebGL1Renderer=!0;class ey extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ty extends hn{constructor(e,t,n,r,s,a,o,l,u){super(e,t,n,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,_=(a-h)/d;return(r+_)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Re:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,r=[],s=[],a=[],o=new N,l=new Pt;for(let _=0;_<=e;_++){const v=_/e;r[_]=this.getTangentAt(v,new N)}s[0]=new N,a[0]=new N;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(r[_-1],r[_]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(kt(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(l.makeRotationAxis(o,v))}a[_].crossVectors(r[_],s[_])}if(t===!0){let _=Math.acos(kt(s[0].dot(s[e]),-1,1));_/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(_=-_);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],_*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zh extends qn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Re,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,_=u-this.aY;l=d*h-_*f+this.aX,u=d*f+_*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ny extends Zh{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,u){r(a,o,u*(o-s),u*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,u,h,f){let d=(a-s)/u-(o-s)/(u+h)+(o-a)/h,_=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,_*=h,r(a,o,d,_)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const co=new N,Ra=new oc,Ca=new oc,La=new oc;class iy extends qn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,h;this.closed||o>0?u=r[(o-1)%s]:(co.subVectors(r[0],r[1]).add(r[0]),u=co);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(co.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=co),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(f),_),x=Math.pow(f.distanceToSquared(d),_),p=Math.pow(d.distanceToSquared(h),_);x<1e-4&&(x=1),v<1e-4&&(v=x),p<1e-4&&(p=x),Ra.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,v,x,p),Ca.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,v,x,p),La.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,v,x,p)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),Ca.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),La.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return n.set(Ra.calc(l),Ca.calc(l),La.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zu(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function ry(i,e){const t=1-i;return t*t*e}function sy(i,e){return 2*(1-i)*i*e}function oy(i,e){return i*i*e}function ss(i,e,t,n){return ry(i,e)+sy(i,t)+oy(i,n)}function ay(i,e){const t=1-i;return t*t*t*e}function cy(i,e){const t=1-i;return 3*t*t*i*e}function ly(i,e){return 3*(1-i)*i*i*e}function uy(i,e){return i*i*i*e}function os(i,e,t,n,r){return ay(i,e)+cy(i,t)+ly(i,n)+uy(i,r)}class hy extends qn{constructor(e=new Re,t=new Re,n=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,r.x,s.x,a.x,o.x),os(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fy extends qn{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,r.x,s.x,a.x,o.x),os(e,r.y,s.y,a.y,o.y),os(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dy extends qn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class py extends qn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class my extends qn{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends qn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y),ss(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gy extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],u=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Zu(o,l.x,u.x,h.x,f.x),Zu(o,l.y,u.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var _y=Object.freeze({__proto__:null,ArcCurve:ny,CatmullRomCurve3:iy,CubicBezierCurve:hy,CubicBezierCurve3:fy,EllipseCurve:Zh,LineCurve:dy,LineCurve3:py,QuadraticBezierCurve:my,QuadraticBezierCurve3:Jh,SplineCurve:gy});class ac extends Bn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],_=[];let v=0;const x=[],p=n/2;let m=0;C(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(_,2));function C(){const w=new N,A=new N;let U=0;const L=(t-e)/n;for(let H=0;H<=s;H++){const M=[],b=H/s,q=b*(t-e)+e;for(let te=0;te<=r;te++){const z=te/r,G=z*l+o,Y=Math.sin(G),se=Math.cos(G);A.x=q*Y,A.y=-b*n+p,A.z=q*se,f.push(A.x,A.y,A.z),w.set(Y,L,se).normalize(),d.push(w.x,w.y,w.z),_.push(z,1-b),M.push(v++)}x.push(M)}for(let H=0;H<r;H++)for(let M=0;M<s;M++){const b=x[M][H],q=x[M+1][H],te=x[M+1][H+1],z=x[M][H+1];h.push(b,q,z),h.push(q,te,z),U+=6}u.addGroup(m,U,0),m+=U}function S(w){const A=v,U=new Re,L=new N;let H=0;const M=w===!0?e:t,b=w===!0?1:-1;for(let te=1;te<=r;te++)f.push(0,p*b,0),d.push(0,b,0),_.push(.5,.5),v++;const q=v;for(let te=0;te<=r;te++){const G=te/r*l+o,Y=Math.cos(G),se=Math.sin(G);L.x=M*se,L.y=p*b,L.z=M*Y,f.push(L.x,L.y,L.z),d.push(0,b,0),U.x=Y*.5+.5,U.y=se*.5*b+.5,_.push(U.x,U.y),v++}for(let te=0;te<r;te++){const z=A+te,G=q+te;w===!0?h.push(G,G+1,z):h.push(G+1,G,z),H+=3}u.addGroup(m,H,w===!0?1:2),m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends ac{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Cr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cc extends Bn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let u=0;const h=[],f=new N,d=new N,_=[],v=[],x=[],p=[];for(let m=0;m<=n;m++){const C=[],S=m/n;let w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let A=0;A<=t;A++){const U=A/t;f.x=-e*Math.cos(r+U*s)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(r+U*s)*Math.sin(a+S*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(U+w,1-S),C.push(u++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<t;C++){const S=h[m][C+1],w=h[m][C],A=h[m+1][C],U=h[m+1][C+1];(m!==0||a>0)&&_.push(S,w,U),(m!==n-1||l<Math.PI)&&_.push(w,A,U)}this.setIndex(_),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class as extends Bn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],u=[],h=new N,f=new N,d=new N;for(let _=0;_<=n;_++)for(let v=0;v<=r;v++){const x=v/r*s,p=_/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),u.push(v/r),u.push(_/n)}for(let _=1;_<=n;_++)for(let v=1;v<=r;v++){const x=(r+1)*_+v-1,p=(r+1)*(_-1)+v-1,m=(r+1)*(_-1)+v,C=(r+1)*_+v;a.push(x,p,C),a.push(p,m,C)}this.setIndex(a),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lc extends Bn{constructor(e=new Jh(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new N,l=new N,u=new Re;let h=new N;const f=[],d=[],_=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(_,2));function x(){for(let S=0;S<t;S++)p(S);p(s===!1?t:0),C(),m()}function p(S){h=e.getPointAt(S/t,h);const w=a.normals[S],A=a.binormals[S];for(let U=0;U<=r;U++){const L=U/r*Math.PI*2,H=Math.sin(L),M=-Math.cos(L);l.x=M*w.x+H*A.x,l.y=M*w.y+H*A.y,l.z=M*w.z+H*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let w=1;w<=r;w++){const A=(r+1)*(S-1)+(w-1),U=(r+1)*S+(w-1),L=(r+1)*S+w,H=(r+1)*(S-1)+w;v.push(A,U,H),v.push(U,L,H)}}function C(){for(let S=0;S<=t;S++)for(let w=0;w<=r;w++)u.x=S/t,u.y=w/r,_.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new lc(new _y[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vy extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pa=new Pt,Ju=new N,Qu=new N;class xy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yy extends xy{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eh extends vy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new yy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class th{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);const nh={type:"change"},Ua={type:"start"},ih={type:"end"},lo=new Nh,rh=new vi,My=Math.cos(70*Wm.DEG2RAD);class Sy extends $i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",T),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nh),n.update(),s=r.NONE},this.update=function(){const D=new N,ie=new Yi().setFromUnitVectors(e.up,new N(0,1,0)),Se=ie.clone().invert(),me=new N,Me=new Yi,ze=new N,Ke=2*Math.PI;return function(xe=null){const Z=n.object.position;D.copy(Z).sub(n.target),D.applyQuaternion(ie),o.setFromVector3(D),n.autoRotate&&s===r.NONE&&q(M(xe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let he=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(he)&&isFinite(pe)&&(he<-Math.PI?he+=Ke:he>Math.PI&&(he-=Ke),pe<-Math.PI?pe+=Ke:pe>Math.PI&&(pe-=Ke),he<=pe?o.theta=Math.max(he,Math.min(pe,o.theta)):o.theta=o.theta>(he+pe)/2?Math.max(he,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&U||n.object.isOrthographicCamera?o.radius=le(o.radius):o.radius=le(o.radius*u),D.setFromSpherical(o),D.applyQuaternion(Se),Z.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Qe=!1;if(n.zoomToCursor&&U){let it=null;if(n.object.isPerspectiveCamera){const at=D.length();it=le(at*u);const Zt=at-it;n.object.position.addScaledVector(w,Zt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new N(A.x,A.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0;const Zt=new N(A.x,A.y,0);Zt.unproject(n.object),n.object.position.sub(Zt).add(at),n.object.updateMatrixWorld(),it=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(it).add(n.object.position):(lo.origin.copy(n.object.position),lo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(lo.direction))<My?e.lookAt(n.target):(rh.setFromNormalAndCoplanarPoint(n.object.up,n.target),lo.intersectPlane(rh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0);return u=1,U=!1,Qe||me.distanceToSquared(n.object.position)>a||8*(1-Me.dot(n.object.quaternion))>a||ze.distanceToSquared(n.target)>0?(n.dispatchEvent(nh),me.copy(n.object.position),Me.copy(n.object.quaternion),ze.copy(n.target),Qe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ce),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",st),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new th,l=new th;let u=1;const h=new N,f=new Re,d=new Re,_=new Re,v=new Re,x=new Re,p=new Re,m=new Re,C=new Re,S=new Re,w=new N,A=new Re;let U=!1;const L=[],H={};function M(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function q(D){l.theta-=D}function te(D){l.phi-=D}const z=function(){const D=new N;return function(Se,me){D.setFromMatrixColumn(me,0),D.multiplyScalar(-Se),h.add(D)}}(),G=function(){const D=new N;return function(Se,me){n.screenSpacePanning===!0?D.setFromMatrixColumn(me,1):(D.setFromMatrixColumn(me,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Se),h.add(D)}}(),Y=function(){const D=new N;return function(Se,me){const Me=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;D.copy(ze).sub(n.target);let Ke=D.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),z(2*Se*Ke/Me.clientHeight,n.object.matrix),G(2*me*Ke/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(Se*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),G(me*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function se(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(D){if(!n.zoomToCursor)return;U=!0;const ie=n.domElement.getBoundingClientRect(),Se=D.clientX-ie.left,me=D.clientY-ie.top,Me=ie.width,ze=ie.height;A.x=Se/Me*2-1,A.y=-(me/ze)*2+1,w.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function oe(D){f.set(D.clientX,D.clientY)}function $(D){I(D),m.set(D.clientX,D.clientY)}function J(D){v.set(D.clientX,D.clientY)}function ve(D){d.set(D.clientX,D.clientY),_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;q(2*Math.PI*_.x/ie.clientHeight),te(2*Math.PI*_.y/ie.clientHeight),f.copy(d),n.update()}function _e(D){C.set(D.clientX,D.clientY),S.subVectors(C,m),S.y>0?se(b()):S.y<0&&ne(b()),m.copy(C),n.update()}function Te(D){x.set(D.clientX,D.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),Y(p.x,p.y),v.copy(x),n.update()}function ae(D){I(D),D.deltaY<0?ne(b()):D.deltaY>0&&se(b()),n.update()}function De(D){let ie=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),ie=!0;break}ie&&(D.preventDefault(),n.update())}function Ue(){if(L.length===1)f.set(L[0].pageX,L[0].pageY);else{const D=.5*(L[0].pageX+L[1].pageX),ie=.5*(L[0].pageY+L[1].pageY);f.set(D,ie)}}function rt(){if(L.length===1)v.set(L[0].pageX,L[0].pageY);else{const D=.5*(L[0].pageX+L[1].pageX),ie=.5*(L[0].pageY+L[1].pageY);v.set(D,ie)}}function Ut(){const D=L[0].pageX-L[1].pageX,ie=L[0].pageY-L[1].pageY,Se=Math.sqrt(D*D+ie*ie);m.set(0,Se)}function ke(){n.enableZoom&&Ut(),n.enablePan&&rt()}function V(){n.enableZoom&&Ut(),n.enableRotate&&Ue()}function Mt(D){if(L.length==1)d.set(D.pageX,D.pageY);else{const Se=K(D),me=.5*(D.pageX+Se.x),Me=.5*(D.pageY+Se.y);d.set(me,Me)}_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;q(2*Math.PI*_.x/ie.clientHeight),te(2*Math.PI*_.y/ie.clientHeight),f.copy(d)}function Le(D){if(L.length===1)x.set(D.pageX,D.pageY);else{const ie=K(D),Se=.5*(D.pageX+ie.x),me=.5*(D.pageY+ie.y);x.set(Se,me)}p.subVectors(x,v).multiplyScalar(n.panSpeed),Y(p.x,p.y),v.copy(x)}function Ge(D){const ie=K(D),Se=D.pageX-ie.x,me=D.pageY-ie.y,Me=Math.sqrt(Se*Se+me*me);C.set(0,Me),S.set(0,Math.pow(C.y/m.y,n.zoomSpeed)),se(S.y),m.copy(C)}function Be(D){n.enableZoom&&Ge(D),n.enablePan&&Le(D)}function mt(D){n.enableZoom&&Ge(D),n.enableRotate&&Mt(D)}function $e(D){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",Ve),n.domElement.addEventListener("pointerup",st)),fe(D),D.pointerType==="touch"?X(D):Rt(D))}function Ve(D){n.enabled!==!1&&(D.pointerType==="touch"?ue(D):bt(D))}function st(D){Ce(D),L.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",st)),n.dispatchEvent(ih),s=r.NONE}function Rt(D){let ie;switch(D.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case sr.DOLLY:if(n.enableZoom===!1)return;$(D),s=r.DOLLY;break;case sr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;J(D),s=r.PAN}else{if(n.enableRotate===!1)return;oe(D),s=r.ROTATE}break;case sr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;oe(D),s=r.ROTATE}else{if(n.enablePan===!1)return;J(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ua)}function bt(D){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ve(D);break;case r.DOLLY:if(n.enableZoom===!1)return;_e(D);break;case r.PAN:if(n.enablePan===!1)return;Te(D);break}}function P(D){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(D.preventDefault(),n.dispatchEvent(Ua),ae(D),n.dispatchEvent(ih))}function T(D){n.enabled===!1||n.enablePan===!1||De(D)}function X(D){switch(de(D),L.length){case 1:switch(n.touches.ONE){case or.ROTATE:if(n.enableRotate===!1)return;Ue(),s=r.TOUCH_ROTATE;break;case or.PAN:if(n.enablePan===!1)return;rt(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(),s=r.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ua)}function ue(D){switch(de(D),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(D),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Le(D),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(D),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(D),n.update();break;default:s=r.NONE}}function ce(D){n.enabled!==!1&&D.preventDefault()}function fe(D){L.push(D)}function Ce(D){delete H[D.pointerId];for(let ie=0;ie<L.length;ie++)if(L[ie].pointerId==D.pointerId){L.splice(ie,1);return}}function de(D){let ie=H[D.pointerId];ie===void 0&&(ie=new Re,H[D.pointerId]=ie),ie.set(D.pageX,D.pageY)}function K(D){const ie=D.pointerId===L[0].pointerId?L[1]:L[0];return H[ie.pointerId]}n.domElement.addEventListener("contextmenu",ce),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}class Ey extends qn{constructor(t){super();En(this,"points");En(this,"values");this.points=t,this.values=this.getValues()}getPoint(t,n=new N){let r=0;for(;r<this.values.length-1;r++)if(this.values[r]<=t&&this.values[r+1]>=t){const[s,a,o]=this.points[r],[l,u,h]=this.points[r+1],f=(t-this.values[r])/(this.values[r+1]-this.values[r]),d=s+f*(l-s),_=a+f*(u-a),v=o+f*(h-o);return n.set(d,_,v)}return n.set(0,0,0)}getValues(){let t=[0],n=0;for(let r=1;r<this.points.length;r++){const s=this.points[r-1],a=this.points[r],o=[0,1,2].map(u=>a[u]-s[u]).map(u=>u*u).reduce((u,h)=>u+h),l=Math.sqrt(o);n+=l,t.push(n)}return t=t.map(r=>r/n),t}}const uo={R:"hsl(120, 100%, 60%)",L:"hsl(240, 100%, 60%)",U:"hsl(60, 100%, 60%)",D:"hsl(120, 100%, 100%)",F:"hsl(0, 100%, 60%)",B:"hsl(20, 100%, 60%)"};let uc=0,sh=null,$a=[],Qh=.8,hc=!0,ef=!1,cn=null,gs=null,In=null,es=null;const xo=[];function by(i){const e=i.N,t=[],n=i.getAllFacesColors();for(const r in uo){let s=function(_,v,x,p){l.moveTo(_,v),l.lineTo(x,v),l.lineTo(x,p),l.lineTo(_,p)};const a=n[r],o=document.createElement("canvas"),l=o.getContext("2d");o.width=1e3,o.height=1e3,l.lineWidth=5*3/Math.sqrt(e),l.strokeStyle="black",l.fillStyle=uo[r];const[u,h]=[o.width,o.height],f=u/e,d=h/e;for(let _=0;_<e;_++)for(let v=0;v<e;v++){const x=a.find(w=>w.a===_&&w.b===v);l.fillStyle=x?uo[x.color]:uo[r],l.beginPath();const p=_===0?l.lineWidth/2:_*f,m=v===0?l.lineWidth/2:v*d,C=_===e-1?_*f+f-l.lineWidth/2:_*f+f,S=v===e-1?v*d+d-l.lineWidth/2:v*d+d;s(p,m,C,S),l.closePath(),l.fill(),l.stroke()}t.push(o)}return t}function Da(i,e,t){if(hc){const n=t,r=dh(e.facePoint.face),s=[...e.point];for(let a=0;a<s.length;a++)r[a]===0?s[a]+=.5:s[a]===0?s[a]=-n:s[a]===i-1?s[a]=s[a]+1+n:s[a]+=1;return s.map(a=>a*2/i-1)}else{const n=t*(i-1)/2;let r=e.point.map(s=>s===0?-n:s===i-1?i+n:s+.5);return r=r.map(s=>s*2/i-1),r}}function oh(i,e,t){const n=mh(e,i),r=_p(n);return xp(i,vp(r,t))}function Ty(i,e,t){const n=wp(2,[-1,1,1],i,e);return[i,...n,e]}function Ay(){return $a}function Ka(i){Qh=i;for(const e of Ay())e.opacity=i}function wy(i){ef=i}function Ry(i){hc=i}function ah(){xo.forEach(i=>i.visible=!0)}function ch(){xo.forEach(i=>i.visible=!1)}gs=new An(30,1,.01,100);gs.position.set(4,4,4);function Cy(i,e,t){cn&&cn.domElement.remove();const n=Math.sqrt(3/i);es=t,In=new ey,In.background=new vt("white"),$a=by(e).map(h=>new ty(h)).map(h=>new rs({map:h,opacity:Qh,transparent:!0}));{const h=new Rr,f=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let d=0;d<f.length;d++){const _=new To(2,2),v=new zt(_,$a[d]),[x,p,m]=f[d];v.position.set(x,p,m),v.lookAt(2*x,2*p,2*m),h.add(v)}h.receiveShadow=!0,In.add(h)}{const h=new ph;let f=0,d=.05/e.permutations.filter(x=>x.length>1).length;const _=Qa(e.permutations,e.N),v=(x,p)=>x.every(m=>m.facePoint.face===x[0].facePoint.face&&m.facePoint.a>0&&m.facePoint.a<p-1&&m.facePoint.b>0&&m.facePoint.b<p-1);for(const x of _.filter(p=>p.length>1)){f+=d,f=0;const p=new rs({color:h.nextColor()}),m=v(x.map(C=>C.p1),e.N);for(const C of x){const S=Da(i,C.p1,f),w=Da(i,C.p2,f);let A=ef?Ty(S,w):[S,w];A[0]=oh(A[0],A[1],.02*n),A[A.length-1]=oh(A[A.length-1],A[A.length-2],.03*n);const U=[];for(let G=0;G<A.length;G++){if(G>0){const Y=A[G],se=A[G-1];U.push([(Y[0]+se[0])/2,(Y[1]+se[1])/2,(Y[2]+se[2])/2])}U.push(A[G])}A=U,A.map(G=>new N(...G));const L=new Ey(A),H=new lc(L,100,.007*n,20),M=new zt(H,p);M.castShadow=!0,In.add(M);const b=new Cr(.03*n,.05*n),q=new zt(b,p),te=new cc(.007*n),z=new zt(te,p);q.geometry.rotateX(Math.PI/2),q.lookAt(new N(...mh(A[A.length-1],A[A.length-2]))),q.position.set(...A[A.length-1]),In.add(q),z.position.set(...A[0]),In.add(z),m&&xo.push(M,q,z)}}for(const x of _.filter(p=>p.length===1)){const p=new rs({color:h.nextColor()}),m=v(x.map(L=>L.p1),e.N),C=x[0],S=Da(i,C.p1,.05),w=C.rotation[1],A=new Rr;if(w===180){const L=Math.PI*.7;{const H=new as(.1*n,.01*n,void 0,void 0,L),M=new zt(H,p);M.geometry.rotateZ(Math.PI/2),A.add(M);const b=new Cr(.03*n,.05*n),q=new zt(b,p);q.geometry.rotateZ(-Math.PI/2),q.position.set(.02*n,.1*n,0),A.add(q)}{const H=new as(.1*n,.01*n,void 0,void 0,L),M=new zt(H,p);M.geometry.rotateZ(-Math.PI/2),A.add(M);const b=new Cr(.03*n,.05*n),q=new zt(b,p);q.geometry.rotateZ(Math.PI/2),q.position.set(-.02*n,-.1*n,0),A.add(q)}}else{const L=Math.PI*3/2,H=new as(.1*n,.01*n,void 0,void 0,L),M=new zt(H,p);M.geometry.rotateZ(w<0?Math.PI/2:Math.PI),A.add(M);const b=new Cr(.03*n,.05*n),q=new zt(b,p);q.position.set((w<0?.1:-.1)*n,.02*n,0),A.add(q)}const U=hc?dh(C.p1.facePoint.face):S;A.lookAt(...U),A.position.set(...S),In.add(A),m&&xo.push(A)}}const a=new eh("white",10),o=new eh("white",2);a.position.set(10,10,10),o.position.set(-10,-10,-10),In.add(a),In.add(o),cn=new Kh({antialias:!0}),cn.shadowMap.enabled=!0,cn.shadowMap.type=Dp,new Sy(gs,cn.domElement);const l=getComputedStyle(t),u=Math.min(t.clientWidth-parseFloat(l.paddingLeft)-parseFloat(l.paddingRight),t.clientHeight-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom));return cn.setSize(u,u),cn.setPixelRatio(window.devicePixelRatio),t.append(cn.domElement),sh=cn.domElement,sh}function Ly(){if(cn&&es){const i=getComputedStyle(es),e=Math.min(es.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),es.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom));cn.setSize(e,e)}}function Za(){tf(),uc=requestAnimationFrame(Py)}function Py(){cn&&In&&gs&&(cn.render(In,gs),uc=requestAnimationFrame(Za))}function tf(){cancelAnimationFrame(uc)}function Uy(i,e,t,n=!0){const r=performance.now(),s=t.getContext("2d");s.reset(),s.clearRect(0,0,t.width,t.height);const[a,o]=[10,10];s.translate(a,o),s.lineCap="round",s.lineJoin="round",s.lineWidth=3;const u={"1 face":Dy,"3 faces":Iy,"5 faces":Oy,"6 faces":Ny,"6 faces 2":Fy}[i](t.width-a*2,t.height-o*2,e);By(e,s,u,n),console.log("r2d render time",performance.now()-r)}function nf(i){const e=Qa(i.permutations,i.N),t={U:0,F:0,R:0,L:0,D:0,B:0};for(const n of e)for(const r of n)t[r.p1.facePoint.face]++;return t}function jt(i,e,t,n=t){return[[i,e],[i+t,e],[i+t,e+n],[i,e+n]]}function Dy(i,e,t){const n=Math.floor(Math.min(i/17,e/14)),r=n*14,s=n*2,a=nf(t);return["U","F","R","L","D","B"].sort((l,u)=>a[u]-a[l]).map((l,u)=>({name:l,priority:6-u,shape:u===0?jt(0,0,r):jt(r+n,(u-1)*3*n,s)}))}function Iy(i,e,t){const n=Math.floor(Math.min(i/2.25,e/2)),r=n/4,s=(d,_)=>{if(d===0)return[n,n];const v=d%2===_?n*.9:n,x=Math.PI/6+Math.PI/3*(d-1);return[n+v*Math.cos(x),n-v*Math.sin(x)]},a=nf(t),o=(a.U>=a.D?"U":"D")+(a.F>=a.B?"F":"B")+(a.R>=a.L?"R":"L");function l(d){switch(d){case"UFR":return["U",[2,1,0,3],"R",[0,1,6,5],"F",[3,0,5,4],"L","D","B"];case"UFL":return["U",[3,2,1,0],"F",[0,1,6,5],"L",[3,0,5,4],"B","D","R"];case"UBL":return["U",[0,3,2,1],"L",[0,1,6,5],"B",[3,0,5,4],"R","D","F"];case"UBR":return["U",[1,0,3,2],"B",[0,1,6,5],"R",[3,0,5,4],"F","D","L"];case"DFR":return["D",[4,0,6,5],"R",[2,1,6,0],"F",[3,2,0,4],"U","L","B"];case"DFL":return["D",[5,4,0,6],"F",[2,1,6,0],"L",[3,2,0,4],"U","B","R"];case"DBL":return["D",[6,5,4,0],"L",[2,1,6,0],"B",[3,2,0,4],"U","R","F"];case"DBR":return["D",[0,6,5,4],"B",[2,1,6,0],"R",[3,2,0,4],"U","F","L"]}throw new Error("invalid key")}const u=l(o),h=u[0]==="U"?0:1;return[{name:u[0],priority:6,shape:u[1].map(d=>s(d,h))},{name:u[2],priority:5,shape:u[3].map(d=>s(d,h))},{name:u[4],priority:4,shape:u[5].map(d=>s(d,h))},{name:u[6],priority:-1,shape:jt(0,0,r)},{name:u[7],priority:-2,shape:jt(0,2*n-r,r)},{name:u[8],priority:-3,shape:jt(2*n,n-r/2,r)}]}function Oy(i,e,t){const[n,r,s,a]=[.5,.5,.5,.5],o=100,l=Math.floor(Math.min((i-o-20)/(1+n+r),e/(1+s+a))),u=[0,0],h=[l*(1+n+r),0],f=[l*(1+n+r),l*(1+s+a)],d=[0,l*(1+s+a)],_=[l*n,l*s],v=[l*(1+n),l*s],x=[l*(1+n),l*(1+s)],p=[l*n,l*(1+s)];return[{name:"U",priority:6,shape:[_,v,x,p]},{name:"F",priority:5,shape:[p,x,f,d]},{name:"R",priority:4,shape:[x,v,h,f]},{name:"L",priority:3,shape:[_,p,d,u]},{name:"B",priority:2,shape:[v,_,u,h]},{name:"D",priority:-1,shape:jt(l*(1+n+r)+20,0,o,o)}]}function Ny(i,e,t){const n=Math.floor(Math.min(i/4,e/3));return[{name:"U",priority:6,shape:jt(n,0,n)},{name:"F",priority:5,shape:jt(n,n,n)},{name:"R",priority:4,shape:jt(2*n,n,n)},{name:"L",priority:3,shape:jt(0,n,n)},{name:"D",priority:2,shape:jt(n,2*n,n)},{name:"B",priority:-1,shape:jt(3*n,n,n)}]}function Fy(i,e,t){const s=Math.floor(Math.min(i/3.5,e/2.5))-2;return[{name:"U",priority:4,shape:[[s+.5*s,0],[2*s+.5*s,0],[2*s,s*.5],[s,s*.5]]},{name:"R",priority:5,shape:[[2*s,s*.5],[2*s+.5*s,0],[2*s+.5*s,s],[2*s,s+s*.5]]},{name:"F",priority:6,shape:jt(s,s*.5,s)},{name:"L",priority:3,shape:jt(0,s*.5,s)},{name:"D",priority:2,shape:jt(s,s+s*.5,s)},{name:"B",priority:-1,shape:jt(2*s+.5*s,0,s)}]}function By(i,e,t,n=!0){const r=i.N,s=(v,x,p,m)=>{const C={U:"hsl(60, 100%, 90%)",F:"hsl(0, 100%, 90%)",R:"hsl(120, 100%, 85%)",B:"hsl(23, 100%, 90%)",L:"hsl(240, 100%, 90%)",D:"hsl(120, 100%, 100%)"},S=(b,q,te)=>{const z=[b];for(let G=1;G<te;G++)z.push([b[0]+G*(q[0]-b[0])/te,b[1]+G*(q[1]-b[1])/te]);return z.push(q),z},w=b=>b.reduce((te,z,G,Y)=>[te[0]+z[0],te[1]+z[1]],[0,0]).map(te=>te/b.length);e.fillStyle=C[v],e.beginPath(),x.forEach((b,q)=>{q===0?e.moveTo(...b):e.lineTo(...b)}),e.closePath(),e.fill();const A=S(x[0],x[3],r),U=S(x[0],x[1],r),L=S(x[1],x[2],r),H=S(x[3],x[2],r);for(let b=0;b<=r;b++)e.beginPath(),e.moveTo(A[b][0],A[b][1]),e.lineTo(L[b][0],L[b][1]),e.moveTo(U[b][0],U[b][1]),e.lineTo(H[b][0],H[b][1]),e.stroke();const M=[];for(let b=0;b<U.length;b++)M.push(S(U[b],H[b],r));for(let b=0;b<r;b++)for(let q=0;q<r;q++){const te=`${v}-${b}-${q}`,z=w([M[b][q],M[b][q+1],M[b+1][q+1],M[b+1][q]]);m[te]=z}for(const{a:b,b:q,color:te}of p){e.fillStyle=C[te];const z=[M[b][q],M[b][q+1],M[b+1][q+1],M[b+1][q]];e.beginPath(),e.moveTo(...z[0]),e.lineTo(...z[1]),e.lineTo(...z[2]),e.lineTo(...z[3]),e.closePath(),e.fill(),e.stroke()}};e.lineCap="round",e.lineJoin="round",e.lineWidth=9/r;const a=i.getAllFacesColors(),o={};for(const v of t)s(v.name,v.shape,a[v.name],o);const l=new ph;e.shadowColor="rgba(0, 0, 0, .4)",e.shadowBlur=15,e.lineWidth=5;const u=v=>{const x=l.nextColor();for(let p=0;p<v.length;p++){const m=p===v.length-1?0:p+1,[C,S]=v[p],[w,A]=v[m];e.beginPath(),pp(e,C,S,w,A,x,20),e.stroke()}},h=(v,x)=>{const p=l.nextColor(),[m,C]=v;e.beginPath(),mp(e,m,C,x,p,20),e.stroke()},f=(v,x)=>v.every(p=>p.facePoint.face===v[0].facePoint.face&&p.facePoint.a>0&&p.facePoint.a<x-1&&p.facePoint.b>0&&p.facePoint.b<x-1),d=Qa(i.permutations,i.N),_=v=>`${v.face}-${v.a}-${v.b}`;for(const v of d)if(!(!n&&f(v.map(x=>x.p1),r)))if(v.length>1){const x=v.map(p=>o[_(p.p1.facePoint)]);u(x)}else{const x=v[0],p=o[_(x.p1.facePoint)];h(p,x.rotation[1])}}function rf(){return{renderType:"3D",showSuperCubeChanges:!0,opacity:.8,lineOverCube:!1,useFacePosition:!0}}class zy{constructor(e){En(this,"container");En(this,"canvas2d");En(this,"canvas3d",null);En(this,"result",null);En(this,"pendingRender3DResult",!1);En(this,"pendingRender2DResult",!1);En(this,"renderOption",rf());this.container=e,this.canvas2d=document.createElement("canvas"),this.container.appendChild(this.canvas2d),this.canvas2d.style.width="100%",this.canvas2d.style.height="100%"}setRenderOption(e){let t=!1,n=!1;e.opacity!==void 0&&this.renderOption.opacity!==e.opacity&&(this.renderOption.opacity=e.opacity,Ka(this.renderOption.opacity)),e.showSuperCubeChanges!==void 0&&this.renderOption.showSuperCubeChanges!==e.showSuperCubeChanges&&(this.renderOption.showSuperCubeChanges=e.showSuperCubeChanges,this.renderOption.renderType==="3D"?this.renderOption.showSuperCubeChanges?ah():ch():t=!0),e.lineOverCube!==void 0&&this.renderOption.lineOverCube!==e.lineOverCube&&(this.renderOption.lineOverCube=e.lineOverCube,this.renderOption.renderType==="3D"&&(n=!0)),e.useFacePosition!==void 0&&this.renderOption.useFacePosition!==e.useFacePosition&&(this.renderOption.useFacePosition=e.useFacePosition,this.renderOption.renderType==="3D"&&(n=!0)),e.useFacePosition!==void 0&&this.renderOption.useFacePosition!==e.useFacePosition&&(this.renderOption.useFacePosition=e.useFacePosition,this.renderOption.renderType==="3D"&&(n=!0)),e.renderType!==void 0&&this.renderOption.renderType!==e.renderType&&(this.renderOption.renderType=e.renderType,e.renderType==="3D"?(this.canvas2d.style.display="none",this.canvas3d&&(this.canvas3d.style.display="block",Za())):(this.canvas2d.style.display="block",this.canvas3d&&(this.canvas3d.style.display="none",tf()),t=!0)),this.renderOption.renderType==="3D"&&(n||this.pendingRender3DResult)&&this.result&&this.rerender3D(),this.renderOption.renderType!=="3D"&&(t||this.pendingRender2DResult)&&this.result&&this.rerender2D()}rerender3D(){if(!this.result)throw new Error("3D: No result to render");Ka(this.renderOption.opacity),wy(this.renderOption.lineOverCube),Ry(this.renderOption.useFacePosition),this.canvas3d=Cy(this.result.N,this.result,this.container),this.renderOption.showSuperCubeChanges?ah():ch(),Za(),this.pendingRender3DResult=!1}rerender2D(){if(!this.result)throw new Error("2D: No result to render");yp(this.canvas2d),Uy(this.renderOption.renderType,this.result,this.canvas2d,this.renderOption.showSuperCubeChanges),this.pendingRender2DResult=!1}getRenderOption(){return this.renderOption}renderNewResult(e){this.result=e,this.pendingRender3DResult=!0,this.pendingRender2DResult=!0,this.renderOption.renderType==="3D"?(this.canvas2d.style.display="none",this.rerender3D()):(this.canvas2d.style.display="block",this.canvas3d&&(this.canvas3d.style.display="none"),this.rerender2D())}onResize(){this.result&&(this.renderOption.renderType==="3D"?Ly():this.rerender2D())}}let ky={n:3,alg:"F R U R' U' F'",algParam:"",...rf()};const ft=Gy();let cs;const bi=new zy(ft.canvasContainer),$t=Hy();function Hy(){const i=JSON.parse(window.localStorage.getItem("setting")||"{}"),e=new URLSearchParams(window.location.search),t=JSON.parse(e.get("s")||"{}");return{...ky,...i,...t}}function Lr(i){Object.assign($t,i),window.localStorage.setItem("setting",JSON.stringify($t))}window.onload=function(){document.body.appendChild(ft.app),ft.inputAlg.value=$t.alg,ft.inputN.value=$t.n.toString(),ft.inputParam.value=$t.algParam,bi.setRenderOption($t),yo(),Ur(),Pr()};function yo(){const i=window.innerHeight-ft.canvasContainer.offsetTop-20,t=`${Math.min(i,ft.canvasContainer.clientWidth)}px`;return ft.canvasContainer.style.height!==t?(ft.canvasContainer.style.height=t,!0):!1}function Ia(i,e){e?(i.classList.add("btn-primary"),i.classList.remove("btn-outline-secondary")):(i.classList.remove("btn-primary"),i.classList.add("btn-outline-secondary"))}window.onresize=function(){yo(),bi.onResize()};function Gy(){const i=wn("div","container-fluid my-2");i.id="app";const e=document.createElement("div");e.classList.add("input-group");const t=Oa(e,"alg","",Ur),n=wn("button","btn btn-outline-secondary input-group-prepend");n.textContent="Alg",n.onclick=()=>Vy(),e.prepend(n),t.style.width="50%";const r=Oa(e,"N","N",Ur),s=Oa(e,"Params","Params",Ur),a=an("row justify-content-between mb-2"),o=an("col-md-9"),l=an("col-md-3 btn-group");o.append(e),a.append(o,l);const u=Oi("Inv",()=>{const b=ft.inputAlg.value;b.startsWith("(")&&b.endsWith(")'")?ft.inputAlg.value=b.slice(1,b.length-2):ft.inputAlg.value=`(${b})'`,Ur()}),h=Oi("🔗",()=>{const b=JSON.stringify($t),q=window.location.href.split("?")[0];window.open(q+"?s="+b,"_blank")},"Share link"),f=Oi("▶️",()=>{const b=cs.N;window.open(`https://alpha.twizzle.net/explore/?puzzle=${b}x${b}x${b}&alg=${cs.alg}`,"_blank")},"play in alpha.twizzle.net");l.append(u,h,f);const d=an("row mb-2");d.classList.add("row");const _=an("col-12"),v=an("btn-group"),x=an("col-4"),p=Oi("opacity",()=>{const b=Ep([1,.8,.2],$t.opacity);Lr({opacity:b}),Ka(b),Pr()}),m=Oi("center",()=>{const b=!$t.showSuperCubeChanges;Lr({showSuperCubeChanges:b}),bi.setRenderOption({showSuperCubeChanges:b}),Pr()}),C=Oi("facePosition",()=>{const b=!$t.useFacePosition;Lr({useFacePosition:b}),bi.setRenderOption({useFacePosition:b}),Pr()}),S=Oi("over",()=>{const b=!$t.lineOverCube;Lr({lineOverCube:b}),bi.setRenderOption({lineOverCube:b}),Pr()}),w=qy();v.append(p,m,C,S),_.append(w),_.append(v),d.append(_,x);const A=an("row"),U=an("col-md-8"),L=an("col-md-4"),H=an("border rounded-1 p-1"),M=an("border rounded-1 p-2");return U.append(H),L.append(M),A.append(U,L),i.append(a,d,A),{app:i,inputN:r,inputAlg:t,inputParam:s,canvasContainer:H,renderSwitcher:w,desc:M,showCenter:m,opacity:p,useFacePosition:C,lineOverCube:S}}function Pr(){Ia(ft.showCenter,$t.showSuperCubeChanges),Ia(ft.useFacePosition,$t.useFacePosition),Ia(ft.lineOverCube,$t.lineOverCube),ft.opacity.textContent=`opacity: ${$t.opacity}`;for(const i of ft.renderSwitcher.children)i.classList.remove("btn-primary"),i.classList.add("btn-outline-secondary"),i.textContent===$t.renderType&&(i.classList.add("btn-primary"),i.classList.remove("btn-outline-secondary"))}function Vy(){const[i,e]=Sp(ft.app,"container-fluid my-2"),t=wn("div","pb-2 mb-2","border-bottom:1px solid red");i.append(t);const n=wn("button","btn btn-warning me-4");n.textContent="← Back",n.onclick=()=>{e(),yo(),bi.onResize()},t.append(n);const r=wn("div","","display:flex;flex-direction:vertical;flex-wrap:wrap");i.append(r);function s(l){gh(r);for(const u of l){const h=wn("span","border p-2 me-2 mb-2 small");h.style.cursor="pointer",h.style.width="150px",h.style.background=Mp(u.tags.join(","),100,95),h.append(...Ul("red","["+u.tags.join(",")+"] ","black",u.name)),h.append(document.createElement("br")),h.append(...Ul("blue",u.algorithm)),h.onclick=function(f){return function(){e(),ft.inputAlg.value=f,yo(),Ur()}}(u.algorithm),r.append(h)}}function a(){let l=ka();for(const u of t.querySelectorAll("button"))u.classList.contains("btn-primary")&&(l=l.filter(h=>h.tags.indexOf(u.textContent)>=0));s(l)}const o=new Set(ka().map(l=>l.tags).flat());for(const l of o){const u=wn("button","btn btn-outline-secondary me-2","border-top-right-radius: 2px;");u.textContent=l,u.onclick=h=>{const f=h.target;f.classList.toggle("btn-primary"),f.classList.toggle("btn-outline-secondary"),h.stopPropagation(),a()},t.append(u)}a()}function Oa(i,e,t,n){if(t!==""){const s=document.createElement("span");s.classList.add("input-group-text"),s.appendChild(document.createTextNode(t)),i.appendChild(s)}const r=document.createElement("input");return r.type="text",r.classList.add("form-control"),r.id=e,r.onchange=n,i.appendChild(r),r}function Wy(i,e,t){const n=document.createElement("button"),r=e.split(/\s+/g);return n.classList.add(...r),n.onclick=t,n.textContent=i,n.style.whiteSpace="nowrap",n}function Xy(i){Lr({renderType:i}),bi.setRenderOption({renderType:i}),Pr()}function qy(){const i=an("me-3");i.style.display="inline-block";const e="btn btn-outline-secondary rounded-0";for(const t of["1 face","3 faces","5 faces","6 faces","6 faces 2","3D"])i.append(Wy(t,e,n=>{const r=n.target;Xy(r.textContent)}));return i}function Ur(){console.log("onInputChange");const i=parseInt(ft.inputN.value),e=ft.inputAlg.value,t=Ap(e,ft.inputParam.value.split(/\s+/g).filter(r=>r!==""),i);console.log(t);const n=t.actualParamValues.join(" ");n!==ft.inputParam.value&&(ft.inputParam.value=n),cs=hp(t.resolvedAlgorithm,i),Yy(cs,i),bi.renderNewResult(cs),Lr({n:i,alg:e,algParam:ft.inputParam.value})}function Yy(i,e){const t=(o,l)=>{const u=document.createElement("span");return u.style.color=l,u.style.fontWeight="800",u.textContent=o,u};gh(ft.desc);const n=document.createElement("div");n.style.maxHeight="300px",n.style.overflowY="auto",n.append("Regulated Alg: "+i.regulatedAlg,document.createElement("br")),n.append("Simplified Alg: "+i.simplifiedAlg,document.createElement("br")),wn("span","");const r=wn("span","bg-light me-2 pe-2"),s=wn("span");r.style.cursor="pointer",r.textContent="Refactored Alg:",r.onclick=()=>{const o=parseInt(r.getAttribute("depth")||"1"),l=Date.now(),u=ap(e,o,i.ops),h=Date.now();s.textContent=u.alg,r.setAttribute("depth",`${o+1}`),r.textContent=`Refactored Alg(depth ${o}):`,h-l>5e3&&(r.classList.add("bg-danger"),r.classList.remove("bg-light")),u.complete&&(r.textContent="Refactored Alg:",r.onclick=()=>{})},n.append(r,s,document.createElement("br")),ft.desc.append(n),ft.desc.append("Order: "+i.order,document.createElement("br"));const a=document.createElement("div");if(i.cycles.length>100)a.append("cycles are too big to display: "+i.cycles.length);else for(const o of i.cycles){const l=o.map(u=>za(e,u)[0]||`${u}`).join(" -> ");a.append(t(`[${o.length}]`,"#0080ff"),document.createTextNode(l+" "))}a.append(document.createElement("br"));for(const o of i.rotates){const l=za(e,o.unit.position)[0]||`${o.unit.position}`;a.append(t(`[${o.degree}] `,"#FF0080"),l+" ")}ft.desc.append(a)}});export default jy();
