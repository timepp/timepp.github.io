var xp=Object.defineProperty;var yp=(i,e,t)=>e in i?xp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Mp=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var yn=(i,e,t)=>(yp(i,typeof e!="symbol"?e+"":e,t),t);var FM=Mp((Pf,fc)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof Pf=="object"&&typeof fc<"u"?fc.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e()})(void 0,function(){const i=new Map,e={set(x,l,_){i.has(x)||i.set(x,new Map);const b=i.get(x);b.has(l)||b.size===0?b.set(l,_):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(b.keys())[0]}.`)},get:(x,l)=>i.has(x)&&i.get(x).get(l)||null,remove(x,l){if(!i.has(x))return;const _=i.get(x);_.delete(l),_.size===0&&i.delete(x)}},t="transitionend",n=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(l,_)=>`#${CSS.escape(_)}`)),x),r=x=>{x.dispatchEvent(new Event(t))},s=x=>!(!x||typeof x!="object")&&(x.jquery!==void 0&&(x=x[0]),x.nodeType!==void 0),a=x=>s(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(n(x)):null,o=x=>{if(!s(x)||x.getClientRects().length===0)return!1;const l=getComputedStyle(x).getPropertyValue("visibility")==="visible",_=x.closest("details:not([open])");if(!_)return l;if(_!==x){const b=x.closest("summary");if(b&&b.parentNode!==_||b===null)return!1}return l},c=x=>!x||x.nodeType!==Node.ELEMENT_NODE||!!x.classList.contains("disabled")||(x.disabled!==void 0?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false"),u=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const l=x.getRootNode();return l instanceof ShadowRoot?l:null}return x instanceof ShadowRoot?x:x.parentNode?u(x.parentNode):null},h=()=>{},f=x=>{x.offsetHeight},d=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,g=[],v=()=>document.documentElement.dir==="rtl",y=x=>{var l;l=()=>{const _=d();if(_){const b=x.NAME,B=_.fn[b];_.fn[b]=x.jQueryInterface,_.fn[b].Constructor=x,_.fn[b].noConflict=()=>(_.fn[b]=B,x.jQueryInterface)}},document.readyState==="loading"?(g.length||document.addEventListener("DOMContentLoaded",()=>{for(const _ of g)_()}),g.push(l)):l()},p=(x,l=[],_=x)=>typeof x=="function"?x(...l):_,m=(x,l,_=!0)=>{if(!_)return void p(x);const b=(J=>{if(!J)return 0;let{transitionDuration:oe,transitionDelay:ge}=window.getComputedStyle(J);const Ee=Number.parseFloat(oe),Ae=Number.parseFloat(ge);return Ee||Ae?(oe=oe.split(",")[0],ge=ge.split(",")[0],1e3*(Number.parseFloat(oe)+Number.parseFloat(ge))):0})(l)+5;let B=!1;const k=({target:J})=>{J===l&&(B=!0,l.removeEventListener(t,k),p(x))};l.addEventListener(t,k),setTimeout(()=>{B||r(l)},b)},R=(x,l,_,b)=>{const B=x.length;let k=x.indexOf(l);return k===-1?!_&&b?x[B-1]:x[0]:(k+=_?1:-1,b&&(k=(k+B)%B),x[Math.max(0,Math.min(k,B-1))])},E=/[^.]*(?=\..*)\.|.*/,A=/\..*/,I=/::\d+$/,U={};let w=1;const z={mouseenter:"mouseover",mouseleave:"mouseout"},Q=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function M(x,l){return l&&`${l}::${w++}`||x.uidEvent||w++}function C(x){const l=M(x);return x.uidEvent=l,U[l]=U[l]||{},U[l]}function K(x,l,_=null){return Object.values(x).find(b=>b.callable===l&&b.delegationSelector===_)}function ee(x,l,_){const b=typeof l=="string",B=b?_:l||_;let k=se(x);return Q.has(k)||(k=x),[b,B,k]}function O(x,l,_,b,B){if(typeof l!="string"||!x)return;let[k,J,oe]=ee(l,_,b);l in z&&(J=($e=>function(We){if(!We.relatedTarget||We.relatedTarget!==We.delegateTarget&&!We.delegateTarget.contains(We.relatedTarget))return $e.call(this,We)})(J));const ge=C(x),Ee=ge[oe]||(ge[oe]={}),Ae=K(Ee,J,k?_:null);if(Ae)return void(Ae.oneOff=Ae.oneOff&&B);const Me=M(J,l.replace(E,"")),nt=k?function(He,$e,We){return function je(xt){const wt=He.querySelectorAll($e);for(let{target:at}=xt;at&&at!==this;at=at.parentNode)for(const dt of wt)if(dt===at)return re(xt,{delegateTarget:at}),je.oneOff&&D.off(He,xt.type,$e,We),We.apply(at,[xt])}}(x,_,J):function(He,$e){return function We(je){return re(je,{delegateTarget:He}),We.oneOff&&D.off(He,je.type,$e),$e.apply(He,[je])}}(x,J);nt.delegationSelector=k?_:null,nt.callable=J,nt.oneOff=B,nt.uidEvent=Me,Ee[Me]=nt,x.addEventListener(oe,nt,k)}function X(x,l,_,b,B){const k=K(l[_],b,B);k&&(x.removeEventListener(_,k,!!B),delete l[_][k.uidEvent])}function Y(x,l,_,b){const B=l[_]||{};for(const[k,J]of Object.entries(B))k.includes(b)&&X(x,l,_,J.callable,J.delegationSelector)}function se(x){return x=x.replace(A,""),z[x]||x}const D={on(x,l,_,b){O(x,l,_,b,!1)},one(x,l,_,b){O(x,l,_,b,!0)},off(x,l,_,b){if(typeof l!="string"||!x)return;const[B,k,J]=ee(l,_,b),oe=J!==l,ge=C(x),Ee=ge[J]||{},Ae=l.startsWith(".");if(k===void 0){if(Ae)for(const Me of Object.keys(ge))Y(x,ge,Me,l.slice(1));for(const[Me,nt]of Object.entries(Ee)){const He=Me.replace(I,"");oe&&!l.includes(He)||X(x,ge,J,nt.callable,nt.delegationSelector)}}else{if(!Object.keys(Ee).length)return;X(x,ge,J,k,B?_:null)}},trigger(x,l,_){if(typeof l!="string"||!x)return null;const b=d();let B=null,k=!0,J=!0,oe=!1;l!==se(l)&&b&&(B=b.Event(l,_),b(x).trigger(B),k=!B.isPropagationStopped(),J=!B.isImmediatePropagationStopped(),oe=B.isDefaultPrevented());const ge=re(new Event(l,{bubbles:k,cancelable:!0}),_);return oe&&ge.preventDefault(),J&&x.dispatchEvent(ge),ge.defaultPrevented&&B&&B.preventDefault(),ge}};function re(x,l={}){for(const[_,b]of Object.entries(l))try{x[_]=b}catch{Object.defineProperty(x,_,{configurable:!0,get:()=>b})}return x}function ce(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function pe(x){return x.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const ye={setDataAttribute(x,l,_){x.setAttribute(`data-bs-${pe(l)}`,_)},removeDataAttribute(x,l){x.removeAttribute(`data-bs-${pe(l)}`)},getDataAttributes(x){if(!x)return{};const l={},_=Object.keys(x.dataset).filter(b=>b.startsWith("bs")&&!b.startsWith("bsConfig"));for(const b of _){let B=b.replace(/^bs/,"");B=B.charAt(0).toLowerCase()+B.slice(1,B.length),l[B]=ce(x.dataset[b])}return l},getDataAttribute:(x,l)=>ce(x.getAttribute(`data-bs-${pe(l)}`))};class ke{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,_){const b=s(_)?ye.getDataAttribute(_,"config"):{};return{...this.constructor.Default,...typeof b=="object"?b:{},...s(_)?ye.getDataAttributes(_):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,_=this.constructor.DefaultType){for(const[B,k]of Object.entries(_)){const J=l[B],oe=s(J)?"element":(b=J)==null?`${b}`:Object.prototype.toString.call(b).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(k).test(oe))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${B}" provided type "${oe}" but expected type "${k}".`)}var b}}class j extends ke{constructor(l,_){super(),(l=a(l))&&(this._element=l,this._config=this._getConfig(_),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),D.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,_,b=!0){m(l,_,b)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return e.get(a(l),this.DATA_KEY)}static getOrCreateInstance(l,_={}){return this.getInstance(l)||new this(l,typeof _=="object"?_:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const le=x=>{let l=x.getAttribute("data-bs-target");if(!l||l==="#"){let _=x.getAttribute("href");if(!_||!_.includes("#")&&!_.startsWith("."))return null;_.includes("#")&&!_.startsWith("#")&&(_=`#${_.split("#")[1]}`),l=_&&_!=="#"?n(_.trim()):null}return l},te={find:(x,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,x)),findOne:(x,l=document.documentElement)=>Element.prototype.querySelector.call(l,x),children:(x,l)=>[].concat(...x.children).filter(_=>_.matches(l)),parents(x,l){const _=[];let b=x.parentNode.closest(l);for(;b;)_.push(b),b=b.parentNode.closest(l);return _},prev(x,l){let _=x.previousElementSibling;for(;_;){if(_.matches(l))return[_];_=_.previousElementSibling}return[]},next(x,l){let _=x.nextElementSibling;for(;_;){if(_.matches(l))return[_];_=_.nextElementSibling}return[]},focusableChildren(x){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(_=>`${_}:not([tabindex^="-"])`).join(",");return this.find(l,x).filter(_=>!c(_)&&o(_))},getSelectorFromElement(x){const l=le(x);return l&&te.findOne(l)?l:null},getElementFromSelector(x){const l=le(x);return l?te.findOne(l):null},getMultipleElementsFromSelector(x){const l=le(x);return l?te.find(l):[]}},Be=(x,l="hide")=>{const _=`click.dismiss${x.EVENT_KEY}`,b=x.NAME;D.on(document,_,`[data-bs-dismiss="${b}"]`,function(B){if(["A","AREA"].includes(this.tagName)&&B.preventDefault(),c(this))return;const k=te.getElementFromSelector(this)||this.closest(`.${b}`);x.getOrCreateInstance(k)[l]()})},Ue=".bs.alert",be=`close${Ue}`,ut=`closed${Ue}`;class Oe extends j{static get NAME(){return"alert"}close(){if(D.trigger(this._element,be).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),D.trigger(this._element,ut),this.dispose()}static jQueryInterface(l){return this.each(function(){const _=Oe.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}Be(Oe,"close"),y(Oe);const G='[data-bs-toggle="button"]';class Rt extends j{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const _=Rt.getOrCreateInstance(this);l==="toggle"&&_[l]()})}}D.on(document,"click.bs.button.data-api",G,x=>{x.preventDefault();const l=x.target.closest(G);Rt.getOrCreateInstance(l).toggle()}),y(Rt);const Ce=".bs.swipe",Ke=`touchstart${Ce}`,Fe=`touchmove${Ce}`,ot=`touchend${Ce}`,Ze=`pointerdown${Ce}`,et=`pointerup${Ce}`,St={endCallback:null,leftCallback:null,rightCallback:null},L={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class S extends ke{constructor(l,_){super(),this._element=l,l&&S.isSupported()&&(this._config=this._getConfig(_),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return St}static get DefaultType(){return L}static get NAME(){return"swipe"}dispose(){D.off(this._element,Ce)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const _=l/this._deltaX;this._deltaX=0,_&&p(_>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(D.on(this._element,Ze,l=>this._start(l)),D.on(this._element,et,l=>this._end(l)),this._element.classList.add("pointer-event")):(D.on(this._element,Ke,l=>this._start(l)),D.on(this._element,Fe,l=>this._move(l)),D.on(this._element,ot,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Z=".bs.carousel",ne=".data-api",ue="next",ae="prev",ze="left",Ie="right",me=`slide${Z}`,xe=`slid${Z}`,Xe=`keydown${Z}`,de=`mouseenter${Z}`,Pt=`mouseleave${Z}`,tt=`dragstart${Z}`,De=`load${Z}${ne}`,Te=`click${Z}${ne}`,Le="carousel",P="active",ie=".active",we=".carousel-item",N=ie+we,fe={ArrowLeft:Ie,ArrowRight:ze},W={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},he={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class _e extends j{constructor(l,_){super(l,_),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=te.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Le&&this.cycle()}static get Default(){return W}static get DefaultType(){return he}static get NAME(){return"carousel"}next(){this._slide(ue)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(ae)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?D.one(this._element,xe,()=>this.cycle()):this.cycle())}to(l){const _=this._getItems();if(l>_.length-1||l<0)return;if(this._isSliding)return void D.one(this._element,xe,()=>this.to(l));const b=this._getItemIndex(this._getActive());if(b===l)return;const B=l>b?ue:ae;this._slide(B,_[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&D.on(this._element,Xe,l=>this._keydown(l)),this._config.pause==="hover"&&(D.on(this._element,de,()=>this.pause()),D.on(this._element,Pt,()=>this._maybeEnableCycle())),this._config.touch&&S.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const _ of te.find(".carousel-item img",this._element))D.on(_,tt,b=>b.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(ze)),rightCallback:()=>this._slide(this._directionToOrder(Ie)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new S(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const _=fe[l.key];_&&(l.preventDefault(),this._slide(this._directionToOrder(_)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const _=te.findOne(ie,this._indicatorsElement);_.classList.remove(P),_.removeAttribute("aria-current");const b=te.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);b&&(b.classList.add(P),b.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const _=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=_||this._config.defaultInterval}_slide(l,_=null){if(this._isSliding)return;const b=this._getActive(),B=l===ue,k=_||R(this._getItems(),b,B,this._config.wrap);if(k===b)return;const J=this._getItemIndex(k),oe=Me=>D.trigger(this._element,Me,{relatedTarget:k,direction:this._orderToDirection(l),from:this._getItemIndex(b),to:J});if(oe(me).defaultPrevented||!b||!k)return;const ge=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(J),this._activeElement=k;const Ee=B?"carousel-item-start":"carousel-item-end",Ae=B?"carousel-item-next":"carousel-item-prev";k.classList.add(Ae),f(k),b.classList.add(Ee),k.classList.add(Ee),this._queueCallback(()=>{k.classList.remove(Ee,Ae),k.classList.add(P),b.classList.remove(P,Ae,Ee),this._isSliding=!1,oe(xe)},b,this._isAnimated()),ge&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return te.findOne(N,this._element)}_getItems(){return te.find(we,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return v()?l===ze?ae:ue:l===ze?ue:ae}_orderToDirection(l){return v()?l===ae?ze:Ie:l===ae?Ie:ze}static jQueryInterface(l){return this.each(function(){const _=_e.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}}else _.to(l)})}}D.on(document,Te,"[data-bs-slide], [data-bs-slide-to]",function(x){const l=te.getElementFromSelector(this);if(!l||!l.classList.contains(Le))return;x.preventDefault();const _=_e.getOrCreateInstance(l),b=this.getAttribute("data-bs-slide-to");return b?(_.to(b),void _._maybeEnableCycle()):ye.getDataAttribute(this,"slide")==="next"?(_.next(),void _._maybeEnableCycle()):(_.prev(),void _._maybeEnableCycle())}),D.on(window,De,()=>{const x=te.find('[data-bs-ride="carousel"]');for(const l of x)_e.getOrCreateInstance(l)}),y(_e);const qe=".bs.collapse",ft=`show${qe}`,pt=`shown${qe}`,Ut=`hide${qe}`,ht=`hidden${qe}`,Et=`click${qe}.data-api`,zt="show",pn="collapse",ti="collapsing",ar=`:scope .${pn} .${pn}`,cr='[data-bs-toggle="collapse"]',lr={parent:null,toggle:!0},Cs={parent:"(null|element)",toggle:"boolean"};class ni extends j{constructor(l,_){super(l,_),this._isTransitioning=!1,this._triggerArray=[];const b=te.find(cr);for(const B of b){const k=te.getSelectorFromElement(B),J=te.find(k).filter(oe=>oe===this._element);k!==null&&J.length&&this._triggerArray.push(B)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return lr}static get DefaultType(){return Cs}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(B=>B!==this._element).map(B=>ni.getOrCreateInstance(B,{toggle:!1}))),l.length&&l[0]._isTransitioning||D.trigger(this._element,ft).defaultPrevented)return;for(const B of l)B.hide();const _=this._getDimension();this._element.classList.remove(pn),this._element.classList.add(ti),this._element.style[_]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const b=`scroll${_[0].toUpperCase()+_.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ti),this._element.classList.add(pn,zt),this._element.style[_]="",D.trigger(this._element,pt)},this._element,!0),this._element.style[_]=`${this._element[b]}px`}hide(){if(this._isTransitioning||!this._isShown()||D.trigger(this._element,Ut).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,f(this._element),this._element.classList.add(ti),this._element.classList.remove(pn,zt);for(const _ of this._triggerArray){const b=te.getElementFromSelector(_);b&&!this._isShown(b)&&this._addAriaAndCollapsedClass([_],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ti),this._element.classList.add(pn),D.trigger(this._element,ht)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(zt)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=a(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(cr);for(const _ of l){const b=te.getElementFromSelector(_);b&&this._addAriaAndCollapsedClass([_],this._isShown(b))}}_getFirstLevelChildren(l){const _=te.find(ar,this._config.parent);return te.find(l,this._config.parent).filter(b=>!_.includes(b))}_addAriaAndCollapsedClass(l,_){if(l.length)for(const b of l)b.classList.toggle("collapsed",!_),b.setAttribute("aria-expanded",_)}static jQueryInterface(l){const _={};return typeof l=="string"&&/show|hide/.test(l)&&(_.toggle=!1),this.each(function(){const b=ni.getOrCreateInstance(this,_);if(typeof l=="string"){if(b[l]===void 0)throw new TypeError(`No method named "${l}"`);b[l]()}})}}D.on(document,Et,cr,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const l of te.getMultipleElementsFromSelector(this))ni.getOrCreateInstance(l,{toggle:!1}).toggle()}),y(ni);var Zt="top",sn="bottom",on="right",T="left",H="auto",q=[Zt,sn,on,T],$="start",V="end",Se="clippingParents",Pe="viewport",Ne="popper",Ge="reference",Je=q.reduce(function(x,l){return x.concat([l+"-"+$,l+"-"+V])},[]),Ve=[].concat(q,[H]).reduce(function(x,l){return x.concat([l,l+"-"+$,l+"-"+V])},[]),Ye="beforeRead",Dt="read",Jt="afterRead",Ft="beforeMain",bn="main",At="afterMain",Qe="beforeWrite",ur="write",bt="afterWrite",Wn=[Ye,Dt,Jt,Ft,bn,At,Qe,ur,bt];function vn(x){return x?(x.nodeName||"").toLowerCase():null}function Gt(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var l=x.ownerDocument;return l&&l.defaultView||window}return x}function Pn(x){return x instanceof Gt(x).Element||x instanceof Element}function mt(x){return x instanceof Gt(x).HTMLElement||x instanceof HTMLElement}function Un(x){return typeof ShadowRoot<"u"&&(x instanceof Gt(x).ShadowRoot||x instanceof ShadowRoot)}const Oi={name:"applyStyles",enabled:!0,phase:"write",fn:function(x){var l=x.state;Object.keys(l.elements).forEach(function(_){var b=l.styles[_]||{},B=l.attributes[_]||{},k=l.elements[_];mt(k)&&vn(k)&&(Object.assign(k.style,b),Object.keys(B).forEach(function(J){var oe=B[J];oe===!1?k.removeAttribute(J):k.setAttribute(J,oe===!0?"":oe)}))})},effect:function(x){var l=x.state,_={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,_.popper),l.styles=_,l.elements.arrow&&Object.assign(l.elements.arrow.style,_.arrow),function(){Object.keys(l.elements).forEach(function(b){var B=l.elements[b],k=l.attributes[b]||{},J=Object.keys(l.styles.hasOwnProperty(b)?l.styles[b]:_[b]).reduce(function(oe,ge){return oe[ge]="",oe},{});mt(B)&&vn(B)&&(Object.assign(B.style,J),Object.keys(k).forEach(function(oe){B.removeAttribute(oe)}))})}},requires:["computeStyles"]};function It(x){return x.split("-")[0]}var Dn=Math.max,hr=Math.min,ii=Math.round;function ko(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function Cc(){return!/^((?!chrome|android).)*safari/i.test(ko())}function fr(x,l,_){l===void 0&&(l=!1),_===void 0&&(_=!1);var b=x.getBoundingClientRect(),B=1,k=1;l&&mt(x)&&(B=x.offsetWidth>0&&ii(b.width)/x.offsetWidth||1,k=x.offsetHeight>0&&ii(b.height)/x.offsetHeight||1);var J=(Pn(x)?Gt(x):window).visualViewport,oe=!Cc()&&_,ge=(b.left+(oe&&J?J.offsetLeft:0))/B,Ee=(b.top+(oe&&J?J.offsetTop:0))/k,Ae=b.width/B,Me=b.height/k;return{width:Ae,height:Me,top:Ee,right:ge+Ae,bottom:Ee+Me,left:ge,x:ge,y:Ee}}function Ho(x){var l=fr(x),_=x.offsetWidth,b=x.offsetHeight;return Math.abs(l.width-_)<=1&&(_=l.width),Math.abs(l.height-b)<=1&&(b=l.height),{x:x.offsetLeft,y:x.offsetTop,width:_,height:b}}function Lc(x,l){var _=l.getRootNode&&l.getRootNode();if(x.contains(l))return!0;if(_&&Un(_)){var b=l;do{if(b&&x.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function ri(x){return Gt(x).getComputedStyle(x)}function Uf(x){return["table","td","th"].indexOf(vn(x))>=0}function _i(x){return((Pn(x)?x.ownerDocument:x.document)||window.document).documentElement}function Ls(x){return vn(x)==="html"?x:x.assignedSlot||x.parentNode||(Un(x)?x.host:null)||_i(x)}function Pc(x){return mt(x)&&ri(x).position!=="fixed"?x.offsetParent:null}function Zr(x){for(var l=Gt(x),_=Pc(x);_&&Uf(_)&&ri(_).position==="static";)_=Pc(_);return _&&(vn(_)==="html"||vn(_)==="body"&&ri(_).position==="static")?l:_||function(b){var B=/firefox/i.test(ko());if(/Trident/i.test(ko())&&mt(b)&&ri(b).position==="fixed")return null;var k=Ls(b);for(Un(k)&&(k=k.host);mt(k)&&["html","body"].indexOf(vn(k))<0;){var J=ri(k);if(J.transform!=="none"||J.perspective!=="none"||J.contain==="paint"||["transform","perspective"].indexOf(J.willChange)!==-1||B&&J.willChange==="filter"||B&&J.filter&&J.filter!=="none")return k;k=k.parentNode}return null}(x)||l}function Go(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function Jr(x,l,_){return Dn(x,hr(l,_))}function Uc(x){return Object.assign({},{top:0,right:0,bottom:0,left:0},x)}function Dc(x,l){return l.reduce(function(_,b){return _[b]=x,_},{})}const Ic={name:"arrow",enabled:!0,phase:"main",fn:function(x){var l,_=x.state,b=x.name,B=x.options,k=_.elements.arrow,J=_.modifiersData.popperOffsets,oe=It(_.placement),ge=Go(oe),Ee=[T,on].indexOf(oe)>=0?"height":"width";if(k&&J){var Ae=function(yt,_t){return Uc(typeof(yt=typeof yt=="function"?yt(Object.assign({},_t.rects,{placement:_t.placement})):yt)!="number"?yt:Dc(yt,q))}(B.padding,_),Me=Ho(k),nt=ge==="y"?Zt:T,He=ge==="y"?sn:on,$e=_.rects.reference[Ee]+_.rects.reference[ge]-J[ge]-_.rects.popper[Ee],We=J[ge]-_.rects.reference[ge],je=Zr(k),xt=je?ge==="y"?je.clientHeight||0:je.clientWidth||0:0,wt=$e/2-We/2,at=Ae[nt],dt=xt-Me[Ee]-Ae[He],it=xt/2-Me[Ee]/2+wt,lt=Jr(at,it,dt),gt=ge;_.modifiersData[b]=((l={})[gt]=lt,l.centerOffset=lt-it,l)}},effect:function(x){var l=x.state,_=x.options.element,b=_===void 0?"[data-popper-arrow]":_;b!=null&&(typeof b!="string"||(b=l.elements.popper.querySelector(b)))&&Lc(l.elements.popper,b)&&(l.elements.arrow=b)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function dr(x){return x.split("-")[1]}var Df={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Nc(x){var l,_=x.popper,b=x.popperRect,B=x.placement,k=x.variation,J=x.offsets,oe=x.position,ge=x.gpuAcceleration,Ee=x.adaptive,Ae=x.roundOffsets,Me=x.isFixed,nt=J.x,He=nt===void 0?0:nt,$e=J.y,We=$e===void 0?0:$e,je=typeof Ae=="function"?Ae({x:He,y:We}):{x:He,y:We};He=je.x,We=je.y;var xt=J.hasOwnProperty("x"),wt=J.hasOwnProperty("y"),at=T,dt=Zt,it=window;if(Ee){var lt=Zr(_),gt="clientHeight",yt="clientWidth";lt===Gt(_)&&ri(lt=_i(_)).position!=="static"&&oe==="absolute"&&(gt="scrollHeight",yt="scrollWidth"),(B===Zt||(B===T||B===on)&&k===V)&&(dt=sn,We-=(Me&&lt===it&&it.visualViewport?it.visualViewport.height:lt[gt])-b.height,We*=ge?1:-1),B!==T&&(B!==Zt&&B!==sn||k!==V)||(at=on,He-=(Me&&lt===it&&it.visualViewport?it.visualViewport.width:lt[yt])-b.width,He*=ge?1:-1)}var _t,Bt=Object.assign({position:oe},Ee&&Df),xn=Ae===!0?function(Nn,an){var An=Nn.x,wn=Nn.y,Nt=an.devicePixelRatio||1;return{x:ii(An*Nt)/Nt||0,y:ii(wn*Nt)/Nt||0}}({x:He,y:We},Gt(_)):{x:He,y:We};return He=xn.x,We=xn.y,ge?Object.assign({},Bt,((_t={})[dt]=wt?"0":"",_t[at]=xt?"0":"",_t.transform=(it.devicePixelRatio||1)<=1?"translate("+He+"px, "+We+"px)":"translate3d("+He+"px, "+We+"px, 0)",_t)):Object.assign({},Bt,((l={})[dt]=wt?We+"px":"",l[at]=xt?He+"px":"",l.transform="",l))}const Vo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(x){var l=x.state,_=x.options,b=_.gpuAcceleration,B=b===void 0||b,k=_.adaptive,J=k===void 0||k,oe=_.roundOffsets,ge=oe===void 0||oe,Ee={placement:It(l.placement),variation:dr(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:B,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,Nc(Object.assign({},Ee,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:J,roundOffsets:ge})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,Nc(Object.assign({},Ee,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ge})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var Ps={passive:!0};const Wo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(x){var l=x.state,_=x.instance,b=x.options,B=b.scroll,k=B===void 0||B,J=b.resize,oe=J===void 0||J,ge=Gt(l.elements.popper),Ee=[].concat(l.scrollParents.reference,l.scrollParents.popper);return k&&Ee.forEach(function(Ae){Ae.addEventListener("scroll",_.update,Ps)}),oe&&ge.addEventListener("resize",_.update,Ps),function(){k&&Ee.forEach(function(Ae){Ae.removeEventListener("scroll",_.update,Ps)}),oe&&ge.removeEventListener("resize",_.update,Ps)}},data:{}};var If={left:"right",right:"left",bottom:"top",top:"bottom"};function Us(x){return x.replace(/left|right|bottom|top/g,function(l){return If[l]})}var Nf={start:"end",end:"start"};function Oc(x){return x.replace(/start|end/g,function(l){return Nf[l]})}function Xo(x){var l=Gt(x);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function qo(x){return fr(_i(x)).left+Xo(x).scrollLeft}function Yo(x){var l=ri(x),_=l.overflow,b=l.overflowX,B=l.overflowY;return/auto|scroll|overlay|hidden/.test(_+B+b)}function Fc(x){return["html","body","#document"].indexOf(vn(x))>=0?x.ownerDocument.body:mt(x)&&Yo(x)?x:Fc(Ls(x))}function Qr(x,l){var _;l===void 0&&(l=[]);var b=Fc(x),B=b===((_=x.ownerDocument)==null?void 0:_.body),k=Gt(b),J=B?[k].concat(k.visualViewport||[],Yo(b)?b:[]):b,oe=l.concat(J);return B?oe:oe.concat(Qr(Ls(J)))}function $o(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function Bc(x,l,_){return l===Pe?$o(function(b,B){var k=Gt(b),J=_i(b),oe=k.visualViewport,ge=J.clientWidth,Ee=J.clientHeight,Ae=0,Me=0;if(oe){ge=oe.width,Ee=oe.height;var nt=Cc();(nt||!nt&&B==="fixed")&&(Ae=oe.offsetLeft,Me=oe.offsetTop)}return{width:ge,height:Ee,x:Ae+qo(b),y:Me}}(x,_)):Pn(l)?function(b,B){var k=fr(b,!1,B==="fixed");return k.top=k.top+b.clientTop,k.left=k.left+b.clientLeft,k.bottom=k.top+b.clientHeight,k.right=k.left+b.clientWidth,k.width=b.clientWidth,k.height=b.clientHeight,k.x=k.left,k.y=k.top,k}(l,_):$o(function(b){var B,k=_i(b),J=Xo(b),oe=(B=b.ownerDocument)==null?void 0:B.body,ge=Dn(k.scrollWidth,k.clientWidth,oe?oe.scrollWidth:0,oe?oe.clientWidth:0),Ee=Dn(k.scrollHeight,k.clientHeight,oe?oe.scrollHeight:0,oe?oe.clientHeight:0),Ae=-J.scrollLeft+qo(b),Me=-J.scrollTop;return ri(oe||k).direction==="rtl"&&(Ae+=Dn(k.clientWidth,oe?oe.clientWidth:0)-ge),{width:ge,height:Ee,x:Ae,y:Me}}(_i(x)))}function zc(x){var l,_=x.reference,b=x.element,B=x.placement,k=B?It(B):null,J=B?dr(B):null,oe=_.x+_.width/2-b.width/2,ge=_.y+_.height/2-b.height/2;switch(k){case Zt:l={x:oe,y:_.y-b.height};break;case sn:l={x:oe,y:_.y+_.height};break;case on:l={x:_.x+_.width,y:ge};break;case T:l={x:_.x-b.width,y:ge};break;default:l={x:_.x,y:_.y}}var Ee=k?Go(k):null;if(Ee!=null){var Ae=Ee==="y"?"height":"width";switch(J){case $:l[Ee]=l[Ee]-(_[Ae]/2-b[Ae]/2);break;case V:l[Ee]=l[Ee]+(_[Ae]/2-b[Ae]/2)}}return l}function pr(x,l){l===void 0&&(l={});var _=l,b=_.placement,B=b===void 0?x.placement:b,k=_.strategy,J=k===void 0?x.strategy:k,oe=_.boundary,ge=oe===void 0?Se:oe,Ee=_.rootBoundary,Ae=Ee===void 0?Pe:Ee,Me=_.elementContext,nt=Me===void 0?Ne:Me,He=_.altBoundary,$e=He!==void 0&&He,We=_.padding,je=We===void 0?0:We,xt=Uc(typeof je!="number"?je:Dc(je,q)),wt=nt===Ne?Ge:Ne,at=x.rects.popper,dt=x.elements[$e?wt:nt],it=function(an,An,wn,Nt){var Xn=An==="clippingParents"?function(Tt){var cn=Qr(Ls(Tt)),Rn=["absolute","fixed"].indexOf(ri(Tt).position)>=0&&mt(Tt)?Zr(Tt):Tt;return Pn(Rn)?cn.filter(function(xi){return Pn(xi)&&Lc(xi,Rn)&&vn(xi)!=="body"}):[]}(an):[].concat(An),qn=[].concat(Xn,[wn]),_r=qn[0],Yt=qn.reduce(function(Tt,cn){var Rn=Bc(an,cn,Nt);return Tt.top=Dn(Rn.top,Tt.top),Tt.right=hr(Rn.right,Tt.right),Tt.bottom=hr(Rn.bottom,Tt.bottom),Tt.left=Dn(Rn.left,Tt.left),Tt},Bc(an,_r,Nt));return Yt.width=Yt.right-Yt.left,Yt.height=Yt.bottom-Yt.top,Yt.x=Yt.left,Yt.y=Yt.top,Yt}(Pn(dt)?dt:dt.contextElement||_i(x.elements.popper),ge,Ae,J),lt=fr(x.elements.reference),gt=zc({reference:lt,element:at,strategy:"absolute",placement:B}),yt=$o(Object.assign({},at,gt)),_t=nt===Ne?yt:lt,Bt={top:it.top-_t.top+xt.top,bottom:_t.bottom-it.bottom+xt.bottom,left:it.left-_t.left+xt.left,right:_t.right-it.right+xt.right},xn=x.modifiersData.offset;if(nt===Ne&&xn){var Nn=xn[B];Object.keys(Bt).forEach(function(an){var An=[on,sn].indexOf(an)>=0?1:-1,wn=[Zt,sn].indexOf(an)>=0?"y":"x";Bt[an]+=Nn[wn]*An})}return Bt}function Of(x,l){l===void 0&&(l={});var _=l,b=_.placement,B=_.boundary,k=_.rootBoundary,J=_.padding,oe=_.flipVariations,ge=_.allowedAutoPlacements,Ee=ge===void 0?Ve:ge,Ae=dr(b),Me=Ae?oe?Je:Je.filter(function($e){return dr($e)===Ae}):q,nt=Me.filter(function($e){return Ee.indexOf($e)>=0});nt.length===0&&(nt=Me);var He=nt.reduce(function($e,We){return $e[We]=pr(x,{placement:We,boundary:B,rootBoundary:k,padding:J})[It(We)],$e},{});return Object.keys(He).sort(function($e,We){return He[$e]-He[We]})}const kc={name:"flip",enabled:!0,phase:"main",fn:function(x){var l=x.state,_=x.options,b=x.name;if(!l.modifiersData[b]._skip){for(var B=_.mainAxis,k=B===void 0||B,J=_.altAxis,oe=J===void 0||J,ge=_.fallbackPlacements,Ee=_.padding,Ae=_.boundary,Me=_.rootBoundary,nt=_.altBoundary,He=_.flipVariations,$e=He===void 0||He,We=_.allowedAutoPlacements,je=l.options.placement,xt=It(je),wt=ge||(xt!==je&&$e?function(Tt){if(It(Tt)===H)return[];var cn=Us(Tt);return[Oc(Tt),cn,Oc(cn)]}(je):[Us(je)]),at=[je].concat(wt).reduce(function(Tt,cn){return Tt.concat(It(cn)===H?Of(l,{placement:cn,boundary:Ae,rootBoundary:Me,padding:Ee,flipVariations:$e,allowedAutoPlacements:We}):cn)},[]),dt=l.rects.reference,it=l.rects.popper,lt=new Map,gt=!0,yt=at[0],_t=0;_t<at.length;_t++){var Bt=at[_t],xn=It(Bt),Nn=dr(Bt)===$,an=[Zt,sn].indexOf(xn)>=0,An=an?"width":"height",wn=pr(l,{placement:Bt,boundary:Ae,rootBoundary:Me,altBoundary:nt,padding:Ee}),Nt=an?Nn?on:T:Nn?sn:Zt;dt[An]>it[An]&&(Nt=Us(Nt));var Xn=Us(Nt),qn=[];if(k&&qn.push(wn[xn]<=0),oe&&qn.push(wn[Nt]<=0,wn[Xn]<=0),qn.every(function(Tt){return Tt})){yt=Bt,gt=!1;break}lt.set(Bt,qn)}if(gt)for(var _r=function(Tt){var cn=at.find(function(Rn){var xi=lt.get(Rn);if(xi)return xi.slice(0,Tt).every(function(Hs){return Hs})});if(cn)return yt=cn,"break"},Yt=$e?3:1;Yt>0&&_r(Yt)!=="break";Yt--);l.placement!==yt&&(l.modifiersData[b]._skip=!0,l.placement=yt,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Hc(x,l,_){return _===void 0&&(_={x:0,y:0}),{top:x.top-l.height-_.y,right:x.right-l.width+_.x,bottom:x.bottom-l.height+_.y,left:x.left-l.width-_.x}}function Gc(x){return[Zt,on,sn,T].some(function(l){return x[l]>=0})}const Vc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(x){var l=x.state,_=x.name,b=l.rects.reference,B=l.rects.popper,k=l.modifiersData.preventOverflow,J=pr(l,{elementContext:"reference"}),oe=pr(l,{altBoundary:!0}),ge=Hc(J,b),Ee=Hc(oe,B,k),Ae=Gc(ge),Me=Gc(Ee);l.modifiersData[_]={referenceClippingOffsets:ge,popperEscapeOffsets:Ee,isReferenceHidden:Ae,hasPopperEscaped:Me},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":Ae,"data-popper-escaped":Me})}},Wc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(x){var l=x.state,_=x.options,b=x.name,B=_.offset,k=B===void 0?[0,0]:B,J=Ve.reduce(function(Ae,Me){return Ae[Me]=function(nt,He,$e){var We=It(nt),je=[T,Zt].indexOf(We)>=0?-1:1,xt=typeof $e=="function"?$e(Object.assign({},He,{placement:nt})):$e,wt=xt[0],at=xt[1];return wt=wt||0,at=(at||0)*je,[T,on].indexOf(We)>=0?{x:at,y:wt}:{x:wt,y:at}}(Me,l.rects,k),Ae},{}),oe=J[l.placement],ge=oe.x,Ee=oe.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=ge,l.modifiersData.popperOffsets.y+=Ee),l.modifiersData[b]=J}},jo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(x){var l=x.state,_=x.name;l.modifiersData[_]=zc({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})},data:{}},Xc={name:"preventOverflow",enabled:!0,phase:"main",fn:function(x){var l=x.state,_=x.options,b=x.name,B=_.mainAxis,k=B===void 0||B,J=_.altAxis,oe=J!==void 0&&J,ge=_.boundary,Ee=_.rootBoundary,Ae=_.altBoundary,Me=_.padding,nt=_.tether,He=nt===void 0||nt,$e=_.tetherOffset,We=$e===void 0?0:$e,je=pr(l,{boundary:ge,rootBoundary:Ee,padding:Me,altBoundary:Ae}),xt=It(l.placement),wt=dr(l.placement),at=!wt,dt=Go(xt),it=dt==="x"?"y":"x",lt=l.modifiersData.popperOffsets,gt=l.rects.reference,yt=l.rects.popper,_t=typeof We=="function"?We(Object.assign({},l.rects,{placement:l.placement})):We,Bt=typeof _t=="number"?{mainAxis:_t,altAxis:_t}:Object.assign({mainAxis:0,altAxis:0},_t),xn=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,Nn={x:0,y:0};if(lt){if(k){var an,An=dt==="y"?Zt:T,wn=dt==="y"?sn:on,Nt=dt==="y"?"height":"width",Xn=lt[dt],qn=Xn+je[An],_r=Xn-je[wn],Yt=He?-yt[Nt]/2:0,Tt=wt===$?gt[Nt]:yt[Nt],cn=wt===$?-yt[Nt]:-gt[Nt],Rn=l.elements.arrow,xi=He&&Rn?Ho(Rn):{width:0,height:0},Hs=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Pl=Hs[An],Ul=Hs[wn],Gs=Jr(0,gt[Nt],xi[Nt]),hp=at?gt[Nt]/2-Yt-Gs-Pl-Bt.mainAxis:Tt-Gs-Pl-Bt.mainAxis,fp=at?-gt[Nt]/2+Yt+Gs+Ul+Bt.mainAxis:cn+Gs+Ul+Bt.mainAxis,ca=l.elements.arrow&&Zr(l.elements.arrow),dp=ca?dt==="y"?ca.clientTop||0:ca.clientLeft||0:0,Dl=(an=xn==null?void 0:xn[dt])!=null?an:0,pp=Xn+fp-Dl,Il=Jr(He?hr(qn,Xn+hp-Dl-dp):qn,Xn,He?Dn(_r,pp):_r);lt[dt]=Il,Nn[dt]=Il-Xn}if(oe){var Nl,mp=dt==="x"?Zt:T,gp=dt==="x"?sn:on,Wi=lt[it],Vs=it==="y"?"height":"width",Ol=Wi+je[mp],Fl=Wi-je[gp],la=[Zt,T].indexOf(xt)!==-1,Bl=(Nl=xn==null?void 0:xn[it])!=null?Nl:0,zl=la?Ol:Wi-gt[Vs]-yt[Vs]-Bl+Bt.altAxis,kl=la?Wi+gt[Vs]+yt[Vs]-Bl-Bt.altAxis:Fl,Hl=He&&la?function(_p,vp,ua){var Gl=Jr(_p,vp,ua);return Gl>ua?ua:Gl}(zl,Wi,kl):Jr(He?zl:Ol,Wi,He?kl:Fl);lt[it]=Hl,Nn[it]=Hl-Wi}l.modifiersData[b]=Nn}},requiresIfExists:["offset"]};function Ff(x,l,_){_===void 0&&(_=!1);var b,B,k=mt(l),J=mt(l)&&function(Me){var nt=Me.getBoundingClientRect(),He=ii(nt.width)/Me.offsetWidth||1,$e=ii(nt.height)/Me.offsetHeight||1;return He!==1||$e!==1}(l),oe=_i(l),ge=fr(x,J,_),Ee={scrollLeft:0,scrollTop:0},Ae={x:0,y:0};return(k||!k&&!_)&&((vn(l)!=="body"||Yo(oe))&&(Ee=(b=l)!==Gt(b)&&mt(b)?{scrollLeft:(B=b).scrollLeft,scrollTop:B.scrollTop}:Xo(b)),mt(l)?((Ae=fr(l,!0)).x+=l.clientLeft,Ae.y+=l.clientTop):oe&&(Ae.x=qo(oe))),{x:ge.left+Ee.scrollLeft-Ae.x,y:ge.top+Ee.scrollTop-Ae.y,width:ge.width,height:ge.height}}function Bf(x){var l=new Map,_=new Set,b=[];function B(k){_.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(J){if(!_.has(J)){var oe=l.get(J);oe&&B(oe)}}),b.push(k)}return x.forEach(function(k){l.set(k.name,k)}),x.forEach(function(k){_.has(k.name)||B(k)}),b}var qc={placement:"bottom",modifiers:[],strategy:"absolute"};function Yc(){for(var x=arguments.length,l=new Array(x),_=0;_<x;_++)l[_]=arguments[_];return!l.some(function(b){return!(b&&typeof b.getBoundingClientRect=="function")})}function Ds(x){x===void 0&&(x={});var l=x,_=l.defaultModifiers,b=_===void 0?[]:_,B=l.defaultOptions,k=B===void 0?qc:B;return function(J,oe,ge){ge===void 0&&(ge=k);var Ee,Ae,Me={placement:"bottom",orderedModifiers:[],options:Object.assign({},qc,k),modifiersData:{},elements:{reference:J,popper:oe},attributes:{},styles:{}},nt=[],He=!1,$e={state:Me,setOptions:function(je){var xt=typeof je=="function"?je(Me.options):je;We(),Me.options=Object.assign({},k,Me.options,xt),Me.scrollParents={reference:Pn(J)?Qr(J):J.contextElement?Qr(J.contextElement):[],popper:Qr(oe)};var wt,at,dt=function(it){var lt=Bf(it);return Wn.reduce(function(gt,yt){return gt.concat(lt.filter(function(_t){return _t.phase===yt}))},[])}((wt=[].concat(b,Me.options.modifiers),at=wt.reduce(function(it,lt){var gt=it[lt.name];return it[lt.name]=gt?Object.assign({},gt,lt,{options:Object.assign({},gt.options,lt.options),data:Object.assign({},gt.data,lt.data)}):lt,it},{}),Object.keys(at).map(function(it){return at[it]})));return Me.orderedModifiers=dt.filter(function(it){return it.enabled}),Me.orderedModifiers.forEach(function(it){var lt=it.name,gt=it.options,yt=gt===void 0?{}:gt,_t=it.effect;if(typeof _t=="function"){var Bt=_t({state:Me,name:lt,instance:$e,options:yt});nt.push(Bt||function(){})}}),$e.update()},forceUpdate:function(){if(!He){var je=Me.elements,xt=je.reference,wt=je.popper;if(Yc(xt,wt)){Me.rects={reference:Ff(xt,Zr(wt),Me.options.strategy==="fixed"),popper:Ho(wt)},Me.reset=!1,Me.placement=Me.options.placement,Me.orderedModifiers.forEach(function(_t){return Me.modifiersData[_t.name]=Object.assign({},_t.data)});for(var at=0;at<Me.orderedModifiers.length;at++)if(Me.reset!==!0){var dt=Me.orderedModifiers[at],it=dt.fn,lt=dt.options,gt=lt===void 0?{}:lt,yt=dt.name;typeof it=="function"&&(Me=it({state:Me,options:gt,name:yt,instance:$e})||Me)}else Me.reset=!1,at=-1}}},update:(Ee=function(){return new Promise(function(je){$e.forceUpdate(),je(Me)})},function(){return Ae||(Ae=new Promise(function(je){Promise.resolve().then(function(){Ae=void 0,je(Ee())})})),Ae}),destroy:function(){We(),He=!0}};if(!Yc(J,oe))return $e;function We(){nt.forEach(function(je){return je()}),nt=[]}return $e.setOptions(ge).then(function(je){!He&&ge.onFirstUpdate&&ge.onFirstUpdate(je)}),$e}}var zf=Ds(),kf=Ds({defaultModifiers:[Wo,jo,Vo,Oi]}),Ko=Ds({defaultModifiers:[Wo,jo,Vo,Oi,Wc,kc,Xc,Ic,Vc]});const $c=Object.freeze(Object.defineProperty({__proto__:null,afterMain:At,afterRead:Jt,afterWrite:bt,applyStyles:Oi,arrow:Ic,auto:H,basePlacements:q,beforeMain:Ft,beforeRead:Ye,beforeWrite:Qe,bottom:sn,clippingParents:Se,computeStyles:Vo,createPopper:Ko,createPopperBase:zf,createPopperLite:kf,detectOverflow:pr,end:V,eventListeners:Wo,flip:kc,hide:Vc,left:T,main:bn,modifierPhases:Wn,offset:Wc,placements:Ve,popper:Ne,popperGenerator:Ds,popperOffsets:jo,preventOverflow:Xc,read:Dt,reference:Ge,right:on,start:$,top:Zt,variationPlacements:Je,viewport:Pe,write:ur},Symbol.toStringTag,{value:"Module"})),jc="dropdown",Fi=".bs.dropdown",Zo=".data-api",Hf="ArrowUp",Kc="ArrowDown",Gf=`hide${Fi}`,Vf=`hidden${Fi}`,Wf=`show${Fi}`,Xf=`shown${Fi}`,Zc=`click${Fi}${Zo}`,Jc=`keydown${Fi}${Zo}`,qf=`keyup${Fi}${Zo}`,mr="show",Bi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Yf=`${Bi}.${mr}`,Is=".dropdown-menu",$f=v()?"top-end":"top-start",jf=v()?"top-start":"top-end",Kf=v()?"bottom-end":"bottom-start",Zf=v()?"bottom-start":"bottom-end",Jf=v()?"left-start":"right-start",Qf=v()?"right-start":"left-start",ed={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},td={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class In extends j{constructor(l,_){super(l,_),this._popper=null,this._parent=this._element.parentNode,this._menu=te.next(this._element,Is)[0]||te.prev(this._element,Is)[0]||te.findOne(Is,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ed}static get DefaultType(){return td}static get NAME(){return jc}toggle(){return this._isShown()?this.hide():this.show()}show(){if(c(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!D.trigger(this._element,Wf,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const _ of[].concat(...document.body.children))D.on(_,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(mr),this._element.classList.add(mr),D.trigger(this._element,Xf,l)}}hide(){if(c(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!D.trigger(this._element,Gf,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const _ of[].concat(...document.body.children))D.off(_,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(mr),this._element.classList.remove(mr),this._element.setAttribute("aria-expanded","false"),ye.removeDataAttribute(this._menu,"popper"),D.trigger(this._element,Vf,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!s(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${jc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if($c===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let l=this._element;this._config.reference==="parent"?l=this._parent:s(this._config.reference)?l=a(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const _=this._getPopperConfig();this._popper=Ko(l,this._menu,_)}_isShown(){return this._menu.classList.contains(mr)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return Jf;if(l.classList.contains("dropstart"))return Qf;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const _=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?_?jf:$f:_?Zf:Kf}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ye.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...p(this._config.popperConfig,[l])}}_selectMenuItem({key:l,target:_}){const b=te.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(B=>o(B));b.length&&R(b,_,l===Kc,!b.includes(_)).focus()}static jQueryInterface(l){return this.each(function(){const _=In.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const _=te.find(Yf);for(const b of _){const B=In.getInstance(b);if(!B||B._config.autoClose===!1)continue;const k=l.composedPath(),J=k.includes(B._menu);if(k.includes(B._element)||B._config.autoClose==="inside"&&!J||B._config.autoClose==="outside"&&J||B._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const oe={relatedTarget:B._element};l.type==="click"&&(oe.clickEvent=l),B._completeHide(oe)}}static dataApiKeydownHandler(l){const _=/input|textarea/i.test(l.target.tagName),b=l.key==="Escape",B=[Hf,Kc].includes(l.key);if(!B&&!b||_&&!b)return;l.preventDefault();const k=this.matches(Bi)?this:te.prev(this,Bi)[0]||te.next(this,Bi)[0]||te.findOne(Bi,l.delegateTarget.parentNode),J=In.getOrCreateInstance(k);if(B)return l.stopPropagation(),J.show(),void J._selectMenuItem(l);J._isShown()&&(l.stopPropagation(),J.hide(),k.focus())}}D.on(document,Jc,Bi,In.dataApiKeydownHandler),D.on(document,Jc,Is,In.dataApiKeydownHandler),D.on(document,Zc,In.clearMenus),D.on(document,qf,In.clearMenus),D.on(document,Zc,Bi,function(x){x.preventDefault(),In.getOrCreateInstance(this).toggle()}),y(In);const Qc="backdrop",el="show",tl=`mousedown.bs.${Qc}`,nd={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},id={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class nl extends ke{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return nd}static get DefaultType(){return id}static get NAME(){return Qc}show(l){if(!this._config.isVisible)return void p(l);this._append();const _=this._getElement();this._config.isAnimated&&f(_),_.classList.add(el),this._emulateAnimation(()=>{p(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(el),this._emulateAnimation(()=>{this.dispose(),p(l)})):p(l)}dispose(){this._isAppended&&(D.off(this._element,tl),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=a(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),D.on(l,tl,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){m(l,this._getElement(),this._config.isAnimated)}}const Ns=".bs.focustrap",rd=`focusin${Ns}`,sd=`keydown.tab${Ns}`,il="backward",od={autofocus:!0,trapElement:null},ad={autofocus:"boolean",trapElement:"element"};class rl extends ke{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return od}static get DefaultType(){return ad}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),D.off(document,Ns),D.on(document,rd,l=>this._handleFocusin(l)),D.on(document,sd,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,D.off(document,Ns))}_handleFocusin(l){const{trapElement:_}=this._config;if(l.target===document||l.target===_||_.contains(l.target))return;const b=te.focusableChildren(_);b.length===0?_.focus():this._lastTabNavDirection===il?b[b.length-1].focus():b[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?il:"forward")}}const sl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ol=".sticky-top",Os="padding-right",al="margin-right";class Jo{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Os,_=>_+l),this._setElementAttributes(sl,Os,_=>_+l),this._setElementAttributes(ol,al,_=>_-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Os),this._resetElementAttributes(sl,Os),this._resetElementAttributes(ol,al)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,_,b){const B=this.getWidth();this._applyManipulationCallback(l,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+B)return;this._saveInitialAttribute(k,_);const J=window.getComputedStyle(k).getPropertyValue(_);k.style.setProperty(_,`${b(Number.parseFloat(J))}px`)})}_saveInitialAttribute(l,_){const b=l.style.getPropertyValue(_);b&&ye.setDataAttribute(l,_,b)}_resetElementAttributes(l,_){this._applyManipulationCallback(l,b=>{const B=ye.getDataAttribute(b,_);B!==null?(ye.removeDataAttribute(b,_),b.style.setProperty(_,B)):b.style.removeProperty(_)})}_applyManipulationCallback(l,_){if(s(l))_(l);else for(const b of te.find(l,this._element))_(b)}}const Tn=".bs.modal",cd=`hide${Tn}`,ld=`hidePrevented${Tn}`,cl=`hidden${Tn}`,ll=`show${Tn}`,ud=`shown${Tn}`,hd=`resize${Tn}`,fd=`click.dismiss${Tn}`,dd=`mousedown.dismiss${Tn}`,pd=`keydown.dismiss${Tn}`,md=`click${Tn}.data-api`,ul="modal-open",hl="show",Qo="modal-static",gd={backdrop:!0,focus:!0,keyboard:!0},_d={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class zi extends j{constructor(l,_){super(l,_),this._dialog=te.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Jo,this._addEventListeners()}static get Default(){return gd}static get DefaultType(){return _d}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||D.trigger(this._element,ll,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ul),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(D.trigger(this._element,cd).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(hl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){D.off(window,Tn),D.off(this._dialog,Tn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new nl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new rl({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const _=te.findOne(".modal-body",this._dialog);_&&(_.scrollTop=0),f(this._element),this._element.classList.add(hl),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,D.trigger(this._element,ud,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){D.on(this._element,pd,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),D.on(window,hd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),D.on(this._element,dd,l=>{D.one(this._element,fd,_=>{this._element===l.target&&this._element===_.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ul),this._resetAdjustments(),this._scrollBar.reset(),D.trigger(this._element,cl)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(D.trigger(this._element,ld).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,_=this._element.style.overflowY;_==="hidden"||this._element.classList.contains(Qo)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(Qo),this._queueCallback(()=>{this._element.classList.remove(Qo),this._queueCallback(()=>{this._element.style.overflowY=_},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,_=this._scrollBar.getWidth(),b=_>0;if(b&&!l){const B=v()?"paddingLeft":"paddingRight";this._element.style[B]=`${_}px`}if(!b&&l){const B=v()?"paddingRight":"paddingLeft";this._element.style[B]=`${_}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,_){return this.each(function(){const b=zi.getOrCreateInstance(this,l);if(typeof l=="string"){if(b[l]===void 0)throw new TypeError(`No method named "${l}"`);b[l](_)}})}}D.on(document,md,'[data-bs-toggle="modal"]',function(x){const l=te.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),D.one(l,ll,b=>{b.defaultPrevented||D.one(l,cl,()=>{o(this)&&this.focus()})});const _=te.findOne(".modal.show");_&&zi.getInstance(_).hide(),zi.getOrCreateInstance(l).toggle(this)}),Be(zi),y(zi);const si=".bs.offcanvas",fl=".data-api",vd=`load${si}${fl}`,dl="show",pl="showing",ml="hiding",gl=".offcanvas.show",xd=`show${si}`,yd=`shown${si}`,Md=`hide${si}`,_l=`hidePrevented${si}`,vl=`hidden${si}`,Sd=`resize${si}`,Ed=`click${si}${fl}`,bd=`keydown.dismiss${si}`,Td={backdrop:!0,keyboard:!0,scroll:!1},Ad={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class oi extends j{constructor(l,_){super(l,_),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Td}static get DefaultType(){return Ad}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||D.trigger(this._element,xd,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Jo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(pl),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(dl),this._element.classList.remove(pl),D.trigger(this._element,yd,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(D.trigger(this._element,Md).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ml),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(dl,ml),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Jo().reset(),D.trigger(this._element,vl)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new nl({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():D.trigger(this._element,_l)}:null})}_initializeFocusTrap(){return new rl({trapElement:this._element})}_addEventListeners(){D.on(this._element,bd,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():D.trigger(this._element,_l))})}static jQueryInterface(l){return this.each(function(){const _=oi.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}D.on(document,Ed,'[data-bs-toggle="offcanvas"]',function(x){const l=te.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),c(this))return;D.one(l,vl,()=>{o(this)&&this.focus()});const _=te.findOne(gl);_&&_!==l&&oi.getInstance(_).hide(),oi.getOrCreateInstance(l).toggle(this)}),D.on(window,vd,()=>{for(const x of te.find(gl))oi.getOrCreateInstance(x).show()}),D.on(window,Sd,()=>{for(const x of te.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&oi.getOrCreateInstance(x).hide()}),Be(oi),y(oi);const xl={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},wd=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Rd=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Cd=(x,l)=>{const _=x.nodeName.toLowerCase();return l.includes(_)?!wd.has(_)||!!Rd.test(x.nodeValue):l.filter(b=>b instanceof RegExp).some(b=>b.test(_))},Ld={allowList:xl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Pd={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ud={entry:"(string|element|function|null)",selector:"(string|element)"};class Dd extends ke{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return Ld}static get DefaultType(){return Pd}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[B,k]of Object.entries(this._config.content))this._setContent(l,k,B);const _=l.children[0],b=this._resolvePossibleFunction(this._config.extraClass);return b&&_.classList.add(...b.split(" ")),_}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[_,b]of Object.entries(l))super._typeCheckConfig({selector:_,entry:b},Ud)}_setContent(l,_,b){const B=te.findOne(b,l);B&&((_=this._resolvePossibleFunction(_))?s(_)?this._putElementInTemplate(a(_),B):this._config.html?B.innerHTML=this._maybeSanitize(_):B.textContent=_:B.remove())}_maybeSanitize(l){return this._config.sanitize?function(_,b,B){if(!_.length)return _;if(B&&typeof B=="function")return B(_);const k=new window.DOMParser().parseFromString(_,"text/html"),J=[].concat(...k.body.querySelectorAll("*"));for(const oe of J){const ge=oe.nodeName.toLowerCase();if(!Object.keys(b).includes(ge)){oe.remove();continue}const Ee=[].concat(...oe.attributes),Ae=[].concat(b["*"]||[],b[ge]||[]);for(const Me of Ee)Cd(Me,Ae)||oe.removeAttribute(Me.nodeName)}return k.body.innerHTML}(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return p(l,[this])}_putElementInTemplate(l,_){if(this._config.html)return _.innerHTML="",void _.append(l);_.textContent=l.textContent}}const Id=new Set(["sanitize","allowList","sanitizeFn"]),ea="fade",Fs="show",yl=".modal",Ml="hide.bs.modal",es="hover",ta="focus",Nd={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},Od={allowList:xl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Fd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ki extends j{constructor(l,_){if($c===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(l,_),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Od}static get DefaultType(){return Fd}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),D.off(this._element.closest(yl),Ml,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=D.trigger(this._element,this.constructor.eventName("show")),_=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!_)return;this._disposePopper();const b=this._getTipElement();this._element.setAttribute("aria-describedby",b.getAttribute("id"));const{container:B}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(B.append(b),D.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(b),b.classList.add(Fs),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))D.on(k,"mouseover",h);this._queueCallback(()=>{D.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!D.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Fs),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))D.off(l,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[ta]=!1,this._activeTrigger[es]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),D.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const _=this._getTemplateFactory(l).toHtml();if(!_)return null;_.classList.remove(ea,Fs),_.classList.add(`bs-${this.constructor.NAME}-auto`);const b=(B=>{do B+=Math.floor(1e6*Math.random());while(document.getElementById(B));return B})(this.constructor.NAME).toString();return _.setAttribute("id",b),this._isAnimated()&&_.classList.add(ea),_}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new Dd({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ea)}_isShown(){return this.tip&&this.tip.classList.contains(Fs)}_createPopper(l){const _=p(this._config.placement,[this,l,this._element]),b=Nd[_.toUpperCase()];return Ko(this._element,l,this._getPopperConfig(b))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_resolvePossibleFunction(l){return p(l,[this._element])}_getPopperConfig(l){const _={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:b=>{this._getTipElement().setAttribute("data-popper-placement",b.state.placement)}}]};return{..._,...p(this._config.popperConfig,[_])}}_setListeners(){const l=this._config.trigger.split(" ");for(const _ of l)if(_==="click")D.on(this._element,this.constructor.eventName("click"),this._config.selector,b=>{this._initializeOnDelegatedTarget(b).toggle()});else if(_!=="manual"){const b=_===es?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),B=_===es?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");D.on(this._element,b,this._config.selector,k=>{const J=this._initializeOnDelegatedTarget(k);J._activeTrigger[k.type==="focusin"?ta:es]=!0,J._enter()}),D.on(this._element,B,this._config.selector,k=>{const J=this._initializeOnDelegatedTarget(k);J._activeTrigger[k.type==="focusout"?ta:es]=J._element.contains(k.relatedTarget),J._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},D.on(this._element.closest(yl),Ml,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,_){clearTimeout(this._timeout),this._timeout=setTimeout(l,_)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const _=ye.getDataAttributes(this._element);for(const b of Object.keys(_))Id.has(b)&&delete _[b];return l={..._,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:a(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[_,b]of Object.entries(this._config))this.constructor.Default[_]!==b&&(l[_]=b);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const _=ki.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}}y(ki);const Bd={...ki.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},zd={...ki.DefaultType,content:"(null|string|element|function)"};class Bs extends ki{static get Default(){return Bd}static get DefaultType(){return zd}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const _=Bs.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}}y(Bs);const na=".bs.scrollspy",kd=`activate${na}`,Sl=`click${na}`,Hd=`load${na}.data-api`,gr="active",ia="[href]",El=".nav-link",Gd=`${El}, .nav-item > ${El}, .list-group-item`,Vd={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Wd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ts extends j{constructor(l,_){super(l,_),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Vd}static get DefaultType(){return Wd}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=a(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(_=>Number.parseFloat(_))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(D.off(this._config.target,Sl),D.on(this._config.target,Sl,ia,l=>{const _=this._observableSections.get(l.target.hash);if(_){l.preventDefault();const b=this._rootElement||window,B=_.offsetTop-this._element.offsetTop;if(b.scrollTo)return void b.scrollTo({top:B,behavior:"smooth"});b.scrollTop=B}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(_=>this._observerCallback(_),l)}_observerCallback(l){const _=J=>this._targetLinks.get(`#${J.target.id}`),b=J=>{this._previousScrollData.visibleEntryTop=J.target.offsetTop,this._process(_(J))},B=(this._rootElement||document.documentElement).scrollTop,k=B>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=B;for(const J of l){if(!J.isIntersecting){this._activeTarget=null,this._clearActiveClass(_(J));continue}const oe=J.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&oe){if(b(J),!B)return}else k||oe||b(J)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=te.find(ia,this._config.target);for(const _ of l){if(!_.hash||c(_))continue;const b=te.findOne(decodeURI(_.hash),this._element);o(b)&&(this._targetLinks.set(decodeURI(_.hash),_),this._observableSections.set(_.hash,b))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(gr),this._activateParents(l),D.trigger(this._element,kd,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))te.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(gr);else for(const _ of te.parents(l,".nav, .list-group"))for(const b of te.prev(_,Gd))b.classList.add(gr)}_clearActiveClass(l){l.classList.remove(gr);const _=te.find(`${ia}.${gr}`,l);for(const b of _)b.classList.remove(gr)}static jQueryInterface(l){return this.each(function(){const _=ts.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}D.on(window,Hd,()=>{for(const x of te.find('[data-bs-spy="scroll"]'))ts.getOrCreateInstance(x)}),y(ts);const Hi=".bs.tab",Xd=`hide${Hi}`,qd=`hidden${Hi}`,Yd=`show${Hi}`,$d=`shown${Hi}`,jd=`click${Hi}`,Kd=`keydown${Hi}`,Zd=`load${Hi}`,Jd="ArrowLeft",bl="ArrowRight",Qd="ArrowUp",Tl="ArrowDown",ra="Home",Al="End",Gi="active",wl="fade",sa="show",Rl=".dropdown-toggle",oa=`:not(${Rl})`,Cl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',aa=`.nav-link${oa}, .list-group-item${oa}, [role="tab"]${oa}, ${Cl}`,ep=`.${Gi}[data-bs-toggle="tab"], .${Gi}[data-bs-toggle="pill"], .${Gi}[data-bs-toggle="list"]`;class Vi extends j{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),D.on(this._element,Kd,_=>this._keydown(_)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const _=this._getActiveElem(),b=_?D.trigger(_,Xd,{relatedTarget:l}):null;D.trigger(l,Yd,{relatedTarget:_}).defaultPrevented||b&&b.defaultPrevented||(this._deactivate(_,l),this._activate(l,_))}_activate(l,_){l&&(l.classList.add(Gi),this._activate(te.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),D.trigger(l,$d,{relatedTarget:_})):l.classList.add(sa)},l,l.classList.contains(wl)))}_deactivate(l,_){l&&(l.classList.remove(Gi),l.blur(),this._deactivate(te.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),D.trigger(l,qd,{relatedTarget:_})):l.classList.remove(sa)},l,l.classList.contains(wl)))}_keydown(l){if(![Jd,bl,Qd,Tl,ra,Al].includes(l.key))return;l.stopPropagation(),l.preventDefault();const _=this._getChildren().filter(B=>!c(B));let b;if([ra,Al].includes(l.key))b=_[l.key===ra?0:_.length-1];else{const B=[bl,Tl].includes(l.key);b=R(_,l.target,B,!0)}b&&(b.focus({preventScroll:!0}),Vi.getOrCreateInstance(b).show())}_getChildren(){return te.find(aa,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,_){this._setAttributeIfNotExists(l,"role","tablist");for(const b of _)this._setInitialAttributesOnChild(b)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const _=this._elemIsActive(l),b=this._getOuterElement(l);l.setAttribute("aria-selected",_),b!==l&&this._setAttributeIfNotExists(b,"role","presentation"),_||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const _=te.getElementFromSelector(l);_&&(this._setAttributeIfNotExists(_,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(_,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,_){const b=this._getOuterElement(l);if(!b.classList.contains("dropdown"))return;const B=(k,J)=>{const oe=te.findOne(k,b);oe&&oe.classList.toggle(J,_)};B(Rl,Gi),B(".dropdown-menu",sa),b.setAttribute("aria-expanded",_)}_setAttributeIfNotExists(l,_,b){l.hasAttribute(_)||l.setAttribute(_,b)}_elemIsActive(l){return l.classList.contains(Gi)}_getInnerElement(l){return l.matches(aa)?l:te.findOne(aa,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const _=Vi.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}D.on(document,jd,Cl,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),c(this)||Vi.getOrCreateInstance(this).show()}),D.on(window,Zd,()=>{for(const x of te.find(ep))Vi.getOrCreateInstance(x)}),y(Vi);const vi=".bs.toast",tp=`mouseover${vi}`,np=`mouseout${vi}`,ip=`focusin${vi}`,rp=`focusout${vi}`,sp=`hide${vi}`,op=`hidden${vi}`,ap=`show${vi}`,cp=`shown${vi}`,Ll="hide",zs="show",ks="showing",lp={animation:"boolean",autohide:"boolean",delay:"number"},up={animation:!0,autohide:!0,delay:5e3};class ns extends j{constructor(l,_){super(l,_),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return up}static get DefaultType(){return lp}static get NAME(){return"toast"}show(){D.trigger(this._element,ap).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ll),f(this._element),this._element.classList.add(zs,ks),this._queueCallback(()=>{this._element.classList.remove(ks),D.trigger(this._element,cp),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(D.trigger(this._element,sp).defaultPrevented||(this._element.classList.add(ks),this._queueCallback(()=>{this._element.classList.add(Ll),this._element.classList.remove(ks,zs),D.trigger(this._element,op)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(zs),super.dispose()}isShown(){return this._element.classList.contains(zs)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,_){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=_;break;case"focusin":case"focusout":this._hasKeyboardInteraction=_}if(_)return void this._clearTimeout();const b=l.relatedTarget;this._element===b||this._element.contains(b)||this._maybeScheduleHide()}_setListeners(){D.on(this._element,tp,l=>this._onInteraction(l,!0)),D.on(this._element,np,l=>this._onInteraction(l,!1)),D.on(this._element,ip,l=>this._onInteraction(l,!0)),D.on(this._element,rp,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const _=ns.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l](this)}})}}return Be(ns),y(ns),{Alert:Oe,Button:Rt,Carousel:_e,Collapse:ni,Dropdown:In,Modal:zi,Offcanvas:oi,Popover:Bs,ScrollSpy:ts,Tab:Vi,Toast:ns,Tooltip:ki}});const xs=[0,1,0],ys=[0,0,1];function Br(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}function Sp(i,e,t,n){return i*n*n+e*n+t}function Ka(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Ms(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function Za(i){return Math.round(i*1e6)/1e6}function Ep(i){return i*Math.PI/180}function bp(i){return i*180/Math.PI}function Ja(i){const e=Math.sqrt(i.reduce((t,n)=>t+n*n,0));return i.map(t=>t/e)}function Tp(i){const[e,t,n,r,s,a,o,c,u]=i,h=(e+s+u-1)/2,[f,d]=function(){const g=Za(h);if(g===0)return[90,1];if(g===1)return[0,0];if(g===-1)return[180,0];const v=Math.acos(g);return[bp(v),Math.sin(v)]}();if(d!==0){const g=c-a,v=n-o,y=r-t;return[Ja([g,v,y]),f]}else{const g=[[e+1,t,n],[t,s+1,a],[n,a,u+1]].find(v=>v.some(y=>y!==0))||[0,0,0];return[Ja(g),f]}}function Vl(i){const[e,t,n,r]=[...Ja(i[0]),i[1]%360],[s,a]=function(){if(r===0)return[1,0];if(r===180)return[-1,0];if(r===90)return[0,1];const c=Ep(r);return[Math.cos(c),Math.sin(c)]}(),o=1-s;return[e*e*o+s,e*t*o-n*a,e*n*o+t*a,t*e*o+n*a,t*t*o+s,t*n*o-e*a,n*e*o-t*a,n*t*o+e*a,n*n*o+s]}function Wl(i,e,t){let n=Ka(i,e);if(n>0)return[1,0,0,0,1,0,0,0,1];if(n<0){if(Ka(i,t)!==0)throw new Error("ref axis must be orthogonal to v1");return Vl([t,180])}return Vl([Ms(i,e),90])}function Ap(i,e){const[t,n,r,s,a,o,c,u,h]=i,[f,d,g,v,y,p,m,R,E]=e;return[t*f+n*v+r*m,t*d+n*y+r*R,t*g+n*p+r*E,s*f+a*v+o*m,s*d+a*y+o*R,s*g+a*p+o*E,c*f+u*v+h*m,c*d+u*y+h*R,c*g+u*p+h*E]}function wp(i,e){const[t,n,r,s,a,o,c,u,h]=i,[f,d,g]=e;return[t*f+n*d+r*g,s*f+a*d+o*g,c*f+u*d+h*g]}function Rp(i,e,t,n){const r=Wl(i,t,e),s=wp(r,e),a=Wl(s,n,Ka(s,i)===0?i:e),o=Ap(a,r);return Tp(o)}function Cp(i,e,t,n){const r=Rp(xs,ys,i,e);r[1]=-r[1];const[s,a,o]=t.map(p=>p===0?-1:p===n-1?1:0),[c,u,h]=r[0],f=[s*c,a*u,o*h];f.filter(p=>p<0).length>f.filter(p=>p>0).length&&(r[0]=r[0].map(p=>p===0?0:-p),r[1]=-r[1]);const[d,g,v]=r[0],y=d!==0?1/Math.abs(d):g!==0?1/Math.abs(g):v!==0?1/Math.abs(v):1;return r[0]=r[0].map(p=>Za(p*y)),r[1]=Za(r[1]),r[1]===-180&&(r[1]=180),r}function ha(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,c=a===0?1:a===180?-1:0,h=[[1,0,0,0,c,-o,0,o,c],[c,0,o,0,1,0,-o,0,c],[c,-o,0,o,c,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function Xl(i,e,t){const[n,r,s]=t;if(r===1)return i;if(s===1)return e;if(n===-1)return Ms(e,i);if(n===1)return Ms(i,e);if(s===-1)return e.map(a=>-a);if(r===-1)return i.map(a=>-a);throw new Error("unreachable")}function Ws(i){const[e,t,n,r]=i;return[e,-t,n,r]}function ql(i,e){const t={R:[0,-90,-1],L:[0,90,1],U:[1,-90,-1],D:[1,90,1],F:[2,-90,-1],B:[2,90,1],M:[0,90,2],E:[1,90,2],S:[2,-90,2],x:[0,-90,0],y:[1,-90,0],z:[2,-90,0]},n=i.match(/^([0-9]+)?(-([0-9]+))?([A-Za-z])(w?)([0-9]+)?(')?$/);if(!n)throw`parse op [${i}] error`;let r=n[4],s=!1;(n[5]==="w"||"rludbfmes".indexOf(r)>=0)&&(r=r.toUpperCase(),s=!0);let a=0,o=1,c=n[1],u=n[3];u?(a=parseInt(c||"1")-1,o=parseInt(u)):s?(a=0,o=parseInt(c||"2")):(a=parseInt(c||"1")-1,o=a+1);const[h,f,d]=t[r],g=n[7]?-1:1,v=n[6]?parseInt(n[6]):1,y=f*g*v;let p=0,m=0;switch(d){case 1:p=a,m=o;break;case-1:m=e-a,p=e-o;break;case 0:p=0,m=e;break;case 2:{const R=s?e-2:1,E=(e-R)%2===1?R+1:R;p=(e-E)/2,m=p+E;break}}return[h,y,p,m]}function Eo(i,e){let t=0,n=0;const r=[];for(;;){if(i[n]===" "||n>=i.length){const s=i.slice(t,n).trim();if(s.length>0&&r.push(ql(s,e)),n>=i.length)break;n++,t=n;continue}if(i[n]===","||i[n]===":"){const s=i.slice(t,n).trim();s.length>0&&r.push(ql(s,e));const a=Eo(i.slice(n+1),e);return i[n]===","?[...r,...a,...r.reverse().map(Ws),...a.reverse().map(Ws)]:[...r,...a,...r.reverse().map(Ws)]}if(i[n]==="["||i[n]==="("){const s=i[n],a=i[n]==="["?"]":")";let o=1,c=n+1;for(;c<i.length&&(i[c]===s&&o++,i[c]===a&&o--,o!==0);)c++;let u=Eo(i.slice(n+1,c),e);c++,c<i.length&&i[c]=="'"&&(c++,u=u.reverse().map(Ws));let h=1;if(c<i.length){let f=c;for(;f<i.length&&i[f]>="0"&&i[f]<="9";)f++;f>c&&(h=parseInt(i.slice(c,f))),c=f}for(let f=0;f<h;f++)r.push(...u);n=c,t=n;continue}n++}return r}function Or(i,e){return e.map(t=>t.opType==="commutator"?`(${Or(i,t.child1)}, ${Or(i,t.child2)})`:t.opType==="conjugate"?`(${Or(i,t.child1)}: ${Or(i,t.child2)})`:t.opType==="repeat"?`(${Or(i,t.child1)})${t.data}`:Dh(i,...t.op)).join(" ")}function Ss(i){let e=0;for(const t of i)t.opType!=="simple"?(e+=Ss(t.child1),e+=Ss(t.child2)):e++;return e}function Lh(i,e){return i[0]===e[0]&&(i[1]+e[1])%360===0&&i[2]===e[2]&&i[3]===e[3]}function Xs(i,e,t,n,r){for(let s=0;s<r;s++)if(!Lh(i[e+s],t[n+r-1-s]))return!1;return!0}function Ph(i,e){for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function Uh(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(!Ph(i[t],e[t]))return!1;return!0}function Yl(i){const e=[...i];return i[1]!==180&&(e[1]=-i[1]),e}function Lp(i,e){if(i.length%2===0){if(Xs(i,0,i,i.length/2,e)&&Xs(i,e,i,i.length/2+e,i.length/2-e))return[!0]}else if(i.length>=7){const t=(i.length+1)/2;if(Xs(i,0,i,t-1,e-1)&&Xs(i,e-1,i,t-1+e,t-e))return[!0,i[t-1+e-1]]}return[!1]}function Pp(i,e){if(i.length%e!==0||e===1||e>i.length/2)return!1;const t=i.length/e;for(let n=0;n<e;n++){const r=i[n];for(let s=1;s<t;s++){const a=i[s*e+n];if(!Ph(r,a))return!1}}return!0}function Up(i){let e=0;for(;e<(i.length-1)/2&&Lh(i[e],i[i.length-1-e]);e++);return e}function di(i,e,t){if(e>i.maxDepth&&(i.maxDepth=e),t.length<=3||e>i.depthLimit)return t.map(o=>({opType:"simple",child1:[],child2:[],op:o,data:0}));const n=[];for(let o=2;o<=t.length/2;o++)Pp(t,o)&&n.push([{opType:"repeat",child1:di(i,e+1,t.slice(0,o)),child2:[],op:[0,0,0,0],data:t.length/o}]);for(let o=1;o<t.length/2;o++){const[c,u,h]=Lp(t,o);if(c){let f=t;u&&(f=[Yl(u),...f]),h&&(f=[...f,Yl(h)]);const d=[];u&&d.push({opType:"simple",child1:[],child2:[],op:u,data:0}),d.push({opType:"commutator",child1:di(i,e+1,f.slice(0,o)),child2:di(i,e+1,f.slice(o,f.length/2)),op:[0,0,0,0],data:0}),h&&d.push({opType:"simple",child1:[],child2:[],op:h,data:0}),n.push(d)}}let r=Up(t);r>1&&e===1&&n.push([{opType:"conjugate",child1:di(i,e+1,t.slice(0,r)),child2:di(i,e+1,t.slice(r,t.length-r)),op:[0,0,0,0],data:0}]);for(let o=1;o<t.length;o++)n.push([...di(i,e+1,t.slice(0,t.length-o)),...di(i,e+1,t.slice(t.length-o))]);e===1&&console.log("co-candidates",n);let s=-1,a=[];for(const o of n){const c=[];let u=0,h=0;for(h=0;h<o.length;h++)if(o[h].opType!=="simple"){if(u<h){const d=o.slice(u,h).map(v=>v.op),g=bo(i.n,d);c.push(...g.map(v=>({opType:"simple",child1:[],child2:[],op:v,data:0})))}u=h+1,c.push(o[h])}if(u<h){const d=o.slice(u,h).map(g=>g.op);bo(i.n,d),c.push(...d.map(g=>({opType:"simple",child1:[],child2:[],op:g,data:0})))}const f=Ss(c);(s===-1||f<s)&&(s=f,a=c)}return a}function Dp(i,e,t){let n={depthLimit:e,maxDepth:0,n:i},r=di(n,1,t);const s=bo(i,t);if(!Uh(t,s)){const a=Ss(r),o={depthLimit:e,maxDepth:0,n:i},c=di(o,1,s);Ss(c)<a&&(r=c,n=o)}return{alg:Or(i,r),complete:n.maxDepth<=e}}function bo(i,e){const t=n=>{const r=[],s=n[0][0];let a=-1,o=0;for(let c=0;c<i;c++){let u=0;for(const h of n){const[f,d,g,v]=h;c>=g&&c<v&&(u+=d)}u!==o&&(a>=0&&o!==0&&r.push([s,o,a,c]),a=c,o=u)}return a>=0&&o!==0&&r.push([s,o,a,i]),r};for(;;){const n=[];for(let r=0;r<e.length;){const s=e[r][0];let a=r+1;for(;a<e.length&&e[a][0]===s;a++);a===r+1?n.push(e[r]):n.push(...t(e.slice(r,a))),r=a}if(Uh(e,n))return n;e=n}}function Dh(i,e,t,n,r){const s=(t/90%4+4)%4-2,a=c=>c===0?"2":c===1?"'":"";if(n===0&&r===i)return"xyz"[e].toLowerCase()+a(-s);const o="MES"[e];if(n*2===i-1&&r===n+1)return o+a(o==="S"?-s:s);if(n===1&&r===i-1)return o.toLowerCase()+a(o==="S"?-s:s);if(n+r>=i){const c="RUF"[e],u=i-r,h=i-n;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+c+a(-s)}else{const c="LDB"[e],u=n,h=r;return(h===1?"":h===u+1?`${u+1}`:`${u+1}-${h}`)+c+a(s)}}function $l(i,e){const t=[];for(const n of e){const[r,s,a,o]=n;s!==0&&t.push(Dh(i,r,s,a,o))}return t.join(" ")}function Ip(i,e,t){let{position:n,T:r,F:s}=i;for(const[a,o,c,u]of e)if(n[a]>=c&&n[a]<u){const[h,f,d]=n;s=ha(s,a,o),r=ha(r,a,o);const g=(t-1)/2,[v,y,p]=ha([h-g,f-g,d-g],a,o);n=[v+g,y+g,p+g]}return{position:n,T:r,F:s}}function Qa(i,e){const t=Gr(e,i);if(t.length===3){const[n,r,s]=t.map(c=>c.face),a=["U","F","R","L","B","D"],o=(c,u,h)=>c+a.filter(f=>f===u||f===h).join("");return[o(n,r,s),o(r,s,n),o(s,n,r)]}else if(t.length===2){const[n,r]=t,s=(a,o)=>{const c=n.a===0||n.a===i-1?n.b:n.a;return a.face+o.face+(c*2===i-1?"":c+1)};return[s(n,r),s(r,n)]}else{const n=t[0],r=`${n.a+1}`,s=`${n.b+1}`,a=r.length+s.length===2?"":"-";return[n.face+r+a+s]}}function Np(i){let e=xs,t=ys;for(let n=1;;n++){for(const r of i)e=Xl(r.nT,r.nF,e),t=Xl(r.nT,r.nF,t);if(Br(e,xs)&&Br(t,ys))return n}}function Op(i){const e=(r,s)=>{for(;s;){const a=s;s=r%s,r=a}return r},t=(r,s)=>r*s/e(r,s);let n=1;for(const r of i){const s=Np(r);n=t(n,s*r.length)}return n}function Fp(i,e=3,t=!1){let n=[];try{n=Eo(i,e)}catch{i=i.replace(/([rludfbxyzmes])/ig," $1"),n=Eo(i,e)}const r={},s=[],a=(o,c,u)=>{if(o*e*e+c*e+u in r)return;let f={position:[o,c,u],T:xs,F:ys};const d=[];for(;;){let g=Ip(f,n,e);if(r[Sp(...g.position,e)]=!0,!Br(g.position,f.position)||!Br(g.T,f.T)||!Br(g.F,f.F)){const v=Cp(g.T,g.F,f.position,e);d.push({p1:f.position,p2:g.position,nT:g.T,nF:g.F,rotation:v})}if(Br(g.position,[o,c,u]))break;f={position:g.position,T:xs,F:ys}}d.length>0&&s.push(d)};if(t)for(let o=0;o<e;o++)for(let c=0;c<e;c++)for(let u=0;u<e;u++)a(o,c,u);else{for(let o=0;o<e;o++)for(let c=0;c<e;c++)a(o,c,0),a(o,c,e-1);for(let o=0;o<e;o++)for(let c=1;c<e-1;c++)a(o,0,c),a(o,e-1,c);for(let o=1;o<e-1;o++)for(let c=1;c<e-1;c++)a(0,o,c),a(e-1,o,c)}return{N:e,alg:i,regulatedAlg:$l(e,n),simplifiedAlg:$l(e,bo(e,n)),ops:n,cycles:s.map(o=>o.map(c=>c.p1)).filter(o=>o.length>1),rotates:s.filter(o=>o.length===1).map(o=>({unit:{position:o[0].p1,T:o[0].nT,F:o[0].nF},degree:o[0].rotation[1]})),permutations:s,order:Op(s),getAllFacesColors:function(){return zp(this)}}}function Gr(i,e){const[t,n,r]=i,s=[];return n===e-1&&s.push({face:"U",a:t,b:r}),r===e-1&&s.push({face:"F",a:t,b:e-1-n}),t===e-1&&s.push({face:"R",a:e-1-r,b:e-1-n}),t===0&&s.push({face:"L",a:r,b:e-1-n}),n===0&&s.push({face:"D",a:t,b:e-1-r}),r===0&&s.push({face:"B",a:e-1-t,b:e-1-n}),s}function dc(i,e){const t=(o,c,u=["U","F","R","L","B","D"])=>{if(o.length===0)return u;const h={U:0,D:0,F:0,B:0,L:0,R:0};for(const d of o)for(const g of Gr(d,c))h[g.face]++;const f=[...u].sort((d,g)=>h[g]-h[d])[0];return[f,...t(o.filter(d=>Gr(d,c).every(g=>g.face!==f)),c,u.filter(d=>d!==f))]},n=(o,c)=>{for(const u of c)for(const h of o)if(h.face===u)return h;throw new Error("unreachable")},r=(o,c,u)=>{const h=n(Gr(o,c),u),f=Qa(c,o).find(d=>d[0]===h.face);return{point:o,facePoint:h,name:f}},s=t(i.map(o=>o.map(c=>c.p1)).flat(),e),a=[];for(const o of i){const c=t(o.map(u=>u.p1),e,[...s]);a.push(o.map(u=>({...u,p1:r(u.p1,e,c),p2:r(u.p2,e,c)})))}return a}function Ih(i){return{U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]}[i]}function Bp(i){const[e,t,n]=i;if(e===-1)return"L";if(e===1)return"R";if(t===-1)return"D";if(t===1)return"U";if(n===-1)return"B";if(n===1)return"F";throw new Error("unreachable")}function zp(i){const e={U:[],F:[],R:[],L:[],D:[],B:[]},t=(n,r,s)=>{let a=[0,0,0];switch(s){case"U":a=n;break;case"F":a=r;break;case"L":a=Ms(r,n);break;case"R":a=Ms(n,r);break;case"B":a=r.map(c=>-c);break;case"D":a=n.map(c=>-c);break}return Bp(a)};for(const n of i.permutations)for(const r of n){const s=Gr(r.p1,i.N),a=Gr(r.p2,i.N);for(const o of s){const c=t(r.nT,r.nF,o.face);if(c!==o.face){const u=a.find(h=>h.face===c);e[u.face].push({a:u.a,b:u.b,color:o.face})}}}return e}function kp(i,e,t,n,r,s,a){const o=i.createLinearGradient(e,t,n,r);o.addColorStop(0,"rgba(255, 255, 255, 0)"),o.addColorStop(.1,s),o.addColorStop(1,s),i.strokeStyle=o;var c=n-e,u=r-t,h=Math.atan2(u,c);i.moveTo(e,t),i.lineTo(n,r),i.lineTo(n-a*Math.cos(h-Math.PI/6),r-a*Math.sin(h-Math.PI/6)),i.moveTo(n,r),i.lineTo(n-a*Math.cos(h+Math.PI/6),r-a*Math.sin(h+Math.PI/6))}function qs(i,e,t,n,r){i.moveTo(e,t),i.lineTo(e-r*Math.cos(n-Math.PI/6),t-r*Math.sin(n-Math.PI/6)),i.moveTo(e,t),i.lineTo(e-r*Math.cos(n+Math.PI/6),t-r*Math.sin(n+Math.PI/6))}function Hp(i,e,t,n,r,s){const a=i.createLinearGradient(e,t-s,e,t+s);a.addColorStop(0,"rgba(255, 255, 255, 0)"),a.addColorStop(.2,r),a.addColorStop(1,r),i.strokeStyle=r;const o=s/2;n===180?(i.beginPath(),i.arc(e,t,s,-Math.PI*.3,Math.PI*.5,!1),qs(i,e,t+s,-Math.PI*1.1,o),i.stroke(),i.beginPath(),i.arc(e,t,s,Math.PI*.7,Math.PI*1.5,!1),qs(i,e,t-s,-Math.PI*.1,o),i.stroke()):n>0?(i.arc(e,t,s,-Math.PI/2,Math.PI,!1),qs(i,e-s,t,-Math.PI*.6,o)):n<0&&(i.arc(e,t,s,-Math.PI/2,0,!0),qs(i,e+s,t,-Math.PI*.4,o))}class Nh{constructor(){yn(this,"palette",["rgb(0, 0, 255)","rgb(255, 0, 0)","rgb(0, 128, 0)","rgb(255, 0, 255)","rgb(0, 128, 255)","rgb(255, 128, 0)","rgb(255, 128, 128)","rgb(255, 64, 192)","rgb(128, 128, 192)","rgb(240, 192, 57)","#3f6fbc","#ae7dbe","#d23d9e","#589cd1"]);yn(this,"index",0)}nextColor(){const e=this.palette[this.index];return this.index=(this.index+1)%this.palette.length,e}}function Gp(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Vp(i){const e=Math.sqrt(Gp(i,i));return e===0?i:i.map(t=>t/e)}function Wp(i,e){return i.map(t=>t*e)}function Xp(i,e){return i.map((t,n)=>t+e[n])}function Oh(i,e){return i.map((t,n)=>t-e[n])}function qp(i){const e=~~i.clientWidth,t=~~i.clientHeight,n=2;return i.width!==e*n||i.height!==t*n?(i.width=e*n,i.height=t*n,!0):!1}function Fh(i){for(;i.firstChild;)i.removeChild(i.lastChild)}function jl(...i){const e=[];for(let t=0;t+1<i.length;t+=2){const n=i[t].startsWith("*")?i[t].slice(1):i[t],r=!!i[t].startsWith("*"),s=i[t+1],a=document.createElement("span");a.style.color=n,r&&(a.style.fontWeight="700"),a.append(s),e.push(a)}return e}function kn(i,e,t){const n=document.createElement(i);return e&&n.classList.add(...e.split(" ")),t&&(n.style.cssText=t),n}function hn(i,e){return kn("div",i,e)}function On(i,e,t="",n="btn btn-outline-secondary"){const r=kn("button",n);return r.textContent=i,t&&(r.title=t),r.onclick=e,r}function Yp(i,e,t){return`hsl(${(r=>{let s=9;for(let a=0;a<r.length;)s=Math.imul(s^r.charCodeAt(a++),387420489);return s^s>>>9})(i)%360}, ${e}%, ${t}%)`}function $p(i,e,t){const n=i.parentElement,r=hn(e,t),s=i.style.display;return n.insertBefore(r,i),i.style.display="none",[r,()=>{r.remove(),i.style.display=s}]}function jp(i,e){const t=i.indexOf(e);return i[(t+1)%i.length]}function Kp(i,e=0){const t=i.getImageData(0,0,i.canvas.width,i.canvas.height),{width:n,height:r}=i.canvas;let s=r,a=0,o=n,c=0;for(let u=0;u<r;u++){let h=!0;for(let f=0;f<n;f++){const d=(u*n+f)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){s=u;break}}for(let u=r-1;u>=0;u--){let h=!0;for(let f=0;f<n;f++){const d=(u*n+f)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){a=u+1;break}}for(let u=0;u<n;u++){let h=!0;for(let f=0;f<r;f++){const d=(f*n+u)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){o=u;break}}for(let u=n-1;u>=0;u--){let h=!0;for(let f=0;f<r;f++){const d=(f*n+u)*4;if(t.data[d+3]>0){h=!1;break}}if(!h){c=u+1;break}}return s=Math.max(0,s-e),a=Math.min(r,a+e),o=Math.max(0,o-e),c=Math.min(n,c+e),{top:s,bottom:a,left:o,right:c}}function Zp(i,e=0){const t=i.canvas,n=t.width,r=t.height,s=new Uint8Array(n*r*4);i.readPixels(0,0,n,r,i.RGBA,i.UNSIGNED_BYTE,s);let a=r,o=0,c=n,u=0;for(let h=0;h<r;h++){let f=!0;for(let d=0;d<n;d++){const g=(h*n+d)*4;if(s[g+3]>0){f=!1;break}}if(!f){a=h;break}}for(let h=r-1;h>=0;h--){let f=!0;for(let d=0;d<n;d++){const g=(h*n+d)*4;if(s[g+3]>0){f=!1;break}}if(!f){o=h+1;break}}for(let h=0;h<n;h++){let f=!0;for(let d=0;d<r;d++){const g=(d*n+h)*4;if(s[g+3]>0){f=!1;break}}if(!f){c=h;break}}for(let h=n-1;h>=0;h--){let f=!0;for(let d=0;d<r;d++){const g=(d*n+h)*4;if(s[g+3]>0){f=!1;break}}if(!f){u=h+1;break}}return a=Math.max(0,a-e),o=Math.min(r,o+e),c=Math.max(0,c-e),u=Math.min(n,u+e),{top:a,bottom:o,left:c,right:u}}function Jp(i,e,t,n,r){const s=document.createElement("canvas");return s.width=r-n,s.height=t-e,s.getContext("2d").drawImage(i.canvas,n,e,r-n,t-e,0,0,r-n,t-e),s.toDataURL("image/png")}function Qp(i,e,t,n,r){const s=r-n,a=t-e,o=new Uint8Array(s*a*4);i.readPixels(n,e,s,a,i.RGBA,i.UNSIGNED_BYTE,o);const c=new Uint8Array(s*a*4);for(let d=0;d<a;d++){const g=d*s*4,v=(a-d-1)*s*4;c.set(o.subarray(g,g+s*4),v)}for(let d=0;d<c.length;d+=4){const g=c[d+3]/255;g>0&&(c[d]=c[d]/g,c[d+1]=c[d+1]/g,c[d+2]=c[d+2]/g)}const u=document.createElement("canvas");u.width=s,u.height=a;const h=u.getContext("2d"),f=new ImageData(new Uint8ClampedArray(c),s,a);return h.putImageData(f,0,0),u.toDataURL("image/png")}function em(i,e,t=!1){let n="";if(t){const{top:r,bottom:s,left:a,right:o}=Kp(i);n=Jp(i,r,s,a,o)}else n=i.canvas.toDataURL("image/png");Bh(n,e)}function tm(i,e,t=!1){let n="";if(t){const{top:r,bottom:s,left:a,right:o}=Zp(i);n=Qp(i,r,s,a,o)}else n=i.canvas.toDataURL("image/png");Bh(n,e)}function Bh(i,e){const t=document.createElement("a");t.href=i,t.download=e,t.click()}const nm=[{name:"c3s",algorithm:"iL iF jD iF' U iF jD' iF' U' iL'",tags:["atom"],desc:"3-cycle on single face centers",validateParam:(i,e)=>{i<4&&(i=4);const t=Ys(e[0]||0,2,~~(i/2)),n=Ys(e[1]||0,2,~~((i+1)/2));return{n:i,param:[t,n]}}},{name:"SwapEdge",algorithm:"iR2 B2 U2 iL U2 iR' U2 iR U2 F2 iR F2 iL' B2 iR2",tags:["atom"],validateParam:(i,e)=>{i<4&&(i=4);const t=Ys(e[0]||0,2,1/0);return{n:i,param:[t]}}},{name:"SwapEdge2",algorithm:"iB2 D' iR' U' iU iR U' iR U iR iU' iR' iU iR U iR U' iR U' iU' iR' U2 D iB2",tags:["atom"],validateParam:(i,e)=>{i<4&&(i=4);const t=Ys(e[0]||0,2,1/0);return{n:i,param:[t]}}},{name:"SwapEdge4x4x4",algorithm:"2R' U' 2U 2R U' 2R U 2R 2U' 2R' 2U 2R U 2R U' 2R 1-2U' 2R' U2",tags:["atom"],validateParam:(i,e)=>({n:4,param:[]})}],im=`
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

`,is=[];function ec(){var e,t;if(is.length!==0)return is;is.push(...nm);let i=[];for(const n of im.split(/\n/g)){const r=n.match(/^\[(.*)\]$/);if(r){i=r[1].split(",").map(a=>a.trim());continue}const s=n.match(/^(\[([^)]+)\])?\s*([^:]+)\s*:\s*(.*)$/);if(s){const a=((e=s[2])==null?void 0:e.split(",").map(u=>u.trim()))||[],o=s[3],c=s[4].split("//");is.push({name:o,algorithm:c[0].trim(),tags:[...i,...a],desc:(t=c[1])==null?void 0:t.trim()})}}return is}function pc(i){const e=[];for(const t of i)t.match(/[a-z]/i)&&!t.match(/[xyzMESmesLRFBUDlrfbudhw]/)&&e.indexOf(t)<0&&e.push(t);return e}function rm(i,e){const t=pc(i);for(let n=0;n<t.length&&n<e.length;n++)i=i.replaceAll(t[n],e[n]);return i}function Kl(i,e,t){if(i.startsWith(e)){const n=i.indexOf(t,e.length);if(n>=0)return i.slice(e.length,n)}}function sm(i,e,t){for(let s="";s!==i;){s=i;const a=i.indexOf("$");if(a<0)break;let o,c=Kl(i.slice(a+1),"{","}");if(c)o=a+1+c.length+2;else{const u=i.slice(a+1).match(/^[A-Za-z0-9_.]+/);u&&(c=u[0],o=a+1+c.length)}if(c&&o){const u=ec().find(h=>h.name.toLowerCase()===c.toLowerCase());if(!u)throw new Error(`alg name '${c}' not found`);if(u){let h=u.algorithm,f=Kl(i.slice(o),"(",")");f&&(o+=f.length+2,h=rm(h,f.split(",").map(d=>d.trim()))),i=i.slice(0,a)+"("+h+")"+i.slice(o)}}}const n=[...e],r=pc(i);for(let s=n.length;s<r.length;s++)n.push("1");n.length=r.length;for(let s=0;s<r.length;s++)i=i.replaceAll(r[s],n[s]);return i=i.replaceAll("h",`${~~(t/2)}`),{resolvedAlgorithm:i,actualParamValues:n}}function Ys(i,e,t){return i<e&&(i=e),i>t&&(i=t),i}function om(i,e,t,n=!0){const r=performance.now(),s=t.getContext("2d");s.reset(),s.clearRect(0,0,t.width,t.height);const[a,o]=[10,10];s.translate(a,o),s.lineCap="round",s.lineJoin="round",s.lineWidth=3;const u={"1 face":am,"3 faces":cm,"5 faces":lm,"6 faces":um,"6 faces 2":hm}[i](t.width-a*2,t.height-o*2,e);fm(e,s,u,n),console.log("r2d render time",performance.now()-r)}function zh(i){const e=dc(i.permutations,i.N),t={U:0,F:0,R:0,L:0,D:0,B:0};for(const n of e)for(const r of n)t[r.p1.facePoint.face]++;return t}function nn(i,e,t,n=t){return[[i,e],[i+t,e],[i+t,e+n],[i,e+n]]}function am(i,e,t){const n=Math.floor(Math.min(i/17,e/14)),r=n*14,s=n*2,a=zh(t);return["U","F","R","L","D","B"].sort((c,u)=>a[u]-a[c]).map((c,u)=>({name:c,priority:6-u,shape:u===0?nn(0,0,r):nn(r+n,(u-1)*3*n,s)}))}function cm(i,e,t){const n=Math.floor(Math.min(i/2.25,e/2)),r=n/4,s=(d,g)=>{if(d===0)return[n,n];const v=d%2===g?n*.9:n,y=Math.PI/6+Math.PI/3*(d-1);return[n+v*Math.cos(y),n-v*Math.sin(y)]},a=zh(t),o=(a.U>=a.D?"U":"D")+(a.F>=a.B?"F":"B")+(a.R>=a.L?"R":"L");function c(d){switch(d){case"UFR":return["U",[2,1,0,3],"R",[0,1,6,5],"F",[3,0,5,4],"L","D","B"];case"UFL":return["U",[3,2,1,0],"F",[0,1,6,5],"L",[3,0,5,4],"B","D","R"];case"UBL":return["U",[0,3,2,1],"L",[0,1,6,5],"B",[3,0,5,4],"R","D","F"];case"UBR":return["U",[1,0,3,2],"B",[0,1,6,5],"R",[3,0,5,4],"F","D","L"];case"DFR":return["D",[4,0,6,5],"R",[2,1,6,0],"F",[3,2,0,4],"U","L","B"];case"DFL":return["D",[5,4,0,6],"F",[2,1,6,0],"L",[3,2,0,4],"U","B","R"];case"DBL":return["D",[6,5,4,0],"L",[2,1,6,0],"B",[3,2,0,4],"U","R","F"];case"DBR":return["D",[0,6,5,4],"B",[2,1,6,0],"R",[3,2,0,4],"U","F","L"]}throw new Error("invalid key")}const u=c(o),h=u[0]==="U"?0:1;return[{name:u[0],priority:6,shape:u[1].map(d=>s(d,h))},{name:u[2],priority:5,shape:u[3].map(d=>s(d,h))},{name:u[4],priority:4,shape:u[5].map(d=>s(d,h))},{name:u[6],priority:-1,shape:nn(0,0,r)},{name:u[7],priority:-2,shape:nn(0,2*n-r,r)},{name:u[8],priority:-3,shape:nn(2*n,n-r/2,r)}]}function lm(i,e,t){const[n,r,s,a]=[.5,.5,.5,.5],o=100,c=Math.floor(Math.min((i-o-20)/(1+n+r),e/(1+s+a))),u=[0,0],h=[c*(1+n+r),0],f=[c*(1+n+r),c*(1+s+a)],d=[0,c*(1+s+a)],g=[c*n,c*s],v=[c*(1+n),c*s],y=[c*(1+n),c*(1+s)],p=[c*n,c*(1+s)];return[{name:"U",priority:6,shape:[g,v,y,p]},{name:"F",priority:5,shape:[p,y,f,d]},{name:"R",priority:4,shape:[y,v,h,f]},{name:"L",priority:3,shape:[g,p,d,u]},{name:"B",priority:2,shape:[v,g,u,h]},{name:"D",priority:-1,shape:nn(c*(1+n+r)+20,0,o,o)}]}function um(i,e,t){const n=Math.floor(Math.min(i/4,e/3));return[{name:"U",priority:6,shape:nn(n,0,n)},{name:"F",priority:5,shape:nn(n,n,n)},{name:"R",priority:4,shape:nn(2*n,n,n)},{name:"L",priority:3,shape:nn(0,n,n)},{name:"D",priority:2,shape:nn(n,2*n,n)},{name:"B",priority:-1,shape:nn(3*n,n,n)}]}function hm(i,e,t){const s=Math.floor(Math.min(i/3.5,e/2.5))-2;return[{name:"U",priority:4,shape:[[s+.5*s,0],[2*s+.5*s,0],[2*s,s*.5],[s,s*.5]]},{name:"R",priority:5,shape:[[2*s,s*.5],[2*s+.5*s,0],[2*s+.5*s,s],[2*s,s+s*.5]]},{name:"F",priority:6,shape:nn(s,s*.5,s)},{name:"L",priority:3,shape:nn(0,s*.5,s)},{name:"D",priority:2,shape:nn(s,s+s*.5,s)},{name:"B",priority:-1,shape:nn(2*s+.5*s,0,s)}]}function fm(i,e,t,n=!0){const r=i.N,s=(v,y,p,m)=>{const R={U:"hsl(60, 100%, 90%)",F:"hsl(0, 100%, 90%)",R:"hsl(120, 100%, 85%)",B:"hsl(23, 100%, 90%)",L:"hsl(240, 100%, 90%)",D:"hsl(120, 100%, 100%)"},E=(M,C,K)=>{const ee=[M];for(let O=1;O<K;O++)ee.push([M[0]+O*(C[0]-M[0])/K,M[1]+O*(C[1]-M[1])/K]);return ee.push(C),ee},A=M=>M.reduce((K,ee,O,X)=>[K[0]+ee[0],K[1]+ee[1]],[0,0]).map(K=>K/M.length);e.fillStyle=R[v],e.beginPath(),y.forEach((M,C)=>{C===0?e.moveTo(...M):e.lineTo(...M)}),e.closePath(),e.fill();const I=E(y[0],y[3],r),U=E(y[0],y[1],r),w=E(y[1],y[2],r),z=E(y[3],y[2],r);for(let M=0;M<=r;M++)e.beginPath(),e.moveTo(I[M][0],I[M][1]),e.lineTo(w[M][0],w[M][1]),e.moveTo(U[M][0],U[M][1]),e.lineTo(z[M][0],z[M][1]),e.stroke();const Q=[];for(let M=0;M<U.length;M++)Q.push(E(U[M],z[M],r));for(let M=0;M<r;M++)for(let C=0;C<r;C++){const K=`${v}-${M}-${C}`,ee=A([Q[M][C],Q[M][C+1],Q[M+1][C+1],Q[M+1][C]]);m[K]=ee}for(const{a:M,b:C,color:K}of p){e.fillStyle=R[K];const ee=[Q[M][C],Q[M][C+1],Q[M+1][C+1],Q[M+1][C]];e.beginPath(),e.moveTo(...ee[0]),e.lineTo(...ee[1]),e.lineTo(...ee[2]),e.lineTo(...ee[3]),e.closePath(),e.fill(),e.stroke()}};e.lineCap="round",e.lineJoin="round",e.lineWidth=9/r;const a=i.getAllFacesColors(),o={};for(const v of t)s(v.name,v.shape,a[v.name],o);const c=new Nh;e.shadowColor="rgba(0, 0, 0, .4)",e.shadowBlur=15,e.lineWidth=5;const u=v=>{const y=c.nextColor();for(let p=0;p<v.length;p++){const m=p===v.length-1?0:p+1,[R,E]=v[p],[A,I]=v[m];e.beginPath(),kp(e,R,E,A,I,y,20),e.stroke()}},h=(v,y)=>{const p=c.nextColor(),[m,R]=v;e.beginPath(),Hp(e,m,R,y,p,20),e.stroke()},f=(v,y)=>v.every(p=>p.facePoint.face===v[0].facePoint.face&&p.facePoint.a>0&&p.facePoint.a<y-1&&p.facePoint.b>0&&p.facePoint.b<y-1),d=dc(i.permutations,i.N),g=v=>`${v.face}-${v.a}-${v.b}`;for(const v of d)if(!(!n&&f(v.map(y=>y.p1),r)))if(v.length>1){const y=v.map(p=>o[g(p.p1.facePoint)]);u(y)}else{const y=v[0],p=o[g(y.p1.facePoint)];h(p,y.rotation[1])}}function gn(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,c=a===0?1:a===180?-1:0,h=[[1,0,0,0,c,-o,0,o,c],[c,0,o,0,1,0,-o,0,c],[c,-o,0,o,c,0,0,0,1]][e];return[h[0]*n+h[1]*r+h[2]*s,h[3]*n+h[4]*r+h[5]*s,h[6]*n+h[7]*r+h[8]*s]}function kh(i,e,t,n){return[i+n-e,e-t+i]}function Hh(i,e,t,n){return[i-n+e,e+t-i]}function To(i,e,t){return[i[0]+e,i[1]+t]}function En(i,e,t,n){const r=e[1]-i[1],s=i[0]-e[0],a=i[0]*r+i[1]*s,o=n[1]-t[1],c=t[0]-n[0],u=t[0]*o+t[1]*c,h=r*c-s*o;return h==0?i:[(a*c-u*s)/h,(r*u-o*a)/h]}function dm(i,e,t,n){const[r,s,a]=[e[0]- -i/2,e[1]-i/2,e[2]-i/2],[o,c,u]=[e,t,n].map(d=>[d[0]-r,d[1]-s,d[2]-a]),h=pm(i,o,c,u),f=[];for(let d=0;d<h.length;d++){const[g,v,y]=h[d],[p,m,R]=c,[E,A,I]=u;g===p&&v===m&&y===R||g===E&&v===A&&y===I||f.push(h[d])}return f.map(d=>[d[0]+r,d[1]+s,d[2]+a])}function pm(i,e,t,n){const r=i/2;let s=[0,0];if(t[0]===r&&(s=[1,-90]),t[0]===-r&&(s=[1,90]),t[1]===r&&(s=[0,90]),t[1]===-r&&(s=[0,-90]),t[2]===r&&(s=[2,0]),t[2]===-r&&(s=[0,180]),t=gn(t,s[0],s[1]),n=gn(n,s[0],s[1]),n[2]===-r)return gm(i,e,t,n).map(u=>gn(u,s[0],-s[1]));if(n[2]===r)return[];let a=[2,0];return n[0]===r&&(a=[2,90]),n[0]===-r&&(a=[2,-90]),n[1]===-r&&(a=[2,180]),t=gn(t,a[0],a[1]),n=gn(n,a[0],a[1]),mm(i,e,t,n).map(c=>gn(c,a[0],-a[1])).map(c=>gn(c,s[0],-s[1]))}function mm(i,e,t,n){const[r,s]=[e[0],e[1]],[a,o]=[e[0]+i,e[1]],[c,u]=[t[0],t[1]],[h,f]=[n[0],e[1]+e[2]-n[2]];if(f===u)return[];const d=(r+a)/2,g=s+i/2,v=To(Hh(d,g,h,f),-i,0),y=To(kh(d,g,h,f),i,0),p=(I,U,w,z)=>(w-I)*(w-I)+(z-U)*(z-U),m=p(c,u,h,f),R=p(c,u,...v),E=p(c,u,...y),A=Math.min(m,R,E);if(A===m)return[[En([r,s],[a,o],[c,u],[h,f])[0],s,e[2]]];if(A===R){const I=En([r,s],[r,s+1],[c,u],v),U=En([r,s],[a,o],[c,u],v);return[[r,I[1],e[2]],[r,s,e[2]-(r-U[0])]]}else if(A===E){const I=En([a,o],[a,o+1],[c,u],y),U=En([r,s],[a,o],[c,u],y);return[[a,I[1],e[2]],[a,o,e[2]-(U[0]-a)]]}return[]}function $s(i,e,t,n){const[r,s,a]=e,[o,c,u]=[r+i,s,a],[h,f]=[t[0],t[1]],[d,g]=[n[0],e[1]+i+s-n[1]],v=[h,f],y=[d,g],p=[r,s],m=[o,c],R=(r+o)/2,E=s+i+i/2,A=To(Hh(R,E,d,g),-i,0),I=To(kh(R,E,d,g),i,0),U=(w,z,Q,M)=>(Q-w)*(Q-w)+(M-z)*(M-z);return[{distance:U(...v,...A),pathFunc:()=>{const w=En(v,A,p,m),z=En(v,A,p,[r,s+1]),Q=En(v,A,[r,s+i],[o,c+i]);return[[w[0],s,a],[r,s,a-(z[1]-s)],[r,s-(r-Q[0]),a-i]]}},{distance:U(...v,...y),pathFunc:()=>{const w=En(v,y,p,m),z=En(v,y,[r,s+i],[o,c+i]);return[[w[0],s,a],[z[0],s,a-i]]}},{distance:U(...v,...I),pathFunc:()=>{const w=En(v,I,p,m),z=En(v,I,m,[o,c+1]),Q=En(v,I,[r,s+i],[o,c+i]);return[[w[0],c,u],[o,c,u-(z[1]-c)],[o,c-(Q[0]-o),u-i]]}}]}function gm(i,e,t,n){const r=[...$s(i,e,t,n),...$s(i,e,gn(t,2,90),gn(n,2,90)),...$s(i,e,gn(t,2,180),gn(n,2,180)),...$s(i,e,gn(t,2,270),gn(n,2,270))],s=Math.min(...r.map(c=>c.distance)),a=r.findIndex(c=>c.distance===s);return r[a].pathFunc().map(c=>gn(c,2,-90*~~(a/3)))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="162",vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_m=0,Zl=1,vm=2,xm=0,Gh=1,ym=2,fi=3,Di=0,_n=1,Zn=2,Li=0,Vr=1,Jl=2,Ql=3,eu=4,Mm=5,Ji=100,Sm=101,Em=102,tu=103,nu=104,bm=200,Tm=201,Am=202,wm=203,tc=204,nc=205,Rm=206,Cm=207,Lm=208,Pm=209,Um=210,Dm=211,Im=212,Nm=213,Om=214,Fm=0,Bm=1,zm=2,Ao=3,km=4,Hm=5,Gm=6,Vm=7,Vh=0,Wm=1,Xm=2,Pi=0,qm=1,Ym=2,$m=3,jm=4,Km=5,Zm=6,Jm=7,Wh=300,Xr=301,qr=302,ic=303,rc=304,Oo=306,sc=1e3,Hn=1001,oc=1002,fn=1003,iu=1004,rs=1005,mn=1006,fa=1007,er=1008,Ui=1009,Qm=1010,eg=1011,gc=1012,Xh=1013,Ci=1014,pi=1015,Es=1016,qh=1017,Yh=1018,nr=1020,tg=1021,Gn=1023,ng=1024,ig=1025,ir=1026,Yr=1027,rg=1028,$h=1029,sg=1030,jh=1031,Kh=1033,da=33776,pa=33777,ma=33778,ga=33779,ru=35840,su=35841,ou=35842,au=35843,Zh=36196,cu=37492,lu=37496,uu=37808,hu=37809,fu=37810,du=37811,pu=37812,mu=37813,gu=37814,_u=37815,vu=37816,xu=37817,yu=37818,Mu=37819,Su=37820,Eu=37821,_a=36492,bu=36494,Tu=36495,og=36283,Au=36284,wu=36285,Ru=36286,ag=3200,cg=3201,lg=0,ug=1,Ri="",Yn="srgb",Ni="srgb-linear",_c="display-p3",Fo="display-p3-linear",wo="linear",Ct="srgb",Ro="rec709",Co="p3",yr=7680,Cu=519,hg=512,fg=513,dg=514,Jh=515,pg=516,mg=517,gg=518,_g=519,Lu=35044,Pu="300 es",ac=1035,mi=2e3,Lo=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uu=1234567;const ds=Math.PI/180,bs=180/Math.PI;function jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function vc(i,e){return(i%e+e)%e}function vg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function xg(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function yg(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function Mg(i,e=1){return e-Math.abs(vc(i,e*2)-e)}function Sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tg(i,e){return i+Math.random()*(e-i)}function Ag(i){return i*(.5-Math.random())}function wg(i){i!==void 0&&(Uu=i);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rg(i){return i*ds}function Cg(i){return i*bs}function cc(i){return(i&i-1)===0&&i!==0}function Lg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Po(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pg(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),g=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*f,c*d,o*u);break;case"YZY":i.set(c*d,o*h,c*f,o*u);break;case"ZXZ":i.set(c*f,c*d,o*h,o*u);break;case"XZX":i.set(o*h,c*v,c*g,o*u);break;case"YXY":i.set(c*g,o*h,c*v,o*u);break;case"ZYZ":i.set(c*v,c*g,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ug={DEG2RAD:ds,RAD2DEG:bs,generateUUID:jr,clamp:jt,euclideanModulo:vc,mapLinear:vg,inverseLerp:xg,lerp:ps,damp:yg,pingpong:Mg,smoothstep:Sg,smootherstep:Eg,randInt:bg,randFloat:Tg,randFloatSpread:Ag,seededRandom:wg,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:cc,ceilPowerOfTwo:Lg,floorPowerOfTwo:Po,setQuaternionFromProperEuler:Pg,normalize:ln,denormalize:Fr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,s,a,o,c,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],g=n[5],v=n[8],y=r[0],p=r[3],m=r[6],R=r[1],E=r[4],A=r[7],I=r[2],U=r[5],w=r[8];return s[0]=a*y+o*R+c*I,s[3]=a*p+o*E+c*U,s[6]=a*m+o*A+c*w,s[1]=u*y+h*R+f*I,s[4]=u*p+h*E+f*U,s[7]=u*m+h*A+f*w,s[2]=d*y+g*R+v*I,s[5]=d*p+g*E+v*U,s[8]=d*m+g*A+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*s,g=u*s-a*c,v=t*f+n*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=g*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new st;function Qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dg(){const i=Uo("canvas");return i.style.display="block",i}const Du={};function Ig(i){i in Du||(Du[i]=!0,console.warn(i))}const Iu=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Ni]:{transfer:wo,primaries:Ro,toReference:i=>i,fromReference:i=>i},[Yn]:{transfer:Ct,primaries:Ro,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fo]:{transfer:wo,primaries:Co,toReference:i=>i.applyMatrix3(Nu),fromReference:i=>i.applyMatrix3(Iu)},[_c]:{transfer:Ct,primaries:Co,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nu),fromReference:i=>i.applyMatrix3(Iu).convertLinearToSRGB()}},Ng=new Set([Ni,Fo]),Mt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ng.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=js[e].toReference,r=js[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return js[i].primaries},getTransfer:function(i){return i===Ri?wo:js[i].transfer}};function Wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mr;class ef{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Uo("canvas")),Mr.width=e.width,Mr.height=e.height;const n=Mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wr(t[n]/255)*255):t[n]=Wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Og=0;class tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ya(r[a].image)):s.push(ya(r[a]))}else s=ya(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fg=0;class dn extends or{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Hn,r=Hn,s=mn,a=er,o=Gn,c=Ui,u=dn.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=jr(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Wh;dn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,n=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],g=c[5],v=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(v+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(u+1)/2,A=(g+1)/2,I=(m+1)/2,U=(h+d)/4,w=(f+y)/4,z=(v+p)/4;return E>A&&E>I?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=U/n,s=w/n):A>I?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=U/r,s=z/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=w/s,r=z/s),this.set(n,r,s,t),this}let R=Math.sqrt((p-v)*(p-v)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(p-v)/R,this.y=(f-y)/R,this.z=(d-h)/R,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bg extends or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends Bg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nf extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zg extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],g=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=y;return}if(f!==y||c!==d||u!==g||h!==v){let p=1-o;const m=c*d+u*g+h*v+f*y,R=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const I=Math.sqrt(E),U=Math.atan2(I,m*R);p=Math.sin(p*U)/I,o=Math.sin(o*U)/I}const A=o*R;if(c=c*p+d*A,u=u*p+g*A,h=h*p+v*A,f=f*p+y*A,p===1-o){const I=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=I,u*=I,h*=I,f*=I}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+h*f+c*g-u*d,e[t+1]=c*v+h*d+u*f-o*g,e[t+2]=u*v+h*g+o*d-c*f,e[t+3]=h*v-o*f-c*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*h*f+u*g*v,this._y=u*g*f-d*h*v,this._z=u*h*v+d*g*f,this._w=u*h*f-d*g*v;break;case"YXZ":this._x=d*h*f+u*g*v,this._y=u*g*f-d*h*v,this._z=u*h*v-d*g*f,this._w=u*h*f+d*g*v;break;case"ZXY":this._x=d*h*f-u*g*v,this._y=u*g*f+d*h*v,this._z=u*h*v+d*g*f,this._w=u*h*f-d*g*v;break;case"ZYX":this._x=d*h*f-u*g*v,this._y=u*g*f+d*h*v,this._z=u*h*v-d*g*f,this._w=u*h*f+d*g*v;break;case"YZX":this._x=d*h*f+u*g*v,this._y=u*g*f+d*h*v,this._z=u*h*v-d*g*f,this._w=u*h*f-d*g*v;break;case"XZY":this._x=d*h*f-u*g*v,this._y=u*g*f-d*h*v,this._z=u*h*v+d*g*f,this._w=u*h*f+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(n>o&&n>f){const g=2*Math.sqrt(1+n-o-f);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>f){const g=2*Math.sqrt(1+o-n-f);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new F,Ou=new sr;class As{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Zs.subVectors(this.max,ss),Sr.subVectors(e.a,ss),Er.subVectors(e.b,ss),br.subVectors(e.c,ss),yi.subVectors(Er,Sr),Mi.subVectors(br,Er),Xi.subVectors(Sr,br);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!Sa(t,Sr,Er,br,Zs)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,Sr,Er,br,Zs))?!1:(Js.crossVectors(yi,Mi),t=[Js.x,Js.y,Js.z],Sa(t,Sr,Er,br,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,Ks=new As,Sr=new F,Er=new F,br=new F,yi=new F,Mi=new F,Xi=new F,ss=new F,Zs=new F,Js=new F,qi=new F;function Sa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){qi.fromArray(i,s);const o=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=e.dot(qi),u=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const kg=new As,os=new F,Ea=new F;class xc{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Ea)),this.expandByPoint(os.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new F,ba=new F,Qs=new F,Si=new F,Ta=new F,eo=new F,Aa=new F;class rf{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ba.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=Si.dot(this.direction),c=-Si.dot(Qs),u=Si.lengthSq(),h=Math.abs(1-a*a);let f,d,g,v;if(h>0)if(f=a*c-o,d=a*o-c,v=s*h,f>=0)if(d>=-v)if(d<=v){const y=1/h;f*=y,d*=y,g=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+u;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+d*(d+2*c)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ba).addScaledVector(Qs,d),g}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,s){Ta.subVectors(t,e),eo.subVectors(n,e),Aa.crossVectors(Ta,eo);let a=this.direction.dot(Aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const c=o*this.direction.dot(eo.crossVectors(Si,eo));if(c<0)return null;const u=o*this.direction.dot(Ta.cross(Si));if(u<0||c+u>a)return null;const h=-o*Si.dot(Aa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,r,s,a,o,c,u,h,f,d,g,v,y,p){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,f,d,g,v,y,p)}set(e,t,n,r,s,a,o,c,u,h,f,d,g,v,y,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=h,m[10]=f,m[14]=d,m[3]=g,m[7]=v,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,g=a*f,v=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=g+v*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=v+g*u,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,g=c*f,v=u*h,y=u*f;t[0]=d+y*o,t[4]=v*o-g,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=g*o-v,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,g=c*f,v=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,g=a*f,v=o*h,y=o*f;t[0]=c*h,t[4]=v*u-g,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=g*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*u,v=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=v*f+g,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=g*f+v,t[10]=d-y*f}else if(e.order==="XZY"){const d=a*c,g=a*u,v=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=g*f-v,t[2]=v*f-g,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Gg)}lookAt(e,t,n){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ei.crossVectors(n,Mn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ei.crossVectors(n,Mn)),Ei.normalize(),to.crossVectors(Mn,Ei),r[0]=Ei.x,r[4]=to.x,r[8]=Mn.x,r[1]=Ei.y,r[5]=to.y,r[9]=Mn.y,r[2]=Ei.z,r[6]=to.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],g=n[13],v=n[2],y=n[6],p=n[10],m=n[14],R=n[3],E=n[7],A=n[11],I=n[15],U=r[0],w=r[4],z=r[8],Q=r[12],M=r[1],C=r[5],K=r[9],ee=r[13],O=r[2],X=r[6],Y=r[10],se=r[14],D=r[3],re=r[7],ce=r[11],pe=r[15];return s[0]=a*U+o*M+c*O+u*D,s[4]=a*w+o*C+c*X+u*re,s[8]=a*z+o*K+c*Y+u*ce,s[12]=a*Q+o*ee+c*se+u*pe,s[1]=h*U+f*M+d*O+g*D,s[5]=h*w+f*C+d*X+g*re,s[9]=h*z+f*K+d*Y+g*ce,s[13]=h*Q+f*ee+d*se+g*pe,s[2]=v*U+y*M+p*O+m*D,s[6]=v*w+y*C+p*X+m*re,s[10]=v*z+y*K+p*Y+m*ce,s[14]=v*Q+y*ee+p*se+m*pe,s[3]=R*U+E*M+A*O+I*D,s[7]=R*w+E*C+A*X+I*re,s[11]=R*z+E*K+A*Y+I*ce,s[15]=R*Q+E*ee+A*se+I*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],g=e[14],v=e[3],y=e[7],p=e[11],m=e[15];return v*(+s*c*f-r*u*f-s*o*d+n*u*d+r*o*g-n*c*g)+y*(+t*c*g-t*u*d+s*a*d-r*a*g+r*u*h-s*c*h)+p*(+t*u*f-t*o*g-s*a*f+n*a*g+s*o*h-n*u*h)+m*(-r*o*h-t*c*f+t*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],g=e[11],v=e[12],y=e[13],p=e[14],m=e[15],R=f*p*u-y*d*u+y*c*g-o*p*g-f*c*m+o*d*m,E=v*d*u-h*p*u-v*c*g+a*p*g+h*c*m-a*d*m,A=h*y*u-v*f*u+v*o*g-a*y*g-h*o*m+a*f*m,I=v*f*c-h*y*c-v*o*d+a*y*d+h*o*p-a*f*p,U=t*R+n*E+r*A+s*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/U;return e[0]=R*w,e[1]=(y*d*s-f*p*s-y*r*g+n*p*g+f*r*m-n*d*m)*w,e[2]=(o*p*s-y*c*s+y*r*u-n*p*u-o*r*m+n*c*m)*w,e[3]=(f*c*s-o*d*s-f*r*u+n*d*u+o*r*g-n*c*g)*w,e[4]=E*w,e[5]=(h*p*s-v*d*s+v*r*g-t*p*g-h*r*m+t*d*m)*w,e[6]=(v*c*s-a*p*s-v*r*u+t*p*u+a*r*m-t*c*m)*w,e[7]=(a*d*s-h*c*s+h*r*u-t*d*u-a*r*g+t*c*g)*w,e[8]=A*w,e[9]=(v*f*s-h*y*s-v*n*g+t*y*g+h*n*m-t*f*m)*w,e[10]=(a*y*s-v*o*s+v*n*u-t*y*u-a*n*m+t*o*m)*w,e[11]=(h*o*s-a*f*s-h*n*u+t*f*u+a*n*g-t*o*g)*w,e[12]=I*w,e[13]=(h*y*r-v*f*r+v*n*d-t*y*d-h*n*p+t*f*p)*w,e[14]=(v*o*r-a*y*r-v*n*c+t*y*c+a*n*p-t*o*p)*w,e[15]=(a*f*r-h*o*r+h*n*c-t*f*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,f=o+o,d=s*u,g=s*h,v=s*f,y=a*h,p=a*f,m=o*f,R=c*u,E=c*h,A=c*f,I=n.x,U=n.y,w=n.z;return r[0]=(1-(y+m))*I,r[1]=(g+A)*I,r[2]=(v-E)*I,r[3]=0,r[4]=(g-A)*U,r[5]=(1-(d+m))*U,r[6]=(p+R)*U,r[7]=0,r[8]=(v+E)*w,r[9]=(p-R)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const a=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/s,h=1/a,f=1/o;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,t.setFromRotationMatrix(Bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=mi){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let g,v;if(o===mi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Lo)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=mi){const c=this.elements,u=1/(t-e),h=1/(n-r),f=1/(a-s),d=(t+e)*u,g=(n+r)*h;let v,y;if(o===mi)v=(a+s)*f,y=-2*f;else if(o===Lo)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=y,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Tr=new F,Bn=new Ot,Hg=new F(0,0,0),Gg=new F(1,1,1),Ei=new F,to=new F,Mn=new F,Fu=new Ot,Bu=new sr;class gi{constructor(e=0,t=0,n=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vg=0;const zu=new F,Ar=new sr,li=new Ot,no=new F,as=new F,Wg=new F,Xg=new sr,ku=new F(1,0,0),Hu=new F(0,1,0),Gu=new F(0,0,1),qg={type:"added"},Yg={type:"removed"},wa={type:"childadded",child:null},Ra={type:"childremoved",child:null};class rn extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new F,t=new gi,n=new sr,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new st}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(as,no,this.up):li.lookAt(no,as,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(li),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qg),wa.child=e,this.dispatchEvent(wa),wa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new F(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new F,ui=new F,Ca=new F,hi=new F,wr=new F,Rr=new F,Vu=new F,La=new F,Pa=new F,Ua=new F;class Jn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zn.subVectors(r,t),ui.subVectors(n,t),Ca.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(ui),c=zn.dot(Ca),u=ui.dot(ui),h=ui.dot(Ca),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,g=(u*c-o*h)*d,v=(a*h-o*c)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hi.x),c.addScaledVector(a,hi.y),c.addScaledVector(o,hi.z),c)}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),ui.subVectors(e,t),zn.cross(ui).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;wr.subVectors(r,n),Rr.subVectors(s,n),La.subVectors(e,n);const c=wr.dot(La),u=Rr.dot(La);if(c<=0&&u<=0)return t.copy(n);Pa.subVectors(e,r);const h=wr.dot(Pa),f=Rr.dot(Pa);if(h>=0&&f<=h)return t.copy(r);const d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(wr,a);Ua.subVectors(e,s);const g=wr.dot(Ua),v=Rr.dot(Ua);if(v>=0&&g<=v)return t.copy(s);const y=g*u-c*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Rr,o);const p=h*v-g*f;if(p<=0&&f-h>=0&&g-v>=0)return Vu.subVectors(s,r),o=(f-h)/(f-h+(g-v)),t.copy(r).addScaledVector(Vu,o);const m=1/(p+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(wr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Mt.workingColorSpace){if(e=vc(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Da(a,s,e+1/3),this.g=Da(a,s,e),this.b=Da(a,s,e-1/3)}return Mt.toWorkingColorSpace(this,r),this}setStyle(e,t=Yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const n=of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Mt.fromWorkingColorSpace(en.copy(this),e),Math.round(jt(en.r*255,0,255))*65536+Math.round(jt(en.g*255,0,255))*256+Math.round(jt(en.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(en.copy(this),t);const n=en.r,r=en.g,s=en.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Yn){Mt.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,r=en.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(io);const n=ps(bi.h,io.h,t),r=ps(bi.s,io.s,t),s=ps(bi.l,io.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new vt;vt.NAMES=of;let $g=0;class Bo extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Vr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==nc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Do extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new F,ro=new Re;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ig("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class af extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cf extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jg=0;const Cn=new Ot,Ia=new rn,Cr=new F,Sn=new As,cs=new As,$t=new F;class Vn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?cf:af)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cs.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Sn.min,cs.min),Sn.expandByPoint($t),$t.addVectors(Sn.max,cs.max),Sn.expandByPoint($t)):(Sn.expandByPoint(cs.min),Sn.expandByPoint(cs.max))}Sn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)$t.fromBufferAttribute(o,u),c&&(Cr.fromBufferAttribute(e,u),$t.add(Cr)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new F,c[z]=new F;const u=new F,h=new F,f=new F,d=new Re,g=new Re,v=new Re,y=new F,p=new F;function m(z,Q,M){u.fromBufferAttribute(n,z),h.fromBufferAttribute(n,Q),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,z),g.fromBufferAttribute(s,Q),v.fromBufferAttribute(s,M),h.sub(u),f.sub(u),g.sub(d),v.sub(d);const C=1/(g.x*v.y-v.x*g.y);isFinite(C)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(C),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(C),o[z].add(y),o[Q].add(y),o[M].add(y),c[z].add(p),c[Q].add(p),c[M].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let z=0,Q=R.length;z<Q;++z){const M=R[z],C=M.start,K=M.count;for(let ee=C,O=C+K;ee<O;ee+=3)m(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const E=new F,A=new F,I=new F,U=new F;function w(z){I.fromBufferAttribute(r,z),U.copy(I);const Q=o[z];E.copy(Q),E.sub(I.multiplyScalar(I.dot(Q))).normalize(),A.crossVectors(U,Q);const C=A.dot(c[z])<0?-1:1;a.setXYZW(z,E.x,E.y,E.z,C)}for(let z=0,Q=R.length;z<Q;++z){const M=R[z],C=M.start,K=M.count;for(let ee=C,O=C+K;ee<O;ee+=3)w(e.getX(ee+0)),w(e.getX(ee+1)),w(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,u=new F,h=new F,f=new F;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,p),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h);let g=0,v=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?g=c[y]*o.data.stride+o.offset:g=c[y]*h;for(let m=0;m<h;m++)d[v++]=u[g++]}return new Qn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const d=u[h],g=e(d,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new Ot,Yi=new rf,so=new xc,Xu=new F,Lr=new F,Pr=new F,Ur=new F,Na=new F,oo=new F,ao=new Re,co=new Re,lo=new Re,qu=new F,Yu=new F,$u=new F,uo=new F,ho=new F;class Vt extends rn{constructor(e=new Vn,t=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){oo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(Na.fromBufferAttribute(f,e),a?oo.addScaledVector(Na,h):oo.addScaledVector(Na.sub(t),h))}t.add(oo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(so.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(so,Xu)===null||Yi.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const p=d[v],m=a[p.materialIndex],R=Math.max(p.start,g.start),E=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let A=R,I=E;A<I;A+=3){const U=o.getX(A),w=o.getX(A+1),z=o.getX(A+2);r=fo(this,m,e,n,u,h,f,U,w,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let p=v,m=y;p<m;p+=3){const R=o.getX(p),E=o.getX(p+1),A=o.getX(p+2);r=fo(this,a,e,n,u,h,f,R,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const p=d[v],m=a[p.materialIndex],R=Math.max(p.start,g.start),E=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let A=R,I=E;A<I;A+=3){const U=A,w=A+1,z=A+2;r=fo(this,m,e,n,u,h,f,U,w,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let p=v,m=y;p<m;p+=3){const R=p,E=p+1,A=p+2;r=fo(this,a,e,n,u,h,f,R,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Kg(i,e,t,n,r,s,a,o){let c;if(e.side===_n?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Di,o),c===null)return null;ho.copy(o),ho.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ho);return u<t.near||u>t.far?null:{distance:u,point:ho.clone(),object:i}}function fo(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Lr),i.getVertexPosition(c,Pr),i.getVertexPosition(u,Ur);const h=Kg(i,e,t,n,Lr,Pr,Ur,uo);if(h){r&&(ao.fromBufferAttribute(r,o),co.fromBufferAttribute(r,c),lo.fromBufferAttribute(r,u),h.uv=Jn.getInterpolation(uo,Lr,Pr,Ur,ao,co,lo,new Re)),s&&(ao.fromBufferAttribute(s,o),co.fromBufferAttribute(s,c),lo.fromBufferAttribute(s,u),h.uv1=Jn.getInterpolation(uo,Lr,Pr,Ur,ao,co,lo,new Re)),a&&(qu.fromBufferAttribute(a,o),Yu.fromBufferAttribute(a,c),$u.fromBufferAttribute(a,u),h.normal=Jn.getInterpolation(uo,Lr,Pr,Ur,qu,Yu,$u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new F,materialIndex:0};Jn.getNormal(Lr,Pr,Ur,f.normal),h.face=f}return h}class ws extends Vn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function v(y,p,m,R,E,A,I,U,w,z,Q){const M=A/w,C=I/z,K=A/2,ee=I/2,O=U/2,X=w+1,Y=z+1;let se=0,D=0;const re=new F;for(let ce=0;ce<Y;ce++){const pe=ce*C-ee;for(let ye=0;ye<X;ye++){const ke=ye*M-K;re[y]=ke*R,re[p]=pe*E,re[m]=O,u.push(re.x,re.y,re.z),re[y]=0,re[p]=0,re[m]=U>0?1:-1,h.push(re.x,re.y,re.z),f.push(ye/w),f.push(1-ce/z),se+=1}}for(let ce=0;ce<z;ce++)for(let pe=0;pe<w;pe++){const ye=d+pe+X*ce,ke=d+pe+X*(ce+1),j=d+(pe+1)+X*(ce+1),le=d+(pe+1)+X*ce;c.push(ye,ke,le),c.push(ke,j,le),D+=6}o.addGroup(g,D,Q),g+=D,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=$r(i[t]);for(const r in n)e[r]=n[r]}return e}function Zg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lf(i){return i.getRenderTarget()===null?i.outputColorSpace:Mt.workingColorSpace}const Jg={clone:$r,merge:un};var Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=e_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uf extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new F,ju=new Re,Ku=new Re;class Ln extends uf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,ju,Ku),t.subVectors(Ku,ju)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Ir=1;class t_ extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(Dr,Ir,e,t);r.layers=this.layers,this.add(r);const s=new Ln(Dr,Ir,e,t);s.layers=this.layers,this.add(s);const a=new Ln(Dr,Ir,e,t);a.layers=this.layers,this.add(a);const o=new Ln(Dr,Ir,e,t);o.layers=this.layers,this.add(o);const c=new Ln(Dr,Ir,e,t);c.layers=this.layers,this.add(c);const u=new Ln(Dr,Ir,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class hf extends dn{constructor(e,t,n,r,s,a,o,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n_ extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new hf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Li});s.uniforms.tEquirect.value=t;const a=new Vt(r,s),o=t.minFilter;return t.minFilter===er&&(t.minFilter=mn),new t_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Oa=new F,i_=new F,r_=new st;class Ai{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Oa.subVectors(n,t).cross(i_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||r_.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new xc,po=new F;class yc{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],v=r[9],y=r[10],p=r[11],m=r[12],R=r[13],E=r[14],A=r[15];if(n[0].setComponents(c-s,d-u,p-g,A-m).normalize(),n[1].setComponents(c+s,d+u,p+g,A+m).normalize(),n[2].setComponents(c+a,d+h,p+v,A+R).normalize(),n[3].setComponents(c-a,d-h,p-v,A-R).normalize(),n[4].setComponents(c-o,d-f,p-y,A-E).normalize(),t===mi)n[5].setComponents(c+o,d+f,p+y,A+E).normalize();else if(t===Lo)n[5].setComponents(o,f,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(po.x=r.normal.x>0?e.max.x:e.min.x,po.y=r.normal.y>0?e.max.y:e.min.y,po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function s_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,h){const f=u.array,d=u.usage,g=f.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,f,d),u.onUploadCallback();let y;if(f instanceof Float32Array)y=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=i.SHORT;else if(f instanceof Uint32Array)y=i.UNSIGNED_INT;else if(f instanceof Int32Array)y=i.INT;else if(f instanceof Int8Array)y=i.BYTE;else if(f instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,h,f){const d=h.array,g=h._updateRange,v=h.updateRanges;if(i.bindBuffer(f,u),g.count===-1&&v.length===0&&i.bufferSubData(f,0,d),v.length!==0){for(let y=0,p=v.length;y<p;y++){const m=v[y];t?i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);if(f===void 0)n.set(u,r(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,h),f.version=u.version}}return{get:a,remove:o,update:c}}class Rs extends Vn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,f=e/o,d=t/c,g=[],v=[],y=[],p=[];for(let m=0;m<h;m++){const R=m*d-a;for(let E=0;E<u;E++){const A=E*f-s;v.push(A,-R,0),y.push(0,0,1),p.push(E/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let R=0;R<o;R++){const E=R+u*m,A=R+u*(m+1),I=R+1+u*(m+1),U=R+1+u*m;g.push(E,A,U),g.push(A,I,U)}this.setIndex(g),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a_=`#ifdef USE_ALPHAHASH
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
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f_=`#ifdef USE_AOMAP
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
#endif`,d_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`#ifdef USE_BATCHING
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
#endif`,m_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,__=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C_=`#define PI 3.141592653589793
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
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P_=`vec3 transformedNormal = objectNormal;
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
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",F_=`
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
}`,B_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
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
}`,$_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,j_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
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
#endif`,Q_=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
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
#endif`,s0=`struct PhysicalMaterial {
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
}`,o0=`
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X0=`float getShadowMask() {
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
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
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
}`,dv=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,xv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,bv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,wv=`#define NORMAL
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
}`,Rv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Lv=`#define STANDARD
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
}`,Pv=`#define STANDARD
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
}`,Uv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Fv=`uniform vec3 color;
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
}`,Bv=`uniform float rotation;
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
}`,zv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:o_,alphahash_pars_fragment:a_,alphamap_fragment:c_,alphamap_pars_fragment:l_,alphatest_fragment:u_,alphatest_pars_fragment:h_,aomap_fragment:f_,aomap_pars_fragment:d_,batching_pars_vertex:p_,batching_vertex:m_,begin_vertex:g_,beginnormal_vertex:__,bsdfs:v_,iridescence_fragment:x_,bumpmap_pars_fragment:y_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:S_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:b_,color_fragment:T_,color_pars_fragment:A_,color_pars_vertex:w_,color_vertex:R_,common:C_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:P_,displacementmap_pars_vertex:U_,displacementmap_vertex:D_,emissivemap_fragment:I_,emissivemap_pars_fragment:N_,colorspace_fragment:O_,colorspace_pars_fragment:F_,envmap_fragment:B_,envmap_common_pars_fragment:z_,envmap_pars_fragment:k_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:Q_,envmap_vertex:G_,fog_vertex:V_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:q_,gradientmap_pars_fragment:Y_,lightmap_fragment:$_,lightmap_pars_fragment:j_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:Z_,lights_pars_begin:J_,lights_toon_fragment:e0,lights_toon_pars_fragment:t0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:r0,lights_physical_pars_fragment:s0,lights_fragment_begin:o0,lights_fragment_maps:a0,lights_fragment_end:c0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:f0,map_fragment:d0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:v0,morphinstance_vertex:x0,morphcolor_vertex:y0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:E0,normal_fragment_begin:b0,normal_fragment_maps:T0,normal_pars_fragment:A0,normal_pars_vertex:w0,normal_vertex:R0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:D0,opaque_fragment:I0,packing:N0,premultiplied_alpha_fragment:O0,project_vertex:F0,dithering_fragment:B0,dithering_pars_fragment:z0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:V0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:q0,skinning_pars_vertex:Y0,skinning_vertex:$0,skinnormal_vertex:j0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:rv,worldpos_vertex:sv,background_vert:ov,background_frag:av,backgroundCube_vert:cv,backgroundCube_frag:lv,cube_vert:uv,cube_frag:hv,depth_vert:fv,depth_frag:dv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:yv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:Ev,meshmatcap_vert:bv,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:wv,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Lv,meshphysical_frag:Pv,meshtoon_vert:Uv,meshtoon_frag:Dv,points_vert:Iv,points_frag:Nv,shadow_vert:Ov,shadow_frag:Fv,sprite_vert:Bv,sprite_frag:zv},ve={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},$n={basic:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new vt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:un([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:un([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new vt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:un([ve.points,ve.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:un([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:un([ve.common,ve.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:un([ve.sprite,ve.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:un([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:un([ve.lights,ve.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};$n.physical={uniforms:un([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const mo={r:0,b:0,g:0},ji=new gi,kv=new Ot;function Hv(i,e,t,n,r,s,a){const o=new vt(0);let c=s===!0?0:1,u,h,f=null,d=0,g=null;function v(p,m){let R=!1,E=m.isScene===!0?m.background:null;E&&E.isTexture&&(E=(m.backgroundBlurriness>0?t:e).get(E)),E===null?y(o,c):E&&E.isColor&&(y(E,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Oo)?(h===void 0&&(h=new Vt(new ws(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:$r($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,U,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ji.copy(m.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(ji)),h.material.toneMapped=Mt.getTransfer(E.colorSpace)!==Ct,(f!==E||d!==E.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,g=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Vt(new Rs(2,2),new Ii({name:"BackgroundMaterial",uniforms:$r($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Mt.getTransfer(E.colorSpace)!==Ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,g=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function y(p,m){p.getRGB(mo,lf(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),c=m,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(o,c)},render:v}}function Gv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let u=c,h=!1;function f(O,X,Y,se,D){let re=!1;if(a){const ce=y(se,Y,X);u!==ce&&(u=ce,g(u.object)),re=m(O,se,Y,D),re&&R(O,se,Y,D)}else{const ce=X.wireframe===!0;(u.geometry!==se.id||u.program!==Y.id||u.wireframe!==ce)&&(u.geometry=se.id,u.program=Y.id,u.wireframe=ce,re=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,z(O,X,Y,se),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function y(O,X,Y){const se=Y.wireframe===!0;let D=o[O.id];D===void 0&&(D={},o[O.id]=D);let re=D[X.id];re===void 0&&(re={},D[X.id]=re);let ce=re[se];return ce===void 0&&(ce=p(d()),re[se]=ce),ce}function p(O){const X=[],Y=[],se=[];for(let D=0;D<r;D++)X[D]=0,Y[D]=0,se[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:se,object:O,attributes:{},index:null}}function m(O,X,Y,se){const D=u.attributes,re=X.attributes;let ce=0;const pe=Y.getAttributes();for(const ye in pe)if(pe[ye].location>=0){const j=D[ye];let le=re[ye];if(le===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;ce++}return u.attributesNum!==ce||u.index!==se}function R(O,X,Y,se){const D={},re=X.attributes;let ce=0;const pe=Y.getAttributes();for(const ye in pe)if(pe[ye].location>=0){let j=re[ye];j===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));const le={};le.attribute=j,j&&j.data&&(le.data=j.data),D[ye]=le,ce++}u.attributes=D,u.attributesNum=ce,u.index=se}function E(){const O=u.newAttributes;for(let X=0,Y=O.length;X<Y;X++)O[X]=0}function A(O){I(O,0)}function I(O,X){const Y=u.newAttributes,se=u.enabledAttributes,D=u.attributeDivisors;Y[O]=1,se[O]===0&&(i.enableVertexAttribArray(O),se[O]=1),D[O]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,X),D[O]=X)}function U(){const O=u.newAttributes,X=u.enabledAttributes;for(let Y=0,se=X.length;Y<se;Y++)X[Y]!==O[Y]&&(i.disableVertexAttribArray(Y),X[Y]=0)}function w(O,X,Y,se,D,re,ce){ce===!0?i.vertexAttribIPointer(O,X,Y,D,re):i.vertexAttribPointer(O,X,Y,se,D,re)}function z(O,X,Y,se){if(n.isWebGL2===!1&&(O.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const D=se.attributes,re=Y.getAttributes(),ce=X.defaultAttributeValues;for(const pe in re){const ye=re[pe];if(ye.location>=0){let ke=D[pe];if(ke===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(ke=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(ke=O.instanceColor)),ke!==void 0){const j=ke.normalized,le=ke.itemSize,te=t.get(ke);if(te===void 0)continue;const Be=te.buffer,Ue=te.type,be=te.bytesPerElement,ut=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||ke.gpuType===Xh);if(ke.isInterleavedBufferAttribute){const Oe=ke.data,G=Oe.stride,Rt=ke.offset;if(Oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ye.locationSize;Ce++)I(ye.location+Ce,Oe.meshPerAttribute);O.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Ce=0;Ce<ye.locationSize;Ce++)A(ye.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ce=0;Ce<ye.locationSize;Ce++)w(ye.location+Ce,le/ye.locationSize,Ue,j,G*be,(Rt+le/ye.locationSize*Ce)*be,ut)}else{if(ke.isInstancedBufferAttribute){for(let Oe=0;Oe<ye.locationSize;Oe++)I(ye.location+Oe,ke.meshPerAttribute);O.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Oe=0;Oe<ye.locationSize;Oe++)A(ye.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Oe=0;Oe<ye.locationSize;Oe++)w(ye.location+Oe,le/ye.locationSize,Ue,j,le*be,le/ye.locationSize*Oe*be,ut)}}else if(ce!==void 0){const j=ce[pe];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ye.location,j);break;case 3:i.vertexAttrib3fv(ye.location,j);break;case 4:i.vertexAttrib4fv(ye.location,j);break;default:i.vertexAttrib1fv(ye.location,j)}}}}U()}function Q(){K();for(const O in o){const X=o[O];for(const Y in X){const se=X[Y];for(const D in se)v(se[D].object),delete se[D];delete X[Y]}delete o[O]}}function M(O){if(o[O.id]===void 0)return;const X=o[O.id];for(const Y in X){const se=X[Y];for(const D in se)v(se[D].object),delete se[D];delete X[Y]}delete o[O.id]}function C(O){for(const X in o){const Y=o[X];if(Y[O.id]===void 0)continue;const se=Y[O.id];for(const D in se)v(se[D].object),delete se[D];delete Y[O.id]}}function K(){ee(),h=!0,u!==c&&(u=c,g(u.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:K,resetDefaultState:ee,dispose:Q,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:A,disableUnusedAttributes:U}}function Vv(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function o(h,f){i.drawArrays(s,h,f),t.update(f,s,1)}function c(h,f,d){if(d===0)return;let g,v;if(r)g=i,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,h,f,d),t.update(f,s,d)}function u(h,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(h[v],f[v]);else{g.multiDrawArraysWEBGL(s,h,0,f,0,d);let v=0;for(let y=0;y<d;y++)v+=f[y];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Wv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,A=a||e.has("OES_texture_float"),I=E&&A,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:R,vertexTextures:E,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:U}}function Xv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ai,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||r;return r=d,n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,g){const v=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?h(null):u();else{const R=s?0:n,E=R*4;let A=m.clippingState||null;c.value=A,A=h(v,d,E,g);for(let I=0;I!==E;++I)A[I]=t[I];m.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,g,v){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=c.value,v!==!0||p===null){const m=g+y*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,A=g;E!==y;++E,A+=4)a.copy(f[E]).applyMatrix4(R,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function qv(i){let e=new WeakMap;function t(a,o){return o===ic?a.mapping=Xr:o===rc&&(a.mapping=qr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ic||o===rc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new n_(c.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class df extends uf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zr=4,Zu=[.125,.215,.35,.446,.526,.582],Qi=20,Fa=new df,Ju=new vt;let Ba=null,za=0,ka=0;const Zi=(1+Math.sqrt(5))/2,Nr=1/Zi,Qu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Zi,Nr),new F(0,Zi,-Nr),new F(Nr,0,Zi),new F(-Nr,0,Zi),new F(Zi,Nr,0),new F(-Zi,Nr,0)];class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,ka),e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Es,format:Gn,colorSpace:Ni,depthBuffer:!1},r=th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(s)),this._blurMaterial=$v(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,r){const o=new Ln(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ju),h.toneMapping=Pi,h.autoClear=!1;const g=new Do({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),v=new Vt(new ws,g);let y=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,y=!0):(g.color.copy(Ju),y=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(o.up.set(0,c[m],0),o.lookAt(u[m],0,0)):R===1?(o.up.set(0,0,c[m]),o.lookAt(0,u[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,u[m]));const E=this._cubeSize;go(r,R*E,m>2?E:0,E,E),h.setRenderTarget(r),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qu[(r-1)%Qu.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Vt(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Qi-1),y=s/v,p=isFinite(s)?1+Math.floor(h*y):Qi;p>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const m=[];let R=0;for(let w=0;w<Qi;++w){const z=w/y,Q=Math.exp(-z*z/2);m.push(Q),w===0?R+=Q:w<p&&(R+=2*Q)}for(let w=0;w<m.length;w++)m[w]=m[w]/R;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-n;const A=this._sizeLods[r],I=3*A*(r>E-zr?r-E+zr:0),U=4*(this._cubeSize-A);go(t,I,U,3*A,2*A),c.setRenderTarget(t),c.render(f,Fa)}}function Yv(i){const e=[],t=[],n=[];let r=i;const s=i-zr+1+Zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-zr?c=Zu[a-i+zr-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,y=3,p=2,m=1,R=new Float32Array(y*v*g),E=new Float32Array(p*v*g),A=new Float32Array(m*v*g);for(let U=0;U<g;U++){const w=U%3*2/3-1,z=U>2?0:-1,Q=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];R.set(Q,y*v*U),E.set(d,p*v*U);const M=[U,U,U,U,U,U];A.set(M,m*v*U)}const I=new Vn;I.setAttribute("position",new Qn(R,y)),I.setAttribute("uv",new Qn(E,p)),I.setAttribute("faceIndex",new Qn(A,m)),e.push(I),r>zr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function th(i,e,t){const n=new rr(i,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $v(i,e,t){const n=new Float32Array(Qi),r=new F(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function nh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ih(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function jv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===ic||c===rc,h=c===Xr||c===qr;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new eh(i)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new eh(i));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Zv(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let p=0,m=y.length;p<m;p++)e.remove(y[p])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const y=g[v];for(let p=0,m=y.length;p<m;p++)e.update(y[p],i.ARRAY_BUFFER)}}function u(f){const d=[],g=f.index,v=f.attributes.position;let y=0;if(g!==null){const R=g.array;y=g.version;for(let E=0,A=R.length;E<A;E+=3){const I=R[E+0],U=R[E+1],w=R[E+2];d.push(I,U,U,w,w,I)}}else if(v!==void 0){const R=v.array;y=v.version;for(let E=0,A=R.length/3-1;E<A;E+=3){const I=E+0,U=E+1,w=E+2;d.push(I,U,U,w,w,I)}}else return;const p=new(Qh(d)?cf:af)(d,1);p.version=y;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function h(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Jv(i,e,t,n){const r=n.isWebGL2;let s;function a(g){s=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,v){i.drawElements(s,v,o,g*c),t.update(v,s,1)}function f(g,v,y){if(y===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,v,o,g*c,y),t.update(v,s,y)}function d(g,v,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<y;m++)this.render(g[m]/c,v[m]);else{p.multiDrawElementsWEBGL(s,v,0,o,g,0,y);let m=0;for(let R=0;R<y;R++)m+=v[R];t.update(m,s,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Qv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ex(i,e){return i[0]-e[0]}function tx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function nx(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Kt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let p=s.get(h);if(p===void 0||p.count!==y){let ee=function(){C.dispose(),s.delete(h),h.removeEventListener("dispose",ee)};var g=ee;p!==void 0&&p.texture.dispose();const m=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;m===!0&&(w=1),R===!0&&(w=2),E===!0&&(w=3);let z=h.attributes.position.count*w,Q=1;z>e.maxTextureSize&&(Q=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const M=new Float32Array(z*Q*4*y),C=new nf(M,z,Q,y);C.type=pi,C.needsUpdate=!0;const K=w*4;for(let O=0;O<y;O++){const X=A[O],Y=I[O],se=U[O],D=z*Q*4*O;for(let re=0;re<X.count;re++){const ce=re*K;m===!0&&(a.fromBufferAttribute(X,re),M[D+ce+0]=a.x,M[D+ce+1]=a.y,M[D+ce+2]=a.z,M[D+ce+3]=0),R===!0&&(a.fromBufferAttribute(Y,re),M[D+ce+4]=a.x,M[D+ce+5]=a.y,M[D+ce+6]=a.z,M[D+ce+7]=0),E===!0&&(a.fromBufferAttribute(se,re),M[D+ce+8]=a.x,M[D+ce+9]=a.y,M[D+ce+10]=a.z,M[D+ce+11]=se.itemSize===4?a.w:1)}}p={count:y,texture:C,size:new Re(z,Q)},s.set(h,p),h.addEventListener("dispose",ee)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let m=0;for(let E=0;E<d.length;E++)m+=d[E];const R=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",R),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let y=n[h.id];if(y===void 0||y.length!==v){y=[];for(let A=0;A<v;A++)y[A]=[A,0];n[h.id]=y}for(let A=0;A<v;A++){const I=y[A];I[0]=A,I[1]=d[A]}y.sort(tx);for(let A=0;A<8;A++)A<v&&y[A][1]?(o[A][0]=y[A][0],o[A][1]=y[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(ex);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let R=0;for(let A=0;A<8;A++){const I=o[A],U=I[0],w=I[1];U!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+A)!==p[U]&&h.setAttribute("morphTarget"+A,p[U]),m&&h.getAttribute("morphNormal"+A)!==m[U]&&h.setAttribute("morphNormal"+A,m[U]),r[A]=w,R+=w):(p&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),m&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),r[A]=0)}const E=h.morphTargetsRelative?1:1-R;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function ix(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class pf extends dn{constructor(e,t,n,r,s,a,o,c,u,h){if(h=h!==void 0?h:ir,h!==ir&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ir&&(n=Ci),n===void 0&&h===Yr&&(n=nr),super(null,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mf=new dn,gf=new pf(1,1);gf.compareFunction=Jh;const _f=new nf,vf=new zg,xf=new hf,rh=[],sh=[],oh=new Float32Array(16),ah=new Float32Array(9),ch=new Float32Array(4);function Kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=rh[r];if(s===void 0&&(s=new Float32Array(r),rh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zo(i,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function cx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),qt(t,n)}}function lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),qt(t,n)}}function ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),qt(t,n)}}function hx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?gf:mf;t.setTexture2D(e||s,r)}function yx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vf,r)}function Mx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xf,r)}function Sx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_f,r)}function Ex(i){switch(i){case 5126:return rx;case 35664:return sx;case 35665:return ox;case 35666:return ax;case 35674:return cx;case 35675:return lx;case 35676:return ux;case 5124:case 35670:return hx;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function bx(i,e){i.uniform1fv(this.addr,e)}function Tx(i,e){const t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ax(i,e){const t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function wx(i,e){const t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function Rx(i,e){const t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cx(i,e){const t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lx(i,e){const t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Px(i,e){i.uniform1iv(this.addr,e)}function Ux(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Ix(i,e){i.uniform4iv(this.addr,e)}function Nx(i,e){i.uniform1uiv(this.addr,e)}function Ox(i,e){i.uniform2uiv(this.addr,e)}function Fx(i,e){i.uniform3uiv(this.addr,e)}function Bx(i,e){i.uniform4uiv(this.addr,e)}function zx(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||mf,s[a])}function kx(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vf,s[a])}function Hx(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||xf,s[a])}function Gx(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||_f,s[a])}function Vx(i){switch(i){case 5126:return bx;case 35664:return Tx;case 35665:return Ax;case 35666:return wx;case 35674:return Rx;case 35675:return Cx;case 35676:return Lx;case 5124:case 35670:return Px;case 35667:case 35671:return Ux;case 35668:case 35672:return Dx;case 35669:case 35673:return Ix;case 5125:return Nx;case 36294:return Ox;case 36295:return Fx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}class Wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ex(t.type)}}class Xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vx(t.type)}}class qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function lh(i,e){i.seq.push(e),i.map[e.id]=e}function Yx(i,e,t){const n=i.name,r=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),a=Ha.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){lh(t,u===void 0?new Wx(o,i,e):new Xx(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new qx(o),lh(t,f)),t=f}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Yx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function uh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $x=37297;let jx=0;function Kx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Zx(i){const e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(i);let n;switch(e===t?n="":e===Co&&t===Ro?n="LinearDisplayP3ToLinearSRGB":e===Ro&&t===Co&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case Fo:return[n,"LinearTransferOETF"];case Yn:case _c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function hh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Kx(i.getShaderSource(e),a)}else return r}function Jx(i,e){const t=Zx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qx(i,e){let t;switch(e){case qm:t="Linear";break;case Ym:t="Reinhard";break;case $m:t="OptimizedCineon";break;case jm:t="ACESFilmic";break;case Zm:t="AgX";break;case Jm:t="Neutral";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ey(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function kr(i){return i!==""}function fh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(ry,oy)}const sy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oy(i,e){let t=rt[e];if(t===void 0){const n=sy.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(ay,cy)}function cy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ly(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ym?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function uy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xr:case qr:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function fy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Wm:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function dy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function py(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ly(t),u=uy(t),h=hy(t),f=fy(t),d=dy(t),g=t.isWebGL2?"":ey(t),v=ty(t),y=ny(s),p=r.createProgram();let m,R,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(kr).join(`
`),m.length>0&&(m+=`
`),R=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(kr).join(`
`),R.length>0&&(R+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),R=[g,mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=lc(a),a=fh(a,t),a=dh(a,t),o=lc(o),o=fh(o,t),o=dh(o,t),a=ph(a),o=ph(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const A=E+m+a,I=E+R+o,U=uh(r,r.VERTEX_SHADER,A),w=uh(r,r.FRAGMENT_SHADER,I);r.attachShader(p,U),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function z(K){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(U).trim(),X=r.getShaderInfoLog(w).trim();let Y=!0,se=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,U,w);else{const D=hh(r,U,"vertex"),re=hh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+ee+`
`+D+`
`+re)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(O===""||X==="")&&(se=!1);se&&(K.diagnostics={runnable:Y,programLog:ee,vertexShader:{log:O,prefix:m},fragmentShader:{log:X,prefix:R}})}r.deleteShader(U),r.deleteShader(w),Q=new yo(r,p),M=iy(r,p)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,$x)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=U,this.fragmentShader=w,this}let my=0;class gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _y(e),t.set(e,n)),n}}class _y{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}}function vy(i,e,t,n,r,s,a){const o=new sf,c=new gy,u=new Set,h=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,C,K,ee,O){const X=ee.fog,Y=O.geometry,se=M.isMeshStandardMaterial?ee.environment:null,D=(M.isMeshStandardMaterial?t:e).get(M.envMap||se),re=D&&D.mapping===Oo?D.image.height:null,ce=y[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=pe!==void 0?pe.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let j,le,te,Be;if(ce){const ft=$n[ce];j=ft.vertexShader,le=ft.fragmentShader}else j=M.vertexShader,le=M.fragmentShader,c.update(M),te=c.getVertexShaderID(M),Be=c.getFragmentShaderID(M);const Ue=i.getRenderTarget(),be=O.isInstancedMesh===!0,ut=O.isBatchedMesh===!0,Oe=!!M.map,G=!!M.matcap,Rt=!!D,Ce=!!M.aoMap,Ke=!!M.lightMap,Fe=!!M.bumpMap,ot=!!M.normalMap,Ze=!!M.displacementMap,et=!!M.emissiveMap,St=!!M.metalnessMap,L=!!M.roughnessMap,S=M.anisotropy>0,Z=M.clearcoat>0,ne=M.iridescence>0,ue=M.sheen>0,ae=M.transmission>0,ze=S&&!!M.anisotropyMap,Ie=Z&&!!M.clearcoatMap,me=Z&&!!M.clearcoatNormalMap,xe=Z&&!!M.clearcoatRoughnessMap,Xe=ne&&!!M.iridescenceMap,de=ne&&!!M.iridescenceThicknessMap,Pt=ue&&!!M.sheenColorMap,tt=ue&&!!M.sheenRoughnessMap,De=!!M.specularMap,Te=!!M.specularColorMap,Le=!!M.specularIntensityMap,P=ae&&!!M.transmissionMap,ie=ae&&!!M.thicknessMap,we=!!M.gradientMap,N=!!M.alphaMap,fe=M.alphaTest>0,W=!!M.alphaHash,he=!!M.extensions;let _e=Pi;M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(_e=i.toneMapping);const qe={isWebGL2:f,shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:le,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:Be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:ut,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ni,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:G,envMap:Rt,envMapMode:Rt&&D.mapping,envMapCubeUVHeight:re,aoMap:Ce,lightMap:Ke,bumpMap:Fe,normalMap:ot,displacementMap:g&&Ze,emissiveMap:et,normalMapObjectSpace:ot&&M.normalMapType===ug,normalMapTangentSpace:ot&&M.normalMapType===lg,metalnessMap:St,roughnessMap:L,anisotropy:S,anisotropyMap:ze,clearcoat:Z,clearcoatMap:Ie,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:ne,iridescenceMap:Xe,iridescenceThicknessMap:de,sheen:ue,sheenColorMap:Pt,sheenRoughnessMap:tt,specularMap:De,specularColorMap:Te,specularIntensityMap:Le,transmission:ae,transmissionMap:P,thicknessMap:ie,gradientMap:we,opaque:M.transparent===!1&&M.blending===Vr&&M.alphaToCoverage===!1,alphaMap:N,alphaTest:fe,alphaHash:W,combine:M.combine,mapUv:Oe&&p(M.map.channel),aoMapUv:Ce&&p(M.aoMap.channel),lightMapUv:Ke&&p(M.lightMap.channel),bumpMapUv:Fe&&p(M.bumpMap.channel),normalMapUv:ot&&p(M.normalMap.channel),displacementMapUv:Ze&&p(M.displacementMap.channel),emissiveMapUv:et&&p(M.emissiveMap.channel),metalnessMapUv:St&&p(M.metalnessMap.channel),roughnessMapUv:L&&p(M.roughnessMap.channel),anisotropyMapUv:ze&&p(M.anisotropyMap.channel),clearcoatMapUv:Ie&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&p(M.sheenRoughnessMap.channel),specularMapUv:De&&p(M.specularMap.channel),specularColorMapUv:Te&&p(M.specularColorMap.channel),specularIntensityMapUv:Le&&p(M.specularIntensityMap.channel),transmissionMapUv:P&&p(M.transmissionMap.channel),thicknessMapUv:ie&&p(M.thicknessMap.channel),alphaMapUv:N&&p(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ot||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Oe||N),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zn,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=u.has(1),qe.vertexUv2s=u.has(2),qe.vertexUv3s=u.has(3),u.clear(),qe}function R(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)C.push(K),C.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(E(C,M),A(C,M),C.push(i.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function E(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function A(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),M.push(o.mask)}function I(M){const C=y[M.type];let K;if(C){const ee=$n[C];K=Jg.clone(ee.uniforms)}else K=M.uniforms;return K}function U(M,C){let K;for(let ee=0,O=h.length;ee<O;ee++){const X=h[ee];if(X.cacheKey===C){K=X,++K.usedTimes;break}}return K===void 0&&(K=new py(i,C,M,s),h.push(K)),K}function w(M){if(--M.usedTimes===0){const C=h.indexOf(M);h[C]=h[h.length-1],h.pop(),M.destroy()}}function z(M){c.remove(M)}function Q(){c.dispose()}return{getParameters:m,getProgramCacheKey:R,getUniforms:I,acquireProgram:U,releaseProgram:w,releaseShaderCache:z,programs:h,dispose:Q}}function xy(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function yy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _h(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,g,v,y,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:v,renderOrder:f.renderOrder,z:y,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=y,m.group=p),e++,m}function o(f,d,g,v,y,p){const m=a(f,d,g,v,y,p);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):t.push(m)}function c(f,d,g,v,y,p){const m=a(f,d,g,v,y,p);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||yy),n.length>1&&n.sort(d||gh),r.length>1&&r.sort(d||gh)}function h(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function My(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new _h,i.set(n,[a])):r>=s.length?(a=new _h,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new vt};break;case"SpotLight":t={position:new F,direction:new F,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let by=0;function Ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ay(i,e){const t=new Sy,n=Ey(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new F);const s=new F,a=new Ot,o=new Ot;function c(h,f){let d=0,g=0,v=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,p=0,m=0,R=0,E=0,A=0,I=0,U=0,w=0,z=0,Q=0;h.sort(Ty);const M=f===!0?Math.PI:1;for(let K=0,ee=h.length;K<ee;K++){const O=h[K],X=O.color,Y=O.intensity,se=O.distance,D=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=X.r*Y*M,g+=X.g*Y*M,v+=X.b*Y*M;else if(O.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(O.sh.coefficients[re],Y);Q++}else if(O.isDirectionalLight){const re=t.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const ce=O.shadow,pe=n.get(O);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,r.directionalShadow[y]=pe,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=O.shadow.matrix,A++}r.directional[y]=re,y++}else if(O.isSpotLight){const re=t.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy(X).multiplyScalar(Y*M),re.distance=se,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,r.spot[m]=re;const ce=O.shadow;if(O.map&&(r.spotLightMap[w]=O.map,w++,ce.updateMatrices(O),O.castShadow&&z++),r.spotLightMatrix[m]=ce.matrix,O.castShadow){const pe=n.get(O);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,r.spotShadow[m]=pe,r.spotShadowMap[m]=D,U++}m++}else if(O.isRectAreaLight){const re=t.get(O);re.color.copy(X).multiplyScalar(Y),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),r.rectArea[R]=re,R++}else if(O.isPointLight){const re=t.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity*M),re.distance=O.distance,re.decay=O.decay,O.castShadow){const ce=O.shadow,pe=n.get(O);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,pe.shadowCameraNear=ce.camera.near,pe.shadowCameraFar=ce.camera.far,r.pointShadow[p]=pe,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=O.shadow.matrix,I++}r.point[p]=re,p++}else if(O.isHemisphereLight){const re=t.get(O);re.skyColor.copy(O.color).multiplyScalar(Y*M),re.groundColor.copy(O.groundColor).multiplyScalar(Y*M),r.hemi[E]=re,E++}}R>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==y||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==R||C.hemiLength!==E||C.numDirectionalShadows!==A||C.numPointShadows!==I||C.numSpotShadows!==U||C.numSpotMaps!==w||C.numLightProbes!==Q)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=R,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=U+w-z,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=Q,C.directionalLength=y,C.pointLength=p,C.spotLength=m,C.rectAreaLength=R,C.hemiLength=E,C.numDirectionalShadows=A,C.numPointShadows=I,C.numSpotShadows=U,C.numSpotMaps=w,C.numLightProbes=Q,r.version=by++)}function u(h,f){let d=0,g=0,v=0,y=0,p=0;const m=f.matrixWorldInverse;for(let R=0,E=h.length;R<E;R++){const A=h[R];if(A.isDirectionalLight){const I=r.directional[d];I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),d++}else if(A.isSpotLight){const I=r.spot[v];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),v++}else if(A.isRectAreaLight){const I=r.rectArea[y];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),y++}else if(A.isPointLight){const I=r.point[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),g++}else if(A.isHemisphereLight){const I=r.hemi[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(m),p++}}}return{setup:c,setupView:u,state:r}}function vh(i,e){const t=new Ay(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function c(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function wy(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new vh(i,e),t.set(s,[c])):a>=o.length?(c=new vh(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ry extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`;function Uy(i,e,t){let n=new yc;const r=new Re,s=new Re,a=new Kt,o=new Ry({depthPacking:cg}),c=new Cy,u={},h=t.maxTextureSize,f={[Di]:_n,[_n]:Di,[Zn]:Zn},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Ly,fragmentShader:Py}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new Vn;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let m=this.type;this.render=function(U,w,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const Q=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Li),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ee=m!==fi&&this.type===fi,O=m===fi&&this.type!==fi;for(let X=0,Y=U.length;X<Y;X++){const se=U[X],D=se.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const re=D.getFrameExtents();if(r.multiply(re),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,D.mapSize.y=s.y)),D.map===null||ee===!0||O===!0){const pe=this.type!==fi?{minFilter:fn,magFilter:fn}:{};D.map!==null&&D.map.dispose(),D.map=new rr(r.x,r.y,pe),D.map.texture.name=se.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const ce=D.getViewportCount();for(let pe=0;pe<ce;pe++){const ye=D.getViewport(pe);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),K.viewport(a),D.updateMatrices(se,pe),n=D.getFrustum(),A(w,z,D.camera,se,this.type)}D.isPointLightShadow!==!0&&this.type===fi&&R(D,z),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(Q,M,C)};function R(U,w){const z=e.update(y);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new rr(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(w,null,z,d,y,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(w,null,z,g,y,null)}function E(U,w,z,Q){let M=null;const C=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(C!==void 0)M=C;else if(M=z.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=M.uuid,ee=w.uuid;let O=u[K];O===void 0&&(O={},u[K]=O);let X=O[ee];X===void 0&&(X=M.clone(),O[ee]=X,w.addEventListener("dispose",I)),M=X}if(M.visible=w.visible,M.wireframe=w.wireframe,Q===fi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const K=i.properties.get(M);K.light=z}return M}function A(U,w,z,Q,M){if(U.visible===!1)return;if(U.layers.test(w.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&M===fi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const ee=e.update(U),O=U.material;if(Array.isArray(O)){const X=ee.groups;for(let Y=0,se=X.length;Y<se;Y++){const D=X[Y],re=O[D.materialIndex];if(re&&re.visible){const ce=E(U,re,Q,M);U.onBeforeShadow(i,U,w,z,ee,ce,D),i.renderBufferDirect(z,null,ee,ce,U,D),U.onAfterShadow(i,U,w,z,ee,ce,D)}}}else if(O.visible){const X=E(U,O,Q,M);U.onBeforeShadow(i,U,w,z,ee,X,null),i.renderBufferDirect(z,null,ee,X,U,null),U.onAfterShadow(i,U,w,z,ee,X,null)}}const K=U.children;for(let ee=0,O=K.length;ee<O;ee++)A(K[ee],w,z,Q,M)}function I(U){U.target.removeEventListener("dispose",I);for(const z in u){const Q=u[z],M=U.target.uuid;M in Q&&(Q[M].dispose(),delete Q[M])}}}function Dy(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const fe=new Kt;let W=null;const he=new Kt(0,0,0,0);return{setMask:function(_e){W!==_e&&!N&&(i.colorMask(_e,_e,_e,_e),W=_e)},setLocked:function(_e){N=_e},setClear:function(_e,qe,ft,pt,Ut){Ut===!0&&(_e*=pt,qe*=pt,ft*=pt),fe.set(_e,qe,ft,pt),he.equals(fe)===!1&&(i.clearColor(_e,qe,ft,pt),he.copy(fe))},reset:function(){N=!1,W=null,he.set(-1,0,0,0)}}}function s(){let N=!1,fe=null,W=null,he=null;return{setTest:function(_e){_e?be(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!N&&(i.depthMask(_e),fe=_e)},setFunc:function(_e){if(W!==_e){switch(_e){case Fm:i.depthFunc(i.NEVER);break;case Bm:i.depthFunc(i.ALWAYS);break;case zm:i.depthFunc(i.LESS);break;case Ao:i.depthFunc(i.LEQUAL);break;case km:i.depthFunc(i.EQUAL);break;case Hm:i.depthFunc(i.GEQUAL);break;case Gm:i.depthFunc(i.GREATER);break;case Vm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=_e}},setLocked:function(_e){N=_e},setClear:function(_e){he!==_e&&(i.clearDepth(_e),he=_e)},reset:function(){N=!1,fe=null,W=null,he=null}}}function a(){let N=!1,fe=null,W=null,he=null,_e=null,qe=null,ft=null,pt=null,Ut=null;return{setTest:function(ht){N||(ht?be(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!N&&(i.stencilMask(ht),fe=ht)},setFunc:function(ht,Et,zt){(W!==ht||he!==Et||_e!==zt)&&(i.stencilFunc(ht,Et,zt),W=ht,he=Et,_e=zt)},setOp:function(ht,Et,zt){(qe!==ht||ft!==Et||pt!==zt)&&(i.stencilOp(ht,Et,zt),qe=ht,ft=Et,pt=zt)},setLocked:function(ht){N=ht},setClear:function(ht){Ut!==ht&&(i.clearStencil(ht),Ut=ht)},reset:function(){N=!1,fe=null,W=null,he=null,_e=null,qe=null,ft=null,pt=null,Ut=null}}}const o=new r,c=new s,u=new a,h=new WeakMap,f=new WeakMap;let d={},g={},v=new WeakMap,y=[],p=null,m=!1,R=null,E=null,A=null,I=null,U=null,w=null,z=null,Q=new vt(0,0,0),M=0,C=!1,K=null,ee=null,O=null,X=null,Y=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,re=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ce)[1]),D=re>=1):ce.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),D=re>=2);let pe=null,ye={};const ke=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),le=new Kt().fromArray(ke),te=new Kt().fromArray(j);function Be(N,fe,W,he){const _e=new Uint8Array(4),qe=i.createTexture();i.bindTexture(N,qe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<W;ft++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(fe+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return qe}const Ue={};Ue[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),be(i.DEPTH_TEST),c.setFunc(Ao),Ze(!1),et(Zl),be(i.CULL_FACE),Fe(Li);function be(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function ut(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Oe(N,fe){return g[N]!==fe?(i.bindFramebuffer(N,fe),g[N]=fe,n&&(N===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function G(N,fe){let W=y,he=!1;if(N){W=v.get(fe),W===void 0&&(W=[],v.set(fe,W));const _e=N.textures;if(W.length!==_e.length||W[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,ft=_e.length;qe<ft;qe++)W[qe]=i.COLOR_ATTACHMENT0+qe;W.length=_e.length,he=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,he=!0);if(he)if(t.isWebGL2)i.drawBuffers(W);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Rt(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const Ce={[Ji]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[Em]:i.FUNC_REVERSE_SUBTRACT};if(n)Ce[tu]=i.MIN,Ce[nu]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ce[tu]=N.MIN_EXT,Ce[nu]=N.MAX_EXT)}const Ke={[bm]:i.ZERO,[Tm]:i.ONE,[Am]:i.SRC_COLOR,[tc]:i.SRC_ALPHA,[Um]:i.SRC_ALPHA_SATURATE,[Lm]:i.DST_COLOR,[Rm]:i.DST_ALPHA,[wm]:i.ONE_MINUS_SRC_COLOR,[nc]:i.ONE_MINUS_SRC_ALPHA,[Pm]:i.ONE_MINUS_DST_COLOR,[Cm]:i.ONE_MINUS_DST_ALPHA,[Dm]:i.CONSTANT_COLOR,[Im]:i.ONE_MINUS_CONSTANT_COLOR,[Nm]:i.CONSTANT_ALPHA,[Om]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(N,fe,W,he,_e,qe,ft,pt,Ut,ht){if(N===Li){m===!0&&(ut(i.BLEND),m=!1);return}if(m===!1&&(be(i.BLEND),m=!0),N!==Mm){if(N!==R||ht!==C){if((E!==Ji||U!==Ji)&&(i.blendEquation(i.FUNC_ADD),E=Ji,U=Ji),ht)switch(N){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,I=null,w=null,z=null,Q.set(0,0,0),M=0,R=N,C=ht}return}_e=_e||fe,qe=qe||W,ft=ft||he,(fe!==E||_e!==U)&&(i.blendEquationSeparate(Ce[fe],Ce[_e]),E=fe,U=_e),(W!==A||he!==I||qe!==w||ft!==z)&&(i.blendFuncSeparate(Ke[W],Ke[he],Ke[qe],Ke[ft]),A=W,I=he,w=qe,z=ft),(pt.equals(Q)===!1||Ut!==M)&&(i.blendColor(pt.r,pt.g,pt.b,Ut),Q.copy(pt),M=Ut),R=N,C=!1}function ot(N,fe){N.side===Zn?ut(i.CULL_FACE):be(i.CULL_FACE);let W=N.side===_n;fe&&(W=!W),Ze(W),N.blending===Vr&&N.transparent===!1?Fe(Li):Fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),o.setMask(N.colorWrite);const he=N.stencilWrite;u.setTest(he),he&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){K!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),K=N)}function et(N){N!==_m?(be(i.CULL_FACE),N!==ee&&(N===Zl?i.cullFace(i.BACK):N===vm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),ee=N}function St(N){N!==O&&(D&&i.lineWidth(N),O=N)}function L(N,fe,W){N?(be(i.POLYGON_OFFSET_FILL),(X!==fe||Y!==W)&&(i.polygonOffset(fe,W),X=fe,Y=W)):ut(i.POLYGON_OFFSET_FILL)}function S(N){N?be(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Z(N){N===void 0&&(N=i.TEXTURE0+se-1),pe!==N&&(i.activeTexture(N),pe=N)}function ne(N,fe,W){W===void 0&&(pe===null?W=i.TEXTURE0+se-1:W=pe);let he=ye[W];he===void 0&&(he={type:void 0,texture:void 0},ye[W]=he),(he.type!==N||he.texture!==fe)&&(pe!==W&&(i.activeTexture(W),pe=W),i.bindTexture(N,fe||Ue[N]),he.type=N,he.texture=fe)}function ue(){const N=ye[pe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){le.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function Le(N){te.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function P(N,fe){let W=f.get(fe);W===void 0&&(W=new WeakMap,f.set(fe,W));let he=W.get(N);he===void 0&&(he=i.getUniformBlockIndex(fe,N.name),W.set(N,he))}function ie(N,fe){const he=f.get(fe).get(N);h.get(fe)!==he&&(i.uniformBlockBinding(fe,he,N.__bindingPointIndex),h.set(fe,he))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},pe=null,ye={},g={},v=new WeakMap,y=[],p=null,m=!1,R=null,E=null,A=null,I=null,U=null,w=null,z=null,Q=new vt(0,0,0),M=0,C=!1,K=null,ee=null,O=null,X=null,Y=null,le.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:be,disable:ut,bindFramebuffer:Oe,drawBuffers:G,useProgram:Rt,setBlending:Fe,setMaterial:ot,setFlipSided:Ze,setCullFace:et,setLineWidth:St,setPolygonOffset:L,setScissorTest:S,activeTexture:Z,bindTexture:ne,unbindTexture:ue,compressedTexImage2D:ae,compressedTexImage3D:ze,texImage2D:tt,texImage3D:De,updateUBOMapping:P,uniformBlockBinding:ie,texStorage2D:de,texStorage3D:Pt,texSubImage2D:Ie,texSubImage3D:me,compressedTexSubImage2D:xe,compressedTexSubImage3D:Xe,scissor:Te,viewport:Le,reset:we}}function Iy(i,e,t,n,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Re,f=new WeakMap;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,S){return v?new OffscreenCanvas(L,S):Uo("canvas")}function p(L,S,Z,ne){let ue=1;const ae=St(L);if((ae.width>ne||ae.height>ne)&&(ue=ne/Math.max(ae.width,ae.height)),ue<1||S===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ze=S?Po:Math.floor,Ie=ze(ue*ae.width),me=ze(ue*ae.height);d===void 0&&(d=y(Ie,me));const xe=Z?y(Ie,me):d;return xe.width=Ie,xe.height=me,xe.getContext("2d").drawImage(L,0,0,Ie,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Ie+"x"+me+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function m(L){const S=St(L);return cc(S.width)&&cc(S.height)}function R(L){return o?!1:L.wrapS!==Hn||L.wrapT!==Hn||L.minFilter!==fn&&L.minFilter!==mn}function E(L,S){return L.generateMipmaps&&S&&L.minFilter!==fn&&L.minFilter!==mn}function A(L){i.generateMipmap(L)}function I(L,S,Z,ne,ue=!1){if(o===!1)return S;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=S;if(S===i.RED&&(Z===i.FLOAT&&(ae=i.R32F),Z===i.HALF_FLOAT&&(ae=i.R16F),Z===i.UNSIGNED_BYTE&&(ae=i.R8)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ae=i.R8UI),Z===i.UNSIGNED_SHORT&&(ae=i.R16UI),Z===i.UNSIGNED_INT&&(ae=i.R32UI),Z===i.BYTE&&(ae=i.R8I),Z===i.SHORT&&(ae=i.R16I),Z===i.INT&&(ae=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(ae=i.RG32F),Z===i.HALF_FLOAT&&(ae=i.RG16F),Z===i.UNSIGNED_BYTE&&(ae=i.RG8)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ae=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ae=i.RG16UI),Z===i.UNSIGNED_INT&&(ae=i.RG32UI),Z===i.BYTE&&(ae=i.RG8I),Z===i.SHORT&&(ae=i.RG16I),Z===i.INT&&(ae=i.RG32I)),S===i.RGBA){const ze=ue?wo:Mt.getTransfer(ne);Z===i.FLOAT&&(ae=i.RGBA32F),Z===i.HALF_FLOAT&&(ae=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ae=ze===Ct?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function U(L,S,Z){return E(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function w(L){return L===fn||L===iu||L===rs?i.NEAREST:i.LINEAR}function z(L){const S=L.target;S.removeEventListener("dispose",z),M(S),S.isVideoTexture&&f.delete(S)}function Q(L){const S=L.target;S.removeEventListener("dispose",Q),K(S)}function M(L){const S=n.get(L);if(S.__webglInit===void 0)return;const Z=L.source,ne=g.get(Z);if(ne){const ue=ne[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&C(L),Object.keys(ne).length===0&&g.delete(Z)}n.remove(L)}function C(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const Z=L.source,ne=g.get(Z);delete ne[S.__cacheKey],a.memory.textures--}function K(L){const S=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let ue=0;ue<S.__webglFramebuffer[ne].length;ue++)i.deleteFramebuffer(S.__webglFramebuffer[ne][ue]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Z=L.textures;for(let ne=0,ue=Z.length;ne<ue;ne++){const ae=n.get(Z[ne]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(Z[ne])}n.remove(L)}let ee=0;function O(){ee=0}function X(){const L=ee;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),ee+=1,L}function Y(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function se(L,S){const Z=n.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Z,L,S);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function D(L,S){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){te(Z,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function re(L,S){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){te(Z,L,S);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function ce(L,S){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){Be(Z,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}const pe={[sc]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},ye={[fn]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[er]:i.LINEAR_MIPMAP_LINEAR},ke={[hg]:i.NEVER,[_g]:i.ALWAYS,[fg]:i.LESS,[Jh]:i.LEQUAL,[dg]:i.EQUAL,[gg]:i.GEQUAL,[pg]:i.GREATER,[mg]:i.NOTEQUAL};function j(L,S,Z){if(S.type===pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===fa||S.magFilter===rs||S.magFilter===er||S.minFilter===mn||S.minFilter===fa||S.minFilter===rs||S.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(i.texParameteri(L,i.TEXTURE_WRAP_S,pe[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,pe[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,pe[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ye[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ye[S.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Hn||S.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,w(S.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==fn&&S.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ke[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==rs&&S.minFilter!==er||S.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Es&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function le(L,S){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",z));const ne=S.source;let ue=g.get(ne);ue===void 0&&(ue={},g.set(ne,ue));const ae=Y(S);if(ae!==L.__cacheKey){ue[ae]===void 0&&(ue[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ue[ae].usedTimes++;const ze=ue[L.__cacheKey];ze!==void 0&&(ue[L.__cacheKey].usedTimes--,ze.usedTimes===0&&C(S)),L.__cacheKey=ae,L.__webglTexture=ue[ae].texture}return Z}function te(L,S,Z){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const ue=le(L,S),ae=S.source;t.bindTexture(ne,L.__webglTexture,i.TEXTURE0+Z);const ze=n.get(ae);if(ae.version!==ze.__version||ue===!0){t.activeTexture(i.TEXTURE0+Z);const Ie=Mt.getPrimaries(Mt.workingColorSpace),me=S.colorSpace===Ri?null:Mt.getPrimaries(S.colorSpace),xe=S.colorSpace===Ri||Ie===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=R(S)&&m(S.image)===!1;let de=p(S.image,Xe,!1,r.maxTextureSize);de=et(S,de);const Pt=m(de)||o,tt=s.convert(S.format,S.colorSpace);let De=s.convert(S.type),Te=I(S.internalFormat,tt,De,S.colorSpace,S.isVideoTexture);j(ne,S,Pt);let Le;const P=S.mipmaps,ie=o&&S.isVideoTexture!==!0&&Te!==Zh,we=ze.__version===void 0||ue===!0,N=ae.dataReady,fe=U(S,de,Pt);if(S.isDepthTexture)Te=i.DEPTH_COMPONENT,o?S.type===pi?Te=i.DEPTH_COMPONENT32F:S.type===Ci?Te=i.DEPTH_COMPONENT24:S.type===nr?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ir&&Te===i.DEPTH_COMPONENT&&S.type!==gc&&S.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ci,De=s.convert(S.type)),S.format===Yr&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,S.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=nr,De=s.convert(S.type))),we&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Te,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Te,de.width,de.height,0,tt,De,null));else if(S.isDataTexture)if(P.length>0&&Pt){ie&&we&&t.texStorage2D(i.TEXTURE_2D,fe,Te,P[0].width,P[0].height);for(let W=0,he=P.length;W<he;W++)Le=P[W],ie?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,De,Le.data):t.texImage2D(i.TEXTURE_2D,W,Te,Le.width,Le.height,0,tt,De,Le.data);S.generateMipmaps=!1}else ie?(we&&t.texStorage2D(i.TEXTURE_2D,fe,Te,de.width,de.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,tt,De,de.data)):t.texImage2D(i.TEXTURE_2D,0,Te,de.width,de.height,0,tt,De,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Te,P[0].width,P[0].height,de.depth);for(let W=0,he=P.length;W<he;W++)Le=P[W],S.format!==Gn?tt!==null?ie?N&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,de.depth,tt,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Te,Le.width,Le.height,de.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,de.depth,tt,De,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Te,Le.width,Le.height,de.depth,0,tt,De,Le.data)}else{ie&&we&&t.texStorage2D(i.TEXTURE_2D,fe,Te,P[0].width,P[0].height);for(let W=0,he=P.length;W<he;W++)Le=P[W],S.format!==Gn?tt!==null?ie?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Te,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,De,Le.data):t.texImage2D(i.TEXTURE_2D,W,Te,Le.width,Le.height,0,tt,De,Le.data)}else if(S.isDataArrayTexture)ie?(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Te,de.width,de.height,de.depth),N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,tt,De,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,de.width,de.height,de.depth,0,tt,De,de.data);else if(S.isData3DTexture)ie?(we&&t.texStorage3D(i.TEXTURE_3D,fe,Te,de.width,de.height,de.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,tt,De,de.data)):t.texImage3D(i.TEXTURE_3D,0,Te,de.width,de.height,de.depth,0,tt,De,de.data);else if(S.isFramebufferTexture){if(we)if(ie)t.texStorage2D(i.TEXTURE_2D,fe,Te,de.width,de.height);else{let W=de.width,he=de.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,Te,W,he,0,tt,De,null),W>>=1,he>>=1}}else if(P.length>0&&Pt){if(ie&&we){const W=St(P[0]);t.texStorage2D(i.TEXTURE_2D,fe,Te,W.width,W.height)}for(let W=0,he=P.length;W<he;W++)Le=P[W],ie?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,tt,De,Le):t.texImage2D(i.TEXTURE_2D,W,Te,tt,De,Le);S.generateMipmaps=!1}else if(ie){if(we){const W=St(de);t.texStorage2D(i.TEXTURE_2D,fe,Te,W.width,W.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,De,de)}else t.texImage2D(i.TEXTURE_2D,0,Te,tt,De,de);E(S,Pt)&&A(ne),ze.__version=ae.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Be(L,S,Z){if(S.image.length!==6)return;const ne=le(L,S),ue=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);const ae=n.get(ue);if(ue.version!==ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+Z);const ze=Mt.getPrimaries(Mt.workingColorSpace),Ie=S.colorSpace===Ri?null:Mt.getPrimaries(S.colorSpace),me=S.colorSpace===Ri||ze===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,de=[];for(let W=0;W<6;W++)!xe&&!Xe?de[W]=p(S.image[W],!1,!0,r.maxCubemapSize):de[W]=Xe?S.image[W].image:S.image[W],de[W]=et(S,de[W]);const Pt=de[0],tt=m(Pt)||o,De=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),Le=I(S.internalFormat,De,Te,S.colorSpace),P=o&&S.isVideoTexture!==!0,ie=ae.__version===void 0||ne===!0,we=ue.dataReady;let N=U(S,Pt,tt);j(i.TEXTURE_CUBE_MAP,S,tt);let fe;if(xe){P&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Le,Pt.width,Pt.height);for(let W=0;W<6;W++){fe=de[W].mipmaps;for(let he=0;he<fe.length;he++){const _e=fe[he];S.format!==Gn?De!==null?P?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,_e.width,_e.height,De,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,_e.width,_e.height,De,Te,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Le,_e.width,_e.height,0,De,Te,_e.data)}}}else{if(fe=S.mipmaps,P&&ie){fe.length>0&&N++;const W=St(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Le,W.width,W.height)}for(let W=0;W<6;W++)if(Xe){P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,de[W].width,de[W].height,De,Te,de[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,de[W].width,de[W].height,0,De,Te,de[W].data);for(let he=0;he<fe.length;he++){const qe=fe[he].image[W].image;P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,qe.width,qe.height,De,Te,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Le,qe.width,qe.height,0,De,Te,qe.data)}}else{P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,De,Te,de[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,De,Te,de[W]);for(let he=0;he<fe.length;he++){const _e=fe[he];P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,De,Te,_e.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Le,De,Te,_e.image[W])}}}E(S,tt)&&A(i.TEXTURE_CUBE_MAP),ae.__version=ue.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Ue(L,S,Z,ne,ue,ae){const ze=s.convert(Z.format,Z.colorSpace),Ie=s.convert(Z.type),me=I(Z.internalFormat,ze,Ie,Z.colorSpace);if(!n.get(S).__hasExternalTextures){const Xe=Math.max(1,S.width>>ae),de=Math.max(1,S.height>>ae);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ae,me,Xe,de,S.depth,0,ze,Ie,null):t.texImage2D(ue,ae,me,Xe,de,0,ze,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ot(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ue,n.get(Z).__webglTexture,0,Fe(S)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ue,n.get(Z).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(L,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer&&!S.stencilBuffer){let ne=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||ot(S)){const ue=S.depthTexture;ue&&ue.isDepthTexture&&(ue.type===pi?ne=i.DEPTH_COMPONENT32F:ue.type===Ci&&(ne=i.DEPTH_COMPONENT24));const ae=Fe(S);ot(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,ne,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ne,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Fe(S);Z&&ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,S.width,S.height):ot(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const ne=S.textures;for(let ue=0;ue<ne.length;ue++){const ae=ne[ue],ze=s.convert(ae.format,ae.colorSpace),Ie=s.convert(ae.type),me=I(ae.internalFormat,ze,Ie,ae.colorSpace),xe=Fe(S);Z&&ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,me,S.width,S.height):ot(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),se(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,ue=Fe(S);if(S.depthTexture.format===ir)ot(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Yr)ot(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const S=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,L)}else if(Z){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=i.createRenderbuffer(),be(S.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),be(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(L,S,Z){const ne=n.get(L);S!==void 0&&Ue(ne.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Oe(L)}function Rt(L){const S=L.texture,Z=n.get(L),ne=n.get(S);L.addEventListener("dispose",Q);const ue=L.textures,ae=L.isWebGLCubeRenderTarget===!0,ze=ue.length>1,Ie=m(L)||o;if(ze||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,a.memory.textures++),ae){Z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[me]=[];for(let xe=0;xe<S.mipmaps.length;xe++)Z.__webglFramebuffer[me][xe]=i.createFramebuffer()}else Z.__webglFramebuffer[me]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)Z.__webglFramebuffer[me]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ze)if(r.drawBuffers)for(let me=0,xe=ue.length;me<xe;me++){const Xe=n.get(ue[me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&ot(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const xe=ue[me];Z.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[me]);const Xe=s.convert(xe.format,xe.colorSpace),de=s.convert(xe.type),Pt=I(xe.internalFormat,Xe,de,xe.colorSpace,L.isXRRenderTarget===!0),tt=Fe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Pt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Z.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),be(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),j(i.TEXTURE_CUBE_MAP,S,Ie);for(let me=0;me<6;me++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Ue(Z.__webglFramebuffer[me][xe],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else Ue(Z.__webglFramebuffer[me],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);E(S,Ie)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let me=0,xe=ue.length;me<xe;me++){const Xe=ue[me],de=n.get(Xe);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),j(i.TEXTURE_2D,Xe,Ie),Ue(Z.__webglFramebuffer,L,Xe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),E(Xe,Ie)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ne.__webglTexture),j(me,S,Ie),o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Ue(Z.__webglFramebuffer[xe],L,S,i.COLOR_ATTACHMENT0,me,xe);else Ue(Z.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,me,0);E(S,Ie)&&A(me),t.unbindTexture()}L.depthBuffer&&Oe(L)}function Ce(L){const S=m(L)||o,Z=L.textures;for(let ne=0,ue=Z.length;ne<ue;ne++){const ae=Z[ne];if(E(ae,S)){const ze=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ae).__webglTexture;t.bindTexture(ze,Ie),A(ze),t.unbindTexture()}}}function Ke(L){if(o&&L.samples>0&&ot(L)===!1){const S=L.textures,Z=L.width,ne=L.height;let ue=i.COLOR_BUFFER_BIT;const ae=[],ze=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(L),me=S.length>1;if(me)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){ae.push(i.COLOR_ATTACHMENT0+xe),L.depthBuffer&&ae.push(ze);const Xe=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Xe===!1&&(L.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]),Xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ze]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ze])),me){const de=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,ue,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]);const Xe=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Fe(L){return Math.min(r.maxSamples,L.samples)}function ot(L){const S=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(L){const S=a.render.frame;f.get(L)!==S&&(f.set(L,S),L.update())}function et(L,S){const Z=L.colorSpace,ne=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ac||Z!==Ni&&Z!==Ri&&(Mt.getTransfer(Z)===Ct?o===!1?e.has("EXT_sRGB")===!0&&ne===Gn?(L.format=ac,L.minFilter=mn,L.generateMipmaps=!1):S=ef.sRGBToLinear(S):(ne!==Gn||ue!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),S}function St(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.setTexture2D=se,this.setTexture2DArray=D,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=G,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ot}function Ny(i,e,t){const n=t.isWebGL2;function r(s,a=Ri){let o;const c=Mt.getTransfer(a);if(s===Ui)return i.UNSIGNED_BYTE;if(s===qh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Yh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Qm)return i.BYTE;if(s===eg)return i.SHORT;if(s===gc)return i.UNSIGNED_SHORT;if(s===Xh)return i.INT;if(s===Ci)return i.UNSIGNED_INT;if(s===pi)return i.FLOAT;if(s===Es)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===tg)return i.ALPHA;if(s===Gn)return i.RGBA;if(s===ng)return i.LUMINANCE;if(s===ig)return i.LUMINANCE_ALPHA;if(s===ir)return i.DEPTH_COMPONENT;if(s===Yr)return i.DEPTH_STENCIL;if(s===ac)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===rg)return i.RED;if(s===$h)return i.RED_INTEGER;if(s===sg)return i.RG;if(s===jh)return i.RG_INTEGER;if(s===Kh)return i.RGBA_INTEGER;if(s===da||s===pa||s===ma||s===ga)if(c===Ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===da)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===da)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ru||s===su||s===ou||s===au)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ru)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===su)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ou)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===au)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cu||s===lu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===cu)return c===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===lu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uu||s===hu||s===fu||s===du||s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Mu||s===Su||s===Eu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===uu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===du)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_u)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Su)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eu)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_a||s===bu||s===Tu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===_a)return c===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===og||s===Au||s===wu||s===Ru)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===_a)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Au)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ru)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Oy extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tr extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),m=this._getHandJoint(u,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,v=.005;u.inputState.pinching&&d>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zy=`
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

}`;class ky{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ii({extensions:{fragDepth:!0},vertexShader:By,fragmentShader:zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new Rs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Hy extends or{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,g=null,v=null;const y=new ky,p=t.getContextAttributes();let m=null,R=null;const E=[],A=[],I=new Re;let U=null;const w=new Ln;w.layers.enable(1),w.viewport=new Kt;const z=new Ln;z.layers.enable(2),z.viewport=new Kt;const Q=[w,z],M=new Oy;M.layers.enable(1),M.layers.enable(2);let C=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=E[j];return le===void 0&&(le=new Ga,E[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=E[j];return le===void 0&&(le=new Ga,E[j]=le),le.getGripSpace()},this.getHand=function(j){let le=E[j];return le===void 0&&(le=new Ga,E[j]=le),le.getHandSpace()};function ee(j){const le=A.indexOf(j.inputSource);if(le===-1)return;const te=E[le];te!==void 0&&(te.update(j.inputSource,j.frame,u||a),te.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",X);for(let j=0;j<E.length;j++){const le=A[j];le!==null&&(A[j]=null,E[j].disconnect(le))}C=null,K=null,y.reset(),e.setRenderTarget(m),g=null,d=null,f=null,r=null,R=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",O),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new rr(g.framebufferWidth,g.framebufferHeight,{format:Gn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,te=null,Be=null;p.depth&&(Be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?Yr:ir,te=p.stencil?nr:Ci);const Ue={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new rr(d.textureWidth,d.textureHeight,{format:Gn,type:Ui,depthTexture:new pf(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const be=e.properties.get(R);be.__ignoreDepthValues=d.ignoreDepthValues}R.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(j){for(let le=0;le<j.removed.length;le++){const te=j.removed[le],Be=A.indexOf(te);Be>=0&&(A[Be]=null,E[Be].disconnect(te))}for(let le=0;le<j.added.length;le++){const te=j.added[le];let Be=A.indexOf(te);if(Be===-1){for(let be=0;be<E.length;be++)if(be>=A.length){A.push(te),Be=be;break}else if(A[be]===null){A[be]=te,Be=be;break}if(Be===-1)break}const Ue=E[Be];Ue&&Ue.connect(te)}}const Y=new F,se=new F;function D(j,le,te){Y.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(te.matrixWorld);const Be=Y.distanceTo(se),Ue=le.projectionMatrix.elements,be=te.projectionMatrix.elements,ut=Ue[14]/(Ue[10]-1),Oe=Ue[14]/(Ue[10]+1),G=(Ue[9]+1)/Ue[5],Rt=(Ue[9]-1)/Ue[5],Ce=(Ue[8]-1)/Ue[0],Ke=(be[8]+1)/be[0],Fe=ut*Ce,ot=ut*Ke,Ze=Be/(-Ce+Ke),et=Ze*-Ce;le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(et),j.translateZ(Ze),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const St=ut+Ze,L=Oe+Ze,S=Fe-et,Z=ot+(Be-et),ne=G*Oe/L*St,ue=Rt*Oe/L*St;j.projectionMatrix.makePerspective(S,Z,ne,ue,St,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function re(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;y.texture!==null&&(j.near=y.depthNear,j.far=y.depthFar),M.near=z.near=w.near=j.near,M.far=z.far=w.far=j.far,(C!==M.near||K!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,K=M.far,w.near=C,w.far=K,z.near=C,z.far=K,w.updateProjectionMatrix(),z.updateProjectionMatrix(),j.updateProjectionMatrix());const le=j.parent,te=M.cameras;re(M,le);for(let Be=0;Be<te.length;Be++)re(te[Be],le);te.length===2?D(M,w,z):M.projectionMatrix.copy(w.projectionMatrix),ce(j,M,le)};function ce(j,le,te){te===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(te.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=bs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null};let pe=null;function ye(j,le){if(h=le.getViewerPose(u||a),v=le,h!==null){const te=h.views;g!==null&&(e.setRenderTargetFramebuffer(R,g.framebuffer),e.setRenderTarget(R));let Be=!1;te.length!==M.cameras.length&&(M.cameras.length=0,Be=!0);for(let be=0;be<te.length;be++){const ut=te[be];let Oe=null;if(g!==null)Oe=g.getViewport(ut);else{const Rt=f.getViewSubImage(d,ut);Oe=Rt.viewport,be===0&&(e.setRenderTargetTextures(R,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(R))}let G=Q[be];G===void 0&&(G=new Ln,G.layers.enable(be),G.viewport=new Kt,Q[be]=G),G.matrix.fromArray(ut.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ut.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),be===0&&(M.matrix.copy(G.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Be===!0&&M.cameras.push(G)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const be=f.getDepthInformation(te[0]);be&&be.isValid&&be.texture&&y.init(e,be,r.renderState)}}for(let te=0;te<E.length;te++){const Be=A[te],Ue=E[te];Be!==null&&Ue!==void 0&&Ue.update(Be,le,u||a)}y.render(e,M),pe&&pe(j,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),v=null}const ke=new ff;ke.setAnimationLoop(ye),this.setAnimationLoop=function(j){pe=j},this.dispose=function(){}}}const Ki=new gi,Gy=new Ot;function Vy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,lf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,R,E,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&g(p,m,A)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,R,E):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const R=e.get(m),E=R.envMap,A=R.envMapRotation;if(E&&(p.envMap.value=E,Ki.copy(A),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),p.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Ki)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const I=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,R,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*R,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,R){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const R=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wy(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(R,E){const A=E.program;n.uniformBlockBinding(R,A)}function u(R,E){let A=r[R.id];A===void 0&&(v(R),A=h(R),r[R.id]=A,R.addEventListener("dispose",p));const I=E.program;n.updateUBOMapping(R,I);const U=e.render.frame;s[R.id]!==U&&(d(R),s[R.id]=U)}function h(R){const E=f();R.__bindingPointIndex=E;const A=i.createBuffer(),I=R.__size,U=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const E=r[R.id],A=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let U=0,w=A.length;U<w;U++){const z=Array.isArray(A[U])?A[U]:[A[U]];for(let Q=0,M=z.length;Q<M;Q++){const C=z[Q];if(g(C,U,Q,I)===!0){const K=C.__offset,ee=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let X=0;X<ee.length;X++){const Y=ee[X],se=y(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,K+O,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,O),O+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(R,E,A,I){const U=R.value,w=E+"_"+A;if(I[w]===void 0)return typeof U=="number"||typeof U=="boolean"?I[w]=U:I[w]=U.clone(),!0;{const z=I[w];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return I[w]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function v(R){const E=R.uniforms;let A=0;const I=16;for(let w=0,z=E.length;w<z;w++){const Q=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,C=Q.length;M<C;M++){const K=Q[M],ee=Array.isArray(K.value)?K.value:[K.value];for(let O=0,X=ee.length;O<X;O++){const Y=ee[O],se=y(Y),D=A%I;D!==0&&I-D<se.boundary&&(A+=I-D),K.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=se.storage}}}const U=A%I;return U>0&&(A+=I-U),R.__size=A,R.__cache={},this}function y(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function p(R){const E=R.target;E.removeEventListener("dispose",p);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function m(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:c,update:u,dispose:m}}class yf{constructor(e={}){const{canvas:t=Dg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const m=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const E=this;let A=!1,I=0,U=0,w=null,z=-1,Q=null;const M=new Kt,C=new Kt;let K=null;const ee=new vt(0);let O=0,X=t.width,Y=t.height,se=1,D=null,re=null;const ce=new Kt(0,0,X,Y),pe=new Kt(0,0,X,Y);let ye=!1;const ke=new yc;let j=!1,le=!1,te=null;const Be=new Ot,Ue=new Re,be=new F,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return w===null?se:1}let G=n;function Rt(T,H){for(let q=0;q<T.length;q++){const $=T[q],V=t.getContext($,H);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",fe,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&H.shift(),G=Rt(H,T),G===null)throw Rt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Ke,Fe,ot,Ze,et,St,L,S,Z,ne,ue,ae,ze,Ie,me,xe,Xe,de,Pt,tt,De,Te,Le;function P(){Ce=new Kv(G),Ke=new Wv(G,Ce,e),Ce.init(Ke),De=new Ny(G,Ce,Ke),Fe=new Dy(G,Ce,Ke),ot=new Qv(G),Ze=new xy,et=new Iy(G,Ce,Fe,Ze,Ke,De,ot),St=new qv(E),L=new jv(E),S=new s_(G,Ke),Te=new Gv(G,Ce,S,Ke),Z=new Zv(G,S,ot,Te),ne=new ix(G,Z,S,ot),de=new nx(G,Ke,et),me=new Xv(Ze),ue=new vy(E,St,L,Ce,Ke,Te,me),ae=new Vy(E,Ze),ze=new My,Ie=new wy(Ce,Ke),Xe=new Hv(E,St,L,Fe,ne,d,c),xe=new Uy(E,ne,Ke),Le=new Wy(G,ot,Ke,Fe),Pt=new Vv(G,Ce,ot,Ke),tt=new Jv(G,Ce,ot,Ke),ot.programs=ue.programs,E.capabilities=Ke,E.extensions=Ce,E.properties=Ze,E.renderLists=ze,E.shadowMap=xe,E.state=Fe,E.info=ot}P();const ie=new Hy(E,G);this.xr=ie,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(X,Y,!1))},this.getSize=function(T){return T.set(X,Y)},this.setSize=function(T,H,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Y=H,t.width=Math.floor(T*se),t.height=Math.floor(H*se),q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(X*se,Y*se).floor()},this.setDrawingBufferSize=function(T,H,q){X=T,Y=H,se=q,t.width=Math.floor(T*q),t.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,H,q,$){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,H,q,$),Fe.viewport(M.copy(ce).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,H,q,$){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,H,q,$),Fe.scissor(C.copy(pe).multiplyScalar(se).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Fe.setScissorTest(ye=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(T=!0,H=!0,q=!0){let $=0;if(T){let V=!1;if(w!==null){const Se=w.texture.format;V=Se===Kh||Se===jh||Se===$h}if(V){const Se=w.texture.type,Pe=Se===Ui||Se===Ci||Se===gc||Se===nr||Se===qh||Se===Yh,Ne=Xe.getClearColor(),Ge=Xe.getClearAlpha(),Je=Ne.r,Ve=Ne.g,Ye=Ne.b;Pe?(g[0]=Je,g[1]=Ve,g[2]=Ye,g[3]=Ge,G.clearBufferuiv(G.COLOR,0,g)):(v[0]=Je,v[1]=Ve,v[2]=Ye,v[3]=Ge,G.clearBufferiv(G.COLOR,0,v))}else $|=G.COLOR_BUFFER_BIT}H&&($|=G.DEPTH_BUFFER_BIT),q&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ze.dispose(),Ie.dispose(),Ze.dispose(),St.dispose(),L.dispose(),ne.dispose(),Te.dispose(),Le.dispose(),ue.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ut),ie.removeEventListener("sessionend",ht),te&&(te.dispose(),te=null),Et.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ot.autoReset,H=xe.enabled,q=xe.autoUpdate,$=xe.needsUpdate,V=xe.type;P(),ot.autoReset=T,xe.enabled=H,xe.autoUpdate=q,xe.needsUpdate=$,xe.type=V}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function W(T){const H=T.target;H.removeEventListener("dispose",W),he(H)}function he(T){_e(T),Ze.remove(T)}function _e(T){const H=Ze.get(T).programs;H!==void 0&&(H.forEach(function(q){ue.releaseProgram(q)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,$,V,Se){H===null&&(H=ut);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Zt(T,H,q,$,V);Fe.setMaterial($,Pe);let Ge=q.index,Je=1;if($.wireframe===!0){if(Ge=Z.getWireframeAttribute(q),Ge===void 0)return;Je=2}const Ve=q.drawRange,Ye=q.attributes.position;let Dt=Ve.start*Je,Jt=(Ve.start+Ve.count)*Je;Se!==null&&(Dt=Math.max(Dt,Se.start*Je),Jt=Math.min(Jt,(Se.start+Se.count)*Je)),Ge!==null?(Dt=Math.max(Dt,0),Jt=Math.min(Jt,Ge.count)):Ye!=null&&(Dt=Math.max(Dt,0),Jt=Math.min(Jt,Ye.count));const Ft=Jt-Dt;if(Ft<0||Ft===1/0)return;Te.setup(V,$,Ne,q,Ge);let bn,At=Pt;if(Ge!==null&&(bn=S.get(Ge),At=tt,At.setIndex(bn)),V.isMesh)$.wireframe===!0?(Fe.setLineWidth($.wireframeLinewidth*Oe()),At.setMode(G.LINES)):At.setMode(G.TRIANGLES);else if(V.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),Fe.setLineWidth(Qe*Oe()),V.isLineSegments?At.setMode(G.LINES):V.isLineLoop?At.setMode(G.LINE_LOOP):At.setMode(G.LINE_STRIP)}else V.isPoints?At.setMode(G.POINTS):V.isSprite&&At.setMode(G.TRIANGLES);if(V.isBatchedMesh)At.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)At.renderInstances(Dt,Ft,V.count);else if(q.isInstancedBufferGeometry){const Qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ur=Math.min(q.instanceCount,Qe);At.renderInstances(Dt,Ft,ur)}else At.render(Dt,Ft)};function qe(T,H,q){T.transparent===!0&&T.side===Zn&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,lr(T,H,q),T.side=Di,T.needsUpdate=!0,lr(T,H,q),T.side=Zn):lr(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),p=Ie.get(q),p.init(),R.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(E._useLegacyLights);const $=new Set;return T.traverse(function(V){const Se=V.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ne=Se[Pe];qe(Ne,q,V),$.add(Ne)}else qe(Se,q,V),$.add(Se)}),R.pop(),p=null,$},this.compileAsync=function(T,H,q=null){const $=this.compile(T,H,q);return new Promise(V=>{function Se(){if($.forEach(function(Pe){Ze.get(Pe).currentProgram.isReady()&&$.delete(Pe)}),$.size===0){V(T);return}setTimeout(Se,10)}Ce.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ft=null;function pt(T){ft&&ft(T)}function Ut(){Et.stop()}function ht(){Et.start()}const Et=new ff;Et.setAnimationLoop(pt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(T){ft=T,ie.setAnimationLoop(T),T===null?Et.stop():Et.start()},ie.addEventListener("sessionstart",Ut),ie.addEventListener("sessionend",ht),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,H,w),p=Ie.get(T,R.length),p.init(),R.push(p),Be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ke.setFromProjectionMatrix(Be),le=this.localClippingEnabled,j=me.init(this.clippingPlanes,le),y=ze.get(T,m.length),y.init(),m.push(y),zt(T,H,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(D,re),this.info.render.frame++,j===!0&&me.beginShadows();const q=p.state.shadowsArray;if(xe.render(q,T,H),j===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1)&&Xe.render(y,T),p.setupLights(E._useLegacyLights),H.isArrayCamera){const $=H.cameras;for(let V=0,Se=$.length;V<Se;V++){const Pe=$[V];pn(y,T,Pe,Pe.viewport)}}else pn(y,T,H);w!==null&&(et.updateMultisampleRenderTarget(w),et.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(E,T,H),Te.resetDefaultState(),z=-1,Q=null,R.pop(),R.length>0?p=R[R.length-1]:p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function zt(T,H,q,$){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){$&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Be);const Pe=ne.update(T),Ne=T.material;Ne.visible&&y.push(T,Pe,Ne,q,be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const Pe=ne.update(T),Ne=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),be.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),be.copy(Pe.boundingSphere.center)),be.applyMatrix4(T.matrixWorld).applyMatrix4(Be)),Array.isArray(Ne)){const Ge=Pe.groups;for(let Je=0,Ve=Ge.length;Je<Ve;Je++){const Ye=Ge[Je],Dt=Ne[Ye.materialIndex];Dt&&Dt.visible&&y.push(T,Pe,Dt,q,be.z,Ye)}}else Ne.visible&&y.push(T,Pe,Ne,q,be.z,null)}}const Se=T.children;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++)zt(Se[Pe],H,q,$)}function pn(T,H,q,$){const V=T.opaque,Se=T.transmissive,Pe=T.transparent;p.setupLightsView(q),j===!0&&me.setGlobalState(E.clippingPlanes,q),Se.length>0&&ti(V,Se,H,q),$&&Fe.viewport(M.copy($)),V.length>0&&ar(V,H,q),Se.length>0&&ar(Se,H,q),Pe.length>0&&ar(Pe,H,q),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ti(T,H,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Se=Ke.isWebGL2;te===null&&(te=new rr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Es:Ui,minFilter:er,samples:Se?4:0})),E.getDrawingBufferSize(Ue),Se?te.setSize(Ue.x,Ue.y):te.setSize(Po(Ue.x),Po(Ue.y));const Pe=E.getRenderTarget();E.setRenderTarget(te),E.getClearColor(ee),O=E.getClearAlpha(),O<1&&E.setClearColor(16777215,.5),E.clear();const Ne=E.toneMapping;E.toneMapping=Pi,ar(T,q,$),et.updateMultisampleRenderTarget(te),et.updateRenderTargetMipmap(te);let Ge=!1;for(let Je=0,Ve=H.length;Je<Ve;Je++){const Ye=H[Je],Dt=Ye.object,Jt=Ye.geometry,Ft=Ye.material,bn=Ye.group;if(Ft.side===Zn&&Dt.layers.test($.layers)){const At=Ft.side;Ft.side=_n,Ft.needsUpdate=!0,cr(Dt,q,$,Jt,Ft,bn),Ft.side=At,Ft.needsUpdate=!0,Ge=!0}}Ge===!0&&(et.updateMultisampleRenderTarget(te),et.updateRenderTargetMipmap(te)),E.setRenderTarget(Pe),E.setClearColor(ee,O),E.toneMapping=Ne}function ar(T,H,q){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){const Pe=T[V],Ne=Pe.object,Ge=Pe.geometry,Je=$===null?Pe.material:$,Ve=Pe.group;Ne.layers.test(q.layers)&&cr(Ne,H,q,Ge,Je,Ve)}}function cr(T,H,q,$,V,Se){T.onBeforeRender(E,H,q,$,V,Se),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(E,H,q,$,T,Se),V.transparent===!0&&V.side===Zn&&V.forceSinglePass===!1?(V.side=_n,V.needsUpdate=!0,E.renderBufferDirect(q,H,$,V,T,Se),V.side=Di,V.needsUpdate=!0,E.renderBufferDirect(q,H,$,V,T,Se),V.side=Zn):E.renderBufferDirect(q,H,$,V,T,Se),T.onAfterRender(E,H,q,$,V,Se)}function lr(T,H,q){H.isScene!==!0&&(H=ut);const $=Ze.get(T),V=p.state.lights,Se=p.state.shadowsArray,Pe=V.state.version,Ne=ue.getParameters(T,V.state,Se,H,q),Ge=ue.getProgramCacheKey(Ne);let Je=$.programs;$.environment=T.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(T.isMeshStandardMaterial?L:St).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",W),Je=new Map,$.programs=Je);let Ve=Je.get(Ge);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Pe)return ni(T,Ne),Ve}else Ne.uniforms=ue.getUniforms(T),T.onBuild(q,Ne,E),T.onBeforeCompile(Ne,E),Ve=ue.acquireProgram(Ne,Ge),Je.set(Ge,Ve),$.uniforms=Ne.uniforms;const Ye=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=me.uniform),ni(T,Ne),$.needsLights=on(T),$.lightsStateVersion=Pe,$.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function Cs(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=yo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ni(T,H){const q=Ze.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Zt(T,H,q,$,V){H.isScene!==!0&&(H=ut),et.resetTextureUnits();const Se=H.fog,Pe=$.isMeshStandardMaterial?H.environment:null,Ne=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ni,Ge=($.isMeshStandardMaterial?L:St).get($.envMap||Pe),Je=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ye=!!q.morphAttributes.position,Dt=!!q.morphAttributes.normal,Jt=!!q.morphAttributes.color;let Ft=Pi;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ft=E.toneMapping);const bn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=bn!==void 0?bn.length:0,Qe=Ze.get($),ur=p.state.lights;if(j===!0&&(le===!0||T!==Q)){const It=T===Q&&$.id===z;me.setState($,T,It)}let bt=!1;$.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ur.state.version||Qe.outputColorSpace!==Ne||V.isBatchedMesh&&Qe.batching===!1||!V.isBatchedMesh&&Qe.batching===!0||V.isInstancedMesh&&Qe.instancing===!1||!V.isInstancedMesh&&Qe.instancing===!0||V.isSkinnedMesh&&Qe.skinning===!1||!V.isSkinnedMesh&&Qe.skinning===!0||V.isInstancedMesh&&Qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Qe.instancingMorph===!1&&V.morphTexture!==null||Qe.envMap!==Ge||$.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==me.numPlanes||Qe.numIntersection!==me.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==Ve||Qe.morphTargets!==Ye||Qe.morphNormals!==Dt||Qe.morphColors!==Jt||Qe.toneMapping!==Ft||Ke.isWebGL2===!0&&Qe.morphTargetsCount!==At)&&(bt=!0):(bt=!0,Qe.__version=$.version);let Wn=Qe.currentProgram;bt===!0&&(Wn=lr($,H,V));let vn=!1,Gt=!1,Pn=!1;const mt=Wn.getUniforms(),Un=Qe.uniforms;if(Fe.useProgram(Wn.program)&&(vn=!0,Gt=!0,Pn=!0),$.id!==z&&(z=$.id,Gt=!0),vn||Q!==T){mt.setValue(G,"projectionMatrix",T.projectionMatrix),mt.setValue(G,"viewMatrix",T.matrixWorldInverse);const It=mt.map.cameraPosition;It!==void 0&&It.setValue(G,be.setFromMatrixPosition(T.matrixWorld)),Ke.logarithmicDepthBuffer&&mt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,Gt=!0,Pn=!0)}if(V.isSkinnedMesh){mt.setOptional(G,V,"bindMatrix"),mt.setOptional(G,V,"bindMatrixInverse");const It=V.skeleton;It&&(Ke.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),mt.setValue(G,"boneTexture",It.boneTexture,et)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(mt.setOptional(G,V,"batchingTexture"),mt.setValue(G,"batchingTexture",V._matricesTexture,et));const Oi=q.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0&&Ke.isWebGL2===!0)&&de.update(V,q,Wn),(Gt||Qe.receiveShadow!==V.receiveShadow)&&(Qe.receiveShadow=V.receiveShadow,mt.setValue(G,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Un.envMap.value=Ge,Un.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Gt&&(mt.setValue(G,"toneMappingExposure",E.toneMappingExposure),Qe.needsLights&&sn(Un,Pn),Se&&$.fog===!0&&ae.refreshFogUniforms(Un,Se),ae.refreshMaterialUniforms(Un,$,se,Y,te),yo.upload(G,Cs(Qe),Un,et)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(yo.upload(G,Cs(Qe),Un,et),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(G,"center",V.center),mt.setValue(G,"modelViewMatrix",V.modelViewMatrix),mt.setValue(G,"normalMatrix",V.normalMatrix),mt.setValue(G,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const It=$.uniformsGroups;for(let Dn=0,hr=It.length;Dn<hr;Dn++)if(Ke.isWebGL2){const ii=It[Dn];Le.update(ii,Wn),Le.bind(ii,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function sn(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function on(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,H,q){Ze.get(T.texture).__webglTexture=H,Ze.get(T.depthTexture).__webglTexture=q;const $=Ze.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const q=Ze.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,q=0){w=T,I=H,U=q;let $=!0,V=null,Se=!1,Pe=!1;if(T){const Ge=Ze.get(T);Ge.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(G.FRAMEBUFFER,null),$=!1):Ge.__webglFramebuffer===void 0?et.setupRenderTarget(T):Ge.__hasExternalTextures&&et.rebindTextures(T,Ze.get(T.texture).__webglTexture,Ze.get(T.depthTexture).__webglTexture);const Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Pe=!0);const Ve=Ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?V=Ve[H][q]:V=Ve[H],Se=!0):Ke.isWebGL2&&T.samples>0&&et.useMultisampledRTT(T)===!1?V=Ze.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[q]:V=Ve,M.copy(T.viewport),C.copy(T.scissor),K=T.scissorTest}else M.copy(ce).multiplyScalar(se).floor(),C.copy(pe).multiplyScalar(se).floor(),K=ye;if(Fe.bindFramebuffer(G.FRAMEBUFFER,V)&&Ke.drawBuffers&&$&&Fe.drawBuffers(T,V),Fe.viewport(M),Fe.scissor(C),Fe.setScissorTest(K),Se){const Ge=Ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,q)}else if(Pe){const Ge=Ze.get(T.texture),Je=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ge.__webglTexture,q||0,Je)}z=-1},this.readRenderTargetPixels=function(T,H,q,$,V,Se,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Fe.bindFramebuffer(G.FRAMEBUFFER,Ne);try{const Ge=T.texture,Je=Ge.format,Ve=Ge.type;if(Je!==Gn&&De.convert(Je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Ve===Es&&(Ce.has("EXT_color_buffer_half_float")||Ke.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ve!==Ui&&De.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===pi&&(Ke.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-$&&q>=0&&q<=T.height-V&&G.readPixels(H,q,$,V,De.convert(Je),De.convert(Ve),Se)}finally{const Ge=w!==null?Ze.get(w).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(T,H,q=0){const $=Math.pow(2,-q),V=Math.floor(H.image.width*$),Se=Math.floor(H.image.height*$);et.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,T.x,T.y,V,Se),Fe.unbindTexture()},this.copyTextureToTexture=function(T,H,q,$=0){const V=H.image.width,Se=H.image.height,Pe=De.convert(q.format),Ne=De.convert(q.type);et.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,$,T.x,T.y,V,Se,Pe,Ne,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,$,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Pe,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,$,T.x,T.y,Pe,Ne,H.image),$===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(T,H,q,$,V=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=Math.round(T.max.x-T.min.x),Pe=Math.round(T.max.y-T.min.y),Ne=T.max.z-T.min.z+1,Ge=De.convert($.format),Je=De.convert($.type);let Ve;if($.isData3DTexture)et.setTexture3D($,0),Ve=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)et.setTexture2DArray($,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const Ye=G.getParameter(G.UNPACK_ROW_LENGTH),Dt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Jt=G.getParameter(G.UNPACK_SKIP_PIXELS),Ft=G.getParameter(G.UNPACK_SKIP_ROWS),bn=G.getParameter(G.UNPACK_SKIP_IMAGES),At=q.isCompressedTexture?q.mipmaps[V]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,At.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,At.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Ve,V,H.x,H.y,H.z,Se,Pe,Ne,Ge,Je,At.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,V,H.x,H.y,H.z,Se,Pe,Ne,Ge,At.data):G.texSubImage3D(Ve,V,H.x,H.y,H.z,Se,Pe,Ne,Ge,Je,At),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ft),G.pixelStorei(G.UNPACK_SKIP_IMAGES,bn),V===0&&$.generateMipmaps&&G.generateMipmap(Ve),Fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?et.setTextureCube(T,0):T.isData3DTexture?et.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?et.setTexture2DArray(T,0):et.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){I=0,U=0,w=null,Fe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_c?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===Fo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xy extends yf{}Xy.prototype.isWebGL1Renderer=!0;class qy extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yy extends dn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,g=(a-h)/d;return(r+g)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new Re:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,r=[],s=[],a=[],o=new F,c=new Ot;for(let g=0;g<=e;g++){const v=g/e;r[g]=this.getTangentAt(v,new F)}s[0]=new F,a[0]=new F;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(jt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(c.makeRotationAxis(o,v))}a[g].crossVectors(r[g],s[g])}if(t===!0){let g=Math.acos(jt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let v=1;v<=e;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],g*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mf extends ei{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Re){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,g=u-this.aY;c=d*h-g*f+this.aX,u=d*f+g*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $y extends Mf{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,h,f){let d=(a-s)/u-(o-s)/(u+h)+(o-a)/h,g=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,g*=h,r(a,o,d,g)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const _o=new F,Va=new Sc,Wa=new Sc,Xa=new Sc;class jy extends ei{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new F){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,h;this.closed||o>0?u=r[(o-1)%s]:(_o.subVectors(r[0],r[1]).add(r[0]),u=_o);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(_o.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(f),g),y=Math.pow(f.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(h),g);y<1e-4&&(y=1),v<1e-4&&(v=y),p<1e-4&&(p=y),Va.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,v,y,p),Wa.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,v,y,p),Xa.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,v,y,p)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),Wa.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),Xa.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return n.set(Va.calc(c),Wa.calc(c),Xa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xh(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function Ky(i,e){const t=1-i;return t*t*e}function Zy(i,e){return 2*(1-i)*i*e}function Jy(i,e){return i*i*e}function ms(i,e,t,n){return Ky(i,e)+Zy(i,t)+Jy(i,n)}function Qy(i,e){const t=1-i;return t*t*t*e}function eM(i,e){const t=1-i;return 3*t*t*i*e}function tM(i,e){return 3*(1-i)*i*i*e}function nM(i,e){return i*i*i*e}function gs(i,e,t,n,r){return Qy(i,e)+eM(i,t)+tM(i,n)+nM(i,r)}class iM extends ei{constructor(e=new Re,t=new Re,n=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,r.x,s.x,a.x,o.x),gs(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rM extends ei{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,r.x,s.x,a.x,o.x),gs(e,r.y,s.y,a.y,o.y),gs(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sM extends ei{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oM extends ei{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aM extends ei{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ms(e,r.x,s.x,a.x),ms(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sf extends ei{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ms(e,r.x,s.x,a.x),ms(e,r.y,s.y,a.y),ms(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cM extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(xh(o,c.x,u.x,h.x,f.x),xh(o,c.y,u.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var lM=Object.freeze({__proto__:null,ArcCurve:$y,CatmullRomCurve3:jy,CubicBezierCurve:iM,CubicBezierCurve3:rM,EllipseCurve:Mf,LineCurve:sM,LineCurve3:oM,QuadraticBezierCurve:aM,QuadraticBezierCurve3:Sf,SplineCurve:cM});class Ec extends Vn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],g=[];let v=0;const y=[],p=n/2;let m=0;R(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(g,2));function R(){const A=new F,I=new F;let U=0;const w=(t-e)/n;for(let z=0;z<=s;z++){const Q=[],M=z/s,C=M*(t-e)+e;for(let K=0;K<=r;K++){const ee=K/r,O=ee*c+o,X=Math.sin(O),Y=Math.cos(O);I.x=C*X,I.y=-M*n+p,I.z=C*Y,f.push(I.x,I.y,I.z),A.set(X,w,Y).normalize(),d.push(A.x,A.y,A.z),g.push(ee,1-M),Q.push(v++)}y.push(Q)}for(let z=0;z<r;z++)for(let Q=0;Q<s;Q++){const M=y[Q][z],C=y[Q+1][z],K=y[Q+1][z+1],ee=y[Q][z+1];h.push(M,C,ee),h.push(C,K,ee),U+=6}u.addGroup(m,U,0),m+=U}function E(A){const I=v,U=new Re,w=new F;let z=0;const Q=A===!0?e:t,M=A===!0?1:-1;for(let K=1;K<=r;K++)f.push(0,p*M,0),d.push(0,M,0),g.push(.5,.5),v++;const C=v;for(let K=0;K<=r;K++){const O=K/r*c+o,X=Math.cos(O),Y=Math.sin(O);w.x=Q*Y,w.y=p*M,w.z=Q*X,f.push(w.x,w.y,w.z),d.push(0,M,0),U.x=X*.5+.5,U.y=Y*.5*M+.5,g.push(U.x,U.y),v++}for(let K=0;K<r;K++){const ee=I+K,O=C+K;A===!0?h.push(O,O+1,ee):h.push(O+1,O,ee),z+=3}u.addGroup(m,z,A===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hr extends Ec{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Hr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bc extends Vn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],f=new F,d=new F,g=[],v=[],y=[],p=[];for(let m=0;m<=n;m++){const R=[],E=m/n;let A=0;m===0&&a===0?A=.5/t:m===n&&c===Math.PI&&(A=-.5/t);for(let I=0;I<=t;I++){const U=I/t;f.x=-e*Math.cos(r+U*s)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(r+U*s)*Math.sin(a+E*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),p.push(U+A,1-E),R.push(u++)}h.push(R)}for(let m=0;m<n;m++)for(let R=0;R<t;R++){const E=h[m][R+1],A=h[m][R],I=h[m+1][R],U=h[m+1][R+1];(m!==0||a>0)&&g.push(E,A,U),(m!==n-1||c<Math.PI)&&g.push(A,I,U)}this.setIndex(g),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _s extends Vn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],h=new F,f=new F,d=new F;for(let g=0;g<=n;g++)for(let v=0;v<=r;v++){const y=v/r*s,p=g/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(v/r),u.push(g/n)}for(let g=1;g<=n;g++)for(let v=1;v<=r;v++){const y=(r+1)*g+v-1,p=(r+1)*(g-1)+v-1,m=(r+1)*(g-1)+v,R=(r+1)*g+v;a.push(y,p,R),a.push(p,m,R)}this.setIndex(a),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Tc extends Vn{constructor(e=new Sf(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,c=new F,u=new Re;let h=new F;const f=[],d=[],g=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(g,2));function y(){for(let E=0;E<t;E++)p(E);p(s===!1?t:0),R(),m()}function p(E){h=e.getPointAt(E/t,h);const A=a.normals[E],I=a.binormals[E];for(let U=0;U<=r;U++){const w=U/r*Math.PI*2,z=Math.sin(w),Q=-Math.cos(w);c.x=Q*A.x+z*I.x,c.y=Q*A.y+z*I.y,c.z=Q*A.z+z*I.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let A=1;A<=r;A++){const I=(r+1)*(E-1)+(A-1),U=(r+1)*E+(A-1),w=(r+1)*E+A,z=(r+1)*(E-1)+A;v.push(I,U,z),v.push(U,w,z)}}function R(){for(let E=0;E<=t;E++)for(let A=0;A<=r;A++)u.x=E/t,u.y=A/r,g.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Tc(new lM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class uM extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qa=new Ot,yh=new F,Mh=new F;class hM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fM extends hM{constructor(){super(new df(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dM extends uM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new fM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);const Eh={type:"change"},Ya={type:"start"},bh={type:"end"},vo=new rf,Th=new Ai,pM=Math.cos(70*Ug.DEG2RAD);class mM extends or{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ie),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Eh),n.update(),s=r.NONE},this.update=function(){const P=new F,ie=new sr().setFromUnitVectors(e.up,new F(0,1,0)),we=ie.clone().invert(),N=new F,fe=new sr,W=new F,he=2*Math.PI;return function(qe=null){const ft=n.object.position;P.copy(ft).sub(n.target),P.applyQuaternion(ie),o.setFromVector3(P),n.autoRotate&&s===r.NONE&&K(M(qe)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let pt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;isFinite(pt)&&isFinite(Ut)&&(pt<-Math.PI?pt+=he:pt>Math.PI&&(pt-=he),Ut<-Math.PI?Ut+=he:Ut>Math.PI&&(Ut-=he),pt<=Ut?o.theta=Math.max(pt,Math.min(Ut,o.theta)):o.theta=o.theta>(pt+Ut)/2?Math.max(pt,o.theta):Math.min(Ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ht=!1;if(n.zoomToCursor&&U||n.object.isOrthographicCamera)o.radius=ce(o.radius);else{const Et=o.radius;o.radius=ce(o.radius*u),ht=Et!=o.radius}if(P.setFromSpherical(o),P.applyQuaternion(we),ft.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&U){let Et=null;if(n.object.isPerspectiveCamera){const zt=P.length();Et=ce(zt*u);const pn=zt-Et;n.object.position.addScaledVector(A,pn),n.object.updateMatrixWorld(),ht=!!pn}else if(n.object.isOrthographicCamera){const zt=new F(I.x,I.y,0);zt.unproject(n.object);const pn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ht=pn!==n.object.zoom;const ti=new F(I.x,I.y,0);ti.unproject(n.object),n.object.position.sub(ti).add(zt),n.object.updateMatrixWorld(),Et=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Et!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Et).add(n.object.position):(vo.origin.copy(n.object.position),vo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(vo.direction))<pM?e.lookAt(n.target):(Th.setFromNormalAndCoplanarPoint(n.object.up,n.target),vo.intersectPlane(Th,n.target))))}else if(n.object.isOrthographicCamera){const Et=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),Et!==n.object.zoom&&(n.object.updateProjectionMatrix(),ht=!0)}return u=1,U=!1,ht||N.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a||W.distanceToSquared(n.target)>a?(n.dispatchEvent(Eh),N.copy(n.object.position),fe.copy(n.object.quaternion),W.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Xe),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",L),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",St),n.domElement.removeEventListener("pointerup",L),n.domElement.getRootNode().removeEventListener("keydown",ae,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Sh,c=new Sh;let u=1;const h=new F,f=new Re,d=new Re,g=new Re,v=new Re,y=new Re,p=new Re,m=new Re,R=new Re,E=new Re,A=new F,I=new Re;let U=!1;const w=[],z={};let Q=!1;function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function C(P){const ie=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ie)}function K(P){c.theta-=P}function ee(P){c.phi-=P}const O=function(){const P=new F;return function(we,N){P.setFromMatrixColumn(N,0),P.multiplyScalar(-we),h.add(P)}}(),X=function(){const P=new F;return function(we,N){n.screenSpacePanning===!0?P.setFromMatrixColumn(N,1):(P.setFromMatrixColumn(N,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(we),h.add(P)}}(),Y=function(){const P=new F;return function(we,N){const fe=n.domElement;if(n.object.isPerspectiveCamera){const W=n.object.position;P.copy(W).sub(n.target);let he=P.length();he*=Math.tan(n.object.fov/2*Math.PI/180),O(2*we*he/fe.clientHeight,n.object.matrix),X(2*N*he/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(we*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),X(N*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function se(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(P,ie){if(!n.zoomToCursor)return;U=!0;const we=n.domElement.getBoundingClientRect(),N=P-we.left,fe=ie-we.top,W=we.width,he=we.height;I.x=N/W*2-1,I.y=-(fe/he)*2+1,A.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function ce(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function pe(P){f.set(P.clientX,P.clientY)}function ye(P){re(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function ke(P){v.set(P.clientX,P.clientY)}function j(P){d.set(P.clientX,P.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;K(2*Math.PI*g.x/ie.clientHeight),ee(2*Math.PI*g.y/ie.clientHeight),f.copy(d),n.update()}function le(P){R.set(P.clientX,P.clientY),E.subVectors(R,m),E.y>0?se(C(E.y)):E.y<0&&D(C(E.y)),m.copy(R),n.update()}function te(P){y.set(P.clientX,P.clientY),p.subVectors(y,v).multiplyScalar(n.panSpeed),Y(p.x,p.y),v.copy(y),n.update()}function Be(P){re(P.clientX,P.clientY),P.deltaY<0?D(C(P.deltaY)):P.deltaY>0&&se(C(P.deltaY)),n.update()}function Ue(P){let ie=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?ee(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?ee(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),ie=!0;break}ie&&(P.preventDefault(),n.update())}function be(P){if(w.length===1)f.set(P.pageX,P.pageY);else{const ie=Te(P),we=.5*(P.pageX+ie.x),N=.5*(P.pageY+ie.y);f.set(we,N)}}function ut(P){if(w.length===1)v.set(P.pageX,P.pageY);else{const ie=Te(P),we=.5*(P.pageX+ie.x),N=.5*(P.pageY+ie.y);v.set(we,N)}}function Oe(P){const ie=Te(P),we=P.pageX-ie.x,N=P.pageY-ie.y,fe=Math.sqrt(we*we+N*N);m.set(0,fe)}function G(P){n.enableZoom&&Oe(P),n.enablePan&&ut(P)}function Rt(P){n.enableZoom&&Oe(P),n.enableRotate&&be(P)}function Ce(P){if(w.length==1)d.set(P.pageX,P.pageY);else{const we=Te(P),N=.5*(P.pageX+we.x),fe=.5*(P.pageY+we.y);d.set(N,fe)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;K(2*Math.PI*g.x/ie.clientHeight),ee(2*Math.PI*g.y/ie.clientHeight),f.copy(d)}function Ke(P){if(w.length===1)y.set(P.pageX,P.pageY);else{const ie=Te(P),we=.5*(P.pageX+ie.x),N=.5*(P.pageY+ie.y);y.set(we,N)}p.subVectors(y,v).multiplyScalar(n.panSpeed),Y(p.x,p.y),v.copy(y)}function Fe(P){const ie=Te(P),we=P.pageX-ie.x,N=P.pageY-ie.y,fe=Math.sqrt(we*we+N*N);R.set(0,fe),E.set(0,Math.pow(R.y/m.y,n.zoomSpeed)),se(E.y),m.copy(R);const W=(P.pageX+ie.x)*.5,he=(P.pageY+ie.y)*.5;re(W,he)}function ot(P){n.enableZoom&&Fe(P),n.enablePan&&Ke(P)}function Ze(P){n.enableZoom&&Fe(P),n.enableRotate&&Ce(P)}function et(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",St),n.domElement.addEventListener("pointerup",L)),!tt(P)&&(de(P),P.pointerType==="touch"?me(P):S(P)))}function St(P){n.enabled!==!1&&(P.pointerType==="touch"?xe(P):Z(P))}function L(P){switch(Pt(P),w.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",St),n.domElement.removeEventListener("pointerup",L),n.dispatchEvent(bh),s=r.NONE;break;case 1:const ie=w[0],we=z[ie];me({pointerId:ie,pageX:we.x,pageY:we.y});break}}function S(P){let ie;switch(P.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case vr.DOLLY:if(n.enableZoom===!1)return;ye(P),s=r.DOLLY;break;case vr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ke(P),s=r.PAN}else{if(n.enableRotate===!1)return;pe(P),s=r.ROTATE}break;case vr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;pe(P),s=r.ROTATE}else{if(n.enablePan===!1)return;ke(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ya)}function Z(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;j(P);break;case r.DOLLY:if(n.enableZoom===!1)return;le(P);break;case r.PAN:if(n.enablePan===!1)return;te(P);break}}function ne(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(Ya),Be(ue(P)),n.dispatchEvent(bh))}function ue(P){const ie=P.deltaMode,we={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ie){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return P.ctrlKey&&!Q&&(we.deltaY*=10),we}function ae(P){P.key==="Control"&&(Q=!0,n.domElement.getRootNode().addEventListener("keyup",ze,{passive:!0,capture:!0}))}function ze(P){P.key==="Control"&&(Q=!1,n.domElement.getRootNode().removeEventListener("keyup",ze,{passive:!0,capture:!0}))}function Ie(P){n.enabled===!1||n.enablePan===!1||Ue(P)}function me(P){switch(De(P),w.length){case 1:switch(n.touches.ONE){case xr.ROTATE:if(n.enableRotate===!1)return;be(P),s=r.TOUCH_ROTATE;break;case xr.PAN:if(n.enablePan===!1)return;ut(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case xr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(P),s=r.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Rt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ya)}function xe(P){switch(De(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ke(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ot(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(P),n.update();break;default:s=r.NONE}}function Xe(P){n.enabled!==!1&&P.preventDefault()}function de(P){w.push(P.pointerId)}function Pt(P){delete z[P.pointerId];for(let ie=0;ie<w.length;ie++)if(w[ie]==P.pointerId){w.splice(ie,1);return}}function tt(P){for(let ie=0;ie<w.length;ie++)if(w[ie]==P.pointerId)return!0;return!1}function De(P){let ie=z[P.pointerId];ie===void 0&&(ie=new Re,z[P.pointerId]=ie),ie.set(P.pageX,P.pageY)}function Te(P){const ie=P.pointerId===w[0]?w[1]:w[0];return z[ie]}n.domElement.addEventListener("contextmenu",Xe),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",L),n.domElement.addEventListener("wheel",ne,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ae,{passive:!0,capture:!0}),this.update()}}class gM extends ei{constructor(t){super();yn(this,"points");yn(this,"values");this.points=t,this.values=this.getValues()}getPoint(t,n=new F){let r=0;for(;r<this.values.length-1;r++)if(this.values[r]<=t&&this.values[r+1]>=t){const[s,a,o]=this.points[r],[c,u,h]=this.points[r+1],f=(t-this.values[r])/(this.values[r+1]-this.values[r]),d=s+f*(c-s),g=a+f*(u-a),v=o+f*(h-o);return n.set(d,g,v)}return n.set(0,0,0)}getValues(){let t=[0],n=0;for(let r=1;r<this.points.length;r++){const s=this.points[r-1],a=this.points[r],o=[0,1,2].map(u=>a[u]-s[u]).map(u=>u*u).reduce((u,h)=>u+h),c=Math.sqrt(o);n+=c,t.push(n)}return t=t.map(r=>r/n),t}}const xo={R:"hsl(120, 100%, 60%)",L:"hsl(240, 100%, 60%)",U:"hsl(60, 100%, 60%)",D:"hsl(120, 100%, 100%)",F:"hsl(0, 100%, 60%)",B:"hsl(20, 100%, 60%)"};let Ac=0,Io=null,uc=[],hc=new Set,Ef=!0,bf=.8,Tf=!1,wc=!0,Af=!1,tn=null,Ts=null,wi=null,hs=null;const Mo=[];function _M(i){const e=i.N,t=[],n=i.getAllFacesColors();for(const r in xo){let s=function(g,v,y,p){c.moveTo(g,v),c.lineTo(y,v),c.lineTo(y,p),c.lineTo(g,p)};const a=n[r],o=document.createElement("canvas"),c=o.getContext("2d");o.width=1e3,o.height=1e3,c.lineWidth=2*3/Math.sqrt(e),c.strokeStyle="black",c.fillStyle=xo[r];const[u,h]=[o.width,o.height],f=u/e,d=h/e;for(let g=0;g<e;g++)for(let v=0;v<e;v++){const y=a.find(A=>A.a===g&&A.b===v);c.fillStyle=y?xo[y.color]:xo[r],c.beginPath();const p=g===0?c.lineWidth/2:g*f,m=v===0?c.lineWidth/2:v*d,R=g===e-1?g*f+f-c.lineWidth/2:g*f+f,E=v===e-1?v*d+d-c.lineWidth/2:v*d+d;s(p,m,R,E),c.closePath(),c.fill(),c.stroke()}t.push(o)}return t}function $a(i,e,t){if(wc){const n=t,r=Ih(e.facePoint.face),s=[...e.point];for(let a=0;a<s.length;a++)r[a]===0?s[a]+=.5:s[a]===0?s[a]=-n:s[a]===i-1?s[a]=s[a]+1+n:s[a]+=1;return s.map(a=>a*2/i-1)}else{const n=t*(i-1)/2;let r=e.point.map(s=>s===0?-n:s===i-1?i+n:s+.5);return r=r.map(s=>s*2/i-1),r}}function Ah(i,e,t){const n=Oh(e,i),r=Vp(n);return Xp(i,Wp(r,t))}function vM(i,e,t){const n=dm(2,[-1,1,1],i,e);return[i,...n,e]}function xM(){return uc}function wh(i){bf=i;for(const e of xM())e.opacity=i}function yM(i){Af=i}function MM(i){wc=i}function SM(i){Tf=i}function Rh(i){Ef=i,Rc()}function Rc(){Mo.filter(i=>i.type==="cycle"||i.type==="rotation").forEach(i=>{i.obj.visible=Ef||!i.inner,hc.size>0&&(i.obj.visible=hc.has(i.name))})}function ls(i){hc=i,Rc()}Ts=new Ln(30,1,.01,100);Ts.position.set(4,4,4);function EM(i,e,t){tn&&tn.domElement.remove(),Mo.length=0;const n=Math.sqrt(3/i);hs=t,wi=new qy,wi.background=null,uc=_M(e).map(u=>new Yy(u)).map(u=>{const h=new Do({map:u,opacity:bf,transparent:!0});return Tf&&(h.side=Zn),h});{const u=new tr,h=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let f=0;f<h.length;f++){const d=new Rs(2,2),g=new Vt(d,uc[f]),[v,y,p]=h[f];g.position.set(v,y,p),g.lookAt(2*v,2*y,2*p),u.add(g)}u.receiveShadow=!0,wi.add(u)}{const u=new Nh;let h=0,f=.05/e.permutations.filter(p=>p.length>1).length;const d=dc(e.permutations,e.N),g=(p,m)=>p.every(R=>R.facePoint.face===p[0].facePoint.face&&R.facePoint.a>0&&R.facePoint.a<m-1&&R.facePoint.b>0&&R.facePoint.b<m-1),v=()=>new Do({color:u.nextColor(),transparent:!1});let y=1;for(const p of d.filter(m=>m.length>1)){h+=f,h=0;const m=v(),R=g(p.map(A=>A.p1),e.N),E=new tr;for(const A of p){const I=$a(i,A.p1,h),U=$a(i,A.p2,h);let w=Af?vM(I,U):[I,U];w[0]=Ah(w[0],w[1],.02*n),w[w.length-1]=Ah(w[w.length-1],w[w.length-2],.03*n);const z=[];for(let Y=0;Y<w.length;Y++){if(Y>0){const se=w[Y],D=w[Y-1];z.push([(se[0]+D[0])/2,(se[1]+D[1])/2,(se[2]+D[2])/2])}z.push(w[Y])}w=z,w.map(Y=>new F(...Y));const Q=new gM(w),M=new Tc(Q,100,.007*n,20),C=new Vt(M,m);C.castShadow=!0,E.add(C);const K=new Hr(.03*n,.05*n),ee=new Vt(K,m),O=new bc(.007*n),X=new Vt(O,m);ee.geometry.rotateX(Math.PI/2),ee.lookAt(new F(...Oh(w[w.length-1],w[w.length-2]))),ee.position.set(...w[w.length-1]),E.add(ee),X.position.set(...w[0]),E.add(X)}wi.add(E),Mo.push({name:`cycle#${y++}`,obj:E,material:m,inner:R,type:"cycle"})}y=1;for(const p of d.filter(m=>m.length===1)){const m=v(),R=g(p.map(z=>z.p1),e.N),E=p[0],A=$a(i,E.p1,.05),I=E.rotation[1],U=new tr;if(I===180){const z=Math.PI*.7;{const Q=new _s(.1*n,.01*n,void 0,void 0,z),M=new Vt(Q,m);M.geometry.rotateZ(Math.PI/2),U.add(M);const C=new Hr(.03*n,.05*n),K=new Vt(C,m);K.geometry.rotateZ(-Math.PI/2),K.position.set(.02*n,.1*n,0),U.add(K)}{const Q=new _s(.1*n,.01*n,void 0,void 0,z),M=new Vt(Q,m);M.geometry.rotateZ(-Math.PI/2),U.add(M);const C=new Hr(.03*n,.05*n),K=new Vt(C,m);K.geometry.rotateZ(Math.PI/2),K.position.set(-.02*n,-.1*n,0),U.add(K)}}else{const z=Math.PI*3/2,Q=new _s(.1*n,.01*n,void 0,void 0,z),M=new Vt(Q,m);M.geometry.rotateZ(I<0?Math.PI/2:Math.PI),U.add(M);const C=new Hr(.03*n,.05*n),K=new Vt(C,m);K.position.set((I<0?.1:-.1)*n,.02*n,0),U.add(K)}const w=wc?Ih(E.p1.facePoint.face):A;U.lookAt(...w),U.position.set(...A),wi.add(U),Mo.push({name:`rotation#${y++}`,obj:U,material:m,inner:R,type:"rotation"})}}const a=u=>{const h=new dM("white",3);return h.position.set(...u),h};wi.add(a([1,1,1]),a([-1,-1,-1]),a([1,-1,1]),a([-1,1,-1])),tn=new yf({antialias:!0,alpha:!0}),tn.setClearColor(0,0),tn.shadowMap.enabled=!0,tn.shadowMap.type=xm,new mM(Ts,tn.domElement);const o=getComputedStyle(t),c=Math.min(t.clientWidth-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight),t.clientHeight-parseFloat(o.paddingTop)-parseFloat(o.paddingBottom));return tn.setSize(c,c),tn.setPixelRatio(window.devicePixelRatio),t.append(tn.domElement),Io=tn.domElement,Io}function bM(){if(tn&&hs){const i=getComputedStyle(hs),e=Math.min(hs.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),hs.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom));tn.setSize(e,e)}}function Ch(){Rf(),Ac=requestAnimationFrame(wf)}let So=null;function wf(){if(tn&&wi&&Ts){if(tn.render(wi,Ts),So){const{filename:i,cropBlankArea:e}=So;So=null,tm(Io.getContext("webgl2"),i,e)}Ac=requestAnimationFrame(wf)}}function Rf(){cancelAnimationFrame(Ac)}function TM(i,e){tn&&Io&&(So={filename:i,cropBlankArea:e})}function AM(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function wM(i,e){const t=i.indexOf(e);return t===-1?(i.push(e),!0):(i.splice(t,1),!1)}function Cf(){return{renderType:"3D",showSuperCubeChanges:!0,opacity:.8,lineOverCube:!1,useFacePosition:!0,cubeSelfTransparency:!1,showAlgBanner:!1,selectedUnits:[]}}class RM{constructor(e){yn(this,"container");yn(this,"canvas2d");yn(this,"canvas3d",null);yn(this,"algBanner");yn(this,"result",null);yn(this,"pendingRender3DResult",!1);yn(this,"pendingRender2DResult",!1);yn(this,"renderOption",Cf());this.container=e,this.algBanner=document.createElement("div"),this.algBanner.style.textShadow="1px 1px 5px gray",this.algBanner.style.textAlign="center",this.canvas2d=document.createElement("canvas"),this.container.appendChild(this.algBanner),this.container.appendChild(this.canvas2d),this.canvas2d.style.width="100%",this.canvas2d.style.height="100%"}setRenderOption(e){let t=!1,n=!1;e.showAlgBanner!==void 0&&this.renderOption.showAlgBanner!==e.showAlgBanner&&(this.renderOption.showAlgBanner=e.showAlgBanner,this.syncAlgBannerVisibility()),e.opacity!==void 0&&this.renderOption.opacity!==e.opacity&&(this.renderOption.opacity=e.opacity,wh(this.renderOption.opacity)),e.showSuperCubeChanges!==void 0&&this.renderOption.showSuperCubeChanges!==e.showSuperCubeChanges&&(this.renderOption.showSuperCubeChanges=e.showSuperCubeChanges,this.renderOption.renderType==="3D"?Rh(this.renderOption.showSuperCubeChanges):t=!0),e.selectedUnits!==void 0&&!AM(this.renderOption.selectedUnits,e.selectedUnits)&&(this.renderOption.selectedUnits=e.selectedUnits,ls(new Set(this.renderOption.selectedUnits))),e.lineOverCube!==void 0&&this.renderOption.lineOverCube!==e.lineOverCube&&(this.renderOption.lineOverCube=e.lineOverCube,this.renderOption.renderType==="3D"&&(n=!0)),e.cubeSelfTransparency!==void 0&&this.renderOption.cubeSelfTransparency!==e.cubeSelfTransparency&&(this.renderOption.cubeSelfTransparency=e.cubeSelfTransparency,this.renderOption.renderType==="3D"&&(n=!0)),e.useFacePosition!==void 0&&this.renderOption.useFacePosition!==e.useFacePosition&&(this.renderOption.useFacePosition=e.useFacePosition,this.renderOption.renderType==="3D"&&(n=!0)),e.renderType!==void 0&&this.renderOption.renderType!==e.renderType&&(this.renderOption.renderType=e.renderType,e.renderType==="3D"?(this.canvas2d.style.display="none",this.canvas3d&&(this.canvas3d.style.display="block",Ch())):(this.canvas2d.style.display="block",this.canvas3d&&(this.canvas3d.style.display="none",Rf()),t=!0)),this.renderOption.renderType==="3D"&&(n||this.pendingRender3DResult)&&this.result&&this.rerender3D(),this.renderOption.renderType!=="3D"&&(t||this.pendingRender2DResult)&&this.result&&this.rerender2D()}rerender3D(){if(!this.result)throw new Error("3D: No result to render");yM(this.renderOption.lineOverCube),MM(this.renderOption.useFacePosition),SM(this.renderOption.cubeSelfTransparency),this.canvas3d=EM(this.result.N,this.result,this.container),Rh(this.renderOption.showSuperCubeChanges),wh(this.renderOption.opacity),Rc(),Ch(),this.pendingRender3DResult=!1}rerender2D(){if(!this.result)throw new Error("2D: No result to render");qp(this.canvas2d),om(this.renderOption.renderType,this.result,this.canvas2d,this.renderOption.showSuperCubeChanges),this.pendingRender2DResult=!1}syncAlgBannerVisibility(){this.algBanner.style.display=this.renderOption.showAlgBanner?"":"none"}getRenderOption(){return this.renderOption}renderNewResult(e){this.result=e,this.pendingRender3DResult=!0,this.pendingRender2DResult=!0,this.algBanner.innerText=e.alg,this.syncAlgBannerVisibility(),this.renderOption.renderType==="3D"?(this.canvas2d.style.display="none",this.rerender3D()):(this.canvas2d.style.display="block",this.canvas3d&&(this.canvas3d.style.display="none"),this.rerender2D())}toggleSelection(e){const t=wM(this.renderOption.selectedUnits,e);return ls(new Set(this.renderOption.selectedUnits)),t}clearSelection(){this.renderOption.selectedUnits=[],ls(new Set(this.renderOption.selectedUnits))}setHighlightUnit(e){e.length===0?ls(new Set(this.renderOption.selectedUnits)):ls(new Set([...this.renderOption.selectedUnits,e]))}downloadImage(){this.renderOption.renderType==="3D"?TM("cube.png",!0):em(this.canvas2d.getContext("2d"),"cube.png",!0)}onResize(){this.result&&(this.renderOption.renderType==="3D"?bM():this.rerender2D())}}let CM={n:3,alg:"F R U R' U' F'",algParam:"",...Cf()};const ct=PM();let vs;const Ht=new RM(ct.canvasContainer),Lt=LM();function LM(){const i=JSON.parse(window.localStorage.getItem("setting")||"{}"),e=new URLSearchParams(window.location.search),t=JSON.parse(e.get("s")||"{}");return{...CM,...i,...t}}function jn(i={}){Object.assign(Lt,i),Object.assign(Lt,Ht.getRenderOption()),window.localStorage.setItem("setting",JSON.stringify(Lt))}window.onload=function(){document.body.appendChild(ct.app),ct.inputAlg.value=Lt.alg,ct.inputN.value=Lt.n.toString(),ct.inputParam.value=Lt.algParam,Ht.setRenderOption(Lt),No(),Lf(Lt.n,Lt.alg,Lt.algParam),Kn()};function No(){const i=window.innerHeight-ct.canvasContainer.offsetTop-20,t=`${Math.min(i,ct.canvasContainer.clientWidth)}px`;return ct.canvasContainer.style.height!==t?(ct.canvasContainer.style.height=t,!0):!1}function us(i,e){e?(i.classList.add("btn-primary"),i.classList.remove("btn-outline-secondary")):(i.classList.remove("btn-primary"),i.classList.add("btn-outline-secondary"))}window.onresize=function(){No(),Ht.onResize()};function PM(){const i=kn("div","container-fluid my-2");i.id="app";const e=document.createElement("div");e.classList.add("input-group");const t=ja(e,"alg","",fs),n=kn("button","btn btn-outline-secondary input-group-prepend");n.textContent="Alg",n.onclick=()=>UM(),e.prepend(n),t.style.width="50%";const r=ja(e,"N","N",fs),s=ja(e,"Params","Params",fs),a=hn("row justify-content-between mb-2"),o=hn("col-md-10"),c=hn("col-md-2 btn-group");o.append(e),a.append(o,c);const u=On("Inv",()=>{const X=ct.inputAlg.value;X.startsWith("(")&&X.endsWith(")'")?ct.inputAlg.value=X.slice(1,X.length-2):ct.inputAlg.value=`(${X})'`,fs()}),h=On("🔗",()=>{const X=JSON.stringify({...Lt,...Ht.getRenderOption()}),Y=window.location.href.split("?")[0];window.open(Y+"?s="+encodeURIComponent(X),"_blank")},"Share link"),f=On("▶️",()=>{const X=vs.N;window.open(`https://alpha.twizzle.net/explore/?puzzle=${X}x${X}x${X}&alg=${vs.alg}`,"_blank")},"play in alpha.twizzle.net"),d=On("🛈",()=>{window.open("https://github.com/timepp/cube")}),g=On("⬇️",()=>{Ht.downloadImage()},"download image");c.append(u,h,f,d,g);const v=hn("row mb-2");v.classList.add("row");const y=hn("col-12"),p=hn("btn-group"),m=hn("col-4"),R=On("opacity",()=>{const X=jp([1,.8,.2],Lt.opacity);Ht.setRenderOption({opacity:X}),jn(),Kn()}),E=On("center",()=>{const X=!Lt.showSuperCubeChanges;Ht.setRenderOption({showSuperCubeChanges:X}),jn(),Kn()}),A=On("facePosition",()=>{const X=!Lt.useFacePosition;Ht.setRenderOption({useFacePosition:X}),jn(),Kn()}),I=On("over",()=>{const X=!Lt.lineOverCube;Ht.setRenderOption({lineOverCube:X}),jn(),Kn()}),U=On("translucent",()=>{const X=!Lt.cubeSelfTransparency;Ht.setRenderOption({cubeSelfTransparency:X}),jn(),Kn()}),w=On("Alg Banner",()=>{const X=!Lt.showAlgBanner;Ht.setRenderOption({showAlgBanner:X}),jn(),Kn()}),z=NM(),Q=[R,E,A,I,U];p.append(...Q,w),y.append(z),y.append(p),v.append(y,m);const M=hn("row"),C=hn("col-md-8"),K=hn("col-md-4"),ee=hn("border rounded-1 p-1"),O=hn("border rounded-1 p-2");return C.append(ee),K.append(O),M.append(C,K),i.append(a,v,M),{app:i,inputN:r,inputAlg:t,inputParam:s,canvasContainer:ee,renderSwitcher:z,desc:O,showCenter:E,opacity:R,useFacePosition:A,lineOverCube:I,cubeSelfTransparency:U,algBanner:w,buttonsFor3D:Q}}function Kn(){us(ct.showCenter,Lt.showSuperCubeChanges),us(ct.useFacePosition,Lt.useFacePosition),us(ct.lineOverCube,Lt.lineOverCube),us(ct.cubeSelfTransparency,Lt.cubeSelfTransparency),us(ct.algBanner,Lt.showAlgBanner),ct.opacity.textContent=`opacity: ${Lt.opacity}`;for(const e of ct.renderSwitcher.children)e.classList.remove("btn-primary"),e.classList.add("btn-outline-secondary"),e.textContent===Lt.renderType&&(e.classList.add("btn-primary"),e.classList.remove("btn-outline-secondary"));const i=Lt.selectedUnits;for(const e of document.querySelectorAll(".perm")){const t=e;i.indexOf(t.id)>=0?t.style.fontWeight="bold":t.style.fontWeight=""}}function UM(){const[i,e]=$p(ct.app,"container-fluid my-2"),t=kn("div","pb-2 mb-2","border-bottom:1px solid red");i.append(t);const n=kn("button","btn btn-warning me-4");n.textContent="← Back",n.onclick=()=>{e(),No(),Ht.onResize()},t.append(n);const r=kn("div","","display:flex;flex-direction:vertical;flex-wrap:wrap");i.append(r);function s(c){Fh(r);for(const u of c){const h=kn("span","border p-2 me-2 mb-2 small");h.style.cursor="pointer",h.style.width="150px",h.style.background=Yp(u.tags.join(","),100,95),h.append(...jl("red","["+u.tags.join(",")+"] ","black",u.name)),h.append(document.createElement("br")),h.append(...jl("blue",u.algorithm)),h.onclick=function(f){return function(){e(),ct.inputAlg.value=f.algorithm;const d=parseInt(ct.inputN.value),g=ct.inputParam.value.split(/\s+/g).filter(v=>v!=="");if(f.validateParam){const v=f.validateParam(d,g.map(parseInt));ct.inputN.value=v.n.toString(),ct.inputParam.value=v.param.join(" ")}No(),fs()}}(u),r.append(h)}}function a(){let c=ec();for(const u of t.querySelectorAll("button"))u.classList.contains("btn-primary")&&(c=c.filter(h=>h.tags.indexOf(u.textContent)>=0));s(c)}const o=new Set(ec().map(c=>c.tags).flat());for(const c of o){const u=kn("button","btn btn-outline-secondary me-2","border-top-right-radius: 2px;");u.textContent=c,u.onclick=h=>{const f=h.target;f.classList.toggle("btn-primary"),f.classList.toggle("btn-outline-secondary"),h.stopPropagation(),a()},t.append(u)}a()}function ja(i,e,t,n){if(t!==""){const s=document.createElement("span");s.classList.add("input-group-text",`prompt-${e}`),s.appendChild(document.createTextNode(t)),i.appendChild(s)}const r=document.createElement("input");return r.type="text",r.classList.add("form-control"),r.id=e,r.onchange=n,i.appendChild(r),r}function DM(i,e,t){const n=document.createElement("button"),r=e.split(/\s+/g);return n.classList.add(...r),n.onclick=t,n.textContent=i,n.style.whiteSpace="nowrap",n}function IM(i){Ht.setRenderOption({renderType:i}),jn(),Kn()}function NM(){const i=hn("me-3");i.style.display="inline-block";const e="btn btn-outline-secondary rounded-0";for(const t of["1 face","3 faces","5 faces","6 faces","6 faces 2","3D"])i.append(DM(t,e,n=>{const r=n.target;IM(r.textContent);const s=r.textContent==="3D"?"":"none";ct.buttonsFor3D.forEach(a=>a.style.display=s)}));return i}function Lf(i,e,t){const n=sm(e,t.split(/\s+/g).filter(o=>o!==""),i);console.log(n);const r=pc(e),s=document.querySelector(".prompt-Params");r.length===0?(ct.inputParam.style.display="none",s.style.display="none"):(s.style.display="",ct.inputParam.style.display="",ct.inputParam.placeholder=r.join(" "));const a=n.actualParamValues.join(" ");return a!==ct.inputParam.value&&(ct.inputParam.value=a),vs=Fp(n.resolvedAlgorithm,i),OM(vs,i),Ht.renderNewResult(vs),n}function fs(){console.log("onInputChange");const i=parseInt(ct.inputN.value),e=ct.inputAlg.value,t=ct.inputParam.value;Ht.clearSelection();const n=Lf(i,e,t);jn({n:i,alg:e,algParam:n.actualParamValues.join(" ")})}function OM(i,e){const t=(c,u)=>{const h=document.createElement("span");return h.style.color=u,h.style.fontWeight="800",h.textContent=c,h};Fh(ct.desc);const n=document.createElement("div");n.style.maxHeight="300px",n.style.overflowY="auto",n.append("Regulated Alg: "+i.regulatedAlg,document.createElement("br")),n.append("Simplified Alg: "+i.simplifiedAlg,document.createElement("br"));const r=kn("span","bg-light me-2 pe-2"),s=kn("span");r.style.cursor="pointer",r.textContent="Refactored Alg:",r.onclick=()=>{const c=parseInt(r.getAttribute("depth")||"1"),u=Date.now(),h=Dp(e,c,i.ops),f=Date.now();s.textContent=h.alg,r.setAttribute("depth",`${c+1}`),r.textContent=`Refactored Alg(depth ${c}):`,f-u>5e3&&(r.classList.add("bg-danger"),r.classList.remove("bg-light")),h.complete&&(r.textContent="Refactored Alg:",r.onclick=()=>{})},n.append(r,s,document.createElement("br")),ct.desc.append(n),ct.desc.append("Order: "+i.order,document.createElement("br"));const a=hn();let o=0;if(i.cycles.length>100)a.append("cycles are too big to display: "+i.cycles.length);else for(const c of i.cycles){const u=c.map(f=>Qa(e,f)[0]||`${f}`).join(" -> "),h=document.createElement("span");h.classList.add("perm"),h.append(t(`[${c.length}]`,"#0080ff"),document.createTextNode(u+" ")),a.append(h),h.style.cursor="pointer",o++,h.id=`cycle#${o}`,h.onclick=function(f,d){return g=>{Ht.toggleSelection(f),jn(),Kn()}}(`cycle#${o}`),h.onmousedown=f=>{f.detail>1&&f.preventDefault()},h.onmouseenter=function(f,d){return g=>{Ht.setHighlightUnit(f)}}(`cycle#${o}`)}a.append(document.createElement("br")),o=0;for(const c of i.rotates){const u=Qa(e,c.unit.position)[0]||`${c.unit.position}`,h=document.createElement("span");h.classList.add("perm"),h.append(t(`[${c.degree}°] `,"#FF0080"),u+" "),a.append(h),h.style.cursor="pointer",o++,h.id=`cycle#${o}`,h.onclick=function(f,d){return g=>{Ht.toggleSelection(f),jn(),Kn()}}(`rotation#${o}`),h.onmouseenter=function(f,d){return g=>{Ht.setHighlightUnit(f)}}(`rotation#${o}`)}a.onmouseleave=()=>Ht.setHighlightUnit(""),ct.desc.append(a)}});export default FM();
