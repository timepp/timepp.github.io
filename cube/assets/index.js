var em=Object.defineProperty;var tm=(i,e,t)=>e in i?em(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var nm=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var un=(i,e,t)=>(tm(i,typeof e!="symbol"?e+"":e,t),t);var FS=nm((fd,Ic)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof fd=="object"&&typeof Ic<"u"?Ic.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e()})(void 0,function(){const i=new Map,e={set(y,l,_){i.has(y)||i.set(y,new Map);const T=i.get(y);T.has(l)||T.size===0?T.set(l,_):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(T.keys())[0]}.`)},get:(y,l)=>i.has(y)&&i.get(y).get(l)||null,remove(y,l){if(!i.has(y))return;const _=i.get(y);_.delete(l),_.size===0&&i.delete(y)}},t="transitionend",n=y=>(y&&window.CSS&&window.CSS.escape&&(y=y.replace(/#([^\s"#']+)/g,(l,_)=>`#${CSS.escape(_)}`)),y),r=y=>{y.dispatchEvent(new Event(t))},s=y=>!(!y||typeof y!="object")&&(y.jquery!==void 0&&(y=y[0]),y.nodeType!==void 0),a=y=>s(y)?y.jquery?y[0]:y:typeof y=="string"&&y.length>0?document.querySelector(n(y)):null,o=y=>{if(!s(y)||y.getClientRects().length===0)return!1;const l=getComputedStyle(y).getPropertyValue("visibility")==="visible",_=y.closest("details:not([open])");if(!_)return l;if(_!==y){const T=y.closest("summary");if(T&&T.parentNode!==_||T===null)return!1}return l},c=y=>!y||y.nodeType!==Node.ELEMENT_NODE||!!y.classList.contains("disabled")||(y.disabled!==void 0?y.disabled:y.hasAttribute("disabled")&&y.getAttribute("disabled")!=="false"),u=y=>{if(!document.documentElement.attachShadow)return null;if(typeof y.getRootNode=="function"){const l=y.getRootNode();return l instanceof ShadowRoot?l:null}return y instanceof ShadowRoot?y:y.parentNode?u(y.parentNode):null},h=()=>{},f=y=>{y.offsetHeight},d=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,g=[],v=()=>document.documentElement.dir==="rtl",x=y=>{var l;l=()=>{const _=d();if(_){const T=y.NAME,B=_.fn[T];_.fn[T]=y.jQueryInterface,_.fn[T].Constructor=y,_.fn[T].noConflict=()=>(_.fn[T]=B,y.jQueryInterface)}},document.readyState==="loading"?(g.length||document.addEventListener("DOMContentLoaded",()=>{for(const _ of g)_()}),g.push(l)):l()},p=(y,l=[],_=y)=>typeof y=="function"?y(...l):_,m=(y,l,_=!0)=>{if(!_)return void p(y);const T=(K=>{if(!K)return 0;let{transitionDuration:oe,transitionDelay:ge}=window.getComputedStyle(K);const be=Number.parseFloat(oe),we=Number.parseFloat(ge);return be||we?(oe=oe.split(",")[0],ge=ge.split(",")[0],1e3*(Number.parseFloat(oe)+Number.parseFloat(ge))):0})(l)+5;let B=!1;const k=({target:K})=>{K===l&&(B=!0,l.removeEventListener(t,k),p(y))};l.addEventListener(t,k),setTimeout(()=>{B||r(l)},T)},w=(y,l,_,T)=>{const B=y.length;let k=y.indexOf(l);return k===-1?!_&&T?y[B-1]:y[0]:(k+=_?1:-1,T&&(k=(k+B)%B),y[Math.max(0,Math.min(k,B-1))])},S=/[^.]*(?=\..*)\.|.*/,b=/\..*/,D=/::\d+$/,U={};let C=1;const z={mouseenter:"mouseover",mouseleave:"mouseout"},Z=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function M(y,l){return l&&`${l}::${C++}`||y.uidEvent||C++}function R(y){const l=M(y);return y.uidEvent=l,U[l]=U[l]||{},U[l]}function Q(y,l,_=null){return Object.values(y).find(T=>T.callable===l&&T.delegationSelector===_)}function te(y,l,_){const T=typeof l=="string",B=T?_:l||_;let k=ae(y);return Z.has(k)||(k=y),[T,B,k]}function N(y,l,_,T,B){if(typeof l!="string"||!y)return;let[k,K,oe]=te(l,_,T);l in z&&(K=($e=>function(We){if(!We.relatedTarget||We.relatedTarget!==We.delegateTarget&&!We.delegateTarget.contains(We.relatedTarget))return $e.call(this,We)})(K));const ge=R(y),be=ge[oe]||(ge[oe]={}),we=Q(be,K,k?_:null);if(we)return void(we.oneOff=we.oneOff&&B);const Se=M(K,l.replace(S,"")),nt=k?function(He,$e,We){return function je(yt){const Rt=He.querySelectorAll($e);for(let{target:ct}=yt;ct&&ct!==this;ct=ct.parentNode)for(const dt of Rt)if(dt===ct)return re(yt,{delegateTarget:ct}),je.oneOff&&I.off(He,yt.type,$e,We),We.apply(ct,[yt])}}(y,_,K):function(He,$e){return function We(je){return re(je,{delegateTarget:He}),We.oneOff&&I.off(He,je.type,$e),$e.apply(He,[je])}}(y,K);nt.delegationSelector=k?_:null,nt.callable=K,nt.oneOff=B,nt.uidEvent=Se,be[Se]=nt,y.addEventListener(oe,nt,k)}function J(y,l,_,T,B){const k=Q(l[_],T,B);k&&(y.removeEventListener(_,k,!!B),delete l[_][k.uidEvent])}function $(y,l,_,T){const B=l[_]||{};for(const[k,K]of Object.entries(B))k.includes(T)&&J(y,l,_,K.callable,K.delegationSelector)}function ae(y){return y=y.replace(b,""),z[y]||y}const I={on(y,l,_,T){N(y,l,_,T,!1)},one(y,l,_,T){N(y,l,_,T,!0)},off(y,l,_,T){if(typeof l!="string"||!y)return;const[B,k,K]=te(l,_,T),oe=K!==l,ge=R(y),be=ge[K]||{},we=l.startsWith(".");if(k===void 0){if(we)for(const Se of Object.keys(ge))$(y,ge,Se,l.slice(1));for(const[Se,nt]of Object.entries(be)){const He=Se.replace(D,"");oe&&!l.includes(He)||J(y,ge,K,nt.callable,nt.delegationSelector)}}else{if(!Object.keys(be).length)return;J(y,ge,K,k,B?_:null)}},trigger(y,l,_){if(typeof l!="string"||!y)return null;const T=d();let B=null,k=!0,K=!0,oe=!1;l!==ae(l)&&T&&(B=T.Event(l,_),T(y).trigger(B),k=!B.isPropagationStopped(),K=!B.isImmediatePropagationStopped(),oe=B.isDefaultPrevented());const ge=re(new Event(l,{bubbles:k,cancelable:!0}),_);return oe&&ge.preventDefault(),K&&y.dispatchEvent(ge),ge.defaultPrevented&&B&&B.preventDefault(),ge}};function re(y,l={}){for(const[_,T]of Object.entries(l))try{y[_]=T}catch{Object.defineProperty(y,_,{configurable:!0,get:()=>T})}return y}function ee(y){if(y==="true")return!0;if(y==="false")return!1;if(y===Number(y).toString())return Number(y);if(y===""||y==="null")return null;if(typeof y!="string")return y;try{return JSON.parse(decodeURIComponent(y))}catch{return y}}function de(y){return y.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const ye={setDataAttribute(y,l,_){y.setAttribute(`data-bs-${de(l)}`,_)},removeDataAttribute(y,l){y.removeAttribute(`data-bs-${de(l)}`)},getDataAttributes(y){if(!y)return{};const l={},_=Object.keys(y.dataset).filter(T=>T.startsWith("bs")&&!T.startsWith("bsConfig"));for(const T of _){let B=T.replace(/^bs/,"");B=B.charAt(0).toLowerCase()+B.slice(1,B.length),l[B]=ee(y.dataset[T])}return l},getDataAttribute:(y,l)=>ee(y.getAttribute(`data-bs-${de(l)}`))};class ke{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,_){const T=s(_)?ye.getDataAttribute(_,"config"):{};return{...this.constructor.Default,...typeof T=="object"?T:{},...s(_)?ye.getDataAttributes(_):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,_=this.constructor.DefaultType){for(const[B,k]of Object.entries(_)){const K=l[B],oe=s(K)?"element":(T=K)==null?`${T}`:Object.prototype.toString.call(T).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(k).test(oe))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${B}" provided type "${oe}" but expected type "${k}".`)}var T}}class Y extends ke{constructor(l,_){super(),(l=a(l))&&(this._element=l,this._config=this._getConfig(_),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),I.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,_,T=!0){m(l,_,T)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return e.get(a(l),this.DATA_KEY)}static getOrCreateInstance(l,_={}){return this.getInstance(l)||new this(l,typeof _=="object"?_:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const le=y=>{let l=y.getAttribute("data-bs-target");if(!l||l==="#"){let _=y.getAttribute("href");if(!_||!_.includes("#")&&!_.startsWith("."))return null;_.includes("#")&&!_.startsWith("#")&&(_=`#${_.split("#")[1]}`),l=_&&_!=="#"?n(_.trim()):null}return l},ne={find:(y,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,y)),findOne:(y,l=document.documentElement)=>Element.prototype.querySelector.call(l,y),children:(y,l)=>[].concat(...y.children).filter(_=>_.matches(l)),parents(y,l){const _=[];let T=y.parentNode.closest(l);for(;T;)_.push(T),T=T.parentNode.closest(l);return _},prev(y,l){let _=y.previousElementSibling;for(;_;){if(_.matches(l))return[_];_=_.previousElementSibling}return[]},next(y,l){let _=y.nextElementSibling;for(;_;){if(_.matches(l))return[_];_=_.nextElementSibling}return[]},focusableChildren(y){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(_=>`${_}:not([tabindex^="-"])`).join(",");return this.find(l,y).filter(_=>!c(_)&&o(_))},getSelectorFromElement(y){const l=le(y);return l&&ne.findOne(l)?l:null},getElementFromSelector(y){const l=le(y);return l?ne.findOne(l):null},getMultipleElementsFromSelector(y){const l=le(y);return l?ne.find(l):[]}},Be=(y,l="hide")=>{const _=`click.dismiss${y.EVENT_KEY}`,T=y.NAME;I.on(document,_,`[data-bs-dismiss="${T}"]`,function(B){if(["A","AREA"].includes(this.tagName)&&B.preventDefault(),c(this))return;const k=ne.getElementFromSelector(this)||this.closest(`.${T}`);y.getOrCreateInstance(k)[l]()})},Ue=".bs.alert",Te=`close${Ue}`,ut=`closed${Ue}`;class Oe extends Y{static get NAME(){return"alert"}close(){if(I.trigger(this._element,Te).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),I.trigger(this._element,ut),this.dispose()}static jQueryInterface(l){return this.each(function(){const _=Oe.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}Be(Oe,"close"),x(Oe);const G='[data-bs-toggle="button"]';class Ct extends Y{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const _=Ct.getOrCreateInstance(this);l==="toggle"&&_[l]()})}}I.on(document,"click.bs.button.data-api",G,y=>{y.preventDefault();const l=y.target.closest(G);Ct.getOrCreateInstance(l).toggle()}),x(Ct);const Ce=".bs.swipe",Ze=`touchstart${Ce}`,Fe=`touchmove${Ce}`,at=`touchend${Ce}`,Ke=`pointerdown${Ce}`,et=`pointerup${Ce}`,Et={endCallback:null,leftCallback:null,rightCallback:null},L={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class E extends ke{constructor(l,_){super(),this._element=l,l&&E.isSupported()&&(this._config=this._getConfig(_),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Et}static get DefaultType(){return L}static get NAME(){return"swipe"}dispose(){I.off(this._element,Ce)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const _=l/this._deltaX;this._deltaX=0,_&&p(_>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(I.on(this._element,Ke,l=>this._start(l)),I.on(this._element,et,l=>this._end(l)),this._element.classList.add("pointer-event")):(I.on(this._element,Ze,l=>this._start(l)),I.on(this._element,Fe,l=>this._move(l)),I.on(this._element,at,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const j=".bs.carousel",ie=".data-api",ue="next",ce="prev",ze="left",Ie="right",me=`slide${j}`,xe=`slid${j}`,Xe=`keydown${j}`,pe=`mouseenter${j}`,Pt=`mouseleave${j}`,tt=`dragstart${j}`,De=`load${j}${ie}`,Ae=`click${j}${ie}`,Le="carousel",P="active",se=".active",Re=".carousel-item",O=se+Re,fe={ArrowLeft:Ie,ArrowRight:ze},W={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},he={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class _e extends Y{constructor(l,_){super(l,_),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ne.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Le&&this.cycle()}static get Default(){return W}static get DefaultType(){return he}static get NAME(){return"carousel"}next(){this._slide(ue)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(ce)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?I.one(this._element,xe,()=>this.cycle()):this.cycle())}to(l){const _=this._getItems();if(l>_.length-1||l<0)return;if(this._isSliding)return void I.one(this._element,xe,()=>this.to(l));const T=this._getItemIndex(this._getActive());if(T===l)return;const B=l>T?ue:ce;this._slide(B,_[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&I.on(this._element,Xe,l=>this._keydown(l)),this._config.pause==="hover"&&(I.on(this._element,pe,()=>this.pause()),I.on(this._element,Pt,()=>this._maybeEnableCycle())),this._config.touch&&E.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const _ of ne.find(".carousel-item img",this._element))I.on(_,tt,T=>T.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(ze)),rightCallback:()=>this._slide(this._directionToOrder(Ie)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new E(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const _=fe[l.key];_&&(l.preventDefault(),this._slide(this._directionToOrder(_)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const _=ne.findOne(se,this._indicatorsElement);_.classList.remove(P),_.removeAttribute("aria-current");const T=ne.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);T&&(T.classList.add(P),T.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const _=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=_||this._config.defaultInterval}_slide(l,_=null){if(this._isSliding)return;const T=this._getActive(),B=l===ue,k=_||w(this._getItems(),T,B,this._config.wrap);if(k===T)return;const K=this._getItemIndex(k),oe=Se=>I.trigger(this._element,Se,{relatedTarget:k,direction:this._orderToDirection(l),from:this._getItemIndex(T),to:K});if(oe(me).defaultPrevented||!T||!k)return;const ge=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(K),this._activeElement=k;const be=B?"carousel-item-start":"carousel-item-end",we=B?"carousel-item-next":"carousel-item-prev";k.classList.add(we),f(k),T.classList.add(be),k.classList.add(be),this._queueCallback(()=>{k.classList.remove(be,we),k.classList.add(P),T.classList.remove(P,we,be),this._isSliding=!1,oe(xe)},T,this._isAnimated()),ge&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ne.findOne(O,this._element)}_getItems(){return ne.find(Re,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return v()?l===ze?ce:ue:l===ze?ue:ce}_orderToDirection(l){return v()?l===ce?ze:Ie:l===ce?Ie:ze}static jQueryInterface(l){return this.each(function(){const _=_e.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}}else _.to(l)})}}I.on(document,Ae,"[data-bs-slide], [data-bs-slide-to]",function(y){const l=ne.getElementFromSelector(this);if(!l||!l.classList.contains(Le))return;y.preventDefault();const _=_e.getOrCreateInstance(l),T=this.getAttribute("data-bs-slide-to");return T?(_.to(T),void _._maybeEnableCycle()):ye.getDataAttribute(this,"slide")==="next"?(_.next(),void _._maybeEnableCycle()):(_.prev(),void _._maybeEnableCycle())}),I.on(window,De,()=>{const y=ne.find('[data-bs-ride="carousel"]');for(const l of y)_e.getOrCreateInstance(l)}),x(_e);const qe=".bs.collapse",ft=`show${qe}`,mt=`shown${qe}`,Ut=`hide${qe}`,ht=`hidden${qe}`,bt=`click${qe}.data-api`,Ht="show",gn="collapse",si="collapsing",dr=`:scope .${gn} .${gn}`,pr='[data-bs-toggle="collapse"]',mr={parent:null,toggle:!0},Hs={parent:"(null|element)",toggle:"boolean"};class oi extends Y{constructor(l,_){super(l,_),this._isTransitioning=!1,this._triggerArray=[];const T=ne.find(pr);for(const B of T){const k=ne.getSelectorFromElement(B),K=ne.find(k).filter(oe=>oe===this._element);k!==null&&K.length&&this._triggerArray.push(B)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return mr}static get DefaultType(){return Hs}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(B=>B!==this._element).map(B=>oi.getOrCreateInstance(B,{toggle:!1}))),l.length&&l[0]._isTransitioning||I.trigger(this._element,ft).defaultPrevented)return;for(const B of l)B.hide();const _=this._getDimension();this._element.classList.remove(gn),this._element.classList.add(si),this._element.style[_]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const T=`scroll${_[0].toUpperCase()+_.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(si),this._element.classList.add(gn,Ht),this._element.style[_]="",I.trigger(this._element,mt)},this._element,!0),this._element.style[_]=`${this._element[T]}px`}hide(){if(this._isTransitioning||!this._isShown()||I.trigger(this._element,Ut).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,f(this._element),this._element.classList.add(si),this._element.classList.remove(gn,Ht);for(const _ of this._triggerArray){const T=ne.getElementFromSelector(_);T&&!this._isShown(T)&&this._addAriaAndCollapsedClass([_],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(si),this._element.classList.add(gn),I.trigger(this._element,ht)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(Ht)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=a(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(pr);for(const _ of l){const T=ne.getElementFromSelector(_);T&&this._addAriaAndCollapsedClass([_],this._isShown(T))}}_getFirstLevelChildren(l){const _=ne.find(dr,this._config.parent);return ne.find(l,this._config.parent).filter(T=>!_.includes(T))}_addAriaAndCollapsedClass(l,_){if(l.length)for(const T of l)T.classList.toggle("collapsed",!_),T.setAttribute("aria-expanded",_)}static jQueryInterface(l){const _={};return typeof l=="string"&&/show|hide/.test(l)&&(_.toggle=!1),this.each(function(){const T=oi.getOrCreateInstance(this,_);if(typeof l=="string"){if(T[l]===void 0)throw new TypeError(`No method named "${l}"`);T[l]()}})}}I.on(document,bt,pr,function(y){(y.target.tagName==="A"||y.delegateTarget&&y.delegateTarget.tagName==="A")&&y.preventDefault();for(const l of ne.getMultipleElementsFromSelector(this))oi.getOrCreateInstance(l,{toggle:!1}).toggle()}),x(oi);var Jt="top",on="bottom",an="right",A="left",H="auto",X=[Jt,on,an,A],q="start",V="end",Ee="clippingParents",Pe="viewport",Ne="popper",Ge="reference",Je=X.reduce(function(y,l){return y.concat([l+"-"+q,l+"-"+V])},[]),Ve=[].concat(X,[H]).reduce(function(y,l){return y.concat([l,l+"-"+q,l+"-"+V])},[]),Ye="beforeRead",Dt="read",Qt="afterRead",zt="beforeMain",wn="main",wt="afterMain",Qe="beforeWrite",gr="write",Tt="afterWrite",Zn=[Ye,Dt,Qt,zt,wn,wt,Qe,gr,Tt];function Sn(y){return y?(y.nodeName||"").toLowerCase():null}function Xt(y){if(y==null)return window;if(y.toString()!=="[object Window]"){var l=y.ownerDocument;return l&&l.defaultView||window}return y}function On(y){return y instanceof Xt(y).Element||y instanceof Element}function gt(y){return y instanceof Xt(y).HTMLElement||y instanceof HTMLElement}function Fn(y){return typeof ShadowRoot<"u"&&(y instanceof Xt(y).ShadowRoot||y instanceof ShadowRoot)}const ki={name:"applyStyles",enabled:!0,phase:"write",fn:function(y){var l=y.state;Object.keys(l.elements).forEach(function(_){var T=l.styles[_]||{},B=l.attributes[_]||{},k=l.elements[_];gt(k)&&Sn(k)&&(Object.assign(k.style,T),Object.keys(B).forEach(function(K){var oe=B[K];oe===!1?k.removeAttribute(K):k.setAttribute(K,oe===!0?"":oe)}))})},effect:function(y){var l=y.state,_={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,_.popper),l.styles=_,l.elements.arrow&&Object.assign(l.elements.arrow.style,_.arrow),function(){Object.keys(l.elements).forEach(function(T){var B=l.elements[T],k=l.attributes[T]||{},K=Object.keys(l.styles.hasOwnProperty(T)?l.styles[T]:_[T]).reduce(function(oe,ge){return oe[ge]="",oe},{});gt(B)&&Sn(B)&&(Object.assign(B.style,K),Object.keys(k).forEach(function(oe){B.removeAttribute(oe)}))})}},requires:["computeStyles"]};function It(y){return y.split("-")[0]}var Bn=Math.max,_r=Math.min,ai=Math.round;function Qo(){var y=navigator.userAgentData;return y!=null&&y.brands&&Array.isArray(y.brands)?y.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function tl(){return!/^((?!chrome|android).)*safari/i.test(Qo())}function vr(y,l,_){l===void 0&&(l=!1),_===void 0&&(_=!1);var T=y.getBoundingClientRect(),B=1,k=1;l&&gt(y)&&(B=y.offsetWidth>0&&ai(T.width)/y.offsetWidth||1,k=y.offsetHeight>0&&ai(T.height)/y.offsetHeight||1);var K=(On(y)?Xt(y):window).visualViewport,oe=!tl()&&_,ge=(T.left+(oe&&K?K.offsetLeft:0))/B,be=(T.top+(oe&&K?K.offsetTop:0))/k,we=T.width/B,Se=T.height/k;return{width:we,height:Se,top:be,right:ge+we,bottom:be+Se,left:ge,x:ge,y:be}}function ea(y){var l=vr(y),_=y.offsetWidth,T=y.offsetHeight;return Math.abs(l.width-_)<=1&&(_=l.width),Math.abs(l.height-T)<=1&&(T=l.height),{x:y.offsetLeft,y:y.offsetTop,width:_,height:T}}function nl(y,l){var _=l.getRootNode&&l.getRootNode();if(y.contains(l))return!0;if(_&&Fn(_)){var T=l;do{if(T&&y.isSameNode(T))return!0;T=T.parentNode||T.host}while(T)}return!1}function ci(y){return Xt(y).getComputedStyle(y)}function dd(y){return["table","td","th"].indexOf(Sn(y))>=0}function Mi(y){return((On(y)?y.ownerDocument:y.document)||window.document).documentElement}function Gs(y){return Sn(y)==="html"?y:y.assignedSlot||y.parentNode||(Fn(y)?y.host:null)||Mi(y)}function il(y){return gt(y)&&ci(y).position!=="fixed"?y.offsetParent:null}function ss(y){for(var l=Xt(y),_=il(y);_&&dd(_)&&ci(_).position==="static";)_=il(_);return _&&(Sn(_)==="html"||Sn(_)==="body"&&ci(_).position==="static")?l:_||function(T){var B=/firefox/i.test(Qo());if(/Trident/i.test(Qo())&&gt(T)&&ci(T).position==="fixed")return null;var k=Gs(T);for(Fn(k)&&(k=k.host);gt(k)&&["html","body"].indexOf(Sn(k))<0;){var K=ci(k);if(K.transform!=="none"||K.perspective!=="none"||K.contain==="paint"||["transform","perspective"].indexOf(K.willChange)!==-1||B&&K.willChange==="filter"||B&&K.filter&&K.filter!=="none")return k;k=k.parentNode}return null}(y)||l}function ta(y){return["top","bottom"].indexOf(y)>=0?"x":"y"}function os(y,l,_){return Bn(y,_r(l,_))}function rl(y){return Object.assign({},{top:0,right:0,bottom:0,left:0},y)}function sl(y,l){return l.reduce(function(_,T){return _[T]=y,_},{})}const ol={name:"arrow",enabled:!0,phase:"main",fn:function(y){var l,_=y.state,T=y.name,B=y.options,k=_.elements.arrow,K=_.modifiersData.popperOffsets,oe=It(_.placement),ge=ta(oe),be=[A,an].indexOf(oe)>=0?"height":"width";if(k&&K){var we=function(Mt,vt){return rl(typeof(Mt=typeof Mt=="function"?Mt(Object.assign({},vt.rects,{placement:vt.placement})):Mt)!="number"?Mt:sl(Mt,X))}(B.padding,_),Se=ea(k),nt=ge==="y"?Jt:A,He=ge==="y"?on:an,$e=_.rects.reference[be]+_.rects.reference[ge]-K[ge]-_.rects.popper[be],We=K[ge]-_.rects.reference[ge],je=ss(k),yt=je?ge==="y"?je.clientHeight||0:je.clientWidth||0:0,Rt=$e/2-We/2,ct=we[nt],dt=yt-Se[be]-we[He],it=yt/2-Se[be]/2+Rt,lt=os(ct,it,dt),_t=ge;_.modifiersData[T]=((l={})[_t]=lt,l.centerOffset=lt-it,l)}},effect:function(y){var l=y.state,_=y.options.element,T=_===void 0?"[data-popper-arrow]":_;T!=null&&(typeof T!="string"||(T=l.elements.popper.querySelector(T)))&&nl(l.elements.popper,T)&&(l.elements.arrow=T)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function xr(y){return y.split("-")[1]}var pd={top:"auto",right:"auto",bottom:"auto",left:"auto"};function al(y){var l,_=y.popper,T=y.popperRect,B=y.placement,k=y.variation,K=y.offsets,oe=y.position,ge=y.gpuAcceleration,be=y.adaptive,we=y.roundOffsets,Se=y.isFixed,nt=K.x,He=nt===void 0?0:nt,$e=K.y,We=$e===void 0?0:$e,je=typeof we=="function"?we({x:He,y:We}):{x:He,y:We};He=je.x,We=je.y;var yt=K.hasOwnProperty("x"),Rt=K.hasOwnProperty("y"),ct=A,dt=Jt,it=window;if(be){var lt=ss(_),_t="clientHeight",Mt="clientWidth";lt===Xt(_)&&ci(lt=Mi(_)).position!=="static"&&oe==="absolute"&&(_t="scrollHeight",Mt="scrollWidth"),(B===Jt||(B===A||B===an)&&k===V)&&(dt=on,We-=(Se&&lt===it&&it.visualViewport?it.visualViewport.height:lt[_t])-T.height,We*=ge?1:-1),B!==A&&(B!==Jt&&B!==on||k!==V)||(ct=an,He-=(Se&&lt===it&&it.visualViewport?it.visualViewport.width:lt[Mt])-T.width,He*=ge?1:-1)}var vt,kt=Object.assign({position:oe},be&&pd),En=we===!0?function(kn,cn){var Cn=kn.x,Ln=kn.y,Ot=cn.devicePixelRatio||1;return{x:ai(Cn*Ot)/Ot||0,y:ai(Ln*Ot)/Ot||0}}({x:He,y:We},Xt(_)):{x:He,y:We};return He=En.x,We=En.y,ge?Object.assign({},kt,((vt={})[dt]=Rt?"0":"",vt[ct]=yt?"0":"",vt.transform=(it.devicePixelRatio||1)<=1?"translate("+He+"px, "+We+"px)":"translate3d("+He+"px, "+We+"px, 0)",vt)):Object.assign({},kt,((l={})[dt]=Rt?We+"px":"",l[ct]=yt?He+"px":"",l.transform="",l))}const na={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(y){var l=y.state,_=y.options,T=_.gpuAcceleration,B=T===void 0||T,k=_.adaptive,K=k===void 0||k,oe=_.roundOffsets,ge=oe===void 0||oe,be={placement:It(l.placement),variation:xr(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:B,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,al(Object.assign({},be,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:K,roundOffsets:ge})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,al(Object.assign({},be,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ge})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var Vs={passive:!0};const ia={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(y){var l=y.state,_=y.instance,T=y.options,B=T.scroll,k=B===void 0||B,K=T.resize,oe=K===void 0||K,ge=Xt(l.elements.popper),be=[].concat(l.scrollParents.reference,l.scrollParents.popper);return k&&be.forEach(function(we){we.addEventListener("scroll",_.update,Vs)}),oe&&ge.addEventListener("resize",_.update,Vs),function(){k&&be.forEach(function(we){we.removeEventListener("scroll",_.update,Vs)}),oe&&ge.removeEventListener("resize",_.update,Vs)}},data:{}};var md={left:"right",right:"left",bottom:"top",top:"bottom"};function Ws(y){return y.replace(/left|right|bottom|top/g,function(l){return md[l]})}var gd={start:"end",end:"start"};function cl(y){return y.replace(/start|end/g,function(l){return gd[l]})}function ra(y){var l=Xt(y);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function sa(y){return vr(Mi(y)).left+ra(y).scrollLeft}function oa(y){var l=ci(y),_=l.overflow,T=l.overflowX,B=l.overflowY;return/auto|scroll|overlay|hidden/.test(_+B+T)}function ll(y){return["html","body","#document"].indexOf(Sn(y))>=0?y.ownerDocument.body:gt(y)&&oa(y)?y:ll(Gs(y))}function as(y,l){var _;l===void 0&&(l=[]);var T=ll(y),B=T===((_=y.ownerDocument)==null?void 0:_.body),k=Xt(T),K=B?[k].concat(k.visualViewport||[],oa(T)?T:[]):T,oe=l.concat(K);return B?oe:oe.concat(as(Gs(K)))}function aa(y){return Object.assign({},y,{left:y.x,top:y.y,right:y.x+y.width,bottom:y.y+y.height})}function ul(y,l,_){return l===Pe?aa(function(T,B){var k=Xt(T),K=Mi(T),oe=k.visualViewport,ge=K.clientWidth,be=K.clientHeight,we=0,Se=0;if(oe){ge=oe.width,be=oe.height;var nt=tl();(nt||!nt&&B==="fixed")&&(we=oe.offsetLeft,Se=oe.offsetTop)}return{width:ge,height:be,x:we+sa(T),y:Se}}(y,_)):On(l)?function(T,B){var k=vr(T,!1,B==="fixed");return k.top=k.top+T.clientTop,k.left=k.left+T.clientLeft,k.bottom=k.top+T.clientHeight,k.right=k.left+T.clientWidth,k.width=T.clientWidth,k.height=T.clientHeight,k.x=k.left,k.y=k.top,k}(l,_):aa(function(T){var B,k=Mi(T),K=ra(T),oe=(B=T.ownerDocument)==null?void 0:B.body,ge=Bn(k.scrollWidth,k.clientWidth,oe?oe.scrollWidth:0,oe?oe.clientWidth:0),be=Bn(k.scrollHeight,k.clientHeight,oe?oe.scrollHeight:0,oe?oe.clientHeight:0),we=-K.scrollLeft+sa(T),Se=-K.scrollTop;return ci(oe||k).direction==="rtl"&&(we+=Bn(k.clientWidth,oe?oe.clientWidth:0)-ge),{width:ge,height:be,x:we,y:Se}}(Mi(y)))}function hl(y){var l,_=y.reference,T=y.element,B=y.placement,k=B?It(B):null,K=B?xr(B):null,oe=_.x+_.width/2-T.width/2,ge=_.y+_.height/2-T.height/2;switch(k){case Jt:l={x:oe,y:_.y-T.height};break;case on:l={x:oe,y:_.y+_.height};break;case an:l={x:_.x+_.width,y:ge};break;case A:l={x:_.x-T.width,y:ge};break;default:l={x:_.x,y:_.y}}var be=k?ta(k):null;if(be!=null){var we=be==="y"?"height":"width";switch(K){case q:l[be]=l[be]-(_[we]/2-T[we]/2);break;case V:l[be]=l[be]+(_[we]/2-T[we]/2)}}return l}function yr(y,l){l===void 0&&(l={});var _=l,T=_.placement,B=T===void 0?y.placement:T,k=_.strategy,K=k===void 0?y.strategy:k,oe=_.boundary,ge=oe===void 0?Ee:oe,be=_.rootBoundary,we=be===void 0?Pe:be,Se=_.elementContext,nt=Se===void 0?Ne:Se,He=_.altBoundary,$e=He!==void 0&&He,We=_.padding,je=We===void 0?0:We,yt=rl(typeof je!="number"?je:sl(je,X)),Rt=nt===Ne?Ge:Ne,ct=y.rects.popper,dt=y.elements[$e?Rt:nt],it=function(cn,Cn,Ln,Ot){var Kn=Cn==="clippingParents"?function(At){var ln=as(Gs(At)),Pn=["absolute","fixed"].indexOf(ci(At).position)>=0&&gt(At)?ss(At):At;return On(Pn)?ln.filter(function(Ei){return On(Ei)&&nl(Ei,Pn)&&Sn(Ei)!=="body"}):[]}(cn):[].concat(Cn),Jn=[].concat(Kn,[Ln]),Er=Jn[0],$t=Jn.reduce(function(At,ln){var Pn=ul(cn,ln,Ot);return At.top=Bn(Pn.top,At.top),At.right=_r(Pn.right,At.right),At.bottom=_r(Pn.bottom,At.bottom),At.left=Bn(Pn.left,At.left),At},ul(cn,Er,Ot));return $t.width=$t.right-$t.left,$t.height=$t.bottom-$t.top,$t.x=$t.left,$t.y=$t.top,$t}(On(dt)?dt:dt.contextElement||Mi(y.elements.popper),ge,we,K),lt=vr(y.elements.reference),_t=hl({reference:lt,element:ct,strategy:"absolute",placement:B}),Mt=aa(Object.assign({},ct,_t)),vt=nt===Ne?Mt:lt,kt={top:it.top-vt.top+yt.top,bottom:vt.bottom-it.bottom+yt.bottom,left:it.left-vt.left+yt.left,right:vt.right-it.right+yt.right},En=y.modifiersData.offset;if(nt===Ne&&En){var kn=En[B];Object.keys(kt).forEach(function(cn){var Cn=[an,on].indexOf(cn)>=0?1:-1,Ln=[Jt,on].indexOf(cn)>=0?"y":"x";kt[cn]+=kn[Ln]*Cn})}return kt}function _d(y,l){l===void 0&&(l={});var _=l,T=_.placement,B=_.boundary,k=_.rootBoundary,K=_.padding,oe=_.flipVariations,ge=_.allowedAutoPlacements,be=ge===void 0?Ve:ge,we=xr(T),Se=we?oe?Je:Je.filter(function($e){return xr($e)===we}):X,nt=Se.filter(function($e){return be.indexOf($e)>=0});nt.length===0&&(nt=Se);var He=nt.reduce(function($e,We){return $e[We]=yr(y,{placement:We,boundary:B,rootBoundary:k,padding:K})[It(We)],$e},{});return Object.keys(He).sort(function($e,We){return He[$e]-He[We]})}const fl={name:"flip",enabled:!0,phase:"main",fn:function(y){var l=y.state,_=y.options,T=y.name;if(!l.modifiersData[T]._skip){for(var B=_.mainAxis,k=B===void 0||B,K=_.altAxis,oe=K===void 0||K,ge=_.fallbackPlacements,be=_.padding,we=_.boundary,Se=_.rootBoundary,nt=_.altBoundary,He=_.flipVariations,$e=He===void 0||He,We=_.allowedAutoPlacements,je=l.options.placement,yt=It(je),Rt=ge||(yt!==je&&$e?function(At){if(It(At)===H)return[];var ln=Ws(At);return[cl(At),ln,cl(ln)]}(je):[Ws(je)]),ct=[je].concat(Rt).reduce(function(At,ln){return At.concat(It(ln)===H?_d(l,{placement:ln,boundary:we,rootBoundary:Se,padding:be,flipVariations:$e,allowedAutoPlacements:We}):ln)},[]),dt=l.rects.reference,it=l.rects.popper,lt=new Map,_t=!0,Mt=ct[0],vt=0;vt<ct.length;vt++){var kt=ct[vt],En=It(kt),kn=xr(kt)===q,cn=[Jt,on].indexOf(En)>=0,Cn=cn?"width":"height",Ln=yr(l,{placement:kt,boundary:we,rootBoundary:Se,altBoundary:nt,padding:be}),Ot=cn?kn?an:A:kn?on:Jt;dt[Cn]>it[Cn]&&(Ot=Ws(Ot));var Kn=Ws(Ot),Jn=[];if(k&&Jn.push(Ln[En]<=0),oe&&Jn.push(Ln[Ot]<=0,Ln[Kn]<=0),Jn.every(function(At){return At})){Mt=kt,_t=!1;break}lt.set(kt,Jn)}if(_t)for(var Er=function(At){var ln=ct.find(function(Pn){var Ei=lt.get(Pn);if(Ei)return Ei.slice(0,At).every(function(Qs){return Qs})});if(ln)return Mt=ln,"break"},$t=$e?3:1;$t>0&&Er($t)!=="break";$t--);l.placement!==Mt&&(l.modifiersData[T]._skip=!0,l.placement=Mt,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function dl(y,l,_){return _===void 0&&(_={x:0,y:0}),{top:y.top-l.height-_.y,right:y.right-l.width+_.x,bottom:y.bottom-l.height+_.y,left:y.left-l.width-_.x}}function pl(y){return[Jt,an,on,A].some(function(l){return y[l]>=0})}const ml={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(y){var l=y.state,_=y.name,T=l.rects.reference,B=l.rects.popper,k=l.modifiersData.preventOverflow,K=yr(l,{elementContext:"reference"}),oe=yr(l,{altBoundary:!0}),ge=dl(K,T),be=dl(oe,B,k),we=pl(ge),Se=pl(be);l.modifiersData[_]={referenceClippingOffsets:ge,popperEscapeOffsets:be,isReferenceHidden:we,hasPopperEscaped:Se},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":we,"data-popper-escaped":Se})}},gl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(y){var l=y.state,_=y.options,T=y.name,B=_.offset,k=B===void 0?[0,0]:B,K=Ve.reduce(function(we,Se){return we[Se]=function(nt,He,$e){var We=It(nt),je=[A,Jt].indexOf(We)>=0?-1:1,yt=typeof $e=="function"?$e(Object.assign({},He,{placement:nt})):$e,Rt=yt[0],ct=yt[1];return Rt=Rt||0,ct=(ct||0)*je,[A,an].indexOf(We)>=0?{x:ct,y:Rt}:{x:Rt,y:ct}}(Se,l.rects,k),we},{}),oe=K[l.placement],ge=oe.x,be=oe.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=ge,l.modifiersData.popperOffsets.y+=be),l.modifiersData[T]=K}},ca={name:"popperOffsets",enabled:!0,phase:"read",fn:function(y){var l=y.state,_=y.name;l.modifiersData[_]=hl({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})},data:{}},_l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(y){var l=y.state,_=y.options,T=y.name,B=_.mainAxis,k=B===void 0||B,K=_.altAxis,oe=K!==void 0&&K,ge=_.boundary,be=_.rootBoundary,we=_.altBoundary,Se=_.padding,nt=_.tether,He=nt===void 0||nt,$e=_.tetherOffset,We=$e===void 0?0:$e,je=yr(l,{boundary:ge,rootBoundary:be,padding:Se,altBoundary:we}),yt=It(l.placement),Rt=xr(l.placement),ct=!Rt,dt=ta(yt),it=dt==="x"?"y":"x",lt=l.modifiersData.popperOffsets,_t=l.rects.reference,Mt=l.rects.popper,vt=typeof We=="function"?We(Object.assign({},l.rects,{placement:l.placement})):We,kt=typeof vt=="number"?{mainAxis:vt,altAxis:vt}:Object.assign({mainAxis:0,altAxis:0},vt),En=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,kn={x:0,y:0};if(lt){if(k){var cn,Cn=dt==="y"?Jt:A,Ln=dt==="y"?on:an,Ot=dt==="y"?"height":"width",Kn=lt[dt],Jn=Kn+je[Cn],Er=Kn-je[Ln],$t=He?-Mt[Ot]/2:0,At=Rt===q?_t[Ot]:Mt[Ot],ln=Rt===q?-Mt[Ot]:-_t[Ot],Pn=l.elements.arrow,Ei=He&&Pn?ea(Pn):{width:0,height:0},Qs=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},iu=Qs[Cn],ru=Qs[Ln],eo=os(0,_t[Ot],Ei[Ot]),qp=ct?_t[Ot]/2-$t-eo-iu-kt.mainAxis:At-eo-iu-kt.mainAxis,Yp=ct?-_t[Ot]/2+$t+eo+ru+kt.mainAxis:ln+eo+ru+kt.mainAxis,Ma=l.elements.arrow&&ss(l.elements.arrow),$p=Ma?dt==="y"?Ma.clientTop||0:Ma.clientLeft||0:0,su=(cn=En==null?void 0:En[dt])!=null?cn:0,jp=Kn+Yp-su,ou=os(He?_r(Jn,Kn+qp-su-$p):Jn,Kn,He?Bn(Er,jp):Er);lt[dt]=ou,kn[dt]=ou-Kn}if(oe){var au,Zp=dt==="x"?Jt:A,Kp=dt==="x"?on:an,$i=lt[it],to=it==="y"?"height":"width",cu=$i+je[Zp],lu=$i-je[Kp],Sa=[Jt,A].indexOf(yt)!==-1,uu=(au=En==null?void 0:En[it])!=null?au:0,hu=Sa?cu:$i-_t[to]-Mt[to]-uu+kt.altAxis,fu=Sa?$i+_t[to]+Mt[to]-uu-kt.altAxis:lu,du=He&&Sa?function(Jp,Qp,Ea){var pu=os(Jp,Qp,Ea);return pu>Ea?Ea:pu}(hu,$i,fu):os(He?hu:cu,$i,He?fu:lu);lt[it]=du,kn[it]=du-$i}l.modifiersData[T]=kn}},requiresIfExists:["offset"]};function vd(y,l,_){_===void 0&&(_=!1);var T,B,k=gt(l),K=gt(l)&&function(Se){var nt=Se.getBoundingClientRect(),He=ai(nt.width)/Se.offsetWidth||1,$e=ai(nt.height)/Se.offsetHeight||1;return He!==1||$e!==1}(l),oe=Mi(l),ge=vr(y,K,_),be={scrollLeft:0,scrollTop:0},we={x:0,y:0};return(k||!k&&!_)&&((Sn(l)!=="body"||oa(oe))&&(be=(T=l)!==Xt(T)&&gt(T)?{scrollLeft:(B=T).scrollLeft,scrollTop:B.scrollTop}:ra(T)),gt(l)?((we=vr(l,!0)).x+=l.clientLeft,we.y+=l.clientTop):oe&&(we.x=sa(oe))),{x:ge.left+be.scrollLeft-we.x,y:ge.top+be.scrollTop-we.y,width:ge.width,height:ge.height}}function xd(y){var l=new Map,_=new Set,T=[];function B(k){_.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(K){if(!_.has(K)){var oe=l.get(K);oe&&B(oe)}}),T.push(k)}return y.forEach(function(k){l.set(k.name,k)}),y.forEach(function(k){_.has(k.name)||B(k)}),T}var vl={placement:"bottom",modifiers:[],strategy:"absolute"};function xl(){for(var y=arguments.length,l=new Array(y),_=0;_<y;_++)l[_]=arguments[_];return!l.some(function(T){return!(T&&typeof T.getBoundingClientRect=="function")})}function Xs(y){y===void 0&&(y={});var l=y,_=l.defaultModifiers,T=_===void 0?[]:_,B=l.defaultOptions,k=B===void 0?vl:B;return function(K,oe,ge){ge===void 0&&(ge=k);var be,we,Se={placement:"bottom",orderedModifiers:[],options:Object.assign({},vl,k),modifiersData:{},elements:{reference:K,popper:oe},attributes:{},styles:{}},nt=[],He=!1,$e={state:Se,setOptions:function(je){var yt=typeof je=="function"?je(Se.options):je;We(),Se.options=Object.assign({},k,Se.options,yt),Se.scrollParents={reference:On(K)?as(K):K.contextElement?as(K.contextElement):[],popper:as(oe)};var Rt,ct,dt=function(it){var lt=xd(it);return Zn.reduce(function(_t,Mt){return _t.concat(lt.filter(function(vt){return vt.phase===Mt}))},[])}((Rt=[].concat(T,Se.options.modifiers),ct=Rt.reduce(function(it,lt){var _t=it[lt.name];return it[lt.name]=_t?Object.assign({},_t,lt,{options:Object.assign({},_t.options,lt.options),data:Object.assign({},_t.data,lt.data)}):lt,it},{}),Object.keys(ct).map(function(it){return ct[it]})));return Se.orderedModifiers=dt.filter(function(it){return it.enabled}),Se.orderedModifiers.forEach(function(it){var lt=it.name,_t=it.options,Mt=_t===void 0?{}:_t,vt=it.effect;if(typeof vt=="function"){var kt=vt({state:Se,name:lt,instance:$e,options:Mt});nt.push(kt||function(){})}}),$e.update()},forceUpdate:function(){if(!He){var je=Se.elements,yt=je.reference,Rt=je.popper;if(xl(yt,Rt)){Se.rects={reference:vd(yt,ss(Rt),Se.options.strategy==="fixed"),popper:ea(Rt)},Se.reset=!1,Se.placement=Se.options.placement,Se.orderedModifiers.forEach(function(vt){return Se.modifiersData[vt.name]=Object.assign({},vt.data)});for(var ct=0;ct<Se.orderedModifiers.length;ct++)if(Se.reset!==!0){var dt=Se.orderedModifiers[ct],it=dt.fn,lt=dt.options,_t=lt===void 0?{}:lt,Mt=dt.name;typeof it=="function"&&(Se=it({state:Se,options:_t,name:Mt,instance:$e})||Se)}else Se.reset=!1,ct=-1}}},update:(be=function(){return new Promise(function(je){$e.forceUpdate(),je(Se)})},function(){return we||(we=new Promise(function(je){Promise.resolve().then(function(){we=void 0,je(be())})})),we}),destroy:function(){We(),He=!0}};if(!xl(K,oe))return $e;function We(){nt.forEach(function(je){return je()}),nt=[]}return $e.setOptions(ge).then(function(je){!He&&ge.onFirstUpdate&&ge.onFirstUpdate(je)}),$e}}var yd=Xs(),Md=Xs({defaultModifiers:[ia,ca,na,ki]}),la=Xs({defaultModifiers:[ia,ca,na,ki,gl,fl,_l,ol,ml]});const yl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:wt,afterRead:Qt,afterWrite:Tt,applyStyles:ki,arrow:ol,auto:H,basePlacements:X,beforeMain:zt,beforeRead:Ye,beforeWrite:Qe,bottom:on,clippingParents:Ee,computeStyles:na,createPopper:la,createPopperBase:yd,createPopperLite:Md,detectOverflow:yr,end:V,eventListeners:ia,flip:fl,hide:ml,left:A,main:wn,modifierPhases:Zn,offset:gl,placements:Ve,popper:Ne,popperGenerator:Xs,popperOffsets:ca,preventOverflow:_l,read:Dt,reference:Ge,right:an,start:q,top:Jt,variationPlacements:Je,viewport:Pe,write:gr},Symbol.toStringTag,{value:"Module"})),Ml="dropdown",Hi=".bs.dropdown",ua=".data-api",Sd="ArrowUp",Sl="ArrowDown",Ed=`hide${Hi}`,bd=`hidden${Hi}`,Td=`show${Hi}`,Ad=`shown${Hi}`,El=`click${Hi}${ua}`,bl=`keydown${Hi}${ua}`,wd=`keyup${Hi}${ua}`,Mr="show",Gi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Rd=`${Gi}.${Mr}`,qs=".dropdown-menu",Cd=v()?"top-end":"top-start",Ld=v()?"top-start":"top-end",Pd=v()?"bottom-end":"bottom-start",Ud=v()?"bottom-start":"bottom-end",Dd=v()?"left-start":"right-start",Id=v()?"right-start":"left-start",Nd={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Od={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class zn extends Y{constructor(l,_){super(l,_),this._popper=null,this._parent=this._element.parentNode,this._menu=ne.next(this._element,qs)[0]||ne.prev(this._element,qs)[0]||ne.findOne(qs,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Nd}static get DefaultType(){return Od}static get NAME(){return Ml}toggle(){return this._isShown()?this.hide():this.show()}show(){if(c(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!I.trigger(this._element,Td,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const _ of[].concat(...document.body.children))I.on(_,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Mr),this._element.classList.add(Mr),I.trigger(this._element,Ad,l)}}hide(){if(c(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!I.trigger(this._element,Ed,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const _ of[].concat(...document.body.children))I.off(_,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Mr),this._element.classList.remove(Mr),this._element.setAttribute("aria-expanded","false"),ye.removeDataAttribute(this._menu,"popper"),I.trigger(this._element,bd,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!s(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${Ml.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(yl===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let l=this._element;this._config.reference==="parent"?l=this._parent:s(this._config.reference)?l=a(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const _=this._getPopperConfig();this._popper=la(l,this._menu,_)}_isShown(){return this._menu.classList.contains(Mr)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return Dd;if(l.classList.contains("dropstart"))return Id;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const _=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?_?Ld:Cd:_?Ud:Pd}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ye.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...p(this._config.popperConfig,[l])}}_selectMenuItem({key:l,target:_}){const T=ne.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(B=>o(B));T.length&&w(T,_,l===Sl,!T.includes(_)).focus()}static jQueryInterface(l){return this.each(function(){const _=zn.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const _=ne.find(Rd);for(const T of _){const B=zn.getInstance(T);if(!B||B._config.autoClose===!1)continue;const k=l.composedPath(),K=k.includes(B._menu);if(k.includes(B._element)||B._config.autoClose==="inside"&&!K||B._config.autoClose==="outside"&&K||B._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const oe={relatedTarget:B._element};l.type==="click"&&(oe.clickEvent=l),B._completeHide(oe)}}static dataApiKeydownHandler(l){const _=/input|textarea/i.test(l.target.tagName),T=l.key==="Escape",B=[Sd,Sl].includes(l.key);if(!B&&!T||_&&!T)return;l.preventDefault();const k=this.matches(Gi)?this:ne.prev(this,Gi)[0]||ne.next(this,Gi)[0]||ne.findOne(Gi,l.delegateTarget.parentNode),K=zn.getOrCreateInstance(k);if(B)return l.stopPropagation(),K.show(),void K._selectMenuItem(l);K._isShown()&&(l.stopPropagation(),K.hide(),k.focus())}}I.on(document,bl,Gi,zn.dataApiKeydownHandler),I.on(document,bl,qs,zn.dataApiKeydownHandler),I.on(document,El,zn.clearMenus),I.on(document,wd,zn.clearMenus),I.on(document,El,Gi,function(y){y.preventDefault(),zn.getOrCreateInstance(this).toggle()}),x(zn);const Tl="backdrop",Al="show",wl=`mousedown.bs.${Tl}`,Fd={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Bd={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Rl extends ke{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return Fd}static get DefaultType(){return Bd}static get NAME(){return Tl}show(l){if(!this._config.isVisible)return void p(l);this._append();const _=this._getElement();this._config.isAnimated&&f(_),_.classList.add(Al),this._emulateAnimation(()=>{p(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(Al),this._emulateAnimation(()=>{this.dispose(),p(l)})):p(l)}dispose(){this._isAppended&&(I.off(this._element,wl),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=a(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),I.on(l,wl,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){m(l,this._getElement(),this._config.isAnimated)}}const Ys=".bs.focustrap",zd=`focusin${Ys}`,kd=`keydown.tab${Ys}`,Cl="backward",Hd={autofocus:!0,trapElement:null},Gd={autofocus:"boolean",trapElement:"element"};class Ll extends ke{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Hd}static get DefaultType(){return Gd}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),I.off(document,Ys),I.on(document,zd,l=>this._handleFocusin(l)),I.on(document,kd,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,I.off(document,Ys))}_handleFocusin(l){const{trapElement:_}=this._config;if(l.target===document||l.target===_||_.contains(l.target))return;const T=ne.focusableChildren(_);T.length===0?_.focus():this._lastTabNavDirection===Cl?T[T.length-1].focus():T[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?Cl:"forward")}}const Pl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ul=".sticky-top",$s="padding-right",Dl="margin-right";class ha{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,$s,_=>_+l),this._setElementAttributes(Pl,$s,_=>_+l),this._setElementAttributes(Ul,Dl,_=>_-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,$s),this._resetElementAttributes(Pl,$s),this._resetElementAttributes(Ul,Dl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,_,T){const B=this.getWidth();this._applyManipulationCallback(l,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+B)return;this._saveInitialAttribute(k,_);const K=window.getComputedStyle(k).getPropertyValue(_);k.style.setProperty(_,`${T(Number.parseFloat(K))}px`)})}_saveInitialAttribute(l,_){const T=l.style.getPropertyValue(_);T&&ye.setDataAttribute(l,_,T)}_resetElementAttributes(l,_){this._applyManipulationCallback(l,T=>{const B=ye.getDataAttribute(T,_);B!==null?(ye.removeDataAttribute(T,_),T.style.setProperty(_,B)):T.style.removeProperty(_)})}_applyManipulationCallback(l,_){if(s(l))_(l);else for(const T of ne.find(l,this._element))_(T)}}const Rn=".bs.modal",Vd=`hide${Rn}`,Wd=`hidePrevented${Rn}`,Il=`hidden${Rn}`,Nl=`show${Rn}`,Xd=`shown${Rn}`,qd=`resize${Rn}`,Yd=`click.dismiss${Rn}`,$d=`mousedown.dismiss${Rn}`,jd=`keydown.dismiss${Rn}`,Zd=`click${Rn}.data-api`,Ol="modal-open",Fl="show",fa="modal-static",Kd={backdrop:!0,focus:!0,keyboard:!0},Jd={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Vi extends Y{constructor(l,_){super(l,_),this._dialog=ne.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ha,this._addEventListeners()}static get Default(){return Kd}static get DefaultType(){return Jd}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||I.trigger(this._element,Nl,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ol),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(I.trigger(this._element,Vd).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Fl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){I.off(window,Rn),I.off(this._dialog,Rn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Rl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ll({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const _=ne.findOne(".modal-body",this._dialog);_&&(_.scrollTop=0),f(this._element),this._element.classList.add(Fl),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,I.trigger(this._element,Xd,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){I.on(this._element,jd,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),I.on(window,qd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),I.on(this._element,$d,l=>{I.one(this._element,Yd,_=>{this._element===l.target&&this._element===_.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ol),this._resetAdjustments(),this._scrollBar.reset(),I.trigger(this._element,Il)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(I.trigger(this._element,Wd).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,_=this._element.style.overflowY;_==="hidden"||this._element.classList.contains(fa)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(fa),this._queueCallback(()=>{this._element.classList.remove(fa),this._queueCallback(()=>{this._element.style.overflowY=_},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,_=this._scrollBar.getWidth(),T=_>0;if(T&&!l){const B=v()?"paddingLeft":"paddingRight";this._element.style[B]=`${_}px`}if(!T&&l){const B=v()?"paddingRight":"paddingLeft";this._element.style[B]=`${_}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,_){return this.each(function(){const T=Vi.getOrCreateInstance(this,l);if(typeof l=="string"){if(T[l]===void 0)throw new TypeError(`No method named "${l}"`);T[l](_)}})}}I.on(document,Zd,'[data-bs-toggle="modal"]',function(y){const l=ne.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&y.preventDefault(),I.one(l,Nl,T=>{T.defaultPrevented||I.one(l,Il,()=>{o(this)&&this.focus()})});const _=ne.findOne(".modal.show");_&&Vi.getInstance(_).hide(),Vi.getOrCreateInstance(l).toggle(this)}),Be(Vi),x(Vi);const li=".bs.offcanvas",Bl=".data-api",Qd=`load${li}${Bl}`,zl="show",kl="showing",Hl="hiding",Gl=".offcanvas.show",ep=`show${li}`,tp=`shown${li}`,np=`hide${li}`,Vl=`hidePrevented${li}`,Wl=`hidden${li}`,ip=`resize${li}`,rp=`click${li}${Bl}`,sp=`keydown.dismiss${li}`,op={backdrop:!0,keyboard:!0,scroll:!1},ap={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ui extends Y{constructor(l,_){super(l,_),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return op}static get DefaultType(){return ap}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||I.trigger(this._element,ep,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ha().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(kl),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(zl),this._element.classList.remove(kl),I.trigger(this._element,tp,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(I.trigger(this._element,np).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Hl),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(zl,Hl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ha().reset(),I.trigger(this._element,Wl)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new Rl({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():I.trigger(this._element,Vl)}:null})}_initializeFocusTrap(){return new Ll({trapElement:this._element})}_addEventListeners(){I.on(this._element,sp,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():I.trigger(this._element,Vl))})}static jQueryInterface(l){return this.each(function(){const _=ui.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}I.on(document,rp,'[data-bs-toggle="offcanvas"]',function(y){const l=ne.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&y.preventDefault(),c(this))return;I.one(l,Wl,()=>{o(this)&&this.focus()});const _=ne.findOne(Gl);_&&_!==l&&ui.getInstance(_).hide(),ui.getOrCreateInstance(l).toggle(this)}),I.on(window,Qd,()=>{for(const y of ne.find(Gl))ui.getOrCreateInstance(y).show()}),I.on(window,ip,()=>{for(const y of ne.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(y).position!=="fixed"&&ui.getOrCreateInstance(y).hide()}),Be(ui),x(ui);const Xl={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},cp=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),lp=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,up=(y,l)=>{const _=y.nodeName.toLowerCase();return l.includes(_)?!cp.has(_)||!!lp.test(y.nodeValue):l.filter(T=>T instanceof RegExp).some(T=>T.test(_))},hp={allowList:Xl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},fp={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},dp={entry:"(string|element|function|null)",selector:"(string|element)"};class pp extends ke{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return hp}static get DefaultType(){return fp}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[B,k]of Object.entries(this._config.content))this._setContent(l,k,B);const _=l.children[0],T=this._resolvePossibleFunction(this._config.extraClass);return T&&_.classList.add(...T.split(" ")),_}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[_,T]of Object.entries(l))super._typeCheckConfig({selector:_,entry:T},dp)}_setContent(l,_,T){const B=ne.findOne(T,l);B&&((_=this._resolvePossibleFunction(_))?s(_)?this._putElementInTemplate(a(_),B):this._config.html?B.innerHTML=this._maybeSanitize(_):B.textContent=_:B.remove())}_maybeSanitize(l){return this._config.sanitize?function(_,T,B){if(!_.length)return _;if(B&&typeof B=="function")return B(_);const k=new window.DOMParser().parseFromString(_,"text/html"),K=[].concat(...k.body.querySelectorAll("*"));for(const oe of K){const ge=oe.nodeName.toLowerCase();if(!Object.keys(T).includes(ge)){oe.remove();continue}const be=[].concat(...oe.attributes),we=[].concat(T["*"]||[],T[ge]||[]);for(const Se of be)up(Se,we)||oe.removeAttribute(Se.nodeName)}return k.body.innerHTML}(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return p(l,[this])}_putElementInTemplate(l,_){if(this._config.html)return _.innerHTML="",void _.append(l);_.textContent=l.textContent}}const mp=new Set(["sanitize","allowList","sanitizeFn"]),da="fade",js="show",ql=".modal",Yl="hide.bs.modal",cs="hover",pa="focus",gp={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},_p={allowList:Xl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},vp={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Wi extends Y{constructor(l,_){if(yl===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(l,_),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return _p}static get DefaultType(){return vp}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),I.off(this._element.closest(ql),Yl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=I.trigger(this._element,this.constructor.eventName("show")),_=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!_)return;this._disposePopper();const T=this._getTipElement();this._element.setAttribute("aria-describedby",T.getAttribute("id"));const{container:B}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(B.append(T),I.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(T),T.classList.add(js),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))I.on(k,"mouseover",h);this._queueCallback(()=>{I.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!I.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(js),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))I.off(l,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[pa]=!1,this._activeTrigger[cs]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),I.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const _=this._getTemplateFactory(l).toHtml();if(!_)return null;_.classList.remove(da,js),_.classList.add(`bs-${this.constructor.NAME}-auto`);const T=(B=>{do B+=Math.floor(1e6*Math.random());while(document.getElementById(B));return B})(this.constructor.NAME).toString();return _.setAttribute("id",T),this._isAnimated()&&_.classList.add(da),_}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new pp({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(da)}_isShown(){return this.tip&&this.tip.classList.contains(js)}_createPopper(l){const _=p(this._config.placement,[this,l,this._element]),T=gp[_.toUpperCase()];return la(this._element,l,this._getPopperConfig(T))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_resolvePossibleFunction(l){return p(l,[this._element])}_getPopperConfig(l){const _={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:T=>{this._getTipElement().setAttribute("data-popper-placement",T.state.placement)}}]};return{..._,...p(this._config.popperConfig,[_])}}_setListeners(){const l=this._config.trigger.split(" ");for(const _ of l)if(_==="click")I.on(this._element,this.constructor.eventName("click"),this._config.selector,T=>{this._initializeOnDelegatedTarget(T).toggle()});else if(_!=="manual"){const T=_===cs?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),B=_===cs?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");I.on(this._element,T,this._config.selector,k=>{const K=this._initializeOnDelegatedTarget(k);K._activeTrigger[k.type==="focusin"?pa:cs]=!0,K._enter()}),I.on(this._element,B,this._config.selector,k=>{const K=this._initializeOnDelegatedTarget(k);K._activeTrigger[k.type==="focusout"?pa:cs]=K._element.contains(k.relatedTarget),K._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},I.on(this._element.closest(ql),Yl,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,_){clearTimeout(this._timeout),this._timeout=setTimeout(l,_)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const _=ye.getDataAttributes(this._element);for(const T of Object.keys(_))mp.has(T)&&delete _[T];return l={..._,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:a(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[_,T]of Object.entries(this._config))this.constructor.Default[_]!==T&&(l[_]=T);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const _=Wi.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}}x(Wi);const xp={...Wi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},yp={...Wi.DefaultType,content:"(null|string|element|function)"};class Zs extends Wi{static get Default(){return xp}static get DefaultType(){return yp}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const _=Zs.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}}x(Zs);const ma=".bs.scrollspy",Mp=`activate${ma}`,$l=`click${ma}`,Sp=`load${ma}.data-api`,Sr="active",ga="[href]",jl=".nav-link",Ep=`${jl}, .nav-item > ${jl}, .list-group-item`,bp={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Tp={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ls extends Y{constructor(l,_){super(l,_),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return bp}static get DefaultType(){return Tp}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=a(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(_=>Number.parseFloat(_))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(I.off(this._config.target,$l),I.on(this._config.target,$l,ga,l=>{const _=this._observableSections.get(l.target.hash);if(_){l.preventDefault();const T=this._rootElement||window,B=_.offsetTop-this._element.offsetTop;if(T.scrollTo)return void T.scrollTo({top:B,behavior:"smooth"});T.scrollTop=B}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(_=>this._observerCallback(_),l)}_observerCallback(l){const _=K=>this._targetLinks.get(`#${K.target.id}`),T=K=>{this._previousScrollData.visibleEntryTop=K.target.offsetTop,this._process(_(K))},B=(this._rootElement||document.documentElement).scrollTop,k=B>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=B;for(const K of l){if(!K.isIntersecting){this._activeTarget=null,this._clearActiveClass(_(K));continue}const oe=K.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&oe){if(T(K),!B)return}else k||oe||T(K)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=ne.find(ga,this._config.target);for(const _ of l){if(!_.hash||c(_))continue;const T=ne.findOne(decodeURI(_.hash),this._element);o(T)&&(this._targetLinks.set(decodeURI(_.hash),_),this._observableSections.set(_.hash,T))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(Sr),this._activateParents(l),I.trigger(this._element,Mp,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))ne.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(Sr);else for(const _ of ne.parents(l,".nav, .list-group"))for(const T of ne.prev(_,Ep))T.classList.add(Sr)}_clearActiveClass(l){l.classList.remove(Sr);const _=ne.find(`${ga}.${Sr}`,l);for(const T of _)T.classList.remove(Sr)}static jQueryInterface(l){return this.each(function(){const _=ls.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}I.on(window,Sp,()=>{for(const y of ne.find('[data-bs-spy="scroll"]'))ls.getOrCreateInstance(y)}),x(ls);const Xi=".bs.tab",Ap=`hide${Xi}`,wp=`hidden${Xi}`,Rp=`show${Xi}`,Cp=`shown${Xi}`,Lp=`click${Xi}`,Pp=`keydown${Xi}`,Up=`load${Xi}`,Dp="ArrowLeft",Zl="ArrowRight",Ip="ArrowUp",Kl="ArrowDown",_a="Home",Jl="End",qi="active",Ql="fade",va="show",eu=".dropdown-toggle",xa=`:not(${eu})`,tu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ya=`.nav-link${xa}, .list-group-item${xa}, [role="tab"]${xa}, ${tu}`,Np=`.${qi}[data-bs-toggle="tab"], .${qi}[data-bs-toggle="pill"], .${qi}[data-bs-toggle="list"]`;class Yi extends Y{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),I.on(this._element,Pp,_=>this._keydown(_)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const _=this._getActiveElem(),T=_?I.trigger(_,Ap,{relatedTarget:l}):null;I.trigger(l,Rp,{relatedTarget:_}).defaultPrevented||T&&T.defaultPrevented||(this._deactivate(_,l),this._activate(l,_))}_activate(l,_){l&&(l.classList.add(qi),this._activate(ne.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),I.trigger(l,Cp,{relatedTarget:_})):l.classList.add(va)},l,l.classList.contains(Ql)))}_deactivate(l,_){l&&(l.classList.remove(qi),l.blur(),this._deactivate(ne.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),I.trigger(l,wp,{relatedTarget:_})):l.classList.remove(va)},l,l.classList.contains(Ql)))}_keydown(l){if(![Dp,Zl,Ip,Kl,_a,Jl].includes(l.key))return;l.stopPropagation(),l.preventDefault();const _=this._getChildren().filter(B=>!c(B));let T;if([_a,Jl].includes(l.key))T=_[l.key===_a?0:_.length-1];else{const B=[Zl,Kl].includes(l.key);T=w(_,l.target,B,!0)}T&&(T.focus({preventScroll:!0}),Yi.getOrCreateInstance(T).show())}_getChildren(){return ne.find(ya,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,_){this._setAttributeIfNotExists(l,"role","tablist");for(const T of _)this._setInitialAttributesOnChild(T)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const _=this._elemIsActive(l),T=this._getOuterElement(l);l.setAttribute("aria-selected",_),T!==l&&this._setAttributeIfNotExists(T,"role","presentation"),_||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const _=ne.getElementFromSelector(l);_&&(this._setAttributeIfNotExists(_,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(_,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,_){const T=this._getOuterElement(l);if(!T.classList.contains("dropdown"))return;const B=(k,K)=>{const oe=ne.findOne(k,T);oe&&oe.classList.toggle(K,_)};B(eu,qi),B(".dropdown-menu",va),T.setAttribute("aria-expanded",_)}_setAttributeIfNotExists(l,_,T){l.hasAttribute(_)||l.setAttribute(_,T)}_elemIsActive(l){return l.classList.contains(qi)}_getInnerElement(l){return l.matches(ya)?l:ne.findOne(ya,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const _=Yi.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}I.on(document,Lp,tu,function(y){["A","AREA"].includes(this.tagName)&&y.preventDefault(),c(this)||Yi.getOrCreateInstance(this).show()}),I.on(window,Up,()=>{for(const y of ne.find(Np))Yi.getOrCreateInstance(y)}),x(Yi);const Si=".bs.toast",Op=`mouseover${Si}`,Fp=`mouseout${Si}`,Bp=`focusin${Si}`,zp=`focusout${Si}`,kp=`hide${Si}`,Hp=`hidden${Si}`,Gp=`show${Si}`,Vp=`shown${Si}`,nu="hide",Ks="show",Js="showing",Wp={animation:"boolean",autohide:"boolean",delay:"number"},Xp={animation:!0,autohide:!0,delay:5e3};class us extends Y{constructor(l,_){super(l,_),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Xp}static get DefaultType(){return Wp}static get NAME(){return"toast"}show(){I.trigger(this._element,Gp).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(nu),f(this._element),this._element.classList.add(Ks,Js),this._queueCallback(()=>{this._element.classList.remove(Js),I.trigger(this._element,Vp),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(I.trigger(this._element,kp).defaultPrevented||(this._element.classList.add(Js),this._queueCallback(()=>{this._element.classList.add(nu),this._element.classList.remove(Js,Ks),I.trigger(this._element,Hp)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ks),super.dispose()}isShown(){return this._element.classList.contains(Ks)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,_){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=_;break;case"focusin":case"focusout":this._hasKeyboardInteraction=_}if(_)return void this._clearTimeout();const T=l.relatedTarget;this._element===T||this._element.contains(T)||this._maybeScheduleHide()}_setListeners(){I.on(this._element,Op,l=>this._onInteraction(l,!0)),I.on(this._element,Fp,l=>this._onInteraction(l,!1)),I.on(this._element,Bp,l=>this._onInteraction(l,!0)),I.on(this._element,zp,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const _=us.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l](this)}})}}return Be(us),x(us),{Alert:Oe,Button:Ct,Carousel:_e,Collapse:oi,Dropdown:zn,Modal:Vi,Offcanvas:ui,Popover:Zs,ScrollSpy:ls,Tab:Yi,Toast:us,Tooltip:Wi}});const ws=[0,1,0],Rs=[0,0,1];function Xr(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}function im(i,e,t,n){return i*n*n+e*n+t}function lc(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Cs(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function uc(i){return Math.round(i*1e6)/1e6}function rm(i){return i*Math.PI/180}function sm(i){return i*180/Math.PI}function hc(i){const e=Math.sqrt(i.reduce((t,n)=>t+n*n,0));return i.map(t=>t/e)}function om(i){const[e,t,n,r,s,a,o,c,u]=i,h=(e+s+u-1)/2,[f,d]=function(){const g=uc(h);if(g===0)return[90,1];if(g===1)return[0,0];if(g===-1)return[180,0];const v=Math.acos(g);return[sm(v),Math.sin(v)]}();if(d!==0){const g=c-a,v=n-o,x=r-t;return[hc([g,v,x]),f]}else{const g=[[e+1,t,n],[t,s+1,a],[n,a,u+1]].find(v=>v.some(x=>x!==0))||[0,0,0];return[hc(g),f]}}function mu(i){const[e,t,n,r]=[...hc(i[0]),i[1]%360],[s,a]=function(){if(r===0)return[1,0];if(r===180)return[-1,0];if(r===90)return[0,1];const c=rm(r);return[Math.cos(c),Math.sin(c)]}(),o=1-s;return[e*e*o+s,e*t*o-n*a,e*n*o+t*a,t*e*o+n*a,t*t*o+s,t*n*o-e*a,n*e*o-t*a,n*t*o+e*a,n*n*o+s]}function gu(i,e,t){let n=lc(i,e);if(n>0)return[1,0,0,0,1,0,0,0,1];if(n<0){if(lc(i,t)!==0)throw new Error("ref axis must be orthogonal to v1");return mu([t,180])}return mu([Cs(i,e),90])}function am(i,e){const[t,n,r,s,a,o,c,u,h]=i,[f,d,g,v,x,p,m,w,S]=e;return[t*f+n*v+r*m,t*d+n*x+r*w,t*g+n*p+r*S,s*f+a*v+o*m,s*d+a*x+o*w,s*g+a*p+o*S,c*f+u*v+h*m,c*d+u*x+h*w,c*g+u*p+h*S]}function cm(i,e){const[t,n,r,s,a,o,c,u,h]=i,[f,d,g]=e;return[t*f+n*d+r*g,s*f+a*d+o*g,c*f+u*d+h*g]}function lm(i,e,t,n){const r=gu(i,t,e),s=cm(r,e),a=gu(s,n,lc(s,i)===0?i:e),o=am(a,r);return om(o)}function um(i,e,t,n){const r=lm(ws,Rs,i,e);r[1]=-r[1];const[s,a,o]=t.map(p=>p===0?-1:p===n-1?1:0),[c,u,h]=r[0],f=[s*c,a*u,o*h];f.filter(p=>p<0).length>f.filter(p=>p>0).length&&(r[0]=r[0].map(p=>p===0?0:-p),r[1]=-r[1]);const[d,g,v]=r[0],x=d!==0?1/Math.abs(d):g!==0?1/Math.abs(g):v!==0?1/Math.abs(v):1;return r[0]=r[0].map(p=>uc(p*x)),r[1]=uc(r[1]),r[1]===-180&&(r[1]=180),r}function ba(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,c=a===0?1:a===180?-1:0,h=[[1,0,0,0,c,-o,0,o,c],[c,0,o,0,1,0,-o,0,c],[c,-o,0,o,c,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function _u(i,e,t){const[n,r,s]=t;if(r===1)return i;if(s===1)return e;if(n===-1)return Cs(e,i);if(n===1)return Cs(i,e);if(s===-1)return e.map(a=>-a);if(r===-1)return i.map(a=>-a);throw new Error("unreachable")}function no(i){const[e,t,n,r]=i;return[e,-t,n,r]}function vu(i,e){const t={R:[0,-90,-1],L:[0,90,1],U:[1,-90,-1],D:[1,90,1],F:[2,-90,-1],B:[2,90,1],M:[0,90,2],E:[1,90,2],S:[2,-90,2],x:[0,-90,0],y:[1,-90,0],z:[2,-90,0]},n=i.match(/^([0-9]+)?(-([0-9]+))?([A-Za-z])(w?)([0-9]+)?(')?$/);if(!n)throw`parse op [${i}] error`;let r=n[4],s=!1;(n[5]==="w"||"rludbfmes".indexOf(r)>=0)&&(r=r.toUpperCase(),s=!0);let a=0,o=1,c=n[1],u=n[3];u?(a=parseInt(c||"1")-1,o=parseInt(u)):s?(a=0,o=parseInt(c||"2")):(a=parseInt(c||"1")-1,o=a+1);const[h,f,d]=t[r],g=n[7]?-1:1,v=n[6]?parseInt(n[6]):1,x=f*g*v;let p=0,m=0;switch(d){case 1:p=a,m=o;break;case-1:m=e-a,p=e-o;break;case 0:p=0,m=e;break;case 2:{const w=s?e-2:1,S=(e-w)%2===1?w+1:w;p=(e-S)/2,m=p+S;break}}return[h,x,p,m]}function fc(i,e){try{return No(i,e)}catch{return i=i.replace(/([rludfbxyzmes])/ig," $1"),No(i,e)}}function No(i,e){let t=0,n=0;const r=[];for(;;){if(i[n]===" "||n>=i.length){const s=i.slice(t,n).trim();if(s.length>0&&r.push(vu(s,e)),n>=i.length)break;n++,t=n;continue}if(i[n]===","||i[n]===":"){const s=i.slice(t,n).trim();s.length>0&&r.push(vu(s,e));const a=No(i.slice(n+1),e);return i[n]===","?[...r,...a,...r.reverse().map(no),...a.reverse().map(no)]:[...r,...a,...r.reverse().map(no)]}if(i[n]==="["||i[n]==="("){const s=i[n],a=i[n]==="["?"]":")";let o=1,c=n+1;for(;c<i.length&&(i[c]===s&&o++,i[c]===a&&o--,o!==0);)c++;let u=No(i.slice(n+1,c),e);c++,c<i.length&&i[c]=="'"&&(c++,u=u.reverse().map(no));let h=1;if(c<i.length){let f=c;for(;f<i.length&&i[f]>="0"&&i[f]<="9";)f++;f>c&&(h=parseInt(i.slice(c,f))),c=f}for(let f=0;f<h;f++)r.push(...u);n=c,t=n;continue}n++}return r}function Vr(i,e){return e.map(t=>t.opType==="commutator"?`(${Vr(i,t.child1)}, ${Vr(i,t.child2)})`:t.opType==="conjugate"?`(${Vr(i,t.child1)}: ${Vr(i,t.child2)})`:t.opType==="repeat"?`(${Vr(i,t.child1)})${t.data}`:lf(i,...t.op)).join(" ")}function Ls(i){let e=0;for(const t of i)t.opType!=="simple"?(e+=Ls(t.child1),e+=Ls(t.child2)):e++;return e}function of(i,e){return i[0]===e[0]&&(i[1]+e[1])%360===0&&i[2]===e[2]&&i[3]===e[3]}function io(i,e,t,n,r){for(let s=0;s<r;s++)if(!of(i[e+s],t[n+r-1-s]))return!1;return!0}function af(i,e){for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function cf(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(!af(i[t],e[t]))return!1;return!0}function xu(i){const e=[...i];return i[1]!==180&&(e[1]=-i[1]),e}function hm(i,e){if(i.length%2===0){if(io(i,0,i,i.length/2,e)&&io(i,e,i,i.length/2+e,i.length/2-e))return[!0]}else if(i.length>=7){const t=(i.length+1)/2;if(io(i,0,i,t-1,e-1)&&io(i,e-1,i,t-1+e,t-e))return[!0,i[t-1+e-1]]}return[!1]}function fm(i,e){if(i.length%e!==0||e===1||e>i.length/2)return!1;const t=i.length/e;for(let n=0;n<e;n++){const r=i[n];for(let s=1;s<t;s++){const a=i[s*e+n];if(!af(r,a))return!1}}return!0}function dm(i){let e=0;for(;e<(i.length-1)/2&&of(i[e],i[i.length-1-e]);e++);return e}function _i(i,e,t){if(e>i.maxDepth&&(i.maxDepth=e),t.length<=3||e>i.depthLimit)return t.map(o=>({opType:"simple",child1:[],child2:[],op:o,data:0}));const n=[];for(let o=2;o<=t.length/2;o++)fm(t,o)&&n.push([{opType:"repeat",child1:_i(i,e+1,t.slice(0,o)),child2:[],op:[0,0,0,0],data:t.length/o}]);for(let o=1;o<t.length/2;o++){const[c,u,h]=hm(t,o);if(c){let f=t;u&&(f=[xu(u),...f]),h&&(f=[...f,xu(h)]);const d=[];u&&d.push({opType:"simple",child1:[],child2:[],op:u,data:0}),d.push({opType:"commutator",child1:_i(i,e+1,f.slice(0,o)),child2:_i(i,e+1,f.slice(o,f.length/2)),op:[0,0,0,0],data:0}),h&&d.push({opType:"simple",child1:[],child2:[],op:h,data:0}),n.push(d)}}let r=dm(t);r>1&&e===1&&n.push([{opType:"conjugate",child1:_i(i,e+1,t.slice(0,r)),child2:_i(i,e+1,t.slice(r,t.length-r)),op:[0,0,0,0],data:0}]);for(let o=1;o<t.length;o++)n.push([..._i(i,e+1,t.slice(0,t.length-o)),..._i(i,e+1,t.slice(t.length-o))]);e===1&&console.log("co-candidates",n);let s=-1,a=[];for(const o of n){const c=[];let u=0,h=0;for(h=0;h<o.length;h++)if(o[h].opType!=="simple"){if(u<h){const d=o.slice(u,h).map(v=>v.op),g=Oo(i.n,d);c.push(...g.map(v=>({opType:"simple",child1:[],child2:[],op:v,data:0})))}u=h+1,c.push(o[h])}if(u<h){const d=o.slice(u,h).map(g=>g.op);Oo(i.n,d),c.push(...d.map(g=>({opType:"simple",child1:[],child2:[],op:g,data:0})))}const f=Ls(c);(s===-1||f<s)&&(s=f,a=c)}return a}function pm(i,e,t){let n={depthLimit:e,maxDepth:0,n:i},r=_i(n,1,t);const s=Oo(i,t);if(!cf(t,s)){const a=Ls(r),o={depthLimit:e,maxDepth:0,n:i},c=_i(o,1,s);Ls(c)<a&&(r=c,n=o)}return{alg:Vr(i,r),complete:n.maxDepth<=e}}function Oo(i,e){const t=n=>{const r=[],s=n[0][0];let a=-1,o=0;for(let c=0;c<i;c++){let u=0;for(const h of n){const[f,d,g,v]=h;c>=g&&c<v&&(u+=d)}u!==o&&(a>=0&&o!==0&&r.push([s,o,a,c]),a=c,o=u)}return a>=0&&o!==0&&r.push([s,o,a,i]),r};for(;;){const n=[];for(let r=0;r<e.length;){const s=e[r][0];let a=r+1;for(;a<e.length&&e[a][0]===s;a++);a===r+1?n.push(e[r]):n.push(...t(e.slice(r,a))),r=a}if(cf(e,n))return n;e=n}}function lf(i,e,t,n,r){const s=(t/90%4+4)%4-2,a=c=>c===0?"2":c===1?"'":"";if(n===0&&r===i)return"xyz"[e].toLowerCase()+a(-s);const o="MES"[e];if(n*2===i-1&&r===n+1)return o+a(o==="S"?-s:s);if(n===1&&r===i-1)return o.toLowerCase()+a(o==="S"?-s:s);if(n+r>=i){const c="RUF"[e],u=i-r,h=i-n;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+c+a(-s)}else{const c="LDB"[e],u=n,h=r;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+c+a(s)}}function dc(i,e){const t=[];for(const n of e){const[r,s,a,o]=n;s!==0&&t.push(lf(i,r,s,a,o))}return t.join(" ")}function mm(i,e,t){let{position:n,T:r,F:s}=i;for(const[a,o,c,u]of e)if(n[a]>=c&&n[a]<u){const[h,f,d]=n;s=ba(s,a,o),r=ba(r,a,o);const g=(t-1)/2,[v,x,p]=ba([h-g,f-g,d-g],a,o);n=[v+g,x+g,p+g]}return{position:n,T:r,F:s}}function pc(i,e){const t=Kr(e,i);if(t.length===3){const[n,r,s]=t.map(c=>c.face),a=["U","F","R","L","B","D"],o=(c,u,h)=>c+a.filter(f=>f===u||f===h).join("");return[o(n,r,s),o(r,s,n),o(s,n,r)]}else if(t.length===2){const[n,r]=t,s=(a,o)=>{const c=n.a===0||n.a===i-1?n.b:n.a;return a.face+o.face+(c*2===i-1?"":c+1)};return[s(n,r),s(r,n)]}else{const n=t[0],r=`${n.a+1}`,s=`${n.b+1}`,a=r.length+s.length===2?"":"-";return[n.face+r+a+s]}}function gm(i){let e=ws,t=Rs;for(let n=1;;n++){for(const r of i)e=_u(r.nT,r.nF,e),t=_u(r.nT,r.nF,t);if(Xr(e,ws)&&Xr(t,Rs))return n}}function _m(i){const e=(r,s)=>{for(;s;){const a=s;s=r%s,r=a}return r},t=(r,s)=>r*s/e(r,s);let n=1;for(const r of i){const s=gm(r);n=t(n,s*r.length)}return n}function vm(i,e){const t=fc(i,e);return dc(e,t)}function uf(i,e=3,t=!1,n=""){const r=fc(i,e),a=[...fc(n,e),...r],o={},c=[],u=(h,f,d)=>{if(h*e*e+f*e+d in o)return;let v={position:[h,f,d],T:ws,F:Rs};const x=[];for(;;){let p=mm(v,a,e);if(o[im(...p.position,e)]=!0,!Xr(p.position,v.position)||!Xr(p.T,v.T)||!Xr(p.F,v.F)){const m=um(p.T,p.F,v.position,e);x.push({p1:v.position,p2:p.position,nT:p.T,nF:p.F,rotation:m})}if(Xr(p.position,[h,f,d]))break;v={position:p.position,T:ws,F:Rs}}x.length>0&&c.push(x)};if(t)for(let h=0;h<e;h++)for(let f=0;f<e;f++)for(let d=0;d<e;d++)u(h,f,d);else{for(let h=0;h<e;h++)for(let f=0;f<e;f++)u(h,f,0),u(h,f,e-1);for(let h=0;h<e;h++)for(let f=1;f<e-1;f++)u(h,0,f),u(h,e-1,f);for(let h=1;h<e-1;h++)for(let f=1;f<e-1;f++)u(0,h,f),u(e-1,h,f)}return{N:e,alg:i,regulatedAlg:dc(e,r),simplifiedAlg:dc(e,Oo(e,r)),ops:r,cycles:c.map(h=>h.map(f=>f.p1)).filter(h=>h.length>1),rotates:c.filter(h=>h.length===1).map(h=>({unit:{position:h[0].p1,T:h[0].nT,F:h[0].nF},degree:h[0].rotation[1]})),permutations:c,order:_m(c),getAllFacesColors:function(){return Mm(this)}}}function Kr(i,e){const[t,n,r]=i,s=[];return n===e-1&&s.push({face:"U",a:t,b:r}),r===e-1&&s.push({face:"F",a:t,b:e-1-n}),t===e-1&&s.push({face:"R",a:e-1-r,b:e-1-n}),t===0&&s.push({face:"L",a:r,b:e-1-n}),n===0&&s.push({face:"D",a:t,b:e-1-r}),r===0&&s.push({face:"B",a:e-1-t,b:e-1-n}),s}function xm(i,e){const{face:t,a:n,b:r}=i;switch(t){case"U":return[n,e-1,r];case"F":return[n,e-1-r,e-1];case"R":return[e-1,e-1-r,e-1-n];case"B":return[e-1-n,e-1-r,0];case"L":return[0,e-1-r,n];case"D":return[n,0,e-1-r]}}function Nc(i,e){const t=(o,c,u=["U","F","R","L","B","D"])=>{if(o.length===0)return u;const h={U:0,D:0,F:0,B:0,L:0,R:0};for(const d of o)for(const g of Kr(d,c))h[g.face]++;const f=[...u].sort((d,g)=>h[g]-h[d])[0];return[f,...t(o.filter(d=>Kr(d,c).every(g=>g.face!==f)),c,u.filter(d=>d!==f))]},n=(o,c)=>{for(const u of c)for(const h of o)if(h.face===u)return h;throw new Error("unreachable")},r=(o,c,u)=>{const h=n(Kr(o,c),u),f=pc(c,o).find(d=>d[0]===h.face);return{point:o,facePoint:h,name:f}},s=t(i.map(o=>o.map(c=>c.p1)).flat(),e),a=[];for(const o of i){const c=t(o.map(u=>u.p1),e,[...s]);a.push(o.map(u=>({...u,p1:r(u.p1,e,c),p2:r(u.p2,e,c)})))}return a}function Oc(i){return{U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]}[i]}function ym(i){const[e,t,n]=i;if(e===-1)return"L";if(e===1)return"R";if(t===-1)return"D";if(t===1)return"U";if(n===-1)return"B";if(n===1)return"F";throw new Error("unreachable")}function Mm(i){const e={U:[],F:[],R:[],L:[],D:[],B:[]},t=(n,r,s)=>{let a=[0,0,0];switch(s){case"U":a=n;break;case"F":a=r;break;case"L":a=Cs(r,n);break;case"R":a=Cs(n,r);break;case"B":a=r.map(c=>-c);break;case"D":a=n.map(c=>-c);break}return ym(a)};for(const n of i.permutations)for(const r of n){const s=Kr(r.p1,i.N),a=Kr(r.p2,i.N);for(const o of s){const c=t(r.nT,r.nF,o.face);if(c!==o.face){const u=a.find(h=>h.face===c);e[u.face].push({a:u.a,b:u.b,color:o.face})}}}return e}function Sm(i,e,t,n,r,s,a){const o=i.createLinearGradient(e,t,n,r);o.addColorStop(0,"rgba(255, 255, 255, 0)"),o.addColorStop(.1,s),o.addColorStop(1,s),i.strokeStyle=o;var c=n-e,u=r-t,h=Math.atan2(u,c);i.moveTo(e,t),i.lineTo(n,r),i.lineTo(n-a*Math.cos(h-Math.PI/6),r-a*Math.sin(h-Math.PI/6)),i.moveTo(n,r),i.lineTo(n-a*Math.cos(h+Math.PI/6),r-a*Math.sin(h+Math.PI/6))}function ro(i,e,t,n,r){i.moveTo(e,t),i.lineTo(e-r*Math.cos(n-Math.PI/6),t-r*Math.sin(n-Math.PI/6)),i.moveTo(e,t),i.lineTo(e-r*Math.cos(n+Math.PI/6),t-r*Math.sin(n+Math.PI/6))}function Em(i,e,t,n,r,s){const a=i.createLinearGradient(e,t-s,e,t+s);a.addColorStop(0,"rgba(255, 255, 255, 0)"),a.addColorStop(.2,r),a.addColorStop(1,r),i.strokeStyle=r;const o=s/2;n===180?(i.beginPath(),i.arc(e,t,s,-Math.PI*.3,Math.PI*.5,!1),ro(i,e,t+s,-Math.PI*1.1,o),i.stroke(),i.beginPath(),i.arc(e,t,s,Math.PI*.7,Math.PI*1.5,!1),ro(i,e,t-s,-Math.PI*.1,o),i.stroke()):n>0?(i.arc(e,t,s,-Math.PI/2,Math.PI,!1),ro(i,e-s,t,-Math.PI*.6,o)):n<0&&(i.arc(e,t,s,-Math.PI/2,0,!0),ro(i,e+s,t,-Math.PI*.4,o))}class hf{constructor(){un(this,"palette",["rgb(0, 0, 255)","rgb(255, 0, 0)","rgb(0, 128, 0)","rgb(255, 0, 255)","rgb(0, 128, 255)","rgb(255, 128, 0)","rgb(255, 128, 128)","rgb(255, 64, 192)","rgb(128, 128, 192)","rgb(240, 192, 57)","#3f6fbc","#ae7dbe","#d23d9e","#589cd1"]);un(this,"index",0)}nextColor(){const e=this.palette[this.index];return this.index=(this.index+1)%this.palette.length,e}}function bm(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Tm(i){const e=Math.sqrt(bm(i,i));return e===0?i:i.map(t=>t/e)}function Am(i,e){return i.map(t=>t*e)}function wm(i,e){return i.map((t,n)=>t+e[n])}function ff(i,e){return i.map((t,n)=>t-e[n])}function Rm(i){const e=~~i.clientWidth,t=~~i.clientHeight,n=2;return i.width!==e*n||i.height!==t*n?(i.width=e*n,i.height=t*n,!0):!1}function df(i){for(;i.firstChild;)i.removeChild(i.lastChild)}function yu(...i){const e=[];for(let t=0;t+1<i.length;t+=2){const n=i[t].startsWith("*")?i[t].slice(1):i[t],r=!!i[t].startsWith("*"),s=i[t+1],a=document.createElement("span");a.style.color=n,r&&(a.style.fontWeight="700"),a.append(s),e.push(a)}return e}function Dn(i,e,t){const n=document.createElement(i);return e&&n.classList.add(...e.split(" ")),t&&(n.style.cssText=t),n}function dn(i,e){return Dn("div",i,e)}function en(i,e,t="",n="btn btn-outline-secondary"){const r=Dn("button",n);return r.textContent=i,t&&(r.title=t),r.onclick=e,r}function Cm(i,e,t){return`hsl(${(r=>{let s=9;for(let a=0;a<r.length;)s=Math.imul(s^r.charCodeAt(a++),387420489);return s^s>>>9})(i)%360}, ${e}%, ${t}%)`}function Lm(i,e,t){const n=i.parentElement,r=dn(e,t),s=i.style.display;return n.insertBefore(r,i),i.style.display="none",[r,()=>{r.remove(),i.style.display=s}]}function Pm(i,e){const t=i.indexOf(e);return i[(t+1)%i.length]}function Um(i,e=0){const t=i.getImageData(0,0,i.canvas.width,i.canvas.height),{width:n,height:r}=i.canvas;let s=r,a=0,o=n,c=0;for(let u=0;u<r;u++){let h=!0;for(let f=0;f<n;f++){const d=(u*n+f)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){s=u;break}}for(let u=r-1;u>=0;u--){let h=!0;for(let f=0;f<n;f++){const d=(u*n+f)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){a=u+1;break}}for(let u=0;u<n;u++){let h=!0;for(let f=0;f<r;f++){const d=(f*n+u)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){o=u;break}}for(let u=n-1;u>=0;u--){let h=!0;for(let f=0;f<r;f++){const d=(f*n+u)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){c=u+1;break}}return s=Math.max(0,s-e),a=Math.min(r,a+e),o=Math.max(0,o-e),c=Math.min(n,c+e),{top:s,bottom:a,left:o,right:c}}function Dm(i,e=0){const t=i.canvas,n=t.width,r=t.height,s=new Uint8Array(n*r*4);i.readPixels(0,0,n,r,i.RGBA,i.UNSIGNED_BYTE,s);let a=r,o=0,c=n,u=0;for(let h=0;h<r;h++){let f=!0;for(let d=0;d<n;d++){const g=(h*n+d)*4;if(s[g+3]>0){f=!1;break}}if(!f){a=h;break}}for(let h=r-1;h>=0;h--){let f=!0;for(let d=0;d<n;d++){const g=(h*n+d)*4;if(s[g+3]>0){f=!1;break}}if(!f){o=h+1;break}}for(let h=0;h<n;h++){let f=!0;for(let d=0;d<r;d++){const g=(d*n+h)*4;if(s[g+3]>0){f=!1;break}}if(!f){c=h;break}}for(let h=n-1;h>=0;h--){let f=!0;for(let d=0;d<r;d++){const g=(d*n+h)*4;if(s[g+3]>0){f=!1;break}}if(!f){u=h+1;break}}return a=Math.max(0,a-e),o=Math.min(r,o+e),c=Math.max(0,c-e),u=Math.min(n,u+e),{top:a,bottom:o,left:c,right:u}}function Im(i,e,t,n,r){const s=document.createElement("canvas");return s.width=r-n,s.height=t-e,s.getContext("2d").drawImage(i.canvas,n,e,r-n,t-e,0,0,r-n,t-e),s.toDataURL("image/png")}function Nm(i,e,t,n,r){const s=r-n,a=t-e,o=new Uint8Array(s*a*4);i.readPixels(n,e,s,a,i.RGBA,i.UNSIGNED_BYTE,o);const c=new Uint8Array(s*a*4);for(let d=0;d<a;d++){const g=d*s*4,v=(a-d-1)*s*4;c.set(o.subarray(g,g+s*4),v)}for(let d=0;d<c.length;d+=4){const g=c[d+3]/255;g>0&&(c[d]=c[d]/g,c[d+1]=c[d+1]/g,c[d+2]=c[d+2]/g)}const u=document.createElement("canvas");u.width=s,u.height=a;const h=u.getContext("2d"),f=new ImageData(new Uint8ClampedArray(c),s,a);return h.putImageData(f,0,0),u.toDataURL("image/png")}function Om(i,e,t=!1){let n="";if(t){const{top:r,bottom:s,left:a,right:o}=Um(i);n=Im(i,r,s,a,o)}else n=i.canvas.toDataURL("image/png");pf(n,e)}function Fm(i,e,t=!1){let n="";if(t){const{top:r,bottom:s,left:a,right:o}=Dm(i);n=Nm(i,r,s,a,o)}else n=i.canvas.toDataURL("image/png");pf(n,e)}function pf(i,e){const t=document.createElement("a");t.href=i,t.download=e,t.click()}const Bm=[{name:"c3s",algorithm:"iL iF jD iF' U iF jD' iF' U' iL'",tags:["atom"],desc:"3-cycle on single face centers",validateParam:(i,e)=>{i<4&&(i=4);const t=so(e[0]||0,2,~~(i/2)),n=so(e[1]||0,2,~~((i+1)/2));return{n:i,param:[t,n]}}},{name:"SwapEdge",algorithm:"iR2 B2 U2 iL U2 iR' U2 iR U2 F2 iR F2 iL' B2 iR2",tags:["atom"],validateParam:(i,e)=>{i<4&&(i=4);const t=so(e[0]||0,2,1/0);return{n:i,param:[t]}}},{name:"SwapEdge2",algorithm:"iB2 D' iR' U' iU iR U' iR U iR iU' iR' iU iR U iR U' iR U' iU' iR' U2 D iB2",tags:["atom"],validateParam:(i,e)=>{i<4&&(i=4);const t=so(e[0]||0,2,1/0);return{n:i,param:[t]}}},{name:"SwapEdge4x4x4",algorithm:"2R' U' 2U 2R U' 2R U 2R 2U' 2R' 2U 2R U 2R U' 2R 1-2U' 2R' U2",tags:["atom"],validateParam:(i,e)=>({n:4,param:[]})}],zm=`
[atom]
c3: U' iF jD iF' U iF jD' iF' // General 3 cycle: rotate centers if (i, j) is the center location
Swap corner (ETR): (1-hR U L U' 1-hR' U L' U' F)9
Spin Corner: R U R' U' R U R' U' D U R U' R' U R U' R' D'
Flip Edge: R' E' R2 E2 R' U R E2 R2 E R U'
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

`,hs=[];function mc(){var e,t;if(hs.length!==0)return hs;hs.push(...Bm);let i=[];for(const n of zm.split(/\n/g)){const r=n.match(/^\[(.*)\]$/);if(r){i=r[1].split(",").map(a=>a.trim());continue}const s=n.match(/^(\[([^)]+)\])?\s*([^:]+)\s*:\s*(.*)$/);if(s){const a=((e=s[2])==null?void 0:e.split(",").map(u=>u.trim()))||[],o=s[3],c=s[4].split("//");hs.push({name:o,algorithm:c[0].trim(),tags:[...i,...a],desc:(t=c[1])==null?void 0:t.trim()})}}return hs}function Fc(i){const e=[];for(const t of i)t.match(/[a-z]/i)&&!t.match(/[xyzMESmesLRFBUDlrfbudhw]/)&&e.indexOf(t)<0&&e.push(t);return e}function km(i,e){const t=Fc(i);for(let n=0;n<t.length&&n<e.length;n++)i=i.replaceAll(t[n],e[n]);return i}function Mu(i,e,t){if(i.startsWith(e)){const n=i.indexOf(t,e.length);if(n>=0)return i.slice(e.length,n)}}function mf(i,e,t){for(let s="";s!==i;){s=i;const a=i.indexOf("$");if(a<0)break;let o,c=Mu(i.slice(a+1),"{","}");if(c)o=a+1+c.length+2;else{const u=i.slice(a+1).match(/^[A-Za-z0-9_.]+/);u&&(c=u[0],o=a+1+c.length)}if(c&&o){const u=mc().find(h=>h.name.toLowerCase()===c.toLowerCase());if(!u)throw new Error(`alg name '${c}' not found`);if(u){let h=u.algorithm,f=Mu(i.slice(o),"(",")");f&&(o+=f.length+2,h=km(h,f.split(",").map(d=>d.trim()))),i=i.slice(0,a)+"("+h+")"+i.slice(o)}}}const n=[...e],r=Fc(i);for(let s=n.length;s<r.length;s++)n.push("1");n.length=r.length;for(let s=0;s<r.length;s++)i=i.replaceAll(r[s],n[s]);return i=i.replaceAll("h",`${~~(t/2)}`),{resolvedAlgorithm:i,actualParamValues:n}}function so(i,e,t){return i<e&&(i=e),i>t&&(i=t),i}function Hm(i,e,t,n=!0){const r=performance.now(),s=t.getContext("2d");s.reset(),s.clearRect(0,0,t.width,t.height);const[a,o]=[10,10];s.translate(a,o),s.lineCap="round",s.lineJoin="round",s.lineWidth=3;const u={"1 face":Gm,"3 faces":Vm,"5 faces":Wm,"6 faces":Xm,"6 faces 2":qm}[i](t.width-a*2,t.height-o*2,e);Ym(e,s,u,n),console.log("r2d render time",performance.now()-r)}function gf(i){const e=Nc(i.permutations,i.N),t={U:0,F:0,R:0,L:0,D:0,B:0};for(const n of e)for(const r of n)t[r.p1.facePoint.face]++;return t}function rn(i,e,t,n=t){return[[i,e],[i+t,e],[i+t,e+n],[i,e+n]]}function Gm(i,e,t){const n=Math.floor(Math.min(i/17,e/14)),r=n*14,s=n*2,a=gf(t);return["U","F","R","L","D","B"].sort((c,u)=>a[u]-a[c]).map((c,u)=>({name:c,priority:6-u,shape:u===0?rn(0,0,r):rn(r+n,(u-1)*3*n,s)}))}function Vm(i,e,t){const n=Math.floor(Math.min(i/2.25,e/2)),r=n/4,s=(d,g)=>{if(d===0)return[n,n];const v=d%2===g?n*.9:n,x=Math.PI/6+Math.PI/3*(d-1);return[n+v*Math.cos(x),n-v*Math.sin(x)]},a=gf(t),o=(a.U>=a.D?"U":"D")+(a.F>=a.B?"F":"B")+(a.R>=a.L?"R":"L");function c(d){switch(d){case"UFR":return["U",[2,1,0,3],"R",[0,1,6,5],"F",[3,0,5,4],"L","D","B"];case"UFL":return["U",[3,2,1,0],"F",[0,1,6,5],"L",[3,0,5,4],"B","D","R"];case"UBL":return["U",[0,3,2,1],"L",[0,1,6,5],"B",[3,0,5,4],"R","D","F"];case"UBR":return["U",[1,0,3,2],"B",[0,1,6,5],"R",[3,0,5,4],"F","D","L"];case"DFR":return["D",[4,0,6,5],"R",[2,1,6,0],"F",[3,2,0,4],"U","L","B"];case"DFL":return["D",[5,4,0,6],"F",[2,1,6,0],"L",[3,2,0,4],"U","B","R"];case"DBL":return["D",[6,5,4,0],"L",[2,1,6,0],"B",[3,2,0,4],"U","R","F"];case"DBR":return["D",[0,6,5,4],"B",[2,1,6,0],"R",[3,2,0,4],"U","F","L"]}throw new Error("invalid key")}const u=c(o),h=u[0]==="U"?0:1;return[{name:u[0],priority:6,shape:u[1].map(d=>s(d,h))},{name:u[2],priority:5,shape:u[3].map(d=>s(d,h))},{name:u[4],priority:4,shape:u[5].map(d=>s(d,h))},{name:u[6],priority:-1,shape:rn(0,0,r)},{name:u[7],priority:-2,shape:rn(0,2*n-r,r)},{name:u[8],priority:-3,shape:rn(2*n,n-r/2,r)}]}function Wm(i,e,t){const[n,r,s,a]=[.5,.5,.5,.5],o=100,c=Math.floor(Math.min((i-o-20)/(1+n+r),e/(1+s+a))),u=[0,0],h=[c*(1+n+r),0],f=[c*(1+n+r),c*(1+s+a)],d=[0,c*(1+s+a)],g=[c*n,c*s],v=[c*(1+n),c*s],x=[c*(1+n),c*(1+s)],p=[c*n,c*(1+s)];return[{name:"U",priority:6,shape:[g,v,x,p]},{name:"F",priority:5,shape:[p,x,f,d]},{name:"R",priority:4,shape:[x,v,h,f]},{name:"L",priority:3,shape:[g,p,d,u]},{name:"B",priority:2,shape:[v,g,u,h]},{name:"D",priority:-1,shape:rn(c*(1+n+r)+20,0,o,o)}]}function Xm(i,e,t){const n=Math.floor(Math.min(i/4,e/3));return[{name:"U",priority:6,shape:rn(n,0,n)},{name:"F",priority:5,shape:rn(n,n,n)},{name:"R",priority:4,shape:rn(2*n,n,n)},{name:"L",priority:3,shape:rn(0,n,n)},{name:"D",priority:2,shape:rn(n,2*n,n)},{name:"B",priority:-1,shape:rn(3*n,n,n)}]}function qm(i,e,t){const s=Math.floor(Math.min(i/3.5,e/2.5))-2;return[{name:"U",priority:4,shape:[[s+.5*s,0],[2*s+.5*s,0],[2*s,s*.5],[s,s*.5]]},{name:"R",priority:5,shape:[[2*s,s*.5],[2*s+.5*s,0],[2*s+.5*s,s],[2*s,s+s*.5]]},{name:"F",priority:6,shape:rn(s,s*.5,s)},{name:"L",priority:3,shape:rn(0,s*.5,s)},{name:"D",priority:2,shape:rn(s,s+s*.5,s)},{name:"B",priority:-1,shape:rn(2*s+.5*s,0,s)}]}function Ym(i,e,t,n=!0){const r=i.N,s=(v,x,p,m)=>{const w={U:"hsl(60, 100%, 90%)",F:"hsl(0, 100%, 90%)",R:"hsl(120, 100%, 85%)",B:"hsl(23, 100%, 90%)",L:"hsl(240, 100%, 90%)",D:"hsl(120, 100%, 100%)"},S=(M,R,Q)=>{const te=[M];for(let N=1;N<Q;N++)te.push([M[0]+N*(R[0]-M[0])/Q,M[1]+N*(R[1]-M[1])/Q]);return te.push(R),te},b=M=>M.reduce((Q,te,N,J)=>[Q[0]+te[0],Q[1]+te[1]],[0,0]).map(Q=>Q/M.length);e.fillStyle=w[v],e.beginPath(),x.forEach((M,R)=>{R===0?e.moveTo(...M):e.lineTo(...M)}),e.closePath(),e.fill();const D=S(x[0],x[3],r),U=S(x[0],x[1],r),C=S(x[1],x[2],r),z=S(x[3],x[2],r);for(let M=0;M<=r;M++)e.beginPath(),e.moveTo(D[M][0],D[M][1]),e.lineTo(C[M][0],C[M][1]),e.moveTo(U[M][0],U[M][1]),e.lineTo(z[M][0],z[M][1]),e.stroke();const Z=[];for(let M=0;M<U.length;M++)Z.push(S(U[M],z[M],r));for(let M=0;M<r;M++)for(let R=0;R<r;R++){const Q=`${v}-${M}-${R}`,te=b([Z[M][R],Z[M][R+1],Z[M+1][R+1],Z[M+1][R]]);m[Q]=te}for(const{a:M,b:R,color:Q}of p){e.fillStyle=w[Q];const te=[Z[M][R],Z[M][R+1],Z[M+1][R+1],Z[M+1][R]];e.beginPath(),e.moveTo(...te[0]),e.lineTo(...te[1]),e.lineTo(...te[2]),e.lineTo(...te[3]),e.closePath(),e.fill(),e.stroke()}};e.lineCap="round",e.lineJoin="round",e.lineWidth=9/r;const a=i.getAllFacesColors(),o={};for(const v of t)s(v.name,v.shape,a[v.name],o);const c=new hf;e.shadowColor="rgba(0, 0, 0, .4)",e.shadowBlur=15,e.lineWidth=5;const u=v=>{const x=c.nextColor();for(let p=0;p<v.length;p++){const m=p===v.length-1?0:p+1,[w,S]=v[p],[b,D]=v[m];e.beginPath(),Sm(e,w,S,b,D,x,20),e.stroke()}},h=(v,x)=>{const p=c.nextColor(),[m,w]=v;e.beginPath(),Em(e,m,w,x,p,20),e.stroke()},f=(v,x)=>v.every(p=>p.facePoint.face===v[0].facePoint.face&&p.facePoint.a>0&&p.facePoint.a<x-1&&p.facePoint.b>0&&p.facePoint.b<x-1),d=Nc(i.permutations,i.N),g=v=>`${v.face}-${v.a}-${v.b}`;for(const v of d)if(!(!n&&f(v.map(x=>x.p1),r)))if(v.length>1){const x=v.map(p=>o[g(p.p1.facePoint)]);u(x)}else{const x=v[0],p=o[g(x.p1.facePoint)];h(p,x.rotation[1])}}function xn(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,c=a===0?1:a===180?-1:0,h=[[1,0,0,0,c,-o,0,o,c],[c,0,o,0,1,0,-o,0,c],[c,-o,0,o,c,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function _f(i,e,t,n){return[i+n-e,e-t+i]}function vf(i,e,t,n){return[i-n+e,e+t-i]}function Fo(i,e,t){return[i[0]+e,i[1]+t]}function An(i,e,t,n){const r=e[1]-i[1],s=i[0]-e[0],a=i[0]*r+i[1]*s,o=n[1]-t[1],c=t[0]-n[0],u=t[0]*o+t[1]*c,h=r*c-s*o;return h==0?i:[(a*c-u*s)/h,(r*u-o*a)/h]}function $m(i,e,t,n){const[r,s,a]=[e[0]- -i/2,e[1]-i/2,e[2]-i/2],[o,c,u]=[e,t,n].map(d=>[d[0]-r,d[1]-s,d[2]-a]),h=jm(i,o,c,u),f=[];for(let d=0;d<h.length;d++){const[g,v,x]=h[d],[p,m,w]=c,[S,b,D]=u;g===p&&v===m&&x===w||g===S&&v===b&&x===D||f.push(h[d])}return f.map(d=>[d[0]+r,d[1]+s,d[2]+a])}function jm(i,e,t,n){const r=i/2;let s=[0,0];if(t[0]===r&&(s=[1,-90]),t[0]===-r&&(s=[1,90]),t[1]===r&&(s=[0,90]),t[1]===-r&&(s=[0,-90]),t[2]===r&&(s=[2,0]),t[2]===-r&&(s=[0,180]),t=xn(t,s[0],s[1]),n=xn(n,s[0],s[1]),n[2]===-r)return Km(i,e,t,n).map(u=>xn(u,s[0],-s[1]));if(n[2]===r)return[];let a=[2,0];return n[0]===r&&(a=[2,90]),n[0]===-r&&(a=[2,-90]),n[1]===-r&&(a=[2,180]),t=xn(t,a[0],a[1]),n=xn(n,a[0],a[1]),Zm(i,e,t,n).map(c=>xn(c,a[0],-a[1])).map(c=>xn(c,s[0],-s[1]))}function Zm(i,e,t,n){const[r,s]=[e[0],e[1]],[a,o]=[e[0]+i,e[1]],[c,u]=[t[0],t[1]],[h,f]=[n[0],e[1]+e[2]-n[2]];if(f===u)return[];const d=(r+a)/2,g=s+i/2,v=Fo(vf(d,g,h,f),-i,0),x=Fo(_f(d,g,h,f),i,0),p=(D,U,C,z)=>(C-D)*(C-D)+(z-U)*(z-U),m=p(c,u,h,f),w=p(c,u,...v),S=p(c,u,...x),b=Math.min(m,w,S);if(b===m)return[[An([r,s],[a,o],[c,u],[h,f])[0],s,e[2]]];if(b===w){const D=An([r,s],[r,s+1],[c,u],v),U=An([r,s],[a,o],[c,u],v);return[[r,D[1],e[2]],[r,s,e[2]-(r-U[0])]]}else if(b===S){const D=An([a,o],[a,o+1],[c,u],x),U=An([r,s],[a,o],[c,u],x);return[[a,D[1],e[2]],[a,o,e[2]-(U[0]-a)]]}return[]}function oo(i,e,t,n){const[r,s,a]=e,[o,c,u]=[r+i,s,a],[h,f]=[t[0],t[1]],[d,g]=[n[0],e[1]+i+s-n[1]],v=[h,f],x=[d,g],p=[r,s],m=[o,c],w=(r+o)/2,S=s+i+i/2,b=Fo(vf(w,S,d,g),-i,0),D=Fo(_f(w,S,d,g),i,0),U=(C,z,Z,M)=>(Z-C)*(Z-C)+(M-z)*(M-z);return[{distance:U(...v,...b),pathFunc:()=>{const C=An(v,b,p,m),z=An(v,b,p,[r,s+1]),Z=An(v,b,[r,s+i],[o,c+i]);return[[C[0],s,a],[r,s,a-(z[1]-s)],[r,s-(r-Z[0]),a-i]]}},{distance:U(...v,...x),pathFunc:()=>{const C=An(v,x,p,m),z=An(v,x,[r,s+i],[o,c+i]);return[[C[0],s,a],[z[0],s,a-i]]}},{distance:U(...v,...D),pathFunc:()=>{const C=An(v,D,p,m),z=An(v,D,m,[o,c+1]),Z=An(v,D,[r,s+i],[o,c+i]);return[[C[0],c,u],[o,c,u-(z[1]-c)],[o,c-(Z[0]-o),u-i]]}}]}function Km(i,e,t,n){const r=[...oo(i,e,t,n),...oo(i,e,xn(t,2,90),xn(n,2,90)),...oo(i,e,xn(t,2,180),xn(n,2,180)),...oo(i,e,xn(t,2,270),xn(n,2,270))],s=Math.min(...r.map(c=>c.distance)),a=r.findIndex(c=>c.distance===s);return r[a].pathFunc().map(c=>xn(c,2,-90*~~(a/3)))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="162",br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jm=0,Su=1,Qm=2,eg=0,xf=1,tg=2,gi=3,ri=0,yn=1,qn=2,Ni=0,Jr=1,Eu=2,bu=3,Tu=4,ng=5,nr=100,ig=101,rg=102,Au=103,wu=104,sg=200,og=201,ag=202,cg=203,gc=204,_c=205,lg=206,ug=207,hg=208,fg=209,dg=210,pg=211,mg=212,gg=213,_g=214,vg=0,xg=1,yg=2,Bo=3,Mg=4,Sg=5,Eg=6,bg=7,yf=0,Tg=1,Ag=2,Oi=0,wg=1,Rg=2,Cg=3,Lg=4,Pg=5,Ug=6,Dg=7,Mf=300,es=301,ts=302,vc=303,xc=304,Yo=306,yc=1e3,Yn=1001,Mc=1002,mn=1003,Ru=1004,fs=1005,vn=1006,Ta=1007,sr=1008,Fi=1009,Ig=1010,Ng=1011,zc=1012,Sf=1013,Di=1014,vi=1015,Ps=1016,Ef=1017,bf=1018,or=1020,Og=1021,$n=1023,Fg=1024,Bg=1025,ar=1026,ns=1027,zg=1028,Tf=1029,kg=1030,Af=1031,wf=1033,Aa=33776,wa=33777,Ra=33778,Ca=33779,Cu=35840,Lu=35841,Pu=35842,Uu=35843,Rf=36196,Du=37492,Iu=37496,Nu=37808,Ou=37809,Fu=37810,Bu=37811,zu=37812,ku=37813,Hu=37814,Gu=37815,Vu=37816,Wu=37817,Xu=37818,qu=37819,Yu=37820,$u=37821,La=36492,ju=36494,Zu=36495,Hg=36283,Ku=36284,Ju=36285,Qu=36286,Gg=3200,Vg=3201,Wg=0,Xg=1,Ui="",Qn="srgb",zi="srgb-linear",kc="display-p3",$o="display-p3-linear",zo="linear",Lt="srgb",ko="rec709",Ho="p3",Ar=7680,eh=519,qg=512,Yg=513,$g=514,Cf=515,jg=516,Zg=517,Kg=518,Jg=519,th=35044,nh="300 es",Sc=1035,xi=2e3,Go=2001;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const ys=Math.PI/180,Us=180/Math.PI;function fr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function Hc(i,e){return(i%e+e)%e}function Qg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function e_(i,e,t){return i!==e?(t-i)/(e-i):0}function Ms(i,e,t){return(1-t)*i+t*e}function t_(i,e,t,n){return Ms(i,e,1-Math.exp(-t*n))}function n_(i,e=1){return e-Math.abs(Hc(i,e*2)-e)}function i_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function r_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function s_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function o_(i,e){return i+Math.random()*(e-i)}function a_(i){return i*(.5-Math.random())}function c_(i){i!==void 0&&(ih=i);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l_(i){return i*ys}function u_(i){return i*Us}function Ec(i){return(i&i-1)===0&&i!==0}function h_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function f_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),g=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*f,c*d,o*u);break;case"YZY":i.set(c*d,o*h,c*f,o*u);break;case"ZXZ":i.set(c*f,c*d,o*h,o*u);break;case"XZX":i.set(o*h,c*v,c*g,o*u);break;case"YXY":i.set(c*g,o*h,c*v,o*u);break;case"ZYZ":i.set(c*v,c*g,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lf={DEG2RAD:ys,RAD2DEG:Us,generateUUID:fr,clamp:Zt,euclideanModulo:Hc,mapLinear:Qg,inverseLerp:e_,lerp:Ms,damp:t_,pingpong:n_,smoothstep:i_,smootherstep:r_,randInt:s_,randFloat:o_,randFloatSpread:a_,seededRandom:c_,degToRad:l_,radToDeg:u_,isPowerOfTwo:Ec,ceilPowerOfTwo:h_,floorPowerOfTwo:Vo,setQuaternionFromProperEuler:f_,normalize:hn,denormalize:Wr};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,s,a,o,c,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],g=n[5],v=n[8],x=r[0],p=r[3],m=r[6],w=r[1],S=r[4],b=r[7],D=r[2],U=r[5],C=r[8];return s[0]=a*x+o*w+c*D,s[3]=a*p+o*S+c*U,s[6]=a*m+o*b+c*C,s[1]=u*x+h*w+f*D,s[4]=u*p+h*S+f*U,s[7]=u*m+h*b+f*C,s[2]=d*x+g*w+v*D,s[5]=d*p+g*S+v*U,s[8]=d*m+g*b+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*s,g=u*s-a*c,v=t*f+n*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*u-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=g*x,e[7]=(n*c-u*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new st;function Pf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function d_(){const i=Wo("canvas");return i.style.display="block",i}const rh={};function p_(i){i in rh||(rh[i]=!0,console.warn(i))}const sh=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oh=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[zi]:{transfer:zo,primaries:ko,toReference:i=>i,fromReference:i=>i},[Qn]:{transfer:Lt,primaries:ko,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$o]:{transfer:zo,primaries:Ho,toReference:i=>i.applyMatrix3(oh),fromReference:i=>i.applyMatrix3(sh)},[kc]:{transfer:Lt,primaries:Ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oh),fromReference:i=>i.applyMatrix3(sh).convertLinearToSRGB()}},m_=new Set([zi,$o]),St={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!m_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ao[e].toReference,r=ao[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ao[i].primaries},getTransfer:function(i){return i===Ui?zo:ao[i].transfer}};function Qr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wr;class Uf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=Wo("canvas")),wr.width=e.width,wr.height=e.height;const n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qr(t[n]/255)*255):t[n]=Qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g_=0;class Df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Da(r[a].image)):s.push(Da(r[a]))}else s=Da(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let __=0;class Mn extends hr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Yn,r=Yn,s=vn,a=sr,o=$n,c=Fi,u=Mn.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=fr(),this.name="",this.source=new Df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Mf;Mn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,n=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],g=c[5],v=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,b=(g+1)/2,D=(m+1)/2,U=(h+d)/4,C=(f+x)/4,z=(v+p)/4;return S>b&&S>D?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=U/n,s=C/n):b>D?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=U/r,s=z/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=C/s,r=z/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-v)*(p-v)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(f-x)/w,this.z=(d-h)/w,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v_ extends hr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends v_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class If extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x_ extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],g=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=x;return}if(f!==x||c!==d||u!==g||h!==v){let p=1-o;const m=c*d+u*g+h*v+f*x,w=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const D=Math.sqrt(S),U=Math.atan2(D,m*w);p=Math.sin(p*U)/D,o=Math.sin(o*U)/D}const b=o*w;if(c=c*p+d*b,u=u*p+g*b,h=h*p+v*b,f=f*p+x*b,p===1-o){const D=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=D,u*=D,h*=D,f*=D}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+h*f+c*g-u*d,e[t+1]=c*v+h*d+u*f-o*g,e[t+2]=u*v+h*g+o*d-c*f,e[t+3]=h*v-o*f-c*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*h*f+u*g*v,this._y=u*g*f-d*h*v,this._z=u*h*v+d*g*f,this._w=u*h*f-d*g*v;break;case"YXZ":this._x=d*h*f+u*g*v,this._y=u*g*f-d*h*v,this._z=u*h*v-d*g*f,this._w=u*h*f+d*g*v;break;case"ZXY":this._x=d*h*f-u*g*v,this._y=u*g*f+d*h*v,this._z=u*h*v+d*g*f,this._w=u*h*f-d*g*v;break;case"ZYX":this._x=d*h*f-u*g*v,this._y=u*g*f+d*h*v,this._z=u*h*v-d*g*f,this._w=u*h*f+d*g*v;break;case"YZX":this._x=d*h*f+u*g*v,this._y=u*g*f+d*h*v,this._z=u*h*v-d*g*f,this._w=u*h*f-d*g*v;break;case"XZY":this._x=d*h*f-u*g*v,this._y=u*g*f-d*h*v,this._z=u*h*v+d*g*f,this._w=u*h*f+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(n>o&&n>f){const g=2*Math.sqrt(1+n-o-f);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>f){const g=2*Math.sqrt(1+o-n-f);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new F,ah=new lr;class Bs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),lo.subVectors(this.max,ds),Rr.subVectors(e.a,ds),Cr.subVectors(e.b,ds),Lr.subVectors(e.c,ds),bi.subVectors(Cr,Rr),Ti.subVectors(Lr,Cr),ji.subVectors(Rr,Lr);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-ji.z,ji.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,ji.z,0,-ji.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-ji.y,ji.x,0];return!Na(t,Rr,Cr,Lr,lo)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Rr,Cr,Lr,lo))?!1:(uo.crossVectors(bi,Ti),t=[uo.x,uo.y,uo.z],Na(t,Rr,Cr,Lr,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,co=new Bs,Rr=new F,Cr=new F,Lr=new F,bi=new F,Ti=new F,ji=new F,ds=new F,lo=new F,uo=new F,Zi=new F;function Na(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zi.fromArray(i,s);const o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),c=e.dot(Zi),u=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const y_=new Bs,ps=new F,Oa=new F;class Gc{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):y_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ps,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Oa)),this.expandByPoint(ps.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new F,Fa=new F,ho=new F,Ai=new F,Ba=new F,fo=new F,za=new F;class Nf{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fa.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Fa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ho),o=Ai.dot(this.direction),c=-Ai.dot(ho),u=Ai.lengthSq(),h=Math.abs(1-a*a);let f,d,g,v;if(h>0)if(f=a*c-o,d=a*o-c,v=s*h,f>=0)if(d>=-v)if(d<=v){const x=1/h;f*=x,d*=x,g=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+u;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+d*(d+2*c)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fa).addScaledVector(ho,d),g}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),r=fi.dot(fi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,r,s){Ba.subVectors(t,e),fo.subVectors(n,e),za.crossVectors(Ba,fo);let a=this.direction.dot(za),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const c=o*this.direction.dot(fo.crossVectors(Ai,fo));if(c<0)return null;const u=o*this.direction.dot(Ba.cross(Ai));if(u<0||c+u>a)return null;const h=-o*Ai.dot(za);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,n,r,s,a,o,c,u,h,f,d,g,v,x,p){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,f,d,g,v,x,p)}set(e,t,n,r,s,a,o,c,u,h,f,d,g,v,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=h,m[10]=f,m[14]=d,m[3]=g,m[7]=v,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,g=a*f,v=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=g+v*u,t[5]=d-x*u,t[9]=-o*c,t[2]=x-d*u,t[6]=v+g*u,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,g=c*f,v=u*h,x=u*f;t[0]=d+x*o,t[4]=v*o-g,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=g*o-v,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,g=c*f,v=u*h,x=u*f;t[0]=d-x*o,t[4]=-a*f,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,g=a*f,v=o*h,x=o*f;t[0]=c*h,t[4]=v*u-g,t[8]=d*u+x,t[1]=c*f,t[5]=x*u+d,t[9]=g*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*u,v=o*c,x=o*u;t[0]=c*h,t[4]=x-d*f,t[8]=v*f+g,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=g*f+v,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*c,g=a*u,v=o*c,x=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+x,t[5]=a*h,t[9]=g*f-v,t[2]=v*f-g,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,S_)}lookAt(e,t,n){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),wi.crossVectors(n,bn),wi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),wi.crossVectors(n,bn)),wi.normalize(),po.crossVectors(bn,wi),r[0]=wi.x,r[4]=po.x,r[8]=bn.x,r[1]=wi.y,r[5]=po.y,r[9]=bn.y,r[2]=wi.z,r[6]=po.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],g=n[13],v=n[2],x=n[6],p=n[10],m=n[14],w=n[3],S=n[7],b=n[11],D=n[15],U=r[0],C=r[4],z=r[8],Z=r[12],M=r[1],R=r[5],Q=r[9],te=r[13],N=r[2],J=r[6],$=r[10],ae=r[14],I=r[3],re=r[7],ee=r[11],de=r[15];return s[0]=a*U+o*M+c*N+u*I,s[4]=a*C+o*R+c*J+u*re,s[8]=a*z+o*Q+c*$+u*ee,s[12]=a*Z+o*te+c*ae+u*de,s[1]=h*U+f*M+d*N+g*I,s[5]=h*C+f*R+d*J+g*re,s[9]=h*z+f*Q+d*$+g*ee,s[13]=h*Z+f*te+d*ae+g*de,s[2]=v*U+x*M+p*N+m*I,s[6]=v*C+x*R+p*J+m*re,s[10]=v*z+x*Q+p*$+m*ee,s[14]=v*Z+x*te+p*ae+m*de,s[3]=w*U+S*M+b*N+D*I,s[7]=w*C+S*R+b*J+D*re,s[11]=w*z+S*Q+b*$+D*ee,s[15]=w*Z+S*te+b*ae+D*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],g=e[14],v=e[3],x=e[7],p=e[11],m=e[15];return v*(+s*c*f-r*u*f-s*o*d+n*u*d+r*o*g-n*c*g)+x*(+t*c*g-t*u*d+s*a*d-r*a*g+r*u*h-s*c*h)+p*(+t*u*f-t*o*g-s*a*f+n*a*g+s*o*h-n*u*h)+m*(-r*o*h-t*c*f+t*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],g=e[11],v=e[12],x=e[13],p=e[14],m=e[15],w=f*p*u-x*d*u+x*c*g-o*p*g-f*c*m+o*d*m,S=v*d*u-h*p*u-v*c*g+a*p*g+h*c*m-a*d*m,b=h*x*u-v*f*u+v*o*g-a*x*g-h*o*m+a*f*m,D=v*f*c-h*x*c-v*o*d+a*x*d+h*o*p-a*f*p,U=t*w+n*S+r*b+s*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/U;return e[0]=w*C,e[1]=(x*d*s-f*p*s-x*r*g+n*p*g+f*r*m-n*d*m)*C,e[2]=(o*p*s-x*c*s+x*r*u-n*p*u-o*r*m+n*c*m)*C,e[3]=(f*c*s-o*d*s-f*r*u+n*d*u+o*r*g-n*c*g)*C,e[4]=S*C,e[5]=(h*p*s-v*d*s+v*r*g-t*p*g-h*r*m+t*d*m)*C,e[6]=(v*c*s-a*p*s-v*r*u+t*p*u+a*r*m-t*c*m)*C,e[7]=(a*d*s-h*c*s+h*r*u-t*d*u-a*r*g+t*c*g)*C,e[8]=b*C,e[9]=(v*f*s-h*x*s-v*n*g+t*x*g+h*n*m-t*f*m)*C,e[10]=(a*x*s-v*o*s+v*n*u-t*x*u-a*n*m+t*o*m)*C,e[11]=(h*o*s-a*f*s-h*n*u+t*f*u+a*n*g-t*o*g)*C,e[12]=D*C,e[13]=(h*x*r-v*f*r+v*n*d-t*x*d-h*n*p+t*f*p)*C,e[14]=(v*o*r-a*x*r-v*n*c+t*x*c+a*n*p-t*o*p)*C,e[15]=(a*f*r-h*o*r+h*n*c-t*f*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,f=o+o,d=s*u,g=s*h,v=s*f,x=a*h,p=a*f,m=o*f,w=c*u,S=c*h,b=c*f,D=n.x,U=n.y,C=n.z;return r[0]=(1-(x+m))*D,r[1]=(g+b)*D,r[2]=(v-S)*D,r[3]=0,r[4]=(g-b)*U,r[5]=(1-(d+m))*U,r[6]=(p+w)*U,r[7]=0,r[8]=(v+S)*C,r[9]=(p-w)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const u=1/s,h=1/a,f=1/o;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=xi){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let g,v;if(o===xi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Go)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=xi){const c=this.elements,u=1/(t-e),h=1/(n-r),f=1/(a-s),d=(t+e)*u,g=(n+r)*h;let v,x;if(o===xi)v=(a+s)*f,x=-2*f;else if(o===Go)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pr=new F,Gn=new Ft,M_=new F(0,0,0),S_=new F(1,1,1),wi=new F,po=new F,bn=new F,ch=new Ft,lh=new lr;class yi{constructor(e=0,t=0,n=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E_=0;const uh=new F,Ur=new lr,di=new Ft,mo=new F,ms=new F,b_=new F,T_=new lr,hh=new F(1,0,0),fh=new F(0,1,0),dh=new F(0,0,1),A_={type:"added"},w_={type:"removed"},ka={type:"childadded",child:null},Ha={type:"childremoved",child:null};class sn extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new F,t=new yi,n=new lr,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new st}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ms,mo,this.up):di.lookAt(mo,ms,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(di),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(A_),ka.child=e,this.dispatchEvent(ka),ka.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w_),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,b_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,T_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}sn.DEFAULT_UP=new F(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new F,pi=new F,Ga=new F,mi=new F,Dr=new F,Ir=new F,ph=new F,Va=new F,Wa=new F,Xa=new F;class ni{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vn.subVectors(r,t),pi.subVectors(n,t),Ga.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(pi),c=Vn.dot(Ga),u=pi.dot(pi),h=pi.dot(Ga),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,g=(u*c-o*h)*d,v=(a*h-o*c)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),pi.subVectors(e,t),Vn.cross(pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Dr.subVectors(r,n),Ir.subVectors(s,n),Va.subVectors(e,n);const c=Dr.dot(Va),u=Ir.dot(Va);if(c<=0&&u<=0)return t.copy(n);Wa.subVectors(e,r);const h=Dr.dot(Wa),f=Ir.dot(Wa);if(h>=0&&f<=h)return t.copy(r);const d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Dr,a);Xa.subVectors(e,s);const g=Dr.dot(Xa),v=Ir.dot(Xa);if(v>=0&&g<=v)return t.copy(s);const x=g*u-c*v;if(x<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Ir,o);const p=h*v-g*f;if(p<=0&&f-h>=0&&g-v>=0)return ph.subVectors(s,r),o=(f-h)/(f-h+(g-v)),t.copy(r).addScaledVector(ph,o);const m=1/(p+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Dr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},go={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Hc(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=qa(a,s,e+1/3),this.g=qa(a,s,e),this.b=qa(a,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=Qn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const n=Ff[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return St.fromWorkingColorSpace(nn.copy(this),e),Math.round(Zt(nn.r*255,0,255))*65536+Math.round(Zt(nn.g*255,0,255))*256+Math.round(Zt(nn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Qn){St.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,r=nn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(go);const n=Ms(Ri.h,go.h,t),r=Ms(Ri.s,go.s,t),s=Ms(Ri.l,go.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new xt;xt.NAMES=Ff;let R_=0;class jo extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Jr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ds extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new F,_o=new Me;class ii{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return p_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}}class Bf extends ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zf extends ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends ii{constructor(e,t,n){super(new Float32Array(e),t,n)}}let C_=0;const Un=new Ft,Ya=new sn,Nr=new F,Tn=new Bs,gs=new Bs,jt=new F;class Nn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?zf:Bf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Tn.min,gs.min),Tn.expandByPoint(jt),jt.addVectors(Tn.max,gs.max),Tn.expandByPoint(jt)):(Tn.expandByPoint(gs.min),Tn.expandByPoint(gs.max))}Tn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)jt.fromBufferAttribute(o,u),c&&(Nr.fromBufferAttribute(e,u),jt.add(Nr)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new F,c[z]=new F;const u=new F,h=new F,f=new F,d=new Me,g=new Me,v=new Me,x=new F,p=new F;function m(z,Z,M){u.fromBufferAttribute(n,z),h.fromBufferAttribute(n,Z),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,z),g.fromBufferAttribute(s,Z),v.fromBufferAttribute(s,M),h.sub(u),f.sub(u),g.sub(d),v.sub(d);const R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(R),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(R),o[z].add(x),o[Z].add(x),o[M].add(x),c[z].add(p),c[Z].add(p),c[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,Z=w.length;z<Z;++z){const M=w[z],R=M.start,Q=M.count;for(let te=R,N=R+Q;te<N;te+=3)m(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const S=new F,b=new F,D=new F,U=new F;function C(z){D.fromBufferAttribute(r,z),U.copy(D);const Z=o[z];S.copy(Z),S.sub(D.multiplyScalar(D.dot(Z))).normalize(),b.crossVectors(U,Z);const R=b.dot(c[z])<0?-1:1;a.setXYZW(z,S.x,S.y,S.z,R)}for(let z=0,Z=w.length;z<Z;++z){const M=w[z],R=M.start,Q=M.count;for(let te=R,N=R+Q;te<N;te+=3)C(e.getX(te+0)),C(e.getX(te+1)),C(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,u=new F,h=new F,f=new F;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,p),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h);let g=0,v=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?g=c[x]*o.data.stride+o.offset:g=c[x]*h;for(let m=0;m<h;m++)d[v++]=u[g++]}return new ii(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const d=u[h],g=e(d,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new Ft,Ki=new Nf,vo=new Gc,gh=new F,Or=new F,Fr=new F,Br=new F,$a=new F,xo=new F,yo=new Me,Mo=new Me,So=new Me,_h=new F,vh=new F,xh=new F,Eo=new F,bo=new F;class Vt extends sn{constructor(e=new Nn,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&($a.fromBufferAttribute(f,e),a?xo.addScaledVector($a,h):xo.addScaledVector($a.sub(t),h))}t.add(xo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(vo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(vo,gh)===null||Ki.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(mh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=a[p.materialIndex],w=Math.max(p.start,g.start),S=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let b=w,D=S;b<D;b+=3){const U=o.getX(b),C=o.getX(b+1),z=o.getX(b+2);r=To(this,m,e,n,u,h,f,U,C,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const w=o.getX(p),S=o.getX(p+1),b=o.getX(p+2);r=To(this,a,e,n,u,h,f,w,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=a[p.materialIndex],w=Math.max(p.start,g.start),S=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let b=w,D=S;b<D;b+=3){const U=b,C=b+1,z=b+2;r=To(this,m,e,n,u,h,f,U,C,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const w=p,S=p+1,b=p+2;r=To(this,a,e,n,u,h,f,w,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function L_(i,e,t,n,r,s,a,o){let c;if(e.side===yn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ri,o),c===null)return null;bo.copy(o),bo.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(bo);return u<t.near||u>t.far?null:{distance:u,point:bo.clone(),object:i}}function To(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Or),i.getVertexPosition(c,Fr),i.getVertexPosition(u,Br);const h=L_(i,e,t,n,Or,Fr,Br,Eo);if(h){r&&(yo.fromBufferAttribute(r,o),Mo.fromBufferAttribute(r,c),So.fromBufferAttribute(r,u),h.uv=ni.getInterpolation(Eo,Or,Fr,Br,yo,Mo,So,new Me)),s&&(yo.fromBufferAttribute(s,o),Mo.fromBufferAttribute(s,c),So.fromBufferAttribute(s,u),h.uv1=ni.getInterpolation(Eo,Or,Fr,Br,yo,Mo,So,new Me)),a&&(_h.fromBufferAttribute(a,o),vh.fromBufferAttribute(a,c),xh.fromBufferAttribute(a,u),h.normal=ni.getInterpolation(Eo,Or,Fr,Br,_h,vh,xh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new F,materialIndex:0};ni.getNormal(Or,Fr,Br,f.normal),h.face=f}return h}class zs extends Nn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(f,2));function v(x,p,m,w,S,b,D,U,C,z,Z){const M=b/C,R=D/z,Q=b/2,te=D/2,N=U/2,J=C+1,$=z+1;let ae=0,I=0;const re=new F;for(let ee=0;ee<$;ee++){const de=ee*R-te;for(let ye=0;ye<J;ye++){const ke=ye*M-Q;re[x]=ke*w,re[p]=de*S,re[m]=N,u.push(re.x,re.y,re.z),re[x]=0,re[p]=0,re[m]=U>0?1:-1,h.push(re.x,re.y,re.z),f.push(ye/C),f.push(1-ee/z),ae+=1}}for(let ee=0;ee<z;ee++)for(let de=0;de<C;de++){const ye=d+de+J*ee,ke=d+de+J*(ee+1),Y=d+(de+1)+J*(ee+1),le=d+(de+1)+J*ee;c.push(ye,ke,le),c.push(ke,Y,le),I+=6}o.addGroup(g,I,Z),g+=I,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const r in n)e[r]=n[r]}return e}function P_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kf(i){return i.getRenderTarget()===null?i.outputColorSpace:St.workingColorSpace}const U_={clone:is,merge:fn};var D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=P_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hf extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new F,yh=new Me,Mh=new Me;class In extends Hf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,yh,Mh),t.subVectors(Mh,yh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,kr=1;class N_ extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(zr,kr,e,t);r.layers=this.layers,this.add(r);const s=new In(zr,kr,e,t);s.layers=this.layers,this.add(s);const a=new In(zr,kr,e,t);a.layers=this.layers,this.add(a);const o=new In(zr,kr,e,t);o.layers=this.layers,this.add(o);const c=new In(zr,kr,e,t);c.layers=this.layers,this.add(c);const u=new In(zr,kr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Gf extends Mn{constructor(e,t,n,r,s,a,o,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O_ extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Gf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zs(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Ni});s.uniforms.tEquirect.value=t;const a=new Vt(r,s),o=t.minFilter;return t.minFilter===sr&&(t.minFilter=vn),new N_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ja=new F,F_=new F,B_=new st;class Li{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ja.subVectors(n,t).cross(F_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ja),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||B_.getNormalMatrix(e),r=this.coplanarPoint(ja).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Gc,Ao=new F;class Vc{constructor(e=new Li,t=new Li,n=new Li,r=new Li,s=new Li,a=new Li){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],v=r[9],x=r[10],p=r[11],m=r[12],w=r[13],S=r[14],b=r[15];if(n[0].setComponents(c-s,d-u,p-g,b-m).normalize(),n[1].setComponents(c+s,d+u,p+g,b+m).normalize(),n[2].setComponents(c+a,d+h,p+v,b+w).normalize(),n[3].setComponents(c-a,d-h,p-v,b-w).normalize(),n[4].setComponents(c-o,d-f,p-x,b-S).normalize(),t===xi)n[5].setComponents(c+o,d+f,p+x,b+S).normalize();else if(t===Go)n[5].setComponents(o,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function z_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,h){const f=u.array,d=u.usage,g=f.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,f,d),u.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,h,f){const d=h.array,g=h._updateRange,v=h.updateRanges;if(i.bindBuffer(f,u),g.count===-1&&v.length===0&&i.bufferSubData(f,0,d),v.length!==0){for(let x=0,p=v.length;x<p;x++){const m=v[x];t?i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);if(f===void 0)n.set(u,r(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,h),f.version=u.version}}return{get:a,remove:o,update:c}}class ks extends Nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,f=e/o,d=t/c,g=[],v=[],x=[],p=[];for(let m=0;m<h;m++){const w=m*d-a;for(let S=0;S<u;S++){const b=S*f-s;v.push(b,-w,0),x.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<o;w++){const S=w+u*m,b=w+u*(m+1),D=w+1+u*(m+1),U=w+1+u*m;g.push(S,b,U),g.push(b,D,U)}this.setIndex(g),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,h0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,v0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,k0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
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
#endif`,nv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,iv=`#ifdef USE_MORPHTARGETS
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
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
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
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tv=`float getShadowMask() {
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
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cv=`#ifdef USE_SKINNING
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
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iv=`#ifdef USE_TRANSMISSION
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
#endif`,Nv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Yv=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,$v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jv=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ex=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ix=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sx=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ax=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,lx=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hx=`#define STANDARD
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dx=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,px=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,mx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_x=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,rt={alphahash_fragment:k_,alphahash_pars_fragment:H_,alphamap_fragment:G_,alphamap_pars_fragment:V_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:q_,aomap_pars_fragment:Y_,batching_pars_vertex:$_,batching_vertex:j_,begin_vertex:Z_,beginnormal_vertex:K_,bsdfs:J_,iridescence_fragment:Q_,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:r0,color_fragment:s0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:c0,common:l0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:h0,displacementmap_pars_vertex:f0,displacementmap_vertex:d0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:y0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:D0,envmap_vertex:S0,fog_vertex:E0,fog_pars_vertex:b0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:w0,lightmap_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:P0,lights_pars_begin:U0,lights_toon_fragment:I0,lights_toon_pars_fragment:N0,lights_phong_fragment:O0,lights_phong_pars_fragment:F0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:k0,lights_fragment_maps:H0,lights_fragment_end:G0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:$0,map_particle_fragment:j0,map_particle_pars_fragment:Z0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Q0,morphcolor_vertex:ev,morphnormal_vertex:tv,morphtarget_pars_vertex:nv,morphtarget_vertex:iv,normal_fragment_begin:rv,normal_fragment_maps:sv,normal_pars_fragment:ov,normal_pars_vertex:av,normal_vertex:cv,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:hv,clearcoat_pars_fragment:fv,iridescence_pars_fragment:dv,opaque_fragment:pv,packing:mv,premultiplied_alpha_fragment:gv,project_vertex:_v,dithering_fragment:vv,dithering_pars_fragment:xv,roughnessmap_fragment:yv,roughnessmap_pars_fragment:Mv,shadowmap_pars_fragment:Sv,shadowmap_pars_vertex:Ev,shadowmap_vertex:bv,shadowmask_pars_fragment:Tv,skinbase_vertex:Av,skinning_pars_vertex:wv,skinning_vertex:Rv,skinnormal_vertex:Cv,specularmap_fragment:Lv,specularmap_pars_fragment:Pv,tonemapping_fragment:Uv,tonemapping_pars_fragment:Dv,transmission_fragment:Iv,transmission_pars_fragment:Nv,uv_pars_fragment:Ov,uv_pars_vertex:Fv,uv_vertex:Bv,worldpos_vertex:zv,background_vert:kv,background_frag:Hv,backgroundCube_vert:Gv,backgroundCube_frag:Vv,cube_vert:Wv,cube_frag:Xv,depth_vert:qv,depth_frag:Yv,distanceRGBA_vert:$v,distanceRGBA_frag:jv,equirect_vert:Zv,equirect_frag:Kv,linedashed_vert:Jv,linedashed_frag:Qv,meshbasic_vert:ex,meshbasic_frag:tx,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:rx,meshmatcap_frag:sx,meshnormal_vert:ox,meshnormal_frag:ax,meshphong_vert:cx,meshphong_frag:lx,meshphysical_vert:ux,meshphysical_frag:hx,meshtoon_vert:fx,meshtoon_frag:dx,points_vert:px,points_frag:mx,shadow_vert:gx,shadow_frag:_x,sprite_vert:vx,sprite_frag:xx},ve={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ei={basic:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:fn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:fn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:fn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:fn([ve.points,ve.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:fn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:fn([ve.common,ve.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:fn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:fn([ve.sprite,ve.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:fn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:fn([ve.lights,ve.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ei.physical={uniforms:fn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const wo={r:0,b:0,g:0},Qi=new yi,yx=new Ft;function Mx(i,e,t,n,r,s,a){const o=new xt(0);let c=s===!0?0:1,u,h,f=null,d=0,g=null;function v(p,m){let w=!1,S=m.isScene===!0?m.background:null;S&&S.isTexture&&(S=(m.backgroundBlurriness>0?t:e).get(S)),S===null?x(o,c):S&&S.isColor&&(x(S,1),w=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Yo)?(h===void 0&&(h=new Vt(new zs(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:is(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,U,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Qi.copy(m.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(Qi)),h.material.toneMapped=St.getTransfer(S.colorSpace)!==Lt,(f!==S||d!==S.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,g=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Vt(new ks(2,2),new Bi({name:"BackgroundMaterial",uniforms:is(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=St.getTransfer(S.colorSpace)!==Lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,g=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,m){p.getRGB(wo,kf(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),c=m,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:v}}function Sx(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let u=c,h=!1;function f(N,J,$,ae,I){let re=!1;if(a){const ee=x(ae,$,J);u!==ee&&(u=ee,g(u.object)),re=m(N,ae,$,I),re&&w(N,ae,$,I)}else{const ee=J.wireframe===!0;(u.geometry!==ae.id||u.program!==$.id||u.wireframe!==ee)&&(u.geometry=ae.id,u.program=$.id,u.wireframe=ee,re=!0)}I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,z(N,J,$,ae),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,J,$){const ae=$.wireframe===!0;let I=o[N.id];I===void 0&&(I={},o[N.id]=I);let re=I[J.id];re===void 0&&(re={},I[J.id]=re);let ee=re[ae];return ee===void 0&&(ee=p(d()),re[ae]=ee),ee}function p(N){const J=[],$=[],ae=[];for(let I=0;I<r;I++)J[I]=0,$[I]=0,ae[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:$,attributeDivisors:ae,object:N,attributes:{},index:null}}function m(N,J,$,ae){const I=u.attributes,re=J.attributes;let ee=0;const de=$.getAttributes();for(const ye in de)if(de[ye].location>=0){const Y=I[ye];let le=re[ye];if(le===void 0&&(ye==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),ye==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),Y===void 0||Y.attribute!==le||le&&Y.data!==le.data)return!0;ee++}return u.attributesNum!==ee||u.index!==ae}function w(N,J,$,ae){const I={},re=J.attributes;let ee=0;const de=$.getAttributes();for(const ye in de)if(de[ye].location>=0){let Y=re[ye];Y===void 0&&(ye==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),ye==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));const le={};le.attribute=Y,Y&&Y.data&&(le.data=Y.data),I[ye]=le,ee++}u.attributes=I,u.attributesNum=ee,u.index=ae}function S(){const N=u.newAttributes;for(let J=0,$=N.length;J<$;J++)N[J]=0}function b(N){D(N,0)}function D(N,J){const $=u.newAttributes,ae=u.enabledAttributes,I=u.attributeDivisors;$[N]=1,ae[N]===0&&(i.enableVertexAttribArray(N),ae[N]=1),I[N]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),I[N]=J)}function U(){const N=u.newAttributes,J=u.enabledAttributes;for(let $=0,ae=J.length;$<ae;$++)J[$]!==N[$]&&(i.disableVertexAttribArray($),J[$]=0)}function C(N,J,$,ae,I,re,ee){ee===!0?i.vertexAttribIPointer(N,J,$,I,re):i.vertexAttribPointer(N,J,$,ae,I,re)}function z(N,J,$,ae){if(n.isWebGL2===!1&&(N.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const I=ae.attributes,re=$.getAttributes(),ee=J.defaultAttributeValues;for(const de in re){const ye=re[de];if(ye.location>=0){let ke=I[de];if(ke===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(ke=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(ke=N.instanceColor)),ke!==void 0){const Y=ke.normalized,le=ke.itemSize,ne=t.get(ke);if(ne===void 0)continue;const Be=ne.buffer,Ue=ne.type,Te=ne.bytesPerElement,ut=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||ke.gpuType===Sf);if(ke.isInterleavedBufferAttribute){const Oe=ke.data,G=Oe.stride,Ct=ke.offset;if(Oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ye.locationSize;Ce++)D(ye.location+Ce,Oe.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Ce=0;Ce<ye.locationSize;Ce++)b(ye.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ce=0;Ce<ye.locationSize;Ce++)C(ye.location+Ce,le/ye.locationSize,Ue,Y,G*Te,(Ct+le/ye.locationSize*Ce)*Te,ut)}else{if(ke.isInstancedBufferAttribute){for(let Oe=0;Oe<ye.locationSize;Oe++)D(ye.location+Oe,ke.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Oe=0;Oe<ye.locationSize;Oe++)b(ye.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Oe=0;Oe<ye.locationSize;Oe++)C(ye.location+Oe,le/ye.locationSize,Ue,Y,le*Te,le/ye.locationSize*Oe*Te,ut)}}else if(ee!==void 0){const Y=ee[de];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(ye.location,Y);break;case 3:i.vertexAttrib3fv(ye.location,Y);break;case 4:i.vertexAttrib4fv(ye.location,Y);break;default:i.vertexAttrib1fv(ye.location,Y)}}}}U()}function Z(){Q();for(const N in o){const J=o[N];for(const $ in J){const ae=J[$];for(const I in ae)v(ae[I].object),delete ae[I];delete J[$]}delete o[N]}}function M(N){if(o[N.id]===void 0)return;const J=o[N.id];for(const $ in J){const ae=J[$];for(const I in ae)v(ae[I].object),delete ae[I];delete J[$]}delete o[N.id]}function R(N){for(const J in o){const $=o[J];if($[N.id]===void 0)continue;const ae=$[N.id];for(const I in ae)v(ae[I].object),delete ae[I];delete $[N.id]}}function Q(){te(),h=!0,u!==c&&(u=c,g(u.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:te,dispose:Z,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:b,disableUnusedAttributes:U}}function Ex(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function o(h,f){i.drawArrays(s,h,f),t.update(f,s,1)}function c(h,f,d){if(d===0)return;let g,v;if(r)g=i,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,h,f,d),t.update(f,s,d)}function u(h,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(h[v],f[v]);else{g.multiDrawArraysWEBGL(s,h,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function bx(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,b=a||e.has("OES_texture_float"),D=S&&b,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:w,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:D,maxSamples:U}}function Tx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Li,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||r;return r=d,n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,g){const v=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?h(null):u();else{const w=s?0:n,S=w*4;let b=m.clippingState||null;c.value=b,b=h(v,d,S,g);for(let D=0;D!==S;++D)b[D]=t[D];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,g,v){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,v!==!0||p===null){const m=g+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,b=g;S!==x;++S,b+=4)a.copy(f[S]).applyMatrix4(w,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Ax(i){let e=new WeakMap;function t(a,o){return o===vc?a.mapping=es:o===xc&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vc||o===xc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new O_(c.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Wf extends Hf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,Sh=[.125,.215,.35,.446,.526,.582],ir=20,Za=new Wf,Eh=new xt;let Ka=null,Ja=0,Qa=0;const tr=(1+Math.sqrt(5))/2,Hr=1/tr,bh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,tr,Hr),new F(0,tr,-Hr),new F(Hr,0,tr),new F(-Hr,0,tr),new F(tr,Hr,0),new F(-tr,Hr,0)];class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,Qa),e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ps,format:$n,colorSpace:zi,depthBuffer:!1},r=Ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(s)),this._blurMaterial=Rx(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,r){const o=new In(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Eh),h.toneMapping=Oi,h.autoClear=!1;const g=new Ds({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),v=new Vt(new zs,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(Eh),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(o.up.set(0,c[m],0),o.lookAt(u[m],0,0)):w===1?(o.up.set(0,0,c[m]),o.lookAt(0,u[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,u[m]));const S=this._cubeSize;Ro(r,w*S,m>2?S:0,S,S),h.setRenderTarget(r),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ro(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(r-1)%bh.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Vt(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ir-1),x=s/v,p=isFinite(s)?1+Math.floor(h*x):ir;p>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ir}`);const m=[];let w=0;for(let C=0;C<ir;++C){const z=C/x,Z=Math.exp(-z*z/2);m.push(Z),C===0?w+=Z:C<p&&(w+=2*Z)}for(let C=0;C<m.length;C++)m[C]=m[C]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-n;const b=this._sizeLods[r],D=3*b*(r>S-qr?r-S+qr:0),U=4*(this._cubeSize-b);Ro(t,D,U,3*b,2*b),c.setRenderTarget(t),c.render(f,Za)}}function wx(i){const e=[],t=[],n=[];let r=i;const s=i-qr+1+Sh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-qr?c=Sh[a-i+qr-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,x=3,p=2,m=1,w=new Float32Array(x*v*g),S=new Float32Array(p*v*g),b=new Float32Array(m*v*g);for(let U=0;U<g;U++){const C=U%3*2/3-1,z=U>2?0:-1,Z=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];w.set(Z,x*v*U),S.set(d,p*v*U);const M=[U,U,U,U,U,U];b.set(M,m*v*U)}const D=new Nn;D.setAttribute("position",new ii(w,x)),D.setAttribute("uv",new ii(S,p)),D.setAttribute("faceIndex",new ii(b,m)),e.push(D),r>qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ah(i,e,t){const n=new cr(i,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Rx(i,e,t){const n=new Float32Array(ir),r=new F(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wh(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Rh(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function Cx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===vc||c===xc,h=c===es||c===ts;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Th(i)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new Th(i));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Px(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const x=g[v];for(let p=0,m=x.length;p<m;p++)e.update(x[p],i.ARRAY_BUFFER)}}function u(f){const d=[],g=f.index,v=f.attributes.position;let x=0;if(g!==null){const w=g.array;x=g.version;for(let S=0,b=w.length;S<b;S+=3){const D=w[S+0],U=w[S+1],C=w[S+2];d.push(D,U,U,C,C,D)}}else if(v!==void 0){const w=v.array;x=v.version;for(let S=0,b=w.length/3-1;S<b;S+=3){const D=S+0,U=S+1,C=S+2;d.push(D,U,U,C,C,D)}}else return;const p=new(Pf(d)?zf:Bf)(d,1);p.version=x;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function h(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Ux(i,e,t,n){const r=n.isWebGL2;let s;function a(g){s=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,v){i.drawElements(s,v,o,g*c),t.update(v,s,1)}function f(g,v,x){if(x===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,v,o,g*c,x),t.update(v,s,x)}function d(g,v,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(g[m]/c,v[m]);else{p.multiDrawElementsWEBGL(s,v,0,o,g,0,x);let m=0;for(let w=0;w<x;w++)m+=v[w];t.update(m,s,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Dx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ix(i,e){return i[0]-e[0]}function Nx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ox(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Kt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let p=s.get(h);if(p===void 0||p.count!==x){let te=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",te)};var g=te;p!==void 0&&p.texture.dispose();const m=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;m===!0&&(C=1),w===!0&&(C=2),S===!0&&(C=3);let z=h.attributes.position.count*C,Z=1;z>e.maxTextureSize&&(Z=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const M=new Float32Array(z*Z*4*x),R=new If(M,z,Z,x);R.type=vi,R.needsUpdate=!0;const Q=C*4;for(let N=0;N<x;N++){const J=b[N],$=D[N],ae=U[N],I=z*Z*4*N;for(let re=0;re<J.count;re++){const ee=re*Q;m===!0&&(a.fromBufferAttribute(J,re),M[I+ee+0]=a.x,M[I+ee+1]=a.y,M[I+ee+2]=a.z,M[I+ee+3]=0),w===!0&&(a.fromBufferAttribute($,re),M[I+ee+4]=a.x,M[I+ee+5]=a.y,M[I+ee+6]=a.z,M[I+ee+7]=0),S===!0&&(a.fromBufferAttribute(ae,re),M[I+ee+8]=a.x,M[I+ee+9]=a.y,M[I+ee+10]=a.z,M[I+ee+11]=ae.itemSize===4?a.w:1)}}p={count:x,texture:R,size:new Me(z,Z)},s.set(h,p),h.addEventListener("dispose",te)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let m=0;for(let S=0;S<d.length;S++)m+=d[S];const w=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let x=n[h.id];if(x===void 0||x.length!==v){x=[];for(let b=0;b<v;b++)x[b]=[b,0];n[h.id]=x}for(let b=0;b<v;b++){const D=x[b];D[0]=b,D[1]=d[b]}x.sort(Nx);for(let b=0;b<8;b++)b<v&&x[b][1]?(o[b][0]=x[b][0],o[b][1]=x[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Ix);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const D=o[b],U=D[0],C=D[1];U!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+b)!==p[U]&&h.setAttribute("morphTarget"+b,p[U]),m&&h.getAttribute("morphNormal"+b)!==m[U]&&h.setAttribute("morphNormal"+b,m[U]),r[b]=C,w+=C):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const S=h.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Fx(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class Xf extends Mn{constructor(e,t,n,r,s,a,o,c,u,h){if(h=h!==void 0?h:ar,h!==ar&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ar&&(n=Di),n===void 0&&h===ns&&(n=or),super(null,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qf=new Mn,Yf=new Xf(1,1);Yf.compareFunction=Cf;const $f=new If,jf=new x_,Zf=new Gf,Ch=[],Lh=[],Ph=new Float32Array(16),Uh=new Float32Array(9),Dh=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ch[r];if(s===void 0&&(s=new Float32Array(r),Ch[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zo(i,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Dh.set(n),i.uniformMatrix2fv(this.addr,!1,Dh),Yt(t,n)}}function Vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Yt(t,n)}}function Wx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ph.set(n),i.uniformMatrix4fv(this.addr,!1,Ph),Yt(t,n)}}function Xx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function $x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function jx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Qx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Yf:qf;t.setTexture2D(e||s,r)}function ey(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jf,r)}function ty(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zf,r)}function ny(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||$f,r)}function iy(i){switch(i){case 5126:return Bx;case 35664:return zx;case 35665:return kx;case 35666:return Hx;case 35674:return Gx;case 35675:return Vx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return $x;case 5125:return jx;case 36294:return Zx;case 36295:return Kx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function ry(i,e){i.uniform1fv(this.addr,e)}function sy(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function oy(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function ay(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function cy(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ly(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uy(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hy(i,e){i.uniform1iv(this.addr,e)}function fy(i,e){i.uniform2iv(this.addr,e)}function dy(i,e){i.uniform3iv(this.addr,e)}function py(i,e){i.uniform4iv(this.addr,e)}function my(i,e){i.uniform1uiv(this.addr,e)}function gy(i,e){i.uniform2uiv(this.addr,e)}function _y(i,e){i.uniform3uiv(this.addr,e)}function vy(i,e){i.uniform4uiv(this.addr,e)}function xy(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||qf,s[a])}function yy(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jf,s[a])}function My(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Zf,s[a])}function Sy(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$f,s[a])}function Ey(i){switch(i){case 5126:return ry;case 35664:return sy;case 35665:return oy;case 35666:return ay;case 35674:return cy;case 35675:return ly;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return fy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Sy}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iy(t.type)}}class Ty{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ey(t.type)}}class Ay{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Ih(i,e){i.seq.push(e),i.map[e.id]=e}function wy(i,e,t){const n=i.name,r=n.length;for(ec.lastIndex=0;;){const s=ec.exec(n),a=ec.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Ih(t,u===void 0?new by(o,i,e):new Ty(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ay(o),Ih(t,f)),t=f}}}class Do{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);wy(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ry=37297;let Cy=0;function Ly(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Py(i){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(i);let n;switch(e===t?n="":e===Ho&&t===ko?n="LinearDisplayP3ToLinearSRGB":e===ko&&t===Ho&&(n="LinearSRGBToLinearDisplayP3"),i){case zi:case $o:return[n,"LinearTransferOETF"];case Qn:case kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Oh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ly(i.getShaderSource(e),a)}else return r}function Uy(i,e){const t=Py(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dy(i,e){let t;switch(e){case wg:t="Linear";break;case Rg:t="Reinhard";break;case Cg:t="OptimizedCineon";break;case Lg:t="ACESFilmic";break;case Ug:t="AgX";break;case Dg:t="Neutral";break;case Pg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Iy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function Ny(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Oy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Yr(i){return i!==""}function Fh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const By=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(By,ky)}const zy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ky(i,e){let t=rt[e];if(t===void 0){const n=zy.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}const Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(Hy,Gy)}function Gy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Wy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function qy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case Tg:e="ENVMAP_BLENDING_MIX";break;case Ag:e="ENVMAP_BLENDING_ADD";break}return e}function Yy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $y(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Vy(t),u=Wy(t),h=Xy(t),f=qy(t),d=Yy(t),g=t.isWebGL2?"":Iy(t),v=Ny(t),x=Oy(s),p=r.createProgram();let m,w,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Yr).join(`
`),m.length>0&&(m+=`
`),w=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Yr).join(`
`),w.length>0&&(w+=`
`)):(m=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),w=[g,kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Uy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=bc(a),a=Fh(a,t),a=Bh(a,t),o=bc(o),o=Fh(o,t),o=Bh(o,t),a=zh(a),o=zh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const b=S+m+a,D=S+w+o,U=Nh(r,r.VERTEX_SHADER,b),C=Nh(r,r.FRAGMENT_SHADER,D);r.attachShader(p,U),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function z(Q){if(i.debug.checkShaderErrors){const te=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(U).trim(),J=r.getShaderInfoLog(C).trim();let $=!0,ae=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,U,C);else{const I=Oh(r,U,"vertex"),re=Oh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+te+`
`+I+`
`+re)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(N===""||J==="")&&(ae=!1);ae&&(Q.diagnostics={runnable:$,programLog:te,vertexShader:{log:N,prefix:m},fragmentShader:{log:J,prefix:w}})}r.deleteShader(U),r.deleteShader(C),Z=new Do(r,p),M=Fy(r,p)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,Ry)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=U,this.fragmentShader=C,this}let jy=0;class Zy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ky(e),t.set(e,n)),n}}class Ky{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}}function Jy(i,e,t,n,r,s,a){const o=new Of,c=new Zy,u=new Set,h=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,R,Q,te,N){const J=te.fog,$=N.geometry,ae=M.isMeshStandardMaterial?te.environment:null,I=(M.isMeshStandardMaterial?t:e).get(M.envMap||ae),re=I&&I.mapping===Yo?I.image.height:null,ee=x[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ye=de!==void 0?de.length:0;let ke=0;$.morphAttributes.position!==void 0&&(ke=1),$.morphAttributes.normal!==void 0&&(ke=2),$.morphAttributes.color!==void 0&&(ke=3);let Y,le,ne,Be;if(ee){const ft=ei[ee];Y=ft.vertexShader,le=ft.fragmentShader}else Y=M.vertexShader,le=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),Be=c.getFragmentShaderID(M);const Ue=i.getRenderTarget(),Te=N.isInstancedMesh===!0,ut=N.isBatchedMesh===!0,Oe=!!M.map,G=!!M.matcap,Ct=!!I,Ce=!!M.aoMap,Ze=!!M.lightMap,Fe=!!M.bumpMap,at=!!M.normalMap,Ke=!!M.displacementMap,et=!!M.emissiveMap,Et=!!M.metalnessMap,L=!!M.roughnessMap,E=M.anisotropy>0,j=M.clearcoat>0,ie=M.iridescence>0,ue=M.sheen>0,ce=M.transmission>0,ze=E&&!!M.anisotropyMap,Ie=j&&!!M.clearcoatMap,me=j&&!!M.clearcoatNormalMap,xe=j&&!!M.clearcoatRoughnessMap,Xe=ie&&!!M.iridescenceMap,pe=ie&&!!M.iridescenceThicknessMap,Pt=ue&&!!M.sheenColorMap,tt=ue&&!!M.sheenRoughnessMap,De=!!M.specularMap,Ae=!!M.specularColorMap,Le=!!M.specularIntensityMap,P=ce&&!!M.transmissionMap,se=ce&&!!M.thicknessMap,Re=!!M.gradientMap,O=!!M.alphaMap,fe=M.alphaTest>0,W=!!M.alphaHash,he=!!M.extensions;let _e=Oi;M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(_e=i.toneMapping);const qe={isWebGL2:f,shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:le,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:Be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:ut,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:zi,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:G,envMap:Ct,envMapMode:Ct&&I.mapping,envMapCubeUVHeight:re,aoMap:Ce,lightMap:Ze,bumpMap:Fe,normalMap:at,displacementMap:g&&Ke,emissiveMap:et,normalMapObjectSpace:at&&M.normalMapType===Xg,normalMapTangentSpace:at&&M.normalMapType===Wg,metalnessMap:Et,roughnessMap:L,anisotropy:E,anisotropyMap:ze,clearcoat:j,clearcoatMap:Ie,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:ie,iridescenceMap:Xe,iridescenceThicknessMap:pe,sheen:ue,sheenColorMap:Pt,sheenRoughnessMap:tt,specularMap:De,specularColorMap:Ae,specularIntensityMap:Le,transmission:ce,transmissionMap:P,thicknessMap:se,gradientMap:Re,opaque:M.transparent===!1&&M.blending===Jr&&M.alphaToCoverage===!1,alphaMap:O,alphaTest:fe,alphaHash:W,combine:M.combine,mapUv:Oe&&p(M.map.channel),aoMapUv:Ce&&p(M.aoMap.channel),lightMapUv:Ze&&p(M.lightMap.channel),bumpMapUv:Fe&&p(M.bumpMap.channel),normalMapUv:at&&p(M.normalMap.channel),displacementMapUv:Ke&&p(M.displacementMap.channel),emissiveMapUv:et&&p(M.emissiveMap.channel),metalnessMapUv:Et&&p(M.metalnessMap.channel),roughnessMapUv:L&&p(M.roughnessMap.channel),anisotropyMapUv:ze&&p(M.anisotropyMap.channel),clearcoatMapUv:Ie&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&p(M.sheenRoughnessMap.channel),specularMapUv:De&&p(M.specularMap.channel),specularColorMapUv:Ae&&p(M.specularColorMap.channel),specularIntensityMapUv:Le&&p(M.specularIntensityMap.channel),transmissionMapUv:P&&p(M.transmissionMap.channel),thicknessMapUv:se&&p(M.thicknessMap.channel),alphaMapUv:O&&p(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(at||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(Oe||O),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&St.getTransfer(M.map.colorSpace)===Lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qn,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=u.has(1),qe.vertexUv2s=u.has(2),qe.vertexUv3s=u.has(3),u.clear(),qe}function w(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Q in M.defines)R.push(Q),R.push(M.defines[Q]);return M.isRawShaderMaterial===!1&&(S(R,M),b(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function S(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function b(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),M.push(o.mask)}function D(M){const R=x[M.type];let Q;if(R){const te=ei[R];Q=U_.clone(te.uniforms)}else Q=M.uniforms;return Q}function U(M,R){let Q;for(let te=0,N=h.length;te<N;te++){const J=h[te];if(J.cacheKey===R){Q=J,++Q.usedTimes;break}}return Q===void 0&&(Q=new $y(i,R,M,s),h.push(Q)),Q}function C(M){if(--M.usedTimes===0){const R=h.indexOf(M);h[R]=h[h.length-1],h.pop(),M.destroy()}}function z(M){c.remove(M)}function Z(){c.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:D,acquireProgram:U,releaseProgram:C,releaseShaderCache:z,programs:h,dispose:Z}}function Qy(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function eM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,g,v,x,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:v,renderOrder:f.renderOrder,z:x,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=x,m.group=p),e++,m}function o(f,d,g,v,x,p){const m=a(f,d,g,v,x,p);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):t.push(m)}function c(f,d,g,v,x,p){const m=a(f,d,g,v,x,p);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||eM),n.length>1&&n.sort(d||Hh),r.length>1&&r.sort(d||Hh)}function h(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function tM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Gh,i.set(n,[a])):r>=s.length?(a=new Gh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function nM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new xt};break;case"SpotLight":t={position:new F,direction:new F,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function iM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let rM=0;function sM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oM(i,e){const t=new nM,n=iM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new F);const s=new F,a=new Ft,o=new Ft;function c(h,f){let d=0,g=0,v=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let x=0,p=0,m=0,w=0,S=0,b=0,D=0,U=0,C=0,z=0,Z=0;h.sort(sM);const M=f===!0?Math.PI:1;for(let Q=0,te=h.length;Q<te;Q++){const N=h[Q],J=N.color,$=N.intensity,ae=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=J.r*$*M,g+=J.g*$*M,v+=J.b*$*M;else if(N.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(N.sh.coefficients[re],$);Z++}else if(N.isDirectionalLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const ee=N.shadow,de=n.get(N);de.shadowBias=ee.bias,de.shadowNormalBias=ee.normalBias,de.shadowRadius=ee.radius,de.shadowMapSize=ee.mapSize,r.directionalShadow[x]=de,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=N.shadow.matrix,b++}r.directional[x]=re,x++}else if(N.isSpotLight){const re=t.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(J).multiplyScalar($*M),re.distance=ae,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,r.spot[m]=re;const ee=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,ee.updateMatrices(N),N.castShadow&&z++),r.spotLightMatrix[m]=ee.matrix,N.castShadow){const de=n.get(N);de.shadowBias=ee.bias,de.shadowNormalBias=ee.normalBias,de.shadowRadius=ee.radius,de.shadowMapSize=ee.mapSize,r.spotShadow[m]=de,r.spotShadowMap[m]=I,U++}m++}else if(N.isRectAreaLight){const re=t.get(N);re.color.copy(J).multiplyScalar($),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),r.rectArea[w]=re,w++}else if(N.isPointLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*M),re.distance=N.distance,re.decay=N.decay,N.castShadow){const ee=N.shadow,de=n.get(N);de.shadowBias=ee.bias,de.shadowNormalBias=ee.normalBias,de.shadowRadius=ee.radius,de.shadowMapSize=ee.mapSize,de.shadowCameraNear=ee.camera.near,de.shadowCameraFar=ee.camera.far,r.pointShadow[p]=de,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=N.shadow.matrix,D++}r.point[p]=re,p++}else if(N.isHemisphereLight){const re=t.get(N);re.skyColor.copy(N.color).multiplyScalar($*M),re.groundColor.copy(N.groundColor).multiplyScalar($*M),r.hemi[S]=re,S++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==x||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==w||R.hemiLength!==S||R.numDirectionalShadows!==b||R.numPointShadows!==D||R.numSpotShadows!==U||R.numSpotMaps!==C||R.numLightProbes!==Z)&&(r.directional.length=x,r.spot.length=m,r.rectArea.length=w,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+C-z,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=Z,R.directionalLength=x,R.pointLength=p,R.spotLength=m,R.rectAreaLength=w,R.hemiLength=S,R.numDirectionalShadows=b,R.numPointShadows=D,R.numSpotShadows=U,R.numSpotMaps=C,R.numLightProbes=Z,r.version=rM++)}function u(h,f){let d=0,g=0,v=0,x=0,p=0;const m=f.matrixWorldInverse;for(let w=0,S=h.length;w<S;w++){const b=h[w];if(b.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),d++}else if(b.isSpotLight){const D=r.spot[v];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),v++}else if(b.isRectAreaLight){const D=r.rectArea[x];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(m),o.identity(),a.copy(b.matrixWorld),a.premultiply(m),o.extractRotation(a),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){const D=r.point[g];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(m),g++}else if(b.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(m),p++}}}return{setup:c,setupView:u,state:r}}function Vh(i,e){const t=new oM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function c(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function aM(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Vh(i,e),t.set(s,[c])):a>=o.length?(c=new Vh(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class cM extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`;function fM(i,e,t){let n=new Vc;const r=new Me,s=new Me,a=new Kt,o=new cM({depthPacking:Vg}),c=new lM,u={},h=t.maxTextureSize,f={[ri]:yn,[yn]:ri,[qn]:qn},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:uM,fragmentShader:hM}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new Nn;v.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf;let m=this.type;this.render=function(U,C,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const Z=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Ni),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const te=m!==gi&&this.type===gi,N=m===gi&&this.type!==gi;for(let J=0,$=U.length;J<$;J++){const ae=U[J],I=ae.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const re=I.getFrameExtents();if(r.multiply(re),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,I.mapSize.y=s.y)),I.map===null||te===!0||N===!0){const de=this.type!==gi?{minFilter:mn,magFilter:mn}:{};I.map!==null&&I.map.dispose(),I.map=new cr(r.x,r.y,de),I.map.texture.name=ae.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const ee=I.getViewportCount();for(let de=0;de<ee;de++){const ye=I.getViewport(de);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),Q.viewport(a),I.updateMatrices(ae,de),n=I.getFrustum(),b(C,z,I.camera,ae,this.type)}I.isPointLightShadow!==!0&&this.type===gi&&w(I,z),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(Z,M,R)};function w(U,C){const z=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(C,null,z,d,x,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(C,null,z,g,x,null)}function S(U,C,z,Z){let M=null;const R=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(R!==void 0)M=R;else if(M=z.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Q=M.uuid,te=C.uuid;let N=u[Q];N===void 0&&(N={},u[Q]=N);let J=N[te];J===void 0&&(J=M.clone(),N[te]=J,C.addEventListener("dispose",D)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,Z===gi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=i.properties.get(M);Q.light=z}return M}function b(U,C,z,Z,M){if(U.visible===!1)return;if(U.layers.test(C.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&M===gi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const te=e.update(U),N=U.material;if(Array.isArray(N)){const J=te.groups;for(let $=0,ae=J.length;$<ae;$++){const I=J[$],re=N[I.materialIndex];if(re&&re.visible){const ee=S(U,re,Z,M);U.onBeforeShadow(i,U,C,z,te,ee,I),i.renderBufferDirect(z,null,te,ee,U,I),U.onAfterShadow(i,U,C,z,te,ee,I)}}}else if(N.visible){const J=S(U,N,Z,M);U.onBeforeShadow(i,U,C,z,te,J,null),i.renderBufferDirect(z,null,te,J,U,null),U.onAfterShadow(i,U,C,z,te,J,null)}}const Q=U.children;for(let te=0,N=Q.length;te<N;te++)b(Q[te],C,z,Z,M)}function D(U){U.target.removeEventListener("dispose",D);for(const z in u){const Z=u[z],M=U.target.uuid;M in Z&&(Z[M].dispose(),delete Z[M])}}}function dM(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const fe=new Kt;let W=null;const he=new Kt(0,0,0,0);return{setMask:function(_e){W!==_e&&!O&&(i.colorMask(_e,_e,_e,_e),W=_e)},setLocked:function(_e){O=_e},setClear:function(_e,qe,ft,mt,Ut){Ut===!0&&(_e*=mt,qe*=mt,ft*=mt),fe.set(_e,qe,ft,mt),he.equals(fe)===!1&&(i.clearColor(_e,qe,ft,mt),he.copy(fe))},reset:function(){O=!1,W=null,he.set(-1,0,0,0)}}}function s(){let O=!1,fe=null,W=null,he=null;return{setTest:function(_e){_e?Te(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!O&&(i.depthMask(_e),fe=_e)},setFunc:function(_e){if(W!==_e){switch(_e){case vg:i.depthFunc(i.NEVER);break;case xg:i.depthFunc(i.ALWAYS);break;case yg:i.depthFunc(i.LESS);break;case Bo:i.depthFunc(i.LEQUAL);break;case Mg:i.depthFunc(i.EQUAL);break;case Sg:i.depthFunc(i.GEQUAL);break;case Eg:i.depthFunc(i.GREATER);break;case bg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=_e}},setLocked:function(_e){O=_e},setClear:function(_e){he!==_e&&(i.clearDepth(_e),he=_e)},reset:function(){O=!1,fe=null,W=null,he=null}}}function a(){let O=!1,fe=null,W=null,he=null,_e=null,qe=null,ft=null,mt=null,Ut=null;return{setTest:function(ht){O||(ht?Te(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!O&&(i.stencilMask(ht),fe=ht)},setFunc:function(ht,bt,Ht){(W!==ht||he!==bt||_e!==Ht)&&(i.stencilFunc(ht,bt,Ht),W=ht,he=bt,_e=Ht)},setOp:function(ht,bt,Ht){(qe!==ht||ft!==bt||mt!==Ht)&&(i.stencilOp(ht,bt,Ht),qe=ht,ft=bt,mt=Ht)},setLocked:function(ht){O=ht},setClear:function(ht){Ut!==ht&&(i.clearStencil(ht),Ut=ht)},reset:function(){O=!1,fe=null,W=null,he=null,_e=null,qe=null,ft=null,mt=null,Ut=null}}}const o=new r,c=new s,u=new a,h=new WeakMap,f=new WeakMap;let d={},g={},v=new WeakMap,x=[],p=null,m=!1,w=null,S=null,b=null,D=null,U=null,C=null,z=null,Z=new xt(0,0,0),M=0,R=!1,Q=null,te=null,N=null,J=null,$=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,re=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ee)[1]),I=re>=1):ee.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),I=re>=2);let de=null,ye={};const ke=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),le=new Kt().fromArray(ke),ne=new Kt().fromArray(Y);function Be(O,fe,W,he){const _e=new Uint8Array(4),qe=i.createTexture();i.bindTexture(O,qe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<W;ft++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(fe+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return qe}const Ue={};Ue[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Te(i.DEPTH_TEST),c.setFunc(Bo),Ke(!1),et(Su),Te(i.CULL_FACE),Fe(Ni);function Te(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function ut(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Oe(O,fe){return g[O]!==fe?(i.bindFramebuffer(O,fe),g[O]=fe,n&&(O===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=fe),O===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function G(O,fe){let W=x,he=!1;if(O){W=v.get(fe),W===void 0&&(W=[],v.set(fe,W));const _e=O.textures;if(W.length!==_e.length||W[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,ft=_e.length;qe<ft;qe++)W[qe]=i.COLOR_ATTACHMENT0+qe;W.length=_e.length,he=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,he=!0);if(he)if(t.isWebGL2)i.drawBuffers(W);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ct(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const Ce={[nr]:i.FUNC_ADD,[ig]:i.FUNC_SUBTRACT,[rg]:i.FUNC_REVERSE_SUBTRACT};if(n)Ce[Au]=i.MIN,Ce[wu]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ce[Au]=O.MIN_EXT,Ce[wu]=O.MAX_EXT)}const Ze={[sg]:i.ZERO,[og]:i.ONE,[ag]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[dg]:i.SRC_ALPHA_SATURATE,[hg]:i.DST_COLOR,[lg]:i.DST_ALPHA,[cg]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[fg]:i.ONE_MINUS_DST_COLOR,[ug]:i.ONE_MINUS_DST_ALPHA,[pg]:i.CONSTANT_COLOR,[mg]:i.ONE_MINUS_CONSTANT_COLOR,[gg]:i.CONSTANT_ALPHA,[_g]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(O,fe,W,he,_e,qe,ft,mt,Ut,ht){if(O===Ni){m===!0&&(ut(i.BLEND),m=!1);return}if(m===!1&&(Te(i.BLEND),m=!0),O!==ng){if(O!==w||ht!==R){if((S!==nr||U!==nr)&&(i.blendEquation(i.FUNC_ADD),S=nr,U=nr),ht)switch(O){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.ONE,i.ONE);break;case bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,D=null,C=null,z=null,Z.set(0,0,0),M=0,w=O,R=ht}return}_e=_e||fe,qe=qe||W,ft=ft||he,(fe!==S||_e!==U)&&(i.blendEquationSeparate(Ce[fe],Ce[_e]),S=fe,U=_e),(W!==b||he!==D||qe!==C||ft!==z)&&(i.blendFuncSeparate(Ze[W],Ze[he],Ze[qe],Ze[ft]),b=W,D=he,C=qe,z=ft),(mt.equals(Z)===!1||Ut!==M)&&(i.blendColor(mt.r,mt.g,mt.b,Ut),Z.copy(mt),M=Ut),w=O,R=!1}function at(O,fe){O.side===qn?ut(i.CULL_FACE):Te(i.CULL_FACE);let W=O.side===yn;fe&&(W=!W),Ke(W),O.blending===Jr&&O.transparent===!1?Fe(Ni):Fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);const he=O.stencilWrite;u.setTest(he),he&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),L(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){Q!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),Q=O)}function et(O){O!==Jm?(Te(i.CULL_FACE),O!==te&&(O===Su?i.cullFace(i.BACK):O===Qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),te=O}function Et(O){O!==N&&(I&&i.lineWidth(O),N=O)}function L(O,fe,W){O?(Te(i.POLYGON_OFFSET_FILL),(J!==fe||$!==W)&&(i.polygonOffset(fe,W),J=fe,$=W)):ut(i.POLYGON_OFFSET_FILL)}function E(O){O?Te(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function j(O){O===void 0&&(O=i.TEXTURE0+ae-1),de!==O&&(i.activeTexture(O),de=O)}function ie(O,fe,W){W===void 0&&(de===null?W=i.TEXTURE0+ae-1:W=de);let he=ye[W];he===void 0&&(he={type:void 0,texture:void 0},ye[W]=he),(he.type!==O||he.texture!==fe)&&(de!==W&&(i.activeTexture(W),de=W),i.bindTexture(O,fe||Ue[O]),he.type=O,he.texture=fe)}function ue(){const O=ye[de];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function Le(O){ne.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function P(O,fe){let W=f.get(fe);W===void 0&&(W=new WeakMap,f.set(fe,W));let he=W.get(O);he===void 0&&(he=i.getUniformBlockIndex(fe,O.name),W.set(O,he))}function se(O,fe){const he=f.get(fe).get(O);h.get(fe)!==he&&(i.uniformBlockBinding(fe,he,O.__bindingPointIndex),h.set(fe,he))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},de=null,ye={},g={},v=new WeakMap,x=[],p=null,m=!1,w=null,S=null,b=null,D=null,U=null,C=null,z=null,Z=new xt(0,0,0),M=0,R=!1,Q=null,te=null,N=null,J=null,$=null,le.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Te,disable:ut,bindFramebuffer:Oe,drawBuffers:G,useProgram:Ct,setBlending:Fe,setMaterial:at,setFlipSided:Ke,setCullFace:et,setLineWidth:Et,setPolygonOffset:L,setScissorTest:E,activeTexture:j,bindTexture:ie,unbindTexture:ue,compressedTexImage2D:ce,compressedTexImage3D:ze,texImage2D:tt,texImage3D:De,updateUBOMapping:P,uniformBlockBinding:se,texStorage2D:pe,texStorage3D:Pt,texSubImage2D:Ie,texSubImage3D:me,compressedTexSubImage2D:xe,compressedTexSubImage3D:Xe,scissor:Ae,viewport:Le,reset:Re}}function pM(i,e,t,n,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Me,f=new WeakMap;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return v?new OffscreenCanvas(L,E):Wo("canvas")}function p(L,E,j,ie){let ue=1;const ce=Et(L);if((ce.width>ie||ce.height>ie)&&(ue=ie/Math.max(ce.width,ce.height)),ue<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ze=E?Vo:Math.floor,Ie=ze(ue*ce.width),me=ze(ue*ce.height);d===void 0&&(d=x(Ie,me));const xe=j?x(Ie,me):d;return xe.width=Ie,xe.height=me,xe.getContext("2d").drawImage(L,0,0,Ie,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ie+"x"+me+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function m(L){const E=Et(L);return Ec(E.width)&&Ec(E.height)}function w(L){return o?!1:L.wrapS!==Yn||L.wrapT!==Yn||L.minFilter!==mn&&L.minFilter!==vn}function S(L,E){return L.generateMipmaps&&E&&L.minFilter!==mn&&L.minFilter!==vn}function b(L){i.generateMipmap(L)}function D(L,E,j,ie,ue=!1){if(o===!1)return E;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=E;if(E===i.RED&&(j===i.FLOAT&&(ce=i.R32F),j===i.HALF_FLOAT&&(ce=i.R16F),j===i.UNSIGNED_BYTE&&(ce=i.R8)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.R8UI),j===i.UNSIGNED_SHORT&&(ce=i.R16UI),j===i.UNSIGNED_INT&&(ce=i.R32UI),j===i.BYTE&&(ce=i.R8I),j===i.SHORT&&(ce=i.R16I),j===i.INT&&(ce=i.R32I)),E===i.RG&&(j===i.FLOAT&&(ce=i.RG32F),j===i.HALF_FLOAT&&(ce=i.RG16F),j===i.UNSIGNED_BYTE&&(ce=i.RG8)),E===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RG8UI),j===i.UNSIGNED_SHORT&&(ce=i.RG16UI),j===i.UNSIGNED_INT&&(ce=i.RG32UI),j===i.BYTE&&(ce=i.RG8I),j===i.SHORT&&(ce=i.RG16I),j===i.INT&&(ce=i.RG32I)),E===i.RGBA){const ze=ue?zo:St.getTransfer(ie);j===i.FLOAT&&(ce=i.RGBA32F),j===i.HALF_FLOAT&&(ce=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ce=ze===Lt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function U(L,E,j){return S(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==mn&&L.minFilter!==vn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function C(L){return L===mn||L===Ru||L===fs?i.NEAREST:i.LINEAR}function z(L){const E=L.target;E.removeEventListener("dispose",z),M(E),E.isVideoTexture&&f.delete(E)}function Z(L){const E=L.target;E.removeEventListener("dispose",Z),Q(E)}function M(L){const E=n.get(L);if(E.__webglInit===void 0)return;const j=L.source,ie=g.get(j);if(ie){const ue=ie[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&R(L),Object.keys(ie).length===0&&g.delete(j)}n.remove(L)}function R(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const j=L.source,ie=g.get(j);delete ie[E.__cacheKey],a.memory.textures--}function Q(L){const E=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ue=0;ue<E.__webglFramebuffer[ie].length;ue++)i.deleteFramebuffer(E.__webglFramebuffer[ie][ue]);else i.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[ie]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=L.textures;for(let ie=0,ue=j.length;ie<ue;ie++){const ce=n.get(j[ie]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(j[ie])}n.remove(L)}let te=0;function N(){te=0}function J(){const L=te;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),te+=1,L}function $(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ae(L,E){const j=n.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(j,L,E);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function I(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){ne(j,L,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function re(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){ne(j,L,E);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function ee(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Be(j,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}const de={[yc]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Mc]:i.MIRRORED_REPEAT},ye={[mn]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[sr]:i.LINEAR_MIPMAP_LINEAR},ke={[qg]:i.NEVER,[Jg]:i.ALWAYS,[Yg]:i.LESS,[Cf]:i.LEQUAL,[$g]:i.EQUAL,[Kg]:i.GEQUAL,[jg]:i.GREATER,[Zg]:i.NOTEQUAL};function Y(L,E,j){if(E.type===vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vn||E.magFilter===Ta||E.magFilter===fs||E.magFilter===sr||E.minFilter===vn||E.minFilter===Ta||E.minFilter===fs||E.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(i.texParameteri(L,i.TEXTURE_WRAP_S,de[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,de[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,de[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ye[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ye[E.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Yn||E.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,C(E.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==mn&&E.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ke[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==fs&&E.minFilter!==sr||E.type===vi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ps&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function le(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const ie=E.source;let ue=g.get(ie);ue===void 0&&(ue={},g.set(ie,ue));const ce=$(E);if(ce!==L.__cacheKey){ue[ce]===void 0&&(ue[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ue[ce].usedTimes++;const ze=ue[L.__cacheKey];ze!==void 0&&(ue[L.__cacheKey].usedTimes--,ze.usedTimes===0&&R(E)),L.__cacheKey=ce,L.__webglTexture=ue[ce].texture}return j}function ne(L,E,j){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);const ue=le(L,E),ce=E.source;t.bindTexture(ie,L.__webglTexture,i.TEXTURE0+j);const ze=n.get(ce);if(ce.version!==ze.__version||ue===!0){t.activeTexture(i.TEXTURE0+j);const Ie=St.getPrimaries(St.workingColorSpace),me=E.colorSpace===Ui?null:St.getPrimaries(E.colorSpace),xe=E.colorSpace===Ui||Ie===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=w(E)&&m(E.image)===!1;let pe=p(E.image,Xe,!1,r.maxTextureSize);pe=et(E,pe);const Pt=m(pe)||o,tt=s.convert(E.format,E.colorSpace);let De=s.convert(E.type),Ae=D(E.internalFormat,tt,De,E.colorSpace,E.isVideoTexture);Y(ie,E,Pt);let Le;const P=E.mipmaps,se=o&&E.isVideoTexture!==!0&&Ae!==Rf,Re=ze.__version===void 0||ue===!0,O=ce.dataReady,fe=U(E,pe,Pt);if(E.isDepthTexture)Ae=i.DEPTH_COMPONENT,o?E.type===vi?Ae=i.DEPTH_COMPONENT32F:E.type===Di?Ae=i.DEPTH_COMPONENT24:E.type===or?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:E.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ar&&Ae===i.DEPTH_COMPONENT&&E.type!==zc&&E.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Di,De=s.convert(E.type)),E.format===ns&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,E.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=or,De=s.convert(E.type))),Re&&(se?t.texStorage2D(i.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ae,pe.width,pe.height,0,tt,De,null));else if(E.isDataTexture)if(P.length>0&&Pt){se&&Re&&t.texStorage2D(i.TEXTURE_2D,fe,Ae,P[0].width,P[0].height);for(let W=0,he=P.length;W<he;W++)Le=P[W],se?O&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,De,Le.data):t.texImage2D(i.TEXTURE_2D,W,Ae,Le.width,Le.height,0,tt,De,Le.data);E.generateMipmaps=!1}else se?(Re&&t.texStorage2D(i.TEXTURE_2D,fe,Ae,pe.width,pe.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,tt,De,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,pe.width,pe.height,0,tt,De,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ae,P[0].width,P[0].height,pe.depth);for(let W=0,he=P.length;W<he;W++)Le=P[W],E.format!==$n?tt!==null?se?O&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,pe.depth,tt,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ae,Le.width,Le.height,pe.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,pe.depth,tt,De,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ae,Le.width,Le.height,pe.depth,0,tt,De,Le.data)}else{se&&Re&&t.texStorage2D(i.TEXTURE_2D,fe,Ae,P[0].width,P[0].height);for(let W=0,he=P.length;W<he;W++)Le=P[W],E.format!==$n?tt!==null?se?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ae,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?O&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,De,Le.data):t.texImage2D(i.TEXTURE_2D,W,Ae,Le.width,Le.height,0,tt,De,Le.data)}else if(E.isDataArrayTexture)se?(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ae,pe.width,pe.height,pe.depth),O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,tt,De,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,tt,De,pe.data);else if(E.isData3DTexture)se?(Re&&t.texStorage3D(i.TEXTURE_3D,fe,Ae,pe.width,pe.height,pe.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,tt,De,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,tt,De,pe.data);else if(E.isFramebufferTexture){if(Re)if(se)t.texStorage2D(i.TEXTURE_2D,fe,Ae,pe.width,pe.height);else{let W=pe.width,he=pe.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ae,W,he,0,tt,De,null),W>>=1,he>>=1}}else if(P.length>0&&Pt){if(se&&Re){const W=Et(P[0]);t.texStorage2D(i.TEXTURE_2D,fe,Ae,W.width,W.height)}for(let W=0,he=P.length;W<he;W++)Le=P[W],se?O&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,tt,De,Le):t.texImage2D(i.TEXTURE_2D,W,Ae,tt,De,Le);E.generateMipmaps=!1}else if(se){if(Re){const W=Et(pe);t.texStorage2D(i.TEXTURE_2D,fe,Ae,W.width,W.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,De,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ae,tt,De,pe);S(E,Pt)&&b(ie),ze.__version=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Be(L,E,j){if(E.image.length!==6)return;const ie=le(L,E),ue=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+j);const ce=n.get(ue);if(ue.version!==ce.__version||ie===!0){t.activeTexture(i.TEXTURE0+j);const ze=St.getPrimaries(St.workingColorSpace),Ie=E.colorSpace===Ui?null:St.getPrimaries(E.colorSpace),me=E.colorSpace===Ui||ze===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,Xe=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let W=0;W<6;W++)!xe&&!Xe?pe[W]=p(E.image[W],!1,!0,r.maxCubemapSize):pe[W]=Xe?E.image[W].image:E.image[W],pe[W]=et(E,pe[W]);const Pt=pe[0],tt=m(Pt)||o,De=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),Le=D(E.internalFormat,De,Ae,E.colorSpace),P=o&&E.isVideoTexture!==!0,se=ce.__version===void 0||ie===!0,Re=ue.dataReady;let O=U(E,Pt,tt);Y(i.TEXTURE_CUBE_MAP,E,tt);let fe;if(xe){P&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,O,Le,Pt.width,Pt.height);for(let W=0;W<6;W++){fe=pe[W].mipmaps;for(let he=0;he<fe.length;he++){const _e=fe[he];E.format!==$n?De!==null?P?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,_e.width,_e.height,De,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,_e.width,_e.height,De,Ae,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Le,_e.width,_e.height,0,De,Ae,_e.data)}}}else{if(fe=E.mipmaps,P&&se){fe.length>0&&O++;const W=Et(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,O,Le,W.width,W.height)}for(let W=0;W<6;W++)if(Xe){P?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,pe[W].width,pe[W].height,De,Ae,pe[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,pe[W].width,pe[W].height,0,De,Ae,pe[W].data);for(let he=0;he<fe.length;he++){const qe=fe[he].image[W].image;P?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,qe.width,qe.height,De,Ae,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Le,qe.width,qe.height,0,De,Ae,qe.data)}}else{P?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,De,Ae,pe[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,De,Ae,pe[W]);for(let he=0;he<fe.length;he++){const _e=fe[he];P?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,De,Ae,_e.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Le,De,Ae,_e.image[W])}}}S(E,tt)&&b(i.TEXTURE_CUBE_MAP),ce.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ue(L,E,j,ie,ue,ce){const ze=s.convert(j.format,j.colorSpace),Ie=s.convert(j.type),me=D(j.internalFormat,ze,Ie,j.colorSpace);if(!n.get(E).__hasExternalTextures){const Xe=Math.max(1,E.width>>ce),pe=Math.max(1,E.height>>ce);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ce,me,Xe,pe,E.depth,0,ze,Ie,null):t.texImage2D(ue,ce,me,Xe,pe,0,ze,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),at(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ue,n.get(j).__webglTexture,0,Fe(E)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ue,n.get(j).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(L,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let ie=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||at(E)){const ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===vi?ie=i.DEPTH_COMPONENT32F:ue.type===Di&&(ie=i.DEPTH_COMPONENT24));const ce=Fe(E);at(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ie,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ie,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){const ie=Fe(E);j&&at(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,E.width,E.height):at(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const ie=E.textures;for(let ue=0;ue<ie.length;ue++){const ce=ie[ue],ze=s.convert(ce.format,ce.colorSpace),Ie=s.convert(ce.type),me=D(ce.internalFormat,ze,Ie,ce.colorSpace),xe=Fe(E);j&&at(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,me,E.width,E.height):at(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae(E.depthTexture,0);const ie=n.get(E.depthTexture).__webglTexture,ue=Fe(E);if(E.depthTexture.format===ar)at(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(E.depthTexture.format===ns)at(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const E=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ut(E.__webglFramebuffer,L)}else if(j){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=i.createRenderbuffer(),Te(E.__webglDepthbuffer[ie],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Te(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(L,E,j){const ie=n.get(L);E!==void 0&&Ue(ie.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Oe(L)}function Ct(L){const E=L.texture,j=n.get(L),ie=n.get(E);L.addEventListener("dispose",Z);const ue=L.textures,ce=L.isWebGLCubeRenderTarget===!0,ze=ue.length>1,Ie=m(L)||o;if(ze||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,a.memory.textures++),ce){j.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[me]=[];for(let xe=0;xe<E.mipmaps.length;xe++)j.__webglFramebuffer[me][xe]=i.createFramebuffer()}else j.__webglFramebuffer[me]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)j.__webglFramebuffer[me]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ze)if(r.drawBuffers)for(let me=0,xe=ue.length;me<xe;me++){const Xe=n.get(ue[me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&at(L)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const xe=ue[me];j.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[me]);const Xe=s.convert(xe.format,xe.colorSpace),pe=s.convert(xe.type),Pt=D(xe.internalFormat,Xe,pe,xe.colorSpace,L.isXRRenderTarget===!0),tt=Fe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Pt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,j.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(j.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(i.TEXTURE_CUBE_MAP,E,Ie);for(let me=0;me<6;me++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ue(j.__webglFramebuffer[me][xe],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else Ue(j.__webglFramebuffer[me],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);S(E,Ie)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let me=0,xe=ue.length;me<xe;me++){const Xe=ue[me],pe=n.get(Xe);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Y(i.TEXTURE_2D,Xe,Ie),Ue(j.__webglFramebuffer,L,Xe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),S(Xe,Ie)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ie.__webglTexture),Y(me,E,Ie),o&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ue(j.__webglFramebuffer[xe],L,E,i.COLOR_ATTACHMENT0,me,xe);else Ue(j.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,me,0);S(E,Ie)&&b(me),t.unbindTexture()}L.depthBuffer&&Oe(L)}function Ce(L){const E=m(L)||o,j=L.textures;for(let ie=0,ue=j.length;ie<ue;ie++){const ce=j[ie];if(S(ce,E)){const ze=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ce).__webglTexture;t.bindTexture(ze,Ie),b(ze),t.unbindTexture()}}}function Ze(L){if(o&&L.samples>0&&at(L)===!1){const E=L.textures,j=L.width,ie=L.height;let ue=i.COLOR_BUFFER_BIT;const ce=[],ze=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(L),me=E.length>1;if(me)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){ce.push(i.COLOR_ATTACHMENT0+xe),L.depthBuffer&&ce.push(ze);const Xe=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Xe===!1&&(L.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]),Xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ze]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ze])),me){const pe=n.get(E[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,j,ie,0,0,j,ie,ue,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]);const Xe=n.get(E[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Fe(L){return Math.min(r.maxSamples,L.samples)}function at(L){const E=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ke(L){const E=a.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function et(L,E){const j=L.colorSpace,ie=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Sc||j!==zi&&j!==Ui&&(St.getTransfer(j)===Lt?o===!1?e.has("EXT_sRGB")===!0&&ie===$n?(L.format=Sc,L.minFilter=vn,L.generateMipmaps=!1):E=Uf.sRGBToLinear(E):(ie!==$n||ue!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function Et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=N,this.setTexture2D=ae,this.setTexture2DArray=I,this.setTexture3D=re,this.setTextureCube=ee,this.rebindTextures=G,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=at}function mM(i,e,t){const n=t.isWebGL2;function r(s,a=Ui){let o;const c=St.getTransfer(a);if(s===Fi)return i.UNSIGNED_BYTE;if(s===Ef)return i.UNSIGNED_SHORT_4_4_4_4;if(s===bf)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ig)return i.BYTE;if(s===Ng)return i.SHORT;if(s===zc)return i.UNSIGNED_SHORT;if(s===Sf)return i.INT;if(s===Di)return i.UNSIGNED_INT;if(s===vi)return i.FLOAT;if(s===Ps)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Og)return i.ALPHA;if(s===$n)return i.RGBA;if(s===Fg)return i.LUMINANCE;if(s===Bg)return i.LUMINANCE_ALPHA;if(s===ar)return i.DEPTH_COMPONENT;if(s===ns)return i.DEPTH_STENCIL;if(s===Sc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zg)return i.RED;if(s===Tf)return i.RED_INTEGER;if(s===kg)return i.RG;if(s===Af)return i.RG_INTEGER;if(s===wf)return i.RGBA_INTEGER;if(s===Aa||s===wa||s===Ra||s===Ca)if(c===Lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cu||s===Lu||s===Pu||s===Uu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Du||s===Iu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Du)return c===Lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Iu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nu||s===Ou||s===Fu||s===Bu||s===zu||s===ku||s===Hu||s===Gu||s===Vu||s===Wu||s===Xu||s===qu||s===Yu||s===$u)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Nu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ou)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ku)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yu)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$u)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===La||s===ju||s===Zu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===La)return c===Lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ju)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hg||s===Ku||s===Ju||s===Qu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===La)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ku)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ju)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===or?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class gM extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ii extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(u,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,v=.005;u.inputState.pinching&&d>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Mn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Bi({extensions:{fragDepth:!0},vertexShader:vM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new ks(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class MM extends hr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,g=null,v=null;const x=new yM,p=t.getContextAttributes();let m=null,w=null;const S=[],b=[],D=new Me;let U=null;const C=new In;C.layers.enable(1),C.viewport=new Kt;const z=new In;z.layers.enable(2),z.viewport=new Kt;const Z=[C,z],M=new gM;M.layers.enable(1),M.layers.enable(2);let R=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let le=S[Y];return le===void 0&&(le=new tc,S[Y]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Y){let le=S[Y];return le===void 0&&(le=new tc,S[Y]=le),le.getGripSpace()},this.getHand=function(Y){let le=S[Y];return le===void 0&&(le=new tc,S[Y]=le),le.getHandSpace()};function te(Y){const le=b.indexOf(Y.inputSource);if(le===-1)return;const ne=S[le];ne!==void 0&&(ne.update(Y.inputSource,Y.frame,u||a),ne.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",J);for(let Y=0;Y<S.length;Y++){const le=b[Y];le!==null&&(b[Y]=null,S[Y].disconnect(le))}R=null,Q=null,x.reset(),e.setRenderTarget(m),g=null,d=null,f=null,r=null,w=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",N),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new cr(g.framebufferWidth,g.framebufferHeight,{format:$n,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,ne=null,Be=null;p.depth&&(Be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?ns:ar,ne=p.stencil?or:Di);const Ue={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new cr(d.textureWidth,d.textureHeight,{format:$n,type:Fi,depthTexture:new Xf(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Te=e.properties.get(w);Te.__ignoreDepthValues=d.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(Y){for(let le=0;le<Y.removed.length;le++){const ne=Y.removed[le],Be=b.indexOf(ne);Be>=0&&(b[Be]=null,S[Be].disconnect(ne))}for(let le=0;le<Y.added.length;le++){const ne=Y.added[le];let Be=b.indexOf(ne);if(Be===-1){for(let Te=0;Te<S.length;Te++)if(Te>=b.length){b.push(ne),Be=Te;break}else if(b[Te]===null){b[Te]=ne,Be=Te;break}if(Be===-1)break}const Ue=S[Be];Ue&&Ue.connect(ne)}}const $=new F,ae=new F;function I(Y,le,ne){$.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(ne.matrixWorld);const Be=$.distanceTo(ae),Ue=le.projectionMatrix.elements,Te=ne.projectionMatrix.elements,ut=Ue[14]/(Ue[10]-1),Oe=Ue[14]/(Ue[10]+1),G=(Ue[9]+1)/Ue[5],Ct=(Ue[9]-1)/Ue[5],Ce=(Ue[8]-1)/Ue[0],Ze=(Te[8]+1)/Te[0],Fe=ut*Ce,at=ut*Ze,Ke=Be/(-Ce+Ze),et=Ke*-Ce;le.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(et),Y.translateZ(Ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const Et=ut+Ke,L=Oe+Ke,E=Fe-et,j=at+(Be-et),ie=G*Oe/L*Et,ue=Ct*Oe/L*Et;Y.projectionMatrix.makePerspective(E,j,ie,ue,Et,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function re(Y,le){le===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(le.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;x.texture!==null&&(Y.near=x.depthNear,Y.far=x.depthFar),M.near=z.near=C.near=Y.near,M.far=z.far=C.far=Y.far,(R!==M.near||Q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,Q=M.far,C.near=R,C.far=Q,z.near=R,z.far=Q,C.updateProjectionMatrix(),z.updateProjectionMatrix(),Y.updateProjectionMatrix());const le=Y.parent,ne=M.cameras;re(M,le);for(let Be=0;Be<ne.length;Be++)re(ne[Be],le);ne.length===2?I(M,C,z):M.projectionMatrix.copy(C.projectionMatrix),ee(Y,M,le)};function ee(Y,le,ne){ne===null?Y.matrix.copy(le.matrixWorld):(Y.matrix.copy(ne.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(le.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Us*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null};let de=null;function ye(Y,le){if(h=le.getViewerPose(u||a),v=le,h!==null){const ne=h.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let Be=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,Be=!0);for(let Te=0;Te<ne.length;Te++){const ut=ne[Te];let Oe=null;if(g!==null)Oe=g.getViewport(ut);else{const Ct=f.getViewSubImage(d,ut);Oe=Ct.viewport,Te===0&&(e.setRenderTargetTextures(w,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(w))}let G=Z[Te];G===void 0&&(G=new In,G.layers.enable(Te),G.viewport=new Kt,Z[Te]=G),G.matrix.fromArray(ut.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ut.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Te===0&&(M.matrix.copy(G.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Be===!0&&M.cameras.push(G)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Te=f.getDepthInformation(ne[0]);Te&&Te.isValid&&Te.texture&&x.init(e,Te,r.renderState)}}for(let ne=0;ne<S.length;ne++){const Be=b[ne],Ue=S[ne];Be!==null&&Ue!==void 0&&Ue.update(Be,le,u||a)}x.render(e,M),de&&de(Y,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),v=null}const ke=new Vf;ke.setAnimationLoop(ye),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const er=new yi,SM=new Ft;function EM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,w,S,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&g(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,w,S):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===yn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===yn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=e.get(m),S=w.envMap,b=w.envMapRotation;if(S&&(p.envMap.value=S,er.copy(b),er.x*=-1,er.y*=-1,er.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(SM.makeRotationFromEuler(er)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const D=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*D,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const w=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function bM(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,S){const b=S.program;n.uniformBlockBinding(w,b)}function u(w,S){let b=r[w.id];b===void 0&&(v(w),b=h(w),r[w.id]=b,w.addEventListener("dispose",p));const D=S.program;n.updateUBOMapping(w,D);const U=e.render.frame;s[w.id]!==U&&(d(w),s[w.id]=U)}function h(w){const S=f();w.__bindingPointIndex=S;const b=i.createBuffer(),D=w.__size,U=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const S=r[w.id],b=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let U=0,C=b.length;U<C;U++){const z=Array.isArray(b[U])?b[U]:[b[U]];for(let Z=0,M=z.length;Z<M;Z++){const R=z[Z];if(g(R,U,Z,D)===!0){const Q=R.__offset,te=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let J=0;J<te.length;J++){const $=te[J],ae=x($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,Q+N,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,N),N+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,S,b,D){const U=w.value,C=S+"_"+b;if(D[C]===void 0)return typeof U=="number"||typeof U=="boolean"?D[C]=U:D[C]=U.clone(),!0;{const z=D[C];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return D[C]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function v(w){const S=w.uniforms;let b=0;const D=16;for(let C=0,z=S.length;C<z;C++){const Z=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,R=Z.length;M<R;M++){const Q=Z[M],te=Array.isArray(Q.value)?Q.value:[Q.value];for(let N=0,J=te.length;N<J;N++){const $=te[N],ae=x($),I=b%D;I!==0&&D-I<ae.boundary&&(b+=D-I),Q.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=ae.storage}}}const U=b%D;return U>0&&(b+=D-U),w.__size=b,w.__cache={},this}function x(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){const S=w.target;S.removeEventListener("dispose",p);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:u,dispose:m}}class Kf{constructor(e={}){const{canvas:t=d_(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;const S=this;let b=!1,D=0,U=0,C=null,z=-1,Z=null;const M=new Kt,R=new Kt;let Q=null;const te=new xt(0);let N=0,J=t.width,$=t.height,ae=1,I=null,re=null;const ee=new Kt(0,0,J,$),de=new Kt(0,0,J,$);let ye=!1;const ke=new Vc;let Y=!1,le=!1,ne=null;const Be=new Ft,Ue=new Me,Te=new F,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return C===null?ae:1}let G=n;function Ct(A,H){for(let X=0;X<A.length;X++){const q=A[X],V=t.getContext(q,H);if(V!==null)return V}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",fe,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&H.shift(),G=Ct(H,A),G===null)throw Ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ce,Ze,Fe,at,Ke,et,Et,L,E,j,ie,ue,ce,ze,Ie,me,xe,Xe,pe,Pt,tt,De,Ae,Le;function P(){Ce=new Lx(G),Ze=new bx(G,Ce,e),Ce.init(Ze),De=new mM(G,Ce,Ze),Fe=new dM(G,Ce,Ze),at=new Dx(G),Ke=new Qy,et=new pM(G,Ce,Fe,Ke,Ze,De,at),Et=new Ax(S),L=new Cx(S),E=new z_(G,Ze),Ae=new Sx(G,Ce,E,Ze),j=new Px(G,E,at,Ae),ie=new Fx(G,j,E,at),pe=new Ox(G,Ze,et),me=new Tx(Ke),ue=new Jy(S,Et,L,Ce,Ze,Ae,me),ce=new EM(S,Ke),ze=new tM,Ie=new aM(Ce,Ze),Xe=new Mx(S,Et,L,Fe,ie,d,c),xe=new fM(S,ie,Ze),Le=new bM(G,at,Ze,Fe),Pt=new Ex(G,Ce,at,Ze),tt=new Ux(G,Ce,at,Ze),at.programs=ue.programs,S.capabilities=Ze,S.extensions=Ce,S.properties=Ke,S.renderLists=ze,S.shadowMap=xe,S.state=Fe,S.info=at}P();const se=new MM(S,G);this.xr=se,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(J,$,!1))},this.getSize=function(A){return A.set(J,$)},this.setSize=function(A,H,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,$=H,t.width=Math.floor(A*ae),t.height=Math.floor(H*ae),X===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(J*ae,$*ae).floor()},this.setDrawingBufferSize=function(A,H,X){J=A,$=H,ae=X,t.width=Math.floor(A*X),t.height=Math.floor(H*X),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(ee)},this.setViewport=function(A,H,X,q){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,H,X,q),Fe.viewport(M.copy(ee).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(de)},this.setScissor=function(A,H,X,q){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,H,X,q),Fe.scissor(R.copy(de).multiplyScalar(ae).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){Fe.setScissorTest(ye=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(A=!0,H=!0,X=!0){let q=0;if(A){let V=!1;if(C!==null){const Ee=C.texture.format;V=Ee===wf||Ee===Af||Ee===Tf}if(V){const Ee=C.texture.type,Pe=Ee===Fi||Ee===Di||Ee===zc||Ee===or||Ee===Ef||Ee===bf,Ne=Xe.getClearColor(),Ge=Xe.getClearAlpha(),Je=Ne.r,Ve=Ne.g,Ye=Ne.b;Pe?(g[0]=Je,g[1]=Ve,g[2]=Ye,g[3]=Ge,G.clearBufferuiv(G.COLOR,0,g)):(v[0]=Je,v[1]=Ve,v[2]=Ye,v[3]=Ge,G.clearBufferiv(G.COLOR,0,v))}else q|=G.COLOR_BUFFER_BIT}H&&(q|=G.DEPTH_BUFFER_BIT),X&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ze.dispose(),Ie.dispose(),Ke.dispose(),Et.dispose(),L.dispose(),ie.dispose(),Ae.dispose(),Le.dispose(),ue.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ut),se.removeEventListener("sessionend",ht),ne&&(ne.dispose(),ne=null),bt.stop()};function Re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=at.autoReset,H=xe.enabled,X=xe.autoUpdate,q=xe.needsUpdate,V=xe.type;P(),at.autoReset=A,xe.enabled=H,xe.autoUpdate=X,xe.needsUpdate=q,xe.type=V}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function W(A){const H=A.target;H.removeEventListener("dispose",W),he(H)}function he(A){_e(A),Ke.remove(A)}function _e(A){const H=Ke.get(A).programs;H!==void 0&&(H.forEach(function(X){ue.releaseProgram(X)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,X,q,V,Ee){H===null&&(H=ut);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Jt(A,H,X,q,V);Fe.setMaterial(q,Pe);let Ge=X.index,Je=1;if(q.wireframe===!0){if(Ge=j.getWireframeAttribute(X),Ge===void 0)return;Je=2}const Ve=X.drawRange,Ye=X.attributes.position;let Dt=Ve.start*Je,Qt=(Ve.start+Ve.count)*Je;Ee!==null&&(Dt=Math.max(Dt,Ee.start*Je),Qt=Math.min(Qt,(Ee.start+Ee.count)*Je)),Ge!==null?(Dt=Math.max(Dt,0),Qt=Math.min(Qt,Ge.count)):Ye!=null&&(Dt=Math.max(Dt,0),Qt=Math.min(Qt,Ye.count));const zt=Qt-Dt;if(zt<0||zt===1/0)return;Ae.setup(V,q,Ne,X,Ge);let wn,wt=Pt;if(Ge!==null&&(wn=E.get(Ge),wt=tt,wt.setIndex(wn)),V.isMesh)q.wireframe===!0?(Fe.setLineWidth(q.wireframeLinewidth*Oe()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(V.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),Fe.setLineWidth(Qe*Oe()),V.isLineSegments?wt.setMode(G.LINES):V.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else V.isPoints?wt.setMode(G.POINTS):V.isSprite&&wt.setMode(G.TRIANGLES);if(V.isBatchedMesh)wt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)wt.renderInstances(Dt,zt,V.count);else if(X.isInstancedBufferGeometry){const Qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gr=Math.min(X.instanceCount,Qe);wt.renderInstances(Dt,zt,gr)}else wt.render(Dt,zt)};function qe(A,H,X){A.transparent===!0&&A.side===qn&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,mr(A,H,X),A.side=ri,A.needsUpdate=!0,mr(A,H,X),A.side=qn):mr(A,H,X)}this.compile=function(A,H,X=null){X===null&&(X=A),p=Ie.get(X),p.init(),w.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==X&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(S._useLegacyLights);const q=new Set;return A.traverse(function(V){const Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ne=Ee[Pe];qe(Ne,X,V),q.add(Ne)}else qe(Ee,X,V),q.add(Ee)}),w.pop(),p=null,q},this.compileAsync=function(A,H,X=null){const q=this.compile(A,H,X);return new Promise(V=>{function Ee(){if(q.forEach(function(Pe){Ke.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){V(A);return}setTimeout(Ee,10)}Ce.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ft=null;function mt(A){ft&&ft(A)}function Ut(){bt.stop()}function ht(){bt.start()}const bt=new Vf;bt.setAnimationLoop(mt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(A){ft=A,se.setAnimationLoop(A),A===null?bt.stop():bt.start()},se.addEventListener("sessionstart",Ut),se.addEventListener("sessionend",ht),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(H),H=se.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,H,C),p=Ie.get(A,w.length),p.init(),w.push(p),Be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ke.setFromProjectionMatrix(Be),le=this.localClippingEnabled,Y=me.init(this.clippingPlanes,le),x=ze.get(A,m.length),x.init(),m.push(x),Ht(A,H,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(I,re),this.info.render.frame++,Y===!0&&me.beginShadows();const X=p.state.shadowsArray;if(xe.render(X,A,H),Y===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1)&&Xe.render(x,A),p.setupLights(S._useLegacyLights),H.isArrayCamera){const q=H.cameras;for(let V=0,Ee=q.length;V<Ee;V++){const Pe=q[V];gn(x,A,Pe,Pe.viewport)}}else gn(x,A,H);C!==null&&(et.updateMultisampleRenderTarget(C),et.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(S,A,H),Ae.resetDefaultState(),z=-1,Z=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ht(A,H,X,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){q&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);const Pe=ie.update(A),Ne=A.material;Ne.visible&&x.push(A,Pe,Ne,X,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Pe=ie.update(A),Ne=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Te.copy(Pe.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(Ne)){const Ge=Pe.groups;for(let Je=0,Ve=Ge.length;Je<Ve;Je++){const Ye=Ge[Je],Dt=Ne[Ye.materialIndex];Dt&&Dt.visible&&x.push(A,Pe,Dt,X,Te.z,Ye)}}else Ne.visible&&x.push(A,Pe,Ne,X,Te.z,null)}}const Ee=A.children;for(let Pe=0,Ne=Ee.length;Pe<Ne;Pe++)Ht(Ee[Pe],H,X,q)}function gn(A,H,X,q){const V=A.opaque,Ee=A.transmissive,Pe=A.transparent;p.setupLightsView(X),Y===!0&&me.setGlobalState(S.clippingPlanes,X),Ee.length>0&&si(V,Ee,H,X),q&&Fe.viewport(M.copy(q)),V.length>0&&dr(V,H,X),Ee.length>0&&dr(Ee,H,X),Pe.length>0&&dr(Pe,H,X),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function si(A,H,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Ee=Ze.isWebGL2;ne===null&&(ne=new cr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Ps:Fi,minFilter:sr,samples:Ee?4:0})),S.getDrawingBufferSize(Ue),Ee?ne.setSize(Ue.x,Ue.y):ne.setSize(Vo(Ue.x),Vo(Ue.y));const Pe=S.getRenderTarget();S.setRenderTarget(ne),S.getClearColor(te),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear();const Ne=S.toneMapping;S.toneMapping=Oi,dr(A,X,q),et.updateMultisampleRenderTarget(ne),et.updateRenderTargetMipmap(ne);let Ge=!1;for(let Je=0,Ve=H.length;Je<Ve;Je++){const Ye=H[Je],Dt=Ye.object,Qt=Ye.geometry,zt=Ye.material,wn=Ye.group;if(zt.side===qn&&Dt.layers.test(q.layers)){const wt=zt.side;zt.side=yn,zt.needsUpdate=!0,pr(Dt,X,q,Qt,zt,wn),zt.side=wt,zt.needsUpdate=!0,Ge=!0}}Ge===!0&&(et.updateMultisampleRenderTarget(ne),et.updateRenderTargetMipmap(ne)),S.setRenderTarget(Pe),S.setClearColor(te,N),S.toneMapping=Ne}function dr(A,H,X){const q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Ee=A.length;V<Ee;V++){const Pe=A[V],Ne=Pe.object,Ge=Pe.geometry,Je=q===null?Pe.material:q,Ve=Pe.group;Ne.layers.test(X.layers)&&pr(Ne,H,X,Ge,Je,Ve)}}function pr(A,H,X,q,V,Ee){A.onBeforeRender(S,H,X,q,V,Ee),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(S,H,X,q,A,Ee),V.transparent===!0&&V.side===qn&&V.forceSinglePass===!1?(V.side=yn,V.needsUpdate=!0,S.renderBufferDirect(X,H,q,V,A,Ee),V.side=ri,V.needsUpdate=!0,S.renderBufferDirect(X,H,q,V,A,Ee),V.side=qn):S.renderBufferDirect(X,H,q,V,A,Ee),A.onAfterRender(S,H,X,q,V,Ee)}function mr(A,H,X){H.isScene!==!0&&(H=ut);const q=Ke.get(A),V=p.state.lights,Ee=p.state.shadowsArray,Pe=V.state.version,Ne=ue.getParameters(A,V.state,Ee,H,X),Ge=ue.getProgramCacheKey(Ne);let Je=q.programs;q.environment=A.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(A.isMeshStandardMaterial?L:Et).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",W),Je=new Map,q.programs=Je);let Ve=Je.get(Ge);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===Pe)return oi(A,Ne),Ve}else Ne.uniforms=ue.getUniforms(A),A.onBuild(X,Ne,S),A.onBeforeCompile(Ne,S),Ve=ue.acquireProgram(Ne,Ge),Je.set(Ge,Ve),q.uniforms=Ne.uniforms;const Ye=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=me.uniform),oi(A,Ne),q.needsLights=an(A),q.lightsStateVersion=Pe,q.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function Hs(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Do.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function oi(A,H){const X=Ke.get(A);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Jt(A,H,X,q,V){H.isScene!==!0&&(H=ut),et.resetTextureUnits();const Ee=H.fog,Pe=q.isMeshStandardMaterial?H.environment:null,Ne=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:zi,Ge=(q.isMeshStandardMaterial?L:Et).get(q.envMap||Pe),Je=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ye=!!X.morphAttributes.position,Dt=!!X.morphAttributes.normal,Qt=!!X.morphAttributes.color;let zt=Oi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(zt=S.toneMapping);const wn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,wt=wn!==void 0?wn.length:0,Qe=Ke.get(q),gr=p.state.lights;if(Y===!0&&(le===!0||A!==Z)){const It=A===Z&&q.id===z;me.setState(q,A,It)}let Tt=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==gr.state.version||Qe.outputColorSpace!==Ne||V.isBatchedMesh&&Qe.batching===!1||!V.isBatchedMesh&&Qe.batching===!0||V.isInstancedMesh&&Qe.instancing===!1||!V.isInstancedMesh&&Qe.instancing===!0||V.isSkinnedMesh&&Qe.skinning===!1||!V.isSkinnedMesh&&Qe.skinning===!0||V.isInstancedMesh&&Qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Qe.instancingMorph===!1&&V.morphTexture!==null||Qe.envMap!==Ge||q.fog===!0&&Qe.fog!==Ee||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==me.numPlanes||Qe.numIntersection!==me.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==Ve||Qe.morphTargets!==Ye||Qe.morphNormals!==Dt||Qe.morphColors!==Qt||Qe.toneMapping!==zt||Ze.isWebGL2===!0&&Qe.morphTargetsCount!==wt)&&(Tt=!0):(Tt=!0,Qe.__version=q.version);let Zn=Qe.currentProgram;Tt===!0&&(Zn=mr(q,H,V));let Sn=!1,Xt=!1,On=!1;const gt=Zn.getUniforms(),Fn=Qe.uniforms;if(Fe.useProgram(Zn.program)&&(Sn=!0,Xt=!0,On=!0),q.id!==z&&(z=q.id,Xt=!0),Sn||Z!==A){gt.setValue(G,"projectionMatrix",A.projectionMatrix),gt.setValue(G,"viewMatrix",A.matrixWorldInverse);const It=gt.map.cameraPosition;It!==void 0&&It.setValue(G,Te.setFromMatrixPosition(A.matrixWorld)),Ze.logarithmicDepthBuffer&&gt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Xt=!0,On=!0)}if(V.isSkinnedMesh){gt.setOptional(G,V,"bindMatrix"),gt.setOptional(G,V,"bindMatrixInverse");const It=V.skeleton;It&&(Ze.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),gt.setValue(G,"boneTexture",It.boneTexture,et)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(gt.setOptional(G,V,"batchingTexture"),gt.setValue(G,"batchingTexture",V._matricesTexture,et));const ki=X.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0&&Ze.isWebGL2===!0)&&pe.update(V,X,Zn),(Xt||Qe.receiveShadow!==V.receiveShadow)&&(Qe.receiveShadow=V.receiveShadow,gt.setValue(G,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Fn.envMap.value=Ge,Fn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Xt&&(gt.setValue(G,"toneMappingExposure",S.toneMappingExposure),Qe.needsLights&&on(Fn,On),Ee&&q.fog===!0&&ce.refreshFogUniforms(Fn,Ee),ce.refreshMaterialUniforms(Fn,q,ae,$,ne),Do.upload(G,Hs(Qe),Fn,et)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Do.upload(G,Hs(Qe),Fn,et),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(G,"center",V.center),gt.setValue(G,"modelViewMatrix",V.modelViewMatrix),gt.setValue(G,"normalMatrix",V.normalMatrix),gt.setValue(G,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const It=q.uniformsGroups;for(let Bn=0,_r=It.length;Bn<_r;Bn++)if(Ze.isWebGL2){const ai=It[Bn];Le.update(ai,Zn),Le.bind(ai,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function on(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function an(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,H,X){Ke.get(A.texture).__webglTexture=H,Ke.get(A.depthTexture).__webglTexture=X;const q=Ke.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const X=Ke.get(A);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,X=0){C=A,D=H,U=X;let q=!0,V=null,Ee=!1,Pe=!1;if(A){const Ge=Ke.get(A);Ge.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(G.FRAMEBUFFER,null),q=!1):Ge.__webglFramebuffer===void 0?et.setupRenderTarget(A):Ge.__hasExternalTextures&&et.rebindTextures(A,Ke.get(A.texture).__webglTexture,Ke.get(A.depthTexture).__webglTexture);const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Pe=!0);const Ve=Ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?V=Ve[H][X]:V=Ve[H],Ee=!0):Ze.isWebGL2&&A.samples>0&&et.useMultisampledRTT(A)===!1?V=Ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[X]:V=Ve,M.copy(A.viewport),R.copy(A.scissor),Q=A.scissorTest}else M.copy(ee).multiplyScalar(ae).floor(),R.copy(de).multiplyScalar(ae).floor(),Q=ye;if(Fe.bindFramebuffer(G.FRAMEBUFFER,V)&&Ze.drawBuffers&&q&&Fe.drawBuffers(A,V),Fe.viewport(M),Fe.scissor(R),Fe.setScissorTest(Q),Ee){const Ge=Ke.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,X)}else if(Pe){const Ge=Ke.get(A.texture),Je=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ge.__webglTexture,X||0,Je)}z=-1},this.readRenderTargetPixels=function(A,H,X,q,V,Ee,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Fe.bindFramebuffer(G.FRAMEBUFFER,Ne);try{const Ge=A.texture,Je=Ge.format,Ve=Ge.type;if(Je!==$n&&De.convert(Je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Ve===Ps&&(Ce.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ve!==Fi&&De.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===vi&&(Ze.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&X>=0&&X<=A.height-V&&G.readPixels(H,X,q,V,De.convert(Je),De.convert(Ve),Ee)}finally{const Ge=C!==null?Ke.get(C).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(A,H,X=0){const q=Math.pow(2,-X),V=Math.floor(H.image.width*q),Ee=Math.floor(H.image.height*q);et.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,A.x,A.y,V,Ee),Fe.unbindTexture()},this.copyTextureToTexture=function(A,H,X,q=0){const V=H.image.width,Ee=H.image.height,Pe=De.convert(X.format),Ne=De.convert(X.type);et.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,q,A.x,A.y,V,Ee,Pe,Ne,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,q,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,Pe,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,q,A.x,A.y,Pe,Ne,H.image),q===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(A,H,X,q,V=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=Math.round(A.max.x-A.min.x),Pe=Math.round(A.max.y-A.min.y),Ne=A.max.z-A.min.z+1,Ge=De.convert(q.format),Je=De.convert(q.type);let Ve;if(q.isData3DTexture)et.setTexture3D(q,0),Ve=G.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)et.setTexture2DArray(q,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Ye=G.getParameter(G.UNPACK_ROW_LENGTH),Dt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Qt=G.getParameter(G.UNPACK_SKIP_PIXELS),zt=G.getParameter(G.UNPACK_SKIP_ROWS),wn=G.getParameter(G.UNPACK_SKIP_IMAGES),wt=X.isCompressedTexture?X.mipmaps[V]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Ve,V,H.x,H.y,H.z,Ee,Pe,Ne,Ge,Je,wt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,V,H.x,H.y,H.z,Ee,Pe,Ne,Ge,wt.data):G.texSubImage3D(Ve,V,H.x,H.y,H.z,Ee,Pe,Ne,Ge,Je,wt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,zt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,wn),V===0&&q.generateMipmaps&&G.generateMipmap(Ve),Fe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?et.setTextureCube(A,0):A.isData3DTexture?et.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?et.setTexture2DArray(A,0):et.setTexture2D(A,0),Fe.unbindTexture()},this.resetState=function(){D=0,U=0,C=null,Fe.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===kc?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===$o?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class TM extends Kf{}TM.prototype.isWebGL1Renderer=!0;class AM extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,g=(a-h)/d;return(r+g)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new Me:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,r=[],s=[],a=[],o=new F,c=new Ft;for(let g=0;g<=e;g++){const v=g/e;r[g]=this.getTangentAt(v,new F)}s[0]=new F,a[0]=new F;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Zt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(c.makeRotationAxis(o,v))}a[g].crossVectors(r[g],s[g])}if(t===!0){let g=Math.acos(Zt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let v=1;v<=e;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],g*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xc extends jn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Me){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,g=u-this.aY;c=d*h-g*f+this.aX,u=d*f+g*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wM extends Xc{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qc(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,h,f){let d=(a-s)/u-(o-s)/(u+h)+(o-a)/h,g=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,g*=h,r(a,o,d,g)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Co=new F,nc=new qc,ic=new qc,rc=new qc;class RM extends jn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new F){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,h;this.closed||o>0?u=r[(o-1)%s]:(Co.subVectors(r[0],r[1]).add(r[0]),u=Co);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Co.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(f),g),x=Math.pow(f.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(h),g);x<1e-4&&(x=1),v<1e-4&&(v=x),p<1e-4&&(p=x),nc.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,v,x,p),ic.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,v,x,p),rc.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,v,x,p)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),ic.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),rc.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return n.set(nc.calc(c),ic.calc(c),rc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wh(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function CM(i,e){const t=1-i;return t*t*e}function LM(i,e){return 2*(1-i)*i*e}function PM(i,e){return i*i*e}function Ss(i,e,t,n){return CM(i,e)+LM(i,t)+PM(i,n)}function UM(i,e){const t=1-i;return t*t*t*e}function DM(i,e){const t=1-i;return 3*t*t*i*e}function IM(i,e){return 3*(1-i)*i*i*e}function NM(i,e){return i*i*i*e}function Es(i,e,t,n,r){return UM(i,e)+DM(i,t)+IM(i,n)+NM(i,r)}class Jf extends jn{constructor(e=new Me,t=new Me,n=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,r.x,s.x,a.x,o.x),Es(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class OM extends jn{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,r.x,s.x,a.x,o.x),Es(e,r.y,s.y,a.y,o.y),Es(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qf extends jn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FM extends jn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends jn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ss(e,r.x,s.x,a.x),Ss(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends jn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ss(e,r.x,s.x,a.x),Ss(e,r.y,s.y,a.y),Ss(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Wh(o,c.x,u.x,h.x,f.x),Wh(o,c.y,u.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Me().fromArray(r))}return this}}var Tc=Object.freeze({__proto__:null,ArcCurve:wM,CatmullRomCurve3:RM,CubicBezierCurve:Jf,CubicBezierCurve3:OM,EllipseCurve:Xc,LineCurve:Qf,LineCurve3:FM,QuadraticBezierCurve:ed,QuadraticBezierCurve3:td,SplineCurve:nd});class BM extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let u=0;u<c.length;u++){const h=c[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Tc[r.type]().fromJSON(r))}return this}}class Ac extends BM{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Qf(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ed(this.currentPoint.clone(),new Me(e,t),new Me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Jf(this.currentPoint.clone(),new Me(e,t),new Me(n,r),new Me(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new nd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const u=new Xc(e,t,n,r,s,a,o,c);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yc extends Nn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],g=[];let v=0;const x=[],p=n/2;let m=0;w(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(g,2));function w(){const b=new F,D=new F;let U=0;const C=(t-e)/n;for(let z=0;z<=s;z++){const Z=[],M=z/s,R=M*(t-e)+e;for(let Q=0;Q<=r;Q++){const te=Q/r,N=te*c+o,J=Math.sin(N),$=Math.cos(N);D.x=R*J,D.y=-M*n+p,D.z=R*$,f.push(D.x,D.y,D.z),b.set(J,C,$).normalize(),d.push(b.x,b.y,b.z),g.push(te,1-M),Z.push(v++)}x.push(Z)}for(let z=0;z<r;z++)for(let Z=0;Z<s;Z++){const M=x[Z][z],R=x[Z+1][z],Q=x[Z+1][z+1],te=x[Z][z+1];h.push(M,R,te),h.push(R,Q,te),U+=6}u.addGroup(m,U,0),m+=U}function S(b){const D=v,U=new Me,C=new F;let z=0;const Z=b===!0?e:t,M=b===!0?1:-1;for(let Q=1;Q<=r;Q++)f.push(0,p*M,0),d.push(0,M,0),g.push(.5,.5),v++;const R=v;for(let Q=0;Q<=r;Q++){const N=Q/r*c+o,J=Math.cos(N),$=Math.sin(N);C.x=Z*$,C.y=p*M,C.z=Z*J,f.push(C.x,C.y,C.z),d.push(0,M,0),U.x=J*.5+.5,U.y=$*.5*M+.5,g.push(U.x,U.y),v++}for(let Q=0;Q<r;Q++){const te=D+Q,N=R+Q;b===!0?h.push(N,N+1,te):h.push(N+1,N,te),z+=3}u.addGroup(m,z,b===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $r extends Yc{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class id extends Ac{constructor(e){super(e),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Ac().fromJSON(r))}return this}}const zM={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=rd(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,u,h,f,d,g;if(n&&(s=WM(i,e,s,t)),i.length>80*t){o=u=i[0],c=h=i[1];for(let v=t;v<r;v+=t)f=i[v],d=i[v+1],f<o&&(o=f),d<c&&(c=d),f>u&&(u=f),d>h&&(h=d);g=Math.max(u-o,h-c),g=g!==0?32767/g:0}return Is(s,a,t,o,c,g,0),a}};function rd(i,e,t,n,r){let s,a;if(r===tS(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Xh(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Xh(s,i[s],i[s+1],a);return a&&Ko(a,a.next)&&(Os(a),a=a.next),a}function ur(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ko(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Os(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Is(i,e,t,n,r,s,a){if(!i)return;!a&&s&&jM(i,n,r,s);let o=i,c,u;for(;i.prev!==i.next;){if(c=i.prev,u=i.next,s?HM(i,n,r,s):kM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(u.i/t|0),Os(i),i=u.next,o=u.next;continue}if(i=u,i===o){a?a===1?(i=GM(ur(i),e,t),Is(i,e,t,n,r,s,2)):a===2&&VM(i,e,t,n,r,s):Is(ur(i),e,t,n,r,s,1);break}}}function kM(i){const e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,u=n.y,h=r<s?r<a?r:a:s<a?s:a,f=o<c?o<u?o:u:c<u?c:u,d=r>s?r>a?r:a:s>a?s:a,g=o>c?o>u?o:u:c>u?c:u;let v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=d&&v.y>=f&&v.y<=g&&jr(r,o,s,c,a,u,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function HM(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Nt(r,s,a)>=0)return!1;const o=r.x,c=s.x,u=a.x,h=r.y,f=s.y,d=a.y,g=o<c?o<u?o:u:c<u?c:u,v=h<f?h<d?h:d:f<d?f:d,x=o>c?o>u?o:u:c>u?c:u,p=h>f?h>d?h:d:f>d?f:d,m=wc(g,v,e,t,n),w=wc(x,p,e,t,n);let S=i.prevZ,b=i.nextZ;for(;S&&S.z>=m&&b&&b.z<=w;){if(S.x>=g&&S.x<=x&&S.y>=v&&S.y<=p&&S!==r&&S!==a&&jr(o,h,c,f,u,d,S.x,S.y)&&Nt(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=g&&b.x<=x&&b.y>=v&&b.y<=p&&b!==r&&b!==a&&jr(o,h,c,f,u,d,b.x,b.y)&&Nt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=m;){if(S.x>=g&&S.x<=x&&S.y>=v&&S.y<=p&&S!==r&&S!==a&&jr(o,h,c,f,u,d,S.x,S.y)&&Nt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=w;){if(b.x>=g&&b.x<=x&&b.y>=v&&b.y<=p&&b!==r&&b!==a&&jr(o,h,c,f,u,d,b.x,b.y)&&Nt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function GM(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Ko(r,s)&&sd(r,n,n.next,s)&&Ns(r,s)&&Ns(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Os(n),Os(n.next),n=i=s),n=n.next}while(n!==i);return ur(n)}function VM(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&JM(a,o)){let c=od(a,o);a=ur(a,a.next),c=ur(c,c.next),Is(a,e,t,n,r,s,0),Is(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function WM(i,e,t,n){const r=[];let s,a,o,c,u;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,u=rd(i,o,c,n,!1),u===u.next&&(u.steiner=!0),r.push(KM(u));for(r.sort(XM),s=0;s<r.length;s++)t=qM(r[s],t);return t}function XM(i,e){return i.x-e.x}function qM(i,e){const t=YM(i,e);if(!t)return e;const n=od(t,i);return ur(n,n.next),ur(t,t.next)}function YM(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,u=r.y;let h=1/0,f;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&jr(a<u?s:n,a,c,u,a<u?n:s,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(s-t.x),Ns(t,i)&&(f<h||f===h&&(t.x>r.x||t.x===r.x&&$M(r,t)))&&(r=t,h=f)),t=t.next;while(t!==o);return r}function $M(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function jM(i,e,t,n){let r=i;do r.z===0&&(r.z=wc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ZM(r)}function ZM(i){let e,t,n,r,s,a,o,c,u=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<u&&(o++,n=n.nextZ,!!n);e++);for(c=u;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,u*=2}while(a>1);return i}function wc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function KM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jr(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function JM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!QM(i,e)&&(Ns(i,e)&&Ns(e,i)&&eS(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Ko(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ko(i,e){return i.x===e.x&&i.y===e.y}function sd(i,e,t,n){const r=Po(Nt(i,e,t)),s=Po(Nt(i,e,n)),a=Po(Nt(t,n,i)),o=Po(Nt(t,n,e));return!!(r!==s&&a!==o||r===0&&Lo(i,t,e)||s===0&&Lo(i,n,e)||a===0&&Lo(t,i,n)||o===0&&Lo(t,e,n))}function Lo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Po(i){return i>0?1:i<0?-1:0}function QM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ns(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function eS(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function od(i,e){const t=new Rc(i.i,i.x,i.y),n=new Rc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Xh(i,e,t,n){const r=new Rc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tS(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class bs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return bs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];qh(e),Yh(n,e);let a=e.length;t.forEach(qh);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Yh(n,t[c]);const o=zM.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function qh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class $c extends Nn{constructor(e=new id([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(s,3)),this.setAttribute("uv",new Bt(a,2));function u(h){const f=r.length/3,d=h.extractPoints(t);let g=d.shape;const v=d.holes;bs.isClockWise(g)===!1&&(g=g.reverse());for(let p=0,m=v.length;p<m;p++){const w=v[p];bs.isClockWise(w)===!0&&(v[p]=w.reverse())}const x=bs.triangulateShape(g,v);for(let p=0,m=v.length;p<m;p++){const w=v[p];g=g.concat(w)}for(let p=0,m=g.length;p<m;p++){const w=g[p];r.push(w.x,w.y,0),s.push(0,0,1),a.push(w.x,w.y)}for(let p=0,m=x.length;p<m;p++){const w=x[p],S=w[0]+f,b=w[1]+f,D=w[2]+f;n.push(S,b,D),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return nS(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new $c(n,e.curveSegments)}}function nS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class jc extends Nn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],f=new F,d=new F,g=[],v=[],x=[],p=[];for(let m=0;m<=n;m++){const w=[],S=m/n;let b=0;m===0&&a===0?b=.5/t:m===n&&c===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const U=D/t;f.x=-e*Math.cos(r+U*s)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(r+U*s)*Math.sin(a+S*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(U+b,1-S),w.push(u++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const S=h[m][w+1],b=h[m][w],D=h[m+1][w],U=h[m+1][w+1];(m!==0||a>0)&&g.push(S,b,U),(m!==n-1||c<Math.PI)&&g.push(b,D,U)}this.setIndex(g),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ts extends Nn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],h=new F,f=new F,d=new F;for(let g=0;g<=n;g++)for(let v=0;v<=r;v++){const x=v/r*s,p=g/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(v/r),u.push(g/n)}for(let g=1;g<=n;g++)for(let v=1;v<=r;v++){const x=(r+1)*g+v-1,p=(r+1)*(g-1)+v-1,m=(r+1)*(g-1)+v,w=(r+1)*g+v;a.push(x,p,w),a.push(p,m,w)}this.setIndex(a),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zc extends Nn{constructor(e=new td(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,c=new F,u=new Me;let h=new F;const f=[],d=[],g=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(g,2));function x(){for(let S=0;S<t;S++)p(S);p(s===!1?t:0),w(),m()}function p(S){h=e.getPointAt(S/t,h);const b=a.normals[S],D=a.binormals[S];for(let U=0;U<=r;U++){const C=U/r*Math.PI*2,z=Math.sin(C),Z=-Math.cos(C);c.x=Z*b.x+z*D.x,c.y=Z*b.y+z*D.y,c.z=Z*b.z+z*D.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let b=1;b<=r;b++){const D=(r+1)*(S-1)+(b-1),U=(r+1)*S+(b-1),C=(r+1)*S+b,z=(r+1)*(S-1)+b;v.push(D,U,z),v.push(U,C,z)}}function w(){for(let S=0;S<=t;S++)for(let b=0;b<=r;b++)u.x=S/t,u.y=b/r,g.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zc(new Tc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class iS extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sc=new Ft,$h=new F,jh=new F;class rS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sS extends rS{constructor(){super(new Wf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oS extends iS{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new sS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const Kh={type:"change"},oc={type:"start"},Jh={type:"end"},Uo=new Nf,Qh=new Li,aS=Math.cos(70*Lf.DEG2RAD);class cS extends hr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ie),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kh),n.update(),s=r.NONE},this.update=function(){const P=new F,se=new lr().setFromUnitVectors(e.up,new F(0,1,0)),Re=se.clone().invert(),O=new F,fe=new lr,W=new F,he=2*Math.PI;return function(qe=null){const ft=n.object.position;P.copy(ft).sub(n.target),P.applyQuaternion(se),o.setFromVector3(P),n.autoRotate&&s===r.NONE&&Q(M(qe)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let mt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;isFinite(mt)&&isFinite(Ut)&&(mt<-Math.PI?mt+=he:mt>Math.PI&&(mt-=he),Ut<-Math.PI?Ut+=he:Ut>Math.PI&&(Ut-=he),mt<=Ut?o.theta=Math.max(mt,Math.min(Ut,o.theta)):o.theta=o.theta>(mt+Ut)/2?Math.max(mt,o.theta):Math.min(Ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ht=!1;if(n.zoomToCursor&&U||n.object.isOrthographicCamera)o.radius=ee(o.radius);else{const bt=o.radius;o.radius=ee(o.radius*u),ht=bt!=o.radius}if(P.setFromSpherical(o),P.applyQuaternion(Re),ft.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&U){let bt=null;if(n.object.isPerspectiveCamera){const Ht=P.length();bt=ee(Ht*u);const gn=Ht-bt;n.object.position.addScaledVector(b,gn),n.object.updateMatrixWorld(),ht=!!gn}else if(n.object.isOrthographicCamera){const Ht=new F(D.x,D.y,0);Ht.unproject(n.object);const gn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ht=gn!==n.object.zoom;const si=new F(D.x,D.y,0);si.unproject(n.object),n.object.position.sub(si).add(Ht),n.object.updateMatrixWorld(),bt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(bt).add(n.object.position):(Uo.origin.copy(n.object.position),Uo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Uo.direction))<aS?e.lookAt(n.target):(Qh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Uo.intersectPlane(Qh,n.target))))}else if(n.object.isOrthographicCamera){const bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),bt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ht=!0)}return u=1,U=!1,ht||O.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a||W.distanceToSquared(n.target)>a?(n.dispatchEvent(Kh),O.copy(n.object.position),fe.copy(n.object.quaternion),W.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Xe),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",L),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",L),n.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Zh,c=new Zh;let u=1;const h=new F,f=new Me,d=new Me,g=new Me,v=new Me,x=new Me,p=new Me,m=new Me,w=new Me,S=new Me,b=new F,D=new Me;let U=!1;const C=[],z={};let Z=!1;function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function R(P){const se=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*se)}function Q(P){c.theta-=P}function te(P){c.phi-=P}const N=function(){const P=new F;return function(Re,O){P.setFromMatrixColumn(O,0),P.multiplyScalar(-Re),h.add(P)}}(),J=function(){const P=new F;return function(Re,O){n.screenSpacePanning===!0?P.setFromMatrixColumn(O,1):(P.setFromMatrixColumn(O,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Re),h.add(P)}}(),$=function(){const P=new F;return function(Re,O){const fe=n.domElement;if(n.object.isPerspectiveCamera){const W=n.object.position;P.copy(W).sub(n.target);let he=P.length();he*=Math.tan(n.object.fov/2*Math.PI/180),N(2*Re*he/fe.clientHeight,n.object.matrix),J(2*O*he/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(Re*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),J(O*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ae(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(P,se){if(!n.zoomToCursor)return;U=!0;const Re=n.domElement.getBoundingClientRect(),O=P-Re.left,fe=se-Re.top,W=Re.width,he=Re.height;D.x=O/W*2-1,D.y=-(fe/he)*2+1,b.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function de(P){f.set(P.clientX,P.clientY)}function ye(P){re(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function ke(P){v.set(P.clientX,P.clientY)}function Y(P){d.set(P.clientX,P.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const se=n.domElement;Q(2*Math.PI*g.x/se.clientHeight),te(2*Math.PI*g.y/se.clientHeight),f.copy(d),n.update()}function le(P){w.set(P.clientX,P.clientY),S.subVectors(w,m),S.y>0?ae(R(S.y)):S.y<0&&I(R(S.y)),m.copy(w),n.update()}function ne(P){x.set(P.clientX,P.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),$(p.x,p.y),v.copy(x),n.update()}function Be(P){re(P.clientX,P.clientY),P.deltaY<0?I(R(P.deltaY)):P.deltaY>0&&ae(R(P.deltaY)),n.update()}function Ue(P){let se=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(-n.keyPanSpeed,0),se=!0;break}se&&(P.preventDefault(),n.update())}function Te(P){if(C.length===1)f.set(P.pageX,P.pageY);else{const se=Ae(P),Re=.5*(P.pageX+se.x),O=.5*(P.pageY+se.y);f.set(Re,O)}}function ut(P){if(C.length===1)v.set(P.pageX,P.pageY);else{const se=Ae(P),Re=.5*(P.pageX+se.x),O=.5*(P.pageY+se.y);v.set(Re,O)}}function Oe(P){const se=Ae(P),Re=P.pageX-se.x,O=P.pageY-se.y,fe=Math.sqrt(Re*Re+O*O);m.set(0,fe)}function G(P){n.enableZoom&&Oe(P),n.enablePan&&ut(P)}function Ct(P){n.enableZoom&&Oe(P),n.enableRotate&&Te(P)}function Ce(P){if(C.length==1)d.set(P.pageX,P.pageY);else{const Re=Ae(P),O=.5*(P.pageX+Re.x),fe=.5*(P.pageY+Re.y);d.set(O,fe)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const se=n.domElement;Q(2*Math.PI*g.x/se.clientHeight),te(2*Math.PI*g.y/se.clientHeight),f.copy(d)}function Ze(P){if(C.length===1)x.set(P.pageX,P.pageY);else{const se=Ae(P),Re=.5*(P.pageX+se.x),O=.5*(P.pageY+se.y);x.set(Re,O)}p.subVectors(x,v).multiplyScalar(n.panSpeed),$(p.x,p.y),v.copy(x)}function Fe(P){const se=Ae(P),Re=P.pageX-se.x,O=P.pageY-se.y,fe=Math.sqrt(Re*Re+O*O);w.set(0,fe),S.set(0,Math.pow(w.y/m.y,n.zoomSpeed)),ae(S.y),m.copy(w);const W=(P.pageX+se.x)*.5,he=(P.pageY+se.y)*.5;re(W,he)}function at(P){n.enableZoom&&Fe(P),n.enablePan&&Ze(P)}function Ke(P){n.enableZoom&&Fe(P),n.enableRotate&&Ce(P)}function et(P){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Et),n.domElement.addEventListener("pointerup",L)),!tt(P)&&(pe(P),P.pointerType==="touch"?me(P):E(P)))}function Et(P){n.enabled!==!1&&(P.pointerType==="touch"?xe(P):j(P))}function L(P){switch(Pt(P),C.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",L),n.dispatchEvent(Jh),s=r.NONE;break;case 1:const se=C[0],Re=z[se];me({pointerId:se,pageX:Re.x,pageY:Re.y});break}}function E(P){let se;switch(P.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case br.DOLLY:if(n.enableZoom===!1)return;ye(P),s=r.DOLLY;break;case br.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ke(P),s=r.PAN}else{if(n.enableRotate===!1)return;de(P),s=r.ROTATE}break;case br.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;de(P),s=r.ROTATE}else{if(n.enablePan===!1)return;ke(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(oc)}function j(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Y(P);break;case r.DOLLY:if(n.enableZoom===!1)return;le(P);break;case r.PAN:if(n.enablePan===!1)return;ne(P);break}}function ie(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(oc),Be(ue(P)),n.dispatchEvent(Jh))}function ue(P){const se=P.deltaMode,Re={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(se){case 1:Re.deltaY*=16;break;case 2:Re.deltaY*=100;break}return P.ctrlKey&&!Z&&(Re.deltaY*=10),Re}function ce(P){P.key==="Control"&&(Z=!0,n.domElement.getRootNode().addEventListener("keyup",ze,{passive:!0,capture:!0}))}function ze(P){P.key==="Control"&&(Z=!1,n.domElement.getRootNode().removeEventListener("keyup",ze,{passive:!0,capture:!0}))}function Ie(P){n.enabled===!1||n.enablePan===!1||Ue(P)}function me(P){switch(De(P),C.length){case 1:switch(n.touches.ONE){case Tr.ROTATE:if(n.enableRotate===!1)return;Te(P),s=r.TOUCH_ROTATE;break;case Tr.PAN:if(n.enablePan===!1)return;ut(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Tr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(P),s=r.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(oc)}function xe(P){switch(De(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ze(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;at(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ke(P),n.update();break;default:s=r.NONE}}function Xe(P){n.enabled!==!1&&P.preventDefault()}function pe(P){C.push(P.pointerId)}function Pt(P){delete z[P.pointerId];for(let se=0;se<C.length;se++)if(C[se]==P.pointerId){C.splice(se,1);return}}function tt(P){for(let se=0;se<C.length;se++)if(C[se]==P.pointerId)return!0;return!1}function De(P){let se=z[P.pointerId];se===void 0&&(se=new Me,z[P.pointerId]=se),se.set(P.pageX,P.pageY)}function Ae(P){const se=P.pointerId===C[0]?C[1]:C[0];return z[se]}n.domElement.addEventListener("contextmenu",Xe),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",L),n.domElement.addEventListener("wheel",ie,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}class lS extends jn{constructor(t){super();un(this,"points");un(this,"values");this.points=t,this.values=this.getValues()}getPoint(t,n=new F){let r=0;for(;r<this.values.length-1;r++)if(this.values[r]<=t&&this.values[r+1]>=t){const[s,a,o]=this.points[r],[c,u,h]=this.points[r+1],f=(t-this.values[r])/(this.values[r+1]-this.values[r]),d=s+f*(c-s),g=a+f*(u-a),v=o+f*(h-o);return n.set(d,g,v)}return n.set(0,0,0)}getValues(){let t=[0],n=0;for(let r=1;r<this.points.length;r++){const s=this.points[r-1],a=this.points[r],o=[0,1,2].map(u=>a[u]-s[u]).map(u=>u*u).reduce((u,h)=>u+h),c=Math.sqrt(o);n+=c,t.push(n)}return t=t.map(r=>r/n),t}}const uS=["R","L","U","D","F","B"],hS={R:"hsl(120, 100%, 60%)",L:"hsl(240, 100%, 60%)",U:"hsl(60, 100%, 60%)",D:"hsl(120, 100%, 100%)",F:"hsl(0, 100%, 60%)",B:"hsl(20, 100%, 60%)"};let Kc=0,Xo=null,Cc=[],Lc=new Set,ad=!0,Pc=.6,Uc=!1,Jc=!0,cd=!1,pn=null,Fs=null,ti=null,vs=null;const As=[],Qc=[];let _n=null;function ac(i,e,t){if(Jc){const n=t,r=Oc(e.facePoint.face),s=[...e.point];for(let a=0;a<s.length;a++)r[a]===0?s[a]+=.5:s[a]===0?s[a]=-n:s[a]===i-1?s[a]=s[a]+1+n:s[a]+=1;return s.map(a=>a*2/i-1)}else{const n=t*(i-1)/2;let r=e.point.map(s=>s===0?-n:s===i-1?i+n:s+.5);return r=r.map(s=>s*2/i-1),r}}function ef(i,e,t){const n=ff(e,i),r=Tm(n);return wm(i,Am(r,t))}function fS(i,e,t){const n=$m(2,[-1,1,1],i,e);return[i,...n,e]}function dS(){return Cc}function tf(i){Pc=i;for(const e of dS())e.opacity=i}function pS(i){cd=i}function mS(i){Jc=i}function gS(i){Uc=i}function nf(i){ad=i,el()}function el(){As.filter(i=>i.type==="cycle"||i.type==="rotation").forEach(i=>{i.obj.visible=ad||!i.inner,Lc.size>0&&(i.obj.visible=Lc.has(i.name))})}function _s(i){Lc=i,el()}Fs=new In(30,1,.01,100);Fs.position.set(4,4,4);function _S(i,e,t){Jo(),As.length=0,Qc.length=0;const n=Math.sqrt(3/i);vs=t,ti=new AM,ti.background=null,xS(i,e,ti);{const o=new hf;let c=0,u=.05/e.permutations.filter(v=>v.length>1).length;const h=Nc(e.permutations,e.N),f=(v,x)=>v.every(p=>p.facePoint.face===v[0].facePoint.face&&p.facePoint.a>0&&p.facePoint.a<x-1&&p.facePoint.b>0&&p.facePoint.b<x-1),d=()=>new Ds({color:o.nextColor(),transparent:!1});let g=1;for(const v of h.filter(x=>x.length>1)){c+=u,c=0;const x=d(),p=f(v.map(w=>w.p1),e.N),m=new Ii;for(const w of v){const S=ac(i,w.p1,c),b=ac(i,w.p2,c);let D=cd?fS(S,b):[S,b];D[0]=ef(D[0],D[1],.02*n),D[D.length-1]=ef(D[D.length-1],D[D.length-2],.03*n);const U=[];for(let N=0;N<D.length;N++){if(N>0){const J=D[N],$=D[N-1];U.push([(J[0]+$[0])/2,(J[1]+$[1])/2,(J[2]+$[2])/2])}U.push(D[N])}D=U,D.map(N=>new F(...N));const C=new lS(D),z=new Zc(C,100,.007*n,20),Z=new Vt(z,x);Z.castShadow=!0,m.add(Z);const M=new $r(.03*n,.05*n),R=new Vt(M,x),Q=new jc(.007*n),te=new Vt(Q,x);R.geometry.rotateX(Math.PI/2),R.lookAt(new F(...ff(D[D.length-1],D[D.length-2]))),R.position.set(...D[D.length-1]),m.add(R),te.position.set(...D[0]),m.add(te)}ti.add(m),As.push({name:`cycle#${g++}`,obj:m,material:x,inner:p,type:"cycle"})}g=1;for(const v of h.filter(x=>x.length===1)){const x=d(),p=f(v.map(U=>U.p1),e.N),m=v[0],w=ac(i,m.p1,.05),S=m.rotation[1],b=new Ii;if(S===180){const U=Math.PI*.7;{const C=new Ts(.1*n,.01*n,void 0,void 0,U),z=new Vt(C,x);z.geometry.rotateZ(Math.PI/2),b.add(z);const Z=new $r(.03*n,.05*n),M=new Vt(Z,x);M.geometry.rotateZ(-Math.PI/2),M.position.set(.02*n,.1*n,0),b.add(M)}{const C=new Ts(.1*n,.01*n,void 0,void 0,U),z=new Vt(C,x);z.geometry.rotateZ(-Math.PI/2),b.add(z);const Z=new $r(.03*n,.05*n),M=new Vt(Z,x);M.geometry.rotateZ(Math.PI/2),M.position.set(-.02*n,-.1*n,0),b.add(M)}}else{const U=Math.PI*3/2,C=new Ts(.1*n,.01*n,void 0,void 0,U),z=new Vt(C,x);z.geometry.rotateZ(S<0?Math.PI/2:Math.PI),b.add(z);const Z=new $r(.03*n,.05*n),M=new Vt(Z,x);M.position.set((S<0?.1:-.1)*n,.02*n,0),b.add(M)}const D=Jc?Oc(m.p1.facePoint.face):w;b.lookAt(...D),b.position.set(...w),ti.add(b),As.push({name:`rotation#${g++}`,obj:b,material:x,inner:p,type:"rotation"})}}const r=o=>{const c=new oS("white",3);return c.position.set(...o),c};ti.add(r([1,1,1]),r([-1,-1,-1]),r([1,-1,1]),r([-1,1,-1])),pn||(pn=new Kf({antialias:!0,alpha:!0}),pn.setClearColor(0,0),pn.shadowMap.enabled=!0,pn.shadowMap.type=eg,new cS(Fs,pn.domElement),t.append(pn.domElement),Xo=pn.domElement);const s=getComputedStyle(t),a=Math.min(t.clientWidth-parseFloat(s.paddingLeft)-parseFloat(s.paddingRight),t.clientHeight-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom));return pn.setSize(a,a),pn.setPixelRatio(window.devicePixelRatio),Xo}function vS(){if(pn&&vs){const i=getComputedStyle(vs),e=Math.min(vs.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),vs.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom));pn.setSize(e,e)}}function rf(){ud(),Kc=requestAnimationFrame(ld)}let Io=null;function ld(){if(pn&&ti&&Fs){if(SS(performance.now()),pn.render(ti,Fs),Io){const{filename:i,cropBlankArea:e}=Io;Io=null,Fm(Xo.getContext("webgl2"),i,e)}Kc=requestAnimationFrame(ld)}}function ud(){cancelAnimationFrame(Kc),Jo()}function xS(i,e,t){const n=e.getAllFacesColors(),r=2/i,s=r*.94;Cc=[];for(const a of uS){const o=Oc(a),c=new F(...o);for(let u=0;u<i;u++)for(let h=0;h<i;h++){const f=n[a].find(b=>b.a===u&&b.b===h),d=(f==null?void 0:f.color)||a,g=xm({face:a,a:u,b:h},i),v=g.map(b=>(b+.5)*2/i-1);for(let b=0;b<3;b++)o[b]!==0&&(v[b]=o[b]);const x=new Ii,p=new Ds({color:"black",opacity:Pc,transparent:!0,side:Uc?qn:ri}),m=new Ds({color:hS[d],opacity:Pc,transparent:!0,side:Uc?qn:ri});Cc.push(p,m);const w=new Vt(yS(r,s),p),S=new Vt(new ks(s,s),m);x.add(w,S),x.position.set(...v),x.quaternion.setFromUnitVectors(new F(0,0,1),c),t.add(x),Qc.push({obj:x,position:g})}}}function yS(i,e){const t=i/2,n=e/2,r=new id;r.moveTo(-t,-t),r.lineTo(t,-t),r.lineTo(t,t),r.lineTo(-t,t),r.closePath();const s=new Ac;return s.moveTo(-n,-n),s.lineTo(-n,n),s.lineTo(n,n),s.lineTo(n,-n),s.closePath(),r.holes.push(s),new $c(r)}function MS(i,e=300){if(Jo(),!ti)return Promise.resolve(!1);const[t,n,r,s]=i,a=Qc.filter(u=>{const h=u.position[t];return h>=r&&h<s});if(a.length===0||n===0)return Promise.resolve(!1);const o=new Ii;ti.add(o);for(const u of a)o.attach(u.obj);for(const u of As)u.obj.visible=!1;const c=[0,0,0];return c[t]=1,new Promise(u=>{_n={group:o,axis:c,degree:n,duration:e,startedAt:null,resolve:u}})}function Jo(){_n&&(_n.resolve(!1),_n=null)}function SS(i){if(!_n)return;_n.startedAt===null&&(_n.startedAt=i);const e=i-_n.startedAt,t=Math.min(e/_n.duration,1),n=1-Math.pow(1-t,3);if(_n.group.setRotationFromAxisAngle(new F(..._n.axis),Lf.degToRad(_n.degree*n)),t===1){const r=_n.resolve;_n=null,r(!0)}}function ES(i,e){pn&&Xo&&(Io={filename:i,cropBlankArea:e})}function bS(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function TS(i,e){const t=i.indexOf(e);return t===-1?(i.push(e),!0):(i.splice(t,1),!1)}function AS(i,e,t){return i<e?e:i>t?t:i}function hd(){return{renderType:"3D",showSuperCubeChanges:!0,opacity:.6,lineOverCube:!1,useFacePosition:!0,cubeSelfTransparency:!1,showAlgBanner:!1,selectedUnits:[]}}class wS{constructor(e){un(this,"container");un(this,"canvas2d");un(this,"canvas3d",null);un(this,"algBanner");un(this,"result",null);un(this,"pendingRender3DResult",!1);un(this,"pendingRender2DResult",!1);un(this,"renderOption",hd());un(this,"animationGeneration",0);un(this,"animationPending",!1);this.container=e,this.algBanner=document.createElement("div"),this.algBanner.style.textShadow="1px 1px 5px gray",this.algBanner.style.textAlign="center",this.canvas2d=document.createElement("canvas"),this.container.appendChild(this.algBanner),this.container.appendChild(this.canvas2d),this.canvas2d.style.width="100%",this.canvas2d.style.height="100%"}setRenderOption(e){let t=!1,n=!1;e.showAlgBanner!==void 0&&this.renderOption.showAlgBanner!==e.showAlgBanner&&(this.renderOption.showAlgBanner=e.showAlgBanner,this.syncAlgBannerVisibility()),e.opacity!==void 0&&this.renderOption.opacity!==e.opacity&&(this.renderOption.opacity=e.opacity,tf(this.renderOption.opacity)),e.showSuperCubeChanges!==void 0&&this.renderOption.showSuperCubeChanges!==e.showSuperCubeChanges&&(this.renderOption.showSuperCubeChanges=e.showSuperCubeChanges,this.renderOption.renderType==="3D"?nf(this.renderOption.showSuperCubeChanges):t=!0),e.selectedUnits!==void 0&&!bS(this.renderOption.selectedUnits,e.selectedUnits)&&(this.renderOption.selectedUnits=e.selectedUnits,_s(new Set(this.renderOption.selectedUnits))),e.lineOverCube!==void 0&&this.renderOption.lineOverCube!==e.lineOverCube&&(this.renderOption.lineOverCube=e.lineOverCube,this.renderOption.renderType==="3D"&&(n=!0)),e.cubeSelfTransparency!==void 0&&this.renderOption.cubeSelfTransparency!==e.cubeSelfTransparency&&(this.renderOption.cubeSelfTransparency=e.cubeSelfTransparency,this.renderOption.renderType==="3D"&&(n=!0)),e.useFacePosition!==void 0&&this.renderOption.useFacePosition!==e.useFacePosition&&(this.renderOption.useFacePosition=e.useFacePosition,this.renderOption.renderType==="3D"&&(n=!0)),e.renderType!==void 0&&this.renderOption.renderType!==e.renderType&&(this.renderOption.renderType=e.renderType,e.renderType==="3D"?(this.canvas2d.style.display="none",this.canvas3d&&(this.canvas3d.style.display="block",rf())):(this.canvas2d.style.display="block",this.canvas3d&&(this.animationGeneration++,this.animationPending=!1,this.canvas3d.style.display="none",ud()),t=!0)),this.renderOption.renderType==="3D"&&(n||this.pendingRender3DResult)&&this.result&&this.rerender3D(),this.renderOption.renderType!=="3D"&&(t||this.pendingRender2DResult)&&this.result&&this.rerender2D()}rerender3D(){if(!this.result)throw new Error("3D: No result to render");this.animationGeneration++,this.animationPending=!1,pS(this.renderOption.lineOverCube),mS(this.renderOption.useFacePosition),gS(this.renderOption.cubeSelfTransparency),this.canvas3d=_S(this.result.N,this.result,this.container),nf(this.renderOption.showSuperCubeChanges),tf(this.renderOption.opacity),el(),rf(),this.pendingRender3DResult=!1}rerender2D(){if(!this.result)throw new Error("2D: No result to render");Rm(this.canvas2d),Hm(this.renderOption.renderType,this.result,this.canvas2d,this.renderOption.showSuperCubeChanges),this.pendingRender2DResult=!1}syncAlgBannerVisibility(){this.algBanner.style.display=this.renderOption.showAlgBanner?"":"none"}getRenderOption(){return this.renderOption}renderNewResult(e,t){if(this.animationPending&&this.result&&this.renderOption.renderType==="3D"&&(Jo(),this.rerender3D()),this.result=e,this.pendingRender3DResult=!0,this.pendingRender2DResult=!0,this.algBanner.innerText=e.alg,this.syncAlgBannerVisibility(),this.renderOption.renderType==="3D")if(this.canvas2d.style.display="none",t&&this.canvas3d){const n=++this.animationGeneration;this.animationPending=!0,MS(t).then(()=>{n===this.animationGeneration&&(this.animationPending=!1,this.rerender3D())})}else this.rerender3D();else this.canvas2d.style.display="block",this.canvas3d&&(this.canvas3d.style.display="none"),this.rerender2D()}toggleSelection(e){const t=TS(this.renderOption.selectedUnits,e);return _s(new Set(this.renderOption.selectedUnits)),t}clearSelection(){this.renderOption.selectedUnits=[],_s(new Set(this.renderOption.selectedUnits))}setHighlightUnit(e){e.length===0?_s(new Set(this.renderOption.selectedUnits)):_s(new Set([...this.renderOption.selectedUnits,e]))}downloadImage(){this.renderOption.renderType==="3D"?ES("cube.png",!0):Om(this.canvas2d.getContext("2d"),"cube.png",!0)}onResize(){this.result&&(this.renderOption.renderType==="3D"?vS():this.rerender2D())}}let RS={n:3,alg:"F R U R' U' F'",algParam:"",completionMode:!1,...hd()};const ot=LS();let Pi=Number.POSITIVE_INFINITY,Dc="",Zr;const Wt=new wS(ot.canvasContainer),pt=CS();function CS(){const i=JSON.parse(window.localStorage.getItem("setting")||"{}"),e=new URLSearchParams(window.location.search),t=JSON.parse(e.get("s")||"{}");return{...RS,...i,...t}}function Wn(i={}){Object.assign(pt,i),Object.assign(pt,Wt.getRenderOption()),window.localStorage.setItem("setting",JSON.stringify(pt))}window.onload=function(){document.body.appendChild(ot.app),ot.inputAlg.value=pt.alg,ot.inputN.value=pt.n.toString(),ot.inputParam.value=pt.algParam,Wt.setRenderOption(pt),qo(),Xn(),rr()};function qo(){const i=window.innerHeight-ot.canvasContainer.offsetTop-20,t=`${Math.min(i,ot.canvasContainer.clientWidth)}px`;return ot.canvasContainer.style.height!==t?(ot.canvasContainer.style.height=t,!0):!1}function Gr(i,e){e?(i.classList.add("btn-primary"),i.classList.remove("btn-outline-secondary")):(i.classList.remove("btn-primary"),i.classList.add("btn-outline-secondary"))}window.onresize=function(){qo(),Wt.onResize()};function LS(){const i=Dn("div","container-fluid my-2");i.id="app";const e=document.createElement("div");e.classList.add("input-group");const t=cc(e,"alg","",rr),n=Dn("button","btn btn-outline-secondary input-group-prepend");n.textContent="Alg",n.onclick=()=>PS(),e.prepend(n),t.style.width="50%";const r=cc(e,"N","N",rr),s=cc(e,"Params","Params",rr),a=dn("row justify-content-between mb-2"),o=dn("col-md-10"),c=dn("col-md-2 btn-group");o.append(e),a.append(o,c);const u=en("Inv",()=>{const ee=ot.inputAlg.value;ee.startsWith("(")&&ee.endsWith(")'")?ot.inputAlg.value=ee.slice(1,ee.length-2):ot.inputAlg.value=`(${ee})'`,rr()}),h=en("🔗",()=>{const ee=JSON.stringify({...pt,...Wt.getRenderOption()}),de=window.location.href.split("?")[0];window.open(de+"?s="+encodeURIComponent(ee),"_blank")},"Share link"),f=en("▶️",()=>{const ee=Zr.N;window.open(`https://alpha.twizzle.net/explore/?puzzle=${ee}x${ee}x${ee}&alg=${Zr.alg}`,"_blank")},"play in alpha.twizzle.net"),d=en("🛈",()=>{window.open("https://github.com/timepp/cube")}),g=en("⬇️",()=>{Wt.downloadImage()},"download image");c.append(u,h,f,d,g);const v=dn("row mb-2");v.classList.add("row");const x=dn("col-8"),p=dn("btn-group me-3"),m=dn("btn-group"),w=en("opacity",()=>{const ee=Pm([1,.6,.2],pt.opacity);Wt.setRenderOption({opacity:ee}),Wn(),Xn()}),S=en("center",()=>{const ee=!pt.showSuperCubeChanges;Wt.setRenderOption({showSuperCubeChanges:ee}),Wn(),Xn()}),b=en("facePosition",()=>{const ee=!pt.useFacePosition;Wt.setRenderOption({useFacePosition:ee}),Wn(),Xn()}),D=en("over",()=>{const ee=!pt.lineOverCube;Wt.setRenderOption({lineOverCube:ee}),Wn(),Xn()}),U=en("translucent",()=>{const ee=!pt.cubeSelfTransparency;Wt.setRenderOption({cubeSelfTransparency:ee}),Wn(),Xn()}),C=en("Alg Banner",()=>{const ee=!pt.showAlgBanner;Wt.setRenderOption({showAlgBanner:ee}),Wn(),Xn()}),z=IS(),Z=[w,S,b,D,U];p.append(...Z,C);const M=en("🕛",()=>{pt.completionMode=!pt.completionMode,Wn(),Xn(),rr()},"toggle completion mode"),R=en("⏮️",()=>{xs(0)}),Q=en("◀️",()=>{xs(Pi-1)}),te=en("▶️",()=>{xs(Pi+1)}),N=en("⏭️",()=>{xs(Number.POSITIVE_INFINITY)});m.append(R,Q,te,N),m.append(M),x.append(z),x.append(p),x.append(m),v.append(x);const J=dn("row"),$=dn("col-md-8"),ae=dn("col-md-4"),I=dn("border rounded-1 p-1"),re=dn("border rounded-1 p-2");return $.append(I),ae.append(re),J.append($,ae),i.append(a,v,J),{app:i,inputN:r,inputAlg:t,inputParam:s,canvasContainer:I,renderSwitcher:z,desc:re,showCenter:S,opacity:w,useFacePosition:b,lineOverCube:D,cubeSelfTransparency:U,algBanner:C,buttonsFor3D:Z,completionModeBtn:M}}function Xn(){Gr(ot.showCenter,pt.showSuperCubeChanges),Gr(ot.useFacePosition,pt.useFacePosition),Gr(ot.lineOverCube,pt.lineOverCube),Gr(ot.cubeSelfTransparency,pt.cubeSelfTransparency),Gr(ot.algBanner,pt.showAlgBanner),Gr(ot.completionModeBtn,pt.completionMode),ot.opacity.textContent=`opacity: ${pt.opacity}`;for(const e of ot.renderSwitcher.children)e.classList.remove("btn-primary"),e.classList.add("btn-outline-secondary"),e.textContent===pt.renderType&&(e.classList.add("btn-primary"),e.classList.remove("btn-outline-secondary"));const i=pt.selectedUnits;for(const e of document.querySelectorAll(".perm")){const t=e;i.indexOf(t.id)>=0?t.style.fontWeight="bold":t.style.fontWeight=""}}function PS(){const[i,e]=Lm(ot.app,"container-fluid my-2"),t=Dn("div","pb-2 mb-2","border-bottom:1px solid red");i.append(t);const n=Dn("button","btn btn-warning me-4");n.textContent="← Back",n.onclick=()=>{e(),qo(),Wt.onResize()},t.append(n);const r=Dn("div","","display:flex;flex-direction:vertical;flex-wrap:wrap");i.append(r);function s(c){df(r);for(const u of c){const h=Dn("span","border p-2 me-2 mb-2 small");if(h.style.cursor="pointer",h.style.width="150px",h.style.background=Cm(u.tags.join(","),100,95),h.append(...yu("red","["+u.tags.join(",")+"] ","black",u.name)),h.append(document.createElement("br")),h.append(...yu("blue",u.algorithm)),h.onclick=function(f){return function(){e(),ot.inputAlg.value=f.algorithm;const d=parseInt(ot.inputN.value),g=ot.inputParam.value.split(/\s+/g).filter(v=>v!=="");if(f.validateParam){const v=f.validateParam(d,g.map(parseInt));ot.inputN.value=v.n.toString(),ot.inputParam.value=v.param.join(" ")}qo(),rr()}}(u),r.append(h),u.name.toLowerCase().indexOf("oll")>=0){const f=Dn("img");f.src=`image/olls/${u.name}.svg`,r.append(f)}}}function a(){let c=mc();for(const u of t.querySelectorAll("button"))u.classList.contains("btn-primary")&&(c=c.filter(h=>h.tags.indexOf(u.textContent)>=0));s(c)}const o=new Set(mc().map(c=>c.tags).flat());for(const c of o){const u=Dn("button","btn btn-outline-secondary me-2","border-top-right-radius: 2px;");u.textContent=c,u.onclick=h=>{const f=h.target;f.classList.toggle("btn-primary"),f.classList.toggle("btn-outline-secondary"),h.stopPropagation(),a()},t.append(u)}a()}function cc(i,e,t,n){if(t!==""){const s=document.createElement("span");s.classList.add("input-group-text",`prompt-${e}`),s.appendChild(document.createTextNode(t)),i.appendChild(s)}const r=document.createElement("input");return r.type="text",r.classList.add("form-control"),r.id=e,r.onchange=n,i.appendChild(r),r}function US(i,e,t){const n=document.createElement("button"),r=e.split(/\s+/g);return n.classList.add(...r),n.onclick=t,n.textContent=i,n.style.whiteSpace="nowrap",n}function DS(i){Wt.setRenderOption({renderType:i}),Wn(),Xn()}function IS(){const i=dn("me-3");i.style.display="inline-block";const e="btn btn-outline-secondary rounded-0";for(const t of["1 face","3 faces","5 faces","6 faces","6 faces 2","3D"])i.append(US(t,e,n=>{const r=n.target;DS(r.textContent);const s=r.textContent==="3D"?"":"none";ot.buttonsFor3D.forEach(a=>a.style.display=s)}));return i}function NS(i,e,t){const n=mf(e,t.split(/\s+/g).filter(r=>r!==""),i);return{...n,regulatedAlg:vm(n.resolvedAlgorithm,i)}}function sf(i,e,t,n="",r){const s=mf(e,t.split(/\s+/g).filter(u=>u!==""),i);console.log(s);const a=Fc(e),o=document.querySelector(".prompt-Params");a.length===0?(ot.inputParam.style.display="none",o.style.display="none"):(o.style.display="",ot.inputParam.style.display="",ot.inputParam.placeholder=a.join(" "));const c=s.actualParamValues.join(" ");return c!==ot.inputParam.value&&(ot.inputParam.value=c),Zr=uf(s.resolvedAlgorithm,i,!1,n),OS(Zr,i),Wt.renderNewResult(Zr,r),{...s,result:Zr}}function rr(){console.log("onInputChange");const i=parseInt(ot.inputN.value),e=ot.inputAlg.value,t=ot.inputParam.value,n=ot.completionModeBtn.classList.contains("btn-primary");Wt.clearSelection();const r=NS(i,e,t);Wn({n:i,alg:e,algParam:r.actualParamValues.join(" "),completionMode:n}),Dc=r.regulatedAlg,xs(-1)}function xs(i){const e=Dc.split(" ").filter(a=>a!==""),t=e.length;i===-1&&(i=pt.completionMode?0:t);const n=Pi;Pi=AS(i,0,t);const r=e.slice(0,Pi).join(" ");let s;if(Number.isFinite(n)&&Math.abs(Pi-n)===1){const a=Pi>n,o=e[Math.min(n,Pi)],c=uf(o,pt.n).ops[0];c&&(s=a?c:[c[0],-c[1],c[2],c[3]])}pt.completionMode?sf(pt.n,r,"",`( ${Dc} )'`,s):sf(pt.n,r,"","",s)}function OS(i,e){const t=(c,u)=>{const h=document.createElement("span");return h.style.color=u,h.style.fontWeight="800",h.textContent=c,h};df(ot.desc);const n=document.createElement("div");n.style.maxHeight="300px",n.style.overflowY="auto",n.append("Regulated Alg: "+i.regulatedAlg,document.createElement("br")),n.append("Simplified Alg: "+i.simplifiedAlg,document.createElement("br"));const r=Dn("span","bg-light me-2 pe-2"),s=Dn("span");r.style.cursor="pointer",r.textContent="Refactored Alg:",r.onclick=()=>{const c=parseInt(r.getAttribute("depth")||"1"),u=Date.now(),h=pm(e,c,i.ops),f=Date.now();s.textContent=h.alg,r.setAttribute("depth",`${c+1}`),r.textContent=`Refactored Alg(depth ${c}):`,f-u>5e3&&(r.classList.add("bg-danger"),r.classList.remove("bg-light")),h.complete&&(r.textContent="Refactored Alg:",r.onclick=()=>{})},n.append(r,s,document.createElement("br")),ot.desc.append(n),ot.desc.append("Order: "+i.order,document.createElement("br"));const a=dn();let o=0;if(i.cycles.length>100)a.append("cycles are too big to display: "+i.cycles.length);else for(const c of i.cycles){const u=c.map(f=>pc(e,f)[0]||`${f}`).join(" -> "),h=document.createElement("span");h.classList.add("perm"),h.append(t(`[${c.length}]`,"#0080ff"),document.createTextNode(u+" ")),a.append(h),h.style.cursor="pointer",o++,h.id=`cycle#${o}`,h.onclick=function(f,d){return g=>{Wt.toggleSelection(f),Wn(),Xn()}}(`cycle#${o}`),h.onmousedown=f=>{f.detail>1&&f.preventDefault()},h.onmouseenter=function(f,d){return g=>{Wt.setHighlightUnit(f)}}(`cycle#${o}`)}a.append(document.createElement("br")),o=0;for(const c of i.rotates){const u=pc(e,c.unit.position)[0]||`${c.unit.position}`,h=document.createElement("span");h.classList.add("perm"),h.append(t(`[${c.degree}°] `,"#FF0080"),u+" "),a.append(h),h.style.cursor="pointer",o++,h.id=`cycle#${o}`,h.onclick=function(f,d){return g=>{Wt.toggleSelection(f),Wn(),Xn()}}(`rotation#${o}`),h.onmouseenter=function(f,d){return g=>{Wt.setHighlightUnit(f)}}(`rotation#${o}`)}a.onmouseleave=()=>Wt.setHighlightUnit(""),ot.desc.append(a)}});export default FS();
